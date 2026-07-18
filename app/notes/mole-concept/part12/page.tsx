import React from "react";
import MoleConceptPart12 from "../part12";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Isotopes and Average Atomic Mass — SYNERGIC BOND",
  description: "Weighted isotopic averages across Cl, B, Li, O, and N systems, mass percentage distributions, and neutron average determinations.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={12}>
      <MoleConceptPart12 />
    </SbcCoursePartFrame>
  );
}
