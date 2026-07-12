import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thermodynamics — 30-Part Course | Synergic Bond", description: "Complete 30-part Thermodynamics course with visual theory, derivations, graphs, tables, worked examples, and solutions." };

const lessons = [
  { part: "01", title: "Introduction to thermodynamics" },
  { part: "02", title: "System, surroundings and boundaries" },
  { part: "03", title: "State variables and properties" },
  { part: "04", title: "Thermodynamic processes" },
  { part: "05", title: "Work and pressure-volume changes" },
  { part: "06", title: "Isothermal ideal-gas processes" },
  { part: "07", title: "Heat capacities and internal energy" },
  { part: "08", title: "First-law applications" },
  { part: "09", title: "Ideal-gas expansion processes" },
  { part: "10", title: "Adiabatic processes" },
  { part: "11", title: "Thermochemistry foundations" },
  { part: "12", title: "Enthalpy and calorimetry" },
  { part: "13", title: "Hess law and reaction enthalpy" },
  { part: "14", title: "Bond enthalpy and reaction energetics" },
  { part: "15", title: "Entropy and disorder" },
  { part: "16", title: "Second law of thermodynamics" },
  { part: "17", title: "Gibbs energy and spontaneity" },
  { part: "18", title: "Temperature dependence of spontaneity" },
  { part: "19", title: "Standard Gibbs energy" },
  { part: "20", title: "Equilibrium and Gibbs energy" },
  { part: "21", title: "Thermodynamic cycles" },
  { part: "22", title: "Phase equilibria" },
  { part: "23", title: "Chemical potential" },
  { part: "24", title: "Thermodynamic identities" },
  { part: "25", title: "Advanced thermodynamic applications" },
  { part: "26", title: "Revision: first law" },
  { part: "27", title: "Revision: thermochemistry" },
  { part: "28", title: "Revision: entropy and Gibbs energy" },
  { part: "29", title: "Mixed worked examples" },
  { part: "30", title: "Complete course revision" },
];

export default function ThermodynamicsPage() {
  return <main className="min-h-screen bg-[#020617] text-slate-100"><section className="border-b border-cyan-400/15 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.18),_transparent_45%)] px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Physical Chemistry · Class 11</p><h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Thermodynamics</h1><p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">Build the complete picture of energy, heat, work, entropy and spontaneity through 30 connected visual lessons, derivations, graphs, tables, worked examples and solutions.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-bold"><span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100">30 complete lessons</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">JEE Advanced focus</span></div></div></section><section className="mx-auto max-w-7xl px-5 py-12 sm:px-8"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Learning sequence</p><h2 className="mt-2 text-2xl font-black text-white">All 30 parts</h2></div><p className="text-sm text-slate-400">Start at Part 01 or continue where you left off.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{lessons.map((lesson) => <Link key={lesson.part} href={"/learn/thermodynamics/part" + lesson.part} className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.045] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Part {lesson.part}</p><h2 className="mt-2 text-lg font-black text-white">{lesson.title}</h2><p className="mt-4 text-sm font-bold text-cyan-200">Explore lesson <span className="inline-block transition group-hover:translate-x-1">→</span></p></Link>)}</div></section></main>;
}
