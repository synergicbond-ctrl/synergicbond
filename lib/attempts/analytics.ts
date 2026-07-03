import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { summarizeAnswers, type AccuracyBucket } from "./scoring";
import type { AttemptAnswerRecord } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Analytics Engine V1 (Roadmap V2 · Week 8). Pure reducer over attempt_answers
// — no new table, no fabricated numbers. Produces overall accuracy, a
// chapter-level Syllabus Mastery Map (Red / Yellow / Green), weak topics, and
// honest syllabus coverage. Chapters/topics with too few attempts to judge are
// shown as "Building", never coloured.
//
// Replaces the inorganic-only Periodic Table analytics with a map that spans
// all of chemistry, per the roadmap.
// ─────────────────────────────────────────────────────────────────────────────

export type MasteryBand = "green" | "yellow" | "red" | "building";

/** Minimum answered questions before a chapter/topic gets a colour. */
const MIN_ATTEMPTS_TO_BAND = 3;
const GREEN_MIN = 75; // ≥75% accuracy → strong
const YELLOW_MIN = 50; // 50–74% → shaky; <50% → weak

export interface MasteryChapter {
  chapter: string;
  band: MasteryBand;
  accuracy: number;
  answered: number;
  correct: number;
}

export interface WeakTopic {
  topic: string;
  accuracy: number;
  answered: number;
}

export interface AnalyticsReport {
  hasData: boolean;
  overall: AccuracyBucket;
  /** Distinct questions answered across all attempts. */
  questionsAnswered: number;
  masteryMap: MasteryChapter[];
  bandCounts: Record<MasteryBand, number>;
  weakTopics: WeakTopic[];
  coverage: { attemptedChapters: number; totalChapters: number };
}

function band(accuracy: number, answered: number): MasteryBand {
  if (answered < MIN_ATTEMPTS_TO_BAND) return "building";
  if (accuracy >= GREEN_MIN) return "green";
  if (accuracy >= YELLOW_MIN) return "yellow";
  return "red";
}

const TOTAL_SYLLABUS_CHAPTERS = (masterSyllabus as unknown as unknown[]).length;

export function buildAnalytics(answers: AttemptAnswerRecord[]): AnalyticsReport {
  const summary = summarizeAnswers(answers);
  const answeredRows = answers.filter((a) => a.selectedAnswer !== null);

  const masteryMap: MasteryChapter[] = Object.entries(summary.chapterAccuracy)
    .map(([chapter, b]) => ({
      chapter,
      accuracy: b.accuracy,
      answered: b.total,
      correct: b.correct,
      band: band(b.accuracy, b.total),
    }))
    // worst first so weak chapters surface at the top
    .sort((a, b) => a.accuracy - b.accuracy || b.answered - a.answered);

  const bandCounts: Record<MasteryBand, number> = { green: 0, yellow: 0, red: 0, building: 0 };
  for (const c of masteryMap) bandCounts[c.band] += 1;

  const weakTopics: WeakTopic[] = Object.entries(summary.topicAccuracy)
    .filter(([, b]) => b.total >= MIN_ATTEMPTS_TO_BAND && b.accuracy < GREEN_MIN)
    .map(([topic, b]) => ({ topic, accuracy: b.accuracy, answered: b.total }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 8);

  return {
    hasData: answeredRows.length > 0,
    overall: { total: summary.total, correct: summary.correct, incorrect: summary.incorrect, accuracy: summary.accuracy },
    questionsAnswered: answeredRows.length,
    masteryMap,
    bandCounts,
    weakTopics,
    coverage: { attemptedChapters: masteryMap.length, totalChapters: TOTAL_SYLLABUS_CHAPTERS },
  };
}
