# PRODUCT_SPEC.md — Synergic Bond ("The Chemistry Operating System")

> **Audience:** Future AI assistants / PMs / engineers continuing the product.
> **Source of truth for facts:** the repo (commits, pages, components). Product *vision* statements below are synthesized from in-repo copy (homepage hero "The Chemistry Operating System", `AGENTS.md`, marketing components like `AboutVision.tsx`, `Hero.tsx`, `InternationalRoadmap.tsx`), the existing `PROJECT_HANDOVER.md`, and the founder profile (senior chemistry faculty, 18+ yrs, ALLEN/Sri Chaitanya, JEE Advanced expert). Where a claim is product intent rather than shipped code, it is marked **(vision)**.

---

## 1. PRODUCT VISION

Synergic Bond aims to become the **operating system for competitive-exam chemistry** — a single place where an Indian JEE/NEET/Olympiad student *learns, practises, gets unstuck, and tracks mastery*, with an AI tutor and a faculty-grade content spine underneath.

The framing is deliberate: not "another question bank" or "another chatbot," but an **OS** — a hub from which every chemistry workflow launches (periodic table → reactions → mechanisms → practice → analytics → AI help). The homepage is literally a "Control Center" (`components/ControlCenter.tsx`), and navigation is organized as `Learn · Practice · Track · AI · More`.

**The wedge:** faculty-verified chemistry content (the founder is a senior chemistry author/patent-holder) fused with modern AI generation that is *governed* — every AI output passes through a typed schema and "verified chemistry only" prompts, so it doesn't hallucinate reagents or mechanisms the way a generic LLM does.

**(vision)** Long term: per-student adaptive intelligence (a durable "memory core"), classroom/teacher tooling, and multilingual reach (7 languages already wired, incl. Hindi/Hinglish/Arabic).

---

## 2. TARGET AUDIENCE

| Segment | Need | In-product surface |
|---|---|---|
| **JEE (Main + Advanced)** | Deep mechanisms, exceptions, PYQ patterns, speed | `/jee`, reaction pages, important-orders, periodic-trends, `/pyq` |
| **NEET** | High-yield recall, NCERT alignment, colour/reaction memory | `/neet`, salt-colours, name-reactions, vault |
| **Olympiad** | Beyond-syllabus depth, hard problems | `/olympiad(s)`, `Olympiad` example tier in reactions |
| **GATE** | Graduate-level chemistry | `/gate` |
| **Teachers** | Content + class tooling | `/teachers` (Teacher Hub), `components/dashboard/CoachWidget.tsx` |

Primary geography: India. Primary device: **mobile-first** for newer features (bottom-sheet drawers, horizontal-scroll flow maps); older pages are desktop-shrunk.

---

## 3. USER PERSONAS

**Persona A — "Aarav, JEE Advanced aspirant" (Class 12, drop-year)**
- Goal: master organic mechanisms and inorganic exceptions; close weak topics fast.
- Pain: generic AI gives confidently wrong mechanisms; textbooks are slow; coaching notes are walls of text.
- Uses: reaction `[slug]` pages (mechanism + JEE Quick View + trap cards), important-orders, Snap & Solve for stuck problems, exam-predictor.
- Success metric: fewer silly mistakes, faster recall, rising readiness score.

**Persona B — "Diya, NEET aspirant" (Class 11)**
- Goal: high-yield recall — salt colours, named reactions, periodic trends.
- Pain: memorization overload, no structured revision.
- Uses: salt-colours (Colour of Compounds), vault (facts/exceptions), daily-challenge, revision queue.
- Success metric: streak + retention.

**Persona C — "Mr. Rao, chemistry teacher"** **(vision-heavy)**
- Goal: assign practice, see class weak topics, reuse verified content.
- Pain: building good material is slow; tracking many students is manual.
- Uses: Teacher Hub, assignment generator, (future) class analytics.
- Success metric: time saved + measurable student lift.

**Persona D — "Guest visitor"**
- Goal: try before committing.
- Uses: everything public; sees demo dashboards + "sign in to track" nudges (guest mode via `localStorage sb_guest`).

---

## 4. LEARNING PHILOSOPHY

