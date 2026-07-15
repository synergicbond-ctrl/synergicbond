import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart8 from "../part8";

export const metadata = {
  title: "Mole Concept — Compound Composition Problems — SYNERGIC BOND",
  description: "Simultaneous linear mass extraction across dual binary compounds, organometallic analysis, and CH4 extraction stoichiometry.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Compound Composition"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part7", label: "← Charge Counting" }}
        next={{ href: "/notes/mole-concept/part9", label: "Next: Gaseous Molar Volume →" }}
      />
      <MoleConceptPart8 />
    </div>
  );
}
