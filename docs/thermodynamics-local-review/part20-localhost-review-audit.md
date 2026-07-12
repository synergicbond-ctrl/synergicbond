# Thermodynamics Part 20 — Source Coverage Audit

## Student-facing title
Multistage Entropy, Ideal-Gas Mixing, Thermal Equilibration, and Retained Numericals

## Primary handwritten source range
Pages 139–147 of the primary handwritten Thermodynamics notes.

## Page 139 — retained multistage water problem

### Visible source statement
- Heading says “Calculate molar enthalpy change”
- Process shown:
  H2O(l), 27 °C, 1 atm
  → H2O(g), 127 °C, 5 atm
- Data:
  specific heat capacity of liquid water = 1.0 cal g⁻¹ K⁻¹
  latent heat of vaporisation at 100 °C and 1 atm = 540 cal g⁻¹
- Complete written source solution uses entropy equations rather than enthalpy equations

### Retained entropy path
A. Heat liquid water:
- 300 K → 373 K
- ΔS1 = 18(1.0) ln(373/300)
- ΔS1 = 3.920 cal mol⁻¹ K⁻¹

B. Vaporise at 373 K:
- ΔS2 = (540×18)/373
- ΔS2 = 26.059 cal mol⁻¹ K⁻¹

C. Heat vapour and raise pressure:
- 373 K, 1 atm → 400 K, 5 atm
- source uses Cp,m = 4R
- ΔS3 = 4R ln(400/373) − R ln5
- ΔS3 = −2.642 cal mol⁻¹ K⁻¹

### Total
- ΔSsystem = 27.337 cal mol⁻¹ K⁻¹
- ΔSsystem ≈ 114.4 J mol⁻¹ K⁻¹

### Scientific correction
- The source heading and written algebra disagree.
- The written route is correctly identified as an entropy calculation.
- Literal enthalpy change is separately noted as approximately:
  11.25 kcal mol⁻¹ under the source heat-capacity and ideal-vapour assumptions.
- System entropy is path independent.
- Surroundings entropy cannot be determined from endpoints alone because it requires the actual heat-transfer history and reservoir temperatures.
- The source’s attempted arbitrary-path qprocess argument is not used to define surroundings entropy.

## Page 140 — ideal-gas mixing

### Retained numerical
- 5 mol ideal gas A
- 10 mol ideal gas B
- same initial temperature and pressure
- xA = 1/3
- xB = 2/3

### Retained derivation
- ΔSmix = nA R ln[(nA+nB)/nA] + nB R ln[(nA+nB)/nB]
- equivalent:
  ΔSmix = −R(nA ln xA + nB ln xB)
- molar:
  ΔSmix,m = −R(xA ln xA + xB ln xB)

### Numerical completion
- ΔSmix = 79.38 J K⁻¹
- ΔSmix,m = 5.292 J mol⁻¹ K⁻¹

### Retained maximum-mixing question
- For fixed total amount of two distinct ideal gases:
  xA = xB = 1/2
  nA:nB = 1:1
- maximum molar value:
  ΔSmix,m,max = R ln2 = 5.763 J mol⁻¹ K⁻¹
- constraint clarified:
  equimolar maximum requires fixed total amount or the molar entropy function

## Page 141 — thermal equilibration

### Retained liquid problem
- 400 g liquid A
- cA = 2 cal g⁻¹ K⁻¹
- TA = 27 °C = 300 K
- 100 g liquid B
- cB = 4 cal g⁻¹ K⁻¹
- TB = 87 °C = 360 K

### Retained energy balance
- 100(4)(360−Tf) = 400(2)(Tf−300)
- Tf = 320 K

### Retained entropy calculation
- ΔSA = 400(2) ln(320/300)
- ΔSA = +51.631 cal K⁻¹
- ΔSB = 100(4) ln(320/360)
- ΔSB = −47.113 cal K⁻¹
- ΔStotal = +4.518 cal K⁻¹
- ΔStotal ≈ 18.90 J K⁻¹

### Scientific correction
The source says this is valid only for completely immiscible liquids with no volume change.
Refined statement:
- immiscibility is one sufficient condition
- general assumptions are:
  constant heat capacities
  adiabatic combined enclosure
  no phase change
  negligible boundary work
  negligible volume change
  no heat of mixing
  no additional composition entropy
- miscible non-ideal liquids require mixing enthalpy and entropy terms

### Retained two-block problem
- cold block at 300 K
- hot block at 400 K
- 1000 cal transferred from hot to cold
- ΔScold = +1000/300 = +3.333 cal K⁻¹
- ΔShot = −1000/400 = −2.500 cal K⁻¹
- ΔStotal = +0.833 cal K⁻¹
- ΔStotal ≈ 3.49 J K⁻¹

## Pages 142–144
- Source pages are visually blank except for isolated marks
- No readable educational content is present
- Nothing was invented or inferred from these pages

## Page 145 — retained neon adiabatic problem

