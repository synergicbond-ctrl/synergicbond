import type { Metadata } from "next";
import ThermodynamicsPart13 from "../parts/ThermodynamicsPart13";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 13 | Synergic Bond", description: "Thermodynamics Part 13: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart13Page() {
  return (
    <ThermoLessonShell part={13}>
      <ThermodynamicsPart13 />
    </ThermoLessonShell>
  );
}
