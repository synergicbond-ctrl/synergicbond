# Program Content Isolation Audit

Date: 2026-07-05 · Scope: 9 programs (NEET · JEE Main · JEE Advanced · CBSE 11/12 · ISC 11/12 · NSEC · GATE).
Method: source trace of every content source + query/filter, isolation fixes, then typecheck / lint / build with
evidence grepped from the built output. No UI redesign; only scope/guard changes.

## Result table

| # | Surface | Verdict | Notes |
|---|---|---|---|
| 1 | **Notes** (premium notes engine, ExamSyllabus, chapter engine Learn) | **PASS** (after fix) | Renderer filters blocks by active program's exam (`filterNotesForExam`). Cross-program **name** references in untagged blocks neutralized. `ExamSyllabus` no longer prints other programs' exam tags. |
| 2 | **Practice questions** (EngineQuestionBank, ProgramPracticeClient, board PracticeClient) | **PASS** (after fix) | Objective pool filtered by `q.exam === program.exam` (entrance) / explicit board chapter union (boards). Empty scope ⇒ empty pool, never fallback. Linked-PYQ discovery panel now scoped via `examScope`. |
| 3 | **AI question generator** (`/api/engine/generate`, `/api/board-practice`, `/api/board-examiner`) | **PASS** | Engine generator prompts carry `exam` (NEET/JEE Main/JEE Advanced) + program-specific `kind`/`format`/`pattern`. Board generator + examiner carry `board` (CBSE/ISC/State Board). No cross-program prompt text. |
| 4 | **PYQs** (ProgramPracticeClient, chapter-engine PYQ Center, QuestionCard links) | **PASS** (after fix) | `getByExam` locks the pool; PYQ-Center chapter stats now computed over `examPool` (was `ALL_PYQ_QUESTIONS`); linked panel scoped. Boards have no verified PYQ bank ⇒ honest empty. |
| 5 | **Mock tests** (TestEngine, board custom-test) | **PASS** | `TestEngine` filters `TESTS_BY_CATEGORY` by the program's `exam`; programs without `pyqExam` show honest coming-soon. Board custom-test draws only the board's own chapter union. |
| 6 | **Search** (`/api/search`, `/search`) | **PASS** (by design) | Global cross-exam tool; `exam` param filters when supplied. **Not exposed as a program-scoped surface** — no program hub/board page embeds a search claiming program scope, so no leak. |
| 7 | **Analytics** (Speed, board score, chapter mastery) | **PARTIAL** | Speed Analysis scoped to `engine.exam`; chapter mastery scoped to chapter+exam; board score scoped to the class's chapters. Residual: global `/analytics /performance /ncert /mistakes /readiness` are user-wide tools (all the user's attempts) — board dashboards no longer link to them (remapped to `${base}/analytics`); ISC analytics reuses the CBSE class-chapter map but ISC has no bank attempts ⇒ honest-empty, never JEE/NEET content. |
| 8 | **Entitlement-gated dashboard visibility** | **PASS** | `getUserEntitlements` (Pro ⇒ all, else granular `user_program_entitlements`); `/programs` "Included in your plan" only for owned; engine chapter page gates premium chapters (free-chapter/Pro/entitlement). Catalogue remains browsable by design (preview), which is intended, not a leak. |

## Leaks found & fixed (this pass)

1. **Board dashboard leaked entrance content** — class-dashboard quick-links pointed at global
   `/pyq`, `/tests`, `/ncert`, `/performance`, `/analytics`, `/mistakes`, `/readiness` (JEE/NEET
   PYQs, mocks & all-exam analytics). **Fix:** `BOARD_SCOPE_REMAP` remaps these to the board's own
   `/practice`, `/custom-test`, `/analytics`. Chemistry-reference/generic tools (notes, formulas,
   memory, vault, tutor, board-examiner, support) pass through unchanged.
2. **Chapter-engine NCERT chips showed all 3 exams** (NEET page showed JM/JA counts). **Fixed** —
   only the active program's importance/count renders (source-verified; also landed via a parallel edit).
