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
  },
  {
    id: "ex-cr-cu-config",
    topic: "Electronic Configuration",
    observation: "Chromium (Cr) is [Ar] 4s1 3d5 and Copper (Cu) is [Ar] 4s1 3d10 instead of 4s2 3d4 and 4s2 3d9.",
    reason: "Half-filled (d5) and fully-filled (d10) subshells offer extra stability due to greater exchange energy and symmetrical electron distribution."
  },
  {
    id: "ex-odd-electron",
    topic: "Odd Electron Molecules",
    observation: "Molecules like NO, NO2, and ClO2 exist and are stable despite not satisfying the octet rule.",
    reason: "They have an odd number of total valence electrons. The unpaired electron is usually delocalized over the molecule, lowering the energy, but they remain paramagnetic."
  },
  {
    id: "ex-water-heat-capacity",
    topic: "Specific Heat Capacity of Water",
    observation: "Water has an unusually high specific heat capacity (4.18 J/g·K) compared to most other liquids.",
    reason: "The extensive network of hydrogen bonds in liquid water must be broken to increase the kinetic energy of the molecules, requiring a large input of thermal energy."
  },
  {
    id: "ex-buffer-dilution",
    topic: "Buffer pH on Dilution",
    observation: "The pH of a buffer solution does not change upon moderate dilution.",
    reason: "The pH depends on the ratio [Salt]/[Acid]. Dilution changes the volume for both solute species equally, so their ratio remains constant."
  }
];