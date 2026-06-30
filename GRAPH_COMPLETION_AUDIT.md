# Graph Completion Audit

Status: PARTIAL

Files inspected:
- lib/chemistry/reactions/data.ts
- lib/chemistry/reactions/pyqLinks.ts
- lib/chemistry/ncert/data.ts
- lib/importantOrders.ts
- lib/pyqDatabase.ts
- lib/chemistry/graph/schema.ts
- lib/chemistry/graph/links.ts
- lib/chemistry/graph/index.ts

Files changed:
- lib/chemistry/graph/schema.ts
- lib/chemistry/graph/links.ts
- lib/chemistry/graph/index.ts
- GRAPH_COMPLETION_AUDIT.md

Edge counts:
- Reaction -> Reagent: 121
- Reaction -> Exception: 50
- Reaction -> Order: 6
- Exception -> PYQ: 10
- Order -> PYQ: 8

Entity counts:
- Reactions: 50
- Reagents: 107
- Exceptions: 53
- Orders: 215
- PYQs: 34

Coverage:
- Reaction-Reagent: 100%
- Reaction-Exception: 100%
- Reaction-Order: 10%
- Exception-PYQ: 15.09%
- Order-PYQ: 3.72%

Orphan records:
- 0

Build status:
- Type check: PASS
- Production build: PASS

Blockers:
- Document-verified important orders have no direct PYQ IDs in source data.
- Reaction-order coverage is limited to PYQ-derived order entities and one verified acidity-test link.
