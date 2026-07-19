import type { ReactNode } from "react";

export function MergedPartShell({
  partNumber,
  title,
  children,
}: {
  partNumber: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <header className="rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_34%),linear-gradient(135deg,rgba(34,211,238,.1),rgba(2,6,23,.8),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.25em] text-cyan-200">
            Isomerism · Part {partNumber} of 40
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This merged lesson preserves the original source modules while presenting them as one editable chapter part.
          </p>
        </header>
        <div className="mt-8 space-y-8">{children}</div>
      </article>
    </main>
  );
}

export function MergedSourceSection({
  sourcePart,
  children,
}: {
  sourcePart: number;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]">
      <div className="border-b border-white/10 bg-slate-950/50 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-slate-400">
        Internal source module {sourcePart}
      </div>
      <div className="[&_nav]:!hidden [&>main]:!min-h-0 [&>main]:!bg-transparent [&>main]:!px-0 [&>main]:!py-0 [&>main>article]:!max-w-none">
        {children}
      </div>
    </section>
  );
}
