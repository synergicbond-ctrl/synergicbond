import type { Metadata } from "next";
import AdsorptionNativeNotes from "./AdsorptionNativeNotes";

export const metadata: Metadata = {
  title: "Adsorption — Verified JEE Advanced Notes",
  description:
    "Native textbook-style JEE Advanced Adsorption notes with verified calculations, KaTeX equations, SF Pro typography, responsive tables and original dark visuals.",
  alternates: {
    canonical: "/learn/jee-advanced/surface-chemistry/adsorption",
  },
};

export default function AdsorptionPage() {
  return <AdsorptionNativeNotes />;
}
