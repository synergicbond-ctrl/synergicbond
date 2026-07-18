import type { Metadata } from "next";
import ThermodynamicsPart15 from "../parts/ThermodynamicsPart15";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 15 | Synergic Bond", description: "Thermodynamics Part 15: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart15Page() {
  return (
    <ThermoPartFrame part={15}>
      <ThermodynamicsPart15 />
    </ThermoPartFrame>
  );
}
