import type { ReactNode } from "react";
import { BlockMath } from "@/components/math/react-katex";

export type ElectroPart = {
  number: number;
  title: string;
  sourceParts: number[];
  body: ReactNode;
};

type TableSpec = { headers: string[]; rows: string[][] };
type SectionSpec = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  formulas?: string[];
  table?: TableSpec;
};
type ExampleSpec = {
  title: string;
  question: string;
  steps: string[];
  formulas?: string[];
  answer: string;
};
type PracticeSpec = { question: string; answer: string };
type PartSpec = {
  number: number;
  title: string;
  sourcePages: string;
  overview: string;
  sections: SectionSpec[];
  example: ExampleSpec;
  traps: string[];
  practice: PracticeSpec[];
};

const PART_SPECS: PartSpec[] = [
  {
    "number": 1,
    "title": "Electrogenetic and Electrolytic Reactions",
    "sourcePages": "2",
    "overview": "Electrochemistry studies the interconversion of chemical and electrical energy. The first distinction is between reactions that generate electrical work spontaneously and reactions that require an external source of electrical energy.",
    "sections": [
      {
        "heading": "Electrogenetic reactions",
        "paragraphs": [
          "An electrogenetic reaction is a spontaneous redox reaction arranged so that oxidation and reduction occur at separate locations. Electrons released by oxidation are forced through an external conductor before reaching the reduction half-cell. The chemical free energy of the reaction is therefore converted into electrical work.",
          "A galvanic, voltaic or electrochemical cell is the practical device used for this conversion. The reaction proceeds spontaneously in the direction for which the cell potential is positive."
        ],
        "formulas": [
          "\\Delta_r G=-nFE_{\\mathrm{cell}}",
          "E_{\\mathrm{cell}}>0\\Longleftrightarrow \\Delta_rG<0"
        ]
      },
      {
        "heading": "Electrolytic reactions",
        "paragraphs": [
          "An electrolytic reaction is non-spontaneous in the desired direction. A direct-current source supplies electrical work and drives oxidation and reduction at the electrodes. Electrical energy is converted into chemical energy stored in products.",
          "Electrolysis, electroplating, electrorefining and the industrial preparation of reactive metals are common applications."
        ],
        "formulas": [
          "W_{\\mathrm{electrical,minimum}}\\ge nFE_{\\mathrm{decomposition}}"
        ]
      },
      {
        "heading": "Lead-storage cell as an electrogenetic example",
        "paragraphs": [
          "During discharge, lead metal is oxidised at the negative plate and lead dioxide is reduced at the positive plate. Both plates become coated with lead(II) sulfate and sulfuric acid is consumed. The reverse reaction is forced during charging."
        ],
        "formulas": [
          "\\mathrm{Pb(s)+SO_4^{2-}(aq)\\rightarrow PbSO_4(s)+2e^-}",
          "\\mathrm{PbO_2(s)+4H^+(aq)+SO_4^{2-}(aq)+2e^-\\rightarrow PbSO_4(s)+2H_2O(l)}",
          "\\mathrm{Pb+PbO_2+2H_2SO_4\\rightarrow 2PbSO_4+2H_2O}"
        ]
      },
      {
        "heading": "Energy and reaction-direction comparison",
        "table": {
          "headers": [
            "Feature",
            "Electrogenetic / galvanic",
            "Electrolytic"
          ],
          "rows": [
            [
              "Thermodynamic direction",
              "Spontaneous as operated",
              "Non-spontaneous as operated"
            ],
            [
              "Energy conversion",
              "Chemical → electrical",
              "Electrical → chemical"
            ],
            [
              "External source",
              "Not required for ideal discharge",
              "Required"
            ],
            [
              "Anode",
              "Oxidation; negative terminal",
              "Oxidation; positive terminal"
            ],
            [
              "Cathode",
              "Reduction; positive terminal",
              "Reduction; negative terminal"
            ]
          ]
        }
      }
    ],
    "example": {
      "title": "Worked check: identify the cell type",
      "question": "A cell converts Cu²⁺ to Cu while oxidising Zn to Zn²⁺ and produces 1.10 V without an external source. Classify the reaction and identify the energy conversion.",
      "steps": [
        "The reaction proceeds without external electrical work.",
        "A positive voltage is delivered to the circuit.",
        "Therefore it is an electrogenetic reaction in a galvanic cell."
      ],
      "formulas": [
        "\\mathrm{Zn+Cu^{2+}\\rightarrow Zn^{2+}+Cu}"
      ],
      "answer": "Electrogenetic; chemical energy is converted into electrical energy."
    },
    "traps": [
      "Oxidation is always at the anode and reduction is always at the cathode; only the signs change between galvanic and electrolytic cells.",
      "A rechargeable battery is galvanic during discharge and electrolytic during charging.",
      "Spontaneity refers to the reaction as written. Reversing the reaction reverses the sign of E and ΔG."
    ],
    "practice": [
      {
        "question": "During charging of a lead-storage battery, is the battery galvanic or electrolytic?",
        "answer": "Electrolytic, because an external source drives the reverse non-spontaneous reaction."
      },
      {
        "question": "What is the sign of ΔG for a working galvanic cell?",
        "answer": "Negative for the spontaneous cell reaction."
      }
    ]
  },
  {
    "number": 2,
    "title": "Galvanic Cells, Electrolytic Cells and Electrode Conventions",
    "sourcePages": "3–5",
    "overview": "A complete cell separates two half-reactions and provides both an electronic path outside the solutions and an ionic path inside the cell.",
    "sections": [
      {
        "heading": "Daniell cell mechanism",
        "paragraphs": [
          "In a Daniell cell, zinc is immersed in a Zn²⁺ solution and copper is immersed in a Cu²⁺ solution. Zinc has the greater tendency to oxidise, so zinc atoms enter solution and release electrons. Cu²⁺ ions accept those electrons and deposit as copper metal.",
          "Separating the two half-reactions prevents direct chemical contact and forces electrons through the wire, where useful electrical work can be obtained."
        ],
        "formulas": [
          "\\mathrm{Zn(s)\\rightarrow Zn^{2+}(aq)+2e^-}",
          "\\mathrm{Cu^{2+}(aq)+2e^-\\rightarrow Cu(s)}",
          "\\mathrm{Zn(s)+Cu^{2+}(aq)\\rightarrow Zn^{2+}(aq)+Cu(s)}"
        ]
      },
      {
        "heading": "Electron flow, current and ion migration",
        "paragraphs": [
          "Electrons flow through the external wire from zinc anode to copper cathode. Conventional current is opposite to electron flow. In the electrolyte, charge is carried by ions rather than electrons.",
          "Anions migrate toward the anode compartment, where positive charge is being produced. Cations migrate toward the cathode compartment, where positive ions are being consumed."
        ]
      },
      {
        "heading": "Cell components",
        "bullets": [
          "Electrodes: electronic conductors where interfacial oxidation or reduction occurs.",
          "Electrolytes: ionic conductors containing the reacting or supporting ions.",
          "External circuit: metallic path for electrons.",
          "Salt bridge or porous separator: ionic path that maintains bulk electroneutrality.",
          "Voltmeter or load: measures potential or extracts work."
        ]
      },
      {
        "heading": "Electrode conventions",
        "table": {
          "headers": [
            "Cell type",
            "Anode",
            "Cathode",
            "Electron source",
            "Terminal signs"
          ],
          "rows": [
            [
              "Galvanic",
              "Oxidation",
              "Reduction",
              "Anode",
              "Anode −, cathode +"
            ],
            [
              "Electrolytic",
              "Oxidation",
              "Reduction",
              "Power-supply negative terminal feeds cathode",
              "Anode +, cathode −"
            ]
          ]
        }
      },
      {
        "heading": "Cell notation",
        "paragraphs": [
          "The conventional Daniell-cell notation places the oxidation half-cell on the left and the reduction half-cell on the right. A single vertical line represents a phase boundary; a double line represents the liquid junction or salt bridge."
        ],
        "formulas": [
          "\\mathrm{Zn(s)|Zn^{2+}(aq)||Cu^{2+}(aq)|Cu(s)}"
        ]
      }
    ],
    "example": {
      "title": "Worked check: direction of flow",
      "question": "For Zn|Zn²⁺||Cu²⁺|Cu, state the anode, cathode, electron-flow direction and ion migration through the bridge.",
      "steps": [
        "Zn is oxidised, so Zn is the anode.",
        "Cu²⁺ is reduced, so Cu is the cathode.",
        "Electrons flow Zn → Cu through the wire.",
        "Bridge anions migrate toward the Zn compartment; bridge cations migrate toward the Cu compartment."
      ],
      "answer": "Anode Zn; cathode Cu; e⁻ flow Zn→Cu; anions→anode and cations→cathode."
    },
    "traps": [
      "The salt bridge does not carry electrons.",
      "A positive cathode is true for a galvanic cell, not for every cell.",
      "Spectator ions may appear in solutions but are not necessarily part of the net cell reaction."
    ],
    "practice": [
      {
        "question": "Why does a galvanic cell stop if the ionic connection is removed?",
        "answer": "Charge builds up in the half-cells, opposing further electron transfer and quickly reducing the current to zero."
      },
      {
        "question": "Which direction does conventional current flow in the external circuit?",
        "answer": "From cathode to anode, opposite to electron flow."
      }
    ]
  },
  {
    "number": 3,
    "title": "Reversible Electrodes and Their Classification",
    "sourcePages": "6–12",
    "overview": "A reversible electrode establishes a definite equilibrium potential with the species in its half-cell and responds reversibly to an infinitesimal change in applied potential.",
    "sections": [
      {
        "heading": "Meaning of electrode reversibility",
        "paragraphs": [
          "At equilibrium, forward and reverse interfacial electron-transfer rates are equal. If the external potential is made infinitesimally more positive, oxidation is favoured; if made infinitesimally more negative, reduction is favoured.",
          "A reversible electrode must have rapid charge transfer, reproducible composition and negligible polarisation under the measuring current. An irreversible electrode shows large kinetic barriers, passivation or side reactions."
        ]
      },
      {
        "heading": "Metal–metal-ion electrodes",
        "paragraphs": [
          "A metal is immersed in a solution containing its ions. The electrode potential depends on metal-ion activity. Pure solid metal has unit activity."
        ],
        "formulas": [
          "\\mathrm{M^{z+}(aq)+ze^-\\rightleftharpoons M(s)}",
          "E=E^\\circ+\\frac{RT}{zF}\\ln a(\\mathrm{M^{z+}})"
        ]
      },
      {
        "heading": "Gas electrodes",
        "paragraphs": [
          "An inert conductor such as platinised platinum supplies an electronic surface for a gaseous redox couple. The potential depends on gas fugacity or pressure and ionic activity."
        ],
        "formulas": [
          "\\mathrm{2H^+(aq)+2e^-\\rightleftharpoons H_2(g)}",
          "E_{\\mathrm{H^+/H_2}}=E^\\circ+\\frac{RT}{F}\\ln a(\\mathrm{H^+})-\\frac{RT}{2F}\\ln p_{\\mathrm{H_2}}"
        ]
      },
      {
        "heading": "Metal–insoluble-salt–anion electrodes",
        "paragraphs": [
          "A metal is coated with a sparingly soluble salt and immersed in a solution containing the common anion. These electrodes are reproducible and widely used as references."
        ],
        "formulas": [
          "\\mathrm{AgCl(s)+e^-\\rightleftharpoons Ag(s)+Cl^-(aq)}",
          "E_{\\mathrm{AgCl/Ag}}=E^\\circ-\\frac{RT}{F}\\ln a(\\mathrm{Cl^-})"
        ]
      },
      {
        "heading": "Redox electrodes",
        "paragraphs": [
          "An inert platinum or gold electrode contacts a solution containing oxidised and reduced forms of a redox couple. The conductor participates only in electron transfer."
        ],
        "formulas": [
          "\\mathrm{Fe^{3+}+e^-\\rightleftharpoons Fe^{2+}}",
          "E=E^\\circ+\\frac{RT}{F}\\ln\\frac{a(\\mathrm{Fe^{3+}})}{a(\\mathrm{Fe^{2+}})}"
        ]
      },
      {
        "heading": "Electrode classification summary",
        "table": {
          "headers": [
            "Class",
            "Typical notation",
            "Potential controlled by"
          ],
          "rows": [
            [
              "Metal/ion",
              "Zn|Zn²⁺",
              "Cation activity"
            ],
            [
              "Gas electrode",
              "Pt|H₂|H⁺",
              "Gas pressure and ion activity"
            ],
            [
              "Insoluble salt",
              "Ag|AgCl|Cl⁻",
              "Anion activity"
            ],
            [
              "Redox electrode",
              "Pt|Fe²⁺,Fe³⁺",
              "Oxidised/reduced activity ratio"
            ],
            [
              "Amalgam electrode",
              "Hg(M)|M⁺",
              "Metal activity in amalgam and ion activity"
            ]
          ]
        }
      }
    ],
    "example": {
      "title": "Worked example: silver–silver chloride electrode",
      "question": "Write the Nernst equation for AgCl(s)+e⁻⇌Ag(s)+Cl⁻(aq) at 298 K.",
      "steps": [
        "The reaction quotient is Q=a(Cl⁻), because AgCl and Ag are pure solids.",
        "Use E=E°−(0.05916/n)logQ with n=1."
      ],
      "formulas": [
        "E=E^\\circ-0.05916\\log a(\\mathrm{Cl^-})"
      ],
      "answer": "Increasing chloride activity lowers the reduction potential."
    },
    "traps": [
      "An inert electrode is chemically inert but electrochemically active as an electron-transfer surface.",
      "Pure solids and pure liquids are omitted from Q, but dissolved species are not.",
      "Reversible does not mean that no current can ever flow; it means the direction can be reversed by an infinitesimal potential change near equilibrium."
    ],
    "practice": [
      {
        "question": "Which electrode class is Pt|Sn²⁺,Sn⁴⁺?",
        "answer": "A redox electrode."
      },
      {
        "question": "Why is platinum black used in a hydrogen electrode?",
        "answer": "It increases catalytic surface area and accelerates H₂/H⁺ electron transfer."
      }
    ]
  },
  {
    "number": 4,
    "title": "Salt Bridge, Liquid-Junction Potential and Cell Completion",
    "sourcePages": "13–14",
    "overview": "The ionic connection completes the internal circuit and prevents rapid charge separation, but unequal ion mobilities can create an additional liquid-junction potential.",
    "sections": [
      {
        "heading": "Functions of a salt bridge",
        "bullets": [
          "Completes the electrical circuit by ionic conduction.",
          "Maintains approximate electroneutrality in both half-cells.",
          "Reduces direct mixing of the half-cell electrolytes.",
          "Minimises liquid-junction potential when cation and anion mobilities are similar.",
          "Allows each half-cell composition to remain locally well defined."
        ]
      },
      {
        "heading": "Ion migration in a working cell",
        "paragraphs": [
          "At an anode such as Zn/Zn²⁺, oxidation creates excess positive charge. Bridge anions move into that compartment. At the cathode, cations are consumed, leaving excess anionic charge; bridge cations move toward the cathode compartment."
        ]
      },
      {
        "heading": "Choice of bridge electrolyte",
        "paragraphs": [
          "The bridge salt must be highly soluble, chemically inert toward both half-cell solutions and composed of ions with similar transport numbers. KCl, KNO₃ and NH₄NO₃ are common choices, but compatibility must be checked.",
          "KCl is unsuitable when Ag⁺, Pb²⁺ or Hg₂²⁺ is present because insoluble chlorides may form."
        ]
      },
      {
        "heading": "Liquid-junction potential",
        "paragraphs": [
          "When two electrolyte solutions contact, faster ions diffuse more rapidly than slower ions. Temporary charge separation produces an interfacial potential that opposes further differential diffusion.",
          "The measured cell emf is the sum of the desired electrode-potential difference and any junction contribution. A good bridge makes the junction term small and reproducible."
        ],
        "formulas": [
          "E_{\\mathrm{measured}}=E_{\\mathrm{right}}-E_{\\mathrm{left}}+E_j"
        ]
      },
      {
        "heading": "Cells without a conventional bridge",
        "paragraphs": [
          "A porous pot, fritted-glass separator, membrane or direct liquid junction may provide ionic continuity. Such devices can increase mixing or junction-potential uncertainty and must be treated explicitly in precision measurements."
        ]
      }
    ],
    "example": {
      "title": "Worked check: bridge-ion movement",
      "question": "In a Zn/Cu galvanic cell using KNO₃ bridge, state the direction of K⁺ and NO₃⁻ migration.",
      "steps": [
        "Zn oxidation produces Zn²⁺ in the anode compartment.",
        "Cu²⁺ is consumed in the cathode compartment.",
        "NO₃⁻ migrates toward Zn; K⁺ migrates toward Cu."
      ],
      "answer": "NO₃⁻→anode and K⁺→cathode."
    },
    "traps": [
      "The bridge does not supply electrons to either electrode.",
      "A salt bridge reduces but does not mathematically guarantee zero junction potential.",
      "Use a bridge electrolyte that does not precipitate, complex or react with half-cell species."
    ],
    "practice": [
      {
        "question": "Why are KCl and KNO₃ often preferred bridge salts?",
        "answer": "Their ions are highly mobile, usually chemically inert, and cation/anion mobilities are reasonably similar."
      },
      {
        "question": "What happens to measured emf if junction potential is significant?",
        "answer": "The observed emf differs from the pure difference of electrode potentials by the junction contribution."
      }
    ]
  },
  {
    "number": 5,
    "title": "Electrode Potential, Oxidation/Reduction Potential and SHE",
    "sourcePages": "15–17",
    "overview": "A single electrode potential cannot be measured absolutely; only a potential difference between two electrodes is observable. Standard electrode potentials are therefore defined relative to a reference.",
    "sections": [
      {
        "heading": "Origin of electrode potential",
        "paragraphs": [
          "When a metal contacts an electrolyte, oxidation and reduction tendencies create an interfacial charge separation. The resulting electrical double layer produces a potential difference between the electronic conductor and the solution.",
          "At equilibrium the chemical tendency for electron transfer is balanced by the electrical field. The potential depends on temperature, pressure and activities."
        ]
      },
      {
        "heading": "Reduction-potential convention",
        "paragraphs": [
          "Modern tables list all half-reactions as reductions. A more positive standard reduction potential means a greater thermodynamic tendency to be reduced under standard conditions.",
          "The oxidation potential for the reverse half-reaction has equal magnitude and opposite sign."
        ],
        "formulas": [
          "E^\\circ_{\\mathrm{ox}}=-E^\\circ_{\\mathrm{red}}"
        ]
      },
      {
        "heading": "Standard hydrogen electrode",
        "paragraphs": [
          "The standard hydrogen electrode uses platinised platinum in contact with hydrogen gas and a solution in which hydrogen-ion activity is unity. Its standard potential is defined as exactly zero.",
          "Platinum is inert, platinum black catalyses H₂ dissociation, and the electrode may act as anode or cathode depending on the coupled half-cell."
        ],
        "formulas": [
          "\\mathrm{Pt|H_2(g,1\\,bar)|H^+(a=1)}",
          "E^\\circ_{\\mathrm{H^+/H_2}}=0"
        ]
      },
      {
        "heading": "Measuring an unknown standard potential",
        "paragraphs": [
          "Couple the unknown half-cell to SHE under standard conditions and measure the open-circuit emf. The polarity reveals whether the unknown electrode is the cathode or anode. Apply E°cell=E°cathode−E°anode."
        ],
        "formulas": [
          "E^\\circ_{\\mathrm{cell}}=E^\\circ_{\\mathrm{cathode}}-E^\\circ_{\\mathrm{anode}}"
        ]
      },
      {
        "heading": "Standard-state conditions",
        "table": {
          "headers": [
            "Quantity",
            "Standard requirement"
          ],
          "rows": [
            [
              "Solute",
              "Unit activity; often approximated by 1 mol L⁻¹ in elementary work"
            ],
            [
              "Gas",
              "Standard fugacity; approximately 1 bar for ideal gas"
            ],
            [
              "Pure solid/liquid",
              "Pure phase; activity 1"
            ],
            [
              "Temperature",
              "Must be stated; commonly 298.15 K"
            ],
            [
              "Current",
              "Essentially zero during emf measurement"
            ]
          ]
        }
      }
    ],
    "example": {
      "title": "Worked example: copper potential against SHE",
      "question": "A standard Cu²⁺/Cu half-cell is the positive electrode against SHE and the measured emf is 0.340 V. Find E°(Cu²⁺/Cu).",
      "steps": [
        "Cu is cathode; SHE is anode.",
        "E°cell=E°Cu−E°SHE.",
        "E°SHE=0."
      ],
      "formulas": [
        "0.340=E^\\circ_{\\mathrm{Cu^{2+}/Cu}}-0"
      ],
      "answer": "E°(Cu²⁺/Cu)=+0.340 V."
    },
    "traps": [
      "Do not multiply E° when multiplying a half-reaction; electrode potential is intensive.",
      "A 1 mol L⁻¹ solution is not exactly unit activity unless activity coefficients are accounted for.",
      "The SHE is a defined zero reference, not an electrode whose absolute potential is physically zero."
    ],
    "practice": [
      {
        "question": "If an unknown electrode is negative relative to SHE under standard conditions, what is the sign of its standard reduction potential?",
        "answer": "Negative."
      },
      {
        "question": "What current should flow while measuring equilibrium emf?",
        "answer": "Ideally zero; a high-resistance voltmeter is used."
      }
    ]
  },
  {
    "number": 6,
    "title": "Cell EMF, Reversible Work and Gibbs-Energy Relations",
    "sourcePages": "18–21",
    "overview": "Cell emf is a thermodynamic quantity measured at negligible current. It connects electrochemistry with maximum non-expansion work and the Gibbs energy of reaction.",
    "sections": [
      {
        "heading": "EMF and open-circuit potential",
        "paragraphs": [
          "The emf of a cell is the potential difference when no appreciable current flows. Under load, internal resistance and polarisation lower the terminal voltage.",
          "A reversible cell is operated through an infinitesimal potential difference so that the reaction can be reversed without finite dissipation."
        ]
      },
      {
        "heading": "Maximum electrical work",
        "paragraphs": [
          "For a reaction transferring n moles of electrons per stoichiometric reaction, the charge transferred is nF. Electrical work equals charge multiplied by potential. At constant temperature and pressure, maximum non-expansion work equals −ΔG."
        ],
        "formulas": [
          "q=nF",
          "w_{\\mathrm{elec,max}}=nFE",
          "\\Delta_rG=-nFE"
        ]
      },
      {
        "heading": "Standard relation and spontaneity",
        "formulas": [
          "\\Delta_rG^\\circ=-nFE^\\circ",
          "E^\\circ>0\\Rightarrow \\Delta_rG^\\circ<0"
        ]
      },
      {
        "heading": "Temperature coefficient of emf",
        "paragraphs": [
          "Differentiating ΔG=−nFE with respect to temperature at constant pressure and using (∂G/∂T)p=−S gives the entropy relation. Combining ΔG=ΔH−TΔS gives the enthalpy relation."
        ],
        "formulas": [
          "\\Delta_rS=nF\\left(\\frac{\\partial E}{\\partial T}\\right)_p",
          "\\Delta_rH=-nFE+nFT\\left(\\frac{\\partial E}{\\partial T}\\right)_p"
        ]
      },
      {
        "heading": "Practical voltage under load",
        "paragraphs": [
          "Real cells have ohmic drop, activation overpotential and concentration polarisation. Therefore terminal voltage during discharge is smaller than equilibrium emf, while charging requires a voltage greater than the reversible value."
        ],
        "formulas": [
          "V_{\\mathrm{terminal}}=E-Ir-\\eta_{\\mathrm{act}}-\\eta_{\\mathrm{conc}}"
        ]
      }
    ],
    "example": {
      "title": "Worked example: ΔG° from E°",
      "question": "For a cell reaction with n=2 and E°=1.10 V at 298 K, calculate ΔG° using F=96485 C mol⁻¹.",
      "steps": [
        "Use ΔG°=−nFE°.",
        "Substitute 2×96485×1.10 J mol⁻¹.",
        "Convert to kJ mol⁻¹."
      ],
      "formulas": [
        "\\Delta G^\\circ=-2(96485)(1.10)=-2.12\\times10^5\\,\\mathrm{J\\,mol^{-1}}"
      ],
      "answer": "ΔG°≈−212 kJ mol⁻¹."
    },
    "traps": [
      "Use n from the balanced overall reaction, not from an unbalanced half-reaction.",
      "EMF is measured at negligible current; terminal voltage under load is not the same quantity.",
      "Potential is intensive, whereas ΔG scales with the stoichiometric reaction."
    ],
    "practice": [
      {
        "question": "What does Ecell=0 imply for a reversible cell?",
        "answer": "The cell reaction is at equilibrium under those conditions."
      },
      {
        "question": "If E decreases with temperature, what is the sign of ΔS for the cell reaction?",
        "answer": "Negative, because ΔS=nF(∂E/∂T)p."
      }
    ]
  },
  {
    "number": 7,
    "title": "Nernst Equation: Derivation, Forms and Temperature Constants",
    "sourcePages": "22–24",
    "overview": "The Nernst equation gives the dependence of electrode or cell potential on composition and pressure.",
    "sections": [
      {
        "heading": "Thermodynamic derivation",
        "paragraphs": [
          "For a reaction at non-standard composition, ΔG=ΔG°+RT lnQ. Electrochemical work gives ΔG=−nFE and ΔG°=−nFE°. Substitution and rearrangement produce the Nernst equation."
        ],
        "formulas": [
          "\\Delta G=\\Delta G^\\circ+RT\\ln Q",
          "-nFE=-nFE^\\circ+RT\\ln Q",
          "E=E^\\circ-\\frac{RT}{nF}\\ln Q"
        ]
      },
      {
        "heading": "Base-10 form",
        "formulas": [
          "E=E^\\circ-\\frac{2.303RT}{nF}\\log Q",
          "E=E^\\circ-\\frac{0.05916}{n}\\log Q\\quad(298.15\\,\\mathrm K)"
        ]
      },
      {
        "heading": "Reaction quotient rules",
        "bullets": [
          "Use the balanced reaction exactly as written.",
          "Activities of products appear in the numerator and reactants in the denominator.",
          "Raise each activity to its stoichiometric coefficient.",
          "Pure solids and pure liquids have activity 1 and are omitted.",
          "For gases, use fugacity; ideal-gas pressure is a common approximation.",
          "For dilute solutions, concentration may approximate activity."
        ]
      },
      {
        "heading": "Half-cell form",
        "paragraphs": [
          "For Ox+ne⁻⇌Red, electrons do not appear in Q. The potential rises when oxidised-form activity rises and falls when reduced-form activity rises."
        ],
        "formulas": [
          "E=E^\\circ+\\frac{RT}{nF}\\ln\\frac{a(\\mathrm{Ox})}{a(\\mathrm{Red})}"
        ]
      },
      {
        "heading": "Temperature dependence of the coefficient",
        "table": {
          "headers": [
            "Temperature",
            "2.303RT/F"
          ],
          "rows": [
            [
              "273 K",
              "≈0.0542 V"
            ],
            [
              "298.15 K",
              "≈0.05916 V"
            ],
            [
              "310 K",
              "≈0.0615 V"
            ]
          ]
        }
      }
    ],
    "example": {
      "title": "Worked example: Ag⁺/Ag electrode",
      "question": "Calculate E for Ag⁺+e⁻→Ag at 298 K when E°=0.799 V and [Ag⁺]=10⁻³ M, assuming activity coefficient 1.",
      "steps": [
        "Q=1/a(Ag⁺) for the reduction as written.",
        "Equivalent half-cell form is E=E°+0.05916 log[Ag⁺].",
        "log10(10⁻³)=−3."
      ],
      "formulas": [
        "E=0.799+0.05916(-3)=0.6215\\,\\mathrm V"
      ],
      "answer": "E≈0.622 V."
    },
    "traps": [
      "Do not insert electrons into Q.",
      "Natural logarithm uses RT/nF; common logarithm uses 2.303RT/nF.",
      "Reversing the overall reaction changes E to −E and replaces Q by 1/Q."
    ],
    "practice": [
      {
        "question": "What happens to the Cu²⁺/Cu reduction potential when [Cu²⁺] decreases?",
        "answer": "It decreases."
      },
      {
        "question": "At equilibrium, what replaces Q in the Nernst equation?",
        "answer": "The equilibrium constant K, and Ecell becomes zero."
      }
    ]
  },
  {
    "number": 8,
    "title": "Electrode-Potential and Cell-Potential Numericals under Nonstandard Conditions",
    "sourcePages": "25–36",
    "overview": "Most JEE Advanced electrochemistry numericals are solved by balancing the reaction, constructing Q, selecting n and maintaining consistent sign conventions.",
    "sections": [
      {
        "heading": "Universal numerical workflow",
        "bullets": [
          "Write both reduction half-reactions.",
          "Identify cathode and anode under the stated conditions.",
          "Balance the overall reaction and determine n.",
          "Build Q from activities or justified concentration/pressure approximations.",
          "Use E=E°−(RT/nF)lnQ.",
          "Check whether the computed sign agrees with the assumed direction."
        ]
      },
      {
        "heading": "Metal-ion electrode",
        "formulas": [
          "E_{\\mathrm{M^{z+}/M}}=E^\\circ+\\frac{0.05916}{z}\\log a(\\mathrm{M^{z+}})"
        ]
      },
      {
        "heading": "Gas electrode",
        "formulas": [
          "E_{\\mathrm{H^+/H_2}}=-0.05916\\,\\mathrm{pH}-\\frac{0.02958}{1}\\log p_{\\mathrm{H_2}}\\quad(298\\,\\mathrm K)",
          "E_{\\mathrm{Cl_2/Cl^-}}=E^\\circ+\\frac{0.02958}{1}\\log\\frac{p_{\\mathrm{Cl_2}}}{a(\\mathrm{Cl^-})^2}"
        ]
      },
      {
        "heading": "Redox electrode",
        "formulas": [
          "E_{\\mathrm{Fe^{3+}/Fe^{2+}}}=E^\\circ+0.05916\\log\\frac{a(\\mathrm{Fe^{3+}})}{a(\\mathrm{Fe^{2+}})}"
        ]
      },
      {
        "heading": "Solubility-linked electrode",
        "paragraphs": [
          "For an insoluble-salt electrode, ion activity can be connected to Ksp. This allows electrode-potential measurements to determine solubility products or unknown ion concentrations."
        ],
        "formulas": [
          "K_{sp}=a(\\mathrm{Ag^+})a(\\mathrm{Cl^-})",
          "E_{\\mathrm{AgCl/Ag}}=E^\\circ-0.05916\\log a(\\mathrm{Cl^-})"
        ]
      }
    ],
    "example": {
      "title": "Four-step cell-potential example",
      "question": "Find E at 298 K for Zn|Zn²⁺(0.10 M)||Cu²⁺(0.010 M)|Cu. E°cell=1.10 V.",
      "steps": [
        "Overall reaction: Zn+Cu²⁺→Zn²⁺+Cu; n=2.",
        "Q=[Zn²⁺]/[Cu²⁺]=0.10/0.010=10.",
        "Use E=1.10−(0.05916/2)log10."
      ],
      "formulas": [
        "E=1.10-0.02958=1.070\\,\\mathrm V"
      ],
      "answer": "E≈1.07 V."
    },
    "traps": [
      "Never choose n from ionic charge alone; use electrons in the balanced reaction.",
      "If a calculated E is negative, the spontaneous direction is opposite to the assumed cell reaction.",
      "Use activity for rigorous work; concentration is an approximation."
    ],
    "practice": [
      {
        "question": "Calculate E(H⁺/H₂) at pH 4 and pH₂=1 bar at 298 K.",
        "answer": "E=−0.05916×4=−0.237 V."
      },
      {
        "question": "For Fe³⁺/Fe²⁺, what concentration ratio makes E=E°?",
        "answer": "[Fe³⁺]/[Fe²⁺]=1 under ideal dilute conditions."
      }
    ]
  },
  {
    "number": 9,
    "title": "Electrochemical Series and Standard Reduction Potentials",
    "sourcePages": "37–38",
    "overview": "The electrochemical series arranges redox couples by standard reduction potential and is used to compare oxidising and reducing tendencies.",
    "sections": [
      {
        "heading": "Interpretation",
        "paragraphs": [
          "A more positive E° means the oxidised form is more readily reduced and is therefore a stronger oxidising agent. A more negative E° means the reduced form is more readily oxidised and is therefore a stronger reducing agent."
        ],
        "formulas": [
          "E^\\circ_{\\mathrm{cell}}=E^\\circ_{\\mathrm{right}}-E^\\circ_{\\mathrm{left}}"
        ]
      },
      {
        "heading": "Representative standard potentials at 298 K",
        "table": {
          "headers": [
            "Reduction couple",
            "E° / V",
            "Interpretation"
          ],
          "rows": [
            [
              "F₂+2e⁻→2F⁻",
              "+2.87",
              "Very strong oxidising agent"
            ],
            [
              "Cl₂+2e⁻→2Cl⁻",
              "+1.36",
              "Strong oxidising agent"
            ],
            [
              "Ag⁺+e⁻→Ag",
              "+0.80",
              "Readily reduced"
            ],
            [
              "Cu²⁺+2e⁻→Cu",
              "+0.34",
              "Below Ag, above H₂"
            ],
            [
              "2H⁺+2e⁻→H₂",
              "0.00",
              "Reference"
            ],
            [
              "Zn²⁺+2e⁻→Zn",
              "−0.76",
              "Zn is a reducing metal"
            ],
            [
              "Na⁺+e⁻→Na",
              "−2.71",
              "Very strong reducing metal"
            ]
          ]
        }
      },
      {
        "heading": "Applications",
        "bullets": [
          "Predict displacement reactions under standard conditions.",
          "Choose cathode and anode in a galvanic cell.",
          "Compare oxidising and reducing agents.",
          "Estimate standard cell emf.",
          "Assess whether a metal can liberate H₂ from acid thermodynamically.",
          "Combine with Ksp, complex formation and Nernst effects for non-standard systems."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Standard potentials are thermodynamic, not kinetic. Passivation, overvoltage, complexation, precipitation, solvent effects and non-standard activities can reverse or suppress a simple prediction.",
          "A large positive E°cell indicates favourable equilibrium, not necessarily a fast observable reaction."
        ]
      }
    ],
    "example": {
      "title": "Worked example: metal displacement",
      "question": "Will Zn reduce Cu²⁺ under standard conditions? Use E°(Cu²⁺/Cu)=+0.34 V and E°(Zn²⁺/Zn)=−0.76 V.",
      "steps": [
        "Cu²⁺ reduction is cathodic.",
        "Zn oxidation is anodic.",
        "E°cell=0.34−(−0.76)=+1.10 V."
      ],
      "answer": "Yes; the standard reaction is strongly spontaneous."
    },
    "traps": [
      "Do not compare oxidation potentials from a reduction-potential table without changing signs.",
      "A stronger oxidising agent has a more positive reduction potential.",
      "Kinetic inertness can prevent a thermodynamically allowed reaction."
    ],
    "practice": [
      {
        "question": "Which is the stronger reducing metal, Zn or Cu?",
        "answer": "Zn, because Zn²⁺/Zn has the more negative reduction potential."
      },
      {
        "question": "Can Ag⁺ oxidise Cu under standard conditions?",
        "answer": "Yes; E°=0.80−0.34=+0.46 V."
      }
    ]
  },
  {
    "number": 10,
    "title": "Cell Diagrams, Cell Notation and Balancing Cell Reactions",
    "sourcePages": "39–44",
    "overview": "Correct notation and balancing are essential because the reaction quotient and electron number come directly from the balanced cell reaction.",
    "sections": [
      {
        "heading": "Notation rules",
        "bullets": [
          "Write the anode half-cell on the left and cathode half-cell on the right for a spontaneous galvanic cell.",
          "Use | for a phase boundary.",
          "Use || for a salt bridge or liquid junction.",
          "Separate species in the same phase with commas.",
          "Include inert conductors such as Pt when no conducting redox solid is present.",
          "State gas pressure and solute activity or concentration when required."
        ]
      },
      {
        "heading": "Examples of notation",
        "formulas": [
          "\\mathrm{Zn|Zn^{2+}||Cu^{2+}|Cu}",
          "\\mathrm{Pt|H_2|H^+||Fe^{3+},Fe^{2+}|Pt}",
          "\\mathrm{Ag|AgCl|Cl^-||H^+|H_2|Pt}"
        ]
      },
      {
        "heading": "Balancing in acidic medium",
        "bullets": [
          "Balance atoms other than O and H.",
          "Balance O with H₂O.",
          "Balance H with H⁺.",
          "Balance charge with electrons.",
          "Multiply half-reactions to cancel electrons."
        ]
      },
      {
        "heading": "Balancing in basic medium",
        "paragraphs": [
          "First balance as in acidic medium, then add OH⁻ to both sides to neutralise H⁺. Cancel water molecules where possible."
        ]
      },
      {
        "heading": "Electron number n",
        "paragraphs": [
          "The n used in ΔG, Nernst and Faraday relations is the number of moles of electrons transferred per balanced stoichiometric reaction. Multiplying the entire reaction multiplies n and ΔG but leaves E unchanged."
        ]
      }
    ],
    "example": {
      "title": "Worked example: permanganate–iron cell",
      "question": "Balance MnO₄⁻+Fe²⁺→Mn²⁺+Fe³⁺ in acid and identify n.",
      "steps": [
        "Reduction: MnO₄⁻+8H⁺+5e⁻→Mn²⁺+4H₂O.",
        "Oxidation: Fe²⁺→Fe³⁺+e⁻.",
        "Multiply iron half-reaction by 5 and add."
      ],
      "formulas": [
        "\\mathrm{MnO_4^-+8H^++5Fe^{2+}\\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}"
      ],
      "answer": "n=5."
    },
    "traps": [
      "Do not include spectator ions in Q unless they participate in the net reaction.",
      "A comma does not indicate a phase boundary.",
      "Multiplying a half-reaction does not multiply its electrode potential."
    ],
    "practice": [
      {
        "question": "Write notation for a Fe³⁺/Fe²⁺ half-cell.",
        "answer": "Pt|Fe²⁺,Fe³⁺, with the order chosen consistently with the full cell notation."
      },
      {
        "question": "If a balanced reaction transfers 6 electrons, what n is used in ΔG=−nFE?",
        "answer": "n=6."
      }
    ]
  },
  {
    "number": 11,
    "title": "EMF, Equilibrium Constant and Concentration Cells",
    "sourcePages": "45–55",
    "overview": "At equilibrium the cell potential vanishes. This provides a direct relation between standard emf and equilibrium constant and explains concentration cells.",
    "sections": [
      {
        "heading": "Relation between E° and K",
        "paragraphs": [
          "At equilibrium, ΔG=0, E=0 and Q=K. Substituting into the Nernst equation gives the equilibrium relation."
        ],
        "formulas": [
          "0=E^\\circ-\\frac{RT}{nF}\\ln K",
          "\\ln K=\\frac{nFE^\\circ}{RT}",
          "\\log K=\\frac{nE^\\circ}{0.05916}\\quad(298\\,\\mathrm K)"
        ]
      },
      {
        "heading": "Meaning of K from cell emf",
        "paragraphs": [
          "A large positive E° corresponds to K≫1 for the cell reaction as written. Reversing the reaction changes E° to −E° and K to 1/K."
        ]
      },
      {
        "heading": "Concentration cell without transference",
        "paragraphs": [
          "Both electrodes are the same redox couple, so standard potentials cancel. The emf arises only from unequal activities. The spontaneous process reduces the concentration difference."
        ],
        "formulas": [
          "E_{\\mathrm{cell}}=\\frac{RT}{nF}\\ln\\frac{a_{\\mathrm{high}}}{a_{\\mathrm{low}}}",
          "E_{\\mathrm{cell}}=\\frac{0.05916}{n}\\log\\frac{a_{\\mathrm{high}}}{a_{\\mathrm{low}}}\\quad(298\\,\\mathrm K)"
        ]
      },
      {
        "heading": "Concentration cell with transference",
        "paragraphs": [
          "When the two solutions contact directly and ions carry unequal fractions of current, liquid-junction and transport-number effects modify the emf. The exact expression depends on electrode type and which ion is reversible."
        ]
      },
      {
        "heading": "Types of concentration cells",
        "table": {
          "headers": [
            "Type",
            "Source of emf",
            "Example"
          ],
          "rows": [
            [
              "Electrode concentration",
              "Different gas pressure or amalgam activity",
              "Pt|H₂(p₁)|H⁺||H⁺|H₂(p₂)|Pt"
            ],
            [
              "Electrolyte concentration",
              "Different ion activity",
              "Zn|Zn²⁺(a₁)||Zn²⁺(a₂)|Zn"
            ],
            [
              "With transference",
              "Concentration difference plus ionic transport",
              "Direct junction between unequal solutions"
            ]
          ]
        }
      }
    ],
    "example": {
      "title": "Worked example: Zn concentration cell",
      "question": "Calculate E at 298 K for Zn|Zn²⁺(0.010 M)||Zn²⁺(1.0 M)|Zn, assuming ideality.",
      "steps": [
        "n=2.",
        "Higher Zn²⁺ activity gives higher reduction potential and acts as cathode.",
        "Use E=(0.05916/2)log(1.0/0.010)."
      ],
      "formulas": [
        "E=0.02958\\log100=0.05916\\,\\mathrm V"
      ],
      "answer": "E≈0.0592 V."
    },
    "traps": [
      "Standard potentials cancel only because the same redox couple appears on both sides.",
      "A concentration cell has E°cell=0 but Ecell≠0 when activities differ.",
      "The cell reaction acts to equalise the concentration difference."
    ],
    "practice": [
      {
        "question": "Find logK for n=2 and E°=0.1775 V at 298 K.",
        "answer": "logK=2×0.1775/0.05916≈6.00; K≈10⁶."
      },
      {
        "question": "What happens to concentration-cell emf as concentrations equalise?",
        "answer": "It decreases to zero."
      }
    ]
  },
  {
    "number": 12,
    "title": "Commercial Cells: Dry, Mercury, Lead Storage, Ni–Cd and Fuel Cells",
    "sourcePages": "56–60",
    "overview": "Commercial cells are engineered combinations of thermodynamics, electrode kinetics, separators, electrolytes and mechanical design.",
    "sections": [
      {
        "heading": "Leclanché dry cell",
        "paragraphs": [
          "The zinc container is the anode. A graphite rod surrounded by MnO₂ and carbon acts as the cathode current collector. The paste contains NH₄Cl and often ZnCl₂. The overall chemistry is complex, but zinc is oxidised and Mn(IV) is reduced.",
          "Dry cells are primary cells: inexpensive and portable, but not designed for efficient recharge."
        ],
        "formulas": [
          "\\mathrm{Zn\\rightarrow Zn^{2+}+2e^-}"
        ]
      },
      {
        "heading": "Mercury cell",
        "paragraphs": [
          "A zinc–mercury amalgam anode and HgO cathode operate in alkaline electrolyte. Because the overall reaction does not greatly change ionic concentration, the voltage remains nearly constant during discharge."
        ],
        "formulas": [
          "\\mathrm{Zn+2OH^-\\rightarrow ZnO+H_2O+2e^-}",
          "\\mathrm{HgO+H_2O+2e^-\\rightarrow Hg+2OH^-}",
          "\\mathrm{Zn+HgO\\rightarrow ZnO+Hg}"
        ]
      },
      {
        "heading": "Lead-storage battery",
        "paragraphs": [
          "Each cell gives about 2.0 V. During discharge both plates form PbSO₄ and sulfuric acid concentration falls. Six cells in series provide about 12 V. Charging reverses the reactions."
        ],
        "formulas": [
          "\\mathrm{Pb+PbO_2+2H_2SO_4\\rightleftharpoons 2PbSO_4+2H_2O}"
        ]
      },
      {
        "heading": "Nickel–cadmium cell",
        "paragraphs": [
          "Cadmium is oxidised and nickel oxyhydroxide is reduced in alkaline electrolyte. The cell is rechargeable, robust and capable of high current, but cadmium toxicity limits use."
        ],
        "formulas": [
          "\\mathrm{Cd+2NiO(OH)+2H_2O\\rightleftharpoons Cd(OH)_2+2Ni(OH)_2}"
        ]
      },
      {
        "heading": "Hydrogen–oxygen fuel cell",
        "paragraphs": [
          "Reactants are continuously supplied and products continuously removed. In alkaline medium, hydrogen is oxidised at the anode and oxygen is reduced at the cathode. The overall product is water.",
          "Fuel cells can be efficient because they convert chemical free energy directly to electrical work rather than through a heat-engine cycle."
        ],
        "formulas": [
          "\\mathrm{2H_2+4OH^-\\rightarrow4H_2O+4e^-}",
          "\\mathrm{O_2+2H_2O+4e^-\\rightarrow4OH^-}",
          "\\mathrm{2H_2+O_2\\rightarrow2H_2O}"
        ]
      }
    ],
    "example": {
      "title": "Worked check: lead-battery state of charge",
      "question": "Why does sulfuric-acid density decrease during discharge?",
      "steps": [
        "Both half-reactions consume sulfate and H⁺.",
        "Water is produced.",
        "Therefore H₂SO₄ concentration and density fall."
      ],
      "answer": "Electrolyte density is an indicator of charge state."
    },
    "traps": [
      "A fuel cell is not a rechargeable storage battery; it requires continuous fuel supply.",
      "Cell voltage is not obtained by adding half-cell potentials after multiplying them by stoichiometric coefficients.",
      "Mercury and cadmium cells raise environmental concerns."
    ],
    "practice": [
      {
        "question": "Why are six lead cells used for a nominal 12 V battery?",
        "answer": "Each cell supplies about 2 V, so six in series give about 12 V."
      },
      {
        "question": "What is the overall product of an H₂–O₂ fuel cell?",
        "answer": "Water."
      }
    ]
  },
  {
    "number": 13,
    "title": "Electrolysis and Electrolytic-Cell Fundamentals",
    "sourcePages": "61–65",
    "overview": "Electrolysis uses an external voltage to force a redox reaction that is thermodynamically unfavourable in the desired direction.",
    "sections": [
      {
        "heading": "Electrolytic-cell polarity",
        "paragraphs": [
          "The power supply removes electrons from the anode, making it positive, and delivers electrons to the cathode, making it negative. Oxidation remains at the anode and reduction remains at the cathode."
        ]
      },
      {
        "heading": "Molten versus aqueous electrolytes",
        "paragraphs": [
          "In a molten salt only the salt ions compete for discharge. In aqueous solution, water or H⁺/OH⁻ may be discharged instead, so product prediction requires electrode potentials, concentration and overvoltage."
        ]
      },
      {
        "heading": "Minimum applied voltage",
        "paragraphs": [
          "The reversible decomposition voltage is the magnitude of the opposing galvanic emf. A practical applied voltage must also overcome ohmic drop and electrode overpotentials."
        ],
        "formulas": [
          "V_{\\mathrm{applied}}\\ge E_{\\mathrm{decomp}}+IR+\\eta_a+\\eta_c"
        ]
      },
      {
        "heading": "Inert and active electrodes",
        "paragraphs": [
          "An inert electrode conducts electrons without being consumed ideally. An active electrode may dissolve, form an oxide or participate in the cell reaction. Copper electrolysis is a classic case where switching Pt to Cu changes the anode product."
        ]
      },
      {
        "heading": "Charge and amount of reaction",
        "formulas": [
          "Q=It",
          "n(e^-)=\\frac{Q}{F}"
        ]
      }
    ],
    "example": {
      "title": "Worked check: molten NaCl",
      "question": "Predict the products of electrolysis of molten NaCl using inert electrodes.",
      "steps": [
        "Na⁺ is the only cation and is reduced at the cathode.",
        "Cl⁻ is the only anion and is oxidised at the anode."
      ],
      "formulas": [
        "\\mathrm{Na^++e^-\\rightarrow Na}",
        "\\mathrm{2Cl^-\\rightarrow Cl_2+2e^-}"
      ],
      "answer": "Sodium metal at cathode and chlorine gas at anode."
    },
    "traps": [
      "Cations move to the cathode, but the cathode is negative only in an electrolytic cell.",
      "Do not predict aqueous-electrolysis products from the salt ions alone.",
      "The thermodynamic decomposition voltage is lower than the practical operating voltage."
    ],
    "practice": [
      {
        "question": "Which process always occurs at the electrolytic anode?",
        "answer": "Oxidation."
      },
      {
        "question": "What charge passes in 10 min at 2.0 A?",
        "answer": "Q=2.0×600=1200 C."
      }
    ]
  },
  {
    "number": 14,
    "title": "Discharge Potential, Overvoltage and Preferential Discharge",
    "sourcePages": "64–70",
    "overview": "The species actually discharged at an electrode is determined by both equilibrium potential and kinetic difficulty.",
    "sections": [
      {
        "heading": "Discharge potential",
        "paragraphs": [
          "The discharge potential is the practical electrode potential at which a species begins to deposit or evolve at an observable rate. It includes the equilibrium potential and kinetic overpotential."
        ],
        "formulas": [
          "E_{\\mathrm{discharge}}=E_{\\mathrm{equilibrium}}+\\eta"
        ]
      },
      {
        "heading": "Overvoltage",
        "paragraphs": [
          "Overvoltage is the extra potential needed beyond the reversible value. It depends on electrode material, surface condition, current density, temperature and gas-bubble formation.",
          "Hydrogen and oxygen evolution often show substantial overvoltage, which can allow a less-favoured metal ion to deposit."
        ]
      },
      {
        "heading": "Factors controlling preferential discharge",
        "bullets": [
          "Standard and non-standard electrode potential.",
          "Concentration or activity of competing ions.",
          "Overvoltage on the chosen electrode material.",
          "Nature of the electrode: inert or active.",
          "Complex formation and precipitation.",
          "Mass-transfer limitations and current density."
        ]
      },
      {
        "heading": "Cathodic competition in water",
        "paragraphs": [
          "At the cathode, a metal ion competes with water or H⁺ reduction. Very reactive metal ions such as Na⁺ are not deposited from ordinary aqueous solution; hydrogen is evolved instead. Cu²⁺ is readily deposited."
        ]
      },
      {
        "heading": "Anodic competition in water",
        "paragraphs": [
          "At an inert anode, halide ions may compete with water/OH⁻ oxidation. Chloride can give Cl₂ at high concentration, whereas dilute sulfate or nitrate solutions generally evolve O₂ from water."
        ]
      }
    ],
    "example": {
      "title": "Worked reasoning: aqueous NaCl",
      "question": "Why is H₂ produced instead of Na metal at the cathode of aqueous NaCl?",
      "steps": [
        "Na⁺/Na has a very negative reduction potential.",
        "Water reduction to H₂ is thermodynamically and kinetically more accessible in aqueous solution.",
        "Any Na formed would also react immediately with water."
      ],
      "answer": "Water is preferentially reduced, producing H₂ and OH⁻."
    },
    "traps": [
      "Preferential discharge is not determined solely by position in the electrochemical series.",
      "Concentration can change a Nernst potential enough to alter product selection.",
      "Overvoltage is kinetic; it does not change E°."
    ],
    "practice": [
      {
        "question": "Why can concentrated brine give Cl₂ rather than O₂ at an inert anode?",
        "answer": "High Cl⁻ activity and oxygen-evolution overvoltage make chloride oxidation competitive or preferred."
      },
      {
        "question": "Name two variables that increase overvoltage sensitivity.",
        "answer": "Electrode material and current density; surface condition and temperature also matter."
      }
    ]
  },
  {
    "number": 15,
    "title": "Products of Electrolysis of Molten and Aqueous Electrolytes; Electrorefining",
    "sourcePages": "71–75",
    "overview": "Product prediction requires a complete inventory of species, electrode material and operating conditions.",
    "sections": [
      {
        "heading": "Molten electrolytes",
        "table": {
          "headers": [
            "Electrolyte",
            "Cathode",
            "Anode"
          ],
          "rows": [
            [
              "Molten NaCl",
              "Na⁺+e⁻→Na",
              "2Cl⁻→Cl₂+2e⁻"
            ],
            [
              "Molten MgCl₂",
              "Mg²⁺+2e⁻→Mg",
              "2Cl⁻→Cl₂+2e⁻"
            ],
            [
              "Molten Al₂O₃ in cryolite",
              "Al³⁺+3e⁻→Al",
              "Oxide ions oxidised; carbon anodes consumed"
            ]
          ]
        }
      },
      {
        "heading": "Aqueous CuSO₄ with inert electrodes",
        "paragraphs": [
          "Cu²⁺ is reduced to copper at the cathode. Sulfate is difficult to oxidise, so water gives O₂ at the anode. The solution becomes more acidic as H⁺ accumulates."
        ],
        "formulas": [
          "\\mathrm{Cu^{2+}+2e^-\\rightarrow Cu}",
          "\\mathrm{2H_2O\\rightarrow O_2+4H^++4e^-}"
        ]
      },
      {
        "heading": "Aqueous CuSO₄ with copper electrodes",
        "paragraphs": [
          "Copper deposits at the cathode while the copper anode dissolves. Cu²⁺ concentration remains approximately constant if current efficiency is high."
        ],
        "formulas": [
          "\\mathrm{Cu(anode)\\rightarrow Cu^{2+}+2e^-}",
          "\\mathrm{Cu^{2+}+2e^-\\rightarrow Cu(cathode)}"
        ]
      },
      {
        "heading": "Electrolysis of brine",
        "paragraphs": [
          "Concentrated NaCl gives H₂ at the cathode and Cl₂ at the anode. NaOH remains in solution, but industrial cells use membranes or diaphragms to prevent product mixing."
        ],
        "formulas": [
          "\\mathrm{2H_2O+2e^-\\rightarrow H_2+2OH^-}",
          "\\mathrm{2Cl^-\\rightarrow Cl_2+2e^-}"
        ]
      },
      {
        "heading": "Electrorefining of copper",
        "paragraphs": [
          "Impure copper is the anode, pure copper sheet is the cathode and acidified CuSO₄ is the electrolyte. Less reactive noble impurities fall as anode mud; more reactive impurities may enter solution but are not deposited at the controlled cathode potential."
        ]
      }
    ],
    "example": {
      "title": "Worked product prediction",
      "question": "Predict products for aqueous Na₂SO₄ with Pt electrodes.",
      "steps": [
        "Na⁺ is not discharged; water gives H₂ at the cathode.",
        "SO₄²⁻ is not readily oxidised; water gives O₂ at the anode.",
        "Na₂SO₄ largely acts as supporting electrolyte."
      ],
      "formulas": [
        "\\mathrm{2H_2O\\rightarrow 2H_2+O_2}"
      ],
      "answer": "H₂ at cathode and O₂ at anode."
    },
    "traps": [
      "Changing electrode material can change the anode reaction completely.",
      "Aqueous electrolysis must include water as a possible reactant.",
      "Industrial product separation is necessary because H₂, Cl₂ and OH⁻ can react with one another."
    ],
    "practice": [
      {
        "question": "What happens to Cu²⁺ concentration during CuSO₄ electrolysis with Cu electrodes?",
        "answer": "It remains approximately constant because Cu dissolves at the anode at the same electron stoichiometry as deposition."
      },
      {
        "question": "Where is pure copper deposited during electrorefining?",
        "answer": "At the cathode."
      }
    ]
  },
  {
    "number": 16,
    "title": "Faraday Laws and Electrochemical Equivalent",
    "sourcePages": "76–81",
    "overview": "Faraday laws connect electrical charge with the chemical amount produced or consumed at an electrode.",
    "sections": [
      {
        "heading": "First Faraday law",
        "paragraphs": [
          "The mass deposited is directly proportional to the total charge passed, provided current efficiency is constant."
        ],
        "formulas": [
          "m\\propto Q",
          "m=ZQ=ZIt"
        ]
      },
      {
        "heading": "Electrochemical equivalent",
        "paragraphs": [
          "Z is the mass deposited by one coulomb. If M is molar mass and n is electrons per formula unit, one mole requires nF coulombs."
        ],
        "formulas": [
          "Z=\\frac{M}{nF}",
          "m=\\frac{MIt}{nF}"
        ]
      },
      {
        "heading": "Second Faraday law",
        "paragraphs": [
          "When the same charge passes through different electrolytes, deposited masses are proportional to chemical equivalent masses M/n."
        ],
        "formulas": [
          "\\frac{m_1}{m_2}=\\frac{M_1/n_1}{M_2/n_2}"
        ]
      },
      {
        "heading": "Faraday constant",
        "paragraphs": [
          "One faraday is the charge carried by one mole of electrons. F≈96485 C mol⁻¹. At 1 A, one faraday passes in about 26.8 h."
        ],
        "formulas": [
          "F=N_Ae\\approx96485\\,\\mathrm{C\\,mol^{-1}}"
        ]
      },
      {
        "heading": "Cells in series",
        "paragraphs": [
          "The same charge passes through each series electrolytic cell, so the second law directly compares masses. In parallel, current division must be known."
        ]
      }
    ],
    "example": {
      "title": "Worked example: silver deposition",
      "question": "Find the mass of Ag deposited by 2.00 A for 30.0 min from Ag⁺. M(Ag)=107.87 g mol⁻¹.",
      "steps": [
        "Q=It=2.00×1800=3600 C.",
        "n=1 for Ag⁺+e⁻→Ag.",
        "m=MQ/nF."
      ],
      "formulas": [
        "m=\\frac{107.87(3600)}{96485}=4.02\\,\\mathrm g"
      ],
      "answer": "Approximately 4.02 g Ag."
    },
    "traps": [
      "Convert time to seconds when current is in amperes.",
      "Use the electron stoichiometry of the actual electrode reaction.",
      "Faraday laws predict theoretical mass; current efficiency may reduce actual yield."
    ],
    "practice": [
      {
        "question": "How many moles of electrons pass with 19300 C?",
        "answer": "19300/96485≈0.200 mol e⁻."
      },
      {
        "question": "What mass ratio of Ag to Cu is deposited by the same charge from Ag⁺ and Cu²⁺?",
        "answer": "(107.87/1)/(63.55/2)≈3.40."
      }
    ]
  },
  {
    "number": 17,
    "title": "Electrolysis Numericals, Current Efficiency and Gas/Metal Deposition",
    "sourcePages": "78–87",
    "overview": "Advanced electrolysis problems combine charge balance, stoichiometry, current efficiency, gas laws and multiple electrode processes.",
    "sections": [
      {
        "heading": "Current efficiency",
        "paragraphs": [
          "Current efficiency is the fraction of total charge that produces the desired reaction. Side reactions consume the remainder."
        ],
        "formulas": [
          "\\eta=\\frac{Q_{\\mathrm{useful}}}{Q_{\\mathrm{total}}}=\\frac{m_{\\mathrm{actual}}}{m_{\\mathrm{theoretical}}}",
          "\\%\\eta=100\\eta"
        ]
      },
      {
        "heading": "Gas evolution",
        "paragraphs": [
          "Convert charge to moles of electrons, then use the half-reaction to obtain moles of gas. Convert moles to volume using the stated temperature and pressure; do not assume 22.4 L unless conditions justify it."
        ],
        "formulas": [
          "n(e^-)=\\frac{It}{F}",
          "PV=nRT"
        ]
      },
      {
        "heading": "Mixed electrode reactions",
        "paragraphs": [
          "If more than one species is discharged, write a charge balance. The sum of electron equivalents consumed by all products equals the total charge passed."
        ]
      },
      {
        "heading": "Series electrolytic cells",
        "paragraphs": [
          "The same Q passes through every series cell. Compare equivalent masses or solve each electrode reaction using the common electron amount."
        ]
      },
      {
        "heading": "Thickness of electroplating",
        "formulas": [
          "m=\\rho A d",
          "d=\\frac{MIt\\eta}{nF\\rho A}"
        ]
      }
    ],
    "example": {
      "title": "Worked example: current efficiency",
      "question": "A current of 5.00 A passes for 1.00 h through CuSO₄. Actual Cu deposited is 5.33 g. Find current efficiency.",
      "steps": [
        "Theoretical m=MI t/(nF), with M=63.55 and n=2.",
        "Q=5×3600=18000 C.",
        "Theoretical m≈5.93 g.",
        "Efficiency=5.33/5.93×100."
      ],
      "formulas": [
        "\\%\\eta\\approx89.9\\%"
      ],
      "answer": "Approximately 90.0%."
    },
    "traps": [
      "Gas stoichiometry is based on electrons, not directly on current.",
      "Use actual gas conditions.",
      "For coating thickness, use consistent density, area and length units."
    ],
    "practice": [
      {
        "question": "How many moles of H₂ form from 0.50 mol e⁻?",
        "answer": "0.25 mol H₂ because 2e⁻ produce 1 mol H₂."
      },
      {
        "question": "If current efficiency is 80%, what useful charge results from 5000 C?",
        "answer": "4000 C."
      }
    ]
  },
  {
    "number": 18,
    "title": "Resistance, Conductance, Resistivity, Conductivity and Cell Constant",
    "sourcePages": "88–90",
    "overview": "Electrical resistance depends on both material and geometry. Conductivity removes the geometry factor and is the intensive property used for electrolyte solutions.",
    "sections": [
      {
        "heading": "Resistance and conductance",
        "formulas": [
          "R=\\frac{V}{I}",
          "G=\\frac{1}{R}"
        ],
        "paragraphs": [
          "Resistance is measured in ohms; conductance in siemens. Alternating current is used in conductivity cells to minimise electrolysis and electrode polarisation."
        ]
      },
      {
        "heading": "Resistivity and conductivity",
        "formulas": [
          "R=\\rho\\frac{l}{A}",
          "\\kappa=\\frac{1}{\\rho}=G\\frac{l}{A}"
        ],
        "paragraphs": [
          "Resistivity is the resistance of a specimen with unit geometry. Conductivity κ measures the ability of the solution to conduct current."
        ]
      },
      {
        "heading": "Cell constant",
        "paragraphs": [
          "The electrode separation and effective area are combined into the cell constant l/A. It is calibrated using a solution of accurately known conductivity, commonly KCl."
        ],
        "formulas": [
          "\\text{cell constant}=\\frac{l}{A}=\\kappa R"
        ]
      },
      {
        "heading": "Units",
        "table": {
          "headers": [
            "Quantity",
            "SI unit",
            "Common laboratory unit"
          ],
          "rows": [
            [
              "R",
              "Ω",
              "Ω"
            ],
            [
              "G",
              "S",
              "S"
            ],
            [
              "ρ",
              "Ω m",
              "Ω cm"
            ],
            [
              "κ",
              "S m⁻¹",
              "S cm⁻¹"
            ],
            [
              "Cell constant",
              "m⁻¹",
              "cm⁻¹"
            ]
          ]
        }
      },
      {
        "heading": "Temperature effect",
        "paragraphs": [
          "Electrolyte conductivity usually increases with temperature because viscosity decreases and ionic mobility rises. Conductivity data must therefore be temperature controlled."
        ]
      }
    ],
    "example": {
      "title": "Worked example: conductivity",
      "question": "A cell has R=250 Ω and cell constant 1.20 cm⁻¹. Find κ.",
      "steps": [
        "G=1/R=0.00400 S.",
        "κ=G×cell constant."
      ],
      "formulas": [
        "\\kappa=0.00400\\times1.20=4.80\\times10^{-3}\\,\\mathrm{S\\,cm^{-1}}"
      ],
      "answer": "κ=4.80×10⁻³ S cm⁻¹."
    },
    "traps": [
      "Do not confuse conductance G with conductivity κ.",
      "Cell constant has inverse-length units.",
      "Use consistent cm or m units throughout."
    ],
    "practice": [
      {
        "question": "If R doubles for the same cell, what happens to G?",
        "answer": "It halves."
      },
      {
        "question": "How is a cell constant experimentally determined?",
        "answer": "Measure R for a standard solution of known κ and use cell constant=κR."
      }
    ]
  },
  {
    "number": 19,
    "title": "Molar and Equivalent Conductivity",
    "sourcePages": "91–94",
    "overview": "Molar and equivalent conductivity compare electrolytes after normalising conductivity to the amount of dissolved electrolyte.",
    "sections": [
      {
        "heading": "Molar conductivity",
        "paragraphs": [
          "Molar conductivity is the conductance of the volume of solution containing one mole of electrolyte when placed between electrodes one unit distance apart."
        ],
        "formulas": [
          "\\Lambda_m=\\frac{\\kappa}{c_{\\mathrm{mol\\,m^{-3}}}}",
          "\\Lambda_m=\\frac{1000\\kappa}{c_{\\mathrm{mol\\,L^{-1}}}}\\quad(\\kappa\\,\\mathrm{in\\,S\\,cm^{-1}})"
        ]
      },
      {
        "heading": "Equivalent conductivity",
        "paragraphs": [
          "Equivalent conductivity is normalised to one chemical equivalent. Its numerical value depends on the chosen reaction and n-factor."
        ],
        "formulas": [
          "\\Lambda_{eq}=\\frac{1000\\kappa}{N}"
        ]
      },
      {
        "heading": "Relation between molar and equivalent quantities",
        "formulas": [
          "\\Lambda_m=n_f\\Lambda_{eq}"
        ],
        "paragraphs": [
          "Here n_f is the number of equivalents per mole for the stated reaction. Because n-factor can be reaction-dependent, molar conductivity is generally less ambiguous."
        ]
      },
      {
        "heading": "Effect of dilution",
        "paragraphs": [
          "κ decreases on dilution because there are fewer ions per unit volume. Λm increases because interionic interactions decrease and, for weak electrolytes, ionisation increases."
        ]
      },
      {
        "heading": "Limiting molar conductivity",
        "paragraphs": [
          "At infinite dilution, ions are sufficiently separated that each contributes independently. The limiting value is denoted Λm°."
        ]
      }
    ],
    "example": {
      "title": "Worked example: molar conductivity",
      "question": "A 0.0100 M KCl solution has κ=1.41×10⁻³ S cm⁻¹. Find Λm.",
      "steps": [
        "Use Λm=1000κ/c.",
        "Substitute c=0.0100 M."
      ],
      "formulas": [
        "\\Lambda_m=\\frac{1000(1.41\\times10^{-3})}{0.0100}=141\\,\\mathrm{S\\,cm^2\\,mol^{-1}}"
      ],
      "answer": "Λm=141 S cm² mol⁻¹."
    },
    "traps": [
      "κ and Λm show opposite dilution trends.",
      "Check whether concentration is in mol L⁻¹ or mol m⁻³.",
      "Equivalent conductivity requires a clearly stated n-factor."
    ],
    "practice": [
      {
        "question": "Why does Λm increase on dilution even for a strong electrolyte?",
        "answer": "Interionic attraction and relaxation/electrophoretic effects decrease, increasing ionic mobility."
      },
      {
        "question": "What happens to κ as pure water is approached by dilution?",
        "answer": "It generally falls toward the conductivity of the solvent."
      }
    ]
  },
  {
    "number": 20,
    "title": "Effect of Dilution and Kohlrausch Law",
    "sourcePages": "95–101",
    "overview": "Strong and weak electrolytes show different Λm–concentration behaviour. Kohlrausch’s law provides limiting ionic contributions and several powerful applications.",
    "sections": [
      {
        "heading": "Strong-electrolyte behaviour",
        "paragraphs": [
          "Strong electrolytes are almost completely ionised. Their Λm increases moderately on dilution because interionic forces decrease. At low concentration, Λm often varies approximately linearly with √c."
        ],
        "formulas": [
          "\\Lambda_m=\\Lambda_m^\\circ-K\\sqrt c\\quad\\text{(empirical low-concentration form)}"
        ]
      },
      {
        "heading": "Weak-electrolyte behaviour",
        "paragraphs": [
          "Weak electrolytes ionise increasingly on dilution, so Λm rises sharply and cannot be reliably extrapolated linearly to c=0."
        ]
      },
      {
        "heading": "Kohlrausch law of independent ionic migration",
        "paragraphs": [
          "At infinite dilution, each ion contributes independently to the total limiting molar conductivity."
        ],
        "formulas": [
          "\\Lambda_m^\\circ=\\nu_+\\lambda_+^\\circ+\\nu_-\\lambda_-^\\circ"
        ]
      },
      {
        "heading": "Applications",
        "bullets": [
          "Calculate Λm° of weak electrolytes from strong-electrolyte data.",
          "Determine degree of dissociation α=Λm/Λm°.",
          "Calculate dissociation constants of weak electrolytes.",
          "Find solubility of sparingly soluble salts from saturated-solution conductivity.",
          "Estimate individual ionic limiting conductivities and transport numbers."
        ]
      },
      {
        "heading": "Weak-acid dissociation",
        "formulas": [
          "\\alpha=\\frac{\\Lambda_m}{\\Lambda_m^\\circ}",
          "K_a=\\frac{c\\alpha^2}{1-\\alpha}"
        ]
      }
    ],
    "example": {
      "title": "Worked example: Λ° of acetic acid",
      "question": "Given Λ°(HCl)=426.0, Λ°(CH₃COONa)=91.0 and Λ°(NaCl)=126.4 S cm² mol⁻¹, calculate Λ°(CH₃COOH).",
      "steps": [
        "Add HCl and sodium acetate ionic contributions.",
        "Subtract NaCl to cancel Na⁺ and Cl⁻."
      ],
      "formulas": [
        "\\Lambda^\\circ(\\mathrm{CH_3COOH})=426.0+91.0-126.4=390.6"
      ],
      "answer": "390.6 S cm² mol⁻¹."
    },
    "traps": [
      "Do not extrapolate a weak-electrolyte Λm curve linearly to zero concentration.",
      "Subtract solvent conductivity when working with very dilute or sparingly soluble solutions.",
      "Kohlrausch law is a limiting-dilution law."
    ],
    "practice": [
      {
        "question": "If Λm=39.1 and Λm°=391 S cm² mol⁻¹, find α.",
        "answer": "α=0.100."
      },
      {
        "question": "Why does weak-electrolyte Λm rise sharply on dilution?",
        "answer": "Both ionic mobility and degree of ionisation increase."
      }
    ]
  },
  {
    "number": 21,
    "title": "Ionic Mobility, Transport Number and Hittorf Method",
    "sourcePages": "102–105",
    "overview": "Different ions carry different fractions of current. Transport numbers quantify these fractions and can be measured from concentration changes around electrodes.",
    "sections": [
      {
        "heading": "Ionic mobility",
        "paragraphs": [
          "Ionic mobility u is drift velocity per unit electric field. It depends on charge, solvated size, viscosity and temperature."
        ],
        "formulas": [
          "u=\\frac{v_d}{E}",
          "\\lambda_i^\\circ=|z_i|Fu_i"
        ]
      },
      {
        "heading": "Transport number",
        "paragraphs": [
          "The transport number of an ion is the fraction of total current carried by that ion."
        ],
        "formulas": [
          "t_+=\\frac{I_+}{I}",
          "t_- =\\frac{I_-}{I}",
          "t_++t_-=1"
        ]
      },
      {
        "heading": "Relation to ionic conductivities",
        "formulas": [
          "t_+=\\frac{\\nu_+\\lambda_+}{\\nu_+\\lambda_++\\nu_-\\lambda_-}"
        ]
      },
      {
        "heading": "Hittorf principle",
        "paragraphs": [
          "Hittorf’s rule states that the concentration change around an electrode is proportional to the speed, and therefore transport number, of the ion moving away from that electrode. The apparatus has anode, central and cathode compartments separated to minimise mixing.",
          "After a known charge passes, solutions are analysed. Electrode reactions and ion migration are combined in a material balance to obtain t⁺ and t⁻."
        ]
      },
      {
        "heading": "Special complications",
        "bullets": [
          "Electrode reaction may introduce or remove electrolyte species.",
          "Volume changes and electro-osmosis may require correction.",
          "Complex ions can change the effective migrating species.",
          "Transport numbers depend on concentration and temperature."
        ]
      }
    ],
    "example": {
      "title": "Worked relation from ionic conductivities",
      "question": "At infinite dilution λ°(Na⁺)=50.1 and λ°(Cl⁻)=76.3 S cm² mol⁻¹. Find t⁺ and t⁻.",
      "steps": [
        "Total=126.4.",
        "t⁺=50.1/126.4.",
        "t⁻=76.3/126.4."
      ],
      "formulas": [
        "t_+=0.396,\\qquad t_-=0.604"
      ],
      "answer": "Na⁺ carries about 39.6% and Cl⁻ about 60.4% of the current."
    },
    "traps": [
      "Transport number is not the mole fraction of ions.",
      "The faster ion carries the larger current fraction, all else equal.",
      "Hittorf calculations require the electrode reaction to be included in the balance."
    ],
    "practice": [
      {
        "question": "If t⁺=0.42, find t⁻.",
        "answer": "0.58."
      },
      {
        "question": "Why can H⁺ have an exceptionally high mobility in water?",
        "answer": "Proton transfer occurs partly through the hydrogen-bond network (Grotthuss mechanism), not only by physical ion translation."
      }
    ]
  },
  {
    "number": 22,
    "title": "Conductometric Titrations",
    "sourcePages": "106–110",
    "overview": "Conductometric titration locates the equivalence point from changes in solution conductance as ions are replaced, precipitated or neutralised.",
    "sections": [
      {
        "heading": "Principle",
        "paragraphs": [
          "Conductance depends on the concentration and mobility of every ion. During titration, highly mobile ions may be removed and replaced by less mobile ions, producing linear or piecewise-linear trends. The endpoint is found from the intersection of extrapolated branches."
        ]
      },
      {
        "heading": "Strong acid–strong base",
        "paragraphs": [
          "Initially conductance is high because H⁺ has exceptional mobility. Addition of NaOH removes H⁺ and replaces it with slower Na⁺, so conductance falls. Beyond equivalence, excess OH⁻ causes a steep rise."
        ]
      },
      {
        "heading": "Weak acid–strong base",
        "paragraphs": [
          "The weak acid is poorly ionised, so initial conductance is low. Salt formation increases ions and conductance gradually. After equivalence, excess OH⁻ causes a sharper increase."
        ]
      },
      {
        "heading": "Precipitation titration",
        "paragraphs": [
          "In AgNO₃ titration of Cl⁻, AgCl precipitates. Conductance changes according to replacement of ions and then rises after equivalence due to excess titrant ions."
        ]
      },
      {
        "heading": "Experimental corrections",
        "bullets": [
          "Keep temperature constant.",
          "Use small titrant volume or apply dilution correction.",
          "Allow mixing and stable reading after each addition.",
          "Use AC measurement to reduce polarisation.",
          "Plot corrected conductance against titrant volume."
        ],
        "formulas": [
          "G_{\\mathrm{corr}}=G_{\\mathrm{obs}}\\frac{V_0+V}{V_0}"
        ]
      }
    ],
    "example": {
      "title": "Worked interpretation",
      "question": "Why does conductance fall before equivalence in HCl–NaOH titration?",
      "steps": [
        "H⁺ is consumed by OH⁻.",
        "H⁺ is replaced by Na⁺.",
        "Na⁺ has much lower mobility than H⁺."
      ],
      "answer": "The number and mobility distribution of ions changes, lowering conductance."
    },
    "traps": [
      "The endpoint is the intersection of trends, not necessarily the minimum measured point if dilution is significant.",
      "Use conductance or conductivity consistently.",
      "Conductometric titration does not require a coloured indicator."
    ],
    "practice": [
      {
        "question": "Why is conductometry useful for coloured solutions?",
        "answer": "Electrical conductance is measured, so visual colour change is unnecessary."
      },
      {
        "question": "What causes the steep post-equivalence rise in a strong acid–strong base titration?",
        "answer": "Excess highly mobile OH⁻ ions."
      }
    ]
  },
  {
    "number": 23,
    "title": "Potentiometric Titrations and Redox-End-Point Calculations",
    "sourcePages": "110–114",
    "overview": "Potentiometric titration follows an electrode potential while essentially no current flows. The equivalence point appears as a sharp potential change or derivative maximum.",
    "sections": [
      {
        "heading": "Cell arrangement",
        "paragraphs": [
          "An indicator electrode responds to the analyte or titrant activity, while a reference electrode supplies a stable potential. A high-input-resistance voltmeter measures their difference without materially changing composition."
        ]
      },
      {
        "heading": "Redox titration curve",
        "paragraphs": [
          "Before equivalence, potential is governed mainly by the analyte redox couple. After equivalence, it is governed mainly by excess titrant couple. Near equivalence, both couples must be considered and the potential changes sharply."
        ],
        "formulas": [
          "E=E^\\circ+\\frac{0.05916}{n}\\log\\frac{[\\mathrm{Ox}]}{[\\mathrm{Red}]}"
        ]
      },
      {
        "heading": "Equivalence potential",
        "paragraphs": [
          "For compatible redox couples with equal electron stoichiometry and ideal behaviour, the equivalence potential is often the average of the two formal potentials. For unequal n values, a weighted relation is used after deriving the equilibrium composition."
        ],
        "formulas": [
          "E_{eq}\\approx\\frac{E_1^\\circ+E_2^\\circ}{2}\\quad(n_1=n_2)"
        ]
      },
      {
        "heading": "Endpoint location methods",
        "bullets": [
          "Maximum slope in E versus volume.",
          "Peak in first derivative ΔE/ΔV.",
          "Zero crossing in second derivative.",
          "Gran-type linearisation in suitable systems."
        ]
      },
      {
        "heading": "Other potentiometric titrations",
        "paragraphs": [
          "Glass electrodes follow pH in acid–base titrations. Ag/AgCl or ion-selective electrodes can follow precipitation and complexometric titrations. Electrode choice must be selective and reversible for the measured species."
        ]
      }
    ],
    "example": {
      "title": "Worked redox point before equivalence",
      "question": "For Fe³⁺/Fe²⁺ with E°=0.771 V at 298 K, find E when [Fe³⁺]/[Fe²⁺]=10.",
      "steps": [
        "n=1.",
        "Use E=E°+0.05916 log ratio.",
        "log10=1."
      ],
      "formulas": [
        "E=0.771+0.05916=0.830\\,\\mathrm V"
      ],
      "answer": "E≈0.830 V."
    },
    "traps": [
      "Use a high-resistance instrument so the measurement does not electrolyse the solution.",
      "At equivalence, do not blindly use a simple average when electron numbers differ.",
      "Formal potentials can differ from tabulated standard potentials because of medium and complexation."
    ],
    "practice": [
      {
        "question": "What experimental plot gives the sharpest endpoint signal?",
        "answer": "The first derivative ΔE/ΔV versus volume shows a peak."
      },
      {
        "question": "Which electrode is commonly used for acid–base potentiometry?",
        "answer": "A glass indicator electrode with a reference electrode."
      }
    ]
  },
  {
    "number": 24,
    "title": "Formula and Problem-Solving Companion Index",
    "sourcePages": "2–114",
    "overview": "This part consolidates the chapter into a decision-based problem-solving system. It is an index and strategy companion, not a substitute for the preceding theory.",
    "sections": [
      {
        "heading": "Core thermodynamic formulas",
        "formulas": [
          "E_{\\mathrm{cell}}=E_{\\mathrm{cathode}}-E_{\\mathrm{anode}}",
          "\\Delta G=-nFE",
          "E=E^\\circ-\\frac{RT}{nF}\\ln Q",
          "\\log K=\\frac{nE^\\circ}{0.05916}\\quad(298\\,\\mathrm K)"
        ]
      },
      {
        "heading": "Electrolysis formulas",
        "formulas": [
          "Q=It",
          "n(e^-)=\\frac{Q}{F}",
          "m=\\frac{MIt}{nF}\\eta",
          "V_{\\mathrm{gas}}=\\frac{nRT}{P}"
        ]
      },
      {
        "heading": "Conductance formulas",
        "formulas": [
          "G=\\frac1R",
          "\\kappa=G\\frac lA",
          "\\Lambda_m=\\frac{1000\\kappa}{c}",
          "\\Lambda_m^\\circ=\\sum_i\\nu_i\\lambda_i^\\circ"
        ]
      },
      {
        "heading": "Transport and weak-electrolyte formulas",
        "formulas": [
          "t_++t_-=1",
          "t_i=\\frac{\\nu_i\\lambda_i}{\\sum_j\\nu_j\\lambda_j}",
          "\\alpha=\\frac{\\Lambda_m}{\\Lambda_m^\\circ}",
          "K_a=\\frac{c\\alpha^2}{1-\\alpha}"
        ]
      },
      {
        "heading": "Problem-classification workflow",
        "table": {
          "headers": [
            "Question asks for",
            "First action",
            "Critical check"
          ],
          "rows": [
            [
              "Cell emf",
              "Balance reaction and calculate E°cell",
              "Correct cathode/anode and n"
            ],
            [
              "Non-standard E",
              "Build Q",
              "Pure phases omitted; activities used"
            ],
            [
              "Equilibrium constant",
              "Use E°–K relation",
              "Reaction direction"
            ],
            [
              "Electrolysis mass/gas",
              "Convert It to mol e⁻",
              "Current efficiency and gas conditions"
            ],
            [
              "Conductivity",
              "Separate geometry from material property",
              "Unit system"
            ],
            [
              "Weak electrolyte",
              "Obtain Λ° by Kohlrausch",
              "Solvent correction"
            ],
            [
              "Transport number",
              "Use ionic current fractions/material balance",
              "Electrode reaction"
            ]
          ]
        }
      },
      {
        "heading": "Universal error checklist",
        "bullets": [
          "Was the redox reaction balanced before selecting n?",
          "Was the sign convention based on reduction potentials?",
          "Was Q written for the reaction as written?",
          "Were pure solids and liquids omitted correctly?",
          "Were seconds, amperes and coulombs used consistently?",
          "Were concentration and activity distinguished?",
          "Were κ and Λm units kept consistent?",
          "Were kinetic effects separated from thermodynamic predictions?"
        ]
      }
    ],
    "example": {
      "title": "Mixed worked example",
      "question": "A two-electron cell has E°=0.2366 V at 298 K. Find K.",
      "steps": [
        "Use logK=nE°/0.05916.",
        "Substitute n=2.",
        "logK=2×0.2366/0.05916=8.00."
      ],
      "formulas": [
        "K=10^8"
      ],
      "answer": "K=1.0×10⁸ for the reaction as written."
    },
    "traps": [
      "A formula index is useful only after the physical model and reaction are identified.",
      "Never choose a memorised equation before writing the balanced process.",
      "Report significant figures and units appropriate to the supplied data."
    ],
    "practice": [
      {
        "question": "What is the first step in almost every cell-potential problem?",
        "answer": "Write and balance the overall redox reaction."
      },
      {
        "question": "What is the first step in an electrolysis mass problem?",
        "answer": "Calculate total charge Q=It and convert it to moles of electrons."
      }
    ]
  }
];

