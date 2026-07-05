# DEVELOPMENT_LOG.md — Synergic Bond

> **Reconstructed from `git log` (131 commits) on `main`.** Dates are commit dates (`%ad`, short). The project is a **~6-day intensive build (2026-06-24 → 2026-06-29)** — phases overlap heavily because the cadence was many commits/day, often direct to `main`. "Lessons / unresolved" notes synthesize patterns visible in the commit stream (e.g. repeated "checkpoint before redesign", AI provider thrash).

---

## TIMELINE AT A GLANCE

| Phase | Dates | Theme | Anchor commits |
|---|---|---|---|
| 1 | 2026-06-24 | Foundation / V1 student modules | `ba5a1f0`→`2a52e51` |
| 2 | 2026-06-24→25 | Stabilization, AI disabled for deploy, syllabus refactor | `b692aed`, `c227158`, `06762cd` |
| 3 | 2026-06-26 | UI/Design-system + homepage/dashboard redesign | `53e1394`, `1e6cf47`, `068fffc` |
| 4 | 2026-06-27 | Supabase auth + MVP + **OpenAI→Gemini switch** + paywall/pricing | `84d1e88`, `632da79`, `780e918`, `9dc39cf` |
| 5 | 2026-06-28 | "World-class features" wave + i18n + Snap & Solve v1 | `50a0186`, `b7f630d`, `fe56cc5` |
| 6 | 2026-06-28→29 | Periodic engine + reference content (orders/colours/trends) | `1c2aaaf`, `f483fa3`, `a8cca76`, `5cc14e5` |
| 7 | 2026-06-29 | Navbar IA consolidation + Name-Reactions + **Reaction/Mechanism Phase 1** | `35430f9`, `765ff87`, `c350ccb`, `ffef48d` |
| 8 | 2026-06-29 | Snap & Solve governed pipeline + SSE streaming | `a67ab0a`, `aeebeee`, `b0768c2` |

> Phases 5–8 are partly parallel (same 1–2 days). Ordering above follows the dominant theme per cluster.

---

## PHASE 1 — FOUNDATION (2026-06-24)

**Why:** Stand up the product skeleton fast — homepage, student modules, the engines that define the domain.
**What was built:** README + homepage structure; "Synergic Bond V1" student experience/modules; **revision engine v1**, **adaptive exam engine**, **smart dashboard with gamification**, **offline smart tutor with PYQ**, **knowledge vault + learning flow**. This is where most `lib/` engines were born (`revisionEngine`, `adaptiveTestEngine`, `gamification`, `pyqEngine`, `learningFlow`).
**Unfinished/lessons:** Lots of breadth, little depth. Immediately followed by "Cleanup unused Aptitude component" and "Ignore backup files" — early signs of the **backup-file / dead-code habit** that becomes tech debt (`*.v1.tsx`, `*.backup`).

## PHASE 2 — STABILIZATION & AI-OFF FOR DEPLOY (2026-06-24→25)

**Why:** Get a deployable build; AI was destabilizing production builds.
**What:** `Disable chat AI for production deployment`, `Disable vision AI for production deployment`, `Remove backup directory`, then a **syllabus module prototype** (`c227158`) and multiple "stable checkpoint / recovery checkpoint before redesign" commits.
**Lessons:** AI features caused **build-time crashes** (later fixed via *lazy init* of the SDK, `932b7b6`). The repeated "checkpoint before redesign" commits show a **redesign-heavy, checkpoint-driven workflow** rather than branch/PR discipline.
**Unresolved (still today):** the syllabus prototype became a **second** syllabus dataset — `lib/syllabus/` now coexists with `lib/masterSyllabus/` (duplication, unresolved).

## PHASE 3 — DESIGN SYSTEM + HOMEPAGE/DASHBOARD REDESIGN (2026-06-26)

**Why:** V1 looked rough; needed a premium, consistent UI.
**What:** `Sprint 1: Design system components` (`components/ui/*` primitives), `Hero V5`, `Dashboard V2`, "mission control" dashboard phases 1–2, refactor homepage into reusable components (`components/home/*`), "Student portal connected."
**Lessons:** Introduced the calm-dark CSS-variable design system (`globals.css`) — the visual identity that still holds. Multiple Hero versions (`V2`/`V5`) → the **`*.v1.tsx` dead-file pattern**.
**Unfinished:** design system not applied uniformly to legacy pages (still true).

## PHASE 4 — AUTH + MVP + PROVIDER SWITCH (2026-06-27)

