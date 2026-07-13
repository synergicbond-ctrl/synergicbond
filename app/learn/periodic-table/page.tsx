import type { Metadata } from "next";
import PeriodicTableMasterNotes from "./PeriodicTableMasterNotesV2";

export const metadata: Metadata = {
  title: "Classification of Elements and Periodicity in Properties — JEE Advanced | Synergic Bond",
  description:
    "Complete JEE Advanced student notes with NCERT-aligned main-group data for Groups 1, 2 and 13–18; period-wise d-block configurations; complete first-row transition data; electrode, oxide and magnetic tables; and series-wise lanthanoid and actinoid configurations, radii and oxidation states.",
};

export default function PeriodicTableNotesPage() {
  return <PeriodicTableMasterNotes />;
}
