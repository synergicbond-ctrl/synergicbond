# Thermodynamics Part 10 — Source Coverage Audit

## Student-facing title
Reversible and Irreversible Adiabatic Ideal-Gas Processes

## Primary handwritten sequence coverage
- Adiabatic expansion or compression of an ideal gas
- q = 0
- ΔU = w
- ΔU = nCv,m(T2−T1)
- Minimal ideal-gas ΔH = nCp,m(T2−T1)
- Cp,m − Cv,m = R
- γ = Cp,m/Cv,m
- Cv,m = R/(γ−1)
- Cp,m = γR/(γ−1)
- Full reversible adiabatic derivation
- TV^(γ−1) = constant
- PV^γ = constant
- T^γ P^(1−γ) = constant
- Endpoint forms involving T, P and V
- Reversible adiabatic work:
  - nCv,m(T2−T1)
  - nR(T2−T1)/(γ−1)
  - (P2V2−P1V1)/(γ−1)
- Reversible versus irreversible adiabatic expansion
- Reversible adiabatic versus reversible isothermal graphs
- P–V slope comparison
- Temperature fall during expansion
- Temperature rise during compression
- Constant-external-pressure irreversible equation
- Adiabatic free expansion
- Ideal-gas free expansion is also isothermal
- Real-gas free-expansion temperature caveat
- Same-final-volume temperature and work comparison

## Retained handwritten examples
### Example 1
Two moles of monatomic ideal gas:
- initial volume 5.0 L
- initial temperature 127°C = 400 K
- final volume 40.0 L
- routes:
  1. reversible adiabatic
  2. constant Pext = 0.10 atm
  3. free expansion
- complete calculations retained:
  - reversible T2 = 100 K
  - reversible ΔU = w ≈ −7.48 kJ
  - reversible minimal ΔH ≈ −12.47 kJ
  - one-step w = ΔU ≈ −0.355 kJ
  - one-step T2 ≈ 385.8 K
  - one-step minimal ΔH ≈ −0.591 kJ
  - free q = w = ΔU = ΔT = ΔH = 0
- scientific endpoint clarification added for the specified 40 L stop

### Example 2
Five moles of monatomic ideal gas:
- initial pressure 12 atm
- final equilibrium pressure 1 atm
- constant external pressure 1 atm
- initial temperature 27°C = 300 K
- complete calculations retained:
  - T2 = 190 K
  - q = 0
  - w = ΔU ≈ −6.86 kJ
  - minimal ΔH ≈ −11.43 kJ

## Original enrichment
- Animated insulated piston showing expansion cooling and compression heating
- Six-step derivation ladder
- Heat-capacity-ratio cards
- Animated P–V, T–V and T–P comparison
- Animated reversible/one-step/free path comparison
- Equation-validity boundary
- Work and temperature ranking
- Result matrix
- Four daily-life application cards
- Twelve original JEE Advanced problems with solutions
- Full trap detector

## Scientific corrections and safeguards
- Adiabatic is defined by q = 0, not by constant temperature
- Adiabatic is not automatically isentropic
- Poisson relations restricted to reversible ideal-gas paths
- Reversible path uses an infinitesimal pressure difference
- Abrupt irreversible paths use actual Pext and endpoint energy balance
- Free expansion is irreversible despite zero work
- Real-gas free expansion may change temperature
- Reversible adiabat identified as steeper than isotherm
- Isothermal-versus-adiabatic work comparison states that final states differ
- Constant γ values treated as approximations over a temperature range
- Detailed heat-capacity and enthalpy theory remains in Thermochemistry; only process-essential relations appear here

## Copyright safety
- No source screenshots
- No source branding, watermarks, or page design
- No copied external diagrams
- No copied external numerical problem wording or solution text
- User-owned handwritten examples retained and independently typeset
- All added theory, SVGs, animations, practice questions, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart10LocalhostReview.tsx`
**SHA-256:** `842d1ce4ff60a24d58949c7bbb6f879a1e0a56f487442ffe6b90e5f13ec29117`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1201 |
| Bytes | 48445 |
| Sections | 30 |
| SVGs | 3 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 12 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1201 lines; minimum 180 |
| Lesson sections | PASS | 30 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 3/3 |
| SVG titles | PASS | 3/3 |
| SVG descriptions | PASS | 3/3 |
| SVG viewBoxes | PASS | 7/3 |

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
