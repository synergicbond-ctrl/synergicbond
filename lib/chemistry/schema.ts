import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Phase 2 — Chemistry Knowledge Graph Schema
// Single source of truth for all 4 knowledge systems.
// Every entity is: Zod-validated, cross-linked, searchable, AI-consumable.
// ─────────────────────────────────────────────────────────────────────────────

export const KNOWLEDGE_SCHEMA_VERSION = 2 as const;

// ── Shared primitives ────────────────────────────────────────────────────────

export const ExamFreqSchema = z.enum(["None", "Low", "Medium", "High", "Very High"]);
export type ExamFreq = z.infer<typeof ExamFreqSchema>;

export const ChemCategorySchema = z.enum(["Organic", "Inorganic", "Physical", "Analytical", "General"]);
export type ChemCategory = z.infer<typeof ChemCategorySchema>;

export const DifficultySchema = z.enum(["Easy", "Moderate", "Hard", "Olympiad"]);

export const ExamRelevanceSchema = z.object({
  jeeMain:     ExamFreqSchema,
  jeeAdvanced: ExamFreqSchema,
  neet:        ExamFreqSchema,
  pyqCount:    z.number().int().nonnegative().optional(),
  lastAsked:   z.number().int().min(2000).max(2030).optional(),
  tags:        z.array(z.string()),
});
export type ExamRelevance = z.infer<typeof ExamRelevanceSchema>;

// ── 1. REAGENT ───────────────────────────────────────────────────────────────

export const ReagentRoleSchema = z.enum([
  "Oxidising Agent",
  "Reducing Agent",
  "Nucleophile",
  "Electrophile",
  "Acid",
  "Base",
  "Catalyst",
  "Dehydrating Agent",
  "Halogenating Agent",
  "Hydrogenating Agent",
  "Protecting Group Agent",
  "Coupling Agent",
  "Multi-role",
]);
export type ReagentRole = z.infer<typeof ReagentRoleSchema>;

export const ReagentSchema = z.object({
  id:                z.string(),
  name:              z.string(),
  aliases:           z.array(z.string()),
  formula:           z.string(),
  category:          ChemCategorySchema,
  role:              ReagentRoleSchema,
  definition:        z.string(),
  mechanism:         z.string(),
  conditions:        z.array(z.string()),
  selectivity:       z.string(),
  exceptions:        z.array(z.string()),
  relatedConcepts:   z.array(z.string()),
  examRelevance:     ExamRelevanceSchema,
  ncertReferences:   z.array(z.string()),
  memoryTriggers:    z.array(z.string()),
  reactionIds:       z.array(z.string()),
  reagentIds:        z.array(z.string()),
});
export type Reagent = z.infer<typeof ReagentSchema>;

// ── 2. EXCEPTION ─────────────────────────────────────────────────────────────

export const ExceptionTypeSchema = z.enum([
  "Anomalous Property",
  "Rule Violation",
  "Unexpected Stability",
  "Unexpected Reactivity",
  "Diagonal Relationship",
  "Inert Pair Effect",
  "Periodic Trend Exception",
  "Mechanism Exception",
  "Solubility Exception",
  "Hydrolysis Exception",
  "Other",
]);
export type ExceptionType = z.infer<typeof ExceptionTypeSchema>;

export const ExceptionSchema = z.object({
  id:              z.string(),
  title:           z.string(),
  category:        ChemCategorySchema,
  chapter:         z.string(),
  type:            ExceptionTypeSchema,
  observation:     z.string(),
  explanation:     z.string(),
  deeperReason:    z.string().optional(),
  relatedConcepts: z.array(z.string()),
  examRelevance:   ExamRelevanceSchema,
  ncertReferences: z.array(z.string()),
  memoryTriggers:  z.array(z.string()),
  reagentIds:      z.array(z.string()),
  reactionIds:     z.array(z.string()),
});
export type ChemException = z.infer<typeof ExceptionSchema>;

// ── 3. IMPORTANT ORDER ───────────────────────────────────────────────────────

export const OrderDirectionSchema = z.enum(["Increasing", "Decreasing", "Mixed"]);

export const KnowledgeOrderSchema = z.object({
  id:              z.string(),
  title:           z.string(),
  category:        ChemCategorySchema,
  chapter:         z.string(),
  property:        z.string(),
  order:           z.string(),
  direction:       OrderDirectionSchema,
  explanation:     z.string(),
  exceptions:      z.array(z.string()),
  relatedConcepts: z.array(z.string()),
  examRelevance:   ExamRelevanceSchema,
  ncertReferences: z.array(z.string()),
  memoryTriggers:  z.array(z.string()),
  verified:        z.boolean(),
});
export type KnowledgeOrder = z.infer<typeof KnowledgeOrderSchema>;

// ── 4. REACTION (Full knowledge-graph entry, separate from mechanism) ─────────

export const ReactionKnowledgeSchema = z.object({
  id:              z.string(),
  name:            z.string(),
  slug:            z.string(),
  category:        ChemCategorySchema,
  chapter:         z.string(),
  definition:      z.string(),
  mechanism:       z.string(),
  conditions:      z.array(z.string()),
  exceptions:      z.array(z.string()),
  relatedConcepts: z.array(z.string()),
  examRelevance:   ExamRelevanceSchema,
  ncertReferences: z.array(z.string()),
  memoryTriggers:  z.array(z.string()),
  reagentIds:      z.array(z.string()),
  reactionIds:     z.array(z.string()),
});
export type ReactionKnowledge = z.infer<typeof ReactionKnowledgeSchema>;

// ── Unified search result ────────────────────────────────────────────────────

export type KnowledgeEntityType = "reaction" | "reagent" | "exception" | "order";

export const KnowledgeSearchResultSchema = z.object({
  type:        z.enum(["reaction", "reagent", "exception", "order"]),
  id:          z.string(),
  title:       z.string(),
  category:    ChemCategorySchema,
  chapter:     z.string(),
  snippet:     z.string(),
  examFreqMax: ExamFreqSchema,
  score:       z.number(),
});
export type KnowledgeSearchResult = z.infer<typeof KnowledgeSearchResultSchema>;

// ── Validation helpers ───────────────────────────────────────────────────────

export function validateReagent(r: unknown): Reagent {
  return ReagentSchema.parse(r);
}
export function validateException(e: unknown): ChemException {
  return ExceptionSchema.parse(e);
}
export function validateOrder(o: unknown): KnowledgeOrder {
  return KnowledgeOrderSchema.parse(o);
}
export function validateReaction(r: unknown): ReactionKnowledge {
  return ReactionKnowledgeSchema.parse(r);
}

const FREQ_RANK: Record<ExamFreq, number> = {
  "None": 0, "Low": 1, "Medium": 2, "High": 3, "Very High": 4,
};

export function maxFreq(rel: ExamRelevance): ExamFreq {
  const vals: ExamFreq[] = [rel.jeeMain, rel.jeeAdvanced, rel.neet];
  return vals.reduce((best, cur) =>
    FREQ_RANK[cur] > FREQ_RANK[best] ? cur : best
  , "None" as ExamFreq);
}
