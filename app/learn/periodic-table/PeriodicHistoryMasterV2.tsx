"use client";

import type { CSSProperties, ReactNode } from "react";
import PeriodicityHistoryVisualsV4 from "./PeriodicityHistoryVisualsV4";
import PeriodicityNCERTHistoryFigures from "./PeriodicityNCERTHistoryFigures";

const P = {
  ink: "#eef7ff",
  muted: "#afc4d5",
  page: "#06131f",
  panel: "#0b2234",
  panel2: "#112f49",
  panel3: "#173b55",
  line: "#2a526e",
  gold: "#ffc857",
  cyan: "#45d7ff",
  coral: "#ff7d73",
  mint: "#6ce5b1",
  violet: "#c5a3ff",
  pink: "#ff8fd4",
  lime: "#b8f25a",
  blue: "#75a7ff",
};

function Sup({ children }: { children: ReactNode }) {
  return <sup style={{ fontSize: "0.7em", lineHeight: 0 }}>{children}</sup>;
}

function Sub({ children }: { children: ReactNode }) {
  return <sub style={{ fontSize: "0.7em", lineHeight: 0 }}>{children}</sub>;
}

function Formula({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <span aria-label={label} style={styles.formula}>
      {children}
    </span>
  );
}

function DisplayFormula({ children }: { children: ReactNode }) {
  return <div style={styles.displayFormula}>{children}</div>;
}

function SectionTitle({ number, children }: { number: number; children: ReactNode }) {
  return (
    <h2 id={`history-section-${number}`} style={styles.sectionTitle}>
      <span style={styles.sectionNumber}>{number}</span>
      <span>{children}</span>
    </h2>
  );
}

function SubTitle({ children, color = P.cyan }: { children: ReactNode; color?: string }) {
  return <h3 style={{ ...styles.subTitle, color }}>{children}</h3>;
}

function MicroTitle({ children }: { children: ReactNode }) {
  return <h4 style={styles.microTitle}>{children}</h4>;
}

function Callout({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: ReactNode;
  tone?: "cyan" | "gold" | "coral" | "mint" | "violet" | "pink" | "lime";
}) {
  const accent =
    tone === "gold"
      ? P.gold
      : tone === "coral"
        ? P.coral
        : tone === "mint"
          ? P.mint
          : tone === "violet"
            ? P.violet
            : tone === "pink"
              ? P.pink
              : tone === "lime"
                ? P.lime
                : P.cyan;

  return (
    <aside style={{ ...styles.callout, borderLeftColor: accent }}>
      <strong style={{ ...styles.calloutTitle, color: accent }}>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

function DataTable({
  headers,
  rows,
  caption,
  minWidth = 760,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
  caption?: string;
  minWidth?: number;
}) {
  return (
    <div style={styles.tableWrap}>
      <table style={{ ...styles.table, minWidth }}>
        {caption ? <caption style={styles.caption}>{caption}</caption> : null}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={styles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={styles.td}>
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

function WorkedProblem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={styles.problem}>
      <h4 style={styles.problemTitle}>{title}</h4>
      <div>{children}</div>
    </section>
  );
}

function FigureShell({
  title,
  description,
  caption,
  children,
}: {
  title: string;
  description: string;
  caption: string;
  children: ReactNode;
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return (
    <figure style={styles.figure}>
      <svg viewBox="0 0 960 430" role="img" aria-labelledby={`${id}-title ${id}-desc`} style={styles.svg}>
        <title id={`${id}-title`}>{title}</title>
        <desc id={`${id}-desc`}>{description}</desc>
        {children}
      </svg>
      <figcaption style={styles.figcaption}>{caption}</figcaption>
    </figure>
  );
}

function EvolutionTimelineFigure() {
  const entries = [
    ["1789", "Lavoisier", P.coral],
    ["1815", "Prout", P.violet],
    ["1817–29", "Döbereiner", P.gold],
    ["1862", "de Chancourtois", P.pink],
    ["1864–66", "Newlands", P.cyan],
    ["1869", "Meyer", P.mint],
    ["1869–71", "Mendeleev", P.gold],
    ["1913", "Moseley", P.lime],
  ] as const;

  return (
    <FigureShell
      title="Evolution of periodic classification"
      description="A chronological path from broad empirical grouping to atomic-number classification."
      caption="Every stage solved one problem but exposed the next: description → recurrence → prediction → mechanism."
    >
      <defs>
        <linearGradient id="timelineGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={P.coral} />
          <stop offset="0.48" stopColor={P.cyan} />
          <stop offset="1" stopColor={P.lime} />
        </linearGradient>
      </defs>
      <path d="M80 210 H880" stroke="url(#timelineGlow)" strokeWidth="8" strokeLinecap="round" />
      {entries.map(([year, name, color], index) => {
        const x = 95 + index * 110;
        const above = index % 2 === 0;
        return (
          <g key={name}>
            <line x1={x} y1="210" x2={x} y2={above ? 125 : 295} stroke={color} strokeWidth="3" />
            <circle cx={x} cy="210" r="13" fill={color} stroke={P.page} strokeWidth="5" />
            <rect x={x - 52} y={above ? 60 : 300} width="104" height="64" rx="14" fill={P.panel2} stroke={color} strokeWidth="2" />
            <text x={x} y={above ? 83 : 323} textAnchor="middle" fill={color} fontSize="17" fontWeight="800">{year}</text>
            <text x={x} y={above ? 107 : 347} textAnchor="middle" fill={P.ink} fontSize="14" fontWeight="700">{name}</text>
          </g>
        );
      })}
      <text x="480" y="405" textAnchor="middle" fill={P.muted} fontSize="18">increasing explanatory power and predictive reach</text>
    </FigureShell>
  );
}

function ClassificationCompressionFigure() {
  return (
    <FigureShell
      title="Classification compresses chemical information"
      description="Many isolated element facts converge into families, periodic trends and predictions."
      caption="Classification does not erase individuality; it reveals the structural relationships behind it."
    >
      <defs>
        <radialGradient id="compressCore" cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor={P.cyan} stopOpacity="0.95" />
          <stop offset="1" stopColor={P.blue} stopOpacity="0.25" />
        </radialGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = 180 + Math.cos(angle) * 120;
        const y = 215 + Math.sin(angle) * 145;
        const colors = [P.gold, P.coral, P.mint, P.violet];
        return <circle key={i} cx={x} cy={y} r="18" fill={colors[i % colors.length]} opacity="0.9" />;
      })}
      <text x="180" y="215" textAnchor="middle" fill={P.ink} fontSize="24" fontWeight="800">isolated facts</text>
      <path d="M330 215 C405 215 430 215 500 215" stroke={P.cyan} strokeWidth="8" strokeLinecap="round" />
      <polygon points="500,215 475,198 475,232" fill={P.cyan} />
      <circle cx="650" cy="215" r="128" fill="url(#compressCore)" stroke={P.cyan} strokeWidth="3" />
      <text x="650" y="176" textAnchor="middle" fill={P.gold} fontSize="22" fontWeight="900">families</text>
      <text x="650" y="216" textAnchor="middle" fill={P.mint} fontSize="22" fontWeight="900">trends</text>
      <text x="650" y="256" textAnchor="middle" fill={P.pink} fontSize="22" fontWeight="900">predictions</text>
      <path d="M780 215 H890" stroke={P.lime} strokeWidth="8" strokeLinecap="round" />
      <polygon points="890,215 865,198 865,232" fill={P.lime} />
      <text x="835" y="170" textAnchor="middle" fill={P.lime} fontSize="18" fontWeight="800">unknown</text>
      <text x="835" y="195" textAnchor="middle" fill={P.lime} fontSize="18" fontWeight="800">behaviour</text>
      <text x="835" y="262" textAnchor="middle" fill={P.ink} fontSize="18" fontWeight="700">becomes</text>
      <text x="835" y="288" textAnchor="middle" fill={P.ink} fontSize="18" fontWeight="700">predictable</text>
    </FigureShell>
  );
}

function LavoisierTreeFigure() {
  return (
    <FigureShell
      title="Lavoisier's broad descriptive classification"
      description="Simple substances split into broad observable classes that were useful but not periodic."
      caption="The scheme began systematic comparison, but broad classes could not express recurring families or metalloids."
    >
      <rect x="330" y="35" width="300" height="68" rx="22" fill={P.panel3} stroke={P.gold} strokeWidth="3" />
      <text x="480" y="77" textAnchor="middle" fill={P.gold} fontSize="25" fontWeight="900">simple substances</text>
      <path d="M480 103 V150 M480 150 H180 M480 150 H780" stroke={P.muted} strokeWidth="3" />
      <path d="M180 150 V195 M780 150 V195" stroke={P.muted} strokeWidth="3" />
      <rect x="55" y="195" width="250" height="160" rx="22" fill={P.panel2} stroke={P.cyan} strokeWidth="3" />
      <rect x="655" y="195" width="250" height="160" rx="22" fill={P.panel2} stroke={P.coral} strokeWidth="3" />
      <text x="180" y="235" textAnchor="middle" fill={P.cyan} fontSize="27" fontWeight="900">metals</text>
      <text x="180" y="272" textAnchor="middle" fill={P.ink} fontSize="17">lustrous · conducting</text>
      <text x="180" y="302" textAnchor="middle" fill={P.ink} fontSize="17">malleable · basic oxides</text>
      <text x="780" y="235" textAnchor="middle" fill={P.coral} fontSize="27" fontWeight="900">non-metals</text>
      <text x="780" y="272" textAnchor="middle" fill={P.ink} fontSize="17">often dull · poor conductors</text>
      <text x="780" y="302" textAnchor="middle" fill={P.ink} fontSize="17">often acidic oxides</text>
      <rect x="365" y="245" width="230" height="95" rx="20" fill="#2b2032" stroke={P.violet} strokeWidth="3" strokeDasharray="8 7" />
      <text x="480" y="280" textAnchor="middle" fill={P.violet} fontSize="22" fontWeight="900">metalloids?</text>
      <text x="480" y="312" textAnchor="middle" fill={P.ink} fontSize="15">mixed behaviour had no clean home</text>
    </FigureShell>
  );
}

function NumberPatternFigure() {
  return (
    <FigureShell
      title="Prout and Pettenkofer searched for arithmetic order"
      description="Atomic weights were compared to hydrogen units and approximate multiples of eight."
      caption="The search shifted classification from appearance toward numerical relationships, but the patterns were not universal."
    >
      <rect x="55" y="60" width="380" height="310" rx="26" fill={P.panel2} stroke={P.violet} strokeWidth="3" />
      <text x="245" y="104" textAnchor="middle" fill={P.violet} fontSize="25" fontWeight="900">Prout</text>
      <text x="245" y="140" textAnchor="middle" fill={P.ink} fontSize="20">A ≈ n × A(H)</text>
      {[1, 2, 3, 4, 5].map((n) => <rect key={n} x={90 + (n - 1) * 60} y="185" width="42" height={n * 24} rx="8" fill={P.violet} opacity={0.28 + n * 0.12} />)}
      <text x="245" y="335" textAnchor="middle" fill={P.coral} fontSize="17" fontWeight="800">Cl ≈ 35.5 breaks exact integrality</text>
      <rect x="525" y="60" width="380" height="310" rx="26" fill={P.panel2} stroke={P.gold} strokeWidth="3" />
      <text x="715" y="104" textAnchor="middle" fill={P.gold} fontSize="25" fontWeight="900">Pettenkofer</text>
      <text x="715" y="140" textAnchor="middle" fill={P.ink} fontSize="20">ΔA ≈ m × 8</text>
      <circle cx="610" cy="230" r="34" fill={P.cyan} />
      <circle cx="715" cy="230" r="34" fill={P.mint} />
      <circle cx="820" cy="230" r="34" fill={P.coral} />
      <text x="610" y="237" textAnchor="middle" fill={P.page} fontSize="20" fontWeight="900">7</text>
      <text x="715" y="237" textAnchor="middle" fill={P.page} fontSize="20" fontWeight="900">23</text>
      <text x="820" y="237" textAnchor="middle" fill={P.page} fontSize="20" fontWeight="900">39</text>
      <path d="M648 230 H677 M753 230 H782" stroke={P.gold} strokeWidth="6" />
      <text x="663" y="207" textAnchor="middle" fill={P.gold} fontSize="16">+16</text>
      <text x="768" y="207" textAnchor="middle" fill={P.gold} fontSize="16">+16</text>
      <text x="715" y="325" textAnchor="middle" fill={P.muted} fontSize="17">suggestive, not a universal law</text>
    </FigureShell>
  );
}

function TriadBalanceFigure() {
  return (
    <FigureShell
      title="Döbereiner triad as an arithmetic balance"
      description="The middle atomic mass approximates the arithmetic mean of the first and third members."
      caption="Chemical resemblance is essential; arithmetic agreement alone does not establish a triad."
    >
      <line x1="480" y1="105" x2="480" y2="330" stroke={P.gold} strokeWidth="8" />
      <polygon points="480,80 455,118 505,118" fill={P.gold} />
      <path d="M205 195 H755" stroke={P.cyan} strokeWidth="8" strokeLinecap="round" />
      <path d="M260 195 L230 285 M700 195 L730 285" stroke={P.cyan} strokeWidth="4" />
      <ellipse cx="230" cy="300" rx="95" ry="26" fill={P.panel3} stroke={P.cyan} strokeWidth="3" />
      <ellipse cx="730" cy="300" rx="95" ry="26" fill={P.panel3} stroke={P.cyan} strokeWidth="3" />
      <circle cx="350" cy="195" r="50" fill={P.mint} />
      <circle cx="610" cy="195" r="50" fill={P.coral} />
      <circle cx="480" cy="195" r="58" fill={P.gold} />
      <text x="350" y="202" textAnchor="middle" fill={P.page} fontSize="26" fontWeight="900">x</text>
      <text x="480" y="202" textAnchor="middle" fill={P.page} fontSize="26" fontWeight="900">y</text>
      <text x="610" y="202" textAnchor="middle" fill={P.page} fontSize="26" fontWeight="900">z</text>
      <text x="480" y="382" textAnchor="middle" fill={P.ink} fontSize="27" fontWeight="800">y ≈ (x + z) / 2</text>
    </FigureShell>
  );
}

function TelluricScrewFigure() {
  const points = [
    ["Li", 0.2, P.cyan], ["Na", 1.2, P.cyan], ["K", 2.2, P.cyan],
    ["Be", 0.45, P.mint], ["Mg", 1.45, P.mint], ["Ca", 2.45, P.mint],
    ["F", 0.8, P.coral], ["Cl", 1.8, P.coral],
  ] as const;
  return (
    <FigureShell
      title="de Chancourtois' telluric screw"
      description="Elements arranged on a helical cylinder align related families approximately in vertical columns."
      caption="The helix made periodic recurrence visible in 1862, but the cylindrical presentation was difficult to compare and publish clearly."
    >
      <defs>
        <linearGradient id="cylinder" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0d2438" />
          <stop offset="0.5" stopColor="#234a66" />
          <stop offset="1" stopColor="#0d2438" />
        </linearGradient>
      </defs>
      <ellipse cx="480" cy="70" rx="205" ry="45" fill="#21465f" stroke={P.cyan} strokeWidth="3" />
      <rect x="275" y="70" width="410" height="290" fill="url(#cylinder)" stroke={P.cyan} strokeWidth="3" />
      <ellipse cx="480" cy="360" rx="205" ry="45" fill="#102c42" stroke={P.cyan} strokeWidth="3" />
      <path d="M290 105 C410 20 560 185 670 100 C780 15 520 285 290 190 C60 95 340 390 670 280 C790 240 560 420 300 320" fill="none" stroke={P.gold} strokeWidth="6" opacity="0.9" />
      {[360, 480, 600].map((x) => <line key={x} x1={x} y1="95" x2={x} y2="345" stroke={P.muted} strokeWidth="2" strokeDasharray="7 8" />)}
      {points.map(([label, t, color], index) => {
        const x = index < 3 ? 360 : index < 6 ? 480 : 600;
        const y = 115 + t * 92;
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="20" fill={color} stroke={P.page} strokeWidth="4" />
            <text x={x} y={y + 6} textAnchor="middle" fill={P.page} fontSize="14" fontWeight="900">{label}</text>
          </g>
        );
      })}
      <text x="480" y="412" textAnchor="middle" fill={P.muted} fontSize="17">vertical alignments suggest chemical families</text>
    </FigureShell>
  );
}

