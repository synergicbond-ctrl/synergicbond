// ─────────────────────────────────────────────────────────────────────────────
// Week 12 — Free Chapter System (Roadmap Phase 8)
//
// Exactly ONE flagship free chapter per branch of chemistry:
//   • Organic   — General Organic Chemistry
//   • Physical  — Mole Concept
//   • Inorganic — Periodic Table
//
// Everything inside a free chapter stays fully unlocked (notes, PYQs, tests,
// formula cards, AI, mechanisms, analytics). Every other chapter is premium.
// Ids include the aliases used across the SSOTs (master-syllabus id + Notes
// Engine id) so `isFreeChapter` answers correctly for every caller.
// ─────────────────────────────────────────────────────────────────────────────

export const FREE_CHAPTERS: Record<string, string[]> = {
  organic: ["goc", "general-organic-chemistry"],
  physical: ["mole-concept", "redox-reactions"],
  inorganic: ["periodic-table"],
};

export const ALL_FREE_CHAPTER_IDS = Object.values(FREE_CHAPTERS).flat();

export function isFreeChapter(chapterId: string): boolean {
  return ALL_FREE_CHAPTER_IDS.includes(chapterId);
}
