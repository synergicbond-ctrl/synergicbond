import ReferenceTabs from "@/components/ReferenceTabs";

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

// ───────────────────────────────────────────────────────────────────────────
// Deep-scanned compound colours from "Salt analysis (GUHA)" (Qualitative Salt
// Analysis, Ch. 7). All entries below are taken directly from that document.
// ───────────────────────────────────────────────────────────────────────────

// Sublimate salts → coloured precipitate on passing H₂S (GUHA §7.14)
const guhaSublimates = [
  { salt: "HgCl₂", formula: "HgS", color: "Black" },
  { salt: "Hg₂Cl₂", formula: "Hg + HgS", color: "Black" },
  { salt: "As₂O₃", formula: "As₂S₃", color: "Yellow" },
  { salt: "Sb₂O₃", formula: "Sb₂S₃", color: "Orange" },
];

// Borax bead colours — GUHA Table 7.1 (oxidising vs reducing flame, hot/cold)
const guhaBoraxBeads = [
  { metal: "Cr", oxHot: "Yellow", oxCold: "Green", redHot: "Green", redCold: "Green" },
  { metal: "Mn", oxHot: "Violet", oxCold: "Violet", redHot: "Colourless", redCold: "Colourless" },
  { metal: "Fe", oxHot: "Yellowish brown", oxCold: "Yellow", redHot: "Green", redCold: "Green" },
  { metal: "Co", oxHot: "Blue", oxCold: "Blue", redHot: "Blue", redCold: "Blue" },
  { metal: "Ni", oxHot: "Violet", oxCold: "Reddish brown", redHot: "Grey", redCold: "Grey" },
  { metal: "Cu", oxHot: "Green", oxCold: "Blue", redHot: "Colourless", redCold: "Opaque (red Cu)" },
];

// Sulphide precipitate colours (GUHA §7.15, group II–IV)
const guhaSulfides = [
  { name: "Ag₂S", color: "Black" }, { name: "PbS", color: "Black" }, { name: "HgS", color: "Black" },
  { name: "Hg + HgS", color: "Black" }, { name: "CuS", color: "Black" }, { name: "Bi₂S₃", color: "Brownish black" },
  { name: "NiS", color: "Black" }, { name: "CoS", color: "Black" }, { name: "FeS", color: "Black" },
  { name: "CdS", color: "Yellow" }, { name: "As₂S₃", color: "Yellow" }, { name: "As₂S₅", color: "Yellow" },
  { name: "SnS₂", color: "Yellow" }, { name: "Sb₂S₃", color: "Orange" }, { name: "SnS", color: "Brown" },
  { name: "MnS", color: "Buff / flesh" }, { name: "ZnS", color: "White" },
];

// Hydroxide precipitate colours (GUHA group III–VI)
const guhaHydroxides = [
  { name: "Al(OH)₃", color: "White" },
  { name: "Cr(OH)₃", color: "Green" },
  { name: "Fe(OH)₃", color: "Reddish brown" },
  { name: "Fe(OH)₂", color: "Greenish white / dirty green" },
  { name: "Mn(OH)₂", color: "Pinkish white" },
  { name: "Zn(OH)₂", color: "White" },
  { name: "Cu(OH)₂", color: "Blue" },
  { name: "Ni(OH)₂", color: "Green" },
];

// Other characteristic compound colours noted across GUHA Ch. 7
const guhaOther = [
  { name: "AgBr", color: "Pale yellow" },
  { name: "AgI", color: "Yellow" },
  { name: "CuI / Cu₂I₂", color: "White" },
  { name: "Fe₄[Fe(CN)₆]₃ (Prussian / Turnbull's blue)", color: "Blue" },
  { name: "Ag₂O", color: "Brownish black" },
  { name: "HgI₂", color: "Scarlet red (yellow > 127 °C)" },
  { name: "I₃⁻ (in solution)", color: "Dark brown" },
  { name: "Cl₂ (gas)", color: "Greenish yellow" },
];

