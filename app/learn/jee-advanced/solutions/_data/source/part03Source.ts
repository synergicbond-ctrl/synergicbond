import type { NoteBlock } from "../types";

export const part03Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Dalton’s law for the vapour above a binary liquid",
    "paragraphs": [
      "A binary liquid solution containing volatile components A and B produces a vapour in which both components are present. The total vapour pressure is the sum of their partial pressures. The gas-phase mole fraction is therefore y_A = p_A/P and y_B = p_B/P.",
      "The vapour composition generally differs from the liquid composition. The more volatile component, identified by the larger pure vapour pressure at the same temperature, is enriched in the vapour. This enrichment is the basis of distillation."
    ],
    "equations": [
      "P = p_A+p_B",
      "p_A = y_AP and p_B = y_BP",
      "y_A+y_B=1"
    ],
    "sourcePages": "Page 9",
    "visual": "raoult"
  },
  {
    "kind": "theory",
    "title": "Raoult’s law and total pressure of an ideal binary solution",
    "paragraphs": [
      "For an ideal solution, the partial vapour pressure of each component equals its liquid-phase mole fraction multiplied by its pure-component vapour pressure at the same temperature. The pure vapour pressure is the pressure above the pure liquid, not a pressure measured at another temperature.",
      "Adding the two partial pressures gives a linear total-pressure relation. If p_A° exceeds p_B°, increasing x_A increases P with slope p_A°−p_B°. At x_A=0 the pressure equals p_B°, and at x_A=1 it equals p_A°."
    ],
    "equations": [
      "p_A=x_Ap_A°",
      "p_B=x_Bp_B°",
      "P=x_Ap_A°+(1−x_A)p_B° = p_B°+x_A(p_A°−p_B°)"
    ],
    "sourcePages": "Pages 9–10",
    "visual": "raoult"
  },
  {
    "kind": "derivation",
    "title": "Molecular rate interpretation of Raoult’s law",
    "introduction": "The source notebook derives the proportionality by balancing evaporation and condensation rates.",
    "steps": [
      "At a fixed temperature, the evaporation rate of A from the solution is proportional to the fraction x_A of surface sites occupied by A: r_e = k_ex_A.",
      "The condensation rate of A is proportional to its partial pressure: r_c = k_cp_A.",
      "At equilibrium r_e=r_c, so p_A=(k_e/k_c)x_A.",
      "For pure A, x_A=1 and p_A=p_A°, hence k_e/k_c=p_A°."
    ],
    "result": "p_A=x_Ap_A°",
    "assumptions": [
      "Random molecular distribution at the surface.",
      "A–A, B–B and A–B environments are sufficiently similar for ideal behaviour.",
      "Dynamic liquid–vapour equilibrium."
    ],
    "sourcePages": "Pages 10–11"
  },
  {
    "kind": "theory",
    "title": "Thermodynamic conditions for an ideal solution",
    "paragraphs": [
      "An ideal solution obeys Raoult’s law for every component over the entire composition range. This requires unlike attractions to be approximately equal to like attractions: A–B ≈ A–A ≈ B–B. Mixing then does not produce a significant enthalpy change or volume change.",
      "The source lists ΔV_mix=0, ΔH_mix=0, ΔU_mix=0 and positive entropy and Gibbs-energy driving terms. For spontaneous ideal mixing at constant temperature and pressure, ΔS_mix is positive and ΔG_mix is negative. Molecules do not dissociate or associate on mixing.",
      "Real pairs that approach ideality are chemically similar in size, shape and intermolecular force, such as benzene–toluene or neighbouring normal alkanes. Perfect ideality is an approximation."
    ],
    "equations": [
      "ΔH_mix=0",
      "ΔV_mix=0",
      "ΔS_mix=−RΣnᵢlnxᵢ > 0",
      "ΔG_mix=RTΣnᵢlnxᵢ < 0"
    ],
    "sourcePages": "Pages 11–12"
  },
  {
    "kind": "theory",
    "title": "Ideal-solution examples and restrictions",
    "paragraphs": [
      "The source examples pair liquids of similar molecular structure: methanol–ethanol, benzene–toluene, n-hexane–n-heptane and closely related chlorinated or brominated hydrocarbons. The guiding idea is similarity of cohesive energy density and molecular size.",
      "A solution of a solid in a liquid can be treated as ideally dilute only in a restricted sense, especially when the solute is nonvolatile. Raoult’s law for the solvent may hold approximately at low solute concentration even though the solute standard state is better described by Henry’s law."
    ],
    "sourcePages": "Page 12"
  }
];
