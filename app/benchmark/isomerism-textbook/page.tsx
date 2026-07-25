import type { ReactNode } from "react";

const TEXTBOOK_RED = "#E3000F";
const FONT_FAMILY = "Arial, Helvetica, sans-serif";
const FONT_SIZE = 16;
const SMALL_FONT_SIZE = 11;
const BOND_WIDTH = 1.8;

type LineProps = { x1: number; y1: number; x2: number; y2: number; width?: number };

function Bond({ x1, y1, x2, y2, width = BOND_WIDTH }: LineProps) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={TEXTBOOK_RED} strokeWidth={width} strokeLinecap="round" />;
}

function DoubleBond({ x1, y1, x2, y2, ix1, iy1, ix2, iy2 }: LineProps & { ix1: number; iy1: number; ix2: number; iy2: number }) {
  return <><Bond x1={x1} y1={y1} x2={x2} y2={y2} /><Bond x1={ix1} y1={iy1} x2={ix2} y2={iy2} /></>;
}

function Label({ x, y, children, anchor = "start", small = false }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; small?: boolean }) {
  return <text x={x} y={y} textAnchor={anchor} fill={TEXTBOOK_RED} fontFamily={FONT_FAMILY} fontSize={small ? SMALL_FONT_SIZE : FONT_SIZE} fontWeight="700">{children}</text>;
}

function Arrow({ width = 100, x = 0 }: { width?: number; x?: number }) {
  return <svg x={x} y="0" width={width} height="46" viewBox={`0 0 ${width} 46`} aria-label="reaction arrow">
    <Bond x1={4} y1={25} x2={width - 13} y2={25} />
    <path d={`M ${width - 13} 20 L ${width - 3} 25 L ${width - 13} 30 Z`} fill={TEXTBOOK_RED} />
  </svg>;
}

function Benzene({ x, y, bromine = false, sulfonate = false, salt = false }: { x: number; y: number; bromine?: boolean; sulfonate?: boolean; salt?: boolean }) {
  const p = [[x, y + 25], [x + 35, y + 5], [x + 70, y + 25], [x + 70, y + 65], [x + 35, y + 85], [x, y + 65]];
  return <g>
    <Bond x1={p[0][0]} y1={p[0][1]} x2={p[1][0]} y2={p[1][1]} /><Bond x1={p[1][0]} y1={p[1][1]} x2={p[2][0]} y2={p[2][1]} /><Bond x1={p[2][0]} y1={p[2][1]} x2={p[3][0]} y2={p[3][1]} /><Bond x1={p[3][0]} y1={p[3][1]} x2={p[4][0]} y2={p[4][1]} /><Bond x1={p[4][0]} y1={p[4][1]} x2={p[5][0]} y2={p[5][1]} /><Bond x1={p[5][0]} y1={p[5][1]} x2={p[0][0]} y2={p[0][1]} />
    <DoubleBond x1={x + 5} y1={y + 28} x2={x + 30} y2={y + 13} ix1={x + 9} iy1={y + 31} ix2={x + 34} iy2={y + 16} /><DoubleBond x1={x + 64} y1={y + 29} x2={x + 64} y2={y + 59} ix1={x + 59} iy1={y + 31} ix2={x + 59} iy2={y + 57} /><DoubleBond x1={x + 29} y1={y + 76} x2={x + 5} y2={y + 62} ix1={x + 32} iy1={y + 72} ix2={x + 8} iy2={y + 58} />
    {bromine && <><Bond x1={x} y1={y + 65} x2={x - 25} y2={y + 80} /><Label x={x - 31} y={y + 88} anchor="end">Br</Label></>}
    {sulfonate && <><Bond x1={x + 70} y1={y + 25} x2={x + 90} y2={y + 13} /><Label x={x + 96} y={y + 18}>S</Label><DoubleBond x1={x + 100} y1={y + 10} x2={x + 90} y2={y - 10} ix1={x + 104} iy1={y + 8} ix2={x + 94} iy2={y - 12} /><Label x={x + 84} y={y - 14}>O</Label><DoubleBond x1={x + 105} y1={y + 20} x2={x + 123} y2={y + 2} ix1={x + 108} iy1={y + 23} ix2={x + 126} iy2={y + 5} /><Label x={x + 126} y={y + 3}>O</Label>{salt ? <><Bond x1={x + 108} y1={y + 28} x2={x + 124} y2={y + 36} /><Label x={x + 128} y={y + 43}>O<tspan fontSize={SMALL_FONT_SIZE} dy="-7">⊖</tspan></Label><Label x={x + 148} y={y + 10}>Na<tspan fontSize={SMALL_FONT_SIZE} dy="-7">⊕</tspan></Label></> : <><Bond x1={x + 108} y1={y + 28} x2={x + 124} y2={y + 36} /><Label x={x + 128} y={y + 43}>OMe</Label></>}</>}
  </g>;
}

