import Link from "next/link";
import ThermodynamicsPart01LocalhostReview from "../_components/ThermodynamicsPart01LocalhostReview";

export const metadata = {
  title: "Thermodynamics Part 01 Local Review | Synergic Bond",
  description: "Private localhost review of Thermodynamics Part 01.",
};

export default function Page() {
  return (
    <>
      <ThermodynamicsPart01LocalhostReview />

      <nav className="border-t border-white/10 bg-[#020617] px-5 py-10 text-slate-100">
        <div className="mx-auto flex max-w-7xl justify-end">
          <Link
            href="/learn/thermodynamics-local-review/part02"
            className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] px-6 py-4 font-black text-cyan-200 transition hover:bg-cyan-400/[0.12]"
          >
            Part 02: Phase and properties →
          </Link>
        </div>
      </nav>
    </>
  );
}
