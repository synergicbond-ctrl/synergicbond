
export type DataColumn = {
  key: string;
  label: string;
};

export type DataRow = Record<string, string>;

export type Exercise = {
  id: string;
  title: string;
  prompt: string;
  steps: string[];
  answer: string;
};

export const sectionLinks = [
  ["history", "Foundations"],
  ["matter", "Matter"],
  ["measurement", "Measurement"],
  ["numbers", "Reliable numbers"],
  ["laws", "Reaction laws"],
  ["mole", "Mole bridge"],
  ["solutions", "Solutions"],
  ["practice", "Practice library"],
] as const;

export const siBaseRows: DataRow[] = [
  { quantity: "Length", symbol: "l", unit: "metre", unitSymbol: "m" },
  { quantity: "Mass", symbol: "m", unit: "kilogram", unitSymbol: "kg" },
  { quantity: "Time", symbol: "t", unit: "second", unitSymbol: "s" },
  { quantity: "Electric current", symbol: "I", unit: "ampere", unitSymbol: "A" },
  { quantity: "Thermodynamic temperature", symbol: "T", unit: "kelvin", unitSymbol: "K" },
  { quantity: "Amount of substance", symbol: "n", unit: "mole", unitSymbol: "mol" },
  { quantity: "Luminous intensity", symbol: "Iᵥ", unit: "candela", unitSymbol: "cd" },
];

export const siDefinitionRows: DataRow[] = [
  { unit: "metre", symbol: "m", definition: "Defined by fixing the speed of light c at exactly 299 792 458 m s⁻¹." },
  { unit: "kilogram", symbol: "kg", definition: "Defined by fixing the Planck constant h at exactly 6.62607015 × 10⁻³⁴ J s." },
  { unit: "second", symbol: "s", definition: "Defined from the caesium-133 hyperfine transition frequency ΔνCs = 9 192 631 770 Hz." },
  { unit: "ampere", symbol: "A", definition: "Defined by fixing the elementary charge e at exactly 1.602176634 × 10⁻¹⁹ C." },
  { unit: "kelvin", symbol: "K", definition: "Defined by fixing the Boltzmann constant k at exactly 1.380649 × 10⁻²³ J K⁻¹." },
  { unit: "mole", symbol: "mol", definition: "One mole contains exactly 6.02214076 × 10²³ specified entities." },
  { unit: "candela", symbol: "cd", definition: "Defined using luminous efficacy 683 lm W⁻¹ for 540 × 10¹² Hz radiation." },
];

export const siPrefixRows: DataRow[] = [
  { multiple1: "10⁻²⁴", prefix1: "yocto", symbol1: "y", multiple2: "10¹", prefix2: "deca", symbol2: "da" },
  { multiple1: "10⁻²¹", prefix1: "zepto", symbol1: "z", multiple2: "10²", prefix2: "hecto", symbol2: "h" },
  { multiple1: "10⁻¹⁸", prefix1: "atto", symbol1: "a", multiple2: "10³", prefix2: "kilo", symbol2: "k" },
  { multiple1: "10⁻¹⁵", prefix1: "femto", symbol1: "f", multiple2: "10⁶", prefix2: "mega", symbol2: "M" },
  { multiple1: "10⁻¹²", prefix1: "pico", symbol1: "p", multiple2: "10⁹", prefix2: "giga", symbol2: "G" },
  { multiple1: "10⁻⁹", prefix1: "nano", symbol1: "n", multiple2: "10¹²", prefix2: "tera", symbol2: "T" },
  { multiple1: "10⁻⁶", prefix1: "micro", symbol1: "μ", multiple2: "10¹⁵", prefix2: "peta", symbol2: "P" },
  { multiple1: "10⁻³", prefix1: "milli", symbol1: "m", multiple2: "10¹⁸", prefix2: "exa", symbol2: "E" },
  { multiple1: "10⁻²", prefix1: "centi", symbol1: "c", multiple2: "10²¹", prefix2: "zetta", symbol2: "Z" },
  { multiple1: "10⁻¹", prefix1: "deci", symbol1: "d", multiple2: "10²⁴", prefix2: "yotta", symbol2: "Y" },
];

