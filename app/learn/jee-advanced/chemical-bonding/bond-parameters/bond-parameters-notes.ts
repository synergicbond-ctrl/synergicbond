// Bond Parameters — JEE Advanced / Chemical Bonding
// Directly-authored content blocks, following the same block model as the
// Bridge Bonding, Dipole Moment and Formal Charges chapters. Source: a
// verified rewrite of handwritten "Bond Parameter" notes, corrected against
// standard valence-bond, molecular-orbital and VSEPR principles — bond order,
// bond length, bond angle, axial/equatorial TBP bonds, Bent's rule, and
// verified comparison tables. This was a genuine gap: prior to this chapter,
// Bent's rule appeared only as a syllabus description string with no actual
// content, and axial/equatorial bond-length comparisons existed only buried
// inside VSEPR geometry topics, not as a bond-parameters treatment in their
// own right.

export type BondParamBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type BondParamBlock = {
  kind: BondParamBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Bond Order",
  "Bond Length",
  "Axial and Equatorial Bonds in Trigonal-Bipyramidal Species",
  "Verified Bond-Length Comparisons",
  "Bond Angle",
  "High-Yield JEE Rules and Traps",
  "Practice Problems",
];

export const bondParamChapterMap: string[] = [...sections];

function major(n: number): BondParamBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): BondParamBlock {
  return { kind: "subheading", text };
}
function p(text: string): BondParamBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): BondParamBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): BondParamBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): BondParamBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): BondParamBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): BondParamBlock {
  return { kind: "formula", text, formulaLabel };
}

