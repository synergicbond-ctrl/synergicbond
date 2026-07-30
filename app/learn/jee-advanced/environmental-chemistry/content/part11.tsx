"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part11Data: PartData = {
  part: 11,
  title: "Industrial, Municipal and Hazardous Waste",
  subtitle: "Waste classification, source segregation, composting, digestion, recycling, incineration, landfill chemistry and safe management of hazardous and radioactive residues.",
  goals: [
    "Map industrial sectors to their characteristic wastes.",
    "Apply the prevention-reuse-recycling-recovery-disposal hierarchy.",
    "Compare composting, anaerobic digestion and incineration.",
    "Explain landfill leachate and methane formation.",
    "Recognise hazardous, biomedical, electronic and radioactive waste needs.",
    "Track residuals so pollution is not merely transferred.",
  ],
  sourceNote: "Source coverage: NCERT pp. 417-419; Essential Sheet pp. 11-12; Environmental Chemistry Theory pp. 190-191; The Chemical Strata pp. 7-9 and The Circular Chemistry Revolution pp. 2-5 were visually audited and selected dark diagrams were cleaned of footer branding.",
  heroImage: {
    src: "/environmental-chemistry/industrial-waste-matrix.webp",
    alt: "Dark source-derived matrix of biodegradable industrial waste, fly ash, slags, mud, tailings, gypsum and hazardous material",
    caption: "Industrial waste is process-specific. Correct management begins with chemical characterisation, not with one universal disposal route.",
  },
  sections: [
    {
      eyebrow: "Source map",
      title: "Industrial wastes reflect the raw material and process",
      table: {
        headers: ["Industry/source", "Characteristic waste in the prescribed text", "Potential management"],
        rows: [
          ["Cotton mills", "Organic fibre waste", "Segregation, recovery, composting or controlled biological treatment"],
          ["Food processing", "Biodegradable organic matter", "Anaerobic digestion, composting and wastewater treatment"],
          ["Paper/textile", "Cellulosic/fabric waste and process sludge", "Fibre recovery, biological treatment and controlled sludge management"],
          ["Thermal power plant", "Fly ash", "Particle capture, cement/concrete use where specification and leaching safety permit"],
          ["Iron and steel", "Blast-furnace slag and steel-melting slag", "Metal recovery and use in cement/construction after quality control"],
          ["Aluminium, zinc and copper", "Mud and tailings", "Metal recovery, lined storage, water control and rehabilitation"],
          ["Fertiliser", "Gypsum/phosphogypsum-type residue", "By-product use only after impurity/radiological evaluation"],
          ["Chemical/pharmaceutical/dye/pesticide", "Reactive, flammable, toxic or mixed hazardous waste", "Segregated treatment, recovery, destruction and secured disposal"],
        ],
      },
      paragraphs: [
        "Biodegradable and non-biodegradable are only the first distinction. A biodegradable sludge may contain toxic metals that prevent land application. A non-biodegradable mineral residue may be useful as a cement raw material if composition and leaching are controlled. Classification must include ignitability, corrosivity, reactivity, toxicity, infection and radioactivity.",
      ],
    },
    {
      eyebrow: "Hierarchy",
      title: "Prevent waste before trying to manage it",
      flow: [
        "Refuse unnecessary hazardous inputs",
        "Reduce material and energy use",
        "Reuse products and packaging",
        "Recycle materials",
        "Recover energy or useful chemicals",
        "Treat and dispose the unavoidable residue",
      ],
      paragraphs: [
        "The waste hierarchy is ordered. Prevention avoids raw-material extraction, processing energy and downstream disposal together. Reuse preserves more product value than breaking material down for recycling. Energy recovery is lower than material recovery because the original material is destroyed.",
        "A waste may become a by-product only when a reliable, safe use exists. Calling fly ash green does not guarantee safe use; specifications, dust control and leaching behaviour matter. Markets must not convert hazardous waste into diffuse exposure.",
      ],
      boxes: [
        {
          title: "Circularity is not endless recycling",
          body: "Material quality can degrade, additives can accumulate and energy is required. A circular system still needs prevention, safe chemistry and management of irrecoverable residues.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Life-cycle control",
      title: "Track material before, during and after production",
      paragraphs: [
        "Industrial pollution prevention begins before the waste outlet. Cleaner feedstocks reduce problematic elements entering the plant; process control improves conversion and prevents off-spec batches; in-process recovery returns solvent, water, heat or unreacted material; final treatment is reserved for the unavoidable residue.",
        "A life-cycle inventory should include fugitive air emissions, wastewater, solid residues, maintenance waste and abnormal releases. Moving a contaminant from a stack into scrubber sludge is useful containment, but the sludge remains part of the mass balance.",
      ],
      flow: [
        "Characterise feed and additives",
        "Prevent loss inside the process",
        "Recover useful material and heat",
        "Treat segregated residual streams",
        "Verify final product and disposal fate",
      ],
      image: {
        src: "/environmental-chemistry/industrial-waste-lifecycle.webp",
        alt: "Dark source-derived industrial waste life-cycle diagram from input selection to recovery and residual management",
        caption: "Industrial control is strongest when chemical characterisation and recovery are built into every stage rather than attached only at the outlet.",
      },
    },
    {
      eyebrow: "Municipal solid waste",
      title: "Segregation determines every downstream option",
      paragraphs: [
        "Domestic waste should be separated at source into wet biodegradable material, dry recyclable material, sanitary/biomedical-type household waste and hazardous items such as batteries, lamps, chemicals and electronic waste. Mixed waste contaminates compost, reduces recyclable value and exposes workers.",
        "The NCERT collection pathway moves waste from small household bins to community bins and then a disposal site, where biodegradable and non-biodegradable fractions are separated. A modern system improves this by segregating before collection and tracking materials to authorised processors.",
        "Polythene and metal scraps choke sewers. Animals may swallow plastic. Uncollected organic waste attracts vectors, produces odour and leachate, and can contaminate groundwater. Rag pickers and waste workers face cuts, infection, toxic dust and gas exposure when protection is absent.",
      ],
      image: {
        src: "/environmental-chemistry/waste-management-funnel.webp",
        alt: "Dark source-derived diagram of collection, biodegradable waste, composting and recycling routes",
        caption: "The simplified linear funnel works only when streams remain separated. Mixed waste sends recoverable material toward landfill and increases worker exposure.",
      },
    },
    {
      eyebrow: "Biological treatment",
      title: "Composting versus anaerobic digestion",
      table: {
        headers: ["Feature", "Aerobic composting", "Anaerobic digestion"],
        rows: [
          ["Oxygen", "Required", "Excluded"],
          ["Main products", "Stabilised compost, CO₂, H₂O and heat", "Biogas (CH₄ + CO₂) and digestate"],
          ["Best feed", "Source-separated food/yard and agricultural residues", "Wet organic waste, manure and sewage sludge"],
          ["Control variables", "Moisture, aeration, C:N ratio, temperature and turning", "Temperature, pH, loading, retention and toxic inhibitors"],
          ["Main benefit", "Soil amendment and volume reduction", "Energy recovery plus stabilisation"],
          ["Risk", "Odour, flies or incomplete sanitation if poorly managed", "Methane leakage, odour and unsafe digestate if poorly managed"],
        ],
      },
      paragraphs: [
        "A compost pile becomes anaerobic and foul-smelling when it is waterlogged or poorly aerated. Bulking agents, correct moisture and turning maintain oxygen. Thermophilic stages can reduce pathogens and weed seeds when time-temperature conditions are adequate.",
        "Anaerobic digestion proceeds through hydrolysis, acidogenesis, acetogenesis and methanogenesis. Methanogens convert acetate or H₂/CO₂ to methane. Biogas can produce heat or electricity. The remaining digestate contains nutrients but must be checked for pathogens, plastics, metals and persistent organics.",
      ],
      equations: [
        "Organic matter + O₂ → CO₂ + H₂O + biomass + heat  (composting)",
        "CH₃COO⁻ + H⁺ → CH₄ + CO₂  (acetoclastic methanogenesis)",
        "CO₂ + 4H₂ → CH₄ + 2H₂O  (hydrogenotrophic methanogenesis)",
      ],
    },
    {
      eyebrow: "Thermal treatment",
      title: "Incineration destroys organics but creates residuals",
      paragraphs: [
        "Controlled incineration uses high temperature, sufficient oxygen, mixing and residence time to oxidise organic waste. It can reduce volume greatly and destroy pathogens and many toxic organic compounds. The source material notes temperatures usually above 1000 °C for difficult wastes.",
        "Incomplete combustion forms CO, soot and organic products. Chlorinated waste can generate acid gases and, under poor conditions, persistent by-products. Flue-gas treatment may include particle capture, acid-gas scrubbing, NOₓ control and activated carbon. Bottom ash and fly ash remain; fly ash can concentrate volatile metals and requires careful disposal.",
        "Open burning is not controlled incineration. It lacks temperature and gas cleaning and exposes communities directly. Energy recovery can improve resource efficiency, but it does not make unsuitable mixed hazardous waste harmless.",
      ],
      equations: [
        "CₓHᵧO_z + O₂ → CO₂ + H₂O  (ideal complete oxidation)",
        "Organic Cl + combustion → HCl(g) + other products  (acid-gas control required)",
      ],
      boxes: [
        {
          title: "Mass balance",
          body: "Incineration converts much organic carbon to gas and leaves mineral ash. The waste volume decreases, but atoms do not disappear; emissions and ash must be monitored.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Landfill chemistry",
      title: "Leachate and landfill gas",
      paragraphs: [
        "A sanitary landfill is an engineered containment system with liners, leachate collection, cover, gas management and monitoring. It is not an open dump. Water percolating through waste dissolves organic matter, ammonium, salts and metals to form leachate.",
        "After oxygen is consumed, anaerobic decomposition produces CH₄ and CO₂. Uncontrolled methane can migrate, create explosion risk and contribute to warming. Gas wells collect it for flaring or energy use. Flaring converts CH₄ to CO₂, reducing warming impact per carbon atom but still releasing fossil/biogenic carbon according to source.",
        "Liners reduce migration but require long-term integrity and monitoring. Leachate needs treatment; sending it untreated to a drain merely transfers waste to water.",
      ],
      flow: [
        "Waste placement and compaction",
        "Rainwater infiltration",
        "Leachate generation and collection",
        "Anaerobic CH₄/CO₂ formation",
        "Gas capture and use/flaring",
        "Long-term groundwater monitoring",
      ],
      image: {
        src: "/environmental-chemistry/waste-systemic-hazards.webp",
        alt: "Dark source-derived cutaway showing worker exposure, blocked infrastructure and groundwater contamination from poor waste management",
        caption: "Poor waste handling propagates through three zones: occupational exposure, blocked urban infrastructure and leachate-contaminated groundwater.",
      },
    },
    {
      eyebrow: "Special wastes",
      title: "Biomedical, electronic and hazardous chemical waste",
      table: {
        headers: ["Waste", "Distinct hazard", "Core management principle"],
        rows: [
          ["Biomedical", "Infectious agents, sharps, pharmaceuticals and anatomical material", "Segregate at generation; disinfect/treat with route matched to category"],
          ["E-waste", "Lead, mercury, cadmium, brominated additives and recoverable metals", "Authorised dismantling and material recovery with worker protection"],
          ["Solvents", "Flammability, toxicity and VOC emission", "Substitute, segregate, recover by distillation or controlled destruction"],
          ["Acid/alkali", "Corrosivity and violent incompatibility", "Compatible storage, neutralisation where appropriate and controlled treatment"],
          ["Reactive waste", "Explosion, polymerisation, gas release or water reactivity", "Never mix unknowns; stabilise under expert control"],
          ["Persistent organic waste", "Long-range transport, bioaccumulation and chronic toxicity", "High-destruction-efficiency treatment and secured residual disposal"],
        ],
      },
      paragraphs: [
        "Mixing wastes can create a new hazard: acid plus cyanide can release HCN; acid plus sulphide can release H₂S; oxidisers plus organics can ignite. Compatibility and labelling are chemical safety requirements, not administrative details.",
      ],
    },
    {
      eyebrow: "Radioactive waste",
      title: "Chemical treatment cannot remove nuclear instability",
      paragraphs: [
        "Radioactivity arises from unstable nuclei. Chemical reactions alter electrons and bonding but do not ordinarily change nuclear decay constants. Chemical separation can concentrate radionuclides, remove them from water or immobilise them in a stable matrix, but it does not make the nuclei non-radioactive.",
        "Management depends on activity, half-life, radiation type and heat generation. Short-lived waste may be stored for decay. Long-lived high-level waste requires shielding, cooling, immobilisation and isolation over long periods. Mining waste can contaminate water with uranium-series radionuclides.",
        "Half-life calculations use exponential decay. Ten half-lives reduce activity to about 1/1024 of the initial value, not to zero. Shielding reduces exposure but does not change activity.",
      ],
      equations: [
        "N = N₀(1/2)^(t/t₁⁄₂)",
        "A = λN ; λ = 0.693/t₁⁄₂",
      ],
    },
    {
      eyebrow: "Recovery",
      title: "Waste-to-resource with safeguards",
      paragraphs: [
        "The source describes fuel from plastic waste as high-octane, lead-free green fuel; clothes from recycled plastic; electricity from garbage; and methane-rich biogas after removal of metals, plastic, glass and paper. These are resource-recovery examples, but each needs emissions, energy and product-quality evaluation.",
        "Pyrolysis heats plastic with little oxygen and produces gas, oil and char. Product quality depends on polymer mixture and additives; PVC introduces chlorine, and metals/brominated additives complicate residues. Mechanical recycling is generally preferable when clean material can retain value.",
        "The strongest system combines source prevention with safe recovery. Advanced waste management treats remaining unavoidable output; green chemistry prevents hazardous output at the molecular-design stage.",
      ],
      image: {
        src: "/environmental-chemistry/trash-to-grid.webp",
        alt: "Dark source-derived diagram showing plastic fuel recovery and organic-waste biogas generation",
        caption: "Recovery can produce fuel, methane and nutrient-rich residue, but feed segregation, emission control and residue testing determine whether the pathway is genuinely beneficial.",
      },
    },
  ],
  examples: [
    {
      title: "Radioactive decay",
      problem: "A radionuclide has a half-life of 8 days. What fraction remains after 32 days?",
      steps: [
        "Number of half-lives = 32/8 = 4.",
        "Remaining fraction = (1/2)⁴.",
      ],
      answer: "1/16, or 6.25%, remains.",
    },
    {
      title: "Choose biological treatment",
      problem: "A source-separated wet food waste has high moisture and energy-recovery potential. Composting or anaerobic digestion?",
      steps: [
        "High moisture suits a closed anaerobic reactor.",
        "Digestion produces CH₄-rich biogas.",
        "Digestate remains and must be stabilised/tested.",
      ],
      answer: "Anaerobic digestion is attractive for energy recovery; composting remains suitable with bulking and aeration.",
    },
    {
      title: "Detect an incompatible mixture",
      problem: "Why must acidic waste not be mixed blindly with sulphide-containing waste?",
      steps: [
        "Acid protonates sulphide.",
        "Volatile H₂S gas can be released.",
        "H₂S is toxic and can accumulate in enclosed spaces.",
      ],
      answer: "The mixture can release toxic H₂S gas.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Industry",
      question: "Thermal power plants characteristically generate:",
      options: ["Fly ash", "Only biodegradable cotton fibre", "Only methane", "Fluorapatite"],
      answer: "A",
      solution: "Mineral matter in coal becomes bottom ash and entrained fly ash; the latter requires particle capture.",
    },
    {
      number: 2,
      tag: "Hierarchy",
      question: "Which is preferred highest in the waste hierarchy?",
      options: ["Open dumping", "Prevention", "Incineration", "Landfill"],
      answer: "B",
      solution: "Preventing waste avoids raw-material, processing and disposal burdens before they arise.",
    },
    {
      number: 3,
      tag: "Multiple correct",
      question: "Anaerobic digestion can produce:",
      options: ["CH₄", "CO₂", "Digestate", "Molecular oxygen as the main product"],
      answer: "A, B and C",
      solution: "Biogas contains methane and carbon dioxide, while a nutrient-containing digestate remains.",
    },
    {
      number: 4,
      tag: "Incineration",
      question: "Which statement is false?",
      options: ["Incineration leaves ash.", "Flue gas may need scrubbing.", "Open burning is equivalent to controlled incineration.", "Sufficient oxygen and temperature improve destruction."],
      answer: "C",
      solution: "Open burning lacks controlled temperature, residence time and emission treatment.",
    },
    {
      number: 5,
      tag: "Landfill",
      question: "Landfill methane forms mainly under:",
      options: ["Anaerobic conditions", "Intense UV only", "Complete sterilisation", "Dry pure oxygen"],
      answer: "A",
      solution: "After oxygen is depleted, anaerobic microbial pathways convert organic matter to CH₄ and CO₂.",
    },
    {
      number: 6,
      tag: "Radioactivity",
      question: "Chemical precipitation of a radionuclide from water:",
      options: ["Destroys its nucleus", "Transfers and concentrates it into a solid phase", "Sets half-life to zero", "Creates oxygen"],
      answer: "B",
      solution: "Precipitation changes chemical form and location. Nuclear instability and half-life remain.",
    },
  ],
  recap: [
    "Industrial waste must be classified by composition and hazard, not only biodegradability.",
    "Prevention and reuse rank above recycling, energy recovery and disposal.",
    "Composting is aerobic; digestion is anaerobic and produces CH₄-rich biogas.",
    "Incineration needs high temperature, oxygen, gas cleaning and ash management.",
    "Sanitary landfills require liners, leachate collection, gas capture and monitoring.",
    "Special wastes must be segregated to prevent incompatibility and worker exposure.",
    "Chemical treatment can separate radionuclides but cannot destroy nuclear radioactivity.",
    "Recovery is useful only when emissions and residuals are controlled.",
  ],
};

export default function Part11() {
  return <EnvironmentalChemistryPart data={part11Data} />;
}
