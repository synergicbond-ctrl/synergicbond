"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part02Data: PartData = {
  part: 2,
  title: "Atmosphere and Gaseous Air Pollutants",
  subtitle: "Atmospheric layers, emission chemistry, effects, sinks and control of SOₓ, NOₓ, CO, hydrocarbons and related gases.",
  goals: [
    "Relate atmospheric structure to pollutant behaviour.",
    "Write the formation and oxidation reactions of major gaseous pollutants.",
    "Explain the molecular toxicity of CO and NO₂.",
    "Distinguish emission control from end-of-pipe removal.",
    "Connect combustion conditions with the pollutants formed.",
    "Use source-effect-control tables for rapid JEE elimination.",
  ],
  sourceNote: "Source coverage: NCERT pp. 407-410; Essential Sheet pp. 2-4; Environmental Chemistry Theory pp. 181-185 and pp. 295-297. Greenhouse forcing and acid deposition receive full treatment in Parts 3 and 5.",
  sections: [
    {
      eyebrow: "Atmospheric structure",
      title: "Why altitude changes atmospheric chemistry",
      paragraphs: [
        "Earth's atmosphere is held by gravity and consists of gases, water vapour and suspended particles. Density and pressure decrease strongly with altitude. The lower atmosphere is turbulent and efficiently mixed compared with the stable layers above it, so an emitted species experiences different temperatures, radiation fields, water content and reaction partners as it moves vertically.",
        "The troposphere extends from the surface to roughly 10-12 km in the simplified NCERT description. It contains most atmospheric mass and nearly all atmospheric water vapour, clouds and weather. Temperature generally decreases with altitude, causing vertical convection under normal conditions. This is where humans live and where most air-pollution exposure occurs.",
        "The stratosphere lies approximately 10-50 km above sea level. It contains little water vapour and an ozone-rich region. Absorption of ultraviolet radiation by O₂ and O₃ heats the upper stratosphere, so temperature increases with height through much of it. This stable temperature structure limits vertical mixing and allows long-lived compounds such as CFCs to persist long enough to reach the ozone layer.",
      ],
      table: {
        headers: ["Region", "Approximate height", "Dominant features", "Environmental-chemistry role"],
        rows: [
          ["Troposphere", "0 to ~10-12 km", "Turbulent, dusty, water vapour, clouds and weather", "SOₓ, NOₓ, CO, VOCs, particles, acid deposition and smog"],
          ["Stratosphere", "~10 to 50 km", "Dry, stable, ozone-rich; temperature rises in part", "UV shielding and catalytic ozone depletion"],
          ["Boundary layer", "Lowest part of troposphere", "Directly influenced by surface friction and heating", "Controls near-ground dilution and human exposure"],
          ["Temperature inversion", "Local vertical layer", "Warm air overlies cooler surface air", "Suppresses mixing and traps pollutants near the ground"],
        ],
      },
      boxes: [
        {
          title: "NCERT figure versus real atmosphere",
          body: "Layer heights vary with latitude and season. JEE questions normally use the textbook values: troposphere to about 10 km and stratosphere from about 10 to 50 km.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Combustion map",
      title: "The air-fuel ratio decides what carbon forms",
      paragraphs: [
        "Complete combustion of a hydrocarbon in sufficient oxygen ideally produces CO₂ and H₂O. In an oxygen-deficient region, mixing is imperfect or flame temperature is too low for complete oxidation, CO, soot and unburnt hydrocarbons escape. Real engines also draw N₂ from air; at high temperature N₂ and O₂ form thermal NO.",
        "The products therefore report combustion conditions. High CO and hydrocarbons suggest incomplete combustion. High NOₓ often indicates high peak flame temperature and availability of oxygen. Sulphur in the fuel forms SO₂ largely according to sulphur content. Fly ash arises from non-combustible mineral matter in solid fuel.",
      ],
      equations: [
        "CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O  (complete combustion)",
        "2C + O₂ → 2CO  (oxygen-deficient combustion)",
        "2CO + O₂ → 2CO₂  (oxidation in air or catalytic converter)",
        "N₂ + O₂ ⇌ 2NO  (favoured at high temperature)",
        "S + O₂ → SO₂",
      ],
      flow: [
        "Fuel composition and air-fuel mixing",
        "Flame temperature and residence time",
        "Primary emission: CO, NO, SO₂, VOCs and particles",
        "Atmospheric oxidation and photochemistry",
        "Secondary pollutants, deposition and exposure",
      ],
    },
    {
      eyebrow: "Sulphur chemistry",
      title: "Sulphur oxides: formation, oxidation, effects and control",
      paragraphs: [
        "Sulphur-containing coal and petroleum release mainly SO₂ during combustion. Roasting sulphide ores is another major source; volcanoes and biological sulphur gases are natural sources. SO₂ is colourless, soluble and reducing. It irritates the eyes and respiratory tract and is associated in the prescribed text with asthma, bronchitis and emphysema. In plants it injures leaves and at high concentration causes stiffness and fall of flower buds.",
        "Direct gas-phase oxidation of SO₂ by O₂ is slow in clean air. Particulate matter and dissolved transition-metal species can catalyse oxidation. Ozone and hydrogen peroxide provide faster oxidising pathways. The product SO₃ is strongly hydrated to H₂SO₄; aqueous SO₂ can also form sulphurous acid/bisulphite and subsequently sulphate. These routes link SO₂ emission to acid rain and fine sulphate aerosol.",
        "Control begins with fuel choice: low-sulphur fuel, coal cleaning, natural gas or desulphurised fuel lowers the source term. Flue-gas desulphurisation then absorbs SO₂ using limestone or lime. The process can yield calcium sulphite and, after oxidation, gypsum. A scrubber controls air emission but produces a solid or liquid by-product requiring management.",
      ],
      equations: [
        "2SO₂(g) + O₂(g) → 2SO₃(g)  (slow unless catalysed)",
        "SO₂(g) + O₃(g) → SO₃(g) + O₂(g)",
        "SO₂(g) + H₂O₂(l) → H₂SO₄(aq)",
        "SO₃(g) + H₂O(l) → H₂SO₄(aq)",
        "CaCO₃ + SO₂ → CaSO₃ + CO₂ ; 2CaSO₃ + O₂ → 2CaSO₄",
      ],
      table: {
        headers: ["Feature", "SO₂", "SO₃ / H₂SO₄ aerosol"],
        rows: [
          ["Formation", "Direct combustion and ore roasting", "Secondary oxidation of SO₂"],
          ["Chemical character", "Acidic oxide and reducing gas", "Strongly acidic; sulphate aerosol"],
          ["Direct effects", "Eye and respiratory irritation; plant injury", "Fine-particle and acid-deposition effects"],
          ["Control", "Low-sulphur fuel, desulphurisation, scrubbing", "Prevent SO₂ oxidation burden; particle capture"],
        ],
      },
    },
    {
      eyebrow: "Reactive nitrogen",
      title: "NO, NO₂ and the NOₓ family",
      paragraphs: [
        "At ordinary temperature the strong N≡N bond makes N₂ relatively unreactive toward O₂. Lightning and high-temperature engines supply enough energy for N₂ + O₂ ⇌ 2NO. Rapid cooling freezes part of the high-temperature equilibrium composition. The emitted NO is colourless and is oxidised to brown NO₂ by O₂, ozone or peroxy radicals.",
        "NO₂ is a strong oxidant and lung irritant. It produces the reddish-brown haze observed in congested traffic, damages plant leaves, retards photosynthesis and attacks textiles and metals. In the atmosphere NO₂ photolysis produces atomic oxygen and ozone, so NOₓ is central to photochemical smog. Further oxidation produces nitric acid and nitrate aerosol, connecting NOₓ with acid deposition.",
        "NOₓ control requires a different strategy from CO control. Lowering peak combustion temperature, staged combustion and exhaust-gas recirculation reduce thermal NO formation. A three-way catalytic converter on a petrol vehicle simultaneously oxidises CO and hydrocarbons and reduces nitrogen oxides when the air-fuel ratio is closely controlled.",
      ],
      equations: [
        "N₂(g) + O₂(g) ⇌ 2NO(g)  (high temperature; textbook value 1483 K)",
        "2NO(g) + O₂(g) → 2NO₂(g)",
        "NO(g) + O₃(g) → NO₂(g) + O₂(g)",
        "2CO + 2NO → 2CO₂ + N₂  (simplified catalytic-converter reaction)",
        "2NOₓ → N₂ + xO₂  (schematic catalytic reduction)",
      ],
      boxes: [
        {
          title: "NO is primary; ozone is secondary",
          body: "Engines emit mainly NOₓ precursors. Sunlight and atmospheric reactions generate O₃. A question claiming that the tailpipe normally emits urban ozone directly is chemically wrong.",
          tone: "jee",
        },
        {
          title: "NOₓ is a family label",
          body: "In elementary questions NOₓ usually means NO + NO₂. Advanced atmospheric chemistry includes reservoirs and products such as HNO₃, nitrate and PAN under broader reactive-nitrogen notation.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Acute poison",
      title: "Carbon monoxide and the chemistry of oxygen deprivation",
      paragraphs: [
        "Carbon monoxide is colourless and odourless, so dangerous concentrations may accumulate without warning. It forms during incomplete combustion of petrol, diesel, coal, charcoal, firewood and other carbonaceous fuels. Vehicle exhaust, poorly vented heaters, indoor charcoal burning and fires are important exposure settings.",
        "CO binds to haemoglobin to form carboxyhaemoglobin. The prescribed source describes this complex as about 300 times more stable than the oxygen-haemoglobin complex. Binding occupies oxygen-carrying sites and also interferes with release of oxygen from remaining sites. As carboxyhaemoglobin rises, tissues experience hypoxia even if the surrounding air still contains oxygen.",
        "Early effects include headache, weakness, dizziness, impaired vision and nervousness; severe exposure can produce unconsciousness, cardiovascular injury and death. Fetuses are especially vulnerable, and smoking raises blood CO. Soil microorganisms that oxidise CO to CO₂ are described as a natural sink, while atmospheric reaction with OH radicals is an important broader chemical sink.",
      ],
      equations: [
        "Hb + CO ⇌ HbCO  (carboxyhaemoglobin)",
        "Hb + O₂ ⇌ HbO₂  (oxyhaemoglobin)",
        "CO + OH• → CO₂ + H•  (simplified atmospheric sink step)",
      ],
      table: {
        headers: ["CO", "CO₂"],
        rows: [
          ["Produced mainly by incomplete combustion", "Produced by complete combustion, respiration and cement manufacture"],
          ["Acute toxicant at relatively low concentration", "Not an acute poison at normal ambient concentration"],
          ["Blocks oxygen transport through HbCO", "Acts mainly as a greenhouse gas in this chapter"],
          ["Colourless and odourless", "Colourless and odourless"],
          ["Control by complete combustion and catalytic oxidation", "Control by lower fossil-carbon use, efficiency and carbon-cycle management"],
        ],
      },
      image: {
        src: "/environmental-chemistry/carbon-monoxide-haemoglobin.webp",
        alt: "Dark molecular comparison of oxygenated haemoglobin and carbon-monoxide-bound haemoglobin",
        caption: "CO occupies haem binding sites and forms carboxyhaemoglobin, reducing oxygen transport and tissue delivery.",
      },
    },
    {
      eyebrow: "Organic gases",
      title: "Hydrocarbons, VOCs and aldehydes",
      paragraphs: [
        "Hydrocarbons and other volatile organic compounds enter air from unburnt fuel, fuel evaporation, solvents, refineries, paints, vegetation and decomposition of organic matter. The supplied sources use hydrocarbons as a broad class of carcinogenic pollutants; a more precise statement is that toxicity varies greatly and some hydrocarbons, especially certain aromatic and polycyclic compounds, are carcinogenic.",
        "Their atmospheric importance is not limited to direct toxicity. OH radicals initiate oxidation, generating alkyl and peroxy radicals. Peroxy radicals convert NO to NO₂ without consuming ozone, allowing ozone to accumulate. Aldehydes, ketones, organic nitrates and secondary organic aerosol are formed. Thus, VOC control reduces both primary exposure and secondary smog.",
        "Hydrocarbons can injure plants by accelerating ageing, tissue breakdown and shedding of leaves, flowers and twigs. Formaldehyde and acrolein irritate eyes and respiratory tissue. Benzene is a toxic aromatic VOC, while soot and polycyclic aromatic hydrocarbons are discussed with particulate pollution because they may be carried on particles.",
      ],
      equations: [
        "RH + OH• → R• + H₂O",
        "R• + O₂ → RO₂•",
        "RO₂• + NO → RO• + NO₂",
        "2HCHO → CH₄ + CO₂  (textbook bacterial disproportionation example)",
      ],
      boxes: [
        {
          title: "Hydrocarbon is not a synonym for greenhouse gas",
          body: "Methane is both a hydrocarbon and an important greenhouse gas. Many larger VOCs have short atmospheric lifetimes and are more important as smog precursors or toxicants than as long-lived greenhouse gases.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Other gaseous pollutants",
      title: "H₂S, NH₃, halogen compounds and oxidants",
      table: {
        headers: ["Species", "Representative sources", "Important chemistry and effects"],
        rows: [
          ["H₂S", "Anaerobic decay, sewage, petroleum and sulphide processes", "Toxic reduced sulphur gas; oxidises to SO₂ or sulphate; rotten-egg odour at low levels"],
          ["NH₃", "Fertiliser use, livestock and decomposition", "Basic gas; neutralises acids to form fine NH₄⁺ salts such as ammonium sulphate and nitrate"],
          ["O₃", "Secondary photochemistry from NOₓ and VOCs", "Strong oxidant; injures lungs, plants and materials near ground"],
          ["CFCs", "Historic refrigerants, foams and cleaning uses", "Stable in troposphere; UV photolysis in stratosphere releases Cl radicals"],
          ["Aldehydes", "Primary combustion and secondary VOC oxidation", "Eye and respiratory irritation; formaldehyde and acrolein occur in smog"],
        ],
      },
      equations: [
        "2NH₃ + H₂SO₄ → (NH₄)₂SO₄",
        "NH₃ + HNO₃ ⇌ NH₄NO₃",
        "2H₂S + 3O₂ → 2SO₂ + 2H₂O",
      ],
      paragraphs: [
        "Ammonia illustrates an important environmental trade-off. It can neutralise strong atmospheric acids, decreasing gas-phase acidity, yet the ammonium salts formed are fine particulate matter and can travel long distances. Control must therefore consider both gas and aerosol phases.",
      ],
    },
    {
      eyebrow: "Control strategy",
      title: "Prevent, capture, convert and disperse",
      paragraphs: [
        "Prevention changes the process or raw material so less pollutant forms: low-sulphur fuel, efficient combustion, vapour recovery and lower peak temperature. Capture separates a pollutant before release: absorption of SO₂ or adsorption of solvent vapours. Conversion changes it into a safer or more manageable product: catalytic oxidation of CO and reduction of NO. Dispersion by a tall stack lowers local concentration but does not lower total emission and is not a substitute for control.",
        "A three-way catalytic converter uses a ceramic honeycomb coated with noble metals such as Pt, Pd and Rh. Oxidation functions convert CO and hydrocarbons to CO₂ and H₂O; reduction functions convert NOₓ mainly to N₂. Lead poisons the catalyst, which is one reason unleaded fuel is essential. The NCERT description uses an exhaust temperature around 573 K.",
      ],
      table: {
        headers: ["Pollutant", "Source prevention", "Removal or conversion", "Common trap"],
        rows: [
          ["SO₂", "Low-sulphur fuel; desulphurise fuel", "Limestone/lime flue-gas scrubber", "A tall stack only disperses it"],
          ["NOₓ", "Lower peak temperature; staged combustion; EGR", "Three-way catalyst or selective catalytic reduction", "More O₂ does not automatically reduce thermal NO"],
          ["CO", "Correct air-fuel ratio and complete combustion", "Catalytic oxidation to CO₂", "CO₂ is less acutely toxic but remains a greenhouse gas"],
          ["VOCs", "Closed systems, low-volatility products, prevent leaks", "Adsorption, condensation or catalytic oxidation", "Ozone is a product, not the usual tailpipe precursor"],
          ["H₂S", "Contain anaerobic process gases", "Oxidation or sulphur recovery", "Odour threshold and toxicity threshold are different"],
        ],
      },
    },
  ],
  examples: [
    {
      title: "Identify the dominant engine pollutant mechanism",
      problem: "An engine has a very high flame temperature and nearly complete fuel combustion. Which pollutant can still rise even if CO falls?",
      steps: [
        "Nearly complete combustion lowers CO and unburnt hydrocarbon emission.",
        "High temperature activates the endothermic N₂ + O₂ ⇌ 2NO reaction.",
        "The emitted NO is then oxidised to NO₂.",
      ],
      answer: "NOₓ can rise even while CO falls.",
    },
    {
      title: "Calculate a catalytic-converter stoichiometry",
      problem: "How many moles of CO are required by 2CO + 2NO → 2CO₂ + N₂ to reduce 0.40 mol NO completely?",
      steps: [
        "The balanced equation gives a CO:NO ratio of 2:2 = 1:1.",
        "Therefore the moles of CO required equal the moles of NO.",
      ],
      answer: "0.40 mol CO.",
    },
    {
      title: "Choose a sulphur-control method",
      problem: "A coal plant emits large SO₂ but little CO. Which control directly targets the main problem?",
      steps: [
        "Low CO indicates that incomplete carbon combustion is not the dominant issue.",
        "The sulphur originates in the coal and becomes SO₂.",
        "Fuel desulphurisation or a limestone/lime flue-gas scrubber targets SO₂ directly.",
      ],
      answer: "Use low-sulphur/desulphurised fuel and flue-gas desulphurisation.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "The reddish-brown haze in congested traffic is mainly associated with:",
      options: ["CO", "NO₂", "SO₂", "CH₄"],
      answer: "B",
      solution: "NO₂ is a brown, oxidising gas and important component of traffic-related haze. CO, SO₂ and CH₄ are colourless.",
    },
    {
      number: 2,
      tag: "Reaction",
      question: "Which pathway converts SO₂ directly to H₂SO₄ without first writing SO₃ as a separate product?",
      options: ["SO₂ + O₃", "SO₂ + H₂O₂", "SO₂ + N₂", "SO₂ + CO"],
      answer: "B",
      solution: "Hydrogen peroxide oxidises dissolved or gaseous SO₂ to sulphuric acid: SO₂ + H₂O₂ → H₂SO₄.",
    },
    {
      number: 3,
      tag: "Multiple correct",
      question: "High-temperature automobile combustion can generate which primary emissions?",
      options: ["NO", "CO₂", "Unburnt hydrocarbons", "PAN"],
      answer: "A, B and C",
      solution: "NO, CO₂ and some unburnt fuel may be emitted. PAN is a secondary photochemical product formed in the atmosphere.",
    },
    {
      number: 4,
      tag: "Assertion-reason",
      question: "Assertion: CO can be highly dangerous in a closed room. Reason: It is colourless and odourless and forms stable carboxyhaemoglobin.",
      options: ["Both true; reason explains assertion", "Both true; reason does not explain assertion", "Assertion true; reason false", "Assertion false; reason true"],
      answer: "A",
      solution: "CO may accumulate unnoticed and blocks oxygen transport by binding haemoglobin, making indoor incomplete combustion especially dangerous.",
    },
    {
      number: 5,
      tag: "Control",
      question: "Which action mainly disperses a pollutant instead of reducing total emission?",
      options: ["Installing a tall stack", "Using a catalytic converter", "Scrubbing SO₂", "Recovering solvent vapour"],
      answer: "A",
      solution: "A tall stack spreads the emission over a larger region. It can lower near-source concentration but does not reduce emitted mass.",
    },
    {
      number: 6,
      tag: "JEE trap",
      question: "Which pairing is chemically correct?",
      options: ["NO₂ - colourless gas", "CO - major acute greenhouse mechanism", "O₃ - directly emitted by normal tailpipes", "SO₂ - precursor of sulphate aerosol"],
      answer: "D",
      solution: "SO₂ oxidation yields SO₃/H₂SO₄ and sulphate aerosol. NO₂ is brown, CO toxicity is mainly Hb binding, and urban O₃ is formed secondarily.",
    },
  ],
  recap: [
    "Troposphere: weather, water vapour and most pollution exposure; stratosphere: ozone-rich and relatively dry.",
    "Oxygen-poor combustion favours CO and soot; high temperature favours thermal NO.",
    "SO₂ oxidation produces H₂SO₄ and sulphate aerosol; particulate matter can catalyse the oxidation.",
    "NO is colourless and primary; NO₂ is brown, oxidising and central to smog and acid formation.",
    "CO forms carboxyhaemoglobin and blocks oxygen transport.",
    "VOCs create peroxy radicals that amplify ozone production.",
    "NH₃ neutralises acids but can form fine ammonium aerosol.",
    "Prevention reduces formation; capture and conversion remove emissions; dispersion alone does not.",
  ],
};

export default function Part02() {
  return <EnvironmentalChemistryPart data={part02Data} />;
}
