import React from "react";
import ConcentrationTermsPart2 from "../part2";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Concentration Terms — Topic 2: Dilution Formulas & Mixing — SYNERGIC BOND",
  description: "Transcribed classroom notes: Dilution mole conservation, mixing of solutions, and PPM/PPB trace scales.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="concentration-terms" part={2}>
      <ConcentrationTermsPart2 />
    </SbcCoursePartFrame>
  );
}
