"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import * as katex from "katex";

const C = {
  bg: "#0a1622",
  surface: "#122232",
  surface2: "#182b3e",
  border: "#24405c",
  text: "#eef3f8",
  dim: "#dbe6ee",
  faint: "#bfd0dd",
  gold: "#e8b84b",
  cyan: "#5fd4ea",
  blue: "#7fb2e5",
  coral: "#e8896b",
  green: "#7fd9b8",
  violet: "#c9a4e0",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
};

function MathBlock({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
    output: "htmlAndMathml",
    strict: "warn",
    trust: false,
  });
  return (
    <div
      style={{ overflowX: "auto", padding: "6px 0", color: C.text }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        background: `linear-gradient(145deg, ${C.surface}, ${C.bg})`,
        padding: "clamp(16px, 3vw, 28px)",
        margin: "18px 0",
        boxShadow: "0 18px 42px rgba(0,0,0,.16)",
      }}
    >
      {children}
    </section>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      style={{
        scrollMarginTop: 110,
        color: C.gold,
        fontFamily: C.serif,
        fontSize: "clamp(1.55rem, 3.4vw, 2.35rem)",
        lineHeight: 1.16,
        margin: "0 0 18px",
        paddingBottom: 12,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        color: C.text,
        fontFamily: C.serif,
        fontSize: "clamp(1.16rem, 2.5vw, 1.55rem)",
        margin: "22px 0 10px",
      }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: C.dim, fontSize: "clamp(1rem, 1.4vw, 1.08rem)", lineHeight: 1.76, margin: "8px 0 12px" }}>
      {children}
    </p>
  );
}

function Callout({
  title,
  children,
  accent = C.cyan,
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <aside
      style={{
        borderLeft: `4px solid ${accent}`,
        background: `${accent}12`,
        borderRadius: 12,
        padding: "14px 16px",
        margin: "14px 0",
      }}
    >
      <div
        style={{
          color: accent,
          fontFamily: C.mono,
          fontWeight: 800,
          fontSize: ".86rem",
          letterSpacing: ".075em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div style={{ color: C.dim, fontSize: "1.02rem", lineHeight: 1.7 }}>{children}</div>
    </aside>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
        gap: 12,
        margin: "12px 0",
      }}
    >
      {children}
    </div>
  );
}

function MiniCard({
  title,
  children,
  accent = C.cyan,
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 14,
        background: C.surface2,
        padding: 14,
      }}
    >
      <strong style={{ color: C.text, display: "block", marginBottom: 7 }}>{title}</strong>
      <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.66 }}>{children}</div>
    </div>
  );
}

