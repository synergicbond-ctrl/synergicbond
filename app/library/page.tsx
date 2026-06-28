import Footer from "@/components/Footer";
import { BookMarked, ExternalLink, Star } from "lucide-react";

export const metadata = {
  title: "Book Library — SYNERGIC BOND",
  description: "Curated, structured chemistry reference library for NEET, JEE Advanced, Olympiad and research — Inorganic, Organic, Physical, Spectroscopy.",
};

type Book = { title: string; author: string; level: string; rank?: number };
type Domain = { name: string; tag: string; accent: string; books: Book[] };

const domains: Domain[] = [
  {
    name: "Inorganic Chemistry",
    tag: "🟦",
    accent: "#00F5D4",
    books: [
      { title: "Concise Inorganic Chemistry", author: "J.D. Lee", level: "JEE / Advanced", rank: 1 },
      { title: "Inorganic Chemistry", author: "Housecroft & Sharpe", level: "Advanced", rank: 2 },
      { title: "Inorganic Chemistry", author: "Miessler, Fischer & Tarr", level: "Advanced", rank: 3 },
      { title: "Inorganic Chemistry", author: "Shriver & Atkins", level: "Advanced / Research" },
      { title: "Chemistry of the Elements", author: "Greenwood & Earnshaw", level: "Research" },
      { title: "Fundamental Concepts of Inorganic Chemistry (Vol 1–5)", author: "Asim K. Das & Mahua Das", level: "Olympiad / Advanced" },
    ],
  },
  {
    name: "Organic Chemistry",
    tag: "🟩",
    accent: "#00BBF9",
    books: [
      { title: "Organic Chemistry", author: "Clayden, Greeves & Warren", level: "Advanced / Olympiad", rank: 1 },
      { title: "Guidebook to Mechanism in Organic Chemistry", author: "Peter Sykes", level: "JEE / Advanced", rank: 2 },
      { title: "Advanced Organic Chemistry (Part A & B)", author: "Carey & Sundberg", level: "Research", rank: 3 },
      { title: "Advanced Organic Chemistry", author: "Jerry March", level: "Research" },
      { title: "Organic Chemistry", author: "David Klein", level: "Beginner / JEE" },
      { title: "Organic Chemistry", author: "Morrison & Boyd", level: "JEE / Advanced" },
      { title: "Organic Chemistry", author: "Solomons & Fryhle", level: "JEE / Advanced" },
      { title: "Organic Reaction Mechanisms: Selected Problems & Solutions", author: "William C. Groutas", level: "Advanced" },
      { title: "Advanced Problems in Organic Chemistry", author: "Nimai Tiwari", level: "JEE Advanced" },
    ],
  },
  {
    name: "Physical Chemistry",
    tag: "🟨",
    accent: "#9B5DE5",
    books: [
      { title: "Physical Chemistry", author: "Atkins & de Paula", level: "Advanced", rank: 1 },
      { title: "Physical Chemistry", author: "Robert G. Mortimer", level: "Advanced", rank: 2 },
      { title: "Principles of Physical Chemistry", author: "Puri, Sharma & Pathania", level: "JEE / Advanced", rank: 3 },
      { title: "Advanced Physical Chemistry", author: "D.N. Bajpai", level: "Advanced" },
      { title: "Quantum Chemistry", author: "Ira N. Levine", level: "Research" },
      { title: "Quantum Chemistry", author: "Donald A. McQuarrie", level: "Research" },
      { title: "Molecular Quantum Mechanics", author: "P.W. Atkins & R. Friedman", level: "Research" },
    ],
  },
  {
    name: "Spectroscopy · Quantum · Stereochemistry",
    tag: "🟥",
    accent: "#C084FC",
    books: [
      { title: "Spectrometric Identification of Organic Compounds", author: "Silverstein, Webster & Kiemle", level: "Advanced / Research", rank: 1 },
      { title: "Introduction to Spectroscopy", author: "Pavia, Lampman, Kriz & Vyvyan", level: "Advanced", rank: 2 },
      { title: "Spectroscopic Methods in Organic Chemistry", author: "D.H. Williams & Ian Fleming", level: "Advanced", rank: 3 },
      { title: "Organic Spectroscopy", author: "William Kemp", level: "Advanced" },
      { title: "Stereochemistry of Organic Compounds", author: "E.L. Eliel & S.H. Wilen", level: "Research" },
      { title: "Stereochemistry & Reaction Mechanism", author: "P.S. Kalsi", level: "Advanced / Olympiad" },
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
            A structured, exam-curated reference library — {total} standard texts across four core domains, from JEE foundations to research-level treatises. ★ marks the top 3 picks per domain.
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
                      <div className="flex items-center gap-2">
                        {b.rank && (
                          <span className="flex items-center gap-0.5 text-[9px] font-black px-1.5 py-0.5 rounded-full" style={{ background: `${d.accent}20`, color: d.accent }}>
                            <Star className="h-2.5 w-2.5 fill-current" /> #{b.rank}
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{b.level}</span>
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
            <li>• <span className="text-white/80 font-semibold">Best starting stack (JEE/NEET):</span> J.D. Lee (Inorganic) · Clayden + Sykes (Organic) · Puri-Sharma-Pathania (Physical).</li>
            <li>• <span className="text-white/80 font-semibold">Olympiad jump:</span> add Housecroft, Carey & Sundberg, and P.S. Kalsi for stereochemistry depth.</li>
            <li>• <span className="text-white/80 font-semibold">Research transition:</span> Greenwood & Earnshaw, Jerry March, Levine/McQuarrie, and Silverstein for spectral ID.</li>
            <li>• <span className="text-white/80 font-semibold">Suggested addition:</span> Vogel's <em>Quantitative Chemical Analysis</em> for practical/analytical coverage.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
