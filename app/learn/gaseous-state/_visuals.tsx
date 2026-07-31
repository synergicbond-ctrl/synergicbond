import type { ReactNode } from "react";
import type { VisualId } from "./_types";

const c = {
  bg: "#050a14",
  line: "#334155",
  grid: "#172033",
  text: "#cbd5e1",
  muted: "#718096",
  cyan: "#22d3ee",
  blue: "#60a5fa",
  violet: "#a78bfa",
  rose: "#fb7185",
  amber: "#fbbf24",
  green: "#86efac",
  white: "#f8fafc",
};

function Frame({ children, viewBox = "0 0 800 420" }: { children: ReactNode; viewBox?: string }) {
  return <svg viewBox={viewBox} role="img" aria-hidden="true"><rect width="100%" height="100%" fill={c.bg} />{children}</svg>;
}

function Grid() {
  return <g opacity=".52">{Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={80 + i * 80} y1="40" x2={80 + i * 80} y2="370" stroke={c.grid} />)}{Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="70" y1={70 + i * 70} x2="750" y2={70 + i * 70} stroke={c.grid} />)}</g>;
}

function Axes({ x = "x", y = "y", x0 = 90, y0 = 340, x1 = 735, y1 = 55 }: { x?: string; y?: string; x0?: number; y0?: number; x1?: number; y1?: number }) {
  return <g><line x1={x0} y1={y0} x2={x1} y2={y0} stroke={c.text} strokeWidth="2" /><line x1={x0} y1={y0} x2={x0} y2={y1} stroke={c.text} strokeWidth="2" /><path d={`M${x1-10} ${y0-6} L${x1} ${y0} L${x1-10} ${y0+6}`} fill="none" stroke={c.text} strokeWidth="2" /><path d={`M${x0-6} ${y1+10} L${x0} ${y1} L${x0+6} ${y1+10}`} fill="none" stroke={c.text} strokeWidth="2" /><text x={x1-6} y={y0+26} fill={c.text} fontSize="16" textAnchor="end">{x}</text><text x={x0-16} y={y1+5} fill={c.text} fontSize="16" textAnchor="end">{y}</text></g>;
}

function Label({ x, y, children, fill = c.text, size = 14, anchor = "start" }: { x: number; y: number; children: ReactNode; fill?: string; size?: number; anchor?: "start" | "middle" | "end" }) {
  return <text x={x} y={y} fill={fill} fontSize={size} textAnchor={anchor} fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">{children}</text>;
}

function ParticlePressure() {
  const particles = [[180,110],[260,150],[340,95],[430,170],[520,115],[610,190],[220,250],[330,290],[460,250],[570,300]];
  return <Frame><rect x="130" y="65" width="540" height="285" rx="24" fill="#071323" stroke={c.blue} strokeWidth="2" />{particles.map(([x,y], index) => <g key={index}><circle cx={x} cy={y} r="11" fill={index % 2 ? c.cyan : c.violet} opacity=".86" /><line x1={x-18} y1={y+12} x2={x+22} y2={y-18} stroke={c.muted} strokeWidth="2" /><path d={`M${x+14} ${y-20} L${x+24} ${y-18} L${x+20} ${y-8}`} fill="none" stroke={c.muted} strokeWidth="2" /></g>)}<line x1="610" y1="190" x2="668" y2="190" stroke={c.rose} strokeWidth="5" /><path d="M650 178 L670 190 L650 202" fill="none" stroke={c.rose} strokeWidth="5" /><Label x={400} y={40} anchor="middle" fill={c.white} size={19}>Molecular impacts transfer momentum to the wall</Label><Label x={688} y={194} fill={c.rose}>F⊥</Label><Label x={400} y={387} anchor="middle" fill={c.cyan}>P = time-averaged normal force / area</Label></Frame>;
}

function Barometer() {
  return <Frame><rect x="120" y="300" width="250" height="55" rx="12" fill="#10243a" stroke={c.blue} /><rect x="205" y="70" width="80" height="255" rx="36" fill="none" stroke={c.text} strokeWidth="3" /><rect x="220" y="130" width="50" height="195" fill={c.amber} opacity=".7" /><rect x="220" y="85" width="50" height="45" fill="#030711" /><line x1="300" y1="130" x2="400" y2="130" stroke={c.cyan} strokeDasharray="6 6" /><Label x={410} y={135} fill={c.cyan}>h</Label><Label x={245} y={105} anchor="middle" fill={c.muted}>vacuum</Label><path d="M90 325 C120 290 140 290 170 325" fill="none" stroke={c.violet} strokeWidth="4" /><Label x={70} y={285} fill={c.violet}>Pₐₜₘ</Label><Label x={470} y={190} fill={c.white} size={24}>Pₐₜₘ = ρgh</Label><Label x={470} y={230} fill={c.muted}>The tube shape does not matter;</Label><Label x={470} y={255} fill={c.muted}>only the vertical height does.</Label></Frame>;
}

function Manometer() {
  return <Frame><path d="M160 95 V300 Q160 340 200 340 H260 Q300 340 300 300 V95" fill="none" stroke={c.text} strokeWidth="18" strokeLinecap="round" /><path d="M160 230 V300 Q160 325 200 325 H260 Q285 325 285 300 V165" fill="none" stroke={c.amber} strokeWidth="14" strokeLinecap="round" /><line x1="315" y1="165" x2="410" y2="165" stroke={c.cyan} strokeDasharray="6 5" /><line x1="315" y1="230" x2="410" y2="230" stroke={c.cyan} strokeDasharray="6 5" /><Label x={425} y={202} fill={c.cyan}>h</Label><Label x={110} y={72} fill={c.violet}>gas</Label><Label x={270} y={72} fill={c.green}>atmosphere</Label><Label x={470} y={125} fill={c.white} size={20}>Lower liquid level → higher pressure</Label><Label x={470} y={175} fill={c.rose}>Pgas = Pₐₜₘ + ρgh</Label><Label x={470} y={230} fill={c.muted}>Reverse the sign when the gas-side</Label><Label x={470} y={255} fill={c.muted}>surface is higher.</Label></Frame>;
}

