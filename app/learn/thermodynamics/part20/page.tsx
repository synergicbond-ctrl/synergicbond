import type { Metadata } from "next";
import ThermodynamicsPart20 from "../parts/ThermodynamicsPart20";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 20 | Synergic Bond", description: "Thermodynamics Part 20: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart20Page() {
  return (
    <ThermoPartFrame part={20}>
      <ThermodynamicsPart20 />
    </ThermoPartFrame>
  );
}