export const stateRows: DataRow[] = [
  { property: "Arrangement", solid: "Very close and orderly", liquid: "Close but disordered", gas: "Very far apart" },
  { property: "Movement", solid: "Vibration about fixed positions", liquid: "Particles slide past one another", gas: "Fast, unrestricted motion" },
  { property: "Shape", solid: "Definite", liquid: "Takes container shape", gas: "Fills container" },
  { property: "Volume", solid: "Definite", liquid: "Definite", gas: "Not definite" },
  { property: "Compressibility", solid: "Negligible", liquid: "Small", gas: "High" },
];

export const propertyRows: DataRow[] = [
  { basis: "Meaning", physical: "Observed without changing chemical identity", chemical: "Observed through a chemical change" },
  { basis: "Examples", physical: "Colour, density, melting point, boiling point", chemical: "Acidity, combustion, reaction with oxygen" },
  { basis: "Particle identity", physical: "Unchanged", chemical: "New substances are formed" },
];

export const glasswareRows: DataRow[] = [
  { apparatus: "Graduated cylinder", use: "Routine volume measurement", precision: "Moderate", boardNote: "Read the lower meniscus at eye level." },
  { apparatus: "Burette", use: "Accurate variable delivery", precision: "High", boardNote: "Used in titrations; record initial and final readings." },
  { apparatus: "Pipette", use: "Accurate fixed-volume transfer", precision: "Very high", boardNote: "Do not blow out unless designed for it." },
  { apparatus: "Volumetric flask", use: "Prepare an exact solution volume", precision: "Very high", boardNote: "Make up to the calibration mark." },
];

export const significantFigureRows: DataRow[] = [
  { rule: "All non-zero digits count", example: "285", result: "3" },
  { rule: "Leading zeros do not count", example: "0.0052", result: "2" },
  { rule: "Zeros between non-zero digits count", example: "2.005", result: "4" },
  { rule: "Trailing zeros count when a decimal is shown", example: "0.200", result: "3" },
  { rule: "Exact counted numbers have infinite precision", example: "20 students", result: "Exact" },
];

export const accuracyRows: DataRow[] = [
  { student: "A", r1: "1.95 g", r2: "1.93 g", average: "1.940 g", interpretation: "Precise, not accurate" },
  { student: "B", r1: "2.05 g", r2: "1.94 g", average: "1.995 g", interpretation: "Neither strongly precise nor accurate" },
  { student: "C", r1: "2.01 g", r2: "1.99 g", average: "2.000 g", interpretation: "Accurate and precise" },
];

export const lawRows: DataRow[] = [
  { law: "Conservation of mass", scientist: "Lavoisier, 1789", statement: "Mass is neither created nor destroyed in a chemical change.", example: "12 g C + 32 g O₂ → 44 g CO₂" },
  { law: "Definite proportions", scientist: "Proust", statement: "A compound always contains the same elements in the same mass ratio.", example: "H₂O has H:O = 1:8 by mass" },
  { law: "Multiple proportions", scientist: "Dalton, 1803", statement: "For two compounds, masses of one element combining with fixed mass of another are in small whole-number ratios.", example: "O masses in H₂O and H₂O₂: 16:32 = 1:2" },
  { law: "Gaseous volumes", scientist: "Gay-Lussac, 1808", statement: "Reacting gas volumes are in simple whole-number ratios at the same T and P.", example: "2 volumes H₂ + 1 volume O₂ → 2 volumes H₂O(g)" },
  { law: "Avogadro law", scientist: "Avogadro, 1811", statement: "Equal gas volumes at the same T and P contain equal numbers of molecules.", example: "Same volume boxes contain the same molecule count" },
];

export const isotopeRows: DataRow[] = [
  { isotope: "¹²C", abundance: "98.892%", mass: "12.00000 u", contribution: "11.86704 u" },
  { isotope: "¹³C", abundance: "1.108%", mass: "13.00335 u", contribution: "0.14408 u" },
  { isotope: "¹⁴C", abundance: "Trace", mass: "14.00317 u", contribution: "Negligible" },
];

