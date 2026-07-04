import { buildAnalytics, type AnalyticsReport } from "@/lib/attempts/analytics";
import type { AttemptAnswerRecord } from "@/lib/attempts/schema";
import { classPyqChapters, getCbseChapters } from "./syllabus";
import type { ClassSlug } from "@/lib/boardDashboard";

// ─────────────────────────────────────────────────────────────────────────────
// Predicted Board Score — a transparent projection over REAL attempt data,
// scoped to one CBSE class's chapters. It is an MCQ-accuracy-based projection
// of the 70-mark theory paper, NOT a guarantee, and the model is shown so the
// number is never a black box. Confidence is low until enough of the class's
// questions are attempted, and that is surfaced honestly.
//
// projectedPct = 0.75·accuracy + 0.25·syllabusCoverage   (both 0–100)
// projectedMarks = round(projectedPct/100 · 70)
// ─────────────────────────────────────────────────────────────────────────────

const THEORY_MAX = 70; // CBSE Chemistry theory paper
const CONFIDENCE_MIN = 30; // answered questions on-class before "confident"

export interface BoardScoreChapter {
  chapter: string;
  accuracy: number;
  answered: number;
}

export interface BoardScoreReport {
  hasData: boolean;
  confident: boolean;
  answeredOnClass: number;
  accuracy: number;
  syllabusCoverage: number; // % of class chapters attempted
  projectedPct: number;
  projectedMarks: number; // out of 70
  grade: string;
  band: "strong" | "onTrack" | "early";
  chapters: BoardScoreChapter[]; // worst-first, real accuracy per chapter
  chaptersAttempted: number;
  chaptersTotal: number;
}

function grade(pct: number): string {
  if (pct >= 91) return "A1";
  if (pct >= 81) return "A2";
  if (pct >= 71) return "B1";
  if (pct >= 61) return "B2";
  if (pct >= 51) return "C1";
  if (pct >= 41) return "C2";
  if (pct >= 33) return "D";
  return "E";
}

/** Keep only answers that belong to this class's chapters. */
export function scopeAnswersToClass(answers: AttemptAnswerRecord[], cls: ClassSlug): AttemptAnswerRecord[] {
  const scope = new Set<string>(classPyqChapters(cls));
  return answers.filter((a) => a.chapter && scope.has(a.chapter));
}

export function buildBoardScore(answers: AttemptAnswerRecord[], cls: ClassSlug): BoardScoreReport {
  const scoped = scopeAnswersToClass(answers, cls);
  const analytics: AnalyticsReport = buildAnalytics(scoped);
  const chaptersTotal = getCbseChapters(cls).length;

  const accuracy = analytics.overall.accuracy;
  const chaptersAttempted = analytics.masteryMap.length;
  const syllabusCoverage = chaptersTotal === 0 ? 0 : Math.round((chaptersAttempted / chaptersTotal) * 1000) / 10;

  const projectedPct = Math.round((0.75 * accuracy + 0.25 * syllabusCoverage) * 10) / 10;
  const projectedMarks = Math.round((projectedPct / 100) * THEORY_MAX);

  return {
    hasData: analytics.hasData,
    confident: analytics.questionsAnswered >= CONFIDENCE_MIN,
    answeredOnClass: analytics.questionsAnswered,
    accuracy,
    syllabusCoverage,
    projectedPct,
    projectedMarks,
    grade: grade(projectedPct),
    band: projectedPct >= 70 ? "strong" : projectedPct >= 40 ? "onTrack" : "early",
    chapters: analytics.masteryMap.map((c) => ({ chapter: c.chapter, accuracy: c.accuracy, answered: c.answered })),
    chaptersAttempted,
    chaptersTotal,
  };
}
