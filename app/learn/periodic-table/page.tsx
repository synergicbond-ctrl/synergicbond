import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import PeriodicTableMasterNotes from "./PeriodicTableMasterNotesV2";

export const metadata: Metadata = {
  title: "Classification of Elements and Periodicity in Properties — JEE Advanced | Synergic Bond",
  description: "NCERT-first, JEE Advanced periodicity notes with data-backed animated SVGs, accessible equations, verified tables, worked examples and block-wise reference data.",
};

export default function PeriodicTableNotesPage() {
  return <PeriodicTableMasterNotes />;
}
