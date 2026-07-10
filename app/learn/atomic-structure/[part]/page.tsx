import { notFound } from "next/navigation";
import Part01 from "../parts/part01";
import Part02 from "../parts/part02";
import Part03 from "../parts/part03";
import Part04 from "../parts/part04";
import Part05 from "../parts/part05";
import Part06 from "../parts/part06";
import Part07 from "../parts/part07";
import Part08 from "../parts/part08";
import Part09 from "../parts/part09";
import Part10 from "../parts/part10";
import Part11 from "../parts/part11";
import Part12 from "../parts/part12";
import Part13 from "../parts/part13";
import Part14 from "../parts/part14";
import Part15 from "../parts/part15";
import Part16 from "../parts/part16";
import Part17 from "../parts/part17";
import Part18 from "../parts/part18";
import Part19 from "../parts/part19";
import Part20 from "../parts/part20";
import Part21 from "../parts/part21";
import Part22 from "../parts/part22";
import Part23 from "../parts/part23";
import Part24 from "../parts/part24";

const parts = {
  part01: Part01,
  part02: Part02,
  part03: Part03,
  part04: Part04,
  part05: Part05,
  part06: Part06,
  part07: Part07,
  part08: Part08,
  part09: Part09,
  part10: Part10,
  part11: Part11,
  part12: Part12,
  part13: Part13,
  part14: Part14,
  part15: Part15,
  part16: Part16,
  part17: Part17,
  part18: Part18,
  part19: Part19,
  part20: Part20,
  part21: Part21,
  part22: Part22,
  part23: Part23,
  part24: Part24,
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
