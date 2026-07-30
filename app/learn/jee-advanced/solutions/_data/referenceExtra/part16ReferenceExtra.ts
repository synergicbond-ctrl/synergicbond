import type { NoteBlock } from "../types";

export const part16ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Debye–Hückel limiting law and effective particle behaviour",
    "paragraphs": [
      "Electrolyte activity coefficients decrease below unity at low concentration because each ion is surrounded statistically by an ionic atmosphere of opposite net charge. The Debye–Hückel limiting law gives logγ_i=−Az_i²√I, where I=½Σc_jz_j² is ionic strength.",
      "The effect grows with charge squared, explaining why MgSO₄ and multivalent salts show stronger deviations than 1:1 electrolytes at the same molarity. Colligative properties involve the solvent activity and a mean ionic description rather than independent single-ion activities, but the same electrostatic interactions reduce the ideal particle response.",
      "JEE problems usually encode all this in an observed i. The law provides the deeper reason why dilution drives i toward the stoichiometric ion count and why high-charge salts deviate most strongly."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "I=½Σc_jz_j²",
      "logγ_i=−Az_i²√I"
    ]
  }
];
