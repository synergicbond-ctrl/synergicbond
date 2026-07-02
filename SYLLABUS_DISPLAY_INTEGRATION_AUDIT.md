# Syllabus Display Integration Audit

Base: `29b9674` (30-chapter master syllabus). Every syllabus display now consumes
`lib/masterSyllabus` (SSOT); no duplicate syllabus arrays remain in pages.

## New shared renderer

`components/syllabus/ExamSyllabus.tsx` — server component, zero client JS
(expand/collapse via native `<details>`, mobile-first). Filters the SSOT by exam
tag(s), groups by branch, and for each chapter shows: title · branch badge · exam
tags · difficulty + estimated hours · **official syllabus points** (the chapter's
concepts, text from the official exam PDFs) · linked routes (chapter page, Notes,
Formula Cards, PYQs, Tests, Snap & Solve). All counts derived.

## Display locations audited

| Location | Before | After |
|---|---|---|
| `/jee` | Hardcoded 18-topic list (drifted); dead `?topic=` note links | `ExamSyllabus exams={["JEE MAIN","JEE ADVANCED"]}` — 30 chapters, ~252h, per-chapter paper tags |
| `/neet` | Hardcoded 15-topic list — **still showed s-Block, dropped from rationalized NEET** | `ExamSyllabus exams={["NEET"]}` — 20 chapters, ~197h |
| `/olympiad` | Olympiad-level focus areas (kept — clearly "beyond JEE", not chapter syllabus) | + honest note: chapter-wise NSEC/INChO/IChO mapping coming soon; links JEE Advanced syllabus as foundation. **No faked syllabus.** |
| `/notes` (NotesExplorer) | Only the 3 authored chapters were browsable | All 30 SSOT chapters browsable. Authored (3) render the full 13-section notes (gating unchanged). Unauthored show the honest state: *"Detailed notes not added yet. Official syllabus available."* + official points + chapter/PYQ/Tests/Snap links. Header: "3 of 30 …" (derived). Notes are never fabricated. |
| `/chapter/[id]` | Already SSOT-driven | **No change needed** — header shows branch/exam tags/difficulty/hours; "Core Concepts" renders the official syllabus points; all 30 chapters get pages automatically via `allChapters`; free/premium gating untouched. |
| `/ai-lab` planner | Used SSOT (post-`29b9674`) but no counts shown | Exam pills show derived counts: NEET · 20 ch, JEE MAIN · 20 ch, JEE ADVANCED · 29 ch |
| `/performance`, dashboard, control center | Already derived (`masterSyllabus.length`) since `29b9674` | Verified, unchanged |
| `/pricing`, `/support` | De-numbered since `29b9674` | Verified, unchanged |
| `PaywallGate` | **2 stale "33 chapters" strings** (caught by this task's grep) | De-numbered ("every chapter") |
| `/study-plan` | Hardcoded 15-topic list (drifted: included Solid State but missed 16 chapters) | Topic list derives from SSOT titles (30) |
| `lib/examSyllabus.ts` | SSOT-driven, currently consumer-less | Untouched (already correct) |

## Observed but deliberately untouched (out of scope / other SSOTs)

- `components/home/HeroSearch.tsx`, `app/exam/page.tsx`, `app/teachers/page.tsx`,
  `components/AIChemistryEngine.tsx`, `app/vault/formulas/page.tsx` — mention chapter
  names as search suggestions / quiz configs / formula-vault keys tied to other
  catalogues, not syllabus displays. Flagged for the consolidation backlog.
- Snap & Solve resolution layer — locked architecture, untouched.
- `lib/syllabus/` — dead module (no consumers), untouched.

## Honesty rules upheld

- NEET tags remain sourced from the NTA rationalized syllabus (knowledge) — the UI
  makes **no claim of PDF verification for NEET**; JEE Main/Advanced content is from
  the attached official PDFs. NEET PDF still invited for full verification.
- International programs: no syllabus shown (coming-soon note only).
- Unauthored chapters show syllabus, never generated/fabricated notes.

## Validation

- Stale-count grep (`33 chapters|19 chapters|30 chapters`): **clean** (after PaywallGate fix)
- `npm run lint` 0 errors (2 pre-existing warnings) · `tsc --noEmit` clean · build 78/78
- Browser-verified: `/neet` 20 cards + s-Block absent + syllabus points + `/chapter/*` links;
  `/jee` 30 cards incl. Metallurgy; `/notes` 30 pills, honest unauthored state, authored
  chapters unaffected; planner derived counts; no horizontal overflow; zero console errors.
