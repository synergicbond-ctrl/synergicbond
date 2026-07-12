# Thermodynamics Part 14 — Source Coverage Audit

## Student-facing title
Heat Engines, Carnot Cycle, Carnot Theorem, and Working-Fluid Independence

## Primary handwritten sequence coverage
- Carnot cycle definition
- Theoretical reversible cycle designed for maximum heat-engine efficiency
- Fixed mass of working gas
- Four reversible processes:
  1. isothermal reversible expansion
  2. adiabatic reversible expansion
  3. isothermal reversible compression
  4. adiabatic reversible compression
- Heat and work on each leg
- Adiabatic heat-transfer values equal to zero
- Cancellation of ideal-gas adiabatic work contributions over the cycle
- Reversible isothermal work expressions
- Use of the two adiabatic relations to show equal isothermal volume ratios
- Net work derivation
- Efficiency as work output divided by heat absorbed from the hot source
- Carnot efficiency:
  η = 1 − TC/TH
- Efficiency depends only on source and sink temperatures
- 100% efficiency impossibility
- Reversible engine efficiency exceeds irreversible engine efficiency between the same reservoirs
- Maximum expansion work and minimum compression work in reversible processes
- Raising source temperature increases efficiency
- Lowering sink temperature increases efficiency
- Equal absolute temperature changes:
  lowering sink temperature has the greater effect
- Carnot theorem
- All reversible engines between the same temperatures have equal efficiency
- Carnot efficiency is independent of working-fluid nature
- Ideal refrigerator introductory direction retained as a bridge to the next part

## Retained handwritten problem
### van der Waals working substance
Prove that the Carnot efficiency is unchanged when the working fluid obeys:
(P + an²/V²)(V−nb) = nRT

Included derivation:
- reversible isothermal entropy change:
  ΔS = nR ln[(V2−nb)/(V1−nb)]
- QH = nRTH ln[(V2−nb)/(V1−nb)]
- QC = nRTC ln[(V3−nb)/(V4−nb)]
- reversible adiabatic relation:
  T(V−nb)^(R/CV,m) = constant
- equality:
  (V2−nb)/(V1−nb) = (V3−nb)/(V4−nb)
- final result:
  QC/QH = TC/TH
  η = 1 − TC/TH
- independence from both van der Waals parameters a and b explained

## Original enrichment
- Animated heat-engine source/engine/sink diagram
- Animated four-stage piston sequence
- Original P–V Carnot loop
- Original T–S Carnot rectangle
- Six-card efficiency derivation
- Temperature-sensitivity graphic
- Carnot-theorem cards
- Real-engine versus reversible-engine table
- Four daily-life applications
- Fourteen original JEE Advanced problems with solutions
- Full trap detector

## Scientific corrections and safeguards
- Engine heat quantities QH and QC clearly treated as positive magnitudes
- Chemistry work sign distinguished from engine-output convention
- Carnot temperatures explicitly required in kelvin
- 100% efficiency conditions stated correctly:
  TC = 0 K for finite TH, or limiting TH → ∞
- The reversible limit identified as maximum efficiency, not maximum power
- All reversible engines equal only when reservoir temperatures are the same
- Real engines cannot exceed the Carnot ceiling
- Finite temperature differences identified as external irreversibility
- Working-fluid independence stated for a completely reversible cycle
- The attraction parameter a cancellation is explained through reversible heat and entropy, not guessed

## Source-order and chapter-boundary audit
- Pages 113–119 of the primary handwritten notes are covered.
- Page 120 begins the entropy/state-function transition and is reserved for the next Thermodynamics part.
- Refrigeration is introduced only briefly here because the detailed refrigerator and heat-pump treatment follows in the next sequence.
- No detailed Thermochemistry material is duplicated.

## Copyright safety
- No source screenshots
- No source branding, watermarks, or page design
- No copied external figures
- No copied external numerical problem wording or solution text
- User-owned handwritten derivation and van der Waals problem retained and independently typeset
- All added theory, SVGs, animations, questions, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart14LocalhostReview.tsx`
**SHA-256:** `793f54df0fb4461543a9163089723a647638202cd7629164e273127fc00086a7`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1068 |
| Bytes | 49737 |
| Sections | 30 |
| SVGs | 5 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 14 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1068 lines; minimum 180 |
| Lesson sections | PASS | 30 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 5/5 |
| SVG titles | PASS | 5/5 |
| SVG descriptions | PASS | 5/5 |
| SVG viewBoxes | PASS | 14/5 |

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
