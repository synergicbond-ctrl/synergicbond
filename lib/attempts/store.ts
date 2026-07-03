import { createClient } from "@/lib/supabase/server";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import { getBlueprint } from "@/lib/examBlueprints";
import {
  AttemptSubmissionSchema,
  rowToAttempt,
  rowToAnswer,
  type AnswerExtra,
  type AttemptMetadata,
  type AttemptRecord,
  type AttemptAnswerRecord,
  type AttemptRow,
  type AttemptAnswerRow,
  type AttemptSource,
  type AttemptSubmission,
  kindForSource,
} from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Attempt persistence (Roadmap V2 · Week 5A). SERVER-ONLY — imports the
// cookie-based Supabase server client, so bundling this into a client
// component fails at build time by design.
//
// Writes to the LIVE attempts / attempt_answers tables (shape documented in
// supabase/migrations/010_attempts.sql). Correctness policy: when an answer
// carries a questionId that resolves in the PYQ SSOT, the correct answer
// comes from the SSOT — the client is not trusted. AI-generated questions
// use the correct answer our own /api/exam returned. Exam sessions score by
// blueprint (+4/−1 etc.); practice/test sessions score 1 mark per question.
// ─────────────────────────────────────────────────────────────────────────────

const QUESTION_INDEX = new Map(ALL_PYQ_QUESTIONS.map((q) => [q.id, q]));

type StoreResult<T> = { data: T; error: null } | { data: null; error: string };

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { supabase, user };
}

/** Hydrate answer records: SSOT options/topic first, metadata extras second. */
function hydrateAnswers(rows: AttemptAnswerRow[], meta: AttemptMetadata | null): AttemptAnswerRecord[] {
  const extras = new Map<number, AnswerExtra>((meta?.answerExtras ?? []).map((e) => [e.order, e]));
  return rows
    .sort((a, b) => a.question_order - b.question_order)
    .map((row) => {
      const extra = extras.get(row.question_order);
      const record = rowToAnswer(row, extra);
      if (!record.options && row.question_id) {
        const ssot = QUESTION_INDEX.get(row.question_id);
        if (ssot?.options) record.options = ssot.options;
        if (!record.topic && ssot) record.topic = ssot.subtopic;
      }
      return record;
    });
}

/** Persist one attempt session + its answers for the signed-in user. */
export async function submitAttempt(
  submission: AttemptSubmission
): Promise<StoreResult<{ attempt: AttemptRecord; answers: AttemptAnswerRecord[] }>> {
  const parsed = AttemptSubmissionSchema.safeParse(submission);
  if (!parsed.success) return { data: null, error: "Invalid attempt payload" };

  const { supabase, user } = await requireUser();
  if (!user) return { data: null, error: "Unauthorized" };

  const { source, exam, title, durationMs, answers } = parsed.data;
  const blueprint = source === "exam" ? getBlueprint(exam) : undefined;
  const marksCorrect = blueprint?.marksCorrect ?? 1;
  const marksWrong = blueprint?.marksWrong ?? 0;

  // Grade server-side: SSOT wins over client-provided correct answers.
  const graded = answers.map((a, i) => {
    const ssot = a.questionId ? QUESTION_INDEX.get(a.questionId) : undefined;
    const correctAnswer = ssot?.answer ?? a.correctAnswer;
    const answered = a.selectedAnswer !== null && a.selectedAnswer !== "";
    const isCorrect = answered && a.selectedAnswer === correctAnswer;
    return {
      row: {
        user_id: user.id,
        question_order: i + 1,
        question_id: a.questionId ?? null,
        chapter_id: ssot?.chapter ?? a.chapter ?? null,
        question_text: ssot?.question ?? a.questionText,
        selected_answer: answered ? (a.selectedAnswer as string) : "",
        correct_answer: correctAnswer,
        is_correct: isCorrect,
        awarded_marks: !answered ? 0 : isCorrect ? marksCorrect : marksWrong,
        max_marks: marksCorrect,
        negative_marks: Math.abs(marksWrong),
        difficulty: ssot?.difficulty ?? a.difficulty ?? null,
        explanation: ssot?.explanation ?? a.explanation ?? null,
      },
      extra: {
        order: i + 1,
        topic: ssot?.subtopic ?? a.topic,
        timeSpentMs: a.timeSpentMs,
        // Snapshot options only when the SSOT can't re-hydrate them (AI questions).
        options: ssot?.options ? undefined : a.options,
      } satisfies AnswerExtra,
    };
  });

  const answeredCount = graded.filter((g) => g.row.selected_answer !== "").length;
  const correctCount = graded.filter((g) => g.row.is_correct).length;
  const metadata: AttemptMetadata = {
    durationMs,
    maxScore: graded.length * marksCorrect,
    unansweredCount: graded.length - answeredCount,
    marking: { correct: marksCorrect, wrong: marksWrong },
    answerExtras: graded.map((g) => g.extra),
  };

  const sessionRow = {
    user_id: user.id,
    kind: kindForSource(source),
    source,
    exam,
    // title is NOT NULL in the live table — derive one when the caller omits it.
    title: title ?? `${exam} ${source === "exam" ? "paper" : source}`,
    status: "completed",
    total: graded.length,
    question_count: graded.length,
    correct_count: correctCount,
    score: graded.reduce((s, g) => s + g.row.awarded_marks, 0),
    accuracy: answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 1000) / 10,
    metadata,
    completed_at: new Date().toISOString(),
  };

  const { data: attemptRow, error: attemptError } = await supabase
    .from("attempts")
    .insert(sessionRow)
    .select()
    .single();
  if (attemptError) {
    console.error("[attempts] session insert failed:", attemptError.message);
    return { data: null, error: attemptError.message };
  }

  const { data: answerRows, error: answersError } = await supabase
    .from("attempt_answers")
    .insert(graded.map((g) => ({ ...g.row, attempt_id: attemptRow.id })))
    .select();
  if (answersError) {
    console.error("[attempts] answers insert failed:", answersError.message);
    await supabase.from("attempts").delete().eq("id", attemptRow.id); // no orphan sessions
    return { data: null, error: answersError.message };
  }

  return {
    data: {
      attempt: rowToAttempt(attemptRow as AttemptRow),
      answers: hydrateAnswers(answerRows as AttemptAnswerRow[], metadata),
    },
    error: null,
  };
}

