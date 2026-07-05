# SYSTEM_ARCHITECTURE.md — Synergic Bond ("Chemistry OS")

> **Audience:** Any AI assistant or engineer (Claude, ChatGPT, Cursor, Gemini, Codex, Windsurf, Devin, OpenHands…) continuing development.
> **Method:** Every "Verified" fact was read directly from source on `main` @ `ffef48d`. Items marked **(assumption)** are inference and must be confirmed before relying on them.
> **Companion files:** `PRODUCT_SPEC.md`, `DEVELOPMENT_LOG.md`, `AI_CONTINUATION_GUIDE.md`, `REPOSITORY_AUDIT.md`, and the older `PROJECT_HANDOVER.md`.

---

## 0. TL;DR FOR A NEW ENGINEER (read this first)

- **What it is:** A Next.js 16 App-Router web app — a "Chemistry Operating System" for Indian competitive-exam chemistry (JEE/NEET/Olympiad/GATE). Learning references + AI solvers + practice + progress tracking.
- **Stack in one line:** Next.js 16.2.9 / React 19 / TypeScript → Supabase (Postgres + Auth + RLS) → Google Gemini (`@google/genai`) for AI → OpenChemLib for structure rendering → Tailwind v4. **No global state library, no test suite.**
- **The golden pattern** (copy it everywhere): `seed → persisted cache → AI generate → validate with a zod schema (SSOT) → persist → return friendly errors`. Implemented in `app/api/reaction/route.ts`. This is the reference architecture.
- **The 3 things most likely to bite you:**
  1. **DB is not reproducible from the repo.** Code reads/writes **9 tables**; migrations define **2**. (§Database)
  2. **`zod` is used everywhere but is NOT a direct dependency** — it only resolves transitively. One `npm dedupe`/upgrade away from a broken build. (§Technical Debt)
  3. **No server-side rate limiting** on AI routes that call paid Gemini APIs. (§Security)
- **Next.js 16 caveat (from `AGENTS.md`):** this Next version diverges from training-data defaults. **Read `node_modules/next/dist/docs/` before using framework APIs.**

---

## 1. REPOSITORY STRUCTURE

### 1.1 Full hierarchy (top level)

```
synergicbond/
├── app/                    # Next.js App Router: 62 pages + 25 API routes + layout
│   ├── api/                # 25 server route handlers (runtime=nodejs, force-dynamic)
│   ├── auth/               # signin, signup pages + callback/route.ts (OAuth code exchange)
│   ├── learn/reactions/[slug]/   # flagship reaction lesson route (+ loading.tsx)
│   ├── vault/              # Knowledge Vault sub-pages
│   ├── chapter/, concept/, revision/   # dynamic content routes
│   ├── layout.tsx          # root layout: <html dark> + ThemeProvider + LanguageProvider + Navbar
│   └── globals.css         # Tailwind v4 + CSS-variable design system
├── components/             # 99 .tsx files (48 are "use client")
│   ├── mechanism/          # reaction-page sections (Dashboard, FlowMap, Steps, StructureView…)
│   ├── chapter/            # chapter-page sections
│   ├── dashboard/          # dashboard widgets
│   ├── home/               # homepage grids
│   ├── tutor/              # AI tutor chat UI
│   ├── ui/                 # primitives: Button, Card, Badge, Container, Heading, Section, StatCard
│   ├── important-orders/, salt-colors/   # feature-scoped components
│   └── *.v1.tsx            # DEAD duplicates (Navbar.v1, AIChemistryEngine.v1) — see debt register
├── lib/                    # domain logic, data, schemas, integrations
│   ├── gemini.ts           # central Gemini client + model fallback chain
│   ├── openai-client.ts    # DEAD — never imported
│   ├── supabase.ts         # browser Supabase client
│   ├── supabase/server.ts  # cookie-bound server Supabase client (anon + RLS)
│   ├── supabase.ts.backup  # DEAD backup file
│   ├── mechanismSchema.ts  # zod SSOT for reactions  ← reference schema
│   ├── mechanismCache.ts   # Supabase cache for mechanisms (graceful-degrade)
│   ├── snapSolveTypes.ts   # zod SSOT for Snap & Solve
│   ├── memoryCore.ts       # EPHEMERAL in-memory student model (per-instance; not durable)
│   ├── rateLimiter.ts      # CLIENT-side only; used by 0 API routes
│   ├── reactionSeeds/      # hand-authored mechanisms (only acyloin.ts so far)
│   ├── runtime-safe/env.ts # requireEnv() helper
│   ├── masterSyllabus/     # newer structured syllabus dataset (organic/inorganic/physical…)
│   ├── syllabus/           # OLDER parallel syllabus dataset (duplication — see debt)
│   ├── knowledge/          # search / ranking / recommend / context for knowledge vault
│   └── *.ts                # periodicTable, nameReactions, importantOrders, saltColourCompounds, i18n…
├── supabase/migrations/    # 001_progress_tracking.sql, 002_reaction_mechanisms.sql (only 2 tables)
├── public/                 # static assets
├── scripts/, docs/         # tooling / docs
├── synergic-bond-clone/    # ⚠️ 1,155 committed files incl. node_modules — REPO BLOAT, delete
├── AGENTS.md / CLAUDE.md   # Next-16 warning (CLAUDE.md just @-includes AGENTS.md)
├── PROJECT_HANDOVER.md     # earlier handover (superseded by this set)
├── next.config.ts          # essentially empty (no custom config)
├── tsconfig.json           # path alias "@/*" → repo root
└── package.json            # deps; NOTE: zod missing from declared deps
```

