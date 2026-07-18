import React from "react";
import ConcentrationTermsPart4 from "../part4";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Concentration Terms — Topic 4: Molality & Mole Fraction — SYNERGIC BOND",
  description: "Transcribed classroom notes: Temperature-independent concentration scales including Molality (m), Mole Fraction (χ), and binary summation rules.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="concentration-terms" part={4}>
      <ConcentrationTermsPart4 />
    </SbcCoursePartFrame>
  );
}
