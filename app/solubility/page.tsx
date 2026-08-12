import ReferenceTabs from "@/components/ReferenceTabs";

export const metadata = {
  title: "Solubility Rules — SYNERGIC BOND",
  description: "Solubility rules and exceptions for salts, hydroxides, sulfates, chlorides, carbonates — NEET & JEE.",
};

const rules = [
  { group: "Nitrates (NO₃⁻)", soluble: "ALL soluble", exceptions: "None", c: "#50dc7b" },
  { group: "Acetates (CH₃COO⁻)", soluble: "ALL soluble", exceptions: "AgCH₃COO (slightly)", c: "#50dc7b" },
  { group: "Group 1 & NH₄⁺ salts", soluble: "ALL soluble", exceptions: "None", c: "#50dc7b" },
  { group: "Chlorides (Cl⁻)", soluble: "Mostly soluble", exceptions: "AgCl, PbCl₂, Hg₂Cl₂ (insoluble)", c: "#37c8f4" },
  { group: "Bromides / Iodides", soluble: "Mostly soluble", exceptions: "Ag⁺, Pb²⁺, Hg₂²⁺ salts insoluble", c: "#37c8f4" },
  { group: "Sulfates (SO₄²⁻)", soluble: "Mostly soluble", exceptions: "BaSO₄, PbSO₄, SrSO₄ insoluble; CaSO₄, Ag₂SO₄ slightly", c: "#37c8f4" },
  { group: "Carbonates (CO₃²⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1 & NH₄⁺ soluble", c: "#b376ff" },
  { group: "Phosphates (PO₄³⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1 & NH₄⁺ soluble", c: "#b376ff" },
  { group: "Sulfides (S²⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1, Group 2 & NH₄⁺ soluble", c: "#b376ff" },
  { group: "Hydroxides (OH⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1 & NH₄⁺ soluble; Ba(OH)₂ soluble; Ca(OH)₂, Sr(OH)₂ slightly", c: "#b376ff" },
  { group: "Sulfites (SO₃²⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1 & NH₄⁺ soluble", c: "#b376ff" },
  { group: "Oxides (O²⁻)", soluble: "Mostly INSOLUBLE", exceptions: "Group 1 oxides react→soluble hydroxides", c: "#b376ff" },
];

const tricky = [
  "AgCl dissolves in NH₃ → [Ag(NH₃)₂]⁺ (used to confirm Cl⁻).",
  "AgI is insoluble in NH₃ (unlike AgCl) — distinguishes halides.",
  "PbCl₂ is soluble in hot water (re-precipitates on cooling).",
  "Amphoteric hydroxides — Al(OH)₃, Zn(OH)₂, Pb(OH)₂, Cr(OH)₃ — dissolve in excess NaOH.",
  "CaSO₄ is the reason hard water forms scale; BaSO₄ used for X-ray (insoluble, non-toxic).",
  "Group analysis: dilute HCl precipitates Group I (Ag⁺, Pb²⁺, Hg₂²⁺) chlorides.",
];

export default function SolubilityPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ReferenceTabs />
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Inorganic</p>
        <h1 className="text-4xl font-black md:text-5xl">Solubility Rules</h1>
        <p className="mt-3 text-white/65 text-sm max-w-2xl mb-8">
          The solubility rules with the exact exceptions examiners test. Cyan = soluble, blue = mostly soluble (watch exceptions), purple = mostly insoluble.
        </p>

        {/* Rules table */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
          <div className="grid grid-cols-[1.2fr_1fr_1.6fr] bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50 px-4 py-2.5">
            <span>Anion Group</span><span>General Rule</span><span>Key Exceptions</span>
          </div>
          {rules.map((r, i) => (
            <div key={r.group} className={`grid grid-cols-[1.2fr_1fr_1.6fr] px-4 py-3 text-sm ${i % 2 ? "bg-[var(--surface)]" : "bg-[var(--surface)]"}`}>
              <span className="font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: r.c }} /> {r.group}
              </span>
              <span className="text-white/70">{r.soluble}</span>
              <span className="text-[var(--text-muted)] text-xs">{r.exceptions}</span>
            </div>
          ))}
        </div>

        {/* Tricky points */}
        <div className="mt-8 rounded-2xl bg-[var(--surface)] border border-white/[0.06] p-6">
          <h2 className="text-sm font-bold text-white mb-3">⚠️ High-Yield Tricky Points (JEE/NEET)</h2>
          <ul className="space-y-2">
            {tricky.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-body)] leading-relaxed">
                <span className="text-cyan-400 mt-0.5">▸</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
