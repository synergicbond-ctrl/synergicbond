import {
  NEET_CHEMISTRY_PYQ_CHAPTER_INDEX,
  NEET_CHEMISTRY_PYQ_QUESTIONS,
} from "./generated/neetChemistry";
import type { PYQChapter, PYQDifficulty, PYQQuestion } from "./schema";

export interface NEETChemistryPaperOptions {
  count?: number;
  seed?: string;
  chapters?: PYQChapter[];
  years?: number[];
  difficultyMix?: Partial<Record<PYQDifficulty, number>>;
}

export interface NEETChemistryPaper {
  id: string;
  title: string;
  questions: PYQQuestion[];
  questionIds: string[];
  totalMarks: number;
  negativeMarks: number;
  byChapter: Record<string, number>;
  byDifficulty: Record<PYQDifficulty, number>;
}

const DEFAULT_COUNT = 45;
const DEFAULT_MIX: Record<PYQDifficulty, number> = {
  Easy: 15,
  Moderate: 22,
  Hard: 8,
  Olympiad: 0,
};

function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed: string) {
  let state = hashSeed(seed) || 1;
  return () => {
    state = Math.imul(1664525, state) + 1013904223;
    return (state >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], seed: string): T[] {
  const out = [...items];
  const random = seededRandom(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function normalizeMix(count: number, mix?: Partial<Record<PYQDifficulty, number>>): Record<PYQDifficulty, number> {
  const requested = { ...DEFAULT_MIX, ...mix };
  const total = Object.values(requested).reduce((sum, value) => sum + value, 0);
  if (total === count) return requested;
  if (total <= 0) return { Easy: 0, Moderate: count, Hard: 0, Olympiad: 0 };

  const scaled = Object.fromEntries(
    Object.entries(requested).map(([difficulty, value]) => [difficulty, Math.floor((value / total) * count)]),
  ) as Record<PYQDifficulty, number>;
  let remaining = count - Object.values(scaled).reduce((sum, value) => sum + value, 0);
  for (const difficulty of ["Moderate", "Easy", "Hard", "Olympiad"] as PYQDifficulty[]) {
    if (remaining <= 0) break;
    scaled[difficulty]++;
    remaining--;
  }
  return scaled;
}

function summarize(questions: PYQQuestion[]): Pick<NEETChemistryPaper, "byChapter" | "byDifficulty" | "totalMarks" | "negativeMarks"> {
  const byChapter: Record<string, number> = {};
  const byDifficulty: Record<PYQDifficulty, number> = { Easy: 0, Moderate: 0, Hard: 0, Olympiad: 0 };
  let totalMarks = 0;
  let negativeMarks = 0;
  for (const question of questions) {
    byChapter[question.chapter] = (byChapter[question.chapter] ?? 0) + 1;
    byDifficulty[question.difficulty]++;
    totalMarks += question.marks ?? 4;
    negativeMarks += question.negMarks ?? 1;
  }
  return { byChapter, byDifficulty, totalMarks, negativeMarks };
}

export function getNEETChemistryQuestionsForChapter(chapter: PYQChapter): PYQQuestion[] {
  const ids = NEET_CHEMISTRY_PYQ_CHAPTER_INDEX[chapter] ?? [];
  const index = new Map(NEET_CHEMISTRY_PYQ_QUESTIONS.map((question) => [question.id, question]));
  return ids.map((id) => index.get(id)).filter((question): question is PYQQuestion => Boolean(question));
}

export function generateNEETChemistryPaper(options: NEETChemistryPaperOptions = {}): NEETChemistryPaper {
  const count = options.count ?? DEFAULT_COUNT;
  const allowedChapters = new Set(options.chapters);
  const allowedYears = new Set(options.years);
  const pool = NEET_CHEMISTRY_PYQ_QUESTIONS.filter((question) => {
    if (allowedChapters.size > 0 && !allowedChapters.has(question.chapter)) return false;
    if (allowedYears.size > 0 && !allowedYears.has(question.year)) return false;
    return true;
  });

  if (pool.length < count) {
    throw new Error(`Not enough audited NEET Chemistry PYQs for a ${count}-question paper. Pool has ${pool.length}.`);
  }

  const seed = options.seed ?? new Date().toISOString().slice(0, 10);
  const mix = normalizeMix(count, options.difficultyMix);
  const selected = new Map<string, PYQQuestion>();

  for (const difficulty of ["Easy", "Moderate", "Hard", "Olympiad"] as PYQDifficulty[]) {
    const candidates = shuffle(pool.filter((question) => question.difficulty === difficulty), `${seed}:${difficulty}`);
    for (const question of candidates.slice(0, mix[difficulty])) {
      selected.set(question.id, question);
    }
  }

  if (selected.size < count) {
    for (const question of shuffle(pool, `${seed}:fill`)) {
      selected.set(question.id, question);
      if (selected.size === count) break;
    }
  }

  const questions = shuffle([...selected.values()], `${seed}:final`).slice(0, count);
  const summary = summarize(questions);
  return {
    id: `neet-chemistry-paper-${hashSeed(`${seed}:${count}`).toString(16)}`,
    title: `NEET Chemistry ${count}-Question Practice Paper`,
    questions,
    questionIds: questions.map((question) => question.id),
    ...summary,
  };
}
