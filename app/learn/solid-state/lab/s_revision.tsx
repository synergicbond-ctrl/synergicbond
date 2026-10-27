import { Chapter, KeyIdea, Tex, Traps } from "./_ui";

const th = "py-2 pr-4 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]";
const td = "py-2 pr-4 align-top";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className={th}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[var(--foreground)]">
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-[var(--border)]">
              {r.map((c, i) => (
                <td key={i} className={`${td} ${i === 0 ? "font-semibold" : "text-[var(--text-muted)]"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RevisionChapter() {
  return (
    <Chapter id="revision" n="REVISION" title="Formula sheet and final distinctions" lead="Everything above in one place: the numbers to know cold, the formulas, and the pairs that examiners like to confuse.">
      <h3 className="text-xl font-bold text-[var(--foreground)]">Cubic and close-packed lattices</h3>
      <Table
        head={["Lattice", "Z", "CN", "Atoms touch along", "Edge a", "Packing", "Empty"]}
        rows={[
          ["Simple cubic", "1", "6", "edge", "2r", "52.4%", "47.6%"],
          ["Body-centred", "2", "8", "body diagonal", "4r/√3", "68.0%", "32.0%"],
          ["Face-centred (CCP)", "4", "12", "face diagonal", "2√2 r", "74.0%", "26.0%"],
          ["HCP", "6", "12", "a = 2r; c/a = 1.633", "—", "74.05%", "25.95%"],
          ["Diamond", "8", "4", "body diagonal ÷ 4", "8r/√3", "34.0%", "66.0%"],
        ]}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Key formulas</div>
          <div className="mt-2 space-y-1 text-[var(--text-muted)]">
            <Tex block ex="Z = \tfrac18 N_{\text{corner}} + \tfrac14 N_{\text{edge}} + \tfrac12 N_{\text{face}} + N_{\text{body}}" />
            <Tex block ex="\rho = \dfrac{Z\,M}{a^3\,N_A}\qquad \eta = \dfrac{Z\cdot\tfrac43\pi r^3}{a^3}" />
            <Tex block ex="N_{\text{oct}} = N,\quad N_{\text{tet}} = 2N\ (N\text{ close-packed atoms})" />
            <Tex block ex="n_s \approx N\,e^{-\Delta H/2kT}\qquad \mu = \sqrt{n(n+2)}\ \text{BM}" />
          </div>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Voids and radius ratio</div>
          <div className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
            <div>Tetrahedral void: <span className="font-mono text-[var(--foreground)]">0.225 R</span> (r₊/r₋ 0.225 – 0.414, CN 4)</div>
            <div>Octahedral void: <span className="font-mono text-[var(--foreground)]">0.414 R</span> (0.414 – 0.732, CN 6)</div>
            <div>Triangular: 0.155 – 0.225, CN 3</div>
            <div>Cubic: 0.732 – 1.000, CN 8</div>
            <div>Linear: below 0.155, CN 2</div>
          </div>
        </div>
      </div>

      <h3 className="pt-4 text-xl font-bold text-[var(--foreground)]">Ionic structures</h3>
      <Table
        head={["Structure", "Framework", "Holes filled", "Z", "CN", "Examples"]}
        rows={[
          ["NaCl (rock salt)", "Cl⁻ in FCC", "All octahedral", "4", "6 : 6", "LiCl, KBr, MgO, AgCl"],
          ["CsCl", "Cl⁻ simple cubic", "Body centre (cubic hole)", "1", "8 : 8", "CsBr, CsI, NH₄Cl"],
          ["Zinc blende", "S²⁻ in FCC", "½ of tetrahedral", "4", "4 : 4", "ZnS, CuCl, AgI"],
          ["Wurtzite", "S²⁻ in HCP", "½ of tetrahedral", "6 (hex cell)", "4 : 4", "ZnO, BeO, CdS"],
          ["Fluorite CaF₂", "Ca²⁺ in FCC", "All tetrahedral (by F⁻)", "4", "8 : 4", "SrF₂, BaCl₂, UO₂"],
          ["Anti-fluorite Li₂O", "O²⁻ in FCC", "All tetrahedral (by Li⁺)", "4", "4 : 8", "Na₂O, K₂O"],
        ]}
      />

      <h3 className="pt-4 text-xl font-bold text-[var(--foreground)]">Defects, electrical and magnetic behaviour</h3>
      <Table
        head={["Topic", "Remember"]}
        rows={[
          ["Schottky", "Missing cation + anion pair; density decreases; NaCl, KCl, CsCl, AgBr"],
          ["Frenkel", "Ion moves to an interstitial site; density unchanged; ZnS, AgCl, AgBr"],
          ["F-centre", "Anion vacancy + trapped electron; colour (NaCl yellow, KCl violet, LiCl pink)"],
          ["Metal deficiency", "Missing cation, neighbours oxidised (Fe₀.₉₅O)"],
          ["Conductor / semi / insulator", "σ falls with T / rises with T / negligible; gap 0 / below about 3 eV / above"],
          ["n-type / p-type", "Group 15 dopant, electrons / group 13 dopant, holes"],
          ["p–n junction", "Forward: depletion layer narrows, large current. Reverse: widens, leakage"],
          ["Superconductor", "R = 0 and field expelled below Tc; Hg 4.2 K, YBa₂Cu₃O₇ 92 K"],
          ["Magnetism", "Dia: all paired (repelled). Para: unpaired (weakly attracted). Ferro: domains. Antiferro: equal opposed. Ferri: unequal opposed. Order lost above Tc"],
        ]}
      />

      <KeyIdea title="Method for any numerical">
        {"1) Identify the lattice and write Z. 2) Write the contact condition to link a and r. 3) Convert a to cm (1 pm = 10⁻¹⁰ cm). 4) Apply ρ = ZM / (a³N_A) or η = Z·(4/3)πr³ / a³. 5) Check the result against the known values before you move on."}
      </KeyIdea>
      <Traps
        items={[
          "**Z is not the number of atoms in the picture.** FCC shows 14, owns 4.",
          "**CsCl is simple cubic**, not BCC. **ZnS is 4 : 4**, **CaF₂ is 8 : 4**, **Li₂O is 4 : 8**.",
          "**Frenkel and Schottky are both stoichiometric.** Schottky lowers the density; Frenkel does not.",
          "**A metal's σ falls on heating; a semiconductor's rises.**",
          "**Ferro-, antiferro- and ferrimagnetic substances all turn paramagnetic above their transition temperature.**",
          "**Counting voids:** N close-packed atoms give **N octahedral** and **2N tetrahedral** voids, in both HCP and CCP.",
        ]}
      />
    </Chapter>
  );
}
