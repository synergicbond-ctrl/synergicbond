import type { NoteBlock } from "../types";

export const part01Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Chapter scope preserved from the source cover",
    "paragraphs": [
      "The source opens the chapter under the title Liquid Solution. The complete reconstruction retains that scope but uses the website title Solution and Colligative Properties so that vapour–liquid equilibrium, distillation, colligative properties, osmosis and abnormal molar-mass behaviour remain inside one continuous chapter."
    ],
    "sourcePages": "Page 1"
  },
  {
    "kind": "theory",
    "title": "Solution as a homogeneous phase and the roles of solvent and solute",
    "paragraphs": [
      "A solution is a homogeneous mixture of two or more pure substances. Homogeneous means that composition and intensive properties are uniform throughout the macroscopic phase. The particles are not stationary: molecules diffuse continuously, yet any sufficiently large sample has the same average composition as any other sample from the same phase.",
      "The solvent is the component that provides the medium and usually determines the physical state of the final solution. The solute is the component dispersed molecularly or ionically in that medium. When both components are mutually soluble liquids, the component present in the larger amount is commonly called the solvent, but this is a convention rather than an intrinsic property of the substance.",
      "A solution can exist in solid, liquid or gaseous form. The final physical state follows the solvent phase: a solid alloy is a solid solution, carbon dioxide in water is a liquid solution, and air is a gaseous solution. A suspension, smoke, fog or emulsion is not a true solution because it contains more than one phase or particles large enough to scatter light strongly."
    ],
    "bullets": [
      "Solid solvent + solid solute: alloys such as brass.",
      "Solid solvent + liquid solute: amalgam-like systems in which a liquid component is retained in a solid metallic phase.",
      "Solid solvent + gas solute: hydrogen absorbed in palladium.",
      "Liquid solvent + solid solute: salt or sugar in water.",
      "Liquid solvent + liquid solute: ethanol and water.",
      "Liquid solvent + gas solute: aerated beverages.",
      "Gas solvent + solid vapour: camphor or naphthalene vapour in air.",
      "Gas solvent + liquid vapour: water vapour in air.",
      "Gas solvent + gas solute: air."
    ],
    "sourcePages": "Page 2",
    "visual": "solution-particles"
  },
  {
    "kind": "theory",
    "title": "Classification cautions retained from the source notebook",
    "paragraphs": [
      "The source notes emphasise that a highly sublimable solid can form a molecular gaseous solution when its vapour mixes with a gas. The substance must actually be present as vapour; visible smoke or dust would constitute a heterogeneous aerosol instead.",
      "The most important distinction is between a true single phase and a dispersed system. Dissolving produces molecular or ionic dimensions, whereas suspending or emulsifying leaves a separate phase. This distinction is essential later when defining vapour pressure, colligative properties and membrane transport."
    ],
    "sourcePages": "Page 3"
  },
  {
    "kind": "theory",
    "title": "Concentration language needed throughout the chapter",
    "paragraphs": [
      "Every later law uses a precisely defined concentration variable. Mole fraction is the ratio of moles of one component to total moles and is the natural variable in Raoult’s and Henry’s laws. Molarity is moles of solute per litre of solution, molality is moles of solute per kilogram of solvent, and mass percentage is solute mass divided by total solution mass multiplied by one hundred.",
      "Mole fraction and molality are independent of temperature because they contain no volume term. Molarity, volume percentage and mass-by-volume percentage change when the solution expands or contracts. For dilute aqueous solutions, parts per million may be approximated by milligrams per litre only when density is close to 1.00 g mL⁻¹."
    ],
    "equations": [
      "xᵢ = nᵢ / Σnⱼ and Σxᵢ = 1",
      "M = n(solute)/V(solution in L)",
      "m = n(solute)/mass(solvent in kg)",
      "w/w % = 100m(solute)/m(solution)",
      "ppm = 10⁶ × mass fraction"
    ],
    "sourcePages": "Pages 2–3"
  }
];
