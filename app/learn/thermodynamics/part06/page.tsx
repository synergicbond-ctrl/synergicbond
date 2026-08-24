import type { Metadata } from "next";
import ThermodynamicsPart06 from "../parts/ThermodynamicsPart06";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 06 | Synergic Bond", description: "Thermodynamics Part 06: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart06Page() {
  return (
    <ThermoLessonShell part={6}>
      <ThermodynamicsPart06 />
    </ThermoLessonShell>
  );
}
