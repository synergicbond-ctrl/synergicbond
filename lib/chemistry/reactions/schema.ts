import type { Reaction as MasterReaction } from "@/lib/masterSyllabus/types";

export const reactionCategories = [
  "Hydrocarbons",
  "Haloalkanes",
  "Alcohols",
  "Aldehydes",
  "Ketones",
  "Carboxylic Acids",
  "Amines",
] as const;

export type ReactionCategory = (typeof reactionCategories)[number];

export const reactionTypes = [
  "Addition",
  "Substitution",
  "Elimination",
  "Oxidation",
  "Reduction",
  "Redox",
  "Condensation",
  "Rearrangement",
  "Coupling",
  "Test",
  "Preparation",
] as const;

export type ReactionType = (typeof reactionTypes)[number];

export type ExamName = "NEET" | "JEE MAIN" | "JEE ADVANCED";

export type NCERTReference = {
  class: 11 | 12;
  chapter: string;
  topic: string;
};

export type ExamRelevance = {
  exams: ExamName[];
  priority: "high" | "medium";
  pyqTags: string[];
};

export type HighYieldReaction = MasterReaction & {
  category: ReactionCategory;
  reactionType: ReactionType;
  reagents: string[];
  products: string[];
  conditions: string[];
  mechanism: string[];
  exceptions: string[];
  relatedReactions: string[];
  examRelevance: ExamRelevance;
  ncertReference: NCERTReference;
};

export type ReactionSearchEntry = {
  id: string;
  name: string;
  category: ReactionCategory;
  reactionType: ReactionType;
  ncertReference: NCERTReference;
  examRelevance: ExamRelevance;
  linkedPYQIds: string[];
  text: string;
};

export type PYQReactionLink = {
  pyqId: string;
  chapterId: string;
  reactionIds: string[];
  reason: string;
};
