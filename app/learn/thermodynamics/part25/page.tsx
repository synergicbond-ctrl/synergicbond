import type { Metadata } from "next";
import ThermodynamicsPart25 from "../parts/ThermodynamicsPart25";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 25 | Synergic Bond", description: "Thermodynamics Part 25: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart25Page() {
  return (
    <ThermoLessonShell part={25}>
      <ThermodynamicsPart25 />
    </ThermoLessonShell>
  );
}
