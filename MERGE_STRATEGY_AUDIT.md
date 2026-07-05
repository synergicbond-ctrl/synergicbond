# Merge Strategy Audit — `week7-11-local` vs `origin/main`

**Date:** 2026-07-02
**Merge base:** `f7b3c9b` — fix(audit): correct PaywallGate price ₹199 → ₹149
**Local branch:** `week7-11-local` @ `d73e44b` — 5 commits, 38 files changed
**Remote branch:** `origin/main` @ `0bfd492` — 37 commits, 180 files changed

The two lines are **different product phases developed in parallel** since `f7b3c9b`:

| | `week7-11-local` | `origin/main` |
|---|---|---|
| Theme | Learn ecosystem (Weeks 4–11) | Monetization, hardening & beta launch (Weeks 1–2 of a separate track) |
| Content | PYQ Intelligence, Notes Engine SSOT, Snap & Solve deep links, Test Engine, Performance, AI Lab, knowledge-graph helpers | Razorpay payments, security/SEO/mobile hardening, lint-debt cleanup, Supabase migrations 006–009, beta usage analytics, its own knowledge graph / formula cards / PYQ surfaces |

---

## 1. Overlapping Files (changed on BOTH sides)

Only **3 files** textually overlap. `git merge-tree` dry run confirms:

| File | Merge result | Notes |
|---|---|---|
| `app/notes/page.tsx` | **CONFLICT** | Local: renders hand-authored `NotesExplorer`. Remote: full rewrite into an AI notes *generator* (Gemini via `/api/notes/generate`). Product decision, not a textual fix. |
| `app/pyq/page.tsx` | **CONFLICT** | Local: Phase-3 PYQ Intelligence UI on `lib/pyq/`. Remote: full rewrite on `lib/pyqDatabase` + `lib/chemistry/graph`. Two different engines behind one route. |
| `components/Navbar.tsx` | Auto-merges — **but is a hidden semantic conflict** | Remote's lint cleanup **deleted the icon imports** (`BookOpen`, `Target`, `ClipboardList`, `Activity`, `Bot`, `GraduationCap`, `Microscope`, `Trophy`) that local's new "Study & Track" / "Programs" menu groups use. Git merges the hunks cleanly; `tsc` will then fail. Must re-add ~8 icon imports during resolution. |

## 2. Conflicting Systems

| System | Local | Remote | Nature of conflict |
|---|---|---|---|
| **/notes route** | Verified, hand-authored SSOT (`lib/notesEngine.ts`, explicitly "NOT AI-generated") | AI-generated notes on demand (`/api/notes/generate`, language/difficulty options) | **Philosophical + same URL.** Both can coexist at different routes — remote's generator is literally the backend for local AI Lab's "AI Notes — Coming Soon" card. |
| **/pyq route** | `lib/pyq/` (zod schema, analytics, prediction, search; 100 questions) | `lib/pyqDatabase.ts` (chapterId-keyed, `reactionIds` graph links) + `lib/chemistry/graph` | Two databases, two UIs, one route. |
| **Formula vault** | `lib/masterSyllabus/formulas.ts` → `/vault/formulas` | `lib/chemistry/formulas/*` (schema + search index) → `/formula-cards` + API | Duplicate catalogues at different routes; local Snap & Solve and knowledge helpers point at `/vault/formulas`. |
| **`lib/chemistry/` directory** | **Untracked** files this workspace depends on: `schema.ts`, `reagents.ts`, `exceptions.ts`, `orders/`, `index.ts`, `reactions/index.ts` | Tracked, different contents: `formulas/`, `graph/`, `ncert/`, `reactions/` (its `reactions/index.ts` **differs** from the local untracked one) | See §7 — blocker. A merge checkout will collide on `lib/chemistry/reactions/index.ts` (untracked local file vs incoming tracked file). |

## 3. Duplicate Implementations

1. **Knowledge graph** — `lib/knowledge/graph.ts` (local) vs `lib/chemistry/graph/{schema,links,index}.ts` + `/api/knowledge-graph` (remote). Detail in §4.
2. **PYQ storage/engine** — `lib/pyq/questions/*` (local) vs `lib/pyqDatabase.ts` (remote-evolved). Detail in §5.
3. **Formula catalogues** — `masterFormulas` (local usage) vs `formulaCards` (remote). Same chemistry content authored twice with different schemas.
4. **Notes products** — curated SSOT chapters (local) vs generated notes + `/handwritten-notes` uploads (remote).
5. **Navbar surfacing** — local added Study & Track / Programs mega-menu groups; remote trimmed and type-hardened the same file.

## 4. Knowledge Graph Overlaps

| | Local `lib/knowledge/graph.ts` | Remote `lib/chemistry/graph/` |
|---|---|---|
| Anchor | Notes chapter (3 chapters) | Reactions / NCERT entities / formulas |
| Shape | Linear chain: Chapter → Notes → Formula → PYQ → Test → Snap & Solve | True node+edge graph (7 edge types, validation audits, orphan detection) |
| Size | ~130 lines, derived at import time | Multi-file system with API route, search, per-entity subgraphs |
| Consumers | `/performance` stats, AI Lab Revision Generator | Remote `/pyq`, `/formula-cards`, `/api/knowledge-graph` |

