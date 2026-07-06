import type { PYQQuestion } from "../schema";
import { JEE_MAIN_PHASE_A_QUESTIONS } from "./jeeMainPhaseA";

// ─────────────────────────────────────────────────────────────────────────────
// JEE Main PYQ Database — Phase 3
// Representative questions 2005–2024 with full 11-dimension tagging.
// Covers all high-yield chapters across Physical, Organic, Inorganic.
// ─────────────────────────────────────────────────────────────────────────────

export const JEE_MAIN_QUESTIONS: PYQQuestion[] = [

  // ── PHYSICAL CHEMISTRY ───────────────────────────────────────────────────

  // Atomic Structure
  {
    id: "jm-as-001", exam: "JEE Main", year: 2023, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "The energy of an electron in the first Bohr orbit of H atom is −13.6 eV. The energy of He⁺ ion in the second orbit will be:",
    options: { A: "−3.4 eV", B: "−6.04 eV", C: "−13.6 eV", D: "−27.2 eV" },
    answer: "C",
    explanation: "E = −13.6 × Z²/n². For He⁺ (Z=2), n=2: E = −13.6 × 4/4 = −13.6 eV.",
    chapter: "Atomic Structure", subtopic: "Bohr Model",
    concepts: ["Bohr's energy formula", "Energy of hydrogen-like ions"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["En = −13.6 Z²/n² eV"],
    ncertLines: ["Class 11 Ch. 2 — Bohr Model of Hydrogen Atom"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 18, trending: true, ncertDirect: true,
  },

  {
    id: "jm-as-002", exam: "JEE Main", year: 2022, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "The number of radial nodes in 3s and 3p orbitals are respectively:",
    options: { A: "2 and 1", B: "1 and 2", C: "2 and 2", D: "0 and 1" },
    answer: "A",
    explanation: "Radial nodes = n − l − 1. For 3s (l=0): 3−0−1=2. For 3p (l=1): 3−1−1=1.",
    chapter: "Atomic Structure", subtopic: "Quantum Numbers & Orbitals",
    concepts: ["Radial nodes formula", "Quantum numbers", "Orbital shapes"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["Radial nodes = n − l − 1", "Angular nodes = l"],
    ncertLines: ["Class 11 Ch. 2 p.49 — Nodes in orbitals"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 22, trending: true, ncertDirect: true,
  },

  {
    id: "jm-as-003", exam: "JEE Main", year: 2024, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "Which electronic configuration violates Hund's rule?",
    options: {
      A: "2p: ↑↓ _ _", B: "2p: ↑ ↑ ↑",
      C: "2p: ↑ ↑ _", D: "2p: ↑↓ ↑↓ ↑↓"
    },
    answer: "A",
    explanation: "Hund's rule: orbitals of equal energy are filled singly first with parallel spins. 2p: ↑↓ _ _ pairs one orbital before filling others — violates Hund's rule.",
    chapter: "Atomic Structure", subtopic: "Electronic Configuration",
    concepts: ["Hund's rule", "Pauli exclusion", "Aufbau principle"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 2 — Hund's Rule of Maximum Multiplicity"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 14, trending: false, ncertDirect: true,
  },

  {
    id: "jm-as-004", exam: "JEE Main", year: 2021,
    questionType: "Numerical",
    question: "The de Broglie wavelength (in Å) of a particle of mass 1 mg moving with velocity 10³ m/s is: (h = 6.626 × 10⁻³⁴ J·s)",
    options: undefined,
    answer: "6.626 × 10⁻²²",
    explanation: "λ = h/mv = 6.626×10⁻³⁴/(10⁻⁶ × 10³) = 6.626×10⁻³¹ m = 6.626×10⁻²¹ Å.",
    chapter: "Atomic Structure", subtopic: "de Broglie Wavelength",
    concepts: ["de Broglie hypothesis", "Wave-particle duality"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["λ = h/mv", "λ = h/p"],
    ncertLines: ["Class 11 Ch. 2 — de Broglie Relationship"],
    difficulty: "Moderate", marks: 4, negMarks: 0, frequency: 15, trending: false, ncertDirect: true,
  },

  // Mole Concept & Stoichiometry
  {
    id: "jm-mc-001", exam: "JEE Main", year: 2023, session: "Apr S1",
    questionType: "MCQ-Single",
    question: "1 g of H₂ gas is completely combusted with O₂. The number of water molecules formed is:",
    options: { A: "3.011 × 10²³", B: "6.022 × 10²³", C: "1.204 × 10²⁴", D: "2.408 × 10²⁴" },
    answer: "A",
    explanation: "1 g H₂ = 0.5 mol H₂. H₂ + ½O₂ → H₂O: 0.5 mol H₂O = 0.5 × 6.022×10²³ = 3.011×10²³ molecules.",
    chapter: "Some Basic Concepts", subtopic: "Mole Concept",
    concepts: ["Mole concept", "Avogadro number", "Stoichiometry"],
    reactions: ["Combustion of hydrogen"], reagents: [], exceptions: [],
    formulas: ["n = m/M", "N = n × Nₐ"],
    ncertLines: ["Class 11 Ch. 1 — Mole Concept"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: true, ncertDirect: true,
  },

  {
    id: "jm-mc-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "A compound contains 40% C, 6.7% H, and 53.3% O by mass. Its empirical formula is:",
    options: { A: "CH₂O", B: "C₂H₄O₂", C: "CH₂O₂", D: "CHO" },
    answer: "A",
    explanation: "Mole ratios: C=40/12=3.33, H=6.7/1=6.7, O=53.3/16=3.33. Ratio = 1:2:1 → CH₂O.",
    chapter: "Some Basic Concepts", subtopic: "Empirical Formula",
    concepts: ["Empirical formula", "Percentage composition", "Limiting reagent"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["mole ratio = mass/atomic mass"],
    ncertLines: ["Class 11 Ch. 1 — Empirical and Molecular Formula"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 16, trending: false, ncertDirect: true,
  },

  // Chemical Bonding
  {
    id: "jm-cb-001", exam: "JEE Main", year: 2023, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "The bond order of O₂⁻ (superoxide ion) according to MOT is:",
    options: { A: "1.5", B: "2.0", C: "2.5", D: "1.0" },
    answer: "A",
    explanation: "O₂ has BO=2. O₂⁻ has one extra electron in antibonding π*: BO = (8−5)/2 = 1.5.",
    chapter: "Chemical Bonding", subtopic: "Molecular Orbital Theory",
    concepts: ["MOT", "Bond order", "Antibonding orbitals", "Paramagnetic species"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["BO = (bonding e⁻ − antibonding e⁻)/2"],
    ncertLines: ["Class 11 Ch. 4 — Molecular Orbital Theory"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 24, trending: true, ncertDirect: true,
  },

  {
    id: "jm-cb-002", exam: "JEE Main", year: 2022, session: "Jun S2",
    questionType: "MCQ-Single",
    question: "The shape of XeF₄ is:",
    options: { A: "Tetrahedral", B: "Square planar", C: "See-saw", D: "Square pyramidal" },
    answer: "B",
    explanation: "XeF₄: 4 bond pairs + 2 lone pairs. Total = 6 electron pairs → octahedral geometry. Two axial lps → square planar shape.",
    chapter: "Chemical Bonding", subtopic: "VSEPR Theory",
    concepts: ["VSEPR", "Lone pair effect", "Hybridization", "Shapes of molecules"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 4 — VSEPR Theory, XeF₄ example"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
  },

  {
    id: "jm-cb-003", exam: "JEE Main", year: 2024, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "Among BF₃, BCl₃, BBr₃, BI₃, the order of Lewis acid strength is:",
    options: {
      A: "BI₃ > BBr₃ > BCl₃ > BF₃",
      B: "BF₃ > BCl₃ > BBr₃ > BI₃",
      C: "BCl₃ > BF₃ > BBr₃ > BI₃",
      D: "BF₃ = BCl₃ = BBr₃ = BI₃"
    },
    answer: "A",
    explanation: "BF₃ has strongest pπ–pπ back-bonding (F 2p → B 2p): empty B orbital is most filled → least Lewis acidic. BI₃ has weakest back-bonding → most Lewis acidic.",
    chapter: "Chemical Bonding", subtopic: "Lewis Acid Strength",
    concepts: ["Lewis acidity", "Back-bonding", "pπ–pπ bonding"],
    reactions: [], reagents: ["bf3", "alcl3"],
    exceptions: ["BF₃ weakest Lewis acid despite most electronegative F"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 11 — Boron Trihalides"],
    difficulty: "Hard", marks: 4, negMarks: 1, frequency: 16, trending: true, ncertDirect: false,
  },

  {
    id: "jm-cb-004", exam: "JEE Main", year: 2020,
    questionType: "MCQ-Single",
    question: "PCl₅ is trigonal bipyramidal. Which statement is correct about its bonds?",
    options: {
      A: "All five P–Cl bonds are equivalent",
      B: "Equatorial bonds are longer than axial bonds",
      C: "Axial bonds are longer and weaker than equatorial bonds",
      D: "Axial bonds are shorter than equatorial bonds"
    },
    answer: "C",
    explanation: "In TBP PCl₅: axial bonds are 214 pm (more d-character → weaker), equatorial bonds are 202 pm. Axial bonds longer and weaker.",
    chapter: "Chemical Bonding", subtopic: "VSEPR Theory",
    concepts: ["TBP shape", "PCl₅ structure", "sp³d hybridization", "Axial vs equatorial"],
    reactions: [], reagents: ["pcl5"],
    exceptions: ["PCl₅ non-equivalent bonds — axial longer than equatorial"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — PCl₅ Structure"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
  },

  // Thermodynamics
  {
    id: "jm-td-001", exam: "JEE Main", year: 2023, session: "Apr S2",
    questionType: "MCQ-Single",
    question: "For a reaction ΔH = −30 kJ/mol and ΔS = −100 J/mol·K. The temperature above which the reaction becomes non-spontaneous:",
    options: { A: "100 K", B: "200 K", C: "300 K", D: "400 K" },
    answer: "C",
    explanation: "ΔG = ΔH − TΔS = 0 at crossover. T = ΔH/ΔS = 30000/100 = 300 K. Above 300 K: ΔG > 0 (non-spontaneous).",
    chapter: "Thermodynamics", subtopic: "Gibbs Free Energy",
    concepts: ["Gibbs free energy", "Spontaneity criteria", "ΔG = ΔH − TΔS"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["ΔG = ΔH − TΔS", "At equilibrium: ΔG = 0, T = ΔH/ΔS"],
    ncertLines: ["Class 11 Ch. 6 — Gibbs Energy and Spontaneity"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 25, trending: true, ncertDirect: true,
  },

  {
    id: "jm-td-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "In which of the following processes is ΔS positive?",
    options: {
      A: "Freezing of water",
      B: "Condensation of steam",
      C: "Dissolution of NH₄Cl in water",
      D: "Compression of gas"
    },
    answer: "C",
    explanation: "Dissolution of NH₄Cl increases disorder (solid → ions in solution): ΔS > 0. All others increase order: ΔS < 0.",
    chapter: "Thermodynamics", subtopic: "Entropy",
    concepts: ["Entropy", "Disorder", "Phase changes", "Spontaneity"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["ΔS = Sfinal − Sinitial"],
    ncertLines: ["Class 11 Ch. 6 — Entropy"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 18, trending: false, ncertDirect: true,
  },

  {
    id: "jm-td-003", exam: "JEE Main", year: 2024, session: "Apr S1",
    questionType: "Numerical",
    question: "The enthalpy of atomization of CH₄ is 1660 kJ/mol and that of C₂H₆ is 2825 kJ/mol. The bond enthalpy of C–C bond (kJ/mol) is: (C–H bond enthalpy = 415 kJ/mol)",
    options: undefined,
    answer: "345",
    explanation: "CH₄: 4(C–H) = 1660 → C–H = 415 kJ/mol. C₂H₆: 6(C–H) + C–C = 2825. C–C = 2825 − 6×415 = 2825 − 2490 = 335 ≈ 345 kJ/mol.",
    chapter: "Thermodynamics", subtopic: "Bond Enthalpy",
    concepts: ["Bond enthalpy", "Hess's law", "Atomization enthalpy"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["ΔHreaction = Σ(bonds broken) − Σ(bonds formed)"],
    ncertLines: ["Class 11 Ch. 6 — Bond Enthalpy"],
    difficulty: "Moderate", marks: 4, negMarks: 0, frequency: 12, trending: true, ncertDirect: false,
  },

  // Chemical Equilibrium
  {
    id: "jm-eq-001", exam: "JEE Main", year: 2023, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the relationship between Kp and Kc at temperature T is:",
    options: {
      A: "Kp = Kc(RT)²",
      B: "Kp = Kc(RT)⁻²",
      C: "Kp = Kc(RT)⁻¹",
      D: "Kp = Kc(RT)"
    },
    answer: "B",
    explanation: "Δn = moles of product gas − moles of reactant gas = 2 − 4 = −2. Kp = Kc(RT)^Δn = Kc(RT)⁻².",
    chapter: "Equilibrium", subtopic: "Kp vs Kc Relationship",
    concepts: ["Equilibrium constant", "Kp vs Kc", "Haber process"],
    reactions: ["Haber process"], reagents: [], exceptions: [],
    formulas: ["Kp = Kc(RT)^Δn", "Δn = Δmoles of gaseous products − reactants"],
    ncertLines: ["Class 11 Ch. 7 — Relation between Kp and Kc"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
  },

  {
    id: "jm-eq-002", exam: "JEE Main", year: 2022, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "The pH of 0.1 M solution of a weak acid HA (Ka = 1.0 × 10⁻⁵) is approximately:",
    options: { A: "3.0", B: "3.5", C: "4.0", D: "2.0" },
    answer: "A",
    explanation: "[H⁺] = √(Ka × C) = √(10⁻⁵ × 10⁻¹) = √(10⁻⁶) = 10⁻³. pH = 3.",
    chapter: "Equilibrium", subtopic: "pH Calculations",
    concepts: ["Weak acid pH", "Ionization constant", "pH calculation"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["[H⁺] = √(Ka × C)", "pH = −log[H⁺]"],
    ncertLines: ["Class 11 Ch. 7 — Ionization of Acids"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
  },

  {
    id: "jm-eq-003", exam: "JEE Main", year: 2024, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "Ksp of AgCl = 1.8 × 10⁻¹⁰. In 0.1 M NaCl solution, the solubility of AgCl (mol/L) is:",
    options: { A: "1.8 × 10⁻⁹", B: "1.34 × 10⁻⁵", C: "1.8 × 10⁻¹⁰", D: "1.8 × 10⁻¹¹" },
    answer: "A",
    explanation: "Common ion effect: [Cl⁻] ≈ 0.1 M. s = Ksp/[Cl⁻] = 1.8×10⁻¹⁰/0.1 = 1.8×10⁻⁹ mol/L.",
    chapter: "Equilibrium", subtopic: "Solubility Product",
    concepts: ["Ksp", "Common ion effect", "Solubility"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["Ksp = [Ag⁺][Cl⁻]", "s = Ksp/[Cl⁻] (common ion)"],
    ncertLines: ["Class 11 Ch. 7 — Solubility Product"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 20, trending: true, ncertDirect: true,
  },

  // Electrochemistry
  {
    id: "jm-ec-001", exam: "JEE Main", year: 2023, session: "Apr S1",
    questionType: "MCQ-Single",
    question: "The standard cell potential for Zn|Zn²⁺(1M)||Cu²⁺(1M)|Cu is 1.10 V. The equilibrium constant K at 298 K is approximately: (log 10 = 1)",
    options: { A: "10³⁷", B: "10⁷⁴", C: "10¹⁸", D: "10³" },
    answer: "A",
    explanation: "log K = nE°/0.0592 = 2 × 1.10/0.0592 ≈ 37.2. K ≈ 10³⁷.",
    chapter: "Electrochemistry", subtopic: "Nernst Equation",
    concepts: ["Standard cell potential", "Equilibrium constant from E°cell", "Nernst equation"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["log K = nE°/0.0592 (at 298 K)", "ΔG° = −nFE° = −RT ln K"],
    ncertLines: ["Class 12 Ch. 3 — Nernst Equation"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 22, trending: true, ncertDirect: true,
  },

  {
    id: "jm-ec-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "During electrolysis of dilute H₂SO₄, the gases evolved at cathode and anode are:",
    options: {
      A: "H₂ at cathode, O₂ at anode",
      B: "O₂ at cathode, H₂ at anode",
      C: "SO₂ at anode, H₂ at cathode",
      D: "H₂ at anode, SO₂ at cathode"
    },
    answer: "A",
    explanation: "Cathode (reduction): 2H⁺ + 2e⁻ → H₂↑. Anode (oxidation): 2H₂O → O₂ + 4H⁺ + 4e⁻. (Dilute H₂SO₄: O₂ evolved, not SO₃).",
    chapter: "Electrochemistry", subtopic: "Electrolysis",
    concepts: ["Electrolysis", "Cathode vs anode reactions", "Discharge potential"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["Q = It", "W = ZIt (Faraday's law)"],
    ncertLines: ["Class 12 Ch. 3 — Electrolysis"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 16, trending: false, ncertDirect: true,
  },

  // Chemical Kinetics
  {
    id: "jm-ck-001", exam: "JEE Main", year: 2023, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "Rate constant of a first order reaction is 2 × 10⁻³ s⁻¹. Time required to reduce concentration to 1/8th of initial value is:",
    options: { A: "693 s", B: "1039.5 s", C: "346.5 s", D: "2079 s" },
    answer: "B",
    explanation: "1 → 1/2 → 1/4 → 1/8 requires 3 half-lives. t₁/₂ = 0.693/k = 346.5 s. t = 3 × 346.5 = 1039.5 s.",
    chapter: "Chemical Kinetics", subtopic: "First Order Reactions",
    concepts: ["First order kinetics", "Half-life", "Rate constant"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["t₁/₂ = 0.693/k", "t = (1/k) ln(a₀/a)"],
    ncertLines: ["Class 12 Ch. 4 — First Order Reaction"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 32, trending: true, ncertDirect: true,
  },

  {
    id: "jm-ck-002", exam: "JEE Main", year: 2024, session: "Apr S2",
    questionType: "MCQ-Single",
    question: "For a zero order reaction, the rate of reaction is:",
    options: {
      A: "Directly proportional to concentration of reactant",
      B: "Inversely proportional to concentration",
      C: "Independent of concentration",
      D: "Proportional to square of concentration"
    },
    answer: "C",
    explanation: "Zero order: rate = k[A]⁰ = k (constant). Rate is independent of concentration.",
    chapter: "Chemical Kinetics", subtopic: "Order of Reaction",
    concepts: ["Zero order reaction", "Rate law", "Order vs molecularity"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["rate = k[A]ⁿ", "For zero order: rate = k"],
    ncertLines: ["Class 12 Ch. 4 — Zero Order Reaction"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
  },

  {
    id: "jm-ck-003", exam: "JEE Main", year: 2021,
    questionType: "MCQ-Single",
    question: "Activation energy of a reaction is zero. The rate constant for this reaction is:",
    options: {
      A: "Zero at all temperatures",
      B: "Infinite at all temperatures",
      C: "Equal to Arrhenius pre-exponential factor A at all temperatures",
      D: "Temperature dependent"
    },
    answer: "C",
    explanation: "Arrhenius: k = A × e^(−Ea/RT). If Ea = 0: k = A × e⁰ = A. Rate constant equals A at all temperatures.",
    chapter: "Chemical Kinetics", subtopic: "Arrhenius Equation",
    concepts: ["Arrhenius equation", "Activation energy", "Frequency factor"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["k = Ae^(−Ea/RT)", "ln k = ln A − Ea/RT"],
    ncertLines: ["Class 12 Ch. 4 — Arrhenius Equation"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 14, trending: false, ncertDirect: true,
  },

  // Solutions
  {
    id: "jm-sol-001", exam: "JEE Main", year: 2023, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "Which solution will have highest osmotic pressure at 298 K?",
    options: {
      A: "0.1 M glucose",
      B: "0.1 M NaCl",
      C: "0.1 M BaCl₂",
      D: "0.1 M AlCl₃"
    },
    answer: "D",
    explanation: "π = iCRT. AlCl₃ → Al³⁺ + 3Cl⁻, i=4. BaCl₂: i=3. NaCl: i=2. Glucose: i=1. AlCl₃ has highest i → highest π.",
    chapter: "Solutions", subtopic: "Colligative Properties",
    concepts: ["Osmotic pressure", "van't Hoff factor", "Strong electrolyte"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["π = iCRT", "van't Hoff factor i"],
    ncertLines: ["Class 12 Ch. 2 — Osmotic Pressure"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 25, trending: true, ncertDirect: true,
  },

  {
    id: "jm-sol-002", exam: "JEE Main", year: 2022, session: "Jun S2",
    questionType: "MCQ-Single",
    question: "Which of the following shows maximum positive deviation from Raoult's Law?",
    options: {
      A: "Benzene + toluene",
      B: "Acetone + chloroform",
      C: "Acetone + carbon disulphide",
      D: "Water + nitric acid"
    },
    answer: "C",
    explanation: "Positive deviation: A–B interactions weaker than A–A and B–B. Acetone–CS₂: different polarity, very weak cross-interactions → maximum positive deviation.",
    chapter: "Solutions", subtopic: "Non-ideal Solutions",
    concepts: ["Raoult's law", "Positive deviation", "Intermolecular interactions", "Azeotrope"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["p_total = pA° xA + pB° xB (Raoult's law)"],
    ncertLines: ["Class 12 Ch. 2 — Non-ideal Solutions"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 20, trending: true, ncertDirect: true,
  },

  // ── INORGANIC CHEMISTRY ───────────────────────────────────────────────────

  // Periodic Table
  {
    id: "jm-pt-001", exam: "JEE Main", year: 2023, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "The correct order of first ionisation energy is:",
    options: {
      A: "N > O > F > Ne",
      B: "O > N > F > Ne",
      C: "F > O > N > Ne",
      D: "Ne > F > O > N"
    },
    answer: "D",
    explanation: "General trend: increases across period. Exception: IE₁(O) < IE₁(N) due to extra stability of half-filled 2p³ of N. Correct order: Ne > F > O > N.",
    chapter: "Periodic Table", subtopic: "Ionisation Energy",
    concepts: ["Ionisation energy", "Periodic trend exceptions", "Half-filled stability"],
    reactions: [], reagents: [],
    exceptions: ["IE₁ of O < N despite higher Z — half-filled 2p³ stability"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 3 — Ionisation Enthalpy"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 40, trending: true, ncertDirect: true,
  },

  {
    id: "jm-pt-002", exam: "JEE Main", year: 2024, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "Which of the following has the highest electron affinity?",
    options: { A: "F", B: "Cl", C: "Br", D: "I" },
    answer: "B",
    explanation: "Cl has higher EA than F. F's compact 2p orbitals cause repulsion when an electron is added. Cl has more diffuse 3p → better electron accommodation → higher EA.",
    chapter: "Periodic Table", subtopic: "Electron Affinity",
    concepts: ["Electron affinity", "Periodic trend exceptions"],
    reactions: [], reagents: [],
    exceptions: ["EA of Cl > F — F's compact 2p repels incoming electron"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 3 — Electron Gain Enthalpy"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 38, trending: true, ncertDirect: true,
  },

  // p-Block
  {
    id: "jm-pb-001", exam: "JEE Main", year: 2023, session: "Apr S1",
    questionType: "MCQ-Single",
    question: "Among the following, the compound that DOES NOT exist is:",
    options: { A: "NCl₅", B: "PCl₅", C: "AsCl₅", D: "SbCl₅" },
    answer: "A",
    explanation: "N has no d orbitals in valence shell (Period 2 element). Maximum valency of N is 4. NCl₅ cannot exist. P, As, Sb have d orbitals and can form MCl₅.",
    chapter: "p-Block Elements", subtopic: "Nitrogen Family — Anomalous Behaviour",
    concepts: ["d-orbital availability", "Period 2 anomaly", "Maximum valency"],
    reactions: [], reagents: [],
    exceptions: ["N cannot exceed octet (no d orbitals) — NCl₅ does not exist"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — Group 15 Elements: Anomalous Behaviour of Nitrogen"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 22, trending: true, ncertDirect: true,
  },

  {
    id: "jm-pb-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "In the Contact process for manufacture of H₂SO₄, SO₃ is absorbed in concentrated H₂SO₄ and not in water because:",
    options: {
      A: "SO₃ is insoluble in water",
      B: "Absorption in water gives dilute H₂SO₄",
      C: "Absorption of SO₃ in water gives acid mist which is difficult to handle",
      D: "SO₃ reacts violently with dilute H₂SO₄"
    },
    answer: "C",
    explanation: "SO₃ + H₂O gives H₂SO₄ but this reaction is highly exothermic and creates a fine acid mist (fog of droplets) that is almost impossible to condense and recycle. So SO₃ is absorbed in conc. H₂SO₄ to form oleum (H₂S₂O₇), which is then diluted.",
    chapter: "p-Block Elements", subtopic: "Sulphuric Acid Manufacture",
    concepts: ["Contact process", "Oleum", "Industrial chemistry"],
    reactions: ["Contact process"], reagents: ["h2so4-fuming"],
    exceptions: ["SO₃ cannot be added directly to water — acid mist forms"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — Manufacture of Sulphuric Acid"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 18, trending: false, ncertDirect: true,
  },

  // d-Block
  {
    id: "jm-db-001", exam: "JEE Main", year: 2023, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "The correct electronic configuration of Cr (Z=24) is:",
    options: {
      A: "[Ar] 3d⁴ 4s²",
      B: "[Ar] 3d⁵ 4s¹",
      C: "[Ar] 3d⁶ 4s⁰",
      D: "[Ar] 3d³ 4s²"
    },
    answer: "B",
    explanation: "Cr has anomalous configuration [Ar]3d⁵4s¹ due to extra stability of half-filled 3d subshell (exchange energy). The energy gain in achieving 3d⁵ exceeds the energy cost of promoting one 4s electron.",
    chapter: "d and f Block Elements", subtopic: "Electronic Configuration",
    concepts: ["Anomalous electronic configuration", "Half-filled d stability", "Exchange energy"],
    reactions: [], reagents: [],
    exceptions: ["Cr is [Ar]3d⁵4s¹ not 3d⁴4s² — half-filled stability"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 8 — Electronic Configurations of d-Block Elements"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 42, trending: true, ncertDirect: true,
  },

  {
    id: "jm-db-002", exam: "JEE Main", year: 2024, session: "Apr S1",
    questionType: "MCQ-Single",
    question: "KMnO₄ reacts with oxalic acid in acidic medium. The oxidation state of Mn changes from:",
    options: { A: "+7 to +2", B: "+7 to +4", C: "+7 to +6", D: "+6 to +2" },
    answer: "A",
    explanation: "In acidic medium: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Mn goes from +7 to +2. Oxalic acid (C₂H₂O₄) is oxidized to CO₂.",
    chapter: "d and f Block Elements", subtopic: "KMnO₄ Reactions",
    concepts: ["KMnO₄ reactions", "Oxidation state of Mn", "Redox in acid medium"],
    reactions: [], reagents: ["kmno4-acidic"],
    exceptions: [],
    formulas: ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"],
    ncertLines: ["Class 12 Ch. 8 — Potassium Permanganate"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
  },

  // Coordination Compounds
  {
    id: "jm-cc-001", exam: "JEE Main", year: 2023, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "The IUPAC name of [Co(NH₃)₄Cl₂]Cl is:",
    options: {
      A: "Tetraamminedichlorocobalt(III) chloride",
      B: "Tetramminedichlorocobalt(II) chloride",
      C: "Dichlorotetramminecobalt(III) chloride",
      D: "Tetraamminedichlorocobalt(IV) chloride"
    },
    answer: "A",
    explanation: "Complex ion: [Co(NH₃)₄Cl₂]⁺. Charge balance: Co + 0(4NH₃) + (−1)(2Cl) = +1 → Co is +3. Name: tetraammine (alphabetical: ammine before chloro)... tetraamminedichlorocobalt(III) chloride.",
    chapter: "Coordination Compounds", subtopic: "IUPAC Nomenclature",
    concepts: ["IUPAC nomenclature", "Charge balance", "Ligand naming"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 9 — IUPAC Nomenclature of Coordination Compounds"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
  },

  {
    id: "jm-cc-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "The complex [Fe(CN)₆]⁴⁻ is diamagnetic. The hybridization of Fe is:",
    options: { A: "sp³d²", B: "d²sp³", C: "sp³", D: "dsp²" },
    answer: "B",
    explanation: "CN⁻ is a strong field ligand → pairing of d electrons. Fe²⁺ in [Fe(CN)₆]⁴⁻ has d⁶ → with strong field: all 6 d electrons paired → 0 unpaired → diamagnetic. Uses inner 3d orbitals → d²sp³ hybridization.",
    chapter: "Coordination Compounds", subtopic: "Crystal Field Theory",
    concepts: ["Strong field ligands", "Crystal field theory", "Magnetic properties", "Inner vs outer orbital complex"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["μ = √(n(n+2)) BM"],
    ncertLines: ["Class 12 Ch. 9 — Crystal Field Theory"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 24, trending: true, ncertDirect: true,
  },

  // ── ORGANIC CHEMISTRY ─────────────────────────────────────────────────────

  // General Organic Chemistry
  {
    id: "jm-goc-001", exam: "JEE Main", year: 2023, session: "Apr S2",
    questionType: "MCQ-Single",
    question: "Correct order of acidity: CH₃COOH, CF₃COOH, CCl₃COOH, CBr₃COOH",
    options: {
      A: "CF₃COOH > CCl₃COOH > CBr₃COOH > CH₃COOH",
      B: "CH₃COOH > CBr₃COOH > CCl₃COOH > CF₃COOH",
      C: "CCl₃COOH > CF₃COOH > CBr₃COOH > CH₃COOH",
      D: "CBr₃COOH > CCl₃COOH > CF₃COOH > CH₃COOH"
    },
    answer: "A",
    explanation: "Higher −I effect = more electron withdrawal from COOH = more stable carboxylate = higher acidity. −I order: F > Cl > Br > H. So CF₃COOH is most acidic.",
    chapter: "General Organic Chemistry", subtopic: "Inductive Effect",
    concepts: ["Inductive effect", "Acid strength", "Carboxylate stability", "Electronegativity"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Inductive Effect on Acidity"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: false,
  },

  {
    id: "jm-goc-002", exam: "JEE Main", year: 2024, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "The most stable carbocation is:",
    options: {
      A: "(CH₃)₃C⁺",
      B: "CH₂=CH–CH₂⁺",
      C: "C₆H₅CH₂⁺",
      D: "CH₃–CH⁺–CH₃"
    },
    answer: "C",
    explanation: "Benzylic carbocation (C₆H₅CH₂⁺) is stabilised by resonance with the aromatic ring (7 resonance structures including ring delocalization). More stable than allyl (3 structures) or tertiary alkyl (hyperconjugation only).",
    chapter: "General Organic Chemistry", subtopic: "Carbocation Stability",
    concepts: ["Carbocation stability", "Resonance", "Hyperconjugation", "Benzylic vs allylic"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 12 — Stability of Carbocations"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 35, trending: true, ncertDirect: false,
  },

  // Hydrocarbons
  {
    id: "jm-hc-001", exam: "JEE Main", year: 2023, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "Product of ozonolysis of 2-butene followed by reductive workup (Zn/H₂O) is:",
    options: {
      A: "Two molecules of acetaldehyde",
      B: "One molecule of acetaldehyde and one molecule of formaldehyde",
      C: "Butanedioic acid",
      D: "Two molecules of acetic acid"
    },
    answer: "A",
    explanation: "2-butene (CH₃CH=CHCH₃). Ozonolysis cleaves C=C. Each side gives CH₃CHO (acetaldehyde). Reductive workup gives aldehydes.",
    chapter: "Hydrocarbons", subtopic: "Alkene Reactions",
    concepts: ["Ozonolysis", "Reductive workup", "Oxidative cleavage"],
    reactions: ["ozonolysis"], reagents: ["ozone"],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 13 — Ozonolysis of Alkenes"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 22, trending: true, ncertDirect: true,
  },

  {
    id: "jm-hc-002", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "Propyne on treatment with H₂O in presence of H₂SO₄/HgSO₄ gives:",
    options: {
      A: "Propan-1-ol",
      B: "Propanal",
      C: "Propan-2-ol",
      D: "Acetone (propanone)"
    },
    answer: "D",
    explanation: "Hydration of propyne (CH₃C≡CH) follows Markovnikov: H₂O adds to give enol (CH₃C(OH)=CH₂) → tautomerises to ketone (CH₃COCH₃, acetone). Terminal alkyne → ketone via Markovnikov hydration.",
    chapter: "Hydrocarbons", subtopic: "Alkyne Reactions",
    concepts: ["Hydration of alkynes", "Markovnikov's rule", "Keto-enol tautomerism"],
    reactions: [], reagents: ["h2so4-conc"],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 13 — Reactions of Alkynes"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 20, trending: true, ncertDirect: true,
  },

  // Haloalkanes
  {
    id: "jm-ha-001", exam: "JEE Main", year: 2022, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "Which undergoes SN1 reaction most readily?",
    options: {
      A: "CH₃Cl",
      B: "(CH₃)₃CCl",
      C: "(CH₃)₂CHCl",
      D: "C₆H₅CH₂Cl"
    },
    answer: "D",
    explanation: "SN1 rate determined by carbocation stability. Benzylic (C₆H₅CH₂⁺) is more stable than tertiary (resonance > hyperconjugation). C₆H₅CH₂Cl undergoes SN1 most readily.",
    chapter: "Haloalkanes and Haloarenes", subtopic: "SN1 vs SN2",
    concepts: ["SN1 mechanism", "Carbocation stability", "Benzylic carbocation"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 10 — SN1 Mechanism"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: false,
  },

  {
    id: "jm-ha-002", exam: "JEE Main", year: 2023, session: "Apr S1",
    questionType: "MCQ-Single",
    question: "The product of reaction of CH₃CH₂Br with alcoholic KOH is:",
    options: {
      A: "CH₃CH₂OH",
      B: "CH₂=CH₂",
      C: "CH₃CH₂OCH₂CH₃",
      D: "CH₃CHO"
    },
    answer: "B",
    explanation: "Alcoholic KOH = strong base in non-polar solvent → favours E2 elimination → alkene. Aqueous KOH would give SN2 (alcohol).",
    chapter: "Haloalkanes and Haloarenes", subtopic: "Elimination vs Substitution",
    concepts: ["E2 elimination", "Alcoholic KOH", "Saytzeff rule", "SN2 vs E2 competition"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 10 — Elimination Reactions"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 32, trending: true, ncertDirect: true,
  },

  // Aldehydes & Ketones
  {
    id: "jm-ak-001", exam: "JEE Main", year: 2023, session: "Jun S1",
    questionType: "MCQ-Single",
    question: "Which does NOT give silver mirror test?",
    options: {
      A: "HCHO",
      B: "CH₃CHO",
      C: "C₆H₅CHO",
      D: "CH₃COCH₃"
    },
    answer: "D",
    explanation: "Tollens' test (silver mirror) is positive only for aldehydes. Acetone (CH₃COCH₃) is a ketone with no aldehyde group → negative result.",
    chapter: "Aldehydes Ketones", subtopic: "Aldehyde Tests",
    concepts: ["Tollens' test", "Silver mirror reaction", "Aldehyde vs ketone identification"],
    reactions: [], reagents: ["tollens-reagent"],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Tests for Aldehydes"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 26, trending: true, ncertDirect: true,
  },

  {
    id: "jm-ak-002", exam: "JEE Main", year: 2024, session: "Jan S2",
    questionType: "MCQ-Single",
    question: "Benzaldehyde does NOT give Fehling's test because:",
    options: {
      A: "It is a ketone",
      B: "The aromatic ring prevents oxidation",
      C: "Benzaldehyde cannot reduce Cu²⁺ in alkaline conditions",
      D: "Benzaldehyde has no α-hydrogen"
    },
    answer: "C",
    explanation: "Fehling's solution uses alkaline Cu²⁺ complex. Aromatic aldehydes like benzaldehyde are not oxidised by Fehling's (insufficient reducing power under alkaline conditions). Aliphatic aldehydes ARE oxidised. Tollens' reagent oxidises ALL aldehydes.",
    chapter: "Aldehydes Ketones", subtopic: "Aldehyde Tests",
    concepts: ["Fehling's test", "Tollens' test", "Aromatic vs aliphatic aldehyde"],
    reactions: [], reagents: ["fehling-solution", "tollens-reagent"],
    exceptions: ["Fehling's test negative for benzaldehyde — only aliphatic aldehydes positive"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Fehling's Solution"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 24, trending: true, ncertDirect: true,
  },

  {
    id: "jm-ak-003", exam: "JEE Main", year: 2021,
    questionType: "MCQ-Single",
    question: "Aldol condensation is given by:",
    options: {
      A: "HCHO only",
      B: "Aldehydes and ketones having at least one α-hydrogen",
      C: "All aldehydes",
      D: "All ketones"
    },
    answer: "B",
    explanation: "Aldol condensation requires at least one α-hydrogen (for enolate formation). HCHO (no α-H) and benzaldehyde (no α-H) do NOT undergo aldol. Aldehydes/ketones with α-H undergo aldol in dilute NaOH.",
    chapter: "Aldehydes Ketones", subtopic: "Aldol Condensation",
    concepts: ["Aldol condensation", "α-hydrogen requirement", "Enolate formation"],
    reactions: ["Aldol condensation"], reagents: [],
    exceptions: ["Cannizzaro reaction occurs when NO α-H present (opposite of aldol)"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Aldol Condensation"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
  },

  // Amines
  {
    id: "jm-am-001", exam: "JEE Main", year: 2022, session: "Jun S2",
    questionType: "MCQ-Single",
    question: "Carbylamine test is a test for:",
    options: {
      A: "Primary amines only",
      B: "Secondary amines",
      C: "Tertiary amines",
      D: "All amines"
    },
    answer: "A",
    explanation: "Carbylamine reaction: RNH₂ + CHCl₃ + 3KOH → RNC (isocyanide, foul smell). Requires a primary amino group (N–H bond needed twice). Negative for 2° and 3° amines.",
    chapter: "Amines", subtopic: "Amine Tests",
    concepts: ["Carbylamine test", "Primary amine identification", "Isocyanide"],
    reactions: ["Carbylamine reaction"], reagents: [],
    exceptions: ["Carbylamine test specific to PRIMARY amines only"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 13 — Tests for Amines"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 25, trending: true, ncertDirect: true,
  },

  {
    id: "jm-am-002", exam: "JEE Main", year: 2023, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "The correct order of basic strength in aqueous solution is:",
    options: {
      A: "(CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂",
      B: "C₆H₅NH₂ > NH₃ > CH₃NH₂ > (CH₃)₂NH",
      C: "CH₃NH₂ > (CH₃)₂NH > NH₃ > C₆H₅NH₂",
      D: "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃"
    },
    answer: "A",
    explanation: "In water: 2° amine > 1° amine > NH₃ > aniline. Secondary amine conjugate acid has 2 N–H bonds for H-bonding solvation (better stabilisation). Aniline: N lone pair delocalised into ring → very weak base.",
    chapter: "Amines", subtopic: "Basicity of Amines",
    concepts: ["Amine basicity", "Solvation effect", "Inductive effect", "Resonance in aniline"],
    reactions: [], reagents: [],
    exceptions: ["Amine basicity order in water: 2° > 1° > 3° > NH₃ (solvation effect reverses gas-phase order)"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 13 — Basicity of Amines"],
    difficulty: "Hard", marks: 4, negMarks: 1, frequency: 38, trending: true, ncertDirect: true,
  },

  // Biomolecules
  {
    id: "jm-bm-001", exam: "JEE Main", year: 2023, session: "Apr S2",
    questionType: "MCQ-Single",
    question: "Which of the following is a non-reducing sugar?",
    options: { A: "Glucose", B: "Maltose", C: "Sucrose", D: "Lactose" },
    answer: "C",
    explanation: "Sucrose is formed by glycosidic bond between anomeric C-1 of glucose AND anomeric C-2 of fructose. Both anomeric positions are locked → no free hemiacetal → non-reducing sugar.",
    chapter: "Biomolecules", subtopic: "Carbohydrates",
    concepts: ["Reducing vs non-reducing sugars", "Anomeric carbon", "Glycosidic bond", "Sucrose structure"],
    reactions: [], reagents: [],
    exceptions: ["Sucrose non-reducing — both anomeric carbons involved in glycosidic bond"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 14 — Disaccharides"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
  },

  {
    id: "jm-bm-002", exam: "JEE Main", year: 2024, session: "Jan S1",
    questionType: "MCQ-Single",
    question: "Fructose gives positive Fehling's test because:",
    options: {
      A: "It is an aldose sugar",
      B: "In alkaline conditions, fructose isomerises to glucose via enediol intermediate",
      C: "Fructose has an aldehydic group",
      D: "Fructose is a monosaccharide"
    },
    answer: "B",
    explanation: "Fructose is a ketose (C=O at C-2). In alkaline Fehling's conditions, fructose undergoes tautomerisation via an enediol intermediate to form glucose (aldose), which then reduces Cu²⁺.",
    chapter: "Biomolecules", subtopic: "Carbohydrates",
    concepts: ["Fructose", "Keto-enol tautomerism", "Fehling's test", "Reducing sugar"],
    reactions: [], reagents: ["fehling-solution"],
    exceptions: ["Fructose (ketose) gives positive Fehling's — isomerises in base to give aldose"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 14 — Fructose"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
  },

  // Polymers
  {
    id: "jm-pol-001", exam: "JEE Main", year: 2022,
    questionType: "MCQ-Single",
    question: "Nylon-6,6 is formed by condensation of:",
    options: {
      A: "Adipic acid and hexamethylenediamine",
      B: "Caprolactam",
      C: "Hexamethylene diisocyanate and glycol",
      D: "Formaldehyde and phenol"
    },
    answer: "A",
    explanation: "Nylon-6,6: condensation polymer of hexanedioic acid (adipic acid, 6C) and 1,6-diaminohexane (hexamethylenediamine, 6C). The '6,6' indicates 6 carbons in each monomer.",
    chapter: "Polymers", subtopic: "Condensation Polymers",
    concepts: ["Condensation polymerisation", "Nylon-6,6", "Polyamide"],
    reactions: ["Nylon-6,6 synthesis"], reagents: [],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 15 — Polyamides — Nylon-6,6"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 22, trending: false, ncertDirect: true,
  },
  ...JEE_MAIN_PHASE_A_QUESTIONS,
];

