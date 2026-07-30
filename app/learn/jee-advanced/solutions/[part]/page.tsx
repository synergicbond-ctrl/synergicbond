import { notFound } from "next/navigation";
import { SolutionsChapterShell } from "../_components/SolutionsChapterShell";
import { getSolutionPart, solutionParts } from "../_data";

export function generateStaticParams() {
  return solutionParts.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ part: string }>;
}) {
  const { part: slug } = await params;
  const part = getSolutionPart(slug);
  if (!part) return {};
  return {
    title: `${part.title} | Solution and Colligative Properties | JEE Advanced`,
    description: part.subtitle,
  };
}

export default async function SolutionPartPage({
  params,
}: {
  params: Promise<{ part: string }>;
}) {
  const { part: slug } = await params;
  const part = getSolutionPart(slug);
  if (!part) notFound();
  return <SolutionsChapterShell part={part} parts={solutionParts} />;
}
