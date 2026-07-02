# Content Coverage Audit

**Date:** 2026-07-03 · **Commit:** 8c7170f · **Scope:** content depth limiting Learn, Practice, Tests, Memory, Revision before Month 2.

All counts below were computed by executing the actual data modules (`lib/pyq`, `lib/masterSyllabus`, `lib/tests/testEngine`, `lib/chemistry/*`) — nothing is estimated. Where this audit disagrees with the older `CONTENT_COVERAGE.md`, this file is current (see "Dual PYQ stores" below).

## Executive Summary

The platform's **structure is ahead of its content**. The Programs spine (7 hubs × Learn/Practice/Tests), the PYQ intelligence engine, and the test engine are all live and wired — but they run on **100 verified PYQs**, **3 fully-noted chapters (of 30)**, and **zero captured student answers**. The single binding constraint across Practice, Tests, Memory, and Mistake Journal is not features — it is (a) question volume and (b) the absence of an answer-capture + persistence layer. Memory-engine *content* (200 formulas, 700 name reactions, 207 orders, 47 exceptions, 31 reagents) already exists in verified form; what's missing is the recall/scheduling engine and durable per-user storage.

## Current Strengths

- **Verified reference library is deep:** 200 formula cards, 700 name reactions, 207 important orders, 47 chemistry exceptions, 31 reagents, 50 high-yield reactions, 324 NCERT entity links — all SSOT-driven with real counts.
- **Master syllabus is solid for entrance exams:** 30 chapters (10 physical / 10 organic / 10 inorganic), 90 official syllabus points, mapped to NEET (20 ch), JEE Main (20 ch), JEE Advanced (29 ch) from official 2026 PDFs.
- **PYQ engine schema is excellent:** every question tagged across 11 dimensions (chapter, subtopic, difficulty, year, reagents, exceptions, NCERT-direct, trending…) — the taxonomy needed for mistake categories and weak-concept detection already exists.
- **Test engine derives 55 real tests** from the question pool with per-exam tagging; no fabricated data anywhere.
- **Programs spine complete:** all 7 programs have hub + Learn + Practice + Tests with honest empty states.

## Critical Gaps

1. **100 PYQs is the ceiling on everything.** 23 chapter tests average ~4 questions each; a "full paper" is 3–5 questions. Real chapter tests need 20–30 Q; real papers need 45+.
2. **No answer capture.** TestEngine and QuestionCard are reveal-only ("Scoring — coming soon"). No student answer is ever recorded → Mistake Journal, weak-area detection, and adaptive revision are all blocked on this one layer.
3. **No durable per-user store for learning state.** `lib/memoryCore.ts` is explicitly ephemeral (in-memory, per warm instance, Snap & Solve-only proxy); `lib/progressTracker.ts` defines `WrongQuestionRecord` but has **zero consumers**. Supabase auth exists; no attempts/progress tables are used.
4. **Notes cover 3 of 30 chapters** (Mole Concept, Periodic Table, GOC — exactly the free chapters). The other 27 chapters show syllabus points only.
5. **Dual PYQ stores:** legacy `lib/pyqDatabase.ts` (34 Q, keyed by chapter) still feeds the `/learn` metric and some cross-links, while `lib/pyq` (100 Q) powers `/pyq`, practice and tests. Consolidation needed to avoid divergent counts.
6. **4 of 7 programs have zero mapped content** (Olympiad, CBSE, ICSE, State Boards) — honest empty states today, but CBSE is cheap to light up (NCERT-aligned content already exists).

## Program-wise Coverage

| Program | Syllabus chapters | PYQs | Tests | Learn | Status |
|---|---:|---:|---:|---|---|
| NEET | 20 | 33 | 35 | Full modules + chapters | 🟢 full spine, thin data |
| JEE Main | 20 | 45 | 41 | Full modules + chapters | 🟢 full spine, thin data |
| JEE Advanced | 29 | 22 | 30 | Full modules + chapters | 🟢 full spine, thin data |
| Olympiad | 0 | 0 | 0 | Modules only | 🟡 structure-only (honest) |
| CBSE | 0 | 0 | 0 | Modules only | 🟡 structure-only — cheapest to map (NCERT) |
| ICSE | 0 | 0 | 0 | Modules only | 🔴 no source content |
| State Boards | 0 | 0 | 0 | Modules only | 🔴 no source content |

## Learn Coverage

| Asset | Count | Notes |
|---|---:|---|
| Syllabus chapters mapped | 30 (90 syllabus points) | NEET 20 · JEE Main 20 · JEE Adv 29 |
| Full chapter notes | **3 / 30** | `NOTES_CHAPTERS` — Mole Concept, Periodic Table, GOC only |
| Formula cards | 200 | verified, physical-chemistry weighted |
| Knowledge Vault | 7 formulas · 3 exceptions · 3 note sets | vault runs on thin `masterSyllabus` stubs, NOT the rich `lib/chemistry` data; UI is legacy light-theme |
| Molecule Explorer | on-demand (Gemini + PubChem CID) | dynamic AI lookup — no stored verified molecule bank |
| NCERT highlights | 324 entity links | 50 reactions · 30 reagents · 207 orders · 34 PYQs · 3 exceptions; page-level highlights live only inside the 3 noted chapters |
| Name reactions | 700 | with mechanism links |
| Important orders | 207 | verified ordering sequences |
| Reagents | 31 | master list |
| Exceptions | 47 (`lib/chemistry/exceptions`) | vault only surfaces the 3 in `masterSyllabus/exceptions` |

## PYQ Coverage

**Total: 100** (`ALL_PYQ_QUESTIONS`) — JEE Main 45 (2020–24) · NEET 33 (2022–24) · JEE Advanced 22 (2018–23).

