import type { PYQQuestion } from "../schema";
import { NEET_PHASE_A_QUESTIONS } from "./neetPhaseA";

// ─────────────────────────────────────────────────────────────────────────────
// NEET PYQ Database — Phase 3
// Representative questions 2005–2024 with NCERT-heavy tagging.
// NEET: heavy emphasis on NCERT facts, definitions, and biological chemistry.
// ─────────────────────────────────────────────────────────────────────────────

export const NEET_QUESTIONS: PYQQuestion[] = [
  // Atomic Structure
  {
    id: "nt-as-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "The quantum numbers of the last electron entering into Cr (Z=24) are:",
    options: {
      A: "n=3, l=2, m=−2, s=+½",
      B: "n=4, l=0, m=0, s=+½",
      C: "n=3, l=2, m=+2, s=+½",
      D: "n=4, l=1, m=0, s=+½"
    },
    answer: "B",
    explanation: "Cr: [Ar]3d⁵4s¹ (anomalous). Last electron fills 4s orbital: n=4, l=0 (s orbital), m=0, s=+½.",
    chapter: "Atomic Structure", subtopic: "Electronic Configuration",
    concepts: ["Quantum numbers", "Anomalous configuration of Cr", "Half-filled d stability"],
    reactions: [], reagents: [],
    exceptions: ["Cr is [Ar]3d⁵4s¹ not 3d⁴4s²"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 2 — Electronic Configuration — Cr Exception"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 35, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-as-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "de Broglie wavelength of an electron accelerated through 100 V is approximately:",
    options: { A: "0.123 nm", B: "1.23 Å", C: "0.123 Å", D: "1.23 nm" },
    answer: "B",
    explanation: "λ = 12.27/√V Å = 12.27/√100 = 12.27/10 = 1.227 Å ≈ 1.23 Å.",
    chapter: "Atomic Structure", subtopic: "de Broglie Wavelength",
    concepts: ["de Broglie wavelength", "Wave-particle duality"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["λ = 12.27/√V Å (for electrons)"],
    ncertLines: ["Class 11 Ch. 2 — de Broglie Relationship"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-as-003", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "The number of nodal planes in a p_x orbital is:",
    options: { A: "1", B: "2", C: "0", D: "3" },
    answer: "A",
    explanation: "pₓ orbital has 1 nodal plane (the yz-plane, where ψ=0). Angular nodes = l = 1 for p orbital.",
    chapter: "Atomic Structure", subtopic: "Orbital Nodes",
    concepts: ["Angular nodes", "Nodal planes", "p-orbital shape"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["Angular nodes = l", "Radial nodes = n − l − 1"],
    ncertLines: ["Class 11 Ch. 2 — Shapes of Atomic Orbitals"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Periodic Table
  {
    id: "nt-pt-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Which of the following has maximum ionisation energy?",
    options: { A: "N", B: "O", C: "S", D: "P" },
    answer: "A",
    explanation: "IE₁: N (1402 kJ/mol) > O (1314 kJ/mol). N has half-filled 2p³ (extra stable). P (1012 kJ/mol) and S (1000 kJ/mol) are Period 3. Among these four, N is highest.",
    chapter: "Periodic Table", subtopic: "Ionisation Energy",
    concepts: ["Ionisation energy", "Half-filled stability", "Period 2 exceptions"],
    reactions: [], reagents: [],
    exceptions: ["IE of N > O despite N having lower Z — half-filled 2p³ stability"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 3 — Ionisation Enthalpy"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 42, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-pt-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Which has the highest electron affinity?",
    options: { A: "F", B: "Cl", C: "O", D: "S" },
    answer: "B",
    explanation: "Cl has highest EA (−349 kJ/mol) among the halogens. F's compact 2p orbitals cause electron–electron repulsion when accepting an e⁻. O and S have lower EA than halogens.",
    chapter: "Periodic Table", subtopic: "Electron Affinity",
    concepts: ["Electron affinity", "Orbital size and EA", "Cl > F anomaly"],
    reactions: [], reagents: [],
    exceptions: ["EA of Cl > F — F's compact 2p orbitals repel incoming electron"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 3 — Electron Gain Enthalpy"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 38, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Chemical Bonding
  {
    id: "nt-cb-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The shape of NH₃ is:",
    options: { A: "Triangular planar", B: "Trigonal pyramidal", C: "T-shaped", D: "Square planar" },
    answer: "B",
    explanation: "NH₃: 3 bond pairs + 1 lone pair. Electron geometry: tetrahedral. Molecular shape: trigonal pyramidal. Lone pair on N compresses bond angle to 107° (< 109.5°).",
    chapter: "Chemical Bonding", subtopic: "VSEPR Theory",
    concepts: ["VSEPR", "Lone pair effect", "Bond angle", "sp³ hybridization"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 4 — VSEPR Theory — NH₃"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-cb-002", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Among H₂O, H₂S, H₂Se, H₂Te, the correct order of boiling points is:",
    options: {
      A: "H₂O > H₂Te > H₂Se > H₂S",
      B: "H₂S > H₂Se > H₂Te > H₂O",
      C: "H₂Te > H₂Se > H₂S > H₂O",
      D: "H₂O > H₂S > H₂Se > H₂Te"
    },
    answer: "A",
    explanation: "H₂O: anomalously high bp (100°C) due to strong H-bonding. Among H₂S, H₂Se, H₂Te: bp increases with molar mass (↑ van der Waals forces). Order: H₂Te > H₂Se > H₂S. Overall: H₂O > H₂Te > H₂Se > H₂S.",
    chapter: "Chemical Bonding", subtopic: "Hydrogen Bonding",
    concepts: ["Hydrogen bonding", "van der Waals forces", "Boiling point anomaly", "Group 16 hydrides"],
    reactions: [], reagents: [],
    exceptions: ["H₂O has anomalously high bp due to H-bonding — zigzag in group 16 bp trend"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 4 — Hydrogen Bonding"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // s-Block
  {
    id: "nt-sb-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Which alkali metal has the lowest melting point?",
    options: { A: "Li", B: "Na", C: "K", D: "Cs" },
    answer: "D",
    explanation: "Melting point decreases down Group 1: Li > Na > K > Rb > Cs. Cs has weakest metallic bonding (largest atomic size, weakest lattice). Cs mp = 28.5°C.",
    chapter: "s-Block Elements", subtopic: "Physical Properties of Alkali Metals",
    concepts: ["Melting point trend", "Metallic bonding", "Alkali metal properties"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 10 — s-Block Elements — Physical Properties"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 18, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-sb-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Which of the following does NOT react with water?",
    options: { A: "Na", B: "Li", C: "Mg", D: "Be" },
    answer: "D",
    explanation: "Be does not react with water even at high temperatures (protected by its oxide layer; extremely high charge density makes BeO very stable). Li, Na react with cold water. Mg reacts slowly with hot water.",
    chapter: "s-Block Elements", subtopic: "Reactivity with Water",
    concepts: ["Diagonal relationship", "Be anomaly", "Reactivity with water", "Charge density"],
    reactions: [], reagents: [],
    exceptions: ["Be does not react with water (unlike other alkaline earth metals) — dense oxide layer"],
    formulas: [],
    ncertLines: ["Class 11 Ch. 10 — Anomalous Behaviour of Beryllium"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 20, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // p-Block
  {
    id: "nt-pb-001", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "HF is a weak acid while HCl, HBr, HI are strong acids because:",
    options: {
      A: "H–F bond energy is highest among H–X bonds",
      B: "F is less electronegative than Cl",
      C: "HF is a smaller molecule",
      D: "F has no d-orbitals"
    },
    answer: "A",
    explanation: "H–F bond energy (568 kJ/mol) is much higher than H–Cl (432), H–Br (366), H–I (298). High bond energy means less dissociation → weak acid. Bond strength decreases: HF > HCl > HBr > HI; acid strength is opposite: HI > HBr > HCl > HF.",
    chapter: "p-Block Elements", subtopic: "Hydrohalic Acids",
    concepts: ["Acid strength of HX", "Bond dissociation energy", "HF as weak acid"],
    reactions: [], reagents: [],
    exceptions: ["HF is weak acid — strongest H–X bond makes it hardest to ionise"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — Hydrogen Halides"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 35, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-pb-002", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Phosphorus has maximum covalency of 5 but nitrogen has maximum covalency of 4. This is because:",
    options: {
      A: "N is more electronegative than P",
      B: "N has no available d-orbitals; P has available 3d orbitals",
      C: "Atomic radius of P is larger",
      D: "N has fewer electrons than P"
    },
    answer: "B",
    explanation: "N is a Period 2 element with no d-orbitals in the valence shell. Cannot expand octet beyond 4 bonds + charge (or 4 bonds with formal charge). P has 3d orbitals available → can form 5 bonds (sp³d hybridization). This is the Period 2 anomaly.",
    chapter: "p-Block Elements", subtopic: "Period 2 Anomaly",
    concepts: ["d-orbital availability", "Period 2 anomaly", "Octet expansion", "Maximum valency"],
    reactions: [], reagents: [],
    exceptions: ["N cannot exceed 4 covalent bonds (no d-orbitals); P can form 5 bonds"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — Anomalous Behaviour of Nitrogen"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-pb-003", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The correct order of acidic strength of oxoacids of sulphur is:",
    options: {
      A: "H₂SO₄ > H₂SO₃ > H₂S₂O₃",
      B: "H₂SO₃ > H₂SO₄ > H₂S₂O₃",
      C: "H₂S₂O₃ > H₂SO₄ > H₂SO₃",
      D: "All are equally acidic"
    },
    answer: "A",
    explanation: "Acid strength of oxoacids increases with oxidation state of central atom (more electronegative S → weaker O–H bond in O–H → more acidic). H₂SO₄ (S in +6) > H₂SO₃ (S in +4) > H₂S₂O₃ (thiosulphuric acid, less oxidised).",
    chapter: "p-Block Elements", subtopic: "Oxoacids of Sulphur",
    concepts: ["Oxoacid strength", "Oxidation state effect on acidity", "S-block oxoacids"],
    reactions: [], reagents: [],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 7 — Oxoacids of Sulphur"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 22, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // d and f Block
  {
    id: "nt-db-001", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "The correct electronic configuration of Cu (Z=29) is:",
    options: {
      A: "[Ar] 3d⁹ 4s²",
      B: "[Ar] 3d¹⁰ 4s¹",
      C: "[Ar] 3d⁸ 4s²",
      D: "[Ar] 3d¹⁰ 4s²"
    },
    answer: "B",
    explanation: "Cu has anomalous configuration [Ar]3d¹⁰4s¹ due to extra stability of completely filled 3d subshell. Energy gained by achieving 3d¹⁰ > energy cost of promoting one 4s electron.",
    chapter: "d and f Block Elements", subtopic: "Electronic Configuration",
    concepts: ["Anomalous configuration", "Completely filled d stability", "Exchange energy"],
    reactions: [], reagents: [],
    exceptions: ["Cu is [Ar]3d¹⁰4s¹ not 3d⁹4s² — completely filled d stability"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 8 — Electronic Configurations — Cu Exception"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 42, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-db-002", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Which of the following transition metal ions is colourless?",
    options: { A: "Cu²⁺", B: "Fe³⁺", C: "Zn²⁺", D: "Ti³⁺" },
    answer: "C",
    explanation: "Colour in transition metal ions requires d–d transitions (partially filled d orbitals). Zn²⁺ has d¹⁰ (completely filled) → no d–d transitions possible → colourless. Cu²⁺ (d⁹), Fe³⁺ (d⁵), Ti³⁺ (d¹): all partially filled → coloured.",
    chapter: "d and f Block Elements", subtopic: "Colour in Transition Metals",
    concepts: ["d-d transitions", "Colour in transition metals", "d¹⁰ colourless", "Crystal field splitting"],
    reactions: [], reagents: [],
    exceptions: ["Zn²⁺ (d¹⁰) and Sc³⁺ (d⁰) are colourless — no d–d transitions possible"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 8 — Colour of Transition Metal Ions"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Coordination Compounds
  {
    id: "nt-cc-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The magnetic moment of [Fe(CN)₆]³⁻ is ~1.73 BM. The hybridization of Fe is:",
    options: { A: "sp³d²", B: "d²sp³", C: "sp³", D: "dsp²" },
    answer: "B",
    explanation: "CN⁻ is strong field ligand → pairing of d electrons in Fe³⁺. d⁵ with strong field: 2 electrons pair in t₂g → 1 unpaired e⁻ → μ = √3 ≈ 1.73 BM. Uses inner d orbitals → d²sp³ (inner orbital complex).",
    chapter: "Coordination Compounds", subtopic: "Magnetic Properties",
    concepts: ["Crystal field theory", "Strong field ligands", "Inner orbital complex", "Magnetic moment"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["μ = √(n(n+2)) BM"],
    ncertLines: ["Class 12 Ch. 9 — Crystal Field Theory"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 25, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Thermodynamics
  {
    id: "nt-td-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The enthalpy of combustion of methane is −890 kJ/mol. ΔHf°(CO₂) = −393, ΔHf°(H₂O) = −286 kJ/mol. ΔHf°(CH₄) is:",
    options: { A: "−74 kJ/mol", B: "+74 kJ/mol", C: "−52 kJ/mol", D: "−211 kJ/mol" },
    answer: "A",
    explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O. ΔHcomb = ΣΔHf(products) − ΣΔHf(reactants). −890 = (−393 + 2×(−286)) − ΔHf(CH₄). −890 = −965 − ΔHf(CH₄). ΔHf(CH₄) = −965 + 890 = −75 ≈ −74 kJ/mol.",
    chapter: "Thermodynamics", subtopic: "Hess's Law",
    concepts: ["Hess's law", "Standard enthalpy of formation", "Combustion enthalpy"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["ΔHrxn = ΣΔHf(products) − ΣΔHf(reactants)"],
    ncertLines: ["Class 11 Ch. 6 — Hess's Law"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 24, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Electrochemistry
  {
    id: "nt-ec-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "The mass of silver deposited when 0.5 F of electricity is passed through AgNO₃ solution is: (Atomic mass Ag = 108)",
    options: { A: "54 g", B: "108 g", C: "27 g", D: "216 g" },
    answer: "A",
    explanation: "Ag⁺ + e⁻ → Ag. 1 Faraday (96500 C) deposits 108 g of Ag (n-factor = 1). 0.5 F deposits 0.5 × 108 = 54 g.",
    chapter: "Electrochemistry", subtopic: "Faraday's Laws",
    concepts: ["Faraday's laws of electrolysis", "Electrodeposition", "Equivalent weight"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["W = EIt/96500", "W = (M/n) × (It/F)"],
    ncertLines: ["Class 12 Ch. 3 — Faraday's Laws of Electrolysis"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // General Organic
  {
    id: "nt-goc-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The most stable carbocation is:",
    options: {
      A: "(CH₃)₃C⁺",
      B: "CH₃⁺",
      C: "(CH₃)₂CH⁺",
      D: "C₆H₅CH₂⁺"
    },
    answer: "D",
    explanation: "Benzyl carbocation (C₆H₅CH₂⁺) is most stable due to extensive resonance delocalization into the benzene ring. More stable than tertiary alkyl carbocations which rely only on hyperconjugation.",
    chapter: "General Organic Chemistry", subtopic: "Carbocation Stability",
    concepts: ["Carbocation stability", "Resonance", "Hyperconjugation", "Benzylic stability"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 11 Ch. 12 — Reactive Intermediates"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 32, trending: true, ncertDirect: false,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-goc-002", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Glucose is an aldohexose. This can be confirmed by:",
    options: {
      A: "Fehling's test positive + HI/P gives hexyl iodide (6C compound)",
      B: "Fehling's test alone",
      C: "Molisch's test",
      D: "Iodoform test"
    },
    answer: "A",
    explanation: "Aldohexose: (1) must be an aldose → Fehling's/Tollens' positive. (2) must have 6 carbons → reduction with HI/P gives hexyl iodide (C₆H₁₃I). Together, these confirm aldehyde at C-1 and 6 carbon skeleton.",
    chapter: "Biomolecules", subtopic: "Carbohydrates — Structure",
    concepts: ["Glucose structure", "Aldohexose", "Chemical tests for sugars"],
    reactions: [], reagents: ["fehling-solution"],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 14 — Glucose — Open Chain Structure"],
    difficulty: "Hard", marks: 4, negMarks: 1, frequency: 14, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Alcohols, Phenols, Ethers
  {
    id: "nt-ape-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Phenol is more acidic than ethanol because:",
    options: {
      A: "Phenoxide ion is stabilized by resonance with the benzene ring",
      B: "Phenol has lower molecular weight",
      C: "The O–H bond in phenol is longer",
      D: "Ethanol has stronger H-bonding"
    },
    answer: "A",
    explanation: "Phenoxide (C₆H₅O⁻) has 5 resonance structures — the negative charge is delocalized into the ring. Ethoxide (C₂H₅O⁻) has no resonance. Greater conjugate base stability = stronger acid. pKa phenol ≈ 10 vs ethanol ≈ 16.",
    chapter: "Alcohols Phenols Ethers", subtopic: "Acidity of Phenol",
    concepts: ["Acidity", "Resonance stabilization", "Conjugate base stability", "Phenoxide"],
    reactions: [], reagents: [],
    exceptions: [],
    formulas: ["pKa phenol ≈ 10; pKa ethanol ≈ 16"],
    ncertLines: ["Class 12 Ch. 11 — Acidity of Phenols"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 36, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-ape-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Lucas test is used to distinguish:",
    options: {
      A: "Primary, secondary and tertiary alcohols",
      B: "Aldehydes from ketones",
      C: "Phenols from alcohols",
      D: "Alcohols from ethers"
    },
    answer: "A",
    explanation: "Lucas reagent (anhydrous ZnCl₂ + conc. HCl): 3° alcohol → immediate turbidity (fast SN1). 2° alcohol → turbidity in 5 min. 1° alcohol → no turbidity at RT. Distinguishes 1°, 2°, 3° alcohols.",
    chapter: "Alcohols Phenols Ethers", subtopic: "Lucas Test",
    concepts: ["Lucas test", "SN1 mechanism", "Carbocation stability", "1° vs 2° vs 3° alcohols"],
    reactions: [], reagents: ["zncl2-lucas"],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 11 — Distinction of Alcohols"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Aldehydes & Ketones
  {
    id: "nt-ak-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Cannizzaro reaction is given by which compound?",
    options: {
      A: "CH₃CHO",
      B: "HCHO",
      C: "CH₃CH₂CHO",
      D: "(CH₃)₂CHCHO"
    },
    answer: "B",
    explanation: "Cannizzaro reaction requires aldehyde with NO α-hydrogen. HCHO (formaldehyde) has no α-C → gives Cannizzaro. Others (A, C, D) have α-H → give aldol reaction with NaOH.",
    chapter: "Aldehydes Ketones", subtopic: "Cannizzaro Reaction",
    concepts: ["Cannizzaro reaction", "α-hydrogen", "Disproportionation", "Aldol vs Cannizzaro"],
    reactions: ["Cannizzaro reaction"], reagents: [],
    exceptions: ["Cannizzaro: only when NO α-H present"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Cannizzaro Reaction"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 30, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-ak-002", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Which compound gives positive iodoform test?",
    options: {
      A: "Methanal (HCHO)",
      B: "Propanone (CH₃COCH₃)",
      C: "Benzaldehyde (C₆H₅CHO)",
      D: "Methanol (CH₃OH)"
    },
    answer: "B",
    explanation: "Iodoform test (I₂/NaOH) positive for: (1) CH₃COR (methyl ketones), (2) CH₃CHO (acetaldehyde), (3) alcohols that oxidize to CH₃COR. CH₃COCH₃ has CH₃CO– group → positive. HCHO no CH₃CO; C₆H₅CHO no α-H for CH₃CO; CH₃OH oxidizes to HCHO (not CH₃COR).",
    chapter: "Aldehydes Ketones", subtopic: "Iodoform Test",
    concepts: ["Iodoform test", "CH₃CO group", "Haloform reaction"],
    reactions: ["Iodoform reaction"], reagents: [],
    exceptions: ["Iodoform positive only for CH₃CO– containing compounds and their precursors"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Iodoform Reaction"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Carboxylic Acids
  {
    id: "nt-ca-001", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "The order of acidity of the following compounds is: HCOOH, CH₃COOH, CH₂ClCOOH, CHCl₂COOH",
    options: {
      A: "CHCl₂COOH > CH₂ClCOOH > HCOOH > CH₃COOH",
      B: "CH₃COOH > HCOOH > CH₂ClCOOH > CHCl₂COOH",
      C: "HCOOH > CH₃COOH > CH₂ClCOOH > CHCl₂COOH",
      D: "CHCl₂COOH > HCOOH > CH₂ClCOOH > CH₃COOH"
    },
    answer: "A",
    explanation: "Cl has strong −I effect (electron withdrawal) → stabilises carboxylate → increases acidity. More Cl atoms = more −I effect. CHCl₂COOH (2 Cl) > CH₂ClCOOH (1 Cl) > HCOOH (H, mild −I) > CH₃COOH (CH₃, +I, decreases acidity).",
    chapter: "Carboxylic Acids", subtopic: "Acidity of Carboxylic Acids",
    concepts: ["Inductive effect", "Acidity order", "Carboxylate stability", "Halogenated acids"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 12 — Acidity of Carboxylic Acids"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 26, trending: true, ncertDirect: false,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Amines
  {
    id: "nt-am-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "The correct order of basic strength in aqueous solution:",
    options: {
      A: "(CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂",
      B: "C₆H₅NH₂ > NH₃ > CH₃NH₂ > (CH₃)₂NH",
      C: "NH₃ > CH₃NH₂ > (CH₃)₂NH > C₆H₅NH₂",
      D: "C₆H₅NH₂ > (CH₃)₂NH > CH₃NH₂ > NH₃"
    },
    answer: "A",
    explanation: "In aqueous solution: solvation of conjugate acid matters. Secondary ammonium ion has 2 N–H bonds → better H-bonded solvation. Aniline: N lone pair in ring → much weaker base. Order: 2° aliphatic > 1° > NH₃ >> aniline.",
    chapter: "Amines", subtopic: "Basicity of Amines",
    concepts: ["Amine basicity", "Solvation", "Inductive effect", "Resonance"],
    reactions: [], reagents: [],
    exceptions: ["In water: 2° > 1° > 3° amines — solvation reverses gas-phase inductive order"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 13 — Basicity of Amines"],
    difficulty: "Moderate", marks: 4, negMarks: 1, frequency: 38, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-am-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Aniline reacts with acetic anhydride to form:",
    options: {
      A: "N-phenylethanamide (acetanilide)",
      B: "o-aminoacetophenone",
      C: "Phenyl acetate",
      D: "Aniline hydrobromide"
    },
    answer: "A",
    explanation: "Aniline (primary amine) + acetic anhydride → N-phenylethanamide (acetanilide) + acetic acid. This is an acetylation (acylation) reaction — protection of NH₂ as amide.",
    chapter: "Amines", subtopic: "Acetylation of Amines",
    concepts: ["Acetylation", "Amide formation", "Acylation", "Protection of amine group"],
    reactions: [], reagents: [],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 13 — Reactions of Amines — Acetylation"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Biomolecules
  {
    id: "nt-bm-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "The monomer of natural rubber is:",
    options: { A: "Isoprene", B: "Chloroprene", C: "Styrene", D: "Neoprene" },
    answer: "A",
    explanation: "Natural rubber (cis-polyisoprene) is made from isoprene monomers (2-methylbuta-1,3-diene, CH₂=C(CH₃)–CH=CH₂). Neoprene is made from chloroprene; Buna-S from styrene + butadiene.",
    chapter: "Polymers", subtopic: "Natural Rubber",
    concepts: ["Natural rubber", "Isoprene", "cis-polyisoprene", "Addition polymerisation"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 15 — Natural Rubber — Monomer"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 22, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-bm-002", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "Which of the following is NOT a reducing sugar?",
    options: { A: "Glucose", B: "Fructose", C: "Sucrose", D: "Maltose" },
    answer: "C",
    explanation: "Reducing sugars have free anomeric (hemiacetal) OH groups. Sucrose: glycosidic bond involves BOTH anomeric carbons (C-1 of glucose + C-2 of fructose) → no free anomeric OH → non-reducing. Glucose, fructose, maltose: all have free anomeric OH → reducing.",
    chapter: "Biomolecules", subtopic: "Carbohydrates",
    concepts: ["Reducing vs non-reducing sugar", "Anomeric carbon", "Sucrose", "Disaccharides"],
    reactions: [], reagents: [],
    exceptions: ["Sucrose is non-reducing — both anomeric carbons locked in glycosidic bond"],
    formulas: [],
    ncertLines: ["Class 12 Ch. 14 — Reducing Sugars"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 34, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-bm-003", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "The secondary structure of protein refers to:",
    options: {
      A: "Sequence of amino acids in polypeptide chain",
      B: "α-helix and β-pleated sheet structures",
      C: "3D arrangement of polypeptide chain in space",
      D: "Quaternary arrangement of subunits"
    },
    answer: "B",
    explanation: "Primary: amino acid sequence. Secondary: regular repeating structures (α-helix stabilized by H-bonds between C=O and N–H; β-pleated sheets). Tertiary: overall 3D fold. Quaternary: arrangement of multiple polypeptide chains.",
    chapter: "Biomolecules", subtopic: "Protein Structure",
    concepts: ["Protein structure levels", "α-helix", "β-pleated sheet", "Hydrogen bonding in proteins"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 14 — Structure of Proteins"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Chemistry in Everyday Life
  {
    id: "nt-ced-001", exam: "NEET", year: 2023,
    questionType: "MCQ-Single",
    question: "Which of the following is an analgesic?",
    options: { A: "Aspirin", B: "Norethindrone", C: "Ampicillin", D: "Valium" },
    answer: "A",
    explanation: "Aspirin (acetylsalicylic acid) is an analgesic (pain reliever) and also antipyretic and anti-inflammatory. Norethindrone: contraceptive. Ampicillin: antibiotic. Valium: tranquilizer.",
    chapter: "Chemistry in Everyday Life", subtopic: "Drugs and Medicines",
    concepts: ["Analgesics", "Drug classification", "Aspirin", "Medicines"],
    reactions: [], reagents: [], exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 16 — Drugs and Medicines — Analgesics"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 20, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  {
    id: "nt-ced-002", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Soaps are sodium or potassium salts of:",
    options: {
      A: "Long chain fatty acids",
      B: "Short chain fatty acids",
      C: "Aromatic acids",
      D: "Phosphoric acid"
    },
    answer: "A",
    explanation: "Soaps are sodium or potassium salts of long chain fatty acids (e.g., sodium stearate, C₁₇H₃₅COONa). They are made by saponification (alkaline hydrolysis of fats/oils). Long hydrocarbon chain (hydrophobic) + carboxylate (hydrophilic) = amphipathic structure.",
    chapter: "Chemistry in Everyday Life", subtopic: "Cleansing Agents",
    concepts: ["Soaps", "Saponification", "Micelle", "Long chain fatty acids"],
    reactions: ["Saponification"], reagents: [],
    exceptions: [],
    formulas: [],
    ncertLines: ["Class 12 Ch. 16 — Soaps and Detergents"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 18, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Solutions
  {
    id: "nt-sol-001", exam: "NEET", year: 2022,
    questionType: "MCQ-Single",
    question: "Freezing point of 0.2 m KCl solution (Kf = 1.86 K·kg/mol) is approximately: (assume complete dissociation)",
    options: { A: "−0.372°C", B: "−0.744°C", C: "−0.186°C", D: "−0.093°C" },
    answer: "B",
    explanation: "KCl → K⁺ + Cl⁻ (i = 2). ΔTf = Kf × m × i = 1.86 × 0.2 × 2 = 0.744°C. Freezing point = 0 − 0.744 = −0.744°C.",
    chapter: "Solutions", subtopic: "Freezing Point Depression",
    concepts: ["Freezing point depression", "van't Hoff factor", "Strong electrolyte", "Colligative properties"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["ΔTf = Kf × m × i"],
    ncertLines: ["Class 12 Ch. 2 — Freezing Point Depression"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 28, trending: false, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},

  // Equilibrium
  {
    id: "nt-eq-001", exam: "NEET", year: 2024,
    questionType: "MCQ-Single",
    question: "pH of a buffer solution prepared by mixing equal volumes of 0.1 M acetic acid and 0.1 M sodium acetate is: (pKa of acetic acid = 4.74)",
    options: { A: "4.74", B: "3.74", C: "5.74", D: "7.00" },
    answer: "A",
    explanation: "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). Equal concentrations of acid and conjugate base → log(1) = 0. pH = pKa = 4.74.",
    chapter: "Equilibrium", subtopic: "Buffer Solutions",
    concepts: ["Buffer solution", "Henderson-Hasselbalch equation", "pKa", "Weak acid/conjugate base"],
    reactions: [], reagents: [], exceptions: [],
    formulas: ["pH = pKa + log([A⁻]/[HA])"],
    ncertLines: ["Class 11 Ch. 7 — Buffer Solutions"],
    difficulty: "Easy", marks: 4, negMarks: 1, frequency: 22, trending: true, ncertDirect: true,
      authenticityStatus: "NEEDS_MANUAL_REVIEW",
      source: "Pending Audit",
      paperNumber: 1,
      questionNumber: 0
},
  ...NEET_PHASE_A_QUESTIONS,
];
