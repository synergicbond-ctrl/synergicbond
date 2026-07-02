// ─────────────────────────────────────────────────────────────────────────────
// Phase 2 — Chemistry Knowledge Graph — Main Index
// Single import point for all 4 knowledge systems + unified search.
// ─────────────────────────────────────────────────────────────────────────────

export * from "./schema";

// Data exports
export { REAGENTS, getReagent, getReagentsByRole, getHighYieldReagents, searchReagents } from "./reagents";
export { EXCEPTIONS, getException, getExceptionsByChapter, getExceptionsByType, getHighYieldExceptions, searchExceptions } from "./exceptions";
export { ORGANIC_ORDERS } from "./orders/organic";
export { PHYSICAL_ORDERS } from "./orders/physical";

import { REAGENTS } from "./reagents";
import { EXCEPTIONS } from "./exceptions";
import { ORGANIC_ORDERS } from "./orders/organic";
import { PHYSICAL_ORDERS } from "./orders/physical";

export const ALL_ORDERS = [...ORGANIC_ORDERS, ...PHYSICAL_ORDERS];

// ── Unified search index ─────────────────────────────────────────────────────

import type { KnowledgeSearchResult, KnowledgeEntityType, ExamFreq } from "./schema";
import { maxFreq } from "./schema";

const FREQ_RANK: Record<ExamFreq, number> = {
  "None": 0, "Low": 1, "Medium": 2, "High": 3, "Very High": 4,
};

export function knowledgeSearch(query: string, limit = 20): KnowledgeSearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: KnowledgeSearchResult[] = [];

  // Search reagents
  for (const r of REAGENTS) {
    const score = scoreText(q, [r.name, ...r.aliases, r.formula, r.definition, ...r.examRelevance.tags, ...r.relatedConcepts]);
    if (score > 0) {
      results.push({
        type: "reagent" as KnowledgeEntityType,
        id: r.id,
        title: r.name,
        category: r.category,
        chapter: r.category,
        snippet: r.definition.slice(0, 150) + "…",
        examFreqMax: maxFreq(r.examRelevance),
        score,
      });
    }
  }

  // Search exceptions
  for (const e of EXCEPTIONS) {
    const score = scoreText(q, [e.title, e.observation, e.chapter, ...e.examRelevance.tags, ...e.relatedConcepts]);
    if (score > 0) {
      results.push({
        type: "exception" as KnowledgeEntityType,
        id: e.id,
        title: e.title,
        category: e.category,
        chapter: e.chapter,
        snippet: e.observation.slice(0, 150) + "…",
        examFreqMax: maxFreq(e.examRelevance),
        score,
      });
    }
  }

  // Search orders
  for (const o of ALL_ORDERS) {
    const score = scoreText(q, [o.title, o.property, o.chapter, o.order, ...o.examRelevance.tags, ...o.relatedConcepts]);
    if (score > 0) {
      results.push({
        type: "order" as KnowledgeEntityType,
        id: o.id,
        title: o.title,
        category: o.category,
        chapter: o.chapter,
        snippet: o.order.slice(0, 150),
        examFreqMax: maxFreq(o.examRelevance),
        score,
      });
    }
  }

  return results
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return FREQ_RANK[b.examFreqMax] - FREQ_RANK[a.examFreqMax];
    })
    .slice(0, limit);
}

function scoreText(query: string, fields: string[]): number {
  const haystack = fields.join(" ").toLowerCase();
  if (haystack.includes(query)) return 10; // exact phrase match
  const terms = query.split(/\s+/).filter(Boolean);
  return terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
}

// ── Stats ────────────────────────────────────────────────────────────────────

export const KNOWLEDGE_DB_STATS = {
  reagents:   REAGENTS.length,
  exceptions: EXCEPTIONS.length,
  orders:     ALL_ORDERS.length,
  total:      REAGENTS.length + EXCEPTIONS.length + ALL_ORDERS.length,
} as const;
