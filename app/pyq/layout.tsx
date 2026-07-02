import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Previous Year Questions",
  description: "Chapter-wise chemistry PYQs with filters, chapter intelligence, linked reactions, linked formulas, and NCERT references.",
  alternates: {
    canonical: "/pyq",
  },
};

export default function PYQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
