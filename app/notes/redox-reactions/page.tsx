import React from "react";
import Link from "next/link";
import { getNotesChapter } from "@/lib/notesEngine";
import { InlineMath } from "@/components/math/react-katex";

export const metadata = {
  title: "Redox Reactions — SYNERGIC BOND",
  description:
    "Master electron transfer dynamics, equivalent weight determination, and volumetric titration analysis with verified interactive notes and solved examples.",
};

export default function RedoxReactionsHubPage() {
  const chapter = getNotesChapter("redox-reactions");

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/notes" className="hover:text-cyan-400 transition">
            Notes Hub
          </Link>
          <span>/</span>
          <span className="text-purple-300">Physical Chemistry</span>
          <span>/</span>
          <span className="text-white">Redox Reactions</span>
        </nav>

        {/* Hero Banner */}
        <header className="rounded-[2.5rem] bg-gradient-to-br from-purple-900/40 via-slate-900 to-indigo-900/40 border border-purple-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 border border-purple-500/30">
                Chapter 2 • Physical Chemistry
              </span>
              <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300 border border-lime-500/30">
                JEE & NEET Core
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Redox Reactions
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Complete foundation covering oxidation-reduction dynamics, equivalent concept (`n`-factor calculations across all functional groups), and volumetric titration analysis.
            </p>
          </div>
        </header>

        {/* Section Navigation Cards */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-400" />
              Chapter Sections
            </h2>
            <span className="text-xs font-bold text-slate-400">2 Core Sections</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Section 1: Equivalent Weight */}
            <Link
              href="/notes/redox-reactions/equivalent-weight"
              className="group relative flex flex-col justify-between rounded-3xl border border-pink-500/30 bg-slate-900/90 p-6 sm:p-8 transition hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-pink-500/5 rounded-bl-full pointer-events-none transition group-hover:scale-110" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-bold text-pink-300">
                    Section 1
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-pink-300 transition">
                    Interactive Lesson →
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-pink-300 transition">
                  Equivalent Weight & n-Factor
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Master the equivalent concept (<InlineMath math="W_1/E_1 = W_2/E_2" />), basicity & acidity rules, charge transfer in salts, and oxidation state transformations in redox reactions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">Elements & Oxides</span>
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">Acids & Bases</span>
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">Redox Transformations</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 relative z-10">
                <span className="text-xs font-bold text-slate-400">Solved Numerical Examples included</span>
                <span className="text-sm font-black text-pink-400 group-hover:translate-x-1 transition-transform">
                  Open Section →
                </span>
              </div>
            </Link>

            {/* Section 2: Titration */}
            <Link
              href="/notes/redox-reactions/titration"
              className="group relative flex flex-col justify-between rounded-3xl border border-blue-500/30 bg-slate-900/90 p-6 sm:p-8 transition hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/5 rounded-bl-full pointer-events-none transition group-hover:scale-110" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">
                    Section 2
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-blue-300 transition">
                    Interactive Lesson →
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-300 transition">
                  Titration & Volumetric Analysis
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Understand primary & secondary standard solutions, apparatus setup, indicator theory, end point vs equivalent point, acid-base, redox titrations, and back-titration.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">Primary Standards</span>
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">End Point vs Eq Point</span>
                  <span className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">Back Titration</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 relative z-10">
                <span className="text-xs font-bold text-slate-400">Volumetric Calculation Workings included</span>
                <span className="text-sm font-black text-blue-400 group-hover:translate-x-1 transition-transform">
                  Open Section →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Overview of Syllabus & Solved Skeletons */}
        {chapter && (
          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Chapter Knowledge Summary
              </h2>
              <span className="text-xs font-bold text-slate-400">Syllabus Reference</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-pink-300">Core Concepts Covered</h3>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 text-xs">
                  {chapter.syllabus.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-amber-300">Common Student Traps to Avoid</h3>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 text-xs">
                  {chapter.commonMistakes.map((m: string, i: number) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
