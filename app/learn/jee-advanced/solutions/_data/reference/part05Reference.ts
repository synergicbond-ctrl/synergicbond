import type { NoteBlock } from "../types";

export const part05Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "K-values and relative volatility as a compact VLE language",
    "paragraphs": [
      "The equilibrium ratio K_i=y_i/x_i expresses how strongly component i prefers the vapour relative to the liquid. For an ideal solution at low pressure, K_i=p_i°/P. The relative volatility α_AB=K_A/K_B reduces to p_A°/p_B°. If α_AB>1, A is more volatile and its vapour mole fraction exceeds its liquid mole fraction.",
      "For a binary ideal system with constant α, y_A=αx_A/[1+(α−1)x_A]. This curved x–y relation immediately shows enrichment and is widely used in distillation calculations. When α is close to one, y and x are close and separation is difficult. When α is large, a single equilibrium stage gives strong enrichment.",
      "In real systems, K_i depends on composition through activity coefficients and may depend on pressure through vapour fugacity coefficients. JEE problems generally use the ideal form, but the K-value language makes multistage reasoning much shorter."
    ],
    "equations": [
      "K_i=y_i/x_i",
      "Ideal low-pressure K_i=p_i°/P",
      "α_AB=K_A/K_B",
      "y_A=αx_A/[1+(α−1)x_A]"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Inverse VLE problems and data sufficiency",
    "paragraphs": [
      "A binary ideal VLE problem may ask for two pure vapour pressures, a liquid composition, a vapour composition or total pressure. Count unknowns and independent equations before substituting. Raoult’s law gives two component equations, Dalton’s law gives P=p_A+p_B and each phase has a mole-fraction summation constraint. Only independent relations should be counted.",
      "Two total-pressure measurements at different known liquid compositions are sufficient to determine p_A° and p_B°. One equilibrium state with known x, y and P is also sufficient because p_A°=y_AP/x_A and p_B°=y_BP/x_B. If only x and P are given, pure pressures cannot both be determined without additional information.",
      "A quick physical check follows every inverse solution: pure vapour pressures must be positive; total pressure must lie between them for an ideal binary liquid; and the vapour must be enriched in the component with larger pure vapour pressure."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