### 1.2 Purpose of each major directory

| Dir | Layer | Purpose |
|---|---|---|
| `app/` (pages) | Presentation | File-based routes; Server Components by default, `"use client"` where interactive. |
| `app/api/` | Backend | 25 route handlers. AI generation, Supabase reads/writes, validation. |
| `components/` | Presentation | Reusable + feature-scoped UI. `ui/` = primitives. |
| `lib/` | Business + Data + Validation + AI + Cache | The brain. Engines, datasets, schemas, integrations. |
| `lib/*Schema.ts`, `snapSolveTypes.ts` | Validation | zod SSOT contracts shared by API + UI. |
| `lib/gemini.ts`, `lib/openai-client.ts` | AI | Provider clients. Gemini is live; OpenAI is dead. |
| `lib/supabase*` | Data | Postgres access (browser + server clients). |
| `supabase/migrations/` | Data (schema) | DDL — **incomplete** relative to code. |

### 1.3 Dependency relationships (who imports whom)

```
app/**/page.tsx ──▶ components/**  ──▶ components/ui/**
       │                  │
       │                  └──▶ lib/* (datasets, schemas, i18n, renderChemistry)
       ▼
app/api/**/route.ts ──▶ lib/gemini.ts ──▶ @google/genai
       │             ──▶ lib/supabase/server.ts ──▶ @supabase/ssr  ──▶ Postgres
       │             ──▶ lib/*Schema.ts (zod)        (anon key + RLS)
       │             ──▶ lib/mechanismCache.ts ──▶ lib/supabase/server.ts
       └──▶ lib/reactionSeeds/* (static)

components/mechanism/StructureView.tsx ──▶ openchemlib/minimal (lazy, dynamic import)
```

**Rule of thumb:** UI never talks to Supabase/Gemini directly from the page in the AI flows — it goes through `app/api/*`. (Exception: some client pages use the browser `supabase` client directly for auth/session and simple reads — confirm per page.)

---

## 2. FRONTEND ARCHITECTURE

### 2.1 Routing structure (App Router, file-based)

- **62 page routes**, **25 API routes**. Full inventory: `PROJECT_HANDOVER.md` §4 / §9 and the lists in `REPOSITORY_AUDIT.md`.
- **Dynamic routes:** `/learn/reactions/[slug]`, `/chapter/[id]`, `/concept/[id]`, `/revision/[type]`.
- **Route groups:** none in use. No `middleware.ts` anywhere (verified). No `(group)` folders.
- **Special files present:** exactly **one** `loading.tsx` (`app/learn/reactions/[slug]/loading.tsx`). **No `error.tsx`, no `not-found.tsx`, no global `middleware.ts`.** This is a gap — most routes have no Suspense/error boundary.

### 2.2 Layout hierarchy

```
app/layout.tsx (Server Component)
  <html lang="en" class="h-full dark" suppressHydrationWarning>
    <body bg-#0B0F19 text-white flex flex-col>
      <ThemeProvider>            (client context — components/ThemeContext.tsx)
        <LanguageProvider>       (client context — lib/i18n.tsx)
          <Navbar/>              (global, every page; logo → "/")
          {children}             (the page)
```

