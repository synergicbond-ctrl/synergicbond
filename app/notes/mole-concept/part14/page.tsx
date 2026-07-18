import React from "react";
import MoleConceptPart14 from "../part14";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Ozonized Oxygen and Mixture Analysis — SYNERGIC BOND",
  description: "Advanced multi-component gas mixtures, vapour density correlations, and ozonized oxygen conversion kinetics.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={14}>
      <MoleConceptPart14 />
    </SbcCoursePartFrame>
  );
}
