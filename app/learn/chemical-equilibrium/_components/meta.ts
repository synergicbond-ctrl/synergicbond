// Chemical Equilibrium lesson metadata — real titles of the 18 authored parts
// (source of truth for hub cards, top tabs and the lesson pager).
// Presentation metadata only; the HTML chemistry bodies are never touched.

export interface CeLesson {
  part: string; // "01".."18"
  title: string;
}

export const CE_LESSONS: CeLesson[] = [
  { part: "01", title: "Meaning and Types of Equilibrium" },
  { part: "02", title: "Kinetic and Thermodynamic Basis of Equilibrium" },
  { part: "03", title: "Rate of Reaction and Law of Mass Action" },
  { part: "04", title: "Rate Constant, Active Mass, Activation Energy and Activated Complex" },
  { part: "05", title: "Attainment of Equilibrium and Concentration–Time Graphs" },
  { part: "06", title: "Equilibrium Constant Kc: Derivation and Interpretation" },
  { part: "07", title: "Kp, Kc and Kx; Relations among Equilibrium Constants" },
  { part: "08", title: "Thermodynamic Equilibrium Constant, Reaction Gibbs Energy and van ’t Hoff Relation" },
  { part: "09", title: "Catalyst Independence and Transformation of Equilibrium Constants" },
  { part: "10", title: "Magnitude of Keq, Extent of Reaction and Prediction of Direction" },
  { part: "11", title: "Degree of Dissociation and General Gaseous-Equilibrium Algebra" },
  { part: "12", title: "Characteristics of Chemical Equilibrium and Le Chatelier Principle" },
  { part: "13", title: "Effects of Temperature, Pressure, Volume, Concentration and Inert Gas" },
  { part: "14", title: "Mixed Equilibrium Numericals and Partial-Pressure Methods" },
  { part: "15", title: "Physical Equilibrium and Clausius–Clapeyron Equation" },
  { part: "16", title: "Melting Point, Boiling Point and Vapour-Pressure Calculations" },
  { part: "17", title: "Phase Diagrams, Triple Point, Critical Point and Sublimation" },
  { part: "18", title: "Allotropic Transitions and Latent-Heat Numericals" },
];

export interface CeGroup {
  label: string;
  from: number;
  to: number;
}

export const CE_GROUPS: CeGroup[] = [
  { label: "Foundations of Equilibrium", from: 1, to: 5 },
  { label: "Equilibrium Constants & Thermodynamic Links", from: 6, to: 10 },
  { label: "Le Chatelier & Applied Equilibria", from: 11, to: 14 },
  { label: "Physical & Phase Equilibrium", from: 15, to: 18 },
];

export function ceHref(part: string): string {
  return `/learn/chemical-equilibrium/part${part}`;
}
