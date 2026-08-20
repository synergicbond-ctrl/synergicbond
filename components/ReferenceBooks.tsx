"use client";
import { BookMarked, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { useT } from "@/lib/i18n";

const books = [
  { title: "NCERT Chemistry", author: "NCERT (XI & XII)", subject: "Foundation", difficulty: "Beginner", color: "#00F5D4", affiliate: "#" },
  { title: "Advanced Problems in Organic Chemistry", author: "M.S. Chouhan", subject: "Organic Practice", difficulty: "Expert", color: "#9B5DE5", affiliate: "#" },
  { title: "Problems in Physical Chemistry", author: "N. Avasthi", subject: "Physical Practice", difficulty: "Advanced", color: "#00BBF9", affiliate: "#" },
  { title: "Problems in Inorganic Chemistry", author: "V.K. Jaiswal", subject: "Inorganic Practice", difficulty: "Advanced", color: "#F59E0B", affiliate: "#" },
  { title: "A Guidebook to Mechanism", author: "Peter Sykes", subject: "Organic Mechanisms", difficulty: "Advanced", color: "#10B981", affiliate: "#" },
  { title: "Organic Chemistry", author: "Clayden et al.", subject: "Organic Theory", difficulty: "Expert", color: "#00BBF9", affiliate: "#" },
  { title: "Organic Chemistry", author: "Morrison & Boyd", subject: "Organic Theory", difficulty: "Advanced", color: "#EC4899", affiliate: "#" },
  { title: "Concise Inorganic Chemistry", author: "J.D. Lee", subject: "Inorganic Theory", difficulty: "Advanced", color: "#9B5DE5", affiliate: "#" },
  { title: "Physical Chemistry", author: "Peter Atkins", subject: "Physical Theory", difficulty: "Expert", color: "#00F5D4", affiliate: "#" },
  { title: "Modern Approach to Chemical Calculations", author: "R.C. Mukherjee", subject: "Numericals", difficulty: "Intermediate", color: "#9B5DE5", affiliate: "#" },
  { title: "IChO Preparatory Problems", author: "Olympiad Board", subject: "Olympiad", difficulty: "Expert", color: "#F59E0B", affiliate: "#" },
];

// Difficulty as a calm cyan→purple progression (in-brand)
const diffColor: Record<string, string> = {
  Beginner: "text-[var(--text-muted)] bg-[var(--surface-2)] border-[var(--border)]",
  Intermediate: "text-[var(--text-muted)] bg-[var(--surface-2)] border-[var(--border)]",
  Advanced: "text-[var(--text-muted)] bg-[var(--surface-2)] border-[var(--border)]",
  Expert: "text-[var(--accent)] bg-[var(--surface-2)] border-[var(--border)]",
};

export default function ReferenceBooks() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-1.5 text-[var(--text-muted)] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <BookOpen className="h-3.5 w-3.5 text-[var(--accent)]" />
          {t("books.eyebrow")}
        </div>
        <h2 className="text-3xl font-black md:text-5xl text-white tracking-tight drop-shadow-sm">{t("books.title")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-base leading-relaxed">
          {t("books.desc")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.title + book.author}
            className="group relative rounded-lg bg-[var(--surface)] border border-white/15 p-6 flex gap-5 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-strong)]"
            style={{ boxShadow: `0 10px 30px -15px ${book.color}26` }}
          >
            {/* Ambient hover glow */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: book.color }} />

            {/* 3D Realistic Book Spine Effect */}
            <div
              className="relative flex-shrink-0 w-20 h-28 rounded-r-xl rounded-l-sm flex items-center justify-center shadow-[6px_8px_18px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-2 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${book.color}40, ${book.color}15)`,
                border: `1px solid ${book.color}60`,
                borderLeft: `6px solid ${book.color}`,
                boxShadow: `inset 3px 0 5px rgba(255,255,255,0.25), 6px 8px 20px rgba(0,0,0,0.7), 0 0 15px -5px ${book.color}`
              }}
            >
              {/* Book spine ridge binding detail */}
              <div className="absolute left-1 inset-y-0 w-0.5 bg-white/20" />
              <div className="absolute left-2.5 inset-y-0 w-0.5 bg-black/20" />
              <BookMarked className="h-8 w-8 drop-shadow-md transition-transform duration-300 group-hover:scale-110" style={{ color: book.color }} />
            </div>

            <div className="flex flex-col flex-1 min-w-0 justify-between z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${diffColor[book.difficulty]}`}>
                    {book.difficulty}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 truncate">
                    {book.subject}
                  </span>
                </div>
                <h3 className="text-base font-black text-white leading-snug mb-1 group-hover:text-white transition-colors line-clamp-2">{book.title}</h3>
                <p className="text-xs font-medium text-[var(--text-muted)] mb-3">{book.author}</p>
              </div>

              {/* Affiliate link slot */}
              <a
                href={book.affiliate}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-2.5 pt-3 border-t border-white/[0.06]"
                style={{ color: book.color }}
              >
                <span>{t("books.cta")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-[var(--text-muted)] mt-10 max-w-xl mx-auto leading-relaxed">
        {/* AFFILIATE: replace book.affiliate with Amazon/store partner links to enable passive revenue */}
        As partners, qualifying purchases may support the platform at no extra cost to you.
      </p>
    </section>
  );
}

