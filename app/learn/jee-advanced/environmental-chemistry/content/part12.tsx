"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part12Data: PartData = {
  part: 12,
  title: "Green Chemistry and Circular Molecular Design",
  subtitle: "The twelve principles, prevention metrics, atom economy, catalytic pathways, safer solvents, energy efficiency, renewable feedstocks and the prescribed real-world examples.",
  goals: [
    "Distinguish green chemistry from pollution control and environmental chemistry.",
    "Use atom economy, E-factor, PMI, yield and reaction mass efficiency correctly.",
    "Explain all twelve green-chemistry principles with chemical examples.",
    "Evaluate catalysts, solvents, feedstocks and energy demands across a life cycle.",
    "Master the NCERT dry-cleaning, bleaching, Wacker and tamarind-kernel examples.",
    "Detect greenwashing and trade-offs instead of accepting a single favourable metric.",
  ],
  sourceNote: "Source coverage: NCERT pp. 419-421; Essential Sheet p. 12; Environmental Chemistry Theory pp. 191-192; Environmental Chemistry Architecture pp. 11-13 and The Circular Chemistry Revolution pp. 5-10 were visually audited. White-background or branded slides were redrawn or omitted; the included figures are dark and footer-logo-free.",
  heroImage: {
    src: "/environmental-chemistry/green-chemistry-loop.webp",
    alt: "Dark circular green-chemistry diagram linking molecular design, clean synthesis, use, recovery and redesign",
    caption: "Green chemistry moves intervention upstream: design the molecule and process so hazards and waste are avoided throughout the life cycle.",
  },
  sections: [
    {
      eyebrow: "Definition",
      title: "Green chemistry prevents hazard at source",
      paragraphs: [
        "Green chemistry is the design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances. It is preventive and molecular: the chemist changes the reaction route, reagent, catalyst, solvent, product or operating condition before pollution is produced.",
        "Environmental chemistry studies chemical processes in air, water, soil and living systems, including pollutant sources, transformations, transport and effects. Pollution control treats or captures material after it has formed. Green chemistry asks whether that material needed to be formed at all.",
        "A process is not automatically green because it uses a natural reagent, gives a high percentage yield or produces a biodegradable product. Feedstock cultivation, toxicity, solvent mass, energy, separation, transport, emissions, durability and end-of-life all matter. The correct language is comparative: greener than a stated alternative under stated boundaries.",
      ],
      table: {
        headers: ["Approach", "When it acts", "Typical action", "Limitation if used alone"],
        rows: [
          ["Environmental monitoring", "After release or during exposure", "Measure SO₂, BOD, pesticide or metal concentration", "Identifies the problem but does not prevent it"],
          ["End-of-pipe control", "After pollutant formation", "Scrubber, precipitator, effluent treatment", "Consumes resources and leaves a captured residue"],
          ["Waste management", "After product or residue exists", "Reuse, recycle, compost, incinerate, landfill", "Cannot recover every material indefinitely"],
          ["Green chemistry", "At molecule and process design", "Safer reagent, catalytic route, benign solvent, high atom economy", "Still needs life-cycle evidence and responsible operation"],
      ]},
      boxes: [
        {
          title: "JEE distinction",
          body: "A catalytic, high-atom-economy synthesis is a green-chemistry strategy. Installing a scrubber on an unchanged polluting process is pollution control, though it remains environmentally necessary.",
          tone: "jee",
        },
        {
          title: "Inherently safer",
          body: "A hazard that is absent cannot leak. Replacing a toxic reagent is usually more robust than relying only on perfect containment forever.",
          tone: "green",
        },
      ],
    },
    {
      eyebrow: "Framework",
      title: "The twelve principles as design questions",
      table: {
        caption: "Anastas and Warner's principles, translated into exam-ready decisions",
        headers: ["#", "Principle", "Design question and chemical meaning"],
        rows: [
          ["1", "Prevention", "Can waste be avoided instead of treated or cleaned after formation?"],
          ["2", "Atom economy", "What fraction of reactant atoms enters the desired product?"],
          ["3", "Less hazardous synthesis", "Can the route use and generate substances with little toxicity to humans and ecosystems?"],
          ["4", "Design safer chemicals", "Can the product perform its function with lower toxicity?"],
          ["5", "Safer solvents and auxiliaries", "Can solvent, separation agent or protecting group be eliminated or replaced?"],
          ["6", "Energy efficiency", "Can the reaction run near ambient temperature and pressure?"],
          ["7", "Renewable feedstocks", "Can a technically and environmentally suitable renewable raw material replace a depleting one?"],
          ["8", "Reduce derivatives", "Can protection, deprotection, temporary modification and activation be avoided?"],
          ["9", "Catalysis", "Can a selective catalyst replace a stoichiometric reagent and suppress by-products?"],
          ["10", "Design for degradation", "Can the product break into innocuous substances after its useful life?"],
          ["11", "Real-time analysis", "Can the process detect and prevent hazardous by-product formation while running?"],
          ["12", "Inherently safer chemistry", "Can substance and form be chosen to minimise fire, explosion and accidental release?"],
        ],
      },
      paragraphs: [
        "The principles interact. A catalyst can lower activation energy, increase selectivity, reduce temperature and improve waste metrics simultaneously. But no principle excuses another: a renewable feedstock processed with a persistent toxic solvent is not green merely because its carbon was recently biogenic.",
      ],
    },
    {
      eyebrow: "Quantification",
      title: "Atom economy is theoretical incorporation, not experimental yield",
      paragraphs: [
        "Atom economy is calculated from the balanced stoichiometric equation. It compares the molar mass of the desired product with the sum of molar masses of all stoichiometric reactants. Catalysts are normally excluded because they are not consumed stoichiometrically. A reaction can have 100% yield but poor atom economy when a large leaving group becomes waste.",
        "Percentage yield compares actual product obtained with the theoretical product possible from the limiting reactant. It measures conversion and recovery, not where all reactant atoms went. Addition and rearrangement reactions are often atom-economical; substitution and elimination frequently generate stoichiometric salts or small-molecule by-products.",
      ],
      equations: [
        "Atom economy (%) = [νₚM(desired product) / ΣνᵣM(reactants)] × 100",
        "Percentage yield = (actual amount / theoretical amount) × 100",
        "Reaction mass efficiency (%) = [mass of isolated product / mass of reactants charged] × 100",
      ],
      table: {
        headers: ["Reaction type", "Representative equation", "Atom-economy tendency"],
        rows: [
          ["Addition", "CH₂=CH₂ + H₂ → CH₃CH₃", "100% when there is one desired product"],
          ["Rearrangement", "A → B", "Usually 100%; formula is unchanged"],
          ["Substitution", "R–X + Nu⁻ → R–Nu + X⁻", "Lower because leaving-group material becomes by-product"],
          ["Elimination", "R–CH₂–CH₂–X → alkene + HX", "Lower because HX or a salt is expelled"],
          ["Condensation", "Acid + alcohol → ester + H₂O", "Less than 100% because water is a co-product"],
        ],
      },
      boxes: [
        {
          title: "Do not multiply blindly",
          body: "Atom economy × yield is sometimes used as a rough combined indicator, but it still ignores solvent, catalyst, work-up water and energy. State the metric being calculated.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Process metrics",
      title: "E-factor and PMI expose the hidden mass",
      paragraphs: [
        "The environmental factor, or E-factor, is the mass of waste generated per mass of product. Lower is better; zero would mean every input leaves as product and no waste is counted. Whether water is included must be stated because aqueous work-up can dominate mass.",
        "Process mass intensity, PMI, is the total mass of all materials used divided by product mass. With identical boundaries, PMI = E-factor + 1 because product is included in PMI but excluded from waste. Solvents and water often outweigh stoichiometric reactants, so solvent recovery and avoiding dilute operation can matter more than a small improvement in theoretical atom economy.",
        "Mass metrics do not measure toxicity. One gram of a persistent bioaccumulative toxic substance may matter more than kilograms of clean water. Energy use and carbon intensity are also separate. A credible assessment uses several indicators.",
      ],
      equations: [
        "E-factor = mass of waste / mass of isolated product",
        "PMI = total mass of all input materials / mass of isolated product",
        "For the same system boundary: PMI = E-factor + 1",
        "Carbon efficiency (%) = carbon in desired product / carbon in reactants × 100",
      ],
      table: {
        headers: ["Metric", "Rewards", "Does not by itself measure"],
        rows: [
          ["Atom economy", "Stoichiometric incorporation", "Actual yield, solvent, toxicity, energy"],
          ["Yield", "Extent of obtaining theoretical product", "Co-product mass or hazard"],
          ["E-factor", "Low waste per product", "Intrinsic toxicity or energy"],
          ["PMI", "Low total material use", "Renewability or environmental fate"],
          ["Life-cycle assessment", "Burden across defined stages and impact categories", "Absolute certainty; results depend on data and boundary"],
        ],
      },
    },
    {
      eyebrow: "Catalysis",
      title: "Catalysts improve selectivity and lower energy barriers",
      paragraphs: [
        "A catalyst supplies an alternative pathway with lower activation energy. It changes rate, not the thermodynamic equilibrium constant. A selective catalyst directs reactants toward the desired product, reducing purification and by-product formation. It is regenerated in the catalytic cycle but can be deactivated or lost in practice.",
        "Homogeneous catalysts offer intimate molecular contact and high selectivity but can be difficult to separate. Heterogeneous catalysts are often easy to recover and use continuously, though surface mass transfer and deactivation matter. Enzymes operate with remarkable selectivity under mild conditions but require a compatible temperature, pH and solvent environment.",
        "Catalysis is preferable to a stoichiometric activating reagent only after considering catalyst manufacture, loading, toxicity and recovery. A scarce toxic metal dispersed into product can offset process benefits.",
      ],
      equations: [
        "Uncatalysed: reactants → high-energy transition state → products",
        "Catalysed: reactants ⇌ catalyst-bound intermediates → products + regenerated catalyst",
      ],
      structures: [
        {
          name: "Hydrogenation",
          formula: "C=C + H₂ —cat.→ C–C",
          note: "An addition route can be atom-economical and selective when over-reduction is controlled.",
        },
        {
          name: "Oxidation",
          formula: "Substrate + H₂O₂ —cat.→ oxidised product + H₂O",
          note: "Hydrogen peroxide gives water as its ideal reduction product, but selectivity remains essential.",
        },
        {
          name: "Biocatalysis",
          formula: "Substrate —enzyme→ one stereoisomer",
          note: "High chemo-, regio- and stereoselectivity can reduce protecting groups and separations.",
        },
      ],
    },
    {
      eyebrow: "Solvents and energy",
      title: "Auxiliaries can dominate the footprint",
      paragraphs: [
        "Solvents provide heat transfer, mixing and selectivity, but are often used in the largest mass. The greenest solvent is no solvent when safe and technically feasible. Otherwise, selection considers toxicity, volatility, flammability, persistence, worker exposure, source and recovery—not merely whether the solvent is organic or aqueous.",
        "Water is abundant and non-flammable, but water-intensive processes can require heating, pumping, drying and wastewater treatment. Supercritical CO₂ is non-flammable and leaves little solvent residue after depressurisation, yet pressurisation needs equipment and energy. Ionic liquids have negligible vapour pressure but may be persistent or toxic; low volatility is not equivalent to harmlessness.",
        "Heating and cooling consume energy and may create thermal hazards. Reactions near ambient conditions, heat integration, microwave or photochemical activation, and continuous processing can help in suitable systems. Energy source and scale determine the benefit.",
      ],
      table: {
        headers: ["Option", "Possible advantage", "Question that must still be asked"],
        rows: [
          ["Water", "Non-flammable, inexpensive", "Does isolation require energy-intensive drying and contaminated-water treatment?"],
          ["Liquid/supercritical CO₂", "Low residue, recyclable, replaces some chlorinated solvents", "What pressure and compression energy are needed?"],
          ["Bio-derived solvent", "Potential renewable carbon", "Is it toxic, land-intensive or difficult to recover?"],
          ["Solvent-free process", "Low auxiliary mass", "Can heat and mixing be controlled safely at scale?"],
          ["Recovered solvent", "Avoids virgin manufacture and waste", "What purity and energy are required for recovery?"],
        ],
      },
    },
    {
      eyebrow: "Molecular fate",
      title: "Performance, safety and degradation must be designed together",
      paragraphs: [
        "A safer chemical performs its intended function while reducing intrinsic toxicity. Exposure control remains important, but molecular design may reduce bioavailability, receptor binding or persistence. The product must not fail so quickly that repeated replacement creates more material use.",
        "Design for degradation means that after function is complete, the product should transform into substances that do not persist or bioaccumulate. Degradable does not mean it disappears everywhere: biodegradation depends on microorganisms, oxygen, moisture, temperature and chemical structure. Fragmentation of plastic into microplastics is not complete mineralisation.",
        "Renewable feedstocks can replenish on a human timescale, but renewability alone says nothing about pesticide use, fertiliser runoff, biodiversity, land competition or process efficiency. Waste biomass and carbon dioxide can be valuable feedstocks when capture, conversion energy and product fate are favourable.",
      ],
      flow: [
        "Define required function",
        "Identify hazard mechanism",
        "Design lower hazard and adequate performance",
        "Predict environmental transformation",
        "Test products and degradation products",
        "Revise using life-cycle evidence",
      ],
    },
    {
      eyebrow: "Prescribed example 1",
      title: "Dry cleaning with liquid carbon dioxide",
      paragraphs: [
        "Tetrachloroethene, Cl₂C=CCl₂, has been widely used for dry cleaning because it dissolves oils and is non-flammable, but exposure and environmental concerns motivate substitution. The prescribed text describes liquid CO₂ with a suitable detergent as a replacement, reducing use of a chlorinated solvent.",
        "Carbon dioxide becomes a dense liquid under pressure and can penetrate fabrics. When pressure is released, it becomes a gas, helping solvent separation and recycling. The detergent assists removal of polar or particulate soil. The process illustrates safer solvent selection and recycling, not a claim that every kilogram of compressed CO₂ is impact-free.",
      ],
      equations: [
        "CO₂(g) ⇌ CO₂(l)  (compression and cooling)",
      ],
      boxes: [
        {
          title: "NCERT fact",
          body: "Liquid CO₂, with a suitable detergent, is presented as a replacement for halogenated solvent in dry cleaning.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Prescribed example 2",
      title: "Hydrogen peroxide for bleaching",
      paragraphs: [
        "Chlorine-based bleaching can generate chlorinated by-products when reactive chlorine meets organic matter. Hydrogen peroxide is used as a bleaching and oxidising agent for clothes and paper. Its ideal decomposition products are water and oxygen, which makes the reagent attractive when the desired oxidation is selective.",
        "Hydrogen peroxide is still a strong oxidant. Concentrated solutions can burn, decompose vigorously or react dangerously with contaminants. Green chemistry compares the controlled process with alternatives; it does not remove the need for safety.",
      ],
      equations: [
        "2H₂O₂ → 2H₂O + O₂",
        "H₂O₂ + coloured chromophore → oxidised, less-conjugated products",
      ],
    },
    {
      eyebrow: "Prescribed example 3",
      title: "Ethanal by an aqueous catalytic Wacker-type route",
      paragraphs: [
        "The text contrasts an older route involving mercury(II) sulfate with a modern catalytic process in aqueous medium. Ethene is oxidised to ethanal using Pd(II)/Cu(II) catalysis; oxygen ultimately reoxidises the catalytic system. The net reaction incorporates ethene and oxygen into the desired product with water as reaction medium.",
        "In the catalytic cycle, Pd(II) activates ethene and is reduced to Pd(0). Cu(II) reoxidises Pd(0), and oxygen reoxidises Cu(I). Catalysts circulate rather than appearing in the net equation. This is a classic example of catalytic oxidation, reduced stoichiometric heavy-metal waste and aqueous processing.",
      ],
      equations: [
        "2CH₂=CH₂ + O₂ → 2CH₃CHO  (overall)",
        "Pd⁰ + 2Cu²⁺ → Pd²⁺ + 2Cu⁺",
        "4Cu⁺ + O₂ + 4H⁺ → 4Cu²⁺ + 2H₂O",
      ],
      boxes: [
        {
          title: "Mechanism caution",
          body: "Catalysts do not alter the balanced net consumption. Do not add PdCl₂ or CuCl₂ as stoichiometric reactants when calculating atom economy from the ideal overall equation.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Prescribed example 4",
      title: "Tamarind-seed-kernel powder in municipal water treatment",
      paragraphs: [
        "The prescribed material describes powder from tamarind seed kernels as a coagulating/flocculating aid for removing suspended impurities from municipal and industrial wastewater, replacing alum in a stated example. Natural polymers can bridge destabilised particles and form settleable flocs.",
        "Coagulation and disinfection are different. A plant-derived coagulant may lower turbidity but does not by itself guarantee pathogen destruction or removal of dissolved toxic ions. Dose, source variability, residual organic load, sludge safety and microbial quality must be validated.",
      ],
      flow: [
        "Disperse coagulant",
        "Destabilise suspended colloids",
        "Bridge particles into flocs",
        "Settle or filter flocs",
        "Apply remaining treatment and disinfection",
      ],
    },
    {
      eyebrow: "Systems view",
      title: "From a linear waste economy to circular chemistry",
      paragraphs: [
        "A linear system extracts, manufactures, uses and discards. A circular system first eliminates unnecessary products and hazardous inputs, then keeps products and materials at their highest practical value through durability, repair, reuse, remanufacture and recycling. Biological nutrients may return safely to biological cycles; technical materials require controlled recovery.",
        "Circularity depends on molecular information. Mixed polymers, pigments, flame retardants and multilayer structures can defeat recycling. Design for disassembly, material passports, compatible additives and product take-back can preserve value. Persistent toxic chemicals must not be circulated indefinitely.",
        "Green chemistry and the circular economy meet at design: a safe, separable, repairable product made by a selective low-waste process is more circular than a hazardous composite that is nominally collected but cannot be recovered.",
      ],
      image: {
        src: "/environmental-chemistry/waste-to-green-chemistry.webp",
        alt: "Original dark transition from linear waste generation and end-of-pipe control to circular preventive green chemistry",
        caption: "Original dark redraw of the source concept: the strategic shift is upstream—from managing residues to preventing hazardous material and preserving value by design.",
      },
    },
    {
      eyebrow: "Evaluation",
      title: "A compact anti-greenwashing checklist",
      table: {
        headers: ["Claim", "Evidence to request"],
        rows: [
          ["Natural", "Chemical identity, dose, toxicity, land and water burden"],
          ["Biodegradable", "Conditions, time, extent of mineralisation and degradation products"],
          ["Recyclable", "Actual collection, separation, recycling yield and market"],
          ["Carbon-neutral", "System boundary, time horizon, land-use change and energy source"],
          ["Zero waste", "Mass balance including water, air emissions and off-site residue"],
          ["Non-toxic", "Hazard endpoints, exposure route, vulnerable populations and chronic effects"],
          ["High yield", "Atom economy, solvent mass, work-up, energy and purity"],
        ],
      },
      paragraphs: [
        "The best answer in an advanced examination usually identifies both the benefit and the missing boundary. Green chemistry is evidence-based optimisation under constraints, not a list of labels.",
      ],
    },
  ],
  examples: [
    {
      title: "Atom economy of ethanal formation",
      problem: "Calculate the atom economy for 2C₂H₄ + O₂ → 2CH₃CHO.",
      steps: [
        "Molar masses: C₂H₄ = 28, O₂ = 32 and CH₃CHO = 44 g mol⁻¹.",
        "Total reactant mass = 2(28) + 32 = 88.",
        "Desired product mass = 2(44) = 88.",
        "Atom economy = 88/88 × 100.",
      ],
      answer: "100% for the ideal overall reaction.",
    },
    {
      title: "PMI and E-factor",
      problem: "A process uses 20 kg reactants, 75 kg solvent and 5 kg water to isolate 10 kg product. No material is recycled within the stated boundary. Find PMI and E-factor.",
      steps: [
        "Total input = 20 + 75 + 5 = 100 kg.",
        "PMI = 100/10 = 10.",
        "Waste = total input − product = 90 kg.",
        "E-factor = 90/10 = 9; equivalently PMI − 1.",
      ],
      answer: "PMI = 10 and E-factor = 9.",
    },
    {
      title: "Compare two routes",
      problem: "Route A has 90% atom economy, 50% isolated yield and uses 100 kg toxic solvent per kg product. Route B has 80% atom economy, 90% yield and uses 2 kg recoverable benign solvent per kg product. Can atom economy alone identify the greener route?",
      steps: [
        "Atom economy favours A only at the balanced-equation level.",
        "Yield and solvent mass strongly favour B.",
        "Hazard, recovery energy, catalyst and full life cycle are still required.",
      ],
      answer: "No. Multiple process and hazard metrics are required; the data given make B plausibly greener, not conclusively so.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "Which action most directly expresses green chemistry?",
      options: ["Capture SO₂ after it forms", "Replace a stoichiometric toxic oxidant with a selective catalytic H₂O₂ process", "Dilute effluent before discharge", "Move hazardous waste to another site"],
      answer: "B",
      solution: "The route is redesigned to avoid hazardous reagent and waste at source. Capture and disposal are downstream controls.",
    },
    {
      number: 2,
      tag: "Multiple correct",
      question: "Which quantities can be improved by a highly selective catalyst?",
      options: ["Yield", "Energy demand", "By-product mass", "Thermodynamic equilibrium constant"],
      answer: "A, B and C",
      solution: "A catalyst can increase rate and selectivity at lower temperature. It does not change ΔG° or the equilibrium constant.",
    },
    {
      number: 3,
      tag: "Numerical",
      question: "For A + 2B → P + Q, the molar masses are A = 40, B = 30 and desired P = 75 g mol⁻¹. Calculate atom economy for P.",
      answer: "75%",
      solution: "Reactant mass = 40 + 2(30) = 100. Atom economy = 75/100 × 100 = 75%.",
    },
    {
      number: 4,
      tag: "Assertion–reason",
      question: "Assertion: A 100%-yield reaction need not be green. Reason: Yield alone does not count stoichiometric by-products, solvent, toxicity or energy.",
      options: ["Both true; reason explains assertion", "Both true; no explanation", "Assertion true; reason false", "Assertion false; reason true"],
      answer: "A",
      solution: "A high yield can coexist with poor atom economy and large hazardous process mass.",
    },
    {
      number: 5,
      tag: "NCERT",
      question: "The prescribed green dry-cleaning example uses:",
      options: ["Liquid CO₂ with a suitable detergent", "Concentrated H₂SO₄", "Ozone alone", "Mercury metal"],
      answer: "A",
      solution: "Liquid carbon dioxide is presented as a replacement for a halogenated dry-cleaning solvent.",
    },
    {
      number: 6,
      tag: "Concept",
      question: "If PMI = 6 for a boundary that includes all inputs, the corresponding E-factor is:",
      options: ["0", "5", "6", "7"],
      answer: "B",
      solution: "For identical boundaries, PMI = E-factor + 1, so E-factor = 5.",
    },
  ],
  recap: [
    "Green chemistry prevents hazardous substance use and generation at the design stage.",
    "Atom economy comes from the balanced equation; yield comes from experimental product recovery.",
    "PMI includes product; E-factor counts waste. Under identical boundaries, PMI = E + 1.",
    "Catalysts change pathway and rate, not equilibrium thermodynamics.",
    "Solvent, water, separation and energy can dominate a process footprint.",
    "Renewable, natural and biodegradable are not complete environmental assessments.",
    "Know liquid CO₂ dry cleaning, H₂O₂ bleaching, aqueous catalytic ethanal formation and tamarind-kernel coagulation.",
    "Circular design must preserve material value without circulating persistent toxicity.",
  ],
};

export default function Part12() {
  return <EnvironmentalChemistryPart data={part12Data} />;
}
