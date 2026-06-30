# Hardening Audit

Status: PARTIAL

Files changed:
- app/formula-cards/page.tsx
- app/pyq/page.tsx
- app/search/page.tsx
- lib/chemistry/graph/links.ts
- HARDENING_AUDIT.md

Fixes:
- Removed effect-driven URL state from /formula-cards.
- Removed effect-driven URL state from /pyq.
- Stabilized /pyq memoized question and graph collections.
- Removed unused graph import.
- Removed unused search catch variable.
- Removed unescaped quote text from /search empty state.
- Added responsive wrapping/gap constraints in new result/card layouts.

Verification:
- Type check: PASS
- Production build: PASS
- Generated routes: 69
- /formula-cards route: PASS
- /api/formula-cards route: PASS
- /api/knowledge-graph route: PASS
- /api/search route: PASS
- /pyq route: PASS
- /search route: PASS

Lint status:
- PARTIAL
- npm run lint still fails with 118 pre-existing problems outside current touched files.

Remaining blockers:
- Existing lint debt in unrelated pages/components/API routes.
- No browser-device visual pass was run.
