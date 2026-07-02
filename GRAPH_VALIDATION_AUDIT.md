# Graph Validation Audit

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
- GRAPH_VALIDATION_AUDIT.md

Validation command:
- validateKnowledgeGraph()

Validation result:
- Graph nodes: 435
- Graph edges: 605
- Broken links: 0
- Duplicate edges: 0
- Orphan graph nodes: 0

Edge counts:
- Reaction -> Reagent: 121
- Reaction -> Exception: 50
- Reaction -> Order: 6
- Exception -> PYQ: 10
- Order -> PYQ: 8
- Formula -> PYQ: 200
- Formula -> NCERT: 200

Coverage:
- Reaction -> Reagent: 100%
- Reaction -> Exception: 100%
- Reaction -> Order: 10%
- Exception -> PYQ: 15.09%
- Order -> PYQ: 3.72%
- Formula -> PYQ: 100%
- Formula -> NCERT: 100%

Helpers added:
- getReactionGraph(id)
- getPYQGraph(id)
- getFormulaGraph(id)
- getNCERTGraph(ref)
- searchKnowledgeGraph(query)
- validateKnowledgeGraph()

Build status:
- Type check: PASS
- Production build: PASS

Remaining blockers:
- Reaction-order, exception-PYQ, and order-PYQ coverage remain limited to verified source links.
