import type { Mechanism } from "@/lib/mechanismSchema";
import { ACYLOIN } from "./acyloin";

// Hand-authored reference mechanisms, keyed by slug. These bypass AI generation
// (always accurate, instant) and act as the quality benchmark for the schema.
const SEEDS: Record<string, Mechanism> = {
  [ACYLOIN.slug]: ACYLOIN,
};

export function getSeed(slug: string): Mechanism | undefined {
  return SEEDS[slug];
}
