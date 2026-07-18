// Real topic groups of the 55-part Atomic Structure sequence — shared by the
// hub navigator (search + lesson cards) and the canonical part-page tabs.
// Plain data module (safe for both server and client components).

export interface AtomicConceptGroup {
  label: string;
  from: number;
  to: number;
  accent: string;
  keywords: string;
}

export const ATOMIC_CONCEPT_GROUPS: AtomicConceptGroup[] = [
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

export function atomicGroupForPart(part: number): AtomicConceptGroup {
  return ATOMIC_CONCEPT_GROUPS.find((group) => part >= group.from && part <= group.to) ?? ATOMIC_CONCEPT_GROUPS[0];
}

export function atomicGroupAnchor(group: AtomicConceptGroup): string {
  return `/learn/atomic-structure#group-${ATOMIC_CONCEPT_GROUPS.indexOf(group) + 1}`;
}
