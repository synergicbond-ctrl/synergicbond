// tests/route-audit.test.ts — Phase 0 route-audit tooling tests.
// Run: npm run test:route-audit
// (node --experimental-strip-types --test, same convention as
// test:portal-entitlements in package.json.)

import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

import {
  discoverRoutes,
  matchRoute,
  normalizeSegment,
  toPattern,
} from "../scripts/audit/route-discovery.mjs";
import { collectStaticHrefs } from "../scripts/audit/check-internal-links.mjs";

const FIXTURE_APP = path.join(import.meta.dirname, "fixtures", "route-audit", "app");

interface RouteRow {
  pattern: string;
  family: string;
  kind: string;
  studentFacing: boolean;
  dynamic: boolean;
}

test("normalizeSegment handles groups, params, catch-alls", () => {
  assert.equal(normalizeSegment("(marketing)"), null);
  assert.equal(normalizeSegment("@modal"), null);
  assert.deepEqual(normalizeSegment("learn"), { type: "static", name: "learn" });
  assert.deepEqual(normalizeSegment("[id]"), { type: "dynamic", name: "id" });
  assert.deepEqual(normalizeSegment("[...slug]"), { type: "catch-all", name: "slug" });
  assert.deepEqual(normalizeSegment("[[...parts]]"), {
    type: "optional-catch-all",
    name: "parts",
  });
});

test("toPattern renders the URL pattern", () => {
  assert.equal(toPattern([]), "/");
  assert.equal(
    toPattern([
      { type: "static", name: "concept" },
      { type: "dynamic", name: "id" },
    ]),
    "/concept/:id"
  );
});

test("discoverRoutes finds pages, handlers, strips route groups", () => {
  const routes = discoverRoutes(FIXTURE_APP) as RouteRow[];
  const patterns = routes.map((r) => r.pattern);
  assert.ok(patterns.includes("/"));
  assert.ok(patterns.includes("/learn/demo-chapter"));
  assert.ok(patterns.includes("/pricing")); // (marketing) group stripped
  assert.ok(patterns.includes("/concept/:id"));
  assert.ok(patterns.includes("/pyq/:slug+"));
  assert.ok(patterns.includes("/blog/:parts*"));
  const api = routes.find((r) => r.pattern === "/api/health")!;
  assert.equal(api.kind, "handler");
  assert.equal(api.studentFacing, false);
});

test("family classification follows the migration map", () => {
  const routes = discoverRoutes(FIXTURE_APP) as RouteRow[];
  const byPattern: Record<string, RouteRow> = Object.fromEntries(
    routes.map((r) => [r.pattern, r])
  );
  assert.equal(byPattern["/learn/demo-chapter"].family, "learn");
  assert.equal(byPattern["/notes/demo-chapter"].family, "notes");
  assert.equal(byPattern["/concept/:id"].family, "content-legacy");
  assert.equal(byPattern["/admin"].family, "internal");
  assert.equal(byPattern["/admin"].studentFacing, false);
  assert.equal(byPattern["/blog/:parts*"].family, "unknown"); // unmapped surfaces loudly
});

test("matchRoute: static beats dynamic; dynamic segment counts enforced", () => {
  const routes = discoverRoutes(FIXTURE_APP);
  assert.equal(matchRoute("/learn/demo-chapter", routes)?.pattern, "/learn/demo-chapter");
  assert.equal(matchRoute("/concept/hybridisation", routes)?.pattern, "/concept/:id");
  assert.equal(matchRoute("/concept/a/b", routes), null); // too many segments
  assert.equal(matchRoute("/pyq/jee/2024", routes)?.pattern, "/pyq/:slug+");
  assert.equal(matchRoute("/pyq", routes), null); // catch-all needs ≥1 segment
  assert.equal(matchRoute("/blog", routes)?.pattern, "/blog/:parts*"); // optional: 0 ok
  assert.equal(matchRoute("/does-not-exist", routes), null);
});

test("collectStaticHrefs: literals in, dynamics and externals out", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sb-linkscan-"));
  const appDir = path.join(dir, "app");
  fs.mkdirSync(appDir, { recursive: true });
  fs.writeFileSync(
    path.join(appDir, "sample.tsx"),
    [
      `<Link href="/learn/demo-chapter">ok</Link>`,
      `<a href="https://example.com/x">external</a>`,
      `<a href="#top">anchor</a>`,
      `<a href="mailto:hi@example.com">mail</a>`,
      `<a href="tel:+911234">tel</a>`,
      "<Link href={`/concept/${id}`}>dynamic template — skipped</Link>",
      `<Link href={"/notes/demo-chapter?tab=1#s2"}>query+hash stripped</Link>`,
      "<Link href={`/pyq/jee`}>static template — kept</Link>",
      `const lesson = { href: "/concept/data-driven", title: "object property — kept" };`,
      `const hub = { hubHref: "/pricing" };`,
    ].join("\n")
  );
  const found = collectStaticHrefs(dir) as Array<{ path: string }>;
  const paths = found.map((f) => f.path).sort();
  assert.deepEqual(paths, [
    "/concept/data-driven",
    "/learn/demo-chapter",
    "/notes/demo-chapter",
    "/pricing",
    "/pyq/jee",
  ]);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("false-positive prevention: fixture links all resolve against fixture routes", () => {
  const routes = discoverRoutes(FIXTURE_APP);
  for (const href of ["/", "/pricing", "/notes/demo-chapter", "/concept/x"]) {
    assert.ok(matchRoute(href, routes), `expected ${href} to resolve`);
  }
});
