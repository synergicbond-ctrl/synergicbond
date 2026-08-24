import MoleConceptPart1 from "../part1";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Foundations of the Mole — SYNERGIC BOND",
  description: "SI definition of the mole, Avogadro constant, Faraday constant relationship, formula units, and particle-to-mole calculations.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={1}>
      <MoleConceptPart1 />
    </MoleConceptLessonShell>
  );
}