function MercuryPlug() {
  return <Frame><g transform="translate(80 55)"><rect x="20" y="80" width="240" height="52" rx="26" fill="none" stroke={c.text} strokeWidth="3" /><rect x="120" y="83" width="55" height="46" fill={c.amber} opacity=".72" /><Label x={140} y={45} anchor="middle" fill={c.white}>horizontal: head = 0</Label></g><g transform="translate(415 30) rotate(-28 135 110)"><rect x="20" y="80" width="240" height="52" rx="26" fill="none" stroke={c.text} strokeWidth="3" /><rect x="120" y="83" width="55" height="46" fill={c.amber} opacity=".72" /></g><line x1="535" y1="155" x2="535" y2="260" stroke={c.cyan} strokeDasharray="6 5" /><Label x={548} y={215} fill={c.cyan}>L sin θ</Label><g transform="translate(260 240) rotate(90 135 110)"><rect x="20" y="80" width="240" height="52" rx="26" fill="none" stroke={c.text} strokeWidth="3" /><rect x="120" y="83" width="55" height="46" fill={c.amber} opacity=".72" /></g><Label x={400} y={390} anchor="middle" fill={c.white}>Pressure difference from a liquid plug = ρg × vertical projection</Label></Frame>;
}

function GraphGrammar() {
  return <Frame><Grid /><Axes /><path d="M110 320 L680 80" stroke={c.cyan} strokeWidth="4" fill="none" /><path d="M120 95 C200 120 250 210 310 270 C370 320 470 335 690 337" stroke={c.violet} strokeWidth="4" fill="none" /><path d="M100 330 Q360 315 650 70" stroke={c.rose} strokeWidth="4" fill="none" /><Label x={570} y={105} fill={c.cyan}>straight line</Label><Label x={410} y={260} fill={c.violet}>rectangular hyperbola</Label><Label x={535} y={165} fill={c.rose}>parabolic / exponential curvature</Label></Frame>;
}

function BoyleFamily() {
  return <Frame><Grid /><Axes x="V" y="P" /><path d="M120 305 C190 200 310 125 690 78" fill="none" stroke={c.rose} strokeWidth="4" /><path d="M120 330 C230 245 390 185 700 145" fill="none" stroke={c.violet} strokeWidth="4" /><path d="M120 350 C270 300 470 250 710 225" fill="none" stroke={c.cyan} strokeWidth="4" /><Label x={690} y={70} fill={c.rose}>T₃</Label><Label x={695} y={140} fill={c.violet}>T₂</Label><Label x={705} y={220} fill={c.cyan}>T₁</Label><Label x={575} y={380} fill={c.muted}>T₃ &gt; T₂ &gt; T₁</Label></Frame>;
}

function CharlesZero() {
  return <Frame><Grid /><Axes x="t / °C" y="V" x0={135} /><line x1="135" y1="340" x2="135" y2="45" stroke={c.text} strokeWidth="2" /><path d="M135 300 L690 80" stroke={c.cyan} strokeWidth="4" /><path d="M90 318 L690 80" stroke={c.cyan} strokeWidth="3" strokeDasharray="8 7" /><line x1="90" y1="340" x2="90" y2="318" stroke={c.rose} strokeWidth="3" /><Label x={90} y={370} anchor="middle" fill={c.rose}>−273.15</Label><Label x={220} y={45} fill={c.white}>extrapolated zero volume</Label><Label x={560} y={120} fill={c.cyan}>V ∝ T(K)</Label></Frame>;
}

function GasLawTransformations() {
  const boxes = [[65,55,"P vs V","M120 180 C170 110 250 85 320 78"],[420,55,"P vs 1/V","M455 180 L700 75"],[65,225,"PV vs P","M105 335 L335 335"],[420,225,"log P vs log V","M455 285 L700 365"]] as const;
  return <Frame>{boxes.map(([x,y,title,path], index) => <g key={title}><rect x={x} y={y} width="315" height="145" rx="15" fill="#071323" stroke={c.line} /><Label x={x+16} y={y+25} fill={c.text}>{title}</Label><path d={path} fill="none" stroke={[c.rose,c.cyan,c.green,c.violet][index]} strokeWidth="4" /></g>)}</Frame>;
}

function PVTSurface() {
  return <Frame><path d="M150 330 L620 330 L720 245 L250 245 Z" fill="#0b2031" stroke={c.blue} /><path d="M150 330 L250 245 L250 70 L150 155 Z" fill="#081827" stroke={c.blue} /><path d="M250 245 C360 190 480 115 690 72 L720 245 C520 270 360 285 150 330 Z" fill="url(#pvgrad)" opacity=".9" /><defs><linearGradient id="pvgrad" x1="0" y1="1" x2="1" y2="0"><stop stopColor={c.violet} stopOpacity=".28" /><stop offset="1" stopColor={c.cyan} stopOpacity=".56" /></linearGradient></defs><path d="M250 245 C360 190 480 115 690 72" fill="none" stroke={c.cyan} strokeWidth="4" /><Label x={710} y={270} fill={c.text}>V</Label><Label x={130} y={350} fill={c.text}>T</Label><Label x={235} y={60} fill={c.text}>P</Label><Label x={455} y={165} fill={c.white}>PV = nRT</Label></Frame>;
}

function DaltonMixture() {
  return <Frame><rect x="75" y="90" width="285" height="235" rx="25" fill="#071323" stroke={c.blue} strokeWidth="2" />{[[130,140,c.cyan],[190,210,c.violet],[290,135,c.rose],[250,275,c.green],[320,245,c.amber],[120,275,c.blue]].map(([x,y,fill],i)=><circle key={i} cx={x as number} cy={y as number} r="14" fill={fill as string} />)}<Label x={218} y={60} anchor="middle" fill={c.white}>same V and T</Label><Label x={455} y={125} fill={c.cyan} size={20}>P = P₁ + P₂ + P₃</Label><Label x={455} y={170} fill={c.text}>Pᵢ = xᵢP</Label><Label x={455} y={215} fill={c.text}>Each gas behaves as if alone</Label><Label x={455} y={245} fill={c.text}>in the whole container volume.</Label></Frame>;
}

