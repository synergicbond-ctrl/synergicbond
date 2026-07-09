import React from "react";
import Link from "next/link";
import { InlineMath, BlockMath } from "@/components/math/react-katex";
import { getNotesChapter } from "@/lib/notesEngine";

export const metadata = {
  title: "Electrochemistry Chapter Notes — SYNERGIC BOND",
  description:
    "Complete verified study notes for Electrochemistry covering galvanic and electrolytic cells, Nernst equation, Kohlrausch's law, and Faraday's laws of electrolysis.",
};

export default function ElectrochemistryNotesPage() {
  const chapter = getNotesChapter("electrochemistry");

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-black">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12 space-y-12">
        {/* Navigation & Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/notes" className="hover:text-white transition">
            Chapter Notes
          </Link>
          <span>/</span>
          <span className="text-cyan-400">Electrochemistry</span>
        </nav>

        {/* Hero Banner */}
        <header className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 p-6 sm:p-10 shadow-2xl">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 border border-cyan-500/30">
                Chapter 5 • Physical Chemistry
              </span>
              <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300 border border-lime-500/30">
                JEE & NEET Core
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Electrochemistry
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Complete foundation covering galvanic and electrolytic cells, standard electrode potentials, Nernst equation calculations, electrolytic conductance, Kohlrausch&apos;s law, and Faraday&apos;s laws of electrolysis.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Core Concepts Summary
            </h2>
            <span className="text-xs font-bold text-slate-400">Syllabus Reference</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 space-y-4">
              <h3 className="text-xl font-black text-cyan-300">1. Galvanic Cells & Nernst Equation</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                In a galvanic cell, chemical energy is converted to electrical energy via spontaneous redox reactions.
                The standard cell potential is given by:
              </p>
              <BlockMath math="E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}" />
              <p className="text-sm text-slate-300 leading-relaxed">
                At non-standard conditions, the Nernst equation relates cell potential to reaction quotient <InlineMath math="Q" />:
              </p>
              <BlockMath math="E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{n} \log_{10} Q" />
              <p className="text-sm text-slate-300 leading-relaxed">
                And its relation to Gibbs Free Energy change:
              </p>
              <BlockMath math="\Delta G^\circ = -n F E^\circ_{\text{cell}} = -2.303 R T \log_{10} K_c" />
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 space-y-4">
              <h3 className="text-xl font-black text-lime-300">2. Conductance & Kohlrausch&apos;s Law</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Molar conductivity (<InlineMath math="\Lambda_m" />) increases with dilution due to increased ionic mobility and dissociation:
              </p>
              <BlockMath math="\Lambda_m = \frac{\kappa \times 1000}{M}" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Kohlrausch&apos;s law of independent migration of ions states that at infinite dilution, total molar conductivity is the sum of limiting ionic conductivities:
              </p>
              <BlockMath math="\Lambda^\circ_m(A_x B_y) = x \lambda^\circ(A^{y+}) + y \lambda^\circ(B^{x-})" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Faraday&apos;s First Law of Electrolysis relates deposited mass <InlineMath math="w" /> to charge <InlineMath math="Q" />:
              </p>
              <BlockMath math="w = Z \times I \times t = \frac{E \times I \times t}{96500}" />
            </div>
          </div>
        </section>

        {/* Detailed Chapter Data from SSOT */}
        {chapter && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Important NCERT Highlights & Solved Numericals</h3>
            
            <div className="space-y-4">
              {chapter.solvedExamples.map((ex, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
                  <p className="text-sm font-bold text-cyan-300">Problem {idx + 1}: {ex.q}</p>
                  <div className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800 font-mono space-y-1">
                    {ex.steps.map((st, i) => (
                      <p key={i}>• {st}</p>
                    ))}
                    <p className="font-bold text-lime-400 pt-1">Answer: {ex.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
