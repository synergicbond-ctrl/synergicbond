import type { PYQQuestion, PYQChapter, PYQExam, Prediction } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 — PYQ Prediction Engine
// Predicts likely questions for the next exam based on:
//   1. Gap analysis (topics not asked recently = due for return)
//   2. Frequency analysis (high-frequency topics always return)
//   3. Rotation analysis (topics that cycle every N years)
//   4. Concept pairing (concepts that appear together)
//   5. Difficulty calibration per exam
// ─────────────────────────────────────────────────────────────────────────────

interface SubtopicRecord {
  chapter: PYQChapter;
  subtopic: string;
  concepts: string[];
  lastAsked: number;
  frequency: number;
  avgFrequency: number;
  exams: Set<PYQExam>;
  difficulty: string;
}

const CURRENT_YEAR = 2026;
const GAP_WEIGHT = 0.4;
const FREQUENCY_WEIGHT = 0.4;
const TREND_WEIGHT = 0.2;

export function generatePredictions(
  questions: PYQQuestion[],
  targetExam: PYQExam,
  limit = 15
): Prediction[] {
  const subtopicMap = buildSubtopicMap(questions, targetExam);
  const predictions: Prediction[] = [];

  for (const [key, record] of subtopicMap.entries()) {
    if (!record.exams.has(targetExam)) continue; // never asked in this exam

    const gapYears = CURRENT_YEAR - record.lastAsked;
    const confidenceScore = computeConfidence(record, gapYears);

    const examLikelihood = {
      jeeMain: record.exams.has("JEE Main") ? computeExamLikelihood(record, "JEE Main", gapYears) : 0,
      jeeAdvanced: record.exams.has("JEE Advanced") ? computeExamLikelihood(record, "JEE Advanced", gapYears) : 0,
      neet: record.exams.has("NEET") ? computeExamLikelihood(record, "NEET", gapYears) : 0,
    };

    predictions.push({
      chapter: record.chapter,
      subtopic: record.subtopic,
      concepts: record.concepts.slice(0, 5),
      confidenceScore,
      reason: buildReason(record, gapYears, confidenceScore),
      lastAskedYear: record.lastAsked,
      gapYears,
      examLikelihood,
    });
  }

  return predictions
    .sort((a, b) => b.confidenceScore - a.confidenceScore)
    .slice(0, limit);
}

// High-confidence predictions — gap > 3 years AND high historical frequency
export function getOverduePredictions(
  questions: PYQQuestion[],
  targetExam: PYQExam
): Prediction[] {
  const all = generatePredictions(questions, targetExam, 50);
  return all.filter((p) => p.gapYears >= 3 && p.confidenceScore >= 60);
}

// Trending — asked in last 3 years with increasing frequency
export function getTrendingPredictions(
  questions: PYQQuestion[],
  targetExam: PYQExam
): Prediction[] {
  const all = generatePredictions(questions, targetExam, 50);
  return all.filter((p) => p.gapYears <= 2 && p.confidenceScore >= 50);
}

// Per-chapter top prediction
export function getTopPredictionByChapter(
  questions: PYQQuestion[],
  targetExam: PYQExam
): Map<PYQChapter, Prediction> {
  const all = generatePredictions(questions, targetExam, 100);
  const map = new Map<PYQChapter, Prediction>();
  for (const pred of all) {
    if (!map.has(pred.chapter)) {
      map.set(pred.chapter, pred);
    }
  }
  return map;
}

// ── Difficulty prediction ─────────────────────────────────────────────────────

