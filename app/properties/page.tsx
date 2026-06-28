"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type Mol = { f: string; name: string; geometry: string; hybrid: string; angle: string; dipole: string; shape: string };

const molecules: Mol[] = [
  { f: "H₂O", name: "Water", geometry: "Bent", hybrid: "sp³", angle: "104.5°", dipole: "1.85 D", shape: "polar" },
  { f: "NH₃", name: "Ammonia", geometry: "Trigonal pyramidal", hybrid: "sp³", angle: "107°", dipole: "1.47 D", shape: "polar" },
  { f: "CH₄", name: "Methane", geometry: "Tetrahedral", hybrid: "sp³", angle: "109.5°", dipole: "0 D", shape: "nonpolar" },
  { f: "CO₂", name: "Carbon dioxide", geometry: "Linear", hybrid: "sp", angle: "180°", dipole: "0 D", shape: "nonpolar" },
  { f: "BF₃", name: "Boron trifluoride", geometry: "Trigonal planar", hybrid: "sp²", angle: "120°", dipole: "0 D", shape: "nonpolar" },
  { f: "CCl₄", name: "Carbon tetrachloride", geometry: "Tetrahedral", hybrid: "sp³", angle: "109.5°", dipole: "0 D", shape: "nonpolar" },
  { f: "SO₂", name: "Sulfur dioxide", geometry: "Bent", hybrid: "sp²", angle: "119°", dipole: "1.6 D", shape: "polar" },
  { f: "SO₃", name: "Sulfur trioxide", geometry: "Trigonal planar", hybrid: "sp²", angle: "120°", dipole: "0 D", shape: "nonpolar" },
  { f: "PCl₅", name: "Phosphorus pentachloride", geometry: "Trigonal bipyramidal", hybrid: "sp³d", angle: "90°, 120°", dipole: "0 D", shape: "nonpolar" },
  { f: "SF₆", name: "Sulfur hexafluoride", geometry: "Octahedral", hybrid: "sp³d²", angle: "90°", dipole: "0 D", shape: "nonpolar" },
  { f: "XeF₄", name: "Xenon tetrafluoride", geometry: "Square planar", hybrid: "sp³d²", angle: "90°", dipole: "0 D", shape: "nonpolar" },
  { f: "XeF₂", name: "Xenon difluoride", geometry: "Linear", hybrid: "sp³d", angle: "180°", dipole: "0 D", shape: "nonpolar" },
  { f: "H₂S", name: "Hydrogen sulfide", geometry: "Bent", hybrid: "sp³", angle: "92°", dipole: "0.97 D", shape: "polar" },
  { f: "PCl₃", name: "Phosphorus trichloride", geometry: "Trigonal pyramidal", hybrid: "sp³", angle: "100°", dipole: "0.56 D", shape: "polar" },
  { f: "BeCl₂", name: "Beryllium chloride", geometry: "Linear", hybrid: "sp", angle: "180°", dipole: "0 D", shape: "nonpolar" },
  { f: "C₂H₄", name: "Ethene", geometry: "Trigonal planar (C)", hybrid: "sp²", angle: "120°", dipole: "0 D", shape: "nonpolar" },
  { f: "C₂H₂", name: "Ethyne", geometry: "Linear", hybrid: "sp", angle: "180°", dipole: "0 D", shape: "nonpolar" },
  { f: "ClF₃", name: "Chlorine trifluoride", geometry: "T-shaped", hybrid: "sp³d", angle: "~87.5°", dipole: "0.6 D", shape: "polar" },
  { f: "IF₅", name: "Iodine pentafluoride", geometry: "Square pyramidal", hybrid: "sp³d²", angle: "90°", dipole: "polar", shape: "polar" },
  { f: "NH₄⁺", name: "Ammonium", geometry: "Tetrahedral", hybrid: "sp³", angle: "109.5°", dipole: "0 D", shape: "nonpolar" },
];

const bpmp = [
  { c: "H₂O", bp: "100 °C", mp: "0 °C", state: "Liquid", reason: "Strong H-bonding" },
  { c: "NH₃", bp: "−33 °C", mp: "−78 °C", state: "Gas", reason: "H-bonding (weaker than H₂O)" },
  { c: "HF", bp: "19.5 °C", mp: "−83 °C", state: "Liquid/Gas", reason: "H-bonding (anomalously high)" },
  { c: "CH₄", bp: "−161 °C", mp: "−182 °C", state: "Gas", reason: "Weak London forces" },
  { c: "NaCl", bp: "1465 °C", mp: "801 °C", state: "Solid", reason: "Strong ionic lattice" },
  { c: "SiO₂", bp: "2230 °C", mp: "1710 °C", state: "Solid", reason: "Giant covalent network" },
  { c: "Diamond", bp: "—", mp: "~3550 °C", state: "Solid", reason: "3D covalent network" },
  { c: "Ethanol", bp: "78 °C", mp: "−114 °C", state: "Liquid", reason: "H-bonding (−OH)" },
  { c: "Acetic acid", bp: "118 °C", mp: "16.6 °C", state: "Liquid", reason: "Dimeric H-bonding" },
  { c: "Benzene", bp: "80 °C", mp: "5.5 °C", state: "Liquid", reason: "London + symmetry" },
];

