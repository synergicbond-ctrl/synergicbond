import type { Metadata } from "next";
import ThermodynamicsPart04 from "../parts/ThermodynamicsPart04";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 04 | Synergic Bond", description: "Thermodynamics Part 04: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart04Page() {
  return (
    <ThermoPartFrame part={4}>
      <ThermodynamicsPart04 />
    </ThermoPartFrame>
  );
}
