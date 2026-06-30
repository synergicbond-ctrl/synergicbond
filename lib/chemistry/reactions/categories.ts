import { highYieldReactions } from "./data";
import { reactionCategories, type ReactionCategory } from "./schema";

export { reactionCategories };

export const reactionsByCategory: Record<ReactionCategory, typeof highYieldReactions[number][]> =
  reactionCategories.reduce(
    (acc, category) => {
      acc[category] = highYieldReactions.filter((reaction) => reaction.category === category);
      return acc;
    },
    {} as Record<ReactionCategory, typeof highYieldReactions[number][]>
  );

export const reactionCategoryCounts = reactionCategories.map((category) => ({
  category,
  count: reactionsByCategory[category].length,
}));