// Element melting / boiling points (°C) — exam-relevant set
const elements = [
  { el: "H", mp: "−259", bp: "−253", note: "" },
  { el: "He", mp: "—", bp: "−269", note: "lowest bp" },
  { el: "Li", mp: "181", bp: "1347", note: "" },
  { el: "Be", mp: "1287", bp: "2500", note: "" },
  { el: "B", mp: "2180", bp: "3650", note: "" },
  { el: "C", mp: "4100", bp: "—", note: "highest mp (sublimes)" },
  { el: "N", mp: "−210", bp: "−196", note: "" },
  { el: "O", mp: "−229", bp: "−183", note: "" },
  { el: "F", mp: "−219", bp: "−188", note: "" },
  { el: "Na", mp: "98", bp: "881", note: "" },
  { el: "Mg", mp: "649", bp: "1105", note: "" },
  { el: "Al", mp: "660", bp: "2467", note: "" },
  { el: "Si", mp: "1420", bp: "3280", note: "" },
  { el: "P", mp: "44", bp: "281", note: "white P, low mp" },
  { el: "S", mp: "114", bp: "445", note: "" },
  { el: "Cl", mp: "−101", bp: "−34", note: "" },
  { el: "K", mp: "63", bp: "766", note: "" },
  { el: "Ca", mp: "839", bp: "1494", note: "" },
  { el: "Fe", mp: "1535", bp: "2750", note: "" },
  { el: "Cu", mp: "1083", bp: "2570", note: "" },
  { el: "Zn", mp: "419", bp: "907", note: "" },
  { el: "Ga", mp: "30", bp: "2403", note: "melts in hand" },
  { el: "Br", mp: "−7", bp: "60", note: "only liquid non-metal" },
  { el: "Ag", mp: "962", bp: "2155", note: "" },
  { el: "I", mp: "114", bp: "185", note: "sublimes" },
  { el: "Cs", mp: "28.5", bp: "705", note: "lowest mp metal (after Hg)" },
  { el: "W", mp: "3410", bp: "5650", note: "highest mp metal" },
  { el: "Au", mp: "1064", bp: "2808", note: "" },
  { el: "Hg", mp: "−38", bp: "357", note: "only liquid metal" },
  { el: "Pb", mp: "327", bp: "1751", note: "" },
];

export default function PropertiesPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.toLowerCase().replace(/[<>{}]/g, "").trim();
    if (!s) return molecules;
    return molecules.filter((m) => (m.f + m.name + m.geometry + m.hybrid).toLowerCase().includes(s));
  }, [q]);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Knowledge Vault · Physical</p>
        <h1 className="text-4xl font-black md:text-5xl">Physical Properties</h1>
        <p className="mt-3 text-white/65 text-sm max-w-2xl mb-6">
          Geometry, hybridization, bond angle and dipole for must-know molecules, plus a BP/MP reasoning table.
        </p>

        <div className="relative mb-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search molecule — H2O, BF3, XeF4…"
            className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50" />
        </div>

        {/* Geometry table */}
        <h2 className="text-lg font-black text-cyan-300 mb-3">🔷 Geometry · Hybridization · Dipole</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] mb-8">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                <th className="text-left px-4 py-2.5">Molecule</th>
                <th className="text-left px-3 py-2.5">Geometry</th>
                <th className="text-left px-3 py-2.5">Hybrid</th>
                <th className="text-left px-3 py-2.5">Bond ∠</th>
                <th className="text-left px-3 py-2.5">Dipole</th>
                <th className="text-left px-3 py-2.5">Polarity</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m.f} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                  <td className="px-4 py-2.5"><span className="font-mono font-bold text-cyan-300">{m.f}</span> <span className="text-white/40 text-xs">{m.name}</span></td>
                  <td className="px-3 py-2.5 text-white/80">{m.geometry}</td>
                  <td className="px-3 py-2.5 text-white/80 font-mono">{m.hybrid}</td>
                  <td className="px-3 py-2.5 text-white/70">{m.angle}</td>
                  <td className="px-3 py-2.5 text-white/70">{m.dipole}</td>
                  <td className="px-3 py-2.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.shape === "polar" ? "text-cyan-300 bg-cyan-500/10" : "text-violet-300 bg-violet-500/10"}`}>{m.shape}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BP/MP table */}
        <h2 className="text-lg font-black text-cyan-300 mb-3">🌡️ Boiling / Melting Points & Reasoning</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                <th className="text-left px-4 py-2.5">Compound</th>
                <th className="text-left px-3 py-2.5">B.P.</th>
                <th className="text-left px-3 py-2.5">M.P.</th>
                <th className="text-left px-3 py-2.5">State (RT)</th>
                <th className="text-left px-3 py-2.5">Reason</th>
              </tr>
            </thead>
            <tbody>
              {bpmp.map((b, i) => (
                <tr key={b.c} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                  <td className="px-4 py-2.5 font-mono font-bold text-cyan-300">{b.c}</td>
                  <td className="px-3 py-2.5 text-white/80">{b.bp}</td>
                  <td className="px-3 py-2.5 text-white/80">{b.mp}</td>
                  <td className="px-3 py-2.5 text-white/70">{b.state}</td>
                  <td className="px-3 py-2.5 text-gray-400 text-xs">{b.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Element MP/BP */}
        <h2 className="text-lg font-black text-cyan-300 mt-8 mb-3">🧱 Element Melting & Boiling Points (°C)</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
                <th className="text-left px-4 py-2.5">Element</th>
                <th className="text-left px-3 py-2.5">M.P.</th>
                <th className="text-left px-3 py-2.5">B.P.</th>
                <th className="text-left px-3 py-2.5">Note</th>
              </tr>
            </thead>
            <tbody>
              {elements.map((e, i) => (
                <tr key={e.el} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                  <td className="px-4 py-2.5 font-mono font-bold text-cyan-300">{e.el}</td>
                  <td className="px-3 py-2.5 text-white/80">{e.mp}</td>
                  <td className="px-3 py-2.5 text-white/80">{e.bp}</td>
                  <td className="px-3 py-2.5 text-gray-400 text-xs">{e.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
