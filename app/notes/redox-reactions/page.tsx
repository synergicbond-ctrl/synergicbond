import React from "react";
import Link from "next/link";
import { getNotesChapter } from "@/lib/notesEngine";
import { CanonicalNotesStyles, ChapterLessonGroups } from "@/components/notes/canonical";
import { redoxLessonGroups } from "./_chapter";

export const metadata = {
  title: "Redox Reactions — SYNERGIC BOND",
  description:
    "Master electron transfer dynamics, equivalent weight determination, and volumetric titration analysis with verified interactive notes and solved examples.",
};

export default function RedoxReactionsHubPage() {
  const chapter = getNotesChapter("redox-reactions");

  return (
    <main className="min-h-screen bg-[#0a1622] text-white">
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

        {/* Canonical 10-lesson grid, grouped by unit */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-400" />
              Chapter Lessons
            </h2>
            <span className="text-xs font-bold text-slate-400">10 lessons · 2 units</span>
          </div>
          <CanonicalNotesStyles />
          <ChapterLessonGroups groups={redoxLessonGroups()} />
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
