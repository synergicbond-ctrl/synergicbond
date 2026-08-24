import type { Metadata } from "next";
import ThermodynamicsPart17 from "../parts/ThermodynamicsPart17";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 17 | Synergic Bond", description: "Thermodynamics Part 17: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart17Page() {
  return (
    <ThermoLessonShell part={17}>
      <ThermodynamicsPart17 />
    </ThermoLessonShell>
  );
}
