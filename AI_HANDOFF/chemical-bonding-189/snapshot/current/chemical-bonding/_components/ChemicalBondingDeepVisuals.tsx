import type { ReactNode } from "react";
import type { ChemicalBondingVisualKey } from "../parts/topicData";
import { BackBondingVisual, DiboraneBridgeVisual, HydrogenBondingVisual, OrbitalOverlapVisual } from "./ChemicalBondingVisuals";

const C = "#67e8f9";
const V = "#c4b5fd";
const A = "#fcd34d";
const G = "#6ee7b7";
const R = "#fca5a5";
const W = "rgba(255,255,255,.78)";
const M = "rgba(255,255,255,.40)";
const L = "rgba(255,255,255,.20)";
const font = { fontFamily: "ui-sans-serif,system-ui", fill: W, fontSize: 11 };
const small = { ...font, fill: M, fontSize: 9.5 };

function Frame({ label, children, viewBox = "0 0 720 300" }: { label: string; children: ReactNode; viewBox?: string }) {
  return <svg viewBox={viewBox} className="h-auto w-full" role="img" aria-label={label}>{children}</svg>;
}
function Atom({ x, y, text, stroke = C, r = 14 }: { x: number; y: number; text: string; stroke?: string; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill="#0b1728" stroke={stroke} strokeWidth="1.7"/><text x={x} y={y+4} textAnchor="middle" style={{...font,fontWeight:800}}>{text}</text></g>;
}
function arrow(x1:number,y1:number,x2:number,y2:number,color=C){
  const a=Math.atan2(y2-y1,x2-x1),h=7;
  return <g stroke={color} fill={color} strokeWidth="2"><line x1={x1} y1={y1} x2={x2} y2={y2}/><polygon points={`${x2},${y2} ${x2-h*Math.cos(a-.5)},${y2-h*Math.sin(a-.5)} ${x2-h*Math.cos(a+.5)},${y2-h*Math.sin(a+.5)}`} stroke="none"/></g>;
}

export function PotentialEnergyVisual(){
  return <Frame label="Potential energy curve showing equilibrium bond distance and dissociation energy">
    <line x1="70" y1="245" x2="670" y2="245" stroke={L}/><line x1="70" y1="30" x2="70" y2="260" stroke={L}/>
    <text x="370" y="286" textAnchor="middle" style={small}>internuclear distance R</text><text x="18" y="140" transform="rotate(-90 18 140)" textAnchor="middle" style={small}>potential energy V(R)</text>
    <line x1="70" y1="95" x2="670" y2="95" stroke={M} strokeDasharray="5 5"/><text x="615" y="84" style={small}>separated atoms, V = 0</text>
    <path d="M85 28 C125 45 148 105 185 180 C222 255 260 238 315 180 C390 103 510 96 665 95" fill="none" stroke={C} strokeWidth="3"/>
    <circle cx="235" cy="229" r="5" fill={A}/><line x1="235" y1="229" x2="235" y2="255" stroke={A} strokeDasharray="4 3"/><text x="235" y="272" textAnchor="middle" style={{...small,fill:A}}>Rₑ</text>
    <line x1="285" y1="95" x2="285" y2="229" stroke={V} strokeWidth="2"/><text x="298" y="166" style={{...small,fill:V}}>Dₑ</text>
    <text x="100" y="50" style={{...small,fill:R}}>repulsive wall</text><text x="430" y="120" style={{...small,fill:G}}>net attraction → minimum</text>
  </Frame>;
}

export function LatticeVisual(){
  const pts=[] as ReactNode[];
  for(let r=0;r<4;r++) for(let c=0;c<8;c++){
    const plus=(r+c)%2===0; pts.push(<g key={`${r}-${c}`}><circle cx={90+c*70} cy={65+r*55} r={15} fill="#0b1728" stroke={plus?R:C} strokeWidth="1.7"/><text x={90+c*70} y={69+r*55} textAnchor="middle" style={{...font,fontWeight:800,fill:plus?R:C}}>{plus?"+":"−"}</text></g>);
  }
  return <Frame label="Alternating ionic lattice and factors controlling lattice energy">
    <text x="330" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>Extended ionic lattice · every ion interacts with many neighbours</text>{pts}
    <text x="85" y="285" style={{...small,fill:A}}>↑ |z⁺z⁻|  →  stronger lattice</text><text x="390" y="285" style={{...small,fill:G}}>↓ (r⁺+r⁻)  →  stronger lattice</text>
  </Frame>;
}

export function OrbitalShapesVisual(){
  return <Frame label="s p and d orbital phase shapes with nodal surfaces">
    <text x="100" y="26" textAnchor="middle" style={{...font,fontWeight:800}}>s orbital</text><circle cx="100" cy="120" r="54" fill="rgba(103,232,249,.11)" stroke={C} strokeWidth="2"/><circle cx="100" cy="120" r="4" fill={W}/><text x="100" y="200" textAnchor="middle" style={small}>spherical · l = 0</text>
    <text x="330" y="26" textAnchor="middle" style={{...font,fontWeight:800}}>p orbital</text><ellipse cx="330" cy="79" rx="25" ry="49" fill="rgba(196,181,253,.16)" stroke={V}/><ellipse cx="330" cy="161" rx="25" ry="49" fill="rgba(103,232,249,.13)" stroke={C}/><line x1="275" y1="120" x2="385" y2="120" stroke={R} strokeDasharray="4 3"/><text x="330" y="225" textAnchor="middle" style={small}>two phases · 1 angular node</text><text x="343" y="72" style={{...font,fill:V}}>+</text><text x="343" y="174" style={{...font,fill:C}}>−</text>
    <text x="560" y="26" textAnchor="middle" style={{...font,fontWeight:800}}>d orbital</text>{[[525,85,V],[595,85,C],[525,155,C],[595,155,V]].map(([x,y,col],i)=><ellipse key={i} cx={x as number} cy={y as number} rx="22" ry="43" transform={`rotate(${i%2?45:-45} ${x} ${y})`} fill={`rgba(${i%2?'103,232,249':'196,181,253'},.13)`} stroke={col as string}/>)}<text x="560" y="225" textAnchor="middle" style={small}>directional · 2 angular nodes</text>
    <text x="360" y="275" textAnchor="middle" style={{...small,fill:R}}>+ / − mark wavefunction phase, not electrical charge</text>
  </Frame>;
}

export function HybridisationVisual(){
  const set=(x:number,y:number,dirs:number[],label:string)=> <g><Atom x={x} y={y} text="A"/>{dirs.map((d,i)=>{const rad=d*Math.PI/180,x2=x+62*Math.cos(rad),y2=y+62*Math.sin(rad);return <line key={i} x1={x} y1={y} x2={x2} y2={y2} stroke={i%2?V:C} strokeWidth="4" strokeLinecap="round"/>})}<text x={x} y={y+92} textAnchor="middle" style={{...small,fill:A}}>{label}</text></g>;
  return <Frame label="Hybridisation direction gallery" viewBox="0 0 760 330">
    {set(95,95,[0,180],"sp · 180°")}{set(285,95,[-90,30,150],"sp² · 120°")}{set(485,95,[-90,30,150,90],"sp³ · tetrahedral model")}{set(665,95,[0,180,-90,45,135],"sp³d · TBP shorthand")}
    {set(210,235,[0,60,120,180,240,300],"sp³d² · octahedral shorthand")}{set(525,235,[0,51,103,154,206,257,309],"sp³d³ · 7-domain shorthand")}
  </Frame>;
}

export function VseprGalleryVisual(){
  const mol=(x:number,y:number,pts:[number,number][],name:string,sub?:string)=> <g><Atom x={x} y={y} text="A" r={10}/>{pts.map(([dx,dy],i)=><g key={i}><line x1={x} y1={y} x2={x+dx} y2={y+dy} stroke={L} strokeWidth="2"/><Atom x={x+dx} y={y+dy} text="X" r={7} stroke={V}/></g>)}<text x={x} y={y+66} textAnchor="middle" style={{...small,fill:C}}>{name}</text>{sub?<text x={x} y={y+80} textAnchor="middle" style={small}>{sub}</text>:null}</g>;
  return <Frame label="Complete VSEPR molecular shape gallery from linear through pentagonal bipyramidal" viewBox="0 0 1000 690">
    <text x="500" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>VSEPR shape atlas · count domains first, then hide lone-pair positions</text>
    {mol(120,100,[[-50,0],[50,0]],"linear","AX₂ · 180°")}
    {mol(370,100,[[0,-45],[-42,24],[42,24]],"trigonal planar","AX₃ · 120°")}
    {mol(620,100,[[-38,-28],[38,-28]],"bent / angular","AX₂E or AX₂E₂")}
    {mol(870,100,[[0,-45],[-42,18],[42,18],[0,42]],"tetrahedral","AX₄ · 109.5°")}

    {mol(120,285,[[-42,22],[42,22],[0,-46]],"trigonal pyramidal","AX₃E")}
    {mol(370,285,[[0,-52],[0,52],[-45,0],[36,-24],[36,24]],"trigonal bipyramidal","AX₅ · 90°/120°")}
    {mol(620,285,[[0,-52],[0,52],[-45,0],[36,24]],"see-saw","AX₄E")}
    {mol(870,285,[[0,-50],[0,50],[45,0]],"T-shaped","AX₃E₂")}

    {mol(120,480,[[0,-50],[0,50],[-48,0],[48,0],[-34,-34],[34,34]],"octahedral","AX₆ · 90°")}
    {mol(370,480,[[0,-52],[-48,0],[48,0],[0,48],[0,-25]],"square pyramidal","AX₅E")}
    {mol(620,480,[[0,-50],[0,50],[-48,0],[48,0]],"square planar","AX₄E₂")}
    {mol(870,480,[[0,-54],[0,54],[50,0],[15,47],[-40,29],[-40,-29],[15,-47]],"pentagonal bipyramidal","AX₇")}

    {mol(500,625,[[0,-48],[46,-15],[28,40],[-28,40],[-46,-15]],"pentagonal planar","AX₅E₂ model")}
    <text x="500" y="678" textAnchor="middle" style={{...small,fill:A}}>LP–LP &gt; LP–BP &gt; BP–BP; multiple bonds occupy one domain but repel more strongly than a comparable single bond.</text>
  </Frame>;
}

export function InorganicStructuresVisual(){
  const bond=(x1:number,y1:number,x2:number,y2:number,w=2)=><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={L} strokeWidth={w}/>;
  return <Frame label="Atlas of important inorganic molecule and ion connectivities" viewBox="0 0 1000 650">
    <text x="500" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>Important inorganic structures · connectivity before hybridisation labels</text>

    <g transform="translate(0,20)"><text x="125" y="40" textAnchor="middle" style={{...font,fontWeight:800,fill:C}}>P oxyacids</text><Atom x={125} y={125} text="P"/>{bond(125,111,125,76,4)}<Atom x={125} y={61} text="O" stroke={R}/>{bond(112,130,78,150)}<Atom x={62} y={158} text="OH" stroke={G} r={18}/>{bond(138,130,172,150)}<Atom x={188} y={158} text="OH" stroke={G} r={18}/>{bond(125,139,125,185)}<Atom x={125} y={198} text="H" stroke={V} r={10}/><text x="125" y="230" textAnchor="middle" style={small}>H₃PO₃: 2 P–OH + 1 P–H → dibasic</text></g>

    <g transform="translate(250,20)"><text x="125" y="40" textAnchor="middle" style={{...font,fontWeight:800,fill:A}}>Sulfur peroxo acid</text><Atom x={70} y={130} text="S"/><Atom x={180} y={130} text="S"/>{bond(84,130,103,130)}{bond(147,130,166,130)}<Atom x={115} y={130} text="O" stroke={R}/><Atom x={135} y={130} text="O" stroke={R}/>{bond(121,130,129,130,3)}<text x="125" y="170" textAnchor="middle" style={small}>H₂S₂O₈ core: S–O–O–S peroxide linkage</text><text x="125" y="195" textAnchor="middle" style={{...small,fill:R}}>peroxide O have oxidation state −1</text></g>

    <g transform="translate(500,20)"><text x="125" y="40" textAnchor="middle" style={{...font,fontWeight:800,fill:V}}>Carbon oxides</text><Atom x={55} y={110} text="C"/><Atom x={135} y={110} text="O" stroke={R}/>{bond(70,106,120,106,4)}{bond(70,114,120,114,2)}<text x="95" y="150" textAnchor="middle" style={small}>CO · strong multiple bond</text><Atom x={55} y={195} text="O" stroke={R}/><Atom x={125} y={195} text="C"/><Atom x={195} y={195} text="O" stroke={R}/>{bond(70,195,110,195,4)}{bond(140,195,180,195,4)}<text x="125" y="230" textAnchor="middle" style={small}>CO₂ · linear · μ = 0</text></g>

    <g transform="translate(750,20)"><text x="125" y="40" textAnchor="middle" style={{...font,fontWeight:800,fill:G}}>Phosphorus oxides</text><polygon points="125,70 65,180 185,180" fill="none" stroke={V} strokeWidth="2"/><Atom x={125} y={70} text="P"/><Atom x={65} y={180} text="P"/><Atom x={185} y={180} text="P"/><Atom x={125} y={125} text="O" stroke={R}/><text x="125" y="215" textAnchor="middle" style={small}>P₄O₆: six P–O–P edge bridges</text><text x="125" y="235" textAnchor="middle" style={{...small,fill:A}}>P₄O₁₀ adds 4 terminal oxo O</text></g>

    <g transform="translate(0,320)"><text x="125" y="35" textAnchor="middle" style={{...font,fontWeight:800,fill:C}}>S / Se oxides</text><Atom x={125} y={115} text="S"/><Atom x={70} y={165} text="O" stroke={R}/><Atom x={180} y={165} text="O" stroke={R}/>{bond(115,128,80,155,3)}{bond(135,128,170,155,3)}<text x="125" y="200" textAnchor="middle" style={small}>SO₂ bent; SO₃ trigonal planar</text><text x="125" y="225" textAnchor="middle" style={small}>SeO₂(s): bridging/polymeric chain motif</text></g>

    <g transform="translate(250,320)"><text x="125" y="35" textAnchor="middle" style={{...font,fontWeight:800,fill:A}}>Borax / tetraborate</text><polygon points="125,65 70,145 125,205 180,145" fill="none" stroke={C} strokeWidth="2"/><Atom x={125} y={65} text="B"/><Atom x={70} y={145} text="B"/><Atom x={180} y={145} text="B"/><Atom x={125} y={205} text="B"/><text x="125" y="240" textAnchor="middle" style={small}>mixed trigonal BO₃ + tetrahedral BO₄ environments</text></g>

    <g transform="translate(500,320)"><text x="125" y="35" textAnchor="middle" style={{...font,fontWeight:800,fill:V}}>Phosphazene ring</text>{Array.from({length:6},(_,i)=>{const a=-Math.PI/2+i*Math.PI/3,x=125+72*Math.cos(a),y=135+72*Math.sin(a),isP=i%2===0;return <g key={i}><Atom x={x} y={y} text={isP?"P":"N"} stroke={isP?C:V}/>{bond(x,y,125+72*Math.cos(a+Math.PI/3),135+72*Math.sin(a+Math.PI/3),2)}</g>})}<text x="125" y="235" textAnchor="middle" style={small}>(NPCl₂)₃: alternating P/N · delocalised P–N bonding</text></g>

    <g transform="translate(750,320)"><text x="125" y="35" textAnchor="middle" style={{...font,fontWeight:800,fill:G}}>Interhalogens</text><Atom x={125} y={125} text="Cl"/><Atom x={125} y={65} text="F" stroke={G}/><Atom x={125} y={185} text="F" stroke={G}/><Atom x={190} y={125} text="F" stroke={G}/>{bond(125,111,125,79)}{bond(125,139,125,171)}{bond(139,125,176,125)}<text x="125" y="220" textAnchor="middle" style={small}>ClF₃ · T-shaped (AX₃E₂)</text><text x="125" y="242" textAnchor="middle" style={{...small,fill:A}}>IF₇ · pentagonal bipyramidal</text></g>

    <text x="500" y="625" textAnchor="middle" style={{...small,fill:A}}>Always identify O–H vs P–H, peroxide O–O, terminal oxo groups, bridges, rings and state-dependent aggregation.</text>
  </Frame>;
}

export function DipoleVisual(){
  return <Frame label="Dipole vector cancellation in CO2 and reinforcement in water">
    <text x="180" y="30" textAnchor="middle" style={{...font,fontWeight:800}}>CO₂ · μ = 0 by cancellation</text><Atom x={80} y={120} text="O" stroke={R}/><Atom x={180} y={120} text="C"/><Atom x={280} y={120} text="O" stroke={R}/><line x1="95" y1="120" x2="165" y2="120" stroke={L} strokeWidth="3"/><line x1="195" y1="120" x2="265" y2="120" stroke={L} strokeWidth="3"/>{arrow(175,85,105,85,R)}{arrow(185,85,255,85,R)}<text x="180" y="185" textAnchor="middle" style={small}>equal opposite bond moments sum to zero</text>
    <text x="545" y="30" textAnchor="middle" style={{...font,fontWeight:800}}>H₂O · vectors reinforce</text><Atom x={545} y={115} text="O" stroke={R}/><Atom x={480} y={190} text="H" stroke={V}/><Atom x={610} y={190} text="H" stroke={V}/><line x1="535" y1="128" x2="490" y2="178" stroke={L} strokeWidth="3"/><line x1="555" y1="128" x2="600" y2="178" stroke={L} strokeWidth="3"/>{arrow(505,165,535,130,C)}{arrow(585,165,555,130,C)}{arrow(545,105,545,55,A)}<text x="560" y="68" style={{...small,fill:A}}>net μ</text><text x="545" y="235" textAnchor="middle" style={small}>bent geometry prevents cancellation</text>
  </Frame>;
}

export function ResonanceVisual(){
  return <Frame label="Resonance contributors and nitrate hybrid">
    <text x="360" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>NO₃⁻ · contributors are not separate molecules</text>
    {[130,360,590].map((x,i)=><g key={i}><Atom x={x} y={130} text="N"/><Atom x={x} y={65} text="O" stroke={R}/><Atom x={x-58} y={165} text="O" stroke={R}/><Atom x={x+58} y={165} text="O" stroke={R}/><line x1={x} y1="116" x2={x} y2="80" stroke={i===0?C:L} strokeWidth={i===0?5:2}/><line x1={x-12} y1="138" x2={x-45} y2="158" stroke={i===1?C:L} strokeWidth={i===1?5:2}/><line x1={x+12} y1="138" x2={x+45} y2="158" stroke={i===2?C:L} strokeWidth={i===2?5:2}/>{i<2?<text x={x+115} y="135" textAnchor="middle" style={{...font,fill:V,fontSize:22}}>↔</text>:null}</g>)}
    <text x="360" y="240" textAnchor="middle" style={{...small,fill:G}}>real hybrid: three equal N–O bonds · average Lewis bond order 4/3</text><line x1="180" y1="260" x2="540" y2="260" stroke={G} strokeDasharray="6 4"/>
  </Frame>;
}

export function MoVisual(){
  const level=(y:number,label:string,color:string=C)=> <g><line x1="285" y1={y} x2="435" y2={y} stroke={color} strokeWidth="2"/><text x="450" y={y+4} style={small}>{label}</text></g>;
  return <Frame label="Molecular orbital energy levels for second-row diatomics">
    <text x="360" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>Valence MO ladder · schematic</text>{level(250,"σ2s")}{level(220,"σ*2s",R)}{level(175,"σ2p / π2p order depends on s–p mixing")}{level(135,"π2p (degenerate pair)",V)}{level(85,"π*2p (degenerate pair)",R)}{level(50,"σ*2p",R)}
    <text x="115" y="88" style={{...small,fill:A}}>B₂/C₂/N₂:</text><text x="115" y="108" style={small}>π2p below σ2p</text><text x="115" y="145" style={{...small,fill:G}}>O₂/F₂:</text><text x="115" y="165" style={small}>σ2p below π2p</text>
    <text x="360" y="286" textAnchor="middle" style={{...small,fill:C}}>BO = (bonding e⁻ − antibonding e⁻)/2 · unpaired e⁻ ⇒ paramagnetic</text>
  </Frame>;
}

export function FajansVisual(){
  return <Frame label="Fajans rule showing cation polarisation of a large anion">
    <text x="360" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>Small/high-charge cation distorts a large polarisable anion</text><circle cx="210" cy="145" r="28" fill="rgba(252,165,165,.10)" stroke={R} strokeWidth="2"/><text x="210" y="150" textAnchor="middle" style={{...font,fill:R,fontWeight:800}}>Mⁿ⁺</text><ellipse cx="470" cy="145" rx="112" ry="72" fill="rgba(103,232,249,.08)" stroke={C} strokeWidth="2"/><ellipse cx="430" cy="145" rx="52" ry="60" fill="rgba(196,181,253,.12)" stroke={V}/><text x="495" y="150" style={{...font,fill:C,fontWeight:800}}>X⁻ cloud</text>{arrow(255,145,365,145,A)}<text x="310" y="125" textAnchor="middle" style={{...small,fill:A}}>polarising field</text><text x="360" y="260" textAnchor="middle" style={small}>more distortion → more electron sharing → greater covalent character</text>
  </Frame>;
}

export function ImfVisual(){
  return <Frame label="Intermolecular force families" viewBox="0 0 780 300">
    {[{x:105,t:"Keesom",s:"permanent ↔ permanent",c:C},{x:295,t:"Debye",s:"permanent → induced",c:V},{x:485,t:"London",s:"instantaneous ↔ induced",c:A},{x:675,t:"Ion–dipole",s:"charge ↔ permanent",c:G}].map((q,i)=><g key={q.t}><circle cx={q.x-35} cy="125" r="25" fill="#0b1728" stroke={q.c}/><circle cx={q.x+35} cy="125" r="25" fill="#0b1728" stroke={q.c}/><line x1={q.x-8} y1="125" x2={q.x+8} y2="125" stroke={q.c} strokeDasharray="4 3"/><text x={q.x} y="55" textAnchor="middle" style={{...font,fontWeight:800,fill:q.c}}>{q.t}</text><text x={q.x} y="205" textAnchor="middle" style={small}>{q.s}</text></g>)}
    <text x="390" y="270" textAnchor="middle" style={small}>Dispersion exists in every species and grows strongly with polarisability/contact surface.</text>
  </Frame>;
}

export function CarbonVisual(){
  return <Frame label="Diamond graphite and fullerene bonding motifs" viewBox="0 0 800 330">
    <text x="130" y="28" textAnchor="middle" style={{...font,fontWeight:800}}>Diamond · sp³ network</text>{[[130,110],[75,165],[185,165],[130,220]].map(([x,y],i)=><Atom key={i} x={x} y={y} text="C" r={10}/>)}<line x1="130" y1="120" x2="80" y2="155" stroke={L}/><line x1="130" y1="120" x2="180" y2="155" stroke={L}/><line x1="80" y1="175" x2="125" y2="215" stroke={L}/><line x1="180" y1="175" x2="135" y2="215" stroke={L}/>
    <text x="400" y="28" textAnchor="middle" style={{...font,fontWeight:800}}>Graphite · sp² sheets</text>{[0,1,2].map(r=><g key={r}>{Array.from({length:5},(_,c)=><circle key={c} cx={330+c*35+(r%2?17:0)} cy={95+r*45} r="8" fill="#0b1728" stroke={C}/>)}</g>)}<line x1="310" y1="245" x2="490" y2="245" stroke={V} strokeDasharray="6 4"/><text x="400" y="265" textAnchor="middle" style={small}>π electrons delocalised within layers</text>
    <text x="670" y="28" textAnchor="middle" style={{...font,fontWeight:800}}>C₆₀ · curved cage</text><circle cx="670" cy="155" r="82" fill="none" stroke={V} strokeWidth="2"/>{Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return <circle key={i} cx={670+72*Math.cos(a)} cy={155+72*Math.sin(a)} r="5" fill={i%2?C:A}/>})}<text x="670" y="265" textAnchor="middle" style={small}>12 pentagons create curvature</text>
  </Frame>;
}

