# LAUNCH CHECKLIST

## Verification

| Area | Status | Evidence |
| --- | --- | --- |
| Lint | PASS | `npm run lint` completed with exit code 0. |
| Type check | PASS | `npx tsc --noEmit --pretty false` completed with exit code 0. |
| Build | PASS | `npm run build` completed with exit code 0; Next.js generated 70 app routes. |
| Routes | PASS | Build output includes `/search`, `/pyq`, `/formula-cards`, `/api/search`, `/api/formula-cards`, `/api/knowledge-graph`, `/api/payment/create-order`, `/api/payment/webhook`, and `/api/snap-solve`. |
| Search | PASS | `app/search/page.tsx` consumes `{ results, total }`; `app/api/search/route.ts` returns `{ results, total }` and includes reactions, formulas, PYQs, NCERT links, orders, and graph results. |
| Formula Cards | PASS | `app/formula-cards/page.tsx`, `app/api/formula-cards/route.ts`, and `lib/chemistry/formulas/*` exist and build. Count: 200 cards. |
| PYQ | PASS | `app/pyq/page.tsx` reads `pyqDatabase`, uses exam/chapter/topic filters, and calls `getPYQGraph`. Count: 34 PYQs. |
| Knowledge Graph | PASS | `validateKnowledgeGraph()` returned 435 nodes, 605 edges, 0 broken links, 0 duplicate edges, 0 orphan nodes. |
| Mobile support | PARTIAL | Search, PYQ, and Formula Cards contain mobile wrapping/overflow classes and build passes. Browser/device visual QA was not executed. |
| Revenue launch | PARTIAL | Revenue code and migrations exist. Live checkout/webhook/subscription verification was not executed. |

## Blockers

- Live Razorpay/Supabase verification requires external credentials.
- Browser/device mobile QA was not executed.
- NCERT search results route back to `/search`; no dedicated NCERT reference detail route exists.
