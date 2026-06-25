import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { masterFormulas } from "@/lib/masterSyllabus/formulas";
import { masterReactions } from "@/lib/masterSyllabus/reactions";
import { highYieldNotes } from "@/lib/masterSyllabus/notes";
import { organicMechanisms } from "@/lib/masterSyllabus/mechanisms";

const allChapters = [...physical, ...organic, ...inorganic];

export interface AITutorContext {
  chapterTitle: string;
  formulas: string[];
  reactions: string[];
  mechanisms: string[];
  notesAndExceptions: string[];
  pyqTags: string[];
}

export function fetchSyllabusContext(chapterId: string): AITutorContext | null {
  const chapter = allChapters.find((c) => c.id === chapterId);
  if (!chapter) return null;

  const formulas = (masterFormulas[chapterId] || []).map(f => `${f.title}: ${f.expression}`);
  const reactions = masterReactions.filter(r => r.category === chapter.category).map(r => r.name);
  // Safely map mechanisms checking object properties
  const mechanisms = (organicMechanisms[chapterId] || []).map(m => (m as any).name || (m as any).id || "Reaction Mechanism Pathway");
  const notesAndExceptions = highYieldNotes.filter(n => n.chapterId === chapterId).map(n => n.content);

  return {
    chapterTitle: chapter.title,
    formulas,
    reactions,
    mechanisms,
    notesAndExceptions,
    pyqTags: chapter.pyqTags || []
  };
}

export function constructAIPrompt(userQuestion: string, context: AITutorContext): string {
  return `
You are the SYNERGIC BOND AI Chemistry Tutor, rigorously grounded in the NEET/JEE syllabus knowledge graph. 
Answer the user's question using ONLY the factual graph context provided below. Do not assume or extrapolate outside this context. If the answer cannot be deduced from this syllabus data, state that clearly.

Syllabus Context:
- Chapter: ${context.chapterTitle}
- Formulas: ${context.formulas.length > 0 ? context.formulas.join(", ") : "None"}
- Organic Name Reactions: ${context.reactions.length > 0 ? context.reactions.join(", ") : "None"}
- Organic Mechanisms: ${context.mechanisms.length > 0 ? context.mechanisms.join(", ") : "None"}
- NCERT Notes & Exceptions: ${context.notesAndExceptions.length > 0 ? context.notesAndExceptions.join("; ") : "None"}
- PYQ Tags: ${context.pyqTags.length > 0 ? context.pyqTags.join(", ") : "None"}

User Question:
"${userQuestion}"

Provide an exam-focused, accurate, and structured answer.
`;
}
