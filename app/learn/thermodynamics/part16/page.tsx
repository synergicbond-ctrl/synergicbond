import type { Metadata } from "next";
import ThermodynamicsPart16 from "../parts/ThermodynamicsPart16";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 16 | Synergic Bond", description: "Thermodynamics Part 16: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart16Page() {
  return (
    <ThermoPartFrame part={16}>
      <ThermodynamicsPart16 />
    </ThermoPartFrame>
  );
}