const PART_GROUPS = [
  {
    number: 1,
    title: "Electrochemical Cells: Foundations & Conventions",
    sourceParts: [1, 2],
  },
  {
    number: 2,
    title: "Reversible Electrodes and Their Classification",
    sourceParts: [3],
  },
  {
    number: 3,
    title: "Salt Bridge, Electrode Potential and SHE",
    sourceParts: [4, 5],
  },
  {
    number: 4,
    title: "Cell EMF, Gibbs Energy and Reversible Work",
    sourceParts: [6],
  },
  {
    number: 5,
    title: "Nernst Equation and Non-Standard Numericals",
    sourceParts: [7, 8],
  },
  {
    number: 6,
    title: "Electrochemical Series, Cell Notation and Balancing",
    sourceParts: [9, 10],
  },
  {
    number: 7,
    title: "Equilibrium Constants and Concentration Cells",
    sourceParts: [11],
  },
  {
    number: 8,
    title: "Commercial Cells, Batteries and Fuel Cells",
    sourceParts: [12],
  },
  {
    number: 9,
    title: "Electrolysis Fundamentals",
    sourceParts: [13],
  },
  {
    number: 10,
    title: "Preferential Discharge and Products of Electrolysis",
    sourceParts: [14, 15],
  },
  {
    number: 11,
    title: "Faraday Laws and Electrolysis Numericals",
    sourceParts: [16, 17],
  },
  {
    number: 12,
    title: "Resistance, Conductance and Cell Constant",
    sourceParts: [18],
  },
  {
    number: 13,
    title: "Molar and Equivalent Conductivity",
    sourceParts: [19],
  },
  {
    number: 14,
    title: "Kohlrausch Law and Weak Electrolytes",
    sourceParts: [20],
  },
  {
    number: 15,
    title: "Ionic Mobility, Transport Number and Hittorf Method",
    sourceParts: [21],
  },
  {
    number: 16,
    title: "Conductometric & Potentiometric Titrations + Formula Revision",
    sourceParts: [22, 23, 24],
  },
] as const;

