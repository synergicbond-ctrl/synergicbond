"use client";

import {
  Atom,
  Beaker,
  BookOpenCheck,
  Calculator,
  ChevronRight,
  CircleDot,
  FlaskConical,
  Gauge,
  Lightbulb,
  Microscope,
  Scale,
  Sparkles,
  Target,
  TestTube2,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { fullNotes, topicNav } from "./chapterData";
import styles from "./chemistry.module.css";

type Tone = "cyan" | "violet" | "gold" | "rose" | "emerald";

type TableRow = Array<ReactNode>;

const toneIcon: Record<Tone, ReactNode> = {
  cyan: <Lightbulb size={18} aria-hidden="true" />,
  violet: <Atom size={18} aria-hidden="true" />,
  gold: <BookOpenCheck size={18} aria-hidden="true" />,
  rose: <TriangleAlert size={18} aria-hidden="true" />,
  emerald: <Sparkles size={18} aria-hidden="true" />,
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </header>
  );
}

function Callout({ tone, title, children }: { tone: Tone; title: string; children: ReactNode }) {
  return (
    <aside className={cx(styles.callout, styles[`tone_${tone}`])}>
      <div className={styles.calloutIcon}>{toneIcon[tone]}</div>
      <div>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </aside>
  );
}

function DataTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: TableRow[] }) {
  return (
    <div className={styles.tableShell}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${caption}-${rowIndex}`}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">{cell}</th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Molecule({ label, atoms, bonds = 1 }: { label: string; atoms: Array<{ text: string; tone: Tone }>; bonds?: number }) {
  return (
    <div className={styles.moleculeCard} aria-label={`${label} molecular model`}>
      <div className={styles.moleculeModel}>
        {atoms.map((atom, index) => (
          <div className={styles.atomWrap} key={`${label}-${index}`}>
            {index > 0 && (
              <span className={styles.bond} aria-hidden="true">
                {Array.from({ length: bonds }).map((_, bondIndex) => <i key={bondIndex} />)}
              </span>
            )}
            <span className={cx(styles.atom, styles[`atom_${atom.tone}`])}>{atom.text}</span>
          </div>
        ))}
      </div>
      <strong>{label}</strong>
    </div>
  );
}

function TransformationVisual() {
  const items = [
    { title: "Milk → curd", note: "Microbial conversion changes composition and texture.", kind: "curd" },
    { title: "Sugar → vinegar", note: "Fermentation transforms organic molecules over time.", kind: "vinegar" },
    { title: "Iron → rust", note: "Iron reacts slowly with oxygen and moisture.", kind: "rust" },
  ];
  return (
    <div className={styles.transformGrid}>
      {items.map((item) => (
        <article key={item.kind} className={styles.transformCard}>
          <svg viewBox="0 0 240 120" role="img" aria-label={item.title}>
            <defs>
              <linearGradient id={`g-${item.kind}`} x1="0" x2="1">
                <stop offset="0" stopColor="#22d3ee" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {item.kind === "curd" && <>
              <path d="M25 35h54l-6 62H31z" fill="#e7f7ff" opacity=".9" />
              <path d="M29 63h46l-3 34H32z" fill="#bae6fd" />
              <path d="M161 44c21 0 38 17 38 38s-17 25-38 25-38-4-38-25 17-38 38-38Z" fill="#fff7d6" />
              <path d="M87 70h48" stroke={`url(#g-${item.kind})`} strokeWidth="5" strokeLinecap="round" />
              <path d="m126 61 12 9-12 9" fill="none" stroke="#a78bfa" strokeWidth="4" />
            </>}
            {item.kind === "vinegar" && <>
              <circle cx="51" cy="61" r="27" fill="#facc15" opacity=".85" />
              <circle cx="42" cy="53" r="5" fill="#fde68a" />
              <circle cx="62" cy="67" r="4" fill="#fde68a" />
              <path d="M156 30h32v17l10 16v36h-52V63l10-16z" fill="#f59e0b" opacity=".75" />
              <path d="M87 61h46" stroke={`url(#g-${item.kind})`} strokeWidth="5" strokeLinecap="round" />
              <path d="m124 52 12 9-12 9" fill="none" stroke="#a78bfa" strokeWidth="4" />
            </>}
            {item.kind === "rust" && <>
              <rect x="24" y="44" width="60" height="36" rx="8" fill="#94a3b8" />
              <circle cx="38" cy="57" r="5" fill="#64748b" />
              <path d="M156 42h50v42h-50z" fill="#9a3412" />
              <circle cx="173" cy="58" r="7" fill="#ea580c" /><circle cx="191" cy="72" r="8" fill="#c2410c" />
              <path d="M91 62h49" stroke={`url(#g-${item.kind})`} strokeWidth="5" strokeLinecap="round" />
              <path d="m131 53 12 9-12 9" fill="none" stroke="#a78bfa" strokeWidth="4" />
            </>}
          </svg>
          <h3>{item.title}</h3>
          <p>{item.note}</p>
        </article>
      ))}
    </div>
  );
}

