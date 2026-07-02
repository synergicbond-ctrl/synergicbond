import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQQuestion, PYQExam, PYQChapter, PYQDifficulty } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// Week 9 — Test Engine Foundation
//
// Builds test DEFINITIONS from the existing PYQ SSOT (read-only). It does NOT
// modify PYQ data, does NOT duplicate the PYQ schema, and NEVER fabricates
// questions — every test references real question ids in ALL_PYQ_QUESTIONS.
//
// Categories with real data now: Chapter, Topic, Revision, Previous Papers.
// Mock and Custom are foundation placeholders (wired to Performance later).
// ─────────────────────────────────────────────────────────────────────────────

export type TestCategory =
  | "chapter"
  | "topic"
  | "revision"
  | "previous-paper"
  | "mock"
  | "custom";

export interface TestDefinition {
  id: string;
  category: TestCategory;
  title: string;
  subtitle?: string;
  questionIds: string[]; // references into ALL_PYQ_QUESTIONS — never fabricated
  count: number;
  exams: PYQExam[];
  difficultyMix: Record<PYQDifficulty, number>;
  totalMarks: number;
}

// A test only qualifies if it has enough real questions to be meaningful.
const MIN_TOPIC_QUESTIONS = 2;
const MIN_PAPER_QUESTIONS = 3;
const DEFAULT_MARKS = 4;

const EMPTY_MIX: Record<PYQDifficulty, number> = { Easy: 0, Moderate: 0, Hard: 0, Olympiad: 0 };

// ── Fast lookup index (built once) ────────────────────────────────────────────

const QUESTION_INDEX: Map<string, PYQQuestion> = new Map(
  ALL_PYQ_QUESTIONS.map((q) => [q.id, q])
);

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/** Summarise a group of questions into the shared TestDefinition shape. */
function summarise(questions: PYQQuestion[]): {
  exams: PYQExam[];
  difficultyMix: Record<PYQDifficulty, number>;
  totalMarks: number;
  ids: string[];
} {
  const examSet = new Set<PYQExam>();
  const mix: Record<PYQDifficulty, number> = { ...EMPTY_MIX };
  let marks = 0;
  const ids: string[] = [];
  for (const q of questions) {
    examSet.add(q.exam);
    mix[q.difficulty]++;
    marks += q.marks ?? DEFAULT_MARKS;
    ids.push(q.id);
  }
  return { exams: [...examSet], difficultyMix: mix, totalMarks: marks, ids };
}

function makeDefinition(
  id: string,
  category: TestCategory,
  title: string,
  subtitle: string | undefined,
  questions: PYQQuestion[]
): TestDefinition {
  const { exams, difficultyMix, totalMarks, ids } = summarise(questions);
  return { id, category, title, subtitle, questionIds: ids, count: ids.length, exams, difficultyMix, totalMarks };
}

// ── Builders ──────────────────────────────────────────────────────────────────

function buildChapterTests(): TestDefinition[] {
  const byChapter = new Map<PYQChapter, PYQQuestion[]>();
  for (const q of ALL_PYQ_QUESTIONS) {
    const arr = byChapter.get(q.chapter) ?? [];
    arr.push(q);
    byChapter.set(q.chapter, arr);
  }
  return [...byChapter.entries()]
    .map(([chapter, qs]) =>
      makeDefinition(`chapter:${slugify(chapter)}`, "chapter", chapter, `${qs.length} PYQs · full-chapter set`, qs)
    )
    .sort((a, b) => b.count - a.count);
}

function buildTopicTests(): TestDefinition[] {
  const byTopic = new Map<string, { chapter: PYQChapter; subtopic: string; qs: PYQQuestion[] }>();
  for (const q of ALL_PYQ_QUESTIONS) {
    const key = `${q.chapter}::${q.subtopic}`;
    const entry = byTopic.get(key) ?? { chapter: q.chapter, subtopic: q.subtopic, qs: [] };
    entry.qs.push(q);
    byTopic.set(key, entry);
  }
  return [...byTopic.values()]
    .filter((e) => e.qs.length >= MIN_TOPIC_QUESTIONS)
    .map((e) =>
      makeDefinition(`topic:${slugify(e.chapter)}--${slugify(e.subtopic)}`, "topic", e.subtopic, e.chapter, e.qs)
    )
    .sort((a, b) => b.count - a.count);
}

