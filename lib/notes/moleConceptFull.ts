export type MoleNoteSectionKind =
  | "concept"
  | "engine"
  | "formula"
  | "example"
  | "practice"
  | "revision"
  | "pyq";

export interface MoleFormulaCard {
  title: string;
  formula: string;
  use: string;
  caution?: string;
}

export interface MoleSolvedExample {
  title: string;
  exam: "Board" | "JEE Main" | "NEET";
  question: string;
  steps: string[];
  answer: string;
  insight: string;
}

export interface MolePracticeQuestion {
  question: string;
  options: string[];
  answer: string;
  solution: string;
}

export interface MoleNoteSection {
  id: string;
  title: string;
  kind: MoleNoteSectionKind;
  summary: string;
  keyIdeas: string[];
  formulas?: MoleFormulaCard[];
  examples?: MoleSolvedExample[];
}

export const moleConceptToc = [
  "Why Mole Exists",
  "Avogadro's Number",
  "Mole Conversion Engine",
  "Molar Mass",
  "Mole-Mass Relation",
  "Mole-Particle Relation",
  "Mole-Gas Volume at STP",
  "% Composition",
  "Empirical Formula",
  "Molecular Formula",
  "Stoichiometry",
  "Limiting Reagent",
  "Excess Reagent",
  "Percent Yield",
  "POAC",
  "Concentration Terms Intro",
  "Board Solved Examples",
  "JEE Main Solved Examples",
  "NEET-Style Solved Examples",
  "Common Mistakes",
  "Formula Sheet",
  "One-Page Revision",
  "Practice MCQs",
  "PYQ Section",
];

export const moleFormulaCards: MoleFormulaCard[] = [
  {
    title: "Moles from mass",
    formula: "n=\\frac{m}{M}",
    use: "Use when mass and molar mass are known.",
    caution: "Mass and molar mass must be in matching units, usually grams and grams per mole.",
  },
  {
    title: "Particles from moles",
    formula: "N=nN_A",
    use: "Use for atoms, molecules, ions, electrons, or formula units.",
    caution: "If the question asks atoms in molecules, multiply by atoms per molecule.",
  },
  {
    title: "Moles from particles",
    formula: "n=\\frac{N}{N_A}",
    use: "Converts a counted number of entities into amount of substance.",
  },
  {
    title: "Gas volume at STP",
    formula: "n=\\frac{V}{22.7\\,L}",
    use: "Use for ideal gases at NCERT STP: 273.15 K and 1 bar.",
    caution: "At 1 atm STP many older problems use 22.4 L. Read the pressure.",
  },
  {
    title: "Mass percent",
    formula: "\\%\\,X=\\frac{\\text{mass of }X}{\\text{mass of compound}}\\times100",
    use: "Finds elemental percentage composition.",
  },
  {
    title: "Empirical formula multiplier",
    formula: "x=\\frac{\\text{molecular mass}}{\\text{empirical formula mass}}",
    use: "Molecular formula equals empirical formula multiplied by x.",
  },
  {
    title: "Stoichiometric mole ratio",
    formula: "\\frac{n_A}{a}=\\frac{n_B}{b}=\\frac{n_C}{c}",
    use: "For balanced reaction aA + bB -> cC.",
  },
  {
    title: "Percent yield",
    formula: "\\%\\,\\text{yield}=\\frac{\\text{actual yield}}{\\text{theoretical yield}}\\times100",
    use: "Compares laboratory product to stoichiometric maximum.",
  },
  {
    title: "POAC",
    formula: "\\text{gram atoms of element before}=\\text{gram atoms of element after}",
    use: "Tracks a conserved atom through a reaction without writing every intermediate.",
  },
  {
    title: "Molarity",
    formula: "M=\\frac{n_{solute}}{V_{solution}(L)}",
    use: "Moles of solute per litre of solution.",
    caution: "Temperature dependent because solution volume changes with temperature.",
  },
  {
    title: "Molality",
    formula: "m=\\frac{n_{solute}}{\\text{mass of solvent in kg}}",
    use: "Moles of solute per kilogram of solvent.",
  },
  {
    title: "Mole fraction",
    formula: "x_i=\\frac{n_i}{\\sum n}",
    use: "Fraction of total moles contributed by component i.",
  },
];