### Source correction
- Visual source states 10 g of Ne, not He
- molar mass used in the source is 20 g mol⁻¹
- n = 0.5 mol

### Initial and final pressures
- P1 = 506.25 kPa
- T1 = 473 K
- P2 = 202.65 kPa

### Route A: reversible adiabatic
- ΔSsystem = 0
- ΔSsurroundings = 0
- ΔStotal = 0
- independently completed final temperature:
  T2 ≈ 328 K

### Route B: constant external pressure
- Pext = 202.65 kPa
- source energy balance retained:
  nCv,m(T2−T1) = −Pext(V2−V1)
- T2 = 359.48 K
- source result:
  ΔSsystem ≈ 0.957 J K⁻¹
- recalculated using the stated values:
  approximately 0.954 J K⁻¹
- ΔSsurroundings = 0
- ΔStotal = ΔSsystem

### Route C: free expansion
- q = 0
- w = 0
- ΔU = 0
- T2 = 473 K
- ΔSsurroundings = 0
- ΔSsystem = 0.5R ln(506.25/202.65)
- ΔSsystem ≈ 3.81 J K⁻¹

## Page 146
- Condensed-phase entropy relation:
  ΔS = nCv,m ln(T2/T1)
- qualitative isothermal versus adiabatic route comparison
- van der Waals entropy differential:
  dS = nCv,m dT/T + nR dV/(V−nb)
- This theory was developed fully in Parts 18–19
- It is retained here as context without unnecessary duplicate exposition

## Page 147 — retained van der Waals numerical
- one mole van der Waals gas
- T1 = 298 K
- V1 = 1 dm³
- T2 = 373 K
- V2 = 10 dm³
- b = 0.06 dm³ mol⁻¹
- Cv,m = 29 J mol⁻¹ K⁻¹

### Retained calculation
- ΔS = Cv,m ln(T2/T1) + R ln[(V2−b)/(V1−b)]
- ΔS = 29 ln(373/298) + 8.314 ln[(10−0.06)/(1−0.06)]
- ΔS = 26.12 J mol⁻¹ K⁻¹

## Page 147 — incomplete three-route fragment
The source contains a visible numerical solution but its original prompt is absent.

### Preserved visible values
Route I:
- ΔSsystem = +9.134 J K⁻¹
- ΔSsurroundings = −9.134 J K⁻¹
- ΔStotal = 0

Route II:
- ΔSsystem = +9.134 J K⁻¹
- qirr = qrev − 836.8 J
- ΔStotal = +2.808 J K⁻¹

Route III:
- ΔSsurroundings = 0
- ΔStotal = ΔSsystem
- ΔSsystem = +9.134 J K⁻¹

### Unclear-source safeguard
- Marked [UNCLEAR SETUP]
- Exact temperature, volumes, and external pressure are not reconstructed
- Only the safe inference is stated:
  9.134 J K⁻¹ = R ln3 for one mole

## Original visual system
- Animated multistage water entropy route
- Animated ideal-gas mixing chamber
- Binary molar mixing-entropy maximum graph
- Animated thermal equilibration of two bodies
- Animated three-route neon adiabatic comparison
- Original formula tables and source-fragment preservation card

## Original enrichment
- Gibbs-paradox/identical-gas safeguard
- multicomponent ideal-gas mixing formula
- fixed-total constraint for maximum mixing entropy
- heat-capacity-weighted final-temperature derivation
- arithmetic-mean/geometric-mean interpretation of positive thermal entropy generation
- ideal-gas mixing properties:
  ΔUmix = 0
  ΔHmix = 0
- sixteen original JEE Advanced problems with solutions
- eight misconception corrections
- four daily-life applications

## Thermodynamics–Thermochemistry boundary
- Transition enthalpy and heat capacities are used as numerical inputs only
- Detailed latent-heat, calorimetry, and molecular heat-capacity theory remain in Thermochemistry

## Boundary to Part 21
Page 148 begins:
- comparison of absolute entropies of substances
- dissolution trends
- dissolved gases
- mass and softness trends
Subsequent pages move into:
- statistical interpretation
- third law
- residual entropy
These topics are reserved for the next sequential part.

## Copyright safety
- No source screenshots
- No source branding, watermark, or copied page design
- No copied external figures
- No copied external numerical examples, wording, or solutions
- Every visible handwritten numerical is independently typeset and audited
- All SVGs, animations, added explanations, questions, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart20LocalhostReview.tsx`
**SHA-256:** `ca87e5478c765f8b04c191d978268a07dbc3baae713df850019c23df3729cde5`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1216 |
| Bytes | 53347 |
| Sections | 24 |
| SVGs | 5 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 16 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1216 lines; minimum 180 |
| Lesson sections | PASS | 24 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 5/5 |
| SVG titles | PASS | 5/5 |
| SVG descriptions | PASS | 5/5 |
| SVG viewBoxes | PASS | 9/5 |

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
