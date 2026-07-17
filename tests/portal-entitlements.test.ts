import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  portalDestinationsForContext,
  resolveActiveProgramContext,
  type ActiveProgramCatalogEntry,
} from "../lib/portal/activeProgramState.ts";
import { getNextProgramOptionIndex } from "../lib/portal/programSwitcherKeyboard.ts";
import { hasPremiumLearnAccess } from "../lib/access/premiumLearnPolicy.ts";
import { addActiveEntitlementRows } from "../lib/access/entitlementRows.ts";
import { PROGRAM_CATALOG, programKeyToHref } from "../lib/programs.ts";

const CATALOG: ActiveProgramCatalogEntry[] = PROGRAM_CATALOG.map((program) => ({
  ...program,
  href: programKeyToHref(program.key),
}));

function resolve(options: Partial<Parameters<typeof resolveActiveProgramContext>[0]> = {}) {
  return resolveActiveProgramContext({
    hasUser: true,
    entitlementKeys: new Set<string>(),
    isAllAccess: false,
    isPrivileged: false,
    catalog: CATALOG,
    ...options,
  });
}

function source(path: string): string {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

test("free signed-in user resolves to the free workspace and truthful free destinations", () => {
  const ctx = resolve();
  assert.equal(ctx.hasUser, true);
  assert.equal(ctx.activeProgram, null);
  assert.deepEqual(ctx.entitledPrograms, []);
  assert.equal(ctx.canSwitchPrograms, false);
  assert.deepEqual(portalDestinationsForContext(ctx), {
    home: "/dashboard",
    learn: "/notes",
    practice: "/pyq",
    tests: "/tests",
    revision: "/revision",
    progress: "/performance",
    aiTools: "/ai-lab",
  });
});

test("one paid program is selected automatically and has no unnecessary switcher", () => {
  const ctx = resolve({ entitlementKeys: new Set(["neet"]) });
  assert.equal(ctx.activeProgram?.key, "neet");
  assert.equal(ctx.entitledPrograms.length, 1);
  assert.equal(ctx.canSwitchPrograms, false);
  assert.deepEqual(portalDestinationsForContext(ctx), {
    home: "/dashboard",
    learn: "/programs/neet/learn",
    practice: "/programs/neet/practice",
    tests: "/programs/neet/tests",
    revision: "/programs/neet/revision",
    progress: "/programs/neet/progress",
    aiTools: "/ai-lab",
  });
});

test("multiple programmes expose only entitled entries and honour a valid saved preference", () => {
  const ctx = resolve({
    entitlementKeys: new Set(["neet", "icse:class-11", "unrecognised-program"]),
    preferredProgramKey: "icse:class-11",
  });
  assert.deepEqual(ctx.entitledPrograms.map((program) => program.key), ["isc:class-11", "neet"]);
  assert.equal(ctx.activeProgram?.key, "isc:class-11");
  assert.equal(ctx.canSwitchPrograms, true);
});

test("all-access state exposes only catalogue programmes, not arbitrary entitlement keys", () => {
  const ctx = resolve({
    entitlementKeys: new Set([...CATALOG.map((program) => program.key), "olympiad", "retired-program"]),
    isAllAccess: true,
  });
  assert.equal(ctx.isAllAccess, true);
  assert.equal(ctx.activeProgramAccessSource, "all-access");
  assert.deepEqual(ctx.entitledPrograms.map((program) => program.key), CATALOG.map((program) => program.key));
});

test("expired entitlement omission makes a stale preference fall back to the remaining paid programme", () => {
  const keys = new Set<string>();
  addActiveEntitlementRows(keys, [
    { program_key: "neet", status: "active", expires_at: "2030-01-01T00:00:00.000Z" },
    { program_key: "jee-main", status: "active", expires_at: "2000-01-01T00:00:00.000Z" },
    { program_key: "jee-advanced", status: "cancelled", expires_at: null },
    { program_key: "cbse:class-11", status: "active", expires_at: "not-a-date" },
  ], Date.parse("2026-07-15T00:00:00.000Z"));
  assert.deepEqual([...keys], ["neet"]);

  const ctx = resolve({
    entitlementKeys: keys,
    preferredProgramKey: "jee-main",
  });
  assert.equal(ctx.activeProgram?.key, "neet");
  assert.deepEqual(ctx.entitledPrograms.map((program) => program.key), ["neet"]);
});

test("board programme destinations retain the entitled board and class context", () => {
  const ctx = resolve({ entitlementKeys: new Set(["cbse:class-11"]) });
  assert.deepEqual(portalDestinationsForContext(ctx), {
    home: "/dashboard",
    learn: "/dashboard/cbse/class-11/full-syllabus",
    practice: "/dashboard/cbse/class-11/practice",
    tests: "/dashboard/cbse/class-11/custom-test",
    revision: "/dashboard/cbse/class-11/revision",
    progress: "/dashboard/cbse/class-11/analytics",
    aiTools: "/ai-lab",
  });
});

test("tampered active-program preference is ignored rather than granting access", () => {
  const unknown = resolve({
    entitlementKeys: new Set(["neet"]),
    preferredProgramKey: "<script>untrusted</script>",
  });
  const knownButUnentitled = resolve({
    entitlementKeys: new Set(["neet"]),
    preferredProgramKey: "jee-advanced",
  });
  assert.equal(unknown.activeProgram?.key, "neet");
  assert.equal(knownButUnentitled.activeProgram?.key, "neet");
  assert.equal(knownButUnentitled.entitledPrograms.some((program) => program.key === "jee-advanced"), false);
});

test("active-program endpoint retains server-side rejection for malformed and unentitled switch requests", () => {
  const endpoint = source("app/api/portal/active-program/route.ts");
  assert.match(endpoint, /canonicalizeProgramKey\(programKey\)/);
  assert.match(endpoint, /status: 400/);
  assert.match(endpoint, /ctx\.entitledPrograms\.find/);
  assert.match(endpoint, /status: 403/);
  assert.match(endpoint, /httpOnly: true/);
});

test("switcher keyboard navigation wraps and supports Home, End, and Escape focus restoration", () => {
  assert.equal(getNextProgramOptionIndex("ArrowDown", 2, 3), 0);
  assert.equal(getNextProgramOptionIndex("ArrowUp", 0, 3), 2);
  assert.equal(getNextProgramOptionIndex("Home", 2, 3), 0);
  assert.equal(getNextProgramOptionIndex("End", 0, 3), 2);
  assert.equal(getNextProgramOptionIndex("Enter", 0, 3), null);
  const switcher = source("components/portal/ProgramSwitcher.tsx");
  assert.match(switcher, /onKeyDown=\{handleListKeyDown\}/);
  assert.match(switcher, /window\.requestAnimationFrame\(\(\) => triggerRef\.current\?\.focus\(\)\)/);
  assert.match(switcher, /onProgramChange\?: \(programKey: string\)/);
  assert.match(switcher, /if \(onProgramChange\)/);
});

test("premium notes are selected server-side and never imported by the client explorer", () => {
  const explorer = source("components/notes/NotesExplorer.tsx");
  const page = source("app/notes/page.tsx");
  assert.doesNotMatch(explorer, /\bNOTES_CHAPTERS\b/);
  assert.doesNotMatch(explorer, /\buseUnlocked\b/);
  assert.match(page, /const chapters = hasPremiumAccess \? NOTES_CHAPTERS : freeChapters/);
  assert.match(page, /An unavailable auth service must fail closed/);
  assert.match(page, /restrictedChapterIds=/);
});

test("shared premium learning chapters permit only their real eligible programme keys", () => {
  assert.equal(hasPremiumLearnAccess(new Set(["neet"]), "atomic-structure"), true);
  assert.equal(hasPremiumLearnAccess(new Set(["cbse:class-11"]), "chemical-bonding"), true);
  assert.equal(hasPremiumLearnAccess(new Set(["jee-main"]), "thermodynamics"), true);
  assert.equal(hasPremiumLearnAccess(new Set(["neet"]), "chemical-equilibrium"), false);
  assert.equal(hasPremiumLearnAccess(new Set(["jee-advanced"]), "chemical-equilibrium"), true);
  assert.equal(hasPremiumLearnAccess(new Set(), "atomic-structure"), false);
});

test("premium routes and enrolled full-syllabus dashboard execute server guards", () => {
  for (const path of [
    "app/learn/atomic-structure/layout.tsx",
    "app/learn/chemical-bonding/layout.tsx",
    "app/learn/thermodynamics/layout.tsx",
    "app/learn/chemical-equilibrium/layout.tsx",
  ]) {
    assert.match(source(path), /requirePremiumLearnAccess/);
  }
  assert.match(source("app/programs/[slug]/full-syllabus/page.tsx"), /requireProgramEntitlement\(slug, `\/programs\/\$\{slug\}\/full-syllabus`\)/);
});

test("premium lesson prose is server-rendered after the guard, not bundled into client lesson modules", () => {
  const atomicOverview = source("app/learn/atomic-structure/page.tsx");
  const atomicPart = source("app/learn/atomic-structure/parts/part01.tsx");
  const atomicShared = source("app/learn/atomic-structure/parts/_shared.tsx");
  const atomicNavigator = source("app/learn/atomic-structure/_components/AtomicStructurePartNavigator.tsx");
  const bonding = source("app/learn/chemical-bonding/page.tsx");
  assert.doesNotMatch(atomicOverview, /^"use client";/);
  assert.doesNotMatch(atomicPart, /^"use client";/);
  assert.doesNotMatch(atomicShared, /^"use client";/);
  assert.match(atomicNavigator, /^"use client";/);
  assert.match(atomicOverview, /parts=\{atomicPartMeta\}/);
  assert.doesNotMatch(bonding, /^"use client";/);
});

test("AI Lab sends only the server-authorized note subset to its client revision tool", () => {
  const hub = source("components/ai-lab/AILabHub.tsx");
  const page = source("app/ai-lab/page.tsx");
  assert.doesNotMatch(hub, /\bNOTES_CHAPTERS\b/);
  assert.doesNotMatch(hub, /\bgetChapterGraph\b/);
  assert.match(page, /const availableNotes = hasPremiumAccess/);
  assert.match(page, /NOTES_CHAPTERS\.filter\(\(chapter\) => isFreeChapter\(chapter\.id\)\)/);
  assert.match(page, /Missing\/unavailable auth must keep the client payload on the free subset/);
});

test("the dashboard does not report a false zero when the real revision queue cannot be read", () => {
  const reviseToday = source("components/dashboard/ReviseTodayCard.tsx");
  assert.match(reviseToday, /kind: "unavailable"/);
  assert.match(reviseToday, /Your revision queue is unavailable on this device right now/);
  assert.doesNotMatch(reviseToday, /catch\s*\{\s*(?:const\s+)?count\s*=\s*0/);
});

test("programme revision and progress paths keep the paid context guarded", () => {
  assert.match(source("app/programs/[slug]/revision/page.tsx"), /requireProgramEntitlement\(slug, `\/programs\/\$\{slug\}\/revision`\)/);
  assert.match(source("app/programs/[slug]/revision/[type]/page.tsx"), /requireProgramEntitlement\(slug, `\$\{baseHref\}\/\$\{type\}`\)/);
  assert.match(source("app/programs/[slug]/progress/page.tsx"), /requireProgramEntitlement\(slug, `\/programs\/\$\{slug\}\/progress`\)/);
  assert.match(source("app/dashboard/[board]/[class]/layout.tsx"), /requireProgramEntitlement/);
  assert.match(source("components/revision/RevisionWorkspace.tsx"), /Revision session links stay in this programme context/);
});

test("admin all-access subscription rendering uses the same privileged role as the portal resolver", () => {
  const subscription = source("components/subscription/SubscriptionDashboardClient.tsx");
  assert.match(subscription, /const roleAllAccess = isStaff/);
  assert.match(subscription, /const allAccess = roleAllAccess \|\| Boolean\(isPro\)/);
  assert.match(subscription, /\{roleAllAccess && !isPro &&/);
});

test("the browser fixture is explicitly development-only and has no production data dependency", () => {
  const fixtureRoute = source("app/test-fixtures/portal-matrix/page.tsx");
  const fixture = source("components/testing/PortalEntitlementMatrixFixture.tsx");
  assert.match(fixtureRoute, /process\.env\.NODE_ENV !== "development"/);
  assert.match(fixtureRoute, /PORTAL_ENTITLEMENT_TEST_MODE !== "1"/);
  assert.match(fixture, /No Supabase account, subscription, cookie, or production data is used/);
  assert.match(fixture, /addActiveEntitlementRows/);
  assert.match(fixture, /<ProgramSwitcher/);
  assert.match(fixture, /onProgramChange=/);
});
