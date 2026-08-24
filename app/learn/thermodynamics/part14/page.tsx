import type { Metadata } from "next";
import ThermodynamicsPart14 from "../parts/ThermodynamicsPart14";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 14 | Synergic Bond", description: "Thermodynamics Part 14: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart14Page() {
  return (
    <ThermoLessonShell part={14}>
      <ThermodynamicsPart14 />
    </ThermoLessonShell>
  );
}