export const stoichiometryRows: DataRow[] = [
  { scale: "Molecules", methane: "1 CH₄", oxygen: "2 O₂", carbonDioxide: "1 CO₂", water: "2 H₂O" },
  { scale: "Moles", methane: "1 mol", oxygen: "2 mol", carbonDioxide: "1 mol", water: "2 mol" },
  { scale: "Gas volume at same T,P", methane: "1 volume", oxygen: "2 volumes", carbonDioxide: "1 volume", water: "2 volumes" },
  { scale: "Mass", methane: "16 g", oxygen: "64 g", carbonDioxide: "44 g", water: "36 g" },
];

export const concentrationRows: DataRow[] = [
  { term: "Mass percent", formula: "(mass solute ÷ mass solution) × 100", denominator: "Mass of solution", unit: "%", temperature: "Independent" },
  { term: "Mole fraction", formula: "xA = nA ÷ Σn", denominator: "Total moles", unit: "None", temperature: "Independent" },
  { term: "Molarity", formula: "M = moles solute ÷ litres solution", denominator: "Volume of solution", unit: "mol L⁻¹", temperature: "Dependent" },
  { term: "Molality", formula: "m = moles solute ÷ kg solvent", denominator: "Mass of solvent", unit: "mol kg⁻¹", temperature: "Independent" },
];

