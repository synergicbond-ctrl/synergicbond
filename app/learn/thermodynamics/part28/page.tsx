import type { Metadata } from "next";
import ThermodynamicsPart28 from "../parts/ThermodynamicsPart28";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 28 | Synergic Bond", description: "Thermodynamics Part 28: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart28Page() {
  return (
    <ThermoPartFrame part={28}>
      <ThermodynamicsPart28 />
    </ThermoPartFrame>
  );
}
