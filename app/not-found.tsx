import Link from "next/link";

export const metadata = {
  title: "Page not found — SYNERGIC BOND",
};

// Global 404. Server component; renders inside the root layout. No internal
// paths or state are exposed.
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400/70">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
        The page you&apos;re looking for may have moved, or the link might be
        incomplete. Let&apos;s get you back to your chemistry.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/20"
        >
          Back to home
        </Link>
        <Link
          href="/support"
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          Contact support
        </Link>
      </div>
    </main>
  );
}
