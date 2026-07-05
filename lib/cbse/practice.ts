// ─────────────────────────────────────────────────────────────────────────────
// CBSE Practice selector — pure over the REAL verified PYQ bank.
//
// Objective board question types (MCQ / Assertion–Reason) are served from the
// existing lib/pyq bank, scoped to the class's chapters, with per-student
// non-repetition (exclude ids already served, derived from attempt_answers).
// Subjective board types (2/3/5-mark, case-based, competency, HOTS) have no
// verified bank, so they are generated on demand by Gemini via /api/board-
// practice — never faked here. This module only knows the objective path.
// ─────────────────────────────────────────────────────────────────────────────

import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQQuestion, PYQChapter, PYQDifficulty } from "@/lib/pyq";
import { classPyqChapters } from "./syllabus";
import type { ClassSlug } from "@/lib/boardDashboard";

export type BoardQuestionKind = "objective" | "subjective";

export interface BoardQuestionType {
  key: string;
  label: string;
  kind: BoardQuestionKind;
  marks: number;
  /** Objective types resolve to a PYQ questionType filter. */
  pyqType?: PYQQuestion["questionType"];
  blurb: string;
}

// SSOT for the eight CBSE question types (mirrors boardDashboard TEST_QUESTION_TYPES).
export const BOARD_QUESTION_TYPES: BoardQuestionType[] = [
  { key: "mcq-1", label: "1 Mark (MCQ)", kind: "objective", marks: 1, pyqType: "MCQ-Single", blurb: "Single-correct objective questions from the verified bank." },
  { key: "assertion-reason", label: "Assertion–Reason", kind: "objective", marks: 1, pyqType: "Assertion-Reason", blurb: "Assertion & Reason questions from the verified bank." },
  { key: "sa-2", label: "2 Mark (Short Answer)", kind: "subjective", marks: 2, blurb: "AI-generated short-answer questions, board marking scheme." },
  { key: "sa-3", label: "3 Mark (Short Answer)", kind: "subjective", marks: 3, blurb: "AI-generated 3-mark questions with model answers." },
  { key: "la-5", label: "5 Mark (Long Answer)", kind: "subjective", marks: 5, blurb: "AI-generated long-answer questions, full value points." },
  { key: "case-based", label: "Case-Based", kind: "subjective", marks: 4, blurb: "AI-generated source/case passages with sub-questions." },
  { key: "competency", label: "Competency-Based", kind: "subjective", marks: 3, blurb: "AI-generated application/competency questions." },
  { key: "hots", label: "HOTS", kind: "subjective", marks: 3, blurb: "AI-generated higher-order thinking questions." },
];

export function getBoardQuestionType(key: string): BoardQuestionType | undefined {
  return BOARD_QUESTION_TYPES.find((t) => t.key === key);
}

export interface ObjectiveSelectOpts {
  cls: ClassSlug;
  /**
   * Explicit PYQ-chapter scope. undefined = whole CBSE class; an EMPTY array
   * means an empty pool (boards without a verified bank stay honestly empty —
   * never fall back to another board's chapters).
   */
  chapterPyq?: PYQChapter[];
  pyqType: PYQQuestion["questionType"];
  difficulty?: PYQDifficulty | null;
  count: number;
  /** Already-served question ids to skip (non-repetition). */
  excludeIds?: Set<string>;
}

export interface ObjectiveSelectResult {
  questions: PYQQuestion[];
  /** Pool size after chapter/type/difficulty filter, before exclusion. */
  poolSize: number;
  /** How many of the pool were already served (excluded). */
  servedInPool: number;
  /** True when the pool is exhausted for this filter → offer Reset. */
  exhausted: boolean;
}

/** Deterministic-ish shuffle so a session doesn't re-order on every render. */
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Select real, non-repeating objective questions for a class. */
export function selectObjective(opts: ObjectiveSelectOpts): ObjectiveSelectResult {
  const { cls, pyqType, difficulty, count, excludeIds } = opts;
  const scope = opts.chapterPyq !== undefined ? opts.chapterPyq : classPyqChapters(cls);
  const scopeSet = new Set(scope);

  const pool = ALL_PYQ_QUESTIONS.filter(
    (q) =>
      scopeSet.has(q.chapter) &&
      q.questionType === pyqType &&
      Boolean(q.options) &&
      (!difficulty || q.difficulty === difficulty)
  );

  const excluded = excludeIds ?? new Set<string>();
  const fresh = pool.filter((q) => !excluded.has(q.id));
  const servedInPool = pool.length - fresh.length;

  const picked = shuffle(fresh, pool.length + count).slice(0, count);
  return {
    questions: picked,
    poolSize: pool.length,
    servedInPool,
    exhausted: fresh.length === 0 && pool.length > 0,
  };
}

/** Count of real objective questions available per type for a class. */
export function objectiveInventory(cls: ClassSlug): { key: string; label: string; count: number }[] {
  const scopeSet = new Set(classPyqChapters(cls));
  return BOARD_QUESTION_TYPES.filter((t) => t.kind === "objective").map((t) => ({
    key: t.key,
    label: t.label,
    count: ALL_PYQ_QUESTIONS.filter((q) => scopeSet.has(q.chapter) && q.questionType === t.pyqType && q.options).length,
  }));
}
