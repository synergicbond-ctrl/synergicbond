import type { ReactNode } from "react";
import Link from "next/link";
import katex from "katex";
import type { NoteTone, SolidStateBlock, SolidStatePart } from "./_content";
import { SOLID_STATE_PARTS } from "./_content";

function renderMath(latex: string, displayMode = false) {
  try {
    return {
      __html: katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
        strict: "ignore",
        trust: false,
      }),
    };
  } catch {
    return { __html: `<code>${latex.replaceAll("<", "&lt;")}</code>` };
  }
}

function MathText({ latex, block = false }: { latex: string; block?: boolean }) {
  return (
    <span
      className={block ? "block overflow-x-auto py-1 text-center" : "inline-block align-middle"}
      dangerouslySetInnerHTML={renderMath(latex, block)}
    />
  );
}

function RichText({ text }: { text: string }) {
  const chunks = text.split(/(\$[^$]+\$)/g).filter(Boolean);
  return (
    <>
      {chunks.map((chunk, index) =>
        chunk.startsWith("$") && chunk.endsWith("$") ? (
          <MathText key={`${index}-${chunk}`} latex={chunk.slice(1, -1)} />
        ) : (
          <span key={`${index}-${chunk}`}>{chunk}</span>
        ),
      )}
    </>
  );
}

