// ─────────────────────────────────────────────────────────────────────────────
// Premium Program Spec SSOT — the learning-engine layer for the three
// entrance programs (NEET · JEE Main · JEE Advanced). Strictly additive over
// lib/programs.ts (hub catalogue stays untouched): this file defines
//   • which verified PYQ exam each program locks to,
//   • the program's question-type matrix — every type is honestly labelled by
//     its SOURCE: "bank" (verified PYQ bank, auto-graded), "ai-numeric"
//     (AI-generated, auto-graded numerically) or "ai-self" (AI-generated,
//     model answer revealed, self-graded — exotic formats are never fake
//     auto-graded),
//   • the chapter → PYQ-bank chapter mapping for the 30 master-syllabus
//     chapters (explicit, no fuzzy matching; unmapped = honest empty),
//   • authored premium-notes routes, and the expected-time heuristic used by
//     Speed Analysis and the per-question meta strip (labelled as derived).
// ─────────────────────────────────────────────────────────────────────────────

import type { PYQExam, PYQChapter, PYQQuestion, PYQDifficulty } from "@/lib/pyq";

export type EngineSlug = "neet" | "jee-main" | "jee-advanced";

export const ENGINE_SLUGS: EngineSlug[] = ["neet", "jee-main", "jee-advanced"];

export function isEngineSlug(slug: string): slug is EngineSlug {
  return (ENGINE_SLUGS as string[]).includes(slug);
}

// ── Question-type matrix ──────────────────────────────────────────────────────

export type QTypeSource = "bank" | "ai-numeric" | "ai-self";

export interface EngineQType {
  key: string;
  label: string;
  source: QTypeSource;
  /** bank types: the PYQ questionType to filter on. */
  pyqType?: PYQQuestion["questionType"];
  /** bank types: extra predicate (e.g. statement-style, NCERT-based). */
  predicate?: "statement" | "ncertDirect";
  /** ai-numeric types: answer format the generator/grader enforces. */
  format?: "integer" | "numerical" | "decimal" | "scientific";
  /** ai-self types: the exotic pattern for the generator. */
  pattern?: "multi-correct" | "matrix-match" | "list-match" | "paragraph" | "numerical-response" | "challenge";
  blurb: string;
}

const NEET_TYPES: EngineQType[] = [
  { key: "scq", label: "SCQ", source: "bank", pyqType: "MCQ-Single", blurb: "Single-correct questions from the verified bank." },
  { key: "assertion-reason", label: "Assertion–Reason", source: "bank", pyqType: "Assertion-Reason", blurb: "A–R questions from the verified bank." },
  { key: "statement", label: "Statement Based", source: "bank", pyqType: "MCQ-Single", predicate: "statement", blurb: "Statement-style questions filtered from the verified bank." },
  { key: "ncert-based", label: "NCERT Based", source: "bank", pyqType: "MCQ-Single", predicate: "ncertDirect", blurb: "Questions asked directly from NCERT text." },
];

// Official JEE Main formats ONLY (per the uploaded NTA syllabus + program
// spec): SCQ from the verified bank + the numeric family. No Assertion–Reason,
// Statement or Matrix formats inside JEE Main.
const SCQ_ONLY: EngineQType[] = [
  { key: "scq", label: "SCQ", source: "bank", pyqType: "MCQ-Single", blurb: "Single-correct questions from the verified bank." },
];

const JEE_MAIN_EXTRA: EngineQType[] = [
  { key: "integer", label: "Integer", source: "ai-numeric", format: "integer", blurb: "AI-generated integer-answer questions, auto-graded." },
  { key: "numerical", label: "Numerical", source: "ai-numeric", format: "numerical", blurb: "AI-generated numerical-value questions, auto-graded with tolerance." },
  { key: "decimal", label: "Decimal", source: "ai-numeric", format: "decimal", blurb: "Answers to two decimal places, auto-graded." },
  { key: "scientific", label: "Scientific Notation", source: "ai-numeric", format: "scientific", blurb: "Answers in a×10ⁿ form, auto-graded." },
];

// Official JEE Advanced formats (uploaded IIT syllabus + program spec).
const JEE_ADV_EXTRA: EngineQType[] = [
  { key: "multi-correct", label: "Multiple Correct", source: "ai-self", pattern: "multi-correct", blurb: "One-or-more-correct MCQs — model answer revealed, self-graded." },
  { key: "integer", label: "Integer", source: "ai-numeric", format: "integer", blurb: "AI-generated integer-answer questions, auto-graded." },
  { key: "matrix-match", label: "Matrix Match", source: "ai-self", pattern: "matrix-match", blurb: "Column matching — model answer revealed, self-graded." },
  { key: "list-match", label: "List Match", source: "ai-self", pattern: "list-match", blurb: "List-I / List-II matching sets." },
  { key: "paragraph", label: "Paragraph Based", source: "ai-self", pattern: "paragraph", blurb: "Data/experiment passage with linked questions." },
  { key: "numerical-response", label: "Numerical Response", source: "ai-numeric", format: "numerical", blurb: "Numerical-response questions, auto-graded." },
  { key: "comprehension", label: "Comprehension", source: "ai-self", pattern: "paragraph", blurb: "Extended comprehension sets — model answer revealed, self-graded." },
  { key: "challenge", label: "Advanced Challenge", source: "ai-self", pattern: "challenge", blurb: "Multi-concept challenge problems beyond routine difficulty." },
];

