import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart7 from "../part7";

export const metadata = {
  title: "Mole Concept — Charge Counting in Ions — SYNERGIC BOND",
  description: "Polyatomic ionic electron/proton inventories, total Coulombs of charge calculations, and AB2/A2B3 algebraic trap systems.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Charge Counting in Ions"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part6", label: "← Formula Units & Hydrates" }}
        next={{ href: "/notes/mole-concept/part8", label: "Next: Compound Composition →" }}
      />
      <MoleConceptPart7 />
    </div>
  );
}
