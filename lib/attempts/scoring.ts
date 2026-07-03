import type { AttemptAnswerRecord } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Scoring service (Roadmap V2 · Week 5A). Pure functions over answer records —
// no I/O, usable on server and client. Consumed by Memory Engine, Mistake
// Journal, Analytics, and Readiness Reports; every number is derived from
// real answers, never fabricated.
// ─────────────────────────────────────────────────────────────────────────────

export interface AccuracyBucket {
  total: number;
  correct: number;
  incorrect: number;
  /** 0–100, one decimal. Skipped questions don't count against accuracy. */
  accuracy: number;
}

export interface AttemptSummary extends AccuracyBucket {
  unanswered: number;
  chapterAccuracy: Record<string, AccuracyBucket>;
  topicAccuracy: Record<string, AccuracyBucket>;
}

function newBucket(): AccuracyBucket {
  return { total: 0, correct: 0, incorrect: 0, accuracy: 0 };
}

function addTo(bucket: AccuracyBucket, isCorrect: boolean) {
  bucket.total += 1;
  if (isCorrect) bucket.correct += 1;
  else bucket.incorrect += 1;
}

function finalize(bucket: AccuracyBucket) {
  bucket.accuracy = bucket.total === 0 ? 0 : Math.round((bucket.correct / bucket.total) * 1000) / 10;
}

/** Aggregate answers into overall, per-chapter, and per-topic accuracy. */
export function summarizeAnswers(answers: AttemptAnswerRecord[]): AttemptSummary {
  const summary: AttemptSummary = { ...newBucket(), unanswered: 0, chapterAccuracy: {}, topicAccuracy: {} };

  for (const a of answers) {
    if (a.selectedAnswer === null) {
      summary.unanswered += 1;
      continue;
    }
    addTo(summary, a.isCorrect);
    if (a.chapter) {
      (summary.chapterAccuracy[a.chapter] ??= newBucket());
      addTo(summary.chapterAccuracy[a.chapter], a.isCorrect);
    }
    if (a.topic) {
      (summary.topicAccuracy[a.topic] ??= newBucket());
      addTo(summary.topicAccuracy[a.topic], a.isCorrect);
    }
  }

  finalize(summary);
  Object.values(summary.chapterAccuracy).forEach(finalize);
  Object.values(summary.topicAccuracy).forEach(finalize);
  return summary;
}

/**
 * PYQ ids the user has answered correctly at least once — the input shape the
 * existing lib/pyq detectWeakAreas(questions, solvedIds) expects.
 */
export function solvedIdsFromAnswers(answers: AttemptAnswerRecord[]): Set<string> {
  const solved = new Set<string>();
  for (const a of answers) if (a.isCorrect && a.questionId) solved.add(a.questionId);
  return solved;
}

/** Answers wrong on the latest try per PYQ question — the future Mistake Journal feed. */
export function latestWrongAnswers(answers: AttemptAnswerRecord[]): AttemptAnswerRecord[] {
  const latest = new Map<string, AttemptAnswerRecord>();
  for (const a of answers) {
    if (!a.questionId || a.selectedAnswer === null) continue;
    latest.set(a.questionId, a); // callers pass newest-first or per-session order; last write wins per question
  }
  return [...latest.values()].filter((a) => !a.isCorrect);
}
