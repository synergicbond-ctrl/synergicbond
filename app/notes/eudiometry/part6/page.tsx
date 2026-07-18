import React from "react";
import EudiometryPart6 from "../part6";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 6: Molecular Formula Determination — SYNERGIC BOND",
  description: "Deriving exact molecular formulas (CxHy and CxHyOz) from eudiometric explosion contractions and alkali absorption data.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={6}>
      <EudiometryPart6 />
    </SbcCoursePartFrame>
  );
}
