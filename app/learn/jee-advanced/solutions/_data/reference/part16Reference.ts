import type { NoteBlock } from "../types";

export const part16Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Electrolyte particle count, ion pairing and the meaning of i",
    "paragraphs": [
      "A formula unit of NaCl yields two ions in the ideal limiting picture, CaCl₂ yields three and Al₂(SO₄)₃ yields five. At finite concentration, measured van’t Hoff factors are lower than these integers because ions interact electrostatically and may form transient ion pairs. Dilution weakens these correlations, so i tends toward the stoichiometric limit.",
      "For a weak electrolyte, incomplete dissociation is the dominant cause of i below the full-ion value. For a strong electrolyte, chemical dissociation may be essentially complete while thermodynamic nonideality still lowers the colligative response. The elementary formula i=1+α(n−1) treats all reduction as incomplete dissociation and is appropriate only when the problem explicitly adopts that model.",
      "Multistep dissociation or complex formation requires an explicit species balance. Counting charges is not enough; count the equilibrium particles and enforce mass balance and electroneutrality."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Association equilibria and apparent molar mass",
    "paragraphs": [
      "Association reduces the number of independent solute particles. For dimerisation, complete association of two monomers into one dimer gives i=1/2; partial dimerisation gives 1/2<i<1. Because colligative molar mass is calculated as though no association occurred, M_observed=M_normal/i and is therefore larger than the monomer molar mass.",
      "The extent of association depends on concentration, temperature and solvent. Hydrogen-bonded carboxylic-acid dimers are favoured in nonpolar solvents that cannot compete strongly for hydrogen bonds. In polar or protic solvents, solvation can weaken dimerisation.",
      "When an association constant is requested, combine the measured i with α, then write equilibrium concentrations. For 2A⇌A₂ starting from analytical concentration C, [A]=C(1−α) and [A₂]=Cα/2, so K=[A₂]/[A]²."
    ],
    "equations": [
      "For dimerisation: i=1−α/2",
      "M_observed=M_normal/i",
      "K_dimer=(Cα/2)/[C(1−α)]²"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
