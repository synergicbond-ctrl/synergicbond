import React from "react";
import ConcentrationTermsPart6 from "../part6";
import { ConcentrationTermsLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Concentration Terms — Topic 6: Interconversions & Industrial Scales — SYNERGIC BOND",
  description: "Transcribed classroom notes: Master interconversions (M, m, χ, d), Volume strength of H2O2 (1 V = 0.089 M), and percentage labeling of Oleum.",
};

export default function Page() {
  return (
    <ConcentrationTermsLessonShell part={6}>
      <ConcentrationTermsPart6 />
    </ConcentrationTermsLessonShell>
  );
}