function AmagatVolume() {
  return <Frame><rect x="90" y="150" width="610" height="120" rx="20" fill="#071323" stroke={c.text} strokeWidth="2" /><rect x="92" y="152" width="180" height="116" rx="18" fill={c.cyan} opacity=".28" /><rect x="272" y="152" width="240" height="116" fill={c.violet} opacity=".28" /><rect x="512" y="152" width="186" height="116" rx="18" fill={c.rose} opacity=".28" /><Label x={182} y={215} anchor="middle" fill={c.cyan}>V₁ = x₁V</Label><Label x={392} y={215} anchor="middle" fill={c.violet}>V₂ = x₂V</Label><Label x={605} y={215} anchor="middle" fill={c.rose}>V₃ = x₃V</Label><Label x={400} y={100} anchor="middle" fill={c.white} size={22}>V = ΣVᵢ at common T and P</Label></Frame>;
}

function ConnectedVessels() {
  return <Frame><rect x="85" y="110" width="250" height="205" rx="26" fill="#071323" stroke={c.cyan} strokeWidth="3" /><rect x="465" y="110" width="250" height="205" rx="26" fill="#071323" stroke={c.violet} strokeWidth="3" /><path d="M335 210 H465" stroke={c.text} strokeWidth="12" /><circle cx="400" cy="210" r="20" fill={c.rose} /><Label x={210} y={90} anchor="middle" fill={c.cyan}>V₁, T₁</Label><Label x={590} y={90} anchor="middle" fill={c.violet}>V₂, T₂</Label><Label x={400} y={360} anchor="middle" fill={c.white}>At equilibrium: one common pressure, redistributed moles</Label></Frame>;
}

function EffusionApparatus() {
  return <Frame><rect x="90" y="85" width="360" height="250" rx="28" fill="#071323" stroke={c.blue} strokeWidth="3" /><circle cx="450" cy="210" r="7" fill={c.rose} /><path d="M457 210 C520 190 555 145 635 130" fill="none" stroke={c.cyan} strokeWidth="3" /><path d="M457 210 C525 215 575 210 690 215" fill="none" stroke={c.violet} strokeWidth="3" /><path d="M457 210 C520 235 565 285 650 305" fill="none" stroke={c.green} strokeWidth="3" />{[[160,140],[245,210],[335,135],[180,285],[360,280],[285,300]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="12" fill={i%2?c.violet:c.cyan} />)}<Label x={270} y={55} anchor="middle" fill={c.white}>small aperture: molecular flow</Label><Label x={570} y={85} fill={c.rose}>r ∝ PA / √(MT)</Label></Frame>;
}

function SequentialEffusion() {
  return <Frame>{[0,1,2,3].map((i)=><g key={i}><rect x={70+i*180} y={155} width="125" height="120" rx="17" fill="#071323" stroke={[c.cyan,c.blue,c.violet,c.rose][i]} /><Label x={132+i*180} y={210} anchor="middle" fill={c.white}>stage {i+1}</Label>{i<3?<path d={`M195 ${215} H${240+i*180}`} stroke={c.text} strokeWidth="3" markerEnd="url(#arr)" />:null}</g>)}<defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={c.text} /></marker></defs><Label x={400} y={95} anchor="middle" fill={c.cyan} size={21}>light/heavy ratio is multiplied by √(Mheavy/Mlight) each ideal step</Label><Label x={400} y={335} anchor="middle" fill={c.muted}>Collected effusate is richer in the lighter component.</Label></Frame>;
}

function EvaporationEquilibrium() {
  return <Frame><rect x="105" y="235" width="590" height="100" rx="16" fill="#123047" /><path d="M105 235 Q400 200 695 235" fill="#173f5b" /><circle cx="260" cy="180" r="12" fill={c.cyan} /><circle cx="390" cy="130" r="12" fill={c.violet} /><circle cx="550" cy="185" r="12" fill={c.green} /><path d="M260 224 C250 205 250 195 260 188" stroke={c.cyan} strokeWidth="3" fill="none" /><path d="M390 145 C410 170 420 190 420 225" stroke={c.rose} strokeWidth="3" fill="none" /><path d="M550 224 C548 210 548 203 550 197" stroke={c.green} strokeWidth="3" fill="none" /><Label x={220} y={90} fill={c.cyan}>evaporation</Label><Label x={500} y={90} fill={c.rose}>condensation</Label><Label x={400} y={375} anchor="middle" fill={c.white}>At equilibrium the two rates are equal, not zero.</Label></Frame>;
}

function HumidityDewpoint() {
  return <Frame><Grid /><Axes x="T" y="vapour pressure" /><path d="M110 325 C220 310 350 265 470 185 C575 115 650 78 710 65" fill="none" stroke={c.cyan} strokeWidth="4" /><line x1="110" y1="235" x2="700" y2="235" stroke={c.rose} strokeWidth="3" strokeDasharray="8 6" /><line x1="380" y1="340" x2="380" y2="235" stroke={c.amber} strokeWidth="3" strokeDasharray="8 6" /><circle cx="380" cy="235" r="7" fill={c.amber} /><Label x={395} y={225} fill={c.amber}>dew point</Label><Label x={520} y={220} fill={c.rose}>actual p(H₂O)</Label><Label x={585} y={105} fill={c.cyan}>p*(T)</Label></Frame>;
}