function DataTable({
  columns,
  rows,
  accent = C.cyan,
}: {
  columns: string[];
  rows: React.ReactNode[][];
  accent?: string;
}) {
  return (
    <div style={{ overflowX: "auto", margin: "14px 0 18px" }}>
      <table
        style={{
          width: "100%",
          minWidth: 620,
          borderCollapse: "collapse",
          color: C.dim,
          fontSize: "1rem",
        }}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                style={{
                  color: accent,
                  textAlign: "left",
                  padding: "10px 12px",
                  borderBottom: `2px solid ${accent}`,
                  fontSize: ".84rem",
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ background: rowIndex % 2 ? `${C.surface2}75` : "transparent" }}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    padding: "10px 12px",
                    borderBottom: `1px solid ${C.border}`,
                    verticalAlign: "top",
                    lineHeight: 1.48,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrbitalBoxes({ boxes }: { boxes: string[] }) {
  return (
    <span style={{ display: "inline-flex", gap: 4, flexWrap: "wrap", verticalAlign: "middle" }}>
      {boxes.map((box, index) => (
        <span
          key={`${box}-${index}`}
          style={{
            display: "inline-grid",
            placeItems: "center",
            minWidth: 38,
            height: 38,
            padding: "0 4px",
            border: `1px solid ${C.coral}`,
            borderRadius: 6,
            color: C.text,
            fontFamily: C.mono,
            fontWeight: 800,
            fontSize: "1rem",
          }}
        >
          {box || " "}
        </span>
      ))}
    </span>
  );
}

function EnergyLevelLadder({
  title,
  subtitle,
  levels,
  accent,
}: {
  title: string;
  subtitle: string;
  levels: string[];
  accent: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        background: C.surface2,
        padding: "18px 18px 16px",
        minWidth: 0,
      }}
    >
      <div style={{ color: C.text, fontSize: "1.2rem", fontWeight: 800, marginBottom: 5 }}>{title}</div>
      <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.55, marginBottom: 16 }}>{subtitle}</div>
      <div style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 10, alignItems: "stretch" }}>
        <div
          aria-hidden="true"
          style={{
            color: accent,
            fontFamily: C.mono,
            fontWeight: 900,
            fontSize: "1rem",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            textAlign: "center",
            borderLeft: `2px solid ${accent}`,
            paddingLeft: 8,
          }}
        >
          ENERGY INCREASES ↑
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
          {levels.map((level, index) => (
            <div key={level} style={{ display: "grid", gridTemplateColumns: "minmax(120px, auto) 1fr", gap: 12, alignItems: "center" }}>
              <strong style={{ color: C.text, fontFamily: C.mono, fontSize: "1.04rem", whiteSpace: "nowrap" }}>{level}</strong>
              <span style={{ height: 2, borderRadius: 2, background: accent, opacity: 1 - index * 0.07 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnergyLevelComparison() {
  return (
    <figure style={{ margin: "18px 0" }}>
      <div style={{ color: C.text, fontFamily: C.serif, fontSize: "clamp(1.25rem, 2.2vw, 1.55rem)", fontWeight: 800, marginBottom: 6 }}>
        One-electron versus multi-electron orbital energies
      </div>
      <div style={{ color: C.dim, fontSize: "1.02rem", lineHeight: 1.65, marginBottom: 14 }}>
        The same principal shell remains degenerate in the non-relativistic one-electron Coulomb model, whereas shielding, penetration and electron–electron repulsion split subshell energies in many-electron species.
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
          gap: 14,
        }}
      >
        <EnergyLevelLadder
          title="Hydrogen-like species"
          subtitle="Energy depends only on n; all orbitals with the same n are degenerate."
          accent={C.cyan}
          levels={["4s = 4p = 4d = 4f", "3s = 3p = 3d", "2s = 2p", "1s"]}
        />
        <EnergyLevelLadder
          title="Multi-electron species"
          subtitle="Subshells split. This is a schematic local order, not a universal cross-shell law."
          accent={C.gold}
          levels={["3d", "4s", "3p", "3s", "2p", "2s", "1s"]}
        />
      </div>
      <figcaption style={{ color: C.dim, fontSize: ".98rem", lineHeight: 1.6, marginTop: 10 }}>
        The comparison clarifies why the simple n-only degeneracy of H, He⁺, Li²⁺ … does not survive unchanged in ordinary many-electron atoms.
      </figcaption>
    </figure>
  );
}

function AufbauDiagram() {
  const labels = [
    ["1s"],
    ["2s", "2p"],
    ["3s", "3p", "3d"],
    ["4s", "4p", "4d", "4f"],
    ["5s", "5p", "5d", "5f"],
    ["6s", "6p", "6d"],
    ["7s", "7p"],
  ];

  const paths = [
    "M222 32 L62 108",
    "M380 100 L62 176",
    "M538 100 L62 244",
    "M694 168 L62 312",
    "M694 236 L62 380",
    "M694 304 L62 448",
    "M694 372 L62 516",
    "M380 516 L694 440",
  ];

  const sequence = [
    "1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"
  ];

  return (
    <figure style={{ margin: "18px 0" }}>
      <div
        style={{
          color: C.text,
          fontFamily: C.serif,
          fontSize: "clamp(1.22rem, 2.1vw, 1.52rem)",
          fontWeight: 800,
          marginBottom: 6,
        }}
      >
        Madelung diagonal guide
      </div>

      <div
        style={{
          color: C.dim,
          fontSize: "1rem",
          lineHeight: 1.65,
          marginBottom: 12,
          maxWidth: 960,
        }}
      >
        Read each cyan arrow from upper right to lower left. The figure is intentionally more compact so the orbital labels stay visible on both desktop and mobile screens.
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          overflowX: "auto",
          border: `1px solid ${C.border}`,
          borderRadius: 18,
          background: C.surface2,
          padding: "12px 12px 8px",
        }}
      >
        <svg
          role="img"
          aria-labelledby="ec-aufbau-title ec-aufbau-desc"
          viewBox="0 0 760 560"
          style={{
            display: "block",
            width: "100%",
            minWidth: 620,
            maxWidth: 820,
            height: "auto",
            margin: "0 auto",
          }}
        >
          <title id="ec-aufbau-title">Compact high-contrast Madelung diagonal orbital-filling guide</title>
          <desc id="ec-aufbau-desc">
            Orbitals from 1s through 7p are arranged by principal shell and subshell. Cyan arrows indicate the ordinary filling sequence used by the Madelung guide.
          </desc>

          <defs>
            <marker id="ecArrowCompact" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto">
              <path d="M 0 0 L 12 6 L 0 12 z" fill={C.cyan} />
            </marker>
            <filter id="ecNodeGlowCompact" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {paths.map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke={C.cyan}
              strokeWidth="3.5"
              strokeLinecap="round"
              markerEnd="url(#ecArrowCompact)"
              opacity="0.95"
            />
          ))}

          {labels.map((row, r) =>
            row.map((label, c) => {
              const x = 160 + c * 158;
              const y = 78 + r * 68;
              return (
                <g key={label} filter="url(#ecNodeGlowCompact)">
                  <circle cx={x} cy={y} r="28" fill={C.bg} stroke={C.blue} strokeWidth="3.5" />
                  <text
                    x={x}
                    y={y + 8}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="21"
                    fontFamily={C.sans}
                    fontWeight="850"
                  >
                    {label}
                  </text>
                </g>
              );
            }),
          )}
        </svg>
      </div>

      <div
        style={{
          marginTop: 12,
          padding: "12px 14px",
          border: `1px solid ${C.gold}`,
          borderRadius: 12,
          background: `${C.gold}12`,
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sequence.map((item, i) => (
          <React.Fragment key={item + i}>
            <span
              style={{
                color: "#ffd36a",
                fontFamily: C.mono,
                fontSize: "clamp(.98rem, 1.6vw, 1.08rem)",
                fontWeight: 800,
              }}
            >
              {item}
            </span>
            {i < sequence.length - 1 ? (
              <span style={{ color: C.gold, fontWeight: 900 }}>→</span>
            ) : null}
          </React.Fragment>
        ))}
      </div>

      <figcaption style={{ color: C.dim, fontSize: ".96rem", lineHeight: 1.6, marginTop: 10 }}>
        The Madelung diagram is a practical filling guide, not a universal fixed energy diagram for every atom, ion or excited state.
      </figcaption>
    </figure>
  );
}



