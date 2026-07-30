import type { NoteBlock } from "../types";

export const part05ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Separation factor and single-stage enrichment limits",
    "paragraphs": [
      "For a binary equilibrium stage, the separation factor is S=(y_A/y_B)/(x_A/x_B)=α_AB. It states how much the A-to-B ratio changes in one ideal vaporisation step. If α=2, a liquid ratio of 1:3 becomes a vapour ratio of 2:3, not a pure product. Repeated stages are needed for high purity.",
      "When relative volatility varies with composition, each stage has a different enrichment factor. Near an azeotrope α approaches one because x=y. The number of stages required then grows sharply and ordinary distillation cannot cross the azeotropic composition.",
      "A good problem-solving check is to calculate the liquid and vapour odds ratios x/(1−x) and y/(1−y). Their ratio should equal α for an ideal binary system. This often simplifies repeated-condensation calculations more than working directly with mole fractions."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "S=α=(y_A/y_B)/(x_A/x_B)",
      "y_A/(1−y_A)=αx_A/(1−x_A)"
    ]
  }
];
