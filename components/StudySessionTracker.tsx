"use client";

import { useStudySession } from "@/lib/hooks/useStudySession";

export default function StudySessionTracker({ chapterId }: { chapterId: string }) {
  useStudySession(chapterId);
  return null;
}
