# Graph UI Audit

Status: PASS

Files changed:
- lib/chemistry/graph/schema.ts
- lib/chemistry/graph/links.ts
- lib/chemistry/graph/index.ts
- app/api/knowledge-graph/route.ts
- app/api/search/route.ts
- app/search/page.tsx
- app/learn/reactions/[slug]/page.tsx
- app/pyq/page.tsx
- app/formula-cards/page.tsx
- GRAPH_UI_AUDIT.md

Implemented:
- Formula-aware graph helpers
- getFormulaGraph(id)
- /api/knowledge-graph
- Reaction graph view
- PYQ graph chips
- Search result graph cards
- Formula URL filters for formula/PYQ links

Exposed edges:
- Reaction -> Reagent: 121
- Reaction -> Exception: 50
- Reaction -> Order: 6
- Exception -> PYQ: 10
- Order -> PYQ: 8
- Formula -> PYQ: 200
- Formula -> NCERT: 200

Validation:
- Graph nodes: 435
- Graph edges: 605
- Broken links: 0
- Duplicate edges: 0
- Orphan graph nodes: 0

Coverage:
- Formula -> PYQ: 100%
- Formula -> NCERT: 100%

Build status:
- Type check: PASS
- Production build: PASS

Remaining blockers:
- Reaction-order, exception-PYQ, and order-PYQ coverage remains limited by verified source links.
