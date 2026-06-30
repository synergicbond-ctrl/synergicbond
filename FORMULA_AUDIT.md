# Formula Cards Audit

Phase: P4.0 Formula Cards

Status: PASS

Files inspected:
- lib/chemistry/formulas/schema.ts
- lib/chemistry/formulas/data.ts
- lib/chemistry/formulas/searchIndex.ts
- lib/chemistry/formulas/index.ts
- lib/pyqDatabase.ts

Actual counts:
- Formula count: 200
- Atomic Structure: 35
- Physical Chemistry, mole/gas/concentration: 30
- Thermodynamics: 30
- Equilibrium: 30
- Electrochemistry: 30
- Chemical Kinetics: 25
- Solutions: 20
- Duplicate formula IDs: 0
- Orphan PYQ links: 0

Coverage:
- Required areas covered: 7/7
- NCERT mapped formulas: 200/200
- PYQ-linked formulas: 200/200
- Search index entries: 200
- Coverage: 100%
- Missing chapters: 0

Verification:
- Type check: PASS
- Build: PASS

Blockers:
- Formula data is available through reusable library exports; no dedicated formula API route exists yet.
