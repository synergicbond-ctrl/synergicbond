import React from "react";
import ConcentrationTermsPart3 from "../part3";
import { ConcentrationTermsLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Concentration Terms — Topic 3: Gram/Litre Strength & Molarity — SYNERGIC BOND",
  description: "Transcribed classroom notes: Gram per Litre strength (S = w/V), Molarity calculations, and temperature dependence.",
};

export default function Page() {
  return (
    <ConcentrationTermsLessonShell part={3}>
      <ConcentrationTermsPart3 />
    </ConcentrationTermsLessonShell>
  );
}