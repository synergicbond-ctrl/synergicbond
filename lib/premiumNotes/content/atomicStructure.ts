import type { PremiumChapterNotes } from "../schema";

export const ATOMIC_STRUCTURE_NOTES: PremiumChapterNotes = {
  chapterId: "atomic-structure",
  title: "Atomic Structure",
  tagline: "The journey from classical mechanics to quantum probability: subatomic particles, Bohr's quantization, wave-particle duality, and the modern electronic configuration.",
  topics: [
    {
      id: "subatomic-particles",
      title: "Subatomic Particles & Early Models",
      intro: "Discovery of electrons, protons, neutrons, and the Thomson/Rutherford models.",
      subtopics: [
        {
          id: "rutherford-model",
          title: "Rutherford's Alpha Scattering",
          blocks: [
            {
              kind: "detailed",
              heading: "Key Observations",
              paras: [
                "Most alpha particles pass straight through, indicating atoms are mostly empty space.",
                "A few are deflected at large angles, proving the existence of a small, dense, positively charged nucleus."
              ]
            },
            {
              kind: "focus",
              title: "Distance of Closest Approach",
              points: [
                "Kinetic energy of alpha particle is converted entirely to electrostatic potential energy at the turning point.",
                "r₀ = (1 / 4πε₀) * (2Ze² / KE)"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "bohr-model",
      title: "Bohr's Model for Hydrogen-like Species",
      intro: "Quantization of angular momentum and stationary orbits.",
      subtopics: [
        {
          id: "bohr-postulates",
          title: "Postulates and Expressions",
          blocks: [
            {
              kind: "detailed",
              heading: "Angular Momentum Quantization",
              paras: [
                "An electron can only revolve in orbits where its angular momentum is an integral multiple of h/2π.",
                "mvr = nh/2π"
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "Bohr's model applies to all atoms.",
                  reality: "It strictly applies ONLY to single-electron species (H, He+, Li2+, Be3+)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "quantum-model",
      title: "Quantum Mechanical Model",
      intro: "De Broglie wavelength, Heisenberg uncertainty, and Schrödinger's orbitals.",
      subtopics: [
        {
          id: "quantum-numbers",
          title: "Quantum Numbers",
          blocks: [
            {
              kind: "detailed",
              heading: "The Four Quantum Numbers",
              points: [
                "Principal (n): Shell, size, and energy.",
                "Azimuthal (l): Subshell, shape (s, p, d, f).",
                "Magnetic (m): Orbital orientation.",
                "Spin (s): Electron spin direction (+1/2, -1/2)."
              ]
            },
            {
              kind: "mistake",
              items: [
                {
                  wrong: "Assuming l can be equal to n.",
                  right: "l ranges from 0 to n-1. A 2d orbital (n=2, l=2) does not exist."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  chapterRevision: [
    "r_n = 0.529 * (n²/Z) Å",
    "E_n = -13.6 * (Z²/n²) eV",
    "Angular momentum = nh/2π",
    "Orbital angular momentum = sqrt(l(l+1)) * (h/2π)",
    "Nodes: Radial = n - l - 1, Angular = l, Total = n - 1"
  ]
};
