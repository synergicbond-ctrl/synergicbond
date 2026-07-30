import type { NoteBlock } from "../types";

export const part15Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Osmotic coefficient and nonideal concentrated solutions",
    "paragraphs": [
      "For a real solution, osmotic pressure is written π=φiCRT, where φ is the osmotic coefficient and i represents particle stoichiometry or an effective van’t Hoff factor. In the ideal infinite-dilution limit, φ approaches one. At finite concentration, solute–solute and solute–solvent interactions change solvent activity and therefore osmotic pressure.",
      "Electrolytes show especially strong deviations because long-range electrostatic interactions remain important even at low concentration. A measured i smaller than the stoichiometric ion count does not necessarily mean incomplete chemical dissociation; it can reflect correlated ion motion and nonideal activity.",
      "JEE problems usually combine all departures into a single effective i. The conceptual distinction is useful: degree of dissociation is a chemical speciation quantity, while effective van’t Hoff factor is inferred from a colligative measurement and can include nonideality."
    ],
    "equations": [
      "π=φiCRT"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Polymer osmometry and number-average molar mass",
    "paragraphs": [
      "Osmotic pressure counts molecules, so a polymer sample containing many short chains produces a larger pressure than the same mass concentrated in fewer long chains. Consequently, membrane osmometry gives the number-average molar mass M_n, not the mass-average molar mass M_w obtained from light scattering.",
      "For a real dilute polymer solution, π/(cRT)=1/M_n+A₂c+A₃c²+…. Measuring several concentrations and extrapolating π/c to c=0 removes leading intermolecular effects. The intercept is RT/M_n, while the slope contains the second virial coefficient and solvent-quality information.",
      "A membrane must retain every polymer chain but pass solvent freely. Leakage of low-molar-mass fractions lowers the measured pressure and biases M_n upward. Temperature control is critical because π is proportional to absolute temperature and solvent viscosity affects equilibration time."
    ],
    "equations": [
      "π/(cRT)=1/M_n+A₂c+A₃c²+…"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
