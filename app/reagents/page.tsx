"use client";

import { useMemo, useState } from "react";
import { Search, FlaskConical } from "lucide-react";
import ReferenceTabs from "@/components/ReferenceTabs";
import { PREVIEW_LIMITS, slicePreview } from "@/lib/monetization/preview";
import { useUnlocked } from "@/components/monetization/useUnlocked";
import UnlockBanner from "@/components/monetization/UnlockBanner";

type Reagent = { name: string; formula: string; fn: string; level: string };

const reagents: Reagent[] = [
  { name: "PCC (Pyridinium chlorochromate)", formula: "C₅H₅NH⁺ClCrO₃⁻", fn: "Mild oxidant: 1° alcohol → aldehyde, 2° → ketone (stops, no over-oxidation)", level: "JEE / NEET" },
  { name: "PDC (Pyridinium dichromate)", formula: "(C₅H₅NH)₂Cr₂O₇", fn: "Mild oxidant similar to PCC; in DMF can give carboxylic acids", level: "JEE" },
  { name: "Jones Reagent", formula: "CrO₃ / H₂SO₄", fn: "Strong oxidant: 1° alcohol → carboxylic acid, 2° → ketone", level: "JEE" },
  { name: "KMnO₄ (cold, dilute, alkaline)", formula: "KMnO₄", fn: "Baeyer's reagent: syn-dihydroxylation of alkenes → vicinal diol", level: "NEET / JEE" },
  { name: "KMnO₄ (hot, conc.)", formula: "KMnO₄", fn: "Oxidative cleavage of alkenes → ketone/acid; side chain → COOH", level: "NEET / JEE" },
  { name: "K₂Cr₂O₇ / H₂SO₄", formula: "K₂Cr₂O₇", fn: "Oxidant: alcohols → carbonyls/acids; orange → green (Cr³⁺)", level: "NEET / JEE" },
  { name: "LiAlH₄", formula: "LiAlH₄", fn: "Strong reducer: acid/ester/amide/nitrile/ketone/aldehyde → alcohol/amine", level: "JEE" },
  { name: "NaBH₄", formula: "NaBH₄", fn: "Mild reducer: aldehyde/ketone → alcohol (won't reduce ester/acid)", level: "NEET / JEE" },
  { name: "DIBAL-H", formula: "(iBu)₂AlH", fn: "At −78°C: ester/nitrile → aldehyde (partial reduction)", level: "JEE Adv" },
  { name: "OsO₄", formula: "OsO₄", fn: "Syn-dihydroxylation of alkenes → cis vicinal diol", level: "JEE Adv" },
  { name: "O₃ then Zn/H₂O", formula: "O₃", fn: "Ozonolysis: cleaves C=C → two carbonyls (reductive workup)", level: "NEET / JEE" },
  { name: "mCPBA", formula: "ClC₆H₄CO₃H", fn: "Epoxidation of alkenes; Baeyer-Villiger of ketones", level: "JEE Adv" },
  { name: "Lindlar's Catalyst", formula: "Pd/CaCO₃, quinoline", fn: "Alkyne → cis (Z) alkene (partial hydrogenation)", level: "NEET / JEE" },
  { name: "Na / liq. NH₃", formula: "Na, NH₃(l)", fn: "Birch-type: alkyne → trans (E) alkene", level: "JEE" },
  { name: "NBS", formula: "C₄H₄BrNO₂", fn: "Allylic / benzylic bromination (low Br₂ conc.)", level: "JEE" },
  { name: "SOCl₂", formula: "SOCl₂", fn: "Alcohol → alkyl chloride (with inversion); acid → acid chloride", level: "JEE" },
  { name: "PCl₅ / PCl₃", formula: "PCl₅ / PCl₃", fn: "Alcohol/acid → chloride; test for −OH (HCl fumes)", level: "NEET / JEE" },
  { name: "Grignard Reagent", formula: "RMgX", fn: "Nucleophilic R⁻: builds C–C bonds with carbonyls → alcohols", level: "NEET / JEE" },
  { name: "Gilman Reagent", formula: "R₂CuLi", fn: "Soft nucleophile: couples with halides; 1,4-addition to enones", level: "JEE Adv" },
  { name: "LDA", formula: "[(CH₃)₂CH]₂NLi", fn: "Strong, bulky, non-nucleophilic base → kinetic enolates", level: "JEE Adv" },
  { name: "NaNH₂ (sodamide)", formula: "NaNH₂", fn: "Very strong base: terminal alkyne deprotonation; dehydrohalogenation", level: "NEET / JEE" },
  { name: "Tollens' Reagent", formula: "[Ag(NH₃)₂]⁺", fn: "Tests aldehydes → silver mirror; oxidizes CHO → COOH", level: "NEET / JEE" },
  { name: "Fehling's Solution", formula: "Cu²⁺ / tartrate", fn: "Tests aliphatic aldehydes → red Cu₂O ppt", level: "NEET / JEE" },
  { name: "Baeyer's Reagent", formula: "cold dil. KMnO₄", fn: "Test for unsaturation (decolorizes); gives diol", level: "NEET" },
  { name: "Zn-Hg / conc. HCl", formula: "Zn(Hg), HCl", fn: "Clemmensen reduction: C=O → CH₂ (acidic)", level: "NEET / JEE" },
  { name: "NH₂NH₂ / KOH", formula: "N₂H₄, KOH", fn: "Wolff-Kishner reduction: C=O → CH₂ (basic)", level: "NEET / JEE" },
  { name: "DDQ", formula: "C₈Cl₂N₂O₂", fn: "Dehydrogenation / aromatization oxidant", level: "JEE Adv" },
  { name: "Lawesson's Reagent", formula: "—", fn: "Converts C=O → C=S (thionation)", level: "Olympiad" },
  { name: "Wilkinson's Catalyst", formula: "RhCl(PPh₃)₃", fn: "Homogeneous hydrogenation of alkenes", level: "JEE Adv" },
  { name: "Raney Nickel", formula: "Ni (Al alloy)", fn: "Hydrogenation; desulfurization (C–S → C–H)", level: "JEE" },
];

