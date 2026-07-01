import type {
  PYQQuestion,
  PYQChapter,
  PYQExam,
  PYQDifficulty,
  ChapterStats,
  TrendDataPoint,
  ConceptFrequency,
} from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 — PYQ Analytics Engine
// Chapter intelligence, concept frequency, trend analysis.
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTY_SCORE: Record<PYQDifficulty, number> = {
  Easy: 1, Moderate: 2, Hard: 3, Olympiad: 4,
};

// ── Chapter-wise analysis ────────────────────────────────────────────────────

export function getChapterStats(
  questions: PYQQuestion[],
  chapter: PYQChapter
): ChapterStats {
  const qs = questions.filter((q) => q.chapter === chapter);
  if (qs.length === 0) {
    return emptyChapterStats(chapter);
  }

  const byExam = { jeeMain: 0, jeeAdvanced: 0, neet: 0 };
  const byDifficulty: Record<PYQDifficulty, number> = {
    Easy: 0, Moderate: 0, Hard: 0, Olympiad: 0,
  };
  const byYear: Record<string, number> = {};
  const subtopicCount: Record<string, number> = {};
  const conceptCount: Record<string, number> = {};
  const reactionCount: Record<string, number> = {};
  const reagentCount: Record<string, number> = {};
  const exceptionCount: Record<string, number> = {};

  let difficultySum = 0;
  let lastAsked = 0;

  for (const q of qs) {
    // exam
    if (q.exam === "JEE Main") byExam.jeeMain++;
    else if (q.exam === "JEE Advanced") byExam.jeeAdvanced++;
    else byExam.neet++;

    // difficulty
    byDifficulty[q.difficulty]++;
    difficultySum += DIFFICULTY_SCORE[q.difficulty];

    // year
    const yr = String(q.year);
    byYear[yr] = (byYear[yr] ?? 0) + 1;
    if (q.year > lastAsked) lastAsked = q.year;

    // subtopics
    subtopicCount[q.subtopic] = (subtopicCount[q.subtopic] ?? 0) + 1;

    // concepts
    for (const c of q.concepts) {
      conceptCount[c] = (conceptCount[c] ?? 0) + 1;
    }
    // reactions
    for (const r of q.reactions) {
      reactionCount[r] = (reactionCount[r] ?? 0) + 1;
    }
    // reagents
    for (const r of q.reagents) {
      reagentCount[r] = (reagentCount[r] ?? 0) + 1;
    }
    // exceptions
    for (const e of q.exceptions) {
      exceptionCount[e] = (exceptionCount[e] ?? 0) + 1;
    }
  }

  const topSubtopics  = topEntriesAs(subtopicCount,  5,  "subtopic");
  const topConcepts   = topEntriesAs(conceptCount,   8,  "concept");
  const topReactions  = topEntriesAs(reactionCount,  5,  "reaction");
  const topReagents   = topEntriesAs(reagentCount,   5,  "reagent");
  const topExceptions = topEntriesAs(exceptionCount, 5,  "exception");

  const avgDifficulty = difficultySum / qs.length;
  const trend = computeTrend(byYear);

  return {
    chapter,
    totalQuestions: qs.length,
    byExam,
    byDifficulty,
    byYear,
    topSubtopics,
    topConcepts,
    topReactions,
    topReagents,
    topExceptions,
    avgDifficulty,
    trend,
    lastAsked,
  };
}

export function getAllChapterStats(questions: PYQQuestion[]): ChapterStats[] {
  const chapters = [...new Set(questions.map((q) => q.chapter))] as PYQChapter[];
  return chapters
    .map((ch) => getChapterStats(questions, ch))
    .sort((a, b) => b.totalQuestions - a.totalQuestions);
}

// ── Concept frequency analysis ───────────────────────────────────────────────

export function getConceptFrequencies(
  questions: PYQQuestion[],
  options?: { exam?: PYQExam; yearFrom?: number; yearTo?: number }
): ConceptFrequency[] {
  const filtered = filterQuestions(questions, options);
  const map = new Map<
    string,
    { chapter: PYQChapter; count: number; byExam: { jeeMain: number; jeeAdvanced: number; neet: number }; lastAsked: number; difficulty: PYQDifficulty }
  >();

  for (const q of filtered) {
    for (const concept of q.concepts) {
      const existing = map.get(concept);
      if (!existing) {
        map.set(concept, {
          chapter: q.chapter,
          count: 1,
          byExam: {
            jeeMain: q.exam === "JEE Main" ? 1 : 0,
            jeeAdvanced: q.exam === "JEE Advanced" ? 1 : 0,
            neet: q.exam === "NEET" ? 1 : 0,
          },
          lastAsked: q.year,
          difficulty: q.difficulty,
        });
      } else {
        existing.count++;
        if (q.exam === "JEE Main") existing.byExam.jeeMain++;
        else if (q.exam === "JEE Advanced") existing.byExam.jeeAdvanced++;
        else existing.byExam.neet++;
        if (q.year > existing.lastAsked) existing.lastAsked = q.year;
      }
    }
  }

  const currentYear = new Date().getFullYear();
  return Array.from(map.entries())
    .map(([concept, data]) => ({
      concept,
      chapter: data.chapter,
      totalCount: data.count,
      byExam: data.byExam,
      lastAsked: data.lastAsked,
      trending: data.lastAsked >= currentYear - 3,
      difficulty: data.difficulty,
    }))
    .sort((a, b) => b.totalCount - a.totalCount);
}

