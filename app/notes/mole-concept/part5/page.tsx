import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart5 from "../part5";

export const metadata = {
  title: "Mole Concept — Molecular Mass and Formula Mass — SYNERGIC BOND",
  description: "Molecular mass calculations, Gram Molecular Mass (GMM), mass conservation across reactions, and particle counting.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Molecular Mass"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part4", label: "← Gram Atomic Mass" }}
        next={{ href: "/notes/mole-concept/part6", label: "Next: Formula Units →" }}
      />
      <MoleConceptPart5 />
    </div>
  );
}
