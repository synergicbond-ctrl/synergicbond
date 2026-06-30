# PYQ Link Audit

Phase: P3.3 Reaction-PYQ Links

Status: PASS

Files inspected:
- lib/pyqDatabase.ts
- lib/pyqEngine.ts
- lib/chemistry/reactions/data.ts
- lib/chemistry/reactions/schema.ts
- lib/chemistry/reactions/pyqLinks.ts
- lib/chemistry/reactions/searchIndex.ts
- app/api/search/route.ts
- app/search/page.tsx
- app/pyq/page.tsx

Actual counts:
- Total PYQs: 34
- Linked PYQs: 8
- Unlinked PYQs: 26
- Coverage: 23.53%
- Total reactions: 50
- Reactions with PYQ links: 8
- Reactions without PYQ links: 42
- Orphan PYQ links: 0
- Orphan reaction links: 0

Linked PYQs:
- goc-2 -> alkene-hx-markovnikov-addition, haloalkane-sn1-hydrolysis
- ha-1 -> haloalkane-sn1-hydrolysis, haloalkane-sn2-hydrolysis
- ha-2 -> haloalkane-sn2-hydrolysis
- ak-1 -> aldehyde-tollens-test
- ak-2 -> cannizzaro-reaction
- ape-1 -> alcohol-lucas-test
- ape-2 -> alcohol-sodium-reaction
- am-2 -> carbylamine-reaction

Verification:
- Type check: PASS
- Build: PASS

Blockers:
- Existing PYQ database has no reaction-level PYQs for 26 questions.
- More PYQ data is required to raise reaction coverage beyond 23.53%.