function toneStyle(tone: NoteTone) {
  if (tone === "trap") return "border-rose-300/35 bg-rose-300/[0.055] text-rose-50";
  if (tone === "exam") return "border-amber-300/35 bg-amber-300/[0.055] text-amber-50";
  if (tone === "result") return "border-emerald-300/35 bg-emerald-300/[0.055] text-emerald-50";
  return "border-cyan-300/35 bg-cyan-300/[0.05] text-cyan-50";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function FigureFrame({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-lg border border-white/10 bg-[#07131f]">
      <div className="overflow-x-auto p-4 md:p-7">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">
        {caption}
      </figcaption>
    </figure>
  );
}

const commonSvg = {
  width: 920,
  height: 360,
  viewBox: "0 0 920 360",
  className: "mx-auto h-auto min-w-[680px] max-w-full",
  role: "img" as const,
};

function Dot({ x, y, r = 10, fill = "#67e8f9" }: { x: number; y: number; r?: number; fill?: string }) {
  return <circle cx={x} cy={y} r={r} fill={fill} stroke="#dff9ff" strokeWidth="1.5" />;
}

function Cube({ x, y, size = 90, depth = 35, stroke = "#94a3b8" }: { x: number; y: number; size?: number; depth?: number; stroke?: string }) {
  const p = `${x},${y} ${x + size},${y} ${x + size},${y + size} ${x},${y + size} ${x},${y}`;
  const q = `${x + depth},${y - depth} ${x + size + depth},${y - depth} ${x + size + depth},${y + size - depth} ${x + depth},${y + size - depth} ${x + depth},${y - depth}`;
  return (
    <g fill="none" stroke={stroke} strokeWidth="2">
      <polyline points={p} />
      <polyline points={q} />
      <line x1={x} y1={y} x2={x + depth} y2={y - depth} />
      <line x1={x + size} y1={y} x2={x + size + depth} y2={y - depth} />
      <line x1={x + size} y1={y + size} x2={x + size + depth} y2={y + size - depth} />
      <line x1={x} y1={y + size} x2={x + depth} y2={y + size - depth} />
    </g>
  );
}

function SolidStateFigure({ id, caption }: { id: string; caption: string }) {
  if (id === "order") {
    const crystal = Array.from({ length: 24 }, (_, i) => ({ x: 105 + (i % 6) * 45, y: 80 + Math.floor(i / 6) * 52 }));
    const amorphous = [
      [590, 82], [642, 72], [705, 94], [766, 69], [821, 103], [574, 145], [635, 137], [690, 158], [752, 131], [830, 164],
      [603, 210], [659, 222], [718, 205], [785, 232], [845, 211], [575, 274], [638, 283], [706, 267], [772, 291], [833, 273],
    ];
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Crystalline and amorphous order">
          <text x="220" y="34" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Crystalline</text>
          <text x="700" y="34" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Amorphous</text>
          <line x1="460" y1="35" x2="460" y2="325" stroke="#334155" strokeWidth="2" />
          {crystal.map((p, i) => <Dot key={i} x={p.x} y={p.y} />)}
          {amorphous.map(([x, y], i) => <Dot key={i} x={x} y={y} fill="#c4b5fd" />)}
          <path d="M90 305 H350" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="220" y="338" textAnchor="middle" fill="#94a3b8" fontSize="15">translation reproduces equivalent environments</text>
          <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22d3ee" /></marker></defs>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "lattice-basis") {
    const pts = Array.from({ length: 12 }, (_, i) => ({ x: 85 + (i % 4) * 70, y: 85 + Math.floor(i / 4) * 75 }));
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Lattice plus basis gives crystal structure">
          <text x="190" y="35" textAnchor="middle" fill="#f8fafc" fontSize="19" fontWeight="700">Lattice</text>
          {pts.map((p, i) => <Dot key={i} x={p.x} y={p.y} r={7} />)}
          <text x="420" y="175" textAnchor="middle" fill="#67e8f9" fontSize="42">+</text>
          <text x="535" y="35" textAnchor="middle" fill="#f8fafc" fontSize="19" fontWeight="700">Basis</text>
          <Dot x={510} y={160} r={18} fill="#67e8f9" /><Dot x={560} y={160} r={13} fill="#fbbf24" />
          <line x1="528" y1="160" x2="547" y2="160" stroke="#f8fafc" strokeWidth="3" />
          <text x="655" y="175" textAnchor="middle" fill="#67e8f9" fontSize="42">=</text>
          <text x="790" y="35" textAnchor="middle" fill="#f8fafc" fontSize="19" fontWeight="700">Crystal</text>
          {pts.map((p, i) => (
            <g key={i} transform={`translate(${p.x + 600},${p.y}) scale(.55)`}>
              <circle cx="-18" cy="0" r="16" fill="#67e8f9" stroke="#dff9ff" />
              <circle cx="18" cy="0" r="12" fill="#fbbf24" stroke="#fff7d6" />
              <line x1="-2" y1="0" x2="6" y2="0" stroke="#f8fafc" strokeWidth="3" />
            </g>
          ))}
        </svg>
      </FigureFrame>
    );
  }

  if (id === "sharing") {
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Unit cell particle sharing">
          <Cube x={155} y={125} size={150} depth={55} stroke="#94a3b8" />
          <Dot x={155} y={125} r={9} /><Dot x={305} y={125} r={9} /><Dot x={210} y={70} r={9} /><Dot x={360} y={70} r={9} />
          <Dot x={155} y={275} r={9} /><Dot x={305} y={275} r={9} /><Dot x={210} y={220} r={9} /><Dot x={360} y={220} r={9} />
          <Dot x={332} y={97} r={11} fill="#fbbf24" /><Dot x={258} y={173} r={13} fill="#c4b5fd" />
          <line x1="450" y1="70" x2="450" y2="300" stroke="#334155" />
          <text x="505" y="105" fill="#67e8f9" fontSize="20" fontWeight="700">corner</text><text x="735" y="105" fill="#e2e8f0" fontSize="20">1/8</text>
          <text x="505" y="155" fill="#fbbf24" fontSize="20" fontWeight="700">face centre</text><text x="735" y="155" fill="#e2e8f0" fontSize="20">1/2</text>
          <text x="505" y="205" fill="#c4b5fd" fontSize="20" fontWeight="700">body centre</text><text x="735" y="205" fill="#e2e8f0" fontSize="20">1</text>
          <text x="505" y="255" fill="#94a3b8" fontSize="17">edge centre contribution = 1/4</text>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "2d-lattices") {
    const panels = [
      [80, "square", 0], [285, "rectangular", 0], [505, "centred rectangular", 1], [735, "hexagonal", 2],
    ] as const;
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Two-dimensional Bravais lattices">
          {panels.map(([x, label, type]) => (
            <g key={label}>
              <text x={x + 60} y="35" textAnchor="middle" fill="#f8fafc" fontSize="15" fontWeight="700">{label}</text>
              {Array.from({ length: 12 }, (_, i) => {
                const row = Math.floor(i / 4), col = i % 4;
                const dx = type === 2 ? row * 18 : 0;
                const px = x + 10 + col * 34 + dx;
                const py = 90 + row * (type === 0 ? 45 : 52);
                return <Dot key={i} x={px} y={py} r={5.5} />;
              })}
              {type === 1 && <><Dot x={x + 27} y={116} r={5.5} fill="#fbbf24" /><Dot x={x + 95} y={116} r={5.5} fill="#fbbf24" /><Dot x={x + 27} y={168} r={5.5} fill="#fbbf24" /><Dot x={x + 95} y={168} r={5.5} fill="#fbbf24" /></>}
            </g>
          ))}
        </svg>
      </FigureFrame>
    );
  }

  if (id === "systems") {
    const labels = ["cubic", "tetragonal", "orthorhombic", "hexagonal", "trigonal", "monoclinic", "triclinic"];
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Seven crystal systems">
          {labels.map((label, i) => {
            const x = 35 + (i % 4) * 220;
            const y = 82 + Math.floor(i / 4) * 155;
            const sx = label === "tetragonal" ? 72 : label === "orthorhombic" ? 88 : 78;
            const sy = label === "tetragonal" ? 105 : label === "hexagonal" ? 82 : 78;
            return <g key={label}><Cube x={x + 35} y={y} size={sx} depth={25} stroke={i % 2 ? "#c4b5fd" : "#67e8f9"} /><text x={x + 82} y={y + sy + 48} textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="700">{label}</text></g>;
          })}
        </svg>
      </FigureFrame>
    );
  }

  if (id === "cubic-contact") {
    const cells = [{ x: 95, name: "SC", line: [95, 225, 225, 225] }, { x: 385, name: "BCC", line: [385, 225, 550, 60] }, { x: 675, name: "FCC", line: [675, 225, 805, 95] }] as const;
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Contact directions in cubic cells">
          {cells.map((c) => <g key={c.name}><Cube x={c.x} y={95} size={130} depth={35} /><line x1={c.line[0]} y1={c.line[1]} x2={c.line[2]} y2={c.line[3]} stroke="#fbbf24" strokeWidth="5" /><text x={c.x + 80} y="310" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">{c.name}</text></g>)}
          <text x="175" y="338" textAnchor="middle" fill="#94a3b8" fontSize="14">edge</text><text x="465" y="338" textAnchor="middle" fill="#94a3b8" fontSize="14">body diagonal</text><text x="755" y="338" textAnchor="middle" fill="#94a3b8" fontSize="14">face diagonal</text>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "packing-2d") {
    const circles = (x: number, triangular: boolean) => Array.from({ length: 20 }, (_, i) => {
      const row = Math.floor(i / 5), col = i % 5;
      return <circle key={i} cx={x + col * 42 + (triangular && row % 2 ? 21 : 0)} cy={85 + row * (triangular ? 36 : 42)} r="20" fill={triangular ? "#c4b5fd" : "#67e8f9"} fillOpacity=".8" stroke="#f8fafc" strokeWidth="1" />;
    });
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Square and triangular packing">
          <text x="235" y="35" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Square layer · CN 4</text>
          <text x="690" y="35" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Triangular layer · CN 6</text>
          {circles(145, false)}{circles(580, true)}
        </svg>
      </FigureFrame>
    );
  }

  if (id === "stacking") {
    const layer = (y: number, offset: number, fill: string, label: string) => <g><text x="65" y={y + 7} fill={fill} fontSize="18" fontWeight="700">{label}</text>{Array.from({ length: 11 }, (_, i) => <circle key={i} cx={130 + offset + i * 62} cy={y} r="29" fill={fill} fillOpacity=".72" stroke="#f8fafc" />)}</g>;
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Close-packed stacking layers">
          {layer(80, 0, "#67e8f9", "A")}{layer(145, 31, "#c4b5fd", "B")}{layer(210, 0, "#67e8f9", "A")}
          <text x="270" y="295" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">ABAB · HCP</text>
          <path d="M460 45 V305" stroke="#334155" strokeWidth="2" />
          <text x="685" y="58" textAnchor="middle" fill="#94a3b8" fontSize="16">third layer over C sites gives ABCABC · CCP</text>
          <circle cx="610" cy="130" r="31" fill="#67e8f9" fillOpacity=".72" stroke="#fff" /><circle cx="675" cy="130" r="31" fill="#67e8f9" fillOpacity=".72" stroke="#fff" /><circle cx="642" cy="185" r="31" fill="#c4b5fd" fillOpacity=".72" stroke="#fff" /><circle cx="706" cy="185" r="31" fill="#c4b5fd" fillOpacity=".72" stroke="#fff" /><circle cx="674" cy="240" r="31" fill="#fbbf24" fillOpacity=".8" stroke="#fff" />
        </svg>
      </FigureFrame>
    );
  }

  if (id === "voids") {
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Tetrahedral and octahedral voids">
          <text x="235" y="38" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Tetrahedral hole</text>
          <line x1="120" y1="250" x2="350" y2="250" stroke="#94a3b8" /><line x1="120" y1="250" x2="235" y2="75" stroke="#94a3b8" /><line x1="350" y1="250" x2="235" y2="75" stroke="#94a3b8" />
          <Dot x={120} y={250} r={42} /><Dot x={350} y={250} r={42} /><Dot x={235} y={75} r={42} /><Dot x={235} y={205} r={18} fill="#fbbf24" />
          <text x="685" y="38" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Octahedral hole</text>
          {[ [685,70],[685,280],[540,175],[830,175],[610,175],[760,175] ].map(([x,y],i)=><Dot key={i} x={x} y={y} r={35} fill="#c4b5fd" />)}
          <Dot x={685} y={175} r={20} fill="#fbbf24" />
        </svg>
      </FigureFrame>
    );
  }

  if (id === "diamond") {
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Diamond cubic structure">
          <Cube x={305} y={115} size={220} depth={70} stroke="#94a3b8" />
          {[[305,115],[525,115],[375,45],[595,45],[305,335],[525,335],[375,265],[595,265]].map(([x,y],i)=><Dot key={i} x={x} y={y} r={10} />)}
          {[[360,170],[470,170],[415,225],[525,225]].map(([x,y],i)=><Dot key={`i${i}`} x={x} y={y} r={12} fill="#fbbf24" />)}
          {[[305,115,360,170],[525,115,470,170],[360,170,415,225],[470,170,415,225],[415,225,525,225],[525,225,595,265]].map((v,i)=><line key={i} x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} stroke="#e2e8f0" strokeWidth="3" />)}
          <text x="130" y="160" fill="#67e8f9" fontSize="18">FCC lattice</text><text x="130" y="190" fill="#fbbf24" fontSize="18">+ 1/4,1/4,1/4 basis</text>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "radius-ratio") {
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Radius ratio coordination geometries">
          {[{x:140,n:3,label:"triangular",r:16},{x:360,n:4,label:"tetrahedral",r:23},{x:585,n:6,label:"octahedral",r:31},{x:800,n:8,label:"cubic",r:39}].map((g)=>
            <g key={g.label}>
              {Array.from({length:g.n},(_,i)=>{const a=(2*Math.PI*i/g.n)-Math.PI/2; return <Dot key={i} x={g.x+75*Math.cos(a)} y={170+75*Math.sin(a)} r={25} />;})}
              <Dot x={g.x} y={170} r={g.r} fill="#fbbf24" />
              <text x={g.x} y="300" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="700">{g.label}</text>
              <text x={g.x} y="328" textAnchor="middle" fill="#94a3b8" fontSize="14">CN {g.n}</text>
            </g>
          )}
        </svg>
      </FigureFrame>
    );
  }

  if (id === "rocksalt" || id === "cscl" || id === "perovskite") {
    const isRock = id === "rocksalt", isCs = id === "cscl";
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label={`${id} crystal structure`}>
          <Cube x={300} y={110} size={230} depth={70} stroke="#94a3b8" />
          {[[300,110],[530,110],[370,40],[600,40],[300,340],[530,340],[370,270],[600,270]].map(([x,y],i)=><Dot key={i} x={x} y={y} r={14} fill={isRock ? "#67e8f9" : "#c4b5fd"} />)}
          {isCs && <Dot x={450} y={190} r={22} fill="#fbbf24" />}
          {isRock && <>{[[415,110],[485,75],[335,225],[565,225],[415,305],[485,270]].map(([x,y],i)=><Dot key={`f${i}`} x={x} y={y} r={17} fill="#fbbf24" />)}<Dot x={450} y={190} r={18} fill="#fbbf24" /></>}
          {!isRock && !isCs && <>{[[415,110],[485,75],[335,225],[565,225],[415,305],[485,270]].map(([x,y],i)=><Dot key={`o${i}`} x={x} y={y} r={16} fill="#f87171" />)}<Dot x={450} y={190} r={20} fill="#fbbf24" /></>}
          <text x="120" y="170" fill="#e2e8f0" fontSize="20" fontWeight="700">{isRock ? "NaCl type" : isCs ? "CsCl type" : "ABO₃ perovskite"}</text>
          <text x="120" y="205" fill="#94a3b8" fontSize="16">{isRock ? "6 : 6 coordination" : isCs ? "8 : 8 coordination" : "B-site octahedron"}</text>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "defects") {
    const grid = (x:number, vacancy=false) => Array.from({length:20},(_,i)=>{const col=i%5,row=Math.floor(i/5); if(vacancy && i===12) return null; return <Dot key={i} x={x+col*48} y={90+row*52} r={12} fill={(i+row)%2?"#c4b5fd":"#67e8f9"}/>;});
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="Schottky and Frenkel defects">
          <text x="235" y="35" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Schottky</text>{grid(125,true)}
          <circle cx="221" cy="194" r="17" fill="none" stroke="#f87171" strokeWidth="3" strokeDasharray="6 5" />
          <text x="690" y="35" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Frenkel</text>{grid(580,true)}<Dot x={720} y={275} r={12} fill="#fbbf24" />
          <path d="M676 194 Q720 220 720 260" fill="none" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arr2)" />
          <defs><marker id="arr2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24" /></marker></defs>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "f-centre") {
    return (
      <FigureFrame caption={caption}>
        <svg {...commonSvg} aria-label="F-centre electron in an anion vacancy">
          {Array.from({length:35},(_,i)=>{const col=i%7,row=Math.floor(i/7), missing=i===17; if(missing) return null; return <Dot key={i} x={255+col*62} y={62+row*58} r={17} fill={(col+row)%2?"#c4b5fd":"#67e8f9"}/>;})}
          <circle cx="441" cy="178" r="25" fill="none" stroke="#f87171" strokeWidth="3" strokeDasharray="7 5" />
          <circle cx="441" cy="178" r="8" fill="#fbbf24" /><text x="441" y="184" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="900">e⁻</text>
          <text x="700" y="170" fill="#fbbf24" fontSize="21" fontWeight="700">electron trapped</text><text x="700" y="202" fill="#94a3b8" fontSize="17">at an anion vacancy</text>
        </svg>
      </FigureFrame>
    );
  }

  if (id === "bands") {
    const panel=(x:number,label:string,gap:number,overlap=false)=><g><text x={x+100} y="35" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="700">{label}</text><rect x={x} y={overlap?120:65} width="200" height="80" rx="8" fill="#c4b5fd" fillOpacity=".75"/><rect x={x} y={overlap?175:65+80+gap} width="200" height="80" rx="8" fill="#67e8f9" fillOpacity=".75"/>{!overlap&&<><line x1={x+20} y1={145} x2={x+180} y2={145} stroke="#fbbf24" strokeDasharray="6 5"/><text x={x+100} y={145+gap/2+18} textAnchor="middle" fill="#fbbf24" fontSize="16">E<tspan baselineShift="sub">g</tspan></text></>}</g>;
    return <FigureFrame caption={caption}><svg {...commonSvg} aria-label="Energy bands in conductor semiconductor and insulator">{panel(60,"metal",0,true)}{panel(360,"semiconductor",35,false)}{panel(660,"insulator",105,false)}</svg></FigureFrame>;
  }

  if (id === "pn") {
    return <FigureFrame caption={caption}><svg {...commonSvg} aria-label="PN junction depletion region"><rect x="90" y="75" width="310" height="210" rx="18" fill="#f9a8d4" fillOpacity=".18" stroke="#f9a8d4"/><rect x="520" y="75" width="310" height="210" rx="18" fill="#67e8f9" fillOpacity=".16" stroke="#67e8f9"/><rect x="400" y="75" width="120" height="210" fill="#fbbf24" fillOpacity=".08" stroke="#fbbf24" strokeDasharray="7 5"/><text x="245" y="55" textAnchor="middle" fill="#f9a8d4" fontSize="25" fontWeight="800">p-type</text><text x="675" y="55" textAnchor="middle" fill="#67e8f9" fontSize="25" fontWeight="800">n-type</text><text x="460" y="320" textAnchor="middle" fill="#fbbf24" fontSize="18">depletion region</text>{Array.from({length:12},(_,i)=><text key={i} x={130+(i%4)*70} y={125+Math.floor(i/4)*65} fill="#f9a8d4" fontSize="28">+</text>)}{Array.from({length:12},(_,i)=><text key={i} x={565+(i%4)*70} y={125+Math.floor(i/4)*65} fill="#67e8f9" fontSize="28">−</text>)}<path d="M535 345 H385" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#arr3)"/><text x="460" y="350" textAnchor="middle" fill="#0f172a" fontSize="10">.</text><defs><marker id="arr3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24" /></marker></defs></svg></FigureFrame>;
  }

  if (id === "superconductivity") {
    return <FigureFrame caption={caption}><svg {...commonSvg} aria-label="Superconducting transition and Meissner effect"><line x1="80" y1="300" x2="400" y2="300" stroke="#94a3b8" strokeWidth="2"/><line x1="80" y1="300" x2="80" y2="50" stroke="#94a3b8" strokeWidth="2"/><path d="M95 280 H220 Q245 280 250 235 L260 90 H390" fill="none" stroke="#67e8f9" strokeWidth="5"/><line x1="250" y1="300" x2="250" y2="60" stroke="#fbbf24" strokeDasharray="7 5"/><text x="250" y="330" textAnchor="middle" fill="#fbbf24" fontSize="18">T₍c₎</text><text x="35" y="170" transform="rotate(-90 35 170)" fill="#e2e8f0" fontSize="17">resistance</text><circle cx="665" cy="175" r="95" fill="#c4b5fd" fillOpacity=".18" stroke="#c4b5fd" strokeWidth="3"/>{[85,115,145,175,205,235,265].map((y,i)=><path key={i} d={`M500 ${y} C555 ${y-25},555 ${y-25},590 ${y-35} M740 ${y-35} C775 ${y-25},775 ${y-25},830 ${y}`} fill="none" stroke="#67e8f9" strokeWidth="3"/>)}<text x="665" y="330" textAnchor="middle" fill="#e2e8f0" fontSize="18">Meissner flux exclusion</text></svg></FigureFrame>;
  }

  if (id === "magnetic-order") {
    const arrow=(x:number,y:number,up:boolean,fill:string)=><g><line x1={x} y1={up?y+25:y-25} x2={x} y2={up?y-25:y+25} stroke={fill} strokeWidth="5"/><path d={up?`M${x-8},${y-18} L${x},${y-32} L${x+8},${y-18}`:`M${x-8},${y+18} L${x},${y+32} L${x+8},${y+18}`} fill="none" stroke={fill} strokeWidth="5"/></g>;
    const group=(base:number,label:string,mode:number)=><g><text x={base+105} y="38" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="700">{label}</text>{Array.from({length:8},(_,i)=>{const col=i%4,row=Math.floor(i/4); const up=mode===0?true:mode===1?(i%2===0):i<4; const fill=mode===2&&i>=4?"#c4b5fd":"#67e8f9"; return arrow(base+45+col*42,120+row*105,up,fill);})}</g>;
    return <FigureFrame caption={caption}><svg {...commonSvg} aria-label="Ferromagnetic antiferromagnetic and ferrimagnetic order">{group(60,"ferromagnetic",0)}{group(350,"antiferromagnetic",1)}{group(650,"ferrimagnetic",2)}</svg></FigureFrame>;
  }

  return null;
}

