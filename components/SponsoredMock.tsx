import { Zap, ArrowRight } from "lucide-react";

export default function SponsoredMock() {
  return (
    <div className="relative rounded-2xl p-[1px] overflow-hidden bg-gradient-to-r from-cyan-500/60 to-purple-500/60">
      <div className="rounded-2xl bg-[#111827] px-6 py-5 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 border border-cyan-400/15">
            <Zap className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-widest text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                ⚡ PREMIUM FEATURED CHALLENGE
              </span>
            </div>
            <h3 className="text-base font-black text-white mt-1.5">All-India Full-Syllabus Chemistry Mock</h3>
            <p className="text-xs text-white/50 mt-0.5">Sponsored slot · 50,000+ aspirants · Live national ranking</p>
          </div>
        </div>
        <a
          href="/exam"
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5 whitespace-nowrap"
        >
          Attempt Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      {/* SPONSOR SLOT: replace heading/href with institutional sponsor campaign data */}
    </div>
  );
}
