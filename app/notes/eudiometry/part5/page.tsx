import React from "react";
import EudiometryPart5 from "../part5";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 5: Absorption Analysis & Scrubbing — SYNERGIC BOND",
  description: "Comprehensive reference table of selective chemical absorbents (KOH, alkaline pyrogallol, ammoniacal Cu2Cl2, turpentine oil) and sequential scrubbing.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={5}>
      <EudiometryPart5 />
    </SbcCoursePartFrame>
  );
}
