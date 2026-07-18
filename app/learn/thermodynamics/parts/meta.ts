// Thermodynamics lesson metadata — titles are the REAL lesson titles of the
// 30 authored parts (source of truth for hub cards, pagers and tabs).
// Presentation metadata only; never edit lesson content from here.

export interface ThermoLesson {
  part: string; // "01".."30"
  title: string;
}

export const THERMO_LESSONS: ThermoLesson[] = [
  { part: "01", title: "Scope, System, Surroundings, Boundary, and Types of Systems" },
  { part: "02", title: "Phase, Thermodynamic Properties, Intensive and Extensive Properties" },
  { part: "03", title: "State Functions, Path Functions, Exact Differentials, and Mathematical Tests" },
  { part: "04", title: "Thermodynamic Processes, Reversibility, Equilibrium, and Graph Intelligence" },
  { part: "05", title: "Partial-Derivative Tools and Thermodynamic Response Coefficients" },
  { part: "06", title: "Internal Energy, Molecular Energy Modes, and Ideal/Real-Gas Dependence" },
  { part: "07", title: "Thermodynamic Work, Sign Conventions, and Pressure–Volume Work" },
  { part: "08", title: "Zeroth Law, First Law, and Energy-Balance Architecture" },
  { part: "09", title: "Isothermal Ideal-Gas Processes, Reversible/Irreversible Work, Free Expansion, and Multistep Paths" },
  { part: "10", title: "Reversible and Irreversible Adiabatic Ideal-Gas Processes" },
  { part: "11", title: "Polytropic Ideal-Gas Processes" },
  { part: "12", title: "Cyclic Ideal-Gas Processes and Integrated Energy Accounting" },
  { part: "13", title: "Limitations of the First Law, Natural Direction, and Spontaneity" },
  { part: "14", title: "Heat Engines, Carnot Cycle, Carnot Theorem, and Working-Fluid Independence" },
  { part: "15", title: "Reversed Carnot Refrigerator, Heat Pump, COP, and the Entropy Bridge" },
  { part: "16", title: "Entropy as a State Function, Second-Law Meaning, and Molecular Interpretation" },
  { part: "17", title: "Clausius Inequality, Entropy Generation, and Universe Entropy Balance" },
  { part: "18", title: "Entropy Changes in Phase Transitions, Reactions, and Real Fluids" },
  { part: "19", title: "Entropy Changes of Ideal Gases" },
  { part: "20", title: "Multistage Entropy, Ideal-Gas Mixing, Thermal Equilibration, and Retained Numericals" },
  { part: "21", title: "Absolute Entropy, Reaction Entropy, Surroundings Entropy, and Spontaneity" },
  { part: "22", title: "Third Law, Statistical Entropy, Residual Entropy, and Absolute Entropy" },
  { part: "23", title: "Third-Law Numerical, Microstate Counting, and Reaction-Entropy Dependence" },
  { part: "24", title: "Helmholtz and Gibbs Free Energies" },
  { part: "25", title: "Thermodynamic Potentials, Maxwell Relations, Joule Expansion, and Joule–Thomson Effect" },
  { part: "26", title: "Pressure and Temperature Dependence of Gibbs Energy" },
  { part: "27", title: "Gibbs Energy of Ideal Gases and Standard States" },
  { part: "28", title: "Gibbs Energy of Mixing and Ideal-Gas Mixtures" },
  { part: "29", title: "Reaction Gibbs Energy, Reaction Quotient, and Equilibrium" },
  { part: "30", title: "van’t Hoff Equation, Stability, and Phase Equilibrium" },
];

/** Real thermodynamic topic groups of the 30-part sequence. */
export interface ThermoGroup {
  label: string;
  from: number;
  to: number;
}

export const THERMO_GROUPS: ThermoGroup[] = [
  { label: "Foundations & the Language of Thermodynamics", from: 1, to: 6 },
  { label: "Work, Heat & the First Law", from: 7, to: 12 },
  { label: "Second Law, Carnot & Entropy", from: 13, to: 23 },
  { label: "Free Energies & Equilibrium", from: 24, to: 30 },
];

export function thermoHref(part: string): string {
  return `/learn/thermodynamics/part${part}`;
}
