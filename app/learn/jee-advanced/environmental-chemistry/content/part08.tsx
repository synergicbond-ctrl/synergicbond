"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part08Data: PartData = {
  part: 8,
  title: "Water Pollution, Oxygen Demand and Eutrophication",
  subtitle: "Source classification, pathogens, organic load, metals, pesticides, oil, heat, DO-BOD-COD relationships and the chemistry of ecosystem collapse.",
  goals: [
    "Distinguish point and non-point water pollution.",
    "Map each pollutant class to its source and mechanism of harm.",
    "Explain day-night dissolved-oxygen behaviour.",
    "Use BOD and COD without reversing their meanings.",
    "Derive the eutrophication sequence from nutrient input to anoxia.",
    "Connect pH, redox and speciation to water toxicity.",
  ],
  sourceNote: "Source coverage: NCERT pp. 414-416; Essential Sheet pp. 8-10; Environmental Chemistry Theory pp. 187-189 and p. 299; all 10 pages of Water Pollution Chemistry were visually audited, with selected dark diagrams used after footer-brand removal.",
  heroImage: {
    src: "/environmental-chemistry/water-point-nonpoint.webp",
    alt: "Dark source-derived comparison of an identifiable discharge pipe and diffuse agricultural runoff",
    caption: "Point sources enter at a traceable location; non-point pollution is distributed across land, rainfall and runoff pathways.",
  },
  sections: [
    {
      eyebrow: "Source geometry",
      title: "Point sources and non-point sources",
      paragraphs: [
        "A point source has an identifiable entry location, such as a municipal sewage outfall, industrial discharge pipe or mine-drainage channel. Measurement and regulation can focus on the outlet. A non-point source is diffuse: agricultural runoff, urban stormwater, erosion and atmospheric deposition enter over a broad area and vary with weather.",
        "The terms describe source geometry, not pollutant chemistry. A nitrate ion from a pipe and a nitrate ion from fertilised-field runoff are chemically identical. Source category changes monitoring and control: a pipe can be treated before discharge, while diffuse nutrient loss requires land-management changes across a catchment.",
      ],
      table: {
        headers: ["Source type", "Examples", "Best control level"],
        rows: [
          ["Point", "Sewage pipe, factory effluent, power-plant cooling-water outlet", "Treatment at source, discharge standards and continuous monitoring"],
          ["Non-point", "Fertiliser runoff, acid rain, parking-lot stormwater, eroded sediment", "Catchment planning, reduced application, buffers and runoff control"],
        ],
      },
    },
    {
      eyebrow: "Pollutant inventory",
      title: "Major water pollutants and their sources",
      table: {
        headers: ["Pollutant", "Representative source", "Primary mechanism of harm"],
        rows: [
          ["Pathogens", "Domestic sewage and animal excreta", "Infection and gastrointestinal disease"],
          ["Biodegradable organic waste", "Sewage, food processing, decaying plants and animals", "Microbial oxygen consumption and anaerobic decay"],
          ["Plant nutrients", "Fertilisers, detergents and sewage", "Algal bloom and eutrophication"],
          ["Toxic metals", "Mining, electroplating, chemical and metallurgical industry", "Cumulative organ and nervous-system toxicity"],
          ["Sediment", "Agriculture, construction and strip mining", "Turbidity, habitat burial and transport of adsorbed pollutants"],
          ["Pesticides/PCBs", "Agricultural runoff and industrial release", "Persistence, toxicity, endocrine/carcinogenic and food-web effects"],
          ["Radioactive substances", "Uranium mining, nuclear and medical waste", "Ionising-radiation exposure"],
          ["Heat", "Industrial cooling water and altered flow", "Lower oxygen solubility and thermal stress"],
          ["Petroleum", "Oil spills, runoff, refineries and shipping", "Surface films, toxicity and coating of organisms"],
        ],
      },
      image: {
        src: "/environmental-chemistry/water-organic-inorganic.webp",
        alt: "Dark source-derived comparison of inorganic metal pollutants and organic petroleum or PCB pollutants",
        caption: "Inorganic and organic contaminants require different chemical reasoning: speciation and precipitation for metals; persistence, oxidation and partitioning for organics.",
      },
    },
    {
      eyebrow: "Biological pollution",
      title: "Pathogens are not measured by BOD alone",
      paragraphs: [
        "Pathogens include bacteria, viruses, protozoa and other disease-causing agents. The supplied text names Escherichia coli and Streptococcus faecalis from human excreta as indicators associated with gastrointestinal disease. Modern monitoring often uses indicator organisms because testing every pathogen is impractical.",
        "A low BOD does not guarantee microbiological safety. Clear water can contain pathogens, while high BOD indicates biodegradable organic load rather than a specific organism. Safe drinking water therefore requires source protection, particle removal and reliable disinfection.",
        "Disinfection differs from sterilisation. Drinking-water treatment aims to inactivate disease-causing organisms to a safe level; it does not normally produce absolutely sterile water.",
      ],
      boxes: [
        {
          title: "JEE separation",
          body: "BOD answers how much oxygen microorganisms use to degrade organic matter. Coliform or pathogen indicators answer microbiological contamination. Turbidity answers suspended-particle content.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Dissolved oxygen",
      title: "Why oxygen is scarce in water",
      paragraphs: [
        "Air contains roughly 200,000 ppm O₂ by volume, while cold water may hold only about 10 ppm dissolved oxygen in the textbook comparison. Oxygen enters water from atmospheric reaeration and photosynthesis. It is consumed by respiration, oxidation of reduced chemicals and microbial degradation of organic matter.",
        "Gas solubility generally decreases as temperature rises, so thermal discharge can lower oxygen saturation while simultaneously increasing biological metabolic demand. Salinity also lowers oxygen solubility. Turbulence and surface contact increase reaeration.",
        "The supplied text states that fish growth is inhibited below about 6 ppm DO. This is a useful exam value, not a universal threshold for every species and temperature. Sensitive cold-water species require more oxygen than tolerant organisms.",
      ],
      flow: [
        "Organic matter enters water",
        "Aerobic microbes multiply",
        "Respiration consumes dissolved O₂",
        "DO falls below biological demand",
        "Fish and aerobic organisms are stressed",
        "Anaerobic decay produces foul-smelling reduced compounds",
      ],
    },
    {
      eyebrow: "BOD",
      title: "Biochemical oxygen demand measures biodegradable load",
      paragraphs: [
        "BOD is the amount of dissolved oxygen used by microorganisms to biologically oxidise biodegradable organic matter in a specified water sample under defined conditions and time. The higher the biodegradable load, the more oxygen is consumed and the higher the BOD.",
        "NCERT uses the exam-oriented comparison: clean water has BOD below about 5 ppm, while highly polluted water may have BOD 17 ppm or more. A measured BOD is not the amount of oxygen already present; it is oxygen demanded during the test. Thus polluted water commonly has high BOD but low in-situ DO.",
        "BOD depends on test duration, temperature, microbial seed and substances toxic to microbes. A toxic industrial sample can show deceptively low BOD because microorganisms are inhibited even though the sample is hazardous.",
      ],
      equations: [
        "BOD ≈ DO at start − DO after incubation  (with dilution/blank corrections)",
        "High biodegradable organic load → high BOD → faster environmental DO depletion",
      ],
      image: {
        src: "/environmental-chemistry/bod-oxygen-crisis.webp",
        alt: "Dark source-derived balance graphic comparing limited dissolved oxygen with biochemical oxygen demand",
        caption: "Water holds little oxygen compared with air. A moderate biodegradable load can therefore consume the available DO and shift the system toward anaerobic decay.",
      },
    },
    {
      eyebrow: "COD",
      title: "Chemical oxygen demand is broader and faster",
      paragraphs: [
        "COD estimates the oxygen equivalent of chemically oxidisable matter, commonly by refluxing a sample with strong dichromate in acid under defined conditions. It includes many substances that are biodegradable and many that are not degraded during the BOD test.",
        "For the same ordinary sample and compatible units, COD is generally greater than or equal to BOD because its chemical oxidation scope is broader. The difference COD − BOD gives a rough indication of slowly biodegradable or non-biodegradable oxidisable material, but it is not a complete toxicity analysis.",
        "COD and BOD report oxygen demand, not the identity of every pollutant. Metals, pathogens or a non-oxidisable toxic compound can remain important even if oxygen-demand values are modest.",
      ],
      table: {
        headers: ["Feature", "BOD", "COD"],
        rows: [
          ["Oxidation agent", "Microorganisms", "Strong chemical oxidant, commonly dichromate"],
          ["Main fraction measured", "Biodegradable organic matter", "Broader chemically oxidisable matter"],
          ["Time", "Several days in standard tests", "Hours"],
          ["Sensitivity", "Affected by microbial toxicity and seed", "Affected by chemical interferences"],
          ["Typical relation", "Usually lower", "Usually ≥ BOD"],
        ],
      },
    },
    {
      eyebrow: "Eutrophication",
      title: "Nutrient enrichment becomes oxygen starvation",
      paragraphs: [
        "Eutrophication is enrichment of a water body with plant nutrients, especially bioavailable nitrogen and phosphorus. Fertiliser runoff, sewage and phosphate-containing inputs stimulate excessive growth of algae and aquatic plants. The water may appear productive initially, but the dense biomass shades submerged plants and destabilises the ecosystem.",
        "Algal cells and plants respire continuously; when they die, microbial decomposition consumes oxygen. Surface blooms can also limit light and air-water exchange. DO falls, fish die, and anaerobic microorganisms produce reduced, foul-smelling compounds. Biodiversity decreases as tolerant species replace sensitive ones.",
        "Eutrophication is a process. The immediate nutrient input does not chemically consume all oxygen; the biological growth and decay it drives create the oxygen demand. Therefore a question stating that eutrophication increases DO or decreases BOD is generally false in the NCERT framework.",
      ],
      flow: [
        "Nitrate/phosphate enrichment",
        "Algal and plant bloom",
        "Light limitation and biomass death",
        "Microbial decomposition raises BOD",
        "Dissolved oxygen falls",
        "Fish kill, anaerobic products and biodiversity loss",
      ],
      image: {
        src: "/environmental-chemistry/eutrophication-cycle.webp",
        alt: "Dark source-derived circular diagram of nutrient input, algal bloom, oxygen depletion and anaerobic collapse",
        caption: "The damaging step is the oxygen demand generated by excessive biomass respiration and decay.",
      },
    },
    {
      eyebrow: "Chemical pollutants",
      title: "Metals, acids, salts, PCBs, pesticides and oil",
      paragraphs: [
        "Cadmium, mercury, lead and nickel can enter water from mining and industrial waste. Metals are not biologically destroyed and may accumulate, but toxicity depends on chemical form. pH, redox potential, complexing ligands and suspended particles determine whether a metal is dissolved, adsorbed or precipitated.",
        "Acid mine drainage forms when sulphide minerals such as pyrite are oxidised, producing sulphate, acidity and soluble metals. Acidic water dissolves minerals and pipe metals more readily. Chloride salts from road de-icing increase salinity and can affect freshwater organisms.",
        "PCBs are persistent, hydrophobic industrial chemicals formerly used in electrical equipment and other applications. They adsorb to sediment and organic matter and can bioaccumulate. Petroleum spills contain a mixture: volatile components evaporate, soluble toxic fractions dissolve, and heavier material coats surfaces and sediments.",
      ],
      equations: [
        "FeS₂ + O₂ + H₂O → Fe²⁺ + SO₄²⁻ + H⁺  (schematic acid generation)",
        "M(OH)₂(s) + 2H⁺ → M²⁺ + 2H₂O  (acid-enhanced metal dissolution)",
      ],
      boxes: [
        {
          title: "Total metal is not dissolved metal",
          body: "Filtration, digestion and speciation procedures answer different analytical questions. A result called total metal cannot automatically be interpreted as immediately bioavailable dissolved ion.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Control",
      title: "Control at source, pathway and receiving water",
      bullets: [
        "Collect and biologically treat sewage so organic load and pathogens are not discharged untreated.",
        "Optimise fertiliser timing and dose, maintain vegetated buffers and control erosion to reduce nutrient and sediment runoff.",
        "Segregate industrial streams; precipitate, adsorb, exchange or recover metals before discharge.",
        "Contain oil rapidly with booms and skimmers where appropriate; choose cleanup methods according to oil type and habitat.",
        "Cool or recirculate industrial water to reduce thermal shock.",
        "Protect wetlands and riparian zones that retain sediment and transform nutrients, while avoiding overload.",
        "Monitor DO, BOD, COD, pH, nutrients, pathogens, conductivity, turbidity and specific toxicants according to the source risk.",
      ],
    },
  ],
  examples: [
    {
      title: "Interpret four BOD samples",
      problem: "Samples A-D have BOD values 3, 18, 21 and 4 ppm. Which are highly polluted by the NCERT criterion?",
      steps: [
        "Clean water is below about 5 ppm.",
        "Highly polluted water may be 17 ppm or more.",
        "Values 18 and 21 exceed 17.",
      ],
      answer: "Samples B and C.",
    },
    {
      title: "Separate DO from BOD",
      problem: "A sewage-affected river has DO = 3 ppm and BOD = 20 ppm. Explain both values without contradiction.",
      steps: [
        "The 3 ppm DO is the oxygen currently present in river water.",
        "The 20 ppm BOD is the oxygen microorganisms would consume during the defined test.",
        "High demand has helped deplete the in-river oxygen.",
      ],
      answer: "Pollution commonly produces low DO and high BOD.",
    },
    {
      title: "Predict a thermal-discharge effect",
      problem: "A plant releases warm cooling water with no added organic matter. Why can fish still be stressed?",
      steps: [
        "Oxygen solubility decreases as water temperature increases.",
        "Fish and microbes often respire faster at higher temperature.",
        "Lower supply and higher demand narrow the oxygen margin.",
      ],
      answer: "Thermal pollution can lower DO availability and raise metabolic demand.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "Which is a non-point source?",
      options: ["Factory discharge pipe", "Municipal sewage outfall", "Agricultural runoff", "Laboratory drain outlet"],
      answer: "C",
      solution: "Runoff enters diffusely across land and varies with rainfall; the other options have identifiable outlets.",
    },
    {
      number: 2,
      tag: "BOD",
      question: "High BOD most directly indicates:",
      options: ["High biodegradable organic load", "High dissolved oxygen", "Absence of microbes", "Low nutrient content"],
      answer: "A",
      solution: "Microorganisms require more oxygen when more biodegradable organic matter is present.",
    },
    {
      number: 3,
      tag: "Multiple correct",
      question: "Which can lower dissolved oxygen?",
      options: ["Organic-waste decomposition", "Warm-water discharge", "Nighttime plant respiration", "Efficient reaeration"],
      answer: "A, B and C",
      solution: "Decomposition and respiration consume O₂; warming lowers solubility. Reaeration adds oxygen.",
    },
    {
      number: 4,
      tag: "Comparison",
      question: "For a typical wastewater sample, which relation is expected?",
      options: ["BOD > COD always", "COD ≥ BOD", "COD = DO", "BOD = pH"],
      answer: "B",
      solution: "Chemical oxidation covers biodegradable plus additional oxidisable matter, so COD is normally at least as large as BOD.",
    },
    {
      number: 5,
      tag: "Sequence",
      question: "Choose the correct eutrophication sequence.",
      options: ["Nutrients → bloom → decay → oxygen depletion", "Oxygen → nutrients → sterile water", "Acid rain → ozone hole → bloom", "Sedimentation → increasing DO only"],
      answer: "A",
      solution: "Nutrient enrichment drives biomass growth; respiration and decomposition raise oxygen demand and lower DO.",
    },
    {
      number: 6,
      tag: "JEE trap",
      question: "Which statement is false?",
      options: ["Low BOD alone proves pathogen-free water.", "Polluted water can have low DO.", "PCBs can be persistent organic pollutants.", "Metals can change speciation without being destroyed."],
      answer: "A",
      solution: "BOD measures biodegradable oxygen demand, not microbiological safety. Pathogen testing and disinfection remain necessary.",
    },
  ],
  recap: [
    "Point sources are traceable outlets; non-point sources are diffuse runoff and deposition.",
    "Pathogens, organic load, nutrients, metals, sediment, pesticides, heat and radiation are distinct pollutant classes.",
    "DO is oxygen present; BOD is biological oxygen demand.",
    "Clean water BOD <5 ppm and highly polluted BOD ≥17 ppm are NCERT exam values.",
    "COD is generally greater than or equal to BOD.",
    "Nutrient input → bloom → decomposition → high BOD → low DO → biodiversity loss.",
    "Warming lowers oxygen solubility and can intensify stress.",
    "pH and redox conditions control metal solubility and toxicity.",
  ],
};

export default function Part08() {
  return <EnvironmentalChemistryPart data={part08Data} />;
}
