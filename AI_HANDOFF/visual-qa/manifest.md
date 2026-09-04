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

## Legend for remaining chapters (not yet touched this pass)

Hydrogen (26 other figures), S-block (34 React components), Group 13
(30 React components), Carbon/Group 14 (~30+ figures), Nitrogen/Group 15
(23 figures) — ⏳ PENDING individual re-open in this QA pass. All were
previously audited/rebuilt in earlier PRs (#138–#149) and passed the
project-wide mechanical sweep (contrast/typography/broken-links = 0 defects
found), but have NOT yet been re-scored one-by-one against the 10-dimension
rubric in this specific pass.
