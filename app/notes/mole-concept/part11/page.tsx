import React from "react";
import MoleConceptPart11 from "../part11";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Gas Density and Vapour Density — SYNERGIC BOND",
  description: "Gas density equation PM=dRT, classical Vapour Density (VD=M/2), and mass spectrometry isotope separation.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={11}>
      <MoleConceptPart11 />
    </SbcCoursePartFrame>
  );
}
