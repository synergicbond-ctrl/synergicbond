import type { Concept } from "@/lib/masterSyllabus/types";

export interface Chapter {
  id: string;
  title: string;
  category: string;
  difficulty: number;
  estimatedHours: number;
  exams: string[];
  pyqTags: string[];
  concepts: Concept[];
  prerequisites?: string[];     // Marked optional
  searchKeywords?: string[];    // Marked optional
  ncert?: boolean;              // Marked optional
}

export interface SelectedChapterWeight {
  chapter: Chapter;
  questionsAllocated: number;
}

// Function to generate the exam prompt as expected by your API route
export function buildMockPaperPrompt(selectedChapters: SelectedChapterWeight[], examType: string): string {
  return `
You are the SYNERGIC BOND Exam Generation Engine. 
Generate a comprehensive mock paper strictly based on the syllabus data for the following chapters:
${selectedChapters.map(c => `- ${c.chapter.title} (${c.questionsAllocated} questions)`).join("\n")}

Exam Format: ${examType}
Ensure all questions are rigorously aligned with NEET/JEE standards.
`;
}
