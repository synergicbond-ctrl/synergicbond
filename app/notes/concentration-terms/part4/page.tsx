import React from "react";
import ConcentrationTermsPart4 from "../part4";
import { ConcentrationTermsLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Concentration Terms — Topic 4: Molality & Mole Fraction — SYNERGIC BOND",
  description: "Transcribed classroom notes: Temperature-independent concentration scales including Molality (m), Mole Fraction (χ), and binary summation rules.",
};

export default function Page() {
  return (
    <ConcentrationTermsLessonShell part={4}>
      <ConcentrationTermsPart4 />
    </ConcentrationTermsLessonShell>
  );
}