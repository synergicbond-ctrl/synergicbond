import type { PremiumChapterNotes } from "../schema";

export const IONIC_EQUILIBRIUM_NOTES: PremiumChapterNotes = {
  chapterId: "ionic-equilibrium",
  title: "Ionic Equilibrium",
  tagline: "Acids, bases, pH scale, buffers, solubility product, and common ion effect.",
  topics: [
    {
      id: "electrolytes-classification",
      title: "Electrolytes & Their Classification",
      intro: "What ionises, how completely, and which salts dissolve — the groundwork every pH and Kₛₚ calculation silently assumes.",
      subtopics: [
        {
          id: "types-of-electrolytes",
          title: "True vs Potential, Strong vs Weak",
          blocks: [
            {
              kind: "detailed",
              heading: "True vs Potential Electrolytes",
              paras: [
                "A substance that produces ions in solution is an electrolyte. The classification depends on whether ions already exist in the pure substance."
              ],
              points: [
                "True (ionic) electrolyte: already ionic in the pure state — produces ions in the melt AND in solution. e.g. NaCl(s) → Na⁺ + Cl⁻ on melting or on dissolving.",
                "Potential (covalent) electrolyte: molecular in the pure state, produces ions only on dissolving in a suitable solvent. e.g. HCl(g) is covalent, but HCl(aq) → H⁺ + Cl⁻."
              ]
            },
            {
              kind: "detailed",
              heading: "Strong vs Weak Electrolytes",
              paras: [
                "Strong electrolytes dissociate almost completely in solution (α → 1); weak electrolytes dissociate only partially (α ≪ 1).",
                "In water: strong acids, strong bases and water-soluble salts are strong electrolytes; weak acids, weak bases and sparingly soluble salts are weak."
              ]
            },
            {
              kind: "focus",
              title: "Strength depends on the SOLVENT, not just the solute",
              points: [
                "HCl behaves as a strong acid in water,",
                "…a weak acid in CH₃COOH (ethanoic acid) as solvent,",
                "…a non-electrolyte in C₆H₆ (benzene),",
                "…and even a weak base in liquid HF.",
                "Moral: 'strong' and 'weak' describe the acid–solvent pair, never the acid alone."
              ]
            },
            {
              kind: "detailed",
              heading: "The Strong Acids & Strong Bases to Memorise",
              points: [
                "Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄ (1st ionisation), HClO₄.",
                "Strong bases: Group-1 hydroxides (LiOH, NaOH, KOH, RbOH, CsOH) and the heavier Group-2 hydroxides Ca(OH)₂, Sr(OH)₂, Ba(OH)₂.",
                "Everything else is weak (or sparingly soluble) until proven otherwise."
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "HF is a hydrogen halide, so it must be a strong acid like HCl, HBr and HI.",
                  reality: "HF is a WEAK acid (Ka ≈ 6.6 × 10⁻⁴). The very strong H–F bond and extensive H-bonding suppress ionisation — it is the odd one out of the hydrohalic acids."
                }
              ]
            }
          ]
        },
        {
          id: "solubility-rules",
          title: "Solubility Rules for Salts",
          blocks: [
            {
              kind: "detailed",
              heading: "Which salts dissolve in water",
              paras: [
                "You cannot begin a Kₛₚ or precipitation problem without knowing which salt is the sparingly soluble one. These rules identify it at a glance."
              ],
              points: [
                "All nitrates (NO₃⁻) are soluble — no exceptions.",
                "All chlorides are soluble EXCEPT AgCl, Hg₂Cl₂, CuCl and PbCl₂ (PbCl₂ dissolves in hot water).",
                "All sulphates are soluble EXCEPT CaSO₄, SrSO₄, BaSO₄ and PbSO₄ (Ag₂SO₄ is sparingly soluble).",
                "All carbonates, phosphates, sulphides and oxalates are INSOLUBLE except those of the alkali metals and NH₄⁺."
              ]
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "Applying solubility rules",
              question: "Which of these is sparingly soluble in water: NaCl, KNO₃, BaSO₄, (NH₄)₂CO₃?",
              thinking: "Run each through the rules: nitrates are always soluble; alkali-metal and ammonium salts are soluble; the sulphate exception list contains BaSO₄.",
              answer: "BaSO₄ — a member of the sulphate exceptions. It is the only one here that has a Kₛₚ."
            }
          ]
        }
      ]
    },
    {
      id: "acid-base-theories",
      title: "Acid-Base Theories & Autoionization",
      intro: "Fundamental definitions of acids and bases and the ionic product of water.",
      subtopics: [
        {
          id: "arrhenius-bronsted-lewis",
          title: "Arrhenius, Brønsted-Lowry, and Lewis Theories",
          blocks: [
            {
              kind: "detailed",
              heading: "Arrhenius Theory",
              paras: [
                "Acids produce H⁺ (or H₃O⁺) ions in aqueous solution. Bases produce OH⁻ ions.",
                "Limitation: Strictly limited to aqueous mediums."
              ]
            },
            {
              kind: "detailed",
              heading: "Brønsted-Lowry Theory",
              paras: [
                "Acids are proton (H⁺) donors. Bases are proton (H⁺) acceptors.",
                "Introduces the concept of conjugate acid-base pairs. For every acid, there is a conjugate base (Acid - H⁺), and for every base, there is a conjugate acid (Base + H⁺)."
              ],
              points: [
                "Conjugate base of H₂O is OH⁻.",
                "Conjugate acid of H₂O is H₃O⁺."
              ]
            },
            {
              kind: "detailed",
              heading: "Lewis Theory",
              paras: [
                "Acids are electron pair acceptors (electrophiles). Bases are electron pair donors (nucleophiles).",
                "Explains acidity of electron-deficient species like BF₃ and AlCl₃."
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "Assuming BF₃ is a Brønsted acid.",
                  reality: "BF₃ has no protons to donate. It is strictly a Lewis acid due to its empty p-orbital."
                }
              ]
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Identify the conjugate base of H₂PO₄⁻.",
              thinking: "A conjugate base is formed by removing one H⁺ from the species.",
              solution: "H₂PO₄⁻ - H⁺ ⟶ HPO₄²⁻. The conjugate base is HPO₄²⁻."
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Which of the following acts as a Lewis acid but not a Brønsted acid: HCl, H₂O, AlCl₃, NH₃?",
              thinking: "Brønsted acids must have H⁺ to donate. Lewis acids accept electron pairs.",
              solution: "AlCl₃ has an incomplete octet on Aluminum, allowing it to accept an electron pair (Lewis acid). It lacks H⁺, so it cannot be a Brønsted acid."
            }
          ]
        },
        {
          id: "autoionization-water",
          title: "Autoionization of Water and Kw",
          blocks: [
            {
              kind: "detailed",
              paras: [
                "Water acts as both an acid and a base (amphoteric).",
                "Reaction: H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)",
                "Ionic product of water, Kw = [H⁺][OH⁻].",
                "At 25°C (298 K), Kw = 1.0 × 10⁻¹⁴."
              ]
            },
            {
              kind: "focus",
              title: "Temperature Dependence",
              points: [
                "Autoionization is endothermic.",
                "As temperature increases, Kw increases.",
                "At 90°C, Kw ≈ 10⁻¹², so neutral pH becomes 6 (not 7)."
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "At 90°C, pure water has [H₃O⁺] = 10⁻⁶ M. What is the value of Kw at this temperature?",
              thinking: "In pure water, [H₃O⁺] = [OH⁻].",
              solution: "Kw = [H₃O⁺][OH⁻] = (10⁻⁶)(10⁻⁶) = 10⁻¹²."
            }
          ]
        },
        {
          id: "merits-demerits-leveling",
          title: "Merits, Demerits & the Leveling Effect",
          blocks: [
            {
              kind: "detailed",
              heading: "Arrhenius — what it gets right and wrong",
              points: [
                "Merit: cleanly explains neutralisation (H⁺ + OH⁻ → H₂O) and ranks strength by the ionisation constant (Ka, Kb).",
                "Demerit: confined to water — the solvent's role is undefined, and it cannot explain why aqueous AlCl₃/CuSO₄ are acidic or Na₂CO₃/NH₃ are basic.",
                "Demerit: cannot account for amphoteric species such as Al(OH)₃."
              ]
            },
            {
              kind: "detailed",
              heading: "Brønsted–Lowry — what it adds and where it stops",
              points: [
                "Merit: the solvent's role is explicit; acidic/basic behaviour is defined even in non-aqueous media; amphiprotic nature falls out naturally (H₂O, HCO₃⁻).",
                "Demerit: still tied to proton transfer — it cannot describe an acid–base reaction with NO proton, e.g. CaO (base) + CO₂ (acid) → CaCO₃. That gap is exactly what the Lewis picture fills."
              ]
            },
            {
              kind: "detailed",
              exams: ["JEE Advanced"],
              heading: "Leveling & Differentiating Effect",
              paras: [
                "Water is a 'leveling' solvent: any acid stronger than H₃O⁺ is dragged down to the strength of H₃O⁺ because it hands its proton over completely. So HClO₄, HCl and HNO₃ all appear equally strong (≈100% ionised) in water — water levels them.",
                "A weaker base solvent (e.g. glacial CH₃COOH) accepts protons reluctantly, so the acids ionise to different extents and their TRUE order is revealed: HClO₄ > H₂SO₄ > HCl > HNO₃. Such a solvent is 'differentiating'."
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              tricky: true,
              exams: ["JEE Advanced"],
              concept: "Leveling effect",
              question: "In aqueous solution HCl and HClO₄ appear equally strong, yet in glacial acetic acid HClO₄ is clearly the stronger. Explain.",
              thinking: "Ask what the solvent does to the proton. If the solvent takes the proton completely, every acid looks '100% ionised' and their differences vanish.",
              solution: "Water is a strong enough base to strip the proton fully from both, leveling both to H₃O⁺ — so both read as 'strong'. Glacial acetic acid is a much weaker base; it does not fully remove the proton, so the intrinsic difference in proton-donating tendency shows through and HClO₄ ionises more than HCl.",
              insight: "The measured strength of a strong acid is a property of the acid–solvent pair. 'All strong acids are equal in water' is a statement about water, not about the acids."
            }
          ]
        }
      ]
    },
    {
      id: "ph-and-weak-electrolytes",
      title: "pH, pOH, and Weak Electrolytes",
      intro: "Ostwald's dilution law and pH calculations for varying acid strengths.",
      subtopics: [
        {
          id: "ph-scale",
          title: "The pH Scale",
          blocks: [
            {
              kind: "detailed",
              points: [
                "pH = -log₁₀[H⁺]",
                "pOH = -log₁₀[OH⁻]",
                "pH + pOH = pKw (14 at 25°C)"
              ]
            },
            {
              kind: "mistake",
              items: [
                {
                  wrong: "The pH of 10⁻⁸ M HCl is 8 (basic).",
                  right: "Acid solutions cannot have a pH > 7 at 25°C. Water's autoionization (10⁻⁷ M H⁺) must be added. Total [H⁺] = 10⁻⁸ + 10⁻⁷ = 1.1 × 10⁻⁷ M, making pH ≈ 6.96."
                }
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Calculate the pH of 10⁻⁸ M HCl at 25°C.",
              thinking: "Since concentration is ≤ 10⁻⁶ M, water's contribution is significant.",
              solution: "Total [H⁺] = [H⁺] from HCl + [H⁺] from H₂O. Let water contribute x. x(x + 10⁻⁸) = 10⁻¹⁴. Solving gives total [H⁺] ≈ 1.05 × 10⁻⁷ M. pH = -log(1.05 × 10⁻⁷) ≈ 6.98."
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Calculate the pH of 0.001 M NaOH.",
              thinking: "[OH⁻] = 10⁻³ M. pOH = 3.",
              solution: "pH = 14 - pOH = 14 - 3 = 11."
            }
          ]
        },
        {
          id: "weak-acids-bases",
          title: "Weak Acids (Ka) and Weak Bases (Kb)",
          blocks: [
            {
              kind: "detailed",
              heading: "Ostwald's Dilution Law",
              paras: [
                "For a weak acid HA ⇌ H⁺ + A⁻ with concentration C and degree of dissociation α:",
                "Ka = Cα² / (1 - α)",
                "If α << 1 (typically < 5%), then Ka ≈ Cα², so α = √(Ka / C)."
              ],
              points: [
                "[H⁺] = Cα = √(Ka × C)",
                "pH = 1/2(pKa - log C)"
              ]
            },
            {
              kind: "trick",
              items: [
                {
                  trick: "Ka × Kb = Kw",
                  recall: "Strictly for a conjugate acid-base pair. E.g., Ka of CH₃COOH and Kb of CH₃COO⁻."
                }
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "A 0.1 M solution of a weak monoprotic acid has a pH of 3. Calculate its Ka.",
              thinking: "pH = 3 means [H⁺] = 10⁻³ M. [H⁺] = √(Ka × C).",
              solution: "10⁻³ = √(Ka × 0.1) ⟶ 10⁻⁶ = Ka × 0.1 ⟶ Ka = 10⁻⁵."
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "Calculate the degree of dissociation of 0.01 M CH₃COOH if its Ka is 1.8 × 10⁻⁵.",
              thinking: "Check if α is small: √(Ka/C) = √(1.8×10⁻⁵ / 10⁻²) = √(1.8×10⁻³) ≈ 0.042 (4.2%). Since it's < 5%, approximation is valid.",
              solution: "α = √(Ka / C) = 0.042."
            }
          ]
        },
        {
          id: "weak-acid-four-cases",
          title: "When the Approximation Breaks: The Four Cases",
          exams: ["JEE Advanced"],
          blocks: [
            {
              kind: "detailed",
              heading: "α = √(Ka/C) is a shortcut, not a law",
              paras: [
                "The clean result [H⁺] = √(Ka·C) rests on TWO assumptions: (1 − α) ≈ 1, and water's own H⁺ being negligible. Either can fail. Classify every weak-acid problem into one of four cases before reaching for a formula."
              ],
              points: [
                "Case I — C ≫ Ka and Ka ≫ Kw: α = √(Ka/C) ≪ 1 so (1 − α) ≈ 1. Use [H⁺] = √(Ka·C). (The everyday case.)",
                "Case II — C ≈ Ka (still Ka ≫ Kw): α is NOT small, so (1 − α) ≠ 1. Solve the full quadratic Ka = Cα²/(1 − α).",
                "Case III — C ≫ Ka but Ka ≈ Kw: the acid is so weak that water's H⁺ is comparable — solve the acid and water equilibria together.",
                "Case IV — C ≪ Ka (roughly C < 10⁻⁶ M): the acid is essentially fully dissociated (α ≈ 1) AND water contributes — combine both."
              ]
            },
            {
              kind: "focus",
              title: "The practical water-contribution rule",
              points: [
                "Neglect water's contribution to [H⁺] only if [H⁺] from the acid ≥ 10⁻⁶ M.",
                "For a base, neglect water's [OH⁻] only if [OH⁻] from the base ≥ 10⁻⁶ M.",
                "Always sanity-check α = [H⁺]/C after using the shortcut: if α exceeds ~5%, the (1 − α) ≈ 1 step was illegal — redo it as a quadratic."
              ]
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Case II — approximation fails",
              question: "Calculate the pH of 0.002 M HCOOH. (Ka = 2.4 × 10⁻⁴)",
              thinking: "First test the shortcut, then check α. If α is large, the denominator (1 − α) cannot be dropped.",
              steps: [
                { label: "Try the shortcut & check α", work: "α = √(Ka/C) = √(2.4×10⁻⁴ / 2×10⁻³) = √0.12 ≈ 0.35 → 35%. That is far above 5%, so the approximation is INVALID here." },
                { label: "Set up the exact balance", work: "With x = [H⁺]: Ka = x²/(C − x) ⇒ x² + Ka·x − Ka·C = 0 ⇒ x² + 2.4×10⁻⁴x − 4.8×10⁻⁷ = 0." },
                { label: "Solve the quadratic", work: "x = [−2.4×10⁻⁴ + √(5.76×10⁻⁸ + 1.92×10⁻⁶)] / 2 = [−2.4×10⁻⁴ + 1.41×10⁻³] / 2 ≈ 5.8×10⁻⁴ M." },
                { label: "Convert to pH", work: "pH = −log(5.8×10⁻⁴) ≈ 3.24." }
              ],
              answer: "pH ≈ 3.24 (the shortcut would have wrongly given ≈ 3.16).",
              insight: "A dilute solution of a not-so-weak acid is the classic Case II trap: low C pushes α up, so the missing (1 − α) matters. Reflex-checking α is what saves the mark."
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Case IV — very dilute weak acid",
              question: "Qualitatively, what happens to the degree of dissociation of 5 × 10⁻⁸ M CH₃COOH, and why can't you use [H⁺] = √(Ka·C)?",
              thinking: "Compare C with Ka (1.8 × 10⁻⁵). Here C ≪ Ka, and C is also below 10⁻⁶ M.",
              solution: "Because C ≪ Ka, Ostwald's law forces α → 1: the acid is essentially fully dissociated, so [H⁺] from the acid ≈ C = 5×10⁻⁸ M — well below 10⁻⁶ M. Water's own 10⁻⁷ M H⁺ now dominates, so the acid and water equilibria must be solved together; the shortcut (which assumes α small AND water negligible) is doubly invalid.",
              insight: "There are two distinct reasons to distrust √(Ka·C): α too big (Case II), OR the solution so dilute that water takes over (Cases III/IV). Naming the case first prevents both mistakes."
            }
          ]
        }
      ]
    },
    {
      id: "hydrolysis-salts",
      title: "Hydrolysis of Salts",
      intro: "Behavior of salts dissolved in water based on their parent acid and base.",
      subtopics: [
        {
          id: "salt-types",
          title: "Types of Salts and pH Formulas",
          blocks: [
            {
              kind: "detailed",
              points: [
                "Strong Acid + Strong Base (e.g., NaCl): No hydrolysis. pH = 7.",
                "Strong Acid + Weak Base (e.g., NH₄Cl): Cationic hydrolysis. Acidic solution. pH = 7 - 1/2(pKb + log C).",
                "Weak Acid + Strong Base (e.g., CH₃COONa): Anionic hydrolysis. Basic solution. pH = 7 + 1/2(pKa + log C).",
                "Weak Acid + Weak Base (e.g., CH₃COONH₄): Both hydrolyze. pH = 7 + 1/2(pKa - pKb). Independent of concentration."
              ]
            },
            {
              kind: "exception",
              items: [
                {
                  statement: "Weak Acid + Weak Base salt pH doesn't change with dilution.",
                  why: "The formula pH = 7 + 1/2(pKa - pKb) contains no concentration term (C), assuming hydrolysis degrees are roughly equal."
                }
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Calculate the pH of 0.1 M CH₃COONa (pKa of CH₃COOH = 4.74).",
              thinking: "Salt of WA + SB. pH > 7. Formula: pH = 7 + 1/2(pKa + log C).",
              solution: "pH = 7 + 1/2(4.74 + log 0.1) = 7 + 1/2(4.74 - 1) = 7 + 1.87 = 8.87."
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Calculate the pH of 0.01 M NH₄Cl (pKb of NH₃ = 4.74).",
              thinking: "Salt of SA + WB. pH < 7. Formula: pH = 7 - 1/2(pKb + log C).",
              solution: "pH = 7 - 1/2(4.74 + log 0.01) = 7 - 1/2(4.74 - 2) = 7 - 1.37 = 5.63."
            },
            {
              kind: "illustration",
              level: "basic",
              question: "What is the nature of an aqueous solution of NaCN?",
              thinking: "NaCN is a salt of NaOH (Strong Base) and HCN (Weak Acid).",
              solution: "It undergoes anionic hydrolysis (CN⁻ + H₂O ⇌ HCN + OH⁻), making the solution basic (pH > 7)."
            }
          ]
        }
      ]
    },
    {
      id: "buffer-solutions",
      title: "Buffer Solutions",
      intro: "Solutions that resist change in pH upon addition of small amounts of acid or base.",
      subtopics: [
        {
          id: "acidic-basic-buffers",
          title: "Acidic and Basic Buffers",
          blocks: [
            {
              kind: "detailed",
              paras: [
                "Acidic Buffer: Weak Acid + its salt with a Strong Base (e.g., CH₃COOH + CH₃COONa).",
                "Basic Buffer: Weak Base + its salt with a Strong Acid (e.g., NH₄OH + NH₄Cl)."
              ],
              heading: "Henderson-Hasselbalch Equation",
              points: [
                "Acidic Buffer: pH = pKa + log([Salt]/[Acid])",
                "Basic Buffer: pOH = pKb + log([Salt]/[Base])"
              ]
            },
            {
              kind: "focus",
              title: "Buffer Capacity",
              points: [
                "Maximum buffer capacity occurs when [Salt] = [Acid] (or Base).",
                "At max capacity, pH = pKa (or pOH = pKb).",
                "Effective buffer range: pH = pKa ± 1."
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "Mixing equal moles of strong acid and weak base always forms a buffer.",
                  reality: "Equal moles completely neutralize to form a salt (hydrolysis). For a buffer, the weak component must be in EXCESS."
                }
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Calculate the pH of a buffer containing 0.1 M CH₃COOH and 0.2 M CH₃COONa (pKa = 4.74).",
              thinking: "Direct application of Henderson equation: pH = pKa + log(Salt/Acid).",
              solution: "pH = 4.74 + log(0.2/0.1) = 4.74 + log 2 = 4.74 + 0.301 = 5.041."
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "If 100 mL of 0.2 M CH₃COOH is mixed with 50 mL of 0.2 M NaOH, what is the pH? (pKa = 4.74)",
              thinking: "Moles of Acid = 20 mmol. Moles of Base = 10 mmol. Acid is in excess, so it forms a buffer.",
              solution: "10 mmol of NaOH neutralizes 10 mmol of CH₃COOH to form 10 mmol of CH₃COONa. Remaining CH₃COOH = 10 mmol. Since [Salt]/[Acid] = 1, pH = pKa = 4.74."
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "How many moles of solid NaCN must be added to 1 L of 0.1 M HCN to make a buffer of pH 9? (Ka for HCN = 4 × 10⁻¹⁰)",
              thinking: "pH = pKa + log([Salt]/[Acid]). pKa = -log(4×10⁻¹⁰) = 10 - log4 = 9.4.",
              solution: "9 = 9.4 + log([CN⁻]/0.1). log([CN⁻]/0.1) = -0.4. [CN⁻]/0.1 = 10⁻⁰.⁴ ≈ 0.4. [CN⁻] = 0.04 moles."
            }
          ]
        }
      ]
    },
    {
      id: "solubility-product",
      title: "Solubility Product (Ksp) and Common Ion Effect",
      intro: "Equilibrium between a sparingly soluble solid and its ions in solution.",
      subtopics: [
        {
          id: "ksp-calculations",
          title: "Ksp and Solubility (s)",
          blocks: [
            {
              kind: "detailed",
              paras: [
                "For a salt AxBy ⇌ xA^(y+) + yB^(x-)",
                "Ksp = [A^(y+)]^x [B^(x-)]^y",
                "If solubility is 's' mol/L: Ksp = (xs)^x (ys)^y = x^x y^y s^(x+y)"
              ],
              points: [
                "AB type (AgCl): Ksp = s²",
                "AB₂ type (PbCl₂): Ksp = 4s³",
                "AB₃ type (Al(OH)₃): Ksp = 27s⁴",
                "A₂B₃ type (As₂S₃): Ksp = 108s⁵"
              ]
            },
            {
              kind: "mistake",
              items: [
                {
                  wrong: "Comparing solubility of AgCl and Ag₂CrO₄ directly using Ksp values.",
                  right: "Cannot compare Ksp directly if stoichiometries are different (s² vs 4s³). Must calculate 's' to compare solubility."
                }
              ]
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Calculate the solubility of AgCl in pure water (Ksp = 10⁻¹⁰).",
              thinking: "AgCl is AB type. Ksp = s².",
              solution: "s = √(Ksp) = √(10⁻¹⁰) = 10⁻⁵ M."
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "The Ksp of PbCl₂ is 3.2 × 10⁻⁸. Find its solubility in water.",
              thinking: "PbCl₂ is AB₂ type. Ksp = 4s³.",
              solution: "4s³ = 3.2 × 10⁻⁸ ⟶ s³ = 0.8 × 10⁻⁸ = 8 × 10⁻⁹ ⟶ s = 2 × 10⁻³ M."
            }
          ]
        },
        {
          id: "precipitation-common-ion",
          title: "Precipitation and Common Ion Effect",
          blocks: [
            {
              kind: "detailed",
              points: [
                "Ionic Product (Qsp) vs Ksp:",
                "If Qsp < Ksp: Unsaturated, more solid can dissolve.",
                "If Qsp = Ksp: Saturated, at equilibrium.",
                "If Qsp > Ksp: Supersaturated, precipitation occurs.",
                "Common Ion Effect: Adding a common ion shifts equilibrium backward, suppressing the solubility of the sparingly soluble salt."
              ]
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Calculate the solubility of AgCl (Ksp = 10⁻¹⁰) in 0.1 M NaCl.",
              thinking: "NaCl provides a common Cl⁻ ion (0.1 M). In equilibrium: Ksp = [Ag⁺][Cl⁻]. [Cl⁻] ≈ 0.1 M.",
              solution: "10⁻¹⁰ = (s)(0.1) ⟶ s = 10⁻⁹ M. Note: Solubility decreased from 10⁻⁵ to 10⁻⁹ due to the common ion effect."
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "Will a precipitate of CaF₂ (Ksp = 4×10⁻¹¹) form when equal volumes of 2×10⁻⁴ M Ca(NO₃)₂ and 2×10⁻⁴ M NaF are mixed?",
              thinking: "Volumes double upon mixing, so concentrations halve. [Ca²⁺] = 10⁻⁴ M, [F⁻] = 10⁻⁴ M.",
              solution: "Qsp = [Ca²⁺][F⁻]² = (10⁻⁴)(10⁻⁴)² = 10⁻¹². Since Qsp (10⁻¹²) < Ksp (4×10⁻¹¹), no precipitation occurs."
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "Determine the pH at which Mg(OH)₂ begins to precipitate from a 0.01 M Mg²⁺ solution. (Ksp = 1×10⁻¹¹)",
              thinking: "Precipitation starts when Qsp = Ksp. [Mg²⁺][OH⁻]² = Ksp.",
              solution: "(0.01)[OH⁻]² = 10⁻¹¹ ⟶ [OH⁻]² = 10⁻⁹ ⟶ [OH⁻] = 10⁻⁴.⁵. pOH = 4.5. pH = 14 - 4.5 = 9.5."
            }
          ]
        }
      ]
    },
    {
      id: "acid-base-titrations",
      title: "Acid-Base Titrations & Indicators",
      intro: "Understanding equivalence points and selecting appropriate indicators.",
      subtopics: [
        {
          id: "titration-indicators",
          title: "Indicators and Ranges",
          blocks: [
            {
              kind: "detailed",
              paras: [
                "Indicators are weak organic acids (HIn) or bases that change color based on pH.",
                "HIn ⇌ H⁺ + In⁻. (Color 1 ⇌ Color 2)",
                "pH = pK_In + log([In⁻]/[HIn]).",
                "Visible color change requires the ratio [In⁻]/[HIn] to shift from 1/10 to 10/1.",
                "Effective indicator range: pH = pK_In ± 1."
              ]
            },
            {
              kind: "focus",
              title: "Choice of Indicator",
              points: [
                "Strong Acid - Strong Base: Any indicator (pH jump 3 to 11). (Phenolphthalein, Methyl Orange)",
                "Strong Acid - Weak Base: Methyl Orange (pH range 3.1 - 4.4) since equivalence pH < 7.",
                "Weak Acid - Strong Base: Phenolphthalein (pH range 8.3 - 10) since equivalence pH > 7.",
                "Weak Acid - Weak Base: No sharp pH jump, no simple indicator is suitable."
              ]
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Which indicator is best suited for the titration of CH₃COOH with NaOH?",
              thinking: "This is a Weak Acid (CH₃COOH) vs Strong Base (NaOH) titration. The salt formed (CH₃COONa) undergoes anionic hydrolysis, making the equivalence point pH basic (>7).",
              solution: "Phenolphthalein is suitable as its color change interval is in the basic range (8.3 - 10.0)."
            },
            {
              kind: "illustration",
              level: "basic",
              question: "An indicator HIn has a pKa of 5.0. What is its active working range?",
              thinking: "Working range is pKa ± 1.",
              solution: "The range is 4.0 to 6.0."
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "During titration of 10 mL of 0.1 M HCl with 0.1 M NaOH, what is the pH after 5 mL of NaOH is added?",
              thinking: "Initial moles of H⁺ = 1 mmol. Added OH⁻ = 0.5 mmol. Remaining H⁺ = 0.5 mmol. Total volume = 15 mL.",
              solution: "[H⁺] = 0.5 / 15 = 1/30 M. pH = -log(1/30) = log(30) = 1.48."
            }
          ]
        }
      ]
    }
  ],
  chapterRevision: [
    "Kw = 10⁻¹⁴ at 25°C. Increases with temperature.",
    "For weak acids, pH = 1/2(pKa - log C). For weak bases, pOH = 1/2(pKb - log C).",
    "Hydrolysis: SA+SB (pH=7), WA+SB (pH>7), SA+WB (pH<7), WA+WB (pH = 7 + 1/2(pKa-pKb)).",
    "Acidic Buffer: pH = pKa + log(Salt/Acid). Basic Buffer: pOH = pKb + log(Salt/Base).",
    "Ksp calculations depend on stoichiometry: s², 4s³, 27s⁴.",
    "Common ion effect drastically decreases solubility.",
    "Precipitation condition: Ionic Product (Qsp) > Solubility Product (Ksp).",
    "Indicators range: pH = pK_In ± 1. Phenolphthalein for WA-SB, Methyl Orange for SA-WB."
  ]
};
