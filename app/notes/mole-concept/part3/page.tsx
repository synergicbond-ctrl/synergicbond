import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart3 from "../part3";

export const metadata = {
  title: "Mole Concept — Atomic Mass and Mass Scale — SYNERGIC BOND",
  description: "Historical atomic mass scales (H, O, C-12), unified atomic mass unit (u), and gram atomic mass (GAM) solved calculations.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Atomic Mass & Scale"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part2", label: "← Avogadro Constant & Counting" }}
        next={{ href: "/notes/mole-concept/part4", label: "Next: Gram Atomic Mass →" }}
      />
      <MoleConceptPart3 />
    </div>
  );
}
