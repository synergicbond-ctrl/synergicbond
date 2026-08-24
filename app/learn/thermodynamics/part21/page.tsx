import type { Metadata } from "next";
import ThermodynamicsPart21 from "../parts/ThermodynamicsPart21";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 21 | Synergic Bond", description: "Thermodynamics Part 21: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart21Page() {
  return (
    <ThermoLessonShell part={21}>
      <ThermodynamicsPart21 />
    </ThermoLessonShell>
  );
}
