# Phase 0 Baseline — Route & Analytics Audit

Phase 0 of the approved **Information Architecture & Migration Map** (Learn → Retrieve → Revise).
Scope: measurement and route integrity only. **No student-facing behaviour or visual changes ship in this phase.**

- Census date: 2026-08-04 · branch `chore/phase0-baseline-audit` off `main` (`895c295`, in sync with origin)
- Generated data: [`route-inventory.json`](./route-inventory.json) · [`route-inventory.md`](./route-inventory.md)
  (regenerate with `npm run audit:routes`)
- Link integrity: `npm run audit:links` (ratchet — see §5)

## 1 · Route totals

| Measure | Count |
| --- | ---: |
| Total route patterns discovered | 405 |
| Page routes | 364 |
| API handler routes | 41 |
| Student-facing pages | 359 |

## 2 · Student-facing pages by family

Families follow the migration map's classification (encoded in
`scripts/audit/route-discovery.mjs`; unmapped first segments classify as `unknown` on purpose).

| Family | Pages | Notes |
| --- | ---: | --- |
| learn | 181 | Tree 1 — deep authored lesson routes dominate the app |
| notes | 69 | Tree 2 — second authored tree |
| progress | 23 | dashboard, analytics, performance, activity, readiness, achievements, leaderboard, study-plan, timers |
| programs | 17 | includes `/programs/jee-advanced/chapter/*` sub-tree |
| reference | 16 | periodic-table, name-reactions, salt-colors, solubility, orders, ncert, library… |
| revise | 13 | revision, memory, mistakes, formula-cards, vault |
| practice | 12 | quiz, tests, exam, exam-center, pyq, daily-challenge, benchmark, assignment, board-examiner, olympiad(s) |
| account | 10 | auth + legal + commercial |
| ai | 8 | ai-lab, doubt-solver, snap-solve, coach, tutor, predictors |
| content-legacy | 5 | `/chapter/*`, `/concept/:id` |
| unknown | 4 | `/gate`, `/live`, `/lab`, `/teachers` — founder decision F5 pending |
| home / internal | 1 / 5 | — |

## 3 · Navigated-but-missing routes

None. Every statically identifiable navigation link resolves to an implemented route.

## 4 · Implemented but apparently unlinked routes

149 of 359 student-facing pages have **no statically detectable inbound link**
(full list in `route-inventory.md`). Two honest caveats before anyone reads this
as a dead-route list:

1. The scanner sees string-literal hrefs only (JSX `href=` and object `href:` /
   `hubHref:` properties). Links built with template variables — the pattern used
   by most lesson grids — are invisible to it. Deep lesson pages listed as
   "unlinked" are mostly reachable through dynamically built hrefs.
2. Deep links from notifications, bookmarks, search engines and redirects are
   equally invisible.

**Do not treat unlinked as obsolete.** The list's correct use: cross-reference with
traffic data (§10) to find pages that are both unlinked *and* untrafficked, then
classify those with the founder.

Notable standalone entries worth early review: `/chapter`, `/concept`,
`/exam-center`, `/board-examiner`, `/assignment`, `/benchmark/*`, `/gate`,
`/teachers`, and five `/programs/jee-advanced/chapter/*` pages.

## 5 · High-confidence broken links

Four, all pre-existing, all recorded in `scripts/audit/link-check-baseline.json`
so the CI check fails only on **new** breakage (ratchet pattern):

| Where | Broken href | Assessment |
| --- | --- | --- |
| `app/page.before-hero-extraction.tsx:17` | `/resources` | Unrouted homepage backup — not imported anywhere |
| `app/page.legacy.tsx:17` | `/resources` | Unrouted homepage backup — not imported anywhere |
| `components/Navbar.v1.tsx:30` | `/resources` | Unrouted navbar backup — not imported anywhere |
| `components/ControlCenter.tsx:280` | `/login` | **Rendered surface** (imported by `app/page.tsx`, `app/control-center/page.tsx`); auth lives under `/auth/*` |

Per Phase 0's zero-behaviour-change rule, none were fixed here. Recommended Phase 1
fixes: repoint `ControlCenter.tsx` to `/auth/signin`; archive or fix the three
unrouted backup files; then delete the four baseline entries to tighten the ratchet.

## 6 · Uncertain / warning-level cases (intentionally not failures)

- Template-literal hrefs containing `${…}` — skipped, never guessed.
- `router.push(…)` / `redirect(…)` calls — out of scope for the static scan.
- Hrefs in non-TS content (markdown bodies, DB-seeded content) — not scanned.
- 962 static hrefs were checked in total; everything not listed in §5 resolved
  against a page route, an API handler, or a `public/` asset.

