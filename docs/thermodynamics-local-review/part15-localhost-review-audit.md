# Thermodynamics Part 15 — Source Coverage Audit

## Student-facing title
Reversed Carnot Refrigerator, Heat Pump, COP, and the Entropy Bridge

## Primary handwritten sequence coverage
- Ideal refrigerator
- Heat is absorbed at low temperature
- Heat is rejected at high temperature
- Work must be supplied to run the reverse process
- Hot-reservoir and cold-reservoir energy-flow direction
- Reversed-cycle connection to the Carnot engine
- Transition from the Carnot block to entropy as a state function
- Cyclic state-function closure immediately preceding the Second-Law/entropy section

## Source-order clarification
- The primary handwritten notes contain a concise ideal-refrigerator introduction at the end of the Carnot block.
- The next handwritten page begins the entropy state-function transition.
- Detailed refrigerator COP, heat-pump COP, and practical-cycle material are therefore independent JEE Advanced enrichment placed between those two source blocks without changing their conceptual order.
- No handwritten numerical refrigerator example was present in the audited source pages.

## Complete refrigerator and heat-pump treatment
- Reversed heat-engine energy balance:
  QH = QC + Win
- Refrigerator objective:
  COPR = QC/Win
- Heat-pump objective:
  COPHP = QH/Win
- Universal relationship:
  COPHP = COPR + 1
- Reversed Carnot four-stage cycle:
  1. reversible isothermal expansion at TC
  2. reversible adiabatic compression
  3. reversible isothermal compression at TH
  4. reversible adiabatic expansion
- Reversible heat ratio:
  QH/QC = TH/TC
- Carnot refrigerator:
  COPR,max = TC/(TH−TC)
- Carnot heat pump:
  COPHP,max = TH/(TH−TC)
- Relations to Carnot-engine efficiency:
  COPHP = 1/η
  COPR = (1−η)/η
- Temperature-lift dependence
- Impossibility of work-free cold-to-hot heat transfer
- Real-device losses and irreversibility

## Entropy transition
- Working substance returns to initial state:
  ΔSdevice = 0
- Cold-reservoir entropy:
  ΔSC = −QC/TC
- Hot-reservoir entropy:
  ΔSH = +QH/TH
- Universe entropy:
  ΔSuniverse = QH/TH − QC/TC ≥ 0
- Reversible equality:
  QH/TH = QC/TC
- Irreversibility raises required work and lowers COP
- Clausius and Kelvin–Planck statements shown to be equivalent

## Original visuals and animations
- Animated reversed heat-engine energy flow
- Animated four-stage reversed Carnot cycle
- COP-versus-temperature-lift graph
- Simplified practical refrigerator loop
- Reversible-versus-real entropy-balance animation
- Original COP derivation cards
- Device-comparison table
- Entropy-transition cards

## Original solved content
- Complete worked example:
  TC = 260 K
  TH = 300 K
  QC = 5.20 kJ
  COPR = 6.50
  Win = 0.800 kJ
  QH = 6.00 kJ
  COPHP = 7.50
- Sixteen original JEE Advanced problems with solutions
- Four daily-life applications
- Full trap detector

## Scientific corrections and safeguards
- Refrigerator does not create cold; it removes heat
- COP is distinguished from efficiency and may exceed one
- Heat pump and refrigerator identified as the same cycle with different desired outputs
- All Carnot temperatures use kelvin
- Reversible refrigerator still requires work input
- Practical expansion valve identified as adiabatic but irreversible, not a reversible adiabat
- Opening a refrigerator in a closed room is shown to warm the room
- Larger temperature lift correctly shown to reduce COP
- Detailed phase-change enthalpy and calorimetry remain in Thermochemistry

## Copyright safety
- No source screenshots
- No source branding, watermarks, or page design
- No copied external figures
- No copied external numerical examples, wording, or solution text
- Handwritten refrigerator concept retained and independently typeset
- All enrichment, SVGs, animations, examples, problems, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart15LocalhostReview.tsx`
**SHA-256:** `a33e272c779b2a644a3e87491e03363a5162189efd0b5481e3867130c9ddd020`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1264 |
| Bytes | 54746 |
| Sections | 32 |
| SVGs | 5 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 16 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1264 lines; minimum 180 |
| Lesson sections | PASS | 32 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 5/5 |
| SVG titles | PASS | 5/5 |
| SVG descriptions | PASS | 5/5 |
| SVG viewBoxes | PASS | 11/5 |

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