// Map a colour name → swatch hex (compound phrases checked before single words).
function tone(name: string): string {
  const s = name.toLowerCase();
  if (s.includes("colourless") || s.includes("colorless")) return "#cbd5e1";
  if (s.includes("opaque")) return "#7f1d1d";
  if (s.includes("scarlet")) return "#ef4444";
  if (s.includes("brownish black") || s.includes("brownish-black")) return "#3b2417";
  if (s.includes("reddish brown") || s.includes("reddish-brown")) return "#9a3412";
  if (s.includes("yellowish brown")) return "#a16207";
  if (s.includes("greenish white") || s.includes("dirty green")) return "#6b8e6b";
  if (s.includes("pinkish white")) return "#f9c9d6";
  if (s.includes("buff") || s.includes("flesh")) return "#e7c9a9";
  if (s.includes("pale yellow") || s.includes("light yellow")) return "#fef08a";
  if (s.includes("apple green") || s.includes("pale green")) return "#84cc16";
  if (s.includes("prussian") || s.includes("deep blue")) return "#1d4ed8";
  if (s.includes("blue")) return "#2563eb";
  if (s.includes("green")) return "#22c55e";
  if (s.includes("violet") || s.includes("lilac") || s.includes("purple")) return "#a855f7";
  if (s.includes("orange")) return "#fb923c";
  if (s.includes("yellow")) return "#fde047";
  if (s.includes("pink")) return "#f472b6";
  if (s.includes("brown")) return "#92400e";
  if (s.includes("crimson") || s.includes("carmine") || s.includes("brick") || s.includes("red")) return "#dc2626";
  if (s.includes("grey") || s.includes("gray")) return "#9ca3af";
  if (s.includes("black")) return "#1f2937";
  if (s.includes("white")) return "#f8fafc";
  return "#94a3b8";
}

function Swatch({ c }: { c: string }) {
  return <span className="h-4 w-4 rounded-full flex-shrink-0 border border-white/20" style={{ background: c }} />;
}

function ColorChip({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#111827] border border-white/[0.06] px-4 py-2.5">
      <Swatch c={tone(color)} />
      <p className="text-sm text-white/80"><span className="font-bold text-white">{name}</span> — {color}</p>
    </div>
  );
}

export default function SaltColorsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ReferenceTabs />
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

        {/* ── Deep-scan additions from "Salt analysis (GUHA)" ── */}
        <div className="my-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300/70">From Salt Analysis · GUHA</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Sublimate → H₂S precipitate */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">🧫 Sublimate → H₂S Precipitate Colours</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm min-w-[460px]">
              <thead>
                <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                  <th className="text-left px-4 py-2.5">Sublimate salt</th>
                  <th className="text-left px-3 py-2.5">Precipitate</th>
                  <th className="text-left px-3 py-2.5">Colour</th>
                </tr>
              </thead>
              <tbody>
                {guhaSublimates.map((r, i) => (
                  <tr key={r.salt} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-cyan-300">{r.salt}</td>
                    <td className="px-3 py-2.5 font-mono text-white/80">{r.formula}</td>
                    <td className="px-3 py-2.5"><span className="flex items-center gap-2 text-white/80"><Swatch c={tone(r.color)} /> {r.color}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Borax bead */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">🔵 Borax Bead Colours (Table 7.1)</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                  <th className="text-left px-4 py-2.5">Metal</th>
                  <th className="text-left px-3 py-2.5">Oxidising · hot</th>
                  <th className="text-left px-3 py-2.5">Oxidising · cold</th>
                  <th className="text-left px-3 py-2.5">Reducing · hot</th>
                  <th className="text-left px-3 py-2.5">Reducing · cold</th>
                </tr>
              </thead>
              <tbody>
                {guhaBoraxBeads.map((r, i) => (
                  <tr key={r.metal} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                    <td className="px-4 py-2.5 font-mono font-bold text-cyan-300">{r.metal}</td>
                    {[r.oxHot, r.oxCold, r.redHot, r.redCold].map((cval, j) => (
                      <td key={j} className="px-3 py-2.5"><span className="flex items-center gap-2 text-white/80"><Swatch c={tone(cval)} /> {cval}</span></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-white/40">Na₂CO₃ bead: green bead → Mn compound · yellow bead → Cr compound. Borax bead test is done only for coloured salts.</p>
        </section>

        {/* Sulphide colours */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">⚫ Sulphide Precipitate Colours</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {guhaSulfides.map((p) => <ColorChip key={p.name} name={p.name} color={p.color} />)}
          </div>
        </section>

        {/* Hydroxide colours */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-cyan-300 mb-3">💠 Hydroxide Precipitate Colours</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {guhaHydroxides.map((p) => <ColorChip key={p.name} name={p.name} color={p.color} />)}
          </div>
        </section>

        {/* Other characteristic colours */}
        <section>
          <h2 className="text-lg font-black text-cyan-300 mb-3">✨ Other Characteristic Colours</h2>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {guhaOther.map((p) => <ColorChip key={p.name} name={p.name} color={p.color} />)}
          </div>
          <p className="mt-4 text-xs text-white/35">Source: Salt analysis (GUHA) — Qualitative Salt Analysis, Ch. 7. All colours above are taken directly from that document.</p>
        </section>
      </div>
    </main>
  );
}