const boardExamples: MoleSolvedExample[] = [
  {
    title: "Counting atoms in carbon dioxide",
    exam: "Board",
    question: "Find the number of oxygen atoms present in 0.25 mol of CO2.",
    steps: [
      "0.25 mol CO2 contains 0.25 mol molecules of CO2.",
      "Each molecule of CO2 contains 2 oxygen atoms.",
      "Moles of oxygen atoms = 0.25 x 2 = 0.50 mol.",
      "Number of oxygen atoms = 0.50 x 6.022 x 10^23.",
    ],
    answer: "3.011 x 10^23 oxygen atoms.",
    insight: "Always decide whether the question asks molecules or atoms.",
  },
  {
    title: "Molar mass from formula",
    exam: "Board",
    question: "Calculate the molar mass of CaCO3. Use Ca = 40, C = 12, O = 16.",
    steps: [
      "CaCO3 contains 1 Ca, 1 C, and 3 O atoms.",
      "Molar mass = 40 + 12 + 3 x 16.",
      "Molar mass = 40 + 12 + 48.",
    ],
    answer: "100 g mol^-1.",
    insight: "Formula subscripts multiply only the element immediately before them unless brackets are present.",
  },
  {
    title: "Percentage composition",
    exam: "Board",
    question: "Find the percentage of oxygen in water.",
    steps: [
      "Molar mass of H2O = 2 x 1 + 16 = 18 g mol^-1.",
      "Mass of oxygen in 1 mol H2O = 16 g.",
      "Oxygen percentage = 16/18 x 100.",
    ],
    answer: "88.89% oxygen by mass.",
    insight: "Percent composition is a mass percentage, not an atom-count percentage.",
  },
  {
    title: "Empirical formula from percentage",
    exam: "Board",
    question: "A compound has 40% C, 6.67% H, and 53.33% O. Find its empirical formula.",
    steps: [
      "Assume 100 g compound: C = 40 g, H = 6.67 g, O = 53.33 g.",
      "Moles: C = 40/12 = 3.33, H = 6.67/1 = 6.67, O = 53.33/16 = 3.33.",
      "Divide by smallest: C = 1, H = 2, O = 1.",
    ],
    answer: "CH2O.",
    insight: "The 100 g assumption converts percentages directly into grams.",
  },
  {
    title: "Solution molarity",
    exam: "Board",
    question: "5.85 g NaCl is dissolved to prepare 500 mL solution. Find molarity. NaCl = 58.5 g mol^-1.",
    steps: [
      "Moles of NaCl = 5.85/58.5 = 0.100 mol.",
      "Volume of solution = 500 mL = 0.500 L.",
      "Molarity = 0.100/0.500.",
    ],
    answer: "0.200 M.",
    insight: "Molarity uses final solution volume, not water volume added.",
  },
];

const jeeExamples: MoleSolvedExample[] = [
  {
    title: "Combustion stoichiometry",
    exam: "JEE Main",
    question: "1.0 g H2 is completely burnt in oxygen. How many molecules of water are formed?",
    steps: [
      "Balanced equation: 2H2 + O2 -> 2H2O.",
      "Moles of H2 = 1.0/2 = 0.50 mol.",
      "The mole ratio H2:H2O is 1:1.",
      "Moles of H2O formed = 0.50 mol.",
      "Molecules = 0.50 x 6.022 x 10^23.",
    ],
    answer: "3.011 x 10^23 molecules of H2O.",
    insight: "After balancing, coefficients behave like mole conversion factors.",
  },
  {
    title: "Limiting reagent by ratio",
    exam: "JEE Main",
    question: "For N2 + 3H2 -> 2NH3, 2 mol N2 and 3 mol H2 are mixed. Find limiting reagent and NH3 formed.",
    steps: [
      "Required H2 for 2 mol N2 = 2 x 3 = 6 mol H2.",
      "Available H2 = 3 mol, less than required.",
      "H2 is limiting.",
      "From 3 mol H2, NH3 formed = 3 x 2/3 = 2 mol.",
    ],
    answer: "H2 is limiting; 2 mol NH3 forms.",
    insight: "Compare available moles divided by coefficient: N2 gives 2/1 = 2, H2 gives 3/3 = 1, so H2 limits.",
  },
  {
    title: "Molecular formula from empirical formula",
    exam: "JEE Main",
    question: "A compound has empirical formula CH2O and molar mass 180 g mol^-1. Find molecular formula.",
    steps: [
      "Empirical formula mass of CH2O = 12 + 2 + 16 = 30.",
      "Multiplier x = 180/30 = 6.",
      "Multiply every subscript in CH2O by 6.",
    ],
    answer: "C6H12O6.",
    insight: "Do not multiply atomic masses; multiply the empirical formula subscripts.",
  },
  {
    title: "Gas volume at STP",
    exam: "JEE Main",
    question: "What volume will 11 g CO2 occupy at 1 atm STP?",
    steps: [
      "Molar mass of CO2 = 44 g mol^-1.",
      "Moles of CO2 = 11/44 = 0.25 mol.",
      "At 1 atm STP, 1 mol ideal gas occupies 22.4 L.",
      "Volume = 0.25 x 22.4 L.",
    ],
    answer: "5.6 L.",
    insight: "If pressure is stated as 1 atm, use 22.4 L; if NCERT STP at 1 bar, use 22.7 L.",
  },
  {
    title: "POAC in carbonate decomposition",
    exam: "JEE Main",
    question: "How many moles of CO2 are obtained by heating 10 g CaCO3 completely? CaCO3 = 100 g mol^-1.",
    steps: [
      "Reaction: CaCO3 -> CaO + CO2.",
      "Moles of CaCO3 = 10/100 = 0.10 mol.",
      "One carbonate unit gives one CO2 molecule.",
      "Moles of CO2 = 0.10 mol.",
    ],
    answer: "0.10 mol CO2.",
    insight: "Tracking carbon atoms gives the same result quickly: one C in CaCO3 becomes one C in CO2.",
  },
  {
    title: "Excess reagent left",
    exam: "JEE Main",
    question: "4 mol Al reacts with 3 mol O2 to form Al2O3. Find excess reagent left. Reaction: 4Al + 3O2 -> 2Al2O3.",
    steps: [
      "The given moles match the exact coefficient ratio 4:3.",
      "Both reactants are fully consumed.",
      "No reactant remains in excess.",
    ],
    answer: "No excess reagent remains.",
    insight: "Exact coefficient ratio means no limiting or excess reagent.",
  },
  {
    title: "Percent yield",
    exam: "JEE Main",
    question: "The theoretical yield of a product is 20 g but only 15 g is isolated. Find percent yield.",
    steps: [
      "Percent yield = actual yield/theoretical yield x 100.",
      "Percent yield = 15/20 x 100.",
    ],
    answer: "75%.",
    insight: "Percent yield can be less than 100 because reactions may be incomplete or product may be lost.",
  },
];

