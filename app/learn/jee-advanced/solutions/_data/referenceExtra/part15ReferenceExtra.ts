import type { NoteBlock } from "../types";

export const part15ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Converting between molarity, molality and mole fraction in osmotic problems",
    "paragraphs": [
      "Osmotic pressure naturally gives molarity, while freezing and boiling data give molality and vapour-pressure data give mole fraction. To compare them, use a consistent basis and measured density. For one litre of solution, total mass is 1000d grams. Solute moles are C, solute mass is CM₂ and solvent moles are (1000d−CM₂)/M₁.",
      "Therefore x₂=C/[C+(1000d−CM₂)/M₁]. Molality is C/[(1000d−CM₂)/1000]. These exact conversions reduce to simpler dilute forms when solute mass is negligible relative to solution mass.",
      "Integrated problems often hide density because without it molarity cannot be converted uniquely to mole fraction or molality. State any dilute aqueous approximation explicitly if density is not provided."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "x₂=C/[C+(1000d−CM₂)/M₁]",
      "m=C/[(1000d−CM₂)/1000]"
    ]
  }
];
