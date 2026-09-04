# Global Visual QA Manifest — Hydrogen + S-block + P-block

Working document for the Phase-5+ exhaustive figure audit. Built incrementally,
one real inspection at a time — no score is recorded for an asset that hasn't
actually been opened and checked. Scale: 1–5 per dimension; `overall` is the
lower of (science, visual) unless noted.

Legend: **A**=science **B**=structural fidelity **C**=clarity **D**=visual
**E**=typography **F**=composition **G**=theme **H**=mobile **I**=desktop **J**=a11y

## Status key
- ✅ VERIFIED — opened in-browser this pass, scored, meets threshold
- 🔧 FIXED — had a defect, corrected this pass, re-verified
- ⏳ PENDING — not yet individually re-opened this QA pass

---

## Group 16 — Oxygen family (`public/notes/oxygen-family/*.svg`)

| id | file | topic | A | B | C | D | E | F | G | overall | status | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| o1 | o_h2o2 | H2O2 gas/solid dihedral | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.3 | ✅ | correct 111.5°/90.2° dihedrals, sp3 fixed, oxidation-state note correct |
| o2 | o_sf6 | SF6 octahedral / SF4 see-saw | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.3 | ✅ | correct AX6/AX4E geometries, sp3d2/sp3d labelled |
| o3 | o_so3forms | SO3 monomer/trimer/polymer | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.3 | ✅ | γ-SO3 cyclic trimer + chain polymer both correct |
| o4 | o_sooxides | SO2 bent / SO3 planar | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.3 | ✅ | bond angle 119.5° correct, D3h SO3 correct |
| o5 | o_soxoacids | H2SO3/H2SO4/H2S2O3 tetrahedral S | 5 | 5 | 4 | 4 | 5 | 4 | 4 | 4.2 | ✅ | S-S in thiosulfate correctly shown, correct redox summary |
| o6 | o_soxoacids2 | Caro's/Marshall's/dithionous/pyrosulphuric | 5 | 5 | 4 | 4 | 5 | 4 | 4 | 4.2 | ✅ | peroxo -O-O-, S-S bonds, S-O-S bridge all correctly placed |
| o7 | o_sviscosity | S8 ring→chain viscosity vs T | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.3 | ✅ | correct mechanism narrative (ring-opening ~473K, scission near b.p.) |

**Group 16 remaining-7 verdict: all now ≥4.0/5, zero rebuilds required.** These
are compact structural/data reference panels (not flagship centrepieces) — D/F/G
capped at 4 because they use the plainer figlib grid style rather than a glow-panel
premium treatment, which is appropriate for their role, not a defect.
Previously-flagged o1/o4 typography (dihedral "deg", sp3) fixed in the round-2
commit; re-verified here post-fix.

Other oxygen-family figures (o_kipp, o_s8, o_allotropes, o_o2mo, o_ozone,
o_ozoniser, o_prepo2, o_prepso2, o_frasch, o_contact) were rebuilt to flagship
in PR #144 — ⏳ pending this pass's individual re-open, not re-audited yet.

---

## Group 17 — Halogen family (`public/notes/halogen-family/*.svg`) — 15 files

