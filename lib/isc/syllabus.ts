// ─────────────────────────────────────────────────────────────────────────────
// ISC Chemistry (862) syllabus SSOT — transcribed from the OFFICIAL ISC
// Revised Syllabus 2026 Class XII document (uploaded PDF). Completely separate
// from CBSE (lib/cbse) — boards are never mixed; no CBSE name or chapter
// appears here. Class 11 units are honestly empty until the official ISC XI
// document is uploaded (units are never invented).
//
// Shape mirrors lib/cbse/syllabus.ts CbseChapter so the board dashboard pages
// consume either board through one resolver. masterId links to the shared
// chemistry content library where the ISC unit corresponds to the same
// chemistry (content reuse, never name reuse); pyqChapters stays EMPTY — no
// verified ISC PYQ bank exists, so objective pools honestly show zero.
// ─────────────────────────────────────────────────────────────────────────────

import type { ClassSlug } from "@/lib/boardDashboard";

export interface IscUnit {
  id: string;
  unit: number;
  title: string;
  class: 11 | 12;
  category: "physical" | "inorganic" | "organic";
  /** Shared chemistry-content chapter (dir masterSyllabus id) for deep study. */
  masterId?: string;
  /** Authored notes route, when the shared chapter has a board-safe notes page. */
  learnHref?: string;
  /** No verified ISC PYQ bank yet — always empty, honestly. */
  pyqChapters: [];
  /** Key topics transcribed from the official 2026 document. */
  topics: string[];
}

export const ISC_CLASS_12_UNITS: IscUnit[] = [
  { id: "solutions", unit: 1, title: "Solutions", class: 12, category: "physical", masterId: "solutions", pyqChapters: [], topics: ["Concentration: normality, molality, molarity, mole fraction, ppm", "Henry's law; Raoult's law (volatile & non-volatile); azeotropes", "Colligative properties (all four, with derivations for ΔTf/ΔTb)", "Abnormal molecular mass; van't Hoff factor & modified formulae; degree of dissociation/association"] },
  { id: "electrochemistry", unit: 2, title: "Electrochemistry", class: 12, category: "physical", masterId: "electrochemistry", pyqChapters: [], topics: ["Electrochemical cells; SHE; standard electrode potentials; cell notation", "Nernst equation; emf ↔ ΔG ↔ K; feasibility prediction", "Conductance: specific, molar, equivalent; cell constant; Kohlrausch", "Faraday's laws; F = Nₐe", "Batteries: Leclanche, mercury, lead storage, fuel cells; corrosion mechanism"] },
  { id: "chemical-kinetics", unit: 3, title: "Chemical Kinetics", class: 12, category: "physical", masterId: "chemical-kinetics", pyqChapters: [], topics: ["Average/instantaneous rate; factors incl. surface area & radiation", "Rate law; order vs molecularity; zero & first order integrations, half-life", "Reaction mechanism & rate-determining step", "Collision theory: threshold & activation energy, activated complex", "Arrhenius equation: graphs, Eₐ and A evaluation, numericals"] },
  { id: "d-f-block", unit: 4, title: "d and f Block Elements", class: 12, category: "inorganic", masterId: "d-and-f-block-elements", pyqChapters: [], topics: ["3d/4d/5d trends: metallic character, IE, radii, colour, complexes, alloys", "f-block: 4f & 5f; lanthanoid contraction & consequences; actinoid comparison", "KMnO₄: extraction from pyrolusite, structure, oxidising nature in acidic/basic/neutral media", "K₂Cr₂O₇: extraction from chromite, structure, titrations, chromate–dichromate interconversion"] },
  { id: "coordination-compounds", unit: 5, title: "Coordination Compounds", class: 12, category: "inorganic", masterId: "coordination-compounds", pyqChapters: [], topics: ["Ligands (mono→polydentate, chelating); coordination number & oxidation state; IUPAC nomenclature", "Isomerism: structural & stereo", "Werner's theory; VBT (inner/outer orbital); CFT splitting (Oh & Td), colour, magnetism", "Stability (K); importance in analysis, extraction, biology"] },
  { id: "haloalkanes-haloarenes", unit: 6, title: "Haloalkanes and Haloarenes", class: 12, category: "organic", masterId: "haloalkanes-haloarenes", pyqChapters: [], topics: ["Nomenclature; preparations incl. Finkelstein, Swarts, Hunsdiecker", "SN1/SN2 mechanisms; full reagent map (NaOH → LiAlH₄); Saytzeff elimination", "Wurtz & Grignard preparation; chloroform & iodoform; freon structures; DDT", "Haloarenes: Sandmeyer/Gattermann preparation; electrophilic & nucleophilic substitutions; Wurtz–Fittig, Fittig"] },
  { id: "alcohols-phenols-ethers", unit: 7, title: "Alcohols, Phenols and Ethers", class: 12, category: "organic", masterId: "alcohols-phenols-ethers", pyqChapters: [], topics: ["Alcohols: classification; preparations incl. hydroboration, Grignard; Bosch methanol & fermentation ethanol", "Properties: esterification mechanism, PX₃/PCl₅/SOCl₂, oxidation, dehydration mechanism, Lucas test", "Phenols: Dow's process, cumene, diazonium route; acidity; Kolbe, Reimer–Tiemann; FeCl₃ & azo tests", "Ethers incl. aryl ethers: Williamson synthesis, anisole reactions"] },
  { id: "aldehydes-ketones-acids", unit: 8, title: "Aldehydes, Ketones and Carboxylic Acids", class: 12, category: "organic", masterId: "aldehydes-ketones", pyqChapters: [], topics: ["Preparations: Rosenmund, dialkyl cadmium, Stephen, from esters/nitriles/calcium salts", "Nucleophilic addition mechanism; iodoform; Clemmensen, Wolff–Kishner, red P/HI", "Aldol & cross-aldol, Cannizzaro; benzaldehyde: chromyl chloride prep, benzoin condensation, Perkin reaction", "Acids: classification mono/di; preparations; acidity with substituent effects; HVZ; decarboxylation incl. Kolbe electrolysis"] },
  { id: "nitrogen-compounds", unit: 9, title: "Organic Compounds Containing Nitrogen", class: 12, category: "organic", masterId: "amines", pyqChapters: [], topics: ["Aliphatic amines: preparations incl. Hofmann degradation & Gabriel; basicity comparisons", "Aniline: from nitrobenzene; acetylation, benzoylation, diazotisation, electrophilic substitution; tests", "Cyanides & isocyanides: preparations", "Diazonium salts: Sandmeyer, Gattermann, Balz–Schiemann; coupling reactions"] },
  { id: "biomolecules", unit: 10, title: "Biomolecules", class: 12, category: "organic", masterId: "biomolecules", pyqChapters: [], topics: ["Carbohydrates: mono/oligo/poly; reducing vs non-reducing; glucose & fructose structures (open & cyclic) with reactions; bromine-water test", "Disaccharide structures (sucrose, maltose, lactose); starch, cellulose, glycogen", "Proteins: amino acids, zwitterion, isoelectric point; structure levels; denaturation; enzymes & hormones", "Vitamins A–K classification & deficiencies; nucleic acids: purine/pyrimidine, DNA double helix, DNA vs RNA"] },
];

