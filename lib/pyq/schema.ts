import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Phase 3 — PYQ Intelligence Engine Schema
// Every question is tagged across 11 dimensions for maximum analytical power.
// ─────────────────────────────────────────────────────────────────────────────

export const PYQ_SCHEMA_VERSION = 3 as const;

// ── Enums ────────────────────────────────────────────────────────────────────

export const PYQExamSchema = z.enum(["JEE Main", "JEE Advanced", "NEET"]);
export type PYQExam = z.infer<typeof PYQExamSchema>;

export const PYQDifficultySchema = z.enum(["Easy", "Moderate", "Hard", "Olympiad"]);
export type PYQDifficulty = z.infer<typeof PYQDifficultySchema>;

export const PYQChapterSchema = z.enum([
  // Physical Chemistry
  "Some Basic Concepts",
  "Atomic Structure",
  "Chemical Bonding",
  "States of Matter",
  "Thermodynamics",
  "Equilibrium",
  "Redox Reactions",
  "Electrochemistry",
  "Chemical Kinetics",
  "Surface Chemistry",
  "Solutions",
  "Solid State",
  "Nuclear Chemistry",
  // Inorganic Chemistry
  "Periodic Table",
  "s-Block Elements",
  "p-Block Elements",
  "d and f Block Elements",
  "Coordination Compounds",
  "Hydrogen",
  "Metallurgy",
  "Qualitative Analysis",
  // Organic Chemistry
  "General Organic Chemistry",
  "Hydrocarbons",
  "Haloalkanes and Haloarenes",
  "Alcohols Phenols Ethers",
  "Aldehydes Ketones",
  "Carboxylic Acids",
  "Amines",
  "Biomolecules",
  "Polymers",
  "Chemistry in Everyday Life",
]);
export type PYQChapter = z.infer<typeof PYQChapterSchema>;

// ── Core question schema ─────────────────────────────────────────────────────

export const PYQQuestionSchema = z.object({
  // Identity
  id:           z.string(),
  exam:         PYQExamSchema,
  year:         z.number().int().min(2005).max(2026),
  session:      z.string().optional(),    // "Jan Session 1", "April", etc.
  questionNumber: z.number().int(),
  paperNumber:  z.number().int(),
  source:       z.string(),
  authenticityStatus: z.enum(["VERIFIED_PYQ", "ADAPTED_PYQ", "NEEDS_MANUAL_REVIEW"]),
  questionType: z.enum(["MCQ-Single", "MCQ-Multiple", "Integer", "Numerical", "Assertion-Reason"]).default("MCQ-Single"),

  // Content
  question:     z.string(),
  options:      z.record(z.string(), z.string()).optional(),   // {A,B,C,D} or {P,Q,R,S}
  answer:       z.string(),
  explanation:  z.string(),

  // 11-dimension tagging system
  chapter:      PYQChapterSchema,
  subtopic:     z.string(),
  concepts:     z.array(z.string()),               // e.g. ["Markovnikov's Rule", "Carbocation stability"]
  reactions:    z.array(z.string()),               // e.g. ["Aldol condensation", "Cannizzaro"]
  reagents:     z.array(z.string()),               // e.g. ["LiAlH4", "NaBH4"]
  exceptions:   z.array(z.string()),               // e.g. ["IE of O < N", "Fructose positive Fehling's"]
  formulas:     z.array(z.string()),               // e.g. ["ΔTf = Kf × m × i", "E = hν"]
  ncertLines:   z.array(z.string()),               // e.g. ["Class 12 Ch. 12 p.368"]
  difficulty:   PYQDifficultySchema,

  // Analytics metadata
  marks:        z.number().optional(),             // marks awarded for this question
  negMarks:     z.number().optional(),
  frequency:    z.number().int().nonnegative(),    // how many times this exact concept asked
  trending:     z.boolean().default(false),        // concept asked in last 3 years
  ncertDirect:  z.boolean().default(false),        // directly from NCERT text/example
});
export type PYQQuestion = z.infer<typeof PYQQuestionSchema>;