function ContainerTypes() {
  const items = [[70,"rigid","V fixed"],[270,"piston","P fixed"],[470,"open","P,V fixed; n changes"],[650,"balloon","P≈Pext; V limited"]] as const;
  return <Frame>{items.map(([x,name,note],i)=><g key={name}><rect x={x-55} y={120} width="120" height="150" rx={i===3?60:16} fill="#071323" stroke={[c.cyan,c.violet,c.green,c.rose][i]} strokeWidth="3" />{i===1?<rect x={x-52} y={155} width="114" height="12" fill={c.amber} />:null}{i===2?<path d={`M${x-10} 120 V85 H${x+20}`} stroke={c.green} strokeWidth="3" fill="none" />:null}<Label x={x+5} y={305} anchor="middle" fill={c.white}>{name}</Label><Label x={x+5} y={330} anchor="middle" fill={c.muted} size={11}>{note}</Label></g>)}</Frame>;
}

function WetGas() {
  return <Frame><path d="M110 285 H690" stroke={c.blue} strokeWidth="6" /><path d="M200 285 V145 Q200 100 250 100 H550 Q600 100 600 145 V285" fill="#071323" stroke={c.text} strokeWidth="3" /><circle cx="315" cy="175" r="11" fill={c.cyan} /><circle cx="435" cy="135" r="11" fill={c.violet} /><circle cx="520" cy="205" r="11" fill={c.cyan} /><path d="M90 285 C140 250 160 240 200 230" stroke={c.green} strokeWidth="4" fill="none" /><Label x={400} y={70} anchor="middle" fill={c.white}>gas collected over water</Label><Label x={400} y={340} anchor="middle" fill={c.cyan}>Pdry = Ptotal − p*(H₂O)</Label></Frame>;
}

function ClausiusPlot() {
  return <Frame><Grid /><Axes x="1/T" y="ln P" /><line x1="145" y1="90" x2="690" y2="310" stroke={c.rose} strokeWidth="4" /><Label x={455} y={145} fill={c.rose}>slope = −ΔHᵥₐₚ/R</Label><Label x={470} y={360} fill={c.muted}>straight line if ΔHᵥₐₚ is nearly constant</Label></Frame>;
}

function KineticCube() {
  return <Frame><path d="M170 105 L450 105 L600 205 L320 205 Z M170 105 V315 L320 365 V205 M450 105 V315 L600 365 V205 M170 315 L450 315 L600 365 L320 365" fill="none" stroke={c.blue} strokeWidth="3" /><circle cx="340" cy="230" r="13" fill={c.cyan} /><path d="M340 230 L445 175" stroke={c.rose} strokeWidth="4" /><path d="M430 172 L448 174 L440 189" fill="none" stroke={c.rose} strokeWidth="4" /><Label x={455} y={168} fill={c.rose}>uₓ</Label><Label x={110} y={70} fill={c.white}>successive impacts with one wall</Label><Label x={470} y={335} fill={c.cyan}>Δpₓ = 2muₓ</Label></Frame>;
}

function DegreesFreedom() {
  return <Frame><g transform="translate(120 90)"><circle cx="80" cy="100" r="27" fill={c.cyan} /><path d="M80 100 H190 M80 100 V15 M80 100 L25 170" stroke={c.text} strokeWidth="3" /><Label x={80} y={220} anchor="middle" fill={c.white}>3 translation</Label></g><g transform="translate(330 85)"><circle cx="70" cy="100" r="22" fill={c.violet} /><circle cx="160" cy="100" r="22" fill={c.violet} /><line x1="92" y1="100" x2="138" y2="100" stroke={c.text} strokeWidth="5" /><path d="M115 35 C165 50 180 80 175 120" fill="none" stroke={c.rose} strokeWidth="3" /><Label x={115} y={225} anchor="middle" fill={c.white}>2 rotation (linear)</Label></g><g transform="translate(560 85)"><circle cx="35" cy="100" r="20" fill={c.green} /><circle cx="145" cy="100" r="20" fill={c.green} /><path d="M58 100 C75 70 105 130 122 100" fill="none" stroke={c.amber} strokeWidth="5" /><Label x={90} y={225} anchor="middle" fill={c.white}>vibration: K + U</Label></g><Label x={400} y={365} anchor="middle" fill={c.cyan}>Each quadratic energy term contributes ½kT per molecule</Label></Frame>;
}

function SpeedComparison() {
  return <Frame><Axes x="speed" y="distribution" /><path d="M115 340 C210 330 255 160 355 125 C450 95 565 160 710 310" fill="none" stroke={c.cyan} strokeWidth="4" /><line x1="355" y1="340" x2="355" y2="125" stroke={c.rose} strokeDasharray="7 5" /><line x1="425" y1="340" x2="425" y2="135" stroke={c.violet} strokeDasharray="7 5" /><line x1="485" y1="340" x2="485" y2="155" stroke={c.green} strokeDasharray="7 5" /><Label x={355} y={370} anchor="middle" fill={c.rose}>uₘₚ</Label><Label x={425} y={370} anchor="middle" fill={c.violet}>ū</Label><Label x={485} y={370} anchor="middle" fill={c.green}>uᵣₘₛ</Label></Frame>;
}

function VelocitySpace() {
  return <Frame><circle cx="400" cy="215" r="120" fill="none" stroke={c.violet} strokeWidth="20" opacity=".35" /><circle cx="400" cy="215" r="108" fill="none" stroke={c.cyan} strokeWidth="3" /><line x1="400" y1="215" x2="505" y2="165" stroke={c.rose} strokeWidth="4" /><Label x={520} y={160} fill={c.rose}>u</Label><Label x={400} y={75} anchor="middle" fill={c.white}>thin spherical shell in velocity space</Label><Label x={400} y={375} anchor="middle" fill={c.cyan}>volume = 4πu²du</Label></Frame>;
}

function MaxwellTemperature() {
  return <Frame><Grid /><Axes x="u" y="f(u)" /><path d="M105 340 C160 335 205 190 280 115 C345 55 410 125 470 245 C530 330 620 338 720 340" fill="none" stroke={c.cyan} strokeWidth="4" /><path d="M105 340 C210 335 285 255 390 190 C500 122 570 225 630 300 C660 330 690 338 720 340" fill="none" stroke={c.rose} strokeWidth="4" /><Label x={285} y={95} fill={c.cyan}>T₁</Label><Label x={545} y={170} fill={c.rose}>T₂ &gt; T₁</Label><Label x={445} y={385} anchor="middle" fill={c.muted}>higher T: broader, lower peak, shifted right</Label></Frame>;
}