There is **one** root layout. No nested `layout.tsx` files (verified — only `app/layout.tsx`). Every page inherits the global Navbar and the two providers.

### 2.3 Server vs Client Components

- **Default = Server Components.** Pages opt into client with `"use client"`.
- **48 of 99 components are client** (`"use client"`). The interactive surface (drawers, search, periodic table, tutor chat, snap-solve) is client; data/marketing sections trend server.
- **API routes** are all `export const runtime = "nodejs"` + `export const dynamic = "force-dynamic"` (verified on reaction & snap-solve; consistent pattern).

### 2.4 Shared components

- **Primitives** in `components/ui/`: `Button`, `Card`, `Badge`, `Container`, `Heading`, `Section`, `StatCard`. Use these instead of re-styling raw divs.
- **Feature sections** are grouped by folder (`mechanism/`, `chapter/`, `dashboard/`, `home/`, `tutor/`).
- **Global chrome:** `Navbar.tsx`, `Footer.tsx`, `ThemeToggle.tsx`, `MoleculeLogo.tsx`.

### 2.5 State management flow

There is **no state library** (no Redux/Zustand/Jotai/TanStack Query — verified against package.json). State is three things:

```
┌─ React local state (useState/useReducer)      → ephemeral UI state
├─ React Context                                 → cross-tree, app-lifetime
│    • ThemeProvider     (components/ThemeContext.tsx)  light/dark
│    • LanguageProvider  (lib/i18n.tsx)                 current language + t()
└─ localStorage                                  → cross-session persistence
     • instant-hydrate (reaction page reads cached mechanism before revalidating)
     • guest mode flag (sb_guest), bookmarks, progress fragments
```

**Server state** (XP, mistakes, sessions) lives in Supabase and is fetched per-request in Server Components or via `app/api/*`. There is **no client cache layer** — each navigation refetches. (Opportunity: see §Performance.)

### 2.6 Theme system

- `app/globals.css` defines a **CSS-variable design system** (verified). Direction comment: *"Linear + Notion + Apple. 80% calm, 20% accent. Accents are CYAN + PURPLE only."*
- Core tokens: `--background #0b0f19`, `--surface #111827` ("the ONE card color"), `--accent-cyan #00f5d4`, `--accent-purple #9b5de5`, `--foreground #ffffff`, `--text-body rgba(255,255,255,.70)`, `--radius 16px`, `--glow-cyan`.
- `<html class="dark">` is hardcoded; `ThemeProvider` exists for toggling but **the app ships dark-first**.
- **Semantic/per-feature colors** (e.g. purple = reactions) live in content, not chrome — by design.

### 2.7 Language system (i18n)

- Custom, no library. `lib/i18n.tsx` exports `LANGS` + `LanguageProvider` + a `t()` accessor.
- **7 languages** (verified `LANGS` array): `english, hindi, hinglish, spanish, arabic, french, german`. *(The earlier handover said 8 — it is 7.)*
- AI prompts branch on language (e.g. reaction route writes Hindi/Hinglish/English variants), and the mechanism cache key includes `language`, so the same reaction is cached per-language.

---

## 3. BACKEND ARCHITECTURE

### 3.1 API route inventory (25 routes)

All `runtime="nodejs"`, `dynamic="force-dynamic"`. **~10 are authenticated** (call `supabase.auth.getUser()`); the rest are public.

**Authenticated (10):** `xp`, `leaderboard`, `study-session`, `mistake`, `mistake/analysis`, `content/access`, `daily-practice`, `exam-result`, `badges`, `chat`.

**Public (15):** `reaction`, `snap-solve`, `ai`, `doubt`, `vision`, `handwritten-notes`, `notes/generate`, `molecule`, `search`, `assignment/generate`, `quiz`, `exam`, `exam-predictor`, `study-plan`, `daily-challenge`.

(Full per-route request/response/validation/auth matrix: `PROJECT_HANDOVER.md` §9 and `REPOSITORY_AUDIT.md`.)

### 3.2 Service / business layer (`lib/`)

Engines (pure-ish TS, no framework): `aiQuestionEngine`, `adaptiveTestEngine`, `revisionEngine`, `spacedRepetition`, `gamification`, `progressTracker`, `userProgress`, `pyqEngine`, `learningFlow`, `knowledge/{search,ranking,recommend,context}`. These are imported by both pages and API routes.