export interface AttemptListFilter {
  source?: AttemptSource;
  exam?: string;
  limit?: number;
}

/** Signed-in user's attempt sessions, newest first. */
export async function getUserAttempts(filter: AttemptListFilter = {}): Promise<StoreResult<AttemptRecord[]>> {
  const { supabase, user } = await requireUser();
  if (!user) return { data: null, error: "Unauthorized" };

  let query = supabase
    .from("attempts")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(Math.min(filter.limit ?? 100, 500));
  if (filter.source) query = query.eq("source", filter.source);
  if (filter.exam) query = query.eq("exam", filter.exam);

  const { data, error } = await query;
  if (error) {
    console.error("[attempts] getUserAttempts failed:", error.message);
    return { data: null, error: error.message };
  }
  return { data: (data as AttemptRow[]).map(rowToAttempt), error: null };
}

/** Alias kept for the Week 5A contract. */
export async function getAttempts(filter: AttemptListFilter = {}): Promise<StoreResult<AttemptRecord[]>> {
  return getUserAttempts(filter);
}

/** One session + its ordered answers (review mode). RLS scopes to the owner. */
export async function getAttemptWithAnswers(
  attemptId: string
): Promise<StoreResult<{ attempt: AttemptRecord; answers: AttemptAnswerRecord[] }>> {
  const { supabase, user } = await requireUser();
  if (!user) return { data: null, error: "Unauthorized" };

  const { data: attemptRow, error: attemptError } = await supabase
    .from("attempts")
    .select("*")
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .maybeSingle();
  if (attemptError) return { data: null, error: attemptError.message };
  if (!attemptRow) return { data: null, error: "Not found" };

  const { data: answerRows, error: answersError } = await supabase
    .from("attempt_answers")
    .select("*")
    .eq("attempt_id", attemptId)
    .eq("user_id", user.id)
    .order("question_order", { ascending: true });
  if (answersError) return { data: null, error: answersError.message };

  return {
    data: {
      attempt: rowToAttempt(attemptRow as AttemptRow),
      answers: hydrateAnswers(answerRows as AttemptAnswerRow[], (attemptRow as AttemptRow).metadata),
    },
    error: null,
  };
}

/** The signed-in user's answer history on one PYQ question, newest first. */
export async function getQuestionAttempts(questionId: string): Promise<StoreResult<AttemptAnswerRecord[]>> {
  const { supabase, user } = await requireUser();
  if (!user) return { data: null, error: "Unauthorized" };

  const { data, error } = await supabase
    .from("attempt_answers")
    .select("*")
    .eq("user_id", user.id)
    .eq("question_id", questionId)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[attempts] getQuestionAttempts failed:", error.message);
    return { data: null, error: error.message };
  }
  return { data: (data as AttemptAnswerRow[]).map((r) => rowToAnswer(r)), error: null };
}
