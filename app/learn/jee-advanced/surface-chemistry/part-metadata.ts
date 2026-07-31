export type SurfaceChemistryPart = {
  part: number;
  slug: string;
  title: string;
  description: string;
};

export const SURFACE_CHEMISTRY_PARTS: SurfaceChemistryPart[] = [
  { part: 1, slug: "part01", title: "Surface and Adsorption Foundations", description: "Interfaces, adsorption, absorption, sorption, desorption, surface forces, thermodynamics and core calculations." },
  { part: 2, slug: "part02", title: "Adsorption Types, Factors and Isotherms", description: "Physisorption, chemisorption, factors, Freundlich and Langmuir isotherms, isobars, isosteres and applications." },
  { part: 3, slug: "part03", title: "Catalysis and Enzyme Catalysis", description: "Catalyst types, mechanisms, activity, selectivity, promoters, poisons, zeolites, enzymes and Michaelis–Menten kinetics." },
  { part: 4, slug: "part04", title: "Colloidal State and Classification", description: "True solutions, colloids, suspensions, dispersed phase/medium, lyophilic, lyophobic and particle-based classes." },
  { part: 5, slug: "part05", title: "Preparation and Purification of Colloids", description: "Dispersion and condensation methods, peptisation, Bredig arc, dialysis, electrodialysis and ultrafiltration." },
  { part: 6, slug: "part06", title: "Properties, Charge and Stability of Colloids", description: "Optical, kinetic and electrical properties, double layer, zeta potential, electrophoresis and electro-osmosis." },
  { part: 7, slug: "part07", title: "Coagulation, Protection, Gels, Emulsions and Micelles", description: "Hardy–Schulze rule, flocculation, gold number, gels, emulsions, surfactants, CMC, Krafft temperature and cleansing." },
  { part: 8, slug: "part08", title: "JEE Advanced Mastery and Source Audit", description: "Formula atlas, graph atlas, traps, solved problem archetypes, diagnostic questions and four-PDF coverage ledger." },
];
