"use client";

import React, { useState } from "react";
import {
  ChemistryNotesShell,
  NotesChapterHeader,
  NumberedSectionHeader,
  NumberedSectionFooter,
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

      {/* Canonical section pager with real titles */}
      <NumberedSectionFooter
        sections={SECTIONS}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        hubHref="/notes/redox-reactions"
        hubLabel="Redox Reactions hub"
        endLink={{ href: "/notes/redox-reactions/equivalent-weight", label: "Equivalent Weight & n-Factor" }}
      />
    </ChemistryNotesShell>
  );
}