const firstThirty: React.ReactNode[][] = [
  ["1 H", "1s¹", "16 S", "[Ne] 3s² 3p⁴"],
  ["2 He", "1s²", "17 Cl", "[Ne] 3s² 3p⁵"],
  ["3 Li", "[He] 2s¹", "18 Ar", "[Ne] 3s² 3p⁶"],
  ["4 Be", "[He] 2s²", "19 K", "[Ar] 4s¹"],
  ["5 B", "[He] 2s² 2p¹", "20 Ca", "[Ar] 4s²"],
  ["6 C", "[He] 2s² 2p²", "21 Sc", "[Ar] 3d¹ 4s²"],
  ["7 N", "[He] 2s² 2p³", "22 Ti", "[Ar] 3d² 4s²"],
  ["8 O", "[He] 2s² 2p⁴", "23 V", "[Ar] 3d³ 4s²"],
  ["9 F", "[He] 2s² 2p⁵", "24 Cr", "[Ar] 3d⁵ 4s¹"],
  ["10 Ne", "[He] 2s² 2p⁶", "25 Mn", "[Ar] 3d⁵ 4s²"],
  ["11 Na", "[Ne] 3s¹", "26 Fe", "[Ar] 3d⁶ 4s²"],
  ["12 Mg", "[Ne] 3s²", "27 Co", "[Ar] 3d⁷ 4s²"],
  ["13 Al", "[Ne] 3s² 3p¹", "28 Ni", "[Ar] 3d⁸ 4s²"],
  ["14 Si", "[Ne] 3s² 3p²", "29 Cu", "[Ar] 3d¹⁰ 4s¹"],
  ["15 P", "[Ne] 3s² 3p³", "30 Zn", "[Ar] 3d¹⁰ 4s²"],
];

const specialD: React.ReactNode[][] = [
  ["Cr", "[Ar] 3d⁵ 4s¹", "Close 3d/4s energies; the d⁵ distribution contributes to the final energy balance."],
  ["Cu", "[Ar] 3d¹⁰ 4s¹", "Close 3d/4s energies; the filled d¹⁰ distribution contributes to the final balance."],
  ["Nb", "[Kr] 4d⁴ 5s¹", "Near-degenerate 4d and 5s levels."],
  ["Mo", "[Kr] 4d⁵ 5s¹", "Close levels with a favourable d⁵ arrangement."],
  ["Ru", "[Kr] 4d⁷ 5s¹", "Observed multi-electron orbital-energy balance."],
  ["Rh", "[Kr] 4d⁸ 5s¹", "Observed multi-electron orbital-energy balance."],
  ["Pd", "[Kr] 4d¹⁰ 5s⁰", "Filled 4d¹⁰ shell; 5s is empty."],
  ["Ag", "[Kr] 4d¹⁰ 5s¹", "Filled 4d¹⁰ plus one 5s electron."],
  ["Pt", "[Xe] 4f¹⁴ 5d⁹ 6s¹", "Orbital-energy and relativistic effects."],
  ["Au", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "Filled 5d¹⁰ and relativistic effects."],
];

const specialF: React.ReactNode[][] = [
  ["La", "[Xe] 5d¹ 6s²", "5d is occupied before the regular 4f sequence."],
  ["Ce", "[Xe] 4f¹ 5d¹ 6s²", "Mixed 4f/5d occupation."],
  ["Gd", "[Xe] 4f⁷ 5d¹ 6s²", "Half-filled 4f⁷ plus one 5d electron."],
  ["Lu", "[Xe] 4f¹⁴ 5d¹ 6s²", "Filled 4f¹⁴ plus one 5d electron."],
  ["Ac", "[Rn] 6d¹ 7s²", "5f⁰."],
  ["Th", "[Rn] 6d² 7s²", "5f⁰."],
  ["Pa", "[Rn] 5f² 6d¹ 7s²", "Mixed 5f/6d occupation."],
  ["U", "[Rn] 5f³ 6d¹ 7s²", "Mixed 5f/6d occupation."],
  ["Np", "[Rn] 5f⁴ 6d¹ 7s²", "Mixed 5f/6d occupation."],
  ["Cm", "[Rn] 5f⁷ 6d¹ 7s²", "Half-filled 5f⁷ plus one 6d electron."],
];

const jumpLinks = [
  ["ec2-meaning", "Meaning"],
  ["ec2-capacity", "Capacity"],
  ["ec2-energy", "Orbital energy"],
  ["ec2-rules", "Filling rules"],
  ["ec2-neutral", "Neutral atoms"],
  ["ec2-ions", "Ions"],
  ["ec2-stability", "Stability"],
  ["ec2-special", "Special states"],
  ["ec2-magnetism", "Magnetism"],
  ["ec2-examples", "Examples"],
  ["ec2-practice", "Practice"],
];

