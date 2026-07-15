import React from "react";
import ChapterPartNav from "@/components/notes/ChapterPartNav";
import MoleConceptPart15 from "../part15";

export const metadata = {
  title: "Mole Concept — Dissociation, Association and Final Review — SYNERGIC BOND",
  description: "Gas dissociation equilibrium, degree of dissociation (alpha), apparent molecular mass, and complete course review.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ChapterPartNav
        engineHref="/programs/jee-main/chapter/mole-concept"
        hubHref="/notes/mole-concept"
        hubLabel="Mole Concept Hub"
        badgeLabel="Dissociation & Review"
        accent="cyan"
        prev={{ href: "/notes/mole-concept/part14", label: "← Ozonized Oxygen" }}
      />
      <MoleConceptPart15 />
    </div>
  );
}
