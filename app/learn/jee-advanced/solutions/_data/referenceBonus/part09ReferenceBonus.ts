import type { NoteBlock } from "../types";

export const part09ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Energy economy of distillation and why separation can be expensive",
    "paragraphs": [
      "Distillation repeatedly vaporises and condenses material, so its energy demand is dominated by latent heat. A reboiler supplies heat at the bottom and a condenser removes comparable heat at the top. When relative volatility is low, high reflux and many stages are required, increasing both heat duty and equipment size.",
      "Heat integration can reuse condenser heat to supply another reboiler or preheat feed. Multiple-effect and heat-pump arrangements reduce net energy. Vacuum operation lowers temperature but may increase vapour volume and compression requirements.",
      "The thermodynamic minimum work of separation is related to the Gibbs energy of unmixing, which is far smaller than the heat circulated in ordinary distillation. The difference reflects irreversibility and the need to create large internal vapour and liquid flows. This explains why membrane or adsorption methods may be preferred for difficult or azeotropic separations."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
