import type { PremiumChapterNotes } from "./schema";
import { CHEMICAL_BONDING_NOTES } from "./content/chemicalBonding";
import { MOLE_CONCEPT_NOTES } from "./content/moleConcept";

import { ATOMIC_STRUCTURE_NOTES } from "./content/atomicStructure";
import { THERMODYNAMICS_NOTES } from "./content/thermodynamics";
import { EQUILIBRIUM_NOTES } from "./content/equilibrium";
import { IONIC_EQUILIBRIUM_NOTES } from "./content/ionicEquilibrium";

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
};

export function getPremiumNotes(chapterId: string): PremiumChapterNotes | undefined {
  return PREMIUM_NOTES[chapterId];
}

export type { PremiumChapterNotes, NoteBlock, NoteTopic, NoteSubtopic, NotesExam } from "./schema";
export { filterNotesForExam, notesStats } from "./schema";
