import type { Metadata } from "next";
import ThermodynamicsPart02 from "../parts/ThermodynamicsPart02";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 02 | Synergic Bond", description: "Thermodynamics Part 02: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart02Page() {
  return (
    <ThermoPartFrame part={2}>
      <ThermodynamicsPart02 />
    </ThermoPartFrame>
  );
}
