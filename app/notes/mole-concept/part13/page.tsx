import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart13 from "../part13";

export const metadata = {
  title: "Mole Concept — Gas Mixtures and Partial Pressure — SYNERGIC BOND",
  description: "Non-reacting gas mixture average molecular mass, Dalton Partial Pressures, and Amagat Partial Volumes.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Gas Mixtures"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part12", label: "← Isotopes & Atomic Mass" }}
        next={{ href: "/notes/mole-concept/part14", label: "Next: Ozonized Oxygen →" }}
      />
      <MoleConceptPart13 />
    </div>
  );
}
