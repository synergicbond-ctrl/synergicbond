"use client";

import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";

type Rxn = { substrate: string; product: string; reagent: string; level: string };

const oxidation: Rxn[] = [
  { substrate: "1° Alcohol", product: "Aldehyde", reagent: "PCC / Collins / DMP", level: "JEE" },
  { substrate: "1° Alcohol", product: "Carboxylic acid", reagent: "KMnO₄ / K₂Cr₂O₇ / Jones", level: "NEET / JEE" },
  { substrate: "2° Alcohol", product: "Ketone", reagent: "PCC / Jones / CrO₃", level: "NEET / JEE" },
  { substrate: "3° Alcohol", product: "No reaction (resists)", reagent: "—", level: "NEET" },
  { substrate: "Alkene", product: "syn 1,2-Diol (glycol)", reagent: "cold dil. KMnO₄ / OsO₄", level: "NEET / JEE" },
  { substrate: "Alkene", product: "Cleavage → ketone/acid", reagent: "hot conc. KMnO₄", level: "JEE" },
  { substrate: "Alkene", product: "Carbonyls (ozonolysis)", reagent: "O₃, then Zn/H₂O", level: "NEET / JEE" },
  { substrate: "Alkene", product: "Epoxide", reagent: "mCPBA / peracid", level: "JEE Adv" },
  { substrate: "Toluene (–CH₃)", product: "Benzoic acid", reagent: "KMnO₄ / K₂Cr₂O₇ (side-chain)", level: "NEET / JEE" },
  { substrate: "Toluene", product: "Benzaldehyde", reagent: "CrO₂Cl₂ (Étard reaction)", level: "JEE" },
  { substrate: "Toluene", product: "Benzaldehyde", reagent: "CrO₃ / Ac₂O (then hydrolysis)", level: "JEE" },
  { substrate: "Aldehyde", product: "Carboxylic acid", reagent: "Tollens' / Fehling's / KMnO₄", level: "NEET / JEE" },
  { substrate: "Methyl ketone", product: "Acid (1 C less) + CHX₃", reagent: "NaOX (haloform)", level: "NEET / JEE" },
  { substrate: "1,2-Diol", product: "2 Carbonyls (cleavage)", reagent: "HIO₄ / Pb(OAc)₄", level: "JEE Adv" },
  { substrate: "Phenol", product: "Benzoquinone", reagent: "Na₂Cr₂O₇ / oxidant", level: "JEE" },
  { substrate: "Glucose", product: "Gluconic acid", reagent: "Br₂ water (mild)", level: "NEET / JEE" },
  { substrate: "Glucose", product: "Saccharic (glucaric) acid", reagent: "conc. HNO₃ (strong)", level: "NEET / JEE" },
];

const reduction: Rxn[] = [
  { substrate: "Aldehyde", product: "1° Alcohol", reagent: "NaBH₄ / LiAlH₄ / H₂-Ni", level: "NEET / JEE" },
  { substrate: "Ketone", product: "2° Alcohol", reagent: "NaBH₄ / LiAlH₄", level: "NEET / JEE" },
  { substrate: "Carboxylic acid", product: "1° Alcohol", reagent: "LiAlH₄ (NaBH₄ won't)", level: "JEE" },
  { substrate: "Ester", product: "1° Alcohol", reagent: "LiAlH₄", level: "JEE" },
  { substrate: "Ester", product: "Aldehyde", reagent: "DIBAL-H (−78 °C)", level: "JEE Adv" },
  { substrate: "Amide", product: "Amine", reagent: "LiAlH₄", level: "JEE" },
  { substrate: "Nitrile (–CN)", product: "1° Amine", reagent: "LiAlH₄ / H₂-Ni", level: "NEET / JEE" },
  { substrate: "Nitrile", product: "Aldehyde", reagent: "DIBAL-H / Stephen (SnCl₂/HCl)", level: "JEE" },
  { substrate: "Acid chloride", product: "Aldehyde", reagent: "H₂, Pd-BaSO₄ (Rosenmund)", level: "NEET / JEE" },
  { substrate: "Nitrobenzene", product: "Aniline", reagent: "Sn/HCl, Fe/HCl, H₂-Ni", level: "NEET / JEE" },
  { substrate: "C=O (ald/ketone)", product: "–CH₂– (alkane)", reagent: "Zn-Hg / HCl (Clemmensen)", level: "NEET / JEE" },
  { substrate: "C=O (ald/ketone)", product: "–CH₂–", reagent: "NH₂NH₂ / KOH (Wolff-Kishner)", level: "NEET / JEE" },
  { substrate: "Alkyne", product: "cis (Z) Alkene", reagent: "H₂ / Lindlar's catalyst", level: "NEET / JEE" },
  { substrate: "Alkyne", product: "trans (E) Alkene", reagent: "Na / liq. NH₃", level: "JEE" },
  { substrate: "Alkene", product: "Alkane", reagent: "H₂ / Ni, Pt or Pd", level: "NEET / JEE" },
  { substrate: "Imine (C=N)", product: "Amine", reagent: "NaBH₃CN (reductive amination)", level: "JEE Adv" },
  { substrate: "Epoxide", product: "Alcohol", reagent: "LiAlH₄", level: "JEE" },
];

function Section({ title, accent, data, q }: { title: string; accent: string; data: Rxn[]; q: string }) {
  const rows = useMemo(() => {
    const s = q.toLowerCase().trim();
    if (!s) return data;
    return data.filter((r) => (r.substrate + r.product + r.reagent).toLowerCase().includes(s));
  }, [data, q]);
  if (rows.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-lg font-black mb-3" style={{ color: accent }}>{title}</h2>
      <div className="grid gap-2.5 md:grid-cols-2">
        {rows.map((r, i) => (
          <div key={i} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-4">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-sm font-bold text-white">{r.substrate}</span>
              <ArrowRight className="h-3.5 w-3.5" style={{ color: accent }} />
              <span className="text-sm font-bold" style={{ color: accent }}>{r.product}</span>
            </div>
            <p className="text-xs text-gray-300"><span className="text-gray-500">Reagent:</span> {r.reagent}</p>
            <span className="inline-block mt-2 text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${accent}14`, color: accent }}>{r.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function RedoxPage() {
  const [q, setQ] = useState("");
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Organic</p>
        <h1 className="text-4xl font-black md:text-5xl">Oxidation & Reduction</h1>
        <p className="mt-3 text-white/65 text-sm max-w-2xl mb-6">
          Every exam-critical redox transformation — substrate → product with the exact reagent. Cyan = oxidation, purple = reduction.
        </p>

        <div className="relative mb-6 sticky top-16 z-30">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search substrate, product or reagent — alcohol, LiAlH4, alkene…"
            className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50" />
        </div>

        <Section title="🔼 Oxidation" accent="#00F5D4" data={oxidation} q={q} />
        <Section title="🔽 Reduction" accent="#9B5DE5" data={reduction} q={q} />
      </div>
    </main>
  );
}