function HistoricalTimeline() {
  const events = [
    ["Harappan craft", "Baked pottery, gypsum cement, faience and metal alloys"],
    ["Classical texts", "Salt extraction, alkalies, dyes, medicines and fermentation"],
    ["Medieval laboratories", "Furnaces, crucibles, flame tests and mercury chemistry"],
    ["Modern chemistry", "Quantitative measurement, atomic theory and laboratory method"],
  ];
  return (
    <ol className={styles.timeline} aria-label="Development of chemical knowledge">
      {events.map(([title, note], index) => (
        <li key={title}>
          <span className={styles.timelineIndex}>{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{title}</h3><p>{note}</p></div>
        </li>
      ))}
    </ol>
  );
}

function ParticleBox({ state }: { state: "solid" | "liquid" | "gas" }) {
  const positions = {
    solid: [[26,30],[52,30],[78,30],[26,56],[52,56],[78,56],[26,82],[52,82],[78,82]],
    liquid: [[25,76],[48,68],[72,78],[32,51],[59,48],[82,55],[48,28],[76,32]],
    gas: [[20,24],[83,20],[45,48],[91,77],[18,86],[65,92]],
  }[state];
  return (
    <div className={cx(styles.particleBox, styles[`particle_${state}`])}>
      <div className={styles.particleStage} aria-hidden="true">
        {positions.map(([left, top], index) => (
          <span key={index} style={{ "--x": `${left}%`, "--y": `${top}%`, "--delay": `${index * -0.18}s` } as CSSProperties} />
        ))}
      </div>
      <strong>{state[0].toUpperCase() + state.slice(1)}</strong>
      <small>{state === "solid" ? "ordered • fixed positions" : state === "liquid" ? "close • able to flow" : "far apart • rapid motion"}</small>
    </div>
  );
}

function PhaseMap() {
  return (
    <div className={styles.phaseMap} aria-label="Interconversion of physical states">
      <div><span className={styles.phaseIcon}>▦</span><strong>Solid</strong></div>
      <div className={styles.phaseArrows}><span>melting →</span><span>← freezing</span></div>
      <div><span className={styles.phaseIcon}>≈</span><strong>Liquid</strong></div>
      <div className={styles.phaseArrows}><span>vaporisation →</span><span>← condensation</span></div>
      <div><span className={styles.phaseIcon}>•••</span><strong>Gas</strong></div>
    </div>
  );
}

function MatterTree() {
  return (
    <div className={styles.tree} role="img" aria-label="Classification of matter">
      <div className={cx(styles.treeNode, styles.treeRoot)}>Matter</div>
      <div className={styles.treeStem} />
      <div className={styles.treeColumns}>
        <div>
          <div className={styles.treeNode}>Mixtures <small>variable composition</small></div>
          <div className={styles.treeChildren}>
            <span>Homogeneous</span><span>Heterogeneous</span>
          </div>
        </div>
        <div>
          <div className={styles.treeNode}>Pure substances <small>fixed composition</small></div>
          <div className={styles.treeChildren}>
            <span>Elements</span><span>Compounds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticalBalance() {
  const labels = [
    ["Beam", 148, 31, 96, 16], ["Rider carrier", 191, 43, 228, 18], ["Rider knob", 220, 53, 258, 44],
    ["Pointer + scale", 151, 74, 94, 94], ["Pan", 55, 113, 17, 137], ["Pan release", 189, 126, 230, 145],
    ["Beam release", 168, 132, 216, 166], ["Levelling screw", 76, 169, 24, 184],
  ] as const;
  return (
    <div className={styles.diagramCard}>
      <div className={styles.diagramTitle}><Scale size={18} /><span>Analytical balance — labelled working parts</span></div>
      <svg className={styles.balanceSvg} viewBox="0 0 300 205" role="img" aria-labelledby="balance-title balance-desc">
        <title id="balance-title">Labelled analytical balance</title>
        <desc id="balance-desc">A beam balance with pans, rider, releases, pointer, scale and levelling screw.</desc>
        <rect x="59" y="177" width="151" height="12" rx="5" fill="#172554" stroke="#38bdf8" />
        <path d="M127 171h32l-7-94h-18z" fill="#1e293b" stroke="#a78bfa" />
        <rect x="67" y="38" width="151" height="9" rx="4" fill="#334155" stroke="#67e8f9" />
        <circle cx="143" cy="42" r="10" fill="#0f172a" stroke="#facc15" strokeWidth="3" />
        <path d="M143 53v50" stroke="#facc15" strokeWidth="2" /><path d="m139 95 4 10 4-10" fill="#facc15" />
        <path d="M84 47 62 111M202 47l21 64" stroke="#94a3b8" strokeWidth="2" />
        <path d="M36 112h53c-3 13-12 21-27 21s-23-8-26-21ZM196 112h54c-3 13-12 21-27 21s-24-8-27-21Z" fill="#0e7490" stroke="#67e8f9" />
        <rect x="175" y="31" width="8" height="22" rx="3" fill="#facc15" />
        <rect x="186" y="29" width="24" height="6" rx="3" fill="#a78bfa" />
        <rect x="170" y="120" width="18" height="10" rx="3" fill="#f59e0b" />
        <rect x="190" y="132" width="18" height="10" rx="3" fill="#22d3ee" />
        <circle cx="77" cy="184" r="8" fill="#334155" stroke="#facc15" />
        {labels.map(([text, x1, y1, x2, y2]) => <g key={text}>
          <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#64748b" strokeWidth="1" />
          <circle cx={x1} cy={y1} r="2.5" fill="#22d3ee" />
          <text x={x2} y={y2} fill="#dbeafe" fontSize="8" textAnchor={x2 > x1 ? "start" : "end"}>{text}</text>
        </g>)}
      </svg>
    </div>
  );
}

function VolumeCube() {
  return (
    <div className={styles.diagramCard}>
      <div className={styles.diagramTitle}><Gauge size={18} /><span>Volume equivalence — see the scale, not only the equation</span></div>
      <svg className={styles.cubeSvg} viewBox="0 0 360 230" role="img" aria-labelledby="cube-title cube-desc">
        <title id="cube-title">One cubic decimetre equals one litre</title>
        <desc id="cube-desc">A ten centimetre cube subdivided into cubic centimetres with one unit cube highlighted.</desc>
        <defs><linearGradient id="cubeFace" x1="0" x2="1"><stop stopColor="#0e7490" stopOpacity=".72"/><stop offset="1" stopColor="#312e81" stopOpacity=".72"/></linearGradient></defs>
        <path d="M77 54 228 30l74 53-151 28z" fill="url(#cubeFace)" stroke="#67e8f9" />
        <path d="M77 54 151 111v90L77 143z" fill="#164e63" fillOpacity=".65" stroke="#67e8f9" />
        <path d="M151 111 302 83v90l-151 28z" fill="#312e81" fillOpacity=".66" stroke="#a78bfa" />
        {Array.from({length:9}).map((_,i)=><path key={`v${i}`} d={`M${92+i*14.5} 51.7 ${166+i*14.5} 106.5v90`} stroke="#38bdf8" strokeOpacity=".24" />)}
        {Array.from({length:9}).map((_,i)=><path key={`h${i}`} d={`M151 ${120+i*8.2} 302 ${92+i*8.2}`} stroke="#a78bfa" strokeOpacity=".25" />)}
        <path d="M151 183l15-3v16l-15 3z" fill="#facc15" stroke="#fde68a" />
        <path d="M77 152h74" stroke="#facc15" strokeWidth="2"/><text x="114" y="170" textAnchor="middle" fill="#fde68a" fontSize="11">10 cm = 1 dm</text>
        <path d="M310 84v89" stroke="#facc15" strokeWidth="2"/><text x="320" y="132" fill="#fde68a" fontSize="11" transform="rotate(90 320 132)">10 cm</text>
        <text x="248" y="211" fill="#f8fafc" fontSize="12">highlighted cell = 1 cm³ = 1 mL</text>
      </svg>
      <div className={styles.equivalenceStrip}><span>1 dm³</span><ChevronRight/><span>1000 cm³</span><ChevronRight/><span>1 L</span><ChevronRight/><span>1000 mL</span></div>
    </div>
  );
}

function GlasswareVisual() {
  const vessels = [
    ["Cylinder", "general measurement", "M20 12h18l-2 70H22zM24 28h10M24 40h10M24 52h10"],
    ["Burette", "precise variable delivery", "M29 8v68M23 12h12M23 22h12M23 32h12M23 42h12M24 76h10M29 76v12M21 72h16"],
    ["Pipette", "accurate fixed transfer", "M29 8v24c-10 9-10 19 0 28v28M25 32h8M25 60h8"],
    ["Volumetric flask", "prepare exact solution", "M25 8v32L12 68c-5 13 3 20 17 20s22-7 17-20L33 40V8M24 25h10"],
  ];
  return <div className={styles.glasswareGrid}>{vessels.map(([name,use,path])=><article key={name}>
    <svg viewBox="0 0 58 100" aria-hidden="true"><path d={path} fill="none" stroke="#67e8f9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 72h30" stroke="#a78bfa" strokeOpacity=".55" strokeWidth="7" /></svg>
    <strong>{name}</strong><span>{use}</span>
  </article>)}</div>;
}

function TemperatureVisual() {
  const scales = [
    ["Kelvin", ["373.15 K", "273.15 K", "0 K"]], ["Celsius", ["100 °C", "0 °C", "−273.15 °C"]], ["Fahrenheit", ["212 °F", "32 °F", "−459.67 °F"]],
  ];
  return <div className={styles.tempGrid}>{scales.map(([name,marks])=><div key={name as string} className={styles.thermometer}>
    <strong>{name as string}</strong><div className={styles.tempRail}><i/><span>{(marks as string[])[0]} <small>boiling</small></span><span>{(marks as string[])[1]} <small>freezing</small></span><span>{(marks as string[])[2]} <small>absolute zero</small></span></div>
  </div>)}</div>;
}

function ScientificNotationVisual() {
  return <div className={styles.notationGrid}>
    <div><strong>232.508</strong><div className={styles.shiftTrack}><span>←</span><span>←</span></div><code>2.32508 × 10²</code><small>decimal moves left → positive power</small></div>
    <div><strong>0.00016</strong><div className={styles.shiftTrack}><span>→</span><span>→</span><span>→</span><span>→</span></div><code>1.6 × 10⁻⁴</code><small>decimal moves right → negative power</small></div>
  </div>;
}

function TargetPlot({ kind, label }: { kind: "both" | "accurate" | "precise" | "neither"; label: string }) {
  const points = {
    both: [[49,50],[52,47],[47,53],[51,54]], accurate: [[33,48],[67,52],[50,30],[50,70]], precise: [[68,31],[72,34],[67,36],[73,30]], neither: [[20,30],[78,22],[28,78],[75,73]],
  }[kind];
  return <div className={styles.targetCard}><svg viewBox="0 0 100 100" role="img" aria-label={label}><circle cx="50" cy="50" r="43"/><circle cx="50" cy="50" r="29"/><circle cx="50" cy="50" r="14"/><path d="M50 7v86M7 50h86"/>{points.map(([x,y],i)=><circle key={i} className={styles.hit} cx={x} cy={y} r="3.7"/>)}</svg><strong>{label}</strong></div>;
}

function AccuracyTargets() {
  return <div className={styles.targets}><TargetPlot kind="both" label="accurate + precise"/><TargetPlot kind="accurate" label="accurate, less precise"/><TargetPlot kind="precise" label="precise, not accurate"/><TargetPlot kind="neither" label="neither"/></div>;
}

function LawsGallery() {
  const laws = [
    ["Conservation of mass", "mass in = mass out", "12 g + 32 g = 44 g"],
    ["Definite proportions", "one compound, one fixed mass ratio", "H₂O always has H:O = 1:8 by mass"],
    ["Multiple proportions", "different compounds give small whole-number ratios", "O masses 16:32 → 1:2"],
    ["Gaseous volumes", "gas volumes combine in simple ratios", "2 volumes H₂ + 1 volume O₂"],
    ["Avogadro principle", "equal gas volumes contain equal molecule counts", "same T and P"],
  ];
  return <div className={styles.lawGrid}>{laws.map(([title,rule,example],index)=><article key={title}>
    <span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{rule}</p><code>{example}</code>
  </article>)}</div>;
}

function MoleBridge() {
  const nodes = [["Particle scale", "atoms • molecules • ions"],["Count", "6.02214076 × 10²³"],["Amount", "1 mol"],["Laboratory scale", "molar mass in grams"]];
  return <div className={styles.moleBridge}>{nodes.map(([title,note],i)=><div key={title} className={styles.bridgeNode}><span>{i+1}</span><strong>{title}</strong><small>{note}</small>{i<nodes.length-1&&<ChevronRight aria-hidden="true"/>}</div>)}</div>;
}

function LimitingReagentVisual() {
  return <div className={styles.limitingVisual}>
    <div><strong>Start</strong><span className={styles.particlePair}>{Array.from({length:4}).map((_,i)=><i key={`a${i}`} className={styles.reactantA}/>)}{Array.from({length:3}).map((_,i)=><i key={`b${i}`} className={styles.reactantB}/>)}</span><small>4 A + 3 B</small></div>
    <ChevronRight/>
    <div><strong>Reaction ratio</strong><code>2A + B → A₂B</code><small>B is available in excess</small></div>
    <ChevronRight/>
    <div><strong>Finish</strong><span className={styles.productPair}>{Array.from({length:2}).map((_,i)=><i key={i}/>)}</span><small>2 A₂B + 1 B left</small></div>
  </div>;
}

function ConcentrationMap() {
  const cards = [
    ["Mass %", "mass solute / mass solution × 100", "no unit", "temperature independent"],
    ["Mole fraction", "moles of component / total moles", "no unit", "temperature independent"],
    ["Molarity", "moles of solute / litres of solution", "mol L⁻¹", "changes with temperature"],
    ["Molality", "moles of solute / kg of solvent", "mol kg⁻¹", "temperature independent"],
  ];
  return <div className={styles.concentrationMap}>{cards.map(([name,formula,unit,temp])=><article key={name}><h3>{name}</h3><code>{formula}</code><div><span>{unit}</span><span>{temp}</span></div></article>)}</div>;
}

function SolvedExample() {
  const steps = [
    ["Problem", "A compound contains 4.07% H, 24.27% C and 71.65% Cl. Its molar mass is 98.96 g mol⁻¹."],
    ["Given", "Assume 100 g: H = 4.07 g, C = 24.27 g, Cl = 71.65 g."],
    ["Convert to moles", "H = 4.07/1.008 = 4.04; C = 24.27/12.011 = 2.021; Cl = 71.65/35.453 = 2.021."],
    ["Simplest ratio", "Divide by 2.021 → H:C:Cl = 2:1:1."],
    ["Empirical formula", "CH₂Cl; empirical-formula mass = 49.48 g mol⁻¹."],
    ["Molecular formula", "n = 98.96/49.48 = 2; therefore C₂H₄Cl₂."],
  ];
  return <ol className={styles.solutionSteps}>{steps.map(([title,text],i)=><li key={title}><span>{i+1}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>;
}

function NoteBody({ body }: { body: string }) {
  const blocks = useMemo(() => body.split(/\n+/).map((line) => line.trim()).filter(Boolean), [body]);
  return <div className={styles.noteBody}>{blocks.map((line,index)=>{
    const clean=line.replace(/^[^\p{L}\p{N}"'(]+/u, "").trim();
    const isHeading = clean.length < 100 && (clean === clean.toUpperCase() || /^(CHAPTER|EXERCISES?|PROBLEM|SOLUTION|STEP\s+\d|LAW\s+OF)/i.test(clean));
    const isFormula = /(?:⟶|→|⇌|×\s*10|=|mol⁻|g mol|kg m|%)/u.test(clean) && clean.length < 240;
    const labelMatch = clean.match(/^([^:]{2,55}):\s*(.+)$/);
    if (isHeading) return <h4 key={index}>{clean}</h4>;
    if (isFormula) return <div className={styles.noteFormula} key={index}>{clean}</div>;
    if (labelMatch) return <p key={index}><strong>{labelMatch[1]}:</strong> {labelMatch[2]}</p>;
    return <p key={index}>{clean}</p>;
  })}</div>;
}

function FullNotesLibrary() {
  return <div className={styles.notesLibrary}>{fullNotes.map((note,index)=><details key={note.id} className={styles.noteDisclosure}>
    <summary><span>{String(index+1).padStart(2,"0")}</span><strong>{note.title}</strong><ChevronRight aria-hidden="true"/></summary>
    <NoteBody body={note.body}/>
  </details>)}</div>;
}

export function ChemistryChapterExperience() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const ids = topicNav.map(([id]) => id);
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(100, (root.scrollTop / max) * 100) : 0);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.progressTrack} aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <div className={styles.ambientA} aria-hidden="true"/><div className={styles.ambientB} aria-hidden="true"/>
      <section id="overview" className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}><FlaskConical size={16}/> Class 11 • Board chemistry</span>
          <h1>Some Basic Concepts<br/><em>of Chemistry</em></h1>
          <p>See particles, units, chemical laws and stoichiometric relationships as one connected system—not as disconnected formulas.</p>
          <div className={styles.heroActions}><a href="#matter">Begin visual chapter <ChevronRight/></a><a href="#practice">Open Board practice</a></div>
          <div className={styles.heroStats}><div><strong>20</strong><span>concept modules</span></div><div><strong>16</strong><span>visual systems</span></div><div><strong>36</strong><span>exercise solutions</span></div></div>
        </div>
        <div className={styles.heroVisual} aria-label="Chemistry scale bridge">
          <div className={styles.orbit}><span/><span/><span/><i>Cu</i></div>
          <div className={styles.heroEquation}>particle <ChevronRight/> mole <ChevronRight/> measurable mass</div>
          <div className={styles.heroCards}><div><Atom/><strong>Microscopic</strong><span>atoms and molecules</span></div><div><Scale/><strong>Macroscopic</strong><span>mass and volume</span></div></div>
        </div>
      </section>

      <nav className={styles.topicNav} aria-label="Chapter topics">
        {topicNav.map(([id,label])=><a key={id} href={`#${id}`} className={active===id?styles.activeTopic:undefined}>{label}</a>)}
      </nav>

      <section className={styles.outcomes} aria-labelledby="outcomes-title"><div><span>Chapter mission</span><h2 id="outcomes-title">Build one quantitative language for chemistry</h2></div><ul><li>Classify matter from particles to bulk samples</li><li>Measure with correct units and significant figures</li><li>Use laws to explain composition and reactions</li><li>Move confidently between mass, mole and particles</li></ul></section>

      <section className={styles.section}>
        <SectionHeading eyebrow="Chemistry in motion" title="A transformation science">Chemistry explains what substances are made of, how their particles are arranged and why one substance becomes another.</SectionHeading>
        <TransformationVisual/>
        <div className={styles.twoColumns}><HistoricalTimeline/><Callout tone="gold" title="Board answer"><p>Chemistry is the branch of science concerned with the composition, structure, properties and transformations of matter.</p></Callout></div>
      </section>

      <section id="matter" className={styles.section}>
        <SectionHeading eyebrow="Matter architecture" title="From particle behaviour to classification">Arrangement, motion and intermolecular attraction explain the observable properties of solids, liquids and gases.</SectionHeading>
        <div className={styles.particleGrid}><ParticleBox state="solid"/><ParticleBox state="liquid"/><ParticleBox state="gas"/></div>
        <PhaseMap/>
        <DataTable caption="Particle-level comparison of physical states" headers={["Property","Solid","Liquid","Gas"]} rows={[
          ["Arrangement","Very close and orderly","Close but disordered","Very far apart"],
          ["Movement","Vibration about fixed positions","Particles slide past one another","Fast, unrestricted motion"],
          ["Shape","Definite","Takes container shape","Fills container"],
          ["Volume","Definite","Definite","Not definite"],
          ["Compressibility","Negligible","Small","High"],
        ]}/>
        <MatterTree/>
        <div className={styles.moleculeGrid}><Molecule label="H₂" atoms={[{text:"H",tone:"cyan"},{text:"H",tone:"cyan"}]}/><Molecule label="O₂" atoms={[{text:"O",tone:"rose"},{text:"O",tone:"rose"}]} bonds={2}/><Molecule label="H₂O" atoms={[{text:"H",tone:"cyan"},{text:"O",tone:"rose"},{text:"H",tone:"cyan"}]}/><Molecule label="CO₂" atoms={[{text:"O",tone:"rose"},{text:"C",tone:"gold"},{text:"O",tone:"rose"}]} bonds={2}/></div>
        <DataTable caption="Physical and chemical properties" headers={["Basis","Physical property","Chemical property"]} rows={[
          ["Meaning","Observed without changing identity","Observed through a chemical change"],
          ["Examples","colour, density, melting point, boiling point","acidity, combustion, reaction with oxygen"],
          ["Particle identity","unchanged","new substances are formed"],
        ]}/>
      </section>

      <section id="measurement" className={styles.section}>
        <SectionHeading eyebrow="Measurement laboratory" title="Every number needs a trustworthy unit">A measurement combines a numerical value with a unit. Precision depends on the instrument and the way it is used.</SectionHeading>
        <DataTable caption="Seven SI base quantities" headers={["Quantity","Symbol","Unit","Unit symbol"]} rows={[
          ["Length","l","metre","m"],["Mass","m","kilogram","kg"],["Time","t","second","s"],["Electric current","I","ampere","A"],["Temperature","T","kelvin","K"],["Amount of substance","n","mole","mol"],["Luminous intensity","Iᵥ","candela","cd"],
        ]}/>
        <div className={styles.diagramPair}><AnalyticalBalance/><VolumeCube/></div>
        <GlasswareVisual/>
        <TemperatureVisual/>
        <div className={styles.formulaRibbon}><span>density = mass / volume</span><span>K = °C + 273.15</span><span>°F = (9/5 × °C) + 32</span></div>
        <Callout tone="rose" title="Common mistake"><p>Mass is the amount of matter and remains constant. Weight is a gravitational force and may change with location.</p></Callout>
      </section>

      <section id="uncertainty" className={styles.section}>
        <SectionHeading eyebrow="Reliable numbers" title="Scientific notation, significant figures and uncertainty">Good chemistry is not only about calculating a number—it is about reporting the number honestly.</SectionHeading>
        <ScientificNotationVisual/>
        <DataTable caption="Core significant-figure rules" headers={["Rule","Example","Significant figures"]} rows={[
          ["All non-zero digits count","285","3"],["Leading zeros do not count","0.0052","2"],["Zeros between non-zero digits count","2.005","4"],["Trailing zeros count when a decimal is shown","0.200","3"],["Exact counted numbers","20 students","unlimited"],
        ]}/>
        <AccuracyTargets/>
        <DataTable caption="Accuracy and precision data: accepted value 2.00 g" headers={["Set","Reading 1","Reading 2","Average","Interpretation"]} rows={[
          ["A","1.95","1.93","1.940","precise, not accurate"],["B","2.05","1.94","1.995","neither strongly precise nor accurate"],["C","2.01","1.99","2.000","accurate and precise"],
        ]}/>
        <div className={styles.calloutGrid}><Callout tone="cyan" title="Addition / subtraction"><p>Keep the same number of decimal places as the least precise term.</p></Callout><Callout tone="violet" title="Multiplication / division"><p>Keep the same number of significant figures as the least precise factor.</p></Callout></div>
      </section>

      <section id="laws" className={styles.section}>
        <SectionHeading eyebrow="Reaction logic" title="The laws that forced chemistry to become quantitative">Repeated mass and volume patterns revealed that matter combines according to strict numerical rules.</SectionHeading>
        <LawsGallery/>
        <DataTable caption="Five laws of chemical combination" headers={["Law","Operational statement","Representative evidence"]} rows={[
          ["Conservation of mass","Total mass remains constant in a closed reaction","reactant mass = product mass"],
          ["Definite proportions","A compound has fixed elemental mass ratios","water always has fixed H:O composition"],
          ["Multiple proportions","Alternative compounds give small whole-number mass ratios","oxygen masses 16:32 = 1:2"],
          ["Gaseous volumes","Reacting gas volumes form simple ratios at same T and P","2 volumes H₂ + 1 volume O₂"],
          ["Avogadro principle","Equal gas volumes contain equal numbers of molecules at same T and P","volume ratio mirrors molecule ratio"],
        ]}/>
        <Callout tone="gold" title="Dalton connection"><p>Dalton explained mass-based laws by proposing atoms that combine in fixed whole-number ratios and are rearranged during reactions.</p></Callout>
      </section>

      <section id="mole" className={styles.section}>
        <SectionHeading eyebrow="Microscopic ↔ macroscopic" title="The mole is chemistry’s counting bridge">A mole connects an invisible number of entities to a mass that can be measured on a laboratory balance.</SectionHeading>
        <MoleBridge/>
        <div className={styles.formulaRibbon}><span>1 mol = 6.02214076 × 10²³ entities</span><span>moles = given mass / molar mass</span><span>particles = moles × Nₐ</span></div>
        <DataTable caption="Atomic, molecular and formula mass" headers={["Quantity","Used for","How it is found","Example"]} rows={[
          ["Atomic mass","one atom / average isotope mixture","weighted isotopic average","C = 12.011 u"],
          ["Molecular mass","discrete molecules","sum of constituent atomic masses","H₂O = 18.02 u"],
          ["Formula mass","ionic lattice formula unit","sum using empirical formula","NaCl = 58.5 u"],
          ["Molar mass","one mole of entities","same numerical value expressed in g mol⁻¹","H₂O = 18.02 g mol⁻¹"],
        ]}/>
        <DataTable caption="Natural isotopic abundance of carbon" headers={["Isotope","Abundance","Isotopic mass"]} rows={[["¹²C","98.892%","12.00000 u"],["¹³C","1.108%","13.00335 u"],["¹⁴C","trace","14.00317 u"]]}/>
      </section>

      <section id="stoichiometry" className={styles.section}>
        <SectionHeading eyebrow="Reaction mathematics" title="Composition, formulas and stoichiometry">A balanced equation is a quantitative map. Its coefficients connect particles, moles, gas volumes and masses.</SectionHeading>
        <SolvedExample/>
        <DataTable caption="Methane combustion interpreted at four scales" headers={["Scale","CH₄","O₂","CO₂","H₂O"]} rows={[
          ["Molecules","1","2","1","2"],["Moles","1 mol","2 mol","1 mol","2 mol"],["Gas volume at same T and P","1 volume","2 volumes","1 volume","2 volumes"],["Mass","16 g","64 g","44 g","36 g"],
        ]}/>
        <LimitingReagentVisual/>
        <Callout tone="rose" title="Limiting reagent"><p>The limiting reagent is consumed first. It sets the maximum possible product; all other reacting material is excess.</p></Callout>
        <ConcentrationMap/>
        <DataTable caption="Concentration terms at a glance" headers={["Expression","Numerator","Denominator","Unit","Temperature dependence"]} rows={[
          ["Mass percent","mass of solute","mass of solution","%","independent"],["Mole fraction","moles of component","total moles","none","independent"],["Molarity","moles of solute","litres of solution","mol L⁻¹","dependent"],["Molality","moles of solute","kg of solvent","mol kg⁻¹","independent"],
        ]}/>
      </section>

      <section id="practice" className={styles.section}>
        <SectionHeading eyebrow="Board mastery" title="Complete chapter notes and solved exercise library">Open only the concept you need. The visual chapter stays compact, while the complete source material remains available below.</SectionHeading>
        <div className={styles.practiceBanner}><Calculator/><div><strong>Recommended revision loop</strong><p>Visual concept → formula recall → solved example → exercise without notes → error review.</p></div></div>
        <FullNotesLibrary/>
      </section>

      <footer className={styles.footer}><span>Synergic Bond Chemistry OS</span><strong>Understand the relationship. Then calculate.</strong></footer>
    </main>
  );
}
