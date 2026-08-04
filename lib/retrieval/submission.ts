// lib/retrieval/submission.ts — pure mapping from a retrieval interaction to
// the EXISTING attempt submission shape (Phase 4 of the IA rollout).
//
// Reuse-first, per the approved migration map: no learning_events table, no
// new columns. An embedded check is an attempts row with source "embedded"
// (kind grades as 'practice'); concept id rides in the answer's topic field,
// confidence rides in metadata.answerExtras — all pre-existing structures.

import type { AttemptSubmission } from "@/lib/attempts/schema";
import type { RetrievalItem, RetrievalResult } from "@/components/retrieval/types";

export interface RetrievalContext {
  /** Stable lesson/surface id, e.g. "ceq-7-4" — becomes the attempt title. */
  contextId: string;
  /** Program string the attempt layer already uses ("jee", "neet", …). */
  exam: string;
  /** Chapter id for the answer row, e.g. "chemical-equilibrium". */
  chapterId?: string;
}

/** Self-graded answers are stored as this marker pair. */
export const SELF_GRADED_CORRECT = "recalled";
export const SELF_GRADED_MISSED = "missed";

/**
 * Build the AttemptSubmission for one answered retrieval item. Pure —
 * callers add transport. Server-side grading still applies: for MCQ the
 * stored correct answer is the option id; for self-graded the marker pair
 * makes is_correct mirror the student's own verdict.
 */
export function buildRetrievalSubmission(
  item: RetrievalItem,
  result: RetrievalResult,
  context: RetrievalContext
): AttemptSubmission {
  const isMcq = item.mode === "mcq";
  const options = isMcq
    ? Object.fromEntries((item.options ?? []).map((o) => [o.id, o.label]))
    : undefined;
  return {
    source: "embedded",
    exam: context.exam,
    title: `embedded:${context.contextId}`,
    durationMs: Math.min(result.elapsedMs ?? 0, 24 * 3_600_000),
    answers: [
      {
        questionText: item.prompt,
        options,
        selectedAnswer: isMcq
          ? (result.selectedOptionId ?? null)
          : result.correct
            ? SELF_GRADED_CORRECT
            : SELF_GRADED_MISSED,
        correctAnswer: isMcq
          ? (item.correctOptionId ?? "")
          : SELF_GRADED_CORRECT,
        explanation: item.explanation,
        chapter: context.chapterId,
        topic: item.conceptId,
        timeSpentMs: Math.min(result.elapsedMs ?? 0, 7_200_000),
        confident: result.confident,
      },
    ],
  };
}
