import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart4 from "../part4";

export const metadata = {
  title: "Mole Concept — Gram Atomic Mass and Conversions — SYNERGIC BOND",
  description: "Atomic dimensions vs molar volume, crystal lattice packing efficiency (SC/BCC/FCC), and line-up atom calculations.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Gram Atomic Mass"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part3", label: "← Atomic Mass & Scale" }}
        next={{ href: "/notes/mole-concept/part5", label: "Next: Molecular Mass →" }}
      />
      <MoleConceptPart4 />
    </div>
  );
}
