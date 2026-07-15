import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart2 from "../part2";

export const metadata = {
  title: "Mole Concept — Avogadro Constant and Counting Particles — SYNERGIC BOND",
  description: "Atomic number vs mass number, subatomic rest masses, nuclear mass defect calculations, and Einstein E=mc^2 relation.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Avogadro Constant & Counting"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part1", label: "← Foundations of the Mole" }}
        next={{ href: "/notes/mole-concept/part3", label: "Next: Atomic Mass & Scale →" }}
      />
      <MoleConceptPart2 />
    </div>
  );
}