**Why:** Make it a real app — login, persistence, monetization scaffolding — and fix AI cost/stability.
**What:**
- `Checkpoint: Supabase auth, profiles, dashboard foundation` → `MVP complete`.
- `AI Coach MVP`, `coach-v1-real-analytics`, `dashboard-intelligence-v1` (real analytics from Supabase).
- **Big feature commit `9dc39cf`:** notes generator, assignment generator, leaderboard, paywall, pricing page, SF font, **Hindi support**, real quiz/exam/vision APIs.
- **Provider migration (the decision):** `780e918 feat: switch all AI from OpenAI to Google Gemini (free tier - 1500 req/day)` → then `360e00b switch to @google/genai SDK` → `932b7b6 lazy init GoogleGenAI to prevent build-time crash, remove OpenAI from /api/ai`.
- Guest access (`d19d04a`), exam-track pages NEET/JEE/Olympiad/GATE (`be0e8d8`), merged PR #1 (premium homepage v2) — the **only PR in history; everything else is direct-to-main**.
**Lessons:** The OpenAI→Gemini switch was **cost-driven** (free tier). It left **residue**: `openai` SDK + `lib/openai-client.ts` are still installed but dead; `@google/generative-ai` (older Google SDK) also lingers. Build crashes were solved by lazy-init.
**Unresolved:** paywall/pricing shipped but tiers never enforced; profiles table never captured in migrations.

## PHASE 5 — "WORLD-CLASS FEATURES" WAVE + i18n (2026-06-28)

**Why:** Expand the surface to look feature-complete.
**What:** `50a0186` — Snap & Solve (v1), Molecule Explorer, Daily Challenge, Study Plan, Exam Predictor (5 features in one commit). `b7f630d` — badges/levels, handwritten-notes converter, daily practice, language switcher. `fe56cc5` — vault tabs, **7-language dropdown**, exam center, testimonials, FAQ, contact/feedback. 3D molecule logo. `8f6f7ea` enforce SF Pro typography globally.
**Lessons:** Breadth spike — many routes created in big batch commits, which is why **page depth varies wildly** and several routes are scaffolds.
**Unfinished:** most of these are partial; the model id was set to `gemini-1.5-flash` here (`4785816`) — later proven fragile (model drift), motivating the fallback chain in Phase 7/8.

## PHASE 6 — PERIODIC ENGINE + VERIFIED REFERENCE CONTENT (2026-06-28→29)

**Why:** Deliver depth where the founder's faculty expertise is strongest — verified, exam-grade reference.
**What:** Interactive periodic table (118 elements, click-for-details, `1c2aaaf`), electron configuration/oxidation states/MP-BP on cards, **trends view** (color-by EN/radius/MP), `f483fa3` periodic-trends page (radius/IE/ΔegH/EN + heatmap). **Important Orders** (`a8cca76`, PDF-verified, 207 inorganic sequences; later drop "Exception" tag). **Colour of Compounds** (`5cc14e5`→`ee55b59`, 168 deduped entries + standalone TM-ion table).
**Lessons:** This is the product's strongest, most-differentiated work — *verified content*, iterated for compactness (multiple "compact layout / dedupe" commits). Reference modules were repeatedly **consolidated under shared sub-nav** (`13f490c`, `b91850e`) to declutter the navbar — an ongoing IA tension.
**Unfinished:** OC/PC (organic/physical) order tabs intentionally empty (no verified source yet).

## PHASE 7 — NAV IA + NAME REACTIONS + REACTION/MECHANISM PHASE 1 (2026-06-29)

**Why:** Too many nav items; and reactions needed to become a real structured lesson, not a modal wall-of-text.
**What:**
- **Navbar IA consolidation** `35430f9`: top nav 9→6 (`Search·Learn·Practice·Track·AI·More`), Learn into 5 groups + pinned periodic table.
- **Name Reactions:** `765ff87` 23-section verified reaction notes + GFM tables; `c350ccb` full-page reaction route + accordion cards (**killed the modal**).
- **Reaction/Mechanism Phase 1** `ffef48d`: **typed `MechanismSchema` (zod SSOT, `SCHEMA_VERSION=1`)** + structured `/learn/reactions/[slug]` page (Dashboard/FlowMap/Steps/QuickView/Stereo/Examples/Related + inline Practice/Quiz drawers) + **Supabase cache** (`reaction_mechanisms`, migration 002) + **Acyloin seed** + **OpenChemLib** SMILES→SVG.
**Lessons (the architectural turning point):** This phase establishes **the golden pattern** — seed → cache → AI generate → zod validate → persist → friendly errors. Everything after should follow it.
**Unfinished:** only 1 seed; migration 002 noted as **not yet run on prod**; no curved-arrow animation (intentional); Practice/Quiz pull from `examples`, not a real generator.

