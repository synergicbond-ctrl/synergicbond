import type { NoteBlock } from "../types";

export const part02ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Gas liquefaction, critical temperature and the range of Henry behaviour",
    "paragraphs": [
      "Henry’s law treats the dissolved gas as a dilute solute and the gas phase as a pressure reservoir. As temperature approaches the gas critical temperature from above or as pressure becomes very high, the distinction between a dilute gas and a condensable fluid becomes less simple. Fugacity, partial molar volume and solvent compressibility become important.",
      "A gas with a high critical temperature is generally easier to liquefy and often more polarizable, but critical temperature alone does not determine aqueous solubility. Specific gas–solvent interactions, molecular size and cavity formation all contribute. Ammonia and hydrogen chloride are extremely soluble mainly because of strong interaction and chemical transformation, not merely because they are easily liquefied.",
      "For numerical work, inspect whether the problem states a Henry constant at the required temperature and whether the gas reacts. If a gas both dissolves physically and reacts, total solubility is the sum over all dissolved species and may be much larger than the molecular Henry concentration."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original."
  }
];
