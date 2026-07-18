import type { Metadata } from "next";
import ThermodynamicsPart08 from "../parts/ThermodynamicsPart08";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 08 | Synergic Bond", description: "Thermodynamics Part 08: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart08Page() {
  return (
    <ThermoPartFrame part={8}>
      <ThermodynamicsPart08 />
    </ThermoPartFrame>
  );
}
