export type PYQQuestion = {
  id: string;
  year: string;
  exam: "NEET" | "JEE MAIN" | "JEE ADVANCED";
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: string;
  explanation: string;
  topic: string;
  reactionIds?: string[];
};

export const pyqDatabase: Record<string, PYQQuestion[]> = {
  "atomic-structure": [
    {
      id: "as-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The energy of an electron in the first Bohr orbit of H atom is −13.6 eV. The energy of He⁺ ion in the second orbit will be:",
      options: { A: "−3.4 eV", B: "−6.04 eV", C: "−13.6 eV", D: "−27.2 eV" },
      answer: "C",
      explanation: "E = −13.6 × Z²/n². For He⁺ (Z=2), n=2: E = −13.6 × 4/4 = −13.6 eV.",
      topic: "Bohr Model"
    },
    {
      id: "as-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The de Broglie wavelength of an electron accelerated through a potential difference of 100 V is approximately:",
      options: { A: "0.123 nm", B: "1.23 Å", C: "0.123 Å", D: "1.23 nm" },
      answer: "B",
      explanation: "λ = 12.27/√V Å = 12.27/10 = 1.227 Å ≈ 1.23 Å.",
      topic: "de Broglie Wavelength"
    },
    {
      id: "as-3",
      year: "JEE Main 2022",
      exam: "JEE MAIN",
      question: "The number of radial nodes in 3s and 3p orbitals are respectively:",
      options: { A: "2 and 1", B: "1 and 2", C: "2 and 2", D: "0 and 1" },
      answer: "A",
      explanation: "Radial nodes = n − l − 1. For 3s: 3−0−1=2. For 3p: 3−1−1=1.",
      topic: "Quantum Numbers"
    },
    {
      id: "as-4",
      year: "JEE Advanced 2021",
      exam: "JEE ADVANCED",
      question: "Which of the following transitions in a hydrogen atom emits radiation of the highest frequency?",
      options: { A: "n=2 to n=1", B: "n=3 to n=1", C: "n=4 to n=2", D: "n=5 to n=3" },
      answer: "B",
      explanation: "ΔE = 13.6(1/n₁² − 1/n₂²). For n=3→1: ΔE = 13.6(1−1/9) = 12.09 eV, highest.",
      topic: "Spectral Lines"
    },
    {
      id: "as-5",
      year: "NEET 2023",
      exam: "NEET",
      question: "The quantum numbers of the last electron of Cr (Z=24) are:",
      options: {
        A: "n=3, l=2, m=−2, s=+½",
        B: "n=4, l=0, m=0, s=+½",
        C: "n=3, l=2, m=+2, s=+½",
        D: "n=4, l=1, m=0, s=+½"
      },
      answer: "B",
      explanation: "Cr has anomalous configuration [Ar]3d⁵4s¹. Last electron goes to 4s with l=0, m=0, s=+½.",
      topic: "Electronic Configuration"
    }
  ],

  "mole-concept": [
    {
      id: "mc-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The number of atoms in 0.1 mol of a triatomic gas is (Nₐ = 6.02 × 10²³):",
      options: { A: "6.026 × 10²²", B: "1.806 × 10²³", C: "3.01 × 10²³", D: "1.20 × 10²³" },
      answer: "B",
      explanation: "Triatomic gas has 3 atoms per molecule. Number of atoms = 0.1 × 6.02×10²³ × 3 = 1.806×10²³.",
      topic: "Mole Concept"
    },
    {
      id: "mc-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "How many grams of KCl are required to prepare 500 mL of a 0.4 M solution? (M of KCl = 74.5 g/mol):",
      options: { A: "7.45 g", B: "14.9 g", C: "29.8 g", D: "3.725 g" },
      answer: "B",
      explanation: "n = M × V = 0.4 × 0.5 = 0.2 mol. Mass = 0.2 × 74.5 = 14.9 g.",
      topic: "Molarity"
    },
    {
      id: "mc-3",
      year: "JEE Main 2021",
      exam: "JEE MAIN",
      question: "A compound has empirical formula CH₂O and molecular mass 90. Its molecular formula is:",
      options: { A: "C₂H₄O₂", B: "C₃H₆O₃", C: "C₄H₈O₄", D: "CH₂O" },
      answer: "B",
      explanation: "Empirical formula mass (CH₂O) = 30. n = 90/30 = 3. Molecular formula = C₃H₆O₃.",
      topic: "Empirical Formula"
    },
    {
      id: "mc-4",
      year: "JEE Advanced 2022",
      exam: "JEE ADVANCED",
      question: "In the reaction 2A + 3B → 4C + D, 10 mol of A and 10 mol of B are taken. The moles of C formed are:",
      options: { A: "13.3", B: "10.0", C: "20.0", D: "16.0" },
      answer: "A",
      explanation: "For 10 mol A: need 15 mol B; only 10 mol B available → B is limiting. From 10 mol B: C = (4/3) × 10 = 13.3 mol.",
      topic: "Limiting Reagent"
    }
  ],

  "chemical-equilibrium": [
    {
      id: "ce-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kp and Kc are related by:",
      options: { A: "Kp = Kc(RT)²", B: "Kp = Kc(RT)⁻²", C: "Kp = Kc(RT)⁻¹", D: "Kp = Kc" },
      answer: "B",
      explanation: "Δn = 2 − (1+3) = −2. Kp = Kc(RT)^Δn = Kc(RT)⁻².",
      topic: "Kp vs Kc"
    },
    {
      id: "ce-2",
      year: "NEET 2023",
      exam: "NEET",
      question: "The pH of 0.1 M acetic acid (Ka = 1.8 × 10⁻⁵) is approximately:",
      options: { A: "2.87", B: "3.87", C: "1.00", D: "4.74" },
      answer: "A",
      explanation: "pH = ½(pKa − log C) = ½(4.74 + 1) = ½ × 5.74 = 2.87.",
      topic: "pH of Weak Acid"
    },
    {
      id: "ce-3",
      year: "JEE Main 2022",
      exam: "JEE MAIN",
      question: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. In 0.1 M NaCl solution, the solubility of AgCl is:",
      options: { A: "1.8 × 10⁻⁹ mol/L", B: "1.8 × 10⁻¹⁰ mol/L", C: "1.34 × 10⁻⁵ mol/L", D: "1.8 × 10⁻⁵ mol/L" },
      answer: "A",
      explanation: "Common ion effect (Cl⁻ = 0.1 M). s = Ksp/[Cl⁻] = 1.8×10⁻¹⁰/0.1 = 1.8×10⁻⁹ mol/L.",
      topic: "Solubility Product"
    }
  ],

  "thermodynamics": [
    {
      id: "td-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "For a reaction ΔH = −30 kJ/mol and ΔS = −100 J/mol·K. The temperature at which the reaction ceases to be spontaneous is:",
      options: { A: "100 K", B: "200 K", C: "300 K", D: "400 K" },
      answer: "C",
      explanation: "ΔG = 0 at equilibrium: T = ΔH/ΔS = −30000/(−100) = 300 K. Above 300 K, ΔG > 0.",
      topic: "Gibbs Free Energy"
    },
    {
      id: "td-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The enthalpy of combustion of methane is −890 kJ/mol. ΔHf(CO₂) = −393, ΔHf(H₂O) = −286 kJ/mol. ΔHf(CH₄) is:",
      options: { A: "−74 kJ/mol", B: "+74 kJ/mol", C: "−52 kJ/mol", D: "−211 kJ/mol" },
      answer: "A",
      explanation: "−890 = −393 + 2(−286) − ΔHf(CH₄). ΔHf(CH₄) = −393 − 572 + 890 = −75 ≈ −74 kJ/mol.",
      topic: "Hess's Law"
    }
  ],

  "electrochemistry": [
    {
      id: "ec-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The standard cell potential for Zn|Zn²⁺||Cu²⁺|Cu is 1.10 V. The equilibrium constant at 298 K is approximately:",
      options: { A: "10³⁷", B: "10⁷⁴", C: "10¹⁸", D: "10¹¹" },
      answer: "A",
      explanation: "log K = nE°/0.0592 = 2 × 1.10/0.0592 = 37.2. K ≈ 10³⁷.",
      topic: "Nernst Equation"
    },
    {
      id: "ec-2",
      year: "NEET 2023",
      exam: "NEET",
      question: "The mass of silver deposited when 0.5 F of electricity is passed through AgNO₃ solution is (At. mass Ag = 108):",
      options: { A: "54 g", B: "108 g", C: "27 g", D: "216 g" },
      answer: "A",
      explanation: "1 F deposits 108 g of Ag (n-factor=1). 0.5 F deposits 54 g.",
      topic: "Faraday's Laws"
    }
  ],

  "chemical-kinetics": [
    {
      id: "ck-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The rate constant of a first order reaction is 2 × 10⁻³ s⁻¹. Time to reduce concentration to 1/8th of initial value is:",
      options: { A: "693 s", B: "1039.5 s", C: "346.5 s", D: "2079 s" },
      answer: "B",
      explanation: "3 half-lives needed (1→½→¼→⅛). t₁/₂ = 0.693/k = 346.5 s. Total = 3 × 346.5 = 1039.5 s.",
      topic: "First Order Kinetics"
    },
    {
      id: "ck-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "Activation energy of a reaction is 58.3 kJ/mol. Rate constant ratio k₃₂₀/k₃₀₀ is approximately: (R = 8.314 J/mol·K)",
      options: { A: "≈ 2", B: "≈ 4", C: "≈ 8", D: "≈ 16" },
      answer: "B",
      explanation: "log(k₂/k₁) = (Ea/2.303R)(1/T₁−1/T₂) = 58300/19.14 × (20/96000) ≈ 0.634. k₂/k₁ = 10⁰·⁶³⁴ ≈ 4.3.",
      topic: "Arrhenius Equation"
    }
  ],

  "solutions": [
    {
      id: "sol-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "Which of the following solutions will have the highest osmotic pressure at 298 K?",
      options: {
        A: "0.1 M glucose",
        B: "0.1 M NaCl",
        C: "0.1 M BaCl₂",
        D: "0.1 M AlCl₃"
      },
      answer: "D",
      explanation: "π = iCRT. AlCl₃ → Al³⁺ + 3Cl⁻, i=4 (highest). BaCl₂: i=3. NaCl: i=2. Glucose: i=1.",
      topic: "Osmotic Pressure"
    },
    {
      id: "sol-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The freezing point of 0.2 m KCl solution (Kf = 1.86 K·kg/mol, i = 2) is:",
      options: { A: "−0.372°C", B: "−0.744°C", C: "−0.186°C", D: "−0.093°C" },
      answer: "B",
      explanation: "ΔTf = Kf × m × i = 1.86 × 0.2 × 2 = 0.744°C. Freezing point = −0.744°C.",
      topic: "Freezing Point Depression"
    }
  ],

  "goc": [
    {
      id: "goc-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The correct order of acidity: CH₃COOH, CF₃COOH, CCl₃COOH, CBr₃COOH",
      options: {
        A: "CF₃COOH > CCl₃COOH > CBr₃COOH > CH₃COOH",
        B: "CH₃COOH > CBr₃COOH > CCl₃COOH > CF₃COOH",
        C: "CCl₃COOH > CF₃COOH > CBr₃COOH > CH₃COOH",
        D: "CBr₃COOH > CCl₃COOH > CF₃COOH > CH₃COOH"
      },
      answer: "A",
      explanation: "Stronger −I effect → more stable carboxylate → higher acidity. −I: F > Cl > Br > H.",
      topic: "Inductive Effect"
    },
    {
      id: "goc-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The most stable carbocation among the following is:",
      options: {
        A: "(CH₃)₃C⁺",
        B: "CH₃⁺",
        C: "(CH₃)₂CH⁺",
        D: "C₆H₅CH₂⁺"
      },
      answer: "D",
      explanation: "Benzylic carbocation stabilized by resonance with aromatic ring — more stable than tertiary.",
      topic: "Carbocation Stability"
    }
  ],

  "haloalkanes-haloarenes": [
    {
      id: "ha-1",
      year: "JEE Main 2022",
      exam: "JEE MAIN",
      question: "Which of the following undergoes SN1 reaction most readily?",
      options: {
        A: "CH₃Cl",
        B: "(CH₃)₃CCl",
        C: "(CH₃)₂CHCl",
        D: "C₆H₅CH₂Cl"
      },
      answer: "B",
      explanation: "SN1 requires stable carbocation. (CH₃)₃C⁺ is tertiary — most stable due to maximum hyperconjugation.",
      topic: "SN1 vs SN2"
    },
    {
      id: "ha-2",
      year: "NEET 2023",
      exam: "NEET",
      question: "The reaction of CH₃CH₂Br with aqueous KOH gives:",
      options: {
        A: "CH₂=CH₂",
        B: "CH₃CH₂OH",
        C: "CH₃CH₂OC₂H₅",
        D: "CH₃CHO"
      },
      answer: "B",
      explanation: "Aqueous KOH (OH⁻ nucleophile) → SN2 substitution giving ethanol. Alcoholic KOH → elimination.",
      topic: "SN2 Mechanism"
    }
  ],

  "aldehydes-ketones": [
    {
      id: "ak-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "Which does NOT give a positive Tollens' test?",
      options: {
        A: "HCHO",
        B: "CH₃CHO",
        C: "C₆H₅CHO",
        D: "CH₃COCH₃"
      },
      answer: "D",
      explanation: "Tollens' test is positive only for aldehydes (oxidized to carboxylic acid). Acetone is a ketone.",
      topic: "Aldehyde Tests"
    },
    {
      id: "ak-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "Cannizzaro reaction is given by:",
      options: {
        A: "CH₃CHO",
        B: "HCHO",
        C: "CH₃CH₂CHO",
        D: "(CH₃)₂CHCHO"
      },
      answer: "B",
      explanation: "Cannizzaro requires aldehyde with NO alpha-hydrogen. HCHO has no α-H.",
      topic: "Cannizzaro Reaction"
    }
  ],

  "alcohols-phenols-ethers": [
    {
      id: "ape-1",
      year: "JEE Main 2022",
      exam: "JEE MAIN",
      question: "Lucas test reagent is:",
      options: {
        A: "Anhydrous ZnCl₂ + conc. HCl",
        B: "FeCl₃",
        C: "Na₂Cr₂O₇/H₂SO₄",
        D: "Tollens' reagent"
      },
      answer: "A",
      explanation: "Lucas reagent = anhydrous ZnCl₂ + conc. HCl. Tertiary: immediate turbidity. Secondary: 5 min. Primary: no turbidity.",
      topic: "Lucas Test"
    },
    {
      id: "ape-2",
      year: "NEET 2023",
      exam: "NEET",
      question: "Phenol is more acidic than ethanol because:",
      options: {
        A: "Phenoxide ion is stabilized by resonance",
        B: "Phenol has a lower molecular weight",
        C: "Ethoxide ion is more stable",
        D: "O−H bond in phenol is stronger"
      },
      answer: "A",
      explanation: "Phenoxide ion (C₆H₅O⁻) has charge delocalization into the aromatic ring (5 resonance structures) — much more stable than ethoxide.",
      topic: "Acidity of Phenol"
    }
  ],

  "amines": [
    {
      id: "am-1",
      year: "NEET 2023",
      exam: "NEET",
      question: "The correct order of basic strength of amines in aqueous solution is:",
      options: {
        A: "(CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂",
        B: "C₆H₅NH₂ > NH₃ > CH₃NH₂ > (CH₃)₂NH",
        C: "NH₃ > CH₃NH₂ > (CH₃)₂NH > C₆H₅NH₂",
        D: "C₆H₅NH₂ > (CH₃)₂NH > CH₃NH₂ > NH₃"
      },
      answer: "A",
      explanation: "In aqueous solution: solvation stabilizes small conjugate acids. Order: 2° aliphatic > 1° aliphatic > NH₃ >> aniline.",
      topic: "Basicity of Amines"
    },
    {
      id: "am-2",
      year: "JEE Main 2022",
      exam: "JEE MAIN",
      question: "Carbylamine reaction is a test for:",
      options: {
        A: "Primary amines only",
        B: "Secondary amines",
        C: "Tertiary amines",
        D: "All amines"
      },
      answer: "A",
      explanation: "RNH₂ + CHCl₃ + 3KOH → RNC (isocyanide, foul smell). Positive only for primary amines.",
      topic: "Amine Tests"
    }
  ],

  "chemical-bonding": [
    {
      id: "cb-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The bond order of O₂⁻ (superoxide ion) according to MOT is:",
      options: { A: "1.5", B: "2.0", C: "2.5", D: "1.0" },
      answer: "A",
      explanation: "O₂ bond order = 2. Adding one electron to antibonding orbital: BO = (8−5)/2 = 1.5.",
      topic: "MOT Bond Order"
    },
    {
      id: "cb-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The shape of XeF₄ is:",
      options: { A: "Tetrahedral", B: "Square planar", C: "See-saw", D: "Square pyramidal" },
      answer: "B",
      explanation: "XeF₄: 4 bond pairs + 2 lone pairs. Octahedral electron geometry. Two axial lone pairs → square planar.",
      topic: "VSEPR Theory"
    }
  ],

  "coordination-compounds": [
    {
      id: "cc-1",
      year: "JEE Main 2023",
      exam: "JEE MAIN",
      question: "The IUPAC name of [Co(NH₃)₄Cl₂]Cl is:",
      options: {
        A: "Tetraamminedichlorocobalt(III) chloride",
        B: "Tetramminedichloro cobalt(II) chloride",
        C: "Dichlorotetramminecobalt(III) chloride",
        D: "Tetraamminedichlorocobalt(II) chloride"
      },
      answer: "A",
      explanation: "Co³⁺ (from charge balance). Ligands alphabetically: chloro (2), tetraamine (4). Name: tetraamminedichlorocobalt(III) chloride.",
      topic: "IUPAC Nomenclature"
    },
    {
      id: "cc-2",
      year: "NEET 2022",
      exam: "NEET",
      question: "The magnetic moment of [Fe(CN)₆]³⁻ is ~1.73 BM. The hybridization of Fe is:",
      options: { A: "sp³d²", B: "d²sp³", C: "sp³", D: "dsp²" },
      answer: "B",
      explanation: "CN⁻ is strong field → pairing. Fe³⁺ has 1 unpaired e⁻ → μ = √(1×3) = 1.73 BM. Inner orbital (d²sp³).",
      topic: "Crystal Field Theory"
    }
  ]
};
