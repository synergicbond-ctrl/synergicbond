# Premium Chemistry Visual System Pilot

## Scope and safety

This is a controlled presentation-layer pilot. It changes the global design foundation and navigation chrome, then proves the system on the public `/learn` landing page and the free `/notes/redox-reactions` chapter (hub and lesson 1). Routes, authentication, entitlements, chemistry copy, formulas, question/solution order, and source-note composition remain unchanged.

The branch was created from `main` at `895c29529466c43fe5aef943cc371e3f01691c3c` after checking open pull requests, stashes, worktrees, and the other active checkout. Files involved in current f-block work and the separate `agent/notes-audit-fixes` branch were excluded from this pilot.

## Visual audit

The pre-pilot repository showed several independent visual dialects:

- `app/globals.css` described a cyan/purple, system-sans product UI and hid every scrollbar globally.
- Canonical notes already used the strongest subject-appropriate language: deep navy, cyan, gold, and serif headings, but repeated those values locally.
- The public learning hub used mixed cyan gradients, hover lifts, and equally weighted cards.
- Redox used a separate purple/indigo hero and large corner radii, while its authored lesson bodies used another card vocabulary.
- Global navigation mixed continuous multicolor animation, rainbow motifs, emoji section markers, gradient CTAs, and several radius/shadow conventions.

Repository-level indicators reinforced the inconsistency: 306 files referenced gradients, 101 TSX files used inline style objects, and common large-radius patterns appeared thousands of times. Focus treatment was sparse in the audited navigation and note shell, and KaTeX had been included in the global monospace selector, which could override its specialist glyph fonts.

## System decisions

The pilot introduces one token layer in `app/globals.css`:

- Observatory navy backgrounds with three clearly stepped surfaces.
- Off-white primary text, cool body text, and muted metadata.
- Spectral cyan for navigation and formula emphasis; warm gold for hierarchy and important guidance.
- Reserved semantic colors for success, warning, error, and secondary violet emphasis.
- A restrained 8/12/16 px radius scale, subtle borders, and low-noise shadows.
- Editorial serif display type, UI sans for controls and reading text, and mono for metadata.
- A theme-ready warm-paper alias through `.light` or `data-reading-mode="paper"` without adding client state.
- Visible thin scrollbars for discoverable overflow, global focus-visible outlines, and a reduced-motion fallback.

Reusable components added or standardized:

- `PageShell`, `SectionHeader`, `Surface`, and `EditorialBadge` for editorial landing-page composition.
- `ChapterHero` in the canonical notes system for breadcrumbs, metadata, title, description, and badges.
- Shared chemistry primitives for concepts, formulas/reactions, examples, questions, solutions, final answers, warnings, important notes, diagrams, and accessible tables.

## Pilot coverage

### Global navigation

Information architecture, links, account state, language switching, program switching, and responsive behavior are preserved. Presentation now uses the token system; section-title emoji and the rainbow pinned motif are removed; desktop menu buttons expose expanded/menu semantics and click support; utility buttons and the mobile drawer expose expanded state; the molecule mark uses the restrained palette and honors reduced motion.

### `/learn`

All existing destinations, descriptions, and live corpus counts are preserved. The page now has an editorial hierarchy: one clear introduction, a numbered chapter reading sequence, a quieter connected-tools index, and a compact knowledge-core data surface.

### `/notes/redox-reactions`

All ten lessons and fifteen original source sections remain present and ordered. The chapter hub and lesson use the canonical shell and `ChapterHero`. The hub demonstrates a compact, horizontally safe table using counts derived directly from existing chapter metadata. Lesson 1 demonstrates the shared formula, example, question, solution, answer, warning, and note anatomy without changing authored chemistry.

## Migration guidance

1. Adopt global tokens instead of introducing route-local hex values.
2. Use the editorial primitives for future landing and index pages; prefer bordered rows and grouped sections over undifferentiated card grids.
3. Route authored notes through the canonical shell and shared chemistry components before altering individual lesson files.
4. Convert one chapter at a time and verify its real lesson count, order, headings, formulas, tables, and previous/next destinations.
5. Keep semantic colors purposeful; do not reintroduce decorative rainbow gradients or emoji as UI icons.
6. Test 375, 430, 768, 1024, and 1440 px widths, including keyboard focus and horizontal formula/table overflow.
7. Preserve server components by default. This pilot adds no new page-level client boundary; the existing chemistry primitive module remains the isolated client leaf.

## Deliberately out of scope

- No route, authentication, entitlement, middleware, API, or data-model changes.
- No rewrite of chemistry content or conversion of all legacy chapters.
- No new theme toggle, font download, analytics, deployment, or merge.
- No changes to f-block work, `NotesExplorer`, gaseous-state content, ESLint configuration, or the chemical-bonding master page.

## Validation evidence

- `npm run typecheck`
- Scoped ESLint across every changed TSX module
- `npm run test-chemistry` — 1,104 chemistry questions verified
- `npm run build` — 603 static pages generated successfully
- Browser checks at 375, 430, 768, 1024, and 1440 px for `/learn`, the redox hub, and redox lesson 1
- One `h1` per pilot route, ordered heading levels, named interactive controls, scoped table headers, and no unintended document-level horizontal overflow
- Mobile navigation expands with an accurate `aria-expanded` state; formulas/tables retain their own discoverable overflow regions

The production build continues to report the repository’s existing KaTeX strict-mode warning for an en dash in authored math input; the build succeeds and this presentation-only pilot does not alter that chemistry source.
