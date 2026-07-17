"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Glass } from "@/components/notes/premium";

type ConceptGroup = { label: string; from: number; to: number; accent: string; keywords: string };
type AtomicPart = { part: number; title: string; pages: string; href: string };

const CONCEPT_GROUPS: ConceptGroup[] = [
  { label: "Discovery of Subatomic Particles & Nuclear Model", from: 1, to: 6, accent: "#67e8f9", keywords: "dalton cathode electron proton neutron thomson rutherford gold foil scattering nucleus e/m millikan" },
  { label: "Electromagnetic Radiation & Planck's Quantum Theory", from: 7, to: 10, accent: "#facc15", keywords: "emw wave frequency wavelength black body wien stefan planck quanta photon rayleigh jeans" },
  { label: "Photoelectric Effect", from: 11, to: 13, accent: "#fb7185", keywords: "photoelectric einstein work function threshold stopping potential photocurrent intensity kmax" },
  { label: "Bohr Model, Energy Levels & Rydberg Equation", from: 14, to: 18, accent: "#a78bfa", keywords: "bohr postulate orbit radius velocity time period energy ionisation binding rydberg ritz reduced mass" },
  { label: "Hydrogen Spectrum & Applied Problems", from: 19, to: 21, accent: "#34d399", keywords: "spectrum lyman balmer paschen brackett pfund series lines visible magneton photon flux" },
  { label: "Dual Nature, Uncertainty & Sommerfeld Extension", from: 22, to: 27, accent: "#f97316", keywords: "de broglie matter wave dual heisenberg uncertainty sommerfeld elliptical spin davisson germer standing wave" },
  { label: "Quantum Numbers", from: 28, to: 29, accent: "#67e8f9", keywords: "principal azimuthal magnetic spin quantum number subshell orbital n l m s n+l rule" },
  { label: "Electronic Configuration & Magnetic Moments", from: 30, to: 33, accent: "#facc15", keywords: "aufbau pauli hund configuration exchange energy paramagnetic diamagnetic magnetic moment bohr magneton gd" },
  { label: "Moseley's Law & the Schrödinger Equation", from: 34, to: 39, accent: "#fb7185", keywords: "moseley x-ray group velocity schrodinger wave function hamiltonian operator eigenvalue born probability polar" },
  { label: "Orbitals, Nodes & Radial Distributions", from: 40, to: 47, accent: "#a78bfa", keywords: "radial angular node function distribution most probable radius s p d orbital shape nodal plane gerade" },
  { label: "Penetration, Higher Orbitals & Hybridisation Proofs", from: 48, to: 53, accent: "#34d399", keywords: "unsold penetration shielding 4f 5f 5g 6h 7i orbital gallery hybridisation sp sp2 sp3 bond angle" },
  { label: "Olympiad Problem Sets", from: 54, to: 55, accent: "#f97316", keywords: "olympiad de broglie wavelength uncertainty relativistic problems" },
];

function groupForPart(part: number): ConceptGroup {
  return CONCEPT_GROUPS.find((group) => part >= group.from && part <= group.to) ?? CONCEPT_GROUPS[0];
}

export function AtomicStructurePartNavigator({ parts }: { parts: readonly AtomicPart[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const filteredGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return CONCEPT_GROUPS.map((group) => ({
      group,
      parts: parts.filter((part) => {
        if (part.part < group.from || part.part > group.to) return false;
        if (!needle) return true;
        return (
          part.title.toLowerCase().includes(needle) ||
          group.label.toLowerCase().includes(needle) ||
          group.keywords.includes(needle) ||
          `part ${String(part.part).padStart(2, "0")}`.includes(needle) ||
          String(part.part) === needle
        );
      }),
    })).filter(({ parts }) => parts.length > 0);
  }, [parts, query]);

  return (
    <>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">Search parts by topic, concept or formula name</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics — e.g. Rydberg, uncertainty, nodes, Aufbau…"
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          />
        </label>
        <label className="sm:hidden">
          <span className="sr-only">Jump to a part</span>
          <select
            defaultValue=""
            onChange={(event) => { if (event.target.value) router.push(event.target.value); }}
            className="w-full rounded-xl border border-cyan-400/30 bg-[#0B1220] px-4 py-2.5 text-sm font-semibold text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <option value="" disabled>Jump to part…</option>
            {parts.map((part) => (
              <option key={part.href} value={part.href}>
                Part {String(part.part).padStart(2, "0")} — {part.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Glass className="mb-6 p-4">
        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">55-part overview</div>
        <div className="grid grid-cols-11 gap-1.5" role="list" aria-label="Quick links to all 55 parts">
          {parts.map((part) => {
            const group = groupForPart(part.part);
            return (
              <Link
                key={part.href}
                href={part.href}
                role="listitem"
                aria-label={`Part ${part.part}: ${part.title}`}
                title={`Part ${String(part.part).padStart(2, "0")} — ${part.title}`}
                className="flex h-7 items-center justify-center rounded-md text-[10px] font-bold text-[#08111f] transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-cyan-300"
                style={{ backgroundColor: group.accent }}
              >
                {part.part}
              </Link>
            );
          })}
        </div>
      </Glass>
      {filteredGroups.length === 0 ? (
        <Glass className="p-5 text-sm text-white/70">
          No parts match “{query}”. Try a broader term such as “Bohr”, “spectrum”, “orbital” or a part number.
        </Glass>
      ) : (
        <div className="space-y-7">
          {filteredGroups.map(({ group, parts }) => (
            <div key={group.label}>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: group.accent }} aria-hidden />
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
                  {group.label}
                  <span className="ml-2 font-semibold normal-case tracking-normal text-white/45">
                    Parts {String(group.from).padStart(2, "0")}–{String(group.to).padStart(2, "0")}
                  </span>
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {parts.map((part) => (
                  <Link key={part.href} href={part.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                    <Glass className="h-full p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
                      <div className="text-[11px] font-black uppercase tracking-[0.22em] text-cyan-300">
                        Part {String(part.part).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-base font-black text-white">{part.title}</div>
                    </Glass>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