const neetExamples: MoleSolvedExample[] = [
  {
    title: "Formula units in common salt",
    exam: "NEET",
    question: "How many formula units are present in 5.85 g NaCl? NaCl = 58.5 g mol^-1.",
    steps: [
      "Moles of NaCl = 5.85/58.5 = 0.100 mol.",
      "Formula units = 0.100 x 6.022 x 10^23.",
    ],
    answer: "6.022 x 10^22 formula units.",
    insight: "Ionic compounds are counted as formula units, not molecules.",
  },
  {
    title: "Moles of atoms in oxygen gas",
    exam: "NEET",
    question: "How many moles of oxygen atoms are present in 0.40 mol O2?",
    steps: [
      "Each O2 molecule has two oxygen atoms.",
      "Moles of oxygen atoms = 2 x moles of O2.",
      "Moles of oxygen atoms = 2 x 0.40.",
    ],
    answer: "0.80 mol oxygen atoms.",
    insight: "Moles of atoms can be larger than moles of molecules.",
  },
  {
    title: "Mass from particles",
    exam: "NEET",
    question: "Find the mass of 3.011 x 10^23 molecules of CO2.",
    steps: [
      "Moles of CO2 = (3.011 x 10^23)/(6.022 x 10^23) = 0.50 mol.",
      "Molar mass of CO2 = 44 g mol^-1.",
      "Mass = nM = 0.50 x 44.",
    ],
    answer: "22 g.",
    insight: "Particles -> moles -> mass is the safest path.",
  },
  {
    title: "Mass percent in carbon dioxide",
    exam: "NEET",
    question: "Find the mass percentage of carbon in CO2.",
    steps: [
      "Molar mass of CO2 = 12 + 2 x 16 = 44.",
      "Mass of carbon in one mole CO2 = 12 g.",
      "Percentage carbon = 12/44 x 100.",
    ],
    answer: "27.27%.",
    insight: "Mass percent is often tested with simple oxides and hydrates.",
  },
  {
    title: "Mole fraction intro",
    exam: "NEET",
    question: "A solution contains 2 mol ethanol and 3 mol water. Find mole fraction of ethanol.",
    steps: [
      "Total moles = 2 + 3 = 5.",
      "Mole fraction of ethanol = 2/5.",
    ],
    answer: "0.40.",
    insight: "Mole fractions of all components must add to 1.",
  },
];

export const moleSolvedExamples = [...boardExamples, ...jeeExamples, ...neetExamples];