export function SilicateVisual(){
  const tet=(x:number,y:number,s=1)=> <g><polygon points={`${x},${y-27*s} ${x-25*s},${y+18*s} ${x+25*s},${y+18*s}`} fill="rgba(103,232,249,.07)" stroke={C} strokeWidth="1.2"/><Atom x={x} y={y} text="Si" r={7*s}/><circle cx={x} cy={y-27*s} r={4*s} fill={R}/><circle cx={x-25*s} cy={y+18*s} r={4*s} fill={R}/><circle cx={x+25*s} cy={y+18*s} r={4*s} fill={R}/></g>;
  const title=(x:number,y:number,a:string,b:string,c:string)=><g><text x={x} y={y} textAnchor="middle" style={{...small,fill:A,fontWeight:800}}>{a}</text><text x={x} y={y+15} textAnchor="middle" style={small}>{b}</text><text x={x} y={y+29} textAnchor="middle" style={{...small,fill:G}}>{c}</text></g>;
  return <Frame label="Complete silicate classification by SiO4 tetrahedral corner sharing" viewBox="0 0 1100 720">
    <text x="550" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>SiO₄ tetrahedra · polymerisation by corner sharing determines formula and dimensionality</text>

    <g transform="translate(25,55)">{tet(105,75,1.15)}{title(105,155,"Orthosilicate / nesosilicate","0 shared O per tetrahedron","Si:O = 1:4 · [SiO₄]⁴⁻")}</g>
    <g transform="translate(285,55)">{tet(78,75)}{tet(132,75)}<circle cx="105" cy="93" r="5" fill={A}/>{title(105,155,"Pyrosilicate / sorosilicate","1 shared corner in a pair","Si:O = 2:7 · [Si₂O₇]⁶⁻")}</g>
    <g transform="translate(555,55)">{Array.from({length:6},(_,i)=>{const a=-Math.PI/2+i*Math.PI/3;return tet(105+62*Math.cos(a),85+62*Math.sin(a),.68)})}{title(105,180,"Cyclic / ring silicate","2 shared O per tetrahedron","Si:O = 1:3 · e.g. [Si₆O₁₈]¹²⁻")}</g>
    <g transform="translate(825,55)">{[0,1,2,3].map(i=>tet(35+i*52,80,.72))}{title(112,155,"Single-chain / pyroxene","2 shared O per tetrahedron","repeat (SiO₃)ₙ · Si:O = 1:3")}</g>

    <g transform="translate(35,355)">{[0,1,2,3].map(i=>tet(35+i*52,50,.68))}{[0,1,2,3].map(i=>tet(60+i*52,100,.68))}<line x1="60" y1="75" x2="195" y2="75" stroke={V} strokeDasharray="5 3"/>{title(112,165,"Double-chain / amphibole","alternating 2 & 3 shared O","repeat Si₄O₁₁ · Si:O = 4:11")}</g>
    <g transform="translate(315,335)">{[0,1,2].flatMap(r=>[0,1,2,3].map(c=>tet(35+c*52+(r%2?26:0),35+r*48,.58)))}{title(120,205,"Sheet / phyllosilicate","3 shared O per tetrahedron","Si:O = 2:5 · (Si₂O₅)ₙ")}</g>
    <g transform="translate(610,350)">{tet(85,70)}{tet(140,42)}{tet(140,100)}{tet(195,70)}{tet(140,155)}<line x1="100" y1="70" x2="180" y2="70" stroke={V} strokeDasharray="3 3"/>{title(140,220,"3-D / tectosilicate","4 shared O per tetrahedron","Si:O = 1:2 · SiO₂ framework")}</g>
    <g transform="translate(850,345)"><rect x="25" y="25" width="205" height="145" rx="16" fill="rgba(196,181,253,.05)" stroke={V}/>{[0,1,2].map(r=>[0,1,2,3].map(c=><circle key={`${r}-${c}`} cx={55+c*48} cy={55+r*43} r="10" fill="#0b1728" stroke={(r+c)%3===0?A:C}/>))}<circle cx="128" cy="98" r="17" fill="rgba(110,231,183,.12)" stroke={G}/><text x="128" y="102" textAnchor="middle" style={{...small,fill:G}}>Mⁿ⁺</text>{title(128,205,"Aluminosilicate / zeolite","Si→Al creates framework charge","cations/H₂O occupy pores; ion exchange")}</g>

    <text x="550" y="695" textAnchor="middle" style={{...small,fill:A}}>Derivation shortcut: each shared O contributes 1/2 O to one tetrahedron. More sharing lowers O:Si from 4 → 2 and raises framework dimensionality.</text>
  </Frame>;
}


