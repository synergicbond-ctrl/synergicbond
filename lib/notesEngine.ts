import type { Exam } from "@/lib/masterSyllabus";

// ─────────────────────────────────────────────────────────────────────────────
// Week 7 — Notes Engine (SSOT)
// Curated, verified, exam-useful chemistry notes. This module is the single
// source of truth for the /notes experience. Content is hand-authored (NOT
// AI-generated) so it stays accurate. Chemistry is written in Unicode so it
// renders as plain text on any surface — no external formula renderer needed.
//
// Cross-links (formulas / PYQ / learn modules) point to EXISTING routes only.
// This module does NOT redefine chapter/exam types — it reuses `Exam` from the
// master syllabus to avoid duplicate schemas.
// ─────────────────────────────────────────────────────────────────────────────

export type NoteCategory = "physical" | "inorganic" | "organic";

/** A titled block of bullet points (used for Detailed Notes). */
export interface NoteBlock {
  heading: string;
  points: string[];
}

/** A worked, step-by-step solved example. */
export interface SolvedExample {
  q: string;
  steps: string[];
  answer: string;
  tag?: Exam | "NCERT";
}

/** A step-wise derivation with a final result line. */
export interface Derivation {
  title: string;
  steps: string[];
  result: string;
}

/** A cross-link to an existing route (formula cards, PYQ, learn module). */
export interface NoteLink {
  label: string;
  href: string;
  note?: string;
}

/** A test entry — placeholder until the test bank is wired for this chapter. */
export interface TestPlaceholder {
  label: string;
  questions: number;
  status: "coming-soon";
}

/** The 13 sections every Notes chapter renders. */
export interface NotesChapter {
  id: string;
  title: string;
  category: NoteCategory;
  exams: Exam[];
  tagline: string;
  syllabus: string[];
  subtopics: string[];
  detailedNotes: NoteBlock[];
  shortNotes: string[];
  ncertHighlights: string[];
  solvedExamples: SolvedExample[];
  derivations: Derivation[];
  commonMistakes: string[];
  revisionNotes: string[];
  formulaLinks: NoteLink[];
  pyqLinks: NoteLink[];
  tests: TestPlaceholder[];
  learnLinks: NoteLink[];
}

// ── The section registry (drives the UI nav; keeps order canonical) ───────────

export const NOTE_SECTIONS = [
  { key: "syllabus", label: "Syllabus", icon: "📋" },
  { key: "subtopics", label: "Subtopics", icon: "🗂️" },
  { key: "detailedNotes", label: "Detailed Notes", icon: "📖" },
  { key: "shortNotes", label: "Short Notes", icon: "⚡" },
  { key: "ncertHighlights", label: "NCERT Highlights", icon: "📕" },
  { key: "solvedExamples", label: "Solved Examples", icon: "✍️" },
  { key: "derivations", label: "Derivations", icon: "📐" },
  { key: "commonMistakes", label: "Common Mistakes", icon: "⚠️" },
  { key: "revisionNotes", label: "Revision Notes", icon: "🔁" },
  { key: "formulaLinks", label: "Formula Cards", icon: "🧮" },
  { key: "pyqLinks", label: "PYQ Links", icon: "🎯" },
  { key: "tests", label: "Tests", icon: "🧪" },
  { key: "learnLinks", label: "Learn Modules", icon: "🔗" },
] as const;

export type NoteSectionKey = (typeof NOTE_SECTIONS)[number]["key"];

// ═════════════════════════════════════════════════════════════════════════════
// CHAPTER 1 — MOLE CONCEPT
// ═════════════════════════════════════════════════════════════════════════════

