# Thermodynamics Part 09 — Source Coverage Audit

## Student-facing title
Isothermal Ideal-Gas Processes, Reversible/Irreversible Work, Free Expansion, and Multistep Paths

## Primary handwritten sequence coverage
- Isothermal expansion or compression of an ideal gas
- ΔT = 0
- ΔU = 0
- Minimal ideal-gas ΔH = 0 result
- q = −w
- Reversible process
- Pext approaches Pint in the reversible limit
- Work integral:
  wrev = −∫P dV
- Ideal-gas substitution:
  P = nRT/V
- Full derivation:
  wrev = −nRT ln(V2/V1)
- Pressure-ratio form:
  wrev = −nRT ln(P1/P2)
- Common-log form:
  wrev = −2.303nRT log(V2/V1)
- Irreversible process against constant external pressure
- wirr = −Pext(V2−V1)
- Free expansion into vacuum
- Pext = 0 and w = 0
- Work-magnitude comparison for expansion and compression
- Reversible expansion produces maximum expansion-work magnitude
- Reversible compression requires minimum compression-work input
- Handwritten numerical example retained:
  four moles of ideal gas, 27°C, 10 atm to 5 atm
  (i) reversible
  (ii) irreversible against 5 atm
- Full results:
  ΔU = 0
  ΔH = 0
  wrev ≈ −6.92 kJ
  wirr ≈ −4.99 kJ
  corresponding q values with opposite signs to work

## NCERT foundation incorporated independently
- Reversible isothermal ideal-gas logarithmic work
- Constant-external-pressure work
- Free expansion
- Isothermal ideal-gas ΔU = 0
- q = −w for isothermal ideal-gas paths
- Constant-volume/free-expansion reasoning
- No NCERT wording, layout, figures, or numerical problem reproduced

## Advanced enrichment
- Thermal-reservoir energy-replacement animation
- Reversible/multistep/one-step/free path comparison
- One-step, three-step and many-step piston-weight animation
- Complete derivation spine
- Path ranking in expansion and compression
- Riemann-sum interpretation of multistep work
- Maximum-work versus zero-power distinction
- Real-gas free-expansion warning
- Path-result matrix
- Graph intelligence cards
- Four daily-life applications
- Twelve original JEE Advanced problems with solutions
- Full trap detector

## Scientific corrections and safeguards
- Isothermal does not mean adiabatic
- ΔU = 0 does not imply q = w = 0 individually
- Reversible motion uses an infinitesimal pressure difference, not exactly zero driving force
- Free expansion is irreversible despite zero work
- Isothermal ΔU = 0 restricted to ideal gas of fixed composition
- Actual irreversible work uses Pext
- More finite steps increase expansion-work magnitude toward the reversible limit
- Reversible maximum work is not maximum power
- Real-gas insulated free expansion may change temperature
- Detailed enthalpy theory remains outside Thermodynamics; only the minimal ideal-gas isothermal result is used

## Copyright safety
- No source screenshots
- No source branding or watermarks
- No copied layout or figures
- No copied external numerical problems or solution wording
- Primary handwritten example retained because it belongs to the user's own source
- All added theory, SVGs, animations, examples, questions, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart09LocalhostReview.tsx`
**SHA-256:** `34144a812aee4f254ef8cb49bc3a81b8671544e62c1e387751cb746ed9a02455`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 747 |
| Bytes | 28224 |
| Sections | 28 |
| SVGs | 3 |
| Figure wrappers | 2 |
| Figcaptions | 2 |
| Applied input–solution pairs | 10 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 747 lines; minimum 450 |
| Lesson sections | PASS | 28 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 3/3 |
| SVG titles | PASS | 3/3 |
| SVG descriptions | PASS | 3/3 |
| SVG viewBoxes | PASS | 3/3 |
| Visible applied material | PASS | 10 pairs; minimum 4 |
| Required topic anchors | PASS | 6/6 |

### Topic anchors

| Topic | Result |
|---|---|
| isothermal ideal gas | PASS |
| reversible work | PASS |
| irreversible work | PASS |
| free expansion | PASS |
| multistep work | PASS |
| four-mole example | PASS |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
