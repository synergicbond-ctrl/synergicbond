import type { Metadata } from "next";
import MoleConceptTextbook from "@/components/notes/MoleConceptTextbook";

export const metadata: Metadata = {
  title: "Mole Concept Full Notes",
  description:
    "Full-length JEE Main web notes for Some Basic Concepts of Chemistry: mole concept, stoichiometry, limiting reagent, POAC, formula sheet, solved examples, and MCQs.",
  alternates: {
    canonical: "/notes/mole-concept",
  },
};

export default function MoleConceptNotesPage() {
  return <MoleConceptTextbook />;
}
