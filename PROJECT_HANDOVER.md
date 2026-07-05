# PROJECT HANDOVER — Synergic Bond (Chemistry OS)

> Generated from a direct read of the repository. **Verified** facts come from the code/config; items marked **(estimate)** are judgement calls (completion %, scores, statuses of pages not individually opened). A future assistant should treat estimates as starting points, not ground truth.
> Last updated against `main` @ commit `ffef48d`.

---

## 1. PROJECT OVERVIEW

- **Project name:** `synergicbond` (Synergic Bond — "Chemistry OS"). Production domain: `www.synergicbond.com` (apex 308→www).
- **Purpose:** A web "Chemistry Operating System" for JEE/NEET/Olympiad chemistry — learning references (periodic table, reactions, colours, orders), AI solvers (Snap & Solve, tutor), practice/quiz, and progress/gamification.
- **Target users:** Indian competitive-exam chemistry students (JEE Main/Advanced, NEET), Olympiad aspirants, and teachers (Teacher Hub).
- **Business goals:** Free core + PRO plans (a `/pricing` page and `PaywallGate`/`PaymentGateway` components exist), engagement via XP/streak/leaderboard.
- **Development stage:** Active build; broad feature surface (62 page routes, 25 API routes) with depth varying widely by area. Deployed on Vercel with auto-deploy on push to `main`.
- **Overall completion (estimate):** ~55–65%. Breadth is high; several flagship areas are solid (periodic table/trends, salt colours, important orders, name-reactions + mechanism Phase 1), but many routes are likely scaffolds and the DB migrations are incomplete relative to what APIs assume.

---

## 2. TECH STACK (verified from `package.json` + code)

| Layer | Technology |
|---|---|
| Framework | **Next.js 16.2.9** (App Router) — note: repo `AGENTS.md` warns this version diverges from older Next; read `node_modules/next/dist/docs/` before using framework APIs |
| Language | TypeScript, **React 19.2.4** |
| Database | **Supabase** (Postgres) via `@supabase/ssr` + `@supabase/supabase-js` |
| Auth | Supabase Auth (email; guest mode via `localStorage sb_guest`) |
| AI providers | **`@google/genai` (Gemini — primary, `lib/gemini.ts`)**, plus `@google/generative-ai` and `openai` (`lib/openai-client.ts`) present → **multiple AI SDKs = tech debt** |
| UI libraries | `lucide-react` (icons), `katex` + `react-markdown` + `remark-gfm` + `remark-math` + `rehype-katex` (math/markdown) |
| Chemistry | **`openchemlib` 8.x** (structure rendering, `/minimal` entry, lazy-loaded) |
| State mgmt | **None** (no Redux/Zustand/TanStack Query). React local state + `localStorage` + React Context (`ThemeProvider`, `LanguageProvider`) |
| Validation | **Zod** (via lib schemas: `snapSolveTypes.ts`, `mechanismSchema.ts`, `importantOrders.ts`) |
| i18n | Custom `lib/i18n.tsx`, **8 languages** |
| Deployment | Vercel (auto-deploy on `main`) |
| Analytics | None detected |
| Storage | Supabase tables + browser `localStorage` (no Blob/object storage detected) |

**Env vars (only 4 referenced):** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `GEMINI_API_KEY`, `GOOGLE_API_KEY`. **No service-role key** → all server DB access is anon/RLS-bound.

---

## 3. ARCHITECTURE

**Folder structure**
```
app/            Next App Router — pages (62 route folders) + api/ (25 routes) + layout.tsx
components/     55 components (incl. some *.v1.tsx / *.backup duplicates = debt)
  mechanism/    reaction-page section components (Phase 1)
  salt-colors/  TransitionMetalIonsTable
  important-orders/  OrderCard, FormulaText
lib/            domain data + logic (schemas, gemini, supabase, caches, datasets)
  reactionSeeds/   hand-authored mechanism seeds (acyloin)
  supabase/        server.ts (cookie-bound server client)
  runtime-safe/    env helpers
supabase/migrations/   001_progress_tracking.sql, 002_reaction_mechanisms.sql
```

**Routing:** App Router, file-based. Dynamic routes: `/learn/reactions/[slug]`, `/chapter/[id]`, `/concept/[id]`, `/revision/[type]`, `/vault/*`.

