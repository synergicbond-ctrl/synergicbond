import Link from "next/link";
import { HashedWedge, SolidWedge } from "../components/ChemistryDiagram";

type SourceItem = { n: number; active: boolean; group: "triangle" | "square" | "pentagon"; mark: number };
const sourceItems: SourceItem[] = [
  [24,true,"triangle",1],[25,true,"triangle",2],[26,false,"triangle",3],[27,true,"triangle",4],[28,true,"triangle",5],[29,false,"triangle",6],[30,true,"triangle",7],[31,false,"triangle",8],[32,false,"triangle",9],[33,false,"triangle",10],
  [34,true,"square",1],[35,false,"square",2],[36,true,"square",3],[37,true,"square",4],[38,true,"square",5],[39,true,"square",6],[40,false,"square",7],[41,true,"square",8],[42,false,"square",9],
  [43,true,"pentagon",1],[44,true,"pentagon",2],[45,true,"pentagon",3],[46,true,"pentagon",4],[47,true,"pentagon",5],[48,true,"pentagon",6],[49,true,"pentagon",7],[50,true,"pentagon",8],[51,true,"pentagon",9],[52,true,"pentagon",10],[53,true,"pentagon",11],
].map(([n,active,group,mark]) => ({ n: n as number, active: active as boolean, group: group as SourceItem["group"], mark: mark as number }));
const reasons: Record<number, string> = {
  24:"The cyclopropylidene framework fixes two non-equivalent ring paths at the stereogenic arrangement.",25:"The solid and hashed bonds preserve a handed, non-superimposable constrained ring arrangement.",26:"The two substituted paths are symmetry-equivalent, so the drawing is achiral.",27:"The geminal alkene substituents do not restore a mirror plane to the constrained triangle.",28:"The two fixed stereobonds make the ring paths non-equivalent and the structure chiral.",29:"The displayed cyclopropene has an internal symmetry relationship.",30:"The locked small-ring arrangement has unequal paths about the indicated stereogenic element.",31:"The cumulene substituent pattern still contains a symmetry element.",32:"Equivalent substituent paths make this constrained alkene superimposable on its mirror image.",33:"The paired cumulated bonds are symmetrically disposed and give no handed arrangement.",34:"The cyclobutane substituent and exocyclic alkene leave non-equivalent paths at the fixed centre.",35:"The two identical face substituents are related by symmetry, so no chiral molecule results.",36:"The exocyclic alkene and fixed ring substituent create a non-superimposable arrangement.",37:"The indicated wedge-defined face relationship removes improper symmetry.",38:"Both fixed face relationships must be retained; together they leave a chiral framework.",39:"The double-bond restriction prevents the ring paths from becoming symmetry-equivalent.",40:"The geminal substitution pattern restores an internal symmetry relationship.",41:"The fixed substituent set creates a handed cyclobutane environment.",42:"Opposite wedge/dash placement is paired by symmetry in this structure.",43:"The cyclopentane has a locked asymmetric substitution pattern.",44:"The double bond and the two displayed stereobonds remove every improper symmetry element.",45:"The fixed cyclopentene substituents form a non-superimposable arrangement.",46:"The source arrangement remains chiral after retaining the exocyclic double-bond geometry.",47:"The two wedge-defined ring faces are not symmetry-related in the shown alkene.",48:"The three-dimensional substitution pattern is chiral, not merely conformationally drawn.",49:"The fixed ring paths around the displayed wedge substituents are all non-equivalent.",50:"The hashed and solid bonds are part of the stereochemical specification and give a chiral structure.",51:"The locked substituent pattern has no mirror plane.",52:"The two fixed ring stereocentres are not internally compensated.",53:"The final constrained alkene retains a chiral, non-superimposable arrangement.",
};