function MaxwellMass() {
  return <Frame><Grid /><Axes x="u" y="f(u)" /><path d="M105 340 C150 330 190 165 260 95 C320 40 370 150 430 270 C500 340 610 340 720 340" fill="none" stroke={c.violet} strokeWidth="4" /><path d="M105 340 C210 335 300 250 410 190 C520 130 590 220 650 300 C680 330 700 338 720 340" fill="none" stroke={c.green} strokeWidth="4" /><Label x={245} y={78} fill={c.violet}>heavier</Label><Label x={560} y={170} fill={c.green}>lighter</Label><Label x={430} y={385} anchor="middle" fill={c.muted}>same T: speeds scale as 1/√M</Label></Frame>;
}

function EnergyDistribution() {
  return <Frame><Grid /><Axes x="E" y="g(E)" /><path d="M95 340 C145 165 250 92 360 145 C485 205 600 305 720 335" fill="none" stroke={c.amber} strokeWidth="4" /><line x1="300" y1="340" x2="300" y2="130" stroke={c.rose} strokeDasharray="7 6" /><Label x={300} y={370} anchor="middle" fill={c.rose}>Eₘₚ = ½kT</Label><Label x={490} y={90} fill={c.amber}>g(E) ∝ √E e⁻ᴱ⁄ᵏᵀ</Label></Frame>;
}

function CollisionCylinder() {
  return <Frame><rect x="110" y="145" width="570" height="135" rx="67" fill="#071323" stroke={c.blue} strokeWidth="3" strokeDasharray="8 6" /><circle cx="150" cy="212" r="15" fill={c.rose} /><path d="M165 212 H630" stroke={c.cyan} strokeWidth="4" /><path d="M615 202 L635 212 L615 222" fill="none" stroke={c.cyan} strokeWidth="4" />{[[245,180],[315,245],[390,185],[485,240],[565,180]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="16" fill={i%2?c.violet:c.green} opacity=".75" />)}<Label x={400} y={105} anchor="middle" fill={c.white}>collision tube swept in one second</Label><Label x={400} y={325} anchor="middle" fill={c.cyan}>volume = πσ²ū</Label></Frame>;
}

function CollisionMixture() {
  return <Frame>{[[170,120,c.cyan,"A"],[300,230,c.violet,"B"],[470,130,c.cyan,"A"],[610,250,c.violet,"B"]].map(([x,y,fill,label],i)=><g key={i}><circle cx={x as number} cy={y as number} r={label==="A"?18:26} fill={fill as string} /><Label x={x as number} y={(y as number)+5} anchor="middle" fill={c.bg}>{label as string}</Label></g>)}<path d="M190 125 C260 145 300 190 320 215" fill="none" stroke={c.rose} strokeWidth="3" /><path d="M495 145 C540 165 570 205 590 230" fill="none" stroke={c.green} strokeWidth="3" /><Label x={400} y={60} anchor="middle" fill={c.white}>unlike collision diameter σAB = (dA+dB)/2</Label><Label x={400} y={350} anchor="middle" fill={c.cyan}>relative mean speed uses the reduced mass μAB</Label></Frame>;
}

function MeanFreePath() {
  return <Frame><path d="M90 305 L175 230 L250 275 L350 130 L455 200 L560 95 L690 155" fill="none" stroke={c.cyan} strokeWidth="4" />{[[90,305],[175,230],[250,275],[350,130],[455,200],[560,95],[690,155]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="9" fill={i%2?c.rose:c.violet} />)}<Label x={400} y={365} anchor="middle" fill={c.white}>λ = average distance between successive collisions</Label><Label x={410} y={45} anchor="middle" fill={c.cyan}>λ = kT / (√2 πσ²P)</Label></Frame>;
}

function WallFlux() {
  return <Frame><line x1="620" y1="70" x2="620" y2="350" stroke={c.text} strokeWidth="6" />{[[120,110,560,130],[180,250,565,220],[300,330,570,310],[250,160,570,180]].map(([x1,y1,x2,y2],i)=><g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={[c.cyan,c.violet,c.green,c.rose][i]} strokeWidth="3" /><path d={`M${x2-14} ${y2-7} L${x2} ${y2} L${x2-14} ${y2+7}`} fill="none" stroke={[c.cyan,c.violet,c.green,c.rose][i]} strokeWidth="3" /></g>)}<Label x={360} y={55} anchor="middle" fill={c.white}>only molecules with velocity component toward the wall arrive</Label><Label x={360} y={380} anchor="middle" fill={c.cyan}>number flux = ¼ n ū</Label></Frame>;
}

function EffusionDecay() {
  return <Frame><Grid /><Axes x="t" y="P" /><path d="M105 95 C220 145 320 225 410 280 C500 325 600 338 715 340" fill="none" stroke={c.cyan} strokeWidth="4" /><line x1="105" y1="95" x2="105" y2="340" stroke={c.rose} strokeDasharray="7 6" /><Label x={450} y={120} fill={c.white}>P(t) = P₀e⁻ᵏᵗ</Label><Label x={470} y={385} anchor="middle" fill={c.muted}>ideal molecular-flow leakage never reaches zero in finite time</Label></Frame>;
}

function KnudsenCell() {
  return <Frame><rect x="145" y="120" width="360" height="195" rx="24" fill="#071323" stroke={c.blue} strokeWidth="3" /><path d="M235 280 Q325 220 415 280" fill={c.amber} opacity=".55" /><circle cx="505" cy="195" r="7" fill={c.rose} /><path d="M512 195 C565 180 610 130 690 115" stroke={c.cyan} strokeWidth="3" fill="none" /><path d="M512 195 C575 205 625 225 700 240" stroke={c.violet} strokeWidth="3" fill="none" /><Label x={325} y={92} anchor="middle" fill={c.white}>Knudsen effusion cell</Label><Label x={560} y={310} fill={c.cyan}>mass-loss rate → vapour pressure</Label></Frame>;
}

