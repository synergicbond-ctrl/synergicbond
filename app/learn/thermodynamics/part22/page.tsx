import type { Metadata } from "next";
import ThermodynamicsPart22 from "../parts/ThermodynamicsPart22";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 22 | Synergic Bond", description: "Thermodynamics Part 22: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart22Page() {
  return (
    <ThermoLessonShell part={22}>
      <ThermodynamicsPart22 />
    </ThermoLessonShell>
  );
}
