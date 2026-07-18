import type { Metadata } from "next";
import ThermodynamicsPart23 from "../parts/ThermodynamicsPart23";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 23 | Synergic Bond", description: "Thermodynamics Part 23: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart23Page() {
  return (
    <ThermoPartFrame part={23}>
      <ThermodynamicsPart23 />
    </ThermoPartFrame>
  );
}
