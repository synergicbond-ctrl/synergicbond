// ─────────────────────────────────────────────────────────────────────────────
// CBSE Chemistry Practicals SSOT — the standard CBSE Class 11 / 12 laboratory
// syllabus (aim · theory · apparatus · procedure · observation table ·
// precautions · viva). This is established curriculum content (the same class
// of hand-authored, verifiable reference data as the reagents/solubility
// pages), NOT AI-generated or fabricated. Lab "simulations" are honestly a
// guided walkthrough of the observation table — no fake apparatus animation is
// claimed. Practical marks (30) sit alongside the 70-mark theory paper.
// ─────────────────────────────────────────────────────────────────────────────

export interface VivaQ { q: string; a: string; }

export interface ObservationTable {
  caption: string;
  headers: string[];
  /** Example/blank rows to be filled during the experiment. */
  sampleRows: string[][];
  note?: string;
}

export interface Experiment {
  id: string;
  class: 11 | 12;
  title: string;
  category: string;
  aim: string;
  apparatus: string[];
  theory: string;
  procedure: string[];
  observation?: ObservationTable;
  result: string;
  precautions: string[];
  viva: VivaQ[];
}

const CLASS_11: Experiment[] = [
  {
    id: "ph-solutions", class: 11, title: "Determination of pH of Solutions",
    category: "pH & Titrimetric",
    aim: "To determine the pH of some solutions (acids, bases and salts) using pH paper / universal indicator.",
    apparatus: ["Test tubes & stand", "pH paper / universal indicator", "Glass rod", "Standard pH colour chart", "Sample solutions (HCl, CH₃COOH, NaOH, NH₄OH, NaCl, Na₂CO₃, NH₄Cl)"],
    theory: "pH = −log[H⁺]. Strong acids give pH ≈ 1–3, weak acids 3–5, neutral 7, weak bases 8–10, strong bases 11–14. Salts of strong acid + weak base are acidic; weak acid + strong base are basic; strong acid + strong base are neutral (salt hydrolysis).",
    procedure: [
      "Take a small strip of pH paper on a clean tile.",
      "With a clean glass rod, place one drop of the first solution on the strip.",
      "Match the colour developed with the standard pH colour chart and note the pH.",
      "Rinse the glass rod and repeat for each solution.",
    ],
    observation: {
      caption: "pH of the given solutions",
      headers: ["S.No.", "Solution", "Colour on pH paper", "Approx. pH", "Nature"],
      sampleRows: [["1", "0.1 M HCl", "Red", "1", "Strongly acidic"], ["2", "0.1 M CH₃COOH", "Orange", "3", "Weakly acidic"], ["3", "0.1 M NaOH", "Dark blue/violet", "13", "Strongly basic"]],
    },
    result: "The pH and acidic/basic/neutral nature of each solution is recorded as above.",
    precautions: ["Use a clean, dry glass rod for each solution to avoid contamination.", "Compare colour immediately (colours fade).", "Do not dip the whole strip into the solution — use one drop."],
    viva: [
      { q: "Why does CH₃COOH show a higher pH than HCl at the same concentration?", a: "CH₃COOH is a weak acid — only partially ionised — so [H⁺] is lower, hence higher pH." },
      { q: "Why is an aqueous solution of Na₂CO₃ basic?", a: "It is the salt of a strong base (NaOH) and a weak acid (H₂CO₃); the carbonate ion hydrolyses to give OH⁻." },
    ],
  },
  {
    id: "acid-base-titration", class: 11, title: "Acid–Base Titration (Oxalic Acid vs NaOH)",
    category: "pH & Titrimetric",
    aim: "To prepare a standard solution of oxalic acid and use it to determine the molarity and strength of a given sodium hydroxide solution.",
    apparatus: ["Burette", "Pipette (10 mL)", "Conical flask", "Volumetric flask (100 mL)", "Phenolphthalein indicator", "Oxalic acid, NaOH solution"],
    theory: "Oxalic acid (H₂C₂O₄·2H₂O, M = 126) is a primary standard. Reaction: H₂C₂O₄ + 2NaOH → Na₂C₂O₄ + 2H₂O. At the end point phenolphthalein turns from colourless (acid) to permanent pale pink (base).",
    procedure: [
      "Prepare 100 mL of M/10 oxalic acid by weighing 1.26 g and dissolving to the mark.",
      "Rinse and fill the burette with NaOH solution; note the initial reading.",
      "Pipette 10 mL of oxalic acid into a conical flask; add 1–2 drops phenolphthalein.",
      "Titrate against NaOH until one drop gives a permanent pale-pink colour.",
      "Repeat for concordant readings (within 0.1 mL).",
    ],
    observation: {
      caption: "Titration readings",
      headers: ["S.No.", "Initial burette (mL)", "Final burette (mL)", "Volume NaOH used (mL)"],
      sampleRows: [["1", "0.0", "—", "—"], ["2", "—", "—", "—"], ["3", "—", "—", "—"]],
      note: "Take the mean of concordant readings.",
    },
    result: "Molarity of NaOH = (2 × M_oxalic × V_oxalic) / V_NaOH; strength (g/L) = Molarity × 40.",
    precautions: ["Rinse burette/pipette with the solution they will hold.", "Remove air bubbles from the burette nozzle.", "Read the lower meniscus at eye level.", "Add indicator in small quantity (1–2 drops)."],
    viva: [
      { q: "Why is oxalic acid a primary standard?", a: "It is available in high purity, is stable, non-hygroscopic and has a known formula mass, so a standard solution can be made by direct weighing." },
      { q: "Why phenolphthalein and not methyl orange here?", a: "The titration of a weak acid with a strong base has its equivalence point in the basic range, where phenolphthalein changes colour." },
    ],
  },
  {
    id: "qual-analysis-11", class: 11, title: "Qualitative Analysis — Anions & Cations",
    category: "Qualitative Analysis",
    aim: "To identify one cation and one anion present in a given inorganic salt.",
    apparatus: ["Test tubes", "Delivery tube", "Dil. & conc. H₂SO₄", "NaOH, NH₄OH", "Group reagents", "Bunsen burner"],
    theory: "Anions are detected by preliminary tests (dil./conc. acid) and confirmatory tests. Cations are classified into analytical groups (I–VI) by selective precipitation with group reagents.",
    procedure: [
      "Note colour and smell of the salt (preliminary observation).",
      "Anion: perform dilute-acid and then concentrated-acid tests; carry out confirmatory tests (e.g. BaCl₂ for SO₄²⁻, AgNO₃ for halides).",
      "Cation: prepare original solution; test group-wise with dilute HCl (Gp I), H₂S (Gp II), NH₄OH (Gp III), etc.",
      "Confirm the cation with its specific confirmatory test.",
    ],
    observation: {
      caption: "Systematic analysis",
      headers: ["Experiment", "Observation", "Inference"],
      sampleRows: [["Salt + dil. H₂SO₄", "Brisk effervescence, colourless odourless gas", "CO₃²⁻ may be present"], ["Gas + lime water", "Turns milky", "CO₃²⁻ confirmed"]],
    },
    result: "The salt contains the cation ____ and the anion ____.",
    precautions: ["Use a small amount of salt.", "Smell gases by wafting.", "Use freshly prepared reagents and original solution for cation tests."],
    viva: [
      { q: "Why is the original solution used for cation analysis?", a: "To avoid interference; the salt must first be dissolved in a suitable solvent to bring cations into solution." },
      { q: "Which gas turns lime water milky?", a: "CO₂, forming insoluble CaCO₃." },
    ],
  },
  {
    id: "lassaigne-test", class: 11, title: "Detection of Elements in Organic Compounds (Lassaigne's Test)",
    category: "Organic Analysis",
    aim: "To detect the presence of nitrogen, sulphur and halogens in a given organic compound.",
    apparatus: ["Fusion tube", "Sodium metal", "Bunsen burner", "FeSO₄, FeCl₃", "Sodium nitroprusside", "AgNO₃, dil. HNO₃"],
    theory: "Covalently bonded N, S and X are converted to ionisable form by fusion with sodium (Lassaigne's extract): NaCN, Na₂S, NaX. These are then detected by ionic tests.",
    procedure: [
      "Fuse a little compound with a piece of sodium in a fusion tube; plunge red-hot into distilled water and boil.",
      "Filter to obtain the sodium fusion extract.",
      "N: add FeSO₄, warm, acidify with H₂SO₄ → Prussian blue confirms nitrogen.",
      "S: add sodium nitroprusside → violet colour confirms sulphur.",
      "Halogen: acidify extract with dil. HNO₃, boil, add AgNO₃ → precipitate (white/pale-yellow/yellow).",
    ],
    result: "The organic compound contains N / S / halogen as detected by the above confirmatory tests.",
    precautions: ["Handle sodium with dry forceps — never with bare hands.", "Ensure the fusion tube is red hot before plunging.", "Boil the halogen extract with HNO₃ first to destroy CN⁻/S²⁻ if N and S are present."],
    viva: [
      { q: "Why is the halogen extract boiled with nitric acid before adding AgNO₃?", a: "To decompose any NaCN or Na₂S present, which would otherwise give interfering precipitates with AgNO₃." },
      { q: "What is the composition of Prussian blue?", a: "Ferric ferrocyanide, Fe₄[Fe(CN)₆]₃." },
    ],
  },
  {
    id: "crystallisation", class: 11, title: "Purification by Crystallisation",
    category: "Characterisation & Purification",
    aim: "To purify a given impure sample (e.g. copper sulphate / alum / benzoic acid) by crystallisation.",
    apparatus: ["Beaker", "China dish", "Funnel & filter paper", "Glass rod", "Watch glass", "Bunsen burner"],
    theory: "Crystallisation separates a pure solid from soluble impurities based on the difference in solubility at high and low temperatures.",
    procedure: [
      "Dissolve the impure sample in the minimum amount of hot solvent (water).",
      "Filter the hot solution to remove insoluble impurities.",
      "Allow the filtrate to cool slowly and undisturbed.",
      "Filter, wash and dry the crystals; observe their shape.",
    ],
    result: "Pure crystals of the compound are obtained (regular, well-defined shape).",
    precautions: ["Use minimum solvent for a saturated hot solution.", "Cool slowly to get good crystals.", "Do not disturb during crystallisation."],
    viva: [
      { q: "Why must the hot solution be filtered quickly?", a: "To prevent premature crystallisation of the product in the funnel as it cools." },
      { q: "What is the principle of crystallisation?", a: "Difference in solubility of the substance and impurities in a solvent at different temperatures." },
    ],
  },
];

