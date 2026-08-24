import type { Metadata } from "next";
import ThermodynamicsPart04 from "../parts/ThermodynamicsPart04";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 04 | Synergic Bond", description: "Thermodynamics Part 04: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart04Page() {
  return (
    <ThermoLessonShell part={4}>
      <ThermodynamicsPart04 />
    </ThermoLessonShell>
  );
}
