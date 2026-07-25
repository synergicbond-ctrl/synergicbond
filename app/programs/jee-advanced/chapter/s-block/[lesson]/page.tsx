import Link from "next/link";
import { notFound } from "next/navigation";
import { lessonById, sBlockLessons } from "../lessons";

export function generateStaticParams() { return sBlockLessons.map(({ id }) => ({ lesson: id })); }

export default async function SBlockLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson: id } = await params;
  const lesson = lessonById(id);
  if (!lesson) notFound();
  const index = sBlockLessons.findIndex(({ id: currentId }) => currentId === id);
  const previous = sBlockLessons[index - 1];
  const next = sBlockLessons[index + 1];
  return <main className="min-h-screen bg-[#0a1622] px-4 pb-20 pt-24 text-white sm:px-6"><article className="mx-auto max-w-4xl"><Link href="/programs/jee-advanced/chapter/s-block" className="text-sm font-bold text-cyan-300 hover:text-cyan-100">← S-block chapter map</Link><header className="mt-5 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#143247] to-[#102235] p-7 sm:p-10"><p className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">{lesson.unit} · Lesson {lesson.id} of 60</p><h1 className="mt-3 font-serif text-3xl font-black sm:text-5xl">{lesson.title}</h1><p className="mt-5 text-base leading-8 text-slate-200">{lesson.core}</p></header><section className="mt-5 rounded-2xl border border-white/10 bg-[#102235] p-6"><h2 className="font-serif text-2xl font-bold">Key notes</h2><ul className="mt-4 space-y-4">{lesson.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />{point}</li>)}</ul></section><aside className="mt-5 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><b className="text-amber-300">JEE trap:</b> {lesson.trap}</aside><section className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[.05] p-5 text-sm leading-7 text-slate-200"><b className="text-cyan-200">Verification hierarchy:</b> NCERT is the first authority for core statements; this lesson adds original JEE-level reasoning cross-checked against standard inorganic texts and problem patterns.</section><nav className="mt-8 grid gap-3 sm:grid-cols-2">{previous ? <Link className="rounded-xl border border-white/10 bg-[#102235] p-4 text-sm font-bold text-slate-200 hover:border-cyan-300/50" href={`/programs/jee-advanced/chapter/s-block/${previous.id}`}>← {previous.id}. {previous.title}</Link> : <div />}{next ? <Link className="rounded-xl border border-amber-300/30 bg-[#102235] p-4 text-right text-sm font-bold text-amber-100 hover:border-amber-300/60" href={`/programs/jee-advanced/chapter/s-block/${next.id}`}>{next.id}. {next.title} →</Link> : <div />}</nav></article></main>;
}