**By difficulty:** Easy 50 · Moderate 34 · Hard 14 · Olympiad 2.
Per-exam difficulty holes: **NEET has 1 Hard question**, JEE Main has 2 — both exams' Hard practice is effectively empty.

**By chapter (top / bottom):** Atomic Structure 9 · Chemical Bonding 8 · Aldehydes Ketones 7 · Thermodynamics 6 … Carboxylic Acids 1.

**Empty chapters (0 PYQs, 8 of 31):** States of Matter, Redox Reactions, Surface Chemistry, Solid State, Nuclear Chemistry, Hydrogen, Metallurgy, Qualitative Analysis.

**Weak chapters (1–2 PYQs):** Carboxylic Acids (1), Some Basic Concepts, Polymers, s-Block, Chemistry in Everyday Life (2 each).

**Dual-store issue:** legacy `pyqDatabase` (34 Q / 14 chapters) still referenced by `/learn` metric, `pyqEngine.ts`, and reaction cross-links.

## Test Coverage

**Total: 55 tests** from the 100-question pool.

| Category | Tests | JEE Main | JEE Adv | NEET | Status |
|---|---:|---:|---:|---:|---|
| Chapter | 23 | 19 | 15 | 19 | real, ~4 Q avg — **too thin for a real chapter test** |
| Topic | 17 | 15 | 7 | 10 | real, small drills |
| Revision | 3 | 3 | 3 | 3 | real (high-yield / NCERT / tough sets) |
| Previous papers ("Full Syllabus") | 12 | 4 | 5 | 3 | real but partial papers (a real paper = 45+ Q) |
| Mock | **0** | — | — | — | placeholder — missing |
| Custom | **0** | — | — | — | placeholder — missing |
| Unit | **n/a** | — | — | — | category doesn't exist in the engine |

**Missing categories:** Unit tests (needs a chapter→unit grouping in the engine — syllabus branches already provide a natural grouping), Custom test builder, Mock tests (blocked on question volume). **No scoring:** all tests are reveal-only.

## Memory Engine Readiness

| Recall type | Content ready? | Source | Blocker |
|---|---|---|---|
| Reaction Recall | ✅ 50 high-yield + 700 name reactions | `lib/chemistry/reactions`, `NAME_REACTIONS` | engine only |
| Reagent Recall | ✅ 31 reagents | `lib/chemistry/reagents` | engine only |
| Formula Recall | ✅ 200 cards (variables, units, traps) | `lib/chemistry/formulas` | engine only |
| Fact Recall | 🟡 partial — 47 exceptions + 207 orders serve as fact decks; standalone "quick facts" bank is only 3 stub entries | `lib/chemistry/exceptions`, `IMPORTANT_ORDERS` | curation + engine |
| Daily Revision Queue | ❌ | `/revision` is 4 static links; `memoryCore.ts` is ephemeral & Snap-&-Solve-only | needs durable per-user store + scheduler (spaced repetition) |

**Verdict:** memory-engine *content* is ~80% ready. The missing pieces are entirely engineering: a recall-session UI, a scheduling algorithm, and a durable Supabase store. No new content authoring is required to launch Reaction/Reagent/Formula recall V1.

## Mistake Journal Readiness

| Requirement | Ready? | Detail |
|---|---|---|
| Wrong question log | ❌ schema only | `WrongQuestionRecord` exists in `lib/progressTracker.ts` — **zero consumers**, nothing writes it |
| Answer capture | ❌ | TestEngine + QuestionCard are reveal-only; the student's chosen option is never known |
| Mistake categories | ✅ taxonomy ready | every PYQ carries chapter / subtopic / difficulty / concept tags — categorisation is free once answers are captured |
| Reattempt queue | ❌ | trivial to derive once a wrong-answer log exists |
| Weak concepts | 🟡 | `detectWeakAreas()` already exists in `lib/pyq/search.ts` but has no real attempt data to consume |

**Verdict:** the journal is blocked on exactly one thing — **capturing answers and persisting attempts** (Supabase table: user, questionId, chosen, correct, timestamp). Everything downstream (categories, reattempt queue, weak concepts) is already schema- or function-ready.

## Highest ROI Content Tasks

1. **PYQ expansion to ~300** (founder-authored, verified sources): fill the 8 empty chapters, raise every chapter to ≥8 Q, fix NEET-Hard (1) and JEE-Main-Hard (2). This single task deepens Practice, Chapter Tests, Full Papers, and future Mocks simultaneously.
2. **Answer capture + attempt persistence** (engineering, no content needed): option-select in TestEngine/QuestionCard → Supabase attempts table → unlocks scoring, Mistake Journal, weak areas, and revision queue with *existing* content.
3. **Chapter notes 3 → 10** (founder-authored): prioritise the highest-PYQ chapters — Atomic Structure, Chemical Bonding, Aldehydes & Ketones, Thermodynamics, p-Block, Biomolecules, Equilibrium.
4. **Recall decks V1** (engineering): wire formulas/reactions/reagents/exceptions into flip-card recall sessions — content is already verified and counted.
5. **PYQ store consolidation**: migrate the 34 legacy `pyqDatabase` questions into `lib/pyq` (dedupe) and retire the legacy store.
6. **CBSE mapping** (cheap): tag the 30 masterSyllabus chapters with a CBSE exam tag — Learn chapters light up instantly for the CBSE program.

## Recommended Week 5 Decision

**Build the Attempt Layer (answer capture + persistence + scoring), while PYQ expansion runs in parallel as founder content work.**

Rationale: content authoring (PYQs, notes) is founder-gated and slow; the attempt layer is pure engineering, unblocks four systems at once (test scoring, mistake journal, weak concepts, revision queue), and makes every question added later immediately more valuable. Recall decks V1 (task 4) is the best second pick if a lighter week is needed — it also requires zero new content.
