// lib/masterSyllabus/exceptions.ts
export interface ChemistryException {
  id: string;
  topic: string;
  observation: string;
  reason: string;
}

export const exceptionsList: ChemistryException[] = [
  {
    id: "ex-f2-bond-energy",
    topic: "F2 Bond Dissociation Energy",
    observation: "Fluorine (F2) has a lower bond dissociation energy than Chlorine (Cl2) and Bromine (Br2).",
    reason: "Due to the small size of the fluorine atom, the lone pairs on the highly electronegative fluorine atoms experience significant inter-electronic repulsion, weakening the F-F covalent bond."
  },
  {
    id: "ex-inert-pair",
    topic: "Inert Pair Effect",
    observation: "Heavier p-block elements (like Tl, Pb, Bi) show lower oxidation states equal to (group number - 10) rather than group valency.",
    reason: "The s-electrons (ns2) are held tightly by the nucleus due to poor shielding by intervening d and f orbitals, making them reluctant to participate in bond formation."
  },
  {
    id: "ex-ice-density",
    topic: "Anomalous Density of Water",
    observation: "Ice is less dense than liquid water and floats on it.",
    reason: "In ice, water molecules are held together by extensive intermolecular hydrogen bonding in a highly open cage-like three-dimensional structure, leaving large empty spaces."
  }
];