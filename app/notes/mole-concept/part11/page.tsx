import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart11 from "../part11";

export const metadata = {
  title: "Mole Concept — Gas Density and Vapour Density — SYNERGIC BOND",
  description: "Gas density equation PM=dRT, classical Vapour Density (VD=M/2), and mass spectrometry isotope separation.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Gas & Vapour Density"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part10", label: "← Ideal Gas Applications" }}
        next={{ href: "/notes/mole-concept/part12", label: "Next: Isotopes & Atomic Mass →" }}
      />
      <MoleConceptPart11 />
    </div>
  );
}