### 3.3 AI layer

- **Central client:** `lib/gemini.ts` — `generateText()` / `generateJSON()` over a **model fallback chain** `["gemini-2.0-flash","gemini-2.5-flash","gemini-flash-latest"]`. Tries each in order; only throws if all fail (callers convert to friendly errors).
- **Inline Gemini usage** (bypasses `lib/gemini.ts`, uses `@google/genai` directly): `snap-solve`, `vision`, `handwritten-notes`, `chat`. These pin `gemini-2.0-flash` and add vision/SSE behavior the central helper doesn't cover.
- **`lib/openai-client.ts`** exists but is **imported nowhere** (dead).

### 3.4 Validation layer

- **zod** schemas are the SSOT. Two strong ones: `lib/mechanismSchema.ts` (`MechanismSchema`, `SCHEMA_VERSION`) and `lib/snapSolveTypes.ts` (`SnapSolveResponseSchema`). Both export `z.infer` types so API + UI share one contract.
- Pattern: AI returns text → strip code fences → `JSON.parse` → inject server-owned fields → `Schema.safeParse` → on failure, friendly 503 (never leak the raw error).
- **Most other routes do manual/ad-hoc validation** (no schema). Hardening them is a tracked task.

### 3.5 Cache layer

- **`lib/mechanismCache.ts`** — Supabase-backed (`reaction_mechanisms` table), keyed `(slug, language, schema_version)`. **Every op degrades gracefully**: if the table is missing or RLS blocks it, it returns `null`/no-ops and the system regenerates. Nothing throws.
- **localStorage** — client instant-hydrate on the reaction page.
- **`lib/memoryCore.ts`** — in-memory `Map` student model; **per warm instance, wiped on cold start** (not a durable cache; documented as such in-file).

### 3.6 Data layer

- **`lib/supabase/server.ts`** — `createServerClient` bound to Next cookies; **anon key + RLS** (no service-role key anywhere — verified).
- **`lib/supabase.ts`** — `createBrowserClient` for client components.
- **Static datasets** (no DB): `periodicTable.ts` (235 lines), `nameReactions.ts` (207), `importantOrders.ts` (313), `saltColourCompounds.ts` (248), `chemistryDatabase.ts` (247), the `masterSyllabus/` + `syllabus/` trees.

---

## 4. REQUEST LIFECYCLE

### 4.1 Generic AI content request (the reference flow — `/api/reaction`)

```
 User clicks a reaction
        │
        ▼
 Client page (app/learn/reactions/[slug]/page.tsx)
   • reads localStorage → instant-hydrate (if present)
   • fetch POST /api/reaction { reaction, slug, language }
        │
        ▼
 API route (app/api/reaction/route.ts)   runtime=nodejs, force-dynamic
   1. clean() input  → strip <>{}  , cap 120 chars         ◀ input sanitation
   2. getSeed(slug)         → HIT? return {source:"seed"}   ◀ hand-authored
   3. getCached(slug,lang)  → HIT? return {source:"cache"}  ◀ Supabase
   4. generateJSON(prompt)  → Gemini (model fallback chain) ◀ AI
   5. stripFences + JSON.parse  → on fail: 503 friendly
   6. inject schemaVersion/slug/name/category (server-owned)
   7. MechanismSchema.safeParse → on fail: log + 503 friendly ◀ validation
   8. putCached(...)  (upsert; ignore failure)                ◀ cache write
   9. return { mechanism, source:"generated" }
        │
        ▼
 Client renders sections from the typed Mechanism object
   • writes result to localStorage for next time
```

### 4.2 Authenticated write (e.g. `/api/xp`)

```
Client → POST /api/xp
  → createClient() (cookie-bound)
  → supabase.auth.getUser()   → no user? 401
  → upsert user_xp row (RLS enforces user_id = auth.uid())
  → return updated XP
```

### 4.3 Streaming solve (`/api/snap-solve`, SSE)

```
Client sets header  Accept: text/event-stream
  → route detects wantsStream
  → new ReadableStream → controller.enqueue(sseFrame(event,data))
  → live "reasoning" events paced by memoryCore adaptation (weak→slow/deep, strong→fast/concise)
  → final validated SnapSolveResponse frame
  → Content-Type: text/event-stream
Non-streaming clients get a single validated JSON response.
```

---

## 5. DATABASE ARCHITECTURE

