import { Microscope, Dna, Activity, Sparkles } from "lucide-react";

export default function NeetSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 mt-20 overflow-hidden rounded-[40px] border border-emerald-500/25 bg-gradient-to-br from-[#0B0F19] via-[#064E3B]/20 to-[#0B0F19] shadow-[0_0_80px_-15px_rgba(16,185,129,0.25)]">
      {/* Ambient Biological / Molecular Motif Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute left-10 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
        
        {/* Subtle DNA / Molecular Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b9811a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-300 shadow-sm mb-4">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          MEDICAL CLARITY
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            NEET CHEMISTRY
          </span>
        </h2>

        <p className="text-white/75 mt-3 text-base sm:text-lg font-medium tracking-wide">
          NCERT-based Chemistry preparation for NEET
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 relative z-10">
        <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0B0F19]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/50 hover:bg-[#064E3B]/30 hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 mb-5 text-emerald-300 group-hover:scale-110 transition-transform">
            <Activity className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">Physical Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Thermodynamics • Equilibrium • Electrochemistry
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B0F19]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-[#083344]/30 hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/30 mb-5 text-cyan-300 group-hover:scale-110 transition-transform">
            <Dna className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Organic Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Reactions • Biomolecules • Polymers
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-teal-500/20 bg-[#0B0F19]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/50 hover:bg-[#0f766e]/30 hover:shadow-[0_15px_35px_rgba(20,184,166,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 border border-teal-500/30 mb-5 text-teal-300 group-hover:scale-110 transition-transform">
            <Microscope className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">Inorganic Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Coordination • Periodic Table • Bonding
          </p>
        </div>
      </div>
    </section>
  );
}