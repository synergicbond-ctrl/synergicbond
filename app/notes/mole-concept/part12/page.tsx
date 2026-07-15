import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart12 from "../part12";

export const metadata = {
  title: "Mole Concept — Isotopes and Average Atomic Mass — SYNERGIC BOND",
  description: "Weighted isotopic averages across Cl, B, Li, O, and N systems, mass percentage distributions, and neutron average determinations.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Isotopes & Atomic Mass"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part11", label: "← Gas & Vapour Density" }}
        next={{ href: "/notes/mole-concept/part13", label: "Next: Gas Mixtures →" }}
      />
      <MoleConceptPart12 />
    </div>
  );
}
