import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart6 from "../part6";

export const metadata = {
  title: "Mole Concept — Formula Units and Hydrated Salts — SYNERGIC BOND",
  description: "Extending quantitative stoichiometry to virus particle specific volumes, macromolecule mass, and hydrated salt inventories.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Formula Units & Hydrates"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part5", label: "← Molecular Mass" }}
        next={{ href: "/notes/mole-concept/part7", label: "Next: Ionic Charge →" }}
      />
      <MoleConceptPart6 />
    </div>
  );
}
