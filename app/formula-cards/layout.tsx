import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula Cards",
  description: "Searchable high-yield chemistry formula cards with variables, units, derivations, NCERT references, and linked PYQs.",
  alternates: {
    canonical: "/formula-cards",
  },
};

export default function FormulaCardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
