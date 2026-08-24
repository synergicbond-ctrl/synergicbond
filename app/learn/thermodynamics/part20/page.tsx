import type { Metadata } from "next";
import ThermodynamicsPart20 from "../parts/ThermodynamicsPart20";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 20 | Synergic Bond", description: "Thermodynamics Part 20: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart20Page() {
  return (
    <ThermoLessonShell part={20}>
      <ThermodynamicsPart20 />
    </ThermoLessonShell>
  );
}