const MOLE_CONCEPT: NotesChapter = {
  id: "mole-concept",
  title: "Mole Concept",
  category: "physical",
  exams: ["neet", "jeeMain", "jeeAdvanced"],
  tagline: "The counting unit of chemistry — moles, stoichiometry & concentration.",
  syllabus: [
    "Nature of matter; laws of chemical combination (conservation of mass, definite & multiple proportions, Gay-Lussac, Avogadro).",
    "Atomic and molecular masses; the mole and Avogadro constant (Nₐ = 6.022 × 10²³ mol⁻¹).",
    "Percentage composition; empirical and molecular formulae.",
    "Stoichiometry and stoichiometric calculations; limiting reagent.",
    "Concentration terms: molarity, molality, mole fraction, %w/w, %w/v, ppm, normality.",
  ],
  subtopics: [
    "Laws of chemical combination",
    "Mole & Avogadro constant",
    "Molar mass & average atomic mass",
    "Empirical vs molecular formula",
    "Limiting reagent & % yield",
    "Molarity, molality, mole fraction",
    "Normality & equivalent concept",
    "Concentration interconversions",
  ],
  detailedNotes: [
    {
      heading: "The mole",
      points: [
        "1 mole = amount of substance containing Avogadro number (6.022 × 10²³) of elementary entities (atoms, molecules, ions, electrons).",
        "Number of entities = moles × Nₐ. Moles (n) = given mass (m) ÷ molar mass (M) = number of entities ÷ Nₐ.",
        "Molar mass in g mol⁻¹ is numerically equal to the average atomic/molecular mass in u (unified atomic mass units).",
        "Molar volume of an ideal gas at STP (273.15 K, 1 bar) = 22.7 L mol⁻¹; at old STP (273.15 K, 1 atm) = 22.4 L mol⁻¹.",
      ],
    },
    {
      heading: "Laws of chemical combination",
      points: [
        "Law of conservation of mass: mass is neither created nor destroyed in a chemical reaction.",
        "Law of definite proportions: a given compound always contains the same elements in the same fixed proportion by mass.",
        "Law of multiple proportions: when two elements form more than one compound, the masses of one that combine with a fixed mass of the other are in small whole-number ratios.",
        "Avogadro's law: equal volumes of all gases at the same T and P contain equal numbers of molecules.",
      ],
    },
    {
      heading: "Empirical & molecular formula",
      points: [
        "Empirical formula: simplest whole-number ratio of atoms of each element.",
        "Molecular formula = n × empirical formula, where n = molar mass ÷ empirical formula mass.",
        "Steps: mass/percentage → moles of each element → divide by smallest → nearest whole-number ratio.",
      ],
    },
    {
      heading: "Concentration terms",
      points: [
        "Molarity (M) = moles of solute ÷ volume of solution in litres (temperature dependent).",
        "Molality (m) = moles of solute ÷ mass of solvent in kg (temperature independent — preferred for colligative properties).",
        "Mole fraction (x) = moles of component ÷ total moles; sum of all mole fractions = 1.",
        "Normality (N) = gram-equivalents of solute ÷ volume of solution in litres; N = M × n-factor.",
        "ppm = (mass of solute ÷ mass of solution) × 10⁶ (used for very dilute solutions).",
      ],
    },
  ],
  shortNotes: [
    "n = m/M = N/Nₐ = V(gas at STP)/22.7.",
    "Molecular formula = n × empirical formula; n = molar mass / EF mass.",
    "Molarity is T-dependent; molality & mole fraction are T-independent.",
    "N = M × n-factor. For acids n-factor = basicity; for bases = acidity.",
    "Limiting reagent = reactant giving the least product (compare mole/coefficient).",
    "22.7 L (1 bar) or 22.4 L (1 atm) is the molar volume of an ideal gas at STP.",
  ],
  ncertHighlights: [
    "SI base unit for amount of substance is the mole (mol); redefined (2019) via a fixed Avogadro constant = 6.02214076 × 10²³ mol⁻¹.",
    "NCERT adopts STP as 273.15 K and 1 bar, giving molar volume 22.711 L mol⁻¹.",
    "Mass % , mole fraction, molarity and molality are the concentration terms defined in NCERT Class 11 Unit 1.",
    "Significant figures and dimensional analysis (factor-label method) are emphasised for all stoichiometric calculations.",
  ],
  solvedExamples: [
    {
      q: "Calculate the number of atoms in 0.1 mol of CO₂.",
      steps: [
        "1 molecule of CO₂ has 3 atoms (1 C + 2 O).",
        "Molecules = 0.1 × 6.022 × 10²³ = 6.022 × 10²².",
        "Atoms = 3 × 6.022 × 10²² = 1.807 × 10²³.",
      ],
      answer: "1.807 × 10²³ atoms.",
      tag: "jeeMain",
    },
    {
      q: "45.4 L of dinitrogen reacts with 22.7 L of dioxygen at STP to form N₂O. Identify the limiting reagent (2 N₂ + O₂ → 2 N₂O).",
      steps: [
        "At the same T, P volumes are proportional to moles (Avogadro).",
        "Ratio required N₂ : O₂ = 2 : 1. Available = 45.4 : 22.7 = 2 : 1 (in L).",
        "Both are in exact stoichiometric ratio ⇒ neither is in excess.",
      ],
      answer: "No limiting reagent — reactants are in exact stoichiometric ratio.",
      tag: "NCERT",
    },
    {
      q: "What is the molarity of a solution made by dissolving 5.0 g of NaOH in water to make 250 mL of solution? (M(NaOH) = 40)",
      steps: [
        "Moles of NaOH = 5.0 / 40 = 0.125 mol.",
        "Volume = 250 mL = 0.250 L.",
        "Molarity = 0.125 / 0.250 = 0.5 M.",
      ],
      answer: "0.5 M.",
      tag: "neet",
    },
  ],
  derivations: [
    {
      title: "Relation between molarity, %w/w and density",
      steps: [
        "Take a solution of mass-percent p and density d (g mL⁻¹); molar mass of solute = M.",
        "Consider 1 L (1000 mL) of solution ⇒ mass of solution = 1000 × d grams.",
        "Mass of solute = (p/100) × 1000d ; moles of solute = (p × 1000 × d) / (100 × M).",
        "Molarity = moles per litre = (p × 1000 × d) / (100 × M).",
      ],
      result: "Molarity = (10 × p × d) / M.",
    },
    {
      title: "Molarity of pure water",
      steps: [
        "1 L water ≈ 1000 g (density ≈ 1 g mL⁻¹).",
        "Moles of water = 1000 / 18.",
        "Molarity = 55.5 mol per litre.",
      ],
      result: "Pure water ≈ 55.5 M.",
    },
  ],
  commonMistakes: [
    "Confusing molarity (per litre of solution) with molality (per kg of solvent).",
    "Forgetting to multiply by the number of atoms per molecule when counting atoms.",
    "Using 22.4 L blindly — NCERT STP (1 bar) gives 22.7 L; check the P specified.",
    "Wrong n-factor while computing normality (e.g. H₂SO₄ has n-factor 2, not 1).",
    "Rounding empirical-formula ratios too early instead of multiplying to nearest whole number.",
  ],
  revisionNotes: [
    "Nₐ = 6.022 × 10²³; n = m/M = N/Nₐ.",
    "Molar volume: 22.7 L at 1 bar STP, 22.4 L at 1 atm.",
    "Molarity = 10pd/M; pure water = 55.5 M.",
    "N = M × n-factor; equivalents balance in titrations (N₁V₁ = N₂V₂).",
    "Limiting reagent controls the amount of product; excess reagent is left over.",
  ],
  formulaLinks: [
    { label: "Mole–Mass–Number relation", href: "/vault/formulas", note: "n = m/M = N/Nₐ" },
    { label: "Molarity formula card", href: "/vault/formulas", note: "M = n(solute)/V(L)" },
  ],
  pyqLinks: [
    { label: "Mole Concept PYQs (JEE/NEET)", href: "/pyq", note: "Search 'Mole Concept' / 'Some Basic Concepts'" },
    { label: "Stoichiometry & limiting reagent", href: "/pyq", note: "High-yield numerical set" },
  ],
  tests: [
    { label: "Mole Concept — Foundation", questions: 15, status: "coming-soon" },
    { label: "Stoichiometry & Concentration", questions: 20, status: "coming-soon" },
  ],
  learnLinks: [
    { label: "Formula Vault", href: "/vault/formulas", note: "All mole-concept formula cards" },
    { label: "Concept Vault", href: "/vault/concepts", note: "Core definitions" },
    { label: "PYQ Intelligence", href: "/pyq", note: "Trend & frequency analytics" },
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// CHAPTER 2 — PERIODIC TABLE (Classification of Elements & Periodicity)
// ═════════════════════════════════════════════════════════════════════════════

const PERIODIC_TABLE: NotesChapter = {
  id: "periodic-table",
  title: "Periodic Table",
  category: "inorganic",
  exams: ["neet", "jeeMain", "jeeAdvanced"],
  tagline: "Classification of elements and the periodicity of their properties.",
  syllabus: [
    "Significance of classification; brief history (Döbereiner, Newlands, Mendeleev).",
    "Modern periodic law and the long form of the periodic table.",
    "Electronic configurations and classification into s, p, d, f blocks.",
    "Periodic trends: atomic/ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity, valence.",
    "Anomalous properties of the second period; diagonal relationship; nomenclature of elements Z > 100.",
  ],
  subtopics: [
    "Development of the periodic table",
    "Modern periodic law & Moseley",
    "s, p, d, f block classification",
    "Atomic & ionic radii",
    "Ionization enthalpy (+ exceptions)",
    "Electron gain enthalpy (+ exceptions)",
    "Electronegativity",
    "Anomalies, diagonal relationship, inert pair effect",
  ],
  detailedNotes: [
    {
      heading: "Periodic law & structure",
      points: [
        "Modern periodic law (Moseley): physical and chemical properties of elements are a periodic function of their atomic numbers.",
        "Long form: 7 periods (horizontal rows) and 18 groups (vertical columns).",
        "Blocks by the subshell of the last electron: s-block (Gr 1–2), p-block (Gr 13–18), d-block (Gr 3–12), f-block (lanthanoids & actinoids).",
        "Period number = principal quantum number (n) of the outermost shell being filled.",
      ],
    },
    {
      heading: "Atomic & ionic radii",
      points: [
        "Across a period (left → right): atomic radius decreases (nuclear charge increases, same shell).",
        "Down a group: atomic radius increases (new shells added, shielding rises).",
        "Cations are smaller than the parent atom; anions are larger than the parent atom.",
        "Isoelectronic species: radius decreases as nuclear charge (Z) increases (e.g. N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺).",
      ],
    },
    {
      heading: "Ionization enthalpy (ΔᵢH)",
      points: [
        "Energy required to remove the most loosely bound electron from an isolated gaseous atom.",
        "Increases across a period, decreases down a group.",
        "Exceptions across period 2: Be > B (2s² is stable, easier to remove B's 2p electron) and N > O (half-filled 2p³ of N is extra stable).",
        "Similarly Mg > Al and P > S in period 3 for the same reasons.",
        "ΔᵢH₂ > ΔᵢH₁ always (removing an electron from a cation is harder).",
      ],
    },
    {
      heading: "Electron gain enthalpy & electronegativity",
      points: [
        "Electron gain enthalpy (Δₑ₉H) becomes more negative across a period, less negative down a group.",
        "Exception: Δₑ₉H of Cl is more negative than F (F is very small ⇒ strong e⁻–e⁻ repulsion in the compact 2p subshell). Similarly S > O.",
        "Electronegativity: tendency of a bonded atom to attract the shared electron pair; F is the most electronegative element (Pauling ≈ 4.0).",
        "Electronegativity increases across a period and decreases down a group.",
      ],
    },
    {
      heading: "Anomalies & special features",
      points: [
        "Anomalous behaviour of 2nd-period elements: small size, high electronegativity, absence of d-orbitals, and ability to form pπ–pπ multiple bonds.",
        "Diagonal relationship: Li–Mg, Be–Al, B–Si show similar properties (comparable charge/size ratio).",
        "Inert pair effect: reluctance of the ns² pair to bond, making lower oxidation states more stable down groups 13–15 (e.g. Tl⁺, Pb²⁺).",
      ],
    },
  ],
  shortNotes: [
    "Atomic radius: decreases → across period, increases ↓ group.",
    "IE: increases → across period, decreases ↓ group. Anomalies: Be>B, N>O, Mg>Al, P>S.",
    "Δₑ₉H exception: Cl > F, S > O (small size, high electron density).",
    "Electronegativity max = F (4.0); increases → , decreases ↓.",
    "Isoelectronic: more Z ⇒ smaller radius.",
    "Diagonal pairs: Li–Mg, Be–Al, B–Si.",
  ],
  ncertHighlights: [
    "Mendeleev arranged elements by increasing atomic mass and left gaps predicting eka-boron (Sc), eka-aluminium (Ga), eka-silicon (Ge).",
    "Moseley showed atomic number (not mass) is the fundamental property — basis of the modern periodic law.",
    "IUPAC names elements with Z > 100 using numeric roots (e.g. Unnilquadium type nomenclature) before formal names are approved.",
    "Metallic character increases down a group and decreases across a period; non-metallic character is the reverse.",
  ],
  solvedExamples: [
    {
      q: "Arrange N, O, F, Ne in increasing order of first ionization enthalpy.",
      steps: [
        "General trend across period 2: IE increases N < O < F < Ne.",
        "But N (2p³, half-filled) is extra stable ⇒ IE(N) > IE(O).",
        "So corrected order: O < N < F < Ne.",
      ],
      answer: "O < N < F < Ne.",
      tag: "jeeMain",
    },
    {
      q: "Which has the largest radius: Na⁺, Mg²⁺, F⁻, O²⁻? (all isoelectronic, 10 e⁻)",
      steps: [
        "All have 10 electrons; radius decreases as nuclear charge Z increases.",
        "Z values: O(8) < F(9) < Na(11) < Mg(12).",
        "Largest radius ⇒ smallest Z ⇒ O²⁻.",
      ],
      answer: "O²⁻ has the largest radius.",
      tag: "neet",
    },
  ],
  derivations: [
    {
      title: "Effective nuclear charge by Slater's rules",
      steps: [
        "Zₑ𝒻𝒻 = Z − σ, where σ is the total screening (shielding) constant.",
        "Group orbitals as (1s)(2s,2p)(3s,3p)(3d)(4s,4p)… and apply per-electron contributions.",
        "For an ns/np electron: same-group electrons contribute 0.35 each (0.30 for 1s); each electron in the (n−1) shell contributes 0.85; electrons in (n−2) and lower contribute 1.00.",
        "Example — valence electron of Na (1s²2s²2p⁶3s¹): σ = (8 × 0.85) + (2 × 1.00) = 8.8 ; Zₑ𝒻𝒻 = 11 − 8.8.",
      ],
      result: "Zₑ𝒻𝒻(Na, 3s) = 2.2 — explains its low ionization enthalpy.",
    },
  ],
  commonMistakes: [
    "Assuming IE increases smoothly across a period — forgetting the Be>B and N>O anomalies.",
    "Stating F has the most negative electron gain enthalpy — it is actually Cl.",
    "Confusing electron gain enthalpy (an energy) with electronegativity (a dimensionless tendency).",
    "Comparing radii of isoelectronic species by period/group instead of by nuclear charge.",
    "Forgetting that cations are smaller and anions larger than the neutral atom.",
  ],
  revisionNotes: [
    "Periodicity is a function of atomic number (modern law).",
    "Size ↓ across period, ↑ down group; IE & EN opposite.",
    "Memorise anomalies: Be>B, N>O (IE); Cl>F (Δₑ₉H).",
    "Isoelectronic radius ∝ 1/Z.",
    "Inert pair effect stabilises lower oxidation states down p-block.",
  ],
  formulaLinks: [
    { label: "Periodic trends reference", href: "/periodic-trends", note: "Radius · IE · Δₑ₉H · EN data" },
  ],
  pyqLinks: [
    { label: "Periodic Table PYQs", href: "/pyq", note: "Search 'Periodic Table'" },
    { label: "Trend-exception questions", href: "/pyq", note: "IE & Δₑ₉H anomalies are high-yield" },
  ],
  tests: [
    { label: "Periodicity — Trends & Exceptions", questions: 20, status: "coming-soon" },
    { label: "Classification & Blocks", questions: 15, status: "coming-soon" },
  ],
  learnLinks: [
    { label: "Interactive Periodic Table", href: "/periodic-table", note: "Element data & configurations" },
    { label: "Trends Explorer", href: "/periodic-trends", note: "Visualise every periodic trend" },
    { label: "PYQ Intelligence", href: "/pyq", note: "Chapter-wise frequency" },
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// CHAPTER 3 — GENERAL ORGANIC CHEMISTRY (GOC)
// ═════════════════════════════════════════════════════════════════════════════

const GENERAL_ORGANIC_CHEMISTRY: NotesChapter = {
  id: "general-organic-chemistry",
  title: "General Organic Chemistry",
  category: "organic",
  exams: ["neet", "jeeMain", "jeeAdvanced"],
  tagline: "The grammar of organic chemistry — electronic effects, intermediates & reactivity.",
  syllabus: [
    "Bond fission: homolytic and heterolytic cleavage; electrophiles and nucleophiles.",
    "Electronic displacement effects: inductive, resonance (mesomeric), hyperconjugation, electromeric.",
    "Reactive intermediates: carbocations, carbanions, free radicals, carbenes — structure & stability.",
    "Aromaticity and Hückel's (4n+2) rule.",
    "Acidity and basicity of organic compounds; effect of substituents; tautomerism.",
  ],
  subtopics: [
    "Homolytic vs heterolytic fission",
    "Electrophiles & nucleophiles",
    "Inductive effect (±I)",
    "Resonance / mesomeric effect (±M)",
    "Hyperconjugation",
    "Reactive intermediates & stability",
    "Aromaticity (Hückel's rule)",
    "Acidity / basicity & tautomerism",
  ],
  detailedNotes: [
    {
      heading: "Bond fission & reagents",
      points: [
        "Homolytic fission: bond breaks evenly, each atom keeps one electron ⇒ free radicals (favoured by heat/light, non-polar solvents).",
        "Heterolytic fission: bond breaks unevenly, one atom keeps both electrons ⇒ ions (carbocation + carbanion).",
        "Electrophile (E⁺): electron-deficient, seeks electrons (e.g. H⁺, NO₂⁺, carbocations).",
        "Nucleophile (Nu⁻): electron-rich, donates a lone/π pair (e.g. OH⁻, CN⁻, NH₃, H₂O).",
      ],
    },
    {
      heading: "Electronic effects",
      points: [
        "Inductive effect (I): permanent σ-bond polarisation. −I groups withdraw (−NO₂, −CN, −COOH, halogens); +I groups donate (−CH₃, −C(CH₃)₃, −COO⁻). It weakens with distance.",
        "Resonance / mesomeric effect (M): delocalisation of π/lone-pair electrons over a conjugated system; +M groups donate (−OH, −NH₂, −OR, halogens), −M groups withdraw (−NO₂, −C=O, −CN). Requires conjugation/planarity.",
        "Hyperconjugation: delocalisation of σ(C–H) electrons into an adjacent empty p-orbital or π-system ('no-bond resonance'); more α-hydrogens ⇒ greater stabilisation.",
        "Electromeric effect (E): temporary, complete π-electron shift in the presence of an attacking reagent (reversible).",
      ],
    },
    {
      heading: "Reactive intermediates",
      points: [
        "Carbocation stability: 3° > 2° > 1° > methyl (stabilised by +I and hyperconjugation); benzylic/allylic are extra-stable by resonance. Geometry: sp², planar.",
        "Carbanion stability: methyl > 1° > 2° > 3° (opposite to carbocations); stabilised by −I/−M groups. Geometry: sp³, pyramidal.",
        "Free radical stability: 3° > 2° > 1° > methyl (like carbocations, via hyperconjugation & resonance).",
        "Carbenes (R₂C:) are neutral, divalent — singlet (paired, sp²) and triplet (unpaired, more stable) forms.",
      ],
    },
    {
      heading: "Aromaticity & acidity/basicity",
      points: [
        "Aromatic species must be cyclic, planar, fully conjugated and obey Hückel's rule: (4n+2) π electrons (n = 0, 1, 2 …).",
        "Antiaromatic: cyclic, planar, conjugated but with 4n π electrons (destabilised).",
        "Acidity order: carboxylic acid > phenol > water > alcohol > alkyne. Electron-withdrawing groups increase acidity by stabilising the conjugate base.",
        "Basicity of amines (gas phase 3° > 2° > 1°); in water the order shifts due to solvation and steric effects (often 2° > 1° > 3° for simple alkylamines).",
      ],
    },
  ],
  shortNotes: [
    "Homolysis → radicals; heterolysis → ions.",
    "Carbocation & radical stability: 3° > 2° > 1° > CH₃⁺/•. Carbanion: reverse.",
    "Resonance/+M needs conjugation & planarity; inductive works through σ-bonds and fades with distance.",
    "Hyperconjugation ∝ number of α-H atoms.",
    "Aromatic ⇒ cyclic + planar + conjugated + (4n+2) π e⁻.",
    "Acidity: RCOOH > ArOH > H₂O > ROH; EWG ↑ acidity, EDG ↓ acidity.",
  ],
  ncertHighlights: [
    "Structural representations: complete, condensed and bond-line formulae are all NCERT-standard.",
    "Inductive, resonance, electromeric and hyperconjugation are the four electron-displacement effects defined in NCERT Class 11 Unit 12.",
    "Resonance structures are hypothetical; the real molecule is a resonance hybrid lower in energy than any contributor.",
    "Curly (curved) arrows show the movement of an electron pair; a fish-hook (half) arrow shows single-electron movement.",
  ],
  solvedExamples: [
    {
      q: "Arrange the carbocations CH₃⁺, CH₃CH₂⁺, (CH₃)₂CH⁺, (CH₃)₃C⁺ in increasing order of stability.",
      steps: [
        "Stability rises with the number of alkyl groups (+I effect and hyperconjugation).",
        "Count α-H for hyperconjugation: methyl(0) < ethyl(3) < isopropyl(6) < tert-butyl(9).",
        "More hyperconjugation & +I ⇒ more stable.",
      ],
      answer: "CH₃⁺ < CH₃CH₂⁺ < (CH₃)₂CH⁺ < (CH₃)₃C⁺.",
      tag: "jeeMain",
    },
    {
      q: "Which is more acidic: p-nitrophenol or phenol? Explain.",
      steps: [
        "Acidity depends on stability of the phenoxide (conjugate base).",
        "The −NO₂ group is strongly −M/−I and withdraws electron density, delocalising the negative charge (especially from the para position).",
        "A more stabilised anion ⇒ stronger acid.",
      ],
      answer: "p-Nitrophenol is more acidic than phenol.",
      tag: "neet",
    },
    {
      q: "Is the cyclopentadienyl anion aromatic?",
      steps: [
        "It is cyclic, planar and fully conjugated.",
        "π-electron count = 6 (five ring π electrons + the lone pair from the carbanion).",
        "6 = 4n+2 with n = 1 ⇒ satisfies Hückel's rule.",
      ],
      answer: "Yes — the cyclopentadienyl anion is aromatic (6 π electrons).",
      tag: "jeeAdvanced",
    },
  ],
  derivations: [
    {
      title: "Why tertiary carbocations are the most stable (reasoning)",
      steps: [
        "A carbocation carries an empty 2p orbital on an sp²-hybridised, electron-deficient carbon.",
        "Adjacent C–H σ-bonds overlap with this empty p-orbital (hyperconjugation), spreading the positive charge.",
        "More alkyl groups ⇒ more α C–H bonds ⇒ more hyperconjugative structures; alkyl groups also donate electron density by +I.",
        "Charge dispersal lowers energy, so stability increases 1° → 2° → 3°.",
      ],
      result: "Stability order: 3° > 2° > 1° > methyl carbocation.",
    },
    {
      title: "Counting hyperconjugative (no-bond) structures",
      steps: [
        "For a carbocation, count the α-hydrogens (H on carbons directly attached to the C⁺).",
        "Number of hyperconjugative structures = number of α-H atoms.",
        "Example — tert-butyl cation (CH₃)₃C⁺ has 9 α-hydrogens.",
      ],
      result: "(CH₃)₃C⁺ has 9 hyperconjugative structures — hence high stability.",
    },
  ],
  commonMistakes: [
    "Reversing carbanion stability — it is opposite to carbocations (methyl most stable).",
    "Applying resonance to a non-planar or non-conjugated system where it cannot operate.",
    "Ignoring that inductive effect decreases rapidly with distance.",
    "Assuming amine basicity in water follows the gas-phase 3° > 2° > 1° order (solvation changes it).",
    "Miscounting π electrons for Hückel's rule (include lone pairs that are part of the ring π-system).",
  ],
  revisionNotes: [
    "Four electronic effects: inductive, resonance, hyperconjugation, electromeric.",
    "Intermediate stability: carbocation/radical 3°>2°>1°; carbanion reverse.",
    "Hyperconjugative structures = number of α-H.",
    "Aromatic = cyclic + planar + conjugated + (4n+2) π.",
    "EWG stabilise carbanions/anions (↑ acidity); EDG stabilise carbocations.",
  ],
  formulaLinks: [
    { label: "GOC quick-reference cards", href: "/vault/formulas", note: "Stability & effect summaries" },
  ],
  pyqLinks: [
    { label: "GOC PYQs", href: "/pyq", note: "Search 'General Organic Chemistry'" },
    { label: "Stability & acidity ordering", href: "/pyq", note: "Very high-frequency in JEE/NEET" },
  ],
  tests: [
    { label: "Electronic Effects", questions: 20, status: "coming-soon" },
    { label: "Reactive Intermediates & Aromaticity", questions: 20, status: "coming-soon" },
  ],
  learnLinks: [
    { label: "Named Reactions + Mechanisms", href: "/name-reactions", note: "700+ AI mechanism lessons" },
    { label: "Reagents Master List", href: "/reagents", note: "Electrophiles & nucleophiles" },
    { label: "PYQ Intelligence", href: "/pyq", note: "GOC frequency & prediction" },
  ],
};

// ── Registry & lookups ────────────────────────────────────────────────────────

export const NOTES_CHAPTERS: NotesChapter[] = [
  MOLE_CONCEPT,
  PERIODIC_TABLE,
  GENERAL_ORGANIC_CHEMISTRY,
];

export function getNotesChapter(id: string): NotesChapter | undefined {
  return NOTES_CHAPTERS.find((c) => c.id === id);
}

/** Lightweight stats used by the UI header (no mock data — derived from SSOT). */
export const NOTES_ENGINE_STATS = {
  chapters: NOTES_CHAPTERS.length,
  sections: NOTE_SECTIONS.length,
  solvedExamples: NOTES_CHAPTERS.reduce((s, c) => s + c.solvedExamples.length, 0),
  derivations: NOTES_CHAPTERS.reduce((s, c) => s + c.derivations.length, 0),
} as const;
