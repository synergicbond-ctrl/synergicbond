# Navbar Architecture Audit (Week 13 — Roadmap Phase 9)

Commits: `df2a9cc` (navbar), `dc7b2db` (homepage section).

## Final Public Navbar (desktop)

`Home · Programs ▾ · Features ▾ · Snap & Solve · | · Pricing · Support · Search`

- **Home** → `/`
- **Programs** (dropdown)
  - 🇮🇳 National: JEE Chemistry (`/jee`), NEET Chemistry (`/neet`), Olympiad Chemistry (`/olympiad`)
  - 🌍 International: honest footnote "AP · IB · A-Level · MCAT — coming soon" (Phase 2 status;
    no dead links, no fake pages)
- **Features** (mega menu, pinned Periodic Table flagship)
  - 📖 Learn Ecosystem: Notes `/notes`, Formula Cards `/formula-cards`, Reagents `/reagents`,
    Important Orders `/important-orders`, Colours `/salt-colors`, Mechanisms `/name-reactions`
  - 🎯 Practice Ecosystem: PYQ Center `/pyq`, Practice Tests `/tests`
  - 🤖 AI Ecosystem: Snap & Solve `/snap-solve`, AI Tutor `/tutor`, AI Notes `/ai-lab/notes`,
    Study Planner `/ai-lab`
  - 📊 Performance Ecosystem: Mission Control `/dashboard`, Analytics `/performance`,
    Revision Queue `/revision`
- **Snap & Solve** stays a top-level link — Roadmap Phase 7 rule ("permanent flagship, must stay
  visible") outranks the minimal five-item list; it is also inside the AI Ecosystem group.
- **Pricing** → `/pricing`, **Support** → `/support` (Week 12 page)
- Search retained as a utility link; About & Mission remains in the footer + mobile drawer.

## Mobile (mobile-first)

Drawer flattened to the same IA (Home → Snap & Solve → Programs → Features → Pricing →
Support → About). Verified in a 375×812 viewport: all 15 IA routes present, drawer opens/closes,
no console errors.

## Homepage

New `WhatIsSynergicBond` section directly under the hero:
- Phase-0 positioning copy ("The Complete Chemistry Learning Platform — not a NEET/JEE platform").
- CTAs: Try Snap & Solve, Start a free chapter (`/notes`).
- **Video placeholder is honest**: dashed slot labelled "60–90 second intro video — in production,
  coming with launch". Swapping the `VIDEO_URL` constant to a real URL renders a real `<video>`
  player. No fake embed, no fake thumbnail.

## What was reused / preserved

- The existing mega-menu panel machinery (hover state, pinned-flagship card, grouped columns,
  active-route highlighting) — generalised to data-driven `MEGA_MENUS`; no visual redesign.
- Active-state highlighting is now derived from each menu's own items (replaces the stale
  hard-coded pathname list).
- Auth/account, language switcher, and mobile drawer machinery untouched.

## Verification

- `npm run lint` — 0 errors (2 pre-existing warnings in `lib/pyq/prediction.ts`)
- `npx tsc --noEmit` — clean · `npm run build` — 78/78 pages
- Browser-verified (desktop 1280px + mobile 375px): both mega-menus open with the exact
  IA above, every link is a real route, homepage section renders, zero console errors.

## Notes / deferred

- "What is Synergic Bond?" video production — founder deliverable; slot ready.
- CBSE/GATE program pages don't exist as routes yet — deliberately NOT linked (roadmap lists
  them for launch months 1–2 / 5–6; adding nav items without pages would be fake content).