**Server vs client:** Default Server Components; pages with interactivity are `"use client"`. API routes are `runtime="nodejs"`, `dynamic="force-dynamic"`. Only **one** `loading.tsx` exists (`/learn/reactions/[slug]`); **no** `error.tsx`, **no** root `middleware.ts`.

**Data flow (text diagram)**
```
Client page ──fetch──▶ /api/* (Node route)
                         │
                         ├─ Supabase (server.ts, anon+RLS)  ── tables
                         ├─ Gemini (lib/gemini.ts, model fallback chain)
                         └─ Zod validate (lib schemas) ──▶ JSON ──▶ client render
```

**Cache flow (mechanism, the model to follow)**
```
/api/reaction:  seed? → return
                else Supabase cache (reaction_mechanisms) hit? → return
                else Gemini generateJSON → Zod parse → persist → return
                failure → friendly {error} (503)
Client: localStorage instant-hydrate, then revalidate.
```

**AI generation flow:** `lib/gemini.ts` `run()` tries models `["gemini-2.0-flash","gemini-2.5-flash","gemini-flash-latest"]` in order (resilient to model-id drift). `generateText`/`generateJSON` exported. Routes wrap failures into user-friendly messages (never leak model/API errors).

**Validation flow:** AI/raw input → inject server-owned fields → `Schema.safeParse` → on failure return fallback/friendly error. Strongest in `snap-solve` and `reaction`.

**Security flow:** Supabase Auth + RLS is the primary boundary. ~10/25 API routes call `auth.getUser()`; the rest are public (content/AI). No server-side rate limiting wired.

---

## 4. PAGE INVENTORY

62 page routes. Statuses for pages **personally built/verified this session** are **Verified**; all others are **(estimate)** from route name + context — a future assistant should open them to confirm.

| Route | Purpose | Status | Notes |
|---|---|---|---|
| `/learn/reactions/[slug]` | Reaction lesson (dashboard, mechanism, etc.) | **Complete (verified)** | Phase 1; seed-backed (Acyloin), AI+cache for rest |
| `/name-reactions` | 700+ reaction index → links to reaction page | **Complete (verified)** | purple theme, search, high-yield filter |
| `/periodic-trends` | Radius/IE/ΔegH/EN trends + heatmap | **Complete (verified)** | |
| `/salt-colors` | "Colour of Compounds" (168 entries, TM-ion table) | **Complete (verified)** | |
| `/important-orders` | IOC/OC/PC verified ordering sequences | **Complete (verified)** | OC/PC empty by design |
| `/periodic-table` | Interactive periodic table + trend heatmap | **Complete (estimate)** | pre-existing, extended by us |
| `/control-center`, `/snap-solve` | Snap & Solve (SSE + memory) | **Partial (verified)** | UI consumes SSE; tutor-interrupt UI not built |
| `/`, `/about`, `/pricing`, `/teachers`, `/donate` | Marketing/info | Complete (estimate) | |
| `/vault`, `/vault/{concepts,exceptions,facts,favorites,formulas}` | Knowledge Vault | Partial (estimate) | data-backed; depth unverified |
| `/quiz`, `/exam`, `/assignment`, `/daily-challenge`, `/pyq` | Practice | Partial (estimate) | back by `/api/*` |
| `/tutor`, `/doubt-solver`, `/handwritten-notes`, `/lab`, `/molecule` | AI Lab | Partial (estimate) | Gemini-backed |
| `/dashboard`, `/activity`, `/study-plan`, `/exam-predictor`, `/achievements`, `/leaderboard`, `/live` | Track | Partial (estimate) | XP/leaderboard wired to Supabase |
| `/neet`, `/jee`, `/gate`, `/olympiad(s)`, `/exam-center` | Exam tracks | Partial (estimate) | |
| `/reagents`, `/redox-reactions`, `/solubility`, `/properties`, `/molecule`, `/notes`, `/library`, `/study-tools`, `/revision`, `/revision/[type]`, `/reaction-predictor` | Learn tools | Partial/Planned (estimate) | some likely scaffolds |
| `/chapter/[id]`, `/concept/[id]`, `/coach`, `/upload`, `/debug`, `/search`, `/auth/{signin,signup}` | Misc/infra | mixed (estimate) | `/debug` likely dev-only |

**Known issue pattern:** several pages were AI-content-heavy "walls of text" (the impetus for the V2/V3 redesigns).

---

## 5. NAVIGATION STRUCTURE (verified from `components/Navbar.tsx`)

