// ─────────────────────────────────────────────────────────────────────────────
// Program Syllabus SSOT — reusable schema (the Program-Separation handoff's
// lib/programSyllabus, built from OFFICIAL uploaded documents only).
//
// ISOLATION CONTRACT: a ProgramSyllabus contains ONLY its own program's name,
// units and features. Renderers consuming this schema never display another
// program's name, tags or chapters. Units are transcriptions of the official
// syllabus documents (source recorded per program) — never invented; programs
// whose official document is not yet uploaded carry an empty `units` with an
// honest `pendingNote`.
// ─────────────────────────────────────────────────────────────────────────────

export type SyllabusBranch = "physical" | "inorganic" | "organic" | "general" | "practical";

export interface SyllabusUnit {
  id: string;
  /** Official unit number/code where the document numbers them. */
  code?: string;
  title: string;
  branch: SyllabusBranch;
  /** Key topics transcribed from the official document. */
  topics: string[];
}

export interface ProgramQType {
  key: string;
  label: string;
  /** Honest sourcing: verified bank · AI auto-graded · AI self-graded · authored. */
  source: "bank" | "ai-numeric" | "ai-self" | "ai-subjective" | "authored";
}

export interface ProgramFeatures {
  notes: boolean;
  pyqs: boolean;
  mocks: boolean;
  analytics: boolean;
  practicals: boolean;
  projects: boolean;
  viva: boolean;
}

export interface ProgramSyllabus {
  /** Stable program id — one of the nine premium programs. */
  programId: string;
  /** Display name — the ONLY program name shown inside this program. */
  name: string;
  /** Official document this tree was transcribed from. */
  source: string;
  /** Exam paper structure line (from the official document, when stated). */
  paperPattern?: string;
  units: SyllabusUnit[];
  questionTypes: ProgramQType[];
  features: ProgramFeatures;
  /** Honest note when the official document is pending upload. */
  pendingNote?: string;
}

export const BRANCH_LABELS: Record<SyllabusBranch, string> = {
  physical: "Physical Chemistry",
  inorganic: "Inorganic Chemistry",
  organic: "Organic Chemistry",
  general: "General",
  practical: "Practical",
};