function buildRevisionTests(): TestDefinition[] {
  const defs: TestDefinition[] = [];

  const highYield = ALL_PYQ_QUESTIONS.filter((q) => q.trending || q.frequency >= 2);
  if (highYield.length > 0) {
    defs.push(makeDefinition("revision:high-yield", "revision", "High-Yield Revision", "Trending & frequently-asked concepts", highYield));
  }

  const ncert = ALL_PYQ_QUESTIONS.filter((q) => q.ncertDirect);
  if (ncert.length > 0) {
    defs.push(makeDefinition("revision:ncert-direct", "revision", "NCERT-Direct Revision", "Questions straight from NCERT lines", ncert));
  }

  const tough = ALL_PYQ_QUESTIONS.filter((q) => q.difficulty === "Hard" || q.difficulty === "Olympiad");
  if (tough.length > 0) {
    defs.push(makeDefinition("revision:tough-nuts", "revision", "Tough Nuts", "Hard & Olympiad-level problems", tough));
  }

  return defs;
}

function buildPreviousPapers(): TestDefinition[] {
  const byPaper = new Map<string, { exam: PYQExam; year: number; qs: PYQQuestion[] }>();
  for (const q of ALL_PYQ_QUESTIONS) {
    const key = `${q.exam}::${q.year}`;
    const entry = byPaper.get(key) ?? { exam: q.exam, year: q.year, qs: [] };
    entry.qs.push(q);
    byPaper.set(key, entry);
  }
  return [...byPaper.values()]
    .filter((e) => e.qs.length >= MIN_PAPER_QUESTIONS)
    .sort((a, b) => (b.year - a.year) || a.exam.localeCompare(b.exam))
    .map((e) =>
      makeDefinition(`paper:${slugify(e.exam)}-${e.year}`, "previous-paper", `${e.exam} ${e.year}`, `${e.qs.length} questions`, e.qs)
    );
}

// ── Public catalogue (built once) ─────────────────────────────────────────────

export const CHAPTER_TESTS = buildChapterTests();
export const TOPIC_TESTS = buildTopicTests();
export const REVISION_TESTS = buildRevisionTests();
export const PREVIOUS_PAPERS = buildPreviousPapers();

export const TESTS_BY_CATEGORY: Record<TestCategory, TestDefinition[]> = {
  chapter: CHAPTER_TESTS,
  topic: TOPIC_TESTS,
  revision: REVISION_TESTS,
  "previous-paper": PREVIOUS_PAPERS,
  mock: [],
  custom: [],
};

const DEFINITION_INDEX: Map<string, TestDefinition> = new Map(
  [...CHAPTER_TESTS, ...TOPIC_TESTS, ...REVISION_TESTS, ...PREVIOUS_PAPERS].map((d) => [d.id, d])
);

export function getTestById(id: string): TestDefinition | undefined {
  return DEFINITION_INDEX.get(id);
}

/** Resolve a test's real questions from the PYQ SSOT (order preserved). */
export function getTestQuestions(def: TestDefinition): PYQQuestion[] {
  const out: PYQQuestion[] = [];
  for (const id of def.questionIds) {
    const q = QUESTION_INDEX.get(id);
    if (q) out.push(q);
  }
  return out;
}

// ── Category metadata (drives the UI) ─────────────────────────────────────────

export interface CategoryMeta {
  key: TestCategory;
  label: string;
  icon: string;
  blurb: string;
  placeholder: boolean;
}

export const TEST_CATEGORIES: CategoryMeta[] = [
  { key: "chapter", label: "Chapter Tests", icon: "📚", blurb: "Full-chapter PYQ sets", placeholder: false },
  { key: "topic", label: "Topic Tests", icon: "🎯", blurb: "Focused subtopic drills", placeholder: false },
  { key: "revision", label: "Revision Tests", icon: "🔁", blurb: "High-yield, NCERT & tough sets", placeholder: false },
  { key: "previous-paper", label: "Previous Papers", icon: "🗓️", blurb: "Real papers by exam & year", placeholder: false },
  { key: "mock", label: "Mock Tests", icon: "🧪", blurb: "Full-length simulated exams", placeholder: true },
  { key: "custom", label: "Custom Tests", icon: "🛠️", blurb: "Pick chapters, topics & length", placeholder: true },
];

export const TEST_ENGINE_STATS = {
  chapterTests: CHAPTER_TESTS.length,
  topicTests: TOPIC_TESTS.length,
  revisionTests: REVISION_TESTS.length,
  previousPapers: PREVIOUS_PAPERS.length,
  totalTests: CHAPTER_TESTS.length + TOPIC_TESTS.length + REVISION_TESTS.length + PREVIOUS_PAPERS.length,
  questionPool: ALL_PYQ_QUESTIONS.length,
} as const;