/** ISC Class 11 — transcribed from the official ISC Chemistry Class 11 Syllabus 2026-27. */
export const ISC_CLASS_11_UNITS: IscUnit[] = [
  {
    id: "some-basic-concepts",
    unit: 1,
    title: "Some Basic Concepts of Chemistry",
    class: 11,
    category: "physical",
    masterId: "mole-concept",
    learnHref: "/notes/some-basic-concepts-of-chemistry",
    pyqChapters: [],
    topics: [
      "Precision, accuracy, significant figures, SI units, dimensional analysis",
      "Dalton's atomic theory, concept of elements, atoms and molecules",
      "Laws of chemical combination: conservation of mass, definite proportions, multiple proportions, reciprocal proportions, Gay Lussac's law",
      "Atomic, isotopic & molecular masses; relative molecular mass; mole concept & Avogadro's number",
      "Empirical & molecular formulas; limiting reagent & stoichiometry",
      "Chemical equivalents, equivalent weight of acids/alkalis/salts/oxidants/reductants, volumetric calculations (normality, molarity, molality, mole fraction)"
    ]
  },
  {
    id: "structure-of-atom",
    unit: 2,
    title: "Structure of Atom",
    class: 11,
    category: "physical",
    masterId: "atomic-structure",
    pyqChapters: [],
    topics: [
      "Subatomic particles (electrons, protons, neutrons), cathode & anode rays, neutron discovery",
      "Rutherford scattering, discovery of nucleus, defects of Rutherford model",
      "Electromagnetic wave theory, black body radiation, photoelectric effect, Planck's quantum theory",
      "Emission/absorption & band/line spectra; Bohr's atomic model: postulates, hydrogen spectra & Rydberg formula",
      "Bohr's orbit radius, velocity & energy calculations; Bohr model defects",
      "Quantum mechanical model: de Broglie equation, Heisenberg uncertainty principle, Schrodinger wave equation (physical significance of Ψ & |Ψ|²)",
      "Quantum numbers, s, p, d orbital shapes, sizes & orientation; nodes & nodal planes",
      "Aufbau principle ((n+l) rule), Pauli's exclusion principle, Hund's rule, electronic configuration of elements/ions, stability of half & fully-filled orbitals"
    ]
  },
  {
    id: "classification-periodicity",
    unit: 3,
    title: "Classification of Elements and Periodicity in Properties",
    class: 11,
    category: "physical",
    masterId: "periodic-table",
    pyqChapters: [],
    topics: [
      "Mendeleev's periodic law, table advantages & defects",
      "Modern periodic law (atomic number basis); long form periodic table characteristics & s, p, d, f blocks",
      "IUPAC nomenclature for elements with Z > 100",
      "Periodic properties: atomic/ionic radius, ionisation enthalpy, electron gain enthalpy, electronegativity, valence, metallic/non-metallic character",
      "Factors affecting periodic properties (shielding/screening, Z_eff, shell number)",
      "Periodic trends in valence/oxidation states; anomalous second period properties; diagonal relationship; oxide nature"
    ]
  },
  {
    id: "chemical-bonding",
    unit: 4,
    title: "Chemical Bonding and Molecular Structure",
    class: 11,
    category: "physical",
    masterId: "chemical-bonding",
    pyqChapters: [],
    topics: [
      "Kossel-Lewis approach, octet rule, electrovalent & covalent bonds",
      "Ionic bond conditions (IE, EA, lattice energy, ΔEN); variable electrovalency (inert pair effect)",
      "Lattice enthalpy calculation (Born-Haber cycle); ionic compound characteristics",
      "Covalent bond parameters; polar/non-polar covalent bonds & dipole moments; formal charge",
      "Lewis dot structures of simple molecules; covalent vs ionic comparison; variable valency reasons",
      "Octet rule failures (incomplete/expanded octet); Fajan's rules (covalent character in ionic bonds)",
      "VSEPR theory: electron-pair repulsion and molecular shapes",
      "Hybridisation of orbitals involving s, p, d; molecular shapes; coordinate/dative covalent bonds",
      "Molecular orbital theory: homonuclear diatomics (H2 to Ne), energy level diagrams, bonding/antibonding, bond order, paramagnetism of O2, relative stability of ions",
      "Resonance in inorganic molecules (O3, CO2, CO3^2-, NO3^-); hydrogen bonding (HF, ice, water, ethanol), inter/intramolecular"
    ]
  },
  {
    id: "thermodynamics",
    unit: 5,
    title: "Chemical Thermodynamics",
    class: 11,
    category: "physical",
    masterId: "thermodynamics",
    pyqChapters: [],
    topics: [
      "System, surroundings, intensive, extensive properties, state & path functions",
      "Thermodynamic processes: reversible, irreversible, adiabatic, isothermal, isobaric, isochoric, cyclic, equilibrium",
      "First Law of Thermodynamics: work, heat, internal energy, enthalpy (ΔU & ΔH), Cp/Cv relations",
      "Reversible vs irreversible work done (graphical comparison); sign conventions",
      "Enthalpy changes of reaction, formation (standard), solution, dilution, neutralisation, combustion",
      "Calorific value of fuel; Hess's Law of constant heat summation & its applications",
      "Second Law of Thermodynamics: entropy, spontaneity criteria, entropy change of universe",
      "Gibb's free energy, Helmholtz free energy, spontaneity criteria in terms of ΔG & relationship with equilibrium constant",
      "Third Law of Thermodynamics statement"
    ]
  },
  {
    id: "equilibrium",
    unit: 6,
    title: "Equilibrium",
    class: 11,
    category: "physical",
    masterId: "chemical-equilibrium",
    pyqChapters: [],
    topics: [
      "Physical & chemical equilibrium characteristics; dynamic nature; reversibility",
      "Law of mass action; equilibrium constants Kc and Kp; Kp vs Kc relation (derivation)",
      "Maximum yield examples: Haber's ammonia, N2O4 dissociation, ester hydrolysis, Contact process H2SO4",
      "Le Chatelier's principle statement & factors affecting equilibria (conc, temp, pressure, catalyst, inert gas)",
      "Ionic equilibrium: strong/weak electrolytes, non-electrolytes, degree of ionisation, Ostwald's dilution law",
      "Arrhenius, Bronsted-Lowry, Lewis concepts of acids/bases; multistage ionisation",
      "Ionic product of water, pH, pOH, pKw; pH indicators choice in titrimetry",
      "Common ion effect: examples (AcOH/AcONa; NH4OH/NH4Cl) & analytical applications",
      "Salt hydrolysis & pH formula derivations; buffer solutions Henderson equation & action",
      "Solubility product (Ksp) & qualitative salt analysis (Groups II, III, IV)"
    ]
  },
  {
    id: "redox-reactions",
    unit: 7,
    title: "Redox Reactions",
    class: 11,
    category: "inorganic",
    masterId: "redox-reactions",
    pyqChapters: [],
    topics: [
      "Concept of oxidation & reduction, redox reactions examples",
      "Oxidation number calculation rules; oxidation state calculation in K2Cr2O7, S2O3^2-",
      "Oxidation and reduction in terms of change in oxidation number",
      "Balancing of redox reactions in acidic/basic medium: oxidation number & ion-electron (half-reaction) methods",
      "Redox applications in chemical reactions"
    ]
  },
  {
    id: "organic-basics",
    unit: 8,
    title: "Organic Chemistry: Some basic Principles and Techniques",
    class: 11,
    category: "organic",
    masterId: "general-organic-chemistry",
    pyqChapters: [],
    topics: [
      "Vital force theory, carbon catenation, multiple bonding, tetravalency & isomerism",
      "Classification of organic compounds: open/closed chain, homocyclic, heterocyclic, aromatic, alicyclic, homologous series",
      "IUPAC nomenclature rules for aliphatic, alicyclic & aromatic compounds",
      "Structural isomerism: chain, positional, functional, metamerism, tautomerism",
      "Stereoisomerism: geometrical (cis/trans, syn/anti) & optical activity (polarimetry, specific rotation, enantiomers d/l, racemic mixture, meso form)",
      "Qualitative analysis (Lassaigne's test for C, H, N, S, halogens)",
      "Quantitative analysis: Liebig's (C, H), Kjeldahl's (N), Carius (S, halogens, P) methods & numericals",
      "Bond fissions (homolytic & heterolytic); carbocations, carbanions, free radicals; electrophiles & nucleophiles",
      "Electronic displacements: inductive, electromeric, mesomeric/resonance effects & hyperconjugation",
      "Reaction mechanisms (substitution, addition, elimination) incl. SN1, SN2, E1, E2"
    ]
  },
  {
    id: "hydrocarbons",
    unit: 9,
    title: "Hydrocarbons",
    class: 11,
    category: "organic",
    masterId: "hydrocarbons",
    pyqChapters: [],
    topics: [
      "Alkanes: nomenclature, conformation (Newman/Sawhorse of ethane), Wurtz reaction, Corey-House synthesis, free-radical halogenation mechanism, cyclisation, aromatisation, pyrolysis",
      "Alkenes: nomenclature, structure of double bond, preparation (dehydration, dehydrohalogenation, vicinal dihalides, Kolbe, alkynes), Saytzeff's rule",
      "Alkenes properties: electrophilic addition mechanism, Markownikoff & anti-Markownikoff rules, ozonolysis, Baeyer's reagent oxidation",
      "Alkynes: nomenclature, structure of triple bond, preparation (calcium carbide, natural gas, dehydrohalogenation, Kolbe), acidic character & acetylides",
      "Alkynes properties: addition of H2, halogens, HX, water; ozonolysis, Baeyer's reagent, polymerisation; distinguishing tests for alkanes/alkenes/alkynes",
      "Aromatic hydrocarbons: Kekule benzene structure, resonance, Huckel aromaticity",
      "Benzene preparation (sodium benzoate, phenol) & physical properties",
      "Benzene chemical properties: electrophilic substitution mechanism (halogenation, nitration, sulphonation), Friedel-Crafts alkylation/acylation",
      "Directive influence of substituents in electrophilic & nucleophilic substitutions with mechanism; addition reactions; pyrolysis (biphenyl); carcinogenicity & toxicity"
    ]
  }
];

export function getIscUnits(cls: ClassSlug | 11 | 12): IscUnit[] {
  const n = typeof cls === "number" ? cls : cls === "class-12" ? 12 : 11;
  return n === 12 ? ISC_CLASS_12_UNITS : ISC_CLASS_11_UNITS;
}

// ── Official ISC Class 12 practical scheme (Paper II, from the 2026 PDF) ─────
export const ISC_PRACTICAL_SCHEME = {
  marks: { practical: 15, project: 10, practicalFile: 5 },
  experiments: [
    "Titrations: KMnO₄ vs Mohr's salt / oxalic acid (molarity to 4 decimal places)",
    "Study of rate of reaction (thiosulphate–acid; Mg/acids)",
    "Identification of organic compounds & functional groups (glycerol, formaldehyde, acetone, benzoic acid, aniline)",
    "Characteristic tests of carbohydrates and proteins",
    "pH experiments with pH paper / universal indicator",
    "Electrochemistry: voltaic cell; potential vs concentration",
    "Qualitative analysis of a single salt (ISC group scheme, incl. Sr²⁺, C₂O₄²⁻, PO₄³⁻)",
  ],
};