const lvlColor: Record<string, string> = {
  "NEET": "text-cyan-300 bg-cyan-500/10",
  "NEET / JEE": "text-cyan-300 bg-cyan-500/10",
  "JEE": "text-sky-300 bg-sky-500/10",
  "JEE Adv": "text-violet-300 bg-violet-500/10",
  "Olympiad": "text-purple-300 bg-purple-500/10",
};

export default function ReagentsPage() {
  const [q, setQ] = useState("");
  const unlocked = useUnlocked();
  const matches = useMemo(() => {
    const s = q.toLowerCase().replace(/[<>{}]/g, "").trim();
    if (!s) return reagents;
    return reagents.filter((r) => (r.name + r.formula + r.fn).toLowerCase().includes(s));
  }, [q]);
  // Preview Mode: free users browse a real slice; Pro sees everything.
  const { visible: filtered, locked } = slicePreview(matches, PREVIEW_LIMITS.reagents, unlocked);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ReferenceTabs />
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Organic</p>
        <h1 className="text-4xl font-black md:text-5xl">Reagent Master List</h1>
        <p className="mt-3 text-white/65 text-sm max-w-2xl mb-6">
          The {reagents.length} reagents you must know cold — what each one does, its formula, and exam relevance.
        </p>

        <div className="relative mb-6 sticky top-16 z-30">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search reagent, formula or function…"
            className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50" />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((r) => (
            <div key={r.name} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-white leading-snug flex items-center gap-2">
                  <FlaskConical className="h-4 w-4 text-cyan-400 flex-shrink-0" /> {r.name}
                </h3>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${lvlColor[r.level] || "text-white/50 bg-white/5"}`}>{r.level}</span>
              </div>
              <p className="text-xs font-mono text-cyan-300/80 mb-1.5">{r.formula}</p>
              <p className="text-xs text-gray-300 leading-relaxed">{r.fn}</p>
            </div>
          ))}
        </div>

        {locked > 0 && (
          <UnlockBanner available={PREVIEW_LIMITS.reagents} total={reagents.length} itemLabel="reagents" />
        )}
      </div>
    </main>
  );
}
