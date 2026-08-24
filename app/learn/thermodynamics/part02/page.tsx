import type { Metadata } from "next";
import ThermodynamicsPart02 from "../parts/ThermodynamicsPart02";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 02 | Synergic Bond", description: "Thermodynamics Part 02: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart02Page() {
  return (
    <ThermoLessonShell part={2}>
      <ThermodynamicsPart02 />
    </ThermoLessonShell>
  );
}
