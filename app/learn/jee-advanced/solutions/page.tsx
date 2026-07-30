import { SolutionsChapterShell } from "./_components/SolutionsChapterShell";
import { solutionParts } from "./_data";

export const metadata = {
  title: "Solution and Colligative Properties | JEE Advanced | Synergic Bond",
  description:
    "Complete multipart JEE Advanced notes on solutions, phase equilibrium, distillation and colligative properties with derivations and solved questions.",
};

export default function SolutionsPage() {
  return <SolutionsChapterShell part={solutionParts[0]} parts={solutionParts} />;
}
