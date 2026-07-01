import type { PYQQuestion, PYQFilter, SearchResult, PYQExam, PYQChapter, PYQDifficulty } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 — PYQ Search Engine
// Full-text + structured filter search across all question fields.
// ─────────────────────────────────────────────────────────────────────────────

// ── Full-text search ─────────────────────────────────────────────────────────

export function searchPYQ(
  questions: PYQQuestion[],
  query: string,
  filter?: PYQFilter,
  limit = 20
): SearchResult[] {
  const q = query.toLowerCase().trim();
  const pool = filter ? applyFilter(questions, filter) : questions;

  if (!q) {
    return pool.slice(0, limit).map((question) => ({
      question,
      score: 1,
      matchedOn: [],
    }));
  }

  const results: SearchResult[] = [];

  for (const question of pool) {
    const { score, matchedOn } = scoreQuestion(question, q);
    if (score > 0) {
      results.push({ question, score, matchedOn });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// ── Structured filter ────────────────────────────────────────────────────────

export function filterPYQ(
  questions: PYQQuestion[],
  filter: PYQFilter
): PYQQuestion[] {
  return applyFilter(questions, filter);
}

export function getByChapter(
  questions: PYQQuestion[],
  chapter: PYQChapter,
  exam?: PYQExam
): PYQQuestion[] {
  return questions.filter(
    (q) => q.chapter === chapter && (!exam || q.exam === exam)
  );
}

export function getByExam(
  questions: PYQQuestion[],
  exam: PYQExam,
  yearFrom?: number,
  yearTo?: number
): PYQQuestion[] {
  return questions.filter((q) => {
    if (q.exam !== exam) return false;
    if (yearFrom && q.year < yearFrom) return false;
    if (yearTo && q.year > yearTo) return false;
    return true;
  });
}

export function getByDifficulty(
  questions: PYQQuestion[],
  difficulty: PYQDifficulty | PYQDifficulty[]
): PYQQuestion[] {
  const diffs = Array.isArray(difficulty) ? difficulty : [difficulty];
  return questions.filter((q) => diffs.includes(q.difficulty));
}

export function getByYear(
  questions: PYQQuestion[],
  year: number,
  exam?: PYQExam
): PYQQuestion[] {
  return questions.filter(
    (q) => q.year === year && (!exam || q.exam === exam)
  );
}

export function getByReagent(
  questions: PYQQuestion[],
  reagentId: string
): PYQQuestion[] {
  return questions.filter((q) => q.reagents.includes(reagentId));
}

export function getByReaction(
  questions: PYQQuestion[],
  reactionId: string
): PYQQuestion[] {
  return questions.filter((q) => q.reactions.includes(reactionId));
}

export function getByException(
  questions: PYQQuestion[],
  exceptionSnippet: string
): PYQQuestion[] {
  const q = exceptionSnippet.toLowerCase();
  return questions.filter((qn) =>
    qn.exceptions.some((e) => e.toLowerCase().includes(q))
  );
}

export function getNCERTDirect(
  questions: PYQQuestion[],
  exam?: PYQExam
): PYQQuestion[] {
  const qs = exam ? questions.filter((q) => q.exam === exam) : questions;
  return qs.filter((q) => q.ncertDirect);
}

export function getTrending(
  questions: PYQQuestion[],
  yearThreshold = 3
): PYQQuestion[] {
  const cutoff = new Date().getFullYear() - yearThreshold;
  return questions.filter((q) => q.year >= cutoff || q.trending);
}

// ── Weak area detection ───────────────────────────────────────────────────────

export function detectWeakAreas(
  questions: PYQQuestion[],
  solvedIds: Set<string>
): Array<{
  chapter: PYQChapter;
  subtopic: string;
  missedCount: number;
  totalCount: number;
  hitRate: number;
  priority: "Critical" | "High" | "Medium" | "Low";
}> {
  const map = new Map<
    string,
    { chapter: PYQChapter; total: number; missed: number; freqSum: number }
  >();

  for (const q of questions) {
    const key = `${q.chapter}::${q.subtopic}`;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, { chapter: q.chapter, total: 1, missed: solvedIds.has(q.id) ? 0 : 1, freqSum: q.frequency });
    } else {
      existing.total++;
      if (!solvedIds.has(q.id)) existing.missed++;
      existing.freqSum += q.frequency;
    }
  }

  return Array.from(map.entries())
    .map(([key, data]) => {
      const hitRate = (data.total - data.missed) / data.total;
      const [, subtopic] = key.split("::");
      const priority = getPriority(hitRate, data.freqSum / data.total);
      return {
        chapter: data.chapter,
        subtopic,
        missedCount: data.missed,
        totalCount: data.total,
        hitRate,
        priority,
      };
    })
    .filter((item) => item.missedCount > 0)
    .sort((a, b) => {
      const pOrder = { Critical: 0, High: 1, Medium: 2, Low: 3 };
      return pOrder[a.priority] - pOrder[b.priority];
    });
}

// ── Scoring algorithm ────────────────────────────────────────────────────────

const FIELD_WEIGHTS = {
  concepts:    10,
  exceptions:  9,
  reactions:   8,
  reagents:    7,
  subtopic:    6,
  question:    5,
  explanation: 4,
  chapter:     3,
  ncertLines:  3,
  formulas:    2,
};

function scoreQuestion(q: PYQQuestion, query: string): { score: number; matchedOn: string[] } {
  let score = 0;
  const matchedOn: string[] = [];
  const terms = query.split(/\s+/).filter(Boolean);

  const check = (field: keyof typeof FIELD_WEIGHTS, text: string | string[]) => {
    const haystack = Array.isArray(text) ? text.join(" ").toLowerCase() : text.toLowerCase();
    let matched = false;
    for (const term of terms) {
      if (haystack.includes(term)) {
        matched = true;
        score += FIELD_WEIGHTS[field];
        // bonus for exact match
        if (haystack.includes(query)) score += FIELD_WEIGHTS[field] * 2;
        break;
      }
    }
    if (matched) matchedOn.push(field);
  };

  check("concepts", q.concepts);
  check("exceptions", q.exceptions);
  check("reactions", q.reactions);
  check("reagents", q.reagents);
  check("subtopic", q.subtopic);
  check("question", q.question);
  check("explanation", q.explanation);
  check("chapter", q.chapter);
  check("ncertLines", q.ncertLines);
  check("formulas", q.formulas);

  // boost for recent/trending
  if (q.trending) score += 2;
  if (q.ncertDirect) score += 1;

  return { score, matchedOn };
}

function applyFilter(questions: PYQQuestion[], filter: PYQFilter): PYQQuestion[] {
  return questions.filter((q) => {
    if (filter.exam) {
      const exams = Array.isArray(filter.exam) ? filter.exam : [filter.exam];
      if (!exams.includes(q.exam)) return false;
    }
    if (filter.chapter) {
      const chapters = Array.isArray(filter.chapter) ? filter.chapter : [filter.chapter];
      if (!chapters.includes(q.chapter)) return false;
    }
    if (filter.difficulty) {
      const diffs = Array.isArray(filter.difficulty) ? filter.difficulty : [filter.difficulty];
      if (!diffs.includes(q.difficulty)) return false;
    }
    if (filter.subtopic && !q.subtopic.toLowerCase().includes(filter.subtopic.toLowerCase())) return false;
    if (filter.concept && !q.concepts.some((c) => c.toLowerCase().includes(filter.concept!.toLowerCase()))) return false;
    if (filter.reaction && !q.reactions.some((r) => r.toLowerCase().includes(filter.reaction!.toLowerCase()))) return false;
    if (filter.reagent && !q.reagents.includes(filter.reagent)) return false;
    if (filter.exception && !q.exceptions.some((e) => e.toLowerCase().includes(filter.exception!.toLowerCase()))) return false;
    if (filter.yearFrom && q.year < filter.yearFrom) return false;
    if (filter.yearTo && q.year > filter.yearTo) return false;
    if (filter.ncertDirect !== undefined && q.ncertDirect !== filter.ncertDirect) return false;
    if (filter.trending !== undefined && q.trending !== filter.trending) return false;
    return true;
  });
}

function getPriority(
  hitRate: number,
  avgFreq: number
): "Critical" | "High" | "Medium" | "Low" {
  if (hitRate < 0.3 && avgFreq >= 3) return "Critical";
  if (hitRate < 0.5 && avgFreq >= 2) return "High";
  if (hitRate < 0.7) return "Medium";
  return "Low";
}