**Top nav (6):** Search · Learn · Practice · Track · AI · More. Logo (`MoleculeLogo`) → `/` on every page (global, in `app/layout.tsx`).

**Learn mega-menu (pinned + 5 groups):**
- Pinned: Periodic Table
- 📚 Learn Concepts: Knowledge Vault · AI Notes · Formula Sheets · Book Library · Study Tools
- ⚗️ Reactions: Named Reactions · Reagent Explorer · Reaction Predictor
- 🧬 Molecules: Molecule Explorer · Bonding & Geometry
- 🧪 Periodic Chemistry: Periodic Table · Trends Explorer · Colour Explorer
- 🎯 Exam Hub: Important Orders · PYQs · Revision Sheets

**Practice:** Quiz · Mock Exam · Assignments · Daily Challenge · PYQ Mode
**Track:** My Dashboard · Study Plan · Progress Analytics · Exam Predictor · Achievements · Leaderboard · Live
**AI:** AI Tutor · Doubt Solver · Snap & Solve · Handwritten Solver · Virtual Lab · Molecule Builder
**More (wide):** Exam Center · NEET · JEE · Olympiad · GATE · Teacher Hub · About · Pricing

**Mobile nav:** hamburger → flat grid of `mainLinks` (full catalog) + language switcher. Independent of the desktop curated groups.
**Footer:** `components/Footer.tsx` exists (content not audited). **Sidebar:** only `NewsSidebar.tsx` (not a global nav sidebar).

---

## 6. LEARN SECTION

