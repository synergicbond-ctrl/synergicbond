"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part10Data: PartData = {
  part: 10,
  title: "Soil Pollution, Pesticides and Biomagnification",
  subtitle: "Soil as a reactive chemical reservoir, the pesticide-resistance treadmill, persistence-versus-toxicity trade-offs and food-web amplification.",
  goals: [
    "Explain why soil is a chemical reactor rather than an inert sink.",
    "Distinguish pesticide, insecticide, herbicide and fungicide.",
    "Compare organochlorines, organophosphates and carbamates.",
    "Separate bioaccumulation from biomagnification.",
    "Model trophic-level concentration changes.",
    "Connect repeated pesticide use to biological resistance.",
  ],
  sourceNote: "Source coverage: NCERT pp. 416-418; Essential Sheet pp. 10-12; Environmental Chemistry Theory pp. 189-190; all 10 pages of The Chemical Strata were visually audited. Five selected dark diagrams are used after footer-brand removal.",
  heroImage: {
    src: "/environmental-chemistry/pesticide-resistance-loop.webp",
    alt: "Dark source-derived cycle showing pesticide application, survival, reproduction and increasing resistance",
    caption: "Pesticides do not create a useful mutation on demand; they select resistant individuals already present or newly arising, so repeated use shifts the population.",
  },
  sections: [
    {
      eyebrow: "Soil chemistry",
      title: "Soil stores, transforms and releases pollutants",
      paragraphs: [
        "Soil contains mineral particles, clay, metal oxides, organic matter, pore water, air and living organisms. Each phase interacts with chemicals. Clay and humus exchange ions; iron and manganese oxides adsorb metals and phosphate; organic matter retains hydrophobic compounds; microbes oxidise, reduce or hydrolyse contaminants.",
        "A pollutant may be immobilised by adsorption or precipitation, but immobilisation is not destruction. Falling pH can desorb cations and dissolve carbonate or hydroxide phases. Flooding can create reducing conditions that dissolve some iron oxides and release previously adsorbed species. Drying and re-oxidation can reverse the process.",
        "Soil pollution therefore depends on loading and chemical form as well as total amount. A pesticide can remain near the surface, volatilise, leach to groundwater, run off to surface water, degrade into products or enter organisms.",
      ],
      table: {
        headers: ["Soil property", "Chemical effect on pollutants"],
        rows: [
          ["pH", "Controls ionisation, metal solubility, adsorption and microbial activity"],
          ["Clay content", "Provides charged surfaces and cation-exchange capacity"],
          ["Organic carbon", "Retains hydrophobic organics and supplies microbial substrate"],
          ["Redox potential", "Changes oxidation states and mineral stability"],
          ["Moisture", "Controls transport, diffusion, microbial activity and anaerobic zones"],
          ["Texture/porosity", "Controls infiltration, residence time and access to surfaces"],
        ],
      },
    },
    {
      eyebrow: "Names and targets",
      title: "Pesticide is the broad category",
      table: {
        headers: ["Class", "Target", "Textbook examples"],
        rows: [
          ["Insecticide", "Insects", "DDT, BHC, aldrin, dieldrin, malathion, nicotine"],
          ["Herbicide / weedicide", "Weeds", "Sodium chlorate, sodium arsenite/arsenite wording in sources, triazines, 2,4-D"],
          ["Fungicide", "Fungi", "Sulphur compounds, copper formulations and modern organics"],
          ["Rodenticide", "Rodents", "Various anticoagulant or acute toxic formulations"],
          ["Pesticide", "Broad term covering pest-control chemicals", "Includes insecticides, herbicides, fungicides and related agents"],
        ],
      },
      paragraphs: [
        "Some older exam questions use pesticide narrowly as if it means insecticide and therefore call sodium arsenite not a pesticide but a herbicide. Scientifically, a herbicide is a pesticide. When solving a source-specific question, recognise the intended NCERT classification but do not carry the narrow usage into a formal definition.",
        "Before World War II, nicotine and other natural products were used. DDT became important for malaria-vector control, then expanded into agriculture. Resistance and ecological persistence led to aldrin and dieldrin and later to less persistent organophosphates and carbamates.",
      ],
      image: {
        src: "/environmental-chemistry/persistence-toxicity-tradeoff.webp",
        alt: "Dark source-derived comparison of persistent organochlorines with acutely toxic organophosphates and carbamates",
        caption: "Replacing a persistent chemical does not guarantee a harmless alternative: persistence, acute toxicity, selectivity and exposure must all be evaluated.",
      },
    },
    {
      eyebrow: "Organochlorines",
      title: "DDT, aldrin and dieldrin: persistence and lipid affinity",
      paragraphs: [
        "Many organochlorine pesticides are poorly soluble in water, chemically persistent and lipophilic. They partition into soil organic matter, sediment and animal fat. Slow metabolism and excretion allow concentration within organisms and transfer through food webs.",
        "DDT is dichlorodiphenyltrichloroethane. Its two chlorinated phenyl rings and highly chlorinated ethane centre make it non-polar and resistant to degradation. Aldrin and dieldrin are chlorinated polycyclic insecticides. Their exact structures are not usually required in environmental-chemistry questions, but recognising them as persistent organochlorines is essential.",
        "Persistence can be useful for long-lasting pest control but produces long-term exposure far from the application. Ecological effects may appear in predators that were never directly sprayed.",
      ],
      structures: [
        {
          name: "DDT skeleton",
          formula: "(p-Cl–C₆H₄)₂CH–CCl₃",
          note: "Highly chlorinated aromatic insecticide; hydrophobic and persistent.",
        },
        {
          name: "BHC",
          formula: "C₆H₆Cl₆",
          note: "Benzene hexachloride is a chlorinated insecticide mixture/isomer context.",
        },
        {
          name: "2,4-D",
          formula: "Cl₂C₆H₃–O–CH₂–CO₂H",
          note: "2,4-dichlorophenoxyacetic acid, a selective herbicide.",
        },
      ],
    },
    {
      eyebrow: "Trophic transfer",
      title: "Bioaccumulation versus biomagnification",
      paragraphs: [
        "Bioaccumulation is the net increase of a chemical in one organism because uptake from water, food and air exceeds metabolism and excretion. Bioconcentration is a narrower term for uptake directly from the surrounding medium. Biomagnification is the increase in concentration from prey to predator across trophic levels.",
        "A persistent lipophilic chemical stored in tissue is transferred when a predator eats many prey items. The predator retains much of the chemical while metabolising the food, so concentration rises. The NCERT figure uses an illustrative tenfold increase at each trophic level.",
        "Biomagnification is not guaranteed for every pollutant. The chemical must persist, be bioavailable, resist metabolism and partition into retained tissue. Some substances are diluted by growth or transformed into products that magnify differently.",
      ],
      equations: [
        "Bioconcentration factor = concentration in organism / concentration in water",
        "Biomagnification factor = concentration in predator / concentration in prey",
        "Illustrative NCERT chain: Cₙ = C₀ × 10ⁿ",
      ],
      image: {
        src: "/environmental-chemistry/biomagnification.webp",
        alt: "Dark source-derived graphic showing tenfold concentration increase through four trophic levels",
        caption: "The tenfold steps are an illustrative exam model. Real biomagnification factors depend on species, diet, lipid content, metabolism and chemical properties.",
      },
    },
    {
      eyebrow: "Resistance",
      title: "The biological resistance loop",
      paragraphs: [
        "A pest population contains genetic variation. A pesticide kills susceptible individuals more effectively than resistant ones. Survivors reproduce and contribute a larger fraction of the next generation. Repeated application of the same mode of action increases the resistant fraction until field control fails.",
        "The pesticide does not intentionally teach insects to resist. It imposes selection pressure. Increasing dose or applying more frequently may temporarily suppress the population but often intensifies selection and increases exposure to non-target organisms.",
        "Resistance management uses integrated pest management: monitoring, economic thresholds, crop rotation, biological control, habitat management, mechanical methods and rotation of genuinely different modes of action. Chemical control becomes one tool rather than the entire strategy.",
      ],
      flow: [
        "Variable pest population",
        "Pesticide application",
        "Susceptible individuals die",
        "Resistant survivors reproduce",
        "Resistant allele frequency rises",
        "Same pesticide loses effectiveness",
      ],
    },
    {
      eyebrow: "Later pesticide classes",
      title: "Organophosphates and carbamates: less persistence, acute neurotoxicity",
      paragraphs: [
        "In response to organochlorine persistence, less persistent organophosphates and carbamates were introduced. Faster environmental degradation can reduce long-term accumulation, but many compounds inhibit acetylcholinesterase and can cause severe acute nervous-system toxicity.",
        "An organophosphate phosphorylates or otherwise inhibits acetylcholinesterase, so acetylcholine accumulates at synapses. Carbamates carbamylate the enzyme, often reversibly compared with many organophosphates. Toxicity varies by compound, formulation and exposure.",
        "This is a classic environmental trade-off: lower persistence may reduce chronic food-web accumulation, yet acute risk to agricultural workers can rise. Protective equipment, application controls, training, safer formulations and non-chemical methods are essential.",
      ],
      equations: [
        "Acetylcholine + H₂O —AChE→ choline + acetate",
        "AChE inhibition → acetylcholine accumulation → cholinergic overstimulation",
      ],
      boxes: [
        {
          title: "Persistence and toxicity are different axes",
          body: "A chemical may be short-lived but acutely toxic, or persistent with lower immediate toxicity. Environmental selection requires a multi-criteria comparison.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Herbicides",
      title: "Weed control and unintended ecological cost",
      paragraphs: [
        "Sodium chlorate and sodium arsenite are textbook inorganic herbicides. Triazines and phenoxy acids are organic herbicides. Many herbicides are less persistent than organochlorine insecticides and may decompose within months, yet they can injure non-target plants, contaminate runoff and select resistant weeds.",
        "The NCERT source notes that some herbicides are toxic to mammals, can cause birth defects and may become concentrated in food webs. It also cites studies in which chemically weeded cornfields became more vulnerable to insects and disease than manually weeded fields. The broader lesson is that removing one ecological group can alter habitat and food-web interactions.",
      ],
      boxes: [
        {
          title: "Arsenite wording",
          body: "The chemically correct ion is arsenite, AsO₃³⁻, and the salt is Na₃AsO₃. Some source questions print arsinite or arsinate. Use formula and oxidation state to avoid spelling-based confusion.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Control and remediation",
      title: "Prevent loading, then manage contaminated soil",
      bullets: [
        "Use integrated pest management and apply chemicals only when monitoring and economic thresholds justify them.",
        "Select the least hazardous effective agent, rotate modes of action and prevent drift with correct nozzle, weather and buffer zones.",
        "Maintain soil organic matter and vegetation to reduce erosion and runoff while monitoring persistent residues.",
        "Excavate and securely contain small highly contaminated zones when immediate removal is necessary.",
        "Use bioremediation for biodegradable organics where organisms can access and transform the pollutant.",
        "Use phytoremediation to extract, stabilise or transform selected contaminants; manage contaminated biomass safely.",
        "Immobilise metals by pH control, phosphate/mineral amendments or sorbents when removal is impractical, while verifying long-term stability.",
      ],
    },
  ],
  examples: [
    {
      title: "Tenfold biomagnification",
      problem: "Water contains 0.002 ppm of a persistent pollutant. In an illustrative four-step chain, each trophic transfer multiplies concentration by 10. What is the level-4 concentration after three transfers?",
      steps: [
        "After first transfer: 0.002 × 10 = 0.02 ppm.",
        "After second: 0.2 ppm.",
        "After third: 2.0 ppm.",
      ],
      answer: "2.0 ppm, one thousand times the initial water concentration.",
    },
    {
      title: "Resistance is selection",
      problem: "A pesticide kills 99% of a pest population, but the surviving 1% has heritable resistance. What happens with repeated exclusive use?",
      steps: [
        "Susceptible individuals contribute fewer offspring.",
        "Resistant survivors contribute a larger fraction of genes.",
        "Resistance frequency rises across generations.",
      ],
      answer: "The population becomes increasingly resistant; rotate modes of action and use integrated control.",
    },
    {
      title: "Classify four chemicals",
      problem: "Classify DDT, sodium chlorate, nicotine and malathion by the target-use categories in the source.",
      steps: [
        "DDT is an organochlorine insecticide.",
        "Sodium chlorate is a herbicide.",
        "Nicotine has been used as a natural insecticidal pesticide.",
        "Malathion is an organophosphate insecticide.",
      ],
      answer: "DDT/insecticide; sodium chlorate/herbicide; nicotine/insecticide; malathion/organophosphate insecticide.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Classification",
      question: "Which pair contains only textbook herbicides?",
      options: ["Aldrin and dieldrin", "Sodium chlorate and sodium arsenite", "DDT and BHC", "Nicotine and malathion"],
      answer: "B",
      solution: "Sodium chlorate and Na₃AsO₃ are listed as herbicides. The other pairs are insecticidal pesticides.",
    },
    {
      number: 2,
      tag: "Concept",
      question: "Biomagnification means:",
      options: ["Dilution within one lake", "Increase across trophic levels", "Only direct uptake from water", "Rapid biodegradation"],
      answer: "B",
      solution: "Predators retain persistent chemicals obtained from many prey, producing higher concentration at successive trophic levels.",
    },
    {
      number: 3,
      tag: "Multiple correct",
      question: "Which properties favour biomagnification?",
      options: ["Persistence", "Lipid solubility", "Rapid metabolism and excretion", "Food-web transfer"],
      answer: "A, B and D",
      solution: "Rapid metabolism/excretion opposes accumulation. Persistence, lipid affinity and trophic transfer favour magnification.",
    },
    {
      number: 4,
      tag: "Resistance",
      question: "Repeated use of one pesticide mainly increases resistance by:",
      options: ["Selection of resistant survivors", "Converting every susceptible insect immediately", "Destroying all genetic variation", "Increasing soil oxygen"],
      answer: "A",
      solution: "The pesticide selects existing or newly arising heritable resistance; survivors reproduce.",
    },
    {
      number: 5,
      tag: "Trade-off",
      question: "Organophosphates may be less persistent than DDT but still hazardous because many are:",
      options: ["Severe nerve toxins", "Noble gases", "Nutrients", "Completely non-reactive"],
      answer: "A",
      solution: "Many inhibit acetylcholinesterase and can cause serious acute poisoning.",
    },
    {
      number: 6,
      tag: "Soil chemistry",
      question: "Lowering soil pH can increase mobility of many metal cations because it:",
      options: ["Promotes desorption and mineral dissolution", "Destroys the element", "Makes every metal volatile", "Stops all exchange reactions"],
      answer: "A",
      solution: "H⁺ competes for surfaces and dissolves carbonate/hydroxide phases, releasing metal ions.",
    },
  ],
  recap: [
    "Soil particles, water, air, organic matter and microbes control pollutant fate.",
    "Pesticide is broad; insecticide and herbicide are target-specific subclasses.",
    "DDT, aldrin and dieldrin are persistent organochlorines.",
    "Bioaccumulation occurs in one organism; biomagnification rises across trophic levels.",
    "Repeated pesticide use selects resistant survivors.",
    "Organophosphates/carbamates may degrade faster yet be acutely neurotoxic.",
    "Sodium chlorate and sodium arsenite are textbook herbicides.",
    "Integrated pest management reduces chemical dependence and selection pressure.",
  ],
};

export default function Part10() {
  return <EnvironmentalChemistryPart data={part10Data} />;
}
