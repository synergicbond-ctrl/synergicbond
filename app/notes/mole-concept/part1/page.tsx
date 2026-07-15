import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart1 from "../part1";

export const metadata = {
  title: "Mole Concept — Foundations of the Mole — SYNERGIC BOND",
  description: "SI definition of the mole, Avogadro constant, Faraday constant relationship, formula units, and particle-to-mole calculations.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Foundations of the Mole"
        accent="cyan"
        next={{ href: "/notes/mole-concept/part2", label: "Next: Avogadro Constant →" }}
      />
      <MoleConceptPart1 />
    </div>
  );
}
