import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 09 — Electrical Properties, Semiconductors and Superconductivity | Synergic Bond", description: "Pages 81–85: metallic conduction, bands, Fermi–Dirac statistics, intrinsic/extrinsic semiconductors, p–n devices and Cooper pairing." };

const data = {
  "part": 9,
  "title": "Electrical Properties, Semiconductors and Superconductivity",
  "subtitle": "Pages 81–85: metallic conduction, bands, Fermi–Dirac statistics, intrinsic/extrinsic semiconductors, p–n devices and Cooper pairing.",
  "sourcePages": "Pages 81–85",
  "overview": "The Atkins-derived material is no longer reduced to a short summary. Definitions, distributions, device diagrams and superconducting structure are treated with full equations and original SVGs.",
  "modules": [
    {
      "part": 22,
      "slug": "electrical-properties-of-solids",
      "title": "Electrical Properties of Solids",
      "sourcePages": "pp. 81–85",
      "intro": "The final KOHINOOR source section on electrical behaviour uses band ideas to distinguish metallic conductors, insulators, semiconductors and superconductors, then treats intrinsic/extrinsic doping and p–n junctions.",
      "sections": [
        {
          "title": "1. Temperature Signature",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Class",
                "Electrical signature with temperature"
              ],
              "rows": [
                [
                  "Metallic conductor",
                  "Conductivity generally decreases as temperature rises because scattering increases."
                ],
                [
                  "Semiconductor",
                  "Conductivity increases as temperature rises because carrier concentration increases."
                ],
                [
                  "Insulator",
                  "Very low conductivity because the band gap is too large for appreciable carrier excitation under ordinary conditions."
                ],
                [
                  "Superconductor",
                  "Below critical temperature T_c, dc electrical resistance vanishes."
                ]
              ]
            }
          ]
        },
        {
          "title": "2. Band Picture of Metallic Conduction",
          "blocks": [
            {
              "type": "p",
              "text": "When many atomic orbitals combine in a solid, they form closely spaced energy bands. A partially filled band, or overlapping filled/empty bands, provides nearby unoccupied states into which electrons can respond to an applied electric field."
            },
            {
              "type": "callout",
              "label": "Core criterion",
              "text": "Metallic conduction requires available electronic states near the Fermi level; a completely filled isolated band cannot carry a net current by simple redistribution.",
              "tone": "result"
            }
          ]
        },
        {
          "title": "3. Valence Band, Conduction Band and Band Gap",
          "blocks": [
            {
              "type": "ascii",
              "text": "Energy ↑\nConduction band  ─────────────\n                 ↑ thermal excitation\n          E_g    │ band gap\nValence band     ─────────────\n(full at T≈0 in an ideal intrinsic semiconductor)",
              "title": "Semiconductor band picture"
            },
            {
              "type": "p",
              "text": "At higher temperature, some electrons are promoted to the conduction band, leaving holes in the valence band. Both electrons and holes contribute to conduction."
            }
          ]
        },
        {
          "title": "4. Intrinsic Semiconductor",
          "blocks": [
            {
              "type": "bullets",
              "items": [
                "Pure semiconductor: carrier generation arises from thermal excitation across E_g.",
                "Examples in the source: Si, Ge; compound semiconductors include GaN and CdS.",
                "For intrinsic excitation, electrons and holes are generated in equal numbers."
              ]
            }
          ]
        },
        {
          "title": "5. Extrinsic Semiconductor — p-Type",
          "blocks": [
            {
              "type": "p",
              "text": "Doping Group 14 Si with a Group 13 dopant creates electron-deficient acceptor states. Valence-band electrons can occupy these acceptor levels, leaving mobile holes."
            },
            {
              "type": "bullets",
              "items": [
                "Majority carriers: holes.",
                "Acceptor levels lie just above the valence-band edge.",
                "Example concept: In-doped Si → p-type."
              ]
            }
          ]
        },
        {
          "title": "6. Extrinsic Semiconductor — n-Type",
          "blocks": [
            {
              "type": "p",
              "text": "A Group 15 dopant contributes an extra electron. Donor levels lie just below the conduction-band edge and can thermally donate electrons to the conduction band."
            },
            {
              "type": "bullets",
              "items": [
                "Majority carriers: electrons.",
                "Example concept: P-doped Si → n-type."
              ]
            }
          ]
        },
        {
          "title": "7. p–n Junction",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Bias",
                "Connection / effect"
              ],
              "rows": [
                [
                  "Reverse bias",
                  "p-side toward negative electrode and n-side toward positive in the source convention; carriers are pulled away from the junction and current is strongly suppressed."
                ],
                [
                  "Forward bias",
                  "Carrier injection across the junction is favoured; substantial current flows."
                ]
              ]
            },
            {
              "type": "p",
              "text": "A p–n junction therefore acts as a rectifying element. The source also notes that combinations of junctions form transistor devices capable of current amplification."
            }
          ]
        },
        {
          "title": "8. Fermi–Dirac Source Extension",
          "blocks": [
            {
              "type": "formula",
              "latex": "f(E)=\\\\frac1{e^{(E-E_F)/(k_BT)}+1}",
              "display": "f(E) = 1 / {exp[(E−E_F)/(k_BT)] + 1}."
            },
            {
              "type": "p",
              "text": "At E=E_F, f=1/2. This is useful background for band occupancy but is beyond the usual computational depth required in JEE Advanced chemistry."
            }
          ]
        },
        {
          "title": "9. Superconductivity",
          "blocks": [
            {
              "type": "p",
              "text": "A superconductor has zero dc resistance below a critical temperature T_c. The source discusses low-temperature superconductors, high-T_c cuprates and the Cooper-pair picture for conventional superconductivity."
            },
            {
              "type": "bullets",
              "items": [
                "Hg becomes superconducting below about 4.2 K.",
                "Conventional low-T_c pairing is mediated by electron–lattice interactions in the BCS picture.",
                "High-T_c cuprates have more complex pairing physics and layered Cu–O structural motifs."
              ]
            }
          ]
        }
      ],
      "traps": [
        "Do not classify a material as semiconductor merely because its conductivity is “small”; the temperature dependence and band structure matter.",
        "p-type does not mean the crystal is positively charged; the bulk remains electrically neutral.",
        "n-type majority carriers are electrons, but donor atoms are incorporated as neutral/ionized dopants with overall charge neutrality."
      ],
      "examples": [
        {
          "title": "Example 1",
          "question": "Si is doped with P. Identify type, majority carrier and dopant level.",
          "steps": [
            "P has one more valence electron than Si.",
            "It creates donor states near the conduction band.",
            "Electrons become majority carriers."
          ],
          "answer": "n-type semiconductor; majority carriers electrons; donor level just below conduction band."
        },
        {
          "title": "Example 2 — Multi-correct",
          "question": "Which statements are correct? (A) metallic conductivity usually decreases with T; (B) semiconductor conductivity usually increases with T; (C) p-type bulk carries net positive charge; (D) a superconductor has zero dc resistance below T_c.",
          "steps": [
            "A true.",
            "B true.",
            "C false; bulk neutrality is maintained.",
            "D true."
          ],
          "answer": "Correct: A, B, D."
        }
      ]
    }
  ],
  "sourceSections": [
    {
      "title": "Conductivity and band filling",
      "blocks": [
        {
          "type": "p",
          "text": "A partially filled band conducts because an electric field can redistribute electrons into nearby empty states. A completely filled band cannot carry net current because states with opposite velocities remain equally occupied."
        },
        {
          "type": "formula",
          "latex": "\\sigma=nq\\mu,\\qquad \\rho_{\\rm electrical}=\\frac1\\sigma",
          "display": ""
        },
        {
          "type": "table",
          "headers": [
            "Material",
            "Band picture",
            "Temperature trend"
          ],
          "rows": [
            [
              "Metal",
              "Partially filled band or overlapping bands",
              "$\\sigma$ generally decreases as lattice scattering increases"
            ],
            [
              "Intrinsic semiconductor",
              "Filled valence band, empty conduction band at $T=0$; small gap",
              "$\\sigma$ increases as carriers are thermally generated"
            ],
            [
              "Insulator",
              "Large band gap",
              "Very low carrier concentration"
            ],
            [
              "Superconductor",
              "Paired condensate below $T_c$",
              "Resistance becomes zero below $T_c$"
            ]
          ]
        }
      ]
    },
    {
      "title": "Fermi–Dirac distribution",
      "blocks": [
        {
          "type": "p",
          "text": "The number of occupied states in $[E,E+dE]$ is the density of states multiplied by the occupation probability."
        },
        {
          "type": "formula",
          "latex": "dN(E)=\\rho(E)f(E)\\,dE",
          "display": ""
        },
        {
          "type": "formula",
          "latex": "f(E)=\\frac{1}{\\exp[(E-\\mu)/(kT)]+1}",
          "display": ""
        },
        {
          "type": "p",
          "text": "At $T=0$, $f(E)$ is a step function. At finite temperature, $f(\\mu)=1/2$. For $E-\\mu\\gg kT$, the Boltzmann-tail approximation is $f(E)\\approx e^{-(E-\\mu)/(kT)}$."
        }
      ]
    },
    {
      "title": "Intrinsic and extrinsic semiconductors",
      "blocks": [
        {
          "type": "formula",
          "latex": "n_i\\propto \\exp\\left(-\\frac{E_g}{2kT}\\right)",
          "display": ""
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Dopant relation",
            "Level introduced",
            "Majority carrier"
          ],
          "rows": [
            [
              "p-type",
              "Group 13 in Si/Ge",
              "Acceptor level just above valence band",
              "Holes"
            ],
            [
              "n-type",
              "Group 15 in Si/Ge",
              "Donor level just below conduction band",
              "Electrons"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Device direction",
          "text": "Forward bias lowers the junction barrier and permits large current; reverse bias widens the depletion region and gives only a small leakage current.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "Superconductivity",
      "blocks": [
        {
          "type": "p",
          "text": "Below $T_c$, low-temperature superconductors carry current through Cooper pairs formed by an effective electron–lattice-mediated attraction. Pairing suppresses ordinary scattering channels."
        },
        {
          "type": "formula",
          "latex": "H_c(T)=H_c(0)\\left[1-\\left(\\frac{T}{T_c}\\right)^2\\right]",
          "display": ""
        },
        {
          "type": "p",
          "text": "The Meissner effect is the expulsion of magnetic flux from the superconducting state. It is stronger evidence than zero resistance alone."
        },
        {
          "type": "callout",
          "label": "High-$T_c$ structure",
          "text": "Cuprate superconductors contain conducting $\\mathrm{CuO_2}$-related layers and charge-reservoir blocks. The microscopic pairing mechanism is more complex than the simple low-temperature BCS picture.",
          "tone": "info"
        }
      ]
    }
  ],
  "enrichments": [
    {
      "id": "band",
      "title": "Advanced Extension 10 — From Atomic Orbitals to Bands",
      "visual": "bands",
      "intro": "Band formation explains why electron count and band filling, not merely the presence of electrons, determine conductivity.",
      "paragraphs": [
        "When N equivalent atoms approach, each atomic orbital generates N closely spaced molecular orbitals. In a macroscopic crystal the spacing becomes so small that the levels are treated as an energy band. The allowed energies are separated by forbidden gaps.",
        "A partially filled band can conduct because nearby empty states are available when an electric field changes electron momentum. A completely filled band gives no net current because contributions from opposite wave vectors cancel.",
        "Metals have a partially filled band or overlapping valence and conduction bands. Insulators have a large band gap. Semiconductors have a smaller gap, so thermal excitation creates conduction-band electrons and valence-band holes.",
        "Conductivity is σ = nqμ. In metals, n is already large and increasing temperature mainly reduces mobility through lattice scattering. In intrinsic semiconductors, the exponential increase in n usually dominates the mobility decrease, so conductivity rises with temperature."
      ],
      "formulae": [
        "σ = nqμ",
        "nᵢ ∝ exp(−E_g/2kT)",
        "ρ = 1/σ"
      ],
      "example": {
        "question": "Two intrinsic semiconductors have gaps 1.0 eV and 2.0 eV at the same temperature. Which has more thermally generated carriers?",
        "steps": [
          "nᵢ depends exponentially on −E_g/(2kT).",
          "The smaller gap gives a much less negative exponent."
        ],
        "answer": "The 1.0 eV semiconductor has far more intrinsic carriers."
      }
    },
    {
      "id": "devices",
      "title": "Advanced Extension 11 — Doping, Junctions, Zone Refining and LCD Materials",
      "visual": "junction",
      "intro": "Solid-state chemistry becomes technology when defects and electronic levels are deliberately controlled.",
      "paragraphs": [
        "Donor dopants introduce occupied levels just below the conduction band and readily supply electrons, giving n-type material. Acceptor dopants introduce empty levels just above the valence band and generate holes, giving p-type material. The majority carrier changes, but the crystal remains electrically neutral overall.",
        "At a p–n junction, electrons and holes diffuse and recombine near the interface, leaving fixed charged dopant ions. This creates a depletion region and an internal potential barrier. Forward bias lowers the barrier; reverse bias raises it.",
        "Semiconductor-grade material requires extreme purity. In zone refining, a narrow molten zone travels along a bar. Impurities that prefer the liquid move with the zone and become concentrated at one end, which is removed.",
        "Liquid-crystal displays exploit anisotropic, field-responsive molecules. In a twisted-nematic arrangement the molecular orientation rotates polarization; an applied field changes the orientation and therefore light transmission through crossed polarizers."
      ],
      "formulae": [
        "n-type: donor level → conduction band",
        "p-type: valence band → acceptor level",
        "forward bias lowers junction barrier"
      ],
      "example": {
        "question": "Silicon is doped with a small amount of phosphorus. Identify the majority carrier and dopant type.",
        "steps": [
          "Phosphorus has one more valence electron than silicon.",
          "The extra electron is weakly bound and can enter the conduction band."
        ],
        "answer": "Phosphorus is a donor; electrons are the majority carriers, so the material is n-type."
      }
    },
    {
      "id": "superconduct",
      "title": "Advanced Extension 13 — Superconductivity, Critical Fields and the Meissner State",
      "visual": "superconductor",
      "intro": "Zero resistance and perfect flux exclusion are distinct defining features of the superconducting state.",
      "paragraphs": [
        "Below a critical temperature, a superconductor can sustain current without ordinary resistive loss. In conventional superconductors, electrons form correlated Cooper pairs through lattice-mediated interactions and condense into a coherent quantum state.",
        "The Meissner effect is the expulsion of magnetic flux from the bulk when the material enters the superconducting state. A hypothetical perfect conductor that merely traps existing flux would not show the same thermodynamic behaviour; therefore zero resistance alone is not a complete definition.",
        "Type I superconductors remain in a complete Meissner state up to one critical field and then lose superconductivity abruptly. Type II materials have lower and upper critical fields; between them quantized vortices penetrate while superconductivity survives around the vortex cores.",
        "Thermal agitation and strong magnetic fields break the ordered state. The empirical critical-field relation for a Type I material decreases to zero as T approaches T_c."
      ],
      "formulae": [
        "H_c(T) = H_c(0)[1 − (T/T_c)²]",
        "T < T_c and H < H_c are required for the Type I state",
        "Meissner state: B ≈ 0 in the bulk"
      ],
      "example": {
        "question": "A Type I superconductor has T_c = 8.0 K and H_c(0) = 80 kA m⁻¹. Find H_c at 6.0 K.",
        "steps": [
          "T/T_c = 6/8 = 0.75.",
          "1 − (0.75)² = 0.4375.",
          "H_c = 80 × 0.4375 kA m⁻¹."
        ],
        "answer": "H_c(6.0 K) = 35 kA m⁻¹."
      }
    }
  ],
  "figures": [
    "conductivity-temp",
    "partially-filled-band",
    "field-band-current",
    "semiconductor-gap",
    "fermi-dirac",
    "donor-acceptor",
    "pn-junction",
    "transistor",
    "superconductor-resistance",
    "cooper-pair",
    "ybco"
  ],
  "examples": [
    {
      "title": "Fermi occupation",
      "question": "Find $f(E)$ when $E=\\mu$.",
      "steps": [
        "Substitute $E-\\mu=0$.",
        "$e^0=1$."
      ],
      "answer": "$f(\\mu)=1/(1+1)=1/2$."
    },
    {
      "title": "Carrier comparison",
      "question": "At the same temperature, compare intrinsic carriers for gaps $1.0$ eV and $2.0$ eV.",
      "steps": [
        "$n_i\\propto e^{-E_g/(2kT)}$.",
        "The smaller gap has the less negative exponent."
      ],
      "answer": "The 1.0 eV semiconductor has exponentially more carriers."
    },
    {
      "title": "Critical field",
      "question": "For $T_c=8.0\\,\\mathrm K$, $H_c(0)=80\\,\\mathrm{kA\\,m^{-1}}$, find $H_c$ at $T=6.0\\,\\mathrm K$.",
      "steps": [
        "$H_c=80[1-(6/8)^2]$.",
        "$1-0.5625=0.4375$."
      ],
      "answer": "$H_c=35.0\\,\\mathrm{kA\\,m^{-1}}$."
    },
    {
      "title": "Diode bias",
      "question": "Why does current rise strongly in forward bias?",
      "steps": [
        "The applied field reduces the built-in potential barrier.",
        "Majority carriers cross the junction and recombine."
      ],
      "answer": "Carrier injection produces a large forward current."
    }
  ],
  "ncertExamples": [
    {
      "title": "Temperature coefficient",
      "question": "How does conductivity change with temperature in metals and semiconductors?",
      "steps": [
        "Metal carrier density is nearly fixed; mobility decreases with scattering.",
        "Semiconductor carrier concentration rises rapidly with temperature."
      ],
      "answer": "Metal conductivity generally decreases; semiconductor conductivity increases."
    },
    {
      "title": "Doping silicon",
      "question": "Classify Si doped with phosphorus.",
      "steps": [
        "P has one more valence electron than Si.",
        "It contributes a donor electron near the conduction band."
      ],
      "answer": "The material is n-type."
    }
  ],
  "pageAudit": [
    {
      "page": 81,
      "topic": "Band theory, Fermi–Dirac distribution, semiconductors, p–n junction and superconductivity"
    },
    {
      "page": 82,
      "topic": "Band theory, Fermi–Dirac distribution, semiconductors, p–n junction and superconductivity"
    },
    {
      "page": 83,
      "topic": "Band theory, Fermi–Dirac distribution, semiconductors, p–n junction and superconductivity"
    },
    {
      "page": 84,
      "topic": "Band theory, Fermi–Dirac distribution, semiconductors, p–n junction and superconductivity"
    },
    {
      "page": 85,
      "topic": "Band theory, Fermi–Dirac distribution, semiconductors, p–n junction and superconductivity"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
