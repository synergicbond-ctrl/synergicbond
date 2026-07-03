import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Attempt Layer schema (Roadmap V2 · Week 5A) — SSOT for attempt sessions.
//
// Storage: the LIVE public.attempts / public.attempt_answers tables (see
// supabase/migrations/010_attempts.sql, which documents the as-built shape).
// A submission = one session (exam paper, test answer, practice answer) plus
// per-question answers with question snapshots, so review always renders —
// including AI-generated exam papers whose questions aren't in the PYQ bank.
// For questions WITH a PYQ id the server re-derives the correct answer from
// the SSOT and never trusts the client.
//
// Live-schema notes:
//   • attempts.kind check-constraint allows 'test' | 'practice'; the finer
//     'exam' | 'test' | 'practice' source lives in attempts.source.
//   • attempt_answers.selected_answer is NOT NULL — '' means skipped and is
//     surfaced as null in AttemptAnswerRecord.
//   • options / topic / time-spent / duration / max-score have no columns —
//     they ride in attempts.metadata and re-hydrate from the PYQ SSOT.
// ─────────────────────────────────────────────────────────────────────────────

export const AttemptSourceSchema = z.enum(["exam", "test", "practice"]);
export type AttemptSource = z.infer<typeof AttemptSourceSchema>;

/** attempts.kind check-constraint values (live DB). */
export function kindForSource(source: AttemptSource): "test" | "practice" {
  return source === "practice" ? "practice" : "test";
}

/** One answered (or skipped) question inside a submission. */
export const AnswerInputSchema = z.object({
  /** PYQ SSOT id when the question came from the verified bank. */
  questionId: z.string().optional(),
  questionText: z.string().min(1),
  options: z.record(z.string(), z.string()).optional(),
  /** null = left unanswered (exams). */
  selectedAnswer: z.string().nullable(),
  /** Required for AI-generated questions; ignored when questionId resolves in the SSOT. */
  correctAnswer: z.string().min(1),
  explanation: z.string().optional(),
  chapter: z.string().optional(),
  topic: z.string().optional(),
  difficulty: z.string().optional(),
  timeSpentMs: z.number().int().min(0).max(7_200_000).default(0),
});
export type AnswerInput = z.infer<typeof AnswerInputSchema>;

export const AttemptSubmissionSchema = z.object({
  source: AttemptSourceSchema,
  exam: z.string().min(1),
  title: z.string().max(200).optional(),
  durationMs: z.number().int().min(0).max(24 * 3_600_000).default(0),
  answers: z.array(AnswerInputSchema).min(1).max(200),
});
export type AttemptSubmission = z.infer<typeof AttemptSubmissionSchema>;

/** Per-answer extras persisted in attempts.metadata (no dedicated columns yet). */
export interface AnswerExtra {
  order: number;
  topic?: string;
  timeSpentMs?: number;
  /** Snapshot for AI-generated questions only — PYQ options re-hydrate from the SSOT. */
  options?: Record<string, string>;
}

export interface AttemptMetadata {
  durationMs?: number;
  maxScore?: number;
  unansweredCount?: number;
  marking?: { correct: number; wrong: number };
  answerExtras?: AnswerExtra[];
}

/** Stable session shape consumed by UI and future systems. */
export interface AttemptRecord {
  attemptId: string;
  userId: string;
  source: AttemptSource;
  exam: string;
  title: string | null;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
  maxScore: number;
  accuracy: number;
  durationMs: number;
  submittedAt: string;
}

/** Stable answer shape consumed by UI and future systems. */
export interface AttemptAnswerRecord {
  answerId: string;
  attemptId: string;
  position: number;
  questionId: string | null;
  questionText: string;
  options: Record<string, string> | null;
  selectedAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string | null;
  chapter: string | null;
  topic: string | null;
  difficulty: string | null;
  marksAwarded: number;
  timeSpentMs: number;
}

/* Snake_case row shapes of the LIVE tables. */
export interface AttemptRow {
  id: string;
  user_id: string;
  kind: string;
  title: string | null;
  source: string;
  chapter_id: string | null;
  exam: string;
  status: string;
  score: number;
  total: number;
  correct_count: number;
  question_count: number;
  accuracy: number;
  metadata: AttemptMetadata | null;
  completed_at: string | null;
  created_at: string;
}

export interface AttemptAnswerRow {
  id: string;
  attempt_id: string;
  user_id: string;
  question_order: number;
  question_id: string | null;
  chapter_id: string | null;
  question_text: string;
  selected_answer: string;
  correct_answer: string;
  is_correct: boolean;
  awarded_marks: number;
  max_marks: number;
  negative_marks: number;
  difficulty: string | null;
  explanation: string | null;
  created_at: string;
}

export function rowToAttempt(row: AttemptRow): AttemptRecord {
  const meta = row.metadata ?? {};
  const source: AttemptSource = AttemptSourceSchema.safeParse(row.source).success
    ? (row.source as AttemptSource)
    : "practice";
  const unanswered = meta.unansweredCount ?? 0;
  const answered = row.total - unanswered;
  return {
    attemptId: row.id,
    userId: row.user_id,
    source,
    exam: row.exam,
    title: row.title,
    totalQuestions: row.total,
    answeredCount: answered,
    correctCount: row.correct_count,
    incorrectCount: answered - row.correct_count,
    unansweredCount: unanswered,
    score: Number(row.score),
    maxScore: meta.maxScore ?? row.total,
    accuracy: Number(row.accuracy),
    durationMs: meta.durationMs ?? 0,
    submittedAt: row.completed_at ?? row.created_at,
  };
}

export function rowToAnswer(row: AttemptAnswerRow, extra?: AnswerExtra): AttemptAnswerRecord {
  return {
    answerId: row.id,
    attemptId: row.attempt_id,
    position: row.question_order,
    questionId: row.question_id,
    questionText: row.question_text,
    options: extra?.options ?? null,
    selectedAnswer: row.selected_answer === "" ? null : row.selected_answer,
    correctAnswer: row.correct_answer,
    isCorrect: row.is_correct,
    explanation: row.explanation,
    chapter: row.chapter_id,
    topic: extra?.topic ?? null,
    difficulty: row.difficulty,
    marksAwarded: Number(row.awarded_marks),
    timeSpentMs: extra?.timeSpentMs ?? 0,
  };
}
