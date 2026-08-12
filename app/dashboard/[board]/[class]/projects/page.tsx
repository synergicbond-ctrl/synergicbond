import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { getProjectTopics, PROJECT_TEMPLATE } from "@/lib/cbse/projects";

// /dashboard/[board]/[class]/projects — Project & Journal Hub. Standard CBSE
// investigatory project topics + the official report template. Real curriculum
// reference content; zero client JS.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Project & Journal Hub` } : {};
}

export default async function ProjectsPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const topics = getProjectTopics();

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{b.name} {c.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Project & Journal Hub</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Project & Journal Hub</h1>
          <p className="mt-2 max-w-2xl text-white/55">Investigatory project topics with aim, materials and method outline, plus the standard CBSE report structure. Pick a topic and follow the template.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 px-6 py-8">
        {/* Report template */}
        <section>
          <h2 className="mb-1 text-lg font-black">Investigatory Project Report — Structure</h2>
          <p className="mb-4 text-sm text-white/50">Every CBSE project file follows this order.</p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {PROJECT_TEMPLATE.map((t, i) => (
              <li key={t.section} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-black text-cyan-300/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-bold text-white/90">{t.section}</span>
                </div>
                <p className="mt-0.5 pl-6 text-xs text-white/50">{t.note}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Topics */}
        <section>
          <h2 className="mb-1 text-lg font-black">Project Topics & Sample Outlines</h2>
          <p className="mb-4 text-sm text-white/50">{topics.length} standard investigatory projects. Tap to see aim, materials and method.</p>
          <div className="space-y-3">
            {topics.map((p) => (
              <details key={p.id} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 open:border-cyan-400/30">
                <summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-cyan-300/70">{p.category} · {p.level}</div>
                    <div className="font-black text-white/90">{p.title}</div>
                  </div>
                  <span className="shrink-0 text-cyan-400 transition group-open:rotate-90">›</span>
                </summary>
                <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-4 text-sm">
                  <div><h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Aim</h4><p className="text-white/75">{p.aim}</p></div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Materials</h4>
                    <div className="flex flex-wrap gap-1.5">{p.materials.map((m) => <span key={m} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-white/65">{m}</span>)}</div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Method Outline</h4>
                    <ol className="list-decimal space-y-1 pl-5 text-white/75">{p.outline.map((o, i) => <li key={i}>{o}</li>)}</ol>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <p className="text-xs text-white/35">Topics are standard CBSE investigatory projects. Always verify chemicals, safety and the current syllabus with your teacher before starting.</p>
      </div>
    </main>
  );
}
