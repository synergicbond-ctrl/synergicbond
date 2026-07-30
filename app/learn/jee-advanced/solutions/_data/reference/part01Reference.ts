import type { NoteBlock } from "../types";

export const part01Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Activity, standard state and why concentration alone is not always enough",
    "paragraphs": [
      "At equilibrium, a component is governed by its chemical potential rather than by concentration alone. For component i, μ_i=μ_i°+RTlna_i, where a_i is activity. In an ideal solution the activity of a liquid component equals its mole fraction, but in a real solution a_i=γ_ix_i. The activity coefficient γ_i measures how strongly the real molecular environment differs from the chosen ideal reference.",
      "Two standard states are common in solution chemistry. Raoult’s-law standard state uses the pure liquid as reference and is natural for the solvent or for components over the full composition range. Henry’s-law standard state uses hypothetical ideal-dilute behaviour and is natural for a solute at very low concentration. A component may obey Raoult’s law near x_i=1 and Henry’s law near x_i=0 without contradiction because the standard states differ.",
      "For JEE Advanced, most numerical problems set γ_i=1. Nevertheless, recognising the activity form prevents conceptual errors: concentration equality does not by itself guarantee equilibrium, and deviations from Raoult’s law are represented by γ_i above or below unity. The same idea later explains electrolyte nonideality and osmotic coefficients."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "A reliable basis method for every concentration conversion",
    "paragraphs": [
      "Complex concentration problems become simple when a basis is chosen before calculation. For a mass-percent solution, take 100 g solution. For molality, take 1.000 kg solvent. For molarity, take 1.000 L solution. Convert every component to moles, retain total mass and use density only after the mass balance is complete.",
      "For example, to convert w mass percent of a solute of molar mass M₂ in a solution of density d to molarity, 1 L solution has mass 1000d g and contains 10wd g solute, so M=10wd/M₂. To convert the same solution to molality, the solvent mass in one litre is 1000d−10wd g, giving m=(10wd/M₂)/[(1000d−10wd)/1000]. These formulas are derived from the basis and should not be memorised without units.",
      "When several solutes are present, the solvent mass is total mass minus the masses of every solute. When hydration or dissociation occurs, distinguish analytical concentration, which counts formula units added, from equilibrium particle concentration, which controls colligative properties."
    ],
    "equations": [
      "For w% w/w and density d: M=10wd/M₂",
      "m=(10wd/M₂)/[(1000d−10wd)/1000]"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
