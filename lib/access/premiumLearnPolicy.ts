// Closed, client-safe policy for direct shared premium-learning routes. The
// server guard consumes this policy; tests can exercise it without Supabase.

export const PREMIUM_LEARN_ELIGIBLE_PROGRAM_KEYS = {
  // These Class 11 core chapters are linked from all three entrance chapter
  // engines and the Class 11 board dashboards.
  "atomic-structure": [
    "neet", "jee-main", "jee-advanced",
    "cbse:class-11", "isc:class-11", "icse:class-11", "state-boards:class-11",
  ],
  "chemical-bonding": [
    "neet", "jee-main", "jee-advanced",
    "cbse:class-11", "isc:class-11", "icse:class-11", "state-boards:class-11",
  ],
  thermodynamics: [
    "neet", "jee-main", "jee-advanced",
    "cbse:class-11", "isc:class-11", "icse:class-11", "state-boards:class-11",
  ],
  // The direct 18-part Chemical Equilibrium route is only linked from the JEE
  // Advanced chapter engine. Other programmes retain their own scoped route.
  "chemical-equilibrium": ["jee-advanced"],
  isomerism: [
    "neet", "jee-main", "jee-advanced",
    "cbse:class-11", "isc:class-11", "icse:class-11", "state-boards:class-11",
  ],
} as const;

export type PremiumLearnChapter = keyof typeof PREMIUM_LEARN_ELIGIBLE_PROGRAM_KEYS;

export function hasPremiumLearnAccess(
  entitlementKeys: ReadonlySet<string>,
  chapter: PremiumLearnChapter,
): boolean {
  return PREMIUM_LEARN_ELIGIBLE_PROGRAM_KEYS[chapter].some((programKey) => entitlementKeys.has(programKey));
}
