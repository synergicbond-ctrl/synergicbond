import type { Metadata } from "next";
import Link from "next/link";
import { sBlockLessons } from "./lessons";

export const metadata: Metadata = {
  title: "S-Block Elements | JEE Advanced",
  description: "NCERT-first JEE Advanced notes on alkali and alkaline-earth metals.",
};

const reactions = [
  ["2M + 2H₂O → 2MOH + H₂↑", "Alkali metal + water; vigour rises down Group 1."],
  ["M + H₂ → MH", "Ionic/saline hydrides of Group 1 and heavier Group 2 metals."],
  ["2Na + O₂ → Na₂O₂", "Sodium gives peroxide in excess oxygen; potassium preferentially gives KO₂."],
  ["CaCO₃  Δ→  CaO + CO₂", "Representative thermal decomposition of Group 2 carbonate."],
  ["Ca(HCO₃)₂(aq)  Δ→  CaCO₃↓ + CO₂ + H₂O", "Temporary hardness is removed by boiling."],
  ["2NaHCO₃  Δ→  Na₂CO₃ + CO₂ + H₂O", "Basis of baking soda's leavening action."],
];

function Card({ title, children, tone = "cyan" }: { title: string; children: React.ReactNode; tone?: "cyan" | "gold" | "rose" }) {
  const tones = { cyan: "border-cyan-300/20", gold: "border-amber-300/25", rose: "border-rose-300/25" };
  return <section className={`rounded-2xl border ${tones[tone]} bg-[#102235] p-5 shadow-lg shadow-black/10`}><h2 className="font-serif text-xl font-bold text-white">{title}</h2><div className="mt-3 text-sm leading-6 text-slate-300">{children}</div></section>;
}

function Table({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-auto"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><tbody>{children}</tbody></table></div>;
}

function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return <tr className="border-b border-white/10 last:border-0"><th className="w-[34%] px-3 py-3 align-top font-semibold text-cyan-200">{left}</th><td className="px-3 py-3 align-top text-slate-300">{right}</td></tr>;
}

