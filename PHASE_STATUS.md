# Phase Status

Current phase: P4.0 Formula Cards

Files changed:
- lib/chemistry/reactions/schema.ts
- lib/chemistry/reactions/data.ts
- lib/chemistry/reactions/categories.ts
- lib/chemistry/reactions/searchIndex.ts
- lib/chemistry/reactions/index.ts
- lib/chemistry/reactions/pyqLinks.ts
- lib/pyqDatabase.ts
- lib/pyqEngine.ts
- app/api/search/route.ts
- app/search/page.tsx
- app/pyq/page.tsx
- lib/chemistry/ncert/schema.ts
- lib/chemistry/ncert/data.ts
- lib/chemistry/ncert/searchIndex.ts
- lib/chemistry/ncert/index.ts
- lib/masterSyllabus/ncert.ts
- REACTION_AUDIT.md
- PYQ_LINK_AUDIT.md
- NCERT_AUDIT.md
- GRAPH_AUDIT.md
- lib/chemistry/formulas/schema.ts
- lib/chemistry/formulas/data.ts
- lib/chemistry/formulas/searchIndex.ts
- lib/chemistry/formulas/index.ts
- FORMULA_AUDIT.md
- PHASE_STATUS.md

Build status:
- Type check: PASS
- Production build: PASS

Coverage:
- Reaction count: 50
- Category coverage: 7/7
- Duplicate IDs: 0
- Orphan related reaction IDs: 0
- Total PYQs: 34
- Linked PYQs: 8
- Unlinked PYQs: 26
- PYQ-Reaction coverage: 23.53%
- Orphan PYQ links: 0
- Orphan reaction links: 0
- NCERT linked entities: 324
- NCERT coverage: 100%
- NCERT missing chapters: 0
- NCERT duplicate references: 0
- Graph edge groups passing: 3/9
- Graph edge groups partial: 3/9
- Graph edge groups failing: 3/9
- Graph passing edge coverage: 33.33%
- Formula count: 200
- Formula required-area coverage: 7/7
- Formula NCERT coverage: 100%
- Formula PYQ link coverage: 100%
- Formula duplicate IDs: 0
- Formula orphan PYQ links: 0

Blockers:
- Canonical reagent, exception, and order ID edges are missing.
- Dedicated formula API route does not exist.