export function getMostAskedConcepts(
  questions: PYQQuestion[],
  limit = 20
): ConceptFrequency[] {
  return getConceptFrequencies(questions).slice(0, limit);
}

// ── Exam frequency analytics ─────────────────────────────────────────────────

export function getYearlyTrend(
  questions: PYQQuestion[],
  chapter?: PYQChapter
): TrendDataPoint[] {
  const qs = chapter ? questions.filter((q) => q.chapter === chapter) : questions;
  const yearMap = new Map<number, { jeeMain: number; jeeAdvanced: number; neet: number }>();

  for (const q of qs) {
    const yr = q.year;
    if (!yearMap.has(yr)) {
      yearMap.set(yr, { jeeMain: 0, jeeAdvanced: 0, neet: 0 });
    }
    const entry = yearMap.get(yr)!;
    if (q.exam === "JEE Main") entry.jeeMain++;
    else if (q.exam === "JEE Advanced") entry.jeeAdvanced++;
    else entry.neet++;
  }

  return Array.from(yearMap.entries())
    .map(([year, counts]) => ({
      year,
      jeeMain: counts.jeeMain,
      jeeAdvanced: counts.jeeAdvanced,
      neet: counts.neet,
      total: counts.jeeMain + counts.jeeAdvanced + counts.neet,
    }))
    .sort((a, b) => a.year - b.year);
}

export function getExamWiseDistribution(questions: PYQQuestion[]) {
  const total = questions.length;
  const byExam = { jeeMain: 0, jeeAdvanced: 0, neet: 0 };
  for (const q of questions) {
    if (q.exam === "JEE Main") byExam.jeeMain++;
    else if (q.exam === "JEE Advanced") byExam.jeeAdvanced++;
    else byExam.neet++;
  }
  return {
    ...byExam,
    total,
    jeeMainPct: pct(byExam.jeeMain, total),
    jeeAdvancedPct: pct(byExam.jeeAdvanced, total),
    neetPct: pct(byExam.neet, total),
  };
}

export function getDifficultyDistribution(
  questions: PYQQuestion[],
  exam?: PYQExam
): Record<PYQDifficulty, number> {
  const qs = exam ? questions.filter((q) => q.exam === exam) : questions;
  const dist: Record<PYQDifficulty, number> = { Easy: 0, Moderate: 0, Hard: 0, Olympiad: 0 };
  for (const q of qs) dist[q.difficulty]++;
  return dist;
}

// ── Topic-wise analysis ──────────────────────────────────────────────────────