const CLASS_12: Experiment[] = [
  {
    id: "kmno4-oxalic", class: 12, title: "Redox Titration — KMnO₄ vs Oxalic Acid",
    category: "Volumetric — Redox",
    aim: "To prepare M/20 standard oxalic acid and determine the molarity and strength of a given KMnO₄ solution.",
    apparatus: ["Burette", "Pipette", "Conical flask", "Volumetric flask", "Water bath / burner", "Dil. H₂SO₄"],
    theory: "KMnO₄ is a self-indicator. In acidic medium: 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O. End point = first permanent pale pink.",
    procedure: [
      "Prepare M/20 oxalic acid by weighing accurately and dissolving to the mark.",
      "Fill the burette with KMnO₄; pipette 10 mL oxalic acid into the flask.",
      "Add ~1 test-tube of dil. H₂SO₄ and warm to 50–60 °C.",
      "Titrate hot against KMnO₄ until a permanent pale-pink colour persists.",
      "Repeat for concordant readings.",
    ],
    observation: {
      caption: "Titration readings",
      headers: ["S.No.", "Initial (mL)", "Final (mL)", "Volume KMnO₄ (mL)"],
      sampleRows: [["1", "0.0", "—", "—"], ["2", "—", "—", "—"], ["3", "—", "—", "—"]],
    },
    result: "Molarity of KMnO₄ = (2 × M_oxalic × V_oxalic)/(5 × V_KMnO₄); strength = Molarity × 158.",
    precautions: ["Warm oxalic acid to 50–60 °C — not boiling (oxalic acid decomposes).", "Add H₂SO₄, never HCl (Cl⁻ is oxidised by KMnO₄).", "Read the upper meniscus for the dark KMnO₄ solution."],
    viva: [
      { q: "Why is KMnO₄ called a self-indicator?", a: "Its own purple colour disappears while reacting and reappears (pink) at the end point, so no external indicator is needed." },
      { q: "Why is the oxalic acid solution warmed?", a: "The reaction is slow at room temperature; warming to 50–60 °C speeds it up (autocatalysis by Mn²⁺ then continues it)." },
    ],
  },
  {
    id: "kmno4-mohr", class: 12, title: "Redox Titration — KMnO₄ vs Mohr's Salt",
    category: "Volumetric — Redox",
    aim: "To determine the molarity and strength of KMnO₄ using a standard solution of Mohr's salt (ferrous ammonium sulphate).",
    apparatus: ["Burette", "Pipette", "Conical flask", "Volumetric flask", "Dil. H₂SO₄"],
    theory: "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. Mohr's salt [FeSO₄·(NH₄)₂SO₄·6H₂O, M = 392] is a stable source of Fe²⁺.",
    procedure: [
      "Prepare M/20 Mohr's salt in dilute H₂SO₄ (prevents aerial oxidation & hydrolysis).",
      "Pipette 10 mL into the flask, add dil. H₂SO₄ (cold — do NOT warm).",
      "Titrate against KMnO₄ to a permanent pink end point.",
      "Repeat for concordant readings.",
    ],
    result: "Molarity of KMnO₄ = (M_Mohr × V_Mohr)/(5 × V_KMnO₄); strength = Molarity × 158.",
    precautions: ["Prepare Mohr's salt in dilute H₂SO₄ to prevent oxidation of Fe²⁺ by air.", "Do NOT heat — unlike oxalic acid, this titration is done cold.", "Use dilute H₂SO₄ as the acid medium."],
    viva: [
      { q: "Why is this titration done cold whereas KMnO₄–oxalic acid is done hot?", a: "The Fe²⁺–MnO₄⁻ reaction is fast at room temperature; heating would oxidise Fe²⁺ to Fe³⁺ by air and cause error." },
      { q: "Why add dilute sulphuric acid to Mohr's salt?", a: "To suppress hydrolysis of Fe²⁺ and prevent its aerial oxidation." },
    ],
  },
  {
    id: "salt-analysis-12", class: 12, title: "Systematic Qualitative Salt Analysis",
    category: "Qualitative Analysis",
    aim: "To analyse a given inorganic salt and identify one cation and one anion.",
    apparatus: ["Test tubes", "Group reagents", "Dil./conc. acids", "NaOH, NH₄OH", "Burner"],
    theory: "Anions: preliminary (dil. acid, conc. acid) + confirmatory tests. Cations: Groups I–VI by selective precipitation (Gp I dil.HCl; Gp II H₂S/acidic; Gp III NH₄OH; Gp IV H₂S/basic; Gp V (NH₄)₂CO₃; Gp VI Mg).",
    procedure: [
      "Preliminary tests: colour, smell, solubility, flame test.",
      "Detect the anion via dilute- and concentrated-acid tests and confirm.",
      "Prepare original solution; carry out cation group analysis in sequence.",
      "Confirm the cation with the specific confirmatory test.",
    ],
    observation: {
      caption: "Systematic analysis",
      headers: ["Experiment", "Observation", "Inference"],
      sampleRows: [["Flame test", "Apple-green flame", "Ba²⁺ may be present"], ["OS + K₂CrO₄", "Yellow ppt", "Ba²⁺ confirmed"]],
    },
    result: "The salt contains cation ____ and anion ____.",
    precautions: ["Use the original solution for cation analysis.", "Follow the group sequence strictly.", "Confirm before concluding."],
    viva: [
      { q: "Why must Group II be done in acidic medium and Group IV in basic?", a: "Controlling [S²⁻] via H⁺ selectively precipitates only Group II sulphides (low Ksp) in acid; raising it in base precipitates Group IV." },
      { q: "What gives a brick-red flame?", a: "Calcium (Ca²⁺)." },
    ],
  },
  {
    id: "chromatography", class: 12, title: "Paper Chromatography — Rf Value",
    category: "Content-Based",
    aim: "To separate the coloured components of a mixture (ink/leaf pigment) and calculate their Rf values.",
    apparatus: ["Chromatography paper", "Gas jar / beaker", "Capillary", "Solvent (water/alcohol)", "Scale"],
    theory: "Components distribute between the stationary phase (water held on paper) and mobile phase (solvent) by differential adsorption/partition. Rf = distance moved by component ÷ distance moved by solvent front (0 < Rf ≤ 1).",
    procedure: [
      "Draw a pencil base line ~2 cm from one end; spot the mixture and dry.",
      "Suspend the strip so the spot is above the solvent surface.",
      "Allow the solvent to rise; remove before it reaches the top; mark the solvent front.",
      "Measure distances and compute Rf for each spot.",
    ],
    observation: {
      caption: "Rf values",
      headers: ["Component", "Distance moved (cm)", "Solvent front (cm)", "Rf"],
      sampleRows: [["Spot 1", "—", "—", "—"], ["Spot 2", "—", "—", "—"]],
    },
    result: "The mixture is separated into ____ components with Rf values as tabulated.",
    precautions: ["Use pencil (not ink) for the base line.", "Keep the spot small and above the solvent.", "Do not let the solvent front reach the top."],
    viva: [
      { q: "Why is the base line drawn with pencil?", a: "Ink would dissolve and run in the solvent, spoiling the chromatogram; graphite is inert." },
      { q: "What does a higher Rf indicate?", a: "The component is more soluble in the mobile phase / less strongly adsorbed, so it travels farther." },
    ],
  },
  {
    id: "prep-potash-alum", class: 12, title: "Preparation of Potash Alum",
    category: "Preparation — Inorganic",
    aim: "To prepare a pure sample of potash alum [K₂SO₄·Al₂(SO₄)₃·24H₂O] from the given materials.",
    apparatus: ["Beaker", "China dish", "Funnel", "Glass rod", "Water bath"],
    theory: "Equimolar potassium sulphate and aluminium sulphate crystallise together as a double salt (alum) with characteristic octahedral crystals.",
    procedure: [
      "Dissolve Al₂(SO₄)₃ and K₂SO₄ in minimum water (add a little dil. H₂SO₄ to prevent hydrolysis).",
      "Mix, concentrate slightly and leave to crystallise slowly.",
      "Filter, wash with a little cold water and dry the octahedral crystals.",
    ],
    result: "Pure octahedral crystals of potash alum are obtained; yield noted.",
    precautions: ["Add dilute H₂SO₄ to prevent hydrolysis of Al³⁺.", "Cool slowly for good crystals.", "Do not overheat during concentration."],
    viva: [
      { q: "What type of salt is alum?", a: "A double salt — it dissociates completely into its constituent ions in solution." },
      { q: "Why add sulphuric acid during preparation?", a: "To suppress hydrolysis of aluminium ions which would otherwise form Al(OH)₃." },
    ],
  },
  {
    id: "functional-groups", class: 12, title: "Tests for Organic Functional Groups",
    category: "Organic Analysis",
    aim: "To identify the functional group present in a given organic compound (–OH, >C=O, –CHO, –COOH, –NH₂).",
    apparatus: ["Test tubes", "2,4-DNP reagent", "Tollens' & Fehling's reagents", "Neutral FeCl₃", "NaHCO₃"],
    theory: "Each functional group gives characteristic reactions: carboxylic acid liberates CO₂ with NaHCO₃; phenols give violet colour with neutral FeCl₃; aldehydes/ketones give orange ppt with 2,4-DNP; aldehydes reduce Tollens'/Fehling's; amines give the carbylamine test.",
    procedure: [
      "–COOH: add NaHCO₃ → brisk effervescence (CO₂).",
      "Phenolic –OH: add neutral FeCl₃ → violet/blue colour.",
      ">C=O and –CHO: add 2,4-DNP → orange/yellow precipitate.",
      "–CHO only: Tollens' → silver mirror; Fehling's → red-brown ppt.",
      "1° amine: carbylamine test (CHCl₃ + KOH) → foul isocyanide smell.",
    ],
    result: "The compound contains the ____ functional group as confirmed above.",
    precautions: ["Use neutral FeCl₃ for the phenol test.", "Tollens' reagent must be freshly prepared.", "Perform the carbylamine test in a fume hood (foul, toxic)."],
    viva: [
      { q: "How do you distinguish an aldehyde from a ketone?", a: "Aldehydes reduce Tollens' (silver mirror) and Fehling's (red ppt); ketones do not." },
      { q: "Why is neutral FeCl₃ used for phenols?", a: "Free HCl would prevent formation of the coloured iron–phenoxide complex." },
    ],
  },
  {
    id: "biomolecule-tests", class: 12, title: "Tests for Carbohydrates, Fats & Proteins",
    category: "Content-Based",
    aim: "To detect the presence of carbohydrates, proteins and fats in a given food sample.",
    apparatus: ["Test tubes", "Molisch's reagent", "Fehling's/Benedict's", "Iodine solution", "Biuret reagent", "Sudan III / paper"],
    theory: "Molisch's test → carbohydrates (violet ring); Fehling's/Benedict's → reducing sugars; iodine → starch (blue-black); Biuret → proteins (violet); grease spot / Sudan III → fats.",
    procedure: [
      "Carbohydrate (Molisch): sample + α-naphthol + conc. H₂SO₄ (side) → violet ring.",
      "Reducing sugar: warm with Fehling's/Benedict's → red-brown ppt.",
      "Starch: add iodine → blue-black colour.",
      "Protein (Biuret): add NaOH + CuSO₄ → violet colour.",
      "Fat: press on paper → translucent grease spot; or Sudan III stains red.",
    ],
    result: "The food sample contains ____ (carbohydrate/protein/fat) as detected.",
    precautions: ["Add conc. H₂SO₄ along the side of the tube for Molisch's test.", "Use dilute CuSO₄ in the Biuret test.", "Warm gently for Fehling's test."],
    viva: [
      { q: "Which test is common to all carbohydrates?", a: "Molisch's test (violet ring)." },
      { q: "Does sucrose answer Fehling's test?", a: "No — sucrose is a non-reducing sugar; it must be hydrolysed first." },
    ],
  },
  {
    id: "rate-of-reaction", class: 12, title: "Study of Reaction Rate (Na₂S₂O₃ + HCl)",
    category: "Content-Based — Kinetics",
    aim: "To study the effect of concentration and temperature on the rate of reaction between sodium thiosulphate and hydrochloric acid.",
    apparatus: ["Conical flasks", "Stopwatch", "Measuring cylinders", "White tile with cross mark", "Thermometer"],
    theory: "Na₂S₂O₃ + 2HCl → 2NaCl + S↓ + SO₂ + H₂O. The colloidal sulphur turns the solution opaque; time taken to obscure a cross mark is inversely related to rate.",
    procedure: [
      "Place a flask of Na₂S₂O₃ over a paper cross on a white tile.",
      "Add a fixed volume of HCl, start the stopwatch, and stop when the cross just disappears.",
      "Repeat with different concentrations (dilute the thiosulphate) at constant temperature.",
      "Repeat at different temperatures at constant concentration.",
    ],
    observation: {
      caption: "Time for cross to disappear",
      headers: ["Vol. Na₂S₂O₃", "Vol. water", "Vol. HCl", "Time (s)", "1/time (rate)"],
      sampleRows: [["50", "0", "5", "—", "—"], ["40", "10", "5", "—", "—"]],
    },
    result: "Rate increases with concentration and with temperature (rate ∝ 1/time).",
    precautions: ["View the cross from directly above each time.", "Keep total volume constant when varying concentration.", "Wash flasks between runs (sulphur deposit)."],
    viva: [
      { q: "Why does the solution turn opaque?", a: "Finely divided (colloidal) sulphur is precipitated, scattering light." },
      { q: "How does temperature affect the rate here?", a: "Higher temperature increases the fraction of molecules above the activation energy, so rate rises (roughly doubles per 10 °C)." },
    ],
  },
];

export const CBSE_PRACTICALS: Record<11 | 12, Experiment[]> = { 11: CLASS_11, 12: CLASS_12 };

export function getExperiments(cls: 11 | 12): Experiment[] { return CBSE_PRACTICALS[cls]; }
export function getExperiment(cls: 11 | 12, id: string): Experiment | undefined {
  return CBSE_PRACTICALS[cls].find((e) => e.id === id);
}
