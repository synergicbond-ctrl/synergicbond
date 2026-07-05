import type { ProgramSyllabus } from "./types";

// GATE Chemistry (CY) — transcribed from the official GATE 2026 syllabus
// (uploaded PDF, IIT Guwahati; Sections 1–3).

export const GATE_SYLLABUS: ProgramSyllabus = {
  programId: "gate",
  name: "GATE Chemistry (CY)",
  source: "Official GATE 2026 CY syllabus, IIT Guwahati (uploaded PDF)",
  paperPattern: "Section 1 Physical · Section 2 Inorganic · Section 3 Organic",
  units: [
    // Section 1 — Physical
    { id: "structure-quantum", code: "S1", title: "Structure: Quantum Chemistry", branch: "physical", topics: ["Postulates of QM; Schrödinger equations; Born interpretation; Dirac notation", "Particle in 1D/2D/3D box, tunnelling; harmonic oscillator (Hermite polynomials)", "Rigid rotor; H-like atoms, radial distribution", "Multi-electron atoms: orbital approximation, Slater determinants", "Variation & first-order perturbation methods", "LCAO-MO: H₂⁺, H₂; homo/heteronuclear diatomics; Hückel for annular π systems"] },
    { id: "group-theory", code: "S1", title: "Group Theory", branch: "physical", topics: ["Symmetry elements & operations; point groups; character tables", "Internal coordinates & vibrational modes", "Symmetry-adapted LCAO; hybrid orbital construction"] },
    { id: "spectroscopy", code: "S1", title: "Spectroscopy", branch: "physical", topics: ["Atomic: Russell–Saunders coupling, term symbols, selection rules", "Rotational, vibrational, electronic & Raman (diatomic/polyatomic)", "Line broadening; Einstein coefficients; oscillator strength", "NMR basics: gyromagnetic ratio, chemical shift, coupling"] },
    { id: "equilibrium-thermo", code: "S1", title: "Equilibrium & Advanced Thermodynamics", branch: "physical", topics: ["Laws of thermodynamics; Gibbs–Helmholtz, Maxwell, Gibbs–Duhem, van't Hoff", "Partial molar quantities; fugacity, activity coefficients", "Ideal/non-ideal solutions; Raoult & Henry", "Debye–Hückel theory; electrochemical cells; Nernst", "Phase rule; one & two component phase diagrams; azeotropes, eutectics", "Statistical thermodynamics: ensembles, partition functions"] },
    { id: "kinetics-advanced", code: "S1", title: "Advanced Kinetics", branch: "physical", topics: ["Elementary/parallel/opposing/consecutive reactions; steady state", "Unimolecular reactions; potential energy surfaces; transition state theory (Eyring)", "Polymerization kinetics; enzyme catalysis; kinetic isotope effects", "Fast kinetics (relaxation/flow); diffusion control; photochemistry/photophysics"] },
    { id: "surfaces", code: "S1", title: "Surfaces and Interfaces", branch: "physical", topics: ["Physisorption/chemisorption; Langmuir, Freundlich, BET", "Langmuir–Hinshelwood surface catalysis", "Surface tension, viscosity, self-assembly, colloids & micelles"] },
    // Section 2 — Inorganic
    { id: "main-group", code: "S2", title: "Main Group Elements", branch: "inorganic", topics: ["Hydrides, halides, oxides, oxoacids, nitrides, sulfides — shapes & reactivity", "Boranes, carboranes, silicones, silicates, boron nitride, borazines, phosphazenes", "Allotropes of C, P, S; industrial syntheses", "Noble-gas chemistry; pseudohalogens; interhalogens", "Acid–base: Lewis, Brønsted, HSAB"] },
    { id: "transition-coordination", code: "S2", title: "Transition Elements & Coordination Chemistry", branch: "inorganic", topics: ["Structure & isomerism; VBT, CFT, MOT", "Crystal-field diagrams, CFSE, Jahn–Teller", "Electronic spectra: term symbols, Orgel & Tanabe–Sugano, nephelauxetic, Racah, CT spectra", "Magnetism; Ray–Dutt & Bailar twists; substitution/redox mechanisms; M–M multiple bonds"] },
    { id: "lanthanides", code: "S2", title: "Lanthanides and Actinides", branch: "inorganic", topics: ["Recovery; periodic properties; spectra; magnetic properties"] },
    { id: "organometallics", code: "S2", title: "Organometallics", branch: "inorganic", topics: ["18-electron rule; alkyl/carbonyl/olefin/carbene complexes; metallocenes", "Fluxionality; reaction types", "Homogeneous catalysis: hydrogenation, hydroformylation, acetic acid, metathesis, olefin oxidation", "Heterogeneous: Fischer–Tropsch, Ziegler–Natta"] },
    { id: "radioactivity", code: "S2", title: "Radioactivity", branch: "inorganic", topics: ["Detection; decay processes; half-life; fission & fusion"] },
    { id: "bioinorganic", code: "S2", title: "Bioinorganic Chemistry", branch: "inorganic", topics: ["Na⁺/K⁺ transport; O₂ binding & transport", "Electron transfer; N₂ fixation", "Metalloenzymes: Mg, Mo, Fe, Co, Cu, Zn"] },
    { id: "solids", code: "S2", title: "Solids", branch: "inorganic", topics: ["Crystal systems, Miller planes, packing, defects, Bragg's law", "AX, AX₂, ABX₃ structures; spinels", "Band theory; metals & semiconductors"] },
    { id: "instrumental", code: "S2", title: "Instrumental Methods of Analysis", branch: "inorganic", topics: ["UV-vis, fluorescence, FTIR; NMR & ESR; MS; AAS; Mössbauer; XRD", "GC & HPLC chromatography", "Polarography, cyclic voltammetry, ion-selective electrodes; thermoanalysis"] },
    // Section 3 — Organic
    { id: "stereochemistry", code: "S3", title: "Stereochemistry", branch: "organic", topics: ["Chirality; absolute configurations; multi-stereocentre relative stereochemistry", "Homotopic/enantiotopic/diastereotopic; stereoselective vs stereospecific", "Conformational analysis; atropisomerism; NGP effects"] },
    { id: "mechanisms", code: "S3", title: "Reaction Mechanisms", branch: "organic", topics: ["Kinetic vs thermodynamic control; Hammond; Curtin–Hammett", "Mechanism determination: kinetics, intermediates, isotopic labelling", "Hammett & Taft LFERs", "Substitutions, additions, eliminations; carbocations → arynes; rearrangements"] },
    { id: "synthesis", code: "S3", title: "Organic Synthesis", branch: "organic", topics: ["Functional-class synthesis & selectivity; Mg/Li/Cu/B/Zn/P/S/Sn/Si reagents", "Couplings: Heck, Suzuki, Stille, Sonogashira, Negishi, Kumada, Hiyama, Tsuji–Trost; metathesis; McMurry", "Retrosynthesis; umpolung; protection/deprotection", "Asymmetric synthesis: resolution, chiral auxiliaries, organocatalysis", "Enolates (incl. boron), enamines, silyl enol ethers; Cram/Felkin–Anh"] },
    { id: "pericyclic-photo", code: "S3", title: "Pericyclic Reactions and Photochemistry", branch: "organic", topics: ["Electrocyclic, cycloaddition, sigmatropic; FMO/PMO; Woodward–Hoffmann", "Photochemistry of alkenes/arenes/carbonyls; photooxidation/reduction", "Di-π-methane; Barton–McCombie; Norrish I & II"] },
    { id: "heterocycles", code: "S3", title: "Heterocyclic Compounds", branch: "organic", topics: ["Furan, pyrrole, thiophene, pyridine, indole, quinoline, isoquinoline"] },
    { id: "biomolecules-gate", code: "S3", title: "Biomolecules", branch: "organic", topics: ["Mono/disaccharides; amino acids; peptide synthesis & structure determination", "Proteins, nucleic acids, lipids, steroids, terpenoids, carotenoids, alkaloids"] },
    { id: "experimental-organic", code: "S3", title: "Experimental Techniques (Organic)", branch: "practical", topics: ["Polarimetry; TLC, column, HPLC, GC", "UV-vis, IR, NMR, MS structure determination"] },
  ],
  questionTypes: [
    { key: "mcq", label: "MCQ", source: "ai-self" },
    { key: "msq", label: "MSQ (multiple select)", source: "ai-self" },
    { key: "nat", label: "NAT (numerical answer)", source: "ai-numeric" },
  ],
  features: { notes: false, pyqs: false, mocks: true, analytics: true, practicals: false, projects: false, viva: false },
};
