import Link from "next/link";
import { PROGRAMS } from "@/lib/programs";
import { getUserEntitlements } from "@/lib/access/entitlements";

// ─────────────────────────────────────────────────────────────────────────────
// /programs — Programs landing (Roadmap V2 · Week 1).
//
// Structure-only hub: one card per program from the programs SSOT, national
// entrance tracks first, boards after. Now dynamic: signed-in users see an
// "Included in your plan" badge on programs their REAL entitlements cover
// (Pro subscription or a granular purchase) — never fabricated. Signed-out
// users see the plain catalogue. Server component, zero client JS.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Programs — SYNERGIC BOND",
  description:
    "Chemistry programs for NEET, JEE Main, JEE Advanced, Olympiad, CBSE, ICSE, State Boards, GATE and International curricula — verified content, PYQs and tests organised by exam.",
};

const ENTRANCE = PROGRAMS.filter((p) => p.group === "entrance");
const BOARDS = PROGRAMS.filter((p) => p.group === "boards");
const GLOBAL = PROGRAMS.filter((p) => p.group === "global");

function ProgramCard({ owned, ...p }: (typeof PROGRAMS)[number] & { owned: boolean }) {
  const { slug, name, kicker, tagline, chips, accent } = p;
  return (
    <Link
      href={`/programs/${slug}`}
      className={`group flex flex-col rounded-lg border bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:bg-[var(--surface-2)] ${accent.card}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className={`text-[11px] font-bold uppercase tracking-widest ${accent.text}`}>{kicker}</div>
        {owned && (
          <span className="shrink-0 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-bold uppercase text-[var(--accent)]">
            Included in your plan
          </span>
        )}
      </div>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--foreground)]">{name}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <span key={chip} className={`rounded-full border px-2.5 py-0.5 text-[11px] ${accent.chip}`}>
            {chip}
          </span>
        ))}
      </div>
      <div className={`mt-5 text-sm font-semibold ${accent.text}`}>
        Open program <span className="inline-block transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

export default async function ProgramsPage() {
  const { keys } = await getUserEntitlements();
  // Entrance engine programs match by slug; board programs are owned when any
  // of their classes is entitled. Structure-only hubs never claim ownership.
  const owns = (slug: string) =>
    keys.has(slug) || keys.has(`${slug}:class-11`) || keys.has(`${slug}:class-12`);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Choose Your Exam</div>
        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">Programs</h1>
        <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
          Every program organises the same verified chemistry library — notes, formula cards, PYQs and
          tests — around one exam, at that exam&apos;s depth and pattern.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-1 text-xl font-bold">🇮🇳 Entrance &amp; Olympiad</h2>
        <p className="mb-6 text-sm text-[var(--text-muted)]">Competitive tracks with exam-specific pattern and depth</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {ENTRANCE.map((p) => (
            <ProgramCard key={p.slug} {...p} owned={owns(p.slug)} />
          ))}
        </div>

        <h2 className="mb-1 mt-12 text-xl font-bold">🏫 School Boards</h2>
        <p className="mb-6 text-sm text-[var(--text-muted)]">Class 11–12 board preparation on the same verified core</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BOARDS.map((p) => (
            <ProgramCard key={p.slug} {...p} owned={owns(p.slug)} />
          ))}
        </div>

        <h2 className="mb-1 mt-12 text-xl font-bold">🎓 Graduate &amp; International</h2>
        <p className="mb-6 text-sm text-[var(--text-muted)]">GATE Chemistry and international curricula on the same verified core</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {GLOBAL.map((p) => (
            <ProgramCard key={p.slug} {...p} owned={owns(p.slug)} />
          ))}
        </div>
      </div>
    </main>
  );
}
