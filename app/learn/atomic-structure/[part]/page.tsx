import { notFound } from "next/navigation";
import Part01 from "../parts/part01";
import Part02 from "../parts/part02";
import Part03 from "../parts/part03";
import Part04 from "../parts/part04";
import Part05 from "../parts/part05";

const parts = {
  part01: Part01,
  part02: Part02,
  part03: Part03,
  part04: Part04,
  part05: Part05,
};

export function generateStaticParams() {
  return Object.keys(parts).map((part) => ({ part }));
}

export default async function AtomicStructurePartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const Part = parts[part as keyof typeof parts];

  if (!Part) {
    notFound();
  }

  return <Part />;
}
