import type { PremiumChapterNotes, NotesExam } from "./schema";
import { filterNotesForExam } from "./schema";
import { CHEMICAL_BONDING_NOTES } from "./content/chemicalBonding";
import { MOLE_CONCEPT_NOTES } from "./content/moleConcept";

import { ATOMIC_STRUCTURE_NOTES } from "./content/atomicStructure";
import { THERMODYNAMICS_NOTES } from "./content/thermodynamics";
import { EQUILIBRIUM_NOTES } from "./content/equilibrium";
import { IONIC_EQUILIBRIUM_NOTES } from "./content/ionicEquilibrium";
import { P_BLOCK_NOTES } from "./content/pBlock";
import { QUALITATIVE_ANALYSIS_NOTES } from "./content/qualitativeAnalysis";

// ─────────────────────────────────────────────────────────────────────────────
// Premium Notes registry — chapterId (masterSyllabus dir id) → authored notes.
// Chemical Bonding is the flagship template; future chapters are one content
// file + one registry line. Pure data module (client-safe).
// ─────────────────────────────────────────────────────────────────────────────

export const PREMIUM_NOTES: Record<string, PremiumChapterNotes> = {
  "chemical-bonding": CHEMICAL_BONDING_NOTES,
  "mole-concept": MOLE_CONCEPT_NOTES,
  "atomic-structure": ATOMIC_STRUCTURE_NOTES,
  "thermodynamics": THERMODYNAMICS_NOTES,
  "chemical-equilibrium": EQUILIBRIUM_NOTES,
  "ionic-equilibrium": IONIC_EQUILIBRIUM_NOTES,
  "p-block-elements": P_BLOCK_NOTES,
  "qualitative-analysis": QUALITATIVE_ANALYSIS_NOTES,
};

export function getPremiumNotes(chapterId: string): PremiumChapterNotes | undefined {
  return PREMIUM_NOTES[chapterId];
}

export function getPremiumNotesForExam(chapterId: string, exam: NotesExam): PremiumChapterNotes | undefined {
  const notes = getPremiumNotes(chapterId);
  if (!notes) return undefined;
  const scoped = filterNotesForExam(notes, exam);
  return scoped.topics.length > 0 ? scoped : undefined;
}

export type { PremiumChapterNotes, NoteBlock, NoteTopic, NoteSubtopic, NotesExam } from "./schema";
export { filterNotesForExam, notesStats } from "./schema";