**Verdict:** complementary in scope but overlapping in purpose ("link a PYQ to its concept sources"). Remote's is the deeper foundation; local's is a thin UX helper. Long-term they should consolidate into one module, with local's chapter-chain becoming a query over the remote graph. Short-term they can coexist (no file collisions).

## 5. PYQ Overlaps

- **Two question banks with different schemas**: local `lib/pyq/questions/{jeeMain,jeeAdvanced,neet}.ts` (zod-validated `PYQQuestion`, difficulty/frequency/trending/ncertDirect metadata) vs `lib/pyqDatabase.ts` (`Record<chapterId, PYQQuestion[]>` with `reactionIds` linking into the remote graph). Both banks exist in *both* trees; each side built its UI on a different one.
- **Local dependents of `lib/pyq/`**: Test Engine (all 55 tests reference its question ids), Snap & Solve deep links, `/performance` platform stats, PYQ analytics/prediction tabs.
- **Remote dependents of `pyqDatabase`**: remote `/pyq` page, `lib/chemistry/reactions/pyqLinks.ts`, knowledge-graph edges.
- The `app/pyq/page.tsx` conflict is therefore a **choice of engine for the route**, and the loser's UI code becomes dead weight until the banks are consolidated (dedup questions into one bank feeding both consumers — a Week-12+ task).

## 6. Performance Overlaps

- **Largely complementary, not duplicate.** Local `/performance` computes *learning outcomes* (readiness, weak/strong topics) from `exam_results` / `study_sessions` / `mistakes` / `saved_chapters`. Remote's analytics track *product usage* (`lib/betaAnalytics*`, `/beta-analytics`, `/beta-proof`, migration `009_beta_usage_analytics.sql`).
- **Remote is a prerequisite for local:** remote migration `007_progress_runtime_tables.sql` **creates the very tables** (`exam_results`, `mistakes`, `saved_chapters`) that local's `performanceEngine.ts` and the Control Center query. On a fresh database, local's Performance page only works *with* the remote migrations.
- Remote's usage-event tracking could later close local's honest gap ("PYQs attempted — not tracked yet").
- Remote also modified `lib/dashboardData.ts` and `GuestDashboardPreview.tsx` (files local reads but did not change) — no conflict.

## 7. Blockers Found During This Audit

1. **`week7-11-local` is not self-contained.** `lib/ai/snapSolveLinks.ts` (Week 8) imports `@/lib/chemistry`, but `lib/chemistry/` was never committed on the local line — it exists only as untracked files in this working copy. A fresh clone of `week7-11-local` fails `tsc`/build. The untracked `lib/chemistry` files must be committed to the branch (or the import re-pointed) as part of any integration.
2. **Untracked-file collision on merge:** `lib/chemistry/reactions/index.ts` exists untracked locally and tracked (different content) on remote — git will refuse the checkout mid-merge until the local file is committed, stashed, or removed.
3. **Navbar semantic conflict** (§1) — auto-merge compiles into a type error; fix is mechanical (re-add icon imports).

---

## Recommendation: **MERGE** (`origin/main` → `week7-11-local`, then PR to `main`)

| Option | Assessment |
|---|---|
| **Merge** ✅ | Both branches are published; merge preserves both histories and concentrates all conflict work into **one session with only 2 textual conflicts** (+1 known semantic fix). The 37 remote commits include payments, security fixes and migrations that must not be replayed or reordered. |
| Rebase | Would rewrite 5 already-pushed commits and force-push; replaying week7→week11 one-by-one across the remote's rewritten `/notes` and `/pyq` surfaces the same 2 conflicts repeatedly (once per commit touching them) for zero benefit. |
| Cherry-pick | Equivalent to rebase but manual; only sensible for taking a *subset* of local commits — we want all 5. |
| Keep separate | Defers the `/notes` and `/pyq` product decisions but blocks Week 12 (no single base to build on) and lets the four duplicate systems drift further apart. Divergence cost grows weekly. |

### Suggested merge-resolution decisions (product calls for the owner)

1. **Fix Blocker 1 first**: commit the untracked `lib/chemistry/` files to `week7-11-local` so the branch is self-contained and the merge checkout can't collide.
2. **`/notes`** → keep **local** (verified, hand-authored SSOT — the platform's stated trust differentiator). Re-home remote's generator as **AI Lab → "AI Notes"** (it exactly fills local's "Coming Soon" card; the `/api/notes/generate` route merges in without conflict).
3. **`/pyq`** → keep **local** (PYQ Intelligence UI; the Test Engine, Snap & Solve links and Performance stats all depend on `lib/pyq/`). Keep `pyqDatabase` + remote graph intact (no conflicts on those files); schedule question-bank consolidation as a Week-12+ task.
4. **Navbar** → accept the auto-merge, restore the 8 icon imports, keep remote's `LucideIcon` typing and lazy guest-state init (they're strictly better).
5. **Everything else merges clean** — remote's payments/security/migrations/beta-analytics and local's performance/ai-lab/tests don't touch each other's files.
6. Validate (`tsc`, build, lint) on the merge commit before PR-ing `week7-11-local` → `main`.

**Post-merge consolidation backlog (do not attempt inside the merge):** unify the two PYQ banks; unify `masterFormulas` vs `formulaCards`; make `lib/knowledge/graph.ts` a thin query layer over `lib/chemistry/graph`; wire remote usage-tracking into "PYQs attempted".
