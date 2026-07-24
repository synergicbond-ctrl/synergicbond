import { notFound } from "next/navigation";
import ChemicalBondingLesson from "../parts/lesson";
import ChemicalBondingPractice from "../parts/practice";
import ChemicalBondingPart20 from "../parts/part20";
import { chemBondPartMeta } from "../parts/_shared";

export function generateStaticParams() {
  return chemBondPartMeta.map(({ part }) => ({ part: `part${String(part).padStart(2, "0")}` }));
}

export default async function ChemicalBondingPartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: slug } = await params;
  const match = /^part(\d{2})$/.exec(slug);
  if (!match) notFound();
  const part = Number(match[1]);
  if (!chemBondPartMeta.some((entry) => entry.part === part)) notFound();
  if (part === 20) return <ChemicalBondingPart20 />;
  if (part === 24) return <ChemicalBondingPractice />;
  return <ChemicalBondingLesson part={part} />;
}
