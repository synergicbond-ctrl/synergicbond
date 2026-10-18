# Solid State — Interactive Textbook · START HERE

Route: `/learn/solid-state` (the interactive textbook replaced the old 23-part index; that index now lives at `/learn/solid-state/course`, and `/learn/solid-state/lab` redirects to the root) (premium-gated by `app/learn/solid-state/layout.tsx`; never weaken it).
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
| `_fulltext.tsx` | Server components: `MasterNotes` embeds Master Notes parts 1-10 after the matching lab part (1,2 / 3 / 4,5 / 6,7 / 8 / 9 / 10) (the original 23-part course appendix was removed at the user's request) |
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

## Additions from the user's own notes (Solid_State_KOHINOOR PDF + Atkins pages)

Added after comparing the lab with the user's notes: 1.1 volume of a general
unit cell + table for all seven systems; 2.6 fraction of edge unoccupied and
four worked problems (BCC gap to density, Fe third-neighbour radius, formula
from positions); `SquareStack` (AAA to SC, ABAB open to BCC, square closed
to FCC, 4+4+4 = 12); `HcpVoids` + `HcpLayerFig` (T.V./O.V. at h/8 ... 7h/8);
higher-CN radius-ratio table, T/P effect on CN, 4.7 ideal rock-salt packing
79 %; 5.3 Frenkel defects n = sqrt(N N_i) exp(-dH/2kT), SrCl2 doping and
Fe0.93O worked problems; `FermiLab` (Fermi-Dirac), `CriticalField` (Hc(T),
Type I/II, Cooper pairs, Pb worked problem); `SusceptLab` (Curie law,
molar/volume susceptibility, Gouy balance, SQUID, TIP).

## Practice set (`_practice.ts`, `s_practice.tsx`)

87 original-wording questions (49 single-correct, 8 multiple-correct, 28 numerical,
2 matrix-match) with a worked, animated solution for each and a full answer key.
Options are shuffled by a fixed per-question seed; `ans` letters are computed from
`ok` indices, so never type letters by hand. Several numerical values differ from
their sources; every answer and every math snippet was checked by script. All
figures are redrawn as text (no copied images). Add questions to the draft arrays.

## Practice set (`_practice.ts`, `s_practice.tsx`)

87 original-wording questions (49 single-correct, 8 multiple-correct, 28 numerical,
2 matrix-match) with a worked, animated solution for each and a full answer key.
Options are shuffled by a fixed per-question seed; `ans` letters are computed from
`ok` indices, so never type letters by hand. Several numerical values differ from
their sources; every answer and every math snippet was checked by script. All
figures are redrawn as text (no copied images). Add questions to the draft arrays.

## Part 8 "Going deeper" (`lab/s_west.tsx`)
Original-wording extras inspired by a university solid-state course (Kröger–Vink notation, aliovalent doping/YSZ, perovskite tolerance factor + lab, spinel normal/inverse, fullerene Euler derivation + lab, crystallographic restriction). Derivations 8.1–8.5. Book text is not copied.

## HCP hole elevator (`lab/s_hcptower.tsx`)
`HcpTower`: 3D ride through the 9 levels (0, h/8 … h) of the HCP cell, with glass floor, per-level holes, neighbour pyramid/octahedron, running tally (12 small / 6 big), tappable height ruler matching the textbook "Location of voids in HCP" drawing, pull-layers-apart slider and a true-size toggle. Mounted in `s_packing.tsx` before `HcpTour`.

## Part 9, five question sets (this session)
- `lab/s_network.tsx` (`NetworkChapter`, id `network`, TOC "9"): network-solid table, derivations 9.1–9.5 (diamond/Si/SiC bond & density, graphite cell, B12 icosahedron + B4C, CaF2 geometry/density/packing), `GraphiteLab` (one layer / ABAB / sliding) and `FluoriteLab` (fluorite + antifluorite; unit cell, CN 8, CN 4, cubes) in 3D, interactive table of all metals' structures (`METALS`), table of important crystalline compounds.
- Practice is now five sets in `_practice.ts` (`SETS`, `SET_INFO`, `SET_ORDER`): `core` (87), `prob` (`_problems.ts`, 35 rewritten problem-book numericals, source problems 645–673), `net` (`_netq.ts`, Part 9), `pyq` (`_pyqmain.ts` + `_pyqadv.ts`, JEE Main/Advanced style, 152), `incho` (`_incho.ts`, 35). `makeSet` renumbers per question type and appends " pattern" to any year tag. All are original rewordings with changed data; year tags only where a search confirmed the pattern. Not a claim of completeness.
- `typed(q)` in `s_practice.tsx` treats option-less single-correct items (SC 15–18) as typed-number answers.
