"use client";

import type { PYQQuestion } from "@/lib/pyq";
import type { AttemptSource, AttemptSubmission } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Client-side attempt recording (Roadmap V2 · Week 5A).
//
// recordAttempt  — fire-and-forget single-question session (practice / test
//                  answer capture). Signed-out users still get in-UI scoring;
//                  the 401 is swallowed so answering never blocks.
// submitAttempt  — awaited full-session submission (exam papers). Returns the
//                  saved attempt id, or null when signed out / offline.
// Durations are computed here at send time so component render paths stay
// pure (React Compiler purity rule).
// ─────────────────────────────────────────────────────────────────────────────

async function postSubmission(submission: AttemptSubmission): Promise<{ attemptId: string } | null> {
  try {
    const res = await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      keepalive: true,
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.attempt?.attemptId ? { attemptId: data.attempt.attemptId } : null;
  } catch {
    return null;
  }
}

/** Record a single answered PYQ from practice or a test run. Fire-and-forget. */
export function recordAttempt(input: {
  question: PYQQuestion;
  source: Exclude<AttemptSource, "exam">;
  selectedAnswer: string;
  /** Date.now() when the question became answerable; 0/undefined → duration 0. */
  shownAtMs?: number;
  /**
   * Alternative to shownAtMs for sequential flows (test runs): the duration is
   * read from ref.current and the ref is re-stamped to now — keeping component
   * event handlers free of Date.now() (React Compiler purity rule).
   */
  shownAtRef?: { current: number };
}): void {
  const now = Date.now();
  const startMs = input.shownAtRef ? input.shownAtRef.current : (input.shownAtMs ?? 0);
  const timeSpentMs = startMs > 0 ? Math.max(0, now - startMs) : 0;
  if (input.shownAtRef) input.shownAtRef.current = now;

  void postSubmission({
    source: input.source,
    exam: input.question.exam,
    durationMs: timeSpentMs,
    answers: [
      {
        questionId: input.question.id,
        questionText: input.question.question,
        options: input.question.options,
        selectedAnswer: input.selectedAnswer,
        correctAnswer: input.question.answer,
        chapter: input.question.chapter,
        topic: input.question.subtopic,
        difficulty: input.question.difficulty,
        timeSpentMs,
      },
    ],
  });
}

/** Submit a full exam session. Awaited — the exam UI shows save state honestly. */
export async function submitAttempt(submission: AttemptSubmission): Promise<{ attemptId: string } | null> {
  return postSubmission(submission);
}

// ── Timing helpers ────────────────────────────────────────────────────────────
// Impure wall-clock reads live here (event-handler flows only) so component
// render paths stay clean under the React Compiler purity rule.

/** Stamp refs with the current time (exam start, question shown). */
export function stampNow(...refs: Array<{ current: number }>): void {
  const now = Date.now();
  for (const r of refs) r.current = now;
}

/** Add the time since `shownAtRef` to bucket[index], then re-stamp the ref. */
export function bankElapsed(
  shownAtRef: { current: number },
  bucket: Record<number, number>,
  index: number
): void {
  const now = Date.now();
  if (shownAtRef.current > 0) bucket[index] = (bucket[index] ?? 0) + (now - shownAtRef.current);
  shownAtRef.current = now;
}

/** Milliseconds since a stamped start time (0 if never stamped). */
export function elapsedMs(startMs: number): number {
  return startMs > 0 ? Math.max(0, Date.now() - startMs) : 0;
}
