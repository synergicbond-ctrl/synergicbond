import React from "react";
import StoichiometryPart4 from "../part4";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 4 (Pages 28–36) — SYNERGIC BOND",
  description: "Transcribed notes: SO3 Dissociation, Acetylene Trimerisation, NH3 Dissociation, Percentage Purity, Pyrolusite Assay, and Mixture Problems.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={4}>
      <StoichiometryPart4 />
    </SbcCoursePartFrame>
  );
}
