import type { ProgramSyllabus } from "./types";

// NSEC Chemistry — transcribed from the official NSEC syllabus document
// (uploaded PDF: 27 units I–XXVII; plus general science to Class 10 and
// mathematics to Class 12 assumed).

export const NSEC_SYLLABUS: ProgramSyllabus = {
  programId: "nsec",
  name: "NSEC Chemistry",
  source: "Official NSEC syllabus (uploaded PDF, units I–XXVII)",
  paperPattern: "Assumes general science to Class 10 and mathematics to Class 12",
  units: [
    { id: "basic-concepts", code: "I", title: "Some Basic Concepts of Chemistry", branch: "physical", topics: ["Laws of chemical combination; Dalton's theory", "Mole concept, molar mass, percentage composition", "Empirical & molecular formula; stoichiometry"] },
    { id: "atomic-structure", code: "II", title: "Structure of Atom", branch: "physical", topics: ["Bohr model & limitations; de Broglie; uncertainty", "Orbitals, quantum numbers, s/p/d shapes", "Aufbau, Pauli, Hund; configurations"] },
    { id: "periodicity", code: "III", title: "Classification of Elements and Periodicity", branch: "inorganic", topics: ["Modern periodic law & table", "Trends: radii, IE, electron gain enthalpy, electronegativity, valency", "Nomenclature Z > 100"] },
    { id: "chemical-bonding", code: "IV", title: "Chemical Bonding and Molecular Structure", branch: "physical", topics: ["Ionic & covalent bonds; bond parameters; Lewis structures", "VBT, resonance, VSEPR, hybridisation (s, p, d)", "MOT of homonuclear diatomics (qualitative); hydrogen bond"] },
    { id: "gases-liquids", code: "V", title: "States of Matter: Gases and Liquids", branch: "physical", topics: ["Gas laws → ideal gas equation; Avogadro's number", "Deviation from ideality; liquefaction; critical temperature", "Liquids: vapour pressure, viscosity, surface tension"] },
    { id: "solid-state", code: "VI", title: "States of Matter: Solid State", branch: "physical", topics: ["Molecular/ionic/covalent/metallic solids", "Unit cells, density calculation, packing & efficiency", "Voids; atoms per cubic cell; point defects"] },
    { id: "thermodynamics", code: "VII", title: "Chemical Thermodynamics", branch: "physical", topics: ["First law: U, H, heat capacity, ΔU & ΔH measurement, Hess's law", "Enthalpies of bond dissociation → dilution", "Second law, entropy, Gibbs energy, equilibrium criteria; third law"] },
    { id: "equilibrium", code: "VIII", title: "Equilibrium", branch: "physical", topics: ["Dynamic equilibrium; law of mass action; Le Chatelier", "Ionic equilibrium: ionization, pH, Henderson equation", "Hydrolysis, buffers, Ksp, common-ion effect"] },
    { id: "solutions", code: "IX", title: "Solutions", branch: "physical", topics: ["Concentration measures; gas solubility", "Colligative properties; Raoult's law", "Abnormal molar mass; van't Hoff factor"] },
    { id: "electrochemistry", code: "X", title: "Electrochemistry", branch: "physical", topics: ["Redox: oxidation number, balancing", "Conductance; Kohlrausch's law; electrolysis", "Cells: galvanic/electrolytic, Nernst, EMF ↔ ΔG, fuel cells, corrosion"] },
    { id: "kinetics", code: "XI", title: "Chemical Kinetics", branch: "physical", topics: ["Average/instantaneous rate; order & molecularity", "Integrated equations & half-life (0th, 1st)", "Collision theory (elementary); Arrhenius equation"] },
    { id: "surface-chemistry", code: "XII", title: "Surface Chemistry", branch: "physical", topics: ["Physisorption/chemisorption; catalysis incl. enzymes", "Colloids vs true solutions; Tyndall, Brownian, electrophoresis, coagulation", "Emulsions"] },
    { id: "s-block", code: "XIII", title: "s-Block Elements", branch: "inorganic", topics: ["Hydrogen: isotopes, hydrides, water, H₂O₂, fuel", "Groups 1 & 2: trends, diagonal relationship, anomalous first elements", "Na & Ca compounds; biological importance"] },
    { id: "p-block", code: "XIV", title: "p-Block Elements", branch: "inorganic", topics: ["Group 13: boron compounds (borax, boric acid, hydrides); Al", "Group 14: carbon allotropes; Si compounds (SiCl₄, silicones, silicates, zeolites)", "Group 15: N₂, NH₃, HNO₃ · Group 16: O₂, ozone, SO₂, H₂SO₄, S oxoacids", "Group 17: Cl₂, HCl, interhalogens, oxoacids · Group 18: trends & uses"] },
    { id: "d-f-block", code: "XV", title: "d and f Block Elements", branch: "inorganic", topics: ["Transition trends: IE, oxidation states, colour, magnetism, catalysis", "K₂Cr₂O₇ & KMnO₄", "Lanthanoids & contraction; actinoids comparison"] },
    { id: "metallurgy", code: "XVI", title: "Isolation of Elements", branch: "inorganic", topics: ["Concentration, oxidation, reduction, electrolytic method, refining", "Extraction principles: Al, Cu, Zn, Fe"] },
    { id: "coordination", code: "XVII", title: "Coordination Compounds", branch: "inorganic", topics: ["Ligands, coordination number, nomenclature", "Werner, VBT, CFT; structure & stereoisomerism", "Applications: analysis, extraction, biology"] },
    { id: "goc", code: "XVIII", title: "Organic Chemistry — Basic Principles & Techniques", branch: "organic", topics: ["Purification; qualitative & quantitative analysis", "IUPAC nomenclature; electronic displacements", "Fission; intermediates; reaction types"] },
    { id: "hydrocarbons", code: "XIX", title: "Hydrocarbons", branch: "organic", topics: ["Alkanes: conformations, radical halogenation", "Alkenes/alkynes: additions (Markownikov/peroxide), ozonolysis, acidity", "Aromatics: aromaticity, electrophilic substitution, directive influence"] },
    { id: "haloalkanes", code: "XX", title: "Haloalkanes and Haloarenes", branch: "organic", topics: ["C–X bond; substitution mechanisms; optical rotation", "Haloarenes: directive influence", "Environmental: CH₂Cl₂, CHCl₃, CCl₄, iodoform, freons, DDT"] },
    { id: "alcohols", code: "XXI", title: "Alcohols, Phenols and Ethers", branch: "organic", topics: ["Alcohols: preparation, dehydration mechanism, 1°/2°/3° identification", "Phenols: acidity, electrophilic substitution", "Ethers: preparation & properties"] },
    { id: "carbonyls", code: "XXII", title: "Aldehydes, Ketones and Carboxylic Acids", branch: "organic", topics: ["Carbonyl nature; nucleophilic addition mechanism; α-H reactivity", "Carboxylic acids: acidity, preparations, properties"] },
    { id: "nitrogen-organic", code: "XXIII", title: "Organic Compounds Containing Nitrogen", branch: "organic", topics: ["Amines: preparation, properties, 1°/2°/3° identification", "Cyanides & isocyanides", "Diazonium salts & synthetic importance"] },
    { id: "biomolecules", code: "XXIV", title: "Biomolecules", branch: "organic", topics: ["Carbohydrates: D/L, oligo & polysaccharides", "Proteins: structure levels, denaturation, enzymes", "Hormones, vitamins; DNA & RNA"] },
    { id: "polymers", code: "XXV", title: "Polymers", branch: "organic", topics: ["Copolymerization; polythene, nylon, polyesters, bakelite, rubber", "Biodegradable & non-biodegradable polymers"] },
    { id: "environmental", code: "XXVI", title: "Environmental Chemistry", branch: "inorganic", topics: ["Air/water/soil pollution; smog; acid rain", "Ozone depletion; greenhouse effect; green chemistry"] },
    { id: "everyday-life", code: "XXVII", title: "Chemistry in Everyday Life", branch: "organic", topics: ["Medicines: analgesics → antihistamines", "Food chemicals: preservatives, sweeteners, antioxidants", "Soaps & detergents"] },
  ],
  questionTypes: [
    { key: "olympiad-mcq", label: "Olympiad MCQ", source: "bank" },
    { key: "olympiad-problems", label: "Olympiad Problems", source: "ai-self" },
    { key: "challenge", label: "Challenge Problems", source: "ai-self" },
    { key: "conceptual", label: "Conceptual Tests", source: "ai-self" },
  ],
  features: { notes: true, pyqs: false, mocks: true, analytics: true, practicals: false, projects: false, viva: false },
};
