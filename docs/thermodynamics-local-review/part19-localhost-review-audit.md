# Thermodynamics Part 19 — Source Coverage Audit

## Student-facing title
Entropy Changes of Ideal Gases

## Primary handwritten source range
Pages 131–138 of the primary handwritten Thermodynamics notes.

## Page 131 coverage — ideal gas T–V and T–P variation

### T–V form
- starting relation:
  dS = δqrev/T = (dU + P dV)/T
- ideal-gas internal energy:
  dU = nCv,m dT
- ideal-gas pressure:
  P = nRT/V
- retained differential:
  dS = nCv,m dT/T + nR dV/V
- retained constant-Cv integrated form:
  ΔS = nCv,m ln(T2/T1) + nR ln(V2/V1)

### Constant volume
- V2 = V1
- retained result:
  ΔS = nCv,m ln(T2/T1)

### Temperature-dependent Cv,m
- retained polynomial model:
  Cv,m = a + bT + cT²
- completed integration:
  ΔS = n[a ln(T2/T1) + b(T2−T1) + c(T2²−T1²)/2]

### T–P form
- ideal-gas relation:
  dV/V = dT/T − dP/P
- retained differential:
  dS = nCp,m dT/T − nR dP/P
- retained constant-Cp integrated form:
  ΔS = nCp,m ln(T2/T1) − nR ln(P2/P1)

## Page 132 coverage — isobaric temperature variation
- dP = 0
- reversible heat at constant pressure:
  δqrev = dH = nCp,m dT
- retained differential:
  dS = nCp,m dT/T
- constant Cp,m:
  ΔS = nCp,m ln(T2/T1)
- temperature-dependent Cp,m:
  Cp,m = a + bT + cT²
- completed integration:
  ΔS = n[a ln(T2/T1) + b(T2−T1) + c(T2²−T1²)/2]

## Page 133 coverage — isothermal ideal-gas entropy

### General system result
- retained:
  ΔSsys = nR ln(V2/V1)
- equivalent pressure form added:
  ΔSsys = −nR ln(P2/P1)

### Reversible process
- ΔStotal = 0
- qrev = −wrev = nRT ln(V2/V1)
- ΔSsys = qrev/T
- ΔSsurr = −qrev/T
- exact cancellation

### Irreversible free expansion
- Pext = 0
- w = 0
- q = 0
- ΔU = 0
- ideal-gas ΔT = 0
- system entropy remains:
  ΔSsys = nR ln(V2/V1)
- ΔSsurr = 0
- ΔStotal = ΔSsys > 0
- importance of reversible reference heat retained

## Page 134 coverage — intermediate irreversible isothermal expansion
- same endpoint system entropy:
  ΔSsys = nR ln(V2/V1)
- ideal-gas isothermal energy balance:
  ΔU = 0
  qirr = −wirr
- constant external pressure:
  qirr = Pext(V2−V1)
- surroundings:
  ΔSsurr = −Pext(V2−V1)/T
- total:
  ΔStotal = nR ln(V2/V1) − Pext(V2−V1)/T > 0
- special final-equilibrium form:
  nR[ln x − (1−1/x)] > 0

## Page 135 coverage — adiabatic ideal-gas entropy
- q = 0
- ΔSsurr = 0 for insulated outer boundary
- retained endpoint T–V form:
  ΔS = nCv,m ln(T2/T1) + nR ln(V2/V1)
- retained endpoint T–P form:
  ΔS = nCp,m ln(T2/T1) − nR ln(P2/P1)
- reversible adiabatic:
  ΔStotal = 0
  ΔSsurr = 0
  ΔSsys = 0
- reversible adiabatic is isentropic
- physical cancellation of temperature and volume contributions
- use of TV^(γ−1) = constant to prove cancellation

## Pages 136–137 coverage — irreversible adiabatic and free expansion
- irreversible expansion and compression:
  ΔSsys > 0
  ΔSsurr = 0
  ΔStotal = ΔSsys > 0
- endpoint entropy expressions retained
- comparison with reversible endpoint temperatures
- irreversible expansion:
  less work output and less cooling than reversible expansion for the same final volume
- irreversible compression:
  greater work input and greater heating than reversible compression for the same final volume
- source phrase “heat produced” scientifically corrected:
  no heat crosses an adiabatic boundary; work raises internal energy
- ideal-gas free expansion:
  Pext = 0
  q = 0
  w = 0
  ΔU = 0
  ΔT = 0
  ΔSsys = nR ln(V2/V1) > 0
  ΔSsurr = 0
  ΔStotal > 0
- explicit explanation that qactual = 0 does not imply ∫δqrev/T = 0

## Page 138 coverage — entropy process summary
- isothermal irreversible free expansion
- isothermal intermediate expansion
- reversible isothermal process
- adiabatic irreversible process
- reversible adiabatic process
- system, surroundings, and total entropy columns reconstructed as a complete formula matrix

## Independent JEE Advanced enrichment
- reversible and irreversible isochoric heating balances
- reversible and irreversible isobaric heating balances
- boundary-reservoir entropy calculations
- one-step expansion and compression inequalities
- temperature-dependent heat-capacity integral visual
- route-independence and universe-entropy comparison
- general T–V/T–P equivalence proof

## Original visual system
- animated T–V/T–P coordinate map
- animated C(T)/T integration graph
- animated reversible/one-step/free isothermal routes
- animated reversible/irreversible adiabatic contribution comparison
- process formula tables and entropy-balance matrices

## Original worked examples
1. general T–V ideal-gas entropy change
2. temperature-dependent Cv,m at constant volume
3. general T–P entropy change
4. three isothermal routes between identical endpoints
5. irreversible adiabatic constant-external-pressure expansion
6. irreversible isochoric heating by a single reservoir

## Original assessment
- sixteen JEE Advanced problems with complete solutions
- eight misconception corrections
- four daily-life applications

## Handwritten-example audit
- Pages 131–138 contain derivations, formulas, physical explanations, and a process summary.
- No explicit numerical handwritten problem appears in this page range.
- Therefore no handwritten numerical example has been omitted.
- All numerical examples added here are original Synergic Bond constructions.

## Scientific corrections and safeguards
- dS equality restricted to reversible heat
- heat-capacity constants distinguished from temperature-dependent functions
- free expansion identified as irreversible despite reversible reference-path evaluation
- adiabatic distinguished from isentropic
- adiabatic compression heating attributed to work, not heat transfer
- surroundings entropy cancellation restricted to reversible total processes
- system entropy endpoint equality separated from universe entropy generation
- detailed heat-capacity molecular theory remains in Thermochemistry

## Boundary to Part 20
Page 139 begins a multistage entropy problem involving heating, vaporisation, and pressure change.
Subsequent pages continue with:
- entropy of mixing ideal gases
- maximum entropy of mixing
- mixing bodies at different temperatures
- additional entropy numericals
These topics are reserved for Part 20.

## Copyright safety
- No source screenshots
- No source branding, watermark, or copied page design
- No copied external figures
- No copied external numerical examples, wording, or solutions
- All SVGs, animations, examples, questions, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart19LocalhostReview.tsx`
**SHA-256:** `b26fbb9424395002973a3bac26cac1f7e68d405b506670c3830aecf6010c8fb6`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1115 |
| Bytes | 48136 |
| Sections | 30 |
| SVGs | 4 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 22 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1115 lines; minimum 180 |
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
