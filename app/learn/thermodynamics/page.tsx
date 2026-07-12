import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thermodynamics — 30-Part Course | Synergic Bond", description: "Complete 30-part Thermodynamics course with visual theory, derivations, graphs, tables, worked examples, and solutions." };

const lessons = [
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

export default function ThermodynamicsPage() {
  return <main className="min-h-screen bg-[#020617] text-slate-100"><section className="border-b border-cyan-400/15 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.18),_transparent_45%)] px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Physical Chemistry · Class 11</p><h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Thermodynamics</h1><p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">Build the complete picture of energy, heat, work, entropy and spontaneity through 30 connected visual lessons, derivations, graphs, tables, worked examples and solutions.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-bold"><span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100">30 complete lessons</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">JEE Advanced focus</span></div></div></section><section className="mx-auto max-w-7xl px-5 py-12 sm:px-8"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Learning sequence</p><h2 className="mt-2 text-2xl font-black text-white">All 30 parts</h2></div><p className="text-sm text-slate-400">Start at Part 01 or continue where you left off.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{lessons.map((lesson) => <Link key={lesson.part} href={"/learn/thermodynamics/part" + lesson.part} className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.045] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Part {lesson.part}</p><h2 className="mt-2 text-lg font-black text-white">{lesson.title}</h2><p className="mt-4 text-sm font-bold text-cyan-200">Explore lesson <span className="inline-block transition group-hover:translate-x-1">→</span></p></Link>)}</div></section></main>;
}
