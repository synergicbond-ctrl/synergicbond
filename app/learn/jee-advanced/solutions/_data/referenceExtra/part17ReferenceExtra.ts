import type { NoteBlock } from "../types";

export const part17ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Uncertainty, significant figures and self-audit in long calculations",
    "paragraphs": [
      "Solution-chemistry calculations often combine measured mass, pressure, temperature, density and volume. Preserve guard digits through intermediate steps and round only the final result. Convert Celsius to kelvin wherever temperature appears in gas-law, van’t Hoff or Clausius–Clapeyron expressions.",
      "Dimension checks catch many errors: Henry constants must be used with the matching concentration convention; K_b and K_f multiply mol kg⁻¹; πV and nRT must have compatible pressure–volume units; logarithms require dimensionless pressure ratios.",
      "After arithmetic, apply physical bounds. Mole fractions and phase fractions must lie from zero to one. A positive-deviation mixture cannot have total pressure below the ideal line at the same composition. A nonvolatile solute cannot raise solvent vapour pressure in the ideal model. A solution with i>1 should show a larger, not smaller, colligative effect than its nonelectrolyte calculation."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original."
  }
];
