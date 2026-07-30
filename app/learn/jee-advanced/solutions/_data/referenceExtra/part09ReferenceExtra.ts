import type { NoteBlock } from "../types";

export const part09ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Rayleigh equation for differential batch distillation",
    "paragraphs": [
      "During differential or Rayleigh distillation, an infinitesimal vapour is removed continuously from a well-mixed boiling liquid. Because the pot composition changes, overall enrichment cannot be found from one equilibrium stage. Material balance leads to ln(F/W)=∫_{x_W}^{x_F} dx/(y*(x)−x), where F is initial liquid, W is residue and y*(x) is equilibrium vapour composition.",
      "The equation predicts residue composition after a specified fraction has been distilled. The average distillate composition follows from total component balance. It differs from the instantaneous vapour composition at either the beginning or end.",
      "The source notes discuss simple distillation qualitatively. Rayleigh’s equation is the reference-depth quantitative extension and shows why collected distillate composition changes throughout a batch."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "ln(F/W)=∫ dx/[y*(x)−x]"
    ]
  }
];