export default function ElectronicConfigurationMasterV2() {
  return (
    <div style={{ color: C.text, fontFamily: C.sans }}>
      <header
        style={{
          border: `1px solid ${C.border}`,
          borderRadius: 22,
          background: `radial-gradient(circle at 90% 5%, ${C.blue}25, transparent 34%), linear-gradient(135deg, ${C.surface2}, ${C.bg})`,
          padding: "clamp(22px, 5vw, 46px)",
          margin: "4px 0 16px",
        }}
      >
        <div style={{ color: C.violet, fontFamily: C.mono, fontWeight: 800, letterSpacing: ".12em", fontSize: ".78rem" }}>
          ELECTRONIC CONFIGURATION · COMPLETE JEE ADVANCED MODULE
        </div>
        <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 5vw, 3.45rem)", lineHeight: 1.06, margin: "10px 0", color: C.text }}>
          From Orbital Filling to Ions, Magnetism and Special Ground States
        </h1>
        <P>
          A corrected, focused module that develops electronic configuration from first principles and applies it to neutral atoms, ions, pairing, exchange counting, accepted d/f-block ground states, unpaired electrons and magnetic behaviour.
        </P>
      </header>

      <Callout title="Scope of 2P" accent={C.gold}>
        This module contains only electronic-configuration theory and its direct applications. Periodic-table history, classification schemes, family descriptions and detailed periodic trends belong to the separate 1P module and are not repeated here.
      </Callout>

      <nav aria-label="Electronic configuration section navigation" style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "14px 0 20px" }}>
        {jumpLinks.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              color: C.dim,
              textDecoration: "none",
              border: `1px solid ${C.border}`,
              borderLeft: `3px solid ${C.cyan}`,
              borderRadius: 999,
              padding: "8px 12px",
              background: C.surface,
              fontSize: ".88rem",
              fontWeight: 700,
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <Shell>
        <H2 id="ec2-meaning">1 · Meaning, Notation and Representations</H2>
        <Callout title="Definition">
          <strong style={{ color: C.text }}>Electronic configuration</strong> is the distribution of electrons among the shells, subshells and orbitals of an atom or ion. In 3p⁴, 3 is the principal shell, p identifies the subshell and 4 is the number of electrons in that subshell.
        </Callout>
        <DataTable
          columns={["Representation", "Sodium, Z = 11"]}
          rows={[
            ["Expanded", "1s² 2s² 2p⁶ 3s¹"],
            ["Noble-gas / condensed", "[Ne] 3s¹"],
            ["Orbital-box", <span key="na-box">1s <OrbitalBoxes boxes={["↑↓"]} /> 2s <OrbitalBoxes boxes={["↑↓"]} /> 2p <OrbitalBoxes boxes={["↑↓", "↑↓", "↑↓"]} /> 3s <OrbitalBoxes boxes={["↑"]} /></span>],
            ["Shell distribution", "2, 8, 1"],
          ]}
        />
        <Callout title="Reliable writing sequence" accent={C.green}>
          Count electrons → select the practical filling sequence → apply Pauli and Hund → check accepted close-energy d/f ground states → abbreviate the completed inner core with the preceding noble gas.
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-capacity">2 · Quantum Numbers and Electron Capacity</H2>
        <P>For a subshell, the azimuthal quantum number ℓ determines the number of orbitals and therefore its maximum electron capacity.</P>
        <DataTable
          columns={["Subshell", "ℓ", "Orbitals, 2ℓ + 1", "Maximum electrons, 2(2ℓ + 1)"]}
          rows={[["s", "0", "1", "2"], ["p", "1", "3", "6"], ["d", "2", "5", "10"], ["f", "3", "7", "14"]]}
          accent={C.green}
        />
        <Grid>
          <MiniCard title="Subshell relations" accent={C.green}>Orbitals in a subshell = 2ℓ + 1; maximum electrons = 2(2ℓ + 1).</MiniCard>
          <MiniCard title="Shell relations" accent={C.blue}>Subshells in shell n = n; orbitals = n²; maximum electrons = 2n².</MiniCard>
        </Grid>
        <Callout title="Crucial conceptual correction" accent={C.coral}>
          Subshells do not appear only when more than one electron is present. Allowed s, p, d, f … subshells are part of the quantum-mechanical description. In a one-electron Coulomb species, orbitals with the same n are degenerate in the non-relativistic model; electron–electron interaction removes that degeneracy in multi-electron species.
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-energy">3 · Orbital Energy: One-Electron and Multi-Electron Species</H2>
        <H3>Hydrogen-like species</H3>
        <P>H, He⁺, Li²⁺ and Be³⁺ contain one electron. Ignoring fine structure, orbital energy depends only on n.</P>
        <MathBlock tex={String.raw`E_n=-13.6\,\frac{Z^2}{n^2}\ \mathrm{eV}`} />
        <Callout title="Degeneracy in the Coulomb model">
          1s &lt; 2s = 2p &lt; 3s = 3p = 3d &lt; 4s = 4p = 4d = 4f &lt; …
        </Callout>
        <H3>Multi-electron atoms and ions</H3>
        <P>Electron–electron repulsion, shielding, penetration and the actual electron population make energy depend on both n and ℓ. Within one shell, the usual penetration-based order is ns &lt; np &lt; nd &lt; nf because penetration follows approximately s &gt; p &gt; d &gt; f.</P>
        <Callout title="Penetration and shielding" accent={C.violet}>
          Greater penetration means more time close to the nucleus, a larger effective nuclear attraction and usually lower orbital energy. Cross-shell order is not fixed and can change after electrons are added or removed.
        </Callout>
        <EnergyLevelComparison />
      </Shell>

      <Shell>
        <H2 id="ec2-rules">4 · Rules Governing the Ground-State Arrangement</H2>
        <H3>Aufbau principle and the Madelung guide</H3>
        <P>Electrons occupy available orbitals so that the total energy of the atom is minimised, while obeying Pauli exclusion and Hund’s rule. The (n + ℓ) rule is a practical filling guide.</P>
        <Callout title="Madelung rule" accent={C.gold}>
          Smaller (n + ℓ) fills first. For equal (n + ℓ), the orbital with smaller n fills first.
        </Callout>
        <AufbauDiagram />
        <div style={{ fontFamily: C.mono, color: C.cyan, overflowX: "auto", whiteSpace: "nowrap", padding: "12px 14px", border: `1px solid ${C.border}`, borderRadius: 12 }}>
          1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s &lt; 4d &lt; 5p &lt; 6s &lt; 4f &lt; 5d &lt; 6p &lt; 7s &lt; 5f &lt; 6d &lt; 7p
        </div>
        <Callout title="Scientific limitation" accent={C.coral}>
          The (n + ℓ) rule is not a universal orbital-energy law. Orbital energies vary with nuclear charge, electron population and ion formation. Thus 4s is occupied before 3d during the build-up of K and Ca, but transition-metal cations generally lose 4s electrons before 3d electrons.
        </Callout>
        <H3>Pauli exclusion principle</H3>
        <P>No two electrons in one atom can have the same set of four quantum numbers (n, ℓ, mℓ, ms). One orbital therefore contains at most two electrons, and their spin projections are opposite.</P>
        <MathBlock tex={String.raw`1s^2:\ (1,0,0,+\tfrac12)\quad\text{and}\quad(1,0,0,-\tfrac12)`} />
        <H3>Hund’s rule of maximum multiplicity</H3>
        <P>Within degenerate orbitals, electrons occupy separate orbitals with parallel spins before pairing begins.</P>
        <DataTable
          columns={["Configuration", "Ground-state box pattern", "Unpaired electrons"]}
          rows={[
            ["p¹", <OrbitalBoxes key="p1" boxes={["↑", "", ""]} />, "1"],
            ["p²", <OrbitalBoxes key="p2" boxes={["↑", "↑", ""]} />, "2"],
            ["p³", <OrbitalBoxes key="p3" boxes={["↑", "↑", "↑"]} />, "3"],
            ["p⁴", <OrbitalBoxes key="p4" boxes={["↑↓", "↑", "↑"]} />, "2"],
            ["p⁵", <OrbitalBoxes key="p5" boxes={["↑↓", "↑↓", "↑"]} />, "1"],
            ["p⁶", <OrbitalBoxes key="p6" boxes={["↑↓", "↑↓", "↑↓"]} />, "0"],
          ]}
          accent={C.coral}
        />
        <MathBlock tex={String.raw`M=2S+1`} />
        <P>For p⁴ in its Hund arrangement, the two unpaired electrons have parallel spins, S = 1 and M = 3: a triplet arrangement.</P>
      </Shell>

      <Shell>
        <H2 id="ec2-neutral">5 · Writing Configurations of Neutral Atoms</H2>
        <ol style={{ color: C.dim, lineHeight: 1.75, paddingLeft: 22 }}>
          <li>For a neutral atom, total electrons = atomic number Z.</li>
          <li>Fill orbitals in the practical Aufbau sequence.</li>
          <li>Allow at most two opposite-spin electrons per orbital.</li>
          <li>Apply Hund’s rule inside p, d and f subshells.</li>
          <li>Replace the completed inner core by the preceding noble gas.</li>
          <li>For close-energy d/f cases, use the accepted ground-state configuration.</li>
        </ol>
        <Grid>
          <MiniCard title="Example: phosphorus, Z = 15" accent={C.cyan}>
            P = 1s² 2s² 2p⁶ 3s² 3p³ = [Ne] 3s² 3p³. The 3p boxes are <OrbitalBoxes boxes={["↑", "↑", "↑"]} />, so the free atom has three unpaired electrons.
          </MiniCard>
          <MiniCard title="Example: iron, Z = 26" accent={C.green}>
            Fe = [Ar] 3d⁶ 4s². Writing 4s² before 3d⁶ describes the build-up sequence; writing 3d⁶ 4s² groups the chemically important subshells. Both describe the same occupancy.
          </MiniCard>
        </Grid>
        <H3>Ground-state configurations of the first 30 elements</H3>
        <DataTable columns={["Z · Element", "Condensed configuration", "Z · Element", "Condensed configuration"]} rows={firstThirty} accent={C.blue} />
      </Shell>

      <Shell>
        <H2 id="ec2-ions">6 · Electronic Configurations of Ions</H2>
        <MathBlock tex={String.raw`N_e(\text{cation }+q)=Z-q\qquad N_e(\text{anion }-q)=Z+q`} />
        <H3>Cations: remove from the highest-energy occupied orbital</H3>
        <P>For main-group atoms, remove from the highest n shell; within the same shell, a p electron is removed before an s electron. For transition metals, remove ns electrons before (n − 1)d electrons.</P>
        <DataTable
          columns={["Sequence", "Configurations"]}
          rows={[
            ["Mg → Mg⁺ → Mg²⁺", "[Ne]3s² → [Ne]3s¹ → [Ne]"],
            ["Al → Al⁺ → Al³⁺", "[Ne]3s²3p¹ → [Ne]3s² → [Ne]"],
            ["Fe → Fe²⁺ → Fe³⁺", "[Ar]3d⁶4s² → [Ar]3d⁶ → [Ar]3d⁵"],
            ["Cr → Cr⁺ → Cr²⁺ → Cr³⁺", "[Ar]3d⁵4s¹ → [Ar]3d⁵ → [Ar]3d⁴ → [Ar]3d³"],
            ["Cu → Cu⁺ → Cu²⁺", "[Ar]3d¹⁰4s¹ → [Ar]3d¹⁰ → [Ar]3d⁹"],
          ]}
          accent={C.green}
        />
        <Callout title="The common 4s/3d trap" accent={C.coral}>
          Do not reverse the neutral-atom filling sequence mechanically. Although 4s is occupied before 3d during build-up, common transition-metal cations lose 4s electrons first because the relative orbital energies change after occupation.
        </Callout>
        <H3>Anions: add to the lowest available orbital</H3>
        <div style={{ fontFamily: C.mono, color: C.cyan, padding: "12px 14px", border: `1px solid ${C.border}`, borderRadius: 12, overflowX: "auto" }}>
          O: [He]2s²2p⁴ → O⁻: [He]2s²2p⁵ → O²⁻: [He]2s²2p⁶ = [Ne]
        </div>
      </Shell>

      <Shell>
        <H2 id="ec2-stability">7 · Half-Filled, Filled, Pairing and Exchange</H2>
        <DataTable
          columns={["Subshell", "Half-filled", "Completely filled"]}
          rows={[
            ["p", <span key="hp"><strong>p³</strong> <OrbitalBoxes boxes={["↑", "↑", "↑"]} /></span>, <span key="fp"><strong>p⁶</strong> <OrbitalBoxes boxes={["↑↓", "↑↓", "↑↓"]} /></span>],
            ["d", <span key="hd"><strong>d⁵</strong> <OrbitalBoxes boxes={["↑", "↑", "↑", "↑", "↑"]} /></span>, <span key="fd"><strong>d¹⁰</strong> <OrbitalBoxes boxes={["↑↓", "↑↓", "↑↓", "↑↓", "↑↓"]} /></span>],
            ["f", "f⁷", "f¹⁴"],
          ]}
          accent={C.violet}
        />
        <P>Half-filled and completely filled patterns can receive relative stabilisation from symmetrical occupation, exchange and the complete multi-electron energy balance. They are useful clues, not universal commands.</P>
        <H3>Pairing energy</H3>
        <P>Pairing energy is the cost, in a simplified orbital model, of placing a second electron in an already occupied orbital rather than keeping electrons unpaired in separate degenerate orbitals.</P>
        <MathBlock tex={String.raw`N_{\mathrm{pair}}=\text{number of doubly occupied orbitals}`} />
        <H3>Exchange counting</H3>
        <P>If n↑ and n↓ are the numbers of spin-up and spin-down electrons in a degenerate subshell, the elementary same-spin pair count is:</P>
        <MathBlock tex={String.raw`N_{\mathrm{ex}}=\binom{n_\uparrow}{2}+\binom{n_\downarrow}{2}`} />
        <Grid>
          <MiniCard title="Example: 3d⁴" accent={C.green}>
            <OrbitalBoxes boxes={["↑", "↑", "↑", "↑", ""]} />. Npair = 0, n↑ = 4, n↓ = 0 and Nex = C(4,2) = 6.
          </MiniCard>
          <MiniCard title="Example: 3d⁸" accent={C.cyan}>
            <OrbitalBoxes boxes={["↑↓", "↑↓", "↑↓", "↑", "↑"]} />. Npair = 3, n↑ = 5, n↓ = 3 and Nex = C(5,2) + C(3,2) = 13.
          </MiniCard>
        </Grid>
        <Callout title="Do not use bookkeeping as an exact total-energy formula" accent={C.coral}>
          “Pairing cost minus exchange stabilisation” is only a qualitative model. Actual ground states depend on orbital energies, Coulomb repulsion, exchange integrals, correlation and—for heavy atoms—relativistic effects. Do not assign invented numerical values and present the result as an exact aggregate energy.
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-special">8 · Special Ground-State Configurations</H2>
        <P>When ns, (n − 1)d or (n − 2)f subshells are close in energy, a small redistribution can lower the complete total energy. Learn the accepted configuration first; use half-filled or filled patterns only as supporting interpretation.</P>
        <H3>High-priority d-block configurations</H3>
        <DataTable columns={["Element", "Accepted ground state", "Safe interpretation"]} rows={specialD} accent={C.gold} />
        <Callout title="Counterexamples that prevent over-memorisation" accent={C.coral}>
          Technetium is [Kr] 4d⁵ 5s², not 4d⁶ 5s¹. Tungsten is [Xe] 4f¹⁴ 5d⁴ 6s², not 5d⁵ 6s¹. Therefore “always make d⁵ or d¹⁰” is false.
        </Callout>
        <H3>Selected f-block configurations for direct recall</H3>
        <DataTable columns={["Element", "Ground-state configuration", "Note"]} rows={specialF} accent={C.violet} />
        <Callout title="Corrected high-value data point" accent={C.green}>
          Cerium is [Xe] 4f¹ 5d¹ 6s² in the accepted reference configuration used here, not [Xe] 4f² 6s².
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-magnetism">9 · Paired/Unpaired Electrons and Magnetic Behaviour</H2>
        <ol style={{ color: C.dim, lineHeight: 1.72, paddingLeft: 22 }}>
          <li>Write the complete outer or incomplete-subshell configuration.</li>
          <li>Draw only the partially filled subshell as orbital boxes.</li>
          <li>Apply Hund’s rule.</li>
          <li>Singly occupied boxes give the number of unpaired electrons.</li>
          <li>Each doubly occupied box contains two paired electrons.</li>
        </ol>
        <DataTable
          columns={["Configuration", "Box pattern", "Unpaired e⁻", "Pairs in subshell"]}
          rows={[
            ["p⁴", <OrbitalBoxes key="mp4" boxes={["↑↓", "↑", "↑"]} />, "2", "1"],
            ["p⁵", <OrbitalBoxes key="mp5" boxes={["↑↓", "↑↓", "↑"]} />, "1", "2"],
            ["d⁵", <OrbitalBoxes key="md5" boxes={["↑", "↑", "↑", "↑", "↑"]} />, "5", "0"],
            ["d⁶", <OrbitalBoxes key="md6" boxes={["↑↓", "↑", "↑", "↑", "↑"]} />, "4", "1"],
            ["d⁸", <OrbitalBoxes key="md8" boxes={["↑↓", "↑↓", "↑↓", "↑", "↑"]} />, "2", "3"],
            ["d¹⁰", <OrbitalBoxes key="md10" boxes={["↑↓", "↑↓", "↑↓", "↑↓", "↑↓"]} />, "0", "5"],
          ]}
          accent={C.coral}
        />
        <P>A species with at least one unpaired electron is paramagnetic; a species with all electrons paired is diamagnetic. For many first-row transition-metal ions, the spin-only magnetic moment is:</P>
        <MathBlock tex={String.raw`\mu_{\mathrm{so}}=\sqrt{n(n+2)}\ \mathrm{BM}`} />
        <DataTable
          columns={["Species", "Relevant configuration", "n", "μso / BM", "Nature"]}
          rows={[
            ["Fe²⁺", "3d⁶", "4", "√24", "Paramagnetic"],
            ["Fe³⁺", "3d⁵", "5", "√35", "Paramagnetic"],
            ["Cu⁺", "3d¹⁰", "0", "0", "Diamagnetic"],
            ["Cu²⁺", "3d⁹", "1", "√3", "Paramagnetic"],
            ["Zn²⁺", "3d¹⁰", "0", "0", "Diamagnetic"],
          ]}
          accent={C.green}
        />
        <Callout title="Limit of the spin-only formula" accent={C.gold}>
          √[n(n + 2)] is a spin-only approximation, especially useful for many first-row transition-metal ions when orbital angular momentum is largely quenched. Free atoms, heavier ions and some complexes can show substantial orbital contributions. Ligand-field splitting can also alter the unpaired-electron count.
        </Callout>
        <H3>Isoelectronic species</H3>
        <P>Isoelectronic species have the same total number of electrons and the same complete electronic configuration, but different nuclear charges.</P>
        <DataTable
          columns={["Species", "Electron calculation", "Total e⁻", "Configuration"]}
          rows={[
            ["N³⁻", "7 + 3", "10", "[Ne]"], ["O²⁻", "8 + 2", "10", "[Ne]"], ["F⁻", "9 + 1", "10", "[Ne]"],
            ["Ne", "10", "10", "[Ne]"], ["Na⁺", "11 − 1", "10", "[Ne]"], ["Mg²⁺", "12 − 2", "10", "[Ne]"], ["Al³⁺", "13 − 3", "10", "[Ne]"],
          ]}
          accent={C.blue}
        />
        <Callout title="Radius order in the ten-electron series" accent={C.blue}>
          Greater nuclear charge attracts the same electron cloud more strongly, so radius generally decreases:
          <div style={{ fontFamily: C.mono, color: C.text, marginTop: 8 }}>N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Ne &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺</div>
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-examples">10 · Worked Example Workshop</H2>
        <Grid>
          <MiniCard title="1. Compare 3s, 3p, 4s and 3d" accent={C.cyan}>
            n + ℓ values are 3, 4, 4 and 5. For equal n + ℓ = 4, smaller n fills first. Predicted order: <strong style={{ color: C.text }}>3s &lt; 3p &lt; 4s &lt; 3d</strong>.
          </MiniCard>
          <MiniCard title="2. Write Co³⁺" accent={C.green}>
            Co = [Ar] 3d⁷ 4s². Remove two 4s electrons and then one 3d electron: <strong style={{ color: C.text }}>Co³⁺ = [Ar] 3d⁶</strong>. The free-ion Hund pattern has four unpaired electrons.
          </MiniCard>
          <MiniCard title="3. Paired and unpaired electrons in O" accent={C.coral}>
            O = 1s² 2s² 2p⁴; 2p = <OrbitalBoxes boxes={["↑↓", "↑", "↑"]} />. It has two unpaired electrons and six paired electrons in total, so it is paramagnetic.
          </MiniCard>
          <MiniCard title="4. Cr prediction versus observation" accent={C.gold}>
            Simple filling predicts [Ar] 3d⁴ 4s²; observed Cr is [Ar] 3d⁵ 4s¹. Because 3d and 4s are close in energy, redistribution lowers the complete total energy. This is not an exact calculation from invented P and K values.
          </MiniCard>
          <MiniCard title="5. Magnetic moment of Mn²⁺" accent={C.violet}>
            Mn = [Ar] 3d⁵ 4s², so Mn²⁺ = [Ar] 3d⁵. With n = 5, μso = √[5(5 + 2)] = <strong style={{ color: C.text }}>√35 BM</strong>.
          </MiniCard>
          <MiniCard title="6. Exchange count for d⁷" accent={C.blue}>
            d⁷ = <OrbitalBoxes boxes={["↑↓", "↑↓", "↑", "↑", "↑"]} />. Npair = 2; n↑ = 5, n↓ = 2; Nex = C(5,2) + C(2,2) = 11.
          </MiniCard>
        </Grid>
      </Shell>

      <Shell>
        <H2 id="ec2-practice">11 · Practice Problems and Answer Key</H2>
        <ol style={{ color: C.dim, lineHeight: 1.72, paddingLeft: 22 }}>
          <li>Write expanded and condensed configurations of S, Ca, Fe and Br.</li>
          <li>Use (n + ℓ) to arrange 4p, 5s, 4d and 5p in predicted filling order.</li>
          <li>Draw orbital-box patterns for p², p⁴, d⁴ and d⁷.</li>
          <li>Find unpaired electrons in N, O, Cr, Fe and Cu.</li>
          <li>Write configurations of S²⁻, Ca²⁺, Fe²⁺, Fe³⁺, Cu⁺ and Cu²⁺.</li>
          <li>Which are diamagnetic: Na⁺, O₂⁻, Cu⁺, Zn²⁺? Treat O₂⁻ using molecular-orbital theory.</li>
          <li>Calculate μso for n = 1, 2, 3, 4 and 5.</li>
          <li>For d⁷, calculate Npair and Nex in the Hund arrangement.</li>
          <li>Explain why Fe²⁺ is [Ar] 3d⁶, not [Ar] 3d⁴ 4s².</li>
          <li>State accepted configurations of Cr, Cu, Nb, Mo, Pd, Pt and Au.</li>
          <li>Correct: “Every half-filled d arrangement forces an ns electron into (n − 1)d.”</li>
          <li>Arrange N³⁻, O²⁻, F⁻, Ne, Na⁺ and Mg²⁺ in decreasing radius.</li>
        </ol>
        <Callout title="Answer key" accent={C.green}>
          <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.68 }}>
            <li>S = [Ne]3s²3p⁴; Ca = [Ar]4s²; Fe = [Ar]3d⁶4s²; Br = [Ar]3d¹⁰4s²4p⁵.</li>
            <li>4p &lt; 5s &lt; 4d &lt; 5p.</li>
            <li>p²: two singles; p⁴: one pair and two singles; d⁴: four singles; d⁷: two pairs and three singles.</li>
            <li>N: 3; O: 2; Cr: 6; Fe: 4; Cu: 1.</li>
            <li>S²⁻ = [Ar]; Ca²⁺ = [Ar]; Fe²⁺ = [Ar]3d⁶; Fe³⁺ = [Ar]3d⁵; Cu⁺ = [Ar]3d¹⁰; Cu²⁺ = [Ar]3d⁹.</li>
            <li>Na⁺, Cu⁺ and Zn²⁺ are diamagnetic. O₂⁻ requires MO theory.</li>
            <li>√3, √8, √15, √24 and √35 BM.</li>
            <li>Npair = 2; Nex = 11.</li>
            <li>Transition-metal atoms lose 4s electrons before 3d electrons after occupation.</li>
            <li>Use the special-ground-state table above.</li>
            <li>False; Tc and W are important counterexamples.</li>
            <li>N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Ne &gt; Na⁺ &gt; Mg²⁺.</li>
          </ol>
        </Callout>
      </Shell>

      <Shell>
        <H2 id="ec2-revision">12 · One-Page Revision Capsule</H2>
        <Grid>
          <MiniCard title="Rules" accent={C.cyan}>
            Aufbau gives the lowest-total-energy arrangement; (n + ℓ) is a guide. Pauli allows two opposite-spin electrons per orbital. Hund fills degenerate orbitals singly with parallel spins before pairing. Capacities: s², p⁶, d¹⁰, f¹⁴.
          </MiniCard>
          <MiniCard title="Ions" accent={C.green}>
            Cation electrons = Z − q; anion electrons = Z + q. Remove from the highest n first. In transition metals, remove ns before (n − 1)d.
          </MiniCard>
          <MiniCard title="Magnetism" accent={C.gold}>
            Unpaired electron present ⇒ paramagnetic. All electrons paired ⇒ diamagnetic. μso = √[n(n + 2)] BM, subject to the stated limitations.
          </MiniCard>
          <MiniCard title="Direct recall" accent={C.violet}>
            Cr: 3d⁵4s¹; Cu: 3d¹⁰4s¹; Mo: 4d⁵5s¹; Pd: 4d¹⁰5s⁰; Pt: 5d⁹6s¹; Au: 5d¹⁰6s¹; Ce: 4f¹5d¹6s².
          </MiniCard>
        </Grid>
        <Callout title="Final exam-safe principle" accent={C.gold}>
          Use simple filling rules for ordinary configurations, but use accepted reference configurations for close-energy d- and f-block ground states. A half-filled or filled subshell is a valuable clue, not a universal command.
        </Callout>
      </Shell>
    </div>
  );
}