## 7 · `/learn` ↔ `/notes` overlap observations

- Exactly **one same-slug counterpart candidate: `mole-concept`** (present in both
  trees). Slug equality is not content equivalence — F1 requires page-level
  comparison before any canonical decision.
- The trees are otherwise disjoint at the chapter-slug level (181 vs 69 pages),
  which materially **de-risks the F1 explorer merge**: it is a catalog-union
  problem, not a page-dedup problem, with one slug needing author adjudication.
- `chapterCatalog.ts` already spans both trees for the Notes Explorer — the
  natural seam for the Phase 1 unified catalog.

## 8 · Existing analytics & learning-event infrastructure

| Layer | Status | Detail |
| --- | --- | --- |
| `attempts` / `attempt_answers` (migration 010) | **Active, SSOT** | Documented as consumed by Memory Engine, Mistake Journal, Analytics, Readiness, Revision. `source` is already a free-text discriminator (observed values include `exam`, `ai`, `seed`, `generated`, `cache`, `verified-pyq-fallback`); `metadata jsonb` carries extra dimensions. **Phase 2 embedded checks fit with zero schema change** (`kind: 'practice'`, `source: 'embedded:<chapter>'`). |
| `memory_cards` (011) + `lib/spacedRepetition.ts` | **Active** | SM-2 implementation present; store in `lib/memory/store.ts`. Ready to be the Revise scheduler. |
| `revision_items` (012) | **Provisioned; V1 is device-local** | Migration header says localStorage-first by design; table is the future sync path. `lib/revision/store.ts`. |
| `study_sessions` + `user_xp` (007) | **Active** | Used by `/dashboard`, `/coach`, `/api/study-session`, dashboard libs. |
| `beta_usage_analytics` (009) + `lib/betaAnalytics*` + `BetaTracker` | **Active, first-party** | Anonymous/session ids in localStorage; tracked on signin/signup, search, snap-solve, monetization surfaces. Established privacy precedent for any future event work. |
| `@vercel/analytics` | **Active** | Page-view coverage via `GlobalEnhancements`; custom `track()` on pricing/payment/snap-solve/monetization. |
| Migration **018** | **Does not exist** | Latest migration is `017_contributions.sql`. Consistent with the founder directive, this task creates **no** new table. |
| Stale reference | Note | `package.json` still defines `test:portal-entitlements` pointing at a file that no longer exists (`tests/portal-entitlements.test.ts`). Left untouched; flag for cleanup. |

**Is a future append-only `learning_events` table genuinely necessary?** Deferred, leaning
minimal: attempts + metadata cover every *graded* interaction Phase 2 needs. A new table
would only be justified for non-graded reading telemetry (slice completion, example
reveals) once the pilot proves those signals drive decisions. Recommendation: run the
pilot's first lesson on `attempts` alone; revisit 018 with real usage evidence.

**Route-family traffic baseline — no new instrumentation required.** Vercel Analytics
already records per-path page views. The route→family mapping in `route-inventory.json`
can be applied offline to that data. Adding runtime events for this would violate
Phase 0's minimal-footprint rule for zero informational gain.

## 9 · Dependencies that block the Chemical Equilibrium pilot (Phase 2)

1. **F6 content**: faculty-authored retrieval items (checks, diagnostics, misconception
   probes) for the pilot lesson — the hard dependency; engineering cannot start the
   student-visible part without fixtures being replaced by approved items.
2. Feature-flag mechanism decision (env-based vs config-based) — none exists today as a
   general pattern; trivial to add, but the pattern choice should be deliberate.
3. Typed content schema for retrieval items (engineering; can proceed now).
4. Attempt-write client for `source: 'embedded:ceq'` (engineering; reuses `lib/attempts`).
5. F1 audit inputs (traffic per tree, indexing) — needed before any Phase 1 canonical
   work, **not** a blocker for the flag-gated pilot.

## 10 · Recommended Phase 1 / Phase 2 measurements

- Pull 30 days of Vercel Analytics path data; aggregate by family via the inventory
  mapping; publish per-family baseline (sessions, unique paths hit).
- For F1: per-tree organic-search landing counts and indexed-URL counts
  (Search Console) for `/learn/*` vs `/notes/*`.
- Cross-reference §4's unlinked list against traffic to produce the founder-review
  shortlist for F5.
- Baseline the four §5 links' 404 hit counts (confirms they are/aren't hit in practice).
- Pilot instrumentation plan: embedded-check attempt volume, completion per slice,
  day-3 return retrieval accuracy — all computable from `attempts` as-is.
