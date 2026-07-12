# Thermodynamics Part 17 — Source Coverage Audit

## Student-facing title
Clausius Inequality, Entropy Generation, and Universe Entropy Balance

## Primary handwritten source range
Pages 125–128 of the primary handwritten Thermodynamics notes.

## Page 125 coverage — Clausius inequality
- Reversible entropy definition:
  dS = δqrev/T
- Irreversible comparison:
  dS > δqirr/T
- Retained energy-balance derivation:
  δqrev − δqirr
  = (dU − δwrev) − (dU − δwirr)
  = δwirr − δwrev
- Pressure–volume substitution:
  δwrev = −P dV
  δwirr = −Pext dV
- Result:
  δqrev − δqirr = (P − Pext)dV
- Expansion sign argument:
  P > Pext and dV > 0
- Compression sign argument:
  P < Pext and dV < 0
- Product positive in both irreversible directions
- Final inequality:
  dS ≥ δQ/Tb
- Unified balance:
  dS = δQ/Tb + dSgen
  dSgen ≥ 0
- Isolated-system result:
  δQ = 0 ⇒ dS ≥ 0
- Universe decomposition:
  ΔSuniverse = ΔSsystem + ΔSsurroundings
- Reversible:
  ΔSuniverse = 0
- Irreversible:
  ΔSuniverse > 0

## Page 126 coverage
- Spontaneous process:
  ΔSuniverse > 0
- Proposed non-spontaneous isolated change:
  ΔSuniverse < 0 and cannot occur as the sole isolated change
- At equilibrium entropy is maximum
- Isolated-system energy remains constant
- Entropy generation can be positive but cannot be negative
- Entropy of the isolated universe is non-decreasing
- Entropy of an isolated system becomes maximum at equilibrium

## Pages 127–128 coverage
- Reversible expansion entropy accounting
- Irreversible expansion entropy accounting
- Reversible compression entropy accounting
- Irreversible compression entropy accounting
- System entropy
- Surroundings entropy
- Total/universe entropy
- Reversible cancellation:
  ΔSsys + ΔSsurr = 0
- Irreversible positive total:
  ΔSsys + ΔSsurr > 0
- Original source piston diagrams independently rebuilt as animated Synergic Bond visuals

## Scientific correction of source shorthand
### “State/path functions are defined only for the system”
Corrected:
- surroundings may also be treated as a thermodynamic system with state functions

### “Surroundings change is always reversible”
Corrected:
- not universally true
- a large reservoir is often idealised as internally equilibrated
- this permits simple calculation of ΔSsurr = qsurr/Tsurr
- the combined process may remain irreversible

### “Entropy may be created but never destroyed”
Refined:
- entropy generation satisfies Sgen ≥ 0
- system entropy itself can decrease through entropy export

### “At equilibrium dS = 0”
Refined:
- stable isolated equilibrium requires a constrained entropy maximum
- first variation zero
- second variation negative

### Isobaric/isochoric exception
Corrected:
- equality is controlled by reversibility and zero entropy generation
- process labels alone do not guarantee equality

## Original complete worked examples
1. One mole ideal gas, 300 K, 10 L → 20 L:
   - reversible isothermal expansion
   - one-step expansion against final pressure
   - insulated free expansion
   - same ΔSsys for all paths
   - full ΔSsurr and ΔSuniv comparison
2. Sudden isothermal compression, 20 L → 10 L:
   - full work, heat, system, surroundings, and universe entropy
3. 600 J heat transfer from 400 K to 300 K:
   - ΔShot = −1.50 J K⁻¹
   - ΔScold = +2.00 J K⁻¹
   - ΔSuniv = +0.50 J K⁻¹

## Original visual system
- Animated Clausius-inequality path comparison
- Animated entropy transfer/generation ledger
- Four-panel reversible/irreversible expansion/compression animation
- Maximum-entropy equilibrium graph
- Derivation cards
- Scientific-correction table
- Spontaneity/equilibrium criteria table

## Original JEE Advanced enrichment
- Cyclic Clausius inequality
- Discrete-reservoir form
- Boundary-temperature clarification
- Entropy generation and work-loss connection
- Sixteen original JEE Advanced problems with solutions
- Four daily-life applications
- Full trap detector

## Handwritten problem audit
- No explicit numerical problem appears in pages 125–128.
- Therefore no handwritten numerical example has been omitted.
- The original calculations in this part were added to illuminate every handwritten sign and balance statement.

## Boundary to Part 18
- Page 129 begins entropy calculations for:
  fusion, vaporisation, sublimation, crystalline transitions, and chemical reactions.
- Those calculations are reserved for Part 18.
- Detailed phase-change enthalpy and calorimetry remain in the separate Thermochemistry notes; Thermodynamics uses only the entropy relations needed for the Second-Law sequence.

## Copyright safety
- No source screenshots
- No source branding, watermark, or copied page design
- No copied external figures
- No copied external numerical problem wording or solution text
- All source derivations are independently typeset and scientifically audited
- All SVGs, animations, added examples, problems, and solutions are original

## Complete derivation rebuild

- Existing theory, SVG graphics, tables, examples and solutions retained.
- Added 4 explicit derivations with assumptions, intermediate steps, final equations and validity limits.
- Added 2 independently authored worked examples.
- Added one original responsive relationship graph.
- Existing collapsed problem elements converted to permanently visible content.
- Student-facing examination-extractor and provenance wording removed.
- No raster images added.
- Chapter architecture remains exactly Parts 01–30.

<!-- ALL-PARTS-FINAL-AUDIT:START -->
## Final deterministic audit — 20260712-133505

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart17LocalhostReview.tsx`
**SHA-256:** `931e38efa2250315b0bf4e676321bc9e5cc41ae44cd90614312c62ac1a4c7b78`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1147 |
| Bytes | 48654 |
| Sections | 30 |
| SVGs | 4 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 16 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1147 lines; minimum 180 |
| Lesson sections | PASS | 30 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 4/4 |
| SVG titles | PASS | 4/4 |
| SVG descriptions | PASS | 4/4 |
| SVG viewBoxes | PASS | 9/4 |

### Topic anchors

| Topic | Result |
|---|---|
| No static anchor list | INFO |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
