import type { Metadata } from "next";
import ThermodynamicsPart03 from "../parts/ThermodynamicsPart03";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 03 | Synergic Bond", description: "Thermodynamics Part 03: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart03Page() {
  return (
    <ThermoLessonShell part={3}>
      <ThermodynamicsPart03 />
    </ThermoLessonShell>
  );
}
