import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart14 from "../part14";

export const metadata = {
  title: "Mole Concept — Ozonized Oxygen and Mixture Analysis — SYNERGIC BOND",
  description: "Advanced multi-component gas mixtures, vapour density correlations, and ozonized oxygen conversion kinetics.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Ozonized Oxygen"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part13", label: "← Gas Mixtures" }}
        next={{ href: "/notes/mole-concept/part15", label: "Next: Dissociation & Review →" }}
      />
      <MoleConceptPart14 />
    </div>
  );
}
