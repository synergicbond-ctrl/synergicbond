import type { NoteBlock } from "../types";

export const part03ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Gibbs–Duhem test for self-consistent vapour-pressure data",
    "paragraphs": [
      "In a binary solution, activity coefficients cannot be assigned independently. At fixed temperature and pressure, x_A dlnγ_A+x_B dlnγ_B=0. Experimental partial-pressure data that violate this relation are thermodynamically inconsistent, often because of measurement error or incomplete equilibrium.",
      "For an ideal solution γ_A=γ_B=1 and the relation is satisfied trivially. In a nonideal solution, if γ_A rises strongly with composition over some interval, γ_B must respond in a linked way. This is why total-pressure curves have constrained shapes and why the azeotropic condition emerges simultaneously for both components.",
      "JEE problems do not require integration of activity-coefficient models, but the principle is useful in assertion reasoning: one component cannot exhibit positive deviation while the other remains perfectly ideal over the full composition range unless the data satisfy the Gibbs–Duhem constraint in a special limiting sense."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "x_A dlnγ_A+x_B dlnγ_B=0"
    ]
  }
];
