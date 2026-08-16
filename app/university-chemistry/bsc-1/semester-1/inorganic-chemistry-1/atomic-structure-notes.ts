// B.Sc. Chemistry Year 1, Semester I, Paper C-1 (Inorganic Chemistry I), Unit 1: Atomic Structure.
// Directly-authored content blocks, same block model as the JEE Advanced
// chemical-bonding chapters. University depth is distinguished from JEE
// Advanced by working from the Schrödinger equation and its solutions
// directly, rather than starting from empirical quantum-number rules —
// the derivation is the content, not just the result.

export type AtomicStructureBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type AtomicStructureBlock = {
  kind: AtomicStructureBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Bohr's Model and Why It Fails",
  "Wave-Particle Duality and the Uncertainty Principle",
  "The Schrodinger Wave Equation",
  "Quantum Numbers",
  "Shapes and Nodal Structure of Orbitals",
  "Radial and Angular Probability Distributions",
  "Electronic Configuration: Aufbau, Pauli, Hund",
  "Exceptions to the Aufbau Order",
];

export const atomicStructureChapterMap: string[] = [...sections];

function major(n: number): AtomicStructureBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): AtomicStructureBlock {
  return { kind: "subheading", text };
}
function p(text: string): AtomicStructureBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): AtomicStructureBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): AtomicStructureBlock {
  return { kind: "bullets", items };
}
function table(headers: string[], rows: string[][]): AtomicStructureBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): AtomicStructureBlock {
  return { kind: "formula", text, formulaLabel };
}

