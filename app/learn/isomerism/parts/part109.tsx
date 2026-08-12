import Link from "next/link";

function DihedralAngle() {
  return <svg fill="currentColor" viewBox="0 0 520 230" className="mt-4 w-full" role="img" aria-label="Dihedral angle between front and rear carbon valency planes">
    <path d="M115 170 260 80 405 170M260 80V205" fill="none" stroke="#67e8f9" strokeWidth="3" />
    <path d="M115 170 260 145 405 170" fill="none" stroke="#c084fc" strokeWidth="3" />
    <circle cx="260" cy="145" r="7" fill="#f0abfc" /><circle cx="260" cy="80" r="7" fill="#67e8f9" />
    <path d="M260 145A48 48 0 0 1 303 120" fill="none" stroke="#fbbf24" strokeWidth="3" />
    <text x="309" y="120" fill="#fcd34d" fontSize="20">θ</text>
    <text x="260" y="220" textAnchor="middle" fill="#cbd5e1" fontSize="17">view down the C-C bond: angle between the two valency planes</text>
    <text x="90" y="160" fill="#e9d5ff" fontSize="16">rear-plane bond</text><text x="350" y="160" fill="#e9d5ff" fontSize="16">rear-plane bond</text>
    <text x="95" y="105" fill="#a5f3fc" fontSize="16">front-plane bond</text><text x="345" y="105" fill="#a5f3fc" fontSize="16">front-plane bond</text>
  </svg>;
}

function EnergyProfile() {
  return <svg fill="currentColor" viewBox="0 0 720 360" className="mt-4 w-full" role="img" aria-label="Potential energy profile over a 360 degree bond rotation">
    <path d="M70 30V300H680" fill="none" stroke="#e2e8f0" strokeWidth="2" />
    <text x="20" y="165" fill="#cbd5e1" fontSize="16" transform="rotate(-90 20 165)">potential energy</text>
    <text x="610" y="340" fill="#cbd5e1" fontSize="16">angle rotated</text>
    <path d="M70 55 C95 250 120 260 145 230 C180 190 190 95 220 82 C250 72 265 224 295 265 C325 300 345 150 370 100 C390 55 415 70 440 95 C470 145 490 265 520 230 C550 192 560 95 590 80 C625 67 650 115 680 140" fill="none" stroke="#f0abfc" strokeWidth="4" />
    {[70,170,270,370,470,570].map((x, i) => <g key={x}><path d={`M${x} 300V310`} stroke="#e2e8f0" /><text x={x} y="330" textAnchor="middle" fill="#cbd5e1" fontSize="15">{i * 60}°</text></g>)}
    <g fill="#fcd34d" fontSize="18" fontWeight="700"><text x="78" y="54">a</text><text x="130" y="246">b</text><text x="215" y="75">c</text><text x="290" y="284">d</text><text x="365" y="92">e</text><text x="510" y="246">f</text></g>
    <path d="M220 82V300M370 100V300" stroke="#22c55e" strokeDasharray="5 6" opacity=".8" />
  </svg>;
}

export default function IsomerismPart109() {
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-5xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[#08111f] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 99 · Part 109</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Skew conformers and the rotation-energy profile</h1><p className="mt-3 leading-7 text-slate-300">This page relates the named anti, gauche and eclipsed arrangements to a continuous rotation about a C-C sigma bond.</p></header><section className="mt-7 grid gap-5 lg:grid-cols-2"><article className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><h2 className="text-2xl font-black text-cyan-100">Skew conformers</h2><p className="mt-3 text-sm leading-7 text-slate-300">The source calls the infinitely many conformers other than the named anti, gauche, partially eclipsed and fully eclipsed forms <b>skew conformers</b>. They are real instantaneous arrangements, but are not the limiting named positions.</p><h3 className="mt-6 text-lg font-bold text-fuchsia-200">Dihedral (torsional) angle</h3><p className="mt-2 text-sm leading-7 text-slate-300">θ is the angle between two intersecting planes that contain the valencies of the front and rear atoms when the molecule is viewed along the central bond.</p><DihedralAngle /></article><article className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><h2 className="text-2xl font-black text-cyan-100">Potential-energy diagram</h2><p className="mt-3 text-sm leading-7 text-slate-300">As the bond rotates through 0°, 60°, 120°, 180°, 240°, 300° and back to 360°, the energy varies continuously. The source marks the repeated extrema a-f on this profile.</p><EnergyProfile /><p className="mt-3 text-sm leading-7 text-slate-300">Minima correspond to the more stable staggered arrangements; maxima correspond to eclipsing interactions. The exact barrier height is substituent-dependent.</p></article></section><section className="mt-7 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><b>Source conclusion:</b> total conformers are infinite because rotation is continuous, while the number of stable limiting conformations is finite and must be counted from the energy minima.</section></article></main>;
}