export const bondParamBlocks: BondParamBlock[] = [
  // ── Section 1: Bond Order ────────────────────────────────────────────────
  major(1),
  p("Bond order is the number of bonding electron pairs shared between a specified pair of atoms. In elementary Lewis notation, a single, double and triple bond have bond orders 1, 2 and 3 respectively."),
  formula("\\text{Bond order (Lewis)} = \\text{number of bonds between the two atoms}"),
  p("In molecular-orbital theory:"),
  formula("\\text{Bond order} = \\tfrac{1}{2}(N_b - N_a)", "Nb = bonding electrons, Na = antibonding electrons"),
  callout("Key idea", "The Lewis-structure definition is convenient for ordinary molecules and resonance problems. The MO definition is required for species such as O2, O2+, O2- and O2 2-."),

  sub("Bond order in resonance hybrids"),
  p("When equivalent resonance structures distribute multiple-bond character over several equivalent positions, the experimentally observed bonds are equivalent and possess an average bond order."),
  formula("\\text{Average bond order} = \\dfrac{\\text{total bond-order units over equivalent positions}}{\\text{number of equivalent positions}}"),
  table(
    ["Species", "Equivalent bonds", "Total bond-order units", "Average bond order"],
    [
      ["NO2-", "2 N-O", "3", "3/2 = 1.5"],
      ["NO3-", "3 N-O", "4", "4/3 ~ 1.33"],
      ["CO3 2-", "3 C-O", "4", "4/3 ~ 1.33"],
      ["SO3 2- (Lewis bookkeeping)", "3 S-O", "4", "4/3"],
      ["SO4 2- (Lewis bookkeeping)", "4 S-O", "6", "6/4 = 1.5"],
      ["ClO4- (expanded-octet Lewis form)", "4 Cl-O", "7", "7/4 = 1.75"],
    ]
  ),
  callout("Warning / limitation", "Average Lewis bond order is a useful examination device, but hypervalent S-O, P-O, Cl-O and Xe-O bonds are not accurately described as localized d(pi)-p(pi) double bonds. Their bonding is better understood through delocalized molecular orbitals, strong sigma bonding and charge delocalization."),

  sub("Frequently used values"),
  table(
    ["Species or bond", "Bond order"],
    [
      ["N2, N#N", "3"],
      ["O2, O=O", "2"],
      ["F2 / Cl2 / Br2 / I2, X-X", "1"],
      ["CO2, each C=O", "2"],
      ["NO+", "3"],
      ["NO", "2.5 (MO theory)"],
      ["NO-", "2"],
      ["O3, each O-O", "1.5"],
      ["NO2-, each N-O", "1.5"],
      ["NO3-, each N-O", "4/3"],
      ["CO3 2-, each C-O", "4/3"],
      ["HCO3-: two resonance-coupled C-O bonds", "1.5 each; C-OH remains approximately single"],
    ]
  ),

  // ── Section 2: Bond Length ───────────────────────────────────────────────
  major(2),
  p("Bond length is the equilibrium internuclear distance between two bonded atoms, usually expressed in picometres (pm) or angstroms (A). It corresponds to the minimum of the potential-energy curve for that bond."),
  callout("Key idea", "For the same pair of atoms, higher bond order generally means a shorter and stronger bond: triple < double < single in bond length."),

  sub("Factors controlling bond length"),
  bullets([
    "Atomic size: larger bonded atoms generally produce longer bonds.",
    "Bond order: increasing bond order increases electron density between nuclei and shortens the bond.",
    "Hybridisation: greater s-character contracts the hybrid orbital and usually shortens the bond. For otherwise comparable C-C bonds: sp-sp < sp2-sp2 < sp3-sp3.",
    "Resonance: delocalization gives intermediate bond lengths, e.g. all C-O bonds in CO3 2- are equivalent and intermediate between a normal C-O single and C=O double bond.",
    "Formal charge and electron count: electron addition to antibonding orbitals lengthens a bond; electron removal from antibonding orbitals shortens it.",
    "Electronegativity and Bent's rule: substituents alter the s/p character directed into individual bonds.",
    "Lone-pair repulsions and geometry: they may modify hybridization and bond length indirectly.",
    "Partial ionic character and multiple-bond donation/back-bonding can shorten or lengthen bonds relative to a simple covalent-radius estimate.",
  ]),

  table(
    ["Comparison", "Correct order of bond length", "Reason"],
    [
      ["Hydrogen halides", "H-F < H-Cl < H-Br < H-I", "Halogen size increases down the group."],
      ["C-C bonds", "C#C < C=C < C-C", "Bond order decreases."],
      ["C-H bonds", "C(sp)-H < C(sp2)-H < C(sp3)-H", "s-character: 50% > 33% > 25%."],
      ["CO, CO2, CO3 2-", "CO < CO2 < CO3 2-", "Approximate C-O bond order: 3 > 2 > 4/3."],
      ["N2, N2H2, N2H4", "N#N < N=N < N-N", "Bond order: 3 > 2 > 1."],
      ["O2, O3, H2O2", "O2 < O3 < H2O2", "Bond order: 2 > 1.5 > 1."],
    ]
  ),

  sub("Bent's rule"),
  p("For isoelectronic or closely related species with the same central atom, Bent's rule provides a useful qualitative guide. Lone pairs prefer orbitals with greater s-character, while bond pairs are pushed into orbitals richer in p-character. Consequently, the N-H bond generally becomes shorter as the number of lone pairs decreases:"),
  formula("\\text{N-H bond length: } NH_4^+ < NH_3 < NH_2^-"),
  callout("Warning / limitation", "Do not explain every bond-length comparison only through percentage s-character. Actual bond lengths also depend on charge, bond polarity, electron repulsion and the nature of the whole molecular orbital framework."),

  // ── Section 3: Axial/Equatorial in TBP species ───────────────────────────
  major(3),
  p("In a trigonal bipyramid, the two axial bonds are usually longer and weaker than the three equatorial bonds. Each axial bond lies at 90 degrees to all three equatorial bonds, whereas each equatorial bond has only two 90-degree interactions. Greater repulsion around the axial direction reduces axial bond strength and increases axial bond length."),
  formula("\\text{PF}_5: \\ P\\text{-F(axial)} > P\\text{-F(equatorial)} \\ \\text{in bond length}"),
  callout("JEE key idea", "The old sp3d picture can be used as a geometry mnemonic, but modern bonding does not require substantial use of low-lying d orbitals on the central atom. The axial/equatorial difference follows from the molecular geometry and three-centre bonding framework."),

  sub("SF4, BrF3 and IF7"),
  bullets([
    "In SF4, the lone pair occupies an equatorial site because that position has fewer 90-degree interactions. Axial S-F bonds are longer than equatorial S-F bonds.",
    "In BrF3, both lone pairs occupy equatorial sites, giving a T-shaped molecule. The two axial Br-F bonds and the equatorial Br-F bond are not equivalent.",
    "In IF7 (pentagonal bipyramidal), axial and equatorial bonds are also geometrically distinct; a simple universal ordering should not be quoted without structural data because ligand-ligand repulsion, orbital size and relativistic effects all contribute.",
  ]),

  // ── Section 4: Verified Bond-Length Comparisons ──────────────────────────
  major(4),
  table(
    ["Comparison", "Verified qualitative order", "Explanation"],
    [
      ["B-F in BF3 vs BF4-", "BF3 < BF4-", "BF3 has strong pi donation from F lone pairs into the empty p orbital of B; in BF4- this pi interaction is absent and B is sp3."],
      ["Be-F in BeF2 vs [BeF4]2-", "BeF2 < [BeF4]2- (gas-phase/localized model)", "Linear BeF2 has more s-character at Be and shorter bonds; coordination and charge lengthen bonds in the tetrafluoroberyllate ion."],
      ["C-C in C2H6 vs C2F6", "C2H6 < C2F6 (typical)", "Strong electron withdrawal and F...F repulsions lengthen the C-C bond in C2F6."],
      ["C-F in CF4, CHF3, CH2F2, CH3F", "CF4 generally shortest; values are close and not governed by one rule alone", "Substitution changes bond polarity, hyperconjugation and rehybridization. Avoid memorizing an oversimplified monotonic order without data."],
      ["S-S in S2Cl2 vs S2F2", "Context-dependent conformationally; no universal order from size alone", "Bond length depends on conformation, lone-pair repulsion and substituent electronegativity."],
      ["O-O in H2O2 vs F2O2", "H2O2 usually longer than O-O in O2F2", "Electron withdrawal by F can contract the O-O framework, though exact values are phase- and conformer-dependent."],
    ]
  ),
  table(
    ["Bond compared", "Reliable trend", "Reason"],
    [
      ["S-O in SOF2 vs SO2F2", "SO2F2 generally shorter", "SO2F2 has two strongly polarized S=O-type bonds and no lone pair on S; SOF2 has one lone pair and lower effective S-O multiple-bond character."],
      ["S-O in SOCl2 vs SO2Cl2", "SO2Cl2 generally shorter", "Same structural argument as above."],
      ["S-O in SOF2 vs SOCl2", "SOF2 often shorter", "F withdraws electron density more strongly and can enhance S-O bond contraction."],
      ["S-O in SO2F2 vs SO2Cl2", "SO2F2 often shorter", "The more electronegative F substituents increase positive character on S and strengthen S-O bonding."],
      ["P-O in POF3, POCl3, POBr3", "POF3 < POCl3 < POBr3 (typical)", "Heavier, less electronegative halogens alter P-O polarization and allow slightly longer P-O bonds."],
      ["P-Cl in PCl3 vs POCl3", "PCl3 generally longer", "The phosphoryl oxygen withdraws electron density and contracts P-Cl bonds in POCl3."],
      ["P-C in PMe3 vs OPMe3", "PMe3 generally longer", "Oxidation to phosphine oxide changes hybridization/polarization and often contracts P-C bonds."],
    ]
  ),
  callout("Warning / limitation", "Several handwritten orders in the source were based on a single-factor s-character rule. For many fluorinated, hypervalent or heavy-element molecules, that is not sufficient. Trends marked 'typical' are qualitative and can vary slightly with physical state and measurement method."),

  // ── Section 5: Bond Angle ─────────────────────────────────────────────────
  major(5),
  p("Bond angle is the angle between two bonds that share a common central atom. The observed angle is controlled by the electron-domain geometry, the number and type of lone pairs, multiple bonds, ligand electronegativity, ligand size and the degree of hybridization."),

  sub("Fundamental VSEPR order of repulsions"),
  formula("\\text{lone pair-lone pair} > \\text{lone pair-bond pair} > \\text{bond pair-bond pair}"),
  p("A multiple bond occupies more angular space than a single bond because its electron density is greater. Therefore, for the same central atom and comparable ligands:"),
  formula("\\text{lone pair} > \\text{multiple bond} > \\text{single bond} \\quad \\text{(effective repulsion)}"),
  callout("Warning / limitation", "VSEPR predicts qualitative geometry and many angle trends, but it does not provide exact angles. Exact values arise from the complete electronic structure."),

  table(
    ["Species", "Shape / ideal angle", "Observed or expected trend"],
    [
      ["BF3", "Trigonal planar, 120 deg", "All F-B-F angles are 120 deg."],
      ["BCl3", "Trigonal planar, 120 deg", "All Cl-B-Cl angles are 120 deg; ligand size does not distort a perfectly symmetric XY3 molecule."],
      ["CO2", "Linear, 180 deg", "O-C-O = 180 deg."],
      ["CO3 2-", "Trigonal planar, 120 deg", "All O-C-O angles are 120 deg."],
      ["CH4", "Tetrahedral, 109.5 deg", "All H-C-H angles are 109.5 deg."],
      ["NH3", "Trigonal pyramidal, 107 deg", "One lone pair compresses H-N-H below 109.5 deg."],
      ["H2O", "Bent, 104.5 deg", "Two lone pairs compress H-O-H further."],
      ["SO2", "Bent, slightly below 120 deg", "One lone pair in a trigonal electron-domain arrangement."],
      ["SO3", "Trigonal planar, 120 deg", "No lone pair on S in the molecular geometry."],
      ["NH2-", "Bent, angle near 104 deg", "Two lone pairs; exact value depends on environment."],
    ]
  ),

  sub("Group 15 hydrides"),
  formula("NH_3 > PH_3 > AsH_3 > SbH_3"),
  p("This trend is not best explained by a steadily changing sp3 hybridization. In the heavier hydrides, s-p mixing becomes weak and the E-H bonds use orbitals close to pure p orbitals, giving angles close to 90 degrees."),

  table(
    ["Comparison", "Correct qualitative order / conclusion", "Reason"],
    [
      ["OF2, OCl2, OBr2", "Often OF2 < OCl2 < OBr2 in angle", "Larger terminal atoms increase ligand-ligand repulsion; electronegativity effects also alter bond-pair localization."],
      ["SO4 2- vs SO3 2-", "SO4 2- > SO3 2-", "Tetrahedral sulfate ~109.5 deg; pyramidal sulfite has a lone pair and O-S-O angles are smaller."],
      ["ClO4-, ClO3-, ClO2-", "ClO4- > ClO3- > ClO2- (general)", "Increasing lone-pair count compresses the bond angle."],
      ["PCl3 vs POCl3", "POCl3 has larger Cl-P-Cl angle", "The P=O bond repels P-Cl domains strongly and changes the tetrahedral distortion."],
      ["PMe3 vs OPMe3", "OPMe3 has larger C-P-C angle", "Oxidation removes the lone pair and produces a more tetrahedral arrangement."],
      ["SOF2 vs SO2F2", "SO2F2 generally has larger F-S-F angle", "SOF2 has a lone pair that compresses the F-S-F angle."],
      ["SOCl2 vs SO2Cl2", "SO2Cl2 generally has larger Cl-S-Cl angle", "SOCl2 has a lone pair on sulfur."],
      ["NCl3, PCl3, AsCl3", "NCl3 > PCl3 > AsCl3 (typical)", "Heavier central atoms use less hybridized p-like bonding orbitals; angles approach 90 deg."],
    ]
  ),

  // ── Section 6: High-Yield Rules and Traps ────────────────────────────────
  major(6),
  table(
    ["Rule", "Valid use", "Common trap"],
    [
      ["Higher bond order -> shorter bond", "Same atom pair or closely comparable species", "Do not compare unrelated atom pairs solely by bond order."],
      ["Greater s-character -> shorter bond", "Same central atom and similar substituents", "Charge and polarity may override the trend."],
      ["Lone pairs compress bond angles", "Same electron-domain geometry", "Terminal-atom size and multiple bonds can change the ordering."],
      ["Axial bond longer in TBP", "PF5, SF4, BrF3-type frameworks", "Do not transfer this blindly to pentagonal bipyramidal IF7."],
      ["Resonance equalizes bonds", "Equivalent resonance positions", "Non-equivalent bonds such as C-OH in HCO3- are not all equal."],
      ["Electronegativity changes angle", "Useful within a controlled series", "There are competing central-atom and terminal-atom electronegativity effects."],
      ["d(pi)-p(pi) bonding in 3rd period", "Old exam shorthand only", "Modern description emphasizes delocalized MOs; substantial d-orbital hybridization is not required."],
    ]
  ),
  callout("Warning / limitation", "sp3d = sp2 + pd is a geometrical basis decomposition sometimes used for trigonal-bipyramidal directions, not an energetic equation and not evidence that main-group d orbitals participate strongly in bonding."),

  // ── Section 7: Practice Problems ──────────────────────────────────────────
  major(7),
  numbered([
    "Arrange the C-O bond lengths in CO, CO2 and CO3 2-.",
    "Arrange N-N bond lengths in N2, N2H2 and N2H4.",
    "Compare axial and equatorial P-F bond lengths in PF5.",
    "Arrange the H-E-H bond angles in NH3, PH3, AsH3 and SbH3.",
    "Compare B-F bond lengths in BF3 and BF4-.",
    "Arrange the O-O bond lengths in O2, O3 and H2O2.",
    "Which has the larger bond angle: SO2 or SO3?",
    "Which has the larger Cl-P-Cl angle: PCl3 or POCl3?",
    "Calculate average N-O bond order in NO3-.",
    "Explain why all C-O bonds of CO3 2- are equal although a single Lewis structure shows one C=O and two C-O bonds.",
    "Why is the C-H bond in acetylene shorter than in ethane?",
    "Why does NH3 have a much larger bond angle than PH3?",
  ]),
  sub("Answer key"),
  numbered([
    "CO < CO2 < CO3 2-.",
    "N2 < N2H2 < N2H4.",
    "P-F(axial) > P-F(equatorial).",
    "NH3 > PH3 > AsH3 > SbH3.",
    "BF3 < BF4-.",
    "O2 < O3 < H2O2.",
    "SO3 has 120 deg; SO2 is slightly below 120 deg, so SO3 > SO2.",
    "POCl3 generally has the larger Cl-P-Cl angle.",
    "4/3.",
    "Resonance delocalizes pi bonding and charge over three equivalent C-O positions.",
    "The C(sp)-H bond has greater s-character and is therefore more contracted.",
    "NH3 involves appreciable s-p hybridization; heavier PH3 uses nearly pure p orbitals for P-H bonding, so its angle is close to 90 deg.",
  ]),
];