function ZCurves() {
  return <Frame><Grid /><Axes x="P" y="Z" /><line x1="95" y1="220" x2="720" y2="220" stroke={c.text} strokeDasharray="8 6" /><Label x={110} y={210} fill={c.text}>1</Label><path d="M105 220 C240 225 320 260 400 255 C520 245 610 175 715 105" fill="none" stroke={c.rose} strokeWidth="4" /><path d="M105 220 C260 215 430 185 715 130" fill="none" stroke={c.cyan} strokeWidth="4" /><path d="M105 220 C250 220 400 214 715 205" fill="none" stroke={c.green} strokeWidth="3" /><Label x={620} y={95} fill={c.rose}>attraction then repulsion</Label><Label x={610} y={150} fill={c.cyan}>H₂ / He near room T</Label><Label x={590} y={200} fill={c.green}>high T</Label></Frame>;
}

function LennardJones() {
  return <Frame><Grid /><Axes x="r" y="U(r)" /><path d="M130 65 C150 90 165 180 190 260 C220 345 290 315 365 285 C470 245 590 230 715 225" fill="none" stroke={c.violet} strokeWidth="4" /><line x1="95" y1="225" x2="720" y2="225" stroke={c.text} strokeDasharray="7 6" /><circle cx="275" cy="315" r="7" fill={c.rose} /><Label x={275} y={345} anchor="middle" fill={c.rose}>rₘ</Label><Label x={185} y={95} fill={c.amber}>steep repulsion</Label><Label x={450} y={285} fill={c.cyan}>attractive well</Label><Label x={500} y={85} fill={c.white}>U = 4ε[(σ/r)¹² − (σ/r)⁶]</Label></Frame>;
}

function VdwCorrections() {
  return <Frame><rect x="70" y="90" width="280" height="230" rx="24" fill="#071323" stroke={c.cyan} /><circle cx="150" cy="155" r="24" fill={c.violet} /><circle cx="275" cy="240" r="24" fill={c.violet} /><path d="M175 160 C210 170 235 205 250 225" stroke={c.rose} strokeWidth="3" fill="none" /><Label x={210} y={60} anchor="middle" fill={c.white}>attraction lowers measured P</Label><Label x={470} y={120} fill={c.cyan} size={19}>Pideal = P + a(n/V)²</Label><Label x={470} y={190} fill={c.violet} size={19}>Vfree = V − nb</Label><Label x={470} y={260} fill={c.white} size={20}>(P + an²/V²)(V − nb) = nRT</Label></Frame>;
}

function VdwPressureRegions() {
  return <Frame><Grid /><Axes x="P" y="Z" /><line x1="95" y1="220" x2="720" y2="220" stroke={c.text} strokeDasharray="7 6" /><path d="M105 220 C230 235 335 280 435 250 C535 220 620 145 715 80" fill="none" stroke={c.rose} strokeWidth="4" /><rect x="110" y="65" width="180" height="290" fill={c.cyan} opacity=".04" /><rect x="290" y="65" width="190" height="290" fill={c.violet} opacity=".04" /><rect x="480" y="65" width="235" height="290" fill={c.rose} opacity=".04" /><Label x={195} y={90} anchor="middle" fill={c.cyan}>low P</Label><Label x={385} y={90} anchor="middle" fill={c.violet}>moderate P</Label><Label x={600} y={90} anchor="middle" fill={c.rose}>high P</Label></Frame>;
}

function VirialBoyle() {
  return <Frame><Grid /><Axes x="P" y="Z" /><line x1="95" y1="220" x2="720" y2="220" stroke={c.text} strokeDasharray="7 6" /><path d="M105 220 C255 190 480 160 715 130" fill="none" stroke={c.rose} strokeWidth="4" /><path d="M105 220 C300 220 500 230 715 260" fill="none" stroke={c.cyan} strokeWidth="4" /><path d="M105 220 C310 250 500 285 715 310" fill="none" stroke={c.violet} strokeWidth="4" /><Label x={610} y={125} fill={c.rose}>T &gt; Tᴮ</Label><Label x={610} y={247} fill={c.cyan}>T = Tᴮ</Label><Label x={610} y={305} fill={c.violet}>T &lt; Tᴮ</Label><Label x={360} y={55} anchor="middle" fill={c.white}>B(Tᴮ) = 0 → initial slope vanishes</Label></Frame>;
}

function NewtonRaphson() {
  return <Frame><Grid /><Axes x="V" y="f(V)" /><path d="M105 285 C220 220 310 95 415 205 C505 300 600 260 715 110" fill="none" stroke={c.cyan} strokeWidth="4" /><line x1="315" y1="145" x2="520" y2="340" stroke={c.rose} strokeWidth="3" /><line x1="440" y1="222" x2="570" y2="340" stroke={c.violet} strokeWidth="3" /><circle cx="315" cy="145" r="7" fill={c.rose} /><circle cx="440" cy="222" r="7" fill={c.violet} /><Label x={520} y={370} anchor="middle" fill={c.rose}>V₁</Label><Label x={570} y={370} anchor="middle" fill={c.violet}>V₂</Label><Label x={430} y={55} anchor="middle" fill={c.white}>Vₙ₊₁ = Vₙ − f(Vₙ)/f′(Vₙ)</Label></Frame>;
}

function AndrewsIsotherms() {
  return <Frame><Grid /><Axes x="Vₘ" y="P" /><path d="M110 315 C180 230 245 175 310 170 H520 C570 170 630 225 710 305" fill="none" stroke={c.rose} strokeWidth="4" /><path d="M110 325 C190 250 270 185 380 175 C500 165 610 220 710 300" fill="none" stroke={c.violet} strokeWidth="4" /><path d="M110 335 C230 285 350 245 470 225 C570 210 650 245 710 290" fill="none" stroke={c.cyan} strokeWidth="4" /><Label x={525} y={155} fill={c.rose}>T &lt; Tᶜ: plateau</Label><Label x={480} y={205} fill={c.violet}>T = Tᶜ</Label><Label x={555} y={250} fill={c.cyan}>T &gt; Tᶜ</Label></Frame>;
}

