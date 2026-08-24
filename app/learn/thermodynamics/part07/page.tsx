import type { Metadata } from "next";
import ThermodynamicsPart07 from "../parts/ThermodynamicsPart07";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 07 | Synergic Bond", description: "Thermodynamics Part 07: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart07Page() {
  return (
    <ThermoLessonShell part={7}>
      <ThermodynamicsPart07 />
    </ThermoLessonShell>
  );
}
