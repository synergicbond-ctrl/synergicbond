"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part06Data: PartData = {
  part: 6,
  title: "Stratospheric Ozone and the Ozone Hole",
  subtitle: "Chapman formation, catalytic radical cycles, CFC photolysis, chlorine reservoirs, polar stratospheric clouds and biological consequences.",
  goals: [
    "Write the complete formation and natural destruction sequence of ozone.",
    "Explain why O₂ photolysis needs shorter-wavelength UV than O₃ photolysis.",
    "Derive catalytic Cl and NO ozone-loss cycles.",
    "Track chlorine from stable CFC to radical, reservoir and active form.",
    "Explain Antarctic winter activation and spring ozone loss.",
    "Separate stratospheric protection from tropospheric pollution.",
  ],
  sourceNote: "Source coverage: NCERT pp. 413-414; Essential Sheet pp. 7-8; Environmental Chemistry Theory pp. 183-184 and pp. 298-299; dark ozone visuals selected from The Architecture of Environmental Chemistry after removing footer branding.",
  heroImage: {
    src: "/environmental-chemistry/stratospheric-ozone-formation.webp",
    alt: "Dark educational graphic showing ultraviolet radiation splitting dioxygen and ozone forming in the stratosphere",
    caption: "Stratospheric ozone is continuously formed and destroyed. It is a dynamic photochemical shield, not a permanent sheet.",
  },
  sections: [
    {
      eyebrow: "Protective shield",
      title: "Where ozone is beneficial and why",
      paragraphs: [
        "The ozone layer is a region of enhanced O₃ concentration in the stratosphere, not a pure layer of gas. It absorbs much of the biologically damaging ultraviolet radiation before it reaches Earth's surface. The NCERT source states that stratospheric ozone prevents about 99.5% of harmful UV radiation from reaching the surface and highlights radiation near 255 nm.",
        "UV-C is absorbed strongly by O₂ and O₃ high in the atmosphere. Ozone also absorbs much UV-B, while much UV-A reaches the surface. Increased UV-B exposure raises the risk of skin cancer, sunburn and cataract and damages plants, phytoplankton and materials.",
        "Near-ground ozone has the same formula but a different environmental role. It is a strong oxidising secondary pollutant. Therefore the statements ozone is protective and ozone is toxic can both be true when altitude and exposure are specified.",
      ],
      table: {
        headers: ["Location", "How O₃ is formed", "Dominant role"],
        rows: [
          ["Stratosphere", "Photolysis of O₂ followed by O + O₂ + M", "Absorbs harmful UV; beneficial shield"],
          ["Troposphere", "NO₂ photolysis coupled to NOₓ-VOC radical chemistry", "Oxidising pollutant, smog component and greenhouse gas"],
        ],
      },
    },
    {
      eyebrow: "Chapman chemistry",
      title: "Natural formation and breakdown",
      paragraphs: [
        "A sufficiently energetic UV photon splits O₂ into two oxygen atoms. Each O atom can add to another O₂ molecule, while a third body M removes excess energy. Ozone itself absorbs UV and photolyses to O₂ + O. Atomic oxygen can also react with ozone to produce two O₂ molecules.",
        "These formation and loss reactions produce a dynamic steady state. The concentration at any altitude reflects light intensity, O₂ abundance, temperature and catalytic species. Ozone is thermodynamically less stable than O₂; continuous photochemical production maintains it.",
      ],
      equations: [
        "O₂ + hν → O + O  (short-wavelength UV)",
        "O + O₂ + M → O₃ + M",
        "O₃ + hν → O₂ + O",
        "O + O₃ → 2O₂",
      ],
      boxes: [
        {
          title: "Third-body logic",
          body: "Without M, the newly formed energized O₃ can fall apart. M accepts excess energy by collision and is not consumed.",
          tone: "concept",
        },
        {
          title: "Dynamic does not mean equal amounts",
          body: "A steady ozone concentration means formation rate equals destruction rate, not that [O₂] equals [O₃] or that each elementary step is at equilibrium.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Catalysis",
      title: "A radical can destroy many ozone molecules",
      paragraphs: [
        "In a catalytic cycle the reactive species is regenerated and cancels from the net equation. For chlorine, Cl• consumes O₃ to form ClO•; ClO• reacts with atomic oxygen and returns Cl•. The net conversion is O₃ + O → 2O₂.",
        "A single chlorine atom can therefore repeat the cycle until it is removed by a termination reaction or stored in a reservoir such as HCl or ClONO₂. The supplied material describes one CFC molecule as capable of destroying more than a thousand ozone molecules; the important reasoning is regeneration, not memorising a universal fixed count.",
      ],
      equations: [
        "Cl• + O₃ → ClO• + O₂",
        "ClO• + O → Cl• + O₂",
        "Net: O₃ + O → 2O₂",
        "NO + O₃ → NO₂ + O₂",
        "NO₂ + O → NO + O₂",
        "Net: O₃ + O → 2O₂  (NOₓ catalytic cycle)",
      ],
      boxes: [
        {
          title: "Catalyst test",
          body: "Add the elementary steps and cancel any species appearing unchanged on both sides. If Cl• or NO cancels and ozone remains a reactant in the net equation, the cycle is catalytic.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "CFC activation",
      title: "Why stable CFCs become dangerous in the stratosphere",
      paragraphs: [
        "CFCs were useful because they are non-flammable, relatively non-toxic and unreactive in the lower atmosphere. They were used in refrigeration, air-conditioning, foam production, aerosols and cleaning. The same tropospheric stability gives them time to diffuse upward.",
        "In the stratosphere, higher-energy UV radiation breaks a C-Cl bond and releases Cl•. The chlorine radical enters catalytic ozone-loss cycles. CFCs are therefore transport agents that carry chlorine through the lower atmosphere in an apparently stable form and release it where strong UV is available.",
        "Not every chlorine-containing compound has the same ozone-depletion potential. A compound destroyed rapidly in the lower atmosphere may not deliver chlorine to the stratosphere. Lifetime and transport are as important as chlorine content.",
      ],
      equations: [
        "CF₂Cl₂ + hν → CF₂Cl• + Cl•",
        "CFCl₃ + hν → CFCl₂• + Cl•",
      ],
      image: {
        src: "/environmental-chemistry/cfc-ozone-depletion.webp",
        alt: "Dark source-derived graphic showing a CFC reaching the stratosphere, ultraviolet photolysis and chlorine radical ozone destruction",
        caption: "The CFC is the stable carrier; UV releases the active Cl radical, which is regenerated after attacking ozone.",
      },
    },
    {
      eyebrow: "Reservoir chemistry",
      title: "Chlorine sinks store radicals temporarily",
      paragraphs: [
        "Reactive chlorine does not remain entirely as Cl• and ClO•. It is converted to comparatively inactive reservoirs. ClO• reacts with NO₂ to produce chlorine nitrate, ClONO₂. Cl• abstracts H from methane to form HCl. These reactions suppress immediate ozone destruction at many locations.",
        "A reservoir is not permanent removal. HCl and ClONO₂ can be converted back to photolabile forms. Polar stratospheric cloud surfaces are crucial because they bring reservoir species together and support heterogeneous reactions that are slow in the gas phase.",
      ],
      equations: [
        "ClO• + NO₂ + M → ClONO₂ + M",
        "Cl• + CH₄ → HCl + CH₃•",
        "ClONO₂ + H₂O → HOCl + HNO₃  (PSC surface)",
        "ClONO₂ + HCl → Cl₂ + HNO₃  (PSC surface)",
      ],
      structures: [
        {
          name: "Active chlorine",
          formula: "Cl• / ClO•",
          note: "Radical forms that participate rapidly in ozone-loss cycles.",
        },
        {
          name: "Reservoir chlorine",
          formula: "HCl / ClONO₂",
          note: "Comparatively inactive until heterogeneous activation.",
        },
        {
          name: "Photolabile chlorine",
          formula: "Cl₂ / HOCl",
          note: "Sunlight releases radicals after polar winter.",
        },
      ],
    },
    {
      eyebrow: "Polar mechanism",
      title: "Why the Antarctic ozone hole peaks in spring",
      paragraphs: [
        "During Antarctic winter the polar stratosphere becomes extremely cold and isolated by a strong vortex. Polar stratospheric clouds form. Their particle surfaces convert HCl and ClONO₂ reservoirs into Cl₂ and HOCl, while HNO₃ may remain on or settle with particles, limiting reformation of chlorine nitrate.",
        "The winter is dark, so the newly formed Cl₂ is not immediately photolysed. When sunlight returns in spring, Cl₂ and HOCl absorb light and release Cl radicals rapidly. The activated chlorine participates in fast catalytic cycles, and ozone falls sharply inside the vortex. As the stratosphere warms and the vortex breaks down, air mixes and the seasonal hole recovers.",
        "The phrase ozone hole means a severe seasonal reduction in total column ozone, not a literal empty puncture in the atmosphere.",
      ],
      flow: [
        "Cold isolated polar winter",
        "Polar stratospheric clouds form",
        "HCl and ClONO₂ converted to Cl₂ and HOCl",
        "Sunlight returns in spring",
        "Cl₂ and HOCl photolyse to Cl radicals",
        "Rapid catalytic ozone loss",
      ],
      equations: [
        "Cl₂ + hν → 2Cl•",
        "HOCl + hν → OH• + Cl•",
      ],
    },
    {
      eyebrow: "Consequences",
      title: "Effects of increased surface UV-B",
      table: {
        headers: ["Target", "Effect"],
        rows: [
          ["Humans", "Sunburn, premature skin ageing, cataract, skin cancer and immune effects"],
          ["Plants", "Protein/DNA damage, mutation, impaired growth and altered photosynthesis"],
          ["Phytoplankton", "Reduced productivity at the base of aquatic food webs"],
          ["Aquatic systems", "Damage to eggs, larvae and fish productivity through food-web effects"],
          ["Soil-water balance", "Greater leaf injury and altered stomatal behaviour; the text notes increased surface-water evaporation and lower soil moisture"],
          ["Materials", "Faster fading and degradation of paints, fibres, plastics and rubber"],
        ],
      },
      paragraphs: [
        "UV radiation damages biological molecules by photochemical reactions. DNA absorbs UV and can form lesions; organisms possess repair mechanisms, but excessive exposure overwhelms protection. Ecosystem consequences may propagate through food webs when primary producers are injured.",
      ],
    },
    {
      eyebrow: "Control and synthesis",
      title: "Prevent stratospheric delivery of ozone-depleting substances",
      bullets: [
        "Phase out high ozone-depletion-potential CFCs and halons and replace them with carefully evaluated alternatives.",
        "Recover refrigerants during servicing and equipment disposal rather than venting them.",
        "Prevent leakage through good design, monitoring and maintenance.",
        "Destroy collected ozone-depleting substances using approved high-temperature or chemical methods.",
        "Evaluate replacements for flammability, toxicity, atmospheric lifetime and global-warming effect as well as ozone impact.",
        "Distinguish ozone-safe from climate-safe; an alternative can have zero ozone-depletion potential yet a high global-warming potential.",
      ],
      boxes: [
        {
          title: "Final exam distinction",
          body: "Stratospheric O₃: formed from O₂ by UV and protects life. Tropospheric O₃: formed from NOₓ-VOC photochemistry and damages life. CFCs: stable carriers that release Cl• under stratospheric UV.",
          tone: "green",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Obtain the net chlorine-cycle equation",
      problem: "Add Cl• + O₃ → ClO• + O₂ and ClO• + O → Cl• + O₂.",
      steps: [
        "Write both equations and add their reactants and products.",
        "Cancel Cl• because it appears on both sides.",
        "Cancel ClO• because it appears on both sides.",
      ],
      answer: "O₃ + O → 2O₂; chlorine is regenerated and acts catalytically.",
    },
    {
      title: "Identify A, B and C on a polar cloud",
      problem: "ClONO₂ + H₂O gives A + B, while ClONO₂ + HCl gives B + C. Identify A, B and C.",
      steps: [
        "Hydrolysis produces HOCl + HNO₃, so A = HOCl and B = HNO₃.",
        "Reaction with HCl produces Cl₂ + HNO₃, confirming B = HNO₃ and giving C = Cl₂.",
      ],
      answer: "A = HOCl, B = HNO₃, C = Cl₂.",
    },
    {
      title: "Explain spring timing",
      problem: "Why does extensive Antarctic ozone destruction wait until sunlight returns?",
      steps: [
        "Winter PSC chemistry accumulates photolabile Cl₂ and HOCl.",
        "Darkness prevents efficient photolysis.",
        "Spring sunlight releases Cl radicals that start catalytic destruction.",
      ],
      answer: "PSC activation occurs in winter, but sunlight is required to liberate the radical catalyst in spring.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Reaction",
      question: "The role of M in O + O₂ + M → O₃ + M is to:",
      options: ["Supply oxygen atoms", "Remove excess energy", "Destroy ozone", "Absorb all UV"],
      answer: "B",
      solution: "M stabilises newly formed ozone by carrying away excess collisional energy and is unchanged overall.",
    },
    {
      number: 2,
      tag: "Catalysis",
      question: "Which species cancels from the net chlorine ozone-loss cycle?",
      options: ["O₃ only", "O₂ only", "Cl• and ClO•", "Atomic O only"],
      answer: "C",
      solution: "Cl• is consumed then regenerated, while ClO• is formed then consumed. Both are catalytic intermediates.",
    },
    {
      number: 3,
      tag: "Multiple correct",
      question: "Polar stratospheric clouds facilitate:",
      options: ["Formation of HOCl", "Formation of Cl₂", "Heterogeneous reservoir activation", "Direct formation of CH₄"],
      answer: "A, B and C",
      solution: "PSC surfaces convert HCl and ClONO₂ into HOCl and Cl₂. They do not create methane.",
    },
    {
      number: 4,
      tag: "Location",
      question: "Which statement is correct?",
      options: ["Tropospheric ozone is always protective.", "Stratospheric ozone is a primary tailpipe pollutant.", "Stratospheric ozone absorbs harmful UV.", "CFCs release Cl mainly because of rainwater."],
      answer: "C",
      solution: "Stratospheric ozone is produced photochemically and absorbs UV. CFCs release Cl through energetic UV photolysis.",
    },
    {
      number: 5,
      tag: "Reservoir",
      question: "Which pair represents relatively inactive chlorine reservoirs?",
      options: ["Cl• and ClO•", "HCl and ClONO₂", "O and O₃", "NO and NO₂"],
      answer: "B",
      solution: "HCl and chlorine nitrate store chlorine until heterogeneous and photochemical activation occurs.",
    },
    {
      number: 6,
      tag: "Consequence",
      question: "Ozone-layer depletion most directly increases exposure to:",
      options: ["Infrared radiation", "UV-B radiation", "Radio waves", "Visible green light only"],
      answer: "B",
      solution: "Loss of stratospheric ozone permits more biologically damaging UV-B to reach lower levels.",
    },
  ],
  recap: [
    "O₂ + hν gives O atoms; O + O₂ + M gives O₃.",
    "Ozone formation and destruction form a dynamic photochemical steady state.",
    "Cl• + O₃ and ClO• + O form a catalytic cycle with net O₃ + O → 2O₂.",
    "CFC stability allows stratospheric transport; UV releases Cl radicals.",
    "HCl and ClONO₂ are reservoirs; Cl₂ and HOCl are photolabile activated forms.",
    "PSC surfaces activate chlorine during the cold polar winter.",
    "Spring sunlight releases radicals and produces the Antarctic ozone hole.",
    "Stratospheric ozone protects; tropospheric ozone pollutes.",
  ],
};

export default function Part06() {
  return <EnvironmentalChemistryPart data={part06Data} />;
}
