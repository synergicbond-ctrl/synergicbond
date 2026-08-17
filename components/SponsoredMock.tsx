import { Zap, ArrowRight } from "lucide-react";

export default function SponsoredMock() {
  return (
    <div className="relative rounded-lg border border-[var(--border)] overflow-hidden">
      <div className="rounded-lg bg-[var(--surface)] px-6 py-5 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
            <Zap className="h-5 w-5 text-[var(--accent)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                ⚡ PREMIUM FEATURED CHALLENGE
              </span>
            </div>
            <h3 className="text-base font-black text-white mt-1.5">All-India Full-Syllabus Chemistry Mock</h3>
            <p className="text-xs text-white/50 mt-0.5">Sponsored slot · 50,000+ aspirants · Live national ranking</p>
          </div>
        </div>
        <a
          href="/exam"
          className="flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--background)] transition hover:-translate-y-0.5 whitespace-nowrap"
        >
          Attempt Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      {/* SPONSOR SLOT: replace heading/href with institutional sponsor campaign data */}
    </div>
  );
}
