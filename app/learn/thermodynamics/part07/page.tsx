import type { Metadata } from "next";
import ThermodynamicsPart07 from "../parts/ThermodynamicsPart07";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 07 | Synergic Bond", description: "Thermodynamics Part 07: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart07Page() {
  return (
    <ThermoPartFrame part={7}>
      <ThermodynamicsPart07 />
    </ThermoPartFrame>
  );
}
