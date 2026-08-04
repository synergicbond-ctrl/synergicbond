// lib/featureFlags.ts — lightweight typed feature flags (Phase 2 of the
// IA & Migration Map rollout).
//
// Design constraints, in order:
//   1. Every flag defaults OFF. Absent env ⇒ disabled. There is no code path
//      that turns a flag on without an explicit deployment-level opt-in.
//   2. Server- and client-safe: only `NEXT_PUBLIC_*` env vars are read, so
//      the same call returns the same answer in Server Components, Client
//      Components, and route handlers. (Consequence: flags are baked at
//      build time on Vercel — acceptable and intentional for the pilot;
//      flipping a flag is a redeploy, which doubles as the rollback story.)
//   3. Compile-time safety: `isFeatureEnabled` only accepts registered flag
//      names. Adding a flag means adding it to FEATURE_FLAGS first.
//
// Enabling a flag (either form):
//   NEXT_PUBLIC_FEATURE_FLAGS="loop_pilot_v1"        # comma-separated allow-list
//   NEXT_PUBLIC_FF_LOOP_PILOT_V1="1"                 # per-flag switch ("1"|"true"|"on")
//
// See docs/FEATURE_FLAGS.md for the registry and operating rules.

export const FEATURE_FLAGS = {
  /**
   * Learn→Retrieve→Revise pilot on a single Chemical Equilibrium lesson
   * (Migration Map Phase 2 / rollout Phase 5). OFF ⇒ the lesson renders
   * byte-identically to production today.
   */
  loop_pilot_v1: {
    description:
      "Chemical Equilibrium pilot: embedded retrieval placeholders on one lesson",
    owner: "ia-migration",
  },
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

const TRUTHY = new Set(["1", "true", "on"]);

/** `loop_pilot_v1` → `NEXT_PUBLIC_FF_LOOP_PILOT_V1` */
function perFlagEnvName(flag: FeatureFlag): string {
  return `NEXT_PUBLIC_FF_${flag.toUpperCase()}`;
}

/**
 * Next.js only inlines env vars into client bundles when they are accessed
 * as static property lookups (`process.env.NEXT_PUBLIC_X`), so the flag →
 * env read is an explicit map rather than a dynamic `process.env[name]`.
 * Registering a new flag without wiring it here fails the exhaustiveness
 * check below at compile time.
 */
const PER_FLAG_ENV: Record<FeatureFlag, string | undefined> = {
  loop_pilot_v1: process.env.NEXT_PUBLIC_FF_LOOP_PILOT_V1,
};

const ALLOW_LIST: ReadonlySet<string> = new Set(
  (process.env.NEXT_PUBLIC_FEATURE_FLAGS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
);

/**
 * True only when the flag is explicitly enabled for this deployment via the
 * allow-list or its per-flag env var. Unknown/absent/malformed ⇒ false.
 */
export function isFeatureEnabled(flag: FeatureFlag): boolean {
  if (ALLOW_LIST.has(flag)) return true;
  const value = PER_FLAG_ENV[flag];
  return value !== undefined && TRUTHY.has(value.toLowerCase());
}

/** Exported for tests and the docs generator; not for product code. */
export function flagEnvVar(flag: FeatureFlag): string {
  return perFlagEnvName(flag);
}
