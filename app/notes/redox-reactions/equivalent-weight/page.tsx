"use client";

import React, { useState } from "react";
import Link from "next/link";
import EquivalentConceptPart1 from "./part1";
import EquivalentConceptPart2 from "./part2";
import EquivalentConceptPart3 from "./part3";
import EquivalentConceptPart4 from "./part4";
import EquivalentConceptPart5 from "./part5";
import EquivalentConceptPart6 from "./part6";
import EquivalentConceptPart7 from "./part7";
import EquivalentConceptPart8 from "./part8";

const LESSON_MODULES = [
  {
    id: 1,
    title: "Lesson 1: Basic Rules & Oxide Formulations",
    description: "Definition of equivalent weight, relation with molar mass, and element equivalents from metal oxides.",
    component: <EquivalentConceptPart1 />,
  },
  {
    id: 2,
    title: "Lesson 2: Gaseous Oxides & Ionic Species",
    description: "Equivalent weight from gaseous oxides and hydrogen displacement, plus equivalent weight of simple and polyatomic ions.",
    component: <EquivalentConceptPart2 />,
  },
  {
    id: 3,
    title: "Lesson 3: Acidic Oxides & Basicity Cases",
    description: "Equivalent weight of acids and bases, basicity vs acidity rules, and special structural exceptions.",
    component: <EquivalentConceptPart3 />,
  },
  {
    id: 4,
    title: "Lesson 4: Hydrated Salts & Complex Species",
    description: "Equivalent weight of normal and hydrated salts, complex double salts, and oxidising/reducing agent transformations.",
    component: <EquivalentConceptPart4 />,
  },
  {
    id: 5,
    title: "Lesson 5: Disproportionation & Redox Formulas",
    description: "General formula for disproportionation reactions, and n-factor evaluations for hydrogen peroxide, iodine, ammonia, and nitric acid.",
    component: <EquivalentConceptPart5 />,
  },
  {
    id: 6,
    title: "Lesson 6: Principle of Equivalence & Numericals",
    description: "n-factor of individual reaction components, equivalent volume of gases, and fundamental conservation of equivalents.",
    component: <EquivalentConceptPart6 />,
  },
  {
    id: 7,
    title: "Lesson 7: Law of Equivalence Applications",
    description: "Volumetric titration applications, multi-step displacement reactions, and numerical problem solving using equivalents.",
    component: <EquivalentConceptPart7 />,
  },
  {
    id: 8,
    title: "Lesson 8: Advanced n-Factor Workings",
    description: "Comprehensive multi-reaction stoichiometry, non-standard redox transformations, and final review problems.",
    component: <EquivalentConceptPart8 />,
  },
];

export default function EquivalentWeightHubPage() {
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-slate-400">
          <Link href="/notes" className="hover:text-cyan-400 transition-colors">
            Notes Hub
          </Link>
          <span>/</span>
          <Link href="/notes/redox-reactions" className="hover:text-cyan-400 transition-colors">
            Redox Reactions
          </Link>
          <span>/</span>
          <span className="text-slate-200">Equivalent Weight and n-Factor</span>
        </nav>

        {/* Header Banner */}
        <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 p-8 shadow-2xl">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              Physical Chemistry Complete Notes
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Equivalent Weight and n-Factor
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Complete rigorous coverage of Equivalent Mass, n-Factor rules across medium conditions, disproportionation calculations, and the Principle of Equivalence without omission.
            </p>

            {/* View Mode Switcher */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => setViewAll(false)}
                className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all shadow-md ${
                  !viewAll
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white"
                }`}
              >
                Interactive Lesson Switcher
              </button>
              <button
                onClick={() => setViewAll(true)}
                className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all shadow-md ${
                  viewAll
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white"
                }`}
              >
                View Complete Notes (All 8 Lessons Combined)
              </button>
            </div>
          </div>
        </header>

        {/* Interactive Lesson Selector Tabs */}
        {!viewAll && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {LESSON_MODULES.map((lesson) => {
                const isActive = activeLesson === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all ${
                      isActive
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-lg shadow-cyan-500/10 scale-[1.02]"
                        : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200"
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-1">
                      Lesson {lesson.id}
                    </span>
                    <span className="text-sm font-bold line-clamp-1 text-slate-200">
                      {lesson.title.replace(/^Lesson \d+:\s*/, "")}
                    </span>
                    <span className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-snug">
                      {lesson.description}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Lesson Display */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-2 sm:p-4">
              {LESSON_MODULES.find((m) => m.id === activeLesson)?.component}
            </div>

            {/* Lesson Navigation Footer Buttons */}
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <button
                disabled={activeLesson <= 1}
                onClick={() => setActiveLesson((prev) => Math.max(1, prev - 1))}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                  activeLesson <= 1
                    ? "opacity-40 cursor-not-allowed bg-slate-800 text-slate-500"
                    : "bg-slate-800 text-white hover:bg-slate-700 shadow-md"
                }`}
              >
                ← Previous Lesson
              </button>
              <span className="text-sm font-bold text-slate-400">
                Lesson {activeLesson} of {LESSON_MODULES.length}
              </span>
              <button
                disabled={activeLesson >= LESSON_MODULES.length}
                onClick={() => setActiveLesson((prev) => Math.min(LESSON_MODULES.length, prev + 1))}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                  activeLesson >= LESSON_MODULES.length
                    ? "opacity-40 cursor-not-allowed bg-slate-800 text-slate-500"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 shadow-md shadow-cyan-500/20"
                }`}
              >
                Next Lesson →
              </button>
            </div>
          </div>
        )}

        {/* Combined Continuous View */}
        {viewAll && (
          <div className="space-y-12">
            {LESSON_MODULES.map((lesson) => (
              <div key={lesson.id} className="space-y-4">
                <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 p-6 shadow-xl">
                  <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                    Continuous View
                  </span>
                  <h2 className="text-2xl font-black text-white mt-1">{lesson.title}</h2>
                  <p className="text-sm text-slate-300 mt-1">{lesson.description}</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-2 sm:p-4">
                  {lesson.component}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Navigation Back to Hub */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <Link
            href="/notes/redox-reactions"
            className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Redox Reactions Hub
          </Link>
          <Link
            href="/notes/redox-reactions/titration"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            Proceed to Section 2: Titration & Volumetric Analysis →
          </Link>
        </footer>
      </div>
    </main>
  );
}
