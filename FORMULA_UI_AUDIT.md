# Formula UI Audit

Status: PASS

Files changed:
- lib/chemistry/formulas/schema.ts
- lib/chemistry/formulas/searchIndex.ts
- lib/chemistry/formulas/index.ts
- app/api/formula-cards/route.ts
- app/formula-cards/page.tsx
- FORMULA_UI_AUDIT.md

Implemented:
- Formula query helpers
- Formula chapter summaries
- Formula PYQ lookup
- Formula audit helper
- /api/formula-cards
- /formula-cards
- Search input
- Chapter filter
- Formula grid
- Variables
- Units
- NCERT reference
- Related PYQ links

Actual counts:
- Formula cards: 200
- Chapters: 8
- NCERT linked: 200
- PYQ linked: 200
- Duplicate IDs: 0
- Orphan PYQ links: 0
- Sample search hits for "bohr": 5
- Electrochemistry chapter hits: 30

Build status:
- Type check: PASS
- Production build: PASS

Remaining blockers:
- /pyq does not yet consume formula PYQ query parameters.
