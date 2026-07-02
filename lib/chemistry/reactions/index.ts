import { highYieldReactions } from "./data";

export { highYieldReactions };
export { reactionCategories, reactionsByCategory, reactionCategoryCounts } from "./categories";
export {
  getLinkedPYQQuestions,
  getPYQLinksForReaction,
  getPYQReactionLinkAudit,
  getPYQsForReaction,
  getReactionIdsForPYQ,
  getReactionsForPYQ,
  getUnlinkedPYQQuestions,
  pyqReactionLinks,
} from "./pyqLinks";
export { reactionSearchIndex, searchReactions } from "./searchIndex";
export type {
  ExamName,
  ExamRelevance,
  HighYieldReaction,
  NCERTReference,
  ReactionCategory,
  ReactionSearchEntry,
  ReactionType,
  PYQReactionLink,
} from "./schema";

export function getReactionById(id: string) {
  return highYieldReactions.find((reaction) => reaction.id === id) ?? null;
}
