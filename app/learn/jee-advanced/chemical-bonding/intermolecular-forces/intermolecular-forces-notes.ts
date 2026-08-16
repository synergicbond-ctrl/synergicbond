// Intermolecular Forces (van der Waals Forces) — JEE Advanced / Chemical Bonding
// Directly-authored content blocks, following the same block model as Bridge
// Bonding, Bond Parameters and Dipole Moment. Source: a verified reference
// covering the six named intermolecular-force classes, the Lennard-Jones
// potential, Keesom/Debye/London energy expressions, and an extensive set of
// worked boiling-point / polarisability / symmetry comparisons.
//
// This was a genuine gap: the qualitative classification (ion-dipole, Keesom,
// Debye, London) previously existed only as ~9 short entries compressed
// inside the 189-topic legacy Chemical Bonding course, with no standalone
// JEE-Advanced-depth treatment and no worked trend tables. The van der Waals
// EQUATION OF STATE (critical constants, compressibility factor Z) already
// has excellent, separate coverage in the Gaseous State chapter and is
// deliberately NOT duplicated here — this chapter is the qualitative force
// picture; that chapter is the quantitative real-gas consequence of it.

export type IMFBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type IMFBlock = {
  kind: IMFBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "The Six Named Intermolecular Interactions",
  "The Lennard-Jones Potential",
  "Keesom Forces: Dipole-Dipole Orientation",
  "Debye Forces: Dipole-Induced Dipole",
  "London Dispersion Forces",
  "Polarisability and Molecular Trends",
  "Symmetry, Branching and Packing Effects",
  "Practice Problems",
];

export const imfChapterMap: string[] = [...sections];

function major(n: number): IMFBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): IMFBlock {
  return { kind: "subheading", text };
}
function p(text: string): IMFBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): IMFBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): IMFBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): IMFBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): IMFBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): IMFBlock {
  return { kind: "formula", text, formulaLabel };
}

