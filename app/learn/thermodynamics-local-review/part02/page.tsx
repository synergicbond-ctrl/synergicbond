import Link from "next/link";
import ThermodynamicsPart02LocalhostReview from "../_components/ThermodynamicsPart02LocalhostReview";

export const metadata = {
  title: "Thermodynamics Part 02 Local Review | Synergic Bond",
};

export default function Page() {
  return (
    <>
      <ThermodynamicsPart02LocalhostReview />

      <nav className="border-t border-white/10 bg-[#020617] px-5 py-10 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/learn/thermodynamics-local-review/part01"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-slate-200"
          >
            ← Part 01
          </Link>

          <Link
            href="/learn/thermodynamics-local-review/part03"
            className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] px-6 py-4 font-black text-cyan-200"
          >
            Part 03 →
          </Link>
        </div>
      </nav>
    </>
  );
}