export const exercises: Exercise[] = [
  {
    "id": "1.1",
    "title": "Molar masses",
    "prompt": "Calculate the molar masses of H₂O, CO₂ and CH₄.",
    "steps": [
      "H₂O: 2(1.008) + 16.00 = 18.016 g mol⁻¹.",
      "CO₂: 12.011 + 2(16.00) = 44.011 g mol⁻¹.",
      "CH₄: 12.011 + 4(1.008) = 16.043 g mol⁻¹."
    ],
    "answer": "H₂O = 18.016 g mol⁻¹; CO₂ = 44.011 g mol⁻¹; CH₄ = 16.043 g mol⁻¹."
  },
  {
    "id": "1.2",
    "title": "Mass percentage in sodium sulphate",
    "prompt": "Calculate the mass percentage of Na, S and O in Na₂SO₄.",
    "steps": [
      "M(Na₂SO₄) = 2(22.99) + 32.06 + 4(16.00) = 142.04 g mol⁻¹.",
      "%Na = (45.98 ÷ 142.04) × 100 = 32.37%.",
      "%S = (32.06 ÷ 142.04) × 100 = 22.57%.",
      "%O = (64.00 ÷ 142.04) × 100 = 45.06%."
    ],
    "answer": "Na = 32.37%, S = 22.57%, O = 45.06%."
  },
  {
    "id": "1.3",
    "title": "Empirical formula of iron oxide",
    "prompt": "An oxide contains 69.9% Fe and 30.1% O by mass. Determine its empirical formula.",
    "steps": [
      "Assume 100 g: Fe = 69.9 g; O = 30.1 g.",
      "Moles Fe = 69.9 ÷ 55.85 = 1.25.",
      "Moles O = 30.1 ÷ 16.00 = 1.88.",
      "Divide by 1.25: Fe : O = 1 : 1.50.",
      "Multiply by 2: Fe : O = 2 : 3."
    ],
    "answer": "Empirical formula = Fe₂O₃."
  },
  {
    "id": "1.4",
    "title": "Carbon dioxide yield",
    "prompt": "Calculate the amount of CO₂ formed when (i) 1 mol C burns in excess air, (ii) 1 mol C burns in 16 g O₂, and (iii) 2 mol C burns in 16 g O₂.",
    "steps": [
      "Reaction: C + O₂ → CO₂.",
      "(i) 1 mol C with excess O₂ gives 1 mol CO₂ = 44 g.",
      "(ii) 16 g O₂ = 0.50 mol O₂, so O₂ limits the reaction and forms 0.50 mol CO₂ = 22 g.",
      "(iii) 2 mol C with 0.50 mol O₂ again gives 0.50 mol CO₂ = 22 g; carbon is in excess."
    ],
    "answer": "(i) 44 g CO₂; (ii) 22 g CO₂; (iii) 22 g CO₂."
  },
  {
    "id": "1.5",
    "title": "Preparing sodium acetate solution",
    "prompt": "Find the mass of CH₃COONa needed to prepare 500 mL of 0.375 M solution. Molar mass = 82.0245 g mol⁻¹.",
    "steps": [
      "Volume = 500 mL = 0.500 L.",
      "Moles required = M × V = 0.375 × 0.500 = 0.1875 mol.",
      "Mass = 0.1875 × 82.0245 = 15.38 g."
    ],
    "answer": "15.38 g CH₃COONa."
  },
  {
    "id": "1.6",
    "title": "Molarity of nitric acid",
    "prompt": "A nitric acid sample has density 1.41 g mL⁻¹ and contains 69% HNO₃ by mass. Calculate its molarity.",
    "steps": [
      "Take 100 g solution: HNO₃ = 69 g.",
      "Moles HNO₃ = 69 ÷ 63.01 = 1.095 mol.",
      "Volume of 100 g solution = 100 ÷ 1.41 = 70.92 mL = 0.07092 L.",
      "Molarity = 1.095 ÷ 0.07092 = 15.44 mol L⁻¹."
    ],
    "answer": "15.44 M."
  },
  {
    "id": "1.7",
    "title": "Copper from copper sulphate",
    "prompt": "How much copper is present in 100 g of anhydrous CuSO₄?",
    "steps": [
      "M(CuSO₄) = 63.55 + 32.06 + 4(16.00) = 159.61 g mol⁻¹.",
      "Fraction of Cu = 63.55 ÷ 159.61.",
      "Mass of Cu in 100 g = (63.55 ÷ 159.61) × 100 = 39.81 g."
    ],
    "answer": "39.81 g Cu."
  },
  {
    "id": "1.8",
    "title": "Molecular formula of iron oxide",
    "prompt": "The oxide in Exercise 1.3 has molar mass about 159.7 g mol⁻¹. Determine its molecular formula.",
    "steps": [
      "Empirical formula = Fe₂O₃.",
      "Empirical formula mass = 2(55.85) + 3(16.00) = 159.7 g mol⁻¹.",
      "n = molar mass ÷ empirical formula mass = 159.7 ÷ 159.7 = 1."
    ],
    "answer": "Molecular formula = Fe₂O₃."
  },
  {
    "id": "1.9",
    "title": "Average atomic mass of chlorine",
    "prompt": "Calculate the average atomic mass of chlorine from ³⁵Cl: 75.77%, 34.9689 u and ³⁷Cl: 24.23%, 36.9659 u.",
    "steps": [
      "Convert percentages to fractions: 0.7577 and 0.2423.",
      "Average = (0.7577 × 34.9689) + (0.2423 × 36.9659).",
      "Average = 26.496 + 8.957 = 35.453 u."
    ],
    "answer": "35.453 u."
  },
  {
    "id": "1.10",
    "title": "Particles in three moles of ethane",
    "prompt": "For 3 mol C₂H₆, calculate moles of carbon atoms, moles of hydrogen atoms and number of ethane molecules.",
    "steps": [
      "Carbon atoms: 3 × 2 = 6 mol C atoms.",
      "Hydrogen atoms: 3 × 6 = 18 mol H atoms.",
      "Molecules: 3 × 6.02214076 × 10²³ = 1.807 × 10²⁴ molecules."
    ],
    "answer": "6 mol C atoms; 18 mol H atoms; 1.807 × 10²⁴ C₂H₆ molecules."
  },
  {
    "id": "1.11",
    "title": "Molarity of sugar solution",
    "prompt": "20 g sucrose, C₁₂H₂₂O₁₁, is dissolved to make 2.00 L of solution. Calculate molarity.",
    "steps": [
      "M(C₁₂H₂₂O₁₁) ≈ 342.3 g mol⁻¹.",
      "Moles = 20 ÷ 342.3 = 0.0584 mol.",
      "Molarity = 0.0584 ÷ 2.00 = 0.0292 mol L⁻¹."
    ],
    "answer": "0.0292 M."
  },
  {
    "id": "1.12",
    "title": "Volume of methanol",
    "prompt": "Density of methanol is 0.793 kg L⁻¹. What volume is needed to prepare 2.5 L of 0.25 M methanol solution?",
    "steps": [
      "Moles required = 0.25 × 2.5 = 0.625 mol.",
      "Mass CH₃OH = 0.625 × 32.04 = 20.025 g = 0.020025 kg.",
      "Volume = mass ÷ density = 0.020025 ÷ 0.793 = 0.02525 L."
    ],
    "answer": "25.25 mL methanol."
  },
  {
    "id": "1.13",
    "title": "Atmospheric pressure from mass per area",
    "prompt": "At sea level the mass of air is 1034 g cm⁻². Calculate pressure in pascal using g = 9.8 m s⁻².",
    "steps": [
      "For 1 cm²: mass = 1034 g = 1.034 kg.",
      "Force = mg = 1.034 × 9.8 = 10.1332 N.",
      "Area = 1 cm² = 1.0 × 10⁻⁴ m².",
      "Pressure = 10.1332 ÷ 10⁻⁴ = 1.01332 × 10⁵ Pa."
    ],
    "answer": "1.013 × 10⁵ Pa."
  },
  {
    "id": "1.14",
    "title": "SI unit of mass",
    "prompt": "State the SI unit of mass and its modern definition.",
    "steps": [
      "The SI unit is the kilogram (kg).",
      "It is defined by fixing the numerical value of the Planck constant h at exactly 6.62607015 × 10⁻³⁴ J s."
    ],
    "answer": "kilogram (kg), defined through the fixed value of h."
  },
  {
    "id": "1.15",
    "title": "Match SI prefixes",
    "prompt": "Match micro, deca, mega, giga and femto with their powers of ten.",
    "steps": [
      "micro → 10⁻⁶.",
      "deca → 10¹.",
      "mega → 10⁶.",
      "giga → 10⁹.",
      "femto → 10⁻¹⁵."
    ],
    "answer": "μ = 10⁻⁶, da = 10¹, M = 10⁶, G = 10⁹, f = 10⁻¹⁵."
  },
  {
    "id": "1.16",
    "title": "Chloroform contamination",
    "prompt": "Water contains 15 ppm CHCl₃ by mass. Express this as mass percent and calculate molality.",
    "steps": [
      "15 ppm means 15 g CHCl₃ per 10⁶ g solution.",
      "Mass percent = (15 ÷ 10⁶) × 100 = 1.5 × 10⁻³%.",
      "Moles CHCl₃ = 15 ÷ 119.5 = 0.1255 mol.",
      "Mass of solvent ≈ 10⁶ g = 1000 kg.",
      "Molality = 0.1255 ÷ 1000 = 1.25 × 10⁻⁴ mol kg⁻¹."
    ],
    "answer": "1.5 × 10⁻³% by mass; 1.25 × 10⁻⁴ m."
  },
  {
    "id": "1.17",
    "title": "Scientific notation",
    "prompt": "Express 0.0048, 234000, 8008, 500.0 and 6.0012 in scientific notation.",
    "steps": [
      "0.0048 = 4.8 × 10⁻³.",
      "234000 = 2.34 × 10⁵.",
      "8008 = 8.008 × 10³.",
      "500.0 = 5.000 × 10².",
      "6.0012 = 6.0012 × 10⁰."
    ],
    "answer": "4.8 × 10⁻³; 2.34 × 10⁵; 8.008 × 10³; 5.000 × 10²; 6.0012 × 10⁰."
  },
  {
    "id": "1.18",
    "title": "Counting significant figures",
    "prompt": "Count significant figures in 0.0025, 208, 5005, 126000, 500.0 and 2.0034.",
    "steps": [
      "0.0025: leading zeros do not count → 2.",
      "208: captive zero counts → 3.",
      "5005: captive zeros count → 4.",
      "126000: without a decimal point, trailing zeros are not taken as significant here → 3.",
      "500.0: decimal point makes trailing zeros significant → 4.",
      "2.0034: captive zeros count → 5."
    ],
    "answer": "2, 3, 4, 3, 4 and 5 significant figures."
  },
  {
    "id": "1.19",
    "title": "Rounding to three significant figures",
    "prompt": "Round 34.216, 10.4107, 0.04597 and 2808 to three significant figures.",
    "steps": [
      "34.216 → 34.2.",
      "10.4107 → 10.4.",
      "0.04597 → 0.0460.",
      "2808 → 2.81 × 10³."
    ],
    "answer": "34.2; 10.4; 0.0460; 2.81 × 10³."
  },
  {
    "id": "1.20",
    "title": "Law of multiple proportions",
    "prompt": "For N₂/O₂ mass pairs 14/16, 14/32, 28/32 and 28/80 g, identify the law obeyed.",
    "steps": [
      "Fix nitrogen at 28 g.",
      "Equivalent oxygen masses become 32, 64, 32 and 80 g.",
      "Ratio = 32 : 64 : 32 : 80 = 2 : 4 : 2 : 5.",
      "The masses are in a ratio of small whole numbers."
    ],
    "answer": "Law of Multiple Proportions."
  },
  {
    "id": "1.21",
    "title": "Unit conversions",
    "prompt": "Complete: (i) 1 km = __ mm = __ pm, (ii) 1 mg = __ kg = __ ng, (iii) 1 mL = __ L = __ dm³.",
    "steps": [
      "1 km = 10³ m = 10⁶ mm = 10¹⁵ pm.",
      "1 mg = 10⁻⁶ kg = 10⁶ ng.",
      "1 mL = 10⁻³ L = 10⁻³ dm³."
    ],
    "answer": "10⁶ mm, 10¹⁵ pm; 10⁻⁶ kg, 10⁶ ng; 10⁻³ L, 10⁻³ dm³."
  },
  {
    "id": "1.22",
    "title": "Distance travelled by light",
    "prompt": "Calculate the distance travelled by light of speed 3.0 × 10⁸ m s⁻¹ in 2.00 ns.",
    "steps": [
      "2.00 ns = 2.00 × 10⁻⁹ s.",
      "Distance = speed × time.",
      "Distance = (3.0 × 10⁸)(2.00 × 10⁻⁹) = 0.600 m.",
      "With two significant figures, report 0.60 m."
    ],
    "answer": "0.60 m."
  },
  {
    "id": "1.23",
    "title": "Limiting reagent in A + B₂ → AB₂",
    "prompt": "Identify the limiting reagent for: (i) 300 A atoms + 200 B₂ molecules, (ii) 2 mol A + 3 mol B₂, (iii) 100 A + 100 B₂, (iv) 5 mol A + 2.5 mol B₂, (v) 2.5 mol A + 5 mol B₂.",
    "steps": [
      "Stoichiometric ratio A : B₂ = 1 : 1.",
      "(i) B₂ limits; only 200 AB₂ can form.",
      "(ii) A limits; only 2 mol AB₂ can form.",
      "(iii) Neither; exactly stoichiometric.",
      "(iv) B₂ limits; only 2.5 mol AB₂ can form.",
      "(v) A limits; only 2.5 mol AB₂ can form."
    ],
    "answer": "(i) B₂, (ii) A, (iii) none, (iv) B₂, (v) A."
  },
  {
    "id": "1.24",
    "title": "Industrial ammonia calculation",
    "prompt": "For N₂ + 3H₂ → 2NH₃, calculate NH₃ formed from 2.00 × 10³ g N₂ and 1.00 × 10³ g H₂; identify and quantify excess reagent.",
    "steps": [
      "n(N₂) = 2000 ÷ 28.0 = 71.43 mol.",
      "n(H₂) = 1000 ÷ 2.016 = 496.0 mol.",
      "71.43 mol N₂ needs 214.29 mol H₂, so N₂ is limiting.",
      "n(NH₃) = 2 × 71.43 = 142.86 mol.",
      "m(NH₃) = 142.86 × 17.03 ≈ 2.43 × 10³ g.",
      "H₂ consumed = 214.29 × 2.016 ≈ 432 g.",
      "H₂ remaining ≈ 1000 − 432 = 568 g."
    ],
    "answer": "About 2.43 × 10³ g NH₃; H₂ is in excess and about 568 g remains."
  },
  {
    "id": "1.25",
    "title": "0.50 mol versus 0.50 M",
    "prompt": "Explain the difference between 0.50 mol Na₂CO₃ and 0.50 M Na₂CO₃.",
    "steps": [
      "0.50 mol is an amount of substance.",
      "M(Na₂CO₃) ≈ 106 g mol⁻¹, so 0.50 mol corresponds to about 53 g.",
      "0.50 M is a concentration: 0.50 mol Na₂CO₃ per litre of solution."
    ],
    "answer": "0.50 mol is a fixed amount; 0.50 M is 0.50 mol per litre of solution."
  },
  {
    "id": "1.26",
    "title": "Gas-volume ratio",
    "prompt": "If 10 volumes H₂ react with 5 volumes O₂, how many volumes of water vapour form at the same temperature and pressure?",
    "steps": [
      "2H₂ + O₂ → 2H₂O(g).",
      "Volume ratio H₂ : O₂ : H₂O = 2 : 1 : 2.",
      "10 : 5 : 10 satisfies the same ratio."
    ],
    "answer": "10 volumes of water vapour."
  },
  {
    "id": "1.27",
    "title": "Conversion into base units",
    "prompt": "Convert (i) 28.7 pm, (ii) 15.15 pm and (iii) 25365 mg into SI base units.",
    "steps": [
      "28.7 pm = 28.7 × 10⁻¹² m = 2.87 × 10⁻¹¹ m.",
      "15.15 pm = 15.15 × 10⁻¹² m = 1.515 × 10⁻¹¹ m.",
      "25365 mg = 25.365 g = 2.5365 × 10⁻² kg."
    ],
    "answer": "2.87 × 10⁻¹¹ m; 1.515 × 10⁻¹¹ m; 2.5365 × 10⁻² kg."
  },
  {
    "id": "1.28",
    "title": "Largest number of atoms",
    "prompt": "Which contains the largest number of atoms: 1 g Au, 1 g Na, 1 g Li or 1 g Cl₂?",
    "steps": [
      "For equal masses, atom count is inversely related to mass per mole of atoms.",
      "Au: 1/197 = 0.0051 mol atoms.",
      "Na: 1/23 = 0.0435 mol atoms.",
      "Li: 1/6.94 = 0.144 mol atoms.",
      "Cl atoms from Cl₂: (1/70.9) × 2 = 0.0282 mol atoms."
    ],
    "answer": "1 g Li contains the largest number of atoms."
  },
  {
    "id": "1.29",
    "title": "Molarity from mole fraction",
    "prompt": "The mole fraction of ethanol in water is 0.040. Estimate the molarity, taking water density as 1 g mL⁻¹.",
    "steps": [
      "Take 1 mol total: ethanol = 0.040 mol, water = 0.960 mol.",
      "Mass water = 0.960 × 18.02 = 17.30 g.",
      "With density 1 g mL⁻¹, volume ≈ 17.30 mL = 0.01730 L.",
      "Molarity ≈ 0.040 ÷ 0.01730 = 2.31 M."
    ],
    "answer": "Approximately 2.31 M."
  },
  {
    "id": "1.30",
    "title": "Mass of one carbon-12 atom",
    "prompt": "Calculate the mass of one ¹²C atom in grams.",
    "steps": [
      "One mole of ¹²C has mass 12.000 g.",
      "One mole contains 6.02214076 × 10²³ atoms.",
      "Mass per atom = 12.000 ÷ (6.02214076 × 10²³)."
    ],
    "answer": "1.9926 × 10⁻²³ g."
  },
  {
    "id": "1.31",
    "title": "Significant figures in calculated answers",
    "prompt": "State the significant figures required in answers for: (i) (0.02856 × 298.15 × 0.112)/0.5785, (ii) 5 × 5.364, (iii) 0.0125 + 0.7864 + 0.0215.",
    "steps": [
      "(i) Multiplication/division: 0.112 has 3 significant figures, so answer has 3.",
      "(ii) 5 is an exact count; 5.364 controls → 4 significant figures.",
      "(iii) Addition: every term has four decimal places; sum = 0.8204."
    ],
    "answer": "(i) 3 significant figures; (ii) 4 significant figures; (iii) 0.8204."
  },
  {
    "id": "1.32",
    "title": "Average molar mass of argon",
    "prompt": "Calculate average molar mass from ³⁶Ar: 35.96755 u, 0.337%; ³⁸Ar: 37.96272 u, 0.063%; ⁴⁰Ar: 39.9624 u, 99.600%.",
    "steps": [
      "Convert percentages: 0.00337, 0.00063 and 0.99600.",
      "Average = (0.00337 × 35.96755) + (0.00063 × 37.96272) + (0.99600 × 39.9624).",
      "Average = 0.1212 + 0.0239 + 39.8025 = 39.948."
    ],
    "answer": "39.948 g mol⁻¹."
  },
  {
    "id": "1.33",
    "title": "Counting argon and helium atoms",
    "prompt": "Calculate atoms in (i) 52 mol Ar, (ii) 52 u He, and (iii) 52 g He.",
    "steps": [
      "(i) 52 × 6.022 × 10²³ = 3.13 × 10²⁵ Ar atoms.",
      "(ii) One He atom ≈ 4 u; 52 u ÷ 4 u = 13 atoms.",
      "(iii) 52 g He ÷ 4 g mol⁻¹ = 13 mol; atoms = 13 × 6.022 × 10²³ = 7.83 × 10²⁴."
    ],
    "answer": "3.13 × 10²⁵ atoms; 13 atoms; 7.83 × 10²⁴ atoms."
  },
  {
    "id": "1.34",
    "title": "Welding fuel gas formula",
    "prompt": "A hydrocarbon gives 3.38 g CO₂ and 0.690 g H₂O on combustion. 10.0 L at STP weighs 11.6 g. Find empirical formula, molar mass and molecular formula.",
    "steps": [
      "Moles C = 3.38 ÷ 44.01 = 0.0768 mol.",
      "Moles H atoms = 2(0.690 ÷ 18.02) = 0.0766 mol.",
      "C : H ≈ 1 : 1 → empirical formula CH.",
      "Density at STP = 11.6 g ÷ 10.0 L = 1.16 g L⁻¹.",
      "Molar mass ≈ 1.16 × 22.7 = 26.3 g mol⁻¹.",
      "Empirical mass CH ≈ 13.0; n = 26.3 ÷ 13.0 ≈ 2."
    ],
    "answer": "Empirical formula CH; molar mass ≈ 26.3 g mol⁻¹; molecular formula C₂H₂."
  },
  {
    "id": "1.35",
    "title": "Calcium carbonate and hydrochloric acid",
    "prompt": "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. What mass of CaCO₃ reacts with 25.0 mL of 0.750 M HCl?",
    "steps": [
      "n(HCl) = 0.0250 × 0.750 = 0.01875 mol.",
      "Stoichiometry: n(CaCO₃) = 0.01875 ÷ 2 = 0.009375 mol.",
      "M(CaCO₃) ≈ 100.09 g mol⁻¹.",
      "Mass = 0.009375 × 100.09 = 0.938 g."
    ],
    "answer": "0.938 g CaCO₃."
  },
  {
    "id": "1.36",
    "title": "Hydrochloric acid required for MnO₂",
    "prompt": "4HCl + MnO₂ → 2H₂O + MnCl₂ + Cl₂. How many grams of HCl react with 5.0 g MnO₂?",
    "steps": [
      "M(MnO₂) = 54.94 + 2(16.00) = 86.94 g mol⁻¹.",
      "n(MnO₂) = 5.0 ÷ 86.94 = 0.0575 mol.",
      "n(HCl) = 4 × 0.0575 = 0.230 mol.",
      "m(HCl) = 0.230 × 36.46 = 8.39 g.",
      "With two significant figures, report 8.4 g."
    ],
    "answer": "8.4 g HCl."
  }
];