export const imfBlocks: IMFBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("The forces that hold separate molecules (or ions and molecules) together, short of a full covalent or ionic bond, are collectively called intermolecular forces. The term van der Waals forces is used two ways in chemistry: strictly, it refers only to the dipole-dipole, dipole-induced dipole and dispersion interactions between neutral molecules; loosely, it is used as an umbrella term for every distance-dependent attraction in this section, including ion-dipole and ion-induced dipole. Both usages appear in JEE material, so this chapter states which one applies at each point."),
  callout("JEE key idea", "The seven interactions below differ enormously in range and strength. Ion-ion is the strongest and longest-ranged; dispersion is the weakest and shortest-ranged but is the only one present in every molecule, polar or not."),

  table(
    ["Interaction", "Force ~ r^n", "Energy ~ r^n", "Range", "Typical energy"],
    [
      ["Ion-ion", "r^-2", "r^-1", "Long-range", "-680 kJ/mol"],
      ["Ion-dipole", "r^-3", "r^-2", "Long-range", "-72 kJ/mol"],
      ["Ion-induced dipole", "r^-5", "r^-4", "Long-range", "-65 kJ/mol"],
      ["Dipole-dipole (Keesom)", "r^-7", "r^-6", "Short-range", "-15.2 kJ/mol"],
      ["Dipole-induced dipole (Debye)", "r^-7", "r^-6", "Short-range", "-1.0 kJ/mol"],
      ["Dispersion (London)", "r^-7", "r^-6", "Short-range", "-44.0 kJ/mol"],
      ["Repulsion (electron-cloud overlap)", "r^-13", "r^-12", "Short-range", "positive, steeply rising"],
    ]
  ),
  callout("Warning / limitation", "London dispersion energy is listed here as comparable to or larger than Keesom energy for many real molecules — dispersion is not automatically the weakest force in absolute terms, only the one present universally. Which interaction actually dominates depends on the specific molecule's dipole moment and polarisability, not on this table's typical-energy column alone."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("The Lennard-Jones (12-6) potential is a mathematical model describing the interaction energy between a pair of neutral atoms or molecules as a function of the distance r between them."),
  formula("E(r) = 4\\varepsilon \\left[ \\left(\\dfrac{\\sigma}{r}\\right)^{12} - \\left(\\dfrac{\\sigma}{r}\\right)^{6} \\right]", "Lennard-Jones 12-6 potential"),
  bullets([
    "The first term, (sigma/r)^12, represents repulsive forces, which dominate at very short distances due to overlap of electron clouds.",
    "The second term, (sigma/r)^6, represents attractive forces, particularly van der Waals forces, which dominate at intermediate distances.",
    "epsilon is the depth of the potential well, indicating the strength of the interaction.",
    "sigma is the finite distance at which the inter-particle potential is zero.",
  ]),
  p("This potential effectively captures the balance between attractive and repulsive forces in condensed phases of matter, leading to stable configurations."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("Dipole-dipole interactions, known as Keesom forces, are electrostatic interactions between polar molecules with permanent dipole moments. Two orientations matter: head-to-tail, in which the positive end of one dipole aligns with the negative end of another; and antiparallel, in which dipoles line up with opposite charges adjacent."),
  p("In the liquid or solid state, the thermal energy is low enough to allow molecules to maintain these ordered orientations, leading to strong dipole-dipole interactions. As temperature increases, thermal agitation disrupts these orientations, reducing the interaction strength."),
  sub("Keesom energy"),
  formula("E_K = -\\dfrac{2\\mu_1^2\\mu_2^2}{(4\\pi\\varepsilon_0)^2(3k_BT)\\,r^6}", "head-to-tail dipole arrangement"),
  p("mu1 and mu2 are the dipole moments of the interacting molecules; r is the distance between dipole centres; kB is the Boltzmann constant; epsilon0 is the permittivity of free space. The Keesom energy is inversely proportional to temperature: as temperature increases, the energy of interaction decreases."),
  sub("Orientation polarisability"),
  formula("u_\\mu = \\dfrac{\\mu^2}{3k_BT}"),
  p("This relationship indicates that at higher temperatures, orientation polarisability decreases, weakening dipole-dipole interactions. Hydrogen bonding is a specific, unusually strong type of dipole-dipole interaction, in which a hydrogen atom bonded to a highly electronegative atom (O, N or F) interacts with another electronegative atom in a neighbouring molecule. Even in the absence of hydrogen bonding, ordinary dipole-dipole interactions play a significant role in determining physical properties such as boiling points."),

  sub("Boiling points and dipole moments"),
  table(
    ["Compound", "Dipole moment (D)", "Boiling point (°C)"],
    [
      ["NF3", "0.234", "-129"],
      ["OF2", "0.3", "-145"],
      ["CF4", "0", "-161"],
    ]
  ),
  p("Despite the higher molar mass of CF4, it has a lower boiling point than NF3 and OF2. This is attributed to its zero dipole moment, which leaves it with only dispersion forces. NF3 and OF2 both have a dipole moment because their lone-pair contributions do not fully cancel the bond moments, so dipole-dipole interactions raise their boiling points. For comparison, NH3 (1.47 D) and H2O (1.84 D) boil far higher still, because both also hydrogen-bond. NF3 has a higher boiling point than OF2 despite a similar dipole moment, primarily because of its higher molecular mass, which enhances London dispersion contributions alongside the dipole-dipole term."),
  callout("JEE key idea", "Nitroalkanes (RNO2) have large dipole moments and correspondingly strong intermolecular attraction, giving them higher boiling points than alkanes of similar molecular mass — a useful reminder that polarity, not just mass, sets boiling-point trends across otherwise-similar compound classes."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("The dipole-induced dipole interaction, also called the Debye force, occurs when the electric field of a permanent dipole induces a temporary dipole moment in a neighbouring molecule, which can be either polar or nonpolar. Once induced, this dipole interacts electrostatically with the original dipole."),
  formula("E_D = -\\dfrac{2\\mu_1^2\\alpha_2}{(4\\pi\\varepsilon_0)^2\\,r^6}", "Debye energy"),
  p("mu1 is the dipole moment of the polar molecule; alpha2 is the distortion polarisability of the molecule in which the dipole is induced; r is the distance between molecular centres."),
  callout("Key idea", "The Debye energy is independent of temperature, because it arises solely from field-induced distortion and does not rely on thermal motion for the orientation step the way the Keesom energy does."),
  sub("Combined interaction energy"),
  p("When both interacting molecules are polar, the total interaction energy is the sum of the Keesom and Debye contributions:"),
  formula("E = E_K + E_D = -\\dfrac{2\\mu_1^2}{(4\\pi\\varepsilon_0)^2 r^6}\\left[\\alpha_2 + \\dfrac{\\mu_2^2}{3k_BT}\\right]"),
  p("A practical application is noble-gas hydrate formation: noble gases are non-polar, so the Keesom term does not apply, leaving the Debye (dipole-induced dipole) term as the primary interaction with a polar host such as water. The solubility of noble gases in water rises with atomic size because larger noble-gas atoms are more polarisable — derivatives such as Kr(phenol)2, Xe(phenol)2 and Rn(phenol)2 can form as a result of dipole-induced dipole interactions."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("London dispersion forces, also called instantaneous dipole-induced dipole interactions, are present even between permanently non-polar molecules such as Cl2, CH4 and Ar. They were first described by the physicist Fritz London and are named in his honour."),
  p("In a non-polar molecule the electron distribution around the nuclei is on average symmetric, giving no permanent dipole moment. At any given instant, however, the electron cloud can become unevenly distributed, creating a temporary (instantaneous) dipole. This instantaneous dipole can induce a dipole in a neighbouring non-polar molecule by distorting its electron cloud; the two induced, correlated dipoles then attract each other weakly."),
  p("For example, in a hydrogen molecule (H2), if the two electrons momentarily accumulate around one nucleus, a dipole moment is created in that direction. The electron distribution can just as easily shift the opposite way, creating a dipole moment of equal magnitude but opposite orientation. Over time these fluctuations average to zero and the molecule remains nonpolar overall, but at any given moment it can act as a temporary dipole and induce a correlated dipole in a neighbour — the London force."),
  formula("E_L = -\\dfrac{3}{2}\\dfrac{I\\alpha^2}{(4\\pi\\varepsilon_0)^2\\,r^6}", "London energy, identical molecules"),
  p("I is the ionisation energy of the molecule and alpha is its distortion polarisability. For interactions between two different molecules:"),
  formula("E_L = -\\dfrac{3}{2}\\dfrac{\\sqrt{I_1 I_2}\\;\\alpha_1\\alpha_2}{(4\\pi\\varepsilon_0)^2\\,r^6}", "London energy, unlike molecules"),
  callout("JEE key idea", "London forces are present in every molecule, polar or non-polar, but they are the only intermolecular force available to non-polar species. Even in polar molecules, London forces still contribute to the overall interaction and can influence boiling points, solubilities and viscosities alongside the dipole-based terms."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  sub("Halogens and noble gases"),
  bullets([
    "Iodine (I2) is a solid at room temperature: it has the most electrons among the halogens, making it highly polarisable, which enhances dispersion forces and raises its melting and boiling point relative to the others.",
    "Bromine (Br2) is a liquid: fewer electrons than iodine but more than chlorine or fluorine, giving intermediate dispersion forces and boiling point.",
    "Chlorine (Cl2) and fluorine (F2) are gases: fewer electrons and lower polarisability give weaker dispersion forces and lower boiling points.",
    "Among the noble gases, He and Ne are gases with low polarisability and weak dispersion forces; Ar is a gas but has higher boiling and melting points than He and Ne owing to greater polarisability; Kr and Xe are solids/liquids at accessible temperatures because their higher polarisability gives them stronger dispersion forces.",
  ]),

  sub("Homologous series of alkanes"),
  p("Boiling and melting points increase with molecular mass in a homologous series such as the alkanes, because a larger, heavier molecule is more polarisable and therefore experiences stronger dispersion forces."),
  table(
    ["Alkane", "Molecular mass", "Melting point (K)", "Boiling point (K)"],
    [
      ["CH4", "16", "90.5", "111.0"],
      ["C2H6", "30", "101.0", "184.4"],
      ["C3H8", "44", "86.0", "230.8"],
      ["C4H10", "58", "138.0", "272.4"],
      ["C5H12", "72", "143.3", "309.1"],
      ["C6H14", "86", "179.0", "342.0"],
      ["C7H16", "100", "182.5", "371.5"],
      ["C8H18", "114", "216.2", "400.0"],
      ["C9H20", "128", "222.0", "424.0"],
      ["C10H22", "142", "243.3", "447.2"],
    ]
  ),
  callout("Warning / limitation", "Boiling points increase smoothly with chain length because dispersion forces track molecular size directly. Melting points, in contrast, show a more irregular pattern — packing efficiency and crystal symmetry (Section 7) matter as much as raw dispersion strength for the solid state."),

  sub("Boron halides, BX3"),
  table(
    ["Compound", "Physical state at room temperature", "Reason"],
    [
      ["BF3", "Gas", "Small size and few electrons give weak dispersion forces."],
      ["BCl3", "Gas", "More electrons than BF3 but still relatively weak dispersion forces."],
      ["BBr3", "Volatile liquid", "More electrons and higher polarisability give stronger dispersion forces."],
      ["BI3", "Solid", "Largest number of electrons and highest polarisability among the series gives the strongest dispersion forces."],
    ]
  ),

  sub("Isotopic substitution"),
  table(
    ["Species", "Molecular weight", "Boiling point (K)"],
    [
      ["H2", "2", "20"],
      ["D2", "4", "23"],
      ["T2", "6", "25"],
    ]
  ),
  p("Boiling point rises with molecular weight across the hydrogen isotopologues because dispersion forces strengthen with mass. In the same family, the boiling point of CD4 is slightly lower than CH4 despite CD4's higher molecular weight, because CD4 has slightly lower polarisability than CH4. D2O has a higher boiling point than H2O; here the dominant effect is stronger hydrogen bonding in D2O, not dispersion, since the D-O bond is slightly shorter and the D...O hydrogen bond is somewhat stronger than the corresponding H-bond."),

  sub("Fluorocarbons versus hydrocarbons"),
  p("Fluorocarbons often have lower or similar boiling points than hydrocarbons of comparable or even lower molecular weight, because fluorine's low polarisability gives weaker London forces despite fluorine's larger size and mass."),
  table(
    ["n (carbon count)", "Boiling point (°C) of CnH2n+2", "Boiling point (°C) of CnF2n+2"],
    [
      ["2", "-160", "-128"],
      ["3", "-88", "-79"],
      ["5", "-45", "-38"],
      ["6", "-22", "22"],
      ["8", "36", "50"],
      ["10", "68", "105"],
      ["12", "125", "240"],
      ["14", "285", "285"],
    ]
  ),
  p("At low carbon counts the hydrocarbon and fluorocarbon boiling points are close, and the fluorocarbon can even run slightly higher because of its larger molecular size compensating for lower polarisability per atom; as chain length grows, the fluorocarbon's boiling point pulls further ahead because the larger, more polarisable perfluorinated chain accumulates dispersion contributions faster than the low per-atom polarisability of fluorine would suggest in isolation."),
  callout("JEE key idea", "Fluorides of both nonmetals and metals are generally more volatile than the corresponding chlorides, bromides or iodides. Fluorine's tightly bound electrons and low polarisability give weak dispersion forces, and fluorine also lacks accessible d-type orbitals for other stabilising interactions available to the heavier halogens — both effects push fluorides toward higher volatility."),

  sub("Solubility comparisons"),
  bullets([
    "Me4NCl (tetramethylammonium chloride) is more soluble in nonpolar solvents than NH4Cl. The methyl groups shield the cation's positive charge and interact favourably with a nonpolar solvent through dispersion forces; NH4+ lacks this hydrophobic shielding and is therefore less soluble in nonpolar media.",
    "SiCl4 has a lower boiling point than CCl4 despite SiCl4's higher molecular weight. Silicon's lower electronegativity relative to carbon leaves the chlorines in SiCl4 bearing more negative charge, increasing electrostatic repulsion between SiCl4 molecules; Si-Cl pi-bonding (from overlap of chlorine lone pairs into silicon's accessible d-orbitals) further reduces the density of non-bonding electron cloud around silicon, lowering polarisability and weakening dispersion forces relative to CCl4, which has neither effect.",
  ]),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  sub("Branching reduces boiling point, raises melting point"),
  p("Branching in a hydrocarbon chain produces a more compact, more spherical molecular structure, reducing the surface area available for intermolecular contact and therefore lowering dispersion forces and boiling point."),
  table(
    ["Pentane isomer", "Boiling point (°C)", "Melting point (°C)"],
    [
      ["n-Pentane (straight chain)", "36", "-130"],
      ["Isopentane (branched)", "28", "-170"],
      ["Neopentane (highly branched)", "9.5", "n-Pentane < Isopentane < Neopentane"],
    ]
  ),
  p("Boiling point order: n-Pentane > Isopentane > Neopentane. Melting point order: n-Pentane < Isopentane < Neopentane — the opposite trend, because the highly symmetric, near-spherical neopentane packs into a crystal lattice unusually efficiently, which raises its melting point even though its low surface area gives it the lowest boiling point of the three."),
  p("The same pattern extends to alcohols: branching reduces both dispersion forces and the ease of intermolecular hydrogen bonding through steric hindrance. n-Butyl alcohol (118 degC) > isobutyl alcohol (108 degC) > sec-butyl alcohol (100 degC) > tert-butyl alcohol (83 degC). Branching also increases the relative volume of the hydrocarbon portion of an alcohol molecule in a way that can raise water solubility for smaller alcohols, since a more compact, branched hydrophobic group presents a smaller effective nonpolar surface to disrupt water's hydrogen-bond network."),

  sub("Symmetry and crystal packing"),
  p("Symmetrical molecules generally have higher melting points than less symmetrical isomers of similar mass, because their regular shape allows closer, more efficient packing in the solid lattice, strengthening the net lattice interaction even when individual intermolecular forces are unchanged. Highly symmetric molecules such as SF6, I2, CO2, camphor and C20H20 (dodecahedrane) tend to sublime rather than melt in the ordinary sense, because their high translational and rotational symmetry lets them absorb enough thermal energy to escape the solid lattice directly into the gas phase."),
  bullets([
    "Tetramethylmethane, C(CH3)4, with high symmetry, has a higher melting point (-17 degC) than n-pentane (-130 degC), despite the two having comparable dispersion-force strength; the difference is almost entirely a packing effect.",
    "cis-1,2-Dichloroethene (mu = 1.85 D, polar) has a higher boiling point than trans-1,2-dichloroethene (mu = 0, nonpolar) because of additional dipole-dipole attraction in the cis isomer. The trans isomer, being more symmetrical, packs more efficiently in the solid and therefore has the higher melting point and lower solubility of the pair.",
    "Ortho-xylene is weakly polar and para-xylene is essentially nonpolar; ortho-xylene has the higher boiling point (dipole-dipole contribution) while para-xylene, being the more symmetrical isomer, has the higher melting point and lower solubility.",
  ]),
  callout("Warning / limitation", "Symmetry effects run opposite to simple dispersion-force reasoning: a more symmetric molecule is not always the one with the higher boiling point, but it is very often the one with the higher melting point. Keep the liquid-phase question (dispersion forces, surface area) and the solid-phase question (packing efficiency, lattice symmetry) separate."),

  sub("Odd-even effect in dicarboxylic acids"),
  p("For dicarboxylic acids of the form HO2C-(CH2)n-COOH, the melting point of an acid with an even number of carbon atoms is typically higher than that of the adjacent odd-numbered acid in the series. In the zig-zag carbon-chain conformation, an even-numbered acid places its two terminal -COOH groups on opposite sides of the chain (a trans-like relationship), allowing more efficient, symmetric packing in the crystal lattice and therefore stronger net lattice interactions and a higher melting point. An odd-numbered acid places both -COOH groups on the same side (a cis-like relationship), packing less efficiently and giving a lower melting point relative to its even-numbered neighbours."),
  callout("Key idea", "Boiling points in a homologous series increase smoothly with molecular mass because they track dispersion-force strength directly. Melting points can show irregular, even zig-zagging sequences in the same series, because they depend additionally on how well each specific molecular shape packs into a crystal lattice — a structural, not purely energetic, question."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  numbered([
    "Rank ion-ion, ion-dipole and dispersion interactions by their distance dependence of energy (r^-n) and explain which is longest-ranged.",
    "Explain why CF4 has a lower boiling point than NF3 despite CF4 having the higher molecular mass.",
    "Why is the Debye energy independent of temperature while the Keesom energy is not?",
    "Explain, using polarisability, why I2 is a solid while F2 and Cl2 are gases at room temperature.",
    "Why does neopentane have the lowest boiling point but the highest melting point among the three pentane isomers?",
    "Explain why SiCl4 has a lower boiling point than CCl4 despite its higher molecular weight.",
    "Why are fluorides generally more volatile than the corresponding chlorides, bromides or iodides of the same element?",
    "Explain the odd-even melting-point alternation in the HO2C-(CH2)n-COOH dicarboxylic acid series.",
    "Why does cis-1,2-dichloroethene have a higher boiling point, but a lower melting point, than the trans isomer?",
    "Explain why D2O has a higher boiling point than H2O even though CD4 has a slightly lower boiling point than CH4.",
  ]),
  sub("Answer key"),
  numbered([
    "Ion-ion (F ~ r^-2) is longest-ranged; ion-dipole (r^-3) is intermediate; dispersion (r^-7 in force, r^-6 in energy) is shortest-ranged among the three.",
    "CF4 has zero dipole moment (tetrahedral symmetry cancels all bond moments), so it has only dispersion forces; NF3 has a small net dipole moment and therefore additional dipole-dipole (Keesom) attraction, which outweighs CF4's slightly higher dispersion contribution from mass alone.",
    "The Debye energy arises from field-induced distortion of a neighbour's electron cloud, a process that does not depend on thermal orientation; the Keesom energy depends on the degree to which permanent dipoles can maintain an ordered orientation against thermal agitation, which is explicitly temperature-dependent.",
    "I2 has the most electrons and hence the highest polarisability among the halogens, giving the strongest dispersion forces; F2 and Cl2 have far fewer electrons and much weaker dispersion forces, keeping them gaseous.",
    "Neopentane's compact, near-spherical shape minimises surface area for intermolecular contact, giving the weakest dispersion forces and hence the lowest boiling point; the same high symmetry allows unusually efficient crystal packing, giving the highest melting point of the three isomers.",
    "Silicon is less electronegative than carbon, so Si-Cl bonds are more polarised, increasing repulsion between SiCl4 molecules; Si-Cl pi-donation from chlorine lone pairs into silicon's accessible d-orbitals also reduces silicon's non-bonding electron density and polarisability relative to CCl4, both lowering SiCl4's boiling point.",
    "Fluorine's small size and tightly held electrons give it low polarisability and hence weak dispersion forces; fluorine also lacks low-lying orbitals for the additional stabilising interactions available to heavier halogens, so fluorides are generally the most volatile halide of a given element.",
    "Even-numbered acids place their two -COOH groups on opposite sides of the zig-zag chain (trans-like), allowing more efficient, symmetric crystal packing and a higher melting point; odd-numbered acids place both -COOH groups on the same side (cis-like), packing less efficiently and melting at a lower temperature.",
    "The cis isomer is polar and gains dipole-dipole attraction in the liquid, raising its boiling point; the trans isomer is more symmetric and packs more efficiently as a solid, raising its melting point despite its lower boiling point.",
    "D2O's higher boiling point comes from stronger hydrogen bonding (the D...O bond is somewhat stronger than H...O), not from dispersion forces; CD4 vs CH4 is a pure dispersion-force comparison in a non-hydrogen-bonding molecule, where CD4's slightly lower polarisability gives it the slightly lower boiling point despite its higher mass.",
  ]),
];
