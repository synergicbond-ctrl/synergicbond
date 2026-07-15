import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart10 from "../part10";

export const metadata = {
  title: "Mole Concept — Ideal Gas Applications — SYNERGIC BOND",
  description: "Combined gas law transformations across multiple states and temperature/pressure interconversions.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Ideal Gas Applications"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part9", label: "← Gaseous Molar Volume" }}
        next={{ href: "/notes/mole-concept/part11", label: "Next: Gas & Vapour Density →" }}
      />
      <MoleConceptPart10 />
    </div>
  );
}
