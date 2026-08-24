import type { Metadata } from "next";
import ThermodynamicsPart09 from "../parts/ThermodynamicsPart09";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 09 | Synergic Bond", description: "Thermodynamics Part 09: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart09Page() {
  return (
    <ThermoLessonShell part={9}>
      <ThermodynamicsPart09 />
    </ThermoLessonShell>
  );
}
