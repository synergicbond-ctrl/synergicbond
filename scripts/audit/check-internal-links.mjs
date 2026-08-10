// scripts/audit/check-internal-links.mjs — Phase 0 baseline: deterministic
// static internal-link validation.
//
//   node scripts/audit/check-internal-links.mjs            # report + exit code
//   node scripts/audit/check-internal-links.mjs --json     # machine output
//
// Scope and honesty rules:
//   • Only STRING-LITERAL hrefs are validated (href="/x", href={'/x'},
//     href={`/x`} without ${}). Anything dynamic is skipped, never guessed.
//   • External URLs, #anchors, mailto:, tel: are ignored.
//   • A path that resolves to a file under public/ is valid.
//   • Exit code is non-zero ONLY for high-confidence failures: a literal
//     internal href that matches no page route, no API handler, and no
//     public/ asset. Query strings and hashes are stripped before matching.
//   • Everything uncertain is a warning, so this can gate CI without false
//     build failures.
//   • Pre-existing findings recorded in link-check-baseline.json (keyed by
//     file + path, line-number independent) downgrade to warnings — the
//     check is a ratchet: it fails only on NEW broken links. Fixing a
//     baselined link and removing its entry tightens the ratchet.

import fs from "node:fs";
import path from "node:path";
import { discoverRoutes, matchRoute } from "./route-discovery.mjs";

const SCAN_DIRS = ["app", "components", "lib"];
const SCAN_EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".mjs"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);

// JSX attribute:  href="..."  href='...'  href={"..."}  href={'...'}  href={`...`}
// Object property (catalog/lesson data): href: "..."  hubHref: '...'  etc.
const HREF_RE =
  /(?:href\s*=\s*(?:\{\s*)?|[hH]ref\s*:\s*)(?:"([^"]*)"|'([^']*)'|`([^`]*)`)(?:\s*\})?/g;

/** Collect static internal hrefs from source. Exported for the inventory. */
export function collectStaticHrefs(repoRoot) {
  const results = [];
  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(full);
        continue;
      }
      if (!SCAN_EXT.has(path.extname(entry.name))) continue;
      const text = fs.readFileSync(full, "utf8");
      const lines = text.split("\n");
      for (let ln = 0; ln < lines.length; ln++) {
        for (const m of lines[ln].matchAll(HREF_RE)) {
          const raw = m[1] ?? m[2] ?? m[3] ?? "";
          if (m[3] !== undefined && raw.includes("${")) continue; // dynamic template
          if (!raw.startsWith("/")) continue; // external, anchor, mailto, tel, relative
          if (raw.startsWith("//")) continue; // protocol-relative external
          const clean = raw.split("#")[0].split("?")[0];
          if (clean === "") continue; // pure fragment on current page
          results.push({
            path: clean,
            raw,
            file: path.relative(repoRoot, full),
            line: ln + 1,
          });
        }
      }
    }
  }
  for (const dir of SCAN_DIRS) walk(path.join(repoRoot, dir));
  results.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
  return results;
}

function isPublicAsset(repoRoot, href) {
  const candidate = path.join(repoRoot, "public", ...href.split("/").filter(Boolean));
  const normalized = path.normalize(candidate);
  if (!normalized.startsWith(path.join(repoRoot, "public"))) return false;
  return fs.existsSync(normalized);
}

function loadBaseline(repoRoot) {
  const baselinePath = path.join(
    repoRoot,
    "scripts",
    "audit",
    "link-check-baseline.json"
  );
  try {
    const entries = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
    return new Set(entries.map((e) => `${e.file}::${e.path}`));
  } catch {
    return new Set();
  }
}

function main() {
  const repoRoot = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "../.."
  );
  const asJson = process.argv.includes("--json");
  const routes = discoverRoutes(path.join(repoRoot, "app"));
  const hrefs = collectStaticHrefs(repoRoot);
  const baseline = loadBaseline(repoRoot);

  const broken = [];
  const known = [];
  const seen = new Set();
  let checked = 0;

  for (const link of hrefs) {
    checked++;
    if (matchRoute(link.path, routes)) continue;
    if (isPublicAsset(repoRoot, link.path)) continue;
    const key = `${link.path}::${link.file}:${link.line}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (baseline.has(`${link.file}::${link.path}`)) known.push(link);
    else broken.push(link);
  }

  if (asJson) {
    console.log(
      JSON.stringify(
        { checked, brokenCount: broken.length, broken, knownCount: known.length, known },
        null,
        2
      )
    );
  } else {
    console.log(`check-internal-links: ${checked} static internal hrefs checked`);
    for (const k of known) {
      console.log(`  warning (baselined): ${k.file}:${k.line}  ${k.raw}`);
    }
    if (broken.length === 0) {
      console.log("check-internal-links: no NEW high-confidence broken links");
    } else {
      console.log(
        `check-internal-links: ${broken.length} NEW high-confidence broken link(s):`
      );
      for (const b of broken) {
        console.log(`  ${b.file}:${b.line}  ${b.raw}`);
      }
    }
  }
  process.exitCode = broken.length > 0 ? 1 : 0;
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(new URL(import.meta.url).pathname);
if (isDirectRun) main();
