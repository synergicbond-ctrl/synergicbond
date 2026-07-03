import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQQuestion } from "@/lib/pyq";
import type { AttemptAnswerRecord } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Mistake Journal (Roadmap V2 · Week 6). Pure reducer over attempt_answers —
// no new data pipeline. Reduces the answer feed to "questions whose LATEST
// answer was wrong", categorises each by what the question tests, and rolls up
// weak concepts. A question drops out automatically once its latest attempt is
// correct (the reattempt loop).
//
// Category is derived from PYQ metadata (question type / tags), i.e. "what the
// question tests" — an honest proxy, since the app captures no per-question
// reason-for-error signal.
// ─────────────────────────────────────────────────────────────────────────────

export type MistakeCategory = "Concept" | "Calculation" | "Memory";

export const MISTAKE_CATEGORIES: { key: MistakeCategory; label: string; blurb: string }[] = [
  { key: "Concept", label: "Concept Errors", blurb: "Understanding-based questions you missed." },
  { key: "Calculation", label: "Calculation Errors", blurb: "Numerical & formula-based questions." },
  { key: "Memory", label: "Memory / Recall Errors", blurb: "NCERT facts, reagents & exceptions." },
];

export interface MistakeItem {
  questionId: string;
  question: PYQQuestion;
  category: MistakeCategory;
  chapter: string;
  topic: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  answeredAt: string;
  timesWrong: number;
}

export interface WeakConcept {
  topic: string;
  chapter: string;
  wrong: number;
}

export interface MistakeJournal {
  total: number;
  categoryCounts: Record<MistakeCategory, number>;
  byCategory: Record<MistakeCategory, MistakeItem[]>;
  weakConcepts: WeakConcept[];
  reattemptQueue: MistakeItem[];
  /** Wrong AI-exam answers with no PYQ id — counted, but not reattemptable. */
  unmappedWrong: number;
}

const INDEX = new Map(ALL_PYQ_QUESTIONS.map((q) => [q.id, q]));

export function categorize(q: PYQQuestion): MistakeCategory {
  if (q.questionType === "Integer" || q.questionType === "Numerical" || q.formulas.length > 0) {
    return "Calculation";
  }
  if (
    q.ncertDirect ||
    q.reagents.length > 0 ||
    q.exceptions.length > 0 ||
    q.ncertLines.length > 0 ||
    q.questionType === "Assertion-Reason"
  ) {
    return "Memory";
  }
  return "Concept";
}

/** `answers` must be newest-first (getAllUserAnswers returns that order). */
export function buildMistakeJournal(answers: AttemptAnswerRecord[]): MistakeJournal {
  const seen = new Map<string, { latest: AttemptAnswerRecord; timesWrong: number }>();
  let unmappedWrong = 0;

  for (const a of answers) {
    if (a.selectedAnswer === null) continue; // skipped ≠ mistake
    if (!a.questionId || !INDEX.has(a.questionId)) {
      if (!a.isCorrect) unmappedWrong++;
      continue;
    }
    const e = seen.get(a.questionId);
    if (!e) {
      seen.set(a.questionId, { latest: a, timesWrong: a.isCorrect ? 0 : 1 }); // first = latest (desc order)
    } else if (!a.isCorrect) {
      e.timesWrong++;
    }
  }

  const items: MistakeItem[] = [];
  for (const [questionId, { latest, timesWrong }] of seen) {
    if (latest.isCorrect) continue; // fixed on the most recent attempt → not a current mistake
    const question = INDEX.get(questionId)!;
    items.push({
      questionId,
      question,
      category: categorize(question),
      chapter: question.chapter,
      topic: question.subtopic,
      selectedAnswer: latest.selectedAnswer,
      correctAnswer: question.answer,
      answeredAt: latest.answeredAt,
      timesWrong: Math.max(1, timesWrong),
    });
  }

  // Newest mistakes first.
  items.sort((a, b) => (a.answeredAt < b.answeredAt ? 1 : -1));

  const byCategory: Record<MistakeCategory, MistakeItem[]> = { Concept: [], Calculation: [], Memory: [] };
  for (const it of items) byCategory[it.category].push(it);
  const categoryCounts = {
    Concept: byCategory.Concept.length,
    Calculation: byCategory.Calculation.length,
    Memory: byCategory.Memory.length,
  };

  // Weak concepts: subtopics with the most current mistakes.
  const weakMap = new Map<string, WeakConcept>();
  for (const it of items) {
    const key = `${it.chapter}::${it.topic}`;
    const w = weakMap.get(key) ?? { topic: it.topic, chapter: it.chapter, wrong: 0 };
    w.wrong++;
    weakMap.set(key, w);
  }
  const weakConcepts = [...weakMap.values()].sort((a, b) => b.wrong - a.wrong).slice(0, 8);

  return {
    total: items.length,
    categoryCounts,
    byCategory,
    weakConcepts,
    reattemptQueue: items,
    unmappedWrong,
  };
}
