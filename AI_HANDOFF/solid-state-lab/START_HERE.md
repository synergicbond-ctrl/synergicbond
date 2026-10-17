# Solid State — Interactive Textbook · START HERE

Route: `/learn/solid-state/lab` (premium-gated by `app/learn/solid-state/layout.tsx`; never weaken it).
Linked from the Solid State hub (`/learn/solid-state/master`) and the notes explorer
(`lib/notes/chapterCatalog.ts`: course `solid-state-interactive` + group card `solid-state`).

## Layout (`app/learn/solid-state/lab/`)

| File | Role |
|---|---|
| `page.tsx` | Assembles the 7 parts + revision chapter; sticky navigator |
| `s_foundations.tsx` | Part 1: freezing sim, anisotropy, solid types, lattice+basis, 7 systems / 14 Bravais (3D morph), cube symmetry |
| `s_cubic.tsx` | Part 2: Z counting with true slicing, contact + packing derivations, neighbour shells (computed), density |
| `s_packing.tsx` | Part 3: 2D packing, ABC/AB stacking, FCC along [111], HCP cell (c/a, efficiency), voids, diamond |
| `s_ionic.tsx` | Part 4: radius-ratio derivations (all five), NaCl / CsCl / zinc blende / wurtzite / CaF₂ / Li₂O |
| `s_defects.tsx` | Part 5: point defects, Boltzmann factor, edge dislocation (Volterra solution), vacancy conduction |
| `s_electronic.tsx` | Part 6: tight-binding bands, gap vs T, doping, p–n junction, superconductors (Meissner field lines) |
| `s_magnetic.tsx` | Part 7: Hund's rule / spin-only moment, ordering, hysteresis (per-domain switching fields) |
| `s_revision.tsx` | Formula sheet and confusions (server component) |
| `_stage.tsx` | three.js engine. Declarative: pass atoms / bonds / lines / polys / clip / camera; the engine springs every change. Mounts only near the viewport (GL-context budget) |
| `_geom.ts` | Pure geometry (lattices, shells, voids, hex cells, ionic structures); verified numerically |
| `_ui.tsx` | KaTeX (`Tex`, `Rich`), `Derivation`, `Worked`, `Traps`, controls, hooks |

## Rules

- Atom colours: cations warm (gold), anions cool (teal). Keep it consistent.
- `Rich` does not nest `$math$` inside `**bold**`; write them side by side.
- Every number in a worked problem was recomputed in Python. Recompute if you change one.
- Animations must respect `prefers-reduced-motion` (the engine and hooks already do).
- Dependency: `three` (+ `@types/three`). Do not add more 3D/animation libraries.

## Validation

```
git diff --check
npx eslint app/learn/solid-state/lab
npx tsc --noEmit -p .
npm run build
```

Local visual testing: the route is auth-gated, so test through a temporary ungated page that
imports `./lab/page`, and use software GL (`--use-angle=swiftshader`) with long waits
(~9 s per 3D scene).
