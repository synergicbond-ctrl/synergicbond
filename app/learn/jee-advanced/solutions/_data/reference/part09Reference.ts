import type { NoteBlock } from "../types";

export const part09Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Theoretical plates, reflux and the McCabe–Thiele picture",
    "paragraphs": [
      "A fractionating column is modelled as a sequence of equilibrium stages or theoretical plates. Vapour leaving a stage is in equilibrium with liquid leaving that stage. On an x–y diagram, equilibrium steps move horizontally to the equilibrium curve and vertically to an operating line. The number of steps estimates the number of ideal stages required for a desired separation.",
      "Reflux is the fraction of condensed overhead liquid returned to the column. Higher reflux increases internal liquid–vapour contact and reduces the number of stages needed, but increases energy consumption. At total reflux, no product is withdrawn and the fewest theoretical stages are required. At minimum reflux, the required number of stages approaches infinity.",
      "The JEE syllabus rarely requires full column design, yet these ideas explain why repeated equilibrium contacts outperform simple distillation and why a real separation involves a compromise between purity, stage count and energy."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Choosing among simple, fractional, vacuum and steam distillation",
    "paragraphs": [
      "Simple distillation is appropriate for separating a volatile liquid from a nonvolatile solute or for two miscible liquids with a large relative volatility. Fractional distillation is required when both liquids are volatile and their boiling points are close. Vacuum distillation is selected when the target compound has a high normal boiling point or decomposes before reaching it.",
      "Steam distillation requires substantial water immiscibility and sufficient vapour pressure at the operating temperature. It is not suitable merely because a compound has a high boiling point; the compound must co-distil with steam without reacting and must separate from the condensate conveniently.",
      "Selection questions should be answered by the governing equilibrium: miscible liquids use one liquid phase and Raoult/activity relations, whereas immiscible steam distillation uses the sum of independent pure-component vapour pressures."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
