
export const metadata = {
  title: "Salt Analysis Colors — SYNERGIC BOND",
  description: "Qualitative analysis: ion colors, precipitate colors, carbonate & sulfide precipitates, flame tests for NEET & JEE.",
};

const ions = [
  { ion: "Cu²⁺", solution: "Blue", ppt: "Cu(OH)₂ — blue ppt", c: "#38BDF8" },
  { ion: "Fe²⁺", solution: "Pale green", ppt: "Fe(OH)₂ — dirty green ppt", c: "#4ADE80" },
  { ion: "Fe³⁺", solution: "Yellow / brown", ppt: "Fe(OH)₃ — reddish-brown ppt", c: "#D97706" },
  { ion: "Ni²⁺", solution: "Green", ppt: "Ni(OH)₂ — green ppt", c: "#22C55E" },
  { ion: "Co²⁺", solution: "Pink", ppt: "Co(OH)₂ — blue/pink ppt", c: "#F472B6" },
  { ion: "Mn²⁺", solution: "Pale pink", ppt: "Mn(OH)₂ — white→brown ppt", c: "#FBCFE8" },
  { ion: "Cr³⁺", solution: "Green / violet", ppt: "Cr(OH)₃ — green ppt", c: "#10B981" },
  { ion: "MnO₄⁻", solution: "Intense purple", ppt: "—", c: "#A855F7" },
  { ion: "Cr₂O₇²⁻", solution: "Orange", ppt: "—", c: "#FB923C" },
  { ion: "CrO₄²⁻", solution: "Yellow", ppt: "—", c: "#FDE047" },
  { ion: "Cu²⁺ + NH₃ (excess)", solution: "Deep blue [Cu(NH₃)₄]²⁺", ppt: "—", c: "#2563EB" },
];

const precipitates = [
  { name: "AgCl", color: "White (turns grey in light)", c: "#F8FAFC" },
  { name: "AgBr", color: "Pale yellow", c: "#FEF9C3" },
  { name: "AgI", color: "Yellow", c: "#FDE047" },
  { name: "PbI₂", color: "Bright yellow (golden spangles)", c: "#FACC15" },
  { name: "PbCrO₄", color: "Yellow", c: "#FDE047" },
  { name: "BaSO₄", color: "White", c: "#F8FAFC" },
  { name: "PbSO₄", color: "White", c: "#F8FAFC" },
  { name: "Cu₂O (Fehling +ve)", color: "Brick red", c: "#B91C1C" },
  { name: "HgI₂", color: "Scarlet red", c: "#EF4444" },
  { name: "As₂S₃", color: "Yellow", c: "#FDE047" },
  { name: "CuS / PbS / NiS", color: "Black", c: "#1f2937" },
  { name: "ZnS", color: "White", c: "#F8FAFC" },
];

// Carbonate precipitates — from (NH₄)₂CO₃ / Na₂CO₃ reagent
const carbonates = [
  { reagent: "CaCl₂", ppt: "CaCO₃", color: "White", c: "#F8FAFC" },
  { reagent: "SrCl₂", ppt: "SrCO₃", color: "White", c: "#F8FAFC" },
  { reagent: "BaCl₂", ppt: "BaCO₃", color: "White", c: "#F8FAFC" },
  { reagent: "AgNO₃", ppt: "Ag₂CO₃", color: "White (very light yellow)", c: "#FEFCE8" },
  { reagent: "Hg₂(NO₃)₂", ppt: "Hg₂CO₃", color: "Yellow", c: "#FDE047" },
  { reagent: "HgCl₂", ppt: "HgCO₃·3HgO", color: "Reddish brown", c: "#9A3412" },
  { reagent: "ZnCl₂", ppt: "ZnCO₃·3Zn(OH)₂", color: "White", c: "#F8FAFC" },
  { reagent: "Pb(OAc)₂", ppt: "Pb(OH)₂·2PbCO₃", color: "White", c: "#F8FAFC" },
  { reagent: "MgCl₂", ppt: "Mg(OH)₂·4MgCO₃·6H₂O", color: "White", c: "#F8FAFC" },
  { reagent: "CuCl₂", ppt: "Cu(OH)₂·CuCO₃", color: "Green", c: "#22C55E" },
];

