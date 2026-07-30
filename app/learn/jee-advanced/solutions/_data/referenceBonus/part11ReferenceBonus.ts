import type { NoteBlock } from "../types";

export const part11ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "General solvent-activity equation behind colligative measurements",
    "paragraphs": [
      "For any solution, not necessarily ideal, the solvent chemical potential is μ₁=μ₁*+RTlna₁. Vapour pressure over the solution is related to activity by p₁=a₁p₁° when the vapour is ideal and the Poynting correction is negligible. Relative lowering becomes 1−a₁ rather than exactly x₂.",
      "Boiling and freezing shifts depend on −lna₁. Osmotic pressure satisfies πV̄₁≈−RTlna₁. Thus a single experimental solvent activity can predict all colligative properties when thermodynamic data are known. At dilute concentration, a₁≈x₁ and −lnx₁≈x₂, recovering elementary formulas.",
      "This general form explains why concentrated sugar or salt solutions do not obey linear colligative laws. The deviation is not four unrelated failures; it is one departure of solvent activity from ideal mole-fraction behaviour."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
