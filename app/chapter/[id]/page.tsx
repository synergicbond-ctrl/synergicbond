import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { chapterIdMap } from "@/lib/masterSyllabus/chapterIdMap";
import { masterFormulas } from "@/lib/masterSyllabus/formulas";
import { masterReactions } from "@/lib/masterSyllabus/reactions";
import { highYieldNotes } from "@/lib/masterSyllabus/notes";
import { organicMechanisms } from "@/lib/masterSyllabus/mechanisms";
import AiTutorBox from "@/components/AiTutorBox";
import QuizAndFeedback from "@/components/QuizAndFeedback";
import VisionUploader from "@/components/VisionUploader";
import StudySessionTracker from "@/components/StudySessionTracker";
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";
import { isFreeChapter } from "@/lib/freeChapters";

const allChapters = [...physical, ...organic, ...inorganic];

type Mechanism = {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  steps?: string[];
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChapterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const chapter = allChapters.find((c) => c.id === resolvedParams.id);

  if (!chapter) {
    notFound();
  }

  const lookupId = chapterIdMap[chapter.id] ?? chapter.id;

  // Server-side access gate: free chapters pass through; premium chapters
  // require an active Pro subscription. Server redirect means zero premium
  // content reaches the client for unauthorized users.
  if (!isFreeChapter(lookupId)) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect(`/auth/signin?next=/chapter/${resolvedParams.id}`);
    const isPro = await isProActive(supabase, user.id);
    if (!isPro) redirect("/pricing");
  }

  const formulas = masterFormulas[lookupId] || [];
  const reactions = masterReactions.filter((r) => r.category === chapter.category);
  const mechanisms = organicMechanisms[lookupId] || [];
  const notes = highYieldNotes.filter((n) => n.chapterId === lookupId);

  const sampleQuizQuestions = chapter.concepts.map((c, idx) => ({
    id: `q-${idx}`,
    text: `Conceptual question evaluating understanding of ${c.title}. Deduce based on rigorous syllabus parameters.`,
    options: ["A. Primary rigorous deductive choice", "B. Distractor parameter A", "C. Distractor parameter B", "D. False non-syllabus parameter"],
    answer: "A",
    solution: "Applying knowledge graph principles confirms the inference of Option A."
  }));

  const conceptStrings = chapter.concepts.map(c => c.title);

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <StudySessionTracker chapterId={chapter.id} />
      
      <header className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            {chapter.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            <span className="bg-slate-200 dark:bg-slate-800 px-2.5 py-0.5 rounded uppercase font-bold">
              {chapter.category}
            </span>
            <span>Difficulty: {chapter.difficulty}/5</span>
            <span>Study Time: ~{chapter.estimatedHours} hrs</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {chapter.exams.map((exam) => (
            <span
              key={exam}
              className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm"
            >
              {exam}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-10">
          
          <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chapter.concepts.map((concept, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <h3 className="font-bold text-indigo-700 dark:text-indigo-400">{concept.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{concept.description}</p>
                </div>
              ))}
            </div>
          </section>

          {formulas.length > 0 && (
            <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold mb-4">Formula Sheet</h2>
              <div className="space-y-4">
                {formulas.map((f, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-indigo-50 dark:border-indigo-950 bg-indigo-50/30 dark:bg-indigo-950/20 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{f.title}</h4>
                      <code className="text-sm font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 mt-1 inline-block text-indigo-600 dark:text-indigo-400">
                        {f.expression}
                      </code>
                    </div>
                    {f.pyqContext && (
                      <span className="text-xs text-slate-500 max-w-xs text-right hidden sm:block">
                        {f.pyqContext}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {reactions.length > 0 && (
            <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold mb-4">Important Reactions</h2>
              <div className="space-y-4">
                {reactions.map((rxn, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-950/40">
                    <h4 className="font-bold">{rxn.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      Reactants: {rxn.reactants.join(" + ")} → Products: {rxn.products.join(" + ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {mechanisms.length > 0 && (
            <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold mb-4">Mechanisms & Pathways</h2>
              <div className="space-y-4">
                {mechanisms.map((m: Mechanism, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-rose-100 dark:border-rose-950 bg-rose-50/20 dark:bg-rose-950/20">
                    <h4 className="font-bold text-rose-800 dark:text-rose-400">{m.name ?? m.title} Mechanism</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{m.description ?? m.steps?.join(" ")}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {notes.length > 0 && (
            <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold mb-4">NCERT Notes & Exceptions</h2>
              <div className="space-y-4">
                {notes.map((note, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900">
                    <h4 className="font-bold text-amber-800 dark:text-amber-400">{note.title}</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">{note.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {chapter.pyqTags && chapter.pyqTags.length > 0 && (
            <section className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold mb-2">Previous Year Question Tags (PYQs)</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">High-yield meta-tags analyzed from NEET and JEE exams.</p>
              <div className="flex flex-wrap gap-2">
                {chapter.pyqTags.map((tag) => (
                  <span key={tag} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 text-xs px-3 py-1.5 rounded-xl uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="bg-indigo-50/20 dark:bg-indigo-950/10 p-8 rounded-3xl border border-dashed border-indigo-200 dark:border-indigo-800 space-y-4">
            <div className="text-center max-w-md mx-auto mb-4">
              <h2 className="text-xl font-black">Adaptive Practice Test Loop</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">Test conceptual understanding of formulas and mechanisms interactively.</p>
            </div>
            <QuizAndFeedback questions={sampleQuizQuestions} chapterId={lookupId} />
          </section>

        </div>

        <div className="space-y-6">
          <AiTutorBox chapter={chapter.title} concepts={conceptStrings} />
          <VisionUploader />
          <div className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-3"> 
            <h3 className="font-bold">Progress Dashboard Link</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Review chapter analytics and accuracy percentages.</p>
            <Link href="/dashboard" className="block w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-sm">
              View Student Dashboard
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
