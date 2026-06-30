# Knowledge Graph Audit

Phase: P3.5 Knowledge Graph Audit

Status: PARTIAL

Files inspected:
- lib/chemistry/reactions/data.ts
- lib/chemistry/reactions/pyqLinks.ts
- lib/chemistry/ncert/data.ts
- lib/masterSyllabus/exceptions.ts
- lib/importantOrders.ts
- lib/pyqDatabase.ts

Actual counts:
- Reactions: 50
- Reagents: 30
- Exceptions: 3
- Orders: 207
- PYQs: 34
- NCERT linked entities: 324

Edge status:
- Reaction <-> Reagent: PARTIAL, 50/50 reactions contain reagent text; 0 canonical reagent ID links.
- Reaction <-> Exception: PARTIAL, 50/50 reactions contain exception text; 0 canonical exception ID links.
- Reaction <-> Order: FAIL, 0 reaction-order links.
- Reaction <-> PYQ: PARTIAL, 8/50 reactions linked; 8/34 PYQs linked; PYQ coverage 23.53%.
- Reaction <-> NCERT: PASS, 50/50 linked.
- Exception <-> PYQ: FAIL, 0/3 exceptions linked to PYQs.
- Exception <-> NCERT: PASS, 3/3 linked.
- Order <-> PYQ: FAIL, 0/207 orders linked to PYQs.
- Order <-> NCERT: PASS, 207/207 linked.

Coverage:
- Required edge groups passing: 3/9
- Required edge groups partial: 3/9
- Required edge groups failing: 3/9
- Passing edge coverage: 33.33%

Orphan records:
- Orphan PYQ-reaction links: 0
- Orphan NCERT references: 0

Missing links:
- Canonical reagent IDs are not attached to reactions.
- Canonical exception IDs are not attached to reactions or PYQs.
- Order IDs are not attached to reactions or PYQs.

Verification:
- Build: PASS
