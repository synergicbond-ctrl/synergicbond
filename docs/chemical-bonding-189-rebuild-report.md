# Chemical Bonding 189-Topic Rebuild — Package Report

## Scope

- Authoritative master coverage: 189 numbered topics in exact order.
- Student-facing theory: Parts 01–23.
- Integrated JEE Advanced practice: Part 24.
- Existing premium layout/gating is preserved because `app/learn/chemical-bonding/layout.tsx` is intentionally not replaced.
- Existing validated legacy visual module `ChemicalBondingVisuals.tsx` is preserved and reused; `ChemicalBondingDeepVisuals.tsx` adds the new deep visual atlas.

## Content checks performed while building this package

- 189 topic records present exactly once, numbered 1 through 189 in order.
- Every final coverage-matrix row is `COMPLETE`.
- All 23 theory parts contain mapped topics; no empty part.
- No duplicate paragraph bodies in the 189-topic data source.
- Regression strings absent from the replacement source: `NO has 15`, `15 valence electrons`, `SCN²`, `SCN 2-`, `odd electron on oxygen`, `terminal oxygen dimer`, `Awaiting instruction`.
- Protected corrections explicitly retained: NO = 11 valence electrons; SCN⁻ = −1; r(N₂) < r(N₂⁺); corrected alkali-perchlorate treatment; corrected NO₂/N₂O₄ N-centred radical/N–N dimerisation treatment; one-to-one O₂-family matrix match.
- Historical/exam models (Sugden, expanded-octet d-orbital language, pπ–dπ, classical hypervalent hybridisation) are retained with modern caveats rather than silently deleted.

## Visual coverage added

Responsive original SVG/React visual systems cover:

- potential-energy curve
- ionic lattice
- s/p/d orbital shapes and phase/nodes
- orbital overlap
- hybridisation
- complete VSEPR shape atlas through 7-domain families
- important inorganic structure atlas
- back bonding
- diborane/multicentre bonding
- dipole vectors
- resonance
- hydrogen bonding
- MOT foundations and species-specific families (H₂/He₂/Li₂/Be₂; B₂/C₂/N₂; O₂ family; F₂; heteronuclear; CO/NO; ligand donation/back-donation)
- Fajans/polarisation
- intermolecular forces
- carbon allotropes
- full silicate topology atlas (isolated, dimer, ring, single chain, double chain, sheet, 3-D, aluminosilicate/zeolite)

## Repository validation performed by installer

The self-contained `.command` installer applies the overlay in a clean git worktree from the latest `origin/main`, deletes obsolete old Part 01–13 source files, validates the 189-topic invariants/regressions, then runs:

1. `git diff --check`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build -- --webpack`

Only Chemical Bonding paths and the two audit documents are staged. It then commits, syncs safely with the latest `origin/main` without force-pushing, pushes/merges, attempts the established Vercel production deployment when the local Vercel project link is available, and checks the canonical live route.

A successful production report must come from that repository/runtime validation; this package report does not pretend that sandbox-only syntax checks equal a real Next.js production build.
