// ─────────────────────────────────────────────────────────────────────────────
// CBSE Chemistry syllabus SSOT — the class-11 / class-12 curriculum source the
// Program-Separation handoff called for (lib/programSyllabus/cbse-class*).
//
// This is the CURRENT rationalised NCERT/CBSE Chemistry syllabus (2023-24
// onward). Every chapter maps onto:
//   • `masterId`  — the existing masterSyllabus chapter id, so /chapter/[id],
//                    notes and the chapter engine deep-link with no new data;
//   • `pyqChapters` — the PYQ-bank chapter enum value(s), so Practice, Tests,
//                    Analytics and non-repetition all read the REAL verified
//                    question bank. No question content is invented here.
//   • `learnHref` — set only for chapters that already have an authored premium
//                    notes page; others fall back to the chapter engine.
//
// Class assignment follows the standard NCERT Part-I (Class 11) / Part-II
// (Class 12) split and is stable regardless of syllabus rationalisation.
// Boards other than CBSE reuse this NCERT-aligned core (ICSE/State) — the
// dashboard is honest that only NCERT-anchored chapters are shown.
// ─────────────────────────────────────────────────────────────────────────────

import type { PYQChapter } from "@/lib/pyq";
import type { ClassSlug } from "@/lib/boardDashboard";

export type CbseCategory = "physical" | "inorganic" | "organic";

export interface CbseChapter {
  /** Stable slug, unique within the class. */
  id: string;
  /** Official CBSE unit number within the class. */
  unit: number;
  title: string;
  class: 11 | 12;
  category: CbseCategory;
  /** masterSyllabus chapter id → /chapter/[id], notes, engine. */
  masterId: string;
  /** PYQ-bank chapter enum value(s) → real questions for practice/tests. */
  pyqChapters: PYQChapter[];
  /** Authored premium notes route, when one exists. */
  learnHref?: string;
}

// ── Class 11 (NCERT Part I) ───────────────────────────────────────────────────
const CLASS_11: CbseChapter[] = [
  { id: "some-basic-concepts", unit: 1, title: "Some Basic Concepts of Chemistry", class: 11, category: "physical", masterId: "some-basic-concepts", pyqChapters: ["Some Basic Concepts"], learnHref: "/notes/some-basic-concepts-of-chemistry" },
  { id: "structure-of-atom", unit: 2, title: "Structure of Atom", class: 11, category: "physical", masterId: "structure-of-atom", pyqChapters: ["Atomic Structure"], learnHref: "/learn/atomic-structure" },
  { id: "classification-periodicity", unit: 3, title: "Classification of Elements & Periodicity", class: 11, category: "inorganic", masterId: "periodic-table", pyqChapters: ["Periodic Table"], learnHref: "/learn/periodic-table" },
  { id: "chemical-bonding", unit: 4, title: "Chemical Bonding & Molecular Structure", class: 11, category: "inorganic", masterId: "chemical-bonding", pyqChapters: ["Chemical Bonding"], learnHref: "/learn/chemical-bonding" },
  { id: "thermodynamics", unit: 5, title: "Thermodynamics", class: 11, category: "physical", masterId: "thermodynamics", pyqChapters: ["Thermodynamics"], learnHref: "/learn/thermodynamics" },
  { id: "equilibrium", unit: 6, title: "Equilibrium", class: 11, category: "physical", masterId: "equilibrium", pyqChapters: ["Equilibrium"] },
  { id: "redox-reactions", unit: 7, title: "Redox Reactions", class: 11, category: "physical", masterId: "redox-reactions", pyqChapters: ["Redox Reactions"] },
  { id: "organic-basics", unit: 8, title: "Organic Chemistry — Basic Principles & Techniques", class: 11, category: "organic", masterId: "general-organic-chemistry", pyqChapters: ["General Organic Chemistry"] },
  { id: "hydrocarbons", unit: 9, title: "Hydrocarbons", class: 11, category: "organic", masterId: "hydrocarbons", pyqChapters: ["Hydrocarbons"] },
];

// ── Class 12 (NCERT Part II) ──────────────────────────────────────────────────
const CLASS_12: CbseChapter[] = [
  { id: "solutions", unit: 1, title: "Solutions", class: 12, category: "physical", masterId: "solutions", pyqChapters: ["Solutions"] },
  { id: "electrochemistry", unit: 2, title: "Electrochemistry", class: 12, category: "physical", masterId: "electrochemistry", pyqChapters: ["Electrochemistry"] },
  { id: "chemical-kinetics", unit: 3, title: "Chemical Kinetics", class: 12, category: "physical", masterId: "chemical-kinetics", pyqChapters: ["Chemical Kinetics"] },
  { id: "d-f-block", unit: 4, title: "The d- and f-Block Elements", class: 12, category: "inorganic", masterId: "d-and-f-block-elements", pyqChapters: ["d and f Block Elements"] },
  { id: "coordination-compounds", unit: 5, title: "Coordination Compounds", class: 12, category: "inorganic", masterId: "coordination-compounds", pyqChapters: ["Coordination Compounds"] },
  { id: "haloalkanes-haloarenes", unit: 6, title: "Haloalkanes & Haloarenes", class: 12, category: "organic", masterId: "haloalkanes-and-haloarenes", pyqChapters: ["Haloalkanes and Haloarenes"] },
  { id: "alcohols-phenols-ethers", unit: 7, title: "Alcohols, Phenols & Ethers", class: 12, category: "organic", masterId: "alcohols-phenols-and-ethers", pyqChapters: ["Alcohols Phenols Ethers"] },
  { id: "aldehydes-ketones-acids", unit: 8, title: "Aldehydes, Ketones & Carboxylic Acids", class: 12, category: "organic", masterId: "aldehydes-ketones-and-carboxylic-acids", pyqChapters: ["Aldehydes Ketones", "Carboxylic Acids"] },
  { id: "amines", unit: 9, title: "Amines", class: 12, category: "organic", masterId: "amines", pyqChapters: ["Amines"] },
  { id: "biomolecules", unit: 10, title: "Biomolecules", class: 12, category: "organic", masterId: "biomolecules", pyqChapters: ["Biomolecules"] },
];

export const CBSE_SYLLABUS: Record<11 | 12, CbseChapter[]> = { 11: CLASS_11, 12: CLASS_12 };

/** class-11 → 11, class-12 → 12. */
export function classNumber(slug: ClassSlug): 11 | 12 {
  return slug === "class-12" ? 12 : 11;
}

export function getCbseChapters(cls: ClassSlug | 11 | 12): CbseChapter[] {
  const n = typeof cls === "number" ? cls : classNumber(cls);
  return CBSE_SYLLABUS[n];
}

export function getCbseChapter(cls: ClassSlug | 11 | 12, id: string): CbseChapter | undefined {
  return getCbseChapters(cls).find((c) => c.id === id);
}

/** Every PYQ-bank chapter the class touches — the real question pool scope. */
export function classPyqChapters(cls: ClassSlug | 11 | 12): PYQChapter[] {
  return [...new Set(getCbseChapters(cls).flatMap((c) => c.pyqChapters))];
}

/** Master-syllabus ids for the class — for chapter/notes deep-links. */
export function classMasterIds(cls: ClassSlug | 11 | 12): string[] {
  return getCbseChapters(cls).map((c) => c.masterId);
}

export const CATEGORY_LABEL: Record<CbseCategory, string> = {
  physical: "Physical Chemistry",
  inorganic: "Inorganic Chemistry",
  organic: "Organic Chemistry",
};
