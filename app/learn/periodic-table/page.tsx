import type { Metadata } from "next";
import PeriodicTableMasterNotes from "./PeriodicTableMasterNotesV2";

export const metadata: Metadata = {
  title: "Classification of Elements and Periodicity in Properties — JEE Advanced | Synergic Bond",
  description:
    "NCERT-first world-reference notes for JEE Advanced: complete classification history, Moseley and modern law, electronic position, Zeff and Slater rules, radii, IE, EGE, electronegativity, chemical periodicity, lattice/hydration/Born-Haber theory, factor-wise examples, corrected special cases, and period-wise s/p/d/f-block data.",
};

export default function PeriodicTableNotesPage() {
  return <PeriodicTableMasterNotes />;
}
