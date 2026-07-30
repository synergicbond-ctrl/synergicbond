import type { NoteBlock } from "../types";

export const part12Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Chemical-potential interpretation of boiling-point elevation",
    "paragraphs": [
      "At a fixed pressure, pure liquid solvent and its vapour have equal chemical potential at T_b°. Adding a nonvolatile solute lowers the liquid-solvent chemical potential by RTlnx₁ while leaving the pure vapour reference nearly unchanged. The equality therefore shifts to a higher temperature.",
      "The derivation assumes the solute is absent from the vapour. If the solute is volatile, both vapour-phase components must be included and the observed boiling behaviour is described by a full VLE diagram rather than the simple colligative law. If the solute decomposes or reacts, the analytical molality does not equal particle molality.",
      "The formula ΔT_b=K_bm is a first-order dilute result. At higher concentration, K_b is not truly constant because activities, partial molar enthalpies and temperature changes become composition dependent."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Ebullioscopy: measurement strategy and common error sources",
    "paragraphs": [
      "In ebullioscopy, the measured boiling temperature must correspond to equilibrium at a known pressure. Atmospheric pressure variations shift both pure-solvent and solution boiling points, so a differential measurement under the same pressure is preferable. Superheating and bumping can produce unstable readings; boiling chips or controlled electrical heating reduce these errors.",
      "Solvent evaporation during measurement concentrates the solution and raises the observed temperature. A nonvolatile solute must not decompose, volatilise or react with solvent. For high-molar-mass solutes, the elevation may be too small for accurate molar-mass work, making osmometry preferable.",
      "A useful consistency check compares molar mass from boiling-point elevation with that from freezing-point depression or osmotic pressure. Disagreement may reveal association, dissociation or experimental nonideality rather than arithmetic error."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
