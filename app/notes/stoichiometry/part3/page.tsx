import React from "react";
import StoichiometryPart3 from "../part3";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 3 (Pages 18–27) — SYNERGIC BOND",
  description: "Transcribed notes: Detection of Limiting Reagent, Percentage Yield, Degree of Dissociation from Vapour Density, and Solved Examples.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={3}>
      <StoichiometryPart3 />
    </SbcCoursePartFrame>
  );
}