function moSpeciesRow(y:number,name:string,config:string,bo:string,mag:string,color=C){
  return <g><text x="40" y={y} style={{...font,fontWeight:800,fill:color}}>{name}</text><text x="145" y={y} style={small}>{config}</text><text x="560" y={y} style={{...small,fill:A}}>BO {bo}</text><text x="650" y={y} style={{...small,fill:mag.startsWith("para")?R:G}}>{mag}</text></g>;
}

export function MoH2Visual(){
  return <Frame label="MO configurations of H2 H2 plus He2 He2 plus Li2 and Be2" viewBox="0 0 820 330">
    <text x="410" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>1s / 2s diatomics · fill bonding before antibonding</text>
    <text x="145" y="52" style={small}>valence MO configuration</text><text x="560" y="52" style={small}>bond order</text><text x="650" y="52" style={small}>magnetism</text>
    {moSpeciesRow(85,"H₂","(σ1s)²","1","diamagnetic",C)}
    {moSpeciesRow(120,"H₂⁺","(σ1s)¹","0.5","paramagnetic",V)}
    {moSpeciesRow(155,"He₂","(σ1s)²(σ*1s)²","0","diamagnetic",R)}
    {moSpeciesRow(190,"He₂⁺","(σ1s)²(σ*1s)¹","0.5","paramagnetic",V)}
    {moSpeciesRow(225,"Li₂","core cancels; (σ2s)²","1","diamagnetic",C)}
    {moSpeciesRow(260,"Be₂","core cancels; (σ2s)²(σ*2s)²","0","diamagnetic",R)}
    <text x="410" y="305" textAnchor="middle" style={{...small,fill:A}}>ionising a bonding MO lowers BO by 0.5; removing an antibonding electron raises BO by 0.5</text>
  </Frame>;
}

