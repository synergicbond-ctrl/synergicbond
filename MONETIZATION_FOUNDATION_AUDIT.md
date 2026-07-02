# Monetization Foundation Audit (Week 12 — Roadmap Phase 8)

Base: `3d308ff` (unified main). Commits: `37db90c`, `aa96134`, `6dabf12` + this audit.

## 1. Free Chapter System

- `lib/freeChapters.ts` tightened from 9+ chapters to the roadmap's flagship set —
  **GOC** (`goc` / `general-organic-chemistry`), **Mole Concept** (`mole-concept`),
  **Periodic Table** (`periodic-table`) — one per branch of chemistry, aliases cover
  master-syllabus and Notes-Engine ids.
- Consumers unchanged and verified: `app/chapter/[id]` (server redirect gate) and
  `/api/content/access` both read `isFreeChapter` from the same SSOT.
- Everything inside a free chapter stays fully unlocked; the Notes Engine's 3 authored
  chapters are exactly the free set, so `/notes` remains fully open today.

## 2. Preview Mode (all counts real, from SSOT catalogues)

| Library | Page | Free slice | Total (live count) |
|---|---|---|---|
| Formula Cards | `/formula-cards` | 25 | `totalFormulaCount` from `lib/chemistry/formulas` |
| Reagents | `/reagents` | 12 | page's reagent list (30) |
| Important Orders | `/important-orders` | 12 per tab | `IMPORTANT_ORDERS.length` |
| Compound Colours | `/salt-colors` | 15 | `COMPOUND_COLOURS.length` |
| Notes chapters | `/notes` | free chapters | `NOTES_ENGINE_STATS.chapters` |

Infrastructure (new, reusable):
- `lib/monetization/preview.ts` — `PREVIEW_LIMITS` + `slicePreview()` (returns real totals).
- `components/monetization/useUnlocked.ts` — client hook on the **existing, unchanged**
  `/api/content/access` route; fail-open like `PaywallGate`.
- `components/monetization/UnlockBanner.tsx` — "X of Y … Unlock Complete Library" → `/pricing`.
- `components/salt-colors/CompoundColoursPreview.tsx` — client island for the server-rendered
  colours page.
- Notes: premium chapters (once authored beyond the free set) auto-lock with a 🔒 pill and
  unlock banner — zero visual change today since coverage == free set.

Preview is a UX gate, not a security boundary: catalogue data still ships in the client
bundle (as it always has on these public reference pages). Chapter-level premium content
remains server-gated via redirect.

## 3. Unlock Messaging

`UnlockBanner` renders the roadmap pattern (`250 Available · 2000 Total → Unlock Complete
Library`) with caller-supplied real counts; renders nothing when nothing is locked.

## 4. Pricing Cleanup (`/pricing`)

- Free plan copy now states the actual model: 3 fully-unlocked flagship chapters + real
  preview slices; Pro copy: all 33 chapters + complete libraries.
- New FAQ: "What exactly is free?"
- Checkout, plans (₹149/₹999), `PaymentGateway`, and all Razorpay routes **untouched**.

## 5. Support Page

- New `/support`: honest mission copy; live support path = Pro via existing `/pricing`
  checkout; contribution tiers ₹100/₹250/₹500 displayed but explicitly badged
  "Checkout opening soon" (disabled, `aria-disabled`).
- Old `/donate` had a **fabricated fundraising bar ("42% funded", "$50,000 goal") and dead
  payment buttons** — replaced with a redirect to `/support`. (`/donate` links only existed
  in legacy/backup files; `robots.txt` already disallowed it.)

## Reused systems (nothing rebuilt)

`/api/content/access`, `lib/subscription.ts` PLANS, `PaymentGateway`, Razorpay
create-order/verify/webhook, server chapter gate, SSOT catalogues for every count.

## Blockers / founder decisions

1. **Direct one-time contributions (min ₹100)** — the existing create-order route is
   strictly plan-based (`isValidPlan`), and the webhook activates subscriptions from
   `notes.plan`. Enabling arbitrary-amount contributions requires either a Razorpay
   Payment Link (zero code) or a small dedicated contribution order route + webhook
   no-op branch (payment-adjacent code → founder sign-off required). Until then the
   tiers are visibly "opening soon" — no fake checkout.
2. `app/reagents` renders its own local 30-reagent list, separate from
   `lib/chemistry/reagents.ts` (1,200-line SSOT) — pre-existing duplication, flagged
   for the consolidation backlog (with the PYQ banks and formula catalogues).

## Validation

`npm run lint` / `npx tsc --noEmit` / `npm run build` — status recorded in the Week 12
completion report (run after this audit was written).
