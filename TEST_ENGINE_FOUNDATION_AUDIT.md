# Test Engine — Foundation Audit (Week 9)

**Goal:** stand up the `/tests` route and a Test Engine that generates real tests
from the existing PYQ data, ready to connect to Notes, Snap & Solve and
Performance later.

**Rules honoured:** uses existing PYQ data only · **no PYQ modifications** ·
**no fake questions** · no duplicate schemas · no `.next` files · no unrelated
changes · mobile-first UI.

---

## Files delivered

| File | Type | Purpose |
|------|------|---------|
| `lib/tests/testEngine.ts` | New | Builds `TestDefinition`s from the PYQ SSOT (read-only). |
| `components/tests/TestEngine.tsx` | New | Mobile-first catalogue + test runner. |
| `app/tests/page.tsx` | New | `/tests` route (server component + metadata). |
| `TEST_ENGINE_FOUNDATION_AUDIT.md` | New | This audit. |

---

## Architecture

- **Reuses the PYQ SSOT.** `testEngine.ts` imports `ALL_PYQ_QUESTIONS` and the
  PYQ types (`PYQExam`, `PYQChapter`, `PYQDifficulty`, `PYQQuestion`) — it does
  **not** redefine or modify any PYQ schema/data.
- Each `TestDefinition` stores **question ids** into `ALL_PYQ_QUESTIONS`; the
  runner resolves them back to real questions via `getTestQuestions()`. No
  question text is authored in the engine → impossible to fabricate questions.
- Definitions are computed once at module load and indexed by id.

---

## Categories & real data

Built from **{questionPool}** real PYQs:

| Category | Source rule | Real count* |
|----------|-------------|-------------|
| **Chapter Tests** | group by `chapter` | 23 |
| **Topic Tests** | group by `chapter::subtopic`, ≥ 2 questions | 16 |
| **Revision Tests** | High-Yield (trending / freq ≥ 2), NCERT-Direct, Tough Nuts (Hard/Olympiad) | up to 3 |
| **Previous Papers** | group by `exam::year`, ≥ 3 questions | 12 |
| **Mock Tests** | — | placeholder |
| **Custom Tests** | — | placeholder |

\* Derived from current PYQ data; the engine recomputes automatically as PYQ
data grows. Thresholds (`MIN_TOPIC_QUESTIONS = 2`, `MIN_PAPER_QUESTIONS = 3`)
keep every listed test meaningful rather than padding with 1-question sets.

---

## UI (mobile-first)

- Horizontal-scroll category nav with live counts; each category lists
  `TestCard`s (title, question count, exam badges, marks, difficulty mix).
- Opening a card launches the **Test Runner**: renders the test's real
  questions with options and a per-question *reveal answer & explanation*
  (chemistry via the shared `renderChemistry`, no new renderer).
- Runner header links out to **Notes** (`/notes`) and **PYQ analytics**
  (`/pyq`) — the first cross-connections into the Learn ecosystem.

---

## Empty / placeholder states

| Situation | State shown |
|-----------|-------------|
| Category with no qualifying tests | **"No data yet."** + hint |
| Mock Tests | placeholder card · "Coming soon" |
| Custom Tests | placeholder card · "Coming soon" |
| Test resolves to 0 questions | "No questions available for this test yet." |
| Unknown test id | "Test not found." |

Scoring / performance tracking is intentionally deferred (shown as a
"Scoring — coming soon" chip) — this is the **foundation** only.

---

## Connect-later hooks

- **PYQ** → already the data source (read-only).
- **Notes / Snap & Solve** → runner links to `/notes` and `/pyq`; the Week 8
  Snap & Solve "Practice Next" tests placeholder can point here next.
- **Performance** → `TestDefinition` already exposes `count`, `totalMarks`,
  `difficultyMix` and stable `id`s, so an attempt/score layer can attach without
  schema changes.

---

## Follow-ups (out of scope)

- Attempt state, timing, scoring and negative marking.
- Mock (full-length blueprint) and Custom (user-selected) generators.
- Persist attempts and wire into the Performance dashboard.