export function MoBcnVisual(){
  return <Frame label="MO configurations for B2 C2 and N2 with s p mixing" viewBox="0 0 820 320">
    <text x="410" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>B₂ → C₂ → N₂ · strong s–p mixing: π2p below σ2p</text>
    <line x1="220" y1="80" x2="600" y2="80" stroke={L}/><text x="610" y="84" style={small}>σ2p</text>
    <line x1="220" y1="125" x2="380" y2="125" stroke={V}/><line x1="440" y1="125" x2="600" y2="125" stroke={V}/><text x="610" y="129" style={small}>π2p (degenerate)</text>
    <line x1="220" y1="180" x2="600" y2="180" stroke={L}/><text x="610" y="184" style={small}>σ*2s</text>
    <line x1="220" y1="225" x2="600" y2="225" stroke={L}/><text x="610" y="229" style={small}>σ2s</text>
    <text x="110" y="95" style={{...font,fill:R,fontWeight:800}}>B₂</text><text x="110" y="130" style={small}>πx¹ πy¹</text><text x="110" y="155" style={{...small,fill:R}}>BO 1 · para</text>
    <text x="110" y="205" style={{...font,fill:C,fontWeight:800}}>C₂</text><text x="110" y="235" style={small}>πx² πy²</text><text x="110" y="260" style={{...small,fill:G}}>BO 2 · dia</text>
    <text x="680" y="115" style={{...font,fill:A,fontWeight:800}}>N₂</text><text x="680" y="145" style={small}>π⁴σ²</text><text x="680" y="170" style={{...small,fill:G}}>BO 3 · dia</text>
    <text x="410" y="295" textAnchor="middle" style={{...small,fill:A}}>N₂⁺ loses a bonding σ2p electron → BO 2.5 → longer than N₂</text>
  </Frame>;
}