export function getSubtopicStats(
  questions: PYQQuestion[],
  chapter: PYQChapter
): Array<{ subtopic: string; count: number; difficulty: string; lastAsked: number }> {
  const qs = questions.filter((q) => q.chapter === chapter);
  const map = new Map<string, { count: number; diffSum: number; lastAsked: number }>();

  for (const q of qs) {
    const st = q.subtopic;
    const existing = map.get(st);
    if (!existing) {
      map.set(st, { count: 1, diffSum: DIFFICULTY_SCORE[q.difficulty], lastAsked: q.year });
    } else {
      existing.count++;
      existing.diffSum += DIFFICULTY_SCORE[q.difficulty];
      if (q.year > existing.lastAsked) existing.lastAsked = q.year;
    }
  }

  return Array.from(map.entries())
    .map(([subtopic, data]) => ({
      subtopic,
      count: data.count,
      difficulty: difficultyLabel(data.diffSum / data.count),
      lastAsked: data.lastAsked,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getChapterRanking(
  questions: PYQQuestion[],
  exam?: PYQExam
): Array<{ chapter: PYQChapter; count: number; avgFreq: number }> {
  const qs = exam ? questions.filter((q) => q.exam === exam) : questions;
  const map = new Map<PYQChapter, { count: number; freqSum: number }>();

  for (const q of qs) {
    const existing = map.get(q.chapter);
    if (!existing) {
      map.set(q.chapter, { count: 1, freqSum: q.frequency });
    } else {
      existing.count++;
      existing.freqSum += q.frequency;
    }
  }

  return Array.from(map.entries())
    .map(([chapter, data]) => ({
      chapter,
      count: data.count,
      avgFreq: data.freqSum / data.count,
    }))
    .sort((a, b) => b.count - a.count);
}

// ── Exception analytics ──────────────────────────────────────────────────────

export function getMostAskedExceptions(
  questions: PYQQuestion[],
  limit = 15
): Array<{ exception: string; count: number; chapters: string[]; exams: PYQExam[] }> {
  const map = new Map<string, { count: number; chapters: Set<string>; exams: Set<PYQExam> }>();

  for (const q of questions) {
    for (const ex of q.exceptions) {
      const existing = map.get(ex);
      if (!existing) {
        map.set(ex, { count: 1, chapters: new Set([q.chapter]), exams: new Set([q.exam]) });
      } else {
        existing.count++;
        existing.chapters.add(q.chapter);
        existing.exams.add(q.exam);
      }
    }
  }

  return Array.from(map.entries())
    .map(([exception, data]) => ({
      exception,
      count: data.count,
      chapters: [...data.chapters],
      exams: [...data.exams],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getMostAskedReagents(
  questions: PYQQuestion[],
  limit = 15
): Array<{ reagent: string; count: number; exams: PYQExam[] }> {
  const map = new Map<string, { count: number; exams: Set<PYQExam> }>();

  for (const q of questions) {
    for (const r of q.reagents) {
      const existing = map.get(r);
      if (!existing) {
        map.set(r, { count: 1, exams: new Set([q.exam]) });
      } else {
        existing.count++;
        existing.exams.add(q.exam);
      }
    }
  }

  return Array.from(map.entries())
    .map(([reagent, data]) => ({
      reagent,
      count: data.count,
      exams: [...data.exams],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

// ── NCERT direct questions ────────────────────────────────────────────────────

export function getNCERTDirectQuestions(
  questions: PYQQuestion[],
  exam?: PYQExam
): PYQQuestion[] {
  const qs = exam ? questions.filter((q) => q.exam === exam) : questions;
  return qs.filter((q) => q.ncertDirect);
}

export function getTrendingConcepts(
  questions: PYQQuestion[],
  yearThreshold = 3
): ConceptFrequency[] {
  const currentYear = new Date().getFullYear();
  const recentQs = questions.filter((q) => q.year >= currentYear - yearThreshold);
  return getConceptFrequencies(recentQs);
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function filterQuestions(
  questions: PYQQuestion[],
  options?: { exam?: PYQExam; yearFrom?: number; yearTo?: number }
): PYQQuestion[] {
  if (!options) return questions;
  return questions.filter((q) => {
    if (options.exam && q.exam !== options.exam) return false;
    if (options.yearFrom && q.year < options.yearFrom) return false;
    if (options.yearTo && q.year > options.yearTo) return false;
    return true;
  });
}

function topEntriesAs<K extends string>(
  map: Record<string, number>,
  limit: number,
  field: K
): Array<Record<K, string> & { count: number }> {
  return Object.entries(map)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([key, count]) => ({ [field]: key, count } as Record<K, string> & { count: number }));
}

function computeTrend(byYear: Record<string, number>): "Increasing" | "Stable" | "Decreasing" {
  const years = Object.keys(byYear).map(Number).sort();
  if (years.length < 4) return "Stable";
  const recent = years.slice(-3).reduce((sum, yr) => sum + (byYear[String(yr)] ?? 0), 0) / 3;
  const older = years.slice(0, -3).reduce((sum, yr) => sum + (byYear[String(yr)] ?? 0), 0) / Math.max(1, years.length - 3);
  if (recent > older * 1.2) return "Increasing";
  if (recent < older * 0.8) return "Decreasing";
  return "Stable";
}

function pct(n: number, total: number): number {
  return total === 0 ? 0 : Math.round((n / total) * 100);
}

function difficultyLabel(score: number): string {
  if (score < 1.5) return "Easy";
  if (score < 2.5) return "Moderate";
  if (score < 3.5) return "Hard";
  return "Olympiad";
}

function emptyChapterStats(chapter: PYQChapter): ChapterStats {
  return {
    chapter,
    totalQuestions: 0,
    byExam: { jeeMain: 0, jeeAdvanced: 0, neet: 0 },
    byDifficulty: { Easy: 0, Moderate: 0, Hard: 0, Olympiad: 0 },
    byYear: {},
    topSubtopics: [],
    topConcepts: [],
    topReactions: [],
    topReagents: [],
    topExceptions: [],
    avgDifficulty: 0,
    trend: "Stable",
    lastAsked: 0,
  };
}