function Problem1a() {
  return <svg width="590" height="140" viewBox="0 0 590 140" aria-label="Problem 1a aryl sulfonate substitution" style={{ flex: "0 0 590px" }}>
    <Benzene x={34} y={38} bromine sulfonate /><Label x={194} y={76}>PhSH</Label><Label x={194} y={101}>NaOH</Label><Arrow x={230} width={78} /><Benzene x={330} y={38} bromine sulfonate salt /><Label x={504} y={104}>+</Label><Label x={527} y={104}>PhSMe</Label>
  </svg>;
}

function Problem2a() {
  return <svg width="500" height="136" viewBox="0 0 500 136" aria-label="Problem 2a acidic methanol substitution" style={{ flex: "0 0 500px" }}>
    <path d="M42 44 75 25 108 44 108 82 75 101 42 82 Z" fill="none" stroke={TEXTBOOK_RED} strokeWidth={BOND_WIDTH} strokeLinecap="round" strokeLinejoin="round" /><Label x={70} y={98}>O</Label><Bond x1={108} y1={44} x2={128} y2={32} /><Label x={132} y={32}>Cl</Label><Bond x1={108} y1={82} x2={128} y2={94} /><Label x={132} y={100}>Cl</Label><Label x={170} y={67}>MeOH</Label><Arrow x={230} width={58} /><path d="M317 44 350 25 383 44 383 82 350 101 317 82 Z" fill="none" stroke={TEXTBOOK_RED} strokeWidth={BOND_WIDTH} strokeLinecap="round" strokeLinejoin="round" /><Label x={345} y={98}>O</Label><Bond x1={383} y1={44} x2={403} y2={32} /><Label x={407} y={32}>Cl</Label><Bond x1={383} y1={82} x2={403} y2={94} /><Label x={407} y={100}>OMe</Label>
  </svg>;
}

function Problem2b() {
  return <svg width="520" height="150" viewBox="0 0 520 150" aria-label="Problem 2b hydrochloric acid ring opening" style={{ flex: "0 0 520px" }}>
    <path d="M47 56 66 20 105 20 124 56 96 84 66 84 Z" fill="none" stroke={TEXTBOOK_RED} strokeWidth={BOND_WIDTH} strokeLinecap="round" strokeLinejoin="round" /><Label x={89} y={82}>O</Label><Bond x1={47} y1={56} x2={23} y2={70} /><Label x={8} y={77}>Me</Label><Label x={166} y={51}>HCl</Label><Arrow x={230} width={58} /><Bond x1={325} y1={78} x2={357} y2={59} /><Bond x1={357} y1={59} x2={389} y2={78} /><Bond x1={389} y1={78} x2={421} y2={59} /><Bond x1={421} y1={59} x2={453} y2={78} /><Label x={354} y={47}>OH</Label><Bond x1={357} y1={59} x2={357} y2={39} /><Label x={458} y={78}>Cl</Label>
  </svg>;
}

