import React from "react";
import ConcentrationTermsPart6 from "../part6";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Concentration Terms — Topic 6: Interconversions & Industrial Scales — SYNERGIC BOND",
  description: "Transcribed classroom notes: Master interconversions (M, m, χ, d), Volume strength of H2O2 (1 V = 0.089 M), and percentage labeling of Oleum.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="concentration-terms" part={6}>
      <ConcentrationTermsPart6 />
    </SbcCoursePartFrame>
  );
}
