"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part04Data: PartData = {
  part: 4,
  title: "Smog, Ozone, Radicals and PAN",
  subtitle: "A reaction-centred comparison of classical sulphurous smog and sunlight-driven photochemical smog.",
  goals: [
    "Distinguish reducing and oxidising smog from their conditions and composition.",
    "Derive the NO-NO₂-O₃ photostationary cycle.",
    "Explain why VOC-derived peroxy radicals make ozone accumulate.",
    "Construct PAN from an acyl radical and NO₂.",
    "Relate each smog component to health, plant and material damage.",
    "Choose precursor controls rather than attempting to remove every secondary product.",
  ],
  sourceNote: "Source coverage: NCERT pp. 411-413; Essential Sheet pp. 5-7; Environmental Chemistry Theory pp. 185-186 and pp. 297-298. Radical steps and the PAN structure have been visually checked against the image-only source.",
  heroImage: {
    src: "/environmental-chemistry/photochemical-smog.webp",
    alt: "Dark city illustration of sunlight-driven nitrogen oxide and hydrocarbon chemistry producing ozone and haze",
    caption: "Photochemical smog is built in the atmosphere: sunlight, NOₓ and organic radicals generate ozone, carbonyls, PAN and other oxidants downwind of primary emissions.",
  },
  sections: [
    {
      eyebrow: "Two regimes",
      title: "Classical smog versus photochemical smog",
      table: {
        headers: ["Feature", "Classical / London smog", "Photochemical / Los Angeles smog"],
        rows: [
          ["Favouring weather", "Cool, humid, foggy, weak dispersion; commonly winter", "Warm, dry, sunny, stagnant; commonly summer daytime"],
          ["Primary precursors", "SO₂, smoke/soot and fog droplets", "NOₓ and hydrocarbons/VOCs from vehicles and industry"],
          ["Chemical character", "Reducing because of SO₂ and carbonaceous material", "Oxidising because of O₃, NO₂, peroxides and PAN"],
          ["Characteristic products", "Sulphurous/sulphuric acid aerosol and soot-rich fog", "O₃, aldehydes, acrolein, ketones and peroxyacyl nitrates"],
          ["Fast clue", "Smoke + fog + SO₂", "Sunlight + NOₓ + VOCs"],
          ["Major effects", "Respiratory stress and visibility loss", "Eye irritation, cough, plant damage and rubber cracking"],
        ],
      },
      paragraphs: [
        "Smog originally combined the words smoke and fog, but modern usage covers several polluted haze mixtures. The classical London type develops when coal smoke and SO₂ enter cool humid air. Droplets and particles support conversion of SO₂ to acid sulphate. The mixture is reducing.",
        "Photochemical smog develops when sunlight acts on NOₓ and reactive organic compounds. Its key products are not emitted in their final form. Ozone, PAN, formaldehyde and other oxidants are secondary pollutants. A question that calls photochemical smog a reducing mixture or assigns it to cool humid conditions is incorrect.",
      ],
      boxes: [
        {
          title: "SO₂ is the decisive smog clue",
          body: "SO₂, soot and fog point to classical smog. NOₓ, unsaturated hydrocarbons, sunlight, O₃ and PAN point to photochemical smog.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Initiation",
      title: "NO₂ photolysis creates ozone",
      paragraphs: [
        "Combustion first emits NO. Oxidation produces NO₂, a brown gas that absorbs sunlight. Photolysis breaks an N-O bond and releases ground-state atomic oxygen. The oxygen atom adds to O₂; a third body M carries away excess energy and stabilises ozone.",
        "Ozone then oxidises NO back to NO₂. If only NO, NO₂ and O₃ were present, this reaction would consume much of the newly formed ozone and establish a photostationary state. Ozone accumulation requires a pathway that converts NO to NO₂ without spending an O₃ molecule.",
      ],
      equations: [
        "NO₂ + hν → NO + O",
        "O + O₂ + M → O₃ + M",
        "NO + O₃ → NO₂ + O₂",
        "Net of the last two propagation directions: rapid cycling among NO, NO₂ and O₃",
      ],
      flow: [
        "Engine emits NO and VOCs",
        "NO oxidises to brown NO₂",
        "Sunlight photolyses NO₂",
        "O atom forms O₃",
        "O₃ reacts with NO unless radical chemistry diverts NO",
      ],
      boxes: [
        {
          title: "Role of M",
          body: "M is a third-body collider, commonly N₂ or O₂. It removes excess energy and is unchanged overall. Writing O + O₂ → O₃ without M is accepted in simple NCERT equations, but M gives the physical stabilisation step.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Radical amplification",
      title: "How VOCs allow ozone to build up",
      paragraphs: [
        "The hydroxyl radical OH• initiates daytime oxidation of a hydrocarbon RH by abstracting H. The carbon radical R• rapidly adds O₂ to form a peroxy radical RO₂•. RO₂• oxidises NO to NO₂ while becoming an alkoxy radical RO•. Because no O₃ is consumed in this conversion, the additional NO₂ can photolyse and create another ozone molecule.",
        "HO₂• has the same important function: HO₂• + NO → OH• + NO₂. The OH radical is regenerated, so one initiation event can support a chain of reactions. Subsequent oxidation of RO• produces carbonyl compounds, peroxides and smaller radicals. The exact product distribution depends on VOC structure, NOₓ level, sunlight and humidity.",
        "This explains why reducing hydrocarbon leakage and NOₓ emissions controls secondary ozone. It also explains why the simple NO₂ photolysis sequence alone is incomplete: VOC-derived radicals break the ozone-consuming NO titration loop.",
      ],
      equations: [
        "RH + OH• → R• + H₂O",
        "R• + O₂ + M → RO₂• + M",
        "RO₂• + NO → RO• + NO₂",
        "HO₂• + NO → OH• + NO₂",
        "NO₂ + hν → NO + O ; O + O₂ + M → O₃ + M",
      ],
      boxes: [
        {
          title: "Why urban ozone can be lower beside fresh NO emission",
          body: "Fresh NO rapidly consumes O₃ by NO + O₃ → NO₂ + O₂. Downwind, after peroxy radicals convert NO to NO₂, ozone may become higher. Local concentration does not always peak at the emission point.",
          tone: "warning",
        },
      ],
    },
    {
      eyebrow: "Products",
      title: "Aldehydes, acrolein and ketones",
      paragraphs: [
        "Strong oxidants attack unburnt hydrocarbons to produce oxygenated compounds. The NCERT simplified methane equation forms formaldehyde. Formaldehyde, acrolein and ketones irritate eyes and airways and participate in further radical chemistry.",
        "Acrolein is propenal, CH₂=CH-CHO. It contains both a carbon-carbon double bond and an aldehyde group, making it a reactive unsaturated carbonyl. Formaldehyde is methanal, HCHO. These structures are common option-level recognition targets.",
      ],
      equations: [
        "3CH₄ + 2O₃ → 3HCHO + 3H₂O  (simplified textbook representation)",
        "CH₂=CH-CHO  = acrolein (propenal)",
        "H-CHO  = formaldehyde (methanal)",
      ],
      structures: [
        {
          name: "Formaldehyde",
          formula: "H–C(=O)–H",
          note: "Smallest aldehyde; irritant secondary product.",
        },
        {
          name: "Acrolein",
          formula: "CH₂=CH–C(=O)H",
          note: "Unsaturated aldehyde found in photochemical smog.",
        },
        {
          name: "Generic carbonyl",
          formula: "R–C(=O)–R′",
          note: "Ketones and aldehydes arise during VOC oxidation.",
        },
      ],
    },
    {
      eyebrow: "PAN mechanism",
      title: "Peroxyacetyl nitrate is a secondary oxidant and NOₓ reservoir",
      paragraphs: [
        "Oxidation of acetaldehyde removes the aldehydic hydrogen and creates an acetyl radical CH₃CO•. Addition of O₂ gives the peroxyacetyl radical CH₃C(O)OO•. Reversible addition to NO₂ forms peroxyacetyl nitrate, PAN: CH₃C(O)OONO₂.",
        "PAN is a powerful eye irritant and damages vegetation by interfering with photosynthetic processes, chlorophyll formation and enzymes. It is thermally unstable. In cooler air it can persist and transport reactive nitrogen away from a polluted city; in warmer air it decomposes and releases NO₂ and peroxyacetyl radical. It therefore acts as both a pollutant and a temporary NOₓ reservoir.",
        "The bond sequence matters: PAN is not an ordinary nitrate ester R-ONO₂. It contains a peroxy linkage, acyl-C(=O)-O-O-NO₂. A structure option lacking O-O is not PAN.",
      ],
      equations: [
        "CH₃CHO + OH• → CH₃CO• + H₂O",
        "CH₃CO• + O₂ → CH₃C(O)OO•",
        "CH₃C(O)OO• + NO₂ ⇌ CH₃C(O)OONO₂",
      ],
      structures: [
        {
          name: "PAN",
          formula: "CH₃–C(=O)–O–O–NO₂",
          note: "Peroxyacetyl nitrate; the O-O linkage is essential.",
        },
        {
          name: "Peroxyacetyl radical",
          formula: "CH₃–C(=O)–O–O•",
          note: "Combines reversibly with NO₂.",
        },
        {
          name: "Acetaldehyde",
          formula: "CH₃–C(=O)H",
          note: "Oxidation precursor for the acetyl radical.",
        },
      ],
    },
    {
      eyebrow: "Effects",
      title: "Health, plant and material damage",
      table: {
        headers: ["Agent", "Human effect", "Plant/material effect"],
        rows: [
          ["O₃", "Oxidative airway irritation, cough, chest discomfort", "Leaf injury, reduced growth, rubber cracking"],
          ["PAN", "Powerful eye irritant and lachrymator", "Damages photosynthetic machinery and enzymes"],
          ["NO₂", "Lung irritant; contributes to brown haze", "Reduces photosynthesis; attacks dyes and metals"],
          ["Formaldehyde/acrolein", "Eye, nose and throat irritation", "Reactive carbonyl stress"],
          ["Fine aerosol", "Penetrates respiratory tract", "Visibility loss and surface soiling"],
        ],
      },
      paragraphs: [
        "Ozone attacks carbon-carbon double bonds in natural rubber, cutting polymer chains and producing characteristic cracking under strain. Strong oxidants also fade dyes, attack paint and accelerate deterioration of organic materials. Photochemical smog can corrode metals and stone indirectly through oxidants and acidic products.",
        "Visibility decreases because NO₂ absorbs visible light and fine particles scatter it. The brown colour is primarily associated with NO₂, whereas a white or grey haze often reflects aerosol scattering.",
      ],
    },
    {
      eyebrow: "Meteorology",
      title: "Sunlight, stagnation and inversion",
      paragraphs: [
        "Photochemical production needs sunlight, but concentration also depends on mixing. A temperature inversion occurs when warmer air lies above cooler surface air. The stable layer suppresses vertical convection, so emissions accumulate in a shallow volume. Valleys and calm anticyclonic weather are particularly vulnerable.",
        "Classical smog and photochemical smog can both be intensified by poor dispersion, but their chemical regimes differ. Inversion is a meteorological trapping process; it is not the greenhouse effect. The greenhouse effect concerns absorption and re-emission of infrared radiation on a planetary energy balance.",
      ],
      table: {
        headers: ["Phenomenon", "Scale", "Mechanism", "Immediate consequence"],
        rows: [
          ["Thermal inversion", "Local/regional, hours to days", "Stable warm-over-cool air suppresses mixing", "Near-ground pollution accumulation"],
          ["Photochemical smog", "Urban/regional, daytime episode", "Sunlight + NOₓ + VOC radical chemistry", "O₃, PAN and oxidants"],
          ["Greenhouse effect", "Global energy balance", "IR-active gases absorb terrestrial radiation", "Surface and tropospheric warming"],
        ],
      },
    },
    {
      eyebrow: "Control",
      title: "Control the precursors and radical chain",
      bullets: [
        "Maintain engines and use closed fuel systems to reduce unburnt hydrocarbon and evaporative VOC emissions.",
        "Use three-way catalytic converters to oxidise CO/VOCs and reduce NOₓ in petrol-vehicle exhaust.",
        "Control industrial solvent vapour with substitution, enclosure, adsorption, condensation or catalytic oxidation.",
        "Reduce NOₓ formation by lower-temperature combustion, staged combustion and exhaust-gas recirculation.",
        "Manage traffic and promote low-emission transport so total precursor mass falls, especially during stagnant sunny episodes.",
        "The prescribed text names Pinus, Juniperus, Quercus, Pyrus and Vitis as plants capable of metabolising nitrogen oxides. Treat this as a supplementary biological sink, not a replacement for emission control.",
      ],
      boxes: [
        {
          title: "Primary versus secondary control",
          body: "It is usually impractical to remove dispersed O₃ and PAN from an urban atmosphere. Reduce NOₓ and VOC precursors before they react.",
          tone: "green",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Find the ozone-producing event",
      problem: "One RO₂• radical converts one NO to NO₂. If the resulting NO₂ photolyses and the O atom forms ozone, how many net O₃ molecules can be produced in the idealised cycle?",
      steps: [
        "RO₂• converts NO to NO₂ without consuming O₃.",
        "That NO₂ photolyses once to give one O atom.",
        "One O atom combines with O₂ to form one O₃.",
      ],
      answer: "One net ozone molecule per successful NO-to-NO₂ radical conversion in the simplified cycle.",
    },
    {
      title: "Identify a PAN structure",
      problem: "Which structural fragment must appear in PAN: C-O-C, C-O-O-NO₂, or C-N=N-C?",
      steps: [
        "PAN stands for peroxyacetyl nitrate.",
        "Peroxy denotes an O-O bond.",
        "The acetyl group is CH₃C(=O)- and the nitrate end is -NO₂.",
      ],
      answer: "CH₃-C(=O)-O-O-NO₂; therefore the C-O-O-NO₂ fragment is essential.",
    },
    {
      title: "Diagnose a winter pollution episode",
      problem: "A cool humid city burning high-sulphur coal develops fog containing soot and SO₂. Is this photochemical smog?",
      steps: [
        "The weather is cool and humid, not warm and sunny.",
        "The mixture contains smoke/soot, fog and SO₂.",
        "These are the defining clues of classical sulphurous smog.",
      ],
      answer: "No. It is classical or reducing smog.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Single correct",
      question: "Which component converts NO to NO₂ without directly consuming O₃?",
      options: ["RO₂•", "N₂", "CO₂", "SO₂"],
      answer: "A",
      solution: "Peroxy radicals oxidise NO to NO₂. This allows the new NO₂ to photolyse and form additional ozone.",
    },
    {
      number: 2,
      tag: "Multiple correct",
      question: "Photochemical smog commonly contains:",
      options: ["O₃", "PAN", "Formaldehyde", "SO₂ as its defining precursor"],
      answer: "A, B and C",
      solution: "Ozone, PAN and aldehydes are major secondary products. SO₂ is the defining gaseous component of classical sulphurous smog.",
    },
    {
      number: 3,
      tag: "Reaction order",
      question: "Select the correct sequence for ozone generation.",
      options: ["O₂ photolysis → NO₂ → PAN", "NO₂ photolysis → O atom → O₃", "SO₂ hydration → O₃", "PAN hydrolysis → O₃"],
      answer: "B",
      solution: "NO₂ + hν → NO + O, then O + O₂ + M → O₃ + M.",
    },
    {
      number: 4,
      tag: "Structure",
      question: "Which formula represents PAN?",
      options: ["CH₃COOCH₃", "CH₃C(O)OONO₂", "CH₃NO₂", "CH₂=CHCHO"],
      answer: "B",
      solution: "PAN is peroxyacetyl nitrate and contains the sequence CH₃-C(=O)-O-O-NO₂.",
    },
    {
      number: 5,
      tag: "Assertion-reason",
      question: "Assertion: Ozone may be lower beside a fresh NO source than farther downwind. Reason: Fresh NO consumes O₃ to form NO₂.",
      options: ["Both true; reason explains assertion", "Both true; reason does not explain assertion", "Assertion true; reason false", "Assertion false; reason true"],
      answer: "A",
      solution: "Near the source, NO titrates ozone. Downwind, peroxy-radical chemistry converts NO to NO₂ without ozone loss, allowing O₃ accumulation.",
    },
    {
      number: 6,
      tag: "Control",
      question: "The most direct broad strategy for lowering urban photochemical smog is to:",
      options: ["Release more SO₂", "Reduce NOₓ and VOC precursor emissions", "Spray carbonate into the stratosphere", "Increase lead in petrol"],
      answer: "B",
      solution: "O₃, PAN and aldehydes are secondary products. Source control therefore targets NOₓ and VOC precursors.",
    },
  ],
  recap: [
    "Classical smog: cool, humid, smoke + fog + SO₂, reducing.",
    "Photochemical smog: warm, dry, sunny, NOₓ + VOCs, oxidising.",
    "NO₂ photolysis gives O; O + O₂ + M gives O₃.",
    "RO₂• and HO₂• convert NO to NO₂ without consuming ozone.",
    "PAN structure is CH₃-C(=O)-O-O-NO₂.",
    "O₃ and PAN are eye/airway irritants; oxidants crack rubber and injure plants.",
    "Inversion traps pollution but is not the greenhouse effect.",
    "Control NOₓ and VOC precursors before secondary products form.",
  ],
};

export default function Part04() {
  return <EnvironmentalChemistryPart data={part04Data} />;
}
