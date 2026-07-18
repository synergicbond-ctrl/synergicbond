import React from "react";
import ConcentrationTermsPart3 from "../part3";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Concentration Terms — Topic 3: Gram/Litre Strength & Molarity — SYNERGIC BOND",
  description: "Transcribed classroom notes: Gram per Litre strength (S = w/V), Molarity calculations, and temperature dependence.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="concentration-terms" part={3}>
      <ConcentrationTermsPart3 />
    </SbcCoursePartFrame>
  );
}