export function MoO2Visual(){
  return <Frame label="O2 molecular orbital family bond order and magnetism" viewBox="0 0 860 345">
    <text x="430" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>O₂ family · σ2p below π2p; changes occur in π* antibonding orbitals</text>
    <text x="60" y="70" style={small}>species</text><text x="170" y="70" style={small}>π* occupancy</text><text x="380" y="70" style={small}>bond order</text><text x="510" y="70" style={small}>unpaired e⁻</text><text x="660" y="70" style={small}>magnetism</text>
    {[
      ["O₂⁺","π*¹","2.5","1","paramagnetic",V],
      ["O₂","π*x¹ π*y¹","2","2","paramagnetic",C],
      ["O₂⁻","π*³","1.5","1","paramagnetic",A],
      ["O₂²⁻","π*⁴","1","0","diamagnetic",G],
    ].map((r,i)=>{const y=110+i*52;return <g key={r[0] as string}><text x="60" y={y} style={{...font,fontWeight:800,fill:r[5] as string}}>{r[0]}</text><text x="170" y={y} style={font}>{r[1]}</text><text x="400" y={y} style={font}>{r[2]}</text><text x="550" y={y} style={font}>{r[3]}</text><text x="660" y={y} style={{...font,fill:(r[4] as string).startsWith("para")?R:G}}>{r[4]}</text></g>})}
    <text x="430" y="325" textAnchor="middle" style={{...small,fill:A}}>bond length: O₂⁺ &lt; O₂ &lt; O₂⁻ &lt; O₂²⁻</text>
  </Frame>;
}

