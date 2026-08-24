import React from "react";
import MoleConceptPart12 from "../part12";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Isotopes and Average Atomic Mass — SYNERGIC BOND",
  description: "Weighted isotopic averages across Cl, B, Li, O, and N systems, mass percentage distributions, and neutron average determinations.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={12}>
      <MoleConceptPart12 />
    </MoleConceptLessonShell>
  );
}