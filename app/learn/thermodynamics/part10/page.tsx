import type { Metadata } from "next";
import ThermodynamicsPart10 from "../parts/ThermodynamicsPart10";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 10 | Synergic Bond", description: "Thermodynamics Part 10: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart10Page() {
  return (
    <ThermoLessonShell part={10}>
      <ThermodynamicsPart10 />
    </ThermoLessonShell>
  );
}
