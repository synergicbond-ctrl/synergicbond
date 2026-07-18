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
import EquivalentConceptPart1 from "./part1";
import EquivalentConceptPart2 from "./part2";
import EquivalentConceptPart3 from "./part3";
import EquivalentConceptPart4 from "./part4";
import EquivalentConceptPart5 from "./part5";
import EquivalentConceptPart6 from "./part6";
import EquivalentConceptPart7 from "./part7";
import EquivalentConceptPart8 from "./part8";

const SECTIONS: NumberedSectionItem[] = [
  { id: 1, title: "Basic Rules & Oxide Formulations" },
  { id: 2, title: "Gaseous Oxides & Ionic Species" },
  { id: 3, title: "Acidic Oxides & Basicity Cases" },
  { id: 4, title: "Hydrated Salts & Complex Species" },
  { id: 5, title: "Disproportionation & Redox Formulas" },
  { id: 6, title: "Principle of Equivalence & Numericals" },
  { id: 7, title: "Law of Equivalence Applications" },
  { id: 8, title: "Advanced n-Factor Workings" },
];

const COMPONENTS: Record<number, React.ReactNode> = {
  1: <EquivalentConceptPart1 />,
  2: <EquivalentConceptPart2 />,
  3: <EquivalentConceptPart3 />,
  4: <EquivalentConceptPart4 />,
  5: <EquivalentConceptPart5 />,
  6: <EquivalentConceptPart6 />,
  7: <EquivalentConceptPart7 />,
  8: <EquivalentConceptPart8 />,
};

export default function EquivalentWeightHubPage() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const activeTitle = SECTIONS.find((s) => s.id === activeSection)?.title || "";

  return (
    <ChemistryNotesShell>
      {/* Chapter Header Card with Numbered Selector */}
      <NotesChapterHeader
        category="Physical Chemistry"
        title="Equivalent Weight and n-Factor"
        description="Complete rigorous coverage of Equivalent Mass, n-Factor rules across medium conditions, disproportionation calculations, and the Principle of Equivalence without omission."
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
        endLink={{ href: "/notes/redox-reactions/titration", label: "Titration & Volumetric Analysis" }}
      />
    </ChemistryNotesShell>
  );
}