> ⚠️ **#1 risk: schema not reproducible.** Code references **9 tables**; migrations define **2** (`user_xp`, `reaction_mechanisms`). Migration 001 also `ALTER TABLE study_sessions ADD COLUMN chapter_id`, implying `study_sessions` already exists in the live DB but has **no CREATE migration in the repo**. Run `supabase db pull` and commit the result before any schema work.

### 5.1 Tables referenced in code (verified via `.from(...)` grep)

`analytics`, `exam_results`, `mistakes`, `profiles`, `reaction_mechanisms`, `saved_chapters`, `study_sessions`, `subscriptions`, `user_xp`.

| Table | In migration? | Referenced by (examples) | Status |
|---|---|---|---|
| `user_xp` | ✅ 001 | `/api/xp`, dashboard | Documented |
| `reaction_mechanisms` | ✅ 002 (not yet run on prod per notes) | `/api/reaction`, `lib/mechanismCache.ts` | Documented |
| `study_sessions` | ⚠️ ALTER only | `/api/study-session`, `useStudySession` | **CREATE missing** |
| `mistakes` | ❌ | `/api/mistake`, `/api/mistake/analysis` | **Undocumented** |
| `profiles` | ❌ | auth/profile reads | **Undocumented** |
| `exam_results` | ❌ | `/api/exam-result`, dashboard | **Undocumented** |
| `subscriptions` | ❌ | `/api/content/access` (paywall) | **Undocumented** |
| `saved_chapters` | ❌ | bookmarks | **Undocumented** |
| `analytics` | ❌ | event logging | **Undocumented** |

### 5.2 Documented schemas (from migrations)

**`user_xp`** (001):
```
id          uuid pk default gen_random_uuid()
user_id     uuid UNIQUE NOT NULL → auth.users(id) ON DELETE CASCADE
xp          int  default 0
xp_level    int  default 1
streak      int  default 0
last_active date
created_at  timestamptz default now()
RLS: ENABLED. Policies — SELECT/INSERT/UPDATE WHERE auth.uid() = user_id (own row only).
```

**`reaction_mechanisms`** (002):
```
slug           text NOT NULL
language       text NOT NULL default 'english'
schema_version int  NOT NULL default 1
data           jsonb NOT NULL          (a serialized Mechanism)
created_at     timestamptz default now()
PRIMARY KEY (slug, language, schema_version)
RLS: ENABLED. Policies — SELECT/INSERT/UPDATE all USING(true) (public content cache; anyone reads, first visitor seeds).
```

### 5.3 ER diagram (verified + inferred)

```
                    auth.users (Supabase managed)
                         │ id (uuid)
        ┌────────────────┼───────────────┬───────────────┬──────────────┐
        │ 1:1            │ 1:N           │ 1:N           │ 1:N          │ 1:1
        ▼                ▼               ▼               ▼              ▼
    user_xp          mistakes      study_sessions   exam_results   subscriptions
  (verified)        (inferred)      (ALTER only)     (inferred)      (inferred)
                         │
                    profiles (inferred 1:1 with auth.users)
                    saved_chapters (inferred 1:N)
                    analytics (inferred event log)

   reaction_mechanisms  ── standalone public cache (no FK to users)
        PK(slug, language, schema_version)
```
*(assumption: relationships for the 7 undocumented tables are inferred from usage; confirm column types and FKs via `supabase db pull`.)*

---

## 6. AUTHENTICATION ARCHITECTURE

- **Provider:** Supabase Auth. **Google OAuth** is the wired path (migration 001 comments give the Google provider setup; `app/auth/callback/route.ts` does `exchangeCodeForSession(code)`). Email pages exist (`app/auth/signin`, `app/auth/signup`).
- **Session handling:** cookie-based via `@supabase/ssr`. Server reads cookies in `lib/supabase/server.ts`; the callback writes them via `setAll`.

```
SIGN IN / SIGN UP (OAuth)
  /auth/signin → Supabase OAuth redirect
    → provider consent
    → GET /auth/callback?code=...
        → exchangeCodeForSession(code)  (sets cookies)
        → redirect → /dashboard

GUEST MODE
  localStorage flag `sb_guest` (no DB row). Pages show demo data + "sign in to track" hints.
  Guests can use public content/AI routes; authed routes return 401.

PROTECTED API
  route → createClient() → auth.getUser()
        → null user ⇒ 401
        → else proceed; RLS double-enforces own-row access at the DB.
```