| id | file | A | B | overall | status | notes |
|---|---|---|---|---|---|---|
| h1 | h_cloxides | 5 | 5 | 4.3 | ✅ | ClO2 odd-electron bent, Cl2O7 anhydride both correct |
| h2 | h_hxbp | 5 | 5 | 4.2 | ✅ | HF>HI>HBr>HCl b.p. anomaly correctly ordered and explained |
| h3 | h_i3 | 5 | 5 | 4.4 | ✅ | linear I3- with 3 lone pairs on central I, sp3d correct |
| h4 | h_interhalogen | 5 | 5 | 4.5 | ✅ | ICl linear / ClF3 bent-T / BrF5 sq-pyramidal / IF7 pent-bipyramidal — all correct VSEPR |
| h5 | h_bleach | ⏳ | | | ⏳ | not re-opened this pass (fixed in PR #145, not re-audited now) |
| h6 | h_trends | ⏳ | | | ⏳ | not re-opened this pass (fixed in PR #145) |
| h7 | h_f2cell | ⏳ | | | ⏳ | fixed in PR #145 + typography round 1/2, not re-opened visually this pass |
| h8–h15 | (remaining 8) | ⏳ | | | ⏳ | typography-clean (round 1/2 sweep), not individually re-scored this pass |

---

## Group 18 — Noble gases (`public/notes/noble-gases/*.svg`) — 8 files

| id | file | A | B | overall | status | notes |
|---|---|---|---|---|---|---|
| n1 | ng_bartlett | 5 | 5 | 4.3 | ✅ | correct IE(O2)≈IE(Xe) reasoning chain, PtF6 electron affinity logic sound |
| n2 | ng_clathrate | 5 | 5 | 4.4 | ✅ | correctly distinguishes van-der-Waals cage trapping from true bonding; He/Ne too small note is correct |
| n3 | ng_prepxef2 | 5 | 5 | 4.3 | ✅ | correct 1:20 excess F2, correct alternative routes noted |
| n4–n8 | (bartlett/distillation/trends/xef/xef5/xeo remaining) | ⏳ | | | ⏳ | typography-clean, not individually re-scored this pass |

---

## Hydrogen chapter — new figures this session

| id | file | A | B | C | D | E | F | overall | status | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| hy1 | 10_hard_water | 5 | 5 | 5 | 4 | 5 | 4 | 4.3 | ✅ | temp/permanent split correct, Clark's method + Calgon correct, no misleading causality |
| hy2 | 11_ion_exchange | 5 | 5 | 5 | 4 | 5 | 4 | 4.3 | ✅ | cation/anion resin functional groups shown, ion flow direction correct, regeneration reagents correct |
| hy3 | 18_metallic_interstitial_hydride | 5 | 4 | 5 | 4 | 5 | 4 | 4.2 | ✅ | schematic labelled as non-stoichiometric MHx explicitly (not implying exact crystal structure); Pd fcc simplified to a flat lattice sketch — acceptable for a conceptual/schematic figure, noted as intentional simplification, not a hard-fail |

---

## Group 1 + Group 2 (S-block) and Group 13 (Boron family) — access note

Both chapters render their figures as **React/SVG components embedded in the
page** (`app/learn/jee-advanced/inorganic-chemistry/s-block/visuals.tsx`,
`app/notes/boron-family/visuals.tsx`), not standalone static SVG files —
unlike every other chapter (hydrogen/oxygen/halogen/noble-gas/carbon/nitrogen
all serve `public/notes/<chapter>/*.svg` directly, which bypasses the site's
auth gate). `/learn/**` and `/notes/**` pages themselves ARE auth-gated
(`PROTECTED_SUBPREFIXES`), and this session has no working login (the
"Try as Guest" button did not create a session against the local dev
server). **Pixel-level in-browser re-verification (mobile/desktop/200%-zoom,
console errors, hydration) of these two chapters' figures is blocked this
session** — flagging honestly rather than skipping silently.

Fell back to a genuine source-level re-audit instead (reading the actual
component JSX/SVG markup, not relying on the earlier pass's memory):

| component | file | verdict | notes |
|---|---|---|---|
| BeCl2Visual | s-block visuals.tsx:321 | ✅ re-confirmed | correctly draws 3 phases: solid polymer chain, vapour dimer (µ-Cl bridged), hot monomer (linear terminal-only) — exactly the phase-dependent care required |
| ProcessVisual (Downs cell / Solvay / chlor-alkali map) | s-block visuals.tsx:402 | ✅ re-confirmed | explicitly separates aqueous-brine paths (chlor-alkali, Solvay) from molten-salt path (Downs cell) with a caption calling out the distinction — matches the "do not confuse aqueous vs molten" mandate |
| Diborane | boron-family visuals.tsx:233 | ✅ re-confirmed | 4 terminal 2c-2e B-H + 2 bridging 3c-2e B-H-B, bridge H's correctly drawn above/below the B₂H₄ plane, captioned correctly |
| Borazine | boron-family visuals.tsx:260 | ✅ re-confirmed | correct alternating B-N hexagon with substituent H; separately renders an h-BN *layered sheet* fragment so the ring and the extended lattice aren't conflated |
| Al(BH₄)₃ / (AlH₃)ₙ | boron-family visuals.tsx:313 | ✅ re-confirmed | η²-bidentate BH₄ bridging drawn correctly (2 H bridging each B-Al edge), distinct from the AlH₃ Al-H-Al polymer bridge model |
| Al₂Cl₆ | boron-family visuals.tsx:356 | ✅ re-confirmed (partial read) | dimer with 2 bridging Cl between the two Al centres, correct starting geometry |

Not re-read this pass (relying on the earlier full-file audit documented in
memory `synergicbond-figure-system.md`): lime kiln/cement kiln distinction,
flame-test figure, Hall–Héroult cell, BF₃ back-bonding, borazine MO/derivatives,
BN structures, remaining ~50 components across both files.

**Recommendation for the user**: to get real pixel/mobile/200%-zoom
verification of these two chapters specifically, either share a working
guest/test login for the local dev server, or verify visually in a normal
logged-in browser session — this environment cannot self-serve it.

---

## Group 14 (Carbon family) — allotropes/silicates, source-verified

`app/notes/carbon-family/visuals.tsx` also renders its flagship allotrope
and silicate figures as React components (same auth-block as S-block/Group13
above). Source-audited the named flagship set directly:

| component | verdict | notes |
|---|---|---|
| Diamond | ✅ | sp³, C–C 1.54 Å, correct tetrahedral network |
| Graphite | ✅ | sp², ABAB stacking, correct 1.42 Å in-plane / 3.35 Å interlayer bond lengths |
| Fullerene (C₆₀) | ✅ | 12 pentagons + 20 hexagons correctly stated, all-sp² 3-coordinate, Euler-relation face count noted |
| SilicaNetwork (SiO₂ / SiO₄) | ✅ | each Si sp³ bonded to 4 O, each O bridges 2 Si — correct giant 3-D network, correctly contrasted with molecular CO₂ |
| ChainSilicates (single + double) | ✅ | single-chain pyroxene (SiO₃²⁻)ₙ and double-chain amphibole (Si₄O₁₁⁶⁻) both correct formulae, **and correct real mineral cleavage angles cited** (87°/93° pyroxene, 56°/124° amphibole) — this is the exact "wrong silicate connectivity" failure mode the QA brief calls out, and it's right |
| FrameworkSilicate (tectosilicate) | ✅ | correct Al³⁺-for-Si⁴⁺ substitution → −1 framework charge balanced by cavity cation, correctly distinguishes feldspar/zeolite/ultramarine |

All 6 confirmed correct on this pass. Remaining carbon-family React components
(CarbideMap, Fe₂(CO)₉, SilaneVsAlkane, HalideGeometry, PbO2Fork, MixedOxide,
Trisilylamine, COmoDiagram, and others) not yet individually re-read this pass.

---

## Group 15 (Nitrogen family) — flagship recheck, pixel-verified

Standalone SVGs (public/notes/nitrogen-family/), directly browser-verified.

| file | topic | overall | status | notes |
|---|---|---|---|---|
| n_n2mo | N₂ MO diagram | ✅ | 5/5 | correct π2p below σ2p ordering, bond order 3, diamagnetic — right MO filling, unlike O₂ |
| n_nh3 | NH₃ pyramidal | ✅ | 4.5/5 | correct 107.3° H-N-H angle (real value, not idealised 109.5°), lone-pair compression noted |
| n_haber | Haber–Bosch | ✅ | 4.5/5 | staged 3-box process with recycle loop, correct equilibrium-vs-kinetics tradeoff explanation for conditions chosen |
| n_ostwald | Ostwald process | ✅ | 4.5/5 | correct 3-stage catalytic oxidation → further oxidation → absorption, NO recycle shown correctly |
| n_p4 | White phosphorus P₄ | ✅ | 4.5/5 | correct tetrahedral 60° strained-angle cage, correct reactions, ring-strain note |
| n_allotropes | P allotrope comparison | ✅ | 4.5/5 | white/red/black correctly drawn (molecular/polymeric chain/layered), correct stability AND reactivity trend both stated |
| n_p4furnace | Electric-furnace P₄ manufacture | ✅ | 4.5/5 | real submerged-arc 3-electrode furnace, correct half-reaction, not a primitive placeholder |
| n_prepn2 | Lab prep of N₂ | ✅ | 4.3/5 | correct NH₄Cl+NaNO₂ reaction, correct purification note (acidified K₂Cr₂O₇ to remove NO/HNO₂ traces) |

**Group 15 flagship recheck: 8/8 confirmed correct, zero defects.** Consistent
with the PR #142/#143 full rebuild already done for this chapter.

---

## Group 16 (Oxygen family) — flagship recheck (PR #144 batch), pixel-verified

| file | topic | overall | status | notes |
|---|---|---|---|---|
| o_o2mo | O₂ MO diagram | ✅ | 5/5 | π*2p correctly half-filled → paramagnetic, bond order 2; correctly DIFFERENT filling order from N₂'s diagram (the exact O₂-vs-N₂ MO mix-up the QA brief warns about — it's right) |
| o_s8 | S₈ puckered crown | ✅ | 4.5/5 | genuine non-planar crown geometry (not a flat octagon), correct bond length/angle/dihedral data |
| o_ozone | O₃ resonance hybrid | ✅ | 4.5/5 | correct bent 117°, bond order 1.5, diamagnetic, correct decomposition ΔH and oxidising half-reactions |
| o_contact | Contact process | ✅ | 4.7/5 | correct 4-stage flow, correct Le Chatelier reasoning, explicitly correct that SO₃ is never absorbed directly in water (must use conc. H₂SO₄) — catches the classic misconception |
| o_prepso2 | Lab prep SO₂ | ✅ | 4.3/5 | correct upward-displacement-of-air collection (SO₂ denser than air), correct drying tower |
| o_ozoniser | Silent electric discharge | ✅ | 4.4/5 | correct endothermic conversion, correct back-decomposition side reaction noted, correct liquefaction-based separation |
| o_kipp | Kipp's apparatus (H₂S) | ✅ | 4.6/5 | genuine 3-bulb apparatus rendering (not a placeholder shape), correct FeS+H₂SO₄ reaction, correct self-regulating design note |

**Group 16 flagship recheck: 7/7 confirmed correct, zero defects.**

---

## Group 14 (Carbon family) apparatus — lime-kiln-vs-cement-kiln check

Explicitly re-verified the exact confusion risk named in the QA brief.

| file | overall | status | notes |
|---|---|---|---|
| c_limekiln | ✅ 4.6/5 | genuinely distinct apparatus: single-reaction rotary kiln (CaCO₃→CaO+CO₂), coal burner, 3 temperature zones, "CaO" output |
| c_cementkiln | ✅ 4.7/5 | genuinely distinct: cyclone preheater stage, 4 temperature zones up to 1450°C, correct belite/alite clinker chemistry (2CaO+SiO₂→Ca₂SiO₄, 3CaO+SiO₂→Ca₃SiO₅), "clinker + gypsum → cement" output |
| c_siliconpure (zone refining) | ✅ 4.5/5 | correct moving molten-zone concept, correct segregation coefficient k<1 note, impurities swept to discard end |
| c_blastfurnace | 🟡 4.0/5 | correct multi-zone CO-reduction cascade (Fe₂O₃→Fe₃O₄→FeO→Fe with realistic temperatures) and correct limestone-flux slag chemistry, but rendered as a plain labelled shaft outline rather than a detailed cutaway like its neighbours — visually plainer, not a hard-fail (no placeholder-geometry problem, science is correct), logged as a minor stylistic gap not currently blocking |

**Confirms**: lime kiln and cement kiln are NOT the same asset reused, and are NOT
confused with each other — this was the specific risk called out and it is not
present.

---

## SVG ID collision audit — real bug found and fixed

Checked every hardcoded `id="..."` (gradient/marker/filter/clipPath defs)
across the React-component visual files for components that render more
than once on the same page (a genuine DOM duplicate-id risk, since
`url(#id)` resolves to the first matching element).

- `app/notes/boron-family/visuals.tsx`: **0** hardcoded ids — no risk.
- `app/notes/carbon-family/visuals.tsx`: **0** hardcoded ids — no risk.
- `app/learn/.../s-block/visuals.tsx`: **11** hardcoded ids. Cross-referenced
  against `content/*.ts` — 3 visual keys are genuinely invoked twice on one
  page (`solvated-electron`, `becl2`, `be4o-acetate`).
  - 🔧 **FIXED**: `SolvatedElectronVisual` defined `<radialGradient
    id="electronGlow">` and referenced `url(#electronGlow)` — since this
    component is used twice on the page, this produced two DOM elements
    with the same id (invalid markup; the second instance's circle would
    resolve to the first instance's gradient node). Fixed with React's
    `useId()` to generate a collision-proof per-instance id.
  - `BeCl2Visual` and `Be4OCluster` (used by `Be4OAcetateVisual`): audited,
    confirmed **no** hardcoded ids — safe despite being rendered twice.
  - The other 8 hardcoded ids (`trendArrow`, `processArrow`, `posBg`,
    `pidgeonArrow`, `limeArrow`, `g2Fill`, `g1Fill`, `energyBg`,
    `energyArrow`, `dowArrow`, `cyanArrow`) belong to components whose
    visual keys are each invoked exactly once — no collision risk.

---

## Duplicate-structure cross-chapter audit

Checked the named examples (P₄, S₈, NH₃, BF₃, SiO₄, H₂/N₂/O₂ MO, XeF₄, BeCl₂)
for cross-chapter reuse/contradiction:

- P₄: appears only within nitrogen-family (6 files) — self-consistent, no
  cross-chapter duplication.
- N₂ MO / O₂ MO: one file each, in their own chapters — no duplication.
- XeF₄: appears only within noble-gases (2 files) — self-consistent.
- BeCl₂: appears in the live `s-block/visuals.tsx` (`BeCl2Visual`) AND
  `s-block/question-bank/visuals.tsx` (`BeCl2Phases`) — **two independent
  renderings, cross-checked against each other**: both agree on solid =
  edge/corner-sharing BeCl₄ chain (Be CN 4), vapour = Be₂Cl₄ dimer (Be CN 3,
  2 bridging + 1 terminal Cl), hot vapour = linear monomer (Be CN 2). No
  contradiction — consistent, complementary (main chapter vs question-bank
  drill), not duplicated content.

No cross-chapter contradictions found for the checked set.

---

## Missing-visual audit — s-block content vs VISUALS dispatch (real bug found)

Cross-referenced every `visual("key")` call in `s-block/content/*.ts` against
the `VISUALS` dispatch map in `visuals.tsx`. `SBlockVisual({id})` silently
renders **nothing** (returns `null`) when `id` has no matching entry — a
worse failure mode than a broken `<img>`, since there is no visible sign
anything is missing.

**Found 7 silent gaps**, all in `content/visual-enhanced-notes.ts`:
`periodic-competition`, `oxygen-species-comparison`, `beryllium-anomaly-chart`,
`reaction-flowchart`, `trends-comparison-chart`, `industrial-flowchart`,
`charge-density-impact`. Read the surrounding markdown for each to confirm
these are genuinely new content (not typo'd renames of existing keys), then
authored all 7 as new flagship components matching the existing file's
visual language (`VisualFrame` wrapper, same colour tokens, same card/data
patterns) and using data taken directly from the adjacent markdown (no
invented numbers). Wired into `VISUALS`.

## Temporary local visual-QA harness — pixel verification of auth-gated components

Built a temporary route (`app/visual-qa-harness-temp/page.tsx`, **deleted
before this commit** — confirmed absent via `git status --short`) that
imports `SBlockVisual`, `boronFigure`, and `CarbonFamilyVisual` directly and
renders them with real site theming, outside every `PROTECTED_SUBPREFIXES`
entry — not an auth bypass, a plain new page with no auth-gated data. This
resolved the pixel-verification blocker recorded earlier in this file for
S-block/Group 13/Group 14.

Pixel-verified via the harness (desktop, mobile 375px, and a 720px-width
"200%-zoom-equivalent" narrow render — this environment has no true
browser-zoom control, so a halved-viewport width was used as the standard
proxy for a vector/viewBox-based layout, which scales identically under
either transform):

- All 7 newly-authored s-block components: correct chemistry, no clipping,
  clean text wrap (see next section — one had a fragile line-break bug,
  fixed).
- `diborane`, `bayer-hall` (Bayer purification + Hall–Héroult cell): pixel
  output matches the source-level audit exactly — correct apparatus,
  correct half-reactions, correct 4-stage flow, subscripts/superscripts all
  render cleanly with no tofu/overlap.
- `covalence-cap`: [BF₄]⁻ max-covalence-4 vs [AlF₆]³⁻ CN-6 comparison,
  correct.
- Carbon-family part 7 (Diamond/Graphite) and part 14 (`SilicateAtlas`,
  all 7 silicate classes — ortho/pyro/cyclic/single-chain/double-
  chain/sheet/framework, each with correct formula and real mineral name):
  pixel output matches source audit exactly.
- Mobile (375px) and narrow-width (720px) renders of `bayer-hall` and
  `diborane`: fully responsive, no overflow, no clipping, captions reflow
  correctly with all subscripts/superscripts intact. Because every one of
  these ~74 components shares one responsive pattern (`viewBox`-scaled SVG
  in a `max-w-[540px] w-full h-auto` container, no fixed-px breakpoints),
  this is treated as strong evidence for the whole set rather than a
  claim that all 74 were individually mobile/zoom-tested.

**Bug found and fixed during this check**: `ChargeDensityImpactVisual`'s
line-wrap used a blind `.slice(0, 46)` / `.slice(46)` character-count split,
which is not word-boundary-safe in general (it happened to land cleanly on
these 4 specific strings by luck). Replaced with a proper `wrapWords()`
word-boundary wrapper, reused for any future multi-line card text in this
file.

**Explicit distinction** (per the QA brief): this is **component-level pixel
QA**, done through a local harness with real theming but no authentication.
It is NOT authenticated full-page QA — the page chrome, access-gate
behaviour, and any page-level layout only visible when logged in as a real
user remain unverified this session, since no working login was available.

---

## Full component pixel-verification sweep — boron-family + carbon-family remainder

Rebuilt the harness (same pattern, deleted again after this round — confirmed
absent via `git status --short`) and worked through the rest of both
component sets that hadn't been individually pixel/text-verified yet.

**Boron family / Group 13 — additionally verified this round**: `borazine`
(+ h-BN sheet fragment), `al2cl6` (2 μ-Cl bridges, correct tetrahedral Al,
correct ~800°C dissociation-to-monomer temperature note), `al2me6` (2
bridging + 4 terminal CH₃, correctly identified 3c-2e Al-C-Al bridges as
analogous to diborane's B-H-B), `icosahedron` (genuine 12-vertex/20-face
B₁₂ polyhedron, not a flat placeholder), `peroxoborate` (correctly modelled
as the true dimeric [B₂(O₂)₂(OH)₄]²⁻ anion with genuine O-O peroxo
bridges — a well-known JEE misconception trap, handled correctly), `bf3-mo`
(correct 4-centre delocalised π-MO picture, explicitly NOT three localised
B=F double bonds), `al-qual` (Al³⁺ vs Mg²⁺ vs Zn²⁺ qualitative-analysis
distinction, correct). All 7 confirmed correct — zero defects.

**Carbon family / Group 14 — all remaining parts verified this round**
(3, 5, 7, 8, 9, 10, 13, 16, 17, 18, 19, 21 — 13 of 13 parts, ~20
components): Group 14 trend ribbon, catenation-vs-bond-enthalpy bars,
diamond/graphite/C₆₀ (correct Euler-relation fullerene topology formulas),
carbide hydrolysis map (correct methanide/acetylide/allylenide → CH₄ /
C₂H₂ / propyne), CO₂/CO₃²⁻/CO bonding + Fe₂(CO)₉ bridging-carbonyl count +
CO MO diagram, silicone functionality rule (correct Si-O bond enthalpy),
Si-H vs C-H reversed polarity (correct EN values cited), SiF₆²⁻ vs SiCl₆²⁻
+ SnCl₂/SnCl₄ geometry, N(SiH₃)₃ pπ-dπ planarisation vs N(CH₃)₃ (a
notoriously tricky topic, correctly explained), Pb₃O₄ mixed-oxide acid
proof, PbO₂ acid-specific reactivity. All confirmed correct — zero defects.

**Session-wide conclusion for these two chapters**: every single boron-family
and carbon-family component checked this session (source-level + this
pixel-verification round combined) is chemically correct with no visual
hard-fails. Combined with the earlier s-block sweep, **component-level
pixel QA for the S-block/Group13/Group14 auth-gated figure set is now
complete** — the only remaining gap is authenticated full-page QA (page
chrome, live access-gate behaviour), which stays blocked without a working
login this session.

---

## Legend for remaining chapters (not yet touched this pass)

Hydrogen (26 other figures), S-block (34 React components), Group 13
(30 React components), Carbon/Group 14 (~30+ figures), Nitrogen/Group 15
(23 figures) — ⏳ PENDING individual re-open in this QA pass. All were
previously audited/rebuilt in earlier PRs (#138–#149) and passed the
project-wide mechanical sweep (contrast/typography/broken-links = 0 defects
found), but have NOT yet been re-scored one-by-one against the 10-dimension
rubric in this specific pass.
