import { notFound } from "next/navigation";
import { parts } from "../../_content";
import { PartPage } from "../../_components";
import { PART_COUNT, partSlug } from "../../_meta";

export function generateStaticParams() {
  return Array.from({ length: PART_COUNT }, (_, index) => ({ part: partSlug(index + 1) }));
}

export default async function GaseousStatePart({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const number = Number(part.replace(/^part/, ""));
  const data = parts.find((entry) => entry.number === number);
  if (!data) notFound();
  return <PartPage data={data} />;
}
