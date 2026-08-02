# New Content Report

## Adsorption — 24 original SVG figures

All 24 are newly authored this branch, replacing 24 NotebookLM-watermarked JPG/PNG images that
were `display:none`'d in production (see `ROUTE_AUDIT.md` / `MASTER_AUDIT.md` for the discovery
story). Full detail in `IMAGE_MANIFEST.json`. Summary list:

1. Diffusion → adsorption → intermediate formation → desorption → diffusion away
2. Balanced bulk forces vs residual surface forces
3. Adsorption vs absorption vs sorption
4. Physisorption vs chemisorption
5. Potential-energy curve (physisorption well, activation barrier, chemisorption well)
6. Adsorbate–surface molecular-orbital donation / back-donation
7. Langmuir isotherm derivation summary
8. Langmuir linear form (slope/intercept)
9. Freundlich isotherm and its logarithmic linear plot
10. Temkin isotherm
11. BET multilayer isotherm and its linear plot
12. Temperature effect on physisorption vs chemisorption
13. Factors affecting adsorption
14. Heterogeneous catalytic cycle
15. Langmuir–Hinshelwood mechanism
16. Eley–Rideal mechanism
17. Micropore / mesopore / macropore classification
18. Shape-selective catalysis in zeolites
19. Catalyst poisoning
20. Catalysed vs uncatalysed activation-energy profile
21. Gibbs adsorption equation and surface-excess sign
22. Surface excess and the effect of solutes on surface tension
23. Critical micelle concentration (CMC)
24. Surfactant monolayer at the air–water interface

This list follows the handover document's own §14 "24 separate figure concepts" inventory,
mapped 1:1 to the 24 image slots in the existing page content in narrative order. No existing
prose was rewritten to accommodate these — they were placed at the same positions the old
(branded) images occupied.

## New theory, derivations, examples, or JEE questions

None added. The handover doc's Points 8–11 (theory rewrite, derivation rebuild, original
examples, original questions) have not been attempted for any chapter yet.

## S-Block

No new content — this was a routing fix only, plus a server/client component split for
`page.tsx` metadata (mechanical refactor, no prose changes).
