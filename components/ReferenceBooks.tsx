"use client";
import { BookMarked, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

const books = [
  { title: "NCERT Chemistry", author: "NCERT (XI & XII)", subject: "Foundation", difficulty: "Beginner", color: "#00BBF9", affiliate: "#" },
  { title: "Concise Inorganic Chemistry", author: "J.D. Lee", subject: "Inorganic", difficulty: "Advanced", color: "#9B5DE5", affiliate: "#" },
  { title: "Organic Chemistry", author: "Clayden et al.", subject: "Organic", difficulty: "Expert", color: "#00BBF9", affiliate: "#" },
  { title: "Physical Chemistry", author: "Peter Atkins", subject: "Physical", difficulty: "Advanced", color: "#00BBF9", affiliate: "#" },
  { title: "Modern Approach to Chemical Calculations", author: "R.C. Mukherjee", subject: "Numericals", difficulty: "Intermediate", color: "#9B5DE5", affiliate: "#" },
  { title: "IChO Preparatory Problems", author: "Olympiad Board", subject: "Olympiad", difficulty: "Expert", color: "#9B5DE5", affiliate: "#" },
];

// Difficulty as a calm cyan→purple progression (in-brand)
const diffColor: Record<string, string> = {
  Beginner: "text-cyan-300 bg-cyan-500/10",
  Intermediate: "text-sky-300 bg-sky-500/10",
  Advanced: "text-violet-300 bg-violet-500/10",
  Expert: "text-purple-300 bg-purple-500/10",
};

export default function ReferenceBooks() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          {t("books.eyebrow")}
        </p>
        <h2 className="text-3xl font-black md:text-4xl text-white">{t("books.title")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm">
          {t("books.desc")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.title}
            className="group rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.06] p-5 flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12]"
            style={{ backgroundColor: "#111827", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            {/* Cover placeholder */}
            <div
              className="flex-shrink-0 w-16 h-22 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${book.color}30, ${book.color}10)`, border: `1px solid ${book.color}40` }}
            >
              <BookMarked className="h-6 w-6" style={{ color: book.color }} />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <span className={`inline-flex w-fit text-[9px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${diffColor[book.difficulty]}`}>
                {book.difficulty}
              </span>
              <h3 className="text-sm font-bold text-white leading-tight mb-0.5">{book.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{book.author}</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-3">{book.subject}</p>

              {/* Affiliate link slot — replace href with affiliate URL later */}
              <a
                href={book.affiliate}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition group-hover:gap-2.5"
                style={{ color: book.color }}
              >
                {t("books.cta")} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[10px] text-gray-600 mt-6">
        {/* AFFILIATE: replace book.affiliate with Amazon/store partner links to enable passive revenue */}
        As partners, qualifying purchases may support the platform at no extra cost to you.
      </p>
    </section>
  );
}