function CoexistenceLever() {
  return <Frame><Axes x="Vₘ" y="P" /><line x1="220" y1="210" x2="650" y2="210" stroke={c.cyan} strokeWidth="4" /><circle cx="260" cy="210" r="8" fill={c.violet} /><circle cx="610" cy="210" r="8" fill={c.rose} /><circle cx="430" cy="210" r="8" fill={c.amber} /><line x1="260" y1="235" x2="430" y2="235" stroke={c.violet} strokeWidth="6" /><line x1="430" y1="235" x2="610" y2="235" stroke={c.rose} strokeWidth="6" /><Label x={260} y={190} anchor="middle" fill={c.violet}>Vₗ</Label><Label x={610} y={190} anchor="middle" fill={c.rose}>Vg</Label><Label x={430} y={190} anchor="middle" fill={c.amber}>V</Label><Label x={400} y={310} anchor="middle" fill={c.white}>ng/nₗ = (V − Vₗ)/(Vg − V)</Label></Frame>;
}

function VdwLoop() {
  return <Frame><Grid /><Axes x="Vₘ" y="P" /><path d="M110 325 C180 240 260 170 335 170 C390 170 390 260 445 270 C510 280 505 130 570 150 C635 170 665 245 710 300" fill="none" stroke={c.violet} strokeWidth="4" /><line x1="260" y1="220" x2="620" y2="220" stroke={c.cyan} strokeWidth="4" strokeDasharray="8 5" /><path d="M320 220 C350 190 390 185 430 220" fill="none" stroke={c.rose} strokeWidth="3" /><path d="M430 220 C470 255 515 260 550 220" fill="none" stroke={c.green} strokeWidth="3" /><Label x={355} y={165} fill={c.rose}>area A</Label><Label x={500} y={285} fill={c.green}>area B</Label><Label x={390} y={80} anchor="middle" fill={c.white}>Maxwell construction: A = B</Label></Frame>;
}

function CriticalInflection() {
  return <Frame><Grid /><Axes x="Vₘ" y="P" /><path d="M115 325 C210 235 300 180 390 205 C485 230 550 235 710 285" fill="none" stroke={c.cyan} strokeWidth="4" /><circle cx="390" cy="205" r="8" fill={c.rose} /><line x1="285" y1="205" x2="500" y2="205" stroke={c.rose} strokeWidth="3" strokeDasharray="7 5" /><Label x={405} y={188} fill={c.rose}>critical point</Label><Label x={420} y={70} anchor="middle" fill={c.white}>∂P/∂V = 0 and ∂²P/∂V² = 0</Label></Frame>;
}

function PhaseDome() {
  return <Frame><Grid /><Axes x="density / volume coordinate" y="T" /><path d="M190 330 C250 205 330 110 400 95 C470 110 550 205 610 330" fill="none" stroke={c.cyan} strokeWidth="4" /><circle cx="400" cy="95" r="8" fill={c.rose} /><Label x={400} y={78} anchor="middle" fill={c.rose}>critical point</Label><Label x={260} y={240} fill={c.violet}>liquid</Label><Label x={530} y={240} fill={c.green}>vapour</Label><Label x={400} y={280} anchor="middle" fill={c.white}>two-phase region</Label></Frame>;
}

function ReducedStates() {
  return <Frame><Grid /><Axes x="Vᵣ" y="Pᵣ" /><path d="M105 330 C180 245 255 175 330 170 H500 C575 180 645 245 710 315" fill="none" stroke={c.cyan} strokeWidth="4" /><path d="M105 340 C220 280 350 225 475 215 C585 210 650 255 710 310" fill="none" stroke={c.violet} strokeWidth="4" /><Label x={520} y={150} fill={c.cyan}>Tᵣ &lt; 1</Label><Label x={565} y={220} fill={c.violet}>Tᵣ &gt; 1</Label><Label x={400} y={65} anchor="middle" fill={c.white}>same reduced variables → approximately corresponding behaviour</Label></Frame>;
}

function JouleThomson() {
  return <Frame><Grid /><Axes x="T" y="P" /><path d="M170 330 C190 200 280 95 400 80 C520 95 610 200 630 330" fill="none" stroke={c.violet} strokeWidth="4" /><Label x={400} y={65} anchor="middle" fill={c.white}>inversion curve μJT = 0</Label><Label x={330} y={185} fill={c.cyan}>cooling</Label><Label x={480} y={210} fill={c.rose}>heating</Label><path d="M95 260 H220" stroke={c.amber} strokeWidth="8" /><path d="M220 260 L260 210 L260 310 Z" fill={c.amber} /><path d="M260 260 H360" stroke={c.amber} strokeWidth="3" /><Label x={110} y={245} fill={c.amber}>high P</Label><Label x={285} y={245} fill={c.amber}>low P</Label></Frame>;
}

function BarometricLaw() {
  return <Frame><rect x="120" y="55" width="220" height="305" rx="18" fill="#071323" stroke={c.blue} /><path d="M135 330 C200 315 250 280 290 225 C320 180 330 125 335 75" fill="none" stroke={c.cyan} strokeWidth="4" /><line x1="340" y1="330" x2="690" y2="330" stroke={c.text} /><line x1="340" y1="330" x2="340" y2="60" stroke={c.text} /><path d="M355 315 C450 270 545 195 675 80" fill="none" stroke={c.rose} strokeWidth="4" /><Label x={520} y={50} anchor="middle" fill={c.white}>P(h) = P₀e⁻ᴹᵍʰ⁄ᴿᵀ</Label><Label x={520} y={360} anchor="middle" fill={c.muted}>pressure decreases exponentially with height</Label></Frame>;
}

