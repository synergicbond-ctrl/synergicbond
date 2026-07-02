import { formulaCards } from "./data";
import { pyqDatabase } from "@/lib/pyqDatabase";
import { searchFormulaCards } from "./searchIndex";
import type {
  FormulaCardAudit,
  FormulaChapterSummary,
  FormulaQueryOptions,
  FormulaSearchResult,
} from "./schema";

export { formulaCards };
export { formulaSearchIndex, searchFormulaCards } from "./searchIndex";
export type {
  FormulaCard,
  FormulaCardAudit,
  FormulaChapterSummary,
  FormulaQueryOptions,
  FormulaSearchEntry,
  FormulaSearchResult,
} from "./schema";

export function getFormulaById(id: string) {
  return formulaCards.find((card) => card.id === id) ?? null;
}

export function getFormulasByChapter(chapter: string) {
  return formulaCards.filter((card) => card.chapter === chapter);
}

export function getFormulaChapterSummaries(): FormulaChapterSummary[] {
  const summaries = new Map<string, FormulaChapterSummary>();

  for (const card of formulaCards) {
    const existing = summaries.get(card.chapter);
    if (existing) {
      existing.count += 1;
    } else {
      summaries.set(card.chapter, {
        chapter: card.chapter,
        ncertReference: card.ncertReference,
        count: 1,
      });
    }
  }

  return Array.from(summaries.values()).sort(
    (a, b) => a.ncertReference.class - b.ncertReference.class || a.chapter.localeCompare(b.chapter)
  );
}

export function getFormulasForPYQ(pyqId: string): FormulaSearchResult[] {
  return formulaCards
    .filter((card) => card.relatedPYQ.includes(pyqId))
    .map((card) => ({ ...card, relevanceScore: 100 }));
}

export function queryFormulaCards(options: FormulaQueryOptions = {}): FormulaSearchResult[] {
  const { query = "", chapter = "", pyqId = "", limit = formulaCards.length } = options;
  const source = query.trim()
    ? searchFormulaCards(query, formulaCards.length)
    : formulaCards.map((card) => ({ ...card, relevanceScore: 0 }));

  return source
    .filter((card) => !chapter || card.chapter === chapter)
    .filter((card) => !pyqId || card.relatedPYQ.includes(pyqId))
    .slice(0, limit);
}

export function getFormulaCardAudit(): FormulaCardAudit {
  const seenIds = new Set<string>();
  const duplicateIds = new Set<string>();
  const pyqIds = new Set(Object.values(pyqDatabase).flatMap((questions) => questions.map((question) => question.id)));
  const orphanPYQIds = new Set<string>();

  for (const card of formulaCards) {
    if (seenIds.has(card.id)) duplicateIds.add(card.id);
    seenIds.add(card.id);

    for (const pyqId of card.relatedPYQ) {
      if (!pyqIds.has(pyqId)) orphanPYQIds.add(`${card.id}:${pyqId}`);
    }
  }

  return {
    formulaCount: formulaCards.length,
    chapterCount: getFormulaChapterSummaries().length,
    duplicateIds: Array.from(duplicateIds),
    orphanPYQIds: Array.from(orphanPYQIds),
    ncertLinked: formulaCards.filter((card) => Boolean(card.ncertReference.chapter && card.ncertReference.topic)).length,
    pyqLinked: formulaCards.filter((card) => card.relatedPYQ.length > 0).length,
  };
}
