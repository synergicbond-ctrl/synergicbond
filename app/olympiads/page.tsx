import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const olympiads = [
  { region: "India (National)", code: "NSEC", name: "National Standard Examination in Chemistry", desc: "The first stage of the Chemistry Olympiad in India, testing broad fundamental knowledge.", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  { region: "India (National)", code: "INChO", name: "Indian National Chemistry Olympiad", desc: "Advanced theoretical and experimental problems for top tier selection.", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { region: "Global (International)", code: "IChO", name: "International Chemistry Olympiad", desc: "The pinnacle of pre-university chemical competitions worldwide.", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  { region: "United States", code: "USNCO", name: "US National Chemistry Olympiad", desc: "Rigorous multi-tiered qualifying rounds for the US team.", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { region: "United Kingdom", code: "UKChO", name: "UK Chemistry Olympiad", desc: "Problem solving challenging real-world chemical scenarios.", color: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
  { region: "Australia", code: "AsChO", name: "Australian Chemistry Olympiad", desc: "Analytical and descriptive training tracks.", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
];

export default function OlympiadUniverse() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-7xl mx-auto space-y-12 animate-fadeIn">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <Link href="/" className="text-xs font-black tracking-widest text-indigo-400 uppercase">Synergic Bond</Link>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">🌍 Chemistry Olympiad Universe</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">Preparation roadmaps, advanced problem sets, and syllabi for international chemical competitions.</p>
        </div>
        <ThemeToggle />
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {olympiads.map((oly, idx) => (
          <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4 hover:border-indigo-500/40 transition">
            <span className={`text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border ${oly.color} self-start inline-block`}>
              {oly.code}
            </span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm tracking-tight text-slate-100">{oly.name}</h3>
              <span className="text-[9px] text-slate-500 font-bold tracking-wider uppercase block">{oly.region}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed h-12">{oly.desc}</p>
            <Link href={`/olympiads/${oly.code.toLowerCase()}`} className="text-[10px] font-black tracking-widest uppercase text-indigo-400 hover:text-indigo-300 block pt-2">
              Access Track &rarr;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
