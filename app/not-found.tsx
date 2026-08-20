import Link from "next/link";

export const metadata = {
  title: "Page not found — SYNERGIC BOND",
};

// Global 404. Server component; renders inside the root layout. No internal
// paths or state are exposed.
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
        The page you&apos;re looking for may have moved, or the link might be
        incomplete. Let&apos;s get you back to your chemistry.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--background)] transition hover:opacity-90"
        >
          Back to home
        </Link>
        <Link
          href="/support"
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--foreground)]"
        >
          Contact support
        </Link>
      </div>
    </main>
  );
}
