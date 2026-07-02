import Link from "next/link";
import type { Program } from "@/lib/programs";

// Shared hero + breadcrumb for /programs/[slug]/{learn,practice,tests}
// (Roadmap V2 Weeks 2–4). Server component, zero client JS.
export default function ProgramPageHeader({
  program,
  section,
  blurb,
}: {
  program: Program;
  section: string;
  blurb: string;
}) {
  const { slug, name, accent } = program;
  return (
    <div className={`border-b border-white/10 bg-gradient-to-b ${accent.gradient} to-black px-6 py-12`}>
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
          <Link href="/programs" className="transition hover:text-white">
            Programs
          </Link>
          <span>/</span>
          <Link href={`/programs/${slug}`} className="transition hover:text-white">
            {name}
          </Link>
          <span>/</span>
          <span className="text-zinc-300">{section}</span>
        </nav>
        <div className={`mb-3 text-xs font-bold uppercase tracking-widest ${accent.text}`}>{program.kicker}</div>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          {name} <span className={accent.text}>{section}</span>
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{blurb}</p>
      </div>
    </div>
  );
}
