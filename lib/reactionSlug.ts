import { NAME_REACTIONS } from "@/lib/nameReactions";

// URL slug for a reaction name. "[2+2] Cycloaddition" → "2-2-cycloaddition".
export function reactionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[[\]]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const SLUG_TO_NAME = new Map(NAME_REACTIONS.map((n) => [reactionSlug(n), n] as const));

// Resolve a slug back to the canonical reaction name (undefined if unknown).
export function reactionFromSlug(slug: string): string | undefined {
  return SLUG_TO_NAME.get(slug);
}