// Group II — thiosulfate (white) vs sulfide (black) precipitates + soluble complex
const sulfides = [
  { ion: "Ag⁺ (AgNO₃)", white: "Ag₂S₂O₃↓", black: "Ag₂S↓", sol: "[Ag(S₂O₃)₂]³⁻" },
  { ion: "Pb²⁺ (Pb(OAc)₂)", white: "PbS₂O₃↓", black: "PbS↓", sol: "[Pb(S₂O₃)₂]²⁻" },
  { ion: "Hg²⁺ (Hg(NO₃)₂)", white: "HgS₂O₃↓", black: "HgS↓", sol: "[Hg(S₂O₃)₂]²⁻" },
  { ion: "Bi³⁺ (BiCl₃)", white: "Bi₂(S₂O₃)₃↓", black: "Bi₂S₃↓", sol: "[Bi(S₂O₃)₃]³⁻" },
  { ion: "Cu²⁺ (CuSO₄)", white: "Cu₂S₂O₃↓", black: "Cu₂S↓", sol: "[Cu₆(S₂O₃)₅]⁴⁻" },
];

const flame = [
  { el: "Na", color: "Golden yellow", c: "#FACC15" },
  { el: "K", color: "Lilac / violet", c: "#A78BFA" },
  { el: "Li", color: "Crimson red", c: "#DC2626" },
  { el: "Ca", color: "Brick red", c: "#EA580C" },
  { el: "Sr", color: "Crimson / scarlet", c: "#E11D48" },
  { el: "Ba", color: "Apple / pale green", c: "#84CC16" },
  { el: "Cu", color: "Blue-green", c: "#14B8A6" },
  { el: "Cs", color: "Blue / violet", c: "#818CF8" },
];

function Swatch({ c }: { c: string }) {
  return <span className="h-4 w-4 rounded-full flex-shrink-0 border border-white/20" style={{ background: c }} />;
}

export default function SaltColorsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Inorganic</p>
        <h1 className="text-4xl font-black md:text-5xl">Salt Analysis Colors</h1>
        <p className="mt-3 text-white/65 text-sm max-w-2xl mb-8">
          Qualitative analysis at a glance — ion colors, precipitates, carbonate & sulfide tests, and flame tests. Dots show the real observed color.
        </p>

        {/* Ion colors */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">🧪 Ion Colors (aqueous + hydroxide ppt)</h2>
          <div className="grid gap-2 md:grid-cols-2">
            {ions.map((i) => (
              <div key={i.ion} className="flex items-center gap-3 rounded-xl bg-[#111827] border border-white/[0.06] px-4 py-3">
                <Swatch c={i.c} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white">{i.ion} — <span className="font-normal text-white/70">{i.solution}</span></p>
                  {i.ppt !== "—" && <p className="text-xs text-gray-400 mt-0.5">{i.ppt}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Carbonate precipitates */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">⚪ Carbonate Precipitates (with (NH₄)₂CO₃ / Na₂CO₃)</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                  <th className="text-left px-4 py-2.5">Reagent</th>
                  <th className="text-left px-3 py-2.5">Precipitate</th>
                  <th className="text-left px-3 py-2.5">Colour</th>
                </tr>
              </thead>
              <tbody>
                {carbonates.map((r, i) => (
                  <tr key={r.reagent} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-cyan-300">{r.reagent}</td>
                    <td className="px-3 py-2.5 font-mono text-white/80">{r.ppt}</td>
                    <td className="px-3 py-2.5"><span className="flex items-center gap-2 text-white/80"><Swatch c={r.c} /> {r.color}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sulfide / thiosulfate */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">⚫ Group II — Thiosulfate (white) → Sulfide (black)</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                  <th className="text-left px-4 py-2.5">Ion (reagent)</th>
                  <th className="text-left px-3 py-2.5">White ppt (S₂O₃²⁻)</th>
                  <th className="text-left px-3 py-2.5">Black ppt (S²⁻)</th>
                  <th className="text-left px-3 py-2.5">Clear solution</th>
                </tr>
              </thead>
              <tbody>
                {sulfides.map((s, i) => (
                  <tr key={s.ion} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                    <td className="px-4 py-2.5 font-bold text-white">{s.ion}</td>
                    <td className="px-3 py-2.5 font-mono text-white/70">{s.white}</td>
                    <td className="px-3 py-2.5 font-mono text-white/70">{s.black}</td>
                    <td className="px-3 py-2.5 font-mono text-cyan-300/80">{s.sol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Precipitates */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">💧 Characteristic Precipitates</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {precipitates.map((p) => (
              <div key={p.name} className="flex items-center gap-3 rounded-xl bg-[#111827] border border-white/[0.06] px-4 py-2.5">
                <Swatch c={p.c} />
                <p className="text-sm text-white/80"><span className="font-bold text-white">{p.name}</span> — {p.color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flame tests */}
        <section>
          <h2 className="text-lg font-black text-cyan-300 mb-3">🔥 Flame Test Colors</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {flame.map((f) => (
              <div key={f.el} className="flex items-center gap-3 rounded-xl bg-[#111827] border border-white/[0.06] px-4 py-2.5">
                <Swatch c={f.c} />
                <p className="text-sm text-white/80"><span className="font-bold text-white">{f.el}</span> — {f.color}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
