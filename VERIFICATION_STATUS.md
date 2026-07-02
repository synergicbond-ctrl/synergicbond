# VERIFICATION STATUS

## Command Verification

| Check | Status | Evidence |
| --- | --- | --- |
| Lint | PASS | `npm run lint` exit code 0. |
| Type check | PASS | `npx tsc --noEmit --pretty false` exit code 0. |
| Build | PASS | `npm run build` exit code 0; 70 app routes generated. |

## Subsystem Status

| Subsystem | Status | Evidence |
| --- | --- | --- |
| Revenue flow | PARTIAL | Razorpay order, HMAC webhook, subscription, premium gate, and Snap quota code exist. Live execution is not verified. |
| Search | PASS | `/search` and `/api/search` share `{ results, total }`. |
| Formula Cards | PASS | 200 cards, route, API, helpers, NCERT refs, and PYQ links build. |
| PYQ runtime | PARTIAL | `/pyq` builds and links to graph data. Corpus is 34 questions and user-specific weak areas are not connected. |
| Knowledge Graph validation | PASS | 435 nodes, 605 edges, 0 broken links, 0 duplicate edges, 0 orphan nodes. |
| Knowledge Graph coverage | PARTIAL | Reaction-order 10%, exception-PYQ 15.09%, order-PYQ 3.72%. |
| NCERT layer | PARTIAL | 324 NCERT entity links and 200 formula-NCERT links exist; no dedicated NCERT route. |
| Mobile support | PARTIAL | Static responsive hardening exists; browser/device QA not executed. |
| SEO | PASS | `/sitemap.xml` and `/robots.txt` generated in build output. |
| Generated docs | PASS | Release-candidate audit docs generated/updated. |

## Evidence Counts

- Reactions: 50
- Reagent NCERT records: 30
- Reagent graph entities: 107
- Canonical exceptions: 3
- Exception graph entities: 53
- Important orders: 207
- Order graph entities: 215
- PYQs: 34
- PYQ chapters: 14
- Formula cards: 200
- NCERT entity links: 324
- Formula -> NCERT links: 200
- Graph nodes: 435
- Graph edges: 605
- Broken graph links: 0
- Duplicate graph edges: 0
- Orphan graph nodes: 0
