// ─────────────────────────────────────────────────────────────────────────────
// Launch-safety regression checks — deterministic, secret-free source/data
// assertions for the P0 invariants hardened before the Codex handover.
//
// Run:  node scripts/launch-safety-checks.mjs
// Exits non-zero if any invariant is violated. Safe for CI (no network, no env).
//
// These are intentionally text/filesystem assertions: they don't import the TS
// SSOTs (which pull server-only modules / @-aliases), so they run anywhere.
// ─────────────────────────────────────────────────────────────────────────────
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const has = (p) => existsSync(join(ROOT, p));

let failures = 0;
let checks = 0;
const notes = [];
function ok(msg) { checks++; console.log(`  ✓ ${msg}`); }
function fail(msg) { checks++; failures++; console.log(`  ✗ ${msg}`); }
function assert(cond, msg) { cond ? ok(msg) : fail(msg); }
function section(name) { console.log(`\n▸ ${name}`); }

/** Recursively collect files under a dir matching a predicate. */
function walk(dir, pred, acc = []) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return acc;
  for (const name of readdirSync(abs)) {
    const rel = join(dir, name);
    const st = statSync(join(ROOT, rel));
    if (st.isDirectory()) walk(rel, pred, acc);
    else if (pred(rel)) acc.push(rel);
  }
  return acc;
}

// 1 ── Premium note routes require authorization unless explicitly free ────────
section("1. Premium notes protected; free chapters preserved");
const PREMIUM_NOTES = [
  "electrochemistry", "concentration-terms", "eudiometry", "stoichiometry",
  "some-basic-concepts-of-chemistry",
];
const FREE_NOTES = ["mole-concept", "redox-reactions"];
for (const c of PREMIUM_NOTES) {
  const p = `app/notes/${c}/layout.tsx`;
  assert(has(p) && read(p).includes("requirePaidContent"),
    `premium /notes/${c} has an auth+entitlement layout (requirePaidContent)`);
}
for (const c of FREE_NOTES) {
  assert(!has(`app/notes/${c}/layout.tsx`),
    `free /notes/${c} has NO gating layout (stays free)`);
}
{
  const ca = read("lib/access/contentAccess.ts");
  assert(ca.includes('"/notes/"'), "proxy protects the /notes/ sub-prefix");
  assert(ca.includes("isFreeChapter"), "free chapters are exempted via isFreeChapter");
}

// 2 & 4 ── Board entitlement isolation ─────────────────────────────────────────
section("2/4. Board entitlement isolation (no cross-program unlock)");
{
  const p = "app/dashboard/[board]/[class]/layout.tsx";
  const src = has(p) ? read(p) : "";
  assert(src.includes("requireProgramEntitlement"), "board class layout enforces requireProgramEntitlement");
  assert(src.includes("${b.slug}:${c.slug}"), "board layout keys the entitlement to the exact <board>:<class>");
  const g = read("lib/auth/guards.ts");
  assert(g.includes("hasProgramAccess(programKey)"),
    "requireProgramEntitlement checks the exact program key (per-key isolation)");
  assert(/requireProgramEntitlement[\s\S]*?if \(!user\)[\s\S]*?redirect/.test(g),
    "unauthenticated users are redirected (auth alone never grants paid access)");
  assert(/requireProgramEntitlement[\s\S]*?if \(!ok\)[\s\S]*?\/pricing/.test(g),
    "unentitled signed-in users are sent to pricing");
}

// 3 ── Admin audit route protection ────────────────────────────────────────────
section("3. Admin audit route protection");
{
  const p = "app/admin/layout.tsx";
  assert(has(p) && read(p).includes("requireAdmin"), "/admin/* gated by requireAdmin (owner/admin)");
  const g = read("lib/auth/guards.ts");
  assert(/requireAdmin[\s\S]*?isPrivileged[\s\S]*?notFound\(\)/.test(g),
    "requireAdmin 404s non-privileged users (undiscoverable)");
}

