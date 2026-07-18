import React from "react";
import StoichiometryPart7 from "../part7";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 7 (Pages 55–63) — SYNERGIC BOND",
  description: "Transcribed notes: Percentage Composition, Dumas & Kjeldahl Methods for Nitrogen, and Empirical vs Molecular Formulas.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={7}>
      <StoichiometryPart7 />
    </SbcCoursePartFrame>
  );
}
