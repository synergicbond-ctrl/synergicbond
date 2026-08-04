// tests/feature-flags.test.ts — Phase 2 feature-flag infrastructure.
// Run: npm run test:feature-flags
//
// The module reads env at import time (a Next.js inlining constraint), so
// each scenario imports a fresh copy via a cache-busting query string after
// setting process.env.

import { test } from "node:test";
import assert from "node:assert/strict";

let importCounter = 0;
async function loadFlags(env: Record<string, string | undefined>) {
  delete process.env.NEXT_PUBLIC_FEATURE_FLAGS;
  delete process.env.NEXT_PUBLIC_FF_LOOP_PILOT_V1;
  Object.assign(process.env, env);
  importCounter += 1;
  return import(`../lib/featureFlags.ts?scenario=${importCounter}`);
}

test("all flags default OFF with no env", async () => {
  const { isFeatureEnabled, FEATURE_FLAGS } = await loadFlags({});
  for (const flag of Object.keys(FEATURE_FLAGS)) {
    assert.equal(isFeatureEnabled(flag), false, `${flag} must default OFF`);
  }
});

test("allow-list enables a flag", async () => {
  const { isFeatureEnabled } = await loadFlags({
    NEXT_PUBLIC_FEATURE_FLAGS: "loop_pilot_v1",
  });
  assert.equal(isFeatureEnabled("loop_pilot_v1"), true);
});

test("allow-list tolerates whitespace and extra entries", async () => {
  const { isFeatureEnabled } = await loadFlags({
    NEXT_PUBLIC_FEATURE_FLAGS: " something_else , loop_pilot_v1 ",
  });
  assert.equal(isFeatureEnabled("loop_pilot_v1"), true);
});

test("per-flag env enables with 1/true/on, case-insensitive", async () => {
  for (const value of ["1", "true", "TRUE", "on"]) {
    const { isFeatureEnabled } = await loadFlags({
      NEXT_PUBLIC_FF_LOOP_PILOT_V1: value,
    });
    assert.equal(isFeatureEnabled("loop_pilot_v1"), true, `value "${value}"`);
  }
});

test("malformed or falsy values stay OFF", async () => {
  for (const value of ["0", "false", "off", "yes please", ""]) {
    const { isFeatureEnabled } = await loadFlags({
      NEXT_PUBLIC_FF_LOOP_PILOT_V1: value,
    });
    assert.equal(isFeatureEnabled("loop_pilot_v1"), false, `value "${value}"`);
  }
});

test("flagEnvVar derives the documented env name", async () => {
  const { flagEnvVar } = await loadFlags({});
  assert.equal(flagEnvVar("loop_pilot_v1"), "NEXT_PUBLIC_FF_LOOP_PILOT_V1");
});