## PHASE 8 — SNAP & SOLVE GOVERNED PIPELINE + SSE (2026-06-29)

**Why:** Make the camera-solver trustworthy and "alive."
**What:** `a67ab0a` governed inference pipeline (zod `SnapSolveResponseSchema`, SSOT); `77e4fa3` components + control-center orchestrator; `b726053` page-owned state + `onUploadSuccess` contract; `8932b49`/`eb84899` UI (accuracy ring, camera auto-capture, simulated token stream); `aeebeee` **opt-in SSE streaming + tutor interrupt + ephemeral memory core**; `b0768c2` UI consumes the SSE stream.
**Lessons:** Same governance pattern as reactions (schema-gated AI). **Memory is ephemeral** (`memoryCore` in-memory Map) — a known, documented limitation. **Feature is now architecture-locked** (per project memory): inject only explicitly-requested changes, no redesign.
**Unfinished:** tutor-interrupt has no UI trigger; memory not durable.

---

## ARCHITECTURAL DECISIONS LOG (ADR-style)

### ADR-1 — Next.js 16 (App Router)
**Decision:** Build on Next.js 16.2.9 + React 19.
**Why:** Modern App Router (Server Components, file routing, route handlers), single deploy target (Vercel).
**Tradeoff / cost:** This Next version **diverges from training-data defaults** — `AGENTS.md` mandates reading `node_modules/next/dist/docs/` before using framework APIs. Bleeding-edge = more "read the docs" friction.

### ADR-2 — Supabase (Postgres + Auth + RLS), anon-key-only
**Decision:** Supabase for DB + Auth; server access via cookie-bound **anon key + RLS** (no service-role key).
**Why:** Fast to ship; RLS gives per-user security without app-side authz code; Google OAuth built in.
**Tradeoff:** No service-role escape hatch (good for safety, limiting for admin/batch jobs). RLS must exist for *every* table — and today only 2 of 9 tables have migrations, so RLS coverage on the rest is **unverified**.

### ADR-3 — Google Gemini over OpenAI (`@google/genai`)
**Decision:** Migrate all AI from OpenAI to Gemini (`780e918`), on the newer `@google/genai` SDK (`360e00b`), lazy-initialized (`932b7b6`).
**Why:** **Cost** — Gemini free tier (~1500 req/day). Lazy init fixed build-time crashes.
**Tradeoff / debt:** Left `openai` + `@google/generative-ai` SDKs installed but unused (dead deps). Model-id drift (`gemini-1.5-flash` 404s) forced the **fallback chain** in `lib/gemini.ts`.

### ADR-4 — Zod schemas as SSOT for AI output
**Decision:** Every governed AI feature defines a zod schema shared by API + UI (`mechanismSchema.ts`, `snapSolveTypes.ts`); AI output is `safeParse`d before use/persist; `SCHEMA_VERSION` invalidates cache.
**Why:** LLMs hallucinate; a typed contract is the only way to ship *trustworthy* chemistry and a stable render target. Server injects identity fields so AI can't spoof them.
**Tradeoff / risk:** **`zod` is used everywhere but is NOT a declared dependency** (resolves only transitively via next/openai) — a latent build risk. Pin it.

### ADR-5 — OpenChemLib for structure rendering (lazy `/minimal`)
**Decision:** Render SMILES→SVG with `openchemlib` via the `/minimal` entry, dynamically imported in `StructureView.tsx`, recolored for dark theme.
**Why:** Real chemical structures without a heavy 3D engine; lazy import keeps it off the main bundle.
**Tradeoff:** Static structures only (no animated electron flow); `dangerouslySetInnerHTML` on generated SVG (server-controlled input, low risk; sanitize for defense-in-depth).

### ADR-6 — localStorage + Context, no global store
**Decision:** State = React local + Context (Theme, Language) + `localStorage`; **no Redux/Zustand/TanStack Query**.
**Why:** Keep it simple; server state lives in Supabase, fetched per request. localStorage gives instant-hydrate (reaction page) cheaply.
**Tradeoff:** No client cache → refetch on every navigation; the **ephemeral `memoryCore`** is the one place this model breaks on serverless (per-instance, non-durable).

### ADR-7 — Direct-to-`main`, checkpoint-driven workflow
**Decision (de facto):** Commit straight to `main`; only one PR in history.
**Why:** Solo, high-velocity build.
**Tradeoff:** "checkpoint before redesign" commits + backup files = recoverability via git but lots of **dead-file/duplicate debt** (`*.v1.tsx`, `*.backup`, the committed `synergic-bond-clone/` with node_modules).

---

*End of DEVELOPMENT_LOG.md*
