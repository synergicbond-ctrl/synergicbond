"use client";

import EnvironmentalChemistryPart, { type PartData } from "./EnvironmentalChemistryPart";

export const part09Data: PartData = {
  part: 9,
  title: "Drinking-Water Standards and Treatment Chemistry",
  subtitle: "NCERT-prescribed concentration values, fluoride-enamel chemistry, methemoglobinemia, potable-water treatment and wastewater purification.",
  goals: [
    "Recall every NCERT drinking-water value used in JEE questions.",
    "Explain beneficial and harmful fluoride ranges chemically.",
    "Connect nitrate, sulphate, lead and metals to their effects.",
    "Order coagulation, sedimentation, filtration and disinfection.",
    "Separate drinking-water treatment from sewage treatment.",
    "Explain primary, secondary and tertiary wastewater operations.",
  ],
  sourceNote: "Source coverage: NCERT pp. 415-416 and water-control activities; Essential Sheet pp. 9-10; Environmental Chemistry Theory pp. 187-188 and pp. 299-300; Water Pollution Chemistry pp. 7-10. Numerical limits below are explicitly labelled as prescribed NCERT/JEE values, not claimed as current universal legal limits.",
  heroImage: {
    src: "/environmental-chemistry/drinking-water-standards.webp",
    alt: "Dark source-derived visual of nitrate, lead, sulphate and trace-metal drinking-water limits",
    caption: "For JEE, learn the source-labelled textbook values and the effect paired with each value. Real standards depend on authority, date and acceptable-versus-permissible categories.",
  },
  sections: [
    {
      eyebrow: "Standards discipline",
      title: "An exam value must carry its source",
      paragraphs: [
        "A concentration limit is meaningful only when its authority, date, chemical species and condition are identified. NCERT presents simplified international drinking-water values that are repeatedly tested. These notes preserve those values exactly for JEE preparation.",
        "Do not silently replace a textbook value with a current regulatory number from another authority. Conversely, do not use an old exam value as present legal advice. In a source-based question, follow the stated textbook. In real water assessment, consult the applicable current standard and analytical method.",
        "ppm and mg dm⁻³ are approximately equal for dilute water. ppb is one thousand times smaller than ppm: 50 ppb = 0.050 ppm.",
      ],
      equations: [
        "1 ppm = 1 mg kg⁻¹ ≈ 1 mg L⁻¹ for dilute water",
        "1 ppb = 1 μg kg⁻¹ ≈ 1 μg L⁻¹ for dilute water",
        "50 ppb = 0.050 ppm = approximately 50 μg L⁻¹",
      ],
    },
    {
      eyebrow: "Master table",
      title: "NCERT-oriented drinking-water values",
      table: {
        caption: "Prescribed textbook/JEE values - use only in the stated exam context",
        headers: ["Constituent", "Textbook value", "Effect or note"],
        rows: [
          ["Fluoride, F⁻", "About 1 ppm beneficial", "Hardens enamel and helps prevent tooth decay"],
          ["Fluoride, F⁻", ">2 ppm", "Brown mottling of teeth"],
          ["Fluoride, F⁻", ">10 ppm", "Harmful effects to bones and teeth; skeletal fluorosis context"],
          ["Lead, Pb", "Upper limit about 50 ppb", "Kidney, liver and reproductive-system damage; may enter from lead pipes"],
          ["Sulphate, SO₄²⁻", ">500 ppm", "Laxative effect; moderate levels described as harmless"],
          ["Nitrate, NO₃⁻", "Maximum 50 ppm", "Methemoglobinemia or blue-baby syndrome"],
          ["Iron, Fe", "0.2 ppm", "Maximum prescribed concentration in source table"],
          ["Manganese, Mn", "0.05 ppm", "Maximum prescribed concentration in source table"],
          ["Aluminium, Al", "0.2 ppm", "Maximum prescribed concentration in source table"],
          ["Copper, Cu", "3.0 ppm", "Maximum prescribed concentration in source table"],
          ["Zinc, Zn", "5.0 ppm", "Maximum prescribed concentration in source table"],
          ["Cadmium, Cd", "0.005 ppm", "Very low tolerance; cumulative toxic metal"],
        ],
      },
      boxes: [
        {
          title: "Highest numerical value is not lowest toxicity",
          body: "The table permits 5 ppm Zn but only 0.005 ppm Cd. Compare both number and species; a smaller limit usually signals higher concern, not a smaller effect.",
          tone: "jee",
        },
      ],
    },
    {
      eyebrow: "Fluoride paradox",
      title: "From hydroxyapatite to fluorapatite",
      paragraphs: [
        "Tooth enamel is represented in the source as hydroxyapatite, 3Ca₃(PO₄)₂·Ca(OH)₂, equivalent in composition to Ca₁₀(PO₄)₆(OH)₂. Fluoride replaces hydroxide to form fluorapatite, 3Ca₃(PO₄)₂·CaF₂ or Ca₁₀(PO₄)₆F₂, which is harder and more resistant to acid attack.",
        "Insufficient fluoride can favour dental caries, so fluoride may be added to deficient water to approach about 1 ppm. Above about 2 ppm in the prescribed text, chronic exposure causes brown mottling of teeth. Above about 10 ppm, severe effects on bones and teeth are described.",
        "The dose-response is therefore non-monotonic in benefit: deficiency is harmful, a narrow range is beneficial, and excess is toxic. JEE questions often test the exact transitions 1 ppm, 2 ppm and 10 ppm.",
      ],
      equations: [
        "Ca₁₀(PO₄)₆(OH)₂ + 2F⁻ → Ca₁₀(PO₄)₆F₂ + 2OH⁻  (idealised substitution)",
        "Hydroxyapatite + F⁻ → harder fluorapatite",
      ],
      image: {
        src: "/environmental-chemistry/fluoride-concentration.webp",
        alt: "Dark source-derived concentration scale showing beneficial, mottling and skeletal-harm fluoride ranges",
        caption: "Fluoride is a concentration-dependent example: deficiency, optimum range and chronic excess have different outcomes.",
      },
    },
    {
      eyebrow: "Nitrate and sulphate",
      title: "Blue-baby syndrome and laxative effect",
      paragraphs: [
        "Nitrate itself is converted by microorganisms and metabolism to nitrite. Nitrite oxidises Fe²⁺ in haemoglobin to Fe³⁺, producing methemoglobin, which cannot transport oxygen effectively. Infants are especially vulnerable, producing the name blue-baby syndrome or methemoglobinemia.",
        "The NCERT maximum nitrate value is 50 ppm. Important nitrate sources include fertiliser runoff, sewage and oxidation of nitrogen compounds. Boiling water does not destroy nitrate and can concentrate non-volatile salts as water evaporates.",
        "Excess sulphate above 500 ppm is associated in the textbook with a laxative effect. Sulphate itself is not the same as sulphide: H₂S and metal sulphides belong to reduced sulphur chemistry and have different odour and toxicity.",
      ],
      equations: [
        "NO₃⁻ → NO₂⁻  (biological reduction)",
        "Hb-Fe²⁺ + oxidant → metHb-Fe³⁺",
      ],
      boxes: [
        {
          title: "Do not confuse nitrate with nitrite",
          body: "The measured contaminant may be nitrate, but nitrite is the direct oxidant in methemoglobin formation. The environmental-health pathway contains a chemical conversion.",
          tone: "concept",
        },
      ],
    },
    {
      eyebrow: "Lead and metals",
      title: "Why pH and pipes matter",
      paragraphs: [
        "Lead can enter drinking water when corrosive water contacts lead-containing pipes, solder or fittings. Lower pH and low mineral buffering can increase metal dissolution. The NCERT upper limit is about 50 ppb and lists damage to kidney, liver and reproductive system.",
        "Iron, manganese, aluminium, copper, zinc and cadmium have separate prescribed maximum concentrations. Metals cannot be removed by disinfection. Treatment may use pH adjustment, oxidation-reduction, precipitation, coagulation, adsorption, ion exchange or membranes depending on the species.",
        "Total metal concentration, dissolved fraction and bioavailable species are not identical. Sampling after stagnation can differ from flushed water because pipe contact time changes dissolution.",
      ],
      equations: [
        "Pb(s) → Pb²⁺ + 2e⁻  (anodic corrosion step)",
        "M(OH)₂(s) + 2H⁺ → M²⁺ + 2H₂O",
        "M²⁺ + 2OH⁻ → M(OH)₂(s)  (idealised precipitation)",
      ],
    },
    {
      eyebrow: "Potable-water treatment",
      title: "From raw water to clear, disinfected water",
      paragraphs: [
        "A conventional surface-water plant uses several barriers. Screening removes large debris. Coagulation destabilises colloids; flocculation gently collides particles to build settleable flocs. Sedimentation removes much of the floc. Filtration captures remaining particles and microorganisms. Disinfection inactivates pathogens.",
        "Alum forms gelatinous aluminium hydroxide floc that sweeps suspended material from water. Coagulation works only within an appropriate pH and dose range. Excess or insufficient coagulant leaves poor clarification. The supplied green-chemistry example proposes tamarind-seed-kernel powder as a biodegradable, non-toxic clarification aid in place of alum for certain uses.",
        "Filtration before disinfection reduces turbidity because particles can shield microorganisms and consume disinfectant. Treatment order is a chemical and engineering sequence, not a random list.",
      ],
      flow: [
        "Intake and screening",
        "Coagulation",
        "Flocculation",
        "Sedimentation",
        "Filtration",
        "Disinfection and protected storage",
      ],
      equations: [
        "Al³⁺ + 3H₂O ⇌ Al(OH)₃(s) + 3H⁺  (simplified alum-floc hydrolysis)",
      ],
    },
    {
      eyebrow: "Disinfection",
      title: "Chlorine, hypochlorite, ozone and UV",
      paragraphs: [
        "Chlorine hydrolyses in water to hypochlorous acid, HOCl, which partially dissociates to OCl⁻. HOCl is generally the more effective disinfecting form, so pH affects chlorine performance. A residual can protect water during distribution, but natural organic matter can create disinfection by-products.",
        "Bleaching powder and hypochlorite supply active chlorine. The NCERT activity mentions adding a few crystals of KMnO₄ or bleaching powder to a household tank, but real dosing must be controlled; indiscriminate addition is unsafe.",
        "Ozone is a powerful oxidant and leaves no long-lived ozone residual, while UV damages microbial nucleic acids without adding a chemical residual. No single method solves turbidity, metals, nitrate and pathogens simultaneously; treatment is multi-barrier.",
      ],
      equations: [
        "Cl₂ + H₂O ⇌ HOCl + H⁺ + Cl⁻",
        "HOCl ⇌ H⁺ + OCl⁻",
        "O₃ → O₂ + reactive oxidising species  (water-treatment oxidation)",
      ],
      table: {
        headers: ["Method", "Strength", "Limitation"],
        rows: [
          ["Chlorination", "Effective, economical and provides distribution residual", "By-products and taste; pH/turbidity effects"],
          ["Ozonation", "Strong oxidation and good taste/odour control", "No persistent residual; energy and bromate concerns"],
          ["UV", "Physical inactivation without chemical addition", "Needs clear water and provides no residual"],
          ["Boiling", "Useful household pathogen inactivation", "Does not remove salts/metals; energy-intensive"],
        ],
      },
    },
    {
      eyebrow: "Wastewater treatment",
      title: "Preliminary, primary, secondary and tertiary stages",
      table: {
        headers: ["Stage", "Main operations", "Main target"],
        rows: [
          ["Preliminary", "Screens, comminutors, grit chambers, flow equalisation", "Rags, plastics, sand and flow shock"],
          ["Primary", "Gravity sedimentation and scum removal", "Settleable solids and part of suspended BOD"],
          ["Secondary", "Activated sludge, trickling filter or biological reactor plus clarification", "Dissolved/colloidal biodegradable organic matter and BOD"],
          ["Tertiary/advanced", "Nutrient removal, filtration, adsorption, membranes and polishing", "N, P, residual solids, salts and trace contaminants"],
          ["Disinfection", "Chlorine, UV, ozone or equivalent", "Pathogen inactivation before discharge/reuse"],
          ["Sludge line", "Thickening, digestion, dewatering and safe reuse/disposal", "Concentrated solids and stabilisation"],
        ],
      },
      paragraphs: [
        "In activated sludge treatment, aeration supplies O₂ and mixing to microbial flocs that oxidise organic matter. A secondary clarifier separates biomass; some sludge is returned to maintain the culture and excess sludge is removed. Nitrification oxidises NH₄⁺ to nitrate; denitrification reduces nitrate to N₂ under anoxic conditions.",
        "Anaerobic digestion stabilises concentrated sludge without oxygen and produces biogas rich in CH₄ and CO₂. The gas can supply energy, while the digestate must meet safety criteria before land application. Wastewater treatment therefore links oxygen demand, nutrient cycling, energy recovery and residual management.",
      ],
      equations: [
        "Organic matter + O₂ → CO₂ + H₂O + biomass  (aerobic treatment)",
        "NH₄⁺ + 2O₂ → NO₃⁻ + 2H⁺ + H₂O  (overall nitrification)",
        "NO₃⁻ → N₂  (anoxic denitrification, electron donor required)",
        "Organic matter → CH₄ + CO₂  (anaerobic digestion)",
      ],
    },
    {
      eyebrow: "Analytical integrity",
      title: "A treatment claim requires measurement",
      bullets: [
        "Measure turbidity before and after clarification/filtration.",
        "Use appropriate microbiological indicators before and after disinfection.",
        "Measure residual disinfectant where the process relies on it.",
        "Test nitrate, fluoride, metals and other dissolved contaminants with validated methods; clear appearance is not proof of chemical safety.",
        "Track BOD, COD, suspended solids, nitrogen and phosphorus through wastewater stages.",
        "Protect finished-water storage and distribution, because recontamination can occur after successful treatment.",
      ],
    },
  ],
  examples: [
    {
      title: "Fluoride conversion",
      problem: "A dilute water sample contains 2.5 mg F⁻ per litre. Express it in ppm and classify it by the NCERT ranges.",
      steps: [
        "For dilute water, 1 mg L⁻¹ ≈ 1 ppm.",
        "Therefore 2.5 mg L⁻¹ ≈ 2.5 ppm.",
        "This exceeds 2 ppm, the textbook mottling threshold, but is below the >10 ppm severe bone/teeth range.",
      ],
      answer: "Approximately 2.5 ppm; harmful excess associated with brown mottling.",
    },
    {
      title: "Order a treatment train",
      problem: "Raw river water is turbid and microbiologically contaminated. Put coagulation, filtration, sedimentation and disinfection in a logical order.",
      steps: [
        "Coagulation destabilises colloids.",
        "Sedimentation removes the formed floc after flocculation.",
        "Filtration captures remaining particles.",
        "Disinfection follows clarification so shielding and disinfectant demand are lower.",
      ],
      answer: "Coagulation/flocculation → sedimentation → filtration → disinfection.",
    },
    {
      title: "Nitrate does not boil away",
      problem: "Why can boiling nitrate-contaminated water increase nitrate concentration?",
      steps: [
        "Boiling converts liquid water to vapour.",
        "Nitrate salts are non-volatile under household boiling conditions.",
        "If water volume decreases while nitrate mass remains, concentration rises.",
      ],
      answer: "Evaporation removes solvent, not nitrate, so ppm can increase.",
    },
  ],
  questions: [
    {
      number: 1,
      tag: "Value",
      question: "The NCERT maximum nitrate concentration in drinking water is:",
      options: ["1 ppm", "2 ppm", "50 ppm", "500 ppm"],
      answer: "C",
      solution: "NCERT pairs nitrate 50 ppm with methemoglobinemia or blue-baby syndrome.",
    },
    {
      number: 2,
      tag: "Match",
      question: "Which pair is correct?",
      options: ["Sulphate >500 ppm - laxative effect", "Lead 50 ppm - safe", "Fluoride >2 ppm - prevents all caries without harm", "Nitrate - brown mottling"],
      answer: "A",
      solution: "The other correct pairings are lead about 50 ppb with organ damage, fluoride >2 ppm with mottling, and nitrate >50 ppm with methemoglobinemia.",
    },
    {
      number: 3,
      tag: "Structure",
      question: "Fluoride hardens enamel mainly by converting hydroxyapatite to:",
      options: ["Fluorapatite", "Calcium nitrate", "Gypsum", "Sodium phosphate"],
      answer: "A",
      solution: "F⁻ replaces OH⁻ in the apatite lattice to form the more acid-resistant fluorapatite composition.",
    },
    {
      number: 4,
      tag: "Treatment",
      question: "Which stage chiefly lowers biodegradable dissolved BOD in sewage?",
      options: ["Screening", "Secondary biological treatment", "Grit removal", "Simple chlorination alone"],
      answer: "B",
      solution: "Microbial oxidation in activated sludge or an equivalent biological process removes the main biodegradable load.",
    },
    {
      number: 5,
      tag: "Multiple correct",
      question: "Which statements about disinfection are correct?",
      options: ["HOCl/OCl⁻ speciation depends on pH.", "UV leaves no disinfectant residual.", "Boiling removes dissolved lead.", "Turbidity can shield microbes."],
      answer: "A, B and D",
      solution: "Boiling can inactivate microbes but does not remove dissolved lead and may concentrate non-volatile solutes.",
    },
    {
      number: 6,
      tag: "JEE trap",
      question: "A clear, colourless water sample is necessarily safe because:",
      options: ["All pathogens are visible.", "All metals are coloured.", "Both statements are true.", "The premise is false."],
      answer: "D",
      solution: "Pathogens and dissolved nitrate, fluoride, lead and many organics may be invisible. Appearance is not a complete water-quality test.",
    },
  ],
  recap: [
    "Use the NCERT values for JEE, but do not present them as timeless universal legal standards.",
    "F⁻ about 1 ppm is beneficial; >2 ppm mottles teeth; >10 ppm harms bones and teeth.",
    "Lead: about 50 ppb; sulphate: >500 ppm; nitrate: maximum 50 ppm.",
    "Nitrate → nitrite → Fe²⁺ haem oxidation → methemoglobinemia.",
    "Coagulation/flocculation → sedimentation → filtration → disinfection.",
    "Chlorine forms HOCl/OCl⁻; pH changes the active fraction.",
    "Secondary wastewater treatment removes biodegradable BOD.",
    "Anaerobic digestion stabilises sludge and produces CH₄-rich biogas.",
  ],
};

export default function Part09() {
  return <EnvironmentalChemistryPart data={part09Data} />;
}