function BlockView({ block, exampleNumber }: { block: SolidStateBlock; exampleNumber: number }) {
  if (block.kind === "paragraph") {
    return <p className="text-[15.5px] leading-8 text-slate-200 md:text-[16.5px]"><RichText text={block.text} /></p>;
  }
  if (block.kind === "bullets") {
    return <ul className="space-y-2.5 pl-6 text-[15.5px] leading-7 text-slate-200 marker:text-cyan-300 md:text-base">{block.items.map((item)=><li key={item} className="list-disc pl-1"><RichText text={item}/></li>)}</ul>;
  }
  if (block.kind === "formula") {
    return <div className="my-5 overflow-x-auto border-y border-cyan-300/20 bg-cyan-300/[0.035] px-4 py-4"><MathText latex={block.latex} block />{block.note&&<p className="mt-2 text-center text-sm leading-6 text-slate-400"><RichText text={block.note}/></p>}</div>;
  }
  if (block.kind === "table") {
    return <div className="my-6 overflow-x-auto rounded-xl border border-white/10">{block.caption&&<div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-300">{block.caption}</div>}<table className="w-full min-w-[720px] border-collapse text-left text-sm md:text-[15px]"><thead className="bg-[#132638] text-white"><tr>{block.headers.map(h=><th key={h} className="border-b border-white/10 px-4 py-3.5 font-bold"><RichText text={h}/></th>)}</tr></thead><tbody>{block.rows.map((row,ri)=><tr key={ri} className="even:bg-white/[0.025]">{row.map((cell,ci)=><td key={ci} className="border-b border-white/[0.07] px-4 py-3.5 align-top leading-7 text-slate-300"><RichText text={cell}/></td>)}</tr>)}</tbody></table></div>;
  }
  if (block.kind === "note") {
    return <aside className={`my-6 border-l-4 px-5 py-4 ${toneStyle(block.tone)}`}><div className="text-xs font-black uppercase tracking-[.15em] opacity-85">{block.title}</div><p className="mt-2 text-[15px] leading-7"><RichText text={block.text}/></p></aside>;
  }
  if (block.kind === "derivation") {
    return <div className="my-7 overflow-hidden rounded-xl border border-violet-300/20 bg-violet-300/[0.025]"><div className="border-b border-violet-300/15 px-5 py-3 text-sm font-extrabold text-violet-100">Derivation · {block.title}</div><div className="space-y-4 px-5 py-5 md:px-7">{block.steps.map((step,i)=><div key={`${step.latex}-${i}`} className="grid gap-2 md:grid-cols-[minmax(260px,.85fr)_1fr] md:items-center"><div className="overflow-x-auto rounded-lg bg-black/20 px-3 py-3"><MathText latex={step.latex} block/></div><p className="text-sm leading-6 text-slate-400"><RichText text={step.text}/></p></div>)}<div className="border-t border-emerald-300/20 pt-4"><div className="text-center text-[11px] font-black uppercase tracking-[.16em] text-emerald-300">Result</div><MathText latex={block.result} block/></div></div></div>;
  }
  if (block.kind === "example") {
    return <article className="my-7 overflow-hidden rounded-xl border border-emerald-300/20 bg-emerald-300/[0.025]"><header className="flex items-center gap-3 border-b border-emerald-300/15 px-5 py-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300/[0.12] text-sm font-black text-emerald-200">{exampleNumber}</span><div><div className="text-[10px] font-black uppercase tracking-[.16em] text-emerald-300/80">Worked example</div><h4 className="mt-0.5 text-lg font-extrabold text-white">{block.title}</h4></div></header><div className="px-5 py-5 md:px-7"><p className="leading-7 text-slate-200"><RichText text={block.question}/></p><ol className="mt-4 space-y-2.5 pl-6 text-[15px] leading-7 text-slate-400">{block.steps.map(step=><li key={step} className="list-decimal pl-1"><RichText text={step}/></li>)}</ol><div className="mt-5 border-l-4 border-emerald-300/45 bg-emerald-300/[0.055] px-4 py-3 font-semibold leading-7 text-emerald-50"><RichText text={block.answer}/></div></div></article>;
  }
  return <SolidStateFigure id={block.id} caption={block.caption} />;
}

function PartNavigation({ active }: { active: number }) {
  return (
    <nav aria-label="Solid State chapter parts" className="sticky top-2 z-30 mt-5 overflow-x-auto rounded-lg border border-white/10 bg-[#07101a]/95 p-2 shadow-2xl backdrop-blur-xl">
      <div className="flex min-w-max gap-2">
        <Link href="/learn/solid-state/master" className="flex w-36 shrink-0 items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35">Chapter contents</Link>
        {SOLID_STATE_PARTS.map((part)=><Link key={part.number} href={`/learn/solid-state/master/part${String(part.number).padStart(2,"0")}`} aria-current={part.number===active?"page":undefined} className={`w-64 shrink-0 rounded-xl border px-4 py-3 transition ${part.number===active?"border-cyan-300/55 bg-cyan-300/10 text-white":"border-white/10 bg-white/[0.015] text-slate-400 hover:border-cyan-300/30 hover:text-white"}`}><div className="text-[10px] font-black uppercase tracking-[.16em] text-cyan-300/75">Part {String(part.number).padStart(2,"0")}</div><div className="mt-1 text-sm font-bold leading-5">{part.shortTitle}</div></Link>)}
      </div>
    </nav>
  );
}

function getExampleNumber(part: SolidStatePart, sectionIndex: number, blockIndex: number): number {
  return part.sections
    .slice(0, sectionIndex + 1)
    .flatMap((section, index) =>
      index < sectionIndex ? section.blocks : section.blocks.slice(0, blockIndex + 1),
    )
    .filter((block) => block.kind === "example").length;
}

export function SolidStatePartPage({ part }: { part: SolidStatePart }) {
  const previous = SOLID_STATE_PARTS[part.number - 2];
  const next = SOLID_STATE_PARTS[part.number];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,.08),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(139,92,246,.08),transparent_28%),linear-gradient(#07111d,#060b12)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <header className="rounded-lg border border-cyan-300/20 bg-[#0b1a28]/95 px-6 py-8 md:px-10 md:py-11">
          <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">JEE Advanced · Solid State · Part {String(part.number).padStart(2,"0")} of 10</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-[-.035em] text-white md:text-6xl">{part.title}</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{part.description}</p>
        </header>

        <PartNavigation active={part.number}/>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block"><div className="sticky top-32 rounded-lg border border-white/10 bg-[#0a1724]/90 p-5"><div className="text-xs font-black uppercase tracking-[.15em] text-cyan-300">In this part</div><ol className="mt-4 space-y-3 text-sm leading-5 text-slate-400">{part.sections.map((section)=><li key={section.title}><a href={`#${slugify(section.title)}`} className="transition hover:text-white">{section.title}</a></li>)}</ol></div></aside>

          <article className="min-w-0 rounded-lg border border-white/10 bg-[#0b1724]/[0.88] px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,.22)] md:px-9 md:py-10">
            {part.sections.map((section,sectionIndex)=><section key={section.title} id={slugify(section.title)} className={`${sectionIndex?"mt-14 border-t border-white/10 pt-12":""} scroll-mt-32`}><h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{section.title}</h2><div className="mt-6 space-y-5">{section.blocks.map((block,blockIndex)=><BlockView key={`${section.title}-${blockIndex}`} block={block} exampleNumber={block.kind==="example"?getExampleNumber(part,sectionIndex,blockIndex):0}/>)}</div></section>)}

            <section className="mt-14 border-t border-white/10 pt-12"><h2 className="text-2xl font-black text-white md:text-3xl">Part review</h2><div className="mt-6 grid gap-3">{part.review.map((item,index)=><div key={item} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5"><span className="font-black text-cyan-300">{index+1}</span><p className="leading-7 text-slate-300"><RichText text={item}/></p></div>)}</div></section>

            <section className="mt-12 border-t border-white/10 pt-12"><h2 className="text-2xl font-black text-white md:text-3xl">Practice questions</h2><ol className="mt-6 space-y-4 pl-7 text-[15.5px] leading-8 text-slate-300 marker:font-black marker:text-cyan-300 md:text-base">{part.practice.map(q=><li key={q} className="list-decimal pl-2"><RichText text={q}/></li>)}</ol></section>
          </article>
        </div>

        <footer className="mx-auto mt-10 flex max-w-6xl items-stretch justify-between gap-4 border-t border-white/10 pt-8">
          {previous?<Link href={`/learn/solid-state/master/part${String(previous.number).padStart(2,"0")}`} className="max-w-[48%] rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30">← {previous.shortTitle}</Link>:<span/>}
          {next?<Link href={`/learn/solid-state/master/part${String(next.number).padStart(2,"0")}`} className="max-w-[48%] rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-bold text-cyan-50 transition hover:bg-cyan-300/15">{next.shortTitle} →</Link>:<Link href="/learn/solid-state/master" className="max-w-[48%] rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-bold text-cyan-50">Return to contents</Link>}
        </footer>
      </div>
    </main>
  );
}