function NewlandsOctaveFigure() {
  const notes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti", "Do"];
  const elements = ["Li", "Be", "B", "C", "N", "O", "F", "Na"];
  return (
    <FigureShell
      title="Newlands' octave analogy"
      description="Eight ordered positions illustrate the recurrence of a chemically related element at the octave."
      caption="The analogy works strikingly for several light elements, but breaks when transition elements expand the recurrence interval."
    >
      <path d="M90 265 C210 130 330 330 450 190 C570 50 680 310 865 145" fill="none" stroke={P.violet} strokeWidth="7" strokeLinecap="round" />
      {notes.map((note, index) => {
        const x = 100 + index * 105;
        const y = 250 - Math.sin(index * 1.08) * 95;
        const accent = index === 0 || index === 7 ? P.gold : [P.cyan, P.mint, P.coral, P.pink][index % 4];
        return (
          <g key={`${note}-${index}`}>
            <circle cx={x} cy={y} r="38" fill={P.panel2} stroke={accent} strokeWidth="4" />
            <text x={x} y={y - 4} textAnchor="middle" fill={accent} fontSize="16" fontWeight="900">{note}</text>
            <text x={x} y={y + 20} textAnchor="middle" fill={P.ink} fontSize="18" fontWeight="900">{elements[index]}</text>
          </g>
        );
      })}
      <path d="M100 355 H835" stroke={P.muted} strokeWidth="3" strokeDasharray="10 10" />
      <text x="100" y="390" textAnchor="middle" fill={P.gold} fontSize="17" fontWeight="800">first note</text>
      <text x="835" y="390" textAnchor="middle" fill={P.gold} fontSize="17" fontWeight="800">octave recurrence</text>
    </FigureShell>
  );
}

function MeyerCurveFigure() {
  const data = [
    ["Li", 13.1], ["Be", 5.0], ["B", 4.6], ["C", 5.3], ["N", 17.3], ["O", 14.0], ["F", 17.1], ["Ne", 16.8],
    ["Na", 23.7], ["Mg", 14.0], ["Al", 10.0], ["Si", 12.1], ["P", 17.0], ["S", 15.5], ["Cl", 18.7], ["Ar", 22.4],
    ["K", 45.3], ["Ca", 29.9], ["Ga", 11.8], ["Ge", 13.6], ["As", 13.1], ["Se", 16.5], ["Br", 23.5], ["Kr", 27.1],
    ["Rb", 55.9], ["Sr", 33.7], ["In", 15.7], ["Sn", 16.3], ["Sb", 18.4], ["Te", 20.5], ["I", 25.7], ["Xe", 37.3],
    ["Cs", 70.0], ["Ba", 39.0],
  ] as const;

  const width = 980;
  const height = 430;
  const left = 66;
  const right = 24;
  const top = 36;
  const bottom = 54;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const vmax = 75;

  const pts = data.map(([symbol, value], i) => {
    const x = left + (i / (data.length - 1)) * plotW;
    const y = top + (1 - value / vmax) * plotH;
    return { symbol, value, x, y };
  });

  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");

  const labels = new Set(["Li","Na","K","Rb","Cs","Be","Mg","Ca","Sr","Ba","Ne","Ar","Kr","Xe"]);

  return (
    <figure style={{ margin: "16px 0 22px" }}>
      <div style={{ color: P.ink, fontWeight: 800, fontSize: "1.04rem", marginBottom: 6 }}>
        Lothar Meyer’s atomic-volume curve
      </div>
      <div style={{ color: P.muted, lineHeight: 1.62, marginBottom: 10 }}>
        Original SVG reconstruction for the chapter: peaks occur near alkali metals, while minima occur in the middle of long periods. The repeating wave pattern supported the idea of periodic recurrence.
      </div>

      <div style={{ overflowX: "auto", border: `1px solid ${P.line}`, borderRadius: 16, background: "linear-gradient(180deg, #10263a, #0a1a29)", padding: 10 }}>
        <svg
          role="img"
          aria-labelledby="meyer-title meyer-desc"
          viewBox={`0 0 ${width} ${height}`}
          style={{ display: "block", width: "100%", minWidth: 820, height: "auto" }}
        >
          <title id="meyer-title">Lothar Meyer curve of atomic volume versus increasing relative atomic mass</title>
          <desc id="meyer-desc">
            A repeating line graph of atomic volume showing high peaks for alkali metals such as sodium, potassium, rubidium and caesium, and lower values through the middle of each period.
          </desc>

          <defs>
            <linearGradient id="meyerLineV2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={P.gold} />
              <stop offset="55%" stopColor={P.cyan} />
              <stop offset="100%" stopColor={P.violet} />
            </linearGradient>
          </defs>

          {[0,15,30,45,60,75].map((v) => {
            const y = top + (1 - v / vmax) * plotH;
            return (
              <g key={v}>
                <line x1={left} y1={y} x2={width - right} y2={y} stroke={P.line} strokeDasharray="5 5" />
                <text x={left - 10} y={y + 5} textAnchor="end" fill={P.muted} fontSize="14">{v}</text>
              </g>
            );
          })}

          <line x1={left} y1={height - bottom} x2={width - right} y2={height - bottom} stroke={P.ink} strokeWidth="2.2" />
          <line x1={left} y1={height - bottom} x2={left} y2={top} stroke={P.ink} strokeWidth="2.2" />

          <path d={path} fill="none" stroke="url(#meyerLineV2)" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />

          {pts.map((p) => (
            <g key={p.symbol}>
              <circle cx={p.x} cy={p.y} r="4.5" fill={P.gold} stroke={P.page} strokeWidth="1.5" />
              {labels.has(p.symbol) ? (
                <text x={p.x} y={p.y - 10} textAnchor="middle" fill={P.ink} fontSize="15" fontWeight="700">
                  {p.symbol}
                </text>
              ) : null}
            </g>
          ))}

          <text x={(left + width - right) / 2} y={height - 14} textAnchor="middle" fill={P.ink} fontSize="15" fontWeight="700">
            Increasing relative atomic mass / progression through known elements
          </text>

          <text
            x="18"
            y={(top + height - bottom) / 2}
            transform={`rotate(-90 18 ${(top + height - bottom) / 2})`}
            textAnchor="middle"
            fill={P.ink}
            fontSize="15"
            fontWeight="700"
          >
            Atomic volume (relative units)
          </text>
        </svg>
      </div>

      <figcaption style={{ color: P.muted, fontSize: ".95rem", lineHeight: 1.6, marginTop: 10 }}>
        The important lesson is the repeating wave pattern, not the memorisation of every plotted point. Meyer’s graph strengthened the idea that properties recur periodically.
      </figcaption>
    </figure>
  );
}



