export type SurfaceChemistryPart = {
  part: number;
  slug: string;
  title: string;
  description: string;
};

export const SURFACE_CHEMISTRY_PARTS: SurfaceChemistryPart[] = [
  {
    part: 1,
    slug: "part01",
    title: "The Active Interface and Adsorption Foundations",
    description: "Surface energy, interfaces, adsorption, absorption, sorption, thermodynamics, pressure-drop calculations and specific surface area.",
  },
  {
    part: 2,
    slug: "part02",
    title: "Physisorption, Chemisorption and Molecular-Orbital Theory",
    description: "Physical and chemical adsorption, potential-energy curves, activated adsorption, orbital donation, back-donation and dissociative chemisorption.",
  },
  {
    part: 3,
    slug: "part03",
    title: "Adsorption Equilibria, Isotherms and Thermodynamics",
    description: "Freundlich, Langmuir and BET models, isobars, isosteres, heats of adsorption, adsorption from solution and graph interpretation.",
  },
  {
    part: 4,
    slug: "part04",
    title: "Adsorption Kinetics, Experiments and Applications",
    description: "Adsorption–desorption rates, residence time, activation of adsorbents, chromatography, flotation, purification and original worked examples.",
  },
  {
    part: 5,
    slug: "part05",
    title: "Catalysis: Kinetics, Surface Mechanisms and MOT",
    description: "Catalytic energy profiles, homogeneous and heterogeneous mechanisms, active sites, Sabatier principle and molecular-orbital explanations of surface activation.",
  },
  {
    part: 6,
    slug: "part06",
    title: "Selectivity, Zeolites, Enzymes and Industrial Catalysis",
    description: "Promoters, poisons, supports, shape selectivity, enzyme kinetics, Michaelis–Menten theory, autocatalysis and industrial catalyst systems.",
  },
  {
    part: 7,
    slug: "part07",
    title: "Colloidal State, Classification and Preparation",
    description: "True solutions, colloids and suspensions, classification, lyophilic and lyophobic sols, dispersion, condensation and purification methods.",
  },
  {
    part: 8,
    slug: "part08",
    title: "Optical, Kinetic and Electrical Properties of Colloids",
    description: "Tyndall effect, ultramicroscopy, Brownian motion, charge origin, electrokinetic phenomena, electrical double layer and zeta potential.",
  },
  {
    part: 9,
    slug: "part09",
    title: "Colloidal Stability, Coagulation and Protection",
    description: "DLVO-style stability picture, Hardy–Schulze rule, coagulation value, isoelectric point, mutual coagulation, protective colloids and gold number.",
  },
  {
    part: 10,
    slug: "part10",
    title: "Surfactants, Micelles, Emulsions and Gels",
    description: "Amphiphiles, CMC, Krafft temperature, micellisation thermodynamics, cleansing action, emulsion tests, demulsification and gel behaviour.",
  },
  {
    part: 11,
    slug: "part11",
    title: "Surface Chemistry in Technology, Biology and Environment",
    description: "Water treatment, smoke precipitation, medicines, biomaterials, colloidal foods, nanomaterials, catalytic converters and environmental interfaces.",
  },
  {
    part: 12,
    slug: "part12",
    title: "JEE Advanced Mastery: Graphs, Numericals and Traps",
    description: "Integrated formula atlas, advanced solved problems, graph diagnostics, statement traps, multi-concept questions and final revision framework.",
  },
];
