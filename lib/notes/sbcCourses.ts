// ─────────────────────────────────────────────────────────────────────────────
// Some Basic Concepts of Chemistry — course metadata SSOT.
//
// Real lesson titles/descriptions of the four authored courses (Mole Concept,
// Stoichiometry, Concentration Terms, Eudiometry), extracted from the course
// hubs. Drives the canonical hub cards, part-page chrome and pagers.
// SAFE METADATA ONLY — lesson bodies stay in their own gated routes.
// ─────────────────────────────────────────────────────────────────────────────

export interface SbcLesson {
  n: number;
  title: string;
  desc: string;
  href: string;
}

export interface SbcCourse {
  id: string;
  title: string;
  hubHref: string;
  engineHref: string;
  intro: string;
  lessons: SbcLesson[];
}

export const SBC_COURSES: SbcCourse[] = [
  {
    id: "mole-concept",
    title: "Mole Concept",
    hubHref: "/notes/mole-concept",
    engineHref: "/programs/jee-main/chapter/mole-concept",
    intro: "Fundamental definitions, Avogadro constant, amu, molar mass, interconversion formulas, gas densities, isotopes, mixtures, and dissociation.",
    lessons: [
      { n: 1, title: "Foundations of the Mole", desc: "SI definition of the mole, Avogadro constant, Faraday constant, and elementary charge conversions across phases.", href: "/notes/mole-concept/part1" },
      { n: 2, title: "Avogadro Constant and Counting Particles", desc: "Atomic number vs mass number, nuclear mass defect calculations, and Einstein mass-energy equivalence.", href: "/notes/mole-concept/part2" },
      { n: 3, title: "Atomic Mass and Mass Scale", desc: "Historical H/O/C-12 reference scales, unified atomic mass unit (u), and Gram Atomic Mass (GAM) mass-to-mole conversions.", href: "/notes/mole-concept/part3" },
      { n: 4, title: "Gram Atomic Mass and Conversions", desc: "Atomic dimensions vs molar volume, crystal lattice packing efficiency (SC/BCC/FCC), and line-up atom calculations.", href: "/notes/mole-concept/part4" },
      { n: 5, title: "Molecular Mass and Formula Mass", desc: "Molecular mass summation, Gram Molecular Mass (GMM), Lavoisier mass conservation, and largest-number ranking calculations.", href: "/notes/mole-concept/part5" },
      { n: 6, title: "Formula Units and Hydrated Salts", desc: "Virus particle specific volume derivations, hydrated salt formula unit inventories, and equal-hydrogen stoichiometry comparisons.", href: "/notes/mole-concept/part6" },
      { n: 7, title: "Charge Counting in Ions", desc: "Polyatomic ionic electron/proton inventories, total Coulombs of charge, and AB2/A2B3 under-constrained linear systems.", href: "/notes/mole-concept/part7" },
      { n: 8, title: "Compound Composition Problems", desc: "Simultaneous linear mass extraction across dual binary compounds, organometallic analysis, and CH4 molecule extraction.", href: "/notes/mole-concept/part8" },
      { n: 9, title: "Gaseous Molar Volume", desc: "Standard molar volume (22.4 L) at STP/NTP, universal ideal gas equation of state PV=nRT, and exact gas constant conversions.", href: "/notes/mole-concept/part9" },
      { n: 10, title: "Ideal Gas Applications", desc: "Metric volume interconversions, Celsius to Kelvin transformations, and the Combined Gas Equation (P1V1/T1 = P2V2/T2).", href: "/notes/mole-concept/part10" },
      { n: 11, title: "Gas Density and Vapour Density", desc: "Absolute gas density (PM=dRT), Vapour Density (VD=M/2), diatomic chlorine volume at STP, and mass spectrometry physics.", href: "/notes/mole-concept/part11" },
      { n: 12, title: "Isotopes and Average Atomic Mass", desc: "Isotopic abundance weighted average calculations across Cl, B, Li, O, and N systems, and average neutron counts.", href: "/notes/mole-concept/part12" },
      { n: 13, title: "Gas Mixtures and Partial Pressure", desc: "Dalton's law of partial pressures, Amagat's partial volume law, and volume percentage vs mole percentage equality.", href: "/notes/mole-concept/part13" },
      { n: 14, title: "Ozonized Oxygen and Mixture Analysis", desc: "Mass composition reciprocal formula calculations, binary hydrocarbon atomic ratios, and ozonized oxygen kinetics at STP.", href: "/notes/mole-concept/part14" },
      { n: 15, title: "Dissociation, Association and Final Review", desc: "Thermal dissociation degree (alpha), apparent molecular weight reduction bounds, and complete curriculum synthesis.", href: "/notes/mole-concept/part15" },
    ],
  },
  {
    id: "stoichiometry",
    title: "Stoichiometry",
    hubHref: "/notes/stoichiometry",
    engineHref: "/programs/jee-main/chapter/mole-concept",
    intro: "From basic stoichiometric coefficients and POAC to limiting reagents, percentage yields, and complex parallel and sequential reactions.",
    lessons: [
      { n: 1, title: "Chemical Equations, Coefficients & POAC", desc: "Chemical equations, stoichiometric coefficients (νᵢ), Mass-Mass, Mass-Volume at STP/NTP, Gay-Lussac's Law of gaseous volumes, and Principle of Atom Conservation (POAC).", href: "/notes/stoichiometry/part1" },
      { n: 2, title: "Decomposition Stoichiometry & Thermal Assays", desc: "Advanced POAC problem solving, KClO₃ & NaHCO₃ thermal decomposition, volume changes, antacid tablet assay, tetraethyl lead (TEL), and algae photosynthesis calculation.", href: "/notes/stoichiometry/part2" },
      { n: 3, title: "Limiting Reagents (LR) & Percentage Yields", desc: "Detection of Limiting Reagent (LR) vs Excess Reagent, stoichiometry of multi-component systems, actual vs theoretical yields, and Percentage Yield calculations.", href: "/notes/stoichiometry/part3" },
      { n: 4, title: "Degree of Dissociation & Percentage Purity", desc: "Degree of dissociation of SO₃ & NH₃, acetylene trimerisation to benzene, Percentage Purity of samples, pyrolusite assay, and calculations involving mixtures.", href: "/notes/stoichiometry/part4" },
      { n: 5, title: "Parallel & Competitive Reaction Mixtures", desc: "Equivalent reaction forms, NaCl + NaI mixture conversion, CH₄ & C₂H₆ combustion mixtures, minimum AgNO₃ volume requirement, and Parallel/Competitive reactions.", href: "/notes/stoichiometry/part5" },
      { n: 6, title: "Sequential & Multi-Step Synthesis", desc: "Parallel reactions (Case 3 where both CO and CO₂ form), Sequential/Successive reactions linked through intermediate products, iron pyrite roasting, and combined yields.", href: "/notes/stoichiometry/part6" },
      { n: 7, title: "Yield Optimization & Eudiometry Precursors", desc: "Decomposition yields, step-by-step yield multiplication across sequential synthesis, and volume contraction relationships during gas sparking.", href: "/notes/stoichiometry/part7" },
      { n: 8, title: "Complex Parallel & Gravimetric Assay", desc: "Gravimetric analysis of complex mixtures, simultaneous equation derivations for alloy and ore composition, and precipitation stoichiometry.", href: "/notes/stoichiometry/part8" },
      { n: 9, title: "Advanced JEE Mixed Problems & Gas Phase Analysis", desc: "Comprehensive challenging problems combining limiting reagent, percentage purity, sequential reactions, and eudiometer volume contractions under variable P and T.", href: "/notes/stoichiometry/part9" },
    ],
  },
  {
    id: "concentration-terms",
    title: "Concentration Terms",
    hubHref: "/notes/concentration-terms",
    engineHref: "/programs/jee-main/chapter/mole-concept",
    intro: "Percentage solutions, dilution and mixing, molarity, molality, mole fraction, normality and master interconversions.",
    lessons: [
      { n: 1, title: "Solute vs. Solvent & Percentage Solutions", desc: "Criteria for identifying solute/solvent across phase mixtures, and percentage formulas (% w/w, % w/v, % v/v, % v/w) with solved density interconversions.", href: "/notes/concentration-terms/part1" },
      { n: 2, title: "Dilution Formulas, Mixing & PPM / PPB", desc: "Principle of mole conservation during dilution (M₁V₁ = M₂V₂), molarity of mixed solutions (M_mix = [M₁V₁ + M₂V₂]/[V₁ + V₂]), and trace concentration scales (ppm / ppb).", href: "/notes/concentration-terms/part2" },
      { n: 3, title: "Gram/Litre Strength & Molarity (M)", desc: "Exact definitions of strength (S = w/V in g/L), molarity calculations, temperature dependence of volume-based scales, and direct relationships (S = M × Molar Mass).", href: "/notes/concentration-terms/part3" },
      { n: 4, title: "Molality (m) & Mole Fraction (χ)", desc: "Temperature-independent concentration scales: molality (moles per kg solvent), mole fraction summation laws (χ_A + χ_B = 1), and binary solution derivations.", href: "/notes/concentration-terms/part4" },
      { n: 5, title: "Normality (N), Equivalent Weight & Valency Factors", desc: "Law of chemical equivalence, equivalent weight derivations (E = M/n-factor), normality calculations across acids, bases & oxidants/reductants, and dilution of normality.", href: "/notes/concentration-terms/part5" },
      { n: 6, title: "Master Interconversions & Special Industrial Scales", desc: "Direct mathematical relations connecting M, m, χ, and N, alongside volume strength of H₂O₂ (1 V = 0.089 M) and percentage labeling of Oleum (104.5% H₂SO₄).", href: "/notes/concentration-terms/part6" },
    ],
  },
  {
    id: "eudiometry",
    title: "Eudiometry",
    hubHref: "/notes/eudiometry",
    engineHref: "/programs/jee-main/chapter/mole-concept",
    intro: "Gas volume analysis: combining volumes, combustion analysis, volume contraction, absorption-based analysis and molecular formula determination.",
    lessons: [
      { n: 1, title: "Gas Volume Foundations & Eudiometry Principles", desc: "Gay-Lussac's Law of Combining Volumes, Avogadro's Hypothesis, Amagat's additive volume law for non-reacting mixtures, phase treatment rules, and air composition assumptions.", href: "/notes/eudiometry/part1" },
      { n: 2, title: "Combustion & Final Gas Composition Analysis", desc: "Limiting reagent identification directly from volume ratios, simultaneous algebraic equations for binary hydrocarbon mixtures, and non-combustion volume shifts (carbon reduction and ozonisation).", href: "/notes/eudiometry/part2" },
      { n: 3, title: "Volume Contraction & Residual Gas Analysis", desc: "Theory of volumetric contraction (steam condensation and mole reduction), spectator nitrogen accounting during air combustion, and multi-component industrial fuel mixtures (Coal Gas).", href: "/notes/eudiometry/part3" },
      { n: 4, title: "Hydrogen, Nitrogen & Oxygen Gas Mixture Firing", desc: "Selective hydrogen oxidation, rigorous hypothesis testing for unknown limiting reagents, and multi-stage sequential firings with secondary oxygen additions.", href: "/notes/eudiometry/part4" },
      { n: 5, title: "Absorption-Based Gas Analysis & Selective Scrubbing", desc: "Comprehensive reference table of the six selective chemical absorbents (KOH, alkaline pyrogallol, ammoniacal cuprous chloride, turpentine oil) and sequential volumetric gas isolation.", href: "/notes/eudiometry/part5" },
      { n: 6, title: "Molecular Formula from Eudiometry & Hydrocarbon Identification", desc: "Master combustion stoichiometry for C_xH_y and C_xH_yO_z, deriving molecular formula subscripts directly from contraction/absorption data, and homologous series identification across Alkanes, Alkenes, Alkynes, and Arenes.", href: "/notes/eudiometry/part6" },
    ],
  },
];

export function sbcCourse(id: string): SbcCourse | undefined {
  return SBC_COURSES.find((course) => course.id === id);
}