function LindeCycle() {
  return <Frame><rect x="90" y="135" width="150" height="110" rx="18" fill="#071323" stroke={c.cyan} /><rect x="330" y="105" width="150" height="170" rx="18" fill="#071323" stroke={c.violet} /><path d="M560 125 L650 190 L560 255 Z" fill="#172033" stroke={c.amber} strokeWidth="3" /><path d="M240 190 H330 M480 190 H560 M650 190 C710 190 710 315 480 315 H240 C150 315 150 260 150 245" fill="none" stroke={c.text} strokeWidth="5" /><Label x={165} y={195} anchor="middle" fill={c.cyan}>compressor</Label><Label x={405} y={195} anchor="middle" fill={c.violet}>heat exchanger</Label><Label x={605} y={195} anchor="middle" fill={c.amber}>throttle</Label><Label x={400} y={70} anchor="middle" fill={c.white}>regenerative cooling in the Linde–Hampson process</Label></Frame>;
}

function BalloonPayload() {
  return <Frame><circle cx="315" cy="185" r="120" fill="url(#ball)" stroke={c.cyan} strokeWidth="3" /><defs><radialGradient id="ball"><stop stopColor={c.cyan} stopOpacity=".35" /><stop offset="1" stopColor={c.violet} stopOpacity=".12" /></radialGradient></defs><path d="M315 305 L280 350 H350 Z" fill="#122238" stroke={c.text} /><path d="M315 70 V310" stroke={c.text} strokeDasharray="6 6" /><path d="M145 185 H70" stroke={c.rose} strokeWidth="5" /><path d="M75 173 L55 185 L75 197" fill="none" stroke={c.rose} strokeWidth="5" /><Label x={85} y={165} fill={c.rose}>buoyant force</Label><Label x={500} y={145} fill={c.white}>payload = ρairV − ρgasV − envelope mass</Label><Label x={500} y={205} fill={c.muted}>The displaced-air mass sets the upper limit.</Label></Frame>;
}

function LinearPVTemperature() {
  return <Frame><g transform="translate(0 -5)"><Axes x="V" y="P" x0={90} y0={190} x1={360} y1={45} /><line x1="125" y1="155" x2="330" y2="65" stroke={c.cyan} strokeWidth="4" /><Label x={230} y={35} anchor="middle" fill={c.white}>P = mV + c</Label></g><g transform="translate(395 0)"><Axes x="V" y="T" x0={70} y0={340} x1={350} y1={195} /><path d="M85 335 Q210 175 335 335" fill="none" stroke={c.rose} strokeWidth="4" /><line x1="210" y1="335" x2="210" y2="255" stroke={c.amber} strokeDasharray="7 5" /><Label x={210} y={245} anchor="middle" fill={c.amber}>Tmax</Label></g></Frame>;
}

function RotatingGas() {
  return <Frame><path d="M125 110 H420 Q510 110 510 210 Q510 310 420 310 H125" fill="none" stroke={c.text} strokeWidth="4" /><line x1="125" y1="70" x2="125" y2="350" stroke={c.cyan} strokeWidth="5" /><path d="M95 85 C65 110 65 155 95 180" fill="none" stroke={c.rose} strokeWidth="4" /><path d="M88 165 L98 182 L80 180" fill="none" stroke={c.rose} strokeWidth="4" /><Axes x="r²" y="ln P" x0={560} y0={330} x1={740} y1={110} /><line x1="580" y1="310" x2="720" y2="150" stroke={c.amber} strokeWidth="4" /><Label x={300} y={65} anchor="middle" fill={c.white}>isothermal gas rotating with angular speed ω</Label><Label x={555} y={70} fill={c.cyan}>P(r) = P(0)eᴹω²ʳ²⁄²ᴿᵀ</Label></Frame>;
}

export function Visual({ id }: { id: VisualId }) {
  const map: Record<VisualId, () => ReactNode> = {
    "particle-pressure": ParticlePressure,
    barometer: Barometer,
    manometer: Manometer,
    "mercury-plug": MercuryPlug,
    "graph-grammar": GraphGrammar,
    "boyle-family": BoyleFamily,
    "charles-zero": CharlesZero,
    "gas-law-transformations": GasLawTransformations,
    "pvt-surface": PVTSurface,
    "dalton-mixture": DaltonMixture,
    "amagat-volume": AmagatVolume,
    "connected-vessels": ConnectedVessels,
    "effusion-apparatus": EffusionApparatus,
    "sequential-effusion": SequentialEffusion,
    "evaporation-equilibrium": EvaporationEquilibrium,
    "humidity-dewpoint": HumidityDewpoint,
    "container-types": ContainerTypes,
    "wet-gas": WetGas,
    "clausius-plot": ClausiusPlot,
    "kinetic-cube": KineticCube,
    "degrees-freedom": DegreesFreedom,
    "speed-comparison": SpeedComparison,
    "velocity-space": VelocitySpace,
    "maxwell-temperature": MaxwellTemperature,
    "maxwell-mass": MaxwellMass,
    "energy-distribution": EnergyDistribution,
    "collision-cylinder": CollisionCylinder,
    "collision-mixture": CollisionMixture,
    "mean-free-path": MeanFreePath,
    "wall-flux": WallFlux,
    "effusion-decay": EffusionDecay,
    "knudsen-cell": KnudsenCell,
    "z-curves": ZCurves,
    "lennard-jones": LennardJones,
    "vdw-corrections": VdwCorrections,
    "vdw-pressure-regions": VdwPressureRegions,
    "virial-boyle": VirialBoyle,
    "newton-raphson": NewtonRaphson,
    "andrews-isotherms": AndrewsIsotherms,
    "coexistence-lever": CoexistenceLever,
    "vdw-loop": VdwLoop,
    "critical-inflection": CriticalInflection,
    "phase-dome": PhaseDome,
    "reduced-states": ReducedStates,
    "joule-thomson": JouleThomson,
    "barometric-law": BarometricLaw,
    "linde-cycle": LindeCycle,
    "balloon-payload": BalloonPayload,
    "linear-pv-temperature": LinearPVTemperature,
    "rotating-gas": RotatingGas,
  };
  const Component = map[id];
  return <>{Component()}</>;
}
