import type { Metadata } from "next";
import ThermodynamicsPart19 from "../parts/ThermodynamicsPart19";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 19 | Synergic Bond", description: "Thermodynamics Part 19: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart19Page() {
  return (
    <ThermoLessonShell part={19}>
      <ThermodynamicsPart19 />
    </ThermoLessonShell>
  );
}