export function MoF2Visual(){
  return <Frame label="F2 molecular orbital occupancy" viewBox="0 0 720 300">
    <text x="360" y="25" textAnchor="middle" style={{...font,fontWeight:800}}>F₂ · 14 valence electrons · net BO = 1</text>
    {[70,110,150,190,230].map((y,i)=><g key={y}><line x1="250" y1={y} x2="470" y2={y} stroke={i<2?R:(i===2?V:C)} strokeWidth="2"/><text x="485" y={y+4} style={small}>{["σ*2p (empty)","π*2p⁴","π2p⁴","σ2p²","2s pair cancels"][i]}</text></g>)}
    <text x="360" y="275" textAnchor="middle" style={{...small,fill:G}}>all occupied electrons paired → diamagnetic · bonding − antibonding = 2 electrons → BO 1</text>
  </Frame>;
}

export function MoHeteroVisual(){
  return <Frame label="Heteronuclear molecular orbital energy mismatch" viewBox="0 0 760 330">
    <text x="380" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>Heteronuclear LCAO · unequal AO energies and unequal coefficients</text>
    <text x="90" y="60" style={{...small,fill:A}}>less electronegative A</text><text x="610" y="60" style={{...small,fill:G}}>more electronegative B</text>
    <line x1="80" y1="115" x2="210" y2="115" stroke={A} strokeWidth="2"/><line x1="550" y1="180" x2="680" y2="180" stroke={G} strokeWidth="2"/>
    <line x1="295" y1="85" x2="465" y2="85" stroke={R} strokeWidth="2"/><text x="475" y="89" style={small}>antibonding · more A character</text>
    <line x1="295" y1="220" x2="465" y2="220" stroke={C} strokeWidth="2"/><text x="475" y="224" style={small}>bonding · more B character</text>
    <line x1="210" y1="115" x2="295" y2="85" stroke={L}/><line x1="210" y1="115" x2="295" y2="220" stroke={L}/><line x1="550" y1="180" x2="465" y2="85" stroke={L}/><line x1="550" y1="180" x2="465" y2="220" stroke={L}/>
    <text x="380" y="290" textAnchor="middle" style={small}>larger AO energy mismatch → weaker mixing · g/u labels not used without inversion symmetry</text>
  </Frame>;
}