export const moleSections: MoleNoteSection[] = [
  {
    id: "why-mole-exists",
    title: "Why Mole Exists",
    kind: "concept",
    summary:
      "Chemistry happens through atoms, ions, molecules, and formula units, but laboratory balances measure grams. The mole is the bridge between invisible entities and measurable mass.",
    keyIdeas: [
      "Atoms are too small to count one by one in the laboratory. A practical counting unit is needed, just as a dozen is used for eggs.",
      "Chemical equations speak in particle ratios: 2 molecules H2 react with 1 molecule O2 to form 2 molecules H2O. The same ratio is true for moles.",
      "One mole is not a mass by itself. One mole of hydrogen atoms, carbon atoms, water molecules, and sodium ions all contain the same number of entities, but their masses are different.",
      "The mole lets us move from microscopic ratios to macroscopic grams without changing the balanced equation.",
      "A correct mole calculation always identifies the entity being counted: atom, molecule, ion, electron, or formula unit.",
    ],
  },
  {
    id: "avogadro-number",
    title: "Avogadro's Number",
    kind: "concept",
    summary:
      "Avogadro's constant is the fixed number of entities in exactly one mole. It is the counting constant of chemistry.",
    keyIdeas: [
      "The accepted fixed value is \\(N_A=6.02214076\\times10^{23}\\,mol^{-1}\\). In exam calculations, \\(6.022\\times10^{23}\\) or \\(6.02\\times10^{23}\\) is normally used.",
      "One mole of carbon atoms contains \\(N_A\\) carbon atoms. One mole of water molecules contains \\(N_A\\) water molecules.",
      "If a molecule contains multiple atoms, multiply by the number of atoms per molecule only after counting molecules.",
      "For ionic solids such as NaCl, the counted entity is a formula unit unless the question asks for ions.",
      "For electrons, one mole of electrons contains \\(N_A\\) electrons and carries one faraday of charge in electrochemistry.",
    ],
    formulas: [
      { title: "Avogadro relation", formula: "N=nN_A", use: "Particles from moles." },
      { title: "Inverse relation", formula: "n=\\frac{N}{N_A}", use: "Moles from particles." },
    ],
  },
  {
    id: "mole-conversion-engine",
    title: "Mole Conversion Engine",
    kind: "engine",
    summary:
      "Most Mole Concept problems are solved by entering the mole highway from mass, particles, or gas volume, then leaving through the required quantity.",
    keyIdeas: [
      "Mass to moles: divide by molar mass.",
      "Particles to moles: divide by Avogadro's constant.",
      "Gas volume at STP to moles: divide by molar volume.",
      "Moles to reaction amount: use balanced equation coefficient ratios.",
      "Moles to final answer: multiply by molar mass, Avogadro's constant, gas volume, or a stoichiometric coefficient as required.",
      "The common safe route is: given quantity -> moles -> required quantity.",
    ],
    formulas: [
      { title: "Central conversion", formula: "n=\\frac{m}{M}=\\frac{N}{N_A}=\\frac{V_{STP}}{22.7\\,L}", use: "Single-line mole conversion engine." },
    ],
  },
  {
    id: "molar-mass",
    title: "Molar Mass",
    kind: "concept",
    summary:
      "Molar mass is the mass of one mole of entities. Numerically it matches relative atomic or molecular mass when expressed in grams per mole.",
    keyIdeas: [
      "Atomic masses are average values because naturally occurring elements often contain isotopes.",
      "Molar mass of a molecule is obtained by adding atomic masses multiplied by subscripts.",
      "For brackets, multiply every atom inside the bracket by the outside subscript.",
      "For hydrates, include water of crystallisation in molar mass calculations.",
      "Molar mass has units \\(g\\,mol^{-1}\\), while relative molecular mass is unitless.",
    ],
    formulas: [
      { title: "Molar mass from formula", formula: "M=\\sum n_iA_i", use: "Add atomic masses according to the chemical formula." },
    ],
  },
  {
    id: "mole-mass-relation",
    title: "Mole-Mass Relation",
    kind: "formula",
    summary:
      "The mass-mole relation is the most used entry point in stoichiometry because balances give mass but equations use moles.",
    keyIdeas: [
      "If mass is given, convert it to moles before using a balanced chemical equation.",
      "If moles are known and mass is asked, multiply by molar mass.",
      "Gram atomic mass means the mass of one mole of atoms; gram molecular mass means the mass of one mole of molecules.",
      "For mixtures, do not use a single molar mass unless composition is known.",
      "Check whether the mass given is of element, compound, solute, product, or sample.",
    ],
    formulas: [
      { title: "Mass to moles", formula: "n=\\frac{m}{M}", use: "Core relation for gravimetric problems." },
      { title: "Moles to mass", formula: "m=nM", use: "Convert theoretical moles into grams." },
    ],
  },
  {
    id: "mole-particle-relation",
    title: "Mole-Particle Relation",
    kind: "formula",
    summary:
      "Particle counting is direct once the counted entity is clear. A molecule count is not automatically an atom count.",
    keyIdeas: [
      "Molecules of CO2 and atoms in CO2 differ by a factor of 3.",
      "Molecules of O2 and oxygen atoms differ by a factor of 2.",
      "Formula units of NaCl and total ions in NaCl differ by a factor of 2.",
      "Moles of molecules multiplied by atoms per molecule gives moles of atoms.",
      "For polyatomic ions, count ions first, then atoms inside the ion only if asked.",
    ],
    formulas: [
      { title: "Molecules from moles", formula: "N_{molecules}=nN_A", use: "Count molecules." },
      { title: "Atoms in molecules", formula: "N_{atoms}=nN_A\\times\\text{atoms per molecule}", use: "Count atoms in molecular substances." },
    ],
  },
  {
    id: "mole-gas-volume-stp",
    title: "Mole-Gas Volume at STP",
    kind: "formula",
    summary:
      "For ideal gases, equal moles occupy equal volumes at the same temperature and pressure. STP volume is a shortcut for gas mole calculations.",
    keyIdeas: [
      "NCERT STP is 273.15 K and 1 bar, where one mole ideal gas occupies about 22.7 L.",
      "Older exam statements sometimes use 273 K and 1 atm, where one mole ideal gas occupies about 22.4 L.",
      "Use volume ratios directly for gaseous reactants and products only when all gases are at the same temperature and pressure.",
      "Do not use 22.4 L for liquids or solids.",
      "If T and P are not STP, use the ideal gas equation instead of the STP shortcut.",
    ],
    formulas: [
      { title: "NCERT STP", formula: "V_m\\approx22.7\\,L\\,mol^{-1}", use: "273.15 K and 1 bar." },
      { title: "Old STP", formula: "V_m\\approx22.4\\,L\\,mol^{-1}", use: "273.15 K and 1 atm." },
      { title: "Ideal gas equation", formula: "PV=nRT", use: "General gas mole calculation." },
    ],
  },
  {
    id: "percentage-composition",
    title: "% Composition",
    kind: "formula",
    summary:
      "Percentage composition tells how much of a compound's mass comes from each element.",
    keyIdeas: [
      "Mass percent is based on mass, not number of atoms.",
      "For a compound, calculate mass contributed by the element in one mole of compound.",
      "Divide the element mass by molar mass of compound and multiply by 100.",
      "Percent composition is the starting point for empirical formula problems.",
      "The sum of all elemental percentages in a pure compound should be close to 100%.",
    ],
    formulas: [
      { title: "Element percentage", formula: "\\%X=\\frac{\\text{mass of }X\\text{ in formula}}{\\text{molar mass of compound}}\\times100", use: "Composition from known formula." },
    ],
  },
  {
    id: "empirical-formula",
    title: "Empirical Formula",
    kind: "concept",
    summary:
      "The empirical formula is the simplest whole-number ratio of atoms in a compound.",
    keyIdeas: [
      "If percentages are given, assume a 100 g sample.",
      "Convert each element mass into moles by dividing by atomic mass.",
      "Divide all mole values by the smallest mole value.",
      "If ratios are near 1.5, 2.5, 3.5, multiply all ratios by 2. If near 1.33 or 1.67, multiply by 3.",
      "Do not round 1.33 to 1 or 1.67 to 2 too early.",
      "The empirical formula may be the same as the molecular formula, but not always.",
    ],
  },
  {
    id: "molecular-formula",
    title: "Molecular Formula",
    kind: "concept",
    summary:
      "The molecular formula gives the actual number of atoms in one molecule. It is an integral multiple of the empirical formula.",
    keyIdeas: [
      "Find empirical formula first.",
      "Calculate empirical formula mass.",
      "Divide given molar mass by empirical formula mass to get multiplier.",
      "Multiply every subscript in empirical formula by the multiplier.",
      "The multiplier should be a whole number for a valid molecular formula.",
    ],
    formulas: [
      { title: "Molecular formula multiplier", formula: "x=\\frac{M_{molecular}}{M_{empirical}}", use: "Actual formula from empirical formula." },
      { title: "Molecular formula", formula: "\\text{MF}=x\\times\\text{EF}", use: "Multiply all empirical subscripts." },
    ],
  },
  {
    id: "stoichiometry",
    title: "Stoichiometry",
    kind: "engine",
    summary:
      "Stoichiometry uses a balanced equation to convert moles of one substance into moles of another.",
    keyIdeas: [
      "Balance the equation first. Never use an unbalanced equation for mole ratios.",
      "Convert given mass, particles, or volume into moles.",
      "Use coefficient ratios from the balanced equation.",
      "Convert final moles into the asked unit.",
      "Coefficients represent ratios of molecules, moles, and gas volumes under same T and P.",
      "Stoichiometry is exact on paper; real experiments may have lower yield.",
    ],
    formulas: [
      { title: "General reaction ratio", formula: "aA+bB\\rightarrow cC+dD", use: "Coefficients control mole ratios." },
      { title: "Mole ratio", formula: "\\frac{n_A}{a}=\\frac{n_B}{b}=\\frac{n_C}{c}=\\frac{n_D}{d}", use: "Relates all species in a balanced reaction." },
    ],
  },
  {
    id: "limiting-reagent",
    title: "Limiting Reagent",
    kind: "engine",
    summary:
      "The limiting reagent is consumed first and fixes the maximum possible amount of product.",
    keyIdeas: [
      "Convert every reactant amount into moles.",
      "Divide moles of each reactant by its balanced coefficient.",
      "The smallest value identifies the limiting reagent.",
      "Product must be calculated from the limiting reagent only.",
      "A reactant with larger mass is not necessarily in excess; compare moles per coefficient.",
      "If reactants are in exact coefficient ratio, there is no excess reagent.",
    ],
    formulas: [
      { title: "Limiting test", formula: "\\text{limiting value}=\\frac{n_{reactant}}{\\text{coefficient}}", use: "Smallest value limits." },
    ],
  },
  {
    id: "excess-reagent",
    title: "Excess Reagent",
    kind: "engine",
    summary:
      "The excess reagent remains after the limiting reagent has been completely consumed.",
    keyIdeas: [
      "First identify the limiting reagent.",
      "Use the limiting reagent to calculate how much of the other reactant is consumed.",
      "Excess left = initial amount - consumed amount.",
      "Report leftover in the unit asked: moles, grams, molecules, or volume.",
      "If both reactants match coefficient ratio exactly, excess left is zero.",
    ],
    formulas: [
      { title: "Excess left", formula: "n_{left}=n_{initial}-n_{consumed}", use: "Compute after limiting reagent is known." },
    ],
  },
  {
    id: "percent-yield",
    title: "Percent Yield",
    kind: "formula",
    summary:
      "Percent yield compares actual product obtained with theoretical product predicted by stoichiometry.",
    keyIdeas: [
      "Theoretical yield comes from balanced equation and limiting reagent.",
      "Actual yield is experimental product obtained.",
      "Percent yield below 100% can result from incomplete reaction, side reactions, or product loss during purification.",
      "Percent yield above 100% usually means product is impure, wet, or measurement is wrong.",
      "Use same units for actual and theoretical yield.",
    ],
    formulas: [
      { title: "Percent yield", formula: "\\%\\,Y=\\frac{Y_{actual}}{Y_{theoretical}}\\times100", use: "Reaction yield." },
    ],
  },
  {
    id: "poac",
    title: "POAC",
    kind: "engine",
    summary:
      "POAC, or principle of atom conservation, says atoms of an element are conserved across a reaction. It is a powerful shortcut in many mole problems.",
    keyIdeas: [
      "Choose an element that appears in known reactant and desired product.",
      "Calculate gram atoms or moles of that element before reaction.",
      "Set it equal to gram atoms or moles of the same element after reaction.",
      "POAC is especially useful for chains, mixtures, carbonates, combustion, and metal oxides.",
      "POAC does not replace balancing when multiple elements or limiting reagents are involved; it is a controlled shortcut.",
    ],
    formulas: [
      { title: "POAC statement", formula: "\\text{moles of atom }X\\text{ before}=\\text{moles of atom }X\\text{ after}", use: "Track one conserved element." },
    ],
  },
  {
    id: "concentration-terms",
    title: "Concentration Terms Intro",
    kind: "concept",
    summary:
      "Concentration terms describe how much solute is present relative to solution or solvent. Mole Concept supplies the mole part of every concentration calculation.",
    keyIdeas: [
      "Molarity uses volume of solution in litres.",
      "Molality uses mass of solvent in kilograms.",
      "Mole fraction uses moles of component divided by total moles.",
      "Mass percentage uses mass of solute divided by mass of solution.",
      "Volume percentage is used for liquid-liquid mixtures.",
      "ppm is used for very dilute solutions.",
      "Normality equals molarity multiplied by n-factor and depends on reaction context.",
    ],
    formulas: [
      { title: "Molarity", formula: "M=\\frac{n_{solute}}{V_{solution}(L)}", use: "Most common solution concentration." },
      { title: "Molality", formula: "m=\\frac{n_{solute}}{kg\\,solvent}", use: "Temperature-independent concentration." },
      { title: "Mole fraction", formula: "x_i=\\frac{n_i}{n_{total}}", use: "Dimensionless composition." },
      { title: "Mass percentage", formula: "\\%w/w=\\frac{w_{solute}}{w_{solution}}\\times100", use: "Mass composition of solutions." },
      { title: "Normality", formula: "N=M\\times n\\text{-factor}", use: "Equivalent concentration." },
    ],
  },
  {
    id: "board-solved-examples",
    title: "Board Solved Examples",
    kind: "example",
    summary:
      "Board-style examples emphasize clean definitions, units, and complete steps.",
    keyIdeas: [
      "Write the formula used before substituting values.",
      "Carry units through the calculation.",
      "State the entity counted: atoms, molecules, ions, or formula units.",
    ],
    examples: boardExamples,
  },
  {
    id: "jee-main-solved-examples",
    title: "JEE Main Solved Examples",
    kind: "example",
    summary:
      "JEE Main mole problems reward fast conversion, coefficient ratio control, and careful limiting reagent logic.",
    keyIdeas: [
      "Convert all reactants to moles before comparison.",
      "Use coefficient ratios only from the balanced equation.",
      "For gas-volume questions, first check whether all gases are at the same T and P.",
    ],
    examples: jeeExamples,
  },
  {
    id: "neet-style-solved-examples",
    title: "NEET-Style Solved Examples",
    kind: "example",
    summary:
      "NEET-style questions often test direct conversions, formula units, atom counts, and percentage composition.",
    keyIdeas: [
      "Use one clean conversion chain.",
      "Avoid overcomplicating direct mole-particle problems.",
      "Memorize common molar masses but still verify formula subscripts.",
    ],
    examples: neetExamples,
  },
  {
    id: "common-mistakes",
    title: "Common Mistakes",
    kind: "concept",
    summary:
      "Most wrong answers in Mole Concept come from entity confusion, unbalanced equations, early rounding, or using the wrong volume convention.",
    keyIdeas: [
      "Using molecular count as atom count without multiplying by atoms per molecule.",
      "Using grams directly in balanced equations instead of moles.",
      "Declaring the reactant with smaller mass as limiting without converting to moles.",
      "Using 22.4 L for every gas problem, even when the question states 1 bar STP.",
      "Rounding empirical formula ratios too early.",
      "Confusing molarity with molality.",
      "Using normality without identifying n-factor.",
      "Forgetting water of crystallisation in hydrate molar mass.",
      "Treating molecular formula and empirical formula as always identical.",
      "Reporting excess reagent consumed instead of excess reagent left.",
    ],
  },
  {
    id: "formula-sheet",
    title: "Formula Sheet",
    kind: "formula",
    summary:
      "These are the formulas that cover almost every JEE Main Mole Concept calculation.",
    keyIdeas: [
      "Learn formulas as conversion tools, not isolated memory lines.",
      "Every formula needs entity and unit awareness.",
      "The balanced equation is also a formula: its coefficients are mole ratios.",
    ],
    formulas: moleFormulaCards,
  },
  {
    id: "one-page-revision",
    title: "One-Page Revision",
    kind: "revision",
    summary:
      "A compact final revision pass for the chapter.",
    keyIdeas: [
      "One mole contains \\(6.022\\times10^{23}\\) entities.",
      "Moles are the central language: mass, particles, gas volume, and solution concentration should be converted through moles.",
      "\\(n=m/M\\), \\(N=nN_A\\), and \\(V=nV_m\\) are the three core conversions.",
      "Molar mass is obtained from formula mass in grams per mole.",
      "Empirical formula is simplest ratio; molecular formula is actual ratio.",
      "Balanced equation coefficients give mole ratios.",
      "Limiting reagent is found by smallest \\(n/coefficient\\).",
      "Excess left equals initial minus consumed.",
      "Percent yield compares actual yield to theoretical yield.",
      "POAC tracks one conserved element across a reaction.",
      "Molarity uses solution volume; molality uses solvent mass; mole fraction uses total moles.",
      "Never invent PYQs. Use verified question banks and official papers for PYQ practice.",
    ],
  },
  {
    id: "practice-mcqs",
    title: "Practice MCQs",
    kind: "practice",
    summary:
      "Original practice questions for self-check. These are not claimed as previous-year questions.",
    keyIdeas: [
      "Attempt without calculator first where possible.",
      "Write the conversion path before solving.",
      "Review the explanation even for correct answers.",
    ],
  },
  {
    id: "pyq-section",
    title: "PYQ Section",
    kind: "pyq",
    summary:
      "This section intentionally contains no fabricated previous-year questions. Use it as a verified PYQ gateway.",
    keyIdeas: [
      "No question is labelled as PYQ unless it is traceable to an official exam source or the app's verified PYQ bank.",
      "For now, revise the tags: Mole calculation, empirical formula, limiting reagent, stoichiometry, gas volume, and molarity.",
      "Use the PYQ Intelligence page to search Some Basic Concepts and filter by JEE Main when verified entries are available.",
    ],
  },
];

