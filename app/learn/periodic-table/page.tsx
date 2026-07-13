import type { Metadata } from "next";
import PeriodicTableMasterNotes from "./PeriodicTableMasterNotesV2";

export const metadata: Metadata = {
  title: "Classification of Elements and Periodicity in Properties — JEE Advanced | Synergic Bond",
  description:
    "Complete JEE Advanced notes covering periodic classification, electronic configuration, periodic trends, exceptions, effective nuclear charge, Slater rules, family trends, transition elements, tables, SVG diagrams, and worked examples.",
};

export default function PeriodicTableNotesPage() {
  return <PeriodicTableMasterNotes />;
}