function MendeleevArchitectureFigure() {
  const groups = ["0","I","II","III","IV","V","VI","VII","VIII"];
  const rows = [
    ["He","H","-","-","-","-","-","F","-"],
    ["Ne","Li","Be","B","C","N","O","Cl","-"],
    ["Ar","Na","Mg","Al","Si","P","S","Br","Fe Co Ni"],
    ["Kr","K","Ca","Sc","Ti","V","Cr","Mn","Cu Zn"],
    ["Xe","Rb","Sr","Y","Zr","Nb","Mo","I","Ru Rh Pd"],
    ["-","Cs","Ba","La","Ce","-","-","-","-"],
    ["-","Au","Hg","Tl","Pb","Bi","Po","-","Pt Ir Os"],
  ];

  return (
    <figure style={{ margin: "16px 0 24px" }}>
      <div style={{ color: P.ink, fontWeight: 800, fontSize: "1.04rem", marginBottom: 6 }}>
        Mendeleev periodic table — school-friendly reconstruction
      </div>
      <div style={{ color: P.muted, lineHeight: 1.62, marginBottom: 10 }}>
        This original reconstruction keeps the spirit of the classical grouped table: vertical families, series-based rows and clear emphasis on chemical similarity, valency, and oxide–hydride relationships.
      </div>

      <div style={{ overflowX: "auto", border: `1px solid ${P.line}`, borderRadius: 16, background: "linear-gradient(180deg, #11283b, #0b1d2c)", padding: 12 }}>
        <svg
          role="img"
          aria-labelledby="mendeleev-title mendeleev-desc"
          viewBox="0 0 1120 560"
          style={{ display: "block", width: "100%", minWidth: 900, height: "auto" }}
        >
          <title id="mendeleev-title">Reconstructed Mendeleev periodic table arranged in groups and series</title>
          <desc id="mendeleev-desc">
            A schematic classical periodic table with groups 0 to VIII, series down the left side, representative elements in each cell, and a concluding row showing typical higher oxides and hydrides.
          </desc>

          <text x="560" y="34" textAnchor="middle" fill={P.ink} fontSize="28" fontWeight="800">
            Periodic system of the elements in groups and series
          </text>

          <rect x="20" y="70" width="90" height="52" fill="#cfd7e6" opacity="0.92" stroke={P.line} />
          <text x="65" y="102" textAnchor="middle" fill="#172531" fontSize="18" fontWeight="800">Series</text>

          <rect x="110" y="70" width="990" height="26" fill="#d8deef" opacity="0.92" stroke={P.line} />
          <text x="605" y="88" textAnchor="middle" fill="#172531" fontSize="18" fontWeight="800">Groups of elements</text>

          {groups.map((g, i) => {
            const x = 110 + i * 110;
            return (
              <g key={g}>
                <rect x={x} y={96} width="110" height="26" fill="#cfd7e6" opacity="0.92" stroke={P.line} />
                <text x={x + 55} y={114} textAnchor="middle" fill="#172531" fontSize="17" fontWeight="800">{g}</text>
              </g>
            );
          })}

          {rows.map((row, r) => {
            const y = 122 + r * 60;
            return (
              <g key={r}>
                <rect x="20" y={y} width="90" height="60" fill="#d7e4c2" opacity="0.95" stroke={P.line} />
                <text x="65" y={y + 36} textAnchor="middle" fill="#172531" fontSize="18" fontWeight="800">{r + 1}</text>

                {row.map((cell, c) => {
                  const x = 110 + c * 110;
                  const fill = c % 2 === 0 ? "#ead7e8" : "#d9e8ca";
                  return (
                    <g key={`${r}-${c}`}>
                      <rect x={x} y={y} width="110" height="60" fill={fill} opacity="0.95" stroke={P.line} />
                      <text
                        x={x + 55}
                        y={y + 34}
                        textAnchor="middle"
                        fill="#1e2a36"
                        fontSize={cell.length > 8 ? "13" : "16"}
                        fontWeight="700"
                      >
                        {cell}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          <rect x="20" y="482" width="1080" height="50" fill="#d8e4c0" opacity="0.95" stroke={P.line} />
          <text x="560" y="506" textAnchor="middle" fill="#172531" fontSize="18" fontWeight="800">
            Higher saline oxides and gaseous hydrogen compounds
          </text>
          <text x="165" y="525" textAnchor="middle" fill="#172531" fontSize="16">R₂O</text>
          <text x="275" y="525" textAnchor="middle" fill="#172531" fontSize="16">RO</text>
          <text x="385" y="525" textAnchor="middle" fill="#172531" fontSize="16">R₂O₃</text>
          <text x="495" y="525" textAnchor="middle" fill="#172531" fontSize="16">RO₂</text>
          <text x="605" y="525" textAnchor="middle" fill="#172531" fontSize="16">R₂O₅</text>
          <text x="715" y="525" textAnchor="middle" fill="#172531" fontSize="16">RO₃</text>
          <text x="825" y="525" textAnchor="middle" fill="#172531" fontSize="16">R₂O₇</text>
          <text x="935" y="525" textAnchor="middle" fill="#172531" fontSize="16">RO₄</text>
        </svg>
      </div>

      <figcaption style={{ color: P.muted, fontSize: ".95rem", lineHeight: 1.6, marginTop: 10 }}>
        This is a teaching reconstruction rather than a museum facsimile. The key idea is that Mendeleev prioritised family resemblance and predictive power over rigid mass order.
      </figcaption>
    </figure>
  );
}



function PredictionMatchFigure() {
  const pairs = [
    ["eka-Al", "Ga", "1875", P.gold],
    ["eka-B", "Sc", "1879", P.mint],
    ["eka-Si", "Ge", "1886", P.cyan],
  ] as const;
  return (
    <FigureShell
      title="Prediction became experimental confirmation"
      description="Mendeleev's three classic eka-element predictions connect to gallium, scandium and germanium."
      caption="Agreement in valency, oxide formulae, density and atomic mass converted the periodic table from a catalogue into a predictive theory."
    >
      {pairs.map(([predicted, found, year, color], index) => {
        const y = 95 + index * 115;
        return (
          <g key={predicted}>
            <rect x="75" y={y} width="230" height="72" rx="20" fill={P.panel2} stroke={color} strokeWidth="3" />
            <text x="190" y={y + 44} textAnchor="middle" fill={color} fontSize="26" fontWeight="900">{predicted}</text>
            <path d={`M325 ${y + 36} H615`} stroke={color} strokeWidth="7" strokeLinecap="round" />
            <polygon points={`${615},${y + 36} ${586},${y + 18} ${586},${y + 54}`} fill={color} />
            <circle cx="475" cy={y + 36} r="28" fill={color} />
            <text x="475" y={y + 43} textAnchor="middle" fill={P.page} fontSize="16" fontWeight="900">{year}</text>
            <rect x="645" y={y} width="230" height="72" rx="20" fill={P.panel3} stroke={color} strokeWidth="3" />
            <text x="760" y={y + 44} textAnchor="middle" fill={P.ink} fontSize="28" fontWeight="900">{found}</text>
          </g>
        );
      })}
    </FigureShell>
  );
}

function AnomalousPairsFigure() {
  const pairs = [
    ["Ar 39.95", "K 39.10", "18 < 19"],
    ["Co 58.93", "Ni 58.69", "27 < 28"],
    ["Te 127.60", "I 126.90", "52 < 53"],
    ["Th 232.04", "Pa 231.04", "90 < 91"],
  ];
  return (
    <FigureShell
      title="Atomic-number order resolves anomalous mass pairs"
      description="Pairs that violate increasing atomic mass fall into the correct chemical sequence when ordered by atomic number."
      caption="Mendeleev preserved chemical similarity by reversing some mass pairs; Moseley later supplied the correct quantitative basis."
    >
      <text x="220" y="55" textAnchor="middle" fill={P.coral} fontSize="21" fontWeight="900">mass order appears reversed</text>
      <text x="740" y="55" textAnchor="middle" fill={P.lime} fontSize="21" fontWeight="900">atomic-number order is exact</text>
      {pairs.map(([left, right, z], index) => {
        const y = 100 + index * 76;
        return (
          <g key={left}>
            <rect x="55" y={y} width="360" height="52" rx="14" fill={P.panel2} stroke={P.coral} strokeWidth="2" />
            <text x="235" y={y + 33} textAnchor="middle" fill={P.ink} fontSize="18" fontWeight="800">{left} before {right}</text>
            <path d={`M435 ${y + 26} H535`} stroke={P.gold} strokeWidth="5" />
            <polygon points={`${535},${y + 26} ${512},${y + 12} ${512},${y + 40}`} fill={P.gold} />
            <rect x="555" y={y} width="350" height="52" rx="14" fill={P.panel2} stroke={P.lime} strokeWidth="2" />
            <text x="730" y={y + 33} textAnchor="middle" fill={P.lime} fontSize="19" fontWeight="900">Z: {z}</text>
          </g>
        );
      })}
    </FigureShell>
  );
}

function MoseleyApparatusFigure() {
  return (
    <FigureShell
      title="Moseley's characteristic X-ray experiment"
      description="High-energy electrons strike a metal target; characteristic X-rays are analysed by crystal diffraction and a detector."
      caption="Changing the target element changes the characteristic X-ray frequency in a systematic atomic-number sequence."
    >
      <rect x="60" y="170" width="170" height="90" rx="20" fill={P.panel3} stroke={P.cyan} strokeWidth="3" />
      <text x="145" y="205" textAnchor="middle" fill={P.cyan} fontSize="18" fontWeight="900">electron gun</text>
      <text x="145" y="235" textAnchor="middle" fill={P.ink} fontSize="15">accelerated e⁻ beam</text>
      <path d="M230 215 H370" stroke={P.cyan} strokeWidth="8" strokeLinecap="round" />
      {[265, 300, 335].map((x) => <polygon key={x} points={`${x},215 ${x - 20},203 ${x - 20},227`} fill={P.cyan} />)}
      <rect x="370" y="135" width="110" height="160" rx="14" fill="#4a2c31" stroke={P.coral} strokeWidth="4" transform="rotate(12 425 215)" />
      <text x="425" y="218" textAnchor="middle" fill={P.coral} fontSize="18" fontWeight="900" transform="rotate(12 425 215)">metal target</text>
      {[0, 1, 2, 3, 4].map((i) => <line key={i} x1="470" y1="190" x2={570 + i * 18} y2={95 + i * 35} stroke={i % 2 ? P.gold : P.violet} strokeWidth="5" />)}
      <polygon points="610,105 700,185 610,265" fill={P.panel3} stroke={P.gold} strokeWidth="4" />
      <text x="640" y="192" textAnchor="middle" fill={P.gold} fontSize="16" fontWeight="900">crystal</text>
      <path d="M700 185 C760 160 790 125 830 95" stroke={P.gold} strokeWidth="6" fill="none" />
      <path d="M700 185 C770 205 800 245 840 280" stroke={P.violet} strokeWidth="6" fill="none" />
      <rect x="800" y="55" width="110" height="70" rx="16" fill={P.panel2} stroke={P.gold} strokeWidth="3" />
      <rect x="810" y="265" width="110" height="70" rx="16" fill={P.panel2} stroke={P.violet} strokeWidth="3" />
      <text x="855" y="96" textAnchor="middle" fill={P.gold} fontSize="17" fontWeight="900">detector</text>
      <text x="865" y="307" textAnchor="middle" fill={P.violet} fontSize="17" fontWeight="900">detector</text>
      <text x="480" y="385" textAnchor="middle" fill={P.muted} fontSize="18">characteristic lines reveal nuclear charge more cleanly than atomic mass</text>
    </FigureShell>
  );
}

function MoseleyGraphFigure() {
  return (
    <FigureShell
      title="Moseley's law"
      description="Square root of characteristic X-ray frequency varies linearly with atomic number minus a screening constant."
      caption="The linearity of √ν versus Z established atomic number as the fundamental ordering variable."
    >
      <line x1="95" y1="345" x2="875" y2="345" stroke={P.muted} strokeWidth="2" />
      <line x1="95" y1="55" x2="95" y2="345" stroke={P.muted} strokeWidth="2" />
      <line x1="135" y1="310" x2="815" y2="80" stroke={P.gold} strokeWidth="7" strokeLinecap="round" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        const x = 145 + i * 62;
        const y = 307 - i * 21;
        return <circle key={i} cx={x} cy={y} r="9" fill={i % 2 ? P.cyan : P.mint} stroke={P.page} strokeWidth="3" />;
      })}
      <text x="555" y="80" fill={P.gold} fontSize="31" fontWeight="900">√ν = a(Z − b)</text>
      <text x="430" y="405" fill={P.muted} fontSize="19">atomic number, Z</text>
      <text x="36" y="235" fill={P.muted} fontSize="19" transform="rotate(-90 36 235)">√ν</text>
    </FigureShell>
  );
}

function PeriodicityMechanismFigure() {
  const nodes = [
    ["Z increases", P.gold],
    ["nuclear charge", P.coral],
    ["orbital filling", P.cyan],
    ["valence pattern", P.violet],
    ["chemical behaviour", P.mint],
  ] as const;
  return (
    <FigureShell
      title="Microscopic cause of periodicity"
      description="Atomic number controls nuclear charge, electron filling, valence configuration and therefore chemical behaviour."
      caption="Periodicity is not merely a repeated table pattern; it is the macroscopic expression of recurring valence-shell structures."
    >
      {nodes.map(([label, color], index) => {
        const x = 45 + index * 183;
        return (
          <g key={label}>
            <rect x={x} y="150" width="155" height="105" rx="24" fill={P.panel2} stroke={color} strokeWidth="4" />
            <text x={x + 77.5} y="194" textAnchor="middle" fill={color} fontSize="18" fontWeight="900">{label.split(" ")[0]}</text>
            <text x={x + 77.5} y="221" textAnchor="middle" fill={P.ink} fontSize="16" fontWeight="700">{label.split(" ").slice(1).join(" ")}</text>
            {index < nodes.length - 1 ? (
              <>
                <line x1={x + 155} y1="202" x2={x + 178} y2="202" stroke={P.gold} strokeWidth="6" />
                <polygon points={`${x + 178},202 ${x + 161},190 ${x + 161},214`} fill={P.gold} />
              </>
            ) : null}
          </g>
        );
      })}
      <path d="M775 285 C775 370 180 370 180 285" stroke={P.pink} strokeWidth="4" fill="none" strokeDasharray="9 8" />
      <polygon points="180,285 168,307 192,307" fill={P.pink} />
      <text x="480" y="397" textAnchor="middle" fill={P.pink} fontSize="18" fontWeight="900">recurrence of outer configurations produces periodic families</text>
    </FigureShell>
  );
}

function ValenceRibbonFigure() {
  const families = [
    ["Group 1", "ns¹", "+1", P.gold],
    ["Group 2", "ns²", "+2", P.mint],
    ["Group 13", "ns²np¹", "+3", P.violet],
    ["Group 14", "ns²np²", "±4", P.cyan],
    ["Group 15", "ns²np³", "−3 to +5", P.pink],
    ["Group 16", "ns²np⁴", "−2 to +6", P.coral],
    ["Group 17", "ns²np⁵", "−1", P.lime],
    ["Group 18", "ns²np⁶", "closed shell", P.blue],
  ] as const;
  return (
    <FigureShell
      title="Recurring valence-configuration ribbon"
      description="Representative groups are arranged by their general outer electronic configuration and characteristic valency."
      caption="The same valence pattern reappears in successive periods, giving a vertical group its family resemblance."
    >
      {families.map(([group, config, valency, color], index) => {
        const col = index % 4;
        const row = Math.floor(index / 4);
        const x = 45 + col * 225;
        const y = 70 + row * 175;
        return (
          <g key={group}>
            <rect x={x} y={y} width="190" height="135" rx="22" fill={P.panel2} stroke={color} strokeWidth="3" />
            <text x={x + 95} y={y + 34} textAnchor="middle" fill={color} fontSize="19" fontWeight="900">{group}</text>
            <text x={x + 95} y={y + 76} textAnchor="middle" fill={P.ink} fontSize="27" fontWeight="900">{config}</text>
            <text x={x + 95} y={y + 111} textAnchor="middle" fill={P.muted} fontSize="15">typical: {valency}</text>
          </g>
        );
      })}
    </FigureShell>
  );
}

function LongFormBlockMapFigure() {
  const legend = {
    metal: "#8fc7ff",
    metalloid: "#f3b37a",
    nonmetal: "#bfe8a7",
    noble: "#f3a7c3",
    lanth: "#ecd3bf",
    act: "#d9b2d4",
  } as const;

  const noble = new Set(["He","Ne","Ar","Kr","Xe","Rn","Og"]);
  const metalloids = new Set(["B","Si","Ge","As","Sb","Te","Po"]);
  const nonmetals = new Set(["H","C","N","O","F","P","S","Se","Cl","Br","I","At","Ts"]);
  const lanth = new Set(["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"]);
  const act = new Set(["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]);

  const periods = [
    ["H","","","","","","","","","","","","","","","","","He"],
    ["Li","Be","","","","","","","","","","","B","C","N","O","F","Ne"],
    ["Na","Mg","","","","","","","","","","","Al","Si","P","S","Cl","Ar"],
    ["K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr"],
    ["Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe"],
    ["Cs","Ba","La","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn"],
    ["Fr","Ra","Ac","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"],
  ];

  const lanthRow = ["Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
  const actRow = ["Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];

  const colorOf = (s: string) =>
    noble.has(s) ? legend.noble :
    lanth.has(s) ? legend.lanth :
    act.has(s) ? legend.act :
    metalloids.has(s) ? legend.metalloid :
    nonmetals.has(s) ? legend.nonmetal :
    legend.metal;

  return (
    <figure style={{ margin: "16px 0 24px" }}>
      <div style={{ color: P.ink, fontWeight: 800, fontSize: "1.04rem", marginBottom: 6 }}>
        Modern periodic table with category colouring
      </div>
      <div style={{ color: P.muted, lineHeight: 1.62, marginBottom: 10 }}>
        The long form below keeps the modern 18-group layout but now uses clear colours for <strong style={{ color: P.ink }}>metals</strong>, <strong style={{ color: P.ink }}>metalloids</strong>, <strong style={{ color: P.ink }}>non-metals</strong>, <strong style={{ color: P.ink }}>noble gases</strong>, <strong style={{ color: P.ink }}>lanthanoids</strong> and <strong style={{ color: P.ink }}>actinoids</strong>.
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
        {[
          ["Metal", legend.metal],
          ["Metalloid", legend.metalloid],
          ["Non-metal", legend.nonmetal],
          ["Noble gas", legend.noble],
          ["Lanthanoid", legend.lanth],
          ["Actinoid", legend.act],
        ].map(([label, color]) => (
          <span
            key={label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 10px",
              borderRadius: 999,
              background: "#10283b",
              border: `1px solid ${P.line}`,
              color: P.ink,
              fontSize: ".92rem",
              fontWeight: 700,
            }}
          >
            <span style={{ width: 16, height: 16, borderRadius: 4, background: color as string, border: "1px solid #445a69" }} />
            {label}
          </span>
        ))}
      </div>

      <div style={{ overflowX: "auto", border: `1px solid ${P.line}`, borderRadius: 16, background: "linear-gradient(180deg, #101f30, #0a1623)", padding: 12 }}>
        <svg
          role="img"
          aria-labelledby="modern-table-title modern-table-desc"
          viewBox="0 0 1120 660"
          style={{ display: "block", width: "100%", minWidth: 980, height: "auto" }}
        >
          <title id="modern-table-title">Modern long-form periodic table coloured by broad element categories</title>
          <desc id="modern-table-desc">
            A modern periodic table with categories indicated by colour: metals, metalloids, non-metals, noble gases, lanthanoids and actinoids.
          </desc>

          {Array.from({ length: 18 }, (_, i) => (
            <text key={`g-${i+1}`} x={70 + i * 56} y="24" textAnchor="middle" fill={P.ink} fontSize="16" fontWeight="800">
              {i + 1}
            </text>
          ))}

          {periods.map((row, r) =>
            row.map((symbol, c) => {
              if (!symbol) return null;
              const x = 42 + c * 56;
              const y = 42 + r * 58;
              return (
                <g key={`${r}-${c}-${symbol}`}>
                  <rect x={x} y={y} width="52" height="52" rx="8" fill={colorOf(symbol)} stroke="#4b6070" />
                  <text x={x + 26} y={y + 31} textAnchor="middle" fill="#1e2a36" fontSize="21" fontWeight="800">{symbol}</text>
                </g>
              );
            }),
          )}

          <text x="24" y="74" fill={P.ink} fontSize="16" fontWeight="800">1</text>
          <text x="24" y="132" fill={P.ink} fontSize="16" fontWeight="800">2</text>
          <text x="24" y="190" fill={P.ink} fontSize="16" fontWeight="800">3</text>
          <text x="24" y="248" fill={P.ink} fontSize="16" fontWeight="800">4</text>
          <text x="24" y="306" fill={P.ink} fontSize="16" fontWeight="800">5</text>
          <text x="24" y="364" fill={P.ink} fontSize="16" fontWeight="800">6</text>
          <text x="24" y="422" fill={P.ink} fontSize="16" fontWeight="800">7</text>

          <text x="140" y="500" fill={P.ink} fontSize="18" fontWeight="800">Lanthanoids</text>
          {lanthRow.map((symbol, i) => {
            const x = 300 + i * 56;
            const y = 468;
            return (
              <g key={`lanth-${symbol}`}>
                <rect x={x} y={y} width="52" height="52" rx="8" fill={legend.lanth} stroke="#4b6070" />
                <text x={x + 26} y={y + 31} textAnchor="middle" fill="#1e2a36" fontSize="20" fontWeight="800">{symbol}</text>
              </g>
            );
          })}

          <text x="152" y="558" fill={P.ink} fontSize="18" fontWeight="800">Actinoids</text>
          {actRow.map((symbol, i) => {
            const x = 300 + i * 56;
            const y = 526;
            return (
              <g key={`act-${symbol}`}>
                <rect x={x} y={y} width="52" height="52" rx="8" fill={legend.act} stroke="#4b6070" />
                <text x={x + 26} y={y + 31} textAnchor="middle" fill="#1e2a36" fontSize="20" fontWeight="800">{symbol}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption style={{ color: P.muted, fontSize: ".95rem", lineHeight: 1.6, marginTop: 10 }}>
        This colour scheme is pedagogical: the purpose is to help students visually separate metals, metalloids and non-metals while still recognising the special positions of noble gases and the f-block series.
      </figcaption>
    </figure>
  );
}



function PeriodLengthFigure() {
  const lengths = [2, 8, 8, 18, 18, 32, 32];
  const colors = [P.gold, P.cyan, P.cyan, P.mint, P.mint, P.violet, P.violet];
  return (
    <FigureShell
      title="Actual period lengths versus shell capacity"
      description="Seven bars show period lengths 2, 8, 8, 18, 18, 32 and 32, while a separate curve represents the 2n squared shell-capacity ceiling."
      caption="The rule 2n² gives the maximum capacity of one shell; actual period length follows the subshells filled between consecutive noble gases."
    >
      <line x1="75" y1="350" x2="895" y2="350" stroke={P.muted} strokeWidth="2" />
      {lengths.map((length, index) => {
        const x = 105 + index * 112;
        const height = length * 8;
        return (
          <g key={index}>
            <rect x={x} y={350 - height} width="68" height={height} rx="12" fill={colors[index]} opacity="0.75" />
            <text x={x + 34} y={335 - height} textAnchor="middle" fill={colors[index]} fontSize="19" fontWeight="900">{length}</text>
            <text x={x + 34} y="383" textAnchor="middle" fill={P.ink} fontSize="16" fontWeight="800">P{index + 1}</text>
          </g>
        );
      })}
      <path d="M139 330 C240 275 330 220 420 170 C520 115 630 80 820 50" fill="none" stroke={P.coral} strokeWidth="4" strokeDasharray="10 8" />
      <text x="770" y="42" fill={P.coral} fontSize="18" fontWeight="900">2n² capacity ceiling</text>
    </FigureShell>
  );
}

function GroupMapFigure() {
  const old = ["IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIII", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "0"];
  const modern = ["1", "2", "3", "4", "5", "6", "7", "8–10", "11", "12", "13", "14", "15", "16", "17", "18"];
  return (
    <FigureShell
      title="Old A/B notation mapped to IUPAC groups"
      description="Sixteen historical labels map to eighteen modern groups because old group VIII covered three columns."
      caption="The 1–18 IUPAC numbering removes regional ambiguity between competing A/B conventions."
    >
      {old.map((label, index) => {
        const x = 30 + index * 57;
        const color = index < 2 ? P.blue : index < 10 ? P.mint : P.coral;
        return (
          <g key={label}>
            <rect x={x} y="75" width="48" height="85" rx="12" fill={P.panel2} stroke={color} strokeWidth="2" />
            <text x={x + 24} y="126" textAnchor="middle" fill={color} fontSize="14" fontWeight="900">{label}</text>
            <line x1={x + 24} y1="160" x2={x + 24} y2="250" stroke={P.gold} strokeWidth="2" />
            <polygon points={`${x + 24},250 ${x + 15},236 ${x + 33},236`} fill={P.gold} />
            <rect x={x} y="252" width="48" height="85" rx="12" fill={color} opacity="0.28" stroke={color} strokeWidth="2" />
            <text x={x + 24} y="303" textAnchor="middle" fill={P.ink} fontSize="14" fontWeight="900">{modern[index]}</text>
          </g>
        );
      })}
      <text x="480" y="395" textAnchor="middle" fill={P.muted} fontSize="17">old group VIII → modern groups 8, 9 and 10</text>
    </FigureShell>
  );
}

function SpecialPositionsFigure() {
  const items = [
    ["H", "1s¹", "group 1 and 17 analogies", P.gold],
    ["He", "1s²", "s-block configuration, group 18 chemistry", P.cyan],
    ["Zn Cd Hg", "d¹⁰ns²", "d-block position, atypical transition behaviour", P.mint],
    ["La/Lu", "group 3", "boundary convention", P.violet],
    ["Ac/Lr", "group 3", "actinoid boundary convention", P.pink],
  ] as const;
  return (
    <FigureShell
      title="Special positions require electronic and chemical judgement"
      description="Five cards show hydrogen, helium, group twelve and group three boundary cases."
      caption="The modern table is structurally powerful, but a few placements encode conventions or competing chemical criteria."
    >
      {items.map(([symbol, config, note, color], index) => {
        const x = 40 + (index % 3) * 300;
        const y = 45 + Math.floor(index / 3) * 180;
        return (
          <g key={symbol}>
            <rect x={x} y={y} width="270" height="145" rx="22" fill={P.panel2} stroke={color} strokeWidth="3" />
            <text x={x + 135} y={y + 42} textAnchor="middle" fill={color} fontSize="25" fontWeight="900">{symbol}</text>
            <text x={x + 135} y={y + 78} textAnchor="middle" fill={P.ink} fontSize="20" fontWeight="800">{config}</text>
            <text x={x + 135} y={y + 108} textAnchor="middle" fill={P.muted} fontSize="14">{note}</text>
          </g>
        );
      })}
    </FigureShell>
  );
}

function MagneticMomentFigure() {
  const values = [0, 1.73, 2.83, 3.87, 4.90, 5.92, 4.90, 3.87, 2.83, 1.73, 0];
  return (
    <FigureShell
      title="Spin-only magnetic moment across a high-spin d series"
      description="Magnetic moment rises from d zero to a d five maximum and falls symmetrically toward d ten."
      caption="The triangular trend follows the number of unpaired electrons; real complexes can deviate because spin state and orbital contributions depend on ligand field and geometry."
    >
      <line x1="80" y1="345" x2="885" y2="345" stroke={P.muted} strokeWidth="2" />
      <line x1="80" y1="55" x2="80" y2="345" stroke={P.muted} strokeWidth="2" />
      <polyline
        points={values.map((v, i) => `${105 + i * 74},${340 - v * 43}`).join(" ")}
        fill="none"
        stroke={P.pink}
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {values.map((v, i) => (
        <g key={i}>
          <circle cx={105 + i * 74} cy={340 - v * 43} r="8" fill={i === 5 ? P.gold : P.cyan} stroke={P.page} strokeWidth="3" />
          <text x={105 + i * 74} y="378" textAnchor="middle" fill={P.ink} fontSize="15" fontWeight="800">d{i}</text>
        </g>
      ))}
      <text x="475" y="58" textAnchor="middle" fill={P.gold} fontSize="22" fontWeight="900">maximum at high-spin d⁵: 5 unpaired electrons</text>
      <text x="410" y="416" fill={P.muted} fontSize="18">d-electron count</text>
      <text x="27" y="250" fill={P.muted} fontSize="18" transform="rotate(-90 27 250)">μ / BM</text>
    </FigureShell>
  );
}

function ChapterRoadmap() {
  const links = [
    [1, "Need"], [2, "Early schemes"], [3, "Meyer"], [4, "Mendeleev"], [5, "Moseley"], [6, "Cause"], [7, "Long form"],
  ];
  return (
    <nav aria-label="History chapter roadmap" style={styles.roadmap}>
      {links.map(([number, label]) => (
        <a key={number} href={`#history-section-${number}`} style={styles.roadmapLink}>
          <span style={styles.roadmapNumber}>{number}</span>{label}
        </a>
      ))}
    </nav>
  );
}

export default function PeriodicHistoryMasterV2() {
  return (<><PeriodicityNCERTHistoryFigures />(<><PeriodicityHistoryVisualsV4 />{(
    <article data-notes-version="periodic-history-master-v2" style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.heroGlowA} />
        <div style={styles.heroGlowB} />
        <p style={styles.eyebrow}>JEE Advanced · History, periodic law and modern architecture</p>
        <h1 style={styles.title}>Classification of Elements and Periodicity in Properties</h1>
        <p style={styles.lead}>
          A continuous, mechanism-first account of how chemists progressed from broad empirical groupings to a predictive atomic-number table whose recurring chemistry follows recurring valence configurations.
        </p>
        <div style={styles.heroStats}>
          <span><b>7</b> linear sections</span>
          <span><b>20</b> original SVG explanations</span>
          <span><b>0</b> repeated headings</span>
          <span><b>complete</b> worked reasoning</span>
        </div>
      </header>

      <ChapterRoadmap />
      <EvolutionTimelineFigure />

      <SectionTitle number={1}>Why classification became necessary</SectionTitle>
      <p>
        As the element list grew, memorising each element, compound and reaction independently became an impossible strategy. Roughly 31 elements were known around 1800, about 63 by 1865, and 118 are now recognised. Classification was therefore not an exercise in decoration: it was a method for compressing chemical information into families, trends and predictive rules.
      </p>
      <ClassificationCompressionFigure />
      <DataTable
        caption="What a scientifically useful classification must accomplish"
        headers={["Requirement", "Chemical meaning", "Failure if absent"]}
        rows={[
          ["Systematic placement", "Every element receives a defensible position.", "The table becomes a list with arbitrary exceptions."],
          ["Family recognition", "Elements with analogous valence structures appear together.", "Similar chemistry remains hidden."],
          ["Trend visibility", "Gradual changes in size, ionisation, electron gain and metallic character become readable.", "Properties remain isolated facts."],
          ["Prediction", "Unknown positions imply approximate masses, valencies and compound formulae.", "Classification cannot be experimentally tested."],
          ["Mechanism", "Recurring outer electronic configurations explain recurrence.", "The pattern is descriptive but not explanatory."],
        ]}
      />
      <Callout title="Definition of periodicity" tone="mint">
        <p>
          <strong>Periodicity</strong> is the recurrence of similar physical and chemical properties at regular intervals when elements are arranged by increasing atomic number. The recurrence is approximate rather than perfectly repetitive because nuclear charge, shielding, penetration and subshell occupancy also change continuously.
        </p>
      </Callout>
      <WorkedProblem title="Solved Problem 1 — Why is classification useful when every atomic number is unique?">
        <p><strong>Step 1:</strong> Atomic number identifies one nucleus; it does not by itself organise behaviour.</p>
        <p><strong>Step 2:</strong> Elements with analogous valence configurations show related oxidation states, bonding and acid–base behaviour.</p>
        <p><strong>Step 3:</strong> A periodic table converts 118 separate descriptions into recurring families and quantitative trends.</p>
        <p><strong>Conclusion:</strong> Atomic number answers “which element?”, whereas classification answers “how is it related to others, how will it behave, and why?”.</p>
      </WorkedProblem>

      <SectionTitle number={2}>Early attempts: from visible properties to numerical recurrence</SectionTitle>
      <SubTitle color={P.coral}>2.1 Lavoisier: a descriptive starting point</SubTitle>
      <p>
        Lavoisier&apos;s 1789 classification grouped simple substances using observable behaviour. Metals were commonly lustrous, malleable and conducting and often produced basic oxides; non-metals were generally poor conductors and often produced acidic oxides. The scheme made comparison possible, but it could not express recurring families, variable oxide character or metalloid behaviour.
      </p>
      <LavoisierTreeFigure />

      <SubTitle color={P.violet}>2.2 Prout and Pettenkofer: the search for arithmetic structure</SubTitle>
      <p>
        Prout proposed that hydrogen was the elementary mass unit and that atomic weights should be exact integral multiples of hydrogen. The hypothesis was historically important because it treated atomic mass as structural information, but values such as chlorine near 35.5—and later the recognition of isotopic abundance—showed why ordinary atomic weights are not generally integers.
      </p>
      <p>
        Pettenkofer later noticed that several related elements differed by integral multiples of roughly eight. For the old approximate alkali-metal values, <Formula>23 − 7 = 16 = 2 × 8</Formula> and <Formula>39 − 23 = 16 = 2 × 8</Formula>. The pattern was suggestive but did not hold universally.
      </p>
      <NumberPatternFigure />

      <SubTitle color={P.gold}>2.3 Döbereiner&apos;s law of triads</SubTitle>
      <p>
        Döbereiner&apos;s mature 1829 formulation grouped three chemically similar elements in increasing atomic mass. If the masses are <Formula>x</Formula>, <Formula>y</Formula> and <Formula>z</Formula>, then the middle member approximately satisfies:
      </p>
      <DisplayFormula><Formula label="y approximately equals x plus z divided by two">y ≈ (x + z)/2</Formula></DisplayFormula>
      <TriadBalanceFigure />
      <DataTable
        caption="Authoritative triad calculations"
        headers={["Triad", "Approximate masses", "Mean test", "Chemical relation"]}
        rows={[
          ["Li, Na, K", "7, 23, 39", <Formula key="li">(7 + 39)/2 = 23</Formula>, "Alkali-metal family; dominant +1 state"],
          ["Ca, Sr, Ba", "40, 88, 137", <Formula key="ca">(40 + 137)/2 = 88.5 ≈ 88</Formula>, "Alkaline-earth family; dominant +2 state"],
          ["Cl, Br, I", "35.5, 80, 127", <Formula key="cl">(35.5 + 127)/2 = 81.25 ≈ 80</Formula>, "Halogen family; one electron short of closed shell"],
          ["S, Se, Te", "32, 79, 127.6", <Formula key="s">(32 + 127.6)/2 = 79.8 ≈ 79</Formula>, "Chalcogens; analogous hydrides and oxides"],
          ["P, As, Sb", "31, 74.9, 121.8", <Formula key="p">(31 + 121.8)/2 = 76.4 ≈ 74.9</Formula>, "Chemical resemblance is stronger than exact arithmetic"],
        ]}
      />
      <Callout title="What the triad law did—and did not—say" tone="gold">
        <p>
          The original criterion used <strong>atomic masses plus chemical similarity</strong>. Equal atomic-number spacing, such as Li (3), Na (11), K (19), is a useful modern recognition shortcut but cannot prove a triad by itself.
        </p>
      </Callout>
      <WorkedProblem title="Solved Problem 2 — Do 40, 88 and 137 form a triad?">
        <p><strong>Step 1:</strong> Average the first and third masses.</p>
        <DisplayFormula><Formula>(40 + 137)/2 = 88.5</Formula></DisplayFormula>
        <p><strong>Step 2:</strong> Compare with the middle mass: <Formula>88.5 ≈ 88</Formula>.</p>
        <p><strong>Step 3:</strong> Check chemical similarity: Ca, Sr and Ba are alkaline-earth metals.</p>
        <p><strong>Answer:</strong> Yes; the set approximately obeys Döbereiner&apos;s law.</p>
      </WorkedProblem>

      <SubTitle color={P.pink}>2.4 de Chancourtois&apos; telluric screw</SubTitle>
      <p>
        In 1862 de Chancourtois placed elements in increasing atomic weight on a helical line around a cylinder. A circumference of about 16 mass units caused several related elements to appear approximately one above another. This was the earliest explicit geometrical representation of periodic recurrence. Its limitations were equally important: alignment weakened for heavier elements, the cylinder was inconvenient to compare, and the original publication did not communicate the chemical pattern clearly.
      </p>
      <TelluricScrewFigure />

      <SubTitle color={P.cyan}>2.5 Newlands&apos; law of octaves</SubTitle>
      <p>
        Newlands arranged elements by increasing atomic weight and observed that, among lighter elements, every eighth entry often resembled the first—like recurrence of a musical note after seven intervening notes. The law correctly connected Li–Na, Be–Mg, B–Al and F–Cl and introduced a numerical idea of period length.
      </p>
      <NewlandsOctaveFigure />
      <MicroTitle>Newlands&apos; complete 56-position arrangement</MicroTitle>
      <p>
        The full arrangement is pedagogically important because it exposes both the insight and the forced placements. Numbers below are Newlands&apos; sequence positions, not modern atomic numbers.
      </p>
      <DataTable
        minWidth={980}
        headers={["sa / do", "re", "ga", "ma", "pa", "da", "ni"]}
        rows={[
          ["H · 1", "Li · 2", "Be · 3", "B · 4", "C · 5", "N · 6", "O · 7"],
          ["F · 8", "Na · 9", "Mg · 10", "Al · 11", "Si · 12", "P · 13", "S · 14"],
          ["Cl · 15", "K · 16", "Ca · 17", "Cr · 19", "Ti · 18", "Mn · 20", "Fe · 21"],
          ["Co & Ni · 22", "Cu · 23", "Zn · 24", "Y · 25", "In · 26", "As · 27", "Se · 28"],
          ["Br · 29", "Rb · 30", "Sr · 31", "Ce & La · 33", "Zr · 32", "Di & Mo · 34", "Rh & Ru · 35"],
          ["Pd · 36", "Ag · 37", "Cd · 38", "U · 40", "Sn · 39", "Sb · 41", "Te · 43"],
          ["I · 42", "Cs · 44", "Ba & V · 45", "Ta · 46", "W · 47", "Nb · 48", "Au · 49"],
          ["Pt & Ir · 50", "Os · 51", "Hg · 52", "Tl · 53", "Pb · 54", "Bi · 55", "Th · 56"],
        ]}
      />
      <Callout title="Why the octave law failed beyond calcium" tone="coral">
        <ul style={styles.list}>
          <li>Transition series introduce ten d-block positions, so the recurrence interval is no longer eight.</li>
          <li>No systematic gaps were left for undiscovered elements.</li>
          <li>Paired entries and forced columns placed dissimilar elements together.</li>
          <li>Noble gases were unknown; their later insertion changed the counting.</li>
          <li>Nevertheless, Newlands was the first to state periodic recurrence as a clear numerical law and was later recognised with the Davy Medal.</li>
        </ul>
      </Callout>

      <SectionTitle number={3}>Lothar Meyer&apos;s atomic-volume curve: physical periodicity</SectionTitle>
      <p>
        Meyer plotted a measurable physical property against atomic weight. For a condensed element, the molar or “atomic” volume is approximately
      </p>
      <DisplayFormula><Formula label="V sub m equals M divided by rho">V<Sub>m</Sub> = M/ρ</Formula></DisplayFormula>
      <p>
        where <Formula>V<Sub>m</Sub></Formula> is molar volume, <Formula>M</Formula> is molar mass and <Formula>ρ</Formula> is density. The curve did not produce a single monotonically increasing line; it produced recurring waves.
      </p>
      <MeyerCurveFigure />
      <DataTable
        caption="Interpretation of one periodic wave"
        headers={["Region", "Typical family", "Physical interpretation"]}
        rows={[
          ["Sharp maxima", "Li, Na, K, Rb, Cs", "Alkali metals have large volumes and one weakly bound outer electron."],
          ["Descending branch", "Be, Mg, Ca, Sr, Ba", "Alkaline-earth atoms are smaller than the preceding alkali metal."],
          ["Broad minima", "Many transition metals", "Strong cohesive metallic bonding and relatively compact volumes."],
          ["Ascending branch", "toward F, Cl, Br, I", "Volumes rise before the next alkali-metal maximum."],
          ["Successive waves", "analogous families", "Similar elements occupy analogous positions in different cycles."],
        ]}
      />
      <Callout title="Deep interpretation" tone="mint">
        <p>
          The curve proved that periodicity was not confined to valency or formulas: density, molar volume, melting point, boiling point and related physical properties also vary recurrently. Its weakness was organisational—different properties generate differently shaped graphs, whereas a table can display many relationships simultaneously and preserve spaces for prediction.
        </p>
      </Callout>

      <SectionTitle number={4}>Mendeleev&apos;s periodic law and predictive table</SectionTitle>
      <Callout title="Original periodic law" tone="gold">
        <p><strong>The physical and chemical properties of the elements are periodic functions of their atomic weights.</strong></p>
      </Callout>
      <p>
        Mendeleev&apos;s 1869 table and 1871 refinement arranged elements primarily by atomic weight, but chemical similarity, valency and compound formulae took precedence whenever strict numerical order contradicted family chemistry. That judgement allowed the table to remain chemically coherent and, crucially, to contain deliberate vacancies.
      </p>
      <MendeleevArchitectureFigure />

      <SubTitle color={P.gold}>4.1 Architecture of the short-form table</SubTitle>
      <DataTable
        headers={["Historical group", "Representative highest oxide", "Typical covalent hydride", "Pattern"]}
        rows={[
          ["I", <span key="g1">R<Sub>2</Sub>O</span>, "RH", "maximum valency toward oxygen ≈ 1"],
          ["II", "RO", <span key="g2h">RH<Sub>2</Sub></span>, "≈ 2"],
          ["III", <span key="g3">R<Sub>2</Sub>O<Sub>3</Sub></span>, <span key="g3h">RH<Sub>3</Sub></span>, "≈ 3"],
          ["IV", <span key="g4">RO<Sub>2</Sub></span>, <span key="g4h">RH<Sub>4</Sub></span>, "≈ 4"],
          ["V", <span key="g5">R<Sub>2</Sub>O<Sub>5</Sub></span>, <span key="g5h">RH<Sub>3</Sub></span>, "≈ 5"],
          ["VI", <span key="g6">RO<Sub>3</Sub></span>, <span key="g6h">RH<Sub>2</Sub></span>, "≈ 6"],
          ["VII", <span key="g7">R<Sub>2</Sub>O<Sub>7</Sub></span>, "RH", "≈ 7"],
          ["VIII", "variable", "no single general hydride", "three closely related transition-metal columns"],
        ]}
      />
      <DataTable
        caption="Complete classic Group VIII triads"
        headers={["First row", "Second row", "Third row"]}
        rows={[["Fe · Co · Ni", "Ru · Rh · Pd", "Os · Ir · Pt"]]}
      />

      <SubTitle color={P.mint}>4.2 Why Mendeleev&apos;s table was a scientific theory, not a catalogue</SubTitle>
      <ol style={styles.list}>
        <li><strong>Systematic comparison:</strong> chemically similar elements entered common families.</li>
        <li><strong>Vacant positions:</strong> gaps were preferred over forced placements.</li>
        <li><strong>Predictions:</strong> mass, density, valency and compound formulae were inferred from neighbours.</li>
        <li><strong>Correction of data:</strong> doubtful atomic weights and valencies were reconsidered when periodic position disagreed.</li>
        <li><strong>Chemical priority:</strong> Co/Ni and Te/I were ordered by chemical relationship rather than strict mass.</li>
        <li><strong>Noble-gas compatibility:</strong> a zero group could later be inserted without dismantling the table.</li>
      </ol>
      <PredictionMatchFigure />
      <DataTable
        caption="The three classic successful predictions"
        headers={["Predicted name", "Discovered element", "Year", "Key confirmations"]}
        rows={[
          ["Eka-aluminium", "Gallium, Ga", "1875", <span key="ga">Trivalent chemistry, Ga<Sub>2</Sub>O<Sub>3</Sub>, low melting point and density near prediction</span>],
          ["Eka-boron", "Scandium, Sc", "1879", <span key="sc">Sc<Sub>2</Sub>O<Sub>3</Sub>, trivalent chemistry and mass in the predicted region</span>],
          ["Eka-silicon", "Germanium, Ge", "1886", <span key="ge">GeO<Sub>2</Sub>, volatile GeCl<Sub>4</Sub>, density and mass near prediction</span>],
        ]}
      />
      <p>
        Technetium, discovered in 1937, may be discussed as filling a manganese-region vacancy, but it should be separated from the classic three direct confirmations that made Mendeleev&apos;s predictive success famous.
      </p>

      <SubTitle color={P.cyan}>4.3 Eka-silicon versus germanium</SubTitle>
      <DataTable
        headers={["Property", "Prediction for eka-silicon", "Observed for germanium", "Chemical significance"]}
        rows={[
          ["Atomic mass", "about 72", "about 72.6 historically", "correct periodic neighbourhood"],
          ["Density", <span key="d1">about 5.5 g cm<Sup>−3</Sup></span>, <span key="d2">about 5.3–5.4 g cm<Sup>−3</Sup></span>, "dense metalloid"],
          ["Oxide", <span key="es">EsO<Sub>2</Sub></span>, <span key="geo">GeO<Sub>2</Sub></span>, "tetravalent group-14 oxide"],
          ["Chloride", <span key="escl">EsCl<Sub>4</Sub>, volatile liquid</span>, <span key="gecl">GeCl<Sub>4</Sub>, b.p. ≈ 84 °C</span>, "molecular tetrachloride"],
          ["Element type", "between metal and non-metal", "metalloid / semiconductor", "position below silicon"],
        ]}
      />

      <WorkedProblem title="Solved Problem 3 — How periodic placement corrected beryllium's atomic mass">
        <p>The relation used was <Formula>atomic mass = equivalent mass × valency</Formula>. Beryllium&apos;s equivalent mass was about 4.5.</p>
        <p><strong>Incorrect trivalent assumption:</strong> <Formula>4.5 × 3 = 13.5</Formula>, inconsistent with the position between Li and B.</p>
        <p><strong>Divalent assignment:</strong> <Formula>4.5 × 2 = 9.0</Formula>, consistent with BeO and group-II behaviour.</p>
        <p><strong>Conclusion:</strong> the table helped correct both valency and atomic mass.</p>
      </WorkedProblem>

      <SubTitle color={P.coral}>4.4 Limitations of the atomic-weight basis</SubTitle>
      <AnomalousPairsFigure />
      <DataTable
        headers={["Limitation", "Chemical reason", "Modern resolution"]}
        rows={[
          ["Hydrogen's uncertain position", <span key="h">H has 1s<Sup>1</Sup>, forms H<Sup>+</Sup> like group 1 and H<Sup>−</Sup> like group 17.</span>, "Retained as a special case; no single placement represents all behaviour."],
          ["No place for isotopes", "Different isotope masses would require separate mass positions despite nearly identical chemistry.", "One atomic number gives one element position."],
          ["Anomalous mass pairs", "Ar/K, Co/Ni, Te/I and Th/Pa violate simple increasing mass.", "Atomic-number order is exact."],
          ["A/B subgroup tensions", "Some similar elements were separated while some unlike elements shared one historical group.", "Continuous 18-group layout and block structure clarify relationships."],
          ["No cause of recurrence", "Atomic structure and valence configurations were unknown.", "Quantum electronic structure explains periodicity."],
        ]}
      />

      <SectionTitle number={5}>Moseley&apos;s X-ray evidence and the modern periodic law</SectionTitle>
      <p>
        Moseley bombarded metal targets with high-energy electrons and measured characteristic X-ray frequencies. Crystal diffraction separated the emitted lines. For a chosen spectral series, the square root of frequency followed a simple linear relationship with atomic number.
      </p>
      <MoseleyApparatusFigure />
      <DisplayFormula><Formula label="square root of nu equals a times Z minus b">√ν = a(Z − b)</Formula></DisplayFormula>
      <p>
        Here <Formula>ν</Formula> is characteristic X-ray frequency, <Formula>Z</Formula> is atomic number, <Formula>a</Formula> is a series-dependent proportionality constant and <Formula>b</Formula> is a screening constant. Squaring gives the equivalent form <Formula>ν = a<Sup>2</Sup>(Z − b)<Sup>2</Sup></Formula> when <Formula>a</Formula> is defined in the square-root equation.
      </p>
      <MoseleyGraphFigure />
      <Callout title="Modern periodic law" tone="cyan">
        <p><strong>The physical and chemical properties of elements are periodic functions of their atomic numbers.</strong></p>
      </Callout>
      <DataTable
        caption="What atomic number immediately resolved"
        headers={["Problem in mass-based order", "Atomic-number resolution", "Consequence"]}
        rows={[
          ["Ar is heavier than K", "Z(Ar) = 18 < Z(K) = 19", "Ar correctly ends period 3; K begins period 4."],
          ["Co is slightly heavier than Ni", "27 < 28", "Co remains before Ni."],
          ["Te is heavier than I", "52 < 53", "Te remains in group 16, I in group 17."],
          ["Isotopes have different masses", "All isotopes share the same Z", "One position per element."],
          ["Missing elements", "A gap in consecutive Z values is unmistakable", "Undiscovered atomic numbers can be identified."],
        ]}
      />
      <WorkedProblem title="Solved Problem 4 — Resolve the argon–potassium anomaly">
        <p><strong>Mass comparison:</strong> <Formula>A(Ar) ≈ 39.95 &gt; A(K) ≈ 39.10</Formula>, apparently suggesting K before Ar.</p>
        <p><strong>Atomic-number comparison:</strong> <Formula>Z(Ar) = 18 &lt; Z(K) = 19</Formula>.</p>
        <p><strong>Electronic consequence:</strong> Ar has a closed shell; K begins a new shell with <Formula>4s<Sup>1</Sup></Formula>.</p>
        <p><strong>Answer:</strong> Ar must precede K; atomic number gives both correct order and correct chemistry.</p>
      </WorkedProblem>

      <SectionTitle number={6}>Cause of periodicity: recurring valence-shell architecture</SectionTitle>
      <p>
        Atomic number increases one unit at a time. Electrons then occupy orbitals according to quantum-mechanical energy ordering, while shielding and penetration modify orbital energies in multielectron atoms. A new period begins when a new outer shell starts; vertical family resemblance appears when analogous outer configurations recur.
      </p>
      <PeriodicityMechanismFigure />
      <ValenceRibbonFigure />
      <DataTable
        caption="Representative-family configuration and chemical consequence"
        headers={["Family", "General outer configuration", "Dominant consequence"]}
        rows={[
          ["Group 1", <span key="v1">ns<Sup>1</Sup></span>, "one electron readily lost; +1 ions; strongly electropositive except H"],
          ["Group 2", <span key="v2">ns<Sup>2</Sup></span>, "commonly +2 ions"],
          ["Group 13", <span key="v13">ns<Sup>2</Sup>np<Sup>1</Sup></span>, "commonly +3, with heavier-element +1 states increasingly important"],
          ["Group 14", <span key="v14">ns<Sup>2</Sup>np<Sup>2</Sup></span>, "four valence electrons; −4 to +4 chemistry"],
          ["Group 15", <span key="v15">ns<Sup>2</Sup>np<Sup>3</Sup></span>, "half-filled p subshell; −3, +3 and +5 patterns"],
          ["Group 16", <span key="v16">ns<Sup>2</Sup>np<Sup>4</Sup></span>, "two electrons short of closed shell"],
          ["Group 17", <span key="v17">ns<Sup>2</Sup>np<Sup>5</Sup></span>, "one electron short of closed shell; strong tendency toward −1"],
          ["Group 18", <span key="v18">ns<Sup>2</Sup>np<Sup>6</Sup>; He = 1s<Sup>2</Sup></span>, "closed-shell stability and high ionisation enthalpy"],
        ]}
      />
      <Callout title="Important quantum nuance" tone="violet">
        <p>
          The familiar neutral-atom filling sequence is a useful Aufbau heuristic, not an immutable orbital-energy ranking for every ion and excited state. For many transition-metal cations, outer <Formula>ns</Formula> electrons are removed before <Formula>(n − 1)d</Formula> electrons even though <Formula>ns</Formula> filled first in the neutral atom.
        </p>
      </Callout>

      <SectionTitle number={7}>Modern long-form table: periods, groups, blocks and special positions</SectionTitle>
      <p>
        The modern table orders 118 elements by increasing atomic number into seven periods and eighteen IUPAC groups. The differentiating subshell defines the electronic block. Lanthanoids and actinoids are printed below the main body only to avoid a 32-column page; structurally they belong inside periods 6 and 7.
      </p>
      <LongFormBlockMapFigure />
      <DataTable
        caption="Electronic blocks"
        headers={["Block", "General configuration", "Position", "Maximum width"]}
        rows={[
          ["s", <span key="sb">ns<Sup>1–2</Sup></span>, "Groups 1–2; He is electronically s-block but chemically group 18", "2"],
          ["p", <span key="pb">ns<Sup>2</Sup>np<Sup>1–6</Sup></span>, "Groups 13–18", "6"],
          ["d", <span key="db">(n − 1)d<Sup>1–10</Sup>ns<Sup>0–2</Sup></span>, "Groups 3–12", "10"],
          ["f", <span key="fb">(n − 2)f<Sup>1–14</Sup>(n − 1)d<Sup>0–1</Sup>ns<Sup>2</Sup></span>, "Inner-transition series in periods 6 and 7", "14"],
        ]}
      />

      <SubTitle color={P.gold}>7.1 Period lengths and the proper use of 2n²</SubTitle>
      <p>
        A shell with principal quantum number <Formula>n</Formula> contains <Formula>n<Sup>2</Sup></Formula> orbitals, so its maximum electron capacity is
      </p>
      <DisplayFormula><Formula label="maximum shell capacity equals two n squared">N<Sub>max</Sub> = 2n<Sup>2</Sup></Formula></DisplayFormula>
      <p>
        This is a shell-capacity rule, not a direct formula for actual period length. Period lengths depend on the subshells filled between consecutive noble gases because energies of different shells interleave.
      </p>
      <PeriodLengthFigure />
      <DataTable
        headers={["Period", "Subshell sequence across the period", "Element range", "Length"]}
        rows={[
          ["1", <span key="p1">1s</span>, "H → He", "2"],
          ["2", <span key="p2">2s, 2p</span>, "Li → Ne", "8"],
          ["3", <span key="p3">3s, 3p</span>, "Na → Ar", "8"],
          ["4", <span key="p4">4s, 3d, 4p</span>, "K → Kr", "18"],
          ["5", <span key="p5">5s, 4d, 5p</span>, "Rb → Xe", "18"],
          ["6", <span key="p6">6s, 4f, 5d, 6p</span>, "Cs → Rn", "32"],
          ["7", <span key="p7">7s, 5f, 6d, 7p</span>, "Fr → Og", "32"],
        ]}
      />
      <WorkedProblem title="Solved Problem 5 — Why does period 6 contain 32 elements?">
        <p>6s contributes 2 positions; 4f contributes 14; 5d contributes 10; 6p contributes 6.</p>
        <DisplayFormula><Formula>2 + 14 + 10 + 6 = 32</Formula></DisplayFormula>
        <p><strong>Answer:</strong> period 6 contains 32 positions because four subshell blocks are traversed.</p>
      </WorkedProblem>

      <SubTitle color={P.cyan}>7.2 IUPAC group numbering and old A/B notation</SubTitle>
      <GroupMapFigure />
      <DataTable
        headers={["Old designation", "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIII", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "0"]}
        rows={[["IUPAC group", "1", "2", "3", "4", "5", "6", "7", "8, 9, 10", "11", "12", "13", "14", "15", "16", "17", "18"]]}
        minWidth={1100}
      />

      <SubTitle color={P.violet}>7.3 Group and position from electronic configuration</SubTitle>
      <DataTable
        headers={["Block", "Group rule", "Example"]}
        rows={[
          ["s block", "group = number of ns valence electrons", <span key="sr">Sr: 5s<Sup>2</Sup> → group 2</span>],
          ["p block", "group = 10 + (ns + np valence electrons)", <span key="te">Te: 5s<Sup>2</Sup>5p<Sup>4</Sup> → 10 + 6 = 16</span>],
          ["d block", "group ≈ ns + (n − 1)d electrons", <span key="mo">Mo: 5s<Sup>1</Sup>4d<Sup>5</Sup> → group 6</span>],
          ["f block", "inner-transition placement within period 6 or 7", "group-3 boundary is convention-sensitive"],
        ]}
      />
      <WorkedProblem title="Solved Problem 6 — Locate Z = 42">
        <p>Z = 42 is molybdenum, approximately <Formula>[Kr]4d<Sup>5</Sup>5s<Sup>1</Sup></Formula>.</p>
        <p><strong>Period:</strong> highest occupied principal shell is 5.</p>
        <p><strong>Block:</strong> differentiating electron is in 4d.</p>
        <p><strong>Group:</strong> <Formula>5 + 1 = 6</Formula>.</p>
        <p><strong>Answer:</strong> period 5, group 6, d block.</p>
      </WorkedProblem>
      <WorkedProblem title="Solved Problem 7 — Find the fifth-period group-16 element">
        <p>Group 16 has outer pattern <Formula>ns<Sup>2</Sup>np<Sup>4</Sup></Formula>. For period 5 this becomes <Formula>5s<Sup>2</Sup>5p<Sup>4</Sup></Formula>.</p>
        <p>The element is tellurium, <strong>Te, Z = 52</strong>.</p>
      </WorkedProblem>
      <WorkedProblem title="Solved Problem 8 — Locate Z = 114">
        <p>Z = 114 is flerovium, Fl, with outer pattern <Formula>7s<Sup>2</Sup>7p<Sup>2</Sup></Formula>.</p>
        <p><strong>Period:</strong> 7. <strong>Block:</strong> p. <strong>Group:</strong> <Formula>10 + 4 = 14</Formula>.</p>
        <p><strong>Answer:</strong> period 7, group 14, p block.</p>
      </WorkedProblem>

      <SubTitle color={P.pink}>7.4 Seaborg&apos;s actinide concept and special placements</SubTitle>
      <p>
        Seaborg&apos;s actinide concept placed the 5f series beneath the 4f lanthanoid series, producing the familiar two-row inner-transition display. This clarified that actinoids form a second f-block series rather than a continuation of ordinary d-block groups.
      </p>
      <SpecialPositionsFigure />
      <DataTable
        headers={["Case", "Why it is special", "Best interpretation"]}
        rows={[
          ["Hydrogen", <span key="hyd">1s<Sup>1</Sup>; forms H<Sup>+</Sup> and H<Sup>−</Sup>; covalent chemistry is extensive.</span>, "Unique element often displayed above group 1 with explicit caveat."],
          ["Helium", <span key="he">1s<Sup>2</Sup> is an s configuration.</span>, "Placed in group 18 because the shell is closed and chemistry resembles noble gases."],
          ["Zn, Cd, Hg", <span key="zn">(n − 1)d<Sup>10</Sup>ns<Sup>2</Sup>; common ions retain d<Sup>10</Sup>.</span>, "Located in d block but not typical transition elements under strict incomplete-d-shell definitions."],
          ["La/Lu and Ac/Lr", "Group-3 membership depends on the table convention and the property being emphasised.", "State the adopted convention; avoid implying that only one layout is universally compulsory."],
          ["Palladium", <span key="pd">[Kr]4d<Sup>10</Sup>5s<Sup>0</Sup></span>, "d-block placement follows the differentiating series and group chemistry, not the presence of an ns electron."],
        ]}
      />

      <SubTitle color={P.lime}>7.5 Temporary systematic nomenclature beyond established names</SubTitle>
      <p>
        Before an element receives an approved permanent name, a systematic temporary name may be generated from digit roots. For a hypothetical atomic number 120: 1 = un, 2 = bi, 0 = nil; the roots combine with “ium”.
      </p>
      <DisplayFormula><Formula>120 → un + bi + nil + ium → unbinilium (Ubn)</Formula></DisplayFormula>
      <Callout title="Important status" tone="lime">
        <p>Unbinilium is a temporary systematic construction for hypothetical element 120, not a claim that element 120 has been discovered or officially named.</p>
      </Callout>

      <SubTitle color={P.coral}>7.6 Worked magnetic-moment reasoning</SubTitle>
      <p>
        The spin-only magnetic moment for <Formula>n</Formula> unpaired electrons is
      </p>
      <DisplayFormula><Formula label="mu equals square root of n times n plus two Bohr magnetons">μ = √[n(n + 2)] BM</Formula></DisplayFormula>
      <MagneticMomentFigure />
      <WorkedProblem title="Solved Problem 9 — Why does the ideal Z-versus-magnetic-moment trend rise and then fall across a d series?">
        <p><strong>Step 1:</strong> From d<Sup>1</Sup> to high-spin d<Sup>5</Sup>, Hund&apos;s rule increases the number of unpaired electrons from 1 to 5.</p>
        <p><strong>Step 2:</strong> Since <Formula>μ = √[n(n + 2)]</Formula>, magnetic moment rises with <Formula>n</Formula>.</p>
        <p><strong>Step 3:</strong> Beyond d<Sup>5</Sup>, additional electrons pair, so the unpaired count decreases toward zero at d<Sup>10</Sup>.</p>
        <p><strong>Conclusion:</strong> the idealised curve rises to a maximum near d<Sup>5</Sup> and falls toward d<Sup>10</Sup>. Exact experimental curves depend on oxidation state, spin state, geometry and orbital contribution, so atomic number alone does not define one universal triangular graph unless the ionic series is specified.</p>
      </WorkedProblem>

      <Callout title="Final conceptual synthesis" tone="mint">
        <p>
          The historical progression is cumulative: Lavoisier made comparison possible; numerical schemes searched for order; Döbereiner and Newlands detected recurrence; Meyer demonstrated physical periodicity; Mendeleev built a falsifiable predictive system; Moseley identified atomic number as the true coordinate; quantum mechanics explained why analogous valence configurations recur.
        </p>
      </Callout>
    </article>
  )}</>)</>);
}

const styles: Record<string, CSSProperties> = {
  page: {
    width: "100%",
    boxSizing: "border-box",
    color: P.ink,
    background: `linear-gradient(180deg, ${P.page} 0%, #071927 42%, #06131f 100%)`,
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "clamp(0.98rem, 1.55vw, 1.08rem)",
    lineHeight: 1.76,
    padding: "clamp(16px, 3vw, 40px)",
    borderRadius: 28,
    overflow: "hidden",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(28px, 5vw, 64px)",
    border: `1px solid ${P.line}`,
    borderRadius: 28,
    background: `linear-gradient(135deg, #12334c 0%, ${P.panel} 58%, #18263f 100%)`,
    boxShadow: "0 26px 70px rgba(0,0,0,0.32)",
  },
  heroGlowA: {
    position: "absolute",
    width: 260,
    height: 260,
    right: -80,
    top: -90,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,200,87,0.3), transparent 68%)",
    pointerEvents: "none",
  },
  heroGlowB: {
    position: "absolute",
    width: 280,
    height: 280,
    left: -110,
    bottom: -170,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(69,215,255,0.25), transparent 70%)",
    pointerEvents: "none",
  },
  eyebrow: {
    position: "relative",
    zIndex: 1,
    margin: 0,
    color: P.gold,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 900,
  },
  title: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1050,
    margin: "14px 0 18px",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(2.2rem, 5vw, 4.6rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    textShadow: "0 8px 28px rgba(0,0,0,0.3)",
  },
  lead: {
    position: "relative",
    zIndex: 1,
    maxWidth: 980,
    margin: 0,
    color: P.muted,
    fontSize: "clamp(1.02rem, 2vw, 1.28rem)",
  },
  heroStats: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 24,
  },
  roadmap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    position: "sticky",
    top: 8,
    zIndex: 12,
    margin: "20px 0 28px",
    padding: 12,
    border: `1px solid ${P.line}`,
    borderRadius: 18,
    background: "rgba(6,19,31,0.92)",
    backdropFilter: "blur(14px)",
  },
  roadmapLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    color: P.ink,
    textDecoration: "none",
    border: `1px solid ${P.line}`,
    borderRadius: 999,
    background: P.panel,
    fontWeight: 800,
  },
  roadmapNumber: {
    display: "inline-grid",
    placeItems: "center",
    width: 25,
    height: 25,
    borderRadius: "50%",
    color: P.page,
    background: P.gold,
    fontSize: "0.78rem",
    fontWeight: 900,
  },
  sectionTitle: {
    scrollMarginTop: 90,
    display: "flex",
    alignItems: "center",
    gap: 14,
    margin: "52px 0 22px",
    paddingBottom: 13,
    color: P.gold,
    borderBottom: `2px solid ${P.line}`,
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(1.65rem, 3.3vw, 2.75rem)",
    lineHeight: 1.16,
  },
  sectionNumber: {
    flex: "0 0 auto",
    display: "inline-grid",
    placeItems: "center",
    width: 46,
    height: 46,
    borderRadius: 15,
    color: P.page,
    background: `linear-gradient(145deg, ${P.gold}, #ffdf86)`,
    fontFamily: "Inter, sans-serif",
    fontSize: "1.05rem",
    fontWeight: 950,
    boxShadow: "0 8px 24px rgba(255,200,87,0.22)",
  },
  subTitle: {
    margin: "34px 0 11px",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(1.32rem, 2.5vw, 1.9rem)",
    lineHeight: 1.25,
  },
  microTitle: {
    margin: "24px 0 9px",
    color: P.lime,
    fontSize: "1.15rem",
    letterSpacing: "0.01em",
  },
  callout: {
    margin: "22px 0",
    padding: "17px 21px",
    borderLeft: "5px solid",
    borderRadius: "0 18px 18px 0",
    background: `linear-gradient(135deg, ${P.panel}, ${P.panel2})`,
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
  },
  calloutTitle: {
    display: "block",
    marginBottom: 7,
    textTransform: "uppercase",
    letterSpacing: "0.11em",
    fontSize: "0.86rem",
    fontWeight: 950,
  },
  list: {
    margin: "8px 0",
    paddingLeft: 24,
  },
  formula: {
    color: "#ffffff",
    fontFamily: "Cambria Math, STIX Two Math, Georgia, serif",
    whiteSpace: "nowrap",
  },
  displayFormula: {
    margin: "18px 0",
    padding: "16px 20px",
    overflowX: "auto",
    textAlign: "center",
    fontSize: "clamp(1.28rem, 3vw, 2rem)",
    border: `1px solid ${P.line}`,
    borderLeft: `5px solid ${P.cyan}`,
    borderRadius: 17,
    background: `linear-gradient(135deg, ${P.panel2}, ${P.panel})`,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  tableWrap: {
    width: "100%",
    overflowX: "auto",
    margin: "20px 0 30px",
    border: `1px solid ${P.line}`,
    borderRadius: 18,
    boxShadow: "0 14px 34px rgba(0,0,0,0.16)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: P.panel,
  },
  caption: {
    padding: "15px 17px",
    color: P.gold,
    textAlign: "left",
    fontWeight: 900,
    background: P.panel2,
  },
  th: {
    padding: "13px 15px",
    color: P.gold,
    textAlign: "left",
    verticalAlign: "top",
    borderBottom: `2px solid ${P.gold}`,
    background: P.panel2,
  },
  td: {
    padding: "13px 15px",
    color: P.ink,
    verticalAlign: "top",
    borderBottom: `1px solid ${P.line}`,
  },
  figure: {
    margin: "25px 0 32px",
    padding: "13px",
    overflow: "hidden",
    border: `1px solid ${P.line}`,
    borderRadius: 23,
    background: `linear-gradient(145deg, ${P.panel}, #0e2a40)`,
    boxShadow: "0 18px 46px rgba(0,0,0,0.22)",
  },
  svg: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  figcaption: {
    padding: "10px 9px 3px",
    color: P.muted,
    fontSize: "0.95rem",
  },
  problem: {
    margin: "25px 0",
    padding: "19px 21px",
    border: `1px solid ${P.line}`,
    borderTop: `4px solid ${P.violet}`,
    borderRadius: 18,
    background: `linear-gradient(140deg, ${P.panel}, ${P.panel2})`,
    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
  },
  problemTitle: {
    margin: "0 0 11px",
    color: P.violet,
    fontSize: "1.16rem",
  },
};