function Bond({ a, b, double = false }: { a: [number, number]; b: [number, number]; double?: boolean }) { return <><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />{double && <line x1={a[0]} y1={a[1]-4} x2={b[0]} y2={b[1]-4} />}</>; }
function Wedge({ a, b, dash = false }: { a: [number, number]; b: [number, number]; dash?: boolean }) { return dash ? <HashedWedge from={{x:a[0],y:a[1]}} to={{x:b[0],y:b[1]}} width={12}/> : <SolidWedge from={{x:a[0],y:a[1]}} to={{x:b[0],y:b[1]}} width={11}/>; }
/** Exact connectivity variants for the ten printed cyclopropane/cyclopropene entries. */
function TriangleStructure({ v }: { v: number }) {
  const upper: [number, number] = [52, 35]; const lower: [number, number] = [52, 95]; const apex: [number, number] = [104, 65];
  const exo = (tail = false) => <><Bond a={apex} b={[145,65]} double/>{tail && <Bond a={[145,65]} b={[166,101]}/>}</>;
  return <svg fill="currentColor" viewBox="0 0 170 140" className="h-auto w-full text-slate-100" role="img" aria-label={`source structure ${v}, individually drawn cyclopropane or cyclopropene`}><g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <Bond a={upper} b={lower}/><Bond a={upper} b={apex}/><Bond a={lower} b={apex}/>
    {v === 24 && <>{exo(true)}<Wedge a={lower} b={[24,127]}/></>}
    {v === 25 && <>{exo(true)}<Wedge a={upper} b={[28,5]}/><Wedge a={lower} b={[28,126]} dash/></>}
    {v === 26 && <>{exo()}<Wedge a={upper} b={[28,5]}/><Wedge a={lower} b={[28,126]}/></>}
    {v === 27 && <>{exo()}<Bond a={lower} b={[27,129]}/><Bond a={[145,65]} b={[164,27]}/><Bond a={[145,65]} b={[164,103]}/></>}
    {v === 28 && <>{exo(true)}<Wedge a={upper} b={[28,5]}/><Wedge a={lower} b={[28,126]}/></>}
    {v === 29 && <><Bond a={upper} b={lower} double/>{exo()}<Bond a={lower} b={[27,129]}/></>}
    {v === 30 && <><Bond a={upper} b={lower} double/><Bond a={lower} b={[27,129]}/><Wedge a={apex} b={[148,65]}/></>}
    {v === 31 && <>{exo()}<Wedge a={upper} b={[28,5]}/><Bond a={lower} b={[21,132]} double/></>}
    {v === 32 && <><Bond a={upper} b={lower} double/>{exo()}<Bond a={lower} b={[27,129]}/></>}
    {v === 33 && <>{exo()}<Bond a={upper} b={[19,0]} double/><Bond a={lower} b={[19,134]} double/></>}
  </g></svg>;
}
/** Exact connectivity variants for the nine printed cyclobutane/cyclobutene entries. */
function SquareStructure({ v }: { v: number }) {
  const top: [number, number] = [66, 24]; const right: [number, number] = [104, 65]; const bottom: [number, number] = [66, 106]; const left: [number, number] = [28, 65];
  const exo = (tail = false, gem = false) => <><Bond a={right} b={[145,65]} double/>{tail && <Bond a={[145,65]} b={[165,102]}/>} {gem && <><Bond a={[145,65]} b={[164,28]}/><Bond a={[145,65]} b={[164,102]}/></>}</>;
  return <svg fill="currentColor" viewBox="0 0 170 140" className="h-auto w-full text-slate-100" role="img" aria-label={`source structure ${v}, individually drawn cyclobutane or cyclobutene`}><g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <Bond a={top} b={right}/><Bond a={right} b={bottom}/><Bond a={bottom} b={left}/><Bond a={left} b={top}/>
    {v === 34 && <>{exo(true)}<Wedge a={top} b={[66,0]}/></>}
    {v === 35 && <>{exo()}<Wedge a={top} b={[66,0]}/><Wedge a={bottom} b={[66,136]}/></>}
    {v === 36 && <>{exo(false, true)}<Wedge a={bottom} b={[66,136]}/></>}
    {v === 37 && <>{exo()}<Wedge a={left} b={[0,61]}/><Wedge a={bottom} b={[66,136]}/></>}
    {v === 38 && <>{exo(false, true)}<Wedge a={left} b={[0,61]}/><Wedge a={bottom} b={[66,136]}/></>}
    {v === 39 && <><Bond a={left} b={top} double/>{exo()}<Wedge a={bottom} b={[66,136]}/></>}
    {v === 40 && <>{exo(false, true)}<Bond a={left} b={[0,65]}/><Bond a={left} b={[13,101]}/></>}
    {v === 41 && <>{exo(false, true)}<Wedge a={top} b={[66,0]}/><Bond a={left} b={[8,102]}/></>}
    {v === 42 && <>{exo()}<Wedge a={top} b={[66,0]}/><Wedge a={bottom} b={[66,136]}/><Wedge a={left} b={[0,65]} dash/></>}
  </g></svg>;
}
/** Exact connectivity and face-bond variants for the eleven printed cyclopentane entries. */
function PentagonStructure({ v }: { v: number }) {
  const top: [number, number] = [66, 22]; const upperRight: [number, number] = [101, 49]; const lowerRight: [number, number] = [87, 101]; const lowerLeft: [number, number] = [43, 101]; const upperLeft: [number, number] = [24, 53];
  const exo = (tail = false, gem = false) => <><Bond a={top} b={[66,-10]} double/>{tail && <Bond a={[66,-10]} b={[101,-31]}/>} {gem && <><Bond a={[66,-10]} b={[35,-31]}/><Bond a={[66,-10]} b={[101,-31]}/></>}</>;
  return <svg fill="currentColor" viewBox="0 0 170 145" className="h-auto w-full text-slate-100" role="img" aria-label={`source structure ${v}, individually drawn cyclopentane or cyclopentene`}><g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <Bond a={top} b={upperRight}/><Bond a={upperRight} b={lowerRight}/><Bond a={lowerRight} b={lowerLeft}/><Bond a={lowerLeft} b={upperLeft}/><Bond a={upperLeft} b={top}/>
    {v === 1 && <>{exo()}<Wedge a={upperLeft} b={[-3,40]}/><Wedge a={lowerRight} b={[111,130]}/></>}
    {v === 2 && <>{exo()}<Bond a={upperRight} b={lowerRight} double/><Wedge a={upperLeft} b={[-3,40]}/><Wedge a={lowerLeft} b={[22,133]}/></>}
    {v === 3 && <>{exo(true)}<Bond a={upperRight} b={lowerRight} double/><Bond a={upperRight} b={[134,35]}/><Bond a={lowerRight} b={[115,132]}/><Wedge a={lowerLeft} b={[22,133]}/></>}
    {v === 4 && <>{exo(true)}<Wedge a={lowerRight} b={[111,130]}/></>}
    {v === 5 && <>{exo(false, true)}<Bond a={lowerLeft} b={lowerRight} double/><Wedge a={upperLeft} b={[-3,40]}/><Wedge a={upperRight} b={[129,40]}/><Bond a={lowerLeft} b={[20,132]}/><Bond a={lowerRight} b={[111,132]}/></>}
    {v === 6 && <>{exo(true)}<Wedge a={upperLeft} b={[-3,40]}/><Wedge a={upperRight} b={[129,40]}/><Wedge a={lowerLeft} b={[22,133]}/><Bond a={lowerRight} b={[126,95]}/><Bond a={lowerRight} b={[111,132]}/></>}
    {v === 7 && <>{exo(true)}<Wedge a={upperLeft} b={[-3,40]}/><Wedge a={upperRight} b={[129,40]}/><Wedge a={lowerLeft} b={[22,133]}/><Wedge a={lowerRight} b={[111,132]}/></>}
    {v === 8 && <>{exo(true)}<Wedge a={upperLeft} b={[-3,40]}/><Wedge a={lowerLeft} b={[22,133]} dash/><Wedge a={lowerRight} b={[111,132]}/></>}
    {v === 9 && <>{exo(true)}<Wedge a={lowerLeft} b={[22,133]} dash/><Wedge a={lowerRight} b={[111,132]}/></>}
    {v === 10 && <>{exo(true)}<Wedge a={lowerLeft} b={[22,133]}/><Wedge a={lowerRight} b={[111,132]}/></>}
    {v === 11 && <>{exo(true)}<Bond a={lowerLeft} b={lowerRight} double/><Wedge a={upperRight} b={[129,40]}/></>}
  </g></svg>;
}
function Structure({ item }: { item: SourceItem }) {
  const { group:g, mark:v } = item; const points = g === "triangle" ? [[51,95],[51,38],[99,66]] : g === "square" ? [[42,42],[84,42],[96,88],[53,103]] : [[54,18],[91,45],[78,92],[34,92],[19,47]];
  if (g === "triangle") return <TriangleStructure v={v}/>;
  if (g === "square") return <SquareStructure v={v}/>;
  if (g === "pentagon") return <PentagonStructure v={v}/>;
  const edges = points.map((point, i) => [point as [number,number], points[(i+1)%points.length] as [number,number]] as const);
  const terminal = g === "triangle" ? points[2] : g === "square" ? points[1] : points[0];
  const hasTerminalDouble = !(g === "triangle" && v === 4) && !(g === "pentagon" && v === 4);
  const wedges: Array<[number, number, number, number, boolean]> = g === "triangle" ? [[51,38,34,10,false],[51,95,34,120,v===2],[99,66,135,43,v===7]] : g === "square" ? [[42,42,42,10,false],[53,103,53,122,false],[42,42,17,36,v===9]] : [[19,47,0,38,false],[78,92,99,115,v===8||v===9],[91,45,116,35,false],[34,92,16,114,v===8]];
  const select = g === "triangle" ? (v===1?[0]:v===2?[0,1]:v===3?[]:v===4?[]:v===5?[0,1]:v===6?[]:v===7?[0,2]:v===8?[0,1]:v===9?[]:[]) : g === "square" ? (v===1?[0,1]:v===2?[0,1]:v===3?[0,1]:v===4?[2]:v===5?[0,1,2]:v===6?[0,1]:v===7?[]:v===8?[0,1,2]:v===9?[0,1,2]:[]) : (v===4?[1]:v===5?[0,1,2,3]:v===6?[0,1,2]:v===7?[0,1,2]:v===8?[0,1,2,3]:v===9?[0,1]:v===10?[0,1,2,3]:v===11?[2]:[0,1,2]);
  return <svg fill="currentColor" viewBox="0 0 165 130" className="h-auto w-full text-slate-100" role="img" aria-label={`source structure ${item.n}`}><g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{edges.map(([a,b],i)=><Bond key={i} a={a} b={b} double={g === "pentagon" && ((v===2||v===3||v===5||v===11) && i===2)}/>)}{hasTerminalDouble ? <Bond a={terminal as [number,number]} b={[145, terminal[1]]} double/> : <Bond a={terminal as [number,number]} b={[143, terminal[1]-23]}/>} {g === "triangle" && (v===6||v===7||v===9) && <Bond a={points[1] as [number,number]} b={[51,9]} double/>}{g === "triangle" && v===10 && <><Bond a={points[1] as [number,number]} b={[23,8]} double/><Bond a={points[0] as [number,number]} b={[23,122]} double/></>}{g === "pentagon" && v===4 && <Bond a={points[0] as [number,number]} b={[75,0]} double/>}</g>{select.map(i=>{const [x1,y1,x2,y2,dash]=wedges[i];return <Wedge key={i} a={[x1,y1]} b={[x2,y2]} dash={dash}/>})}</svg>;
}

export default function IsomerismPart31(){return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-7xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 106 · Part 31</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Which of the following compounds are chiral? — II</h1><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">This page continues the source structure bank. Every printed cyclic structure, 24–53, is separately rendered with its source check/cross result. Solid wedges project forward; hashed wedges project away.</p></header><section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{sourceItems.map(item=><article key={item.n} className="rounded-2xl border border-white/10 bg-white/[.035] p-3"><div className="flex justify-between"><span className="rounded bg-slate-700 px-2 py-1 text-xs font-black">{item.n}</span><span className="text-xl font-black text-fuchsia-400">{item.active ? "✓" : "✕"}</span></div><Structure item={item}/><p className="border-t border-white/10 pt-2 text-xs leading-5 text-slate-300"><b>{item.active ? "Chiral." : "Achiral."}</b> {reasons[item.n]}</p></article>)}</section><aside className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><strong>Examination point:</strong> a wedge alone proves neither chirality nor optical activity. Compare the two complete ring paths from a possible stereogenic atom and then inspect the entire fixed structure for an improper symmetry element.</aside><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/30" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 30</Link><Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Chapter overview</Link></nav></article></main>}
