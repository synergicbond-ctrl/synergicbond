import { formulaCards } from "./data";

export { formulaCards };
export { formulaSearchIndex, searchFormulaCards } from "./searchIndex";
export type { FormulaCard, FormulaSearchEntry } from "./schema";

export function getFormulaById(id: string) {
  return formulaCards.find((card) => card.id === id) ?? null;
}

export function getFormulasByChapter(chapter: string) {
  return formulaCards.filter((card) => card.chapter === chapter);
}
