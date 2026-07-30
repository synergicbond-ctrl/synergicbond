import type { NoteBlock } from "../types";

export const part17ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Designing an auditable solution to a multi-step problem",
    "paragraphs": [
      "A long solution should be auditable line by line. Begin with a basis and list known state variables. Write one governing equation per physical idea: Henry relation, Raoult relation, phase balance, gas law or colligative law. Do not substitute numbers until every symbol has a defined unit and composition basis.",
      "After each stage, carry forward the physically conserved quantities. In a closed flash, total moles and component moles are conserved but phase compositions change. In evaporation with nonvolatile solute, solute moles are conserved while solvent mass falls. In gas recovery, dissolved moles become gas moles and the measurement pressure may differ from dissolution pressure.",
      "Conclude with at least two independent checks: a dimensional check and a physical-bound check. When possible, calculate the same quantity by two components or two equivalent equations. This structure keeps advanced calculations concise without sacrificing clarity."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
