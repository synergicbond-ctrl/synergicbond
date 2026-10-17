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
| `_fulltext.tsx` | Server components: `MasterNotes` embeds Master Notes parts 1-10 after the matching lab part (1,2 / 3 / 4,5 / 6,7 / 8 / 9 / 10); `SourceCourse` appends all 23 parts of the original course |
| `_notes.tsx` | `Fold`: native `<details>` wrapper (text stays searchable; a #hash inside opens it) |
| `_stage.tsx` | three.js engine. Declarative: pass atoms / bonds / lines / polys / clip / camera; the engine springs every change. Mounts only near the viewport (GL-context budget) |
| `_geom.ts` | Pure geometry (lattices, shells, voids, hex cells, ionic structures); verified numerically |
| `_ui.tsx` | KaTeX (`Tex`, `Rich`), `Derivation`, `Worked`, `Traps`, controls, hooks |

## Embedded existing content (nothing is duplicated or rewritten)

- `master/_shared.tsx` exports `PartArticle` (content of one Master Notes part, no page chrome); `SolidStatePartPage` uses it too.
- `parts/_shared.tsx` exports `PartContentBody` (content of one course part, no chrome); parts 3-23 now `export const data`. Parts 1-2 are standalone components rendered as-is.
- All 85 Master Notes sections and 23 course parts were verified present in the rendered page by id.
- If you add a Master Notes part, add it to a `MasterNotes parts={[...]}` call in `page.tsx`.

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

## Textbook derivations (`_ui.tsx` `Derivation`, `_figs.tsx`)

Every derivation is numbered and laid out as a textbook proof: Given / To find
box, numbered steps with numbered equations, a boxed "Hence" result, an
optional note, and (where useful) a geometric figure from `_figs.tsx`
(`ContactFig`, `RadiusFig`, `VoidFig`, `HcpFig`, `BraggFig`, `MillerFig`,
`CurieFig`: server-safe SVG built from real coordinates). Props:
`no, title, given, find, figure, steps[{say, tex?}], result, note`.
In JSX attribute strings write a single backslash (`result="\eta = ..."`);
inside JS strings/arrays use `\\`.

Numbering: 2.1-2.3 cubic packing, 2.4 d-spacing (Miller), 2.5 Bragg (+ BraggLab),
3.1-3.7 packing/voids/diamond, 4.1-4.5 radius ratio, 4.6 cell edge from radii,
5.1 Boltzmann, 5.2 density with Schottky/Frenkel, 6.1 intrinsic conductivity,
7.1 spin-only moment, 7.2 Curie's law.
