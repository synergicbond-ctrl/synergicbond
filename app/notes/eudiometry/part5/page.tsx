import React from "react";
import EudiometryPart5 from "../part5";
import { EudiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Eudiometry — Module 5: Absorption Analysis & Scrubbing — SYNERGIC BOND",
  description: "Comprehensive reference table of selective chemical absorbents (KOH, alkaline pyrogallol, ammoniacal Cu2Cl2, turpentine oil) and sequential scrubbing.",
};

export default function Page() {
  return (
    <EudiometryLessonShell part={5}>
      <EudiometryPart5 />
    </EudiometryLessonShell>
  );
}