import Link from "next/link";

export const metadata = {
  title: "3D Stereochemistry Studio | Isomerism | Synergic Bond",
  description: "Interactive stereochemistry models, projections and worked examples.",
};

export default function StereochemistryStudioPage() {
  return (
    <main className="flex min-h-[calc(100dvh-4rem)] flex-col bg-[var(--background)]">
      <header className="sticky top-16 z-40 flex flex-wrap items-center gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 sm:px-6">
        <Link
          href="/learn/isomerism"
          className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--accent)]"
        >
          ← Back to Isomerism
        </Link>
        <h1 className="text-lg font-black text-[var(--foreground)]">3D Stereochemistry Studio</h1>
      </header>
      <iframe
        src="/stereochemistry-studio.html"
        title="3D Stereochemistry Studio"
        className="min-h-[calc(100dvh-8.5rem)] w-full flex-1 border-0 bg-white"
      />
    </main>
  );
}
