import { ncertEntityLinks } from "./data";
import type { NCERTEntityType, NCERTSearchEntry } from "./schema";

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export const ncertSearchIndex: NCERTSearchEntry[] = ncertEntityLinks.map((link) => ({
  ...link,
  text: normalize(
    [
      link.entityType,
      link.entityId,
      link.label,
      link.ncertReference.class,
      link.ncertReference.chapter,
      link.ncertReference.topic,
    ].join(" ")
  ),
}));

export function searchNCERTLinks(
  query: string,
  options: { entityType?: NCERTEntityType; limit?: number } = {}
) {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(" ").filter(Boolean);
  const limit = options.limit ?? 20;

  return ncertSearchIndex
    .filter((entry) => !options.entityType || entry.entityType === options.entityType)
    .map((entry) => ({
      entry,
      score: terms.reduce((sum, term) => sum + (entry.text.includes(term) ? 10 : 0), 0),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.label.localeCompare(b.entry.label))
    .slice(0, limit)
    .map((result) => ({ ...result.entry, relevanceScore: result.score }));
}
