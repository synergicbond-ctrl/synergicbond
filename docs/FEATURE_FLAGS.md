# Feature Flags

Lightweight, typed, deployment-level flags (`lib/featureFlags.ts`). Introduced in
Phase 2 of the IA & Migration Map rollout to gate the Chemical Equilibrium pilot.

## Rules

1. **Every flag defaults OFF.** No env ⇒ disabled, everywhere.
2. **Deployment-level, build-time.** Only `NEXT_PUBLIC_*` env is read, so server
   and client always agree. Flipping a flag = redeploy (on Vercel: set the env
   var, redeploy; unset + redeploy is the rollback).
3. **Typed registry.** `isFeatureEnabled()` accepts only names registered in
   `FEATURE_FLAGS`; unknown names are compile errors, never silent `false`.
4. **No per-user targeting.** If the pilot later needs cohorting, that is a new
   founder-approved capability, not an extension of this module.

## Enabling a flag

Either form works (allow-list wins if both are set):

```bash
# comma-separated allow-list
NEXT_PUBLIC_FEATURE_FLAGS="loop_pilot_v1"

# per-flag switch — accepts "1" | "true" | "on" (case-insensitive)
NEXT_PUBLIC_FF_LOOP_PILOT_V1="1"
```

## Usage

```ts
import { isFeatureEnabled } from "@/lib/featureFlags";

if (isFeatureEnabled("loop_pilot_v1")) {
  // pilot-only rendering
}
```

## Registry

| Flag | Purpose | Owner | Default |
| --- | --- | --- | --- |
| `loop_pilot_v1` | Embedded retrieval placeholders on one Chemical Equilibrium lesson; OFF renders the lesson byte-identical to production | ia-migration | OFF |

## Adding a flag

1. Add the entry to `FEATURE_FLAGS` in `lib/featureFlags.ts`.
2. Wire its env read in `PER_FLAG_ENV` (static property access — required for
   Next.js client inlining; the typed record makes omission a compile error).
3. Document it in the registry table above.
4. `npm run test:feature-flags`.
