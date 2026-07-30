import type { NoteBlock } from "../types";

export const part04ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Activity-coefficient models and how they encode molecular asymmetry",
    "paragraphs": [
      "Simple models convert qualitative nonideality into calculable activity coefficients. The one-parameter Margules model uses G^E/RT=A x_Ax_B, giving lnγ_A=A x_B² and lnγ_B=A x_A². Positive A produces positive deviation; negative A produces negative deviation. More flexible two-parameter forms allow asymmetric curves.",
      "Wilson, NRTL and UNIQUAC models introduce local-composition ideas: a molecule’s immediate neighbours need not reflect bulk composition when unlike interactions differ strongly. These models are used in process simulation to predict azeotropes and liquid–liquid separation. Their parameters are fitted to experimental VLE or calorimetric data.",
      "JEE problems do not require model fitting, but the models clarify why a single statement such as ‘A–B attraction is weak’ cannot determine the entire curve quantitatively. Molecular size, local ordering and composition-dependent neighbourhoods shape each partial pressure separately."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
