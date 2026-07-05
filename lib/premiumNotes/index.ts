import type { PremiumChapterNotes } from "./schema";
import { CHEMICAL_BONDING_NOTES } from "./content/chemicalBonding";

// ─────────────────────────────────────────────────────────────────────────────
// Premium Notes registry — chapterId (masterSyllabus dir id) → authored notes.
// Chemical Bonding is the flagship template; future chapters are one content
// file + one registry line. Pure data module (client-safe).
// ─────────────────────────────────────────────────────────────────────────────

export const PREMIUM_NOTES: Record<string, PremiumChapterNotes> = {
  "chemical-bonding": CHEMICAL_BONDING_NOTES,
};

export function getPremiumNotes(chapterId: string): PremiumChapterNotes | undefined {
  return PREMIUM_NOTES[chapterId];
}

export type { PremiumChapterNotes, NoteBlock, NoteTopic, NoteSubtopic, NotesExam } from "./schema";
export { filterNotesForExam, notesStats } from "./schema";
