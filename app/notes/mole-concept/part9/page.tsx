import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart9 from "../part9";

export const metadata = {
  title: "Mole Concept — Gaseous Molar Volume — SYNERGIC BOND",
  description: "Standard molar volume at STP/NTP (22.4 L/mol vs 22.7 L/mol), ideal gas equation PV=nRT, and gas constant unit interconversions.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Gaseous Molar Volume"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part8", label: "← Compound Composition" }}
        next={{ href: "/notes/mole-concept/part10", label: "Next: Ideal Gas Applications →" }}
      />
      <MoleConceptPart9 />
    </div>
  );
}
