import { ChemBondPartShell, LearningObjectives, NoteBlock, PracticeQuestion, SummaryStrip, TrapCallout, WorkedExample } from "./_shared";

export default function Part04() {
  return (
    <ChemBondPartShell part={4} title="Polarisation & Fajans' Rules">
      <LearningObjectives items={[
        "State Fajans' rules and predict which of two similar ionic compounds is more covalent.",
        "Explain why AgCl is far less water-soluble than NaCl despite similar ionic radii.",
        "Know the correct solubility trend for alkali-metal carbonates AND the perchlorate exception.",
        "Resolve the Li₂CO₃-vs-Cs₂CO₃ solubility argument without internal contradiction.",
      ]} />

      <NoteBlock title="Covalent character inside 'ionic' bonds">
        <p>A small, highly charged cation pulls the electron cloud of a large, easily deformable anion toward itself — this shared-cloud distortion is covalent character. Fajans&apos; rules rank it:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Covalent character increases with a smaller cation, a larger anion, and higher charge on either ion.</li>
          <li>A cation with an 18-electron (pseudo-noble-gas) outer shell polarises far more than a same-size 8-electron cation — its d-electrons shield the nuclear charge poorly, so the effective pull on the anion&apos;s cloud is larger. AgCl is therefore much more covalent than KCl, though Ag⁺ and K⁺ are similar in size.</li>
        </ul>
      </NoteBlock>

      <WorkedExample title="Why is AgCl far less soluble in water than NaCl, though both are 1:1 chlorides?">
        <p>Ag⁺&apos;s 18-electron shell polarises Cl⁻ strongly, giving the Ag–Cl bond significant covalent character. Water&apos;s ion–dipole hydration mechanism is built for separating genuinely ionic lattices; it cannot pay the higher effective &quot;lattice&quot; cost of a partly covalent AgCl lattice, so AgCl stays largely undissolved.</p>
      </WorkedExample>

      <NoteBlock title="Alkali-metal oxosalt solubility — two trends that run in opposite directions">
        <p>For a fixed oxoanion, solubility down the alkali-metal group is decided by the balance between lattice enthalpy (falls as the cation grows) and hydration enthalpy (also falls, but usually faster for the larger, more diffuse oxoanion salts) — which term wins depends on the specific anion.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-white">Carbonates increase in solubility down the group</strong>: Li₂CO₃ &lt; Na₂CO₃ &lt; K₂CO₃ &lt; Rb₂CO₃ &lt; Cs₂CO₃.</li>
          <li><strong className="text-white">Perchlorates decrease</strong>: NaClO₄ &gt; KClO₄ &gt; RbClO₄ &gt; CsClO₄ — KClO₄, RbClO₄ and CsClO₄ are famously sparingly soluble (KClO₄ ≈ 1.5 g/100 mL vs NaClO₄ ≈ 200 g/100 mL at 25 °C). This reversal is the basis of the classical gravimetric determination of potassium as KClO₄.</li>
        </ul>
      </NoteBlock>

      <TrapCallout
        trap={<>Assuming every alkali-metal oxosalt series gets more soluble down the group, the way carbonates do.</>}
        reality={<>Perchlorates run the <strong>opposite</strong> way: solubility <strong>decreases</strong> down the group (NaClO₄ &gt; KClO₄ &gt; RbClO₄ &gt; CsClO₄). Carbonates and perchlorates are the standard paired example examiners use to test that this trend is anion-dependent, not a universal law.</>}
      />

      <WorkedExample title="Why is Li₂CO₃ less soluble than Cs₂CO₃, if Li⁺ is the more strongly hydrated ion?">
        <p>Li⁺ gives the strongest lattice of the alkali-carbonate series (shortest cation–anion distance, some covalent contribution) — strong enough that even Li⁺&apos;s large hydration enthalpy does not fully repay the cost of breaking that lattice. Moving down the group, the lattice enthalpy term falls faster than the hydration enthalpy term does, so the net ΔH of solution becomes more favourable and solubility rises: Li₂CO₃ (≈1.3 g/100 mL) &lt; Na₂CO₃ (≈21.5) &lt; K₂CO₃ (≈112).</p>
        <p className="text-white/60">Keep the reasoning one-directional: the lattice term is what dominates and falls fastest down the group — do not simultaneously claim Li⁺&apos;s lattice is both stronger and weaker than Cs⁺&apos;s within the same argument.</p>
      </WorkedExample>

      <PracticeQuestion
        prompt="Arrange NaCl, MgCl₂ and AlCl₃ in increasing covalent character, and justify using Fajans' rules."
        answer="NaCl < MgCl₂ < AlCl₃. Cation charge rises (+1 → +2 → +3) and radius falls across the period, so polarising power increases steadily; AlCl₃ behaves substantially covalently (it sublimes and dissolves in organic solvents)."
      />

      <SummaryStrip items={[
        "Fajans: small, high-charge cation + large anion + 18e⁻ shell → more covalent character (AgCl > KCl, LiCl > NaCl).",
        "Carbonates: solubility increases down the group. Perchlorates: solubility decreases down the group — the standard contrast pair.",
        "Li₂CO₃'s low solubility is a lattice-enthalpy story, consistently argued in one direction, not a contradiction.",
      ]} />
    </ChemBondPartShell>
  );
}
