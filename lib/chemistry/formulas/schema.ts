import type { NCERTReference } from "@/lib/chemistry/reactions";

export type FormulaCard = {
  id: string;
  formula: string;
  name: string;
  chapter: string;
  topic: string;
  variables: string[];
  units: string;
  derivation: string;
  exceptions: string[];
  ncertReference: NCERTReference;
  relatedPYQ: string[];
};

export type FormulaSearchEntry = {
  id: string;
  name: string;
  chapter: string;
  topic: string;
  ncertReference: NCERTReference;
  relatedPYQ: string[];
  text: string;
};

export type FormulaSearchResult = FormulaCard & {
  relevanceScore: number;
};

export type FormulaQueryOptions = {
  query?: string;
  chapter?: string;
  pyqId?: string;
  limit?: number;
};

export type FormulaChapterSummary = {
  chapter: string;
  ncertReference: NCERTReference;
  count: number;
};

export type FormulaCardAudit = {
  formulaCount: number;
  chapterCount: number;
  duplicateIds: string[];
  orphanPYQIds: string[];
  ncertLinked: number;
  pyqLinked: number;
};
