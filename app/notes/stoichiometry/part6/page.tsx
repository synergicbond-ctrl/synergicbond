import React from "react";
import StoichiometryPart6 from "../part6";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 6 (Pages 46–54) — SYNERGIC BOND",
  description: "Transcribed notes: Successive Reactions, Iron Pyrite Roasting, Pyrolusite Assay, and Percentage Yields.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={6}>
      <StoichiometryPart6 />
    </SbcCoursePartFrame>
  );
}
