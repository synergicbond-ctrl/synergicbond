# Notes Engine — Content Audit (Week 7)

**Scope:** Rebuild & expand the curated Notes Engine content from the current
repo. Feature was missing from this checkout (see prior handover), so it was
rebuilt from scratch against existing routes and the master syllabus.

**Rules honoured:** verified chemistry only · exam-useful bullet format · no fake
content · SSOT only · no duplicate schemas · no `.next` files · no unrelated
changes · mobile-first UI · PYQ / payment / analytics / chemistry databases
untouched.

---

## Files delivered

| File | Type | Purpose |
|------|------|---------|
| `lib/notesEngine.ts` | New | SSOT: typed schema + curated content for 3 chapters. |
| `components/notes/NotesExplorer.tsx` | New | Mobile-first reader (chapter pills → section nav → content). |
| `app/notes/page.tsx` | Upgraded | Now renders the curated Notes Engine (server component + metadata). |
| `NOTES_ENGINE_CONTENT_AUDIT.md` | New | This audit. |

`tsconfig.json` — **not touched** (existing `@/*` path alias already sufficient).

---

## Schema (SSOT, no duplicates)

`lib/notesEngine.ts` defines the notes schema once. It **reuses** the `Exam`
type from `@/lib/masterSyllabus` rather than redefining exam/category unions.

Types: `NotesChapter`, `NoteBlock`, `SolvedExample`, `Derivation`, `NoteLink`,
`TestPlaceholder`, plus the canonical `NOTE_SECTIONS` registry that drives the UI
nav order.

---

## Chapters expanded (3)

1. **Mole Concept** — `mole-concept` (physical)
2. **Periodic Table** — `periodic-table` (inorganic)
3. **General Organic Chemistry** — `general-organic-chemistry` (organic)

Each chapter implements all **13 sections**:

Syllabus · Subtopics · Detailed Notes · Short Notes · NCERT Highlights ·
Solved Examples · Derivations · Common Mistakes · Revision Notes ·
Formula Cards (links) · PYQ (links) · Tests (placeholder) · Learn Modules (links)

---

## Section counts

| Chapter | Syllabus | Subtopics | Detailed blocks | Short | NCERT | Solved | Derivations | Mistakes | Revision | Formula links | PYQ links | Tests | Learn links |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mole Concept | 5 | 8 | 4 | 6 | 4 | 3 | 2 | 5 | 5 | 2 | 2 | 2 | 3 |
| Periodic Table | 5 | 8 | 5 | 6 | 4 | 2 | 1 | 5 | 5 | 1 | 2 | 2 | 3 |
| GOC | 5 | 8 | 4 | 6 | 4 | 3 | 2 | 5 | 5 | 1 | 2 | 2 | 3 |

**Totals:** 8 solved examples · 5 derivations · 15 detailed-note blocks ·
39 chapters×sections rendered (3 × 13).

---

## Cross-linking (to existing routes only)

- **Formula Cards →** `/vault/formulas`, `/periodic-trends`
- **PYQ →** `/pyq` (PYQ Intelligence — read-only, not modified)
- **Learn Modules →** `/periodic-table`, `/periodic-trends`, `/name-reactions`,
  `/reagents`, `/vault/formulas`, `/vault/concepts`

All hrefs verified to resolve to existing `app/**/page.tsx` routes. No new
chemistry data was authored into the reagents/reactions/exceptions databases.

---

## Content accuracy notes

- Molar volume stated for **both** conventions: 22.7 L mol⁻¹ (STP, 1 bar — NCERT)
  and 22.4 L mol⁻¹ (1 atm), to prevent the common exam trap.
- Ionization-enthalpy anomalies (Be>B, N>O, Mg>Al, P>S) and the Cl>F electron-gain
  enthalpy exception are called out explicitly.
- Hückel's (4n+2) rule worked through the cyclopentadienyl-anion example (6 π e⁻).
- Slater's-rules Zₑ𝒻𝒻 derivation for Na (result ≈ 2.2) included.
- Chemistry written in Unicode (subscripts/superscripts) so it renders as plain
  text on any surface — no external formula renderer dependency introduced.

---

## Mobile-first UI

- Chapter selector wraps; section nav is a horizontal-scroll chip row on mobile
  and wraps on `md+`.
- Single-column reading layout, `max-w-5xl`, generous tap targets, brand dark
  surfaces (`#0B0F19` / `#111827`) and cyan/blue/purple accents per the design
  system.

---

## Follow-ups (out of scope this week)

- Wire the **Tests** placeholders to a real question bank once available.
- Extend coverage beyond the initial 3 chapters.
- Optional: persist "last read section" per chapter to localStorage.
