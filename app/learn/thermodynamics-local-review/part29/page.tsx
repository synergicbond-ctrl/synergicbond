import Link from "next/link";
import ThermodynamicsPart29LocalhostReview from "../_components/ThermodynamicsPart29LocalhostReview";

export const metadata = {
  title: "Thermodynamics Part 29 Local Review | Synergic Bond",
  description: "Private localhost review of Thermodynamics Part 29.",
};

export default function Page() {
  return (
    <>
      <nav className="border-b border-white/10 bg-[#020617] px-5 py-5 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/learn/thermodynamics-local-review"
            className="font-black text-cyan-200"
          >
            ← Complete index
          </Link>

          <span className="text-sm font-black text-slate-400">
            Part 29 of 30
          </span>
        </div>
      </nav>

      <ThermodynamicsPart29LocalhostReview />

      <nav className="border-t border-white/10 bg-[#020617] px-5 py-10 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/learn/thermodynamics-local-review/part28"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-slate-200"
          >
            ← Part 28
          </Link>

          <Link
            href="/learn/thermodynamics-local-review/part30"
            className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] px-6 py-4 font-black text-cyan-200"
          >
            Part 30 →
          </Link>
        </div>
      </nav>
    </>
  );
}
