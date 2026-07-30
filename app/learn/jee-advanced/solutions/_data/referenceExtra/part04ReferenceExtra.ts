import type { NoteBlock } from "../types";

export const part04ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Regular-solution model as a bridge between molecular forces and deviation",
    "paragraphs": [
      "The regular-solution model assumes random mixing entropy as in an ideal solution but allows a nonzero enthalpy of mixing. A simple binary form is G^E=Ωx_Ax_B, where Ω measures the energetic penalty or benefit of unlike contacts. Positive Ω favours positive deviation and can promote partial miscibility; negative Ω favours negative deviation.",
      "The corresponding activity coefficients are lnγ_A=Ωx_B²/RT and lnγ_B=Ωx_A²/RT. The model predicts the largest excess Gibbs energy near intermediate composition and vanishing deviation at the pure-component limits. Although real hydrogen-bonded mixtures are often more complex, the model clarifies why deviation varies with composition rather than remaining a constant offset.",
      "If Ω is sufficiently positive relative to RT, the free-energy curve can develop two minima and the liquid separates into two phases. Thus the same competition between mixing entropy and unlike-contact energy governs both Raoult-law deviation and liquid–liquid miscibility."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "G^E=Ωx_Ax_B",
      "lnγ_A=Ωx_B²/RT",
      "lnγ_B=Ωx_A²/RT"
    ]
  }
];
