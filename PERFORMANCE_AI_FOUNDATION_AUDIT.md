# Performance + AI Foundation Audit (Week 10–11)

Continues from commit `5315c4f` (Week 9 — Test Engine Foundation).

## Features Added

### Part A — Performance System (`/performance`)
- `lib/performance/types.ts` — client-safe types (mirrors the `controlCenterTypes` / `controlCenterData` split).
- `lib/performance/performanceEngine.ts` — server-only `fetchPerformanceData()`; returns `null` for guests.
- `components/performance/PerformanceView.tsx` — server component (zero client JS); signed-in view + guest view.
- `app/performance/page.tsx` — page shell, matches the `/tests` page layout conventions.

Sections implemented:
1. **Exam Readiness** — average accuracy of real `exam_results` rows per exam (NEET / JEE / Overall). No fallback numbers: an exam with no matching results shows "No tests yet".
2. **Weak Topics** — chapters ranked by recorded mistake count (top 5).
3. **Strong Topics** — studied chapters with **zero** recorded mistakes, ranked by session count (top 5). Rule stated in the UI.
4. **Revision Queue** — mistake chapters, most recent mistake first (top 6).
5. **Recent Activity** — merged `exam_results` + `study_sessions`, newest first (last 8).
6. **Progress Summary** — chapters studied (`x/33`), tests completed, study minutes, PYQs attempted (honest "—, tracking coming soon" — no table records attempts), linked chapters available (from knowledge graph).

### Part B — AI Lab (`/ai-lab`)
- `components/ai-lab/AILabHub.tsx` + `app/ai-lab/page.tsx`.
- **Snap & Solve** — Live link to `/snap-solve`. Architecture untouched (locked).
- **AI Tutor** — Live link to `/tutor` (already implemented, `/api/chat`). Linked, not placeholder, since the implementation exists.
- **Doubt Solver** — Live link to `/doubt-solver` (already implemented, `/api/doubt`). Linked for the same reason.
- **Study Planner** — Built-in, deterministic: week-by-week plan from master-syllabus chapter data only (difficulty asc, packed by `estimatedHours` into the chosen weekly budget). No AI call. Cross-links to the existing AI-powered `/study-plan`.
- **Revision Generator** — Built-in, deterministic: renders the chapter's hand-authored `revisionNotes` from the Notes Engine SSOT + knowledge-graph practice links. No AI call.
- **AI Notes** — "Coming soon" placeholder (points to verified `/notes` today).
- No new AI backend, no prompt changes, no Snap & Solve changes.

### Part C — Knowledge Graph Preparation
- `lib/knowledge/graph.ts` (the `lib/knowledge/` files were empty stubs) — linking helpers only, no visualization:
  - `KNOWLEDGE_GRAPH` — per-chapter chain Chapter → Notes → Formula → PYQ → Test → Snap & Solve.
  - `getChapterGraph(chapterId)` — lookup by Notes-Engine chapter id.
  - `KNOWLEDGE_GRAPH_STATS` — real counts (`linkedChapters`, `totalNodes`).
- Every node references an **existing** id: `NotesChapter.id`, `masterFormulas` key, `PYQChapter` enum value, `TestDefinition` from `CHAPTER_TESTS`. Counts are real catalogue counts. Chapters missing a link in a system simply omit that node. No new schemas.
- Consumed by: `/performance` ("Linked chapters available") and the AI Lab Revision Generator.

### Part D — Public Platform Polish
- `components/Navbar.tsx` — additive only, no redesign:
  - Learn mega-menu: new "📚 Study & Track" group (Notes, PYQ, Tests, Performance, AI Lab) and "🎓 Programs" group (JEE, NEET, Olympiad — existing routes).
  - Mobile `mainLinks`: added Notes, PYQ, Tests, Performance, AI Lab.
  - Learn button active-path list extended with the new routes.

## Data Sources Used
| Signal | Source | Notes |
|---|---|---|
| Exam readiness, tests completed, activity | Supabase `exam_results` | same table Control Center reads |
| Weak topics, revision queue | Supabase `mistakes` | same as dashboard |
| Strong topics, chapters studied, minutes | Supabase `study_sessions` + `saved_chapters` | same as dashboard |
| Platform stats | `NOTES_ENGINE_STATS`, `TEST_ENGINE_STATS`, `KNOWLEDGE_GRAPH_STATS` | static SSOT counts |
| Study Planner | `lib/masterSyllabus` (`physical`/`organic`/`inorganic`) | deterministic |
| Revision Generator | `lib/notesEngine` `NOTES_CHAPTERS.revisionNotes` | hand-authored SSOT |

## Empty States
- Guest on `/performance`: "No activity yet." + sign-in CTA + platform SSOT stats (no fabricated personal numbers).
- No tests: "Complete tests to unlock insights." (Exam Readiness).
- No mistakes/sessions: "No activity yet." per section (Weak, Strong, Revision Queue, Recent Activity).
- PYQs attempted: "—, tracking coming soon" — nothing in the DB records PYQ attempts, so no number is shown.
- AI Notes: "Coming soon" badge.

## Reused Systems (nothing rebuilt)
- Supabase server client (`lib/supabase/server`) and the exact table/query pattern from `lib/controlCenterData.ts` / `app/dashboard/page.tsx`.
- Test Engine (`lib/tests/testEngine.ts`), PYQ SSOT (`lib/pyq`), Notes Engine (`lib/notesEngine.ts`), master syllabus (`lib/masterSyllabus`), formula vault (`masterFormulas`).
- Existing live AI routes: `/snap-solve`, `/tutor`, `/doubt-solver`, `/study-plan` — untouched.
- UI conventions: `/tests` page shell, card/empty-state styling from `components/tests/TestEngine.tsx`.

## Blockers / Deferred
- **PYQ attempt tracking** — no table records PYQ attempts; the metric is shown as "not tracked yet". Needs a small attempts table (or reuse of `mistakes` with attempt rows) in a later phase.
- **Test Engine scoring** — the Test Runner is reveal-only (Week 9 foundation); test attempts therefore don't feed `exam_results` yet. Readiness currently reflects quiz/exam results already stored in `exam_results`.
- **Knowledge graph coverage** — anchored on the Notes Engine (3 chapters authored so far). Coverage grows automatically as notes chapters are added + one line in `CHAPTER_ALIGNMENT`.
- Pre-existing untracked repo files (audit/handover docs, `lib/chemistry/`) left untouched.