**How chemistry should be taught (the product's thesis):**
1. **Verified > generated.** Content must be faculty-accurate. AI is a *delivery and personalization* layer, not the authority. Hence the "verified chemistry only (NCERT/Clayden/March)" prompt guardrails and zod schema gating.
2. **Structure beats prose.** Long AI essays were the original failure mode (multiple commits redesign "walls of text"). The product moves toward **typed, scannable units**: dashboards, flow maps, one-line steps, trap cards, quick-views, mnemonics.
3. **Exceptions are the exam.** Indian competitive chemistry rewards knowing exceptions/orders. Dedicated surfaces: `important-orders` (207 verified inorganic sequences), vault `exceptions`, "trap" fields in every mechanism step.
4. **Recall + spacing.** `spacedRepetition.ts`, `revisionEngine.ts`, daily-challenge, streaks — recall is engineered, not incidental.
5. **Unstick instantly.** Snap & Solve: photograph a problem → OCR → classified, stepwise, validated solution, with adaptive pacing for weak topics.

**Why existing platforms are weak (product's stated positioning):**
- Video-first platforms (PW/Unacademy/Vedantu) = passive; weak on *structured reference* and *instant personalized unsticking*.
- Doubt apps (Doubtnut) = answer lookup, shallow on mechanism reasoning.
- Generic LLMs (ChatGPT/Claude) = fluent but **hallucinate chemistry** and aren't exam-structured or progress-aware.

**What Synergic Bond does differently:** faculty-grade structured content + governed AI (schema-validated, verified-only) + exam-shaped UI + progress/gamification, in one OS.

---

## 5. CORE PRODUCT AREAS

### 5.1 Learn
- **Purpose:** the verified reference + concept spine.
- **Value prop:** exam-structured, scannable, faculty-accurate.
- **User journey:** Learn mega-menu → Periodic Table / Reactions / Molecules / Periodic Chemistry / Exam Hub → drill into a page.
- **Current implementation (verified):** Periodic Table + Periodic Trends (radius/IE/ΔegH/EN + heatmap), Colour of Compounds (168 entries + TM-ion table), Important Orders (207 inorganic sequences), Name Reactions index → reaction `[slug]` pages, Knowledge Vault sub-tabs, AI Notes, Reagents/Solubility/Redox/Properties reference pages.
- **(vision):** full color-coded category system (only purple/reactions shipped), Reaction Predictor depth, NCERT highlights, Mechanism Visualizer as a first-class experience.

### 5.2 Practice
- **Purpose:** active testing.
- **Value prop:** exam-shaped, adaptive, PYQ-aware.
- **Journey:** Practice menu → Quiz / Mock Exam / Assignments / Daily Challenge / PYQ Mode.
- **Current (partial):** routes + APIs exist (`/api/quiz`, `/api/exam`, `/api/assignment/generate`, `/api/daily-challenge`, `/api/daily-practice`), backed by `adaptiveTestEngine.ts` / `aiQuestionEngine.ts` / `pyqEngine.ts`. Depth/quality per route unverified.
- **(vision):** real multi-mode generator, full evaluation, PYQ frequency analytics.

### 5.3 Track
- **Purpose:** progress, motivation, accountability.
- **Value prop:** know your weak topics and readiness, stay on streak.
- **Journey:** Track menu → Dashboard / Study Plan / Progress Analytics / Exam Predictor / Achievements / Leaderboard / Live.
- **Current (partial-verified):** XP/streak (`user_xp`) wired; leaderboard, mistakes, study sessions backed by Supabase; homepage Control Center pulls real progress for logged-in users, demo for guests.
- **(vision):** durable per-student analytics, class analytics for teachers.

### 5.4 AI
- **Purpose:** instant help + personalization.
- **Value prop:** governed, exam-aware AI that doesn't hallucinate chemistry.
- **Journey:** AI menu → AI Tutor / Doubt Solver / Snap & Solve / Handwritten Solver / Virtual Lab / Molecule Builder.
- **Current:** Snap & Solve is the deepest (SSE streaming, adaptive pacing, ephemeral memory). Tutor/doubt/handwritten/vision are Gemini-backed.
- **(vision):** durable memory, tutor-interrupt UI, cross-feature personalization.

### 5.5 Vault (Knowledge Vault)
- **Purpose:** durable, searchable reference of concepts/facts/exceptions/formulas/favorites.
- **Current (partial):** `/vault` + 5 sub-tabs, data-backed; `lib/knowledge/{search,ranking,recommend,context}` powers it. Depth unverified.

### 5.6 Reactions (flagship)
- **Purpose:** the deepest learning unit — a full reaction lesson.
- **Current (verified, Phase 1):** typed `Mechanism` schema → `/learn/reactions/[slug]` page with Dashboard, Flow Map, Mechanism Steps (OpenChemLib SMILES→SVG), JEE Quick View, Stereo card, Examples (tiered), Related Reactions, inline Practice + Quiz drawers. Seed-backed (Acyloin) + AI+cache for the rest.
- **Limitations:** 1 hand-authored seed; 699 others rely on live Gemini + cache; no animated curved-arrow electron flow (schematic only — intentional).

### 5.7 Snap & Solve
- **Purpose:** photograph a problem, get a governed step-by-step solution.
- **Current (verified):** `/snap-solve` + `/control-center`; `/api/snap-solve` with OCR+solve, zod-validated `SnapSolveResponse`, SSE live reasoning, adaptive pacing via `memoryCore`, simulator fallback without API key.
- **Architecture note:** **feature is architecture-locked** (per project memory) — inject only explicitly-requested changes; do not redesign.

---

## 6. MONETIZATION

- **Model (verified surfaces):** freemium. `/pricing` page, `components/PaywallGate.tsx`, `components/PaymentGateway.tsx`, `/api/content/access` (checks `subscriptions` table), `components/Donation.tsx` + `/donate`.
- **Free (current reality):** essentially everything is reachable; paywall enforcement is present in code but lightly applied.
- **Pro (intended):** premium content access gated by `subscriptions`; advanced AI/analytics. **(vision)** — exact tier boundaries are not codified; `/pricing` copy is the only spec.
- **Donations:** a parallel "support the mission" path exists.
- **Strategy (vision):** keep the verified reference + basic AI free for reach; charge for advanced AI volume, analytics, teacher tooling. Pricing must respect Indian student price-sensitivity.

> **Open product decision:** the free/pro line is not yet enforced consistently. Before monetizing, define tiers explicitly and wire `PaywallGate` + `subscriptions` + server checks on the gated routes.

---

## 7. COMPETITIVE ANALYSIS

| Competitor | Their strength | Their gap (SB's wedge) |
|---|---|---|
| **Physics Wallah** | Cheap, huge video library, brand | Passive video; weak structured reference + instant personalized unsticking |
| **Unacademy** | Star educators, live classes | Expensive; not a structured chemistry reference/tooling layer |
| **Vedantu** | Live tutoring | Tutor-time-bound; no governed-AI self-serve depth |
| **Doubtnut** | Fast doubt lookup, OCR | Shallow mechanism reasoning; answer-lookup not learning OS |
| **ChatGPT** | Fluent, general | **Hallucinates chemistry**; not exam-structured/progress-aware |
| **Claude** | Strong reasoning | Same: general, not chemistry-verified or exam-shaped or progress-aware |

**SB's defensible position:** *verified faculty content × governed AI × exam-shaped structure × progress*. The moat is the verified content spine + the schema-governed AI pattern, not the AI model itself.

---

## 8. PRODUCT ROADMAP

**Short term (harden the spine — weeks):**
- Make DB reproducible (migrations), pin `zod`, add server rate limiting.
- Persist all AI outputs (notes/quiz/exam) like mechanisms.
- Wire XP/streak to lesson + reaction completion (the engagement loop).
- Snap & Solve memory → durable (Supabase); tutor-interrupt UI.
- Seed next high-yield reactions (Aldol, Cannizzaro, Diels–Alder, Wittig…).

**Medium term (depth + retention — 1–2 quarters):**
- Real multi-mode practice/exam generator + evaluation + PYQ analytics.
- Full color-coded category system across Learn.
- Durable per-student analytics; readiness/weak-topic intelligence.
- Reaction Predictor + Mechanism Visualizer as first-class.
- Skeletons/error boundaries everywhere; mobile QA pass.

**Long term (platform — 2–4 quarters):** **(vision)**
- Teacher Hub: class assignment + analytics.
- Multilingual content depth (beyond UI strings).
- Subscriptions live; monetization enforced.
- "Memory core" as a real adaptive engine across all features.

---

## 9. PRODUCT RISKS

| Class | Risk | Mitigation |
|---|---|---|
| **Technical** | DB not reproducible; build depends on transitive `zod`; ephemeral memory | Pull migrations; pin zod; durable store |
| **Cost / AI** | No rate limiting → runaway paid-Gemini bills; regeneration of cacheable content | Rate limit + persist all AI outputs |
| **Educational** | AI hallucinating chemistry damages trust (the core value) | Keep schema gating + "verified only" prompts; expand seeds for high-stakes reactions; faculty review |
| **Scaling** | Per-instance memory + uncached AI won't scale; many half-built routes | Cache everything; finish-or-cut scaffolds |
| **Product focus** | 62 routes, breadth over depth → thin experience | Prioritize the flagship loop (Learn→Reaction→Practice→Track); cut/merge scaffolds |
| **Monetization** | Free/pro line undefined; price sensitivity | Define tiers; enforce server-side before charging |
| **Trust/UX** | Walls-of-text legacy pages; sparse loading/error states | Continue structured-unit redesign; add boundaries |

---

*End of PRODUCT_SPEC.md*
