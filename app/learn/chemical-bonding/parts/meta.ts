// Part list and groups for the Chemical Bonding course.
// Moved out of _shared.tsx unchanged (same parts, titles, ranges and hrefs) so the reader
// data layer can import it without a circular dependency. _shared.tsx re-exports everything.

export type ChemBondPartMeta = {
  part: number;
  title: string;
  tag: string;
  href: string;
  range?: string;
};

export const chemBondPartMeta: ChemBondPartMeta[] = [
  { part: 1, title: "Bond Formation, Octet & Historical Foundations", tag: "Topics 1–7", range: "1–7", href: "/learn/chemical-bonding/part01" },
  { part: 2, title: "Maximum Covalency, Bond Models & Energy Curves", tag: "Topics 8–13", range: "8–13", href: "/learn/chemical-bonding/part02" },
  { part: 3, title: "Ionic Bonding, Lattice Energy & Isomorphism", tag: "Topics 14–21", range: "14–21", href: "/learn/chemical-bonding/part03" },
  { part: 4, title: "Lewis Structures, Covalency & Central-Atom Rules", tag: "Topics 22–27", range: "22–27", href: "/learn/chemical-bonding/part04" },
  { part: 5, title: "Atomic Orbitals, Nodes, Symmetry & Wave Functions", tag: "Topics 28–33", range: "28–33", href: "/learn/chemical-bonding/part05" },
  { part: 6, title: "Covalent Bond Types, VBT & Orbital Overlap", tag: "Topics 34–40", range: "34–40", href: "/learn/chemical-bonding/part06" },
  { part: 7, title: "Overlap Modes, σ/π/δ Bonds & Bond Strength", tag: "Topics 41–48", range: "41–48", href: "/learn/chemical-bonding/part07" },
  { part: 8, title: "Hybridisation: sp to sp³d³ & Isoelectronic Shapes", tag: "Topics 49–57", range: "49–57", href: "/learn/chemical-bonding/part08" },
  { part: 9, title: "VSEPR Foundations & Core Geometries", tag: "Topics 58–66", range: "58–66", href: "/learn/chemical-bonding/part09" },
  { part: 10, title: "Advanced VSEPR, Lone Pairs & Geometry Deviations", tag: "Topics 67–77", range: "67–77", href: "/learn/chemical-bonding/part10" },
  { part: 11, title: "State-Dependent Structures & Important Inorganic Molecules", tag: "Topics 78–88", range: "78–88", href: "/learn/chemical-bonding/part11" },
  { part: 12, title: "Bond Angles, Bent/Drago Rules & Back Bonding", tag: "Topics 89–97", range: "89–97", href: "/learn/chemical-bonding/part12" },
  { part: 13, title: "Multicentre, Banana & Electron-Deficient Bonding", tag: "Topics 98–104", range: "98–104", href: "/learn/chemical-bonding/part13" },
  { part: 14, title: "Dipole Moment, Formal Charge & Best Lewis Structures", tag: "Topics 105–113", range: "105–113", href: "/learn/chemical-bonding/part14" },
  { part: 15, title: "Resonance, Bond Parameters & Periodic Effects", tag: "Topics 114–120", range: "114–120", href: "/learn/chemical-bonding/part15" },
  { part: 16, title: "Hydrogen Bonding: Structure, Strength & Applications", tag: "Topics 121–130", range: "121–130", href: "/learn/chemical-bonding/part16" },
  { part: 17, title: "MOT Foundations: LCAO, BMO/ABMO & Overlap", tag: "Topics 131–140", range: "131–140", href: "/learn/chemical-bonding/part17" },
  { part: 18, title: "MOT Diagrams, Bond Order, Magnetism & s–p Mixing", tag: "Topics 141–150", range: "141–150", href: "/learn/chemical-bonding/part18" },
  { part: 19, title: "HOMO/LUMO, Heteronuclear MOT & Pseudohalides", tag: "Topics 151–157", range: "151–157", href: "/learn/chemical-bonding/part19" },
  { part: 20, title: "Fajans' Rule, Polarisation & Covalent Character", tag: "Topics 158–162", range: "158–162", href: "/learn/chemical-bonding/part20" },
  { part: 21, title: "Intermolecular Forces & Clathrates", tag: "Topics 163–170", range: "163–170", href: "/learn/chemical-bonding/part21" },
  { part: 22, title: "Carbon Allotropes & Thermodynamics of Ionic Solids", tag: "Topics 171–178", range: "171–178", href: "/learn/chemical-bonding/part22" },
  { part: 23, title: "Silicates, Aluminosilicates & Zeolites", tag: "Topics 179–189", range: "179–189", href: "/learn/chemical-bonding/part23" },
  { part: 24, title: "JEE Advanced Integrated Question Bank", tag: "Practice", href: "/learn/chemical-bonding/part24" },
];

export interface ChemBondGroup { label: string; from: number; to: number; accent: string; /** reader colour for this unit */ hue: string; }
export const CHEM_BOND_GROUPS: ChemBondGroup[] = [
  { label: "Foundations & Ionic Bonding", from: 1, to: 4, accent: "var(--chem-bond)", hue: "#f2b53a" },
  { label: "Orbitals, VBT & Hybridisation", from: 5, to: 8, accent: "var(--chem-orbital)", hue: "#3cc8e8" },
  { label: "VSEPR & Molecular Structures", from: 9, to: 11, accent: "var(--chem-bond)", hue: "#4cc38a" },
  { label: "Bond Parameters & Special Bonding", from: 12, to: 15, accent: "var(--chem-rule)", hue: "#ff7a59" },
  { label: "Hydrogen Bonding & MOT", from: 16, to: 19, accent: "var(--chem-orbital)", hue: "#b99aff" },
  { label: "Polarisation, IMF, Solids & Silicates", from: 20, to: 23, accent: "var(--chem-energy)", hue: "#ff7ab6" },
  { label: "Integrated JEE Advanced Practice", from: 24, to: 24, accent: "var(--chem-energy)", hue: "#cbd5e1" },
];

export function chemBondGroupForPart(part: number): ChemBondGroup {
  return CHEM_BOND_GROUPS.find((g) => part >= g.from && part <= g.to) ?? CHEM_BOND_GROUPS[0];
}
