import React from "react";
import EudiometryPart3 from "../part3";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 3: Contraction & Residual Gas Analysis — SYNERGIC BOND",
  description: "General volume contraction formula, spectator nitrogen accounting in air combustion, and multi-component coal gas combustion.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={3}>
      <EudiometryPart3 />
    </SbcCoursePartFrame>
  );
}
