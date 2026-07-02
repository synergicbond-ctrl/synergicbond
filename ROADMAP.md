# ROADMAP

## Master Roadmap V1 — Phase Status (July 2026)

| Phase | Status |
|---|---|
| 0 — Positioning | 🟡 |
| 1 — Foundation | 🟢 |
| 2 — Exam Programs | 🟢 |
| 3 — Notes Engine | 🟡 foundation complete |
| 4 — PYQ Domination | 🟡 foundation complete |
| 5 — Test Engine | 🟢 foundation complete |
| 6 — Performance | 🟢 foundation complete |
| 7 — AI System | 🟢 foundation complete |
| 8 — Monetization | 🟢 **Week 12 foundation complete** (see MONETIZATION_FOUNDATION_AUDIT.md) |
| 9 — Final Navbar | 🔴 NEXT (Week 13) |
| 10 — Moat | 🟡 |

Week 12 delivered: free-chapter system (GOC / Mole Concept / Periodic Table),
preview mode + unlock messaging on all reference libraries, pricing cleanup,
honest /support page. Open founder decision: direct-contribution checkout
(Razorpay payment link or dedicated order route).

## Next Highest ROI

1. PARTIAL: run live Razorpay checkout, webhook, subscription, premium gate, and Snap Solve quota verification with real credentials.
2. PARTIAL: run browser/mobile QA for `/search`, `/formula-cards`, `/pyq`, reaction detail pages, and pricing/payment flow.
3. PARTIAL: add a dedicated NCERT reference/detail route or formally accept `/search` as the NCERT destination.
4. PARTIAL: expand PYQ coverage from verified sources; current count is 34 questions across 14 chapters.
5. PARTIAL: expand canonical exception records from verified sources; current count is 3.
6. PARTIAL: improve Reaction -> Order, Exception -> PYQ, and Order -> PYQ links only where source evidence exists.

## Completed

- PASS: lint, type check, and production build.
- PASS: Formula Cards route/API from 200 verified formula records.
- PASS: Knowledge Graph API and validation helpers.
- PASS: Search contract uses `{ results, total }`.
- PASS: `/search` integrates reactions, reagents, exceptions, orders, formulas, PYQs, NCERT links, and graph results.
- PASS: SEO files build as `/sitemap.xml` and `/robots.txt`.
- PARTIAL: revenue readiness code exists; live execution is not verified.
- PARTIAL: mobile hardening exists in source; browser/device QA is not verified.

## Verification Gates

- PASS: `npm run lint`
- PASS: `npx tsc --noEmit --pretty false`
- PASS: `npm run build`
- PASS: graph validation has 0 broken links, 0 duplicate edges, 0 orphan graph nodes.
