import { highYieldReactions } from "./data";
import { getPYQsForReaction } from "./pyqLinks";
import type { ReactionCategory, ReactionSearchEntry } from "./schema";

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export const reactionSearchIndex: ReactionSearchEntry[] = highYieldReactions.map((reaction) => ({
  id: reaction.id,
  name: reaction.name,
  category: reaction.category,
  reactionType: reaction.reactionType,
  ncertReference: reaction.ncertReference,
  examRelevance: reaction.examRelevance,
  linkedPYQIds: getPYQsForReaction(reaction.id).map((pyq) => pyq.id),
  text: normalize(
    [
      reaction.id,
      reaction.name,
      reaction.category,
      reaction.reactionType,
      reaction.reagents.join(" "),
      reaction.products.join(" "),
      reaction.conditions.join(" "),
      reaction.mechanism.join(" "),
      reaction.exceptions.join(" "),
      reaction.examRelevance.pyqTags.join(" "),
      reaction.ncertReference.chapter,
      reaction.ncertReference.topic,
      getPYQsForReaction(reaction.id).map((pyq) => `${pyq.id} ${pyq.topic} ${pyq.question}`).join(" "),
    ].join(" ")
  ),
}));

export function searchReactions(
  query: string,
  options: { category?: ReactionCategory; limit?: number } = {}
) {
  const q = normalize(query);
  if (!q) return [];

  const terms = q.split(" ").filter(Boolean);
  const limit = options.limit ?? 20;

  return reactionSearchIndex
    .filter((entry) => !options.category || entry.category === options.category)
    .map((entry) => {
      const exactName = normalize(entry.name) === q ? 100 : 0;
      const prefixName = normalize(entry.name).startsWith(q) ? 40 : 0;
      const termScore = terms.reduce((score, term) => score + (entry.text.includes(term) ? 10 : 0), 0);
      return { entry, score: exactName + prefixName + termScore };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.name.localeCompare(b.entry.name))
    .slice(0, limit)
    .map((result) => ({
      ...highYieldReactions.find((reaction) => reaction.id === result.entry.id)!,
      relevanceScore: result.score,
    }));
}
