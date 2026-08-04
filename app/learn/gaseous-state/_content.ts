import type { PartData } from './_types';

export const parts: PartData[] = [
  {
    "number": 1,
    "title": "Gas parameters, pressure and manometry",
    "subtitle": "Macroscopic state variables, absolute temperature, hydrostatic pressure, barometers, open and closed manometers, and trapped-gas mercury-plug systems.",
    "sourcePages": "pages 1–8",
    "kind": "theory",
    "sections": [
      {
        "id": "state-variables",
        "eyebrow": "Foundations",
        "title": "The four macroscopic variables",
        "lead": "A gas sample is specified by amount, pressure, volume and absolute temperature. The first task in every problem is to identify which of these are fixed, which can change and what mechanical constraint relates them.",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The amount of gas may be given as mass $m$, moles $n=m/M$, or number of molecules $N=nN_A$. For a gas in a container, the macroscopic volume is the accessible container volume, not the sum of molecular volumes. Pressure is the normal force per unit area and arises from repeated momentum transfer to the boundary. Temperature must be expressed on an absolute scale whenever it appears in a gas equation."
          },
          {
            "type": "equationSet",
            "title": "Essential conversions",
            "equations": [
              {
                "tex": "T/\\mathrm{K}=t/^{\\circ}\\mathrm C+273.15",
                "note": "Celsius to kelvin"
              },
              {
                "tex": "t_F=\\frac95 t_C+32",
                "note": "Celsius to Fahrenheit"
              },
              {
                "tex": "N=nN_A=\\frac{m}{M}N_A",
                "note": "amount in molecules"
              },
              {
                "tex": "P=F_\\perp/A",
                "note": "mechanical definition of pressure"
              }
            ]
          },
          {
            "type": "visual",
            "id": "particle-pressure",
            "title": "Why a gas exerts pressure",
            "caption": "The microscopic forces fluctuate collision by collision, but the macroscopic pressure is a stable time and area average."
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Two corrections to the source wording",
            "text": "Random translational motion of gas molecules is not Brownian motion. Brownian motion is the erratic motion of a suspended mesoscopic particle caused by molecular impacts. Also, a gas is not liquefied merely by applying enough pressure at any temperature; pressure can produce a liquid only below the critical temperature."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Molecular scale versus laboratory scale",
            "text": "A macroscopic pressure reading averages an enormous number of molecular collisions. Even a cubic micrometre of gas at ordinary conditions contains millions of molecules, so fluctuations in total momentum transfer are tiny compared with the mean. This statistical averaging explains why pressure and temperature appear smooth although individual molecular trajectories are irregular. The thermodynamic state variables are therefore coarse-grained descriptions: they deliberately discard microscopic details while retaining the information needed to predict equilibrium changes. This perspective is useful when a problem mixes microscopic and macroscopic data. Convert molecule count to moles, molecular mass to molar mass, and mean molecular energy to molar energy before combining the relations. It also clarifies why a single molecule does not possess a thermodynamic pressure or temperature in the same sense as a bulk sample."
          }
        ]
      },
      {
        "id": "pressure-units",
        "eyebrow": "Measurement",
        "title": "Pressure units and liquid heads",
        "lead": "Manometers convert a pressure difference into the weight of a liquid column. The same hydrostatic principle unifies pascals, bar, atmosphere, torr and centimetres of mercury.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Hydrostatic pressure difference",
            "steps": [
              {
                "label": "Choose a liquid slab",
                "text": "Take a stationary horizontal slab of density $\\rho$, area $A$ and thickness $dh$."
              },
              {
                "label": "Balance vertical forces",
                "text": "The lower pressure force exceeds the upper pressure force by the weight of the slab.",
                "tex": "(P+dP)A-PA=\\rho A g\\,dh"
              },
              {
                "label": "Integrate",
                "text": "For an incompressible liquid of constant density, integrate between two levels separated by vertical height $h$.",
                "tex": "\\Delta P=\\rho gh"
              }
            ],
            "result": "P_2-P_1=\\rho g(h_1-h_2)"
          },
          {
            "type": "table",
            "headers": [
              "Unit",
              "Exact or standard relation",
              "Use"
            ],
            "rows": [
              [
                "pascal",
                "$1\\,\\mathrm{Pa}=1\\,\\mathrm{N\\,m^{-2}}$",
                "SI calculations"
              ],
              [
                "bar",
                "$1\\,\\mathrm{bar}=10^5\\,\\mathrm{Pa}$",
                "IUPAC standard pressure"
              ],
              [
                "atmosphere",
                "$1\\,\\mathrm{atm}=101325\\,\\mathrm{Pa}$",
                "traditional gas-law work"
              ],
              [
                "torr",
                "$1\\,\\mathrm{Torr}=1/760\\,\\mathrm{atm}$",
                "vapour pressure and vacuum"
              ],
              [
                "mm Hg",
                "approximately $1\\,\\mathrm{mmHg}=1\\,\\mathrm{Torr}$",
                "manometers"
              ]
            ],
            "caption": "When a liquid other than mercury is used, equate pressure heads: $\\rho_1h_1=\\rho_2h_2$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — pressure is a scalar only in equilibrium",
            "text": "In a fluid at rest the stress tensor is isotropic, so the normal stress has the same magnitude in every direction and is represented by one scalar pressure. A rapidly sheared gas or a gas with a strong temperature gradient can have anisotropic stress; kinetic theory then distinguishes equilibrium pressure from viscous normal stresses. JEE problems assume mechanical equilibrium unless a flow or acceleration is stated. Gravity is usually negligible over laboratory vessel dimensions because $\\rho_{gas}gh$ is tiny compared with atmospheric pressure, but it becomes decisive in tall atmospheric columns, centrifuges and rotating gases."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Hydrostatics in accelerating frames",
            "text": "The usual liquid-head relation assumes a stationary laboratory with effective acceleration equal to gravity. In a lift accelerating vertically, replace $g$ by the effective value $g+a$ or $g-a$ according to direction. In a horizontally accelerating vessel, the free surface tilts so that it is perpendicular to the effective gravity vector. In rotation, surfaces of constant pressure become paraboloids. These extensions all follow from one vector equation, pressure gradient equals mass density times effective body acceleration. Competitive-exam questions often hide this principle inside a manometer mounted in an accelerating vehicle. The safest method is to identify the effective acceleration field first, then integrate the pressure change along the displacement rather than trying to adapt a memorised vertical-column formula."
          }
        ]
      },
      {
        "id": "barometer",
        "eyebrow": "Atmospheric pressure",
        "title": "The mercury barometer",
        "lead": "A barometer balances atmospheric pressure against a vertical liquid column whose upper end is nearly a vacuum.",
        "blocks": [
          {
            "type": "visual",
            "id": "barometer",
            "title": "Torricelli barometer",
            "caption": "At the same horizontal level in the connected mercury, pressures are equal. Therefore $P_{atm}=\\rho_{Hg}gh$ when the vapour pressure above the column is neglected."
          },
          {
            "type": "bullets",
            "items": [
              "The height is measured vertically; tilting a sufficiently long tube changes the length of the mercury thread but not its vertical height.",
              "If the liquid has appreciable vapour pressure, the exact balance is $P_{atm}=p^*_{liquid}+\\rho gh$.",
              "The density of mercury changes slightly with temperature; precision barometry corrects both density and local $g$."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — capillary and vapour corrections",
            "text": "In a narrow barometer tube the curved mercury meniscus produces a Laplace-pressure correction $2\\gamma/R$. Mercury does not wet glass, so the meniscus is convex and the observed height is slightly depressed. A real space above the column also contains mercury vapour; the vapour pressure is small near room temperature but not identically zero. These corrections are normally ignored in competitive-exam calculations, yet they explain why a laboratory barometer is calibrated rather than treated as a perfect geometrical ruler."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Altitude, weather and barometer readings",
            "text": "A barometer reading changes with both atmospheric pressure and the properties of the manometric liquid. Weather systems alter the mass of air above the instrument, while altitude reduces it. Temperature changes mercury density and also the scale length, so precision readings are reduced to a reference temperature. At high altitude the simple linear estimate $P=P_0-rho gh$ fails because air density decreases with height; the exponential barometric law is required. For small height differences in a building, however, treating air density as constant is adequate. This hierarchy of approximations is important: use incompressible hydrostatics for liquids, a constant-density approximation for short gas columns, and the ideal-gas barometric distribution for large atmospheric height changes."
          }
        ]
      },
      {
        "id": "open-manometer",
        "eyebrow": "Manometry",
        "title": "Open-end manometer: a sign-safe method",
        "lead": "Instead of memorising pictures, walk through the connected liquid and add $+\\rho gh$ while moving downward and $-\\rho gh$ while moving upward.",
        "blocks": [
          {
            "type": "visual",
            "id": "manometer",
            "title": "Open-end manometer",
            "caption": "The limb with the lower liquid surface is exposed to the greater pressure."
          },
          {
            "type": "equationSet",
            "title": "Three open-end cases",
            "equations": [
              {
                "tex": "P_g=P_{atm}+\\rho gh",
                "note": "gas-side level lower"
              },
              {
                "tex": "P_g=P_{atm}-\\rho gh",
                "note": "gas-side level higher"
              },
              {
                "tex": "P_g=P_{atm}",
                "note": "levels equal"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Exam trap — gauge pressure versus absolute pressure",
            "text": "The reading $\\rho gh$ is a pressure difference. Gas laws require absolute pressure. A tyre gauge or open manometer may report gauge pressure $P_g-P_{atm}$; add atmospheric pressure before using $PV=nRT$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Interfaces and pressure continuity",
            "text": "At an interface between two stationary fluids, pressure is continuous when surface-tension curvature is neglected. Density may jump abruptly, but pressure does not. That fact allows a pressure path to be traced through several liquids: move vertically in one liquid using its density, cross an interface without changing pressure, then continue with the next density. Horizontal distance and tube shape are irrelevant. If a gas occupies a large vertical height, its pressure variation can be included in the same path, although it is usually negligible compared with a mercury or water column. This interface method also works for inverted U-tubes, differential gauges and systems containing oil, water and mercury. It is more general and less error-prone than assigning signs from a sketch by intuition."
          }
        ]
      },
      {
        "id": "closed-manometer",
        "eyebrow": "Low-pressure measurement",
        "title": "Closed-end manometer",
        "lead": "If the sealed limb contains a good vacuum, the gas pressure alone supports the liquid head.",
        "blocks": [
          {
            "type": "formula",
            "tex": "P_g=\\rho gh",
            "caption": "The relation is direct only when the closed limb is evacuated. If it contains trapped gas, its pressure must be added."
          },
          {
            "type": "paragraph",
            "text": "A closed-end instrument is especially useful for pressures below atmospheric pressure because it does not require subtraction of two similar large numbers. If the sealed volume is not negligible and changes during reading, use the gas law for that trapped reference gas."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — differential manometers",
            "text": "A differential manometer compares two unknown pressures directly. Starting from one gas, trace through every liquid interface to the other gas. Densities of gas columns are usually neglected, whereas the manometric-liquid density is retained. For multiple immiscible liquids, each vertical segment contributes $\\pm\\rho_i g h_i$. This path method remains valid in branched tubes and avoids the common mistake of using the total curved length instead of vertical elevation."
          }
        ]
      },
      {
        "id": "mercury-plug",
        "eyebrow": "Trapped gas",
        "title": "Uniform tubes separated by a mercury plug",
        "lead": "In a uniform tube, trapped gas volume is proportional to its length. Rotating the tube changes the hydrostatic head of the mercury plug and therefore the pressure and length of the trapped gas.",
        "blocks": [
          {
            "type": "visual",
            "id": "mercury-plug",
            "title": "Horizontal, inclined and vertical plug",
            "caption": "For a mercury thread of length $L$ inclined at angle $\\theta$ to the horizontal, the pressure head is $L\\sin\\theta$ centimetres of mercury."
          },
          {
            "type": "derivation",
            "title": "General isothermal plug relation",
            "steps": [
              {
                "label": "Write the pressure on each side",
                "text": "Use atmospheric pressure plus or minus the vertical mercury head according to orientation."
              },
              {
                "label": "Convert length to volume",
                "text": "For uniform cross-sectional area $A$, $V=A\\ell$. The area cancels from the isothermal gas law."
              },
              {
                "label": "Relate two orientations",
                "tex": "P_1\\ell_1=P_2\\ell_2"
              }
            ],
            "result": "(P_{ref}\\pm\\rho gL\\sin\\theta)\\ell=\\text{constant}"
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — infer which tube ends are open",
            "text": "When a tube contains two trapped air columns separated by mercury, compare how the mercury moves after rotation. An open end fixes the adjacent gas pressure at atmospheric pressure, while a closed end conserves the amount of that gas and requires a Boyle-law relation. Test each proposed end condition against both gas columns; a single column may appear consistent by accident, but both columns together identify the correct boundary condition."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Gas plugs as coupled mechanical systems",
            "text": "A trapped-gas and mercury-thread problem contains two coupled equations: hydrostatic force balance determines gas pressure, while the gas law relates pressure to the changing trapped volume. Rotation of the tube changes only the vertical component of the mercury thread, not its length or mass. If both sides contain trapped gases, each side has its own gas-law invariant and the pressure difference is supplied by the thread. The final position then follows from simultaneous nonlinear equations and may have more than one algebraic root; geometry and positivity select the physical one. This structure is a useful prototype for many JEE Advanced systems in which a moving boundary couples mechanics and thermodynamics. Write the constraint equations before substituting numbers, and keep all lengths in one consistent cross-sectional-volume scale."
          }
        ]
      },
      {
        "id": "part1-example",
        "eyebrow": "Integrated example",
        "title": "A complete manometer calculation",
        "lead": "This example combines absolute pressure, a vertical head and isothermal compression.",
        "blocks": [
          {
            "type": "example",
            "number": 56,
            "title": "Inclined tube with a trapped gas",
            "question": "A uniform tube traps $36.0\\,\\mathrm{cm}$ of air at atmospheric pressure $76.0\\,\\mathrm{cmHg}$ while horizontal. A $12.0\\,\\mathrm{cm}$ mercury thread separates the gas from the open end. The tube is raised so that the mercury thread makes $30^\\circ$ with the horizontal and the open end is above the gas. Find the new gas length at constant temperature.",
            "steps": [
              "The vertical mercury head is $12.0\\sin30^\\circ=6.0\\,\\mathrm{cmHg}$.",
              "Because the open end is above the trapped gas, the gas supports atmosphere plus the mercury head: $P_2=76+6=82\\,\\mathrm{cmHg}$.",
              "For a uniform tube, $V\\propto\\ell$. Hence $76(36)=82\\ell_2$.",
              "$\\ell_2=33.37\\,\\mathrm{cm}$."
            ],
            "answer": "$33.4\\,\\mathrm{cm}$",
            "sourcePages": "pages 5–8"
          }
        ]
      }
    ]
  },
  {
    "number": 2,
    "title": "Gas laws, graph transformations and absolute zero",
    "subtitle": "Properties of gases, phase-change remarks, mathematical graph grammar, Boyle, Charles and Gay–Lussac laws, absolute zero, STP and SATP.",
    "sourcePages": "pages 9–21",
    "kind": "theory",
    "sections": [
      {
        "id": "gas-properties",
        "eyebrow": "Macroscopic behaviour",
        "title": "Why gases fill a container",
        "lead": "The enormous intermolecular separation in a gas makes its volume highly compressible and determined mainly by the container rather than by molecular size.",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "A gas expands to occupy every accessible region of its container and has no free surface in equilibrium.",
              "Its density is much lower than that of a liquid or solid because the average intermolecular separation is much larger.",
              "Every real gas can be liquefied by a suitable combination of cooling and compression, but compression alone works only below the critical temperature.",
              "Phase-change latent heat mainly changes intermolecular potential energy; temperature remains constant during an equilibrium phase change at fixed pressure."
            ]
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Molecular motion during phase change",
            "text": "Translation, rotation and vibration do not switch on in the simple sequence suggested by the source. Gas molecules always translate; molecular rotation and vibration depend on molecular structure and temperature. During melting and vaporisation the key thermodynamic change is the balance between intermolecular potential energy and configurational entropy, not a complete conversion of one type of motion into another."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — why Avogadro behaviour emerges",
            "text": "At sufficiently low density, molecular size and intermolecular forces contribute only small corrections to the pressure. The equation of state then approaches $PV=nRT$, so equal volumes at the same $P$ and $T$ contain equal numbers of molecules regardless of chemical identity. Liquids and solids do not obey this simple volume–amount proportionality because their particles are packed at characteristic separations determined by molecular size and bonding. The ideal-gas limit is therefore a dilute-matter limit, not a special chemical property of particular gases."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Phase changes and molecular degrees of freedom",
            "text": "Melting and vaporisation do not convert one type of molecular motion completely into another. Molecules in solids possess vibrational motion; liquids support translation, rotation and vibration with strong intermolecular constraints; gases also possess internal rotational and vibrational modes when thermally accessible. Latent heat mainly changes intermolecular potential energy and structure while temperature remains fixed during equilibrium phase change at constant pressure. The source’s qualitative motion discussion is best interpreted as increasing freedom of molecular motion, not exclusive replacement of modes. This correction matters later in equipartition theory, where translational, rotational and vibrational contributions are counted separately. It also explains why heat capacities and latent heats cannot be inferred merely from the number of visible mechanical motions."
          }
        ]
      },
      {
        "id": "graph-grammar",
        "eyebrow": "Mathematical toolkit",
        "title": "Recognising graph families before plotting",
        "lead": "Gas-law questions often test transformations rather than new physics. Identify the algebraic form first, then choose axes that linearise it.",
        "blocks": [
          {
            "type": "visual",
            "id": "graph-grammar",
            "title": "Core graph shapes",
            "caption": "Straight lines, rectangular hyperbolae, power-law curves, exponentials and logarithms recur throughout the chapter."
          },
          {
            "type": "table",
            "headers": [
              "Relation",
              "Direct plot",
              "Linearised plot",
              "Key feature"
            ],
            "rows": [
              [
                "$y=kx$",
                "$y$ vs $x$",
                "already linear",
                "through origin"
              ],
              [
                "$y=kx+c$",
                "$y$ vs $x$",
                "already linear",
                "intercept $c$"
              ],
              [
                "$xy=k$",
                "$y$ vs $x$",
                "$y$ vs $1/x$",
                "rectangular hyperbola"
              ],
              [
                "$y=kx^n$",
                "$y$ vs $x$",
                "$\\log y$ vs $\\log x$",
                "slope $n$"
              ],
              [
                "$y=ke^{ax}$",
                "$y$ vs $x$",
                "$\\ln y$ vs $x$",
                "slope $a$"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — labels matter",
            "text": "A curve may look identical under two different axis choices but represent different constants. Always write the transformed equation beside the axes. For example, Boyle’s law gives a hyperbola in $P$ versus $V$, a straight line through the origin in $P$ versus $1/V$, and a horizontal line in $PV$ versus $P$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Dimensionless graph transformations",
            "text": "Many seemingly different gas-law graphs become simple when variables are nondimensionalised. For a fixed amount of ideal gas, define reduced plotting variables such as $p=P/P_0$, $v=V/V_0$ and $theta=T/T_0$. Then an isotherm is $pv=theta$, and at the reference temperature it becomes $pv=1$. Scaling removes units and makes families at different conditions directly comparable. Reciprocal plots linearise hyperbolas, while logarithmic plots turn power laws into straight lines whose slopes reveal exponents. A rigorous graph analysis should state the domain, intercepts, asymptotes, monotonicity and curvature. These features are often enough to eliminate options without numerical calculation and are especially valuable when a question changes axes from $P$–$V$ to $P$–$1/V$, $PV$–$P$, or logarithmic coordinates."
          }
        ]
      },
      {
        "id": "boyle",
        "eyebrow": "Isothermal law",
        "title": "Boyle’s law and its complete graph family",
        "lead": "For a fixed amount of gas at constant absolute temperature, pressure is inversely proportional to volume in the ideal-gas limit.",
        "blocks": [
          {
            "type": "formula",
            "tex": "PV=\\text{constant}=nRT"
          },
          {
            "type": "visual",
            "id": "boyle-family",
            "title": "Family of isotherms",
            "caption": "At a given volume the higher-temperature isotherm lies at higher pressure."
          },
          {
            "type": "table",
            "headers": [
              "Plot",
              "Shape",
              "Equation"
            ],
            "rows": [
              [
                "$P$ vs $V$",
                "rectangular hyperbola",
                "$P=k/V$"
              ],
              [
                "$P$ vs $1/V$",
                "line through origin",
                "$P=k(1/V)$"
              ],
              [
                "$PV$ vs $P$ or $V$",
                "horizontal line",
                "$PV=k$"
              ],
              [
                "$\\log P$ vs $\\log V$",
                "line of slope $-1$",
                "$\\log P=\\log k-\\log V$"
              ],
              [
                "$P^2$ vs $1/V^2$",
                "line through origin",
                "$P^2=k^2/V^2$"
              ]
            ]
          },
          {
            "type": "visual",
            "id": "gas-law-transformations",
            "title": "Transformed Boyle-law plots",
            "caption": "The source’s many small graphs are consolidated here into a single logically derived atlas."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — isothermal compressibility",
            "text": "The differential version of Boyle’s law is $dP/P=-dV/V$. The isothermal compressibility is $\\kappa_T=-(1/V)(\\partial V/\\partial P)_T$. For an ideal gas, $\\kappa_T=1/P$. This quantity measures the fractional volume change per unit pressure increase and becomes very large at low pressure. Real liquids have much smaller compressibility, which explains the nearly vertical liquid segment of an Andrews isotherm."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Compressibility and work along an isotherm",
            "text": "Boyle’s law describes equilibrium states, but the mechanical work between them depends on the path. In a reversible isothermal expansion of an ideal gas, the external pressure is adjusted infinitesimally below the gas pressure and the work magnitude is $nRT ln(V_2/V_1)$. In a sudden expansion against a constant external pressure, the final state can be the same but the work differs. Thus an isotherm on a state diagram does not by itself specify irreversibility unless the path and external pressure are stated. The isothermal compressibility of an ideal gas is $1/P$, showing that gases become less compressible as pressure rises. This connection links the elementary inverse relation to later discussions of mechanical stability and real-gas critical behaviour."
          }
        ]
      },
      {
        "id": "charles",
        "eyebrow": "Isobaric law",
        "title": "Charles’s law and absolute zero",
        "lead": "At constant pressure and amount, ideal-gas volume is directly proportional to absolute temperature.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Charles-law forms",
            "equations": [
              {
                "tex": "\\frac{V_1}{T_1}=\\frac{V_2}{T_2}",
                "note": "two-state relation"
              },
              {
                "tex": "V_t=V_0\\left(1+\\frac{t}{273.15}\\right)",
                "note": "Celsius form referenced to 0 °C"
              },
              {
                "tex": "\\left(\\frac{1}{V}\\frac{\\partial V}{\\partial T}\\right)_P=\\frac1T",
                "note": "isobaric expansion coefficient of an ideal gas"
              }
            ]
          },
          {
            "type": "visual",
            "id": "charles-zero",
            "title": "Extrapolation to absolute zero",
            "caption": "The straight line reaches zero volume at −273.15 °C only by ideal-gas extrapolation; real gases condense before that point."
          },
          {
            "type": "paragraph",
            "text": "The fractional expansion per degree is not a universal constant at every reference temperature. At temperature $T$, the ideal-gas isobaric expansion coefficient is $\\alpha_P=1/T$. Its familiar value $1/273.15\\,\\mathrm{K^{-1}}$ applies specifically at 0 °C."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — the thermodynamic meaning of absolute temperature",
            "text": "The Kelvin scale is not merely a shifted Celsius scale. Thermodynamic temperature is defined so that reversible heat-engine efficiency depends only on temperature ratios, while statistical mechanics identifies $kT$ as the energy scale governing molecular populations. Gas thermometry historically approached this scale by extrapolating low-density gas behaviour. The ideal relation $V\\propto T$ suggests a zero at −273.15 °C, but the modern kelvin is defined through an exact numerical value of the Boltzmann constant."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Thermal expansion as a derivative",
            "text": "Charles’s law can be written through the volume expansion coefficient $\\alpha=(1/V)(\\partial V/\\partial T)_P$. For an ideal gas, $\\alpha=1/T$, so its numerical value depends on the absolute temperature at which it is evaluated. The familiar $1/273.15$ per degree value applies specifically at zero Celsius. Real gases approach $1/T$ only in the low-pressure limit; near condensation their expansion can be much larger and may even show unusual behaviour. Derivative definitions are more powerful than percentage formulas because they handle small changes and connect directly to thermodynamic identities. They also reveal why extrapolating a straight Celsius graph to zero volume is an ideal-gas construction rather than a physically reachable state: every real gas condenses before that intercept is reached."
          }
        ]
      },
      {
        "id": "gay-lussac",
        "eyebrow": "Isochoric law",
        "title": "Pressure law at fixed volume",
        "lead": "At constant volume and amount, ideal-gas pressure is directly proportional to absolute temperature.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Gay–Lussac-law forms",
            "equations": [
              {
                "tex": "\\frac{P_1}{T_1}=\\frac{P_2}{T_2}",
                "note": "two-state relation"
              },
              {
                "tex": "P_t=P_0\\left(1+\\frac{t}{273.15}\\right)",
                "note": "Celsius form referenced to 0 °C"
              },
              {
                "tex": "\\left(\\frac{1}{P}\\frac{\\partial P}{\\partial T}\\right)_V=\\frac1T",
                "note": "thermal pressure coefficient"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "A sealed rigid cylinder is an isochoric system only while its volume and amount remain fixed. If a safety valve opens, gas escapes and the simple proportionality no longer applies."
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Cylinder heating",
            "text": "Use kelvin, not Celsius ratios. A pressure limit determines a burst temperature $T_b=T_1(P_{max}/P_1)$. Compare that temperature with the melting or softening temperature of the vessel material; do not compare pressures directly with temperatures."
          }
        ]
      },
      {
        "id": "combined-law",
        "eyebrow": "Unified view",
        "title": "The combined gas law and the P–V–T surface",
        "lead": "Boyle, Charles and Gay–Lussac laws are different slices through one equation-of-state surface.",
        "blocks": [
          {
            "type": "formula",
            "tex": "\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}",
            "caption": "Valid for a fixed amount of ideal gas."
          },
          {
            "type": "visual",
            "id": "pvt-surface",
            "title": "Ideal-gas P–V–T surface",
            "caption": "An isotherm, isobar and isochore are curves obtained by intersecting the surface with constant-$T$, constant-$P$ and constant-$V$ planes."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — independent variables and state surfaces",
            "text": "For one fixed amount of a single-phase simple compressible substance, only two of $P$, $V$ and $T$ are independent; the equation of state fixes the third. A process is a path on the state surface, whereas a gas law describes a special constrained path. This distinction prevents a common error: combining two equations that apply under incompatible constraints. In differential form for an ideal gas, $dP/P+dV/V=dT/T+dn/n$, a compact relation that handles small percentage changes and open systems."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Differential gas-law reasoning",
            "text": "For small changes, logarithmic differentiation of $PV=nRT$ gives $dP/P+dV/V=dn/n+dT/T$. This single relation handles many approximation questions without writing separate initial and final equations. For example, in a sealed rigid vessel $dP/P=dT/T$; in an open rigid vessel maintained at constant pressure, $dn/n=-dT/T$; and in a flexible constant-pressure container with fixed amount, $dV/V=dT/T$. The differential form also makes uncertainty propagation transparent: small relative measurement errors add with signs determined by the equation. It must not be used for large changes unless integrated or interpreted exactly in logarithmic form. The method is especially efficient when a problem asks only for a percentage change and all changes are small."
          }
        ]
      },
      {
        "id": "standards",
        "eyebrow": "Reference conditions",
        "title": "STP, SATP and molar volume",
        "lead": "Reference conditions must be stated because the molar volume depends on the adopted standard pressure.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Convention",
              "Temperature",
              "Pressure",
              "Ideal molar volume"
            ],
            "rows": [
              [
                "IUPAC STP",
                "$273.15\\,\\mathrm K$",
                "$1\\,\\mathrm{bar}$",
                "$22.71095\\,\\mathrm{L\\,mol^{-1}}$"
              ],
              [
                "traditional STP",
                "$273.15\\,\\mathrm K$",
                "$1\\,\\mathrm{atm}$",
                "$22.41397\\,\\mathrm{L\\,mol^{-1}}$"
              ],
              [
                "SATP",
                "$298.15\\,\\mathrm K$",
                "$1\\,\\mathrm{bar}$",
                "$24.7896\\,\\mathrm{L\\,mol^{-1}}$"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — infer the convention from data",
            "text": "If a question says STP without specifying pressure, inspect the supplied molar volume or gas constant. Use $22.4\\,\\mathrm L$ only with 1 atm at 273 K; use approximately $22.7\\,\\mathrm L$ with 1 bar. In ratio problems, the convention often cancels."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Reference states versus standard states",
            "text": "A reference condition used to quote gas volume is not the same as a thermodynamic standard state. IUPAC standard pressure is one bar, but standard temperature is not universally fixed for every purpose. Standard molar Gibbs energies use a defined standard pressure and a specified temperature, often 298.15 K. Laboratory gas volumes may be corrected to STP, NTP or SATP according to local convention. Therefore a numerical molar volume should never be used without identifying its pressure and temperature basis. In exact work, calculate $V_m=RT/P$ from stated conditions rather than relying on a rounded memorised value. This distinction prevents silent one-percent errors between one-atmosphere and one-bar conventions."
          }
        ]
      }
    ]
  },
  {
    "number": 3,
    "title": "Avogadro law, ideal-gas equation and mixtures",
    "subtitle": "Avogadro’s law, the universal gas constant, density and molar-mass relations, equations of state, Dalton’s partial pressures and Amagat’s partial volumes.",
    "sourcePages": "pages 22–26",
    "kind": "theory",
    "sections": [
      {
        "id": "avogadro",
        "eyebrow": "Amount–volume relation",
        "title": "Avogadro’s law",
        "lead": "At the same temperature and pressure, equal volumes of sufficiently dilute gases contain equal numbers of molecules.",
        "blocks": [
          {
            "type": "formula",
            "tex": "V\\propto n\\qquad(P,T\\;\\text{constant})"
          },
          {
            "type": "paragraph",
            "text": "Combining $V\\propto1/P$, $V\\propto T$ and $V\\propto n$ gives the ideal-gas equation. The proportionality constant is universal because temperature and amount have been defined on universal scales."
          },
          {
            "type": "derivation",
            "title": "From the empirical gas laws to the ideal equation",
            "steps": [
              {
                "label": "Combine proportionalities",
                "tex": "V\\propto\\frac{nT}{P}"
              },
              {
                "label": "Introduce the constant",
                "tex": "V=R\\frac{nT}{P}"
              },
              {
                "label": "Rearrange",
                "tex": "PV=nRT"
              }
            ],
            "result": "PV=nRT"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — molecular interpretation",
            "text": "In kinetic theory $P=(1/3)(N/V)m\\langle u^2\\rangle$ and $\\tfrac12m\\langle u^2\\rangle=\\tfrac32kT$. Eliminating the molecular speed gives $PV=NkT=nRT$. Avogadro’s law follows immediately: at fixed $P$, $V$ and $T$, the number $N=PV/kT$ is independent of molecular identity. This derivation also shows why the ideal-gas constant satisfies $R=N_Ak$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Avogadro law and chemical stoichiometry",
            "text": "Because equal gas volumes at common temperature and pressure contain equal molecule numbers, gas-volume ratios can represent mole ratios directly. This is the basis of Gay-Lussac’s law of combining volumes and allows gaseous reaction stoichiometry to be solved without first calculating absolute moles. The shortcut fails when gases are measured at different conditions, when products condense, or when a reacting mixture is not ideal enough for equal-volume equivalence. In eudiometry, all volumes are first reduced to a common temperature and pressure and then treated as mole numbers. Avogadro’s principle also explains why molar volume is independent of gas identity only in the ideal limit; real gases at the same pressure and temperature have slightly different compressibility factors and therefore slightly different molar volumes."
          }
        ]
      },
      {
        "id": "gas-constant",
        "eyebrow": "Constants and units",
        "title": "Choosing the correct value of R",
        "lead": "The numerical value of the gas constant changes only because the pressure, volume and energy units change.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Value of R",
              "Compatible units"
            ],
            "rows": [
              [
                "$8.314462618\\,\\mathrm{J\\,mol^{-1}K^{-1}}$",
                "Pa·m³ or energy calculations"
              ],
              [
                "$0.083144626\\,\\mathrm{L\\,bar\\,mol^{-1}K^{-1}}$",
                "bar and litre"
              ],
              [
                "$0.082057366\\,\\mathrm{L\\,atm\\,mol^{-1}K^{-1}}$",
                "atm and litre"
              ],
              [
                "$62.36367\\,\\mathrm{L\\,Torr\\,mol^{-1}K^{-1}}$",
                "torr and litre"
              ],
              [
                "$1.987204\\,\\mathrm{cal\\,mol^{-1}K^{-1}}$",
                "calorie-based thermodynamics"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Unit discipline",
            "text": "Do not mix bar with $0.082057$, or pascal with litres. Convert first or select a matching value of $R$. Dimensional analysis should leave the calculated amount in moles."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "R, k and energy scales",
            "text": "The molar gas constant and Boltzmann constant carry the same physical information at different counting scales: $R=N_Ak$. Multiplying a molecular energy of order $kT$ by Avogadro’s number gives a molar energy of order $RT$. At room temperature, $RT$ is about 2.48 kJ per mole, a useful benchmark for comparing intermolecular attractions, activation barriers and rotational energy spacings. Unit conversions of $R$ are not different constants; they are different numerical representations of one universal quantity. When an equation contains both microscopic mass and $k$, use mass per molecule; when it contains molar mass and $R$, use mass per mole. Mixing these conventions introduces a hidden factor of Avogadro’s number."
          }
        ]
      },
      {
        "id": "density",
        "eyebrow": "Composition from macroscopic data",
        "title": "Density, molar mass and relative density",
        "lead": "Substitute $n=m/M$ and $d=m/V$ into the ideal-gas equation.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Density relations",
            "equations": [
              {
                "tex": "PV=\\frac{m}{M}RT",
                "note": "mass form"
              },
              {
                "tex": "d=\\frac{PM}{RT}",
                "note": "density of an ideal gas"
              },
              {
                "tex": "M=\\frac{dRT}{P}",
                "note": "molar mass from density"
              },
              {
                "tex": "\\frac{d_2}{d_1}=\\frac{P_2T_1}{P_1T_2}",
                "note": "same gas at two states"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "At fixed temperature, density is proportional to pressure. At fixed pressure, density is inversely proportional to temperature. Relative density to hydrogen is approximately $M/2$ and to air approximately $M/28.97$, provided both gases are compared at the same $P$ and $T$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — mean molar mass of a mixture",
            "text": "For an ideal mixture, $M_{mix}=\\sum_i x_iM_i$ on a mole-fraction basis. Since $d=PM_{mix}/RT$, a measured mixture density can reveal composition when the component molar masses are known. Mass fractions satisfy $w_i=x_iM_i/M_{mix}$ and the inverse relation is $x_i=(w_i/M_i)/\\sum_j(w_j/M_j)$. These transformations are essential in air-composition and dissociation problems."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Gas-density measurement and buoyancy",
            "text": "Gas density is often measured indirectly because weighing a gas-filled vessel requires correcting for the buoyancy of displaced air. The apparent mass difference between evacuated and filled states is not exactly the true gas mass unless the external displacement is identical and the balance is calibrated. In ideal calculations, density immediately gives molar mass through $M=dRT/P$. In real gases, the corrected expression is $M=dZRT/P$, so neglecting $Z$ biases high-pressure molar-mass measurements. Gas-density differences also govern natural convection and balloon lift. A hot gas can be less dense than cold surroundings even when its molar mass is the same, because density varies as $P/T$ at fixed composition."
          }
        ]
      },
      {
        "id": "equation-state",
        "eyebrow": "State description",
        "title": "What an equation of state means",
        "lead": "An equation of state is a relation among macroscopic equilibrium variables. For an ideal gas, $PV=nRT$ completely specifies one variable when the other three are known.",
        "blocks": [
          {
            "type": "paragraph",
            "text": "For a fixed amount, $PV/T$ is constant. For an open vessel at fixed $P$ and $V$, the correct invariant is $nT=PV/R$, not $n/T$. This correction matters in heating problems where gas escapes."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — intensive and extensive variables",
            "text": "Pressure and temperature are intensive: they do not double when two identical systems are combined. Volume, amount, mass and energy are extensive. Molar volume $V_m=V/n$ and density are intensive ratios. Recognising this distinction helps in mixture problems: partial pressure is an intensive contribution defined in the full container volume, whereas partial volume is an extensive hypothetical volume at the mixture pressure."
          }
        ]
      },
      {
        "id": "dalton",
        "eyebrow": "Ideal mixtures",
        "title": "Dalton’s law of partial pressures",
        "lead": "For non-reacting ideal gases at common temperature and volume, the total pressure is the sum of the pressures each component would exert alone in that same volume.",
        "blocks": [
          {
            "type": "visual",
            "id": "dalton-mixture",
            "title": "Molecular picture of partial pressure",
            "caption": "Each component contributes independently to the wall-collision rate in the ideal-mixture limit."
          },
          {
            "type": "derivation",
            "title": "Partial pressure and mole fraction",
            "steps": [
              {
                "label": "Write each component equation",
                "tex": "P_iV=n_iRT"
              },
              {
                "label": "Write the total equation",
                "tex": "PV=n_{tot}RT"
              },
              {
                "label": "Divide",
                "tex": "\\frac{P_i}{P}=\\frac{n_i}{n_{tot}}=x_i"
              }
            ],
            "result": "P_i=x_iP"
          },
          {
            "type": "bullets",
            "items": [
              "Adding a new gas to a rigid container at the same temperature leaves the original component’s partial pressure unchanged, because its $n_i$, $T$ and $V$ are unchanged.",
              "If a component reacts or condenses, its amount changes and Dalton’s simple before–after argument must be updated.",
              "For a gas collected over water, $P_{total}=P_{dry\\ gas}+p^*_{water}$ only when liquid water is present and equilibrium is established."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — when Dalton’s law fails",
            "text": "Real mixtures have non-zero cross-interactions between unlike molecules. At high pressure, the total pressure is not exactly the sum of ideal partial pressures. Thermodynamics then uses fugacity $f_i$ rather than $P_i$ as the effective escaping tendency. For JEE Advanced, Dalton’s law is assumed unless non-ideality or chemical reaction is explicitly introduced."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Partial pressure and chemical potential",
            "text": "Dalton’s law is more than a bookkeeping rule. In an ideal mixture, each component behaves as if it alone occupied the full container volume, and its chemical potential contains a term $RT ln(x_iP)$. Partial pressure therefore controls equilibrium, membrane transport and reaction rates. Adding an inert gas at constant volume leaves reacting-gas partial pressures unchanged, whereas adding it at constant total pressure expands the mixture and lowers all original partial pressures. This distinction is central in equilibrium problems. Dalton’s law also remains valid for ideal gases with different molecular masses because pressure depends on total translational energy density, not on molecular identity. Deviations arise when cross-interactions make the mixture nonideal."
          }
        ]
      },
      {
        "id": "amagat",
        "eyebrow": "Equivalent volume description",
        "title": "Amagat’s law of partial volumes",
        "lead": "At common temperature and pressure, the ideal-mixture volume equals the sum of the volumes each component would occupy alone at that same temperature and pressure.",
        "blocks": [
          {
            "type": "visual",
            "id": "amagat-volume",
            "title": "Partial volumes add",
            "caption": "Partial volumes are hypothetical separate volumes at the mixture’s $T$ and $P$; the actual gases interpenetrate and all occupy the full container."
          },
          {
            "type": "derivation",
            "title": "Partial volume and mole fraction",
            "steps": [
              {
                "label": "Write component volume",
                "tex": "V_i=\\frac{n_iRT}{P}"
              },
              {
                "label": "Write total volume",
                "tex": "V=\\frac{n_{tot}RT}{P}"
              },
              {
                "label": "Divide",
                "tex": "\\frac{V_i}{V}=x_i"
              }
            ],
            "result": "V_i=x_iV"
          },
          {
            "type": "table",
            "headers": [
              "Law",
              "Common variables",
              "Component contribution"
            ],
            "rows": [
              [
                "Dalton",
                "$T,V$",
                "$P_i=x_iP$"
              ],
              [
                "Amagat",
                "$T,P$",
                "$V_i=x_iV$"
              ]
            ]
          }
        ]
      },
      {
        "id": "connected",
        "eyebrow": "Redistribution",
        "title": "Connected vessels at different temperatures",
        "lead": "When communicating vessels reach mechanical equilibrium, pressure becomes common, but the mole distribution depends on each vessel’s $V/T$ ratio.",
        "blocks": [
          {
            "type": "visual",
            "id": "connected-vessels",
            "title": "Two connected equilibrium regions",
            "caption": "At final equilibrium $P$ is common while $n_i=PV_i/(RT_i)$."
          },
          {
            "type": "derivation",
            "title": "Final pressure in connected vessels",
            "steps": [
              {
                "label": "Conserve total moles",
                "tex": "n_{tot}=\\sum_i n_i=\\frac{P_f}{R}\\sum_i\\frac{V_i}{T_i}"
              },
              {
                "label": "Solve for the common pressure",
                "tex": "P_f=\\frac{n_{tot}R}{\\sum_i V_i/T_i}"
              },
              {
                "label": "Recover each amount",
                "tex": "n_i=\\frac{P_fV_i}{RT_i}"
              }
            ],
            "result": "P_f=\\frac{n_{tot}R}{\\sum_i V_i/T_i}"
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — equal vessels",
            "text": "For two equal volumes at temperatures $T_1$ and $T_2$, $n_1:n_2=T_2:T_1$. More gas resides in the colder vessel because equal pressure requires greater number density at lower temperature."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Thermal transpiration and small apertures",
            "text": "When two low-pressure chambers at different temperatures are connected by an aperture smaller than the mean free path, ordinary equal-pressure equilibrium need not apply. Molecular-flow balance gives the thermal-transpiration relation $P/sqrt(T)=constant$ for the same gas, because flux is proportional to $P/sqrt(T)$. In a wide connecting tube with frequent collisions, hydrodynamic equilibrium instead produces nearly equal pressure. This contrast shows that the geometry and Knudsen number of the connection matter. Standard connected-vessel questions assume a wide enough path for pressure equalisation, but advanced vacuum systems and Knudsen pumps exploit thermal transpiration. Recognising the flow regime prevents applying a macroscopic equilibrium condition where molecular flux balance is the correct constraint."
          }
        ]
      }
    ]
  },
  {
    "number": 4,
    "title": "Diffusion, effusion and isotope enrichment",
    "subtitle": "Graham’s law in every useful form, aperture and pressure effects, finite effusion, exponential leakage and repeated enrichment of mixtures.",
    "sourcePages": "pages 27–33",
    "kind": "theory",
    "sections": [
      {
        "id": "definitions",
        "eyebrow": "Molecular transport",
        "title": "Diffusion versus effusion",
        "lead": "Diffusion is the spontaneous mixing produced by molecular motion and collisions. Effusion is escape through an aperture small compared with the mean free path, so molecules pass essentially one at a time without hydrodynamic flow through the hole.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Process",
              "Physical picture",
              "Rate-limiting feature"
            ],
            "rows": [
              [
                "diffusion",
                "mixing through space or a porous medium",
                "concentration gradient and collisions"
              ],
              [
                "effusion",
                "molecules leave through a pinhole into lower pressure",
                "molecular flux at the aperture"
              ],
              [
                "viscous flow",
                "collective continuum flow through a larger opening",
                "pressure gradient and viscosity"
              ]
            ]
          },
          {
            "type": "visual",
            "id": "effusion-apparatus",
            "title": "Molecular effusion through a pinhole",
            "caption": "Graham’s law is most accurate in the molecular-flow regime, where the hole is small relative to the mean free path."
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "The rate is not an intrinsic property of a gas alone",
            "text": "An absolute effusion rate depends on pressure, temperature, aperture area, wall geometry and the downstream pressure. Graham’s law is primarily a comparison law under controlled conditions. The source correctly warns against using a bare proportionality constant without specifying the apparatus."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Diffusion equations beyond Graham’s law",
            "text": "Macroscopic diffusion is driven by gradients and is described by Fick’s law, flux equals minus a diffusion coefficient times concentration gradient. Graham’s law instead compares molecular-flow rates through a tiny opening or porous barrier under matched conditions. The inverse-square-root molar-mass dependence follows from molecular speed, whereas the diffusion coefficient in a dense gas also depends on collision cross section, pressure and temperature. Consequently, ordinary mixing across a room is not predicted accurately by Graham’s law alone; air currents usually dominate. In exam language, check whether the process is effusion, porous-plug flow, or bulk diffusion before choosing a formula. The same word ‘rate’ can refer to moles per time, volume per time, mass per time or pressure decrease, each requiring its own conversion."
          }
        ]
      },
      {
        "id": "graham",
        "eyebrow": "Core law",
        "title": "Deriving Graham’s square-root dependence",
        "lead": "The number of molecules striking unit wall area per unit time is proportional to number density times mean speed. For an ideal gas at fixed $P$ and $T$, number density is the same for all gases, while characteristic speed varies as $1/\\sqrt M$.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Effusion rate",
            "steps": [
              {
                "label": "Wall flux",
                "text": "For an isotropic Maxwell distribution, one quarter of $n_N\\bar u$ reaches a unit area of wall per unit time.",
                "tex": "J_N=\\frac14 n_N\\bar u"
              },
              {
                "label": "Mean speed",
                "tex": "\\bar u=\\sqrt{\\frac{8RT}{\\pi M}}"
              },
              {
                "label": "Molar rate through area A",
                "tex": "r=\\frac{PA}{\\sqrt{2\\pi MRT}}"
              },
              {
                "label": "Compare at equal P, T and A",
                "tex": "\\frac{r_1}{r_2}=\\sqrt{\\frac{M_2}{M_1}}=\\sqrt{\\frac{d_2}{d_1}}"
              }
            ],
            "result": "r\\propto1/\\sqrt M"
          },
          {
            "type": "equationSet",
            "title": "Equivalent comparison forms",
            "equations": [
              {
                "tex": "\\frac{n_1/t_1}{n_2/t_2}=\\sqrt{\\frac{M_2}{M_1}}",
                "note": "moles per time"
              },
              {
                "tex": "\\frac{V_1/t_1}{V_2/t_2}=\\sqrt{\\frac{M_2}{M_1}}",
                "note": "equal-state volume rate"
              },
              {
                "tex": "\\frac{x_1/t_1}{x_2/t_2}=\\sqrt{\\frac{M_2}{M_1}}",
                "note": "distance through identical porous plugs"
              },
              {
                "tex": "\\frac{t_1}{t_2}=\\sqrt{\\frac{M_1}{M_2}}",
                "note": "time for equal amount"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — effusive beams are faster than the bulk gas",
            "text": "The speed distribution among molecules crossing a small hole is not the ordinary Maxwell speed distribution. Faster molecules strike the aperture more frequently, so the effusive-beam distribution is weighted by an additional factor of speed. Consequently the mean kinetic energy in an effusive beam is $2kT$ per molecule rather than the bulk translational value $3kT/2$. This velocity selection underlies molecular-beam experiments and isotope separation."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Isotopic separation factor",
            "text": "For two isotopic molecules, one ideal effusion stage changes their mole ratio by the separation factor $alpha=sqrt(M_heavy/M_light)$. Because isotope masses are close, $alpha$ is only slightly greater than one, so many stages are needed. The enrichment compounds multiplicatively: after $k$ ideal infinitesimal stages the ratio is multiplied by $alpha^k$. Real cascades must also conserve material and handle finite cuts, so the simple formula represents an upper-limit stage model. This principle historically underpinned gaseous-diffusion isotope separation. It also illustrates why a small per-stage advantage can become large after repeated operations, provided each stage’s enriched stream is correctly routed into the next."
          }
        ]
      },
      {
        "id": "general-rate",
        "eyebrow": "Changing apparatus",
        "title": "Different pressures, temperatures and hole areas",
        "lead": "When conditions differ, retain every factor in the molecular-flow expression instead of applying the simple square-root molar-mass ratio.",
        "blocks": [
          {
            "type": "formula",
            "tex": "r=\\frac{PA}{\\sqrt{2\\pi MRT}}"
          },
          {
            "type": "derivation",
            "title": "General comparison",
            "steps": [
              {
                "label": "Write the rate for each gas",
                "tex": "r_i=\\frac{P_iA_i}{\\sqrt{2\\pi M_iRT_i}}"
              },
              {
                "label": "Take the ratio",
                "tex": "\\frac{r_1}{r_2}=\\frac{P_1A_1}{P_2A_2}\\sqrt{\\frac{M_2T_2}{M_1T_1}}"
              }
            ],
            "result": "\\frac{r_1}{r_2}=\\frac{P_1A_1}{P_2A_2}\\sqrt{\\frac{M_2T_2}{M_1T_1}}"
          },
          {
            "type": "bullets",
            "items": [
              "For geometrically similar circular holes, $A\\propto d^2$; for square holes, $A=a^2$.",
              "If downstream pressure is not negligible, the net rate depends on the difference of opposing molecular fluxes.",
              "At constant volume and temperature, pressure is proportional to amount, so a measured pressure drop can track depletion."
            ]
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Equal time does not mean equal fraction",
            "text": "Two components effusing for the same time lose amounts in proportion to $P_i/\\sqrt{M_i}$ at that instant. As composition changes, the instantaneous rates change. A one-step Graham ratio is valid only for an infinitesimal sample or when depletion is negligible."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Effusion flux from velocity components",
            "text": "The effusion formula can be derived directly from the Maxwell distribution of the velocity component normal to the hole. Only molecules with positive normal velocity cross outward, and faster molecules contribute proportionally more crossings. Integrating $u_x f(u_x)$ over positive values produces a number flux $n_N sqrt(kT/(2pi m))$, equivalent to one quarter of number density times mean speed. This derivation explains both the temperature dependence and the square-root mass dependence without invoking a vague collision frequency. It also shows why the gas outside must have negligible back pressure; otherwise an inward flux must be subtracted. At equilibrium equal outward and inward fluxes yield no net effusion despite continuous molecular exchange."
          }
        ]
      },
      {
        "id": "porous-plug",
        "eyebrow": "Applications",
        "title": "Meeting fronts and porous-plug distances",
        "lead": "If two gases begin diffusing from opposite ends of a uniform tube, the meeting point divides the tube in the ratio of diffusion distances.",
        "blocks": [
          {
            "type": "formula",
            "tex": "\\frac{x_1}{x_2}=\\sqrt{\\frac{M_2}{M_1}},\\qquad x_1+x_2=L"
          },
          {
            "type": "paragraph",
            "text": "The same method locates the reaction ring in classic $\\mathrm{NH_3}$–$\\mathrm{HCl}$ experiments. Temperature and pressure should be comparable along the tube. Strong adsorption or reaction with the porous medium can shift the result."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — diffusion coefficient",
            "text": "For dilute gases the diffusion coefficient is of order $D\\sim\\lambda\\bar u/3$. Because $\\lambda$ grows as $1/P$ while speed grows as $\\sqrt{T/M}$, gas-phase diffusion becomes faster at low pressure and high temperature. Graham’s law concerns relative molecular speeds under a simplified apparatus; Fick’s law $J=-D\\nabla c$ describes macroscopic diffusion driven by a concentration gradient. The two ideas are related but not interchangeable."
          }
        ]
      },
      {
        "id": "finite-effusion",
        "eyebrow": "Composition changes",
        "title": "Finite effusion from a mixture",
        "lead": "Each component depletes with its own molecular-flow constant. The lighter component disappears faster, leaving the vessel enriched in the heavier component.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Componentwise exponential depletion",
            "steps": [
              {
                "label": "Rate for component i",
                "text": "At fixed $V$ and $T$, $P_i=n_iRT/V$ and the effusion rate is proportional to $P_i/\\sqrt{M_i}$.",
                "tex": "-\\frac{dn_i}{dt}=k_0\\frac{n_i}{\\sqrt{M_i}}"
              },
              {
                "label": "Integrate",
                "tex": "n_i(t)=n_{i0}\\exp\\left(-\\frac{k_0t}{\\sqrt{M_i}}\\right)"
              },
              {
                "label": "Ratio remaining",
                "tex": "\\frac{n_1}{n_2}=\\frac{n_{10}}{n_{20}}\\exp\\left[-k_0t\\left(\\frac1{\\sqrt{M_1}}-\\frac1{\\sqrt{M_2}}\\right)\\right]"
              }
            ],
            "result": "n_i=n_{i0}e^{-k_it},\\quad k_i\\propto M_i^{-1/2}"
          },
          {
            "type": "visual",
            "id": "effusion-decay",
            "title": "Exponential pressure decay",
            "caption": "For a pure gas in a rigid isothermal vessel, pressure follows the same exponential law as the number of molecules."
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Why a linear pressure-drop model is usually wrong",
            "text": "If the aperture and temperature are fixed, the rate decreases with pressure. Therefore equal pressure drops do not take equal times. A linear model can be an approximation over a very small pressure interval, but the exact molecular-flow result is logarithmic in the pressure ratio."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Rayleigh-type fractionation",
            "text": "Finite effusive depletion resembles Rayleigh fractionation. The lighter species has a larger first-order loss constant, so its amount decreases more rapidly and the residue becomes heavier. Eliminating time between two exponential depletion laws gives a power relation between remaining amounts. This differs from the composition of an infinitesimal effusate, which is determined by the instantaneous flux ratio. A common mistake is to apply the initial Graham ratio throughout a large depletion and assume constant composition. The correct treatment integrates changing partial pressures. Similar mathematics appears in evaporation, distillation, radioactive decay chains and isotope fractionation, making the effusion problem a useful model for composition-dependent open-system processes."
          }
        ]
      },
      {
        "id": "sequential",
        "eyebrow": "Enrichment",
        "title": "Repeated effusion steps",
        "lead": "Collecting the initial effusate and using it as the feed for the next stage repeatedly enriches the lighter component.",
        "blocks": [
          {
            "type": "visual",
            "id": "sequential-effusion",
            "title": "Cascade enrichment",
            "caption": "For an infinitesimal initial effusate, each stage multiplies the light-to-heavy mole ratio by $\\sqrt{M_H/M_L}$."
          },
          {
            "type": "derivation",
            "title": "Composition after k ideal stages",
            "steps": [
              {
                "label": "One stage",
                "tex": "\\left(\\frac{n_L}{n_H}\\right)_{out}=\\left(\\frac{n_L}{n_H}\\right)_{in}\\sqrt{\\frac{M_H}{M_L}}"
              },
              {
                "label": "Repeat k times",
                "tex": "R_k=R_0\\left(\\frac{M_H}{M_L}\\right)^{k/2}"
              },
              {
                "label": "Convert ratio to mole fraction",
                "tex": "x_L=\\frac{R_k}{1+R_k}"
              }
            ],
            "result": "R_k=R_0(M_H/M_L)^{k/2}"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — real isotope-separation cascades",
            "text": "Because isotopes have very similar molar masses, a single Graham factor is close to unity. Practical separation therefore uses many stages and carefully recycles product and waste streams. Uranium enrichment historically used gaseous $\\mathrm{UF_6}$ in diffusion cascades; modern plants mainly use centrifuges, where the small mass difference is amplified by a strong radial field. The mathematical idea is the same: a weak separation factor becomes useful only through repeated stages."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Stage definition and indexing",
            "text": "Repeated-effusion questions are sensitive to what is called the first stage. If the original feed is stage zero, the first collected infinitesimal effusate has one multiplication by the separation factor. The gas collected after the tenth hole may therefore involve ten or nine multiplications depending on the wording and whether the original vessel’s hole is counted. Always draw a short stage table showing feed ratio and product ratio. The ideal stage formula also assumes each collected portion is infinitesimal so that feed composition does not change during collection. A finite collected fraction requires integrating component depletion and generally gives a smaller enrichment than the infinitesimal prediction."
          }
        ]
      },
      {
        "id": "part4-examples",
        "eyebrow": "Source examples rebuilt",
        "title": "Representative diffusion calculations",
        "lead": "These examples preserve the source logic while using fresh data and corrected finite-depletion assumptions.",
        "blocks": [
          {
            "type": "example",
            "number": 57,
            "title": "Meeting point of two gases",
            "question": "A $9.0\\,\\mathrm m$ corridor has $\\mathrm{N_2O}$ released at one end and a tear gas of molar mass $196\\,\\mathrm{g\\,mol^{-1}}$ at the other. Assume identical diffusion conditions. How far from the $\\mathrm{N_2O}$ end do the fronts meet?",
            "steps": [
              "Let the distances be $x$ and $9-x$.",
              "$x/(9-x)=\\sqrt{196/44}=2.110$.",
              "$x=2.110(9-x)$, giving $x=6.11\\,\\mathrm m$."
            ],
            "answer": "$6.11\\,\\mathrm m$ from the $\\mathrm{N_2O}$ end",
            "sourcePages": "page 30"
          },
          {
            "type": "example",
            "number": 58,
            "title": "Square hole versus circular hole",
            "question": "Gas A at $0.50\\,\\mathrm{atm}$ has molar mass $4$. Gas B at $0.80\\,\\mathrm{atm}$ has molar mass $32$. A escapes through a square hole of side $a$ and B through a circular hole of diameter $a$. Both are at the same temperature. Find $r_A/r_B$.",
            "steps": [
              "$A_A=a^2$ and $A_B=\\pi a^2/4$.",
              "$r_A/r_B=(0.50/0.80)(4/\\pi)\\sqrt{32/4}$.",
              "The numerical value is $2.25$."
            ],
            "answer": "$r_A/r_B=2.25$",
            "sourcePages": "page 33"
          }
        ]
      }
    ]
  },
  {
    "number": 5,
    "title": "Evaporation, vapour pressure and container constraints",
    "subtitle": "Surface evaporation, saturation, relative humidity, dew point, rigid and flexible containers, connected vessels, vapour pressure, Clausius–Clapeyron and gases collected over water.",
    "sourcePages": "pages 34–40",
    "kind": "theory",
    "sections": [
      {
        "id": "evaporation",
        "eyebrow": "Liquid–vapour exchange",
        "title": "Evaporation is a surface process",
        "lead": "At any temperature a distribution of molecular energies exists in a liquid. Molecules near the surface with sufficient energy and a favourable outward velocity can escape into the gas phase.",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Weaker intermolecular attraction generally increases volatility and the evaporation rate.",
              "Higher temperature increases the population energetic enough to escape.",
              "Larger exposed surface area increases the number escaping per unit time but does not change the equilibrium vapour pressure.",
              "Airflow removes vapour from above an open surface and maintains a larger concentration gradient, accelerating net evaporation.",
              "Lower ambient relative humidity increases the capacity of air to accept additional water vapour."
            ]
          },
          {
            "type": "visual",
            "id": "evaporation-equilibrium",
            "title": "Dynamic liquid–vapour equilibrium",
            "caption": "At saturation in a closed vessel, molecules continue to cross the interface in both directions at equal average rates."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — evaporation cools",
            "text": "Escaping molecules are statistically drawn from the higher-energy part of the liquid distribution. The molecules left behind therefore have a lower average kinetic energy, so the liquid cools unless heat is supplied from the surroundings. This is why perspiration and volatile solvents cool a surface. At true equilibrium the temperature is uniform and condensation returns energy to the liquid at the same average rate that evaporation removes it."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Evaporation versus boiling",
            "text": "Evaporation is a surface process possible at every temperature because the molecular energy distribution always has a high-energy tail. Boiling is bulk vapour formation when vapour pressure matches the local external pressure, allowing bubbles to survive rather than collapse. Lowering external pressure lowers boiling temperature; increasing pressure raises it. Evaporative cooling occurs because escaping molecules carry above-average energy, and the remaining liquid re-equilibrates at a lower temperature unless heat is supplied. The escape rate depends on surface area, gas movement and ambient vapour concentration, whereas equilibrium vapour pressure depends only on temperature and liquid composition for a specified phase. Separating rate factors from equilibrium factors prevents many conceptual errors."
          }
        ]
      },
      {
        "id": "vapour-pressure",
        "eyebrow": "Equilibrium property",
        "title": "Saturated vapour pressure",
        "lead": "The saturated vapour pressure $p^*(T)$ is the equilibrium pressure of a vapour above its liquid at a specified temperature.",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "For a pure liquid in equilibrium, $p^*$ depends primarily on temperature and molecular identity, not on surface area, amount of liquid or empty headspace, provided both phases remain present.",
              "Before equilibrium, the instantaneous vapour partial pressure may be below $p^*$.",
              "If all liquid evaporates before saturation is reached, the final vapour pressure is determined by $nRT/V$ and is less than $p^*$.",
              "At the normal boiling point, $p^*$ equals $1\\,\\mathrm{atm}$; at the standard boiling point it equals $1\\,\\mathrm{bar}$."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — chemical potential criterion",
            "text": "Phase equilibrium is more fundamentally expressed as equality of chemical potentials: $\\mu_l(T,P)=\\mu_v(T,P)$. If the vapour pressure is below saturation, the chemical potential of the liquid is higher and net evaporation lowers the total Gibbs energy. If vapour is supersaturated, condensation is favoured. Vapour pressure is therefore an escaping-tendency measure, not simply a count of molecules above the surface."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Chemical-potential view of saturation",
            "text": "At liquid–vapour equilibrium, the molar Gibbs free energies or chemical potentials of the two phases are equal. If vapour pressure is below saturation, transferring molecules to the vapour lowers total Gibbs energy and net evaporation occurs. If it is above saturation, condensation is favoured. This criterion explains why saturation vapour pressure is independent of empty head-space volume as long as both phases remain: changing volume alters phase amounts until equality is restored. It also explains boiling under reduced pressure and the depression of solvent vapour pressure by a nonvolatile solute. The microscopic equal-rate picture and the thermodynamic equal-chemical-potential picture describe the same equilibrium at different levels."
          }
        ]
      },
      {
        "id": "humidity",
        "eyebrow": "Atmospheric moisture",
        "title": "Relative humidity and dew point",
        "lead": "Relative humidity compares the actual water-vapour partial pressure with the saturation pressure at the same temperature.",
        "blocks": [
          {
            "type": "formula",
            "tex": "\\mathrm{RH}(\\%)=100\\,\\frac{p_{H_2O}}{p^*_{H_2O}(T)}"
          },
          {
            "type": "visual",
            "id": "humidity-dewpoint",
            "title": "Dew point on a vapour-pressure curve",
            "caption": "Cooling at fixed water content lowers the saturation pressure until it equals the actual partial pressure; condensation then begins."
          },
          {
            "type": "paragraph",
            "text": "The dew point is the temperature at which a given water-vapour partial pressure becomes saturated. Relative humidity can rise on cooling even when no water is added, because $p^*(T)$ decreases strongly with temperature."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — absolute humidity and mixing ratio",
            "text": "Relative humidity is temperature dependent and therefore not a direct measure of total water content. Meteorology also uses the mixing ratio (mass of water vapour per mass of dry air), specific humidity and dew-point temperature. For an ideal mixture, the water mole fraction is $x_w=p_w/P$, while the mass mixing ratio is approximately $0.622p_w/(P-p_w)$ because $M_w/M_{dry\\ air}\\approx18/28.97$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Psychrometric quantities",
            "text": "Relative humidity is not the fraction of air molecules that are water. It is the ratio of actual water partial pressure to saturation pressure at the same temperature. Absolute humidity, humidity ratio and dew point encode different information. Dew point is especially useful because cooling at fixed water content leaves partial pressure changing only through volume or total-pressure changes, while saturation pressure falls steeply. When the two become equal, condensation begins. Warm air can contain more water vapour before saturation not because it has empty ‘spaces’ but because the equilibrium vapour pressure of liquid water is higher. This distinction is important in compression, cooling and weather problems."
          }
        ]
      },
      {
        "id": "containers",
        "eyebrow": "Mechanical constraints",
        "title": "Rigid, piston, open and elastic containers",
        "lead": "The gas equation alone is insufficient until the mechanical and material constraints of the container are identified.",
        "blocks": [
          {
            "type": "visual",
            "id": "container-types",
            "title": "Common container models",
            "caption": "Each model fixes a different subset of $P$, $V$ and $n$."
          },
          {
            "type": "table",
            "headers": [
              "Container",
              "Usually fixed",
              "What changes on heating"
            ],
            "rows": [
              [
                "sealed rigid vessel",
                "$V,n$",
                "$P\\propto T$"
              ],
              [
                "frictionless piston under fixed load",
                "$P,n$",
                "$V\\propto T$"
              ],
              [
                "open rigid vessel",
                "$P,V$",
                "$n\\propto1/T$"
              ],
              [
                "thin balloon before its limit",
                "$P\\approx P_{ext},n$",
                "$V\\propto T$"
              ],
              [
                "tyre or thick elastic vessel",
                "neither exactly fixed",
                "first $V$ then $P$ may rise"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Open-vessel invariant",
            "text": "At fixed $P$ and $V$, $nT=PV/R$ is constant. Thus heating causes $n$ to decrease as $1/T$. The incorrect relation $n/T=\\text{constant}$ reverses the physics."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — piston equilibrium",
            "text": "A piston is in mechanical equilibrium when gas pressure times area balances atmospheric pressure, piston weight and any spring force: $P_gA=P_{atm}A+mg+kx$. A massless frictionless piston does not imply equal pressure to atmosphere unless no additional load is present. Friction introduces a pressure range and hysteresis; JEE problems normally state frictionless motion to preserve a single equilibrium relation."
          }
        ]
      },
      {
        "id": "connected-temperature",
        "eyebrow": "Communicating vessels",
        "title": "Common pressure with unequal temperatures",
        "lead": "A narrow open connection equalises pressure. If the vessels are maintained at different temperatures, their number densities differ.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Two equal vessels initially at pressure P and temperature T₀",
            "steps": [
              {
                "label": "Initial total moles",
                "tex": "n_{tot}=\\frac{2PV}{RT_0}"
              },
              {
                "label": "Final mole conservation",
                "tex": "n_{tot}=\\frac{P_fV}{RT_1}+\\frac{P_fV}{RT_2}"
              },
              {
                "label": "Solve",
                "tex": "P_f=\\frac{2PT_1T_2}{T_0(T_1+T_2)}"
              }
            ],
            "result": "P_f=\\frac{2PT_1T_2}{T_0(T_1+T_2)}"
          },
          {
            "type": "paragraph",
            "text": "If a one-way valve opens only when a specified pressure difference is exceeded, flow stops when both mole conservation and the threshold relation are satisfied."
          }
        ]
      },
      {
        "id": "clausius",
        "eyebrow": "Temperature dependence",
        "title": "Clausius–Clapeyron equation",
        "lead": "When vapour behaves ideally and liquid molar volume is negligible compared with vapour molar volume, the Clapeyron equation integrates to a useful two-temperature form.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Integrated Clausius–Clapeyron relation",
            "steps": [
              {
                "label": "Start from Clapeyron",
                "tex": "\\frac{dP}{dT}=\\frac{\\Delta H_{vap}}{T(V_g-V_l)}"
              },
              {
                "label": "Use $V_g\\gg V_l$ and $V_g=RT/P$",
                "tex": "\\frac{d\\ln P}{dT}=\\frac{\\Delta H_{vap}}{RT^2}"
              },
              {
                "label": "Assume nearly constant enthalpy",
                "tex": "\\ln\\frac{P_2}{P_1}=-\\frac{\\Delta H_{vap}}{R}\\left(\\frac1{T_2}-\\frac1{T_1}\\right)"
              }
            ],
            "result": "\\ln(P_2/P_1)=-\\frac{\\Delta H_{vap}}R(1/T_2-1/T_1)"
          },
          {
            "type": "visual",
            "id": "clausius-plot",
            "title": "Linear Clausius plot",
            "caption": "A plot of $\\ln P$ against $1/T$ has slope $-\\Delta H_{vap}/R$ over a limited temperature range."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — Trouton’s rule and curvature",
            "text": "For many non-associated liquids, the entropy of vaporisation at the normal boiling point is roughly $85$–$90\\,\\mathrm{J\\,mol^{-1}K^{-1}}$, giving Trouton’s rule $\\Delta H_{vap}\\approx T_b\\Delta S_{vap}$. Hydrogen-bonded liquids and highly ordered liquids deviate. A Clausius plot is not perfectly straight over a wide range because $\\Delta H_{vap}$ decreases toward zero at the critical point and heat capacities of the phases differ."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Limits of the integrated Clausius equation",
            "text": "The two-temperature Clausius–Clapeyron equation assumes vapour behaves ideally, liquid molar volume is negligible relative to vapour volume, and enthalpy of vaporisation is constant over the interval. These assumptions are often good over a modest temperature range away from the critical point. Near the critical point the liquid and vapour volumes converge and latent heat approaches zero, so the approximation fails. Over a broad range, use temperature-dependent enthalpy or a fitted vapour-pressure equation such as Antoine’s equation. In exam calculations, keep temperature in kelvin, use natural logarithms unless a factor 2.303 is included, and check that vapour pressure increases with temperature."
          }
        ]
      },
      {
        "id": "wet-gas",
        "eyebrow": "Gas collection",
        "title": "Dry gas versus gas collected over water",
        "lead": "A gas collected over water is a mixture of the desired gas and water vapour.",
        "blocks": [
          {
            "type": "visual",
            "id": "wet-gas",
            "title": "Collection over water",
            "caption": "If liquid water is present and equilibrium is reached, subtract the aqueous tension at the collection temperature."
          },
          {
            "type": "formula",
            "tex": "P_{dry\\ gas}=P_{total}-p^*_{H_2O}(T)"
          },
          {
            "type": "bullets",
            "items": [
              "Use the dry-gas partial pressure in $PV=nRT$ when calculating the amount of the collected gas.",
              "If the gas reacts with or dissolves strongly in water, collection over water may be unsuitable.",
              "A quoted barometric pressure is the total external pressure, not the dry-gas pressure."
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — check whether liquid remains",
            "text": "In expansion or heating problems, water vapour remains at $p^*(T)$ only while enough liquid is present. Compute the amount required for saturation in the final state and compare it with the water available. If the available amount is smaller, all water evaporates and its final partial pressure follows the ideal-gas equation instead."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Gas collection and reaction stoichiometry",
            "text": "When a gas is collected over water, the observed total pressure includes water vapour. The dry-gas amount is calculated from $P_dry=P_total-p_water^*$. If the collection liquid is not pure water, use its actual vapour pressure, and if the gas dissolves or reacts with the liquid, the simple correction is insufficient. A level difference between liquid inside and outside the collection tube also creates a hydrostatic pressure correction. Therefore a complete eudiometric reading may require three corrections: equalise or correct liquid levels, subtract solvent vapour pressure, and reduce volume to reference temperature and pressure. Applying these in the wrong order can produce a systematic stoichiometric error."
          }
        ]
      }
    ]
  },
  {
    "number": 6,
    "title": "Kinetic theory, molecular energy and characteristic speeds",
    "subtitle": "Corrected kinetic-theory postulates, pressure derivation, gas laws from molecular motion, translational energy, equipartition, degrees of freedom, heat capacities and molecular speed averages.",
    "sourcePages": "pages 41–50",
    "kind": "theory",
    "sections": [
      {
        "id": "postulates",
        "eyebrow": "Microscopic model",
        "title": "Ideal-gas kinetic-theory assumptions",
        "lead": "Kinetic theory connects the macroscopic variables $P$, $V$ and $T$ to molecular mass, number density and velocity statistics.",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "The gas contains a very large number of molecules in continuous random translational motion.",
              "Molecular dimensions are negligible compared with intermolecular separation in the ideal limit.",
              "Intermolecular forces are negligible except during brief collisions.",
              "Collisions between molecules and with rigid walls are elastic and conserve total momentum and energy.",
              "Molecular motion is isotropic at equilibrium: $\\langle u_x^2\\rangle=\\langle u_y^2\\rangle=\\langle u_z^2\\rangle$.",
              "The time between collisions is much larger than the collision duration in a dilute gas."
            ]
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Real-gas collisions are not simply 'inelastic'",
            "text": "At thermal equilibrium, molecular collisions conserve total energy, although translational, rotational and vibrational energies can exchange. Real-gas non-ideality arises mainly from intermolecular potential energy and finite molecular size, not from systematic loss of energy in collisions."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — molecular chaos",
            "text": "A key hidden assumption is molecular chaos: velocities of molecules about to collide are statistically uncorrelated except through the one-particle distribution. This permits Boltzmann’s kinetic equation and explains irreversible relaxation toward equilibrium despite reversible microscopic mechanics. The assumption is excellent for dilute gases but becomes less accurate in dense fluids where spatial and velocity correlations persist."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Hierarchy of kinetic-theory assumptions",
            "text": "The kinetic model is deliberately idealised. Point particles and absence of forces are approximations valid at low density; perfectly elastic collisions express energy conservation for translational motion; molecular chaos assumes pre-collision velocities are uncorrelated; isotropy assumes no preferred direction at equilibrium. The model does not require every molecule to have the same speed. Instead, a distribution of speeds produces stable averages. Corrections for finite size and forces lead toward real-gas theory, while correlations and non-equilibrium distributions lead toward transport theory. Knowing which assumption generates which result is more valuable than memorising the list: pressure derivation needs momentum-changing wall collisions and isotropy, while the ideal equation additionally needs the temperature–kinetic-energy identification."
          }
        ]
      },
      {
        "id": "pressure-derivation",
        "eyebrow": "Core derivation",
        "title": "Pressure from momentum transfer",
        "lead": "Consider $N$ molecules of mass $m$ in a cube of side $L$. Follow one molecule’s $x$ component of motion.",
        "blocks": [
          {
            "type": "visual",
            "id": "kinetic-cube",
            "title": "Single-molecule wall impacts",
            "caption": "The molecule reverses $u_x$ at the wall and returns to the same wall after travelling $2L$."
          },
          {
            "type": "derivation",
            "title": "Kinetic gas equation",
            "steps": [
              {
                "label": "Momentum transfer per collision",
                "tex": "\\Delta p_x=2mu_x"
              },
              {
                "label": "Time between hits on the same wall",
                "tex": "\\Delta t=2L/u_x"
              },
              {
                "label": "Average force from one molecule",
                "tex": "F_x=\\frac{\\Delta p_x}{\\Delta t}=\\frac{mu_x^2}{L}"
              },
              {
                "label": "Sum over all molecules and divide by wall area",
                "tex": "P=\\frac{m}{V}\\sum_{i=1}^N u_{xi}^2"
              },
              {
                "label": "Use isotropy",
                "tex": "\\sum u_x^2=\\frac13\\sum u^2"
              }
            ],
            "result": "PV=\\frac13Nm\\langle u^2\\rangle=\\frac13Nm u_{rms}^2"
          },
          {
            "type": "paragraph",
            "text": "The derivation does not assume that every molecule has the same speed. It uses the mean square speed, which naturally defines $u_{rms}=\\sqrt{\\langle u^2\\rangle}$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — pressure tensor",
            "text": "Away from equilibrium, the kinetic contribution to stress is $P_{ij}=nm\\langle c_ic_j\\rangle$, where $\\mathbf c$ is velocity relative to the bulk flow. At equilibrium the off-diagonal averages vanish and the three diagonal terms are equal, giving scalar pressure. Viscosity is the transport of momentum associated with departures from this isotropic tensor."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Pressure tensor and isotropy",
            "text": "The familiar factor one third arises because equilibrium motion is isotropic, so the mean squared velocity components are equal: the total mean square speed is the sum of three equal component contributions. In a flowing or sheared gas these components need not be equal, and pressure becomes part of a stress tensor. The wall derivation can also be performed for an arbitrary velocity distribution; only the second moment of the normal velocity matters. This reveals that pressure is related to mean square speed, not mean speed. Confusing these moments is a frequent source of incorrect constants. The derivation remains valid for a mixture after summing the momentum flux of every component, giving total pressure as the sum of partial pressures."
          }
        ]
      },
      {
        "id": "energy-temperature",
        "eyebrow": "Temperature interpretation",
        "title": "Average translational kinetic energy",
        "lead": "Compare the kinetic gas equation with $PV=NkT=nRT$.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Energy–temperature relation",
            "steps": [
              {
                "label": "Equate equations",
                "tex": "\\frac13Nm\\langle u^2\\rangle=NkT"
              },
              {
                "label": "Multiply by $3/2$",
                "tex": "\\frac12m\\langle u^2\\rangle=\\frac32kT"
              },
              {
                "label": "Per mole",
                "tex": "\\langle E_{tr}\\rangle_{molar}=\\frac32RT"
              },
              {
                "label": "For n moles",
                "tex": "U_{tr}=\\frac32nRT"
              }
            ],
            "result": "\\langle E_{tr}\\rangle=\\frac32kT"
          },
          {
            "type": "bullets",
            "items": [
              "At the same temperature all gases have the same mean translational kinetic energy per molecule, regardless of molar mass.",
              "At the same temperature the translational energy per gram is larger for a gas with smaller molar mass because one gram contains more molecules.",
              "Temperature measures the mean translational energy scale, not the speed of every molecule."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Temperature and energy fluctuations",
            "text": "The equality between average translational energy and temperature is statistical. Individual molecules continually exchange energy in collisions and can have energies far above or below the mean. In a small subsystem, instantaneous kinetic energy fluctuates; temperature is associated with an equilibrium ensemble or a sufficiently long average. For one mole, translational energy is $3RT/2$ regardless of molecular mass, so heavier molecules move more slowly but carry the same average translational energy. This mass independence explains thermal equilibration between different gases. It also distinguishes temperature from total internal energy: two samples at the same temperature can have different internal energies because they contain different amounts or possess different rotational, vibrational and interaction contributions."
          }
        ]
      },
      {
        "id": "gas-laws-kinetic",
        "eyebrow": "Consistency",
        "title": "Recovering the empirical gas laws",
        "lead": "The molecular equation reproduces the ideal gas laws when the corresponding constraints are imposed.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Constraint",
              "Kinetic argument",
              "Result"
            ],
            "rows": [
              [
                "$T,N$ fixed",
                "$u_{rms}$ fixed",
                "$PV=\\text{constant}$"
              ],
              [
                "$P,N$ fixed",
                "$u_{rms}^2\\propto T$",
                "$V\\propto T$"
              ],
              [
                "$V,N$ fixed",
                "$u_{rms}^2\\propto T$",
                "$P\\propto T$"
              ],
              [
                "$P,T$ fixed",
                "number density fixed",
                "$V\\propto N$"
              ],
              [
                "same $T,P$",
                "$u\\propto1/\\sqrt M$",
                "Graham-type speed ratio"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — use density form",
            "text": "Since $P=\\tfrac13\\rho u_{rms}^2$, molecular speed can be found without explicitly calculating moles. At fixed pressure, a denser gas has a smaller rms speed."
          }
        ]
      },
      {
        "id": "equipartition",
        "eyebrow": "Internal modes",
        "title": "Degrees of freedom and equipartition",
        "lead": "Each independent quadratic term in the molecular energy contributes $\\tfrac12kT$ to the average energy per molecule in the classical limit.",
        "blocks": [
          {
            "type": "visual",
            "id": "degrees-freedom",
            "title": "Translation, rotation and vibration",
            "caption": "A vibrational normal mode contains two quadratic terms—kinetic and potential—and contributes $kT$ when fully active."
          },
          {
            "type": "table",
            "headers": [
              "Molecule/model",
              "Active quadratic degrees f",
              "$U_m$",
              "$C_{V,m}$",
              "$\\gamma=C_P/C_V$"
            ],
            "rows": [
              [
                "monatomic ideal gas",
                "3",
                "$\\tfrac32RT$",
                "$\\tfrac32R$",
                "$5/3$"
              ],
              [
                "linear molecule, rotation active",
                "5",
                "$\\tfrac52RT$",
                "$\\tfrac52R$",
                "$7/5$"
              ],
              [
                "non-linear molecule, rotation active",
                "6",
                "$3RT$",
                "$3R$",
                "$4/3$"
              ],
              [
                "add one active vibration",
                "+2",
                "+$RT$",
                "+$R$",
                "decreases"
              ]
            ]
          },
          {
            "type": "equationSet",
            "title": "Ideal-gas heat capacities",
            "equations": [
              {
                "tex": "U=\\frac f2nRT",
                "note": "equipartition internal energy"
              },
              {
                "tex": "C_{V,m}=\\frac f2R",
                "note": "molar heat capacity at constant volume"
              },
              {
                "tex": "C_{P,m}=C_{V,m}+R",
                "note": "Mayer relation"
              },
              {
                "tex": "\\gamma=1+\\frac2f",
                "note": "when f is temperature independent"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — quantum freezing of modes",
            "text": "Equipartition is classical and fails when the energy-level spacing greatly exceeds $kT$. Rotational levels of many diatomic gases are active near room temperature, but vibrational spacings are usually much larger, so vibration is partially frozen. As temperature rises, additional modes become populated and heat capacity increases. This quantum explanation replaces the source’s idea that rotational and vibrational motion simply begins at sharply defined temperatures."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Quantum activation of internal modes",
            "text": "Classical equipartition assigns energy to every quadratic degree of freedom, but molecular rotations and vibrations have quantised energy levels. A mode contributes fully only when thermal energy is large compared with its level spacing. Translational levels in a macroscopic box are extremely closely spaced and are always active. Rotational modes of many molecules activate at modest temperatures, while high-frequency vibrations may remain frozen near room temperature. As temperature rises, new modes increase heat capacity. This explains why measured heat capacities vary with temperature and why the simple classical prediction can fail for hydrogen at low temperature. Electronic excitation usually requires much higher temperatures, where dissociation and ionisation may also occur."
          }
        ]
      },
      {
        "id": "speeds",
        "eyebrow": "Velocity statistics",
        "title": "Average, rms and most probable speeds",
        "lead": "Because molecules have a distribution of speeds, three different characteristic values are useful.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Characteristic speeds",
            "equations": [
              {
                "tex": "u_{mp}=\\sqrt{\\frac{2RT}{M}}",
                "note": "speed at the maximum of the Maxwell speed distribution"
              },
              {
                "tex": "\\bar u=\\sqrt{\\frac{8RT}{\\pi M}}",
                "note": "arithmetic mean speed"
              },
              {
                "tex": "u_{rms}=\\sqrt{\\frac{3RT}{M}}=\\sqrt{\\frac{3P}{\\rho}}",
                "note": "root mean square speed"
              },
              {
                "tex": "u_{rms}:\\bar u:u_{mp}=\\sqrt3:\\sqrt{8/\\pi}:\\sqrt2",
                "note": "fixed universal ratio"
              }
            ]
          },
          {
            "type": "visual",
            "id": "speed-comparison",
            "title": "Ordering of characteristic speeds",
            "caption": "$u_{rms}>\\bar u>u_{mp}$ for a Maxwell distribution."
          },
          {
            "type": "paragraph",
            "text": "If a sample contains only a few explicitly listed molecular speeds, calculate the averages directly: $\\bar u=\\sum N_iu_i/N$ and $u_{rms}=\\sqrt{\\sum N_iu_i^2/N}$. The most probable speed is the speed with the greatest count and may not be unique."
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Do not use $u_{mp}$ or $\\bar u$ in kinetic-energy formulas",
            "text": "Translational kinetic energy depends on the mean square speed, so $u_{rms}$ is the correct characteristic speed: $\\langle E\\rangle=\\tfrac12m u_{rms}^2$. Substituting $u_{mp}$ gives $kT$, not the correct $3kT/2$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Which characteristic speed is appropriate",
            "text": "Root-mean-square, mean and most probable speeds answer different questions. RMS speed is tied directly to average kinetic energy and appears in the kinetic pressure equation. Mean speed appears in wall flux, collision frequency and effusion. Most probable speed locates the peak of the Maxwell speed distribution but does not represent the speed of most molecules in a narrow literal sense, because any exact speed has zero probability in a continuous distribution. Their fixed ordering follows from the distribution shape. In ratio questions involving the same speed definition, numerical prefactors cancel, leaving the robust scaling $u proportional sqrt(T/M)$. Mixing different characteristic speeds introduces incorrect factors such as $sqrt(3/2)$ or $sqrt(pi/8)$."
          }
        ]
      },
      {
        "id": "part6-examples",
        "eyebrow": "Integrated calculations",
        "title": "Speed and energy examples",
        "lead": "Short examples reproduce the source’s speed and energy applications with corrected notation.",
        "blocks": [
          {
            "type": "example",
            "number": 59,
            "title": "Rms speed of oxygen",
            "question": "Find the rms speed of $\\mathrm{O_2}$ at $300\\,\\mathrm K$.",
            "steps": [
              "Use $M=0.032\\,\\mathrm{kg\\,mol^{-1}}$.",
              "$u_{rms}=\\sqrt{3RT/M}=\\sqrt{3(8.314)(300)/0.032}$.",
              "$u_{rms}=484\\,\\mathrm{m\\,s^{-1}}$."
            ],
            "answer": "$4.84\\times10^2\\,\\mathrm{m\\,s^{-1}}$",
            "sourcePages": "pages 47–49"
          },
          {
            "type": "example",
            "number": 60,
            "title": "Discrete speed sample",
            "question": "In a model sample, 20 molecules move at $3\\,\\mathrm{m\\,s^{-1}}$, 30 at $7\\,\\mathrm{m\\,s^{-1}}$ and 50 at $9\\,\\mathrm{m\\,s^{-1}}$. Find $u_{mp}$, $\\bar u$ and $u_{rms}$.",
            "steps": [
              "The largest group has speed $9$, so $u_{mp}=9\\,\\mathrm{m\\,s^{-1}}$.",
              "$\\bar u=[20(3)+30(7)+50(9)]/100=7.20\\,\\mathrm{m\\,s^{-1}}$.",
              "$u_{rms}=\\sqrt{[20(9)+30(49)+50(81)]/100}=7.55\\,\\mathrm{m\\,s^{-1}}$."
            ],
            "answer": "$u_{mp}=9.00$, $\\bar u=7.20$, $u_{rms}=7.55\\,\\mathrm{m\\,s^{-1}}$",
            "sourcePages": "page 48"
          }
        ]
      }
    ]
  },
  {
    "number": 7,
    "title": "Maxwell–Boltzmann speed and energy distributions",
    "subtitle": "Probability derivation in velocity space, normalization, temperature and mass effects, characteristic speeds from moments, finite speed intervals, kinetic-energy distribution and useful Gaussian integrals.",
    "sourcePages": "pages 51–65",
    "kind": "theory",
    "sections": [
      {
        "id": "statistical-need",
        "eyebrow": "Statistical mechanics",
        "title": "Why a distribution is required",
        "lead": "A molecule changes velocity at every collision. Individual trajectories are unpredictable in detail, but the fractions of a macroscopic sample in specified velocity ranges are stable and calculable.",
        "blocks": [
          {
            "type": "paragraph",
            "text": "At equilibrium the three Cartesian velocity components are independent and symmetrically distributed about zero. The probability of a molecular state is weighted by the Boltzmann factor $e^{-E/kT}$. Because translational kinetic energy is $m(u_x^2+u_y^2+u_z^2)/2$, the component distribution is Gaussian."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — probability density is not probability",
            "text": "The function $f(u)$ has dimensions of inverse speed. The probability that a molecule has exactly one mathematical speed is zero; a measurable probability always refers to an interval and equals $f(u)du$ or an integral. Likewise, the ordinate of a Maxwell curve may exceed one without violating probability, because only the total area is constrained to unity."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "From microstates to probability density",
            "text": "A probability density is not itself a probability; it must be integrated over an interval. The value of the Maxwell density can exceed one when speed is measured in a sufficiently large unit because its units are inverse speed. What remains between zero and one is the area under the curve over a specified range. The distribution is normalised so total area equals one. This language becomes crucial in narrow-interval approximations: probability is approximately density times interval width only when the density changes little across that interval. It also explains why asking for the fraction of molecules with exactly one speed is mathematically zero, even though a histogram with finite bins shows a visible count near that speed."
          }
        ]
      },
      {
        "id": "component-derivation",
        "eyebrow": "Derivation I",
        "title": "From Boltzmann weighting to component Gaussians",
        "lead": "Write the equilibrium probability density as a product of independent functions of $u_x$, $u_y$ and $u_z$.",
        "blocks": [
          {
            "type": "derivation",
            "title": "One-dimensional velocity component",
            "steps": [
              {
                "label": "Boltzmann weight",
                "tex": "f_x(u_x)=C_x\\exp\\left(-\\frac{mu_x^2}{2kT}\\right)"
              },
              {
                "label": "Normalize over all component values",
                "tex": "1=C_x\\int_{-\\infty}^{\\infty}e^{-mu_x^2/(2kT)}du_x"
              },
              {
                "label": "Use the Gaussian integral",
                "tex": "\\int_{-\\infty}^{\\infty}e^{-ax^2}dx=\\sqrt{\\frac\\pi a}"
              },
              {
                "label": "Normalization constant",
                "tex": "C_x=\\sqrt{\\frac{m}{2\\pi kT}}"
              }
            ],
            "result": "f_x(u_x)=\\sqrt{\\frac{m}{2\\pi kT}}e^{-mu_x^2/(2kT)}"
          },
          {
            "type": "paragraph",
            "text": "The same expression holds for $u_y$ and $u_z$. Multiplication gives the probability density in three-dimensional velocity space."
          },
          {
            "type": "formula",
            "tex": "f(u_x,u_y,u_z)=\\left(\\frac{m}{2\\pi kT}\\right)^{3/2}e^{-m(u_x^2+u_y^2+u_z^2)/(2kT)}"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Gaussian components and central-limit structure",
            "text": "Each Cartesian velocity component follows a Gaussian distribution with zero mean and variance $kT/m$. The three components are statistically independent at equilibrium, so the joint distribution is the product of three Gaussians. This structure can be derived by maximising entropy subject to fixed normalisation and mean kinetic energy, or from canonical-ensemble Boltzmann weights. The speed distribution is not Gaussian because speed is a nonnegative radial coordinate; the spherical-shell factor $4pi u^2$ shifts the peak away from zero. The same Gaussian-component framework yields relative velocities, Doppler broadening and molecular-beam angular distributions. It is one of the most reusable mathematical patterns in kinetic theory."
          }
        ]
      },
      {
        "id": "speed-distribution",
        "eyebrow": "Derivation II",
        "title": "Spherical shell in velocity space",
        "lead": "All velocity vectors with magnitudes between $u$ and $u+du$ occupy a thin spherical shell of radius $u$ and thickness $du$.",
        "blocks": [
          {
            "type": "visual",
            "id": "velocity-space",
            "title": "Velocity-space shell",
            "caption": "Multiplying the three-dimensional density by $4\\pi u^2du$ counts every direction having the same speed."
          },
          {
            "type": "derivation",
            "title": "Maxwell speed distribution",
            "steps": [
              {
                "label": "Shell volume",
                "tex": "d\\Omega_u=4\\pi u^2du"
              },
              {
                "label": "Multiply by velocity-space density",
                "tex": "F(u)du=4\\pi\\left(\\frac{m}{2\\pi kT}\\right)^{3/2}u^2e^{-mu^2/(2kT)}du"
              },
              {
                "label": "Molar-mass form",
                "tex": "F(u)=4\\pi\\left(\\frac{M}{2\\pi RT}\\right)^{3/2}u^2e^{-Mu^2/(2RT)}"
              }
            ],
            "result": "F(u)=4\\pi(M/2\\pi RT)^{3/2}u^2e^{-Mu^2/(2RT)}"
          },
          {
            "type": "bullets",
            "items": [
              "$F(0)=0$ because the velocity-space shell shrinks to zero area at the origin.",
              "$F(u)\\to0$ for very large speed because the exponential dominates the $u^2$ factor.",
              "$\\int_0^\\infty F(u)du=1$; multiplying by $N$ gives the number distribution.",
              "The area between $u_1$ and $u_2$ is the fraction in that speed interval."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — dimensionless universal curve",
            "text": "Define $c=u/u_{mp}$. Since $u_{mp}=\\sqrt{2kT/m}$, the distribution transforms to a universal dimensionless shape $\\phi(c)=(4/\\sqrt\\pi)c^2e^{-c^2}$. Temperature and molar mass only stretch or compress the speed axis. This is why ratios such as $F(2u_{mp})/F(u_{mp})$ are independent of gas identity and temperature."
          }
        ]
      },
      {
        "id": "curve-temperature",
        "eyebrow": "Graph interpretation",
        "title": "Effect of temperature",
        "lead": "Heating preserves total area but shifts the distribution toward larger speeds and spreads it over a wider range.",
        "blocks": [
          {
            "type": "visual",
            "id": "maxwell-temperature",
            "title": "Same gas at two temperatures",
            "caption": "The high-temperature curve has a lower peak, greater width and a larger most probable speed."
          },
          {
            "type": "bullets",
            "items": [
              "The fraction at very low speed decreases on heating.",
              "The high-speed tail increases strongly, which is important for reaction rates and escape phenomena.",
              "All characteristic speeds scale as $\\sqrt T$.",
              "Curves at different temperatures must cross because each has unit total area."
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — area versus height",
            "text": "A higher ordinate at one speed does not mean a larger total number of molecules. Compare areas over intervals. The high-temperature curve can be lower near its peak yet contain far more molecules above a large threshold speed."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Scaling collapse of Maxwell curves",
            "text": "If speed is divided by $sqrt(T/M)$, Maxwell curves at different temperatures and molar masses collapse onto one universal dimensionless shape. Heating stretches the horizontal scale and lowers the peak so that total area remains one. The fraction above a fixed absolute speed rises, but the fraction above a fixed multiple of RMS speed remains unchanged. This scaling viewpoint is stronger than memorising that the curve becomes broader. It allows immediate comparison of two gases: equal values of $T/M$ produce identical speed distributions, not merely equal RMS speeds. It also clarifies why heavier gases can have the same energy distribution as lighter gases at the same temperature even though their speed distributions differ."
          }
        ]
      },
      {
        "id": "curve-mass",
        "eyebrow": "Graph interpretation",
        "title": "Effect of molar mass",
        "lead": "At the same temperature, every species has the same mean translational kinetic energy, so heavier molecules have lower speeds.",
        "blocks": [
          {
            "type": "visual",
            "id": "maxwell-mass",
            "title": "Different molar masses at one temperature",
            "caption": "The heavier gas has a taller, narrower distribution shifted to the left; the lighter gas is broader and shifted right."
          },
          {
            "type": "formula",
            "tex": "u_{characteristic}\\propto\\sqrt{\\frac{T}{M}}"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — velocity components versus speed",
            "text": "A component such as $u_x$ can be positive or negative and follows a symmetric Gaussian centred at zero. Speed is a non-negative magnitude and follows the asymmetric Maxwell distribution. Confusing these two distributions leads to incorrect factors of $u^2$ and incorrect normalization limits."
          }
        ]
      },
      {
        "id": "moments",
        "eyebrow": "Calculus",
        "title": "Deriving characteristic speeds from the distribution",
        "lead": "The most probable speed maximises $F(u)$, while mean and rms speeds are moments of the distribution.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Most probable speed",
            "steps": [
              {
                "label": "Differentiate the logarithm",
                "tex": "\\frac{d}{du}\\ln F(u)=\\frac2u-\\frac{Mu}{RT}"
              },
              {
                "label": "Set to zero",
                "tex": "\\frac2u=\\frac{Mu}{RT}"
              },
              {
                "label": "Solve",
                "tex": "u_{mp}=\\sqrt{\\frac{2RT}{M}}"
              }
            ],
            "result": "u_{mp}=\\sqrt{2RT/M}"
          },
          {
            "type": "derivation",
            "title": "Mean and rms speeds",
            "steps": [
              {
                "label": "Mean speed",
                "tex": "\\bar u=\\int_0^\\infty uF(u)du=\\sqrt{\\frac{8RT}{\\pi M}}"
              },
              {
                "label": "Mean square speed",
                "tex": "\\langle u^2\\rangle=\\int_0^\\infty u^2F(u)du=\\frac{3RT}{M}"
              },
              {
                "label": "Rms speed",
                "tex": "u_{rms}=\\sqrt{\\langle u^2\\rangle}=\\sqrt{\\frac{3RT}{M}}"
              }
            ],
            "result": "u_{rms}>\\bar u>u_{mp}"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — general moment formula",
            "text": "All speed moments can be expressed with the gamma function: $\\langle u^n\\rangle=(2kT/m)^{n/2}\\Gamma[(n+3)/2]/\\Gamma(3/2)$. The familiar mean and mean-square speeds are the cases $n=1$ and $n=2$. This compact result also gives collision-rate and transport averages that cannot be obtained from a single characteristic speed."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Moment-generating strategy",
            "text": "Many kinetic averages are moments of the speed distribution. Rather than integrate each from scratch, reduce the integral to the gamma-function form by substituting $x=Mu^2/(2RT)$. The resulting general moment formula generates mean speed, mean square speed, inverse-speed averages and higher moments. Ratios of moments quantify the distribution width and skewness. Collision theory sometimes weights the ordinary distribution by an additional factor of speed because faster molecules collide more often; therefore the speed distribution of colliding molecules differs from the distribution of molecules sampled at an instant. Recognising the weighting measure is essential whenever a problem asks about molecules striking a wall, crossing an aperture or participating in collisions."
          }
        ]
      },
      {
        "id": "finite-interval",
        "eyebrow": "Probability calculation",
        "title": "Molecules in a narrow speed interval",
        "lead": "For a sufficiently narrow interval centred at $u$, the fraction is approximately $F(u)\\Delta u$. For a wider interval, integrate numerically or use a cumulative Maxwell function.",
        "blocks": [
          {
            "type": "formula",
            "tex": "\\frac{\\Delta N}{N}\\approx4\\pi\\left(\\frac{M}{2\\pi RT}\\right)^{3/2}u^2e^{-Mu^2/(2RT)}\\Delta u"
          },
          {
            "type": "bullets",
            "items": [
              "Use SI units consistently: $M$ in $\\mathrm{kg\\,mol^{-1}}$, $u$ in $\\mathrm{m\\,s^{-1}}$ and $R$ in joules.",
              "For symmetric intervals $u_0\\pm\\delta u$, the width is $2\\delta u$.",
              "The approximation is accurate when the distribution changes little across the interval."
            ]
          },
          {
            "type": "example",
            "number": 61,
            "title": "Fraction near the most probable speed",
            "question": "For nitrogen at $300\\,\\mathrm K$, estimate the fraction with speed in $u_{mp}\\pm0.004u_{mp}$.",
            "steps": [
              "For a dimensionless speed $c=u/u_{mp}$, $F(u_{mp})u_{mp}=4e^{-1}/\\sqrt\\pi=0.8302$.",
              "The interval width is $0.008u_{mp}$.",
              "Fraction $\\approx0.8302(0.008)=6.64\\times10^{-3}$."
            ],
            "answer": "$6.64\\times10^{-3}$, or $0.664\\%$",
            "sourcePages": "pages 61, 64, 76"
          }
        ]
      },
      {
        "id": "ratios",
        "eyebrow": "Universal comparisons",
        "title": "Distribution ratios at multiples of u_mp",
        "lead": "Dimensionless ratios often eliminate all gas and temperature data.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Ratio at $u=2u_{mp}$ and $u=u_{mp}$",
            "steps": [
              {
                "label": "Use $F(u)\\propto u^2e^{-u^2/u_{mp}^2}$",
                "tex": "\\frac{F(2u_{mp})}{F(u_{mp})}=4e^{-3}"
              },
              {
                "label": "Evaluate",
                "tex": "4e^{-3}=0.1991"
              }
            ],
            "result": "F(2u_{mp})/F(u_{mp})=0.199"
          },
          {
            "type": "paragraph",
            "text": "The source’s examples comparing equal narrow intervals at $u_{mp}$ and $2u_{mp}$ are therefore universal. If interval widths differ, include their ratio."
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — same value at two speeds",
            "text": "When $F(u_1)=F(u_2)$, cancel the common prefactor and solve $u_1^2e^{-Mu_1^2/(2RT)}=u_2^2e^{-Mu_2^2/(2RT)}$. Taking logarithms gives $T=M(u_2^2-u_1^2)/[4R\\ln(u_2/u_1)]$."
          }
        ]
      },
      {
        "id": "energy",
        "eyebrow": "Energy representation",
        "title": "Maxwell distribution of translational kinetic energy",
        "lead": "Transform the speed variable using $E=mu^2/2$. Unlike the speed distribution, the energy distribution is independent of molecular mass at a fixed temperature.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Energy distribution",
            "steps": [
              {
                "label": "Variable change",
                "tex": "E=\\frac12mu^2,\\qquad du=\\frac{dE}{\\sqrt{2mE}}"
              },
              {
                "label": "Substitute into $F(u)du$",
                "tex": "G(E)dE=\\frac{2}{\\sqrt\\pi}\\frac{\\sqrt E}{(kT)^{3/2}}e^{-E/kT}dE"
              },
              {
                "label": "Most probable energy",
                "tex": "\\frac{d}{dE}[\\sqrt E e^{-E/kT}]=0\\Rightarrow E_{mp}=\\frac12kT"
              },
              {
                "label": "Mean energy",
                "tex": "\\langle E\\rangle=\\frac32kT"
              }
            ],
            "result": "G(E)=\\frac{2}{\\sqrt\\pi}(kT)^{-3/2}\\sqrt E e^{-E/kT}"
          },
          {
            "type": "visual",
            "id": "energy-distribution",
            "title": "Translational-energy distribution",
            "caption": "The most probable energy is $kT/2$, while the mean is $3kT/2$ because the distribution has a long high-energy tail."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — threshold fractions and reaction kinetics",
            "text": "The fraction above an activation threshold is the area $\\int_{E_a}^{\\infty}G(E)dE$. For large $E_a/kT$, the dominant dependence is exponential, approximately $e^{-E_a/kT}$ multiplied by a slower algebraic factor. This is the microscopic origin of the strong temperature sensitivity represented macroscopically by the Arrhenius equation. The exact rate also depends on collision geometry and the distribution of relative translational energy."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Speed distribution versus energy distribution",
            "text": "Transforming from speed to translational energy requires a Jacobian because equal energy intervals do not correspond to equal speed intervals. The resulting energy distribution depends only on temperature, not molecular mass. Therefore different gases at the same temperature have identical translational-energy distributions despite different speed distributions. The most probable translational energy is $kT/2$, whereas the mean is $3kT/2$; the distribution’s long high-energy tail raises the mean above the mode. Reaction-rate theory often focuses on this tail, but a simple fraction above activation energy is not by itself a complete rate constant because collision frequency, orientation and quantum transmission also matter."
          }
        ]
      },
      {
        "id": "integrals",
        "eyebrow": "Mathematical appendix inside the topic",
        "title": "Gaussian and gamma integrals used repeatedly",
        "lead": "The source lists several standard integrals. They are collected here at the point where they are used, rather than placed in a detached appendix.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Useful integrals",
            "equations": [
              {
                "tex": "\\int_{-\\infty}^{\\infty}e^{-ax^2}dx=\\sqrt{\\frac\\pi a}",
                "note": "$a>0$"
              },
              {
                "tex": "\\int_0^\\infty x^ne^{-ax^2}dx=\\frac12a^{-(n+1)/2}\\Gamma\\left(\\frac{n+1}{2}\\right)",
                "note": "Gaussian moments"
              },
              {
                "tex": "\\int_0^\\infty E^{s-1}e^{-E/(kT)}dE=(kT)^s\\Gamma(s)",
                "note": "energy moments"
              },
              {
                "tex": "\\Gamma(1/2)=\\sqrt\\pi,\\quad\\Gamma(s+1)=s\\Gamma(s)",
                "note": "recurrence"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "number": 8,
    "title": "Molecular collisions, mean free path and Knudsen effusion",
    "subtitle": "Collision diameter, single-molecule collision number, unlike-gas relative speed, total collision frequency, mean free path, wall flux, pressure decay, energy thresholds and Knudsen vapour-pressure measurement.",
    "sourcePages": "pages 66–80",
    "kind": "theory",
    "sections": [
      {
        "id": "diameter",
        "eyebrow": "Collision geometry",
        "title": "Collision diameter and cross section",
        "lead": "In the hard-sphere model, two molecules collide when their centres approach within a specified collision diameter.",
        "blocks": [
          {
            "type": "visual",
            "id": "collision-cylinder",
            "title": "Swept collision cylinder",
            "caption": "A moving molecule sweeps out a cylinder of cross-sectional area $\\pi\\sigma^2$ in one second."
          },
          {
            "type": "equationSet",
            "title": "Collision dimensions",
            "equations": [
              {
                "tex": "\\sigma_{AA}=d_A",
                "note": "like hard spheres"
              },
              {
                "tex": "\\sigma_{AB}=\\frac{d_A+d_B}{2}",
                "note": "unlike hard spheres"
              },
              {
                "tex": "q_{AB}=\\pi\\sigma_{AB}^2",
                "note": "collision cross section"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — effective cross section",
            "text": "Real intermolecular potentials are not hard walls, so the collision cross section depends on relative speed and on what event counts as a collision. Transport cross sections weight deflection angle, while reactive cross sections count only trajectories leading to reaction. The hard-sphere diameter used in elementary kinetic theory is an effective parameter that reproduces an observed transport or collision rate."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Transport diameter and experimental dependence",
            "text": "A molecule has no sharp classical edge. Collision diameter is an effective distance inferred from a chosen property such as viscosity, diffusion, virial coefficients or scattering. Different experiments can yield slightly different diameters because they weight the intermolecular potential differently. At higher relative speed, particles penetrate farther into the repulsive potential before deflecting, so the effective cross section may change with temperature. The hard-sphere model treats diameter as constant to preserve simple formulas. This is accurate enough for trend questions but should not be mistaken for a literal geometric measurement. The distinction also explains why van der Waals covolume, kinetic collision diameter and crystallographic size are related but not identical quantities."
          }
        ]
      },
      {
        "id": "single-collision",
        "eyebrow": "Pure gas",
        "title": "Collision number of one molecule",
        "lead": "If all target molecules were stationary, a molecule of speed $u$ would encounter every centre in a swept volume $\\pi\\sigma^2u$ per second. Motion of the targets increases the relative speed.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Collision frequency per molecule",
            "steps": [
              {
                "label": "Number density",
                "tex": "n_N=N/V"
              },
              {
                "label": "Stationary-target estimate",
                "tex": "z_1=\\pi\\sigma^2\\bar u\\,n_N"
              },
              {
                "label": "Mean relative speed for identical Maxwell particles",
                "tex": "\\bar u_{rel}=\\sqrt2\\,\\bar u"
              },
              {
                "label": "Corrected collision number",
                "tex": "z_1=\\sqrt2\\pi\\sigma^2\\bar u\\,n_N"
              }
            ],
            "result": "z_1=\\sqrt2\\pi\\sigma^2\\bar u\\,n_N"
          },
          {
            "type": "paragraph",
            "text": "Using $n_N=P/(kT)$ and $\\bar u=\\sqrt{8kT/(\\pi m)}$ shows how collision frequency depends on pressure, temperature, molecular mass and size."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — why the factor √2 appears",
            "text": "The relative velocity is $\\mathbf u_1-\\mathbf u_2$. For identical independent Maxwell distributions, each component of the relative velocity has twice the variance of one molecular component, equivalent to a Maxwell distribution at twice the temperature or with reduced mass $m/2$. Therefore the mean relative speed is $\\sqrt2$ times the mean speed of either species."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Relative motion transformation",
            "text": "A two-particle collision can be separated into centre-of-mass motion and relative motion. The centre of mass moves uniformly when external forces are absent, while the relative coordinate behaves like one particle of reduced mass moving in the intermolecular potential. This transformation converts a complicated two-body problem into an effective one-body scattering problem. For identical masses, the reduced mass is half the individual mass and the relative-speed distribution is broader than the single-particle distribution. The same reduced-mass concept appears in rotational spectra, vibrations and orbital mechanics. In gas kinetics it determines unlike collision frequencies and the energy available in a collision, so arithmetic averaging of molecular masses is generally incorrect."
          }
        ]
      },
      {
        "id": "mixture-collisions",
        "eyebrow": "Gas mixtures",
        "title": "Unlike collision frequencies and reduced mass",
        "lead": "For components A and B, use the unlike collision diameter and the mean relative speed based on reduced mass.",
        "blocks": [
          {
            "type": "visual",
            "id": "collision-mixture",
            "title": "A–B collision geometry",
            "caption": "The effective collision radius is the sum of molecular radii, and relative motion is controlled by $\\mu_{AB}$."
          },
          {
            "type": "equationSet",
            "title": "Mixture collision expressions",
            "equations": [
              {
                "tex": "\\mu_{AB}=\\frac{M_AM_B}{M_A+M_B}",
                "note": "molar reduced mass"
              },
              {
                "tex": "\\bar u_{rel,AB}=\\sqrt{\\frac{8RT}{\\pi\\mu_{AB}}}",
                "note": "mean relative speed"
              },
              {
                "tex": "z_{A\\to B}=\\pi\\sigma_{AB}^2\\bar u_{rel,AB}\\,n_B",
                "note": "B collisions suffered by one A per second"
              },
              {
                "tex": "Z_{AB}=n_An_B\\pi\\sigma_{AB}^2\\bar u_{rel,AB}",
                "note": "A–B collisions per volume per time"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "For like collisions, the total number per unit volume per unit time is $Z_{AA}=\\tfrac12n_Az_{A\\to A}$ because counting from every A molecule counts each A–A collision twice. For unlike A–B collisions there is no factor $1/2$."
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Collision number versus collision frequency",
            "text": "Terminology varies among books. This chapter uses $z_1$ for collisions suffered by one molecule per unit time and $Z$ for collision events per unit volume per unit time. Always inspect the definition before applying a factor of two."
          }
        ]
      },
      {
        "id": "mean-free-path",
        "eyebrow": "Transport length scale",
        "title": "Mean free path",
        "lead": "The mean free path is the average distance travelled between successive collisions.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Pure-gas mean free path",
            "steps": [
              {
                "label": "Distance per time",
                "tex": "\\lambda=\\frac{\\bar u}{z_1}"
              },
              {
                "label": "Substitute collision number",
                "tex": "\\lambda=\\frac1{\\sqrt2\\pi\\sigma^2n_N}"
              },
              {
                "label": "Use ideal number density",
                "tex": "n_N=\\frac{P}{kT}"
              }
            ],
            "result": "\\lambda=\\frac{kT}{\\sqrt2\\pi\\sigma^2P}"
          },
          {
            "type": "visual",
            "id": "mean-free-path",
            "title": "Random flights between collisions",
            "caption": "A molecule travels straight between collision points, while the sequence of directions is random."
          },
          {
            "type": "bullets",
            "items": [
              "$\\lambda$ increases when molecular diameter or pressure decreases.",
              "At constant pressure, $\\lambda\\propto T$ in the hard-sphere ideal approximation.",
              "At constant volume and amount, number density is fixed, so $\\lambda$ is approximately independent of temperature if $\\sigma$ is constant."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — Knudsen number",
            "text": "The Knudsen number $\\mathrm{Kn}=\\lambda/L$ compares mean free path with an apparatus length scale. For $\\mathrm{Kn}\\ll1$, continuum fluid mechanics applies. For $\\mathrm{Kn}\\gtrsim1$, molecular flow and wall interactions dominate. Effusion through a pinhole and the Knudsen vapour-pressure method require the opening dimensions to be small enough that intermolecular collisions inside the aperture are rare."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Mean free path and transport coefficients",
            "text": "Mean free path connects molecular motion to viscosity, thermal conductivity and diffusion. A rough kinetic estimate gives viscosity of order one third density times mean speed times mean free path. Since mean free path is inversely proportional to density, gas viscosity becomes nearly independent of pressure over a broad dilute range, an initially surprising result. Thermal conductivity and self-diffusion follow similar random-flight reasoning. At very low pressure, mean free path becomes comparable with apparatus dimensions and wall collisions dominate; at high pressure, correlated collisions invalidate the dilute hard-sphere formula. This scale comparison is why Knudsen number, rather than pressure alone, determines whether continuum equations are appropriate."
          }
        ]
      },
      {
        "id": "wall-flux",
        "eyebrow": "Boundary collisions",
        "title": "Molecular flux to a wall",
        "lead": "Only half the molecules move toward a chosen wall, and their average normal component supplies another factor of one half.",
        "blocks": [
          {
            "type": "visual",
            "id": "wall-flux",
            "title": "Flux onto a plane",
            "caption": "Integrating positive normal velocity components gives the standard $1/4$ result."
          },
          {
            "type": "derivation",
            "title": "Wall-collision flux",
            "steps": [
              {
                "label": "Number density",
                "tex": "n_N=N/V"
              },
              {
                "label": "Angular average",
                "text": "The isotropic velocity distribution yields an average positive normal contribution $\\bar u/4$."
              },
              {
                "label": "Flux",
                "tex": "J_N=\\frac14n_N\\bar u"
              },
              {
                "label": "Molar flux",
                "tex": "J_n=\\frac{P}{\\sqrt{2\\pi MRT}}"
              }
            ],
            "result": "J_N=\\frac14n_N\\bar u"
          },
          {
            "type": "paragraph",
            "text": "Multiplying by aperture area gives the ideal effusion rate used in Graham’s law. Multiplying by momentum transfer instead gives pressure."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Residence time and adsorption at walls",
            "text": "The ideal wall-flux formula counts arrivals, but what happens afterward depends on surface physics. Molecules may reflect specularly, scatter diffusely, adsorb temporarily, react, or exchange energy with the wall. The accommodation coefficient measures how closely reflected molecules approach the wall’s thermal distribution. In vacuum technology, outgassing and desorption can dominate pressure long after bulk gas has been pumped away. In catalytic chemistry, wall-arrival flux provides an upper bound on heterogeneous reaction rate. Standard kinetic-theory questions assume perfectly elastic wall collisions or free transmission through a hole, yet real surfaces add an entire layer of kinetics beyond the gas-phase calculation."
          }
        ]
      },
      {
        "id": "pressure-decay",
        "eyebrow": "Effusion dynamics",
        "title": "Pressure decay from a rigid isothermal vessel",
        "lead": "As gas leaves, pressure falls and the effusion rate slows. The exact solution is exponential.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Molecular-flow pressure decay",
            "steps": [
              {
                "label": "Molar rate",
                "tex": "-\\frac{dn}{dt}=A\\frac{P}{\\sqrt{2\\pi MRT}}"
              },
              {
                "label": "Use $n=PV/(RT)$",
                "tex": "-\\frac{V}{RT}\\frac{dP}{dt}=A\\frac{P}{\\sqrt{2\\pi MRT}}"
              },
              {
                "label": "Separate variables",
                "tex": "\\frac{dP}{P}=-\\frac{A}{V}\\sqrt{\\frac{RT}{2\\pi M}}dt"
              },
              {
                "label": "Integrate",
                "tex": "P=P_0e^{-t/\\tau}"
              }
            ],
            "result": "\\tau=\\frac{V}{A}\\sqrt{\\frac{2\\pi M}{RT}}"
          },
          {
            "type": "visual",
            "id": "effusion-decay",
            "title": "Pure-gas pressure decay",
            "caption": "The time to reach a fraction $P/P_0$ is $t=\\tau\\ln(P_0/P)$."
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — scaling the decay time",
            "text": "At fixed vessel volume, $\\tau\\propto\\sqrt{M/T}/A$. Doubling hole diameter multiplies area by four and divides the time constant by four. Increasing molecular mass by a factor of nine triples the time constant."
          }
        ]
      },
      {
        "id": "energy-threshold",
        "eyebrow": "Energy tail",
        "title": "Fraction of molecules above a specified energy",
        "lead": "The source uses the translational-energy distribution to estimate the number of molecules in a narrow energy range and above a high threshold.",
        "blocks": [
          {
            "type": "formula",
            "tex": "G(E)=\\frac{2}{\\sqrt\\pi}\\frac{\\sqrt E}{(kT)^{3/2}}e^{-E/kT}"
          },
          {
            "type": "paragraph",
            "text": "For a narrow interval $E\\pm\\Delta E$, the fraction is approximately $G(E)(2\\Delta E)$. For an exact tail probability, integrate from the threshold to infinity. When the threshold is many times $kT$, the dominant factor is $e^{-E/kT}$, but the square-root prefactor must be retained for quantitative work."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — relative collision energy",
            "text": "Chemical reactions depend on the relative translational energy of a colliding pair, not the laboratory kinetic energy of one molecule. The relative motion behaves like one particle of reduced mass $\\mu$ with Maxwell-distributed relative speed. This produces a relative-energy distribution of the same mathematical form and justifies the reduced-mass treatment in collision theory."
          }
        ]
      },
      {
        "id": "knudsen",
        "eyebrow": "Very low vapour pressure",
        "title": "Knudsen effusion method",
        "lead": "A solid or low-volatility liquid is held at known temperature in a cell with a small calibrated orifice. Its equilibrium vapour escapes into high vacuum, and the mass-loss rate reveals the vapour pressure.",
        "blocks": [
          {
            "type": "visual",
            "id": "knudsen-cell",
            "title": "Knudsen vapour-pressure cell",
            "caption": "A transmission coefficient corrects for finite aperture thickness and molecules reflected back into the cell."
          },
          {
            "type": "derivation",
            "title": "Mass-loss relation",
            "steps": [
              {
                "label": "Molar effusion rate",
                "tex": "\\dot n=K A\\frac{P}{\\sqrt{2\\pi MRT}}"
              },
              {
                "label": "Mass rate",
                "tex": "-\\dot m=M\\dot n=KAP\\sqrt{\\frac{M}{2\\pi RT}}"
              },
              {
                "label": "Solve for vapour pressure",
                "tex": "P=\\frac{-\\dot m}{KA}\\sqrt{\\frac{2\\pi RT}{M}}"
              }
            ],
            "result": "P=\\frac{-dm/dt}{KA}\\sqrt{\\frac{2\\pi RT}{M}}"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — Clausing transmission factor",
            "text": "A hole of non-zero thickness behaves like a short tube. Some molecules strike the wall and return to the cell, so the transmitted fraction $K$ is less than one and depends mainly on length-to-diameter ratio. Accurate Knudsen measurements require molecular flow, known temperature, negligible back pressure and a sample that reaches vapour equilibrium without decomposition."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Effusion measurement uncertainty",
            "text": "A reliable Knudsen vapour-pressure measurement requires the cell to reach a steady temperature and equilibrium vapour composition. The orifice must be small enough that escape does not significantly lower the internal pressure below saturation, yet large enough to produce measurable mass loss. Decomposition, association or multiple vapour species complicate the inferred molar mass and pressure. The transmission factor must account for finite channel geometry, and balance drift can be significant for extremely low rates. These experimental constraints show why the elegant effusion formula is only the core of the method. They also provide a useful checklist for deciding whether an idealised problem’s assumptions are internally consistent."
          }
        ]
      }
    ]
  },
  {
    "number": 9,
    "title": "Real gases: origin of non-ideality and van der Waals model",
    "subtitle": "Intermolecular potentials, compressibility factor, attraction and excluded-volume corrections, van der Waals constants, and physical interpretation of the equation.",
    "sourcePages": "pages 81–90",
    "kind": "theory",
    "sections": [
      {
        "id": "ideal-limit",
        "eyebrow": "Departure from ideality",
        "title": "Why real gases deviate",
        "lead": "The ideal-gas equation assumes point particles and no intermolecular forces. Both assumptions fail when molecules are sufficiently close.",
        "blocks": [
          {
            "type": "paragraph",
            "text": "At low pressure the mean separation is large, so the finite molecular size and interaction energy are negligible compared with the available volume and thermal energy. Increasing pressure brings molecules closer. Attractions reduce the measured pressure below the ideal prediction, while short-range repulsion and excluded volume raise it above the ideal prediction."
          },
          {
            "type": "equationSet",
            "title": "Compressibility factor",
            "equations": [
              {
                "tex": "Z=\\frac{PV_m}{RT}",
                "note": "definition for one mole"
              },
              {
                "tex": "Z=1",
                "note": "ideal-gas limit"
              },
              {
                "tex": "Z<1",
                "note": "attractive effects dominate"
              },
              {
                "tex": "Z>1",
                "note": "repulsive and excluded-volume effects dominate"
              }
            ]
          },
          {
            "type": "visual",
            "id": "z-curves",
            "title": "Compressibility-factor families",
            "caption": "Most gases first dip below unity and then rise above it. Hydrogen and helium can remain above unity over a broad room-temperature pressure range because their attractions are unusually weak."
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Source correction — Z is not a force meter",
            "text": "A value $Z<1$ signals that the actual molar volume is smaller than the ideal prediction at the same $P,T$, usually because attractions dominate. It does not mean repulsions are absent. Likewise $Z>1$ does not mean attractions vanish; it means the net equation-of-state departure is positive."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Perturbative view of nonideality",
            "text": "At sufficiently low density, interactions can be treated as corrections to ideal behaviour rather than a completely different state. The virial expansion organises these corrections by powers of density. Pair interactions determine the second virial coefficient, three-body correlations enter the third, and so on. This hierarchy explains why all gases approach ideality as density tends to zero, even if their attractions are strong at ordinary liquid density. It also shows why lowering pressure is often more effective than raising temperature when seeking ideal behaviour: density directly controls encounter probability. Near condensation or the critical point, however, no short low-density expansion can represent the large correlated fluctuations, so a different phase-equilibrium treatment is required."
          }
        ]
      },
      {
        "id": "potential",
        "eyebrow": "Molecular basis",
        "title": "Intermolecular potential and force",
        "lead": "A realistic pair potential has a shallow attractive well at intermediate separation and a very steep repulsive wall at short separation.",
        "blocks": [
          {
            "type": "visual",
            "id": "lennard-jones",
            "title": "Lennard–Jones-type pair potential",
            "caption": "The potential minimum defines a characteristic separation and well depth; the force is $F(r)=-dU/dr$."
          },
          {
            "type": "equationSet",
            "title": "Lennard–Jones 12–6 model",
            "equations": [
              {
                "tex": "U(r)=4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12}-\\left(\\frac{\\sigma}{r}\\right)^6\\right]",
                "note": "model pair potential"
              },
              {
                "tex": "r_{min}=2^{1/6}\\sigma",
                "note": "minimum-potential separation"
              },
              {
                "tex": "U(r_{min})=-\\varepsilon",
                "note": "well depth"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "The attractive $r^{-6}$ term represents London dispersion in a simplified form. The $r^{-12}$ term is a convenient steep repulsion, not a fundamental power law. Polar molecules can also possess orientation and induction contributions."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — corresponding molecular scales",
            "text": "The parameters $\\varepsilon$ and $\\sigma$ set natural energy and length scales. Reduced quantities such as $T^*=kT/\\varepsilon$ and $\\rho^*=N\\sigma^3/V$ allow substances with similar pair potentials to display approximately corresponding behaviour. This molecular idea underlies the macroscopic law of corresponding states developed later."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Attraction types and molecular shape",
            "text": "Dispersion forces occur between all molecules and strengthen with polarizability. Permanent dipoles add orientation-dependent interactions, and polar molecules can induce dipoles in neighbours. Hydrogen bonding is a strong, directional special case. Molecular shape affects how closely surfaces can approach and how many orientations are favourable, so two substances with similar molar masses may have very different critical temperatures and van der Waals constants. A spherical pair potential is therefore an average model. This molecular diversity explains why one universal two-parameter equation cannot fit every gas. It also motivates corresponding-states corrections based on acentric factor or polarity rather than critical constants alone."
          }
        ]
      },
      {
        "id": "pressure-correction",
        "eyebrow": "van der Waals equation",
        "title": "Correction for attractions",
        "lead": "A molecule approaching the wall is pulled backward by neighbours, reducing the momentum transferred to the wall. Therefore the observed pressure is smaller than the pressure that would exist without attractions.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Mean-field attraction correction",
            "steps": [
              {
                "label": "Number-density dependence",
                "text": "The attractive pull on one molecule is proportional to number density, and the number of molecules striking the wall is also proportional to number density."
              },
              {
                "label": "Pressure deficit",
                "tex": "P_{ideal-like}-P_{obs}\\propto\\left(\\frac{n}{V}\\right)^2"
              },
              {
                "label": "Introduce $a$",
                "tex": "P_{ideal-like}=P+\\frac{an^2}{V^2}"
              }
            ],
            "result": "P_{corr}=P+\\frac{an^2}{V^2}"
          },
          {
            "type": "paragraph",
            "text": "The constant $a$ measures the integrated strength of attractive interactions in this mean-field model. More polarizable or strongly interacting molecules generally have larger $a$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — microscopic meaning of a",
            "text": "For a simple spherical fluid, mean-field theory relates $a$ to the attractive part of the pair potential through an integral of the form $a\\sim-2\\pi N_A^2\\int_{\\sigma}^{\\infty}U_{attr}(r)r^2dr$. This is not needed for routine calculations, but it explains why $a$ has units of pressure times molar-volume squared and why it increases with the depth and range of attraction."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Cohesive pressure and energy density",
            "text": "The van der Waals attraction correction $a/V_m^2$ has the dimensions of pressure and is often called a cohesive pressure. It represents the reduction in mechanical pressure caused by attractions in the mean-field model. The same parameter determines the volume dependence of internal energy. Because both effects arise from pair attraction, pressure and caloric properties are linked. Real-fluid cohesive energy density is related to the energy required to separate molecules and underlies solubility-parameter concepts used in liquids and polymers. Although JEE calculations use the algebraic correction, remembering its energy-density meaning helps check units and signs: expansion weakens attraction, raises potential energy and therefore requires energy or causes cooling under appropriate constraints."
          }
        ]
      },
      {
        "id": "volume-correction",
        "eyebrow": "van der Waals equation",
        "title": "Correction for finite molecular size",
        "lead": "Molecular centres cannot explore the entire geometric container volume because each molecule excludes a region around every other molecule.",
        "blocks": [
          {
            "type": "visual",
            "id": "vdw-corrections",
            "title": "Pressure and volume corrections",
            "caption": "The model replaces $P$ by $P+a n^2/V^2$ and $V$ by $V-nb$."
          },
          {
            "type": "derivation",
            "title": "Excluded volume for hard spheres",
            "steps": [
              {
                "label": "One pair",
                "text": "For hard spheres of diameter $\\sigma$, the centre of one molecule cannot enter a sphere of radius $\\sigma$ around another."
              },
              {
                "label": "Pair exclusion",
                "tex": "v_{ex,pair}=\\frac43\\pi\\sigma^3"
              },
              {
                "label": "Share between two molecules",
                "tex": "v_{ex,molecule}=\\frac12v_{ex,pair}=4\\left(\\frac43\\pi(\\sigma/2)^3\\right)"
              },
              {
                "label": "Molar covolume",
                "tex": "b\\approx4N_Av_{molecule}"
              }
            ],
            "result": "V_{free}=V-nb"
          },
          {
            "type": "paragraph",
            "text": "Thus $b$ is approximately four times the actual molar volume of hard spherical molecules. It measures excluded volume, not simply the geometrical molecular volume."
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Limit of the model",
            "text": "The parameter $b$ is treated as constant, although an effective repulsive diameter can depend on temperature. The equation also treats attractions through a uniform mean field and therefore cannot reproduce all real-gas data quantitatively."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Excluded volume and packing",
            "text": "The factor four between hard-sphere molecular volume and van der Waals covolume arises from pair counting in the dilute limit. At liquid-like density, excluded regions overlap and packing geometry becomes important, so a constant $b$ cannot describe the full repulsive equation of state. Hard-sphere fluids themselves show nontrivial behaviour despite having no attractions; their pressure exceeds ideal because available configurations shrink as packing fraction rises. Modern repulsive models use more accurate expressions such as the Carnahan–Starling equation. This demonstrates that ‘repulsion’ in an equation of state is partly entropic: even without a repulsive potential energy except at overlap, forbidden configurations raise pressure by reducing entropy."
          }
        ]
      },
      {
        "id": "vdw-equation",
        "eyebrow": "Equation of state",
        "title": "The complete van der Waals equation",
        "lead": "Combining the two corrections with the ideal equation produces the simplest cubic equation of state.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Equivalent forms",
            "equations": [
              {
                "tex": "\\left(P+\\frac{an^2}{V^2}\\right)(V-nb)=nRT",
                "note": "for $n$ moles"
              },
              {
                "tex": "\\left(P+\\frac{a}{V_m^2}\\right)(V_m-b)=RT",
                "note": "molar form"
              },
              {
                "tex": "P=\\frac{RT}{V_m-b}-\\frac{a}{V_m^2}",
                "note": "explicit pressure form"
              }
            ]
          },
          {
            "type": "table",
            "headers": [
              "Constant",
              "Dimensions",
              "Dominant physical meaning"
            ],
            "rows": [
              [
                "$a$",
                "$\\mathrm{pressure\\,volume^2\\,mol^{-2}}$",
                "cohesive attraction"
              ],
              [
                "$b$",
                "$\\mathrm{volume\\,mol^{-1}}$",
                "excluded molar volume"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — limiting checks",
            "text": "As $P\\to0$ or $V_m\\to\\infty$, both $a/V_m^2$ and $b/V_m$ vanish, so the equation must reduce to $PV_m=RT$. As $V_m\\to b^+$, the repulsive term diverges. These limits quickly expose algebraic sign errors."
          }
        ]
      },
      {
        "id": "internal-pressure",
        "eyebrow": "Thermodynamic interpretation",
        "title": "Internal pressure and Joule expansion",
        "lead": "Attractions influence not only pressure but also internal energy. For a van der Waals gas, expansion separates molecules and raises potential energy, so internal energy depends on volume as well as temperature.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Useful thermodynamic relations",
            "equations": [
              {
                "tex": "\\left(\\frac{\\partial U}{\\partial V}\\right)_T=T\\left(\\frac{\\partial P}{\\partial T}\\right)_V-P",
                "note": "general identity"
              },
              {
                "tex": "\\left(\\frac{\\partial U}{\\partial V}\\right)_T=\\frac{a}{V_m^2}",
                "note": "van der Waals gas"
              },
              {
                "tex": "dU=C_VdT+\\frac{a}{V_m^2}dV_m",
                "note": "one-mole differential"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — free expansion",
            "text": "An ideal gas undergoes no temperature change in an adiabatic free expansion because $U=U(T)$ and $\\Delta U=0$. A real gas may cool during free expansion because part of its kinetic energy becomes intermolecular potential energy. The Joule effect in free expansion must not be confused with the Joule–Thomson effect in steady throttling, where enthalpy rather than internal energy is constant."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Joule coefficient versus Joule–Thomson coefficient",
            "text": "Two expansion coefficients are often confused. The Joule coefficient describes temperature change with volume at constant internal energy, relevant to free expansion. The Joule–Thomson coefficient describes temperature change with pressure at constant enthalpy, relevant to steady throttling. An ideal gas gives zero for both because its internal energy and enthalpy depend only on temperature. A real gas can show different signs for the two effects under the same initial conditions because the constraints are different. Deriving each from the appropriate thermodynamic differential prevents sign memorisation errors. In experiments, free expansion is difficult to measure accurately because temperature changes are small, whereas throttling is central to refrigeration and liquefaction."
          }
        ]
      }
    ]
  },
  {
    "number": 10,
    "title": "Real-gas analysis: virial form, Boyle temperature and cubic roots",
    "subtitle": "Pressure-region analysis of van der Waals gases, virial coefficients, Boyle temperature, limitations, alternative equations of state, and numerical solution of cubic equations.",
    "sourcePages": "pages 91–103",
    "kind": "theory",
    "sections": [
      {
        "id": "pressure-regions",
        "eyebrow": "Asymptotic analysis",
        "title": "Low, moderate and high pressure",
        "lead": "The two van der Waals corrections do not dominate equally in every region. Exam questions often become simple after identifying the correct limiting regime.",
        "blocks": [
          {
            "type": "visual",
            "id": "vdw-pressure-regions",
            "title": "Dominant corrections across pressure",
            "caption": "At low density both corrections vanish; at moderate density attractions often dominate; at high density excluded volume and repulsion dominate."
          },
          {
            "type": "bullets",
            "items": [
              "Very low pressure: $V_m$ is large, so $a/V_m^2$ and $b/V_m$ are both negligible and $Z\\to1$.",
              "Moderate pressure: attraction can make $Z<1$ for most ordinary gases.",
              "High pressure: finite-size repulsion makes $Z>1$ and eventually dominates for every stable fluid.",
              "High temperature weakens the relative importance of attractions because thermal energy is large; repulsive effects appear at lower reduced density than condensation effects."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — crossover pressure",
            "text": "The point where a real-gas $Z(P)$ curve crosses $Z=1$ is sometimes called an ideal-behaviour point, but the gas is not ideal there. Attractive and repulsive departures merely cancel in the measured product $PV_m$. Other properties, such as internal energy and heat capacity, can still differ from ideal values."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Reduced-density interpretation",
            "text": "Pressure alone does not uniquely determine nonideality; temperature and molecular size matter. A pressure that is ‘high’ for a gas near its critical temperature may be modest for a hot gas with weak attractions. Reduced pressure and reduced temperature provide a better comparison. At equal reduced conditions, simple fluids often show similar compressibility. Along an isotherm, increasing pressure usually increases density, but near phase coexistence a large density change can occur at almost constant pressure. Therefore pressure-region rules are asymptotic guides, not strict boundaries. When data for $a$, $b$, $T_c$ or $P_c$ are supplied, form dimensionless ratios before deciding which correction can be neglected."
          }
        ]
      },
      {
        "id": "virial",
        "eyebrow": "Systematic low-density expansion",
        "title": "Virial equation of state",
        "lead": "Real-gas behaviour can be represented as a series in molar density or pressure. Virial coefficients are temperature-dependent and encode interactions more flexibly than fixed van der Waals constants.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Two common virial forms",
            "equations": [
              {
                "tex": "Z=1+\\frac{B(T)}{V_m}+\\frac{C(T)}{V_m^2}+\\cdots",
                "note": "density virial expansion"
              },
              {
                "tex": "Z=1+B'(T)P+C'(T)P^2+\\cdots",
                "note": "pressure virial expansion"
              }
            ]
          },
          {
            "type": "derivation",
            "title": "Second virial coefficient from van der Waals equation",
            "steps": [
              {
                "label": "Write $Z$",
                "tex": "Z=\\frac{V_m}{V_m-b}-\\frac{a}{RTV_m}"
              },
              {
                "label": "Expand",
                "tex": "\\frac{V_m}{V_m-b}=\\frac1{1-b/V_m}=1+\\frac{b}{V_m}+\\frac{b^2}{V_m^2}+\\cdots"
              },
              {
                "label": "Collect $1/V_m$",
                "tex": "Z=1+\\frac{b-a/(RT)}{V_m}+\\frac{b^2}{V_m^2}+\\cdots"
              }
            ],
            "result": "B(T)=b-\\frac{a}{RT}"
          },
          {
            "type": "visual",
            "id": "virial-boyle",
            "title": "Second virial coefficient and Boyle temperature",
            "caption": "$B(T)$ changes sign at the Boyle temperature in the van der Waals model."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — statistical-mechanical B(T)",
            "text": "For a spherical pair potential $U(r)$, the exact classical second virial coefficient is $B(T)=-2\\pi N_A\\int_0^\\infty[\\exp(-U(r)/kT)-1]r^2dr$. The repulsive region contributes positively and the attractive region negatively. This equation gives a precise molecular interpretation to the sign of $B(T)$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Virial coefficients as experimental fingerprints",
            "text": "Second virial coefficients are obtained from low-pressure compressibility or acoustic measurements and provide sensitive information about pair interactions. A negative value indicates that attractive configurations dominate the configurational integral; a positive value indicates repulsive exclusion dominates. The temperature where it crosses zero is experimentally defined, whereas the van der Waals formula gives only a model estimate. Third and higher coefficients contain many-body geometry and cannot generally be predicted from the second alone. Virial equations are excellent for gases at low to moderate density but converge poorly near condensation. This makes them complementary to cubic equations: virial forms are systematic near zero density, while cubic forms are designed to extend into phase-equilibrium regions."
          }
        ]
      },
      {
        "id": "boyle-temperature",
        "eyebrow": "Near-ideal behaviour",
        "title": "Boyle temperature",
        "lead": "At the Boyle temperature the initial low-pressure slope of $Z$ versus pressure vanishes because the second virial coefficient is zero.",
        "blocks": [
          {
            "type": "derivation",
            "title": "van der Waals Boyle temperature",
            "steps": [
              {
                "label": "Set second virial coefficient to zero",
                "tex": "B(T_B)=b-\\frac{a}{RT_B}=0"
              },
              {
                "label": "Solve",
                "tex": "T_B=\\frac{a}{Rb}"
              }
            ],
            "result": "T_B=\\frac{a}{Rb}"
          },
          {
            "type": "paragraph",
            "text": "At $T_B$, $Z=1+O(P^2)$ near zero pressure. This does not guarantee ideal behaviour at finite pressure because higher virial terms remain."
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — local versus global ideality",
            "text": "A gas at the Boyle temperature is most nearly ideal only in the low-pressure limit. A single crossing of $Z=1$ at a larger pressure is not the Boyle condition. Check whether the question asks for zero initial slope, exact $Z=1$, or minimum deviation over a range."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Boyle point and inversion point are different",
            "text": "The Boyle temperature makes the second virial coefficient vanish and removes the first low-pressure deviation of $Z$ from one. The inversion temperature makes the Joule–Thomson coefficient vanish and separates throttling cooling from heating. For a low-pressure van der Waals gas, the maximum inversion temperature is twice the Boyle temperature, but this relation is model-specific. Neither temperature means intermolecular forces disappear. Instead, different combinations of attractive and repulsive effects cancel in different measured properties. Questions that mention ‘no temperature change on expansion’ refer to an inversion condition, whereas ‘initially ideal compressibility’ refers to a Boyle condition. Keeping the physical experiment attached to each definition prevents substitution of the wrong formula."
          }
        ]
      },
      {
        "id": "critical-constants-preview",
        "eyebrow": "Parameter estimation",
        "title": "Estimating a and b from critical data",
        "lead": "The van der Waals constants can be obtained from the model critical constants derived fully in Part 12.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "van der Waals critical relations",
            "equations": [
              {
                "tex": "V_c=3b",
                "note": "critical molar volume"
              },
              {
                "tex": "P_c=\\frac{a}{27b^2}",
                "note": "critical pressure"
              },
              {
                "tex": "T_c=\\frac{8a}{27Rb}",
                "note": "critical temperature"
              },
              {
                "tex": "a=\\frac{27R^2T_c^2}{64P_c}",
                "note": "from $T_c,P_c$"
              },
              {
                "tex": "b=\\frac{RT_c}{8P_c}",
                "note": "from $T_c,P_c$"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "warning",
            "title": "Model values are effective",
            "text": "Constants fitted to critical data may not best fit low-pressure virial data, because no two fixed constants can reproduce a real fluid under every condition. Always use the parameter set specified in the problem."
          }
        ]
      },
      {
        "id": "limitations",
        "eyebrow": "Model audit",
        "title": "Limitations of the van der Waals equation",
        "lead": "The equation is historically important and qualitatively powerful, but it is not a universal high-accuracy equation of state.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Limitation",
              "Consequence"
            ],
            "rows": [
              [
                "Constant $a$ and $b$",
                "Cannot represent their effective temperature and density dependence"
              ],
              [
                "Mean-field attraction",
                "Poor near the critical point where density fluctuations are large"
              ],
              [
                "Simple excluded volume",
                "Inaccurate repulsion at high density and for nonspherical molecules"
              ],
              [
                "Classical treatment",
                "Poor for quantum gases such as He and H$_2$ at low temperature"
              ],
              [
                "Cubic loop",
                "Contains mechanically unstable/metastable roots that require phase-equilibrium replacement"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Hydrogen and helium show positive deviation at ordinary temperatures because their Boyle temperatures are low, not because attractions are absent. The equation also predicts the universal critical compressibility $Z_c=3/8$, whereas real substances possess different values, commonly around $0.2$–$0.3$."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Critical exponents and mean-field failure",
            "text": "The van der Waals equation predicts a mathematically smooth critical inflection and classical power-law exponents for how density difference, compressibility and heat capacity behave near the critical point. Experiments show different universal exponents because long-range correlated fluctuations invalidate the assumption that each molecule experiences only an average surrounding density. Remarkably, fluids of very different chemistry share the same critical exponents, a phenomenon called universality. This modern insight does not reduce the educational value of van der Waals theory: the model still explains coexistence, metastability and critical constants qualitatively. It simply marks the boundary between mean-field molecular intuition and fluctuation-dominated critical physics."
          }
        ]
      },
      {
        "id": "alternative-eos",
        "eyebrow": "Beyond van der Waals",
        "title": "Berthelot, Dieterici, Clausius and modern cubic equations",
        "lead": "The source compares several equations that modify the attraction term or the free-volume term. Each attempts to improve a different region of behaviour.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Equation",
              "Representative form",
              "Key idea"
            ],
            "rows": [
              [
                "Berthelot",
                "$P=\\frac{RT}{V_m-b}-\\frac{a}{TV_m^2}$",
                "weaken attraction explicitly with temperature"
              ],
              [
                "Dieterici",
                "$P=\\frac{RT}{V_m-b}\\exp[-a/(RTV_m)]$",
                "Boltzmann-like cohesive factor"
              ],
              [
                "Clausius",
                "$P=\\frac{RT}{V_m-b}-\\frac{a}{T(V_m+c)^2}$",
                "shifted and temperature-dependent attraction"
              ],
              [
                "Redlich–Kwong",
                "$P=\\frac{RT}{V_m-b}-\\frac{a}{\\sqrt T\\,V_m(V_m+b)}$",
                "improved vapour phase"
              ],
              [
                "Peng–Robinson",
                "cubic in $V_m$ with $a(T)$",
                "better vapour–liquid equilibrium"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — why cubic equations persist",
            "text": "Cubic equations of state remain popular because they are algebraically manageable, provide liquid-like and vapour-like roots, and can be fitted through critical properties and an acentric factor. High-accuracy reference equations use many more terms, but cubic models are often the best compromise for engineering phase-equilibrium calculations."
          }
        ]
      },
      {
        "id": "cubic-roots",
        "eyebrow": "Numerical methods",
        "title": "Solving for molar volume",
        "lead": "A cubic equation of state can have one or three real roots. Iterative methods are useful when direct factorisation is inconvenient.",
        "blocks": [
          {
            "type": "visual",
            "id": "newton-raphson",
            "title": "Newton–Raphson iteration",
            "caption": "Starting from a physically sensible guess, draw the tangent to reach a better root estimate."
          },
          {
            "type": "derivation",
            "title": "Newton–Raphson method",
            "steps": [
              {
                "label": "Define residual",
                "tex": "f(V_m)=\\left(P+\\frac{a}{V_m^2}\\right)(V_m-b)-RT"
              },
              {
                "label": "Differentiate",
                "tex": "f'(V_m)=P+\\frac{a}{V_m^2}-\\frac{2a(V_m-b)}{V_m^3}"
              },
              {
                "label": "Iterate",
                "tex": "V_{k+1}=V_k-\\frac{f(V_k)}{f'(V_k)}"
              },
              {
                "label": "Stop",
                "text": "Continue until both the change in $V_m$ and the residual are below the required tolerance."
              }
            ],
            "result": "V_{k+1}=V_k-f(V_k)/f'(V_k)"
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "Root selection",
            "text": "Above $T_c$ there is one physical root. Below $T_c$, the smallest and largest stable roots correspond approximately to liquid and vapour volumes; the intermediate root is mechanically unstable. In the coexistence region, the actual pressure is fixed by equality of chemical potentials, not by choosing every point of the algebraic loop."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Numerical robustness and root bracketing",
            "text": "Newton–Raphson converges rapidly near a simple root but can fail if the derivative is small, the initial guess is poor, or an iteration crosses the forbidden volume $V_m=b$. A robust calculation brackets roots with sign changes and may combine bisection with Newton steps. For cubic equations, analytic formulas exist but can be less transparent than numerical methods. Physical root screening requires positive volume greater than covolume, positive compressibility for stable homogeneous states, and consistency with phase equilibrium. In code or calculator work, evaluate the original residual after solving rather than trusting rounded roots. This numerical discipline is transferable to equilibrium, kinetics and electrochemistry equations throughout advanced chemistry."
          }
        ]
      }
    ]
  },
  {
    "number": 11,
    "title": "Liquefaction, Andrews isotherms and phase coexistence",
    "subtitle": "Critical temperature, gas–liquid transition, Andrews isotherms, coexistence plateau, lever rule, van der Waals loop, metastability and Maxwell equal-area construction.",
    "sourcePages": "pages 104–113",
    "kind": "theory",
    "sections": [
      {
        "id": "liquefaction",
        "eyebrow": "Gas to liquid",
        "title": "Conditions for liquefaction",
        "lead": "Compression can liquefy a gas only when the temperature is below its critical temperature. Above $T_c$, no finite pressure produces a sharp gas–liquid interface.",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "Cooling lowers molecular kinetic energy and makes attractions more effective.",
              "Compression reduces intermolecular separation and raises density.",
              "Below $T_c$, an isothermal compression reaches the saturation pressure and then converts vapour to liquid at nearly constant pressure.",
              "At $T_c$, liquid and vapour densities become equal and the interface disappears."
            ]
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Terminology",
            "text": "A substance below its critical temperature in the gas phase is often called a vapour because it can be liquefied by isothermal compression. Above $T_c$ it is commonly called a gas or supercritical fluid. The words are conventional; the decisive physics is the position relative to the critical point."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Cooling by compression is not automatic",
            "text": "Isothermal compression requires heat removal; otherwise compression generally heats a gas and can move it away from liquefaction. Industrial liquefaction therefore combines compression with intercooling and expansion. The phrase ‘liquefy by pressure’ implicitly means the gas is kept below its critical temperature and heat of condensation is removed. During equilibrium condensation, latent heat must leave the system to maintain temperature. A rapidly compressed insulated gas can reach high pressure without condensing because its temperature rises. This distinction between state conditions and process conditions is important whenever a problem describes how pressure is produced rather than merely giving the final pressure and temperature."
          }
        ]
      },
      {
        "id": "andrews",
        "eyebrow": "Experimental evidence",
        "title": "Andrews isotherms for carbon dioxide",
        "lead": "Andrews measured pressure–volume curves for carbon dioxide at different temperatures and revealed the continuous evolution from two-phase coexistence to a critical isotherm.",
        "blocks": [
          {
            "type": "visual",
            "id": "andrews-isotherms",
            "title": "Andrews P–V isotherms",
            "caption": "Below $T_c$ the horizontal segment is a vapour–liquid coexistence plateau; at $T_c$ it contracts to the critical inflection; above $T_c$ the curve is smooth."
          },
          {
            "type": "paragraph",
            "text": "On a subcritical isotherm, the low-pressure branch is vapour. At the dew-point volume, the first liquid appears. Further compression changes the relative amounts of vapour and liquid while pressure remains at the saturation value. At the bubble-point volume, the last vapour disappears; further compression acts on a nearly incompressible liquid."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — why the plateau is horizontal",
            "text": "For a pure substance at fixed temperature, liquid–vapour equilibrium requires equal chemical potentials. The coexistence pressure is therefore unique at that temperature. Volume can change because the phase amounts change, not because either phase changes its own equilibrium density appreciably. This is a direct consequence of the Gibbs phase rule: for one component and two phases, fixing temperature leaves zero additional intensive degrees of freedom."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Reading coexistence endpoints",
            "text": "The left and right endpoints of an Andrews plateau are saturated-liquid and saturated-vapour states at the chosen temperature. Their molar volumes differ greatly far below the critical point and converge as temperature approaches critical. The plateau pressure is the saturation vapour pressure at that temperature. On a density plot, the same endpoints form the liquid and vapour branches of a coexistence curve. A point between them does not represent a uniform intermediate-density phase; it represents a heterogeneous mixture whose average density depends on phase fractions. This interpretation is essential when using the lever rule and when comparing an experimental plateau with the unphysical van der Waals loop."
          }
        ]
      },
      {
        "id": "lever-rule",
        "eyebrow": "Two-phase region",
        "title": "Amounts of liquid and vapour",
        "lead": "The total molar volume in the coexistence region is an amount-weighted average of the saturated-liquid and saturated-vapour molar volumes.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Lever rule",
            "steps": [
              {
                "label": "Let vapour fraction be $y$",
                "tex": "V_m=(1-y)V_l+yV_g"
              },
              {
                "label": "Solve for vapour fraction",
                "tex": "y=\\frac{V_m-V_l}{V_g-V_l}"
              },
              {
                "label": "Liquid fraction",
                "tex": "1-y=\\frac{V_g-V_m}{V_g-V_l}"
              }
            ],
            "result": "y_g=\\frac{V_m-V_l}{V_g-V_l}"
          },
          {
            "type": "visual",
            "id": "coexistence-lever",
            "title": "Lever-rule geometry",
            "caption": "The fraction of one phase is proportional to the distance from the overall state to the opposite phase endpoint."
          },
          {
            "type": "paragraph",
            "text": "Along the plateau the densities and molar volumes of the two equilibrium phases are fixed at that temperature, while the total amounts change. Latent heat accompanies the conversion because intermolecular potential energy changes."
          }
        ]
      },
      {
        "id": "critical-point",
        "eyebrow": "End of coexistence",
        "title": "Critical opalescence and disappearing interface",
        "lead": "Approaching the critical point, the liquid expands and the vapour becomes denser. Their densities converge, the latent heat and surface tension tend to zero, and the meniscus vanishes.",
        "blocks": [
          {
            "type": "visual",
            "id": "critical-inflection",
            "title": "Critical isotherm as an inflection",
            "caption": "For a cubic equation of state, the critical point satisfies first and second derivative conditions on the isotherm."
          },
          {
            "type": "equationSet",
            "title": "Critical conditions",
            "equations": [
              {
                "tex": "\\left(\\frac{\\partial P}{\\partial V_m}\\right)_{T_c}=0",
                "note": "horizontal tangent"
              },
              {
                "tex": "\\left(\\frac{\\partial^2P}{\\partial V_m^2}\\right)_{T_c}=0",
                "note": "change of curvature"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — critical fluctuations",
            "text": "Near the critical point, large correlated density fluctuations scatter visible light, producing critical opalescence. Mean-field equations such as van der Waals predict classical critical exponents and become quantitatively inaccurate extremely close to $T_c$, where fluctuations dominate. The source correctly notes convergence of density-dependent properties, but the modern explanation is fluctuation physics rather than simple geometric coincidence."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "No distinction between gas and liquid above criticality",
            "text": "Above the critical point, labels such as gas-like and liquid-like describe regions of density and response, not distinct equilibrium phases separated by a boundary. One can start with a low-density gas, heat above critical, compress to high density, and cool to a liquid without crossing a liquid–vapour coexistence line. Along this supercritical path properties change continuously. Other phase transitions, such as freezing, may still occur. The disappearance of the meniscus at criticality follows because surface tension tends to zero when the two bulk phases become identical. This continuous connection is one of the clearest examples of why everyday phase labels depend on thermodynamic paths."
          }
        ]
      },
      {
        "id": "vdw-loop",
        "eyebrow": "Model versus reality",
        "title": "The van der Waals loop",
        "lead": "Below the model critical temperature, the cubic van der Waals isotherm develops a loop with three volumes at some pressures.",
        "blocks": [
          {
            "type": "visual",
            "id": "vdw-loop",
            "title": "Subcritical cubic loop",
            "caption": "Stable liquid and vapour branches are separated by metastable and mechanically unstable portions."
          },
          {
            "type": "bullets",
            "items": [
              "Regions with $(\\partial P/\\partial V)_T<0$ have positive isothermal compressibility and can be locally stable or metastable.",
              "The middle region with $(\\partial P/\\partial V)_T>0$ has negative compressibility and is mechanically unstable.",
              "Superheated liquid and supersaturated vapour can persist metastably until nucleation occurs or a spinodal limit is reached.",
              "The experimentally observed equilibrium path replaces the loop with a horizontal coexistence line."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — nucleation barrier",
            "text": "A new phase requires an interface, which costs surface free energy. Small droplets or bubbles can therefore shrink even when the bulk new phase is thermodynamically favoured. Dust, scratches and dissolved gases provide heterogeneous nucleation sites and reduce the barrier. This explains superheating and supersaturation without treating metastable states as equilibrium states."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Spinodal and binodal boundaries",
            "text": "The coexistence or binodal curve marks equality of free energies of two phases. The spinodal marks the limit of local stability where isothermal compressibility diverges and the second derivative of free energy changes sign. Between binodal and spinodal, a homogeneous phase is metastable and can persist if nucleation is suppressed. Inside the spinodal it is unstable and decomposes spontaneously through growing fluctuations. On a van der Waals isotherm, spinodal points are the local maximum and minimum where the slope is zero. Distinguishing binodal from spinodal clarifies why the equal-area line intersects the stable branches before the turning points and why superheated liquids can exist only over a finite range."
          }
        ]
      },
      {
        "id": "maxwell",
        "eyebrow": "Phase-equilibrium correction",
        "title": "Maxwell equal-area construction",
        "lead": "For a van der Waals isotherm below $T_c$, the equilibrium pressure is chosen so that the two areas between the loop and the horizontal line are equal.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Thermodynamic basis",
            "steps": [
              {
                "label": "Helmholtz differential",
                "tex": "dA=-P\\,dV\\quad(T\\;\\text{constant})"
              },
              {
                "label": "Equal free energy at coexistence",
                "tex": "A(V_g)-A(V_l)=-\\int_{V_l}^{V_g}P(V)dV"
              },
              {
                "label": "Compare with constant coexistence pressure",
                "tex": "A(V_g)-A(V_l)=-P_{sat}(V_g-V_l)"
              },
              {
                "label": "Subtract",
                "tex": "\\int_{V_l}^{V_g}[P(V)-P_{sat}]dV=0"
              }
            ],
            "result": "\\int_{V_l}^{V_g}(P-P_{sat})\\,dV=0"
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — what equal area does and does not mean",
            "text": "It is not a geometric rule invented to improve the graph. It enforces equal chemical potential or equal molar Gibbs free energy of liquid and vapour. The construction applies to the model isotherm and identifies coexistence endpoints; the intermediate volumes are not homogeneous equilibrium states."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Equal chemical potential criterion",
            "text": "The equal-area condition can be derived from Helmholtz free energy at fixed temperature, but the more general coexistence requirement is equality of temperature, pressure and chemical potential. Equal pressure alone is insufficient: many points on the cubic loop share a pressure but do not have equal molar Gibbs free energy. Chemical potential equality prevents net transfer of matter between phases. In mixtures, every component’s chemical potential must be equal across phases, producing more complex phase diagrams and tie lines. The pure-fluid Maxwell construction is therefore a special graphical representation of a broader equilibrium principle used throughout solution chemistry and phase equilibria."
          }
        ]
      },
      {
        "id": "phase-dome",
        "eyebrow": "P–T and density views",
        "title": "Coexistence curve and supercritical continuity",
        "lead": "The liquid–vapour coexistence line in the $P$–$T$ plane ends at the critical point. Above it, liquid-like and gas-like states can be connected continuously without crossing a first-order phase boundary.",
        "blocks": [
          {
            "type": "visual",
            "id": "phase-dome",
            "title": "Coexistence dome",
            "caption": "Within the dome two phases coexist; the apex is critical. Paths above the apex remain single-phase."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — supercritical fluids",
            "text": "A supercritical fluid has no liquid–gas interface, yet its density, solvent power and transport properties can vary strongly with pressure and temperature. Close to the critical point it may be dense like a liquid but diffuse like a gas. Supercritical carbon dioxide is used in extraction because its solvating power is tunable and it leaves little solvent residue after depressurisation."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Widom line and supercritical crossovers",
            "text": "Although no first-order liquid–gas boundary exists above the critical point, response functions such as heat capacity, compressibility and thermal expansion can show broad maxima. The loci of these maxima are sometimes called Widom lines. Crossing such a line changes the fluid smoothly from more liquid-like to more gas-like behaviour; there is no latent heat, discontinuity or unique boundary independent of the chosen response function. Close to the critical point the crossovers are sharp, while farther away they broaden and different maxima separate. This language is useful for interpreting supercritical fluids without incorrectly extending the coexistence curve beyond its endpoint. It also explains why density, solvent power and transport properties can change rapidly in a single phase. In phase diagrams, distinguish the true coexistence line, which represents equality of two phases and ends at the critical point, from supercritical crossover contours, which are continuous property features and do not divide thermodynamic phases."
          }
        ]
      }
    ]
  },
  {
    "number": 12,
    "title": "Critical constants, corresponding states and gas liquefaction cycles",
    "subtitle": "van der Waals critical constants, reduced equation, critical compressibility, inversion temperature, Joule–Thomson cooling, barometric distribution, alternative critical predictions and balloon payload.",
    "sourcePages": "pages 114–122",
    "kind": "theory",
    "sections": [
      {
        "id": "critical-derivation",
        "eyebrow": "Critical constants",
        "title": "Derivation for a van der Waals gas",
        "lead": "Apply the critical inflection conditions to $P=RT/(V_m-b)-a/V_m^2$.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Critical-point calculation",
            "steps": [
              {
                "label": "First derivative",
                "tex": "\\left(\\frac{\\partial P}{\\partial V_m}\\right)_T=-\\frac{RT}{(V_m-b)^2}+\\frac{2a}{V_m^3}=0"
              },
              {
                "label": "Second derivative",
                "tex": "\\left(\\frac{\\partial^2P}{\\partial V_m^2}\\right)_T=\\frac{2RT}{(V_m-b)^3}-\\frac{6a}{V_m^4}=0"
              },
              {
                "label": "Eliminate $RT$",
                "tex": "V_c=3b"
              },
              {
                "label": "Back-substitute",
                "tex": "T_c=\\frac{8a}{27Rb}"
              },
              {
                "label": "Evaluate pressure",
                "tex": "P_c=\\frac{a}{27b^2}"
              }
            ],
            "result": "V_c=3b,\\quad T_c=\\frac{8a}{27Rb},\\quad P_c=\\frac{a}{27b^2}"
          },
          {
            "type": "equationSet",
            "title": "Critical compressibility",
            "equations": [
              {
                "tex": "Z_c=\\frac{P_cV_c}{RT_c}=\\frac38",
                "note": "van der Waals prediction"
              },
              {
                "tex": "T_B=\\frac{a}{Rb}=\\frac{27}{8}T_c",
                "note": "model Boyle temperature"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "correction",
            "title": "Real substances are not universal at Zc = 3/8",
            "text": "The value $3/8$ belongs to the van der Waals model. Experimental $Z_c$ varies by substance, so no real gas is exactly a van der Waals gas under all conditions."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Sensitivity of critical predictions",
            "text": "Critical constants derived from an equation of state are model predictions, not definitions of the experimental critical point. Fitting $a$ and $b$ to measured $T_c$ and $P_c$ forces two relations to be correct but leaves predicted $V_c$ and $Z_c$ imperfect. Fitting low-pressure virial data instead gives different effective constants. This parameter sensitivity illustrates a general modelling rule: a simple equation can be calibrated to one region but may lose accuracy elsewhere. When a problem supplies $a,b$, use the model relations; when it supplies experimental critical data, do not assume every van der Waals identity unless explicitly stated."
          }
        ]
      },
      {
        "id": "reduced-equation",
        "eyebrow": "Corresponding states",
        "title": "Reduced variables and universal form",
        "lead": "Define every state variable relative to its critical value. Substitution removes $a$ and $b$ from the van der Waals equation.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Reduced variables",
            "equations": [
              {
                "tex": "P_r=P/P_c",
                "note": "reduced pressure"
              },
              {
                "tex": "T_r=T/T_c",
                "note": "reduced temperature"
              },
              {
                "tex": "V_r=V_m/V_c",
                "note": "reduced molar volume"
              }
            ]
          },
          {
            "type": "derivation",
            "title": "Reduced van der Waals equation",
            "steps": [
              {
                "label": "Substitute critical constants",
                "tex": "P=P_r\\frac{a}{27b^2},\\;V_m=3bV_r,\\;T=T_r\\frac{8a}{27Rb}"
              },
              {
                "label": "Simplify",
                "tex": "\\left(P_r+\\frac{3}{V_r^2}\\right)(3V_r-1)=8T_r"
              }
            ],
            "result": "\\left(P_r+\\frac{3}{V_r^2}\\right)(3V_r-1)=8T_r"
          },
          {
            "type": "visual",
            "id": "reduced-states",
            "title": "Corresponding reduced states",
            "caption": "Substances at equal $P_r$ and $T_r$ often have similar reduced properties, though the agreement is approximate."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — acentric factor",
            "text": "Simple corresponding states works best for nearly spherical nonpolar molecules. Pitzer introduced the acentric factor $\\omega$ to quantify how a real vapour-pressure curve differs from that of a simple fluid. Modern cubic equations use $T_c$, $P_c$ and $\\omega$, greatly improving predictions for nonspherical and polar molecules."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Similarity and its breakdown",
            "text": "The reduced van der Waals equation predicts exact universality because all substance-specific parameters disappear. Real fluids show approximate, not exact, corresponding states. Simple spherical molecules conform best; hydrogen-bonded, strongly polar and quantum fluids depart more. The success of reduced variables nevertheless reveals that critical scales capture much of the interaction physics. In data analysis, plotting $Z$ against reduced pressure at fixed reduced temperature often collapses multiple gases onto a narrow band. The remaining spread motivates additional shape or polarity parameters. This is a powerful modelling strategy: first remove dominant scales by nondimensionalisation, then represent residual chemistry with a small correction."
          }
        ]
      },
      {
        "id": "joule-thomson",
        "eyebrow": "Throttling",
        "title": "Joule–Thomson coefficient and inversion temperature",
        "lead": "In a steady porous-plug or valve expansion with negligible kinetic and potential-energy changes and no heat exchange, molar enthalpy remains constant.",
        "blocks": [
          {
            "type": "visual",
            "id": "joule-thomson",
            "title": "Inversion curve",
            "caption": "Below the inversion curve a pressure drop cools the gas; above it a pressure drop heats the gas."
          },
          {
            "type": "equationSet",
            "title": "Joule–Thomson relations",
            "equations": [
              {
                "tex": "\\mu_{JT}=\\left(\\frac{\\partial T}{\\partial P}\\right)_H",
                "note": "definition"
              },
              {
                "tex": "\\mu_{JT}=\\frac1{C_P}\\left[T\\left(\\frac{\\partial V_m}{\\partial T}\\right)_P-V_m\\right]",
                "note": "general identity"
              },
              {
                "tex": "\\mu_{JT}\\approx\\frac1{C_P}\\left(\\frac{2a}{RT}-b\\right)",
                "note": "low-pressure van der Waals approximation"
              },
              {
                "tex": "T_i^{max}=\\frac{2a}{Rb}=2T_B=\\frac{27}{4}T_c",
                "note": "zero-pressure maximum inversion temperature in the model"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "At $\\mu_{JT}>0$, lowering pressure lowers temperature. Hydrogen and helium at room temperature lie above much of their inversion curves and must be pre-cooled before Joule–Thomson expansion can cool them."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — enthalpy balance",
            "text": "Throttling differs from reversible adiabatic expansion. Flow work $PV$ is included in enthalpy $H=U+PV$, and the valve produces entropy. An ideal gas has $H=H(T)$, so constant enthalpy means constant temperature and $\\mu_{JT}=0$. A real gas can cool or heat because enthalpy contains interaction contributions."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Shape of the inversion curve",
            "text": "The inversion curve is not one temperature independent of pressure. It forms a boundary in the pressure–temperature plane, usually with upper and lower branches for realistic gases. A gas cools on throttling in the region where the Joule–Thomson coefficient is positive. The often quoted inversion temperature from a low-pressure van der Waals approximation is the upper intercept as pressure tends to zero. At very high pressure, repulsive effects can change the sign again. Practical liquefaction begins from conditions inside the cooling region and uses regenerative heat exchange to move progressively toward condensation. This geometric view is more reliable than attaching one memorised inversion temperature to a gas under every condition."
          }
        ]
      },
      {
        "id": "linde",
        "eyebrow": "Industrial liquefaction",
        "title": "Linde–Hampson regenerative cycle",
        "lead": "Repeated compression, heat exchange and throttling can cool a gas below its boiling region and produce liquid.",
        "blocks": [
          {
            "type": "visual",
            "id": "linde-cycle",
            "title": "Regenerative liquefaction cycle",
            "caption": "The cold low-pressure return stream pre-cools the incoming high-pressure gas before the next throttle."
          },
          {
            "type": "bullets",
            "items": [
              "Compress the gas and remove the heat of compression.",
              "Pass the high-pressure gas through a counter-current heat exchanger.",
              "Throttle it through a valve; if below the inversion temperature, it cools.",
              "Return the cold unliquefied gas through the exchanger, progressively lowering the inlet temperature.",
              "Separate the condensed fraction and recycle the remaining gas."
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — Claude cycle",
            "text": "The Claude process adds an expansion engine, allowing part of the gas to perform work in a near-isentropic expansion and produce stronger cooling than throttling alone. Real liquefaction plants combine turbines, multistage compression and carefully designed heat exchangers."
          }
        ]
      },
      {
        "id": "barometric",
        "eyebrow": "Gravity field",
        "title": "Barometric distribution",
        "lead": "Hydrostatic equilibrium and the ideal-gas density relation give an exponential decrease of pressure with height for an isothermal atmosphere.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Isothermal barometric formula",
            "steps": [
              {
                "label": "Hydrostatic balance",
                "tex": "dP=-\\rho g\\,dh"
              },
              {
                "label": "Ideal density",
                "tex": "\\rho=\\frac{PM}{RT}"
              },
              {
                "label": "Separate variables",
                "tex": "\\frac{dP}{P}=-\\frac{Mg}{RT}dh"
              },
              {
                "label": "Integrate",
                "tex": "\\ln\\frac{P(h)}{P_0}=-\\frac{Mgh}{RT}"
              }
            ],
            "result": "P(h)=P_0e^{-Mgh/(RT)}"
          },
          {
            "type": "visual",
            "id": "barometric-law",
            "title": "Pressure versus altitude",
            "caption": "The scale height $H=RT/(Mg)$ is larger for lighter gases and higher temperature."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — compositional separation",
            "text": "In true diffusive equilibrium each species obeys $n_i(h)=n_i(0)e^{-M_i gh/(RT)}$, so lighter species become enriched at high altitude. The lower atmosphere is instead mixed by convection and turbulence, keeping composition nearly uniform. A centrifuge replaces $gh$ by a rotational potential and produces much stronger isotope separation."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Lapse rate versus isothermal atmosphere",
            "text": "The exponential barometric formula assumes constant temperature. Earth’s troposphere cools with altitude, so a more realistic pressure profile combines hydrostatic balance with a temperature lapse rate. For dry adiabatic motion, temperature falls approximately $g/C_P$ per unit height. Moist air cools more slowly because condensation releases latent heat. The isothermal formula remains the standard equilibrium model and is exact for a gas in a uniform gravitational field maintained at one temperature. Comparing models clarifies why atmospheric pressure data cannot be extrapolated over large heights with a single constant scale height, while short laboratory columns are well approximated by one."
          }
        ]
      },
      {
        "id": "critical-models",
        "eyebrow": "Model comparison",
        "title": "Critical compressibility from alternative equations",
        "lead": "Different equations of state predict different universal critical compressibility factors, revealing how their mathematical structure encodes repulsion and attraction.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Model",
              "Typical predicted $Z_c$",
              "Comment"
            ],
            "rows": [
              [
                "van der Waals",
                "$3/8=0.375$",
                "too high for many real fluids"
              ],
              [
                "Berthelot",
                "$3/8$ in common form",
                "temperature-dependent attraction changes other relations"
              ],
              [
                "Dieterici",
                "$2/e^2\\approx0.271$",
                "closer to many experimental values"
              ],
              [
                "real simple fluids",
                "often $0.27$–$0.30$",
                "substance dependent"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — derive, do not memorise blindly",
            "text": "For an unfamiliar equation, impose $(\\partial P/\\partial V)_T=0$ and $(\\partial^2P/\\partial V^2)_T=0$, solve for $V_c,T_c,P_c$, then form $Z_c=P_cV_c/(RT_c)$."
          }
        ]
      },
      {
        "id": "payload",
        "eyebrow": "Buoyancy application",
        "title": "Gas-balloon payload",
        "lead": "A balloon can lift the difference between the mass of displaced air and the combined masses of lifting gas and envelope.",
        "blocks": [
          {
            "type": "visual",
            "id": "balloon-payload",
            "title": "Buoyancy and payload",
            "caption": "At mechanical equilibrium, upward buoyancy equals the total downward weight."
          },
          {
            "type": "equationSet",
            "title": "Payload calculation",
            "equations": [
              {
                "tex": "F_B=\\rho_{air}Vg",
                "note": "Archimedes buoyancy"
              },
              {
                "tex": "m_{gas}=\\frac{PVM}{RT}",
                "note": "lifting-gas mass"
              },
              {
                "tex": "m_{payload,max}=(\\rho_{air}-\\rho_{gas})V-m_{envelope}",
                "note": "maximum payload"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — pressure and temperature corrections",
            "text": "A flexible balloon has internal pressure slightly above atmospheric pressure because of skin tension, and sunlight can heat the gas above ambient temperature. Both alter gas density. A real flight calculation also includes rigging, fuel, ballast and altitude-dependent air density."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Buoyant equilibrium with changing altitude",
            "text": "As a balloon rises, atmospheric pressure and density fall. A sealed flexible balloon expands, reducing lifting-gas density, while displaced-air mass depends on ambient density and balloon volume. If the envelope can expand freely and gas temperature tracks ambient, ideal-gas relations can make displaced mass nearly constant until the envelope reaches its volume limit. After that, further ascent reduces buoyancy and a ceiling altitude appears. Weather balloons are deliberately underfilled at launch to allow expansion. Rigid airships behave differently because volume is fixed. These distinctions extend the simple ground-level payload formula and show how mechanical constraints determine altitude behaviour."
          }
        ]
      }
    ]
  },
  {
    "number": 13,
    "title": "Modified worked problems 1–18",
    "subtitle": "Every source problem archetype is retained, with altered numerical data and a complete, independently checked solution.",
    "sourcePages": "source problem set, items 1–18 (pages 123–129)",
    "kind": "problems",
    "sections": [
      {
        "id": "problems-1-18",
        "eyebrow": "Worked examples",
        "title": "Modified worked problems 1–18",
        "lead": "The data have been changed while preserving the original concept and level. Open each card to view the full solution.",
        "blocks": [
          {
            "type": "example",
            "number": 1,
            "title": "Expansion into an evacuated vessel",
            "question": "A rigid $12\\,\\mathrm L$ vessel contains an ideal gas at $15\\,\\mathrm{bar}$. It is connected isothermally to an evacuated vessel. The final pressure is $3\\,\\mathrm{bar}$. Find the volume of the evacuated vessel.",
            "steps": [
              "For a fixed amount at constant temperature, $P_1V_1=P_f(V_1+V_2)$.",
              "$15\\times12=3(12+V_2)$.",
              "Hence $12+V_2=60\\,\\mathrm L$."
            ],
            "answer": "$V_2=48\\,\\mathrm L$",
            "sourcePages": "source problem 1, pages 123–124"
          },
          {
            "type": "example",
            "number": 2,
            "title": "Bursting temperature of a flexible balloon",
            "question": "At $300\\,\\mathrm K$ a balloon occupies $3/7$ of its maximum volume. External pressure is constant and the amount of gas does not change. At what temperature will it reach its maximum volume?",
            "steps": [
              "At constant pressure, $V/T$ is constant.",
              "$V_2/V_1=7/3=T_2/300$.",
              "$T_2=700\\,\\mathrm K=427^{\\circ}\\mathrm C$."
            ],
            "answer": "$700\\,\\mathrm K$",
            "sourcePages": "source problem 2, page 124"
          },
          {
            "type": "example",
            "number": 3,
            "title": "Percentage volume change on a Celsius increase",
            "question": "An ideal gas at constant pressure is heated from $40^{\\circ}\\mathrm C$ to a Celsius temperature 25% higher. Find the percentage increase in volume.",
            "steps": [
              "The final Celsius temperature is $50^{\\circ}\\mathrm C$.",
              "Convert to kelvin: $T_1=313.15\\,\\mathrm K$, $T_2=323.15\\,\\mathrm K$.",
              "$\\%\\Delta V=100(T_2/T_1-1)=3.19\\%$."
            ],
            "answer": "$3.19\\%$ increase",
            "sourcePages": "source problem 3, page 124"
          },
          {
            "type": "example",
            "number": 4,
            "title": "Estimating absolute zero",
            "question": "At the same pressure, a gas occupies $150\\,\\mathrm{mL}$ at $27^{\\circ}\\mathrm C$ and $200\\,\\mathrm{mL}$ at $127^{\\circ}\\mathrm C$. Assuming a linear $V$–$t$ relation, estimate absolute zero.",
            "steps": [
              "Slope $m=(200-150)/(127-27)=0.50\\,\\mathrm{mL\\,^{\\circ}C^{-1}}$.",
              "Write $V=m(t-t_0)$, where $t_0$ is the zero-volume intercept.",
              "$150=0.50(27-t_0)$, so $t_0=-273^{\\circ}\\mathrm C$."
            ],
            "answer": "Approximately $-273^{\\circ}\\mathrm C$",
            "sourcePages": "source problem 4, page 124"
          },
          {
            "type": "example",
            "number": 5,
            "title": "Cubic expansion coefficient of an ideal gas",
            "question": "Show that the coefficient of volume expansion of every ideal gas at $0^{\\circ}\\mathrm C$ and constant pressure is the same.",
            "steps": [
              "At constant $P,n$, $V=KT=K(273.15+t)$.",
              "At $0^{\\circ}\\mathrm C$, $V_0=273.15K$ and $dV/dt=K$.",
              "$\\alpha_V=(1/V_0)(dV/dt)=1/273.15\\,^{\\circ}\\mathrm C^{-1}$."
            ],
            "answer": "$\\alpha_V=3.661\\times10^{-3}\\,^{\\circ}\\mathrm C^{-1}$ at $0^{\\circ}\\mathrm C$",
            "sourcePages": "source problem 5, page 124"
          },
          {
            "type": "example",
            "number": 6,
            "title": "Burst or melt first?",
            "question": "A rigid gas cylinder contains gas at $4.0\\,\\mathrm{atm}$ and $300\\,\\mathrm K$. It bursts at $18\\,\\mathrm{atm}$. The cylinder material melts at $1250^{\\circ}\\mathrm C$. If heated, which occurs first?",
            "steps": [
              "At fixed $V,n$, $P/T$ is constant.",
              "$T_b=300(18/4)=1350\\,\\mathrm K=1077^{\\circ}\\mathrm C$.",
              "Since $1077^{\\circ}\\mathrm C<1250^{\\circ}\\mathrm C$, the pressure limit is reached first."
            ],
            "answer": "The cylinder bursts before melting.",
            "sourcePages": "source problem 6, page 124"
          },
          {
            "type": "example",
            "number": 7,
            "title": "Changing mass and temperature at fixed pressure",
            "question": "Six grams of a gas occupy $300\\,\\mathrm{mL}$ at $300\\,\\mathrm K$. What volume will $15\\,\\mathrm g$ occupy at $450\\,\\mathrm K$ at the same pressure?",
            "steps": [
              "For the same gas at constant pressure, $V\\propto mT$.",
              "$V_2/V_1=(15/6)(450/300)=3.75$.",
              "$V_2=1125\\,\\mathrm{mL}$."
            ],
            "answer": "$1.125\\,\\mathrm L$",
            "sourcePages": "source problem 7, page 125"
          },
          {
            "type": "example",
            "number": 8,
            "title": "Combined gas-law calculation",
            "question": "A gas occupies $5.00\\,\\mathrm L$ at $1.20\\,\\mathrm{bar}$ and $250\\,\\mathrm K$. Find its volume at $0.80\\,\\mathrm{bar}$ and $180\\,\\mathrm K$.",
            "steps": [
              "Use $P_1V_1/T_1=P_2V_2/T_2$.",
              "$V_2=5.00(1.20/0.80)(180/250)$.",
              "$V_2=5.40\\,\\mathrm L$."
            ],
            "answer": "$5.40\\,\\mathrm L$",
            "sourcePages": "source problem 8, page 125"
          },
          {
            "type": "example",
            "number": 9,
            "title": "Trapped-gas temperature",
            "question": "A trapped gas has volume $250\\,\\mathrm{mL}$ at $61\\,\\mathrm{cmHg}$ and $300\\,\\mathrm K$. It later has volume $300\\,\\mathrm{mL}$ at $76\\,\\mathrm{cmHg}$. Find the final temperature.",
            "steps": [
              "$P_1V_1/T_1=P_2V_2/T_2$.",
              "$T_2=300(76\\times300)/(61\\times250)$.",
              "$T_2=448.5\\,\\mathrm K$."
            ],
            "answer": "$448.5\\,\\mathrm K$",
            "sourcePages": "source problem 9, page 125"
          },
          {
            "type": "example",
            "number": 10,
            "title": "Same-temperature comparison of two gases",
            "question": "Twelve grams of $SO_3$ occupy $500\\,\\mathrm{mL}$ at $4.0\\,\\mathrm{atm}$. At the same temperature, what pressure is exerted by $6.4\\,\\mathrm g$ of $SO_2$ in $800\\,\\mathrm{mL}$?",
            "steps": [
              "For each sample $PV=nRT$; eliminate $RT$.",
              "$P_2=P_1(n_2/n_1)(V_1/V_2)$.",
              "$n_1=12/80=0.15$, $n_2=6.4/64=0.10$ mol.",
              "$P_2=4(0.10/0.15)(0.500/0.800)=1.667\\,\\mathrm{atm}$."
            ],
            "answer": "$1.67\\,\\mathrm{atm}$",
            "sourcePages": "source problem 10, page 125"
          },
          {
            "type": "example",
            "number": 11,
            "title": "Density at a new state",
            "question": "An ideal gas has density $1.80\\,\\mathrm{g\\,L^{-1}}$ at $300\\,\\mathrm K$ and $0.50\\,\\mathrm{atm}$. Find its density at $450\\,\\mathrm K$ and $1.25\\,\\mathrm{atm}$.",
            "steps": [
              "For the same gas, $d\\propto P/T$.",
              "$d_2=1.80(1.25/0.50)(300/450)$.",
              "$d_2=3.00\\,\\mathrm{g\\,L^{-1}}$."
            ],
            "answer": "$3.00\\,\\mathrm{g\\,L^{-1}}$",
            "sourcePages": "source problem 11, page 125"
          },
          {
            "type": "example",
            "number": 12,
            "title": "Mercury-loaded piston",
            "question": "A vertical cylinder of height $1.52\\,\\mathrm m$ is open at the top. A frictionless piston initially lies midway, with gas below it and a $76\\,\\mathrm{cm}$ mercury column above. At $300\\,\\mathrm K$, what temperature makes half the mercury spill out? Neglect expansion of the cylinder and mercury.",
            "steps": [
              "Initially $V_1\\propto76\\,\\mathrm{cm}$ and $P_1=76+76=152\\,\\mathrm{cmHg}$.",
              "When half the mercury remains, its height is $38\\,\\mathrm{cm}$; the piston has risen by $38\\,\\mathrm{cm}$, so $V_2\\propto114\\,\\mathrm{cm}$.",
              "$P_2=76+38=114\\,\\mathrm{cmHg}$.",
              "$T_2=T_1(P_2V_2)/(P_1V_1)=300(114\\times114)/(152\\times76)=337.5\\,\\mathrm K$."
            ],
            "answer": "$337.5\\,\\mathrm K\\;(64.4^{\\circ}\\mathrm C)$",
            "sourcePages": "source problem 12, page 126"
          },
          {
            "type": "example",
            "number": 13,
            "title": "Piston separating equal gas amounts",
            "question": "A frictionless piston divides a closed vertical cylinder into two gas chambers containing equal moles. At $300\\,\\mathrm K$, the upper volume is four times the lower. The system is heated until the upper volume is three times the lower. Find the final temperature; the piston load is unchanged.",
            "steps": [
              "Let the lower initial volume be $V$; upper is $4V$. Equality of temperature and amount gives $P_L/P_U=4$.",
              "The constant piston load means $P_L-P_U=3P_U$ initially and remains constant.",
              "At the final ratio $V_U/V_L=3$, total volume $5V$ gives $V_L=1.25V$, $V_U=3.75V$.",
              "Using $P_LV_L=P_UT_U$ separately with the fixed pressure difference yields $T_2=421.875\\,\\mathrm K$."
            ],
            "answer": "$421.9\\,\\mathrm K\\;(148.7^{\\circ}\\mathrm C)$",
            "sourcePages": "source problem 13, page 126"
          },
          {
            "type": "example",
            "number": 14,
            "title": "Gas escaping from an open rigid vessel",
            "question": "A rigid open vessel contains air at $300\\,\\mathrm K$. It is heated at atmospheric pressure until $2/5$ of the initial amount escapes. Find the final temperature.",
            "steps": [
              "At constant $P,V$, $nT=PV/R$ is constant.",
              "$n_2=(3/5)n_1$.",
              "$n_1T_1=n_2T_2$, so $T_2=(5/3)300=500\\,\\mathrm K$."
            ],
            "answer": "$500\\,\\mathrm K$",
            "sourcePages": "source problem 14, page 126"
          },
          {
            "type": "example",
            "number": 15,
            "title": "Air removed to maintain constant pressure",
            "question": "A rigid bulb contains air at $10\\,\\mathrm{atm}$ and $300\\,\\mathrm K$. It is heated to $400\\,\\mathrm K$ while air is removed so that pressure remains $10\\,\\mathrm{atm}$. The removed air occupies $240\\,\\mathrm{mL}$ at $360\\,\\mathrm K$ and $0.75\\,\\mathrm{atm}$. Find the bulb volume.",
            "steps": [
              "Moles removed from the bulb are $\\Delta n=PV/R(1/300-1/400)=PV/(1200R)$.",
              "Measured removed moles are $0.75(0.240)/(R\\times360)=0.0005/R$ in consistent L·atm units.",
              "Equate: $10V/1200=0.0005$, giving $V=0.060\\,\\mathrm L$."
            ],
            "answer": "$60.0\\,\\mathrm{mL}$",
            "sourcePages": "source problem 15, page 127"
          },
          {
            "type": "example",
            "number": 16,
            "title": "Mass removed from a rigid vessel",
            "question": "A $20.52\\,\\mathrm L$ vessel at $300\\,\\mathrm K$ loses gas isothermally until pressure falls by $0.50\\,\\mathrm{atm}$. The gas density at traditional STP is $1.25\\,\\mathrm{g\\,L^{-1}}$. Find the mass removed.",
            "steps": [
              "Molar mass $M=dV_m=1.25\\times22.414=28.02\\,\\mathrm{g\\,mol^{-1}}$.",
              "Removed moles $\\Delta n=\\Delta PV/(RT)=0.50\\times20.52/(0.082057\\times300)=0.4168\\,\\mathrm{mol}$.",
              "Mass $=0.4168\\times28.02=11.68\\,\\mathrm g$."
            ],
            "answer": "$11.7\\,\\mathrm g$",
            "sourcePages": "source problem 16, page 127"
          },
          {
            "type": "example",
            "number": 17,
            "title": "Two connected vessels at different temperatures",
            "question": "Two equal rigid vessels contain a total of $0.80\\,\\mathrm{mol}$ ideal gas. Initially both are at $300\\,\\mathrm K$ and $1.00\\,\\mathrm{atm}$. They remain connected; one stays at $300\\,\\mathrm K$ and the other is heated to $600\\,\\mathrm K$. Find the common final pressure and moles in each.",
            "steps": [
              "Initial total volume from $PV=nRT$ is $V_T=0.80RT/1$, so each vessel has $V=0.40RT_{300}$ in atm–L form.",
              "At equilibrium $P$ is common and $n_T=PV/R(1/300+1/600)$.",
              "Using the initial relation gives $P_f=4/3\\,\\mathrm{atm}$.",
              "Moles are proportional to $1/T$: $n_{300}:n_{600}=2:1$, hence $0.5333$ and $0.2667$ mol."
            ],
            "answer": "$P_f=1.333\\,\\mathrm{atm}$; $n_{300}=0.533\\,\\mathrm{mol}$, $n_{600}=0.267\\,\\mathrm{mol}$",
            "sourcePages": "source problem 17, page 127"
          },
          {
            "type": "example",
            "number": 18,
            "title": "One-way valve between equal vessels",
            "question": "Two equal isothermal vessels are connected by a valve that allows flow only while the pressure difference exceeds $0.80\\,\\mathrm{atm}$. Vessel A is initially evacuated and vessel B contains gas at $2.40\\,\\mathrm{atm}$. Find the final pressures.",
            "steps": [
              "Total amount is conserved, so for equal volumes at the same temperature $P_A+P_B=2.40\\,\\mathrm{atm}$.",
              "Flow stops at $P_B-P_A=0.80\\,\\mathrm{atm}$.",
              "Solving gives $2P_B=3.20$ and $P_B=1.60\\,\\mathrm{atm}$, $P_A=0.80\\,\\mathrm{atm}$."
            ],
            "answer": "$P_A=0.80\\,\\mathrm{atm}$, $P_B=1.60\\,\\mathrm{atm}$",
            "sourcePages": "source problem 18, page 128"
          }
        ]
      }
    ]
  },
  {
    "number": 14,
    "title": "Modified worked problems 19–34",
    "subtitle": "Every source problem archetype is retained, with altered numerical data and a complete, independently checked solution.",
    "sourcePages": "source problem set, items 19–34 (pages 129–138)",
    "kind": "problems",
    "sections": [
      {
        "id": "problems-19-34",
        "eyebrow": "Worked examples",
        "title": "Modified worked problems 19–34",
        "lead": "The data have been changed while preserving the original concept and level. Open each card to view the full solution.",
        "blocks": [
          {
            "type": "example",
            "number": 19,
            "title": "Number of balloons from a gas cylinder",
            "question": "A $20.0\\,\\mathrm L$ cylinder contains helium at $25\\,\\mathrm{atm}$ and $300\\,\\mathrm K$. It fills spherical balloons of diameter $30.0\\,\\mathrm{cm}$ at $1.00\\,\\mathrm{atm}$ and $300\\,\\mathrm K$. Gas remaining at $1.00\\,\\mathrm{atm}$ in the cylinder cannot be used. How many complete balloons can be filled?",
            "steps": [
              "Usable $PV$ at the same temperature is $(25-1)\\times20=480\\,\\mathrm{L\\,atm}$.",
              "Each balloon volume is $4\\pi(0.15)^3/3=0.014137\\,\\mathrm{m^3}=14.137\\,\\mathrm L$.",
              "Each requires $14.137\\,\\mathrm{L\\,atm}$ of usable $PV$.",
              "$N=480/14.137=33.95$; only complete balloons count."
            ],
            "answer": "$33$ complete balloons",
            "sourcePages": "source problem 19, page 128"
          },
          {
            "type": "example",
            "number": 20,
            "title": "Maximum payload of a helium balloon",
            "question": "A spherical helium balloon has diameter $8.0\\,\\mathrm m$. At ground level, $T=298\\,\\mathrm K$, $P=1.00\\,\\mathrm{atm}$ and air density is $1.184\\,\\mathrm{kg\\,m^{-3}}$. The envelope and rigging have mass $120\\,\\mathrm{kg}$. Find the maximum payload, neglecting overpressure.",
            "steps": [
              "Balloon volume $V=4\\pi(4.0)^3/3=268.08\\,\\mathrm{m^3}$.",
              "Helium density $\\rho=P M/(RT)=101325(0.0040026)/(8.31446\\times298)=0.1637\\,\\mathrm{kg\\,m^{-3}}$.",
              "Net lift before envelope is $(1.184-0.1637)268.08=273.5\\,\\mathrm{kg}$.",
              "Subtract envelope and rigging: $273.5-120=153.5\\,\\mathrm{kg}$."
            ],
            "answer": "Approximately $153\\,\\mathrm{kg}$",
            "sourcePages": "source problem 20, page 130"
          },
          {
            "type": "example",
            "number": 21,
            "title": "Maximum temperature on a linear P–V path",
            "question": "Two moles of ideal gas move along a straight line from $(V,P)=(12\\,\\mathrm L,3\\,\\mathrm{atm})$ to $(6\\,\\mathrm L,9\\,\\mathrm{atm})$. Find the maximum temperature on the segment.",
            "steps": [
              "The line has slope $(9-3)/(6-12)=-1\\,\\mathrm{atm\\,L^{-1}}$, so $P=15-V$ with $V$ in litres.",
              "$T=PV/(nR)=V(15-V)/(2R)$, a downward parabola.",
              "The vertex is at $V=15/2=7.5\\,\\mathrm L$, where $P=7.5\\,\\mathrm{atm}$.",
              "$T_{max}=56.25/(2\\times0.082057)=342.75\\,\\mathrm K$."
            ],
            "answer": "$342.8\\,\\mathrm K$",
            "sourcePages": "source problems 21–22, pages 130–133"
          },
          {
            "type": "example",
            "number": 22,
            "title": "Classifying temperature extrema for P=mV+c",
            "question": "One mole follows a straight path $P=mV+c$ over a physically allowed interval. Derive the condition for a temperature extremum and classify it.",
            "steps": [
              "$T=PV/R=(mV^2+cV)/R$.",
              "$dT/dV=(2mV+c)/R=0$ gives $V_*=-c/(2m)$.",
              "$d^2T/dV^2=2m/R$.",
              "If $m<0$ and $V_*$ lies in the interval, the extremum is a maximum; if $m>0$, it is a minimum. If $m=0$, temperature varies linearly with $V$."
            ],
            "answer": "$V_*=-c/(2m)$; maximum for $m<0$, minimum for $m>0$",
            "sourcePages": "source derivation, pages 132–133"
          },
          {
            "type": "example",
            "number": 23,
            "title": "Adding helium to hydrogen",
            "question": "A vessel contains $12.0\\,\\mathrm g$ of $H_2$. Helium is added at the same temperature and volume until helium contributes $2/5$ of the total pressure. Find the mass of helium added.",
            "steps": [
              "At fixed $T,V$, partial pressure is proportional to moles.",
              "$n_{H_2}=12/2=6\\,\\mathrm{mol}$.",
              "$n_{He}/(n_{He}+6)=2/5$, so $5n_{He}=2n_{He}+12$ and $n_{He}=4\\,\\mathrm{mol}$.",
              "Mass $=4\\times4=16\\,\\mathrm g$."
            ],
            "answer": "$16.0\\,\\mathrm g$ helium",
            "sourcePages": "source problem 23, page 134"
          },
          {
            "type": "example",
            "number": 24,
            "title": "Selective removal from a mixture",
            "question": "A $500\\,\\mathrm{mL}$ vessel contains $O_2$ and Ne at total pressure $5.0\\,\\mathrm{atm}$. All oxygen is selectively removed at constant temperature and volume, leaving pressure $1.4\\,\\mathrm{atm}$. Find the initial partial pressures.",
            "steps": [
              "Ne amount is unchanged, so its partial pressure was and remains $1.4\\,\\mathrm{atm}$.",
              "Dalton’s law gives $P_{O_2}=5.0-1.4=3.6\\,\\mathrm{atm}$."
            ],
            "answer": "$P_{Ne}=1.4\\,\\mathrm{atm}$, $P_{O_2}=3.6\\,\\mathrm{atm}$",
            "sourcePages": "source problem 24, page 134"
          },
          {
            "type": "example",
            "number": 25,
            "title": "Nitrogen partial pressure from air density",
            "question": "At $300\\,\\mathrm K$ and $1.00\\,\\mathrm{atm}$, an air sample containing only $N_2$ and $O_2$ has density $1.17\\,\\mathrm{g\\,L^{-1}}$. Find the nitrogen partial pressure.",
            "steps": [
              "Mean molar mass $M=dRT/P=1.17\\times0.082057\\times300=28.80\\,\\mathrm{g\\,mol^{-1}}$.",
              "Let $x$ be mole fraction of $N_2$: $28x+32(1-x)=28.80$.",
              "$x=0.800$.",
              "$P_{N_2}=xP=0.800\\,\\mathrm{atm}$."
            ],
            "answer": "$0.800\\,\\mathrm{atm}$",
            "sourcePages": "source problem 25, page 134"
          },
          {
            "type": "example",
            "number": 26,
            "title": "Mixing gases from separate bulbs",
            "question": "At the same temperature, $500\\,\\mathrm{mL}$ He at $3.0\\,\\mathrm{atm}$ and $700\\,\\mathrm{mL}$ Ne at $2.0\\,\\mathrm{atm}$ are transferred into a $4.0\\,\\mathrm L$ vessel. Find partial and total pressures.",
            "steps": [
              "For each gas, $P_i'=P_iV_i/V_f$.",
              "$P_{He}=3.0(0.500/4.0)=0.375\\,\\mathrm{atm}$.",
              "$P_{Ne}=2.0(0.700/4.0)=0.350\\,\\mathrm{atm}$.",
              "$P_T=0.725\\,\\mathrm{atm}$."
            ],
            "answer": "$P_{He}=0.375$, $P_{Ne}=0.350$, $P_T=0.725\\,\\mathrm{atm}$",
            "sourcePages": "source problem 26, page 134"
          },
          {
            "type": "example",
            "number": 27,
            "title": "Inflating a flexible bag with a second gas",
            "question": "A collapsed bag first contains $12.0\\,\\mathrm L$ nitrogen at $0.90\\,\\mathrm{atm}$. Oxygen is added until the bag volume is $30.0\\,\\mathrm L$ and total pressure $1.00\\,\\mathrm{atm}$ at the same temperature. Find final partial pressures.",
            "steps": [
              "Nitrogen moles are fixed, so $P_{N_2,f}=0.90(12/30)=0.36\\,\\mathrm{atm}$.",
              "$P_{O_2}=1.00-0.36=0.64\\,\\mathrm{atm}$."
            ],
            "answer": "$P_{N_2}=0.36\\,\\mathrm{atm}$, $P_{O_2}=0.64\\,\\mathrm{atm}$",
            "sourcePages": "source problem 27, page 134"
          },
          {
            "type": "example",
            "number": 28,
            "title": "Vapour-pressure order from boiling points",
            "question": "Liquids P, Q, R and S have normal boiling points $40^{\\circ}\\mathrm C$, $80^{\\circ}\\mathrm C$, $120^{\\circ}\\mathrm C$ and $60^{\\circ}\\mathrm C$, respectively. Give the expected increasing order of vapour pressure at $25^{\\circ}\\mathrm C$.",
            "steps": [
              "For comparable non-associating liquids, a higher normal boiling point generally indicates stronger cohesion and lower vapour pressure at a common temperature.",
              "Order boiling points high to low: R, Q, S, P.",
              "Therefore vapour pressure increases in the reverse order."
            ],
            "answer": "$R<Q<S<P$",
            "sourcePages": "source problem 28, page 135"
          },
          {
            "type": "example",
            "number": 29,
            "title": "Vapour-pressure order from enthalpy of vaporisation",
            "question": "At the same temperature, similar liquids A, B and C have $\\Delta H_{vap}=25$, $40$ and $32\\,\\mathrm{kJ\\,mol^{-1}}$. Assuming comparable entropy factors, predict increasing vapour pressure.",
            "steps": [
              "Larger $\\Delta H_{vap}$ generally gives a smaller vapour pressure through Clausius–Clapeyron.",
              "Thus the strongest cohesion is B, then C, then A."
            ],
            "answer": "$B<C<A$",
            "sourcePages": "source problem 29, page 135"
          },
          {
            "type": "example",
            "number": 30,
            "title": "Dynamic equilibrium in a closed vessel",
            "question": "Sketch and explain how evaporation and condensation rates change after a pure liquid is sealed in an evacuated vessel at fixed temperature.",
            "steps": [
              "Initially condensation rate is zero and evaporation rate is high.",
              "As vapour accumulates, condensation rate rises because more molecules strike the liquid.",
              "At equilibrium the two rates become equal and remain equal; vapour pressure is constant although molecular exchange continues."
            ],
            "answer": "At dynamic equilibrium, $r_{evap}=r_{cond}$ and the vapour pressure is constant.",
            "sourcePages": "source problem 30, page 135"
          },
          {
            "type": "example",
            "number": 31,
            "title": "Mass ratio in a saturated gas mixture",
            "question": "A $10.0\\,\\mathrm L$ vessel at $300\\,\\mathrm K$ contains nitrogen and enough liquid water to maintain equilibrium. Total pressure is $1.50\\,\\mathrm{atm}$ and water vapour pressure is $0.035\\,\\mathrm{atm}$. Find the mass ratio $m_{H_2O}:m_{N_2}$.",
            "steps": [
              "$P_{N_2}=1.50-0.035=1.465\\,\\mathrm{atm}$.",
              "At the same $T,V$, mole ratio equals partial-pressure ratio.",
              "Mass ratio $=(0.035\\times18)/(1.465\\times28)=0.01535$."
            ],
            "answer": "$m_{H_2O}:m_{N_2}=0.01535:1$",
            "sourcePages": "source problem 31, page 136"
          },
          {
            "type": "example",
            "number": 32,
            "title": "Expansion of moist nitrogen with liquid present",
            "question": "A $4.0\\,\\mathrm L$ vessel at $300\\,\\mathrm K$ contains nitrogen, water vapour and a little liquid water at total pressure $2.00\\,\\mathrm{atm}$. Water vapour pressure is $0.040\\,\\mathrm{atm}$. It is connected to an evacuated $8.0\\,\\mathrm L$ vessel at the same temperature, with enough liquid remaining. Find final pressure.",
            "steps": [
              "Initial nitrogen partial pressure is $1.96\\,\\mathrm{atm}$.",
              "After expansion to $12.0\\,\\mathrm L$, $P_{N_2}=1.96(4/12)=0.6533\\,\\mathrm{atm}$.",
              "Liquid water maintains $P_{H_2O}=0.040\\,\\mathrm{atm}$.",
              "Total $P_f=0.6933\\,\\mathrm{atm}$."
            ],
            "answer": "$0.693\\,\\mathrm{atm}$",
            "sourcePages": "source problem 32, page 136"
          },
          {
            "type": "example",
            "number": 33,
            "title": "Transferring saturated gas without liquid",
            "question": "A saturated nitrogen–water-vapour mixture occupies $0.500\\,\\mathrm L$ at $300\\,\\mathrm K$ and total pressure $1.60\\,\\mathrm{atm}$; $p^*_{300}=0.040\\,\\mathrm{atm}$. The gas only is transferred to a $2.50\\,\\mathrm L$ vessel and heated to $360\\,\\mathrm K$. Find final pressure, given $p^*_{360}=0.45\\,\\mathrm{atm}$.",
            "steps": [
              "Initial partial pressures: $P_{N_2}=1.56$, $P_w=0.040\\,\\mathrm{atm}$.",
              "For each fixed gas amount, $P_2=P_1(V_1/V_2)(T_2/T_1)$.",
              "$P_{N_2}=1.56(0.5/2.5)(360/300)=0.3744\\,\\mathrm{atm}$.",
              "$P_w=0.040(0.5/2.5)(360/300)=0.0096\\,\\mathrm{atm}<p^*_{360}$, so no condensation occurs.",
              "$P_T=0.3840\\,\\mathrm{atm}$."
            ],
            "answer": "$0.384\\,\\mathrm{atm}$",
            "sourcePages": "source problem 33, page 136"
          },
          {
            "type": "example",
            "number": 34,
            "title": "Relative humidity",
            "question": "At $27^{\\circ}\\mathrm C$, water-vapour partial pressure in air is $18\\,\\mathrm{mmHg}$ and saturation vapour pressure is $24\\,\\mathrm{mmHg}$. Find relative humidity.",
            "steps": [
              "$RH=100p_w/p^*$.",
              "$RH=100(18/24)=75\\%$."
            ],
            "answer": "$75\\%$",
            "sourcePages": "source problem 34, page 136"
          }
        ]
      }
    ]
  },
  {
    "number": 15,
    "title": "Modified worked problems 35–50",
    "subtitle": "Every source problem archetype is retained, with altered numerical data and a complete, independently checked solution.",
    "sourcePages": "source problem set, items 35–50 (pages 139–145)",
    "kind": "problems",
    "sections": [
      {
        "id": "problems-35-50",
        "eyebrow": "Worked examples",
        "title": "Modified worked problems 35–50",
        "lead": "The data have been changed while preserving the original concept and level. Open each card to view the full solution.",
        "blocks": [
          {
            "type": "example",
            "number": 35,
            "title": "Mass of water vapour from RH",
            "question": "A $20.0\\,\\mathrm L$ vessel at $320\\,\\mathrm K$ has relative humidity $70\\%$. Saturation vapour pressure of water is $0.100\\,\\mathrm{atm}$. Find the mass of water vapour.",
            "steps": [
              "$p_w=0.70(0.100)=0.070\\,\\mathrm{atm}$.",
              "$n_w=p_wV/(RT)=0.070\\times20/(0.082057\\times320)=0.05332\\,\\mathrm{mol}$.",
              "Mass $=0.05332\\times18.015=0.960\\,\\mathrm g$."
            ],
            "answer": "$0.960\\,\\mathrm g$",
            "sourcePages": "source problem 35, page 137"
          },
          {
            "type": "example",
            "number": 36,
            "title": "Compression until first condensation",
            "question": "A $25.0\\,\\mathrm L$ air sample at fixed temperature has relative humidity $64\\%$. It is compressed isothermally. At what volume does water first condense?",
            "steps": [
              "Before condensation, water-vapour partial pressure varies inversely with volume.",
              "At first condensation $p_{w,2}=p^*$, whereas $p_{w,1}=0.64p^*$.",
              "$p_{w,1}V_1=p^*V_2$, so $V_2=0.64(25.0)=16.0\\,\\mathrm L$."
            ],
            "answer": "$16.0\\,\\mathrm L$",
            "sourcePages": "source problem 36, page 137"
          },
          {
            "type": "example",
            "number": 37,
            "title": "Percentage of water evaporated into a room",
            "question": "A sealed $50.0\\,\\mathrm{m^3}$ room at $300\\,\\mathrm K$ initially contains dry air and $8.00\\,\\mathrm{kg}$ liquid water. Saturation vapour pressure is $0.0350\\,\\mathrm{atm}$. What percentage of the water evaporates?",
            "steps": [
              "Maximum vapour moles $n=p^*V/(RT)=0.0350(50000)/(0.082057\\times300)=71.09\\,\\mathrm{mol}$.",
              "Mass vapour $=71.09\\times18.015=1.281\\,\\mathrm{kg}$.",
              "Percentage evaporated $=100(1.281/8.00)=16.0\\%$."
            ],
            "answer": "$16.0\\%$",
            "sourcePages": "source problem 37, page 137"
          },
          {
            "type": "example",
            "number": 38,
            "title": "Condensation on isothermal compression",
            "question": "Saturated water vapour occupies $900\\,\\mathrm{mL}$ at fixed temperature. It is compressed to $300\\,\\mathrm{mL}$ while liquid water remains in equilibrium. What fraction of vapour condenses?",
            "steps": [
              "At fixed $T$ with liquid present, pressure remains $p^*$.",
              "Vapour moles are proportional to volume, so $n_2/n_1=300/900=1/3$.",
              "Fraction condensed $=1-1/3=2/3$."
            ],
            "answer": "$66.7\\%$ condenses",
            "sourcePages": "source problem 38, page 137"
          },
          {
            "type": "example",
            "number": 39,
            "title": "Cooling humid gas at constant volume",
            "question": "Air at $340\\,\\mathrm K$ has $RH=70\\%$ and $p^*_{340}=0.300\\,\\mathrm{atm}$. It is cooled at constant volume to $280\\,\\mathrm K$, where $p^*_{280}=0.0100\\,\\mathrm{atm}$. Find the fraction of initial water vapour that condenses.",
            "steps": [
              "Initial $p_{w,1}=0.210\\,\\mathrm{atm}$.",
              "If no condensation occurred, $p_{w,ideal}=0.210(280/340)=0.1729\\,\\mathrm{atm}$, which exceeds saturation.",
              "Final vapour amount relative to initial is $(p_2/T_2)/(p_1/T_1)=0.0100\\times340/(0.210\\times280)=0.05782$.",
              "Condensed fraction $=1-0.05782=0.9422$."
            ],
            "answer": "$94.2\\%$ condenses",
            "sourcePages": "source problem 39, page 138"
          },
          {
            "type": "example",
            "number": 40,
            "title": "Vapour pressure at a second temperature",
            "question": "A liquid has vapour pressure $0.0300\\,\\mathrm{atm}$ at $300\\,\\mathrm K$. Estimate its vapour pressure at $350\\,\\mathrm K$ if $\\Delta H_{vap}=44.0\\,\\mathrm{kJ\\,mol^{-1}}$ is constant.",
            "steps": [
              "Use $\\ln(P_2/P_1)=-\\Delta H/R(1/T_2-1/T_1)$.",
              "Exponent $=-(44000/8.314)(1/350-1/300)=2.519$.",
              "$P_2=0.0300e^{2.519}=0.372\\,\\mathrm{atm}$."
            ],
            "answer": "$0.372\\,\\mathrm{atm}$",
            "sourcePages": "source problem 40, page 138"
          },
          {
            "type": "example",
            "number": 41,
            "title": "Enthalpy of vaporisation from two pressures",
            "question": "A liquid has vapour pressure $0.0250\\,\\mathrm{atm}$ at $300\\,\\mathrm K$ and $0.0600\\,\\mathrm{atm}$ at $330\\,\\mathrm K$. Estimate $\\Delta H_{vap}$.",
            "steps": [
              "$\\Delta H=R\\ln(P_2/P_1)/(1/T_1-1/T_2)$.",
              "$\\ln(2.4)=0.87547$ and $1/300-1/330=3.0303\\times10^{-4}\\,\\mathrm{K^{-1}}$.",
              "$\\Delta H=8.314(0.87547)/(3.0303\\times10^{-4})=2.401\\times10^4\\,\\mathrm{J\\,mol^{-1}}$."
            ],
            "answer": "$24.0\\,\\mathrm{kJ\\,mol^{-1}}$",
            "sourcePages": "source problem 41, page 138"
          },
          {
            "type": "example",
            "number": 42,
            "title": "Pressure required for a lower boiling point",
            "question": "A liquid boils at $353\\,\\mathrm K$ under $1.00\\,\\mathrm{atm}$. What external pressure makes it boil at $323\\,\\mathrm K$ if $\\Delta H_{vap}=31.0\\,\\mathrm{kJ\\,mol^{-1}}$?",
            "steps": [
              "At boiling, external pressure equals vapour pressure.",
              "$\\ln(P_2/1)=-31000/8.314(1/323-1/353)$.",
              "The exponent is $-0.981$, so $P_2=e^{-0.981}=0.375\\,\\mathrm{atm}$."
            ],
            "answer": "$0.375\\,\\mathrm{atm}$",
            "sourcePages": "source problem 42, page 138"
          },
          {
            "type": "example",
            "number": 43,
            "title": "Density from diffusion rate",
            "question": "Under identical conditions, gas A of density $3.60\\,\\mathrm{g\\,L^{-1}}$ effuses at $0.800\\,\\mathrm{mmol\\,s^{-1}}$. Gas B effuses at $2.00\\,\\mathrm{mmol\\,s^{-1}}$. Find its density.",
            "steps": [
              "Graham’s law gives $r_A/r_B=\\sqrt{d_B/d_A}$.",
              "$d_B=d_A(r_A/r_B)^2=3.60(0.800/2.00)^2$.",
              "$d_B=0.576\\,\\mathrm{g\\,L^{-1}}$."
            ],
            "answer": "$0.576\\,\\mathrm{g\\,L^{-1}}$",
            "sourcePages": "source problem 43, page 139"
          },
          {
            "type": "example",
            "number": 44,
            "title": "Composition of ozonised oxygen",
            "question": "At the same pressure and temperature, the initial molar effusion flux of an $O_2/O_3$ mixture is $0.950$ times that of pure $O_2$ through the same pinhole. Find the mass percentage of $O_2$ in the mixture.",
            "steps": [
              "For a mixture, component fluxes add: $r_{mix}/r_{O_2}=x+(1-x)\\sqrt{32/48}$, where $x$ is the mole fraction of $O_2$.",
              "$0.950=x+0.816497(1-x)$, giving $x=0.72753$.",
              "Mass fraction $w_{O_2}=32x/[32x+48(1-x)]$.",
              "$w_{O_2}=0.6403$."
            ],
            "answer": "$64.0\\%$ by mass $O_2$",
            "sourcePages": "source problem 44, page 139"
          },
          {
            "type": "example",
            "number": 45,
            "title": "Dissociation inferred from component effusion flux",
            "question": "A partially dissociated chlorine sample $Cl_2\\rightleftharpoons2Cl$ has total initial molar effusion flux $1.2673$ times that of krypton ($M=83.80$) at the same pressure and temperature. Find the degree of dissociation $\\alpha$.",
            "steps": [
              "Starting with 1 mol $Cl_2$, mole fractions after dissociation are $x_{Cl_2}=(1-\\alpha)/(1+\\alpha)$ and $x_{Cl}=2\\alpha/(1+\\alpha)$.",
              "Component fluxes add: $1.2673=\\sqrt{83.80}[x_{Cl_2}/\\sqrt{70.90}+x_{Cl}/\\sqrt{35.45}]$.",
              "Substitution and solution of the linear equation in $\\alpha$ gives $\\alpha=0.250$."
            ],
            "answer": "$\\alpha=0.250$ or $25.0\\%$",
            "sourcePages": "source problem 45, page 139"
          },
          {
            "type": "example",
            "number": 46,
            "title": "Mass-conservation identity during effusion",
            "question": "A vessel initially contains $0.30\\,\\mathrm{mol}$ each of $SO_2$ and $SO_3$. After a short effusion interval, $x$ total moles have escaped. If $M_1$ is the mean molar mass of the escaped gas and $M_2$ that of the remaining gas, prove the mass identity.",
            "steps": [
              "Initial total mass is $0.30(64)+0.30(80)=43.2\\,\\mathrm g$.",
              "Escaped mass is $xM_1$.",
              "Remaining amount is $0.60-x$ mol, so remaining mass is $(0.60-x)M_2$.",
              "Mass conservation gives $xM_1+(0.60-x)M_2=43.2\\,\\mathrm g$."
            ],
            "answer": "$xM_1+(0.60-x)M_2=43.2\\,\\mathrm g$",
            "sourcePages": "source problem 46, page 140"
          },
          {
            "type": "example",
            "number": 47,
            "title": "Calibrated exponential leakage of a mixture",
            "question": "Oxygen in a rigid isothermal bulb falls from $1800$ to $1200\\,\\mathrm{mmHg}$ in $60\\,\\mathrm{min}$ through a molecular-flow leak. The bulb is refilled with an equimolar $O_2$ and gas X mixture ($M_X=98$) at total pressure $3600\\,\\mathrm{mmHg}$. Find $P_{O_2}:P_X$ after $90\\,\\mathrm{min}$.",
            "steps": [
              "For $O_2$, $P/P_0=e^{-k_{32}t}$, so $k_{32}=\\ln(1800/1200)/60$.",
              "Leak constants scale as $1/\\sqrt M$: $k_X=k_{32}\\sqrt{32/98}$.",
              "Initial partial pressures are both $1800\\,\\mathrm{mmHg}$.",
              "Ratio after time is $P_{O_2}/P_X=\\exp[-(k_{32}-k_X)90]=0.771$."
            ],
            "answer": "$P_{O_2}:P_X=0.771:1$",
            "sourcePages": "source problem 47, page 140"
          },
          {
            "type": "example",
            "number": 48,
            "title": "Finite effusion enrichment in a vessel",
            "question": "A vessel initially contains $16\\,\\mathrm{mol}$ each of $H_2$ and He. Effusion occurs isothermally through a tiny hole until only $4.00\\,\\mathrm{mol}$ $H_2$ remain. Find the final mole fraction of $H_2$.",
            "steps": [
              "For independent molecular-flow depletion, $n_i=n_{i0}e^{-Ct/\\sqrt{M_i}}$.",
              "For $H_2$, $4/16=e^{-Ct/\\sqrt2}=0.25$.",
              "For He, $n_{He}/16=e^{-Ct/2}=0.25^{\\sqrt2/2}=0.3752$.",
              "Thus $n_{He}=6.003$ mol and $x_{H_2}=4/(4+6.003)=0.3999$."
            ],
            "answer": "$x_{H_2}\\approx0.400$",
            "sourcePages": "source problem 48, page 141"
          },
          {
            "type": "example",
            "number": 49,
            "title": "Repeated ideal effusion stages",
            "question": "A sample contains $H_2$ and $D_2$ in mass ratio $1:16$. Each stage collects an infinitesimal initial effusate and uses it as the feed for the next stage. How many stages are needed for the effusate to contain at least $90\\%$ $H_2$ by moles?",
            "steps": [
              "Initial mole ratio $H_2:D_2=(1/2):(16/4)=1:8$.",
              "Each stage multiplies the mole ratio by $\\sqrt{4/2}=\\sqrt2$.",
              "After $k$ stages, ratio $R_k=(1/8)(\\sqrt2)^k$.",
              "For $x_{H_2}\\ge0.9$, $R_k\\ge9$. Thus $(\\sqrt2)^k\\ge72$.",
              "$k\\ge\\ln72/\\ln\\sqrt2=12.33$, so the least integer is 13."
            ],
            "answer": "$13$ stages",
            "sourcePages": "source problem 49, page 141"
          },
          {
            "type": "example",
            "number": 50,
            "title": "Composition after successive effusate transfers",
            "question": "A vessel contains $1.00\\,\\mathrm{mol}$ $H_2$ and $81.0\\,\\mathrm{mol}$ $O_2$. The infinitesimal initial effusate is collected and used as the feed for the next vessel; repeat this for eight effusion stages. Find the $H_2$ mole fraction in the eighth effusate.",
            "steps": [
              "Each stage multiplies the mole ratio $H_2:O_2$ by $\\sqrt{32/2}=4$.",
              "Initial ratio is $1/81$.",
              "After eight stages, $R_8=4^8/81=65536/81=809.09$.",
              "$x_{H_2}=R_8/(1+R_8)=0.998766$."
            ],
            "answer": "$x_{H_2}=0.99877$ or $99.877\\%$",
            "sourcePages": "source problem 50, page 141"
          }
        ]
      }
    ]
  },
  {
    "number": 16,
    "title": "Advanced variable-state systems and field distributions",
    "subtitle": "Valve-controlled connected vessels, finite leakage, piston constraints, nonstandard P–V paths, rotating gases, and an integrated advanced challenge laboratory.",
    "sourcePages": "pages 146–154 plus integrated advanced reference",
    "kind": "advanced",
    "sections": [
      {
        "id": "heated-valve",
        "eyebrow": "Connected systems",
        "title": "Two vessels with a pressure-threshold valve",
        "lead": "The final state depends on whether the valve remains open, closes after partial transfer, or never opens. A rigorous solution first assumes a regime, solves it and checks the threshold condition.",
        "blocks": [
          {
            "type": "derivation",
            "title": "General open-valve equilibrium",
            "steps": [
              {
                "label": "Common pressure while open",
                "tex": "P_f=P_A=P_B"
              },
              {
                "label": "Moles in each vessel",
                "tex": "n_A=\\frac{P_fV_A}{RT_A},\\qquad n_B=\\frac{P_fV_B}{RT_B}"
              },
              {
                "label": "Conserve total amount",
                "tex": "n_0=\\frac{P_f}{R}\\left(\\frac{V_A}{T_A}+\\frac{V_B}{T_B}\\right)"
              },
              {
                "label": "Solve",
                "tex": "P_f=\\frac{n_0R}{V_A/T_A+V_B/T_B}"
              }
            ],
            "result": "P_f=\\frac{n_0R}{V_A/T_A+V_B/T_B}"
          },
          {
            "type": "paragraph",
            "text": "If the valve closes when $P_B-P_A=\\Delta P_c$, use both total-mole conservation and that terminal pressure difference. After closure, later temperature changes affect each sealed vessel independently."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — complementarity logic",
            "text": "A one-way or threshold valve imposes inequality constraints: flow rate is zero when the pressure-driving condition is not met and nonzero only in the allowed direction. This is analogous to contact-force problems in mechanics. Solve each possible active constraint and reject any result that violates its assumed inequality."
          }
        ]
      },
      {
        "id": "finite-leak",
        "eyebrow": "Open systems",
        "title": "Finite molecular-flow leakage",
        "lead": "The source extends Graham’s law from initial rates to finite pressure loss. A constant-rate subtraction is wrong because the leak rate decreases with pressure.",
        "blocks": [
          {
            "type": "derivation",
            "title": "Pure-gas leakage law",
            "steps": [
              {
                "label": "Effusion rate",
                "tex": "-\\frac{dn}{dt}=\\frac{AP}{\\sqrt{2\\pi MRT}}"
              },
              {
                "label": "Rigid isothermal state",
                "tex": "n=\\frac{PV}{RT}"
              },
              {
                "label": "Differential equation",
                "tex": "\\frac{dP}{dt}=-\\frac{A}{V}\\sqrt{\\frac{RT}{2\\pi M}}P"
              },
              {
                "label": "Solution",
                "tex": "P(t)=P_0e^{-t/\\tau}"
              }
            ],
            "result": "\\tau=\\frac{V}{A}\\sqrt{\\frac{2\\pi M}{RT}}"
          },
          {
            "type": "paragraph",
            "text": "For a mixture, each partial pressure decays with its own time constant: $P_i(t)=P_{i0}\\exp[-Ct/\\sqrt{M_i}]$. The remaining gas becomes enriched in heavier species; the escaping instantaneous flux is enriched in lighter species."
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "JEE Advanced lens — calibrate without knowing the hole",
            "text": "A pressure-time measurement for one known gas determines the apparatus constant $C$. For another gas in the same vessel, scale the decay exponent by $1/\\sqrt M$. This avoids calculating aperture area or transmission coefficient."
          }
        ]
      },
      {
        "id": "piston-geometry",
        "eyebrow": "Mechanical constraints",
        "title": "Pistons, mercury columns and changing geometry",
        "lead": "In piston systems, pressure and volume are linked by force balance and geometry before the gas law is applied.",
        "blocks": [
          {
            "type": "equationSet",
            "title": "Constraint toolkit",
            "equations": [
              {
                "tex": "P_{below}A=P_{above}A+Mg+F_{spring}",
                "note": "piston force balance"
              },
              {
                "tex": "V=A\\ell",
                "note": "uniform-cylinder geometry"
              },
              {
                "tex": "P_{gas}=P_{atm}+\\rho gh+Mg/A",
                "note": "loaded piston with liquid head"
              },
              {
                "tex": "\\frac{PV}{T}=\\text{constant}",
                "note": "fixed gas amount"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "When liquid spills, the liquid-column height and gas length change together. When two gas chambers share a piston, the pressure difference is fixed by piston weight while both chamber volumes must add to the fixed cylinder volume."
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — stability of piston equilibria",
            "text": "An equilibrium position is stable when a small displacement creates a restoring pressure-force imbalance. Differentiate the net force with respect to piston position while respecting each gas’s thermodynamic constraint. This method distinguishes stable, unstable and neutral equilibria and connects gas-law problems to potential-energy reasoning."
          }
        ]
      },
      {
        "id": "nonlinear-paths",
        "eyebrow": "Process geometry",
        "title": "Temperature extrema on specified P–V paths",
        "lead": "For a fixed amount of ideal gas, temperature along any stated path is proportional to the product $PV$. The source analyses straight and nonlinear paths by calculus.",
        "blocks": [
          {
            "type": "visual",
            "id": "linear-pv-temperature",
            "title": "Linear P–V path and temperature parabola",
            "caption": "For $P=mV+c$, $T(V)=(mV^2+cV)/(nR)$."
          },
          {
            "type": "equationSet",
            "title": "Common path forms",
            "equations": [
              {
                "tex": "P=mV+c\\Rightarrow T=\\frac{mV^2+cV}{nR}",
                "note": "quadratic temperature"
              },
              {
                "tex": "P=P_0-\\alpha V^2\\Rightarrow T=\\frac{P_0V-\\alpha V^3}{nR}",
                "note": "maximum when $P_0=3\\alpha V^2$"
              },
              {
                "tex": "P=P_0e^{-\\beta V}\\Rightarrow T=\\frac{P_0Ve^{-\\beta V}}{nR}",
                "note": "maximum at $V=1/\\beta$"
              },
              {
                "tex": "T=T_0+\\alpha V^2\\Rightarrow P=nR(T_0/V+\\alpha V)",
                "note": "minimum pressure at $V=\\sqrt{T_0/\\alpha}$"
              }
            ]
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — endpoint check",
            "text": "A stationary point matters only if it lies on the allowed segment and all states have positive pressure, volume and temperature. Always compare the stationary value with both endpoints. Many multiple-choice traps provide a mathematically correct vertex outside the physical interval."
          }
        ]
      },
      {
        "id": "rotating-gas",
        "eyebrow": "Noninertial fields",
        "title": "Ideal gas in rigid-body rotation",
        "lead": "A gas rotating with angular speed $\\omega$ develops a radial pressure gradient because each fluid element requires centripetal acceleration.",
        "blocks": [
          {
            "type": "visual",
            "id": "rotating-gas",
            "title": "Radial pressure distribution",
            "caption": "Pressure and density rise outward in an isothermal rotating gas."
          },
          {
            "type": "derivation",
            "title": "Isothermal rotating-gas law",
            "steps": [
              {
                "label": "Radial force balance",
                "tex": "\\frac{dP}{dr}=\\rho\\omega^2r"
              },
              {
                "label": "Ideal density",
                "tex": "\\rho=\\frac{PM}{RT}"
              },
              {
                "label": "Separate",
                "tex": "\\frac{dP}{P}=\\frac{M\\omega^2}{RT}r\\,dr"
              },
              {
                "label": "Integrate from axis",
                "tex": "\\ln\\frac{P(r)}{P(0)}=\\frac{M\\omega^2r^2}{2RT}"
              }
            ],
            "result": "P(r)=P(0)\\exp\\left(\\frac{M\\omega^2r^2}{2RT}\\right)"
          },
          {
            "type": "callout",
            "tone": "reference",
            "title": "Deeper reference — centrifuge separation",
            "text": "For a mixture, each species has $n_i(r)=n_i(0)\\exp[M_i\\omega^2r^2/(2RT)]$. The heavier isotope is enriched at larger radius. Counter-current flow and very high angular speed amplify this small equilibrium separation in practical gas centrifuges."
          }
        ]
      },
      {
        "id": "challenge-lab",
        "eyebrow": "Integrated mastery",
        "title": "Advanced challenge set",
        "lead": "These compact challenges combine ideas distributed throughout the source and the inserted reference material.",
        "blocks": [
          {
            "type": "example",
            "number": 51,
            "title": "Barometric composition change",
            "question": "An isothermal atmosphere contains equal mole fractions of He and $N_2$ at ground level. Derive the ratio $x_{He}/x_{N_2}$ at height $h$.",
            "steps": [
              "Each partial pressure follows $P_i(h)=P_i(0)e^{-M_i gh/(RT)}$.",
              "Their ratio is therefore multiplied by $e^{(M_{N_2}-M_{He})gh/(RT)}$.",
              "Because the ground ratio is one, $x_{He}/x_{N_2}=e^{24gh/(RT)}$ when molar masses are in consistent SI units."
            ],
            "answer": "$x_{He}/x_{N_2}=\\exp[(M_{N_2}-M_{He})gh/(RT)]$",
            "sourcePages": "integrated reference"
          },
          {
            "type": "example",
            "number": 52,
            "title": "Maximum on an exponential path",
            "question": "One mole follows $P=P_0e^{-\\beta V}$. Find the volume and pressure at maximum temperature.",
            "steps": [
              "$T(V)=P_0Ve^{-\\beta V}/R$.",
              "$dT/dV=(P_0/R)e^{-\\beta V}(1-\\beta V)$.",
              "Thus $V_*=1/\\beta$ and $P_*=P_0/e$."
            ],
            "answer": "$V_*=1/\\beta$, $P_*=P_0/e$",
            "sourcePages": "integrated reference"
          },
          {
            "type": "example",
            "number": 53,
            "title": "van der Waals internal-energy change",
            "question": "One mole of a van der Waals gas expands isothermally from $V_1$ to $V_2$. Find $\\Delta U$.",
            "steps": [
              "$dU=C_VdT+aV^{-2}dV$.",
              "For an isothermal process $dT=0$.",
              "$\\Delta U=a\\int_{V_1}^{V_2}V^{-2}dV=a(1/V_1-1/V_2)$."
            ],
            "answer": "$\\Delta U=a(1/V_1-1/V_2)$",
            "sourcePages": "integrated reference"
          },
          {
            "type": "example",
            "number": 54,
            "title": "Second virial from a measured slope",
            "question": "At a fixed temperature, a gas obeys $Z=1+0.0020P$ when $P$ is in bar near zero pressure. What is the sign of the second virial coefficient and what interaction dominates initially?",
            "steps": [
              "The initial pressure-virial coefficient is positive.",
              "Therefore $Z$ rises above one as pressure increases from zero.",
              "Repulsive/excluded-volume contribution dominates the first departure."
            ],
            "answer": "Positive second virial coefficient; repulsion dominates initially.",
            "sourcePages": "integrated reference"
          },
          {
            "type": "example",
            "number": 55,
            "title": "Effusion selectivity of a mixture",
            "question": "A mixture contains mole fractions $x_i$. Show that its total initial molar effusion flux is not generally proportional to $1/\\sqrt{\\bar M}$.",
            "steps": [
              "Each component flux is $J_i=AP_i/\\sqrt{2\\pi M_iRT}$.",
              "Using $P_i=x_iP$, $J_{tot}=AP/\\sqrt{2\\pi RT}\\sum_i x_i/\\sqrt{M_i}$.",
              "The sum of inverse square roots is not equal to the inverse square root of $\\bar M=\\sum x_iM_i$ except in special cases."
            ],
            "answer": "$J_{tot}\\propto\\sum_i x_i/\\sqrt{M_i}$, not $1/\\sqrt{\\bar M}$",
            "sourcePages": "integrated reference"
          },
          {
            "type": "callout",
            "tone": "exam",
            "title": "Completion standard",
            "text": "Part 16 closes the source sequence without exposing OCR or audit material to students. The page-by-page mapping remains in the deployment package’s private audit folder."
          }
        ]
      }
    ]
  }
];
