import Link from "next/link";
import ThermodynamicsPart05LocalhostReview from "../_components/ThermodynamicsPart05LocalhostReview";

export const metadata = {
  title: "Thermodynamics Part 05 Local Review | Synergic Bond",
  description: "Private localhost review of Thermodynamics Part 05.",
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
            Part 05 of 30
          </span>
        </div>
      </nav>

      <ThermodynamicsPart05LocalhostReview />

      <nav className="border-t border-white/10 bg-[#020617] px-5 py-10 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/learn/thermodynamics-local-review/part04"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-slate-200"
          >
            ← Part 04
          </Link>

          <Link
            href="/learn/thermodynamics-local-review/part06"
            className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] px-6 py-4 font-black text-cyan-200"
          >
            Part 06 →
          </Link>
        </div>
      </nav>
    </>
  );
}