3. **PYQ-Center chapter counts mixed all exams** — `getChapterStats(ALL_PYQ_QUESTIONS,…)`. **Fix:**
   computed over `examPool` (program's exam only).
4. **QuestionCard linked-PYQ panel was cross-exam** in program-locked surfaces. **Fix:** optional
   `examScope` prop; passed `program.exam`/`exam`/`engine.exam` from the 3 program-locked call sites;
   global `/pyq` keeps full behaviour.
5. **Premium notes named other programs** in untagged blocks ("NEET and JEE Main both recycle",
   "JEE reasoning items", "a favourite JEE Advanced true/false", "appeared in NEET", "NEET and
   boards"). **Fix:** neutralized to program-neutral wording; chemistry unchanged. Verified: zero
   `NEET|JEE` mentions remain in note body text.
6. **TutorActions "Advanced Version" said "JEE-Advanced-depth"** → neutralized to "competition-depth".

Already-correct (verified, no change needed): question-type matrices per program
(JEE Main = SCQ + Integer/Numerical/Decimal/Scientific, **no** Assertion/Matrix; JEE Advanced =
SCQ/Multiple-Correct/Integer/Matrix/List/Paragraph/Numerical-Response/Comprehension/Challenge,
**no** NCERT-Based; GATE = MCQ/MSQ/NAT; boards = 1/2/3/5-Mark/Case/Competency/HOTS);
`selectObjective` empty-scope guard (empty array ⇒ empty pool, no cross-board fallback);
per-program syllabus trees (`ProgramSyllabusTree`) show only their own name/units.

## Files changed (this pass — 6)

- `components/pyq/QuestionCard.tsx` — `examScope` prop → scopes linked-PYQ discovery panel.
- `components/engine/EngineQuestionBank.tsx` — pass `examScope={program.exam}`.
- `components/programs/ProgramPracticeClient.tsx` — pass `examScope={exam}`.
- `app/programs/[slug]/chapter/[id]/page.tsx` — PYQ-Center stats over `examPool`; recovery cards `examScope`.
- `app/dashboard/[board]/[class]/page.tsx` — `BOARD_SCOPE_REMAP` for exam-specific quick-links.
- `lib/premiumNotes/content/chemicalBonding.ts` — neutralized 7 cross-program name references.
- `components/engine/TutorActions.tsx` — "competition-depth" (parallel edit, folded in).

## Evidence (from built `.next/server` output)

```
# Board dashboard no longer links to global entrance routes:
grep href="/pyq"|"/tests"|"/ncert"|"/performance"|"/mistakes"|"/readiness"  dashboard/cbse/class-12.html → (none)
# …and links to its OWN scoped pages:
→ /dashboard/cbse/class-12/{practice,custom-test,analytics}
# JEE Main question formats:  Integer, Scientific Notation   (NO Assertion / Matrix / Multiple Correct)
# JEE Advanced formats:       Multiple Correct, Matrix Match, Comprehension   (NO NCERT Based / Assertion)
# GATE formats:               MSQ (multiple select), NAT (numerical answer)   (NO Integer / Matrix)
# ICSE class-12 units present, CBSE-unique "Structure of Atom" absent; ISC class-11 shows "never invented"
# Premium notes body: zero NEET|JEE mentions remain (grep exit 1)
```

Note: the entrance chapter engine (`/programs/[slug]/chapter/[id]`) is `force-dynamic`, so its
per-program NCERT-chip / PYQ-Center scoping is **source-verified + typecheck-verified**, not
prerendered-grepped.

## Gates
typecheck ✅ 0 errors · lint ✅ 0 errors (2 pre-existing warnings in `lib/pyq/prediction.ts`) ·
build ✅ 174/174 pages.

## NOT TESTED / out of scope (honest)
- Runtime behaviour behind auth (linked-panel click, board practice served-set) — verified by source
  + build, not by a logged-in browser session (local Supabase key is stale).
- ISC Class 11 has no official units (document not uploaded) — honest empty state, by design.
- Global tools (`/pyq`, `/tests`, `/analytics`, `/search`) remain intentionally cross-exam when
  visited directly; isolation applies to **program-scoped** surfaces only.
