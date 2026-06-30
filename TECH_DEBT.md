# TECH DEBT

## Knowledge graph edge model

Reaction records contain reagent and exception text, but graph-grade links need canonical IDs for reagents, exceptions, and important orders.

## Formula API/UI integration

Formula cards are reusable and searchable in `lib/chemistry/formulas/*`, but no API route or updated vault UI consumes the new 200-card dataset yet.

## Reagent source normalization

Reagent data still lives in `app/reagents/page.tsx`; NCERT mapping mirrors those names in the NCERT layer. A shared reagent module would reduce drift.

## Search result surface

Global search now includes reactions, but formula and NCERT search indexes are library-only.

## Lint cleanup

Pre-existing lint errors remain across API routes and UI pages, mostly `no-explicit-any`, hook effect state, and unescaped entities.

## Git hygiene

P3.2-P4.0 changes are uncommitted because commit approval failed after staging P3.2 files.
