import type { Metadata } from "next";
import PeriodicTableMasterNotes from "./PeriodicTableMasterNotesV2";

export const metadata: Metadata = {
  title: "Classification of Elements and Periodicity in Properties — JEE Advanced | Synergic Bond",
  description:
    "In-depth JEE Advanced student notes with full Ionization Enthalpy, Electron Gain Enthalpy, Electronegativity and Effective Nuclear Charge theory; factor-wise examples; IE1–IE4 data; equations; applications; limitations; SVGs and solved problems.",
};

export default function PeriodicTableNotesPage() {
  return <PeriodicTableMasterNotes />;
}
