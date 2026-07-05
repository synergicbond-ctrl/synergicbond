import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Support Our Mission — Donate to SYNERGIC BOND",
  description: "Help us keep world-class chemistry education affordable and accessible to every student. Support AI servers and free flagship chapters.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white flex flex-col justify-between">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20 space-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider">
            <HeartHandshake className="h-4 w-4" /> AFFORDABLE CHEMISTRY EDUCATION
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Empower the Next Generation of{" "}
            <span className="bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
              Scientists & Engineers
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed">
            At SYNERGIC BOND, we believe quality education should not be a privilege. We keep core chapters, the interactive Periodic Table, and daily AI tutoring free for everyone. Your support offsets server, content creation, and AI compute costs.
          </p>
        </header>

        {/* Live Pro Path Alert */}
        <section className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 md:p-8 space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-extrabold text-white">Direct Way to Support: Go Pro</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Subscribing to our Pro plans helps us sustain the platform long-term. You get full access to all chapter engines, PYQ prediction analysis, and custom mock tests, while directly funding free access for underprivileged students.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing"
              className="inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
            >
              Explore Pro Plans →
            </Link>
          </div>
        </section>

        {/* Donation Tiers */}
        <Donation />

        {/* Accountability & Impact */}
        <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto pt-6">
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 space-y-2">
            <h3 className="text-sm font-black text-cyan-300">Where Does Your Donation Go?</h3>
            <ul className="text-xs text-white/70 space-y-2 list-disc list-inside">
              <li>High-performance servers hosting interactive chemistry engines.</li>
              <li>Free daily AI doubt-solving tokens for every student.</li>
              <li>Authoring and verifying high-yield handwritten and digital notes.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 space-y-2">
            <h3 className="text-sm font-black text-purple-300">Social Impact & Access</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              We sponsor free Pro access for government school students and candidates from financially weaker backgrounds. 20% of all contributions are pooled directly into our Student Access Fund to distribute free physical reference booklets.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
