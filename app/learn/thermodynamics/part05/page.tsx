import type { Metadata } from "next";
import ThermodynamicsPart05 from "../parts/ThermodynamicsPart05";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 05 | Synergic Bond", description: "Thermodynamics Part 05: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart05Page() {
  return (
    <ThermoLessonShell part={5}>
      <ThermodynamicsPart05 />
    </ThermoLessonShell>
  );
}
