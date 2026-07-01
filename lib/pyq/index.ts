// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 — PYQ Intelligence Engine — Main Index
// Single import point for the entire PYQ system.
// ─────────────────────────────────────────────────────────────────────────────

export type {
  PYQQuestion,
  PYQExam,
  PYQChapter,
  PYQDifficulty,
  ChapterStats,
  TrendDataPoint,
  ConceptFrequency,
  Prediction,
  WeakArea,
  SearchResult,
  PYQFilter,
} from "./schema";

export { PYQ_SCHEMA_VERSION } from "./schema";

// Question databases
export { JEE_MAIN_QUESTIONS } from "./questions/jeeMain";
export { JEE_ADVANCED_QUESTIONS } from "./questions/jeeAdvanced";
export { NEET_QUESTIONS } from "./questions/neet";

// Analytics
export {
  getChapterStats,
  getAllChapterStats,
  getConceptFrequencies,
  getMostAskedConcepts,
  getYearlyTrend,
  getExamWiseDistribution,
  getDifficultyDistribution,
  getSubtopicStats,
  getChapterRanking,
  getMostAskedExceptions,
  getMostAskedReagents,
  getNCERTDirectQuestions,
  getTrendingConcepts,
} from "./analytics";

// Prediction
export {
  generatePredictions,
  getOverduePredictions,
  getTrendingPredictions,
  getTopPredictionByChapter,
  predictDifficultyProfile,
} from "./prediction";

// Search
export {
  searchPYQ,
  filterPYQ,
  getByChapter,
  getByExam,
  getByDifficulty,
  getByYear,
  getByReagent,
  getByReaction,
  getByException,
  getNCERTDirect,
  getTrending,
  detectWeakAreas,
} from "./search";

// ── Aggregated database ───────────────────────────────────────────────────────
// Single source of truth — import ALL_PYQ_QUESTIONS wherever the full DB is needed.

import { JEE_MAIN_QUESTIONS } from "./questions/jeeMain";
import { JEE_ADVANCED_QUESTIONS } from "./questions/jeeAdvanced";
import { NEET_QUESTIONS } from "./questions/neet";

export const ALL_PYQ_QUESTIONS = [
  ...JEE_MAIN_QUESTIONS,
  ...JEE_ADVANCED_QUESTIONS,
  ...NEET_QUESTIONS,
];

// Quick stats on load
export const PYQ_DB_STATS = {
  total:       ALL_PYQ_QUESTIONS.length,
  jeeMain:     JEE_MAIN_QUESTIONS.length,
  jeeAdvanced: JEE_ADVANCED_QUESTIONS.length,
  neet:        NEET_QUESTIONS.length,
  chaptersCount: new Set(ALL_PYQ_QUESTIONS.map((q) => q.chapter)).size,
  yearRange: {
    from: Math.min(...ALL_PYQ_QUESTIONS.map((q) => q.year)),
    to:   Math.max(...ALL_PYQ_QUESTIONS.map((q) => q.year)),
  },
} as const;

// ── Convenience one-liners ────────────────────────────────────────────────────
// These are the most common entry points for UI components and AI routes.

import {
  getChapterStats,
  getAllChapterStats,
  getMostAskedConcepts,
  getYearlyTrend,
  getMostAskedExceptions,
  getMostAskedReagents,
  getTrendingConcepts,
} from "./analytics";

import {
  generatePredictions,
  getOverduePredictions,
} from "./prediction";

import { searchPYQ, filterPYQ } from "./search";

import type { PYQExam, PYQChapter, PYQFilter } from "./schema";

/** Chapter intelligence report — single chapter full analysis */
export function chapterIntelligence(chapter: PYQChapter) {
  return getChapterStats(ALL_PYQ_QUESTIONS, chapter);
}

/** Full intelligence report — all chapters ranked by frequency */
export function fullIntelligenceReport() {
  return getAllChapterStats(ALL_PYQ_QUESTIONS);
}

/** Top 20 most asked concepts across all exams */
export function topConcepts(limit = 20) {
  return getMostAskedConcepts(ALL_PYQ_QUESTIONS, limit);
}

/** Yearly trend for any chapter or overall */
export function yearlyTrend(chapter?: PYQChapter) {
  return getYearlyTrend(ALL_PYQ_QUESTIONS, chapter);
}

/** Predict next exam questions for a target exam */
export function predictNext(exam: PYQExam, limit = 15) {
  return generatePredictions(ALL_PYQ_QUESTIONS, exam, limit);
}

/** Overdue predictions — topics not asked recently but historically high-frequency */
export function overdueTopics(exam: PYQExam) {
  return getOverduePredictions(ALL_PYQ_QUESTIONS, exam);
}

/** Search PYQ by free text + optional filters */
export function pyqSearch(query: string, filter?: PYQFilter, limit = 20) {
  return searchPYQ(ALL_PYQ_QUESTIONS, query, filter, limit);
}

/** Get questions for a specific exam with optional date range */
export function pyqFilter(filter: PYQFilter) {
  return filterPYQ(ALL_PYQ_QUESTIONS, filter);
}

/** Most asked exceptions across all exams */
export function topExceptions(limit = 15) {
  return getMostAskedExceptions(ALL_PYQ_QUESTIONS, limit);
}

/** Most asked reagents across all exams */
export function topReagents(limit = 15) {
  return getMostAskedReagents(ALL_PYQ_QUESTIONS, limit);
}

/** Trending topics (asked in last 3 years) */
export function trendingNow() {
  return getTrendingConcepts(ALL_PYQ_QUESTIONS, 3);
}
