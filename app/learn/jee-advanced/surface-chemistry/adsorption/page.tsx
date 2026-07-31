import type { Metadata } from "next";
import AdsorptionDocumentViewer from "./AdsorptionDocumentViewer";

export const metadata: Metadata = {
  title: "Adsorption — Complete JEE Advanced Notes",
  description:
    "Exact page-by-page web edition of the complete JEE Advanced Adsorption notes, including every derivation, worked example, graph, table, JEE trap and embedded visual.",
  alternates: {
    canonical: "/learn/jee-advanced/surface-chemistry/adsorption",
  },
};

export default function AdsorptionCompletePage() {
  return <AdsorptionDocumentViewer />;
}
