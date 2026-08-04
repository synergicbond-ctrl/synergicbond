// components/retrieval/types.ts — typed content schema for retrieval items
// (Phase 3 of the IA & Migration Map rollout).
//
// This schema is the contract between engineering and chemistry faculty
// (founder decision F6): faculty author items in this shape; components
// render whatever they are given and NEVER contain chemistry themselves.

/** How the student answers. */
export type RetrievalMode = "mcq" | "self-graded";

export interface RetrievalOption {
  id: string;
  /** Option text. May contain inline chemistry notation as plain text/JSX upstream. */
  label: string;
  /**
   * Optional misconception tag for wrong options — powers mistake analytics
   * later. Faculty-assigned; never inferred by engineering.
   */
  misconceptionId?: string;
}

export interface RetrievalItem {
  /** Stable id, e.g. "ceq-7-4-check-1". Used as attempts question id. */
  id: string;
  /** Concept this item evidences, e.g. "ceq:kp-kc-relation". */
  conceptId: string;
  mode: RetrievalMode;
  prompt: string;
  /** MCQ only: 2–5 options. */
  options?: RetrievalOption[];
  /** MCQ only: id of the correct option. */
  correctOptionId?: string;
  /** self-graded only: the model answer revealed for self-assessment. */
  modelAnswer?: string;
  /** Shown after answering; names the distractor logic where relevant. */
  explanation?: string;
}

/** Result reported by RetrievalQuestion via onResult. */
export interface RetrievalResult {
  itemId: string;
  conceptId: string;
  mode: RetrievalMode;
  /** For self-graded items this is the student's own verdict. */
  correct: boolean;
  selectedOptionId?: string;
  /** Present when a ConfidenceSelector was shown. */
  confident?: boolean;
  /** Milliseconds from render to answer; consumers bucket before storing. */
  elapsedMs?: number;
}

/**
 * Structural validation for authored/fixture items. Returns human-readable
 * problems; empty array = valid. Deliberately schema-only: correctness of
 * the chemistry is faculty review, not code.
 */
export function validateRetrievalItem(item: RetrievalItem): string[] {
  const problems: string[] = [];
  if (!item.id) problems.push("missing id");
  if (!item.conceptId) problems.push("missing conceptId");
  if (!item.prompt) problems.push("missing prompt");
  if (item.mode === "mcq") {
    if (!item.options || item.options.length < 2 || item.options.length > 5) {
      problems.push("mcq needs 2–5 options");
    }
    if (!item.correctOptionId) {
      problems.push("mcq needs correctOptionId");
    } else if (item.options && !item.options.some((o) => o.id === item.correctOptionId)) {
      problems.push("correctOptionId not among options");
    }
    const ids = new Set((item.options ?? []).map((o) => o.id));
    if (item.options && ids.size !== item.options.length) {
      problems.push("duplicate option ids");
    }
  } else if (item.mode === "self-graded") {
    if (!item.modelAnswer) problems.push("self-graded needs modelAnswer");
  } else {
    problems.push(`unknown mode ${String(item.mode)}`);
  }
  return problems;
}
