// scripts/audit/route-discovery.mjs — shared route-discovery library for the
// Phase 0 baseline audit (IA & Migration Map §10, Phase 0).
//
// Discovers routes from the real Next.js App Router filesystem (app/), never
// from a hard-coded list. Pure and deterministic: same tree in, same routes
// out, sorted. Consumed by route-inventory.mjs, check-internal-links.mjs and
// tests/route-audit.test.ts.

import fs from "node:fs";
import path from "node:path";

const PAGE_FILES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);
const HANDLER_FILES = new Set(["route.ts", "route.js"]);

/**
 * Route-family classification, taken from the approved IA & Migration Map
 * (docs: Phase 3 strategy, §02/§04). First path segment → family. Segments
 * not listed classify as "unknown" so new routes surface loudly instead of
 * silently joining a family.
 */
export const FAMILY_BY_SEGMENT = {
  learn: "learn",
  notes: "notes",
  chapter: "content-legacy",
  concept: "content-legacy",
  quiz: "practice",
  tests: "practice",
  exam: "practice",
  "exam-center": "practice",
  "daily-challenge": "practice",
  pyq: "practice",
  benchmark: "practice",
  assignment: "practice",
  "board-examiner": "practice",
  olympiad: "practice",
  olympiads: "practice",
  revision: "revise",
  memory: "revise",
  mistakes: "revise",
  "formula-cards": "revise",
  vault: "revise",
  "ai-lab": "ai",
  "doubt-solver": "ai",
  "snap-solve": "ai",
  coach: "ai",
  tutor: "ai",
  "exam-predictor": "ai",
  "reaction-predictor": "ai",
  "periodic-table": "reference",
  "periodic-trends": "reference",
  "name-reactions": "reference",
  "redox-reactions": "reference",
  reagents: "reference",
  "salt-colors": "reference",
  solubility: "reference",
  molecule: "reference",
  properties: "reference",
  "important-orders": "reference",
  ncert: "reference",
  library: "reference",
  "handwritten-notes": "reference",
  search: "reference",
  "chemistry-tools": "reference",
  "study-tools": "reference",
  dashboard: "progress",
  analytics: "progress",
  performance: "progress",
  activity: "progress",
  readiness: "progress",
  achievements: "progress",
  leaderboard: "progress",
  "study-plan": "progress",
  timers: "progress",
  programs: "programs",
  jee: "programs",
  neet: "programs",
  about: "account",
  pricing: "account",
  donate: "account",
  refund: "account",
  privacy: "account",
  terms: "account",
  support: "account",
  auth: "account",
  "reset-password": "account",
  admin: "internal",
  "control-center": "internal",
  upload: "internal",
  "beta-analytics": "internal",
  "beta-proof": "internal",
  api: "api",
  // Flagged NEEDS AUTHOR REVIEW in the migration map — kept "unknown" on
  // purpose until the founder classifies them (decision F5).
  gate: "unknown",
  live: "unknown",
  lab: "unknown",
  teachers: "unknown",
};

const NON_STUDENT_FAMILIES = new Set(["internal", "api"]);

/** Convert one app-dir path segment to its URL form. Returns null to skip. */
export function normalizeSegment(segment) {
  if (segment.startsWith("(") && segment.endsWith(")")) return null; // route group
  if (segment.startsWith("@")) return null; // parallel route slot
  if (segment.startsWith("[[...") && segment.endsWith("]]")) {
    return { type: "optional-catch-all", name: segment.slice(5, -2) };
  }
  if (segment.startsWith("[...") && segment.endsWith("]")) {
    return { type: "catch-all", name: segment.slice(4, -1) };
  }
  if (segment.startsWith("[") && segment.endsWith("]")) {
    return { type: "dynamic", name: segment.slice(1, -1) };
  }
  return { type: "static", name: segment };
}

/** Build the display pattern (e.g. /concept/:id) from normalized segments. */
export function toPattern(segments) {
  if (segments.length === 0) return "/";
  return (
    "/" +
    segments
      .map((s) => {
        if (s.type === "static") return s.name;
        if (s.type === "dynamic") return `:${s.name}`;
        if (s.type === "catch-all") return `:${s.name}+`;
        return `:${s.name}*`; // optional catch-all
      })
      .join("/")
  );
}

/**
 * Walk an app directory and return every route, sorted by pattern.
 * Each route: { pattern, segments, kind: "page"|"handler", sourceFile,
 *               family, studentFacing, dynamic }
 */
export function discoverRoutes(appDir) {
  const routes = [];

  function walk(dir, urlSegments) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.isFile()) {
        const isPage = PAGE_FILES.has(entry.name);
        const isHandler = HANDLER_FILES.has(entry.name);
        if (!isPage && !isHandler) continue;
        const pattern = toPattern(urlSegments);
        const first = urlSegments.find((s) => s.type === "static");
        const family =
          urlSegments.length === 0
            ? "home"
            : FAMILY_BY_SEGMENT[first ? first.name : ""] ?? "unknown";
        routes.push({
          pattern,
          segments: urlSegments,
          kind: isPage ? "page" : "handler",
          sourceFile: path.relative(path.dirname(appDir), path.join(dir, entry.name)),
          family,
          studentFacing:
            isPage && !NON_STUDENT_FAMILIES.has(family),
          dynamic: urlSegments.some((s) => s.type !== "static"),
        });
      } else if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name.startsWith("_")) continue;
        const normalized = normalizeSegment(entry.name);
        walk(
          path.join(dir, entry.name),
          normalized === null ? urlSegments : [...urlSegments, normalized]
        );
      }
    }
  }

  walk(appDir, []);
  routes.sort((a, b) => a.pattern.localeCompare(b.pattern));
  return routes;
}

/**
 * Match a concrete href path (no query/hash) against discovered routes.
 * Returns the matching route or null. Static match wins over dynamic.
 */
export function matchRoute(href, routes) {
  const parts = href.split("/").filter(Boolean);
  let dynamicMatch = null;
  for (const route of routes) {
    const segs = route.segments;
    if (!route.dynamic) {
      if (
        segs.length === parts.length &&
        segs.every((s, i) => s.name === parts[i])
      ) {
        return route; // exact static
      }
      if (segs.length === 0 && parts.length === 0) return route;
      continue;
    }
    if (dynamicMatch) continue;
    let i = 0;
    let ok = true;
    for (let j = 0; j < segs.length; j++) {
      const s = segs[j];
      if (s.type === "static") {
        if (parts[i] !== s.name) { ok = false; break; }
        i++;
      } else if (s.type === "dynamic") {
        if (i >= parts.length) { ok = false; break; }
        i++;
      } else if (s.type === "catch-all") {
        if (i >= parts.length) { ok = false; break; }
        i = parts.length;
      } else {
        i = parts.length; // optional catch-all matches zero or more
      }
    }
    if (ok && i === parts.length) dynamicMatch = route;
  }
  return dynamicMatch;
}