export const atomicStructureBlocks: AtomicStructureBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Bohr's model (1913) treated the electron in a hydrogen atom as a particle moving in a fixed circular orbit, with angular momentum quantised as an integral multiple of h/2*pi. It correctly predicted the hydrogen emission spectrum and gave the energy levels:"),
  formula("E_n = -\\dfrac{2\\pi^2 m e^4 Z^2}{n^2 h^2} = -\\dfrac{13.6\\,Z^2}{n^2}\\ \\text{eV}", "Bohr energy levels, hydrogen-like species"),
  p("This is genuinely useful for one-electron (hydrogen-like) species and remains the fastest way to compute hydrogen-atom transition energies. But it fails as a general theory of the atom for reasons that matter at university depth, not just as a historical footnote:"),
  bullets([
    "It cannot account for the fine structure of spectral lines (closely spaced multiplets), which requires relativistic and spin corrections Bohr's model has no room for.",
    "It fails completely for multi-electron atoms, where electron-electron repulsion cannot be fit into the single-electron circular-orbit picture.",
    "It cannot explain the Zeeman effect (splitting in a magnetic field) or the Stark effect (splitting in an electric field) beyond the crudest first order.",
    "It assumes the electron has a precisely defined position and momentum simultaneously (a classical trajectory), which the uncertainty principle (Section 2) rules out in principle, not just as an approximation.",
    "It gives no reason for why angular momentum should be quantised in the first place — de Broglie's matter-wave picture (Section 2) is what actually explains it.",
  ]),
  callout("Key idea", "Bohr's model is not simply 'less accurate' than the quantum mechanical model — it answers a different question. It gives correct energies for one-electron species by assuming a classical orbit; the Schrodinger treatment gives a probability distribution consistent with the uncertainty principle, and Bohr's quantised angular momentum falls out of it as a special case rather than being assumed."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("De Broglie (1924) proposed that any particle with momentum p has an associated wavelength:"),
  formula("\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}", "de Broglie wavelength"),
  p("For a macroscopic object this wavelength is immeasurably small, but for an electron (m ~ 9.1 x 10^-31 kg) moving at typical atomic speeds, lambda is comparable to atomic dimensions — the electron's wave nature is not a minor correction, it is the dominant fact about its behaviour at this scale. Davisson and Germer's 1927 electron-diffraction experiment confirmed this directly."),
  sub("Heisenberg's uncertainty principle"),
  p("Because the electron must be described as a wave, not a point particle on a trajectory, its position and momentum cannot both be known to arbitrary precision simultaneously:"),
  formula("\\Delta x \\cdot \\Delta p \\geq \\dfrac{h}{4\\pi}"),
  p("This is not a statement about measurement clumsiness — it is a fundamental property of any wave-like entity. It is the formal reason Bohr's fixed circular orbit (a precise position and momentum at every instant) cannot be physically correct, and it is why the quantum mechanical treatment replaces 'orbit' with 'orbital': a probability distribution, not a path."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("Schrodinger (1926) combined the wave picture with the classical energy expression (kinetic + potential = total energy) to give a wave equation whose solutions, called wavefunctions (psi), describe the electron completely. The time-independent form for a single particle in three dimensions is:"),
  formula("\\hat{H}\\psi = E\\psi \\quad\\text{where}\\quad \\hat{H} = -\\dfrac{h^2}{8\\pi^2 m}\\nabla^2 + V(r)", "Time-independent Schrodinger equation"),
  p("H-hat is the Hamiltonian operator (kinetic + potential energy operator), psi is the wavefunction, and E is the allowed (quantised) total energy. For the hydrogen atom, V(r) is the Coulomb attraction between the electron and the nucleus, and the equation is most naturally solved in spherical polar coordinates (r, theta, phi), where it separates into three independent equations — one in r, one in theta, one in phi. Solving this separated equation, subject to the requirement that psi remain finite, single-valued and continuous everywhere, is what forces three of the four quantum numbers (n, l, ml) to exist and take only integer values — they are not postulated, they fall out of the boundary conditions on the solution."),
  callout("Key idea", "psi itself has no direct physical meaning, but psi-squared (more precisely, the modulus-squared of psi, since psi can be complex) is the probability density of finding the electron at a given point in space. This single reinterpretation is what separates the quantum mechanical atom from Bohr's classical orbit: the electron does not have a definite position at all until psi-squared is evaluated."),
  formula("\\psi_{n,l,m_l}(r,\\theta,\\phi) = R_{n,l}(r)\\cdot Y_{l,m_l}(\\theta,\\phi)", "Separation into radial and angular parts"),
  p("R(r) is the radial wavefunction (depends only on distance from the nucleus) and Y(theta, phi) is the angular wavefunction, or spherical harmonic (depends only on direction). This separation is exactly what makes it possible to discuss orbital shape (from Y) and orbital size/radial structure (from R) as two genuinely independent questions — Sections 5 and 6 treat them separately for this reason."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("Solving the Schrodinger equation for hydrogen generates three quantum numbers directly from the mathematics; a fourth (electron spin) is added afterward from relativistic quantum mechanics (Dirac, 1928) and from the direct experimental evidence of the Stern-Gerlach experiment."),
  table(
    ["Quantum number", "Symbol", "Allowed values", "Physical meaning"],
    [
      ["Principal", "n", "1, 2, 3, ...", "Shell; principal energy level; sets orbital size and, for hydrogen-like species, energy."],
      ["Azimuthal (angular momentum)", "l", "0, 1, ..., (n-1)", "Subshell (s, p, d, f for l = 0, 1, 2, 3); sets orbital angular momentum and shape."],
      ["Magnetic", "ml", "-l, ..., 0, ..., +l", "Orientation of the orbital in space; (2l+1) values per subshell."],
      ["Spin", "ms", "+1/2 or -1/2", "Intrinsic angular momentum of the electron; not obtained from the Schrodinger equation itself."],
    ]
  ),
  p("The orbital angular momentum magnitude and the number of orbitals per subshell both follow directly from l:"),
  formula("|L| = \\sqrt{l(l+1)}\\;\\dfrac{h}{2\\pi}"),
  callout("Warning / limitation", "n alone determines energy only for hydrogen-like (one-electron) species. In multi-electron atoms, electron-electron repulsion makes energy depend on both n and l (the (n+l) rule, used to build up the Aufbau order in Section 7) — this is one of the clearest places university-level treatment must go beyond the single-electron picture that JEE-level chemical bonding chapters can get away with using as a shortcut."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("The angular part Y(theta, phi) determines orbital shape and is identical for every value of n at a given l — a 2p orbital and a 3p orbital have the same angular shape, differing only in radial extent and the number of radial nodes (Section 6)."),
  bullets([
    "s orbitals (l = 0): spherically symmetric; Y has no angular dependence at all, so there is no angular node.",
    "p orbitals (l = 1): dumbbell-shaped along one axis (px, py, pz); one angular (planar) node passing through the nucleus.",
    "d orbitals (l = 2): four-lobed (dxy, dxz, dyz, dx2-y2) or a two-lobed-plus-torus shape (dz2); two angular nodes.",
    "f orbitals (l = 3): more complex multi-lobed shapes; three angular nodes.",
  ]),
  sub("Nodes: where psi (and hence probability density) is exactly zero"),
  p("Total nodes for a given orbital = n - 1. These split into angular nodes (planes or cones through the nucleus, equal to l) and radial nodes (spherical shells, equal to n - l - 1):"),
  formula("\\text{Radial nodes} = n - l - 1 \\qquad \\text{Angular nodes} = l \\qquad \\text{Total nodes} = n - 1"),
  table(
    ["Orbital", "n", "l", "Radial nodes", "Angular nodes", "Total nodes"],
    [
      ["1s", "1", "0", "0", "0", "0"],
      ["2s", "2", "0", "1", "0", "1"],
      ["2p", "2", "1", "0", "1", "1"],
      ["3s", "3", "0", "2", "0", "2"],
      ["3p", "3", "1", "1", "1", "2"],
      ["3d", "3", "2", "0", "2", "2"],
    ]
  ),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Two distinct plots are used to describe where an electron is likely to be found, and conflating them is a common error at this level:"),
  bullets([
    "The radial probability density, R(r)-squared, gives the probability per unit volume at distance r — it is maximum at the nucleus for an s orbital, since volume is not yet being accounted for.",
    "The radial distribution function, 4*pi*r-squared*R(r)-squared, gives the probability of finding the electron in a thin spherical shell at distance r — this is the physically meaningful 'where is the electron, on average' picture, and it is zero at the nucleus (since the shell volume 4*pi*r-squared vanishes as r goes to 0) even though R(r)-squared itself is not.",
  ]),
  formula("D(r) = 4\\pi r^2 [R_{n,l}(r)]^2", "Radial distribution function"),
  callout("Key idea", "For the hydrogen 1s orbital, the radial distribution function peaks at exactly r = a0, the Bohr radius (52.9 pm) — the quantum mechanical 'most probable distance' recovers Bohr's orbit radius as the most likely value, not the only allowed one. This is the precise, quantitative sense in which the Bohr model survives inside the correct theory: as an expectation value, not a trajectory."),
  p("The number of radial nodes (Section 5) shows up directly as the number of times D(r) touches zero (excluding r = 0 and r = infinity) as r increases outward — a 3s orbital's radial distribution function crosses zero twice before reaching its outermost, largest maximum."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Building up the electronic configuration of a multi-electron atom requires three rules, applied together, not in isolation:"),
  bullets([
    "Aufbau principle: orbitals are filled in order of increasing (n + l); when two orbitals share the same (n + l), the one with the lower n fills first. This gives the familiar order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, ... — note that 4s (n+l = 4) fills before 3d (n+l = 5), a direct, testable consequence of the rule rather than an arbitrary memorised sequence.",
    "Pauli exclusion principle: no two electrons in the same atom can have identical values of all four quantum numbers; equivalently, an orbital (fixed n, l, ml) can hold at most two electrons, and they must have opposite spin.",
    "Hund's rule of maximum multiplicity: for a set of degenerate orbitals (same n, l), electrons occupy separate orbitals singly, with parallel spin, before any orbital receives a second electron. This minimises electron-electron repulsion (different orbitals occupied) and maximises exchange energy (parallel spins), both of which lower the total energy.",
  ]),
  callout("Warning / limitation", "The (n+l) rule (also called the Madelung rule) is an empirical regularity confirmed by experiment and quantum-mechanical calculation, not something that falls directly out of solving the hydrogen Schrodinger equation the way n, l and ml themselves do — the hydrogen equation alone cannot explain why 4s fills before 3d, because hydrogen has only one electron and the effect is entirely due to inter-electron repulsion in multi-electron atoms."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("A number of elements deviate from the straightforward Aufbau filling order because a half-filled or fully-filled d subshell provides extra stability, from two combined effects: lower electron-electron repulsion (symmetric charge distribution) and greater exchange energy (more same-spin electron pairs in a half-filled or filled set)."),
  table(
    ["Element", "Expected configuration", "Actual configuration", "Reason"],
    [
      ["Cr (Z=24)", "[Ar] 3d4 4s2", "[Ar] 3d5 4s1", "Half-filled 3d5 plus half-filled 4s1 is more stable than 3d4 4s2 — maximises exchange energy across both subshells."],
      ["Cu (Z=29)", "[Ar] 3d9 4s2", "[Ar] 3d10 4s1", "Fully-filled 3d10 plus half-filled 4s1 is more stable than 3d9 4s2, for the same reason."],
      ["Mo (Z=42)", "[Kr] 4d4 5s2", "[Kr] 4d5 5s1", "Same half-filled-d-subshell stabilisation as Cr, one period down."],
      ["Ag (Z=47)", "[Kr] 4d9 5s2", "[Kr] 4d10 5s1", "Same filled-d-subshell stabilisation as Cu, one period down."],
    ]
  ),
  callout("JEE-to-university bridge", "This exact exception list is used at JEE/NEET level as a memorised fact. At university level, the expected response is to explain WHY via exchange energy and electron-electron repulsion, and to recognise that the effect is strongest exactly at the group-6 and group-11 positions (one electron short of, or exactly at, a half-filled/filled d subshell) — not an arbitrary list to memorise, but a predictable consequence of where half-filled and filled configurations fall."),
];
