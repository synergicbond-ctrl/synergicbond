import type { NoteBlock } from "../types";

export const part16ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Weak-electrolyte dissociation and Ostwald’s dilution law",
    "paragraphs": [
      "For a weak 1:1 electrolyte AB⇌A⁺+B⁻ with analytical concentration C and degree of dissociation α, equilibrium concentrations are C(1−α), Cα and Cα. The dissociation constant is K=Cα²/(1−α) in the ideal concentration approximation. Since i=1+α for two ions, a colligative measurement can determine α and then K.",
      "At strong dilution α increases, which is Ostwald’s dilution law. The expression fails for strong electrolytes because they are already largely dissociated and their nonideal behaviour is dominated by activities rather than a simple undissociated fraction.",
      "If a weak electrolyte produces n ions, i=1+α(n−1). Combining this with boiling, freezing or osmotic data yields α. Always use analytical formula-unit concentration in the theoretical nonelectrolyte calculation before applying i."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
