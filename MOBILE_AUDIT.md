# Mobile Audit

Date: 2026-06-30

## Status

PARTIAL

## Evidence Checked

- `app/search/page.tsx`
- `app/pyq/page.tsx`
- `app/formula-cards/page.tsx`

## Verified Issues Fixed

- `/search`: search form was fixed-row on mobile; now stacks below `sm`.
- `/search`: result cards lacked `min-w-0` and wrapping for long chemistry titles/subtitles.
- `/pyq`: long chapter names, tags, questions, options, graph chips, NCERT refs, and explanations now wrap inside cards.
- `/formula-cards`: formula cards now guard long names, topics, derivations, exceptions, and PYQ chips with wrapping/min-width constraints.

## Verification

- `npm run lint`: PASS
- `npx tsc --noEmit --pretty false`: PASS
- `npm run build`: PASS

## Remaining Mobile Blockers

- NOT TESTED: browser viewport screenshot QA.
- NOT TESTED: authenticated/mobile flows requiring Supabase session data.
