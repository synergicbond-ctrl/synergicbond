# TECH DEBT

## Lint Cleanup

Status: FAIL.

`npm run lint` reports 118 problems in unrelated files. Dominant categories:
- `@typescript-eslint/no-explicit-any`
- `react/no-unescaped-entities`
- `react-hooks/set-state-in-effect`
- unused imports/variables
- `<img>` optimization warnings

## NCERT Result Routing

Status: PARTIAL.

NCERT search results are returned by `/api/search`, but they route to `/search` because no dedicated NCERT detail/reference page exists.

## Graph Coverage

Status: PARTIAL.

Current verified graph coverage:
- Reaction -> Reagent: 100%
- Reaction -> Exception: 100%
- Reaction -> Order: 10%
- Exception -> PYQ: 15.09%
- Order -> PYQ: 3.72%
- Formula -> PYQ: 100%
- Formula -> NCERT: 100%

## User-Specific Insights

Status: PARTIAL.

PYQ weak-area cards currently use source-data support gaps. Real weak-area personalization requires authenticated progress or mistake records.

## Visual QA

Status: NOT TESTED.

No Playwright/browser-device visual pass was run for mobile overflow, hydration warnings, or card layout inspection.

## Git Hygiene

Status: PARTIAL.

Latest sprint changes are present in the working tree and are not committed.
