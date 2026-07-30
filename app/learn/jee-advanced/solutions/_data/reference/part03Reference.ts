import type { NoteBlock } from "../types";

export const part03Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Ideal mixing from combinatorial entropy",
    "paragraphs": [
      "For an ideal solution, molecules mix randomly without an energetic preference for like or unlike neighbours. The number of possible molecular arrangements increases enormously on mixing. Statistical thermodynamics converts this multiplicity increase into ΔS_mix=−RΣn_i ln x_i, which is positive for every genuine mixture because each ln x_i is negative.",
      "Since ΔH_mix=0 for an ideal solution, ΔG_mix=−TΔS_mix=RTΣn_i ln x_i is negative. The negative Gibbs energy is the reason miscible ideal liquids mix spontaneously. Chemical potential follows by differentiation: μ_i=μ_i*+RTlnx_i. Equating the liquid chemical potential with that of an ideal vapour gives Raoult’s law.",
      "The ideal model therefore connects three topics often learned separately: random mixing produces entropy, entropy lowers Gibbs energy, and the logarithmic chemical-potential term leads to vapour-pressure lowering. This chain is valuable in conceptual JEE questions."
    ],
    "equations": [
      "ΔS_mix=−RΣn_i ln x_i",
      "ΔG_mix=RTΣn_i ln x_i",
      "μ_i=μ_i*+RTlnx_i"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Raoult standard state, Henry standard state and limiting behaviour",
    "paragraphs": [
      "A component in a binary liquid can be viewed as solvent when abundant and solute when dilute. Near x_i=1, its activity approaches x_i and its partial pressure approaches x_ip_i°. Near x_i=0, the partial pressure often approaches K_Hx_i. The two limiting slopes generally differ in a nonideal solution.",
      "The Raoult standard state is the real pure liquid at the same temperature and pressure. The Henry standard state is a hypothetical state obtained by extrapolating the infinite-dilution tangent to unit mole fraction. Activity coefficients depend on which standard state is used, so γ values cannot be compared without specifying the convention.",
      "In most JEE problems, ideality is assumed and the distinction collapses. In advanced reasoning, however, a solute may obey Henry’s law even while the solvent approximately obeys Raoult’s law. This is the thermodynamic basis of the ideal-dilute solution rather than a logical inconsistency."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
