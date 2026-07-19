import { notFound, permanentRedirect } from "next/navigation";
import { AtomicLessonShell, atomicPartMeta, lessonForOldSection } from "../parts/_shared";
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
import Part55 from "../parts/part55";

// All 55 authored study sections, in original order. Lessons render 2–3 of
// them each, per atomicPartMeta.sections — nothing is dropped or reordered.
const SECTION_COMPONENTS: Record<number, React.ComponentType> = {
  1: Part01, 2: Part02, 3: Part03, 4: Part04, 5: Part05, 6: Part06, 7: Part07,
  8: Part08, 9: Part09, 10: Part10, 11: Part11, 12: Part12, 13: Part13,
  14: Part14, 15: Part15, 16: Part16, 17: Part17, 18: Part18, 19: Part19,
  20: Part20, 21: Part21, 22: Part22, 23: Part23, 24: Part24, 25: Part25,
  26: Part26, 27: Part27, 28: Part28, 29: Part29, 30: Part30, 31: Part31,
  32: Part32, 33: Part33, 34: Part34, 35: Part35, 36: Part36, 37: Part37,
  38: Part38, 39: Part39, 40: Part40, 41: Part41, 42: Part42, 43: Part43,
  44: Part44, 45: Part45, 46: Part46, 47: Part47, 48: Part48, 49: Part49,
  50: Part50, 51: Part51, 52: Part52, 53: Part53, 54: Part54, 55: Part55,
};

export function generateStaticParams() {
  return atomicPartMeta.map((entry) => ({ part: `part${String(entry.part).padStart(2, "0")}` }));
}

export default async function AtomicStructurePartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const match = /^part(\d{2})$/.exec(part);
  if (!match) notFound();
  const number = Number(match[1]);

  const lesson = atomicPartMeta.find((entry) => entry.part === number);
  if (!lesson) {
    // Old 55-section URLs (part26…part55) → the lesson that now carries them.
    const target = number >= 26 && number <= 55 ? lessonForOldSection(number) : undefined;
    if (target) permanentRedirect(target.href);
    notFound();
  }

  return (
    <AtomicLessonShell lesson={lesson.part}>
      {lesson.sections.map((section) => {
        const Section = SECTION_COMPONENTS[section];
        return Section ? <Section key={section} /> : null;
      })}
    </AtomicLessonShell>
  );
}