export function MoCoNoVisual(){
  return <Frame label="CO and NO frontier molecular orbitals" viewBox="0 0 820 330">
    <text x="410" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>CO vs NO · frontier-orbital view</text>
    <g transform="translate(60,45)"><text x="160" y="20" textAnchor="middle" style={{...font,fontWeight:800,fill:C}}>CO · 10 valence e⁻</text><Atom x={100} y={110} text="C"/><Atom x={220} y={110} text="O" stroke={R}/><line x1="116" y1="110" x2="204" y2="110" stroke={C} strokeWidth="5"/><text x="160" y="155" textAnchor="middle" style={small}>BO ≈ 3 · diamagnetic</text><text x="160" y="185" textAnchor="middle" style={{...small,fill:A}}>HOMO: C-centred σ donor</text><text x="160" y="210" textAnchor="middle" style={{...small,fill:V}}>LUMO: π* accepts back-donation</text></g>
    <g transform="translate(440,45)"><text x="160" y="20" textAnchor="middle" style={{...font,fontWeight:800,fill:V}}>NO · 11 valence e⁻</text><Atom x={100} y={110} text="N"/><Atom x={220} y={110} text="O" stroke={R}/><line x1="116" y1="110" x2="204" y2="110" stroke={V} strokeWidth="4"/><text x="160" y="155" textAnchor="middle" style={small}>one π* electron · BO ≈ 2.5</text><text x="160" y="185" textAnchor="middle" style={{...small,fill:R}}>paramagnetic · one unpaired e⁻</text><text x="160" y="215" textAnchor="middle" style={{...small,fill:A}}>11, never 15, valence electrons</text></g>
  </Frame>;
}

