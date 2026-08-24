import React from "react";
import MoleConceptPart9 from "../part9";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Gaseous Molar Volume — SYNERGIC BOND",
  description: "Standard molar volume at STP/NTP (22.4 L/mol vs 22.7 L/mol), ideal gas equation PV=nRT, and gas constant unit interconversions.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={9}>
      <MoleConceptPart9 />
    </MoleConceptLessonShell>
  );
}