// 5 ── Payment amount authority remains server-side ────────────────────────────
section("5. Payment amount authority is server-side");
{
  const src = read("app/api/payment/create-order/route.ts");
  assert(src.includes("PROGRAM_ACCESS_PRICE_PAISE_BY_KEY") && src.includes("PLANS"),
    "create-order derives amount from server-side PLANS / price map");
  assert(src.includes("amount = p.amount") || src.includes("amount = price"),
    "charged amount comes from the server catalogue, not the client");
  // The only client-supplied amount path is the donation branch, and it is
  // floor-guarded (₹499 minimum). Ensure that guard is present.
  assert(/Minimum contribution/.test(src),
    "the only client-amount path (donation) is floor-guarded");
}

// 6 ── Atomic Structure part & route counts ────────────────────────────────────
section("6. Atomic Structure part & route counts");
{
  const EXPECTED = 55;
  const partFiles = walk("app/learn/atomic-structure/parts",
    (p) => /parts\/part\d{2}\.tsx$/.test(p));
  assert(partFiles.length === EXPECTED, `${EXPECTED} part TSX files present (found ${partFiles.length})`);
  const route = read("app/learn/atomic-structure/[part]/page.tsx");
  const registered = (route.match(/\b\d{1,2}:\s*Part\d{2}\b/g) || []).length;
  assert(registered === EXPECTED, `${EXPECTED} parts registered in the [part] route map (found ${registered})`);
  assert(route.includes("generateStaticParams") && route.includes("atomicPartMeta"),
    "generateStaticParams enumerates every registered part");
  notes.push(`Atomic Structure: ${partFiles.length} part files, ${registered} routed.`);
}

// 7 ── "Some Basic Concepts" linked only to Class 11 board surfaces ────────────
section("7. Some Basic Concepts is Class 11 only");
{
  const syllabusFiles = walk("lib", (p) => /syllabus\.ts$/.test(p));
  let found = false, badClass = false, hasNotesLink = false;
  for (const f of syllabusFiles) {
    for (const line of read(f).split("\n")) {
      if (/id:\s*"some-basic-concepts"/.test(line)) {
        found = true;
        if (/class:\s*12/.test(line)) badClass = true;
        if (/\/notes\/some-basic-concepts-of-chemistry/.test(line)) hasNotesLink = true;
      }
    }
  }
  assert(found, "'some-basic-concepts' exists in a board syllabus SSOT");
  assert(!badClass, "'some-basic-concepts' is never tagged Class 12");
  assert(hasNotesLink, "'some-basic-concepts' links to its Class 11 notes surface");
}

// 8 ── Redox = Class 11, Electrochemistry = Class 12 ───────────────────────────
section("8. Redox is Class 11; Electrochemistry is Class 12");
{
  const cbse = read("lib/cbse/syllabus.ts");
  const redox = cbse.split("\n").find((l) => /id:\s*"redox-reactions"/.test(l)) || "";
  const echem = cbse.split("\n").find((l) => /id:\s*"electrochemistry"/.test(l)) || "";
  assert(/class:\s*11/.test(redox), "Redox Reactions tagged Class 11");
  assert(/class:\s*12/.test(echem), "Electrochemistry tagged Class 12");
}

// 9 ── Unverified PYQ counts reported; nothing silently verified ───────────────
section("9. PYQ verification honesty");
{
  const pyqFiles = walk("lib/pyq",
    (p) => p.endsWith(".ts") && !p.endsWith("schema.ts") && !/ 2\.ts$/.test(p));
  let needsReview = 0, verified = 0;
  for (const f of pyqFiles) {
    const src = read(f);
    needsReview += (src.match(/"NEEDS_MANUAL_REVIEW"/g) || []).length;
    verified += (src.match(/"VERIFIED_PYQ"/g) || []).length;
  }
  assert(verified === 0,
    `no PYQ is labelled VERIFIED without source review (found ${verified} verified literals)`);
  notes.push(`PYQ status: ${needsReview} NEEDS_MANUAL_REVIEW, ${verified} VERIFIED (in lib/pyq).`);
  // Report only — never mutate authenticity status here.
  console.log(`    (reported: ${needsReview} awaiting manual review)`);
}

// ── Summary ────────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(60)}`);
notes.forEach((n) => console.log(`  • ${n}`));
console.log(`${"─".repeat(60)}`);
if (failures) {
  console.error(`\n❌ Launch-safety checks FAILED: ${failures}/${checks} assertions failed.`);
  process.exit(1);
}
console.log(`\n✅ All ${checks} launch-safety assertions passed.`);
