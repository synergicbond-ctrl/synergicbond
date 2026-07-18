import type { Metadata } from "next";
import ThermodynamicsPart12 from "../parts/ThermodynamicsPart12";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 12 | Synergic Bond", description: "Thermodynamics Part 12: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart12Page() {
  return (
    <ThermoPartFrame part={12}>
      <ThermodynamicsPart12 />
    </ThermoPartFrame>
  );
}
