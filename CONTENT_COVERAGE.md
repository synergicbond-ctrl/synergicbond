# CONTENT COVERAGE

## Actual Counts

| Content | Count | Evidence |
| --- | ---: | --- |
| Reactions | 50 | `highYieldReactions.length` from `lib/chemistry/reactions/data.ts` |
| Reagent NCERT records | 30 | `reagentNCERTLinks.length` from `lib/chemistry/ncert/data.ts` |
| Reagent graph entities | 107 | `getKnowledgeGraphCompletionAudit().entityCounts.reagents` |
| Canonical exceptions | 3 | `exceptionsList.length` from `lib/masterSyllabus/exceptions.ts` |
| Exception graph entities | 53 | `getKnowledgeGraphCompletionAudit().entityCounts.exceptions` |
| Important order records | 207 | `IMPORTANT_ORDERS.length` from `lib/importantOrders.ts` |
| Order graph entities | 215 | `getKnowledgeGraphCompletionAudit().entityCounts.orders` |
| PYQs | 34 | `pyqDatabase` total question count |
| PYQ chapters | 14 | `Object.keys(pyqDatabase).length` |
| Formula cards | 200 | `formulaCards.length` from `lib/chemistry/formulas/data.ts` |
| NCERT entity links | 324 | `ncertEntityLinks.length` from `lib/chemistry/ncert/data.ts` |
| Formula -> NCERT links | 200 | `formulaNCERTLinks.length` from `lib/chemistry/graph/links.ts` |

## Graph Coverage

| Edge | Count | Coverage |
| --- | ---: | ---: |
| Reaction -> Reagent | 121 | 100% |
| Reaction -> Exception | 50 | 100% |
| Reaction -> Order | 6 | 10% |
| Exception -> PYQ | 10 | 15.09% |
| Order -> PYQ | 8 | 3.72% |
| Formula -> PYQ | 200 | 100% |
| Formula -> NCERT | 200 | 100% |

## Largest Content Gaps

- PYQ corpus: 34 questions across 14 chapters.
- Canonical exception records: 3 records.
- Reaction -> Order coverage: 6 edges, 10%.
- Exception -> PYQ coverage: 10 edges, 15.09%.
- Order -> PYQ coverage: 8 edges, 3.72%.
