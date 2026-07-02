import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Chemistry Search",
  description: "Search chemistry reactions, formulas, PYQs, NCERT references, orders, and knowledge graph results in one place.",
  alternates: {
    canonical: "/search",
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