// ── Analytics output types ───────────────────────────────────────────────────

export const ChapterStatsSchema = z.object({
  chapter:          PYQChapterSchema,
  totalQuestions:   z.number(),
  byExam: z.object({
    jeeMain:     z.number(),
    jeeAdvanced: z.number(),
    neet:        z.number(),
  }),
  byDifficulty: z.object({
    Easy:      z.number(),
    Moderate:  z.number(),
    Hard:      z.number(),
    Olympiad:  z.number(),
  }),
  byYear:          z.record(z.string(), z.number()),  // { "2024": 5, "2023": 3, ... }
  topSubtopics:    z.array(z.object({ subtopic: z.string(), count: z.number() })),
  topConcepts:     z.array(z.object({ concept: z.string(), count: z.number() })),
  topReactions:    z.array(z.object({ reaction: z.string(), count: z.number() })),
  topReagents:     z.array(z.object({ reagent: z.string(), count: z.number() })),
  topExceptions:   z.array(z.object({ exception: z.string(), count: z.number() })),
  avgDifficulty:   z.number(),                     // 1=Easy → 4=Olympiad
  trend:           z.enum(["Increasing", "Stable", "Decreasing"]),
  lastAsked:       z.number(),
  predictedNext:   z.number().optional(),
});
export type ChapterStats = z.infer<typeof ChapterStatsSchema>;

export const TrendDataPointSchema = z.object({
  year:         z.number(),
  jeeMain:      z.number(),
  jeeAdvanced:  z.number(),
  neet:         z.number(),
  total:        z.number(),
});
export type TrendDataPoint = z.infer<typeof TrendDataPointSchema>;

export const ConceptFrequencySchema = z.object({
  concept:     z.string(),
  chapter:     PYQChapterSchema,
  totalCount:  z.number(),
  byExam: z.object({ jeeMain: z.number(), jeeAdvanced: z.number(), neet: z.number() }),
  lastAsked:   z.number(),
  trending:    z.boolean(),
  difficulty:  PYQDifficultySchema,
});
export type ConceptFrequency = z.infer<typeof ConceptFrequencySchema>;

export const PredictionSchema = z.object({
  chapter:           PYQChapterSchema,
  subtopic:          z.string(),
  concepts:          z.array(z.string()),
  confidenceScore:   z.number().min(0).max(100),   // 0–100
  reason:            z.string(),
  lastAskedYear:     z.number(),
  gapYears:          z.number(),                   // years since last asked
  examLikelihood: z.object({
    jeeMain:     z.number().min(0).max(100),
    jeeAdvanced: z.number().min(0).max(100),
    neet:        z.number().min(0).max(100),
  }),
});
export type Prediction = z.infer<typeof PredictionSchema>;

export const WeakAreaSchema = z.object({
  chapter:       PYQChapterSchema,
  subtopic:      z.string(),
  highFrequency: z.boolean(),
  difficult:     z.boolean(),
  questions:     z.array(z.string()),   // question IDs
  priority:      z.enum(["Critical", "High", "Medium", "Low"]),
});
export type WeakArea = z.infer<typeof WeakAreaSchema>;

export const SearchResultSchema = z.object({
  question:  PYQQuestionSchema,
  score:     z.number(),
  matchedOn: z.array(z.string()),   // which fields matched
});
export type SearchResult = z.infer<typeof SearchResultSchema>;

// ── Filter/Query types ───────────────────────────────────────────────────────

export interface PYQFilter {
  exam?:       PYQExam | PYQExam[];
  chapter?:    PYQChapter | PYQChapter[];
  subtopic?:   string;
  concept?:    string;
  reaction?:   string;
  reagent?:    string;
  exception?:  string;
  difficulty?: PYQDifficulty | PYQDifficulty[];
  yearFrom?:   number;
  yearTo?:     number;
  ncertDirect?: boolean;
  trending?:   boolean;
}
