import type { PYQExam } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// Exam paper blueprints — SSOT for /exam generation and attempt scoring.
//
// Chemistry-section sizes of the real papers. The current question schema is
// single-correct MCQ only, so JEE Advanced honestly runs as MCQ-only for now
// (its real single-correct marking, +3/−1) — multi-correct / integer types
// are NOT faked.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExamBlueprint {
  exam: PYQExam;
  /** Questions in the chemistry section of the real paper. */
  totalQuestions: number;
  marksCorrect: number;
  marksWrong: number; // negative
  markingLabel: string;
  /** Honest note shown in the UI about schema limits. */
  note?: string;
}

export const EXAM_BLUEPRINTS: Record<PYQExam, ExamBlueprint> = {
  NEET: {
    exam: "NEET",
    totalQuestions: 45,
    marksCorrect: 4,
    marksWrong: -1,
    markingLabel: "Single correct · +4 / −1",
  },
  "JEE Main": {
    exam: "JEE Main",
    totalQuestions: 25,
    marksCorrect: 4,
    marksWrong: -1,
    markingLabel: "Single correct · +4 / −1",
  },
  "JEE Advanced": {
    exam: "JEE Advanced",
    totalQuestions: 18, // real papers run 17–21 chemistry questions
    marksCorrect: 3,
    marksWrong: -1,
    markingLabel: "Single correct · +3 / −1 (MCQ-only for now)",
    note: "Multi-correct, matrix-match and integer types arrive when the question schema supports them — nothing is faked.",
  },
};

export function getBlueprint(exam: string): ExamBlueprint | undefined {
  return EXAM_BLUEPRINTS[exam as PYQExam];
}
