import Link from "next/link";
import ThermodynamicsPart30LocalhostReview from "../_components/ThermodynamicsPart30LocalhostReview";
export const metadata={title:"Thermodynamics Part 30 Local Review | Synergic Bond"};
export default function Page(){return <><ThermodynamicsPart30LocalhostReview/><nav className="border-t border-white/10 bg-[#020617] px-5 py-10 text-slate-100"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><Link href="/learn/thermodynamics-local-review/part29" className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-slate-200">← Part 29</Link>
          <span className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07] px-6 py-4 font-black text-emerald-200">
            Parts 01–30 complete
          </span></div></nav></>}
