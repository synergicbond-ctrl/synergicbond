"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part01Data: PartData = {
  part: 1,
  title: "Environment, Pollution and Chemical Fate",
  subtitle: "The vocabulary, units and chemical logic needed to analyse every air, water and soil pollution problem.",
  goals: [
    "Distinguish pollutant, contaminant, hazard, exposure and risk.",
    "Classify pollutants by origin, formation, persistence, state and receiving medium.",
    "Follow a chemical from source through transport and transformation to its sink.",
    "Use ppm, ppb, molarity and mass concentration without unit mistakes.",
    "Recognise the assumptions hidden inside common JEE statements.",
    "Connect atmospheric, aquatic, soil and biological compartments.",
  ],
  sourceNote: "Source coverage: NCERT pp. 406-407 and summary; Essential Sheet pp. 1-2; Environmental Chemistry Theory pp. 181-182. Repeated definitions have been consolidated and expanded with JEE Advanced chemical reasoning.",
  heroImage: {
    src: "/environmental-chemistry/environment-spheres.webp",
    alt: "Dark cross-section showing chemical movement among atmosphere, water, soil and living systems",
    caption: "The environment behaves as an interconnected chemical system: emission into one reservoir can lead to reaction, deposition, biological uptake and sediment storage in another.",
  },
  sections: [
    {
      eyebrow: "Foundation",
      title: "What environmental chemistry actually studies",
      paragraphs: [
        "Environmental chemistry is the study of the origin, concentration, transport, reactions, effects and final fate of chemical species in the environment. It is not merely a catalogue of harmful substances. A complete environmental explanation must identify where a substance came from, what physical and chemical processes move it, how its chemical form changes, which organisms or materials it affects, and how it is removed or stored.",
        "Environmental science is broader and includes social, biological, economic and physical relations. Environmental chemistry supplies the molecular explanation: acid-base equilibria control the mobility of metals; redox reactions change oxidation state and toxicity; photochemistry produces radicals and secondary pollutants; adsorption retains chemicals on soil; partitioning distributes a substance between air, water, sediment and living tissue.",
        "A useful JEE method is to write every pollution episode as a sequence: source → emission or discharge → transport → transformation → exposure → effect → sink. If one arrow is chemically impossible, the proposed explanation is wrong.",
      ],
      boxes: [
        {
          title: "Pollution is a change, not simply a substance",
          body: "Heat, noise and radiation can be pollutants even though they are not ordinary chemical substances. Conversely, CO₂, nitrate and fluoride are normal environmental constituents; they become pollution problems when amount, location or chemical form produces harm.",
          tone: "concept",
        },
        {
          title: "JEE wording",
          body: "NCERT defines a pollutant as a solid, liquid or gaseous substance present in a concentration greater than natural abundance and produced by natural happenings or human activity. For exam questions, use the definition supplied by the prescribed text even though modern risk assessment uses a wider framework.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Four interacting reservoirs",
      title: "Atmosphere, hydrosphere, lithosphere and biosphere",
      paragraphs: [
        "The atmosphere is the gaseous envelope around Earth. It transports gases, vapours and aerosols, supplies O₂ and CO₂, carries water vapour, moderates temperature and contains protective stratospheric ozone. Because humans require far more air by mass than food each day, even small concentrations of an air pollutant may represent a significant inhaled dose.",
        "The hydrosphere includes oceans, rivers, lakes, groundwater, ice and atmospheric water. Water is an excellent solvent and transport medium. It dissolves gases, ions and polar organic molecules, suspends particles and supports biological transformations. Its quality is controlled by pH, dissolved oxygen, ionic content, pathogens, nutrients and toxic substances.",
        "The lithosphere supplies minerals and soil surfaces. Soil is not an inert dumping ground: clay, humus, oxides and microorganisms adsorb, exchange, oxidise, reduce and degrade chemicals. The biosphere contains living organisms. It can detoxify a pollutant, convert it into a more toxic form, store it in tissue or transfer it through a food web.",
      ],
      flow: [
        "SO₂ emitted into the atmosphere",
        "Oxidation to H₂SO₄ and sulphate aerosol",
        "Wet or dry deposition onto land and water",
        "Soil acidification and metal mobilisation",
        "Sulphate storage in water, organisms or sediment",
      ],
      boxes: [
        {
          title: "Transfer is not destruction",
          body: "A scrubber may remove SO₂ from flue gas but produce sulphite or sulphate wastewater. The air-emission problem has been controlled only if the new waste stream is safely treated. Pollution control must consider the complete material balance.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Classification",
      title: "One pollutant can belong to several classes",
      table: {
        caption: "Independent ways to classify an environmental pollutant",
        headers: ["Basis", "Classes", "Definition", "Representative examples"],
        rows: [
          ["Origin", "Natural / anthropogenic", "Whether the immediate source is a natural process or human activity.", "Volcanic SO₂, sea-salt aerosol / vehicle CO, pesticide drift"],
          ["Formation", "Primary / secondary", "Whether emitted directly or formed by reactions after emission.", "Primary: CO, NO, SO₂, soot; secondary: O₃, PAN, H₂SO₄, HNO₃"],
          ["Physical state", "Gas / vapour / particulate", "The phase in the receiving atmosphere.", "NO₂ gas; solvent vapour; dust, smoke, fume or mist"],
          ["Persistence", "Readily degradable / slowly degradable / persistent", "Rate of removal by natural chemical and biological processes.", "Food waste / some detergents / DDT, PCBs, heavy metals"],
          ["Biological status", "Viable / non-viable particulate", "Whether an airborne particle is living.", "Bacteria, fungal spores / soot, fly ash, metal fume"],
          ["Receiving medium", "Air / water / soil", "The compartment where the first major impact is considered.", "Smog / sewage / pesticide-contaminated soil"],
          ["Source geometry", "Point / non-point", "Whether the entry point can be identified clearly.", "Factory pipe / agricultural runoff across a catchment"],
        ],
      },
      paragraphs: [
        "These classifications are not mutually exclusive. Sulphuric acid aerosol is an anthropogenic or natural, secondary, non-viable particulate pollutant in air and a dissolved chemical pollutant after it reaches water. DDT sprayed on a field can contaminate air by drift, soil by deposition, surface water by runoff and organisms by food-chain transfer.",
        "Primary does not mean more dangerous and secondary does not mean less important. Ozone and PAN are formed secondarily but are strong oxidants. Biodegradable does not mean harmless at any concentration: a large organic discharge can be degraded, yet the degradation may consume all dissolved oxygen and kill fish.",
      ],
    },
    {
      eyebrow: "Fate model",
      title: "Source, transport, transformation and sink",
      bullets: [
        "Source: a process that adds the species to a compartment. Combustion is a source of CO, CO₂, NO and particulates; soil microorganisms can be a natural source of CH₄ or N₂O.",
        "Transport: advection by wind or flowing water, diffusion, sediment movement, runoff, infiltration and biological movement transfer matter without necessarily changing chemical identity.",
        "Transformation: photolysis, oxidation, reduction, hydrolysis, acid-base reaction, complex formation and microbial metabolism change chemical form. The products may be less harmful, equally harmful or more harmful.",
        "Partitioning: a compound distributes among phases according to volatility, solubility, adsorption and lipid affinity. Non-polar persistent organics tend to sorb to organic matter and accumulate in lipids.",
        "Sink: a process or reservoir that removes a species from the compartment for a meaningful time. Wet deposition is an atmospheric sink; sediment burial can be a long-term aquatic sink; soil bacteria are described in the supplied material as a sink for CO.",
        "Residence time: average time spent in a reservoir. Short-lived reactive pollutants act locally or regionally; long-lived gases can become global even if each source is local.",
      ],
      equations: [
        "Mass accumulation = total input − total output ± net chemical production",
        "Steady state: rate of input + rate of formation = rate of removal + rate of destruction",
        "First-order loss: Cₜ = C₀e⁻ᵏᵗ ; half-life t₁⁄₂ = 0.693/k",
      ],
      boxes: [
        {
          title: "Dilution versus sink",
          body: "Dilution decreases concentration at a location but conserves total pollutant mass. Oxidation, biodegradation, deposition or permanent storage may be a sink. A question that equates dilution with destruction violates conservation of matter.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Exposure and toxicity",
      title: "Hazard is not the same as risk",
      paragraphs: [
        "Hazard is the intrinsic ability of an agent to cause harm. Exposure describes contact: concentration, duration, frequency and route. Risk depends on both hazard and exposure. A highly hazardous substance sealed in an intact container may present low immediate exposure, while a moderately hazardous gas continuously inhaled in a closed room may present high risk.",
        "Dose is the quantity that actually reaches an organism, often expressed per unit body mass. Inhalation, ingestion and dermal absorption can produce different doses and target organs. Susceptibility varies with age, pregnancy, genetics, health and nutrition. Chemical speciation matters: Cr(VI) compounds are generally more mobile and hazardous than many Cr(III) forms; methylmercury behaves differently from elemental mercury.",
        "Environmental effects may be acute, appearing after a short high exposure, or chronic, developing after repeated low exposure. They may be local, such as eye irritation by PAN, or systemic, such as oxygen deprivation caused by carboxyhaemoglobin.",
      ],
      table: {
        headers: ["Term", "Precise meaning", "Exam-use example"],
        rows: [
          ["Toxicity", "Capacity of a substance to injure an organism.", "CO is toxic because it disrupts oxygen transport."],
          ["Exposure", "Contact with a concentration for a specified time and route.", "Breathing CO in a poorly ventilated room."],
          ["Bioaccumulation", "Increase of a substance within one organism over time.", "A fish retains a persistent lipid-soluble pesticide."],
          ["Biomagnification", "Increase in concentration from one trophic level to the next.", "DDT becomes most concentrated in a top predator."],
          ["Synergism", "Combined effect greater than the sum of separate effects.", "Pollutant mixtures can produce effects not predicted from one chemical alone."],
        ],
      },
    },
    {
      eyebrow: "Units",
      title: "ppm, ppb and concentration conversions",
      paragraphs: [
        "For dilute aqueous solutions whose density is close to 1.00 kg L⁻¹, 1 ppm by mass is approximately 1 mg L⁻¹ or 1 mg dm⁻³. This useful identity is an approximation based on density. In general, ppm means a ratio of 10⁶ and ppb a ratio of 10⁹; the numerator and denominator must use compatible units.",
        "For gases, ppm commonly denotes a volume or mole fraction: 1 ppmv means one gas molecule per 10⁶ total gas molecules for an ideal mixture. Converting gas ppmv to mg m⁻³ requires molar mass, temperature and pressure. Never apply the aqueous 1 ppm ≈ 1 mg L⁻¹ rule to a gas.",
      ],
      equations: [
        "ppm by mass = (mass of solute / mass of solution) × 10⁶",
        "ppb by mass = (mass of solute / mass of solution) × 10⁹",
        "1 ppm = 10³ ppb ; 50 ppb = 0.050 ppm",
        "For dilute water: 1.0 mg L⁻¹ ≈ 1.0 ppm",
      ],
      table: {
        headers: ["Expression", "Equivalent form", "Condition"],
        rows: [
          ["1 ppm", "1 mg kg⁻¹", "Exact mass ratio"],
          ["1 ppb", "1 μg kg⁻¹", "Exact mass ratio"],
          ["1 mg L⁻¹ water", "≈ 1 ppm", "Dilute solution, density ≈ 1 kg L⁻¹"],
          ["1 μg L⁻¹ water", "≈ 1 ppb", "Dilute solution, density ≈ 1 kg L⁻¹"],
          ["0.005 ppm Cd", "5 ppb", "Multiply ppm by 1000"],
        ],
      },
    },
    {
      eyebrow: "Advanced lens",
      title: "Speciation, pH, redox state and partitioning",
      paragraphs: [
        "Total concentration alone may not predict environmental behaviour. Acid-base speciation controls charge and volatility. Ammonia exists as NH₃ and NH₄⁺; the neutral form is more volatile and often more directly toxic to fish. Lower pH shifts the equilibrium toward NH₄⁺. Weak organic acids are more neutral and mobile through lipid membranes below their pKₐ.",
        "pH also controls metal solubility and adsorption. Acidification can dissolve carbonate minerals and mobilise metal ions from pipes or soil. Under reducing conditions, metal sulphides may precipitate, while re-oxidation of sulphide minerals can generate acidity. Redox chemistry therefore links mine drainage, dissolved oxygen and metal mobility.",
        "Hydrophobic compounds favour organic phases and sediment organic matter. A high octanol-water partition coefficient usually indicates lipid affinity and potential bioaccumulation, but persistence and metabolism also matter. A substance that is rapidly metabolised may not biomagnify even if it is hydrophobic.",
      ],
      equations: [
        "NH₄⁺ ⇌ H⁺ + NH₃",
        "CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻",
        "FeS₂ + O₂ + H₂O → Fe²⁺ + SO₄²⁻ + H⁺  (schematic acid-mine-drainage oxidation)",
      ],
      boxes: [
        {
          title: "Do not over-generalise persistence",
          body: "Heavy metals are elements and cannot be destroyed chemically, but their oxidation state, complexation and phase can change. Calling every metal form equally mobile or equally toxic is chemically incorrect.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Decision framework",
      title: "How to analyse an unfamiliar pollution question",
      flow: [
        "Identify the receiving compartment and chemical species",
        "Decide whether it is emitted directly or formed secondarily",
        "Write the controlling reaction, equilibrium or partition step",
        "Connect concentration and exposure to the biological or material effect",
        "Select a control that acts on the source, precursor or removal pathway",
        "Check whether the control merely transfers pollution to another medium",
      ],
      boxes: [
        {
          title: "Location changes the role",
          body: "Stratospheric ozone is protective because it absorbs ultraviolet radiation. Tropospheric ozone is a secondary oxidising pollutant and component of photochemical smog. The molecule is identical; altitude, concentration and neighbouring chemistry change its environmental role.",
          tone: "jee",
        },
        {
          title: "Quantity changes the role",
          body: "Fluoride near the prescribed textbook concentration hardens tooth enamel; deficiency favours decay, while excess produces mottling and skeletal damage. Environmental chemistry rarely permits a simple label such as always good or always bad.",
          tone: "green",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Convert a drinking-water value",
      problem: "A water standard is quoted as 50 ppb Pb. Express it in ppm and μg L⁻¹ for dilute water.",
      steps: [
        "Because 1 ppm = 1000 ppb, divide 50 by 1000: 50 ppb = 0.050 ppm.",
        "For dilute water, 1 ppb ≈ 1 μg L⁻¹.",
        "Therefore 50 ppb ≈ 50 μg L⁻¹.",
      ],
      answer: "0.050 ppm and approximately 50 μg L⁻¹.",
    },
    {
      title: "Classify ozone without contradiction",
      problem: "Classify ozone found in urban summer air and ozone found in the upper stratosphere.",
      steps: [
        "Urban ozone is not normally emitted directly; NO₂ photolysis and radical chemistry form it, so it is a secondary pollutant.",
        "Near ground it irritates tissue and contributes to oxidising smog.",
        "Stratospheric ozone is formed photochemically from O₂ and absorbs harmful UV radiation.",
      ],
      answer: "Tropospheric O₃ is a secondary oxidising pollutant; stratospheric O₃ is a protective atmospheric constituent.",
    },
    {
      title: "Separate removal from transfer",
      problem: "A wet scrubber removes 95% of gaseous SO₂ from flue gas. Has 95% of the sulphur been destroyed?",
      steps: [
        "Scrubbing transfers SO₂ into a liquid phase and commonly converts it to sulphite, bisulphite or sulphate.",
        "Sulphur atoms remain in the collected liquor or solid product.",
        "The air emission is controlled, but the wastewater or solid must still be managed.",
      ],
      answer: "No. The sulphur has been captured and transformed, not destroyed.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "Which statement best distinguishes a secondary pollutant?",
      options: ["It is always a solid.", "It forms in the environment after precursor emission.", "It is less toxic than a primary pollutant.", "It is produced only by natural sources."],
      answer: "B",
      solution: "Secondary describes formation after emission. O₃, PAN, H₂SO₄ and HNO₃ are common examples; physical state, origin and toxicity are independent properties.",
    },
    {
      number: 2,
      tag: "Multiple correct",
      question: "Which processes can be atmospheric sinks for a gaseous pollutant?",
      options: ["Wet deposition", "Dry deposition", "Chemical conversion followed by particle settling", "Simple horizontal transport"],
      answer: "A, B and C",
      solution: "Deposition and conversion followed by removal lower the atmospheric burden. Horizontal transport only moves the pollutant to another location.",
    },
    {
      number: 3,
      tag: "Numerical",
      question: "A dilute water sample contains 0.005 mg Cd per litre. Its approximate concentration in ppb is:",
      options: ["0.005", "0.5", "5", "5000"],
      answer: "C",
      solution: "0.005 mg L⁻¹ = 5 μg L⁻¹. For dilute water, 1 μg L⁻¹ ≈ 1 ppb, hence 5 ppb.",
    },
    {
      number: 4,
      tag: "Assertion-reason",
      question: "Assertion: A biodegradable waste can severely pollute water. Reason: Its microbial degradation can consume dissolved oxygen.",
      options: ["Both true; reason explains assertion", "Both true; reason does not explain assertion", "Assertion true; reason false", "Assertion false; reason true"],
      answer: "A",
      solution: "Biodegradability means microorganisms can transform the waste, not that any amount is harmless. A large organic load increases oxygen demand and can create anoxia.",
    },
    {
      number: 5,
      tag: "Concept",
      question: "Which is the most complete environmental fate sequence for emitted SO₂?",
      options: ["Emission → dilution only", "Emission → oxidation → acid/sulphate formation → deposition", "Emission → photosynthesis → O₂", "Emission → radioactive decay"],
      answer: "B",
      solution: "SO₂ is transported, oxidised in gas or aqueous phase, converted to acid or sulphate aerosol and removed by wet or dry deposition.",
    },
    {
      number: 6,
      tag: "Statement",
      question: "A persistent metal pollutant is non-biodegradable because:",
      options: ["Its element cannot be destroyed by ordinary biological chemistry.", "It never changes oxidation state.", "It is always insoluble.", "It cannot bind to organisms."],
      answer: "A",
      solution: "Biological and chemical processes can change metal speciation, solubility and location, but cannot eliminate the element. The other statements are not generally true.",
    },
  ],
  recap: [
    "Pollution analysis requires source → transport → transformation → exposure → effect → sink.",
    "Primary/secondary, natural/anthropogenic and biodegradable/persistent are independent classifications.",
    "Dilution lowers concentration but does not destroy pollutant mass.",
    "1 ppm = 1000 ppb; in dilute water 1 mg L⁻¹ ≈ 1 ppm.",
    "Hazard is intrinsic; risk depends on hazard and exposure.",
    "Chemical speciation, pH and redox state can matter more than total concentration.",
    "Bioaccumulation occurs within one organism; biomagnification occurs across trophic levels.",
    "The same species can be beneficial in one compartment and harmful in another.",
  ],
};

export default function Part01() {
  return <EnvironmentalChemistryPart data={part01Data} />;
}
