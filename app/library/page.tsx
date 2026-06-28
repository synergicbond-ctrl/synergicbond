import Footer from "@/components/Footer";
import { BookMarked, ExternalLink, Star } from "lucide-react";

export const metadata = {
  title: "Book Library — SYNERGIC BOND",
  description: "Curated world-class chemistry textbooks — Inorganic, Organic, Physical, Spectroscopy, Analytical — from UK, USA, Russia, Germany, Japan and India.",
};

type Book = { title: string; author: string; level: string; country: string; flag: string; rank?: number };
type Domain = { name: string; tag: string; accent: string; books: Book[] };

const domains: Domain[] = [
  {
    name: "Inorganic Chemistry",
    tag: "🟦",
    accent: "#00F5D4",
    books: [
      { title: "Concise Inorganic Chemistry", author: "J.D. Lee", level: "Foundation → Advanced", country: "UK", flag: "🇬🇧", rank: 1 },
      { title: "Advanced Inorganic Chemistry", author: "Cotton & Wilkinson", level: "Research", country: "USA", flag: "🇺🇸", rank: 2 },
      { title: "Chemistry of the Elements", author: "Greenwood & Earnshaw", level: "Research", country: "UK", flag: "🇬🇧", rank: 3 },
      { title: "Inorganic Chemistry", author: "Housecroft & Sharpe", level: "Advanced", country: "UK", flag: "🇬🇧" },
      { title: "Inorganic Chemistry", author: "Miessler, Fischer & Tarr", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Inorganic Chemistry", author: "Shriver & Atkins", level: "Advanced / Research", country: "UK", flag: "🇬🇧" },
      { title: "Inorganic Chemistry: Principles of Structure & Reactivity", author: "Huheey, Keiter & Keiter", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Structural Inorganic Chemistry", author: "A.F. Wells", level: "Research", country: "UK", flag: "🇬🇧" },
      { title: "Inorganic Chemistry (Holleman-Wiberg)", author: "Holleman & Wiberg", level: "Research", country: "Germany", flag: "🇩🇪" },
      { title: "General & Inorganic Chemistry", author: "N.S. Akhmetov (MIR)", level: "Foundation / Advanced", country: "Russia", flag: "🇷🇺" },
      { title: "Fundamental Concepts of Inorganic Chemistry (Vol 1–5)", author: "Asim K. Das & Mahua Das", level: "Olympiad / Advanced", country: "India", flag: "🇮🇳" },
    ],
  },
  {
    name: "Organic Chemistry",
    tag: "🟩",
    accent: "#00BBF9",
    books: [
      { title: "Organic Chemistry", author: "Clayden, Greeves & Warren", level: "Advanced / Olympiad", country: "UK", flag: "🇬🇧", rank: 1 },
      { title: "Advanced Organic Chemistry", author: "Jerry March", level: "Research", country: "USA", flag: "🇺🇸", rank: 2 },
      { title: "Advanced Organic Chemistry (Part A & B)", author: "Carey & Sundberg", level: "Research", country: "USA", flag: "🇺🇸", rank: 3 },
      { title: "Guidebook to Mechanism in Organic Chemistry", author: "Peter Sykes", level: "Foundation → Advanced", country: "UK", flag: "🇬🇧" },
      { title: "Structure & Mechanism in Organic Chemistry", author: "C.K. Ingold", level: "Research", country: "UK", flag: "🇬🇧" },
      { title: "Fundamentals of Organic Chemistry", author: "Nesmeyanov & Nesmeyanov (MIR)", level: "Advanced", country: "Russia", flag: "🇷🇺" },
      { title: "Organic Chemistry (4 Volumes)", author: "Reutov, Kurts & Butin (MIR)", level: "Advanced / Research", country: "Russia", flag: "🇷🇺" },
      { title: "Organic Chemistry (Vol 1 & 2)", author: "I.L. Finar", level: "Advanced", country: "UK", flag: "🇬🇧" },
      { title: "Organic Chemistry", author: "Morrison & Boyd", level: "Foundation → Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Organic Chemistry", author: "Paula Y. Bruice", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Organic Chemistry: Structure & Function", author: "Vollhardt & Schore", level: "Advanced", country: "Germany / USA", flag: "🇩🇪" },
      { title: "Principles of Organic Synthesis", author: "Norman & Coxon", level: "Research", country: "UK", flag: "🇬🇧" },
      { title: "Modern Methods of Organic Synthesis", author: "W. Carruthers", level: "Research", country: "UK", flag: "🇬🇧" },
    ],
  },
  {
    name: "Physical & Quantum Chemistry",
    tag: "🟨",
    accent: "#9B5DE5",
    books: [
      { title: "Physical Chemistry", author: "Atkins & de Paula", level: "Advanced", country: "UK", flag: "🇬🇧", rank: 1 },
      { title: "Physical Chemistry", author: "Walter J. Moore", level: "Advanced", country: "USA", flag: "🇺🇸", rank: 2 },
      { title: "Quantum Chemistry", author: "Ira N. Levine", level: "Research", country: "USA", flag: "🇺🇸", rank: 3 },
      { title: "Physical Chemistry", author: "Robert G. Mortimer", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Physical Chemistry", author: "Gilbert W. Castellan", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Physical Chemistry: A Molecular Approach", author: "McQuarrie & Simon", level: "Advanced", country: "USA", flag: "🇺🇸" },
      { title: "Quantum Chemistry", author: "Donald A. McQuarrie", level: "Research", country: "USA", flag: "🇺🇸" },
      { title: "Quantum Chemistry", author: "Eyring, Walter & Kimball", level: "Research", country: "USA", flag: "🇺🇸" },
      { title: "Quantum Mechanics (Non-Relativistic Theory)", author: "Landau & Lifshitz (MIR)", level: "Research", country: "Russia", flag: "🇷🇺" },
      { title: "Valence", author: "C.A. Coulson", level: "Advanced / Research", country: "UK", flag: "🇬🇧" },
      { title: "Molecular Quantum Mechanics", author: "Atkins & Friedman", level: "Research", country: "UK", flag: "🇬🇧" },
    ],
  },
  {
    name: "Spectroscopy & Stereochemistry",
    tag: "🟥",
    accent: "#C084FC",
    books: [
      { title: "Spectrometric Identification of Organic Compounds", author: "Silverstein, Webster & Kiemle", level: "Advanced / Research", country: "USA", flag: "🇺🇸", rank: 1 },
      { title: "Introduction to Spectroscopy", author: "Pavia, Lampman, Kriz & Vyvyan", level: "Advanced", country: "USA", flag: "🇺🇸", rank: 2 },
      { title: "Spectroscopic Methods in Organic Chemistry", author: "Williams & Fleming", level: "Advanced", country: "UK", flag: "🇬🇧", rank: 3 },
      { title: "Fundamentals of Molecular Spectroscopy", author: "Banwell & McCash", level: "Advanced", country: "UK", flag: "🇬🇧" },
      { title: "NMR Spectroscopy: Basic Principles", author: "Harald Günther", level: "Research", country: "Germany", flag: "🇩🇪" },
      { title: "Infrared Absorption Spectroscopy", author: "Koji Nakanishi", level: "Advanced", country: "Japan", flag: "🇯🇵" },
      { title: "Stereochemistry of Organic Compounds", author: "Eliel & Wilen", level: "Research", country: "USA", flag: "🇺🇸" },
      { title: "Stereochemistry & Reaction Mechanism", author: "P.S. Kalsi", level: "Advanced / Olympiad", country: "India", flag: "🇮🇳" },
    ],
  },
  {
    name: "Analytical & Practical Chemistry",
    tag: "🟪",
    accent: "#00BBF9",
    books: [
      { title: "Vogel's Quantitative Chemical Analysis", author: "Mendham, Denney, Barnes & Thomas", level: "Advanced / Research", country: "UK", flag: "🇬🇧", rank: 1 },
      { title: "Vogel's Qualitative Inorganic Analysis", author: "G. Svehla", level: "Advanced", country: "UK", flag: "🇬🇧", rank: 2 },
      { title: "Fundamentals of Analytical Chemistry", author: "Skoog, West, Holler & Crouch", level: "Advanced / Research", country: "USA", flag: "🇺🇸", rank: 3 },
      { title: "Vogel's Practical Organic Chemistry", author: "Furniss, Hannaford et al.", level: "Advanced", country: "UK", flag: "🇬🇧" },
      { title: "Analytical Chemistry", author: "Gary D. Christian", level: "Advanced", country: "USA", flag: "🇺🇸" },
    ],
  },
];

function googleLink(b: Book) {
  return "https://www.google.com/search?q=" + encodeURIComponent(`${b.title} ${b.author} chemistry book`);
}

export default function LibraryPage() {
  const total = domains.reduce((n, d) => n + d.books.length, 0);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Database</p>
          <h1 className="text-4xl font-black md:text-5xl">Chemistry Book Library</h1>
          <p className="mt-3 text-white/65 text-sm max-w-2xl">
            {total} world-class chemistry <span className="text-white/80 font-semibold">textbooks</span> — the foundational treatises serious students actually learn from, by master authors across the UK, USA, Russia, Germany, Japan and India. ★ marks the top 3 picks per domain.
          </p>
        </div>

        {/* Domains */}
        <div className="space-y-10">
          {domains.map((d) => (
            <section key={d.name}>
              {/* Domain header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg">{d.tag}</span>
                <h2 className="text-xl font-black text-white">{d.name}</h2>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${d.accent}1a`, color: d.accent }}>
                  {d.books.length} books
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${d.accent}40, transparent)` }} />
              </div>

              {/* Book grid */}
              <div className="grid gap-3 md:grid-cols-2">
                {d.books.map((b) => (
                  <a
                    key={b.title + b.author}
                    href={googleLink(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-2xl bg-[#111827] border border-white/[0.06] p-4 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    {/* Spine icon */}
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border"
                      style={{ background: `${d.accent}14`, borderColor: `${d.accent}30` }}
                    >
                      <BookMarked className="h-5 w-5" style={{ color: d.accent }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {b.rank && (
                          <span className="flex items-center gap-0.5 text-[9px] font-black px-1.5 py-0.5 rounded-full" style={{ background: `${d.accent}20`, color: d.accent }}>
                            <Star className="h-2.5 w-2.5 fill-current" /> #{b.rank}
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{b.level}</span>
                        <span className="text-[10px] font-semibold text-white/50 ml-auto">{b.flag} {b.country}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug mt-1">{b.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{b.author}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold transition group-hover:gap-1.5" style={{ color: d.accent }}>
                        Find on Google <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Curator notes */}
        <div className="mt-12 rounded-2xl bg-[#111827] border border-white/[0.06] p-6">
          <h3 className="text-sm font-bold text-white mb-3">📌 Curator Notes</h3>
          <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
            <li>• <span className="text-white/80 font-semibold">Why only textbooks:</span> SYNERGIC BOND replaces exam-cram guides — here we point you to the deep conceptual sources the best ranks are actually built on.</li>
            <li>• <span className="text-white/80 font-semibold">Core conceptual stack:</span> J.D. Lee (Inorganic) · Clayden + Sykes (Organic) · Atkins (Physical).</li>
            <li>• <span className="text-white/80 font-semibold">Russian (MIR) classics:</span> Nesmeyanov, Reutov, Akhmetov and Landau-Lifshitz — legendary for first-principles depth.</li>
            <li>• <span className="text-white/80 font-semibold">Research transition:</span> Cotton & Wilkinson, Jerry March, Levine/McQuarrie, and Silverstein for spectral ID.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