- **There is no `middleware.ts`** — route protection is per-handler (`getUser()` inside each authed route), not edge middleware. Pages are not gated at the framework level; they self-gate or show guest UI. (assumption: confirm whether any page must be hard-gated.)

---

## 7. AI ARCHITECTURE

### 7.1 Gemini (primary, live)

- Client: `@google/genai` (`GoogleGenAI`). Key: `GEMINI_API_KEY || GOOGLE_API_KEY`.
- Central helper `lib/gemini.ts`: `run()` iterates `GEMINI_MODELS = ["gemini-2.0-flash","gemini-2.5-flash","gemini-flash-latest"]`, returns first non-empty success. **Resilient to model-id drift.**
- `generateJSON()` appends *"Respond with valid JSON only…"* to the prompt.

### 7.2 OpenAI (present, dead)

- `lib/openai-client.ts` configures the `openai` SDK but is **imported nowhere**. `@google/generative-ai` (the *older* Google SDK) is **also installed but used nowhere**. Both are removable. (See debt register.)

### 7.3 Fallback chain

```
generate*(prompt)
  → try gemini-2.0-flash
  → on error/empty → gemini-2.5-flash
  → on error/empty → gemini-flash-latest
  → all fail → throw → caller returns friendly 503 (never raw error)
No cross-provider fallback (OpenAI is not wired as a fallback).
```

### 7.4 Prompts

- Reaction prompt (`app/api/reaction/route.ts`) is a strict JSON-shape spec: *"Verified chemistry only (NCERT/Clayden/March). No invented reagents/intermediates. Every text field MUST be ONE short line."* 3–7 steps, valid SMILES, 6–10 examples, 3–6 related reactions.
- Snap & Solve prompt enforces the `SnapSolveResponse` shape and classification enum.

### 7.5 Schemas (validate ALL AI output)

`MechanismSchema` and `SnapSolveResponseSchema` (zod). `SCHEMA_VERSION` bump invalidates all cached mechanism rows. Server injects identity fields (`schemaVersion/slug/name/category`) **before** parse so the AI cannot spoof them.

### 7.6 Caching

- Mechanisms: Supabase `reaction_mechanisms` (per language + schema version) + localStorage.
- **Everything else AI (notes, quiz, exam, search, doubt, vision) regenerates every call** — no persistence. Largest cost/latency opportunity.

### 7.7 Validation

zod `safeParse` gate on the two flagship routes; manual elsewhere. Failure → friendly message, logged server-side.

---

## 8. PERFORMANCE ARCHITECTURE

- **Bundle strategy:** Tailwind v4 (`@import "tailwindcss"`), no custom `next.config` optimizations. OpenChemLib is **lazy/dynamic-imported** via `openchemlib/minimal` in `StructureView.tsx` (kept off the main bundle — good).
- **Lazy loading:** present for OpenChemLib; otherwise minimal. (Opportunity: dynamic-import heavy client widgets — periodic table, tutor.)
- **Caching:** strong for mechanisms (multi-tier), absent elsewhere.
- **Hydration:** dark theme is hardcoded on `<html>` with `suppressHydrationWarning` to avoid theme flash. 48 client components — watch for over-hydration on content pages.
- **localStorage usage:** instant-hydrate of reaction data, guest flag, bookmarks. Lightweight.
- **Optimization opportunities (ranked):**
  1. Persist all AI outputs (notes/quiz/exam/search) like mechanisms.
  2. Add `loading.tsx` per heavy segment + prefetch-on-hover for reaction/learn links.
  3. Dedupe AI SDKs and remove dead deps (`openai`, `@google/generative-ai`, `axios`, `claude`) to shrink install/bundle.
  4. Introduce a lightweight client cache (or React `cache()`/`fetch` revalidation) to stop refetching on every navigation.

---

## 9. SECURITY ARCHITECTURE

### 9.1 Trust boundaries

```
[ Browser / Guest ]  ──untrusted──▶  [ Next API routes ]  ──▶  [ Gemini ]  (paid, no app-side limit)
                                            │
                                            └──anon key + RLS──▶ [ Supabase Postgres ]
```
The **only** hard authorization boundary is **Postgres RLS**. The app holds no service-role key, so even a compromised server cannot bypass RLS.

### 9.2 Threat model & attack surfaces

