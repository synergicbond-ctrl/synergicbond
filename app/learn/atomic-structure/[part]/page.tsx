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
import Part25 from "../parts/part25";
import Part26 from "../parts/part26";
import Part27 from "../parts/part27";
import Part28 from "../parts/part28";
import Part29 from "../parts/part29";
import Part30 from "../parts/part30";
import Part31 from "../parts/part31";
import Part32 from "../parts/part32";
import Part33 from "../parts/part33";
import Part34 from "../parts/part34";
import Part35 from "../parts/part35";
import Part36 from "../parts/part36";
import Part37 from "../parts/part37";
import Part38 from "../parts/part38";
import Part39 from "../parts/part39";
import Part40 from "../parts/part40";
import Part41 from "../parts/part41";
import Part42 from "../parts/part42";
import Part43 from "../parts/part43";
import Part44 from "../parts/part44";
import Part45 from "../parts/part45";
import Part46 from "../parts/part46";
import Part47 from "../parts/part47";
import Part48 from "../parts/part48";
import Part49 from "../parts/part49";
import Part50 from "../parts/part50";
import Part51 from "../parts/part51";
import Part52 from "../parts/part52";
import Part53 from "../parts/part53";
import Part54 from "../parts/part54";

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
  part25: Part25,
  part26: Part26,
  part27: Part27,
  part28: Part28,
  part29: Part29,
  part30: Part30,
  part31: Part31,
  part32: Part32,
  part33: Part33,
  part34: Part34,
  part35: Part35,
  part36: Part36,
  part37: Part37,
  part38: Part38,
  part39: Part39,
  part40: Part40,
  part41: Part41,
  part42: Part42,
  part43: Part43,
  part44: Part44,
  part45: Part45,
  part46: Part46,
  part47: Part47,
  part48: Part48,
  part49: Part49,
  part50: Part50,
  part51: Part51,
  part52: Part52,
  part53: Part53,
  part54: Part54,
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
