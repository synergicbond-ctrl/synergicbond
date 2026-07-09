"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChemistryNotesShell,
  NotesChapterHeader,
  NumberedSectionHeader,
  NotesContentCard,
  NumberedSectionItem,
} from "@/components/notes/chemistry";
import TitrationPart1 from "./part1";
import TitrationPart2 from "./part2";
import TitrationPart3 from "./part3";
import TitrationPart4 from "./part4";
import TitrationPart5 from "./part5";
import TitrationPart6 from "./part6";
import TitrationPart7 from "./part7";

const SECTIONS: NumberedSectionItem[] = [
  { id: 1, title: "Volumetric Analysis Basics & Equipment" },
  { id: 2, title: "Primary Standards & End Point vs Equivalence Point" },
  { id: 3, title: "Redox Titrations & Mixed Compound Problems" },
  { id: 4, title: "Multi-Step Aliquot Dilutions & Metal Equivalents" },
  { id: 5, title: "Iodometry vs Iodimetry & Bleaching Powder" },
  { id: 6, title: "Iodometric Calculations & Ozone/Peroxide Analysis" },
  { id: 7, title: "Advanced Applications & Precipitation/Conductometric Titrations" },
];

const COMPONENTS: Record<number, React.ReactNode> = {
  1: <TitrationPart1 />,
  2: <TitrationPart2 />,
  3: <TitrationPart3 />,
  4: <TitrationPart4 />,
  5: <TitrationPart5 />,
  6: <TitrationPart6 />,
  7: <TitrationPart7 />,
};

export default function TitrationHubPage() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const activeTitle = SECTIONS.find((s) => s.id === activeSection)?.title || "";

  return (
    <ChemistryNotesShell>
      {/* Chapter Header Card with Numbered Selector */}
      <NotesChapterHeader
        category="Physical Chemistry"
        title="Titration and Volumetric Analysis"
        description="Complete rigorous coverage of Volumetric Analysis, Primary vs Secondary Standards, Permanganometry, Dichrometry, Iodimetry/Iodometry calculations, and multi-step back titrations without omission."
        sections={SECTIONS}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* Main Content Area */}
      <NotesContentCard>
        <NumberedSectionHeader number={activeSection} title={activeTitle} />
        <div className="space-y-6 pt-2">
          {COMPONENTS[activeSection]}
        </div>
      </NotesContentCard>

      {/* Clean Numbered Section Navigation Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm shadow-xl">
        <button
          disabled={activeSection <= 1}
          onClick={() => setActiveSection((prev) => Math.max(1, prev - 1))}
          className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
            activeSection <= 1
              ? "opacity-30 cursor-not-allowed bg-slate-800/40 text-slate-500 border border-slate-850"
              : "bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 shadow-sm"
          }`}
        >
          ← Previous ({activeSection > 1 ? `${activeSection - 1}` : ""})
        </button>

        <span className="text-sm font-bold text-slate-400">
          Section {activeSection} of {SECTIONS.length}
        </span>

        {activeSection < SECTIONS.length ? (
          <button
            onClick={() => setActiveSection((prev) => Math.min(SECTIONS.length, prev + 1))}
            className="rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-purple-700 border border-purple-500/20 transition-all"
          >
            Next Section ({activeSection + 1}) →
          </button>
        ) : (
          <Link
            href="/notes/redox-reactions/equivalent-weight"
            className="rounded-xl bg-slate-800/80 px-6 py-2.5 text-sm font-extrabold text-slate-300 shadow-sm hover:bg-slate-700/80 border border-slate-750 transition-all text-center"
          >
            ← Return to Equivalent Weight & n-Factor
          </Link>
        )}
      </footer>
    </ChemistryNotesShell>
  );
}
