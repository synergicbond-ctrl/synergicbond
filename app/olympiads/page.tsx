import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const olympiads = [
  { region: "India (National)", code: "NSEC", name: "National Standard Examination in Chemistry", desc: "The first stage of the Chemistry Olympiad in India, testing broad fundamental knowledge." },
  { region: "India (National)", code: "INChO", name: "Indian National Chemistry Olympiad", desc: "Advanced theoretical and experimental problems for top tier selection." },
  { region: "Global (International)", code: "IChO", name: "International Chemistry Olympiad", desc: "The pinnacle of pre-university chemical competitions worldwide." },
  { region: "United States", code: "USNCO", name: "US National Chemistry Olympiad", desc: "Rigorous multi-tiered qualifying rounds for the US team." },
  { region: "United Kingdom", code: "UKChO", name: "UK Chemistry Olympiad", desc: "Problem solving challenging real-world chemical scenarios." },
  { region: "Australia", code: "AsChO", name: "Australian Chemistry Olympiad", desc: "Analytical and descriptive training tracks." },
];

export default function OlympiadUniverse() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <nav className="flex justify-between items-center border-b border-[var(--border)] pb-4">
        <div>
          <Link href="/" className="text-xs font-black tracking-widest text-[var(--accent)] uppercase">Synergic Bond</Link>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">🌍 Chemistry Olympiad Universe</h1>
          <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">Preparation roadmaps, advanced problem sets, and syllabi for international chemical competitions.</p>
        </div>
        <ThemeToggle />
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {olympiads.map((oly, idx) => (
          <div key={idx} className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg space-y-4 hover:border-[var(--accent)]/40 transition">
            <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)] self-start inline-block">
              {oly.code}
            </span>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm tracking-tight text-[var(--foreground)]">{oly.name}</h3>
              <span className="text-[9px] text-[var(--text-muted)] font-bold tracking-wider uppercase block">{oly.region}</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed h-12">{oly.desc}</p>
            <Link href={`/olympiads/${oly.code.toLowerCase()}`} className="text-[10px] font-black tracking-widest uppercase text-[var(--accent)] hover:underline block pt-2">
              Access Track &rarr;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