- **Knowledge Vault** (`/vault` + sub-tabs concepts/exceptions/facts/favorites/formulas) — data-backed reference.
- **Reactions** — `/name-reactions` index (A–Z, search, ★ high-yield) → `/learn/reactions/[slug]` lesson page.
- **Notes** — `/notes` (AI notes via `/api/notes/generate`).
- **Important Orders** — `/important-orders`, IOC/OC/PC tabs, 207 verified inorganic ordering sequences (`lib/importantOrders.ts`); OC/PC intentionally empty (no verified source content).
- **Periodic** — `/periodic-table`, `/periodic-trends`, `/salt-colors` (Colour of Compounds, 168 entries + standalone aquated TM-ion table).
- **Search:** in-page search exists on name-reactions, important-orders, salt-colors (TM table), plus a global `/search` page + `/api/search`.
- **Missing:** Mechanism Visualizer is **not** a separate route (it's the reaction page). Reagent Explorer/Reaction Predictor depth unverified.

---

## 7. REACTION SYSTEM (Phase 1 — verified)

- **Schema (SSOT):** `lib/mechanismSchema.ts` — `Mechanism { schemaVersion, slug, name, category, dashboard, flowMap[], steps[], quickView, stereochemistry, examples[], relatedReactions[] }`. `SCHEMA_VERSION = 1` (bump invalidates cache). Step = `{ n, title, beforeSmiles?, afterSmiles?, electronMove, intermediate?, reason, trap?, hook? }`.
- **API:** `/api/reaction` → seed → Supabase cache → Gemini `generateJSON` → `MechanismSchema.safeParse` → persist. Server injects `schemaVersion/slug/name/category`.
- **Renderer/components (`components/mechanism/`):** `ReactionDashboard`, `FlowMap`, `MechanismSteps` (+ `StructureView` = OpenChemLib SMILES→SVG, dark-recoloured, lazy-loaded), `JeeQuickView`, `StereoCard`, `ExamplesEngine` (tier filter), `RelatedReactions`, `PracticeDrawer` (inline flashcards), `QuizDrawer` (inline self-graded). All inline — **no redirects**.
- **Page:** `app/learn/reactions/[slug]/page.tsx` — sticky header (back/logo/bookmark/share), hero, sections, localStorage instant-hydrate, `loading.tsx` skeleton.
- **Benchmark:** `lib/reactionSeeds/acyloin.ts` (hand-authored, accurate, offline-testable).
- **Limitations:** Only **1 seed** (Acyloin). All other reactions depend on live Gemini + the (not-yet-created) Supabase cache table. **No real curved-arrow/electron-flow animation** — `electronMove` is a schematic one-liner; structures are static SMILES renders (this is intentional — auto-correct animated mechanisms for 700 reactions is not feasible). Practice/Quiz drawers use the reaction's `examples` as the pool (not a 40-question generator yet).

---

## 8. DATABASE DOCUMENTATION

> ⚠️ **Major finding:** local `supabase/migrations/` only define **`user_xp`** (001) and **`reaction_mechanisms`** (002). Many API routes read/write other tables (e.g. mistakes, study sessions, leaderboard) that **are not represented in migrations** → the live Supabase schema is **not reproducible from this repo**. This is the #1 handover risk.

| Table | Source | Purpose | Columns | RLS |
|---|---|---|---|---|
| `user_xp` | migration 001 | XP/level/streak per user | user_id, xp, xp_level, streak, last_active | RLS: users read/insert/update **own** rows |
| `reaction_mechanisms` | migration 002 (**not yet run on prod**) | Cache generated mechanisms | slug, language, schema_version, data(jsonb), created_at; PK(slug,language,schema_version) | RLS: public select + insert + update (public content cache) |
| *(others)* | **undocumented** | referenced by `/api/mistake`, `/api/study-session`, `/api/leaderboard`, `/api/content/access`, etc. | unknown | unknown |

**Action required:** dump the live schema (`supabase db pull`) into migrations to make the DB reproducible.

---

## 9. API DOCUMENTATION (25 routes)

All routes: `runtime="nodejs"`, `dynamic="force-dynamic"`. ~10 call `auth.getUser()` (authed); the rest are public.

| Endpoint | Purpose | Auth | Validation | Notes |
|---|---|---|---|---|
| `/api/reaction` | Structured mechanism (seed/cache/generate) | none | **Zod (MechanismSchema)** | friendly errors; persists to Supabase |
| `/api/snap-solve` | OCR+solve, SSE stream + tutor + memory | none | **Zod (SnapSolveResponseSchema)** | model `gemini-2.0-flash`; simulator fallback w/o key |
| `/api/xp` | award/fetch XP | **yes** | manual | writes `user_xp` |
| `/api/leaderboard`, `/api/study-session`, `/api/mistake`(+/analysis), `/api/content/access`, `/api/daily-practice` | progress/social/paywall | **yes** | manual | Supabase-backed |
| `/api/chat`, `/api/ai`, `/api/doubt`, `/api/vision`, `/api/handwritten-notes`, `/api/notes/generate`, `/api/molecule`, `/api/search`, `/api/assignment/generate`, `/api/quiz`, `/api/exam`, `/api/exam-predictor`, `/api/exam-result`, `/api/study-plan`, `/api/daily-challenge`, `/api/badges` | AI/content/practice | mixed | mostly manual | Gemini via `lib/gemini` or inline |

**Common request shape:** `POST` JSON. **Error handling:** the routes we rebuilt (`reaction`, `snap-solve`) never leak model/API errors; **older routes may still return raw `err.message`** — audit needed.

---

## 10. SECURITY AUDIT

- **AuthN:** Supabase Auth (email) + guest mode. **AuthZ:** Postgres RLS (own-row policies on `user_xp`).
- **API protection:** inconsistent — ~15/25 routes are unauthenticated (acceptable for public content/AI, but they call paid AI APIs).
- **Rate limiting:** ⚠️ **client-side only** (`lib/rateLimiter.ts`, used in 0 API routes). **No server-side rate limiting** → AI endpoints can be hammered (cost/abuse risk). **High-priority gap.**
- **Input validation:** strong where Zod schemas exist (reaction, snap-solve); manual/ad-hoc elsewhere; `clean()` strips `<>{}` on reaction names.
- **XSS:** `react-markdown` is safe; **`StructureView` uses `dangerouslySetInnerHTML`** on OpenChemLib-generated SVG — input is server-controlled SMILES, low risk, but worth sanitising.
- **SQL injection:** mitigated by Supabase client (parameterised).
- **Secrets:** only env vars; no service-role key. ✅ no secrets in repo. **Risk:** several `.env*` files exist locally — ensure they're gitignored (they are not all obviously so — verify).
- **Weaknesses (ranked):** (1) no server rate limiting; (2) DB schema not in migrations; (3) inconsistent auth on AI routes; (4) older routes may leak error details.

---

## 11. UI/UX SYSTEM

- **Design language:** dark "AI-lab" theme, base `#0B0F19`, cards `#111827`, cyan accent (`#22D3EE`/cyan-400) + per-feature accents (purple = reactions, etc.).
- **Theme:** `ThemeProvider` context (light/dark toggling present).
- **Typography:** Tailwind defaults; heavy use of `font-black` headings, `font-mono` for formulae.
- **Color-coded learning (partial):** purple applied to Named Reactions; full 8-colour category map (Organic=orange … Exams=red) **specced but not globally implemented**.
- **Responsive:** mobile-first patterns in newer work (bottom-sheet drawers, horizontal scroll flow-map); older pages are desktop-shrunk.
- **Loading states:** **only one** `loading.tsx` (reaction route) + in-component spinners/skeletons. Most routes lack skeletons.
- **Error states:** friendly messages in rebuilt routes; inconsistent elsewhere. No `error.tsx` boundary.
- **Accessibility:** partial (aria-labels on icon buttons in new components); not audited globally.

---

## 12. CODE LAYERING

- **Presentation:** `app/**/page.tsx` + `components/**`.
- **Business logic:** `lib/**` (engines: `aiQuestionEngine`, `adaptiveTestEngine`, `revisionEngine`, `gamification`, `memoryCore`, …).
- **Data:** `lib/supabase/server.ts`, `lib/supabase.ts` (browser), static datasets (`periodicTable`, `nameReactions`, `importantOrders`, `saltColourCompounds`).
- **Validation:** `lib/*Schema.ts` (Zod).
- **AI:** `lib/gemini.ts` (centralised, model-fallback) + some inline `GoogleGenAI` usage (snap-solve/vision) + `lib/openai-client.ts`.
- **Cache:** `lib/mechanismCache.ts` (Supabase, graceful) + `localStorage` + `lib/memoryCore.ts` (in-memory, ephemeral).
- **Violations / debt:** multiple AI SDKs; duplicate components (`Navbar.v1.tsx`, `AIChemistryEngine.v1.tsx`, `supabase.ts.backup`); inline model IDs vs central lib; in-memory `memoryCore` not viable on serverless.

---

## 13. COMPLETED FEATURES (verified)
- Global navbar IA (6 top items, 5 Learn groups), logo→home everywhere.
- Periodic Table + Periodic Trends (radius/IE/ΔegH/EN) + heatmap.
- Colour of Compounds (168 deduped entries, grouped-by-colour, standalone TM-ion table).
- Important Orders (207 verified inorganic sequences, IOC tab).
- Name Reactions index + full-page reaction route (dashboard/flow/mechanism/quick-view/stereo/examples/related + inline Practice/Quiz).
- Mechanism typed schema + Supabase cache layer + Acyloin seed + OpenChemLib structure rendering.
- Snap & Solve: SSE streaming endpoint + tutor-interrupt branch + per-user memory + UI consuming the stream.
- Gemini model-fallback + friendly-error governance (reaction/snap-solve).
- XP/streak (`user_xp`) infra.

## 14. INCOMPLETE FEATURES
- Reaction system: only 1 seed; 699 reactions rely on live Gemini + uncreated cache table; no curved-arrow animation.
- Snap & Solve: tutor-interrupt has **no UI trigger**; memory is ephemeral (needs Supabase).
- Color-coded category theming: only purple done.
- Skeletons/instant-feel: only the reaction route.
- Practice/Quiz: flashcards from `examples`, not the specced 40-question/multi-mode generator.
- Addiction loop: XP infra exists but not wired to reaction/lesson completion.

## 15. PLANNED FEATURES (intended, not built)
- Persistent per-student/class analytics (Supabase-backed memory).
- Full exam generator + evaluation; PYQ frequency analytics.
- NCERT Highlights, Reaction Predictor depth, Mechanism Visualizer as a first-class experience.
- Global skeletons, prefetch-on-hover, TanStack-Query-style cache.

## 16. KNOWN BUGS / DEBT
- **DB schema not reproducible from migrations** (only 2 tables captured).
- **No server-side rate limiting** on AI routes.
- Older API routes may **leak raw error messages** (only reaction/snap-solve hardened).
- Duplicate/backup files in `components/` and `lib/` (`*.v1.tsx`, `*.backup`).
- Multiple AI SDKs installed (`@google/genai`, `@google/generative-ai`, `openai`) — pick one.
- `memoryCore` in-memory `Map` is per-instance on Vercel (effectively non-persistent).
- Most routes lack skeleton/error boundaries.

## 17. PERFORMANCE ANALYSIS
- **AI generation is the main latency** (multi-second Gemini). Fix = cache (Supabase + localStorage), already modelled for `/api/reaction`; extend to all AI routes.
- **OpenChemLib** is lazy-loaded (`/minimal`) — good; keep it off the main bundle.
- **Bundle:** 3 AI SDKs + markdown/katex stack inflate it; dedupe AI SDK; ensure katex/markdown only load where used.
- **Cache opportunities:** notes, quiz questions, mechanisms, search — all regenerated today; persist them.
- **Rendering:** add `loading.tsx` per heavy segment; prefetch on hover for reaction/learn links.

## 18. AI CONTINUATION GUIDE (rules for the next assistant)
1. **Read `node_modules/next/dist/docs/` before using Next APIs** — this is Next 16, not your training default (`AGENTS.md` mandate).
2. **Never leak model/API errors to the UI.** Log server-side; return friendly messages. Follow `/api/reaction` + `/api/snap-solve` as the templates.
3. **Validate AI output with Zod** before returning/persisting. Schemas live in `lib/*Schema.ts` (SSOT). Don't duplicate types.
4. **Mechanisms:** generate → `MechanismSchema.safeParse` → cache. Bump `SCHEMA_VERSION` when changing the shape. Hand-author high-value reactions as seeds in `lib/reactionSeeds/`.
5. **DB:** server access is **anon + RLS** (no service role). Add an RLS policy for any new table and a migration file (`supabase/migrations/NNN_*.sql`). Make all DB ops degrade gracefully (the table may not exist yet).
6. **Commit/push only when asked.** Branch off `main` only if asked; this repo commits direct to `main` by convention. End commit messages with the Co-Authored-By trailer.
7. **State:** React local + `localStorage` + Context. No global store yet — don't add one without reason.
8. **Don't fabricate chemistry.** Cross-check; prefer "Not conclusively established" over guessing. No fake curved-arrow geometry.
9. **Verify in-browser** with the preview tools before claiming done; build must be green (`npm run build`).

## 19. NEXT RECOMMENDED TASKS (ranked)
1. `supabase db pull` → commit real schema into migrations (unblocks everything).
2. Run migration `002_reaction_mechanisms` on prod (turn on mechanism cache).
3. Add **server-side rate limiting** to all AI routes.
4. Audit all 25 API routes for raw-error leaks; standardise friendly errors.
5. Persist Snap & Solve memory to Supabase (replace ephemeral `memoryCore`).
6. Wire XP/streak to lesson/reaction completion (addiction loop).
7. Seed the next high-yield reactions (Aldol, Cannizzaro, Diels–Alder, Wittig…).
8. Consolidate to **one AI SDK** (`@google/genai`); remove `openai`/`generative-ai` if unused.
9. Delete `*.v1.tsx` / `*.backup` dead files.
10. Add `loading.tsx` skeletons to heavy routes (vault, quiz, exam, dashboard).
11. Add a global `error.tsx` boundary.
12. Cache notes/quiz/search results (Supabase + localStorage).
13. Tutor-interrupt UI on Snap & Solve.
14. Full color-coded category theming across Learn.
15. Practice/Quiz: real multi-mode generator (reuse `/api/quiz`).
16. Reaction page: bring back valuable old sections (Energy Profile, Scope, References) into the schema.
17. Confirm `.env*` files are gitignored; rotate keys if ever committed.
18. Accessibility pass (focus states, aria, contrast).
19. Mobile QA on older desktop-first pages.
20. Add tests (none detected) — at least schema + API smoke tests.

## 20. EXECUTIVE SUMMARY (estimates)
| Score | /10 | Rationale |
|---|---|---|
| Maturity | **6** | Broad, several polished flagship areas; many scaffolds |
| Production readiness | **5** | Deployed & working, but DB not reproducible, no rate limiting, sparse error/loading states |
| Scalability | **6** | Good schema/cache pattern emerging; ephemeral memory + missing migrations hold it back |
| Security | **4.5** | RLS + Supabase Auth solid; no server rate limiting, inconsistent route auth, secret-file hygiene to confirm |
| **Estimated remaining work** | **~40%** | to reach a hardened, consistent, fully-wired product |

**Bottom line:** strong product surface and a clean emerging architecture (typed schemas + cache + graceful AI), but the foundation needs hardening — **reproducible DB migrations, server rate limiting, consistent error handling, and one AI SDK** are the highest-leverage next steps before scaling content.