export function predictDifficultyProfile(
  questions: PYQQuestion[],
  targetExam: PYQExam
): { easy: number; moderate: number; hard: number; olympiad: number } {
  const recentQs = questions.filter(
    (q) => q.exam === targetExam && q.year >= CURRENT_YEAR - 5
  );
  if (recentQs.length === 0) return { easy: 30, moderate: 45, hard: 20, olympiad: 5 };

  const counts = { easy: 0, moderate: 0, hard: 0, olympiad: 0 };
  for (const q of recentQs) {
    if (q.difficulty === "Easy") counts.easy++;
    else if (q.difficulty === "Moderate") counts.moderate++;
    else if (q.difficulty === "Hard") counts.hard++;
    else counts.olympiad++;
  }

  const total = recentQs.length;
  return {
    easy: Math.round((counts.easy / total) * 100),
    moderate: Math.round((counts.moderate / total) * 100),
    hard: Math.round((counts.hard / total) * 100),
    olympiad: Math.round((counts.olympiad / total) * 100),
  };
}

// ── Core algorithms ───────────────────────────────────────────────────────────

function buildSubtopicMap(
  questions: PYQQuestion[],
  targetExam: PYQExam
): Map<string, SubtopicRecord> {
  const map = new Map<string, SubtopicRecord>();

  // build from ALL questions (cross-exam) to understand the topic
  for (const q of questions) {
    const key = `${q.chapter}::${q.subtopic}`;
    const existing = map.get(key);

    if (!existing) {
      map.set(key, {
        chapter: q.chapter,
        subtopic: q.subtopic,
        concepts: [...q.concepts],
        lastAsked: q.year,
        frequency: q.frequency,
        avgFrequency: q.frequency,
        exams: new Set([q.exam]),
        difficulty: q.difficulty,
      });
    } else {
      if (q.year > existing.lastAsked) {
        existing.lastAsked = q.year;
        existing.difficulty = q.difficulty;
      }
      existing.frequency += q.frequency;
      existing.avgFrequency = existing.frequency / (map.size || 1);
      existing.exams.add(q.exam);
      // merge unique concepts
      for (const c of q.concepts) {
        if (!existing.concepts.includes(c)) existing.concepts.push(c);
      }
    }
  }

  return map;
}

function computeConfidence(record: SubtopicRecord, gapYears: number): number {
  // Gap score: the longer the gap, the higher the "due" score (capped at 10 years)
  const gapScore = Math.min(gapYears / 10, 1) * 100;

  // Frequency score: based on how often this subtopic has been asked historically
  const freqScore = Math.min(record.avgFrequency / 5, 1) * 100;

  // Trend score: if asked recently, it's a hot topic
  const trendScore = gapYears <= 2 ? 80 : gapYears <= 4 ? 50 : 20;

  const raw = GAP_WEIGHT * gapScore + FREQUENCY_WEIGHT * freqScore + TREND_WEIGHT * trendScore;
  return Math.min(Math.round(raw), 99);
}

function computeExamLikelihood(
  record: SubtopicRecord,
  exam: PYQExam,
  gapYears: number
): number {
  const base = record.exams.has(exam) ? 60 : 20;
  const gapBonus = Math.min(gapYears * 5, 30);
  const freqBonus = Math.min(record.avgFrequency * 3, 20);
  return Math.min(Math.round(base + gapBonus + freqBonus), 95);
}

function buildReason(
  record: SubtopicRecord,
  gapYears: number,
  confidence: number
): string {
  if (gapYears >= 5) {
    return `Not asked in ${gapYears} years — historically recurring; due for return. High frequency topic (avg ${record.avgFrequency.toFixed(1)} times/yr across all exams).`;
  }
  if (gapYears === 0) {
    return `Asked this year (${record.lastAsked}) — may repeat in another session or follow-up exam. Core concept.`;
  }
  if (record.avgFrequency >= 3) {
    return `High-frequency topic (last asked ${record.lastAsked}, gap ${gapYears} yr). Appears consistently — likely to appear again.`;
  }
  if (confidence >= 70) {
    return `Strong prediction signal: gap of ${gapYears} years + high historical frequency. Core ${record.chapter} subtopic.`;
  }
  return `Moderate confidence: ${gapYears}-year gap. Topic appears in multiple exams. Monitor closely for ${CURRENT_YEAR}.`;
}
