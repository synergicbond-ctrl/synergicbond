import { formulaCards } from "./data";
import type { FormulaSearchEntry, FormulaSearchResult } from "./schema";

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export const formulaSearchIndex: FormulaSearchEntry[] = formulaCards.map((card) => ({
  id: card.id,
  name: card.name,
  chapter: card.chapter,
  topic: card.topic,
  ncertReference: card.ncertReference,
  relatedPYQ: card.relatedPYQ,
  text: normalize(
    [
      card.id,
      card.name,
      card.formula,
      card.chapter,
      card.topic,
      card.variables.join(" "),
      card.units,
      card.derivation,
      card.exceptions.join(" "),
      card.relatedPYQ.join(" "),
      card.ncertReference.chapter,
      card.ncertReference.topic,
    ].join(" ")
  ),
}));

export function searchFormulaCards(query: string, limit = 20): FormulaSearchResult[] {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(" ").filter(Boolean);

  return formulaSearchIndex
    .map((entry) => ({
      entry,
      score: terms.reduce((sum, term) => sum + (entry.text.includes(term) ? 10 : 0), 0),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.name.localeCompare(b.entry.name))
    .slice(0, limit)
    .map((result) => ({
      ...formulaCards.find((card) => card.id === result.entry.id)!,
      relevanceScore: result.score,
    }));
}