| Surface | Threat | Current state |
|---|---|---|
| Public AI routes | Cost abuse / spam (each call hits paid Gemini) | ❌ **No server rate limit.** `rateLimiter.ts` is client-only, used by 1 page. |
| Authed routes | IDOR / cross-user reads | ✅ Mitigated by own-row RLS + `getUser()`. |
| AI output → UI | Prompt-injection producing bad markup | Mitigated: `react-markdown` sanitizes; zod constrains shape. |
| `StructureView` | XSS via SVG | `dangerouslySetInnerHTML` on OpenChemLib SVG from **server-controlled SMILES** — low risk; sanitize for defense-in-depth. |
| Input | Injection into prompts/DB | `clean()` strips `<>{}` + caps length on reaction; Supabase params prevent SQLi. Manual elsewhere. |
| Secrets | Leakage | ✅ No secrets in tracked files; `.env*` is gitignored (`.env*` rule present). No service-role key. |
| Error responses | Info leak | Flagship routes return friendly 503; **older routes may echo `err.message`** — audit needed. |

### 9.3 Mitigation strategy (priority order)

1. **Add server-side rate limiting** (per IP + per user) to every AI route — Upstash/Vercel KV or DB token bucket. Highest leverage.
2. **Standardize a `safeError()` helper**; never return `err.message`.
3. **Sanitize OpenChemLib SVG** before `dangerouslySetInnerHTML`.
4. **Confirm RLS exists for all 9 tables** (only 2 are in migrations — the others' policies are unverified).

---

## 10. TECHNICAL DEBT REGISTER (ranked by severity)

| # | Severity | Item | Evidence | Impact | Fix |
|---|---|---|---|---|---|
| 1 | 🔴 Critical | **DB not reproducible** | 9 tables in code, 2 in migrations; `study_sessions` ALTER-only | Can't rebuild env; schema drift; onboarding blocked | `supabase db pull` → commit migrations |
| 2 | 🔴 Critical | **`zod` not a declared dependency** | `import { z } from "zod"` everywhere; absent from `package.json` deps; resolves only transitively (via next/openai) | A `dedupe`/lockfile change can break the build silently | `npm i zod@4` to pin it directly |
| 3 | 🔴 Critical | **No server-side rate limiting** | `rateLimiter.ts` client-only; 0 API routes use it | Unbounded paid-Gemini cost/abuse | Add KV/DB token bucket to AI routes |
| 4 | 🟠 High | **Inconsistent error handling** | only `reaction`/`snap-solve` hardened | older routes may leak `err.message` | `safeError()` helper across all routes |
| 5 | 🟠 High | **Ephemeral `memoryCore`** | in-memory `Map`, per-instance | Snap & Solve "memory" doesn't persist on Vercel | Move to Supabase/KV |
| 6 | 🟠 High | **Committed `synergic-bond-clone/` incl. node_modules** | 1,155 tracked files | Repo bloat, slow clones, confusion | `git rm -r --cached synergic-bond-clone` + gitignore |
| 7 | 🟡 Medium | **Dead dependencies** | `openai` (only in unused client), `@google/generative-ai` (0 uses), `claude` (0 uses), `axios` (0 uses) | Install/bundle weight, security surface | Remove from `package.json` |
| 8 | 🟡 Medium | **Dead files** | `Navbar.v1.tsx`, `AIChemistryEngine.v1.tsx`, `lib/supabase.ts.backup`, `lib/openai-client.ts` | Confusion, drift | Delete |
| 9 | 🟡 Medium | **Duplicate syllabus datasets** | `lib/syllabus/` AND `lib/masterSyllabus/` | Two sources of truth | Pick one, migrate, delete the other |
| 10 | 🟡 Medium | **No tests** | no test runner/files | Regressions invisible | Add schema + API smoke tests |
| 11 | 🟡 Medium | **Sparse loading/error UI** | 1 `loading.tsx`, 0 `error.tsx` | Jank, unhandled failures | Add boundaries to heavy routes |
| 12 | ⚪ Low | **Inline vs central Gemini** | 4 routes bypass `lib/gemini.ts` | Drift in model ids/handling | Extend central helper to cover vision/SSE |
| 13 | ⚪ Low | **Empty/placeholder files** | `AI_CONTEXT.md` (0 bytes), `app.txt`, `components.txt`, `lib.txt` | Clutter | Remove or fill |

---

*End of SYSTEM_ARCHITECTURE.md*
