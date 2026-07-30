"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part05Data: PartData = {
  part: 5,
  title: "Greenhouse Effect, Climate Forcing and Inversion",
  subtitle: "Radiation balance, infrared-active molecular vibrations, major gases, feedbacks and the traps that separate global warming from local air stagnation.",
  goals: [
    "Explain the natural and enhanced greenhouse effects without the glass-lid misconception.",
    "Predict whether a molecular vibration can absorb infrared radiation.",
    "Compare CO₂, CH₄, N₂O, H₂O, O₃ and halocarbons.",
    "Separate concentration, efficiency, lifetime and total climate contribution.",
    "Distinguish greenhouse warming from ozone depletion and thermal inversion.",
    "Connect sources, sinks and practical mitigation.",
  ],
  sourceNote: "Source coverage: NCERT pp. 408-409 and summary; Essential Sheet pp. 3-4; Environmental Chemistry Theory pp. 185 and 296. The molecular IR explanation is an advanced expansion. One requested atmospheric PDF did not materialise and is not claimed here.",
  heroImage: {
    src: "/environmental-chemistry/greenhouse-effect.webp",
    alt: "Dark Earth-horizon illustration showing incoming sunlight and outgoing infrared energy partly absorbed and re-emitted",
    caption: "The atmosphere is not a solid lid: greenhouse gases absorb selected bands of outgoing infrared radiation and re-emit energy, while some radiation still escapes to space.",
  },
  sections: [
    {
      eyebrow: "Energy balance",
      title: "The natural greenhouse effect makes Earth habitable",
      paragraphs: [
        "Solar radiation reaching Earth is concentrated at shorter wavelengths because the Sun is hot. Some is reflected by clouds, aerosols, ice and the surface; the rest is absorbed by the atmosphere and surface. The warmed surface emits longer-wavelength infrared radiation.",
        "Greenhouse gases absorb selected infrared frequencies and re-emit radiation in all directions. Downward emission reduces the net rate at which the surface and lower atmosphere lose energy to space. The system warms until outgoing energy again balances absorbed solar energy. This natural effect maintains a temperature compatible with life.",
        "The enhanced greenhouse effect is the additional change caused when human activity raises concentrations of long-lived IR-absorbing gases or changes natural sinks. It is not accurate to say that all heat is permanently trapped. Energy continues to escape, but from a changed temperature and altitude distribution.",
      ],
      equations: [
        "Absorbed solar power ≈ outgoing terrestrial infrared power  (long-term planetary balance)",
        "Higher IR opacity → effective emission to space from a colder altitude → initial energy imbalance → warming",
      ],
      boxes: [
        {
          title: "NCERT energy statement",
          body: "The prescribed text states that about 75% of solar energy reaching Earth is absorbed by the surface and the remaining heat radiates back to the atmosphere. Use its qualitative conclusion for exams, but understand that real radiation budgets include reflection and atmospheric absorption.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Molecular spectroscopy",
      title: "Why some gases absorb terrestrial infrared radiation",
      paragraphs: [
        "A molecular vibration is infrared active when it changes the dipole moment. Homonuclear diatomic molecules N₂ and O₂ have no dipole-changing fundamental vibration and absorb terrestrial infrared radiation weakly; abundance alone does not make them important greenhouse gases.",
        "CO₂ is linear and has no permanent dipole, yet its bending and asymmetric-stretch vibrations create a changing dipole and are IR active. Its symmetric stretch does not change the dipole in an isolated ideal molecule and is IR inactive. H₂O, CH₄, N₂O, O₃ and many halocarbons possess IR-active modes.",
        "A strong greenhouse gas absorbs where outgoing terrestrial radiation is available and where the atmosphere is not already completely opaque. Molecular absorption strength, concentration, spectral overlap, atmospheric lifetime and vertical distribution all influence climate forcing.",
      ],
      table: {
        headers: ["Molecule", "IR behaviour", "Reasoning"],
        rows: [
          ["N₂", "Not an important direct greenhouse gas", "Homonuclear; vibration does not create a dipole change"],
          ["O₂", "Not an important direct greenhouse gas", "Homonuclear; weak relevant IR absorption"],
          ["CO₂", "Important", "Bending and asymmetric stretch change dipole moment"],
          ["H₂O", "Important natural greenhouse gas", "Bent polar molecule with strong rotational-vibrational bands"],
          ["CH₄", "Important", "Several vibrations create transient dipole changes"],
          ["CFCs", "Very effective per molecule", "Strong absorption in useful spectral windows and often long lifetimes"],
        ],
      },
      boxes: [
        {
          title: "Permanent dipole not required",
          body: "The requirement is a changing dipole during a vibration. Therefore non-polar CO₂ can absorb IR even though its equilibrium dipole moment is zero.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Gas inventory",
      title: "Sources, sinks and special roles of greenhouse gases",
      table: {
        headers: ["Gas", "Major sources in this chapter", "Major removal or control", "Special exam note"],
        rows: [
          ["CO₂", "Fossil combustion, cement manufacture, respiration, decomposition, deforestation imbalance", "Photosynthesis, ocean uptake, carbonate/sediment storage", "Largest long-lived anthropogenic contribution in basic texts"],
          ["CH₄", "Wetlands, paddy fields, ruminants, coal mines, landfills, anaerobic decay and fossil systems", "Atmospheric oxidation by OH; leakage and waste control", "Stronger per molecule than CO₂ but lower concentration and shorter lifetime"],
          ["N₂O", "Soils, fertiliser use, industry and combustion", "Slow stratospheric destruction; better nitrogen management", "Also participates in stratospheric ozone chemistry"],
          ["H₂O vapour", "Evaporation and transpiration", "Condensation and precipitation", "Dominant natural greenhouse gas; mainly a feedback on modern global warming"],
          ["O₃", "Tropospheric and stratospheric photochemistry", "Photolysis and chemical reaction", "Climate effect and biological role depend strongly on altitude"],
          ["CFCs/halocarbons", "Historic refrigeration, foams, aerosols and cleaning uses", "Phase-out, containment and destruction", "Many have high warming efficiency and deplete ozone"],
        ],
      },
      paragraphs: [
        "CO₂ is released by respiration and natural decomposition as part of the carbon cycle, but fossil carbon and deforestation add CO₂ faster than natural sinks remove the extra amount. Cement manufacture releases CO₂ both from fuel use and limestone calcination: CaCO₃ → CaO + CO₂.",
        "Methane forms under anaerobic conditions. It is produced in paddy fields, wetlands, landfills and the digestive systems of ruminants, and escapes from coal, oil and gas operations. Its atmospheric oxidation eventually produces CO₂ and water, but during its lifetime it is a powerful greenhouse gas and can influence tropospheric ozone chemistry.",
      ],
      equations: [
        "CaCO₃(s) → CaO(s) + CO₂(g)  (cement-lime calcination)",
        "Organic matter → CH₄ + CO₂  (anaerobic digestion, schematic)",
        "CH₄ + OH• → CH₃• + H₂O  (first atmospheric oxidation step)",
      ],
    },
    {
      eyebrow: "Contribution logic",
      title: "Abundance, lifetime and strength are different questions",
      paragraphs: [
        "The phrase strongest greenhouse gas is ambiguous. It may refer to absorption per molecule, radiative forcing from the present concentration, lifetime-integrated warming relative to CO₂, or the dominant natural contribution. A correct answer must identify the comparison being made.",
        "A gas at low concentration can be efficient per molecule but make a smaller total contribution than abundant CO₂. Water vapour gives the largest natural greenhouse effect but condenses rapidly and responds to temperature; it amplifies warming as a feedback. CO₂ persists across several reservoirs and acts as a major forcing.",
        "The supplied exercise material uses older simplified rankings and statements such as methane being about forty times stronger than CO₂. Modern global-warming-potential values depend on time horizon and assessment. In source-based JEE questions, follow the stated comparison; in concept explanations, specify the metric and time horizon.",
      ],
      table: {
        headers: ["Quantity", "Question it answers", "Why it differs"],
        rows: [
          ["Concentration", "How much gas is present?", "Does not include absorption strength"],
          ["Radiative efficiency", "How strongly does an added amount alter energy flow?", "Depends on spectrum and overlap"],
          ["Atmospheric lifetime", "How long does the perturbation persist?", "Controlled by chemical and physical sinks"],
          ["Global warming potential", "Integrated effect relative to CO₂ over a chosen horizon", "Changes with 20-, 100- or other-year horizon"],
          ["Total forcing", "How much present energy imbalance is attributed to the gas?", "Combines abundance change and radiative properties"],
        ],
      },
    },
    {
      eyebrow: "Consequences",
      title: "From energy imbalance to environmental change",
      bullets: [
        "Higher mean temperature changes evaporation, atmospheric water vapour and the hydrological cycle; local rainfall can increase or decrease.",
        "Land ice and glaciers lose mass, while warming seawater expands. Both processes raise global mean sea level.",
        "Heat extremes become more likely as the temperature distribution shifts; ecosystem ranges and seasonal timing change.",
        "Ocean uptake of CO₂ causes ocean acidification through carbonate equilibria. This is chemically distinct from warming but shares the same CO₂ source.",
        "Disease patterns can shift with climate and habitat; the prescribed text mentions dengue, malaria, yellow fever and sleeping sickness, but disease outcomes also depend on public health and ecology.",
        "Climate change is not proved or disproved by one day's weather. Weather is short-term local state; climate is the statistical distribution over long periods.",
      ],
      equations: [
        "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻  (ocean-acidification link)",
      ],
    },
    {
      eyebrow: "Three distinct problems",
      title: "Greenhouse effect, ozone depletion and inversion",
      table: {
        headers: ["Phenomenon", "Controlling chemistry/physics", "Scale", "Primary effect"],
        rows: [
          ["Enhanced greenhouse effect", "IR absorption and re-emission by increased greenhouse gases", "Global, decades and longer", "Climate warming and energy-balance change"],
          ["Stratospheric ozone depletion", "Catalytic destruction of O₃ by ClOₓ, BrOₓ and related cycles", "Stratospheric, seasonal/global", "More UV-B reaches the lower atmosphere and surface"],
          ["Temperature inversion", "Warm air overlies cool surface air and suppresses convection", "Local/regional, hours to days", "Pollutants accumulate near ground"],
          ["Photochemical smog", "Sunlight-driven NOₓ-VOC radical chemistry", "Urban/regional, hours to days", "O₃, PAN, aldehydes and oxidising haze"],
        ],
      },
      boxes: [
        {
          title: "CFCs connect two problems",
          body: "CFCs are greenhouse gases and sources of stratospheric chlorine. This connection does not make ozone depletion and global warming the same phenomenon.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Mitigation",
      title: "Lower sources, protect sinks and avoid problem shifting",
      bullets: [
        "Improve energy efficiency and replace high-carbon energy with low-carbon sources where feasible.",
        "Reduce deforestation and restore ecosystems, while recognising that biological storage complements rather than permits unlimited fossil emission.",
        "Detect and repair methane leaks; capture landfill and sewage biogas; improve manure and rice-field management.",
        "Use fertiliser efficiently to reduce N₂O formation and nutrient pollution simultaneously.",
        "Recover, contain and safely destroy high-impact refrigerants; avoid replacing an ozone-depleting gas with another gas of very high warming effect without full evaluation.",
        "Use public transport, walking, cycling and well-planned urban systems to reduce fuel demand and co-pollutants.",
      ],
      boxes: [
        {
          title: "Co-benefit",
          body: "Reducing fossil-fuel combustion can lower CO₂, SO₂, NOₓ and particulate emissions together. One intervention can therefore improve both climate and near-term air quality.",
          tone: "green",
        },
      ],
    },
    {
      eyebrow: "Exam synthesis",
      title: "Fast molecular decisions",
      flow: [
        "Is the gas abundant or merely efficient per molecule?",
        "Does its vibration change dipole moment?",
        "Is it a forcing, feedback or short-lived pollutant?",
        "What source raised its concentration?",
        "What chemical or physical sink removes it?",
        "Is the question actually about inversion or ozone instead?",
      ],
      boxes: [
        {
          title: "If all greenhouse gases vanished",
          body: "Earth would lose the natural greenhouse effect and become far colder, not become an ideal unpolluted planet. JEE questions often test this counterfactual.",
          tone: "warning",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Predict IR activity",
      problem: "Why is the asymmetric stretch of CO₂ IR active while the symmetric stretch is inactive in the ideal molecule?",
      steps: [
        "CO₂ is linear and its equilibrium bond dipoles cancel.",
        "During symmetric stretch the cancellation remains, so the dipole does not change.",
        "During asymmetric stretch one C-O dipole changes differently from the other, creating a changing net dipole.",
      ],
      answer: "Only the asymmetric stretch changes the molecular dipole and therefore absorbs IR.",
    },
    {
      title: "Separate weather from climate",
      problem: "A cold day occurs during a long-term warming trend. Does the day contradict the greenhouse effect?",
      steps: [
        "Weather varies daily because of circulation and local conditions.",
        "Climate change alters long-term statistical distributions, not every day's sign.",
        "One cold event cannot determine a multi-decadal global energy trend.",
      ],
      answer: "No. Short-term local weather and long-term climate are different scales.",
    },
    {
      title: "Choose a methane intervention",
      problem: "A landfill emits methane during anaerobic decay. Give a control that reduces emission and recovers value.",
      steps: [
        "Install a gas-collection system over the anaerobic waste zone.",
        "Remove moisture/impurities as required.",
        "Burn the collected biogas for useful heat or electricity, converting CH₄ mainly to CO₂ and H₂O.",
      ],
      answer: "Capture and use landfill gas as biogas instead of venting methane.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Molecular",
      question: "Which abundant atmospheric gas is not an important direct greenhouse gas?",
      options: ["N₂", "CO₂", "H₂O vapour", "CH₄"],
      answer: "A",
      solution: "N₂ is homonuclear and has no strong dipole-changing vibration in the relevant terrestrial IR region.",
    },
    {
      number: 2,
      tag: "Multiple correct",
      question: "Which are greenhouse gases in the NCERT list?",
      options: ["CO₂", "CH₄", "N₂O", "O₂"],
      answer: "A, B and C",
      solution: "CO₂, CH₄ and N₂O absorb terrestrial IR. O₂ is not listed as an important greenhouse gas.",
    },
    {
      number: 3,
      tag: "Concept",
      question: "Water vapour is best described in present global warming as:",
      options: ["Only an anthropogenic forcing", "A major natural greenhouse gas and largely a feedback", "An ozone-depleting radical", "A particulate pollutant"],
      answer: "B",
      solution: "Temperature controls evaporation and atmospheric moisture. Added warming raises water vapour, which amplifies greenhouse warming.",
    },
    {
      number: 4,
      tag: "JEE trap",
      question: "Which statement is correct?",
      options: ["Greenhouse gases prevent all IR from escaping.", "Ozone depletion and warming are identical.", "A temperature inversion suppresses vertical mixing.", "CO₂ has no IR-active vibration because it is non-polar."],
      answer: "C",
      solution: "Inversion traps local pollution by inhibiting convection. The other statements confuse partial absorption, distinct phenomena and vibrational dipole change.",
    },
    {
      number: 5,
      tag: "Source",
      question: "Which reaction is a direct industrial source of CO₂ during cement manufacture?",
      options: ["CaCO₃ → CaO + CO₂", "CaO + CO₂ → CaCO₃", "N₂ + O₂ → 2NO", "SO₃ + H₂O → H₂SO₄"],
      answer: "A",
      solution: "Limestone calcination releases CO₂ chemically in addition to fuel-related emissions.",
    },
    {
      number: 6,
      tag: "Counterfactual",
      question: "If all atmospheric greenhouse gases were absent, Earth would most likely be:",
      options: ["Much colder", "Unaffected", "Protected from all UV", "Free of weather"],
      answer: "A",
      solution: "The natural greenhouse effect is essential to Earth's habitable mean temperature.",
    },
  ],
  recap: [
    "Greenhouse gases absorb selected terrestrial IR bands and re-emit energy; they do not form a solid lid.",
    "An IR-active vibration must change molecular dipole moment.",
    "CO₂ is non-polar at equilibrium but has IR-active bending and asymmetric-stretch modes.",
    "N₂ and O₂ are not important direct greenhouse gases.",
    "CO₂ is a major forcing; water vapour is a dominant natural greenhouse gas and feedback.",
    "Per-molecule strength, lifetime, concentration and total forcing are different metrics.",
    "Ozone depletion, greenhouse warming and inversion are distinct.",
    "Cutting fossil combustion can improve climate and air quality together.",
  ],
};

export default function Part05() {
  return <EnvironmentalChemistryPart data={part05Data} />;
}