export const molePracticeQuestions: MolePracticeQuestion[] = [
  {
    question: "The number of molecules in 0.20 mol NH3 is:",
    options: ["1.204 x 10^23", "6.022 x 10^23", "3.011 x 10^23", "1.204 x 10^24"],
    answer: "1.204 x 10^23",
    solution: "Molecules = nNA = 0.20 x 6.022 x 10^23 = 1.204 x 10^23.",
  },
  {
    question: "The number of atoms in one molecule of H2SO4 is:",
    options: ["3", "5", "7", "8"],
    answer: "7",
    solution: "H2SO4 has 2 H atoms, 1 S atom, and 4 O atoms. Total = 7 atoms.",
  },
  {
    question: "Moles present in 9 g water are:",
    options: ["0.25", "0.50", "1.00", "2.00"],
    answer: "0.50",
    solution: "Molar mass of water is 18 g mol^-1. Moles = 9/18 = 0.50.",
  },
  {
    question: "Which sample contains maximum number of molecules?",
    options: ["1 g H2", "8 g O2", "22 g CO2", "18 g H2O"],
    answer: "18 g H2O",
    solution: "Moles: H2 = 0.5, O2 = 0.25, CO2 = 0.5, H2O = 1. More moles means more molecules.",
  },
  {
    question: "Molar mass of Al2(SO4)3 is: Al=27, S=32, O=16",
    options: ["123", "171", "342", "278"],
    answer: "342",
    solution: "2 x 27 + 3 x (32 + 4 x 16) = 54 + 3 x 96 = 342 g mol^-1.",
  },
  {
    question: "The percentage of hydrogen in methane is:",
    options: ["20%", "25%", "40%", "75%"],
    answer: "25%",
    solution: "CH4 molar mass = 16. Hydrogen mass = 4. Percentage = 4/16 x 100 = 25%.",
  },
  {
    question: "Empirical formula of a compound containing 50% S and 50% O by mass is: S=32, O=16",
    options: ["SO", "SO2", "S2O", "S2O3"],
    answer: "SO2",
    solution: "Assume 100 g: S moles = 50/32 = 1.5625, O moles = 50/16 = 3.125. Ratio = 1:2.",
  },
  {
    question: "For 2H2 + O2 -> 2H2O, 4 mol H2 requires how many moles O2?",
    options: ["1", "2", "4", "8"],
    answer: "2",
    solution: "Ratio H2:O2 = 2:1. For 4 mol H2, O2 required = 2 mol.",
  },
  {
    question: "For N2 + 3H2 -> 2NH3, 1 mol N2 and 1 mol H2 are mixed. Limiting reagent is:",
    options: ["N2", "H2", "NH3", "No limiting reagent"],
    answer: "H2",
    solution: "1 mol N2 needs 3 mol H2, but only 1 mol H2 is available.",
  },
  {
    question: "Theoretical yield is 40 g and actual yield is 30 g. Percent yield is:",
    options: ["25%", "50%", "75%", "125%"],
    answer: "75%",
    solution: "Percent yield = 30/40 x 100 = 75%.",
  },
  {
    question: "At 1 atm STP, 0.5 mol ideal gas occupies:",
    options: ["5.6 L", "11.2 L", "22.4 L", "44.8 L"],
    answer: "11.2 L",
    solution: "At 1 atm STP, 1 mol occupies 22.4 L. Volume = 0.5 x 22.4 = 11.2 L.",
  },
  {
    question: "The empirical formula mass of CH2O is:",
    options: ["16", "28", "30", "60"],
    answer: "30",
    solution: "C + 2H + O = 12 + 2 + 16 = 30.",
  },
  {
    question: "If empirical formula is CH2O and molar mass is 60, molecular formula is:",
    options: ["CH2O", "C2H4O2", "C3H6O3", "C6H12O6"],
    answer: "C2H4O2",
    solution: "Multiplier = 60/30 = 2. Molecular formula = C2H4O2.",
  },
  {
    question: "Molarity of 0.25 mol solute in 500 mL solution is:",
    options: ["0.25 M", "0.50 M", "1.00 M", "2.00 M"],
    answer: "0.50 M",
    solution: "Volume = 0.500 L. M = 0.25/0.500 = 0.50 M.",
  },
  {
    question: "Molality depends on:",
    options: ["Volume of solution", "Mass of solvent", "Pressure of solution", "Colour of solute"],
    answer: "Mass of solvent",
    solution: "Molality is moles of solute per kilogram of solvent.",
  },
  {
    question: "Mole fraction of A in a binary mixture containing 3 mol A and 2 mol B is:",
    options: ["0.2", "0.4", "0.6", "0.8"],
    answer: "0.6",
    solution: "Total moles = 5. Mole fraction of A = 3/5 = 0.6.",
  },
  {
    question: "Which is temperature dependent?",
    options: ["Molarity", "Molality", "Mole fraction", "Mass percent"],
    answer: "Molarity",
    solution: "Molarity uses volume of solution, and volume changes with temperature.",
  },
  {
    question: "Formula units in 0.25 mol NaCl are:",
    options: ["1.505 x 10^23", "3.011 x 10^23", "6.022 x 10^23", "1.204 x 10^24"],
    answer: "1.505 x 10^23",
    solution: "Formula units = 0.25 x 6.022 x 10^23 = 1.505 x 10^23.",
  },
  {
    question: "Total ions produced from 1 mol NaCl on complete dissociation are:",
    options: ["1 mol", "2 mol", "3 mol", "6.022 mol"],
    answer: "2 mol",
    solution: "NaCl gives Na+ and Cl-. One mole formula units gives 1 mol Na+ and 1 mol Cl-, total 2 mol ions.",
  },
  {
    question: "Which relation is correct for a balanced reaction aA -> bB?",
    options: ["nA/a = nB/b", "a/nA = b/nB always false", "nA = nB always", "a = b always"],
    answer: "nA/a = nB/b",
    solution: "Balanced coefficients give mole ratio, so nA/a equals nB/b for reacting/formed amounts.",
  },
  {
    question: "POAC is based on conservation of:",
    options: ["Temperature", "Atoms", "Molarity", "Pressure"],
    answer: "Atoms",
    solution: "POAC means principle of atom conservation.",
  },
  {
    question: "In CaCO3 -> CaO + CO2, 0.2 mol CaCO3 gives:",
    options: ["0.1 mol CO2", "0.2 mol CO2", "0.4 mol CO2", "1.0 mol CO2"],
    answer: "0.2 mol CO2",
    solution: "The coefficient ratio CaCO3:CO2 is 1:1.",
  },
  {
    question: "If a product is wet, observed percent yield may become:",
    options: ["Negative", "Exactly zero", "Greater than 100%", "Always 50%"],
    answer: "Greater than 100%",
    solution: "Wet or impure product has extra mass, so actual recorded yield can exceed theoretical yield.",
  },
  {
    question: "The first step in a stoichiometry problem should be:",
    options: ["Use grams directly", "Balance the equation", "Guess limiting reagent", "Round all data"],
    answer: "Balance the equation",
    solution: "Coefficients from the balanced equation are required before mole ratios can be used.",
  },
];
