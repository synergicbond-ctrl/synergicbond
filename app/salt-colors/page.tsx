
export const metadata = {
  title: "Salt Analysis Colors — SYNERGIC BOND",
  description: "Qualitative analysis: ion solution colors, precipitate colors, flame test colors for NEET & JEE.",
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
          Qualitative analysis at a glance — ion solution colors, characteristic precipitates, and flame tests. The dots show the real observed color.
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
