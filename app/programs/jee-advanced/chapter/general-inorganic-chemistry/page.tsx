import type { Metadata } from "next";
import Link from "next/link";
import { requireProgramEntitlement } from "@/lib/auth/guards";

const route = "/programs/jee-advanced/chapter/general-inorganic-chemistry";

export const metadata: Metadata = {
  title: "General Inorganic Chemistry — JEE Advanced | SYNERGIC BOND",
  description: "Master the general reaction patterns of inorganic chemistry, including compound nomenclature, reactions with water, hydrolysis, thermal decomposition, amphoteric behaviour, redox stability and product prediction.",
};

const sections = [
  { title: "Formula Writing and Inorganic Nomenclature", points: ["Oxidation number and valency", "Binary compounds", "Hydrides, oxides and halides", "Oxyacids, oxyanions and salts", "Stock nomenclature", "Prefixes and suffixes: hypo-, per-, -ite, -ate, thio-, peroxo-, ortho-, meta- and pyro-"] },
  { title: "Classification and General Reaction Behaviour", points: ["Hydrides", "Oxides", "Peroxides and superoxides", "Halides and oxyhalides", "Nitrides", "Phosphides", "Carbides", "Carbonates, nitrates, sulfates and ammonium salts"] },
  { title: "Reactions with Water", points: ["s-Block elements with cold water, hot water and steam", "Important p-Block reactions", "Oxides with water", "Ionic hydrides with water", "Peroxides and superoxides with water", "Nitrides, phosphides and carbides with water"] },
  { title: "Hydrolysis of Covalent Compounds", points: ["Complete and partial hydrolysis", "Hydrolysis of boron, carbon, silicon, phosphorus and sulfur halides", "Oxyhalide formation", "Factors controlling hydrolysis", "Exceptions such as CCl₄, SiCl₄ and SF₆"] },
  { title: "Hydrolysis of Salts", points: ["Cationic hydrolysis", "Anionic hydrolysis", "Acidic and basic salts", "Highly charged metal ions", "Charge density and polarising power", "Hydroxo and oxo species"] },
  { title: "Thermal Behaviour of Hydroxides, Carbonates and Bicarbonates", points: ["Group trends", "Lithium exceptions", "Alkaline-earth trends", "Dehydration of hydroxides", "Thermal stability and polarising power"] },
  { title: "Thermal Behaviour of Nitrates and Other Oxy-Salts", points: ["Nitrates and nitrites", "Sulfates and sulfites", "Chlorates and perchlorates", "Permanganates and dichromates", "Oxalates, thiosulfates and ammonium salts"] },
  { title: "Acid-Base and Amphoteric Reactions", points: ["Acidic, basic, neutral and amphoteric oxides", "Amphoteric hydroxides", "Reactions with acids and alkalis", "Be, Al, Sn, Pb, Sb and relevant Zn comparisons"] },
  { title: "Redox Stability and Disproportionation", points: ["Oxidising and reducing behaviour", "Stability of oxidation states", "Inert-pair effect", "Disproportionation", "Comproportionation", "Effect of acidic and alkaline medium"] },
  { title: "Solubility, Gas Evolution and Product Prediction", points: ["Essential solubility rules", "Precipitation reactions", "Gas-evolution reactions", "Observation-based chemistry", "Systematic reaction-product prediction algorithm"] },
] as const;

export default async function GeneralInorganicChemistryPage() {
  await requireProgramEntitlement("jee-advanced", route);

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <header className="border-b border-white/10 bg-gradient-to-b from-cyan-950/30 to-[#0B1220]">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/45">
            <Link href="/programs/jee-advanced" className="transition hover:text-white">JEE Advanced</Link>
            <span className="mx-1.5">/</span>
            <Link href="/programs/jee-advanced/learn" className="transition hover:text-white">Learn</Link>
            <span className="mx-1.5">/</span>
            <span className="text-white/80">General Inorganic Chemistry</span>
          </nav>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/80">JEE Advanced · Inorganic Chemistry</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">General Inorganic Chemistry</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
            Master the general reaction patterns of inorganic chemistry, including compound nomenclature, reactions with water, hydrolysis, thermal decomposition, amphoteric behaviour, redox stability and product prediction.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-9">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div>
            <h2 className="text-lg font-black">Chapter roadmap</h2>
            <p className="mt-1 text-sm text-white/45">Build the patterns first, then use them to predict unfamiliar reactions.</p>
          </div>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-3 py-1 text-xs font-semibold text-cyan-200">JEE Advanced</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]">
              <div className="flex gap-3">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-400/25 bg-cyan-400/[0.08] text-xs font-black text-cyan-200">{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-snug text-white">{section.title}</h3>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-white/55">
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">Detailed lessons are being prepared.</p>
      </div>
    </main>
  );
}
