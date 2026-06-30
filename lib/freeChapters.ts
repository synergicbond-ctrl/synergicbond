export const FREE_CHAPTERS: Record<string, string[]> = {
  physical: ["mole-concept", "atomic-structure"],
  organic: ["goc", "general-organic-chemistry", "hydrocarbons"],
  inorganic: ["periodic-table", "chemical-bonding"],
  spectroscopy: ["introduction-to-spectroscopy"],
  analytical: ["gravimetric-analysis"],
};

export const ALL_FREE_CHAPTER_IDS = Object.values(FREE_CHAPTERS).flat();

export function isFreeChapter(chapterId: string): boolean {
  return ALL_FREE_CHAPTER_IDS.includes(chapterId);
}