export interface EngineProgram {
  slug: EngineSlug;
  name: string;
  exam: PYQExam;
  /** masterSyllabus (dir) exam tag. */
  examTag: string;
  questionTypes: EngineQType[];
  /** Sections beyond the NEET base set, shown on hub/full-syllabus. */
  hasSpeedAnalysis: boolean;
}

export const ENGINE_PROGRAMS: Record<EngineSlug, EngineProgram> = {
  neet: {
    slug: "neet", name: "NEET", exam: "NEET", examTag: "NEET",
    questionTypes: NEET_TYPES, hasSpeedAnalysis: false,
  },
  "jee-main": {
    slug: "jee-main", name: "JEE Main", exam: "JEE Main", examTag: "JEE MAIN",
    questionTypes: [...SCQ_ONLY, ...JEE_MAIN_EXTRA], hasSpeedAnalysis: true,
  },
  "jee-advanced": {
    slug: "jee-advanced", name: "JEE Advanced", exam: "JEE Advanced", examTag: "JEE ADVANCED",
    questionTypes: [...SCQ_ONLY, ...JEE_ADV_EXTRA], hasSpeedAnalysis: true,
  },
};

// ── Chapter → PYQ-bank chapter mapping (explicit; unmapped = honest empty) ───

export const CHAPTER_PYQ_MAP: Record<string, PYQChapter[]> = {
  "atomic-structure": ["Atomic Structure"],
  "mole-concept": ["Some Basic Concepts"],
  "chemical-equilibrium": ["Equilibrium"],
  "thermodynamics": ["Thermodynamics"],
  "electrochemistry": ["Electrochemistry", "Redox Reactions"],
  "chemical-kinetics": ["Chemical Kinetics"],
  "solutions": ["Solutions"],
  "states-of-matter": ["States of Matter"],
  "solid-state": ["Solid State"],
  "surface-chemistry": ["Surface Chemistry"],
  "periodic-table": ["Periodic Table"],
  "chemical-bonding": ["Chemical Bonding"],
  "coordination-compounds": ["Coordination Compounds"],
  "p-block-elements": ["p-Block Elements"],
  "d-and-f-block-elements": ["d and f Block Elements"],
  "hydrogen": ["Hydrogen"],
  "s-block-elements": ["s-Block Elements"],
  "metallurgy": ["Metallurgy"],
  "qualitative-analysis": ["Qualitative Analysis"],
  "environmental-chemistry": [],
  "haloalkanes-haloarenes": ["Haloalkanes and Haloarenes"],
  "goc": ["General Organic Chemistry"],
  "aldehydes-ketones": ["Aldehydes Ketones", "Carboxylic Acids"],
  "alcohols-phenols-ethers": ["Alcohols Phenols Ethers"],
  "amines": ["Amines"],
  "hydrocarbons": ["Hydrocarbons"],
  "biomolecules": ["Biomolecules"],
  "purification-characterisation": [],
  "polymers": ["Polymers"],
  "chemistry-in-everyday-life": ["Chemistry in Everyday Life"],
};

/** Chapters with authored premium visual notes (the /learn template). */
export const AUTHORED_NOTES: Record<string, string> = {
  "mole-concept": "/learn/mole-concept",
  "atomic-structure": "/learn/atomic-structure",
  "chemical-bonding": "/learn/chemical-bonding",
  "periodic-table": "/learn/periodic-table",
  "thermodynamics": "/learn/thermodynamics",
};

// ── Expected-time heuristic (labelled as derived wherever shown) ──────────────

export const EXPECTED_SECONDS: Record<PYQDifficulty, number> = {
  Easy: 45,
  Moderate: 90,
  Hard: 150,
  Olympiad: 240,
};

export function expectedSeconds(d: PYQDifficulty): number {
  return EXPECTED_SECONDS[d] ?? 90;
}

// ── Bank filtering for the matrix ────────────────────────────────────────────

/** Apply a bank type's pyqType + predicate to a pool. Pure. */
export function filterBankType(pool: PYQQuestion[], t: EngineQType): PYQQuestion[] {
  if (t.source !== "bank" || !t.pyqType) return [];
  let out = pool.filter((q) => q.questionType === t.pyqType && q.options);
  if (t.predicate === "ncertDirect") out = out.filter((q) => q.ncertDirect);
  if (t.predicate === "statement") {
    out = out.filter((q) => /statement\s|statement-|Statement I|Statement 1|Statements?:/i.test(q.question));
  }
  return out;
}

export const SUPPORT_EMAIL = "hello@synergicbond.com";
