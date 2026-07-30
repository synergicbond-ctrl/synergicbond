"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part03Data: PartData = {
  part: 3,
  title: "Acid Rain and Atmospheric Deposition",
  subtitle: "Natural rain acidity, sulphur and nitrogen oxidation pathways, wet/dry deposition, ecological damage and control.",
  goals: [
    "Explain why ordinary rain is mildly acidic.",
    "Derive H₂SO₄ and HNO₃ formation from SOₓ and NOₓ.",
    "Distinguish wet deposition from dry deposition.",
    "Use logarithmic pH changes correctly.",
    "Write the chemistry of marble, soil and metal damage.",
    "Select source controls for acid deposition.",
  ],
  sourceNote: "Source coverage: NCERT pp. 409-411; Essential Sheet pp. 4-5; Environmental Chemistry Theory pp. 184-185 and pp. 296-297. The pH discussion separates the NCERT exam convention from real cloud-water variability.",
  heroImage: {
    src: "/environmental-chemistry/acid-deposition.webp",
    alt: "Dark acid-deposition illustration showing emissions, cloud chemistry, rain, lake and marble damage",
    caption: "Acid deposition is a complete pathway: precursor emission, atmospheric oxidation, wet or dry transfer, and chemical damage to soil, water and carbonate stone.",
  },
  sections: [
    {
      eyebrow: "Definition",
      title: "Why clean rain is not pH 7",
      paragraphs: [
        "Water droplets equilibrate with atmospheric CO₂. Dissolved CO₂ forms a small amount of carbonic acid, which partially ionises to H⁺ and HCO₃⁻. Consequently, ordinary rain in the simplified textbook model has pH about 5.6 rather than 7. Rain whose pH falls below about 5.6 is called acid rain.",
        "The value 5.6 is a JEE convention, not a universal boundary for every cloud. Natural organic acids, sea salt, dust, volcanic gases and local ammonia can shift rain pH. In exam questions that cite NCERT, however, pH 5.6 is the reference and strong acids derived mainly from sulphur and nitrogen oxides explain abnormal acidity.",
        "The term acid deposition is broader than acid rain. It includes acidic rain, snow and fog as well as direct uptake or settling of acidic gases and particles. Therefore acid deposition can occur even during a dry period.",
      ],
      equations: [
        "CO₂(g) ⇌ CO₂(aq)",
        "CO₂(aq) + H₂O(l) ⇌ H₂CO₃(aq)",
        "H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq)",
        "pH = −log₁₀[H⁺]",
      ],
      boxes: [
        {
          title: "JEE trap: carbonic acid versus acid rain",
          body: "Carbonic acid explains the normal reference pH. The excess acidity called acid rain is attributed mainly to H₂SO₄ and HNO₃ formed from SOₓ and NOₓ.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Sulphur pathway",
      title: "From SO₂ emission to sulphuric acid",
      paragraphs: [
        "Sulphur in coal, oil and sulphide ores is oxidised to SO₂. Gas-phase oxidation by molecular oxygen alone is slow, but particles, ozone, hydrogen peroxide and radical chemistry accelerate conversion. In cloud droplets SO₂ dissolves and forms hydrated S(IV) species; oxidation converts S(IV) to sulphate, and the resulting acidity remains in the droplet or aerosol.",
        "The compact NCERT equation combines oxidation and hydration: 2SO₂ + O₂ + 2H₂O → 2H₂SO₄. For mechanism questions, show the steps. SO₃ hydrates strongly to H₂SO₄, while H₂O₂ can oxidise SO₂ directly. Metal ions carried on particles can catalyse aqueous oxidation.",
        "Sulphuric acid has very low volatility and contributes to fine aerosol. It is partly neutralised by NH₃ to ammonium hydrogen sulphate or ammonium sulphate. Neutralisation reduces free acidity but does not remove sulphur; the ammonium salt remains a particulate pollutant and can be deposited far from the source.",
      ],
      equations: [
        "2SO₂ + O₂ → 2SO₃  (particulate or radical-catalysed)",
        "SO₃ + H₂O → H₂SO₄",
        "SO₂ + O₃ → SO₃ + O₂",
        "SO₂ + H₂O₂ → H₂SO₄",
        "2SO₂ + O₂ + 2H₂O → 2H₂SO₄  (overall textbook equation)",
        "H₂SO₄ + 2NH₃ → (NH₄)₂SO₄",
      ],
    },
    {
      eyebrow: "Nitrogen pathway",
      title: "From NO to nitric acid and nitrate aerosol",
      paragraphs: [
        "Engines and other high-temperature sources emit mainly NO, which is converted to NO₂. Daytime radical chemistry and nighttime nitrate-radical chemistry oxidise NO₂ to nitric acid. The NCERT overall equation is 4NO₂ + O₂ + 2H₂O → 4HNO₃. A more mechanistic daytime step is NO₂ + OH• + M → HNO₃ + M.",
        "At night, NO₂ reacts with O₃ to produce NO₃•. NO₃• combines with NO₂ to form N₂O₅, which hydrolyses on wet particles to nitric acid. Nitric acid can be deposited directly or neutralised by NH₃ to ammonium nitrate. Because NH₄NO₃ is semi-volatile, its gas-particle distribution depends on temperature and humidity.",
      ],
      equations: [
        "2NO + O₂ → 2NO₂",
        "NO₂ + OH• + M → HNO₃ + M",
        "NO₂ + O₃ → NO₃• + O₂",
        "NO₃• + NO₂ ⇌ N₂O₅",
        "N₂O₅ + H₂O → 2HNO₃",
        "4NO₂ + O₂ + 2H₂O → 4HNO₃  (overall textbook equation)",
      ],
      boxes: [
        {
          title: "Do not put an hν over every acid-rain step",
          body: "Some source sheets print photochemical arrows indiscriminately. NO₂ photolysis is central to ozone formation, but HNO₃ also forms through radical and heterogeneous reactions. Use chemically meaningful conditions.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Deposition",
      title: "Wet deposition and dry deposition",
      table: {
        headers: ["Process", "What is transferred", "Carrier or surface", "Typical examples"],
        rows: [
          ["Rainout", "Species incorporated while cloud droplets form", "Cloud water", "Sulphate, nitrate, H⁺ and ammonium"],
          ["Washout", "Below-cloud gases and particles scavenged by falling drops", "Rain or snow", "SO₂, HNO₃ and aerosol"],
          ["Fog/cloud deposition", "Droplets contact vegetation or terrain", "Fog water", "Highly concentrated acid at high-elevation sites"],
          ["Dry gas deposition", "Gas absorbed by soil, water, buildings or leaves", "Surface uptake", "SO₂, HNO₃, NO₂"],
          ["Dry particle deposition", "Particles settle or impact surfaces", "Gravity and impaction", "Sulphate, nitrate, soot and dust"],
        ],
      },
      paragraphs: [
        "Wet deposition is efficient for soluble gases and cloud-active particles. Dry deposition becomes important where rain is infrequent or surfaces have high uptake capacity. The environmental burden is the sum of both. A question that identifies ammonium salts in raindrops as wet deposition and SO₂ absorbed directly on surfaces as dry deposition follows the NCERT wording.",
        "Wind can transport precursors hundreds of kilometres before oxidation and deposition. Acid deposition is therefore regional: a source and the damaged lake or forest need not lie in the same administrative region.",
      ],
    },
    {
      eyebrow: "Environmental effects",
      title: "How acidity damages water, soil, plants and materials",
      table: {
        headers: ["Target", "Primary chemical change", "Consequence"],
        rows: [
          ["Lake or stream", "Higher [H⁺]; lower acid-neutralising capacity", "Fish stress, reproductive failure and loss of acid-sensitive species"],
          ["Soil", "Leaching of Ca²⁺, Mg²⁺ and K⁺; dissolution of Al-bearing phases", "Nutrient loss, Al mobilisation and root injury"],
          ["Vegetation", "Leaf-surface injury and altered nutrient supply", "Reduced growth and greater susceptibility to cold or disease"],
          ["Water pipes", "Faster corrosion and metal dissolution", "Fe, Pb or Cu can enter drinking water"],
          ["Marble/limestone", "Acid-carbonate reaction", "Surface loss, gypsum crust, discoloration and loss of detail"],
          ["Metals and paint", "Accelerated electrochemical corrosion and coating attack", "Material weakening and maintenance cost"],
        ],
      },
      paragraphs: [
        "The severity of lake acidification depends on buffering. A limestone-rich catchment contains carbonate minerals that consume H⁺, whereas a catchment on resistant silicate rock may have little neutralising capacity. Thus equal acid deposition can cause very different pH changes.",
        "Acidity also changes speciation. Aluminium that was relatively immobile in soil can enter water as soluble Al species toxic to fish gills. Acid rain therefore causes damage not only by H⁺ itself but by mobilising other substances.",
      ],
      equations: [
        "CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O",
        "CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O",
        "CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + CO₂ + H₂O",
        "Al(OH)₃(s) + 3H⁺ → Al³⁺ + 3H₂O",
      ],
    },
    {
      eyebrow: "Taj Mahal case",
      title: "Marble corrosion and the Taj Trapezium logic",
      paragraphs: [
        "Marble is mainly CaCO₃. Sulphuric acid converts the surface to calcium sulphate, releasing CO₂ and water. Calcium sulphate can form a hydrated gypsum crust that traps soot and dust, becomes discoloured and may flake away. Nitric acid forms soluble calcium nitrate and also removes carbonate.",
        "The supplied NCERT account links emissions around Agra to industries, power plants and domestic burning of poor-quality coal, kerosene and firewood. The control strategy for the Taj Trapezium was source-oriented: substitute natural gas or LPG, use lower-sulphur diesel and reduce emissions from nearby industry and transport.",
        "A frequent exam answer names H₂SO₄ as the acid mainly responsible for damage. A complete explanation must also write CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O and state that the marble becomes lustreless, discoloured and structurally damaged.",
      ],
      structures: [
        {
          name: "Marble",
          formula: "CaCO₃(s)",
          note: "Carbonate consumes acid but the mineral surface is lost.",
        },
        {
          name: "Gypsum crust",
          formula: "CaSO₄·2H₂O(s)",
          note: "A hydrated sulphate layer can retain soot and later detach.",
        },
        {
          name: "Nitric-acid product",
          formula: "Ca(NO₃)₂(aq)",
          note: "Soluble calcium nitrate promotes material loss.",
        },
      ],
    },
    {
      eyebrow: "Quantitative reasoning",
      title: "pH is logarithmic, not linear",
      paragraphs: [
        "A fall of one pH unit means [H⁺] increases tenfold. A fall of two units means a hundredfold increase. Therefore rain at pH 4.0 is not only 1.6 units more acidic than pH 5.6; its hydrogen-ion concentration is about 10¹·⁶ ≈ 40 times larger.",
        "pH alone does not measure total acid deposition. Two samples can have the same pH but different volumes or buffering. Acid-neutralising capacity and total deposition flux matter for environmental impact. For JEE numericals, however, ratio of [H⁺] follows directly from the pH difference.",
      ],
      equations: [
        "[H⁺]₂ / [H⁺]₁ = 10^(pH₁ − pH₂)",
        "pH 5.6 → [H⁺] ≈ 2.5 × 10⁻⁶ mol L⁻¹",
        "pH 4.6 → [H⁺] ≈ 2.5 × 10⁻⁵ mol L⁻¹",
      ],
      boxes: [
        {
          title: "Acidity language",
          body: "Lower pH means greater hydrogen-ion activity. Avoid saying that pH 3 is twice as acidic as pH 6; the idealised [H⁺] ratio is 1000.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Control",
      title: "Reduce precursors and restore damaged systems",
      bullets: [
        "Lower SO₂ at source by using low-sulphur fuel, cleaning coal, switching to natural gas and installing flue-gas desulphurisation.",
        "Lower NOₓ by controlling combustion temperature, using staged combustion, exhaust-gas recirculation and catalytic exhaust treatment.",
        "Improve energy efficiency and reduce unnecessary fossil-fuel burning; this lowers both acid precursors and greenhouse-gas emission.",
        "Use catalytic converters in vehicles. In the NCERT account, Pt, Pd and Rh on a ceramic honeycomb convert CO, unburnt fuel and NOₓ near 573 K.",
        "Add limestone to acidified soil or lakes only as a remedial neutralisation measure. Liming treats damage; it does not remove the upstream source.",
        "Monitor both wet and dry deposition and coordinate regionally because long-range transport crosses local boundaries.",
      ],
      equations: [
        "CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O  (liming)",
        "2CO + 2NO → 2CO₂ + N₂  (simplified converter reaction)",
      ],
    },
  ],
  examples: [
    {
      title: "Compare two rain samples",
      problem: "Sample A has pH 5.6 and sample B has pH 4.1. How many times larger is [H⁺] in B?",
      steps: [
        "Use [H⁺]B/[H⁺]A = 10^(pHA − pHB).",
        "The pH difference is 5.6 − 4.1 = 1.5.",
        "10¹·⁵ = 31.6.",
      ],
      answer: "Sample B has approximately 31.6 times larger [H⁺].",
    },
    {
      title: "Neutralise acidity with limestone",
      problem: "How many moles of H⁺ can 0.25 mol CaCO₃ neutralise?",
      steps: [
        "Use CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O.",
        "One mole CaCO₃ consumes two moles H⁺.",
        "0.25 mol CaCO₃ consumes 0.50 mol H⁺.",
      ],
      answer: "0.50 mol H⁺.",
    },
    {
      title: "Identify deposition mode",
      problem: "Sulphate aerosol is incorporated into cloud droplets, while SO₂ is absorbed directly by a leaf surface. Classify both processes.",
      steps: [
        "Cloud-droplet incorporation followed by precipitation is wet deposition.",
        "Direct gas uptake by a surface without precipitation is dry deposition.",
      ],
      answer: "Sulphate: wet deposition; SO₂ uptake: dry deposition.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "The textbook reference pH of ordinary rain is about 5.6 mainly because of:",
      options: ["H₂SO₄", "HNO₃", "Carbonic-acid equilibrium", "Hydrofluoric acid"],
      answer: "C",
      solution: "Atmospheric CO₂ dissolves and establishes CO₂/H₂CO₃/HCO₃⁻ equilibria, producing mild natural acidity.",
    },
    {
      number: 2,
      tag: "Multiple correct",
      question: "Which are examples of dry deposition?",
      options: ["SO₂ absorbed by soil", "HNO₃ taken up by a building surface", "Sulphate carried in rain", "Aerosol settling in the absence of rain"],
      answer: "A, B and D",
      solution: "Direct gas uptake and particle settling without precipitation are dry deposition. Species delivered in rain are wet deposition.",
    },
    {
      number: 3,
      tag: "Numerical",
      question: "Rain pH changes from 5.2 to 3.2. The idealised [H⁺] increase is:",
      options: ["2 times", "20 times", "100 times", "1000 times"],
      answer: "C",
      solution: "The pH falls by 2 units, so [H⁺] increases by 10² = 100.",
    },
    {
      number: 4,
      tag: "Reaction",
      question: "Which reaction directly represents attack of sulphuric acid on marble?",
      options: ["CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O", "CaSO₄ + CO₂ → CaCO₃ + SO₂", "CaCO₃ + O₂ → CaO + CO₃", "CaCO₃ + N₂ → CaN₂ + CO₂"],
      answer: "A",
      solution: "Acid consumes carbonate, producing calcium sulphate, carbon dioxide and water.",
    },
    {
      number: 5,
      tag: "JEE trap",
      question: "Which statement is false?",
      options: ["Acid deposition includes dry processes.", "Ammonia can form ammonium aerosol.", "Tall stacks destroy SO₂.", "Acidification can mobilise aluminium."],
      answer: "C",
      solution: "Tall stacks disperse emissions; they do not destroy SO₂ or reduce total sulphur released.",
    },
    {
      number: 6,
      tag: "Control",
      question: "Adding limestone to an acidified lake is best described as:",
      options: ["Source prevention", "Remedial neutralisation", "Photochemical oxidation", "Biomagnification"],
      answer: "B",
      solution: "Limestone consumes H⁺ and restores buffering locally. It treats the affected system but does not stop SO₂ or NOₓ emission.",
    },
  ],
  recap: [
    "CO₂/H₂CO₃ equilibrium explains the textbook normal rain pH of about 5.6.",
    "Acid deposition includes both wet and dry transfer.",
    "SO₂ oxidation gives H₂SO₄; NO₂ oxidation gives HNO₃.",
    "Particulates, O₃ and H₂O₂ can accelerate sulphur oxidation.",
    "Acidification leaches nutrients and can mobilise Al and pipe metals.",
    "Marble reacts with acid because CaCO₃ consumes H⁺.",
    "A one-unit pH fall means a tenfold [H⁺] increase.",
    "Source reduction is primary; liming is a remedial measure.",
  ],
};

export default function Part03() {
  return <EnvironmentalChemistryPart data={part03Data} />;
}
