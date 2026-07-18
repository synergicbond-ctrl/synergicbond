import type { Metadata } from "next";
import ThermodynamicsPart06 from "../parts/ThermodynamicsPart06";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 06 | Synergic Bond", description: "Thermodynamics Part 06: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart06Page() {
  return (
    <ThermoPartFrame part={6}>
      <ThermodynamicsPart06 />
    </ThermoPartFrame>
  );
}