export function MoLigandVisual(){
  return <Frame label="Synergic sigma donation and pi back donation in metal carbonyl bonding" viewBox="0 0 800 320">
    <text x="400" y="24" textAnchor="middle" style={{...font,fontWeight:800}}>CO / N₂ as ligands · synergic donation + back-donation</text><Atom x={170} y={150} text="M" stroke={A} r={20}/><Atom x={500} y={150} text="C" stroke={C}/><Atom x={620} y={150} text="O" stroke={R}/><line x1="515" y1="150" x2="605" y2="150" stroke={C} strokeWidth="5"/>
    {arrow(465,115,215,115,C)}<text x="340" y="95" textAnchor="middle" style={{...small,fill:C}}>CO 5σ (HOMO) → empty metal orbital</text>
    {arrow(215,190,465,190,V)}<text x="340" y="220" textAnchor="middle" style={{...small,fill:V}}>filled metal dπ → CO π* (back-donation)</text>
    <text x="400" y="280" textAnchor="middle" style={{...small,fill:A}}>back-donation strengthens M–C but weakens C–O → lower νCO</text>
  </Frame>;
}

export function ChemicalBondingDeepVisual({ kind }: { kind: ChemicalBondingVisualKey }) {
  switch(kind){
    case "potential": return <PotentialEnergyVisual/>;
    case "lattice": return <LatticeVisual/>;
    case "orbitals": return <OrbitalShapesVisual/>;
    case "overlap": return <OrbitalOverlapVisual/>;
    case "hybrid": return <HybridisationVisual/>;
    case "vsepr": return <VseprGalleryVisual/>;
    case "inorganic": return <InorganicStructuresVisual/>;
    case "backbond": return <BackBondingVisual/>;
    case "diborane": return <DiboraneBridgeVisual/>;
    case "dipole": return <DipoleVisual/>;
    case "resonance": return <ResonanceVisual/>;
    case "hbond": return <HydrogenBondingVisual/>;
    case "mo": return <MoVisual/>;
    case "mo-foundation": return <MoVisual/>;
    case "mo-h2": return <MoH2Visual/>;
    case "mo-bcn": return <MoBcnVisual/>;
    case "mo-o2": return <MoO2Visual/>;
    case "mo-f2": return <MoF2Visual/>;
    case "mo-hetero": return <MoHeteroVisual/>;
    case "mo-co-no": return <MoCoNoVisual/>;
    case "mo-ligand": return <MoLigandVisual/>;
    case "fajans": return <FajansVisual/>;
    case "imf": return <ImfVisual/>;
    case "carbon": return <CarbonVisual/>;
    case "silicate": return <SilicateVisual/>;
  }
}
