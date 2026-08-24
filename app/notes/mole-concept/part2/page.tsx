import MoleConceptPart2 from "../part2";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Avogadro Constant and Counting Particles — SYNERGIC BOND",
  description: "Atomic number vs mass number, subatomic rest masses, nuclear mass defect calculations, and Einstein E=mc^2 relation.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={2}>
      <MoleConceptPart2 />
    </MoleConceptLessonShell>
  );
}