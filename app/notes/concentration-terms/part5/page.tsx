import React from "react";
import ConcentrationTermsPart5 from "../part5";
import { ConcentrationTermsLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Concentration Terms — Topic 5: Normality & Equivalent Weight — SYNERGIC BOND",
  description: "Transcribed classroom notes: Equivalent weight (E = M/n-factor), Normality (N = M × n-factor), and universal law of chemical equivalence.",
};

export default function Page() {
  return (
    <ConcentrationTermsLessonShell part={5}>
      <ConcentrationTermsPart5 />
    </ConcentrationTermsLessonShell>
  );
}