export default function SBlockJeeAdvancedPage() {
  return (
    <main className="min-h-screen bg-[#0a1622] px-4 pb-20 pt-24 font-sans text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <header className="rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,.19),transparent_34%),linear-gradient(135deg,#132b3d,#0d1b2b)] p-6 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">JEE Advanced · Inorganic chemistry</p>
          <h1 className="mt-3 font-serif text-4xl font-black tracking-tight sm:text-6xl">The s-block elements</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">A NCERT-first revision chapter for Group 1 and Group 2: trends, anomalies, compounds, reactions and the explanation behind the exceptions.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-cyan-100">Group 1: ns¹</span><span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-amber-100">Group 2: ns²</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-slate-200">NCERT → advanced synthesis</span></div>
          <Link href="/programs/jee-advanced/chapter/s-block/master" className="mt-6 inline-flex rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200">Read comprehensive master notes →</Link>
        </header>

        <nav className="sticky top-0 z-10 mt-5 flex gap-2 overflow-x-auto rounded-xl border border-[#24405c] bg-[#0d1c2b]/95 p-2 text-xs font-bold backdrop-blur"><a href="#map" className="whitespace-nowrap rounded-lg bg-cyan-300/10 px-3 py-2 text-cyan-100">Map</a><a href="#trends" className="whitespace-nowrap rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">Trends</a><a href="#anomalies" className="whitespace-nowrap rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">Anomalies</a><a href="#compounds" className="whitespace-nowrap rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">Compounds</a><a href="#reactions" className="whitespace-nowrap rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">Reactions</a><a href="#traps" className="whitespace-nowrap rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5">JEE traps</a></nav>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_.75fr]" id="map">
          <Card title="1. The one-page map">
            <p><b className="text-white">s-block</b> means the differentiating electron enters an s orbital. Group 1 has outer configuration <b className="text-cyan-200">ns¹</b>; Group 2 has <b className="text-amber-200">ns²</b>. Their usual oxidation states are therefore +1 and +2.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[.05] p-4"><p className="font-bold text-cyan-200">Group 1 · alkali metals</p><p className="mt-1">Li, Na, K, Rb, Cs. Soft, low density, strongly reducing; hydroxides are strongly basic.</p></div><div className="rounded-xl border border-amber-300/15 bg-amber-300/[.05] p-4"><p className="font-bold text-amber-200">Group 2 · alkaline-earth metals</p><p className="mt-1">Be, Mg, Ca, Sr, Ba. Harder, denser, higher melting; M²⁺ salts have larger lattice energies.</p></div></div>
          </Card>
          <Card title="Source discipline" tone="gold"><p><b className="text-white">Primary:</b> NCERT Class XI Chemistry, Unit 10 / its official exemplar coverage.</p><p className="mt-2"><b className="text-white">Deepening:</b> J. D. Lee, Greenwood & Earnshaw, and standard Olympiad/coaching problem patterns were used only to decide JEE-level emphasis and cross-check explanations.</p><p className="mt-2 text-amber-100">This is an original summary, not reproduced text from any commercial book or coaching sheet.</p></Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2" id="trends">
          <Card title="2. Down-the-group trends: derive, do not memorise"><Table><Row left="Atomic / ionic radius" right="Increases down a group because a new shell is added. M⁺ and M²⁺ are much smaller than their parent atoms." /><Row left="Ionisation enthalpy" right="Generally decreases down the group: larger size and shielding outweigh increased nuclear charge. This makes reducing character and water reactivity rise." /><Row left="Hydration enthalpy" right="Be²⁺ > Mg²⁺ > Ca²⁺ … in magnitude; likewise Li⁺ > Na⁺ > K⁺. Small ions hydrate very strongly." /><Row left="Melting point" right="Usually falls down Group 1 as metallic bonding weakens. Group 2 has irregularity, but values are generally higher than Group 1 because each atom supplies two valence electrons." /><Row left="Solubility rule" right="Always compare lattice enthalpy with hydration enthalpy. A simple size-only rule can fail." /></Table></Card>
          <Card title="3. Reactivity and reducing power"><ul className="space-y-3"><li><b className="text-white">Group 1:</b> reducing power in aqueous solution follows Li &gt; Cs because Li⁺ has exceptionally high hydration enthalpy; the order based only on gaseous ionisation enthalpy would mislead.</li><li><b className="text-white">Group 2:</b> reactivity with water increases down the group: Be does not react, Mg reacts slowly with cold water/rapidly with steam, Ca–Ba react with cold water.</li><li><b className="text-white">Oxygen products:</b> small cations stabilise small O²⁻; larger cations stabilise larger peroxide/superoxide anions. Li forms oxide, Na mainly peroxide, K/Rb/Cs superoxides in excess O₂.</li></ul><div className="mt-4 rounded-xl border border-rose-300/20 bg-rose-300/[.06] p-3 text-rose-100"><b>Safety/chemistry:</b> never treat alkali metals as ordinary laboratory solids; their water reaction generates flammable H₂ and heat.</div></Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2" id="anomalies">
          <Card title="4. Why Li and Be are anomalous" tone="gold"><p>Both are unusually small, have high charge density, high ionisation enthalpy and high hydration enthalpy. Their diagonal neighbours (Li ↔ Mg; Be ↔ Al) often show related behaviour.</p><Table><Row left="Lithium" right="Hardest Group 1 metal; forms normal oxide Li₂O, nitride Li₃N directly with N₂, mostly covalent/less soluble salts; Li₂CO₃ decomposes on heating; LiCl is deliquescent and shows appreciable covalent character." /><Row left="Beryllium" right="Amphoteric BeO and Be(OH)₂; compounds are often covalent/polymeric; BeCl₂ is covalent; Be does not colour flame; strong complex formation, e.g. [BeF₄]²⁻." /><Row left="Diagonal relation" right="Li resembles Mg in carbonate/nitrate thermal behaviour; Be resembles Al in amphoterism and covalent halides. Use it as a clue, not as an unconditional identity." /></Table></Card>
          <Card title="5. High-value comparisons"><Table><Row left="Li₂CO₃ vs Na₂CO₃" right="Li₂CO₃ decomposes on heating; Na₂CO₃ is thermally stable. Small Li⁺ polarises CO₃²⁻ strongly." /><Row left="MgSO₄ vs BaSO₄" right="Sulfate solubility decreases down Group 2. Hydration enthalpy decreases more rapidly than the lattice-energy decrease." /><Row left="Mg(OH)₂ vs Ba(OH)₂" right="Hydroxide solubility increases down Group 2. Ba(OH)₂ is much more soluble and strongly basic." /><Row left="BeCl₂ vs BaCl₂" right="BeCl₂ is predominantly covalent and polymeric in solid state; BaCl₂ is largely ionic." /></Table></Card>
        </div>

        <div className="mt-5" id="compounds"><Card title="6. Essential compounds and applications"><div className="grid gap-4 lg:grid-cols-2"><div><h3 className="font-bold text-cyan-200">Sodium compounds</h3><ul className="mt-2 space-y-2"><li><b className="text-white">NaOH:</b> chlor-alkali product; strong base, highly soluble.</li><li><b className="text-white">Na₂CO₃·10H₂O:</b> washing soda; softens water by precipitating Ca²⁺/Mg²⁺ carbonates.</li><li><b className="text-white">NaHCO₃:</b> baking soda; mild base, decomposes on heating.</li><li><b className="text-white">NaCl:</b> source for NaOH, H₂, Cl₂, Na₂CO₃ and HCl.</li></ul></div><div><h3 className="font-bold text-amber-200">Calcium compounds</h3><ul className="mt-2 space-y-2"><li><b className="text-white">CaO:</b> quicklime; reacts exothermically with water to form Ca(OH)₂.</li><li><b className="text-white">Ca(OH)₂:</b> slaked lime; lime water detects CO₂ (initial CaCO₃ turbidity).</li><li><b className="text-white">CaCO₃:</b> limestone/marble/chalk; calcination gives CaO.</li><li><b className="text-white">CaSO₄·½H₂O:</b> plaster of Paris; hydrates to gypsum.</li></ul></div></div><div className="mt-4 rounded-xl border border-cyan-300/15 bg-cyan-300/[.05] p-4"><b className="text-white">Hard water:</b> temporary hardness arises mainly from Ca(HCO₃)₂/Mg(HCO₃)₂ and is removed by boiling. Permanent hardness from chlorides/sulfates requires chemical treatment, e.g. washing soda or ion exchange.</div></Card></div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2" id="reactions">
          <Card title="7. Reaction bank"><div className="space-y-3">{reactions.map(([equation, note]) => <div key={equation} className="rounded-xl border border-white/10 bg-[#091826] p-3"><code className="font-mono text-sm font-bold text-cyan-100">{equation}</code><p className="mt-1 text-xs text-slate-400">{note}</p></div>)}</div></Card>
          <Card title="8. Flame tests & qualitative anchors"><Table><Row left="Li⁺" right="Crimson red" /><Row left="Na⁺" right="Intense golden yellow; can mask other colours." /><Row left="K⁺" right="Lilac/violet; viewed through cobalt glass to suppress Na emission." /><Row left="Ca²⁺" right="Brick red" /><Row left="Sr²⁺" right="Crimson red" /><Row left="Ba²⁺" right="Apple green" /><Row left="Be²⁺ / Mg²⁺" right="No characteristic flame colour in the usual test." /></Table></Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2" id="traps">
          <Card title="9. JEE Advanced traps" tone="rose"><ol className="list-decimal space-y-3 pl-5"><li>Do not equate “more electropositive” with “stronger reducing agent in water” without including hydration.</li><li>Do not say every Group 1 carbonate is stable: <b className="text-white">Li₂CO₃ is the exception.</b></li><li>Do not use a single solubility direction for all Group 2 salts: hydroxides increase, sulfates decrease down the group.</li><li>Do not call Be compounds simply ionic: Be²⁺ has very high polarising power.</li><li>Do not confuse CaO (quicklime), Ca(OH)₂ (slaked lime), CaCO₃ (limestone) and CaSO₄·½H₂O (plaster of Paris).</li></ol></Card>
          <Card title="10. 90-second revision" tone="gold"><ul className="space-y-2"><li>• Group 1: ns¹, +1; Group 2: ns², +2.</li><li>• Down group: radius ↑, ionisation enthalpy ↓, metallic character/reactivity ↑.</li><li>• Li and Be are anomalous because of small size and high charge density.</li><li>• Li: oxide + nitride; Na: peroxide; K/Rb/Cs: superoxide (excess O₂).</li><li>• Group 2: hydroxide solubility ↑, sulfate solubility ↓.</li><li>• Temporary hardness: bicarbonates; boiling removes it.</li></ul></Card>
        </div>

        <footer className="mt-8 rounded-2xl border border-white/10 bg-[#102235] p-5 text-sm leading-6 text-slate-400"><p className="font-bold text-slate-200">Verification hierarchy used</p><p className="mt-1">1. NCERT (primary curriculum wording and core facts) · 2. Official JEE Advanced syllabus/past-paper pattern for exam scope · 3. J. D. Lee and Greenwood & Earnshaw for explanatory cross-checking · 4. Olympiad and coaching-style materials only for problem-pattern coverage. Review reaction conditions and physical constants against the edition of NCERT prescribed for your examination year.</p></footer>
        <section className="mt-8" id="course"><h2 className="font-serif text-3xl font-black">60-page S-block course</h2><p className="mt-2 text-slate-400">Each card opens a self-contained lesson with NCERT-first core notes, JEE-level reasoning and an explicit exam trap.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{sBlockLessons.map((lesson) => <Link key={lesson.id} href={`/programs/jee-advanced/chapter/s-block/${lesson.id}`} className="rounded-xl border border-white/10 bg-[#102235] p-4 transition hover:border-cyan-300/50 hover:bg-[#152c40]"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">{lesson.unit} · {lesson.id}/60</p><h3 className="mt-1 font-bold text-white">{lesson.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{lesson.core}</p></Link>)}</div></section>
      </article>
    </main>
  );
}
