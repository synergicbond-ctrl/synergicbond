import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";
import { getNotesChapter } from "@/lib/notesEngine";
import { ChapterShell, ChapterLessonGroups } from "@/components/notes/canonical";
import { electroLessonGroups, electroTabs } from "./_chapter";

export const metadata = {
  title: "Electrochemistry Chapter Notes — SYNERGIC BOND",
  description:
    "Complete verified study notes for Electrochemistry covering galvanic and electrolytic cells, Nernst equation, Kohlrausch's law, and Faraday's laws of electrolysis.",
};

export default function ElectrochemistryNotesPage() {
  const chapter = getNotesChapter("electrochemistry");

  return (
    <ChapterShell
      kicker="JEE Physical Chemistry"
      subtitle="Electrochemistry"
      tabs={electroTabs()}
    >
      <div className="space-y-12 text-white">
        <p style={{ margin: "4px 0 0", maxWidth: 860, color: "#c3d1dd", fontSize: 14.5, lineHeight: 1.7 }}>
          Complete foundation covering galvanic and electrolytic cells, standard electrode potentials, Nernst
          equation calculations, electrolytic conductance, Kohlrausch&apos;s law, and Faraday&apos;s laws of
          electrolysis — 24 authored lessons.
        </p>

        <section>
          <ChapterLessonGroups groups={electroLessonGroups()} />
        </section>

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
    </ChapterShell>
  );
}