function Problem4() {
  return <svg width="870" height="190" viewBox="0 0 870 190" aria-label="Problem 4 doxazosin precursor two-stage synthesis" style={{ flex: "0 0 870px" }}>
    <Benzene x={28} y={38} /><Label x={94} y={42}>OH</Label><Label x={94} y={87}>OH</Label><Label x={152} y={81}>+</Label><Bond x1={187} y1={72} x2={218} y2={52} /><Bond x1={218} y1={52} x2={249} y2={72} /><Bond x1={249} y1={72} x2={249} y2={103} /><Label x={175} y={78}>Br</Label><Label x={251} y={119}>Br</Label><Label x={220} y={47}>CO₂Me</Label><Label x={307} y={49}>K₂CO₃, acetone</Label><Arrow x={365} width={80} /><Label x={463} y={81}>A</Label><Label x={510} y={46}>KOH</Label><Label x={510} y={76}>H₂O</Label><Arrow x={535} width={72} /><g transform="translate(625 25)"><Benzene x={0} y={38} /><Bond x1={70} y1={63} x2={103} y2={44} /><Label x={104} y={46}>O</Label><Bond x1={116} y1={50} x2={136} y2={64} /><Bond x1={136} y1={64} x2={136} y2={102} /><Bond x1={136} y1={102} x2={103} y2={121} /><Label x={101} y={128}>O</Label><Bond x1={94} y1={120} x2={70} y2={103} /><Bond x1={136} y1={102} x2={161} y2={116} /><Label x={164} y={123}>CO₂H</Label></g><Label x={736} y={174}>80% yield</Label>
  </svg>;
}

function Hash({ x, y, length }: { x: number; y: number; length: number }) { return <Bond x1={x - length / 2} y1={y} x2={x + length / 2} y2={y} width={1.45} />; }
function Problem8b() {
  return <svg width="600" height="168" viewBox="0 0 600 168" aria-label="Problem 8b ditosylate cyclisation with stereochemical hashed bonds" style={{ flex: "0 0 600px" }}>
    <Bond x1={47} y1={104} x2={79} y2={85} /><Bond x1={79} y1={85} x2={112} y2={104} /><Bond x1={112} y1={104} x2={145} y2={85} /><Bond x1={145} y1={85} x2={178} y2={104} /><Bond x1={178} y1={104} x2={211} y2={85} /><Bond x1={211} y1={85} x2={244} y2={104} /><Bond x1={145} y1={85} x2={132} y2={52} /><Bond x1={145} y1={85} x2={166} y2={52} /><Hash x={79} y={72} length={7} /><Hash x={79} y={66} length={11} /><Hash x={79} y={59} length={15} /><Label x={79} y={42} anchor="middle">OTs</Label><Hash x={211} y={72} length={7} /><Hash x={211} y={66} length={11} /><Hash x={211} y={59} length={15} /><Label x={211} y={42} anchor="middle">OTs</Label><Label x={298} y={78}>KOH</Label><Label x={298} y={108}>H₂S</Label><Arrow x={350} width={58} /><path d="M429 78 462 58 498 72 528 101 498 129 462 129 429 109 Z" fill="none" stroke={TEXTBOOK_RED} strokeWidth={BOND_WIDTH} strokeLinecap="round" strokeLinejoin="round" /><Bond x1={498} y1={72} x2={498} y2={42} /><Bond x1={498} y1={72} x2={518} y2={48} /><Bond x1={462} y1={129} x2={440} y2={142} /><Bond x1={498} y1={129} x2={521} y2={142} /><Label x={490} y={109}>S</Label>
  </svg>;
}

function Scheme({ title, children }: { title: string; children: ReactNode }) {
  return <section style={{ marginBottom: 28 }}><h2 style={{ margin: "0 0 10px", color: "#111", fontFamily: FONT_FAMILY, fontSize: 18 }}>{title}</h2><div style={{ overflowX: "auto", overflowY: "visible", border: "1px solid #eee", padding: 14, background: "#fff" }}><div style={{ width: "max-content", minWidth: "max-content", display: "flex", alignItems: "center" }}>{children}</div></div></section>;
}

export default function IsomerismTextbookBenchmarkPage() {
  return <main style={{ minHeight: "100vh", background: "#fff", padding: "32px", color: "#111" }}><article style={{ width: "min(100%, 1040px)", margin: "0 auto", fontFamily: FONT_FAMILY }}><p style={{ margin: 0, color: TEXTBOOK_RED, fontWeight: 700, fontSize: 13 }}>LOCAL VISUAL BENCHMARK · native authored SVG size</p><h1 style={{ margin: "6px 0 24px", fontSize: 28 }}>Isomerism textbook reaction diagrams</h1><Scheme title="Problem 1(a)"><Problem1a /></Scheme><Scheme title="Problem 2(a)"><Problem2a /></Scheme><Scheme title="Problem 2(b)"><Problem2b /></Scheme><Scheme title="Problem 4 — both stages"><Problem4 /></Scheme><Scheme title="Problem 8(b) — hashed wedge stereochemical example"><Problem8b /></Scheme></article></main>;
}
