import type { NoteBlock } from "../types";

export const part17Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "A decision tree for integrated liquid-solution problems",
    "paragraphs": [
      "Begin by identifying the equilibrium: gas dissolved in liquid suggests Henry’s law; two volatile liquids suggest Raoult, Dalton and VLE; a nonvolatile solute suggests a colligative relation; a membrane suggests osmotic pressure. Then identify the required composition basis. Henry and Raoult usually require mole fraction, boiling and freezing laws require molality, and osmotic pressure requires particle molarity.",
      "Next test for particle change. Electrolytes, acids in nonpolar solvents and polymers may need a van’t Hoff factor or association model. Test whether the solution is dilute enough for the stated approximation. In VLE, decide whether the known phase is liquid or vapour before choosing bubble or dew equations.",
      "Finally perform physical checks: mole fractions lie between zero and one and sum to one; total ideal vapour pressure lies between pure vapour pressures; vapour is richer in the more volatile component; phase fractions lie between zero and one; ΔT_b and π are positive; solution freezing point is lower than pure solvent."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Cross-property consistency as an advanced diagnostic",
    "paragraphs": [
      "If the same dilute solution is examined by vapour-pressure lowering, boiling-point elevation, freezing-point depression and osmotic pressure, all four should imply the same effective particle concentration. Relative lowering gives x₂, ΔT_b/K_b and ΔT_f/K_f give particle molality, and π/RT gives particle molarity.",
      "After converting concentration bases using density, disagreement can reveal association, dissociation, volatility or experimental error. A volatile solute invalidates the one-component vapour-pressure lowering formula. A solute entering the solid phase invalidates simple cryoscopy. A leaky membrane invalidates ideal osmometry.",
      "Integrated JEE problems often hide one inconsistent measurement. Rather than forcing every formula, state the assumptions behind each property and identify which assumption fails. This is the reasoning model used in the final solved workshop."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