type PartGroup = (typeof PART_GROUPS)[number];

function Card({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "violet" | "amber" | "emerald";
}) {
  const classes = {
    cyan: "border-cyan-300/20 bg-cyan-400/[.045]",
    violet: "border-violet-300/20 bg-violet-400/[.05]",
    amber: "border-amber-300/20 bg-amber-300/[.055]",
    emerald: "border-emerald-300/20 bg-emerald-400/[.05]",
  }[tone];
  return <section className={`rounded-2xl border p-5 sm:p-6 ${classes}`}>{children}</section>;
}

function FormulaList({ formulas }: { formulas: string[] }) {
  return (
    <div className="mt-4 space-y-2 overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-3">
      {formulas.map((formula) => (
        <BlockMath key={formula} math={formula} />
      ))}
    </div>
  );
}

function LessonSection({ section }: { section: SectionSpec }) {
  return (
    <Card>
      <h2 className="text-xl font-black text-cyan-100">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-3 text-[15px] leading-7 text-slate-200">
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className="mt-4 space-y-2 pl-5 text-[15px] leading-7 text-slate-200">
          {section.bullets.map((item) => (
            <li key={item} className="list-disc marker:text-cyan-300">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {section.formulas ? <FormulaList formulas={section.formulas} /> : null}
      {section.table ? (
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-white/[.06] text-cyan-100">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="border-b border-white/10 px-4 py-3 font-black">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
                <tr key={`${row[0]}-${rowIndex}`} className="odd:bg-black/10">
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`} className="border-b border-white/[.06] px-4 py-3 align-top leading-6 text-slate-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </Card>
  );
}

function WorkedExample({ example }: { example: ExampleSpec }) {
  return (
    <Card tone="violet">
      <p className="text-xs font-black uppercase tracking-[.18em] text-violet-200">Worked example</p>
      <h2 className="mt-2 text-xl font-black text-white">{example.title}</h2>
      <p className="mt-3 text-[15px] leading-7 text-slate-200">{example.question}</p>
      <ol className="mt-4 space-y-2 pl-5 text-[15px] leading-7 text-slate-200">
        {example.steps.map((step) => (
          <li key={step} className="list-decimal marker:font-black marker:text-violet-200">
            {step}
          </li>
        ))}
      </ol>
      {example.formulas ? <FormulaList formulas={example.formulas} /> : null}
      <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[.06] p-4 text-sm leading-6 text-emerald-50">
        <strong>Answer:</strong> {example.answer}
      </div>
    </Card>
  );
}

function Lesson({
  spec,
}: {
  spec: PartSpec;
}) {
  return (
    <div className="space-y-5" data-source-pages={spec.sourcePages}>
      <Card tone="emerald">
        <p className="text-base leading-8 text-slate-100">{spec.overview}</p>
      </Card>

      {spec.sections.map((section) => (
        <LessonSection key={section.heading} section={section} />
      ))}

      <WorkedExample example={spec.example} />

      <Card tone="amber">
        <h2 className="text-xl font-black text-amber-100">JEE traps and special cautions</h2>
        <ul className="mt-4 space-y-2 pl-5 text-[15px] leading-7 text-amber-50">
          {spec.traps.map((trap) => (
            <li key={trap} className="list-disc marker:text-amber-300">
              {trap}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-cyan-100">Practice checks</h2>
        <div className="mt-4 space-y-4">
          {spec.practice.map((item, index) => (
            <details key={item.question} className="rounded-xl border border-white/10 bg-black/15 p-4">
              <summary className="cursor-pointer font-bold text-white">
                {index + 1}. {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                <strong className="text-cyan-200">Answer:</strong> {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Card>
    </div>
  );
}

function CombinedLesson({ group }: { group: PartGroup }) {
  const specs = group.sourceParts
    .map((sourcePart) => PART_SPECS.find((spec) => spec.number === sourcePart))
    .filter((spec): spec is PartSpec => Boolean(spec));

  return (
    <div className="space-y-8">
      {specs.map((spec, index) => (
        <section key={spec.number} className="space-y-5">
          {specs.length > 1 ? (
            <h2 className="border-b border-white/10 pb-3 text-xl font-black text-white">
              {spec.title}
            </h2>
          ) : null}
          <Lesson spec={spec} />
          {index < specs.length - 1 ? (
            <div className="border-t border-dashed border-white/15" />
          ) : null}
        </section>
      ))}
    </div>
  );
}

export const electroParts: ElectroPart[] = PART_GROUPS.map((group) => ({
  number: group.number,
  title: group.title,
  sourceParts: [...group.sourceParts],
  body: <CombinedLesson group={group} />,
}));
