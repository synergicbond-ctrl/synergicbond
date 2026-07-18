import type { Metadata } from "next";
import ThermodynamicsPart14 from "../parts/ThermodynamicsPart14";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 14 | Synergic Bond", description: "Thermodynamics Part 14: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart14Page() {
  return (
    <ThermoPartFrame part={14}>
      <ThermodynamicsPart14 />
    </ThermoPartFrame>
  );
}
