import { userProgress } from "./userProgress";
import { masterSyllabus } from "./masterSyllabus";

function scoreChapter(id: string) {
  if (userProgress.completed.includes(id)) return 1;
  if (userProgress.inProgress.includes(id)) return 2;
  if (userProgress.revisionQueue.includes(id)) return 3;
  return 4;
}

export function getSmartRevisionQueue() {
  return [...masterSyllabus]
    .sort((a, b) => scoreChapter(b.id) - scoreChapter(a.id))
    .slice(0, 5);
}