import type { NoteBlock } from "../types";

export const part04Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Excess functions quantify non-ideality",
    "paragraphs": [
      "A real solution property can be written as an ideal contribution plus an excess property. For example, G^E=G_real−G_ideal at the same temperature, pressure and composition. Activity coefficients are related to partial molar excess Gibbs energies through RTlnγ_i=Ḡ_i^E. Positive deviations usually correspond to γ_i>1 and positive excess Gibbs energy over much of the composition range; negative deviations often correspond to γ_i<1.",
      "Excess enthalpy H^E is measured calorimetrically and excess volume V^E from density. Positive H^E indicates endothermic mixing, while negative H^E indicates exothermic mixing. The signs of H^E and V^E often support the simple intermolecular explanation, but they are not mathematically required to have the same sign in every real system.",
      "For JEE Advanced, the practical rule is to compare A–B attraction with like attractions and then verify using ΔH_mix, ΔV_mix and vapour-pressure data. When indicators conflict, experimental vapour pressure is decisive for the sign of Raoult-law deviation."
    ],
    "equations": [
      "G^E=G_real−G_ideal",
      "RTlnγ_i=Ḡ_i^E"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Molecular origins of positive and negative deviations",
    "paragraphs": [
      "Positive deviation can result when mixing disrupts an associated structure. Ethanol molecules hydrogen-bond with one another and water has an extended network; mixing disturbs both networks and creates new contacts that are not uniformly equivalent. Acetone mixed with carbon disulfide loses some dipole–dipole stabilisation without gaining equally strong unlike attractions.",
      "Negative deviation can arise from specific complex formation. Chloroform’s hydrogen is polarised by three chlorine atoms and can interact with a carbonyl oxygen. Phenol and aniline form strong hydrogen-bonded donor–acceptor pairs. Nitric acid and water exhibit strong ion–dipole and hydrogen-bonding interactions over relevant compositions.",
      "Molecular size and shape also matter. Even molecules with similar polarity may pack differently, creating positive or negative excess volume. Therefore the phrase ‘like dissolves like’ predicts miscibility more reliably than it predicts the exact sign or magnitude of deviation."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
