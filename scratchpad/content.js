const H = require("./build_aem_notes.js");
const {
  Paragraph, TextRun, PageBreak, AlignmentType,
  h1, h2, h3, p, eq, bulletsList, b, it, t, bc, jeeTrap, motBox, ncertBox, spacer, dataTable, add, children,
  FONT, HFONT, NAVY, TEAL, GOLD, RED,
} = H;

// ============================================================ TITLE PAGE
add(
  new Paragraph({ spacing: { before: 1400 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "JEE ADVANCED", bold: true, font: HFONT, size: 26, color: GOLD })] }),
  new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MASTER NOTES", bold: true, font: HFONT, size: 26, color: GOLD })] }),
  new Paragraph({ spacing: { before: 200, after: 100 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ALKALINE EARTH METALS", bold: true, font: HFONT, size: 52, color: NAVY })] }),
  new Paragraph({ spacing: { after: 400 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Group 2 · s-Block Elements", italics: true, font: FONT, size: 26, color: TEAL })] }),
  new Paragraph({ spacing: { after: 900 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Be   ·   Mg   ·   Ca   ·   Sr   ·   Ba   ·   Ra", bold: true, font: HFONT, size: 24, color: "555555" })] }),
);
add(ncertBox("How to read these notes", [
  p([t("Built from NCERT (Unit 10, Class XI Chemistry), J.D. Lee's "), it("Concise Inorganic Chemistry"), t(" (Group 2), and JEE-Advanced coaching sources, cross-checked for consistency. Green boxes mark NCERT-exact scope/definitions/uses; blue boxes give molecular-orbital / valence-bond reasoning for bonding; orange boxes flag traps examiners exploit.")]),
]));
add(spacer(1200));
add(new Paragraph({ spacing: { after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Compiled for rigorous, theory-first, reaction-complete revision.", italics: true, font: FONT, size: 19, color: "777777" })] }));
add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 1 — GENERAL PROPERTIES
add(h1("1. Introduction & General Trends"));
add(p([b("Group 2 "), t("comprises "), b("Be, Mg, Ca, Sr, Ba, Ra"), t(" — general valence configuration "), it("n"), t("s"), it("2"), t(". All members except Be are traditionally called "), b("alkaline earth metals"), t(" because their oxides/hydroxides are alkaline and the metals occur combined as \"earths\" (refractory oxide minerals) in nature.")]));

add(h2("1.1 Electronic Configuration & Oxidation State"));
add(dataTable(["Element", "Symbol", "Configuration", "Atomic No."],
  [["Beryllium", "Be", "[He] 2s²", "4"], ["Magnesium", "Mg", "[Ne] 3s²", "12"], ["Calcium", "Ca", "[Ar] 4s²", "20"], ["Strontium", "Sr", "[Kr] 5s²", "38"], ["Barium", "Ba", "[Xe] 6s²", "56"], ["Radium", "Ra", "[Rn] 7s²", "88"]],
  [2.2, 1, 2.5, 1.3]));
add(p([t("+2 is the only significant oxidation state. Removing both "), it("n"), t("s electrons leaves a noble-gas core, so the "), b("third ionization enthalpy is enormous "), t("(e.g. IE₃ of Be ≈ 14,847 kJ/mol, Mg ≈ 7,731 kJ/mol) — M³⁺ is never formed.")]));

add(h2("1.2 Occurrence (minerals worth remembering)"));
add(bulletsList([
  [b("Be: "), t("beryl Be₃Al₂Si₆O₁₈ (rare)")],
  [b("Mg: "), t("magnesite MgCO₃, dolomite CaCO₃·MgCO₃, carnallite KCl·MgCl₂·6H₂O, seawater")],
  [b("Ca: "), t("limestone/chalk/marble (CaCO₃), gypsum CaSO₄·2H₂O, fluorite CaF₂, fluorapatite 3Ca₃(PO₄)₂·CaF₂")],
  [b("Sr: "), t("celestite SrSO₄, strontianite SrCO₃")],
  [b("Ba: "), t("barytes BaSO₄, witherite BaCO₃")],
  [b("Ra: "), t("extreme trace, radioactive; isolated by the Curies from pitchblende")],
]));

add(h2("1.3 Atomic & Ionic Radii"));
add(p("Radii increase steadily down the group as a new shell is added each period. At the same time, Group 2 atoms/ions are smaller than the corresponding Group 1 element of the same period, because the extra proton (higher nuclear charge) pulls the electron cloud in more tightly."));
add(dataTable(["Quantity", "Be", "Mg", "Ca", "Sr", "Ba"],
  [["Metallic radius (pm)", "111", "160", "197", "215", "222"], ["M²⁺ ionic radius (pm)", "31", "72", "100", "118", "135"]],
  [2, 1, 1, 1, 1, 1]));

add(h2("1.4 Ionization Enthalpy"));
add(dataTable(["", "Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
  [["IE₁ (kJ/mol)", "899", "737", "590", "549", "503", "509"], ["IE₂ (kJ/mol)", "1757", "1450", "1145", "1064", "965", "979"]],
  [1.6, 1, 1, 1, 1, 1, 1]));
add(p([t("Ra's IE₁/IE₂ are very slightly "), b("higher"), t(" than Ba's — this is not a random anomaly. Radium comes right after the "), b("4f¹⁴ subshell"), t(" is filled (through the lanthanides) and after the 5d subshell too; the poorly-shielding, diffuse 4f electrons let the nuclear charge \"leak through\" more effectively to the outer 7s electrons — the same "), it("lanthanide-contraction-type"), t(" effect responsible for Cs vs. Fr and other 6th/7th-period irregularities. So Ra is very slightly "), b("smaller and harder to ionize"), t(" than a naive extrapolation down the group would predict.")]));

add(ncertBox("Why is IE₁(Group 2) > IE₁(Group 1) but IE₂(Group 2) < IE₂(Group 1) for the same period?", [
  p([t("Group 2 atoms are smaller than the Group 1 atom of the same period (higher nuclear charge), so their "), b("IE₁ is higher"), t(". But a Group 1 atom, having lost one electron, already has a noble-gas core — pulling out a "), b("second"), t(" electron from that core (IE₂ of Group 1) is extremely costly. For Group 2, the second electron removed is the one that "), it("completes"), t(" the noble-gas configuration, so "), b("IE₂ of Group 2 < IE₂ of Group 1"), t(" for the same period.")]),
]));

add(h2("1.5 Hydration Enthalpy"));
add(dataTable(["M²⁺", "Be²⁺", "Mg²⁺", "Ca²⁺", "Sr²⁺", "Ba²⁺"],
  [["ΔH_hyd (kJ/mol)", "−2494", "−1921", "−1577", "−1443", "−1305"]], [1.6, 1, 1, 1, 1, 1]));
add(p([t("Hydration enthalpies fall steadily as ionic size increases (weaker ion–dipole pull). Group 2 values run "), b("4–5× larger"), t(" than the corresponding Group 1 ion (smaller size, double the charge). This is why Group 2 salts crystallize with far more water of hydration than Group 1 salts: "), it("MgCl₂·6H₂O, CaCl₂·6H₂O, SrCl₂·6H₂O, BaCl₂·2H₂O"), t(" exist, while NaCl and KCl are anhydrous. Note the number of hydrate waters "), b("falls"), t(" down the group as hydration enthalpy weakens.")]));

add(h2("1.6 Melting Point, Boiling Point, Density"));
add(dataTable(["", "Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
  [["m.p. (K)", "1560", "924", "1124", "1062", "1002", "973"], ["b.p. (K)", "2745", "1363", "1767", "1655", "2078", "≈1973"], ["Density (g/cm³)", "1.84", "1.74", "1.55", "2.63", "3.59", "≈5.5"]],
  [1.3, 1, 1, 1, 1, 1, 1]));
add(p([b("The actual crystal structures behind the \"different lattice\" explanation: "), t("Be and Mg adopt "), b("hexagonal close-packed (hcp, CN = 12)"), t("; Ca and Sr adopt "), b("cubic close-packed (ccp/fcc, CN = 12)"), t(" at room temperature; Ba adopts "), b("body-centred cubic (bcc, CN = 8)"), t(". Ca even undergoes its own "), it("fcc → bcc phase transition"), t(" on heating. Since bcc packing is less efficient (lower coordination number, lower packing fraction) than hcp/ccp, the metallic bonding is weaker wherever bcc appears — this is precisely why Ba (bcc) breaks the naive \"m.p. falls smoothly down the group\" pattern.")]));
add(jeeTrap([
  [t("The m.p./b.p./density trend down the group is "), bc("NOT monotonic", RED), t(" — do not force a simple \"decreases smoothly\" or \"increases smoothly\" narrative. NCERT itself flags this explicitly: the metals crystallize in "), b("different lattice structures"), t(", so the trend is irregular.")],
  [t("Group 2 metals are harder and higher-melting than the corresponding Group 1 metals because "), b("two"), t(" valence electrons (not one) participate in metallic bonding — roughly double the cohesive energy.")],
]));

add(h2("1.7 Standard Reduction Potential & Reducing Power"));
add(dataTable(["M²⁺/M", "Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
  [["E° (V), J.D. Lee Table 11.9", "−1.85", "−2.37", "−2.87", "−2.89", "−2.91", "−2.92"]], [1.5, 1, 1, 1, 1, 1, 1]));
add(bulletsList([
  [t("Reducing power broadly increases Be → Ba, but "), b("Be is anomalous"), t(" — its E° is "), b("least negative"), t(" in the group (weakest reducing agent). This indicates Be is much less electropositive (less \"metallic\") than the rest of the group.")],
  [t("Ca, Sr, Ba have reduction potentials "), b("similar to the corresponding Group 1 metals"), t(", and are quite high in the electrochemical series.")],
]));
add(ncertBox("NCERT's exact reasoning for Be's weak reducing power (matches J.D. Lee's Born–Haber-type logic)", [
  p([it("\"Beryllium has less negative value compared to other alkaline earth metals. However, its reducing nature is due to large hydration energy associated with the small size of Be²⁺ ion and relatively large value of the atomization enthalpy of the metal.\"")]),
  p([t("Key idea: E° is a "), b("net thermodynamic sum"), t(" of atomization enthalpy + IE₁ + IE₂ + hydration enthalpy — it cannot be read off from ionization enthalpy alone. This mirrors the classic Li-anomaly in Group 1.")]),
]));
add(jeeTrap([
  [t("Different textbooks tabulate E°(Be²⁺/Be) as either −1.85 V (J.D. Lee, and used in Be–Al comparisons) or −1.97 V (some standard data tables) — both are legitimate literature values (method-dependent). Use "), b("−1.85 V"), t(" as the primary JEE-quotable figure since it is the one that correctly places Be closest to Al (−1.66 V) among all metals.")],
]));

add(h2("1.8 Flame Colours"));
add(dataTable(["Metal", "Ca", "Sr", "Ba", "Be, Mg"],
  [["Flame colour", "Brick red", "Crimson", "Apple green", "None"]], [1, 1, 1, 1, 1.3]));
add(p([t("Mechanism: flame heat promotes an outer electron to a higher level; on relaxation the energy is emitted as visible light (E = h"), it("ν"), t("). "), b("Be and Mg show no flame colour"), t(" because their valence electrons are too strongly (tightly) bound by the small, high-charge-density nucleus to be excited at ordinary flame temperatures.")]));
add(jeeTrap([
  [t("\"Mg burns with a dazzling white light\" describes "), b("combustion emission"), t(" (incandescent MgO), "), it("not"), t(" a flame-test colour for Mg²⁺. Mg still gives "), b("no"), t(" characteristic flame-test line.")],
]));

add(h2("1.9 Extraction of the Metals (J.D. Lee)"));
add(p([t("Group 2 metals are themselves strong reducing agents and are strongly electropositive, so aqueous solutions cannot be used to displace them with another metal, and simple chemical reduction of the oxides is not viable. Electrolysis of aqueous solutions is possible using a mercury cathode (giving an amalgam), but recovering the pure metal from the amalgam is difficult. "), b("All the metals can be obtained by electrolysis of the fused chloride"), t(", with NaCl added to lower the melting point, though Sr and Ba tend to form a colloidal suspension during the process.")]));
add(h3("Beryllium"));
add(bulletsList([
  [t("Extracted from beryl Be₃Al₂Si₆O₁₈ by fusion or sulphuric acid treatment to give soluble BeSO₄, which is treated with NH₄OH to precipitate the hydroxide Be(OH)₂ (BeO is amphoteric, but the aluminium is removed as the soluble tetrahydroxoaluminate complex).")],
  [t("Be(OH)₂ is converted to BeF₂ (by treatment with HF), and the metal is obtained either by "), b("reduction with Mg"), t(": "), it("BeF₂ + Mg → Be + MgF₂"), t(", or by electrolysis of the fused chloride made from BeO + C + Cl₂.")],
  [t("Both Be and BeO must be handled with extreme purity control — the main use of the metal is as a neutron moderator/reflector in nuclear reactors, and for windows on X-ray tubes because of its very low electron density (low X-ray absorption).")],
]));
add(h3("Magnesium"));
add(eq("MgO + C  →(2000 °C)→  Mg + CO     (quenched rapidly — the reverse reaction is thermodynamically favoured on cooling)"));
add(bulletsList([
  [b("Pidgeon process: "), t("calcined dolomite [CaCO₃·MgCO₃ → CaO·MgO] is reduced by heating with "), b("ferrosilicon"), t(" at 1150 °C under reduced pressure:")],
]));
add(eq("[CaCO₃·MgCO₃]  →(heat)→  CaO·MgO  +Fe/Si→  Mg + Ca₂SiO₄ + Fe"));
add(bulletsList([
  [b("Dow sea water process: "), t("seawater (≈0.13% Mg²⁺) is treated with slaked lime — Mg(OH)₂ is far less soluble than Ca(OH)₂, so it precipitates and is filtered off, then converted to MgCl₂ with HCl and electrolysed:")],
]));
add(eq("Ca(OH)₂ + MgCl₂(seawater) → Mg(OH)₂↓ + CaCl₂          Mg(OH)₂ + HCl →(heat)→ MgCl₂"));
add(bulletsList([
  [b("Dow natural brine process: "), t("calcined dolomite (MgO·CaO) is treated with HCl to give a CaCl₂/MgCl₂ solution; adding more calcined dolomite plus CO₂ precipitates CaCO₃, leaving pure MgCl₂ solution for electrolysis:")],
]));
add(eq("CaCl₂·MgCl₂ + CaO·MgO + 2CO₂ → 2MgCl₂ + 2CaCO₃↓"));
add(h3("Calcium, Strontium, Barium"));
add(p([t("Ca metal is obtained by electrolysis of fused CaCl₂ (from the Solvay-process waste stream, or from CaCO₃ + HCl). World production of Ca metal is only about 1000 tonnes/year; it is used in Al alloys, in the iron/steel industry to control carbon and scavenge P, O and S, as a reducing agent for Zr/Cr/Th/U, and to remove traces of N₂ from argon. Sr and Ba are produced on a much smaller scale, by electrolysis of the fused chloride, or by thermite-type reduction of the oxide with aluminium.")]));

add(h2("1.10 Uses of the Group 2 Metals Themselves (NCERT §10.6.7)"));
add(ncertBox("NCERT-exact uses list — the metals, not their compounds", [
  ...bulletsList([
    "Beryllium: used in the manufacture of alloys — copper–beryllium alloys are used to prepare high-strength springs. Metallic beryllium is used for making windows of X-ray tubes.",
    "Magnesium: forms alloys with aluminium, zinc, manganese and tin. Mg–Al alloys, being light in mass, are used in aircraft construction. Magnesium (powder and ribbon) is used in flash powders and bulbs, incendiary bombs, and signals. A suspension of magnesium hydroxide in water (\"milk of magnesia\") is used as an antacid in medicine. Magnesium carbonate is an ingredient of toothpaste.",
    "Calcium: used in the extraction of metals from oxides which are difficult to reduce with carbon. Calcium and barium metals, owing to their reactivity with oxygen and nitrogen at elevated temperatures, have often been used to remove the last traces of air from vacuum tubes (as \"getters\").",
    "Radium: radium salts are used in radiotherapy, for example in the treatment of cancer.",
  ]),
]));

add(h2("1.11 Lattice Energy vs Hydration Energy — The Master Solubility Framework"));
add(p([t("Solubility of Group 2 compounds departs from the usual \"heavier = less soluble\" intuition and is instead governed entirely by the "), b("competition between lattice energy and hydration energy"), t(" as the cation grows down the group.")]));
add(dataTable(["Lattice energy (kJ/mol)", "Mg", "Ca", "Sr", "Ba"], [
  ["MO", "−3923", "−3517", "−3312", "−3120"],
  ["MCO₃", "−3078", "−2986", "−2718", "−2614"],
  ["MF₂", "−2906", "−2610", "−2496", "−2367"],
  ["MCl₂", "−2592", "−2258", "−2159", "−2018 (approx.)"],
], [1.6, 1, 1, 1, 1]));
add(dataTable(["ΔH_hydration (kJ/mol)", "Be²⁺", "Mg²⁺", "Ca²⁺", "Sr²⁺", "Ba²⁺"], [["", "−2494", "−1921", "−1577", "−1443", "−1305"]], [1.6, 1, 1, 1, 1, 1]));
add(motBox("J.D. Lee's exact reasoning (the single most important paragraph in the chapter)", [
  p([it("\"For a substance to dissolve, the hydration energy must exceed the lattice energy. Consider a related group of compounds, such as the chlorides of all the Group 2 metals. On descending the group, the metal ions become larger and so both the lattice energy and the hydration energy decrease. A decrease in lattice energy favours increased solubility, but a decrease in hydration energy favours decreased solubility. These two factors thus change in opposite directions, and the overall effect depends on which of the two has changed most. With most compounds, on descending the group, the hydration energy decreases more rapidly than the lattice energy: hence the compounds become less soluble as the metal gets larger. However, with fluorides and hydroxides the lattice energy decreases more rapidly than the hydration energy, and so their solubility increases on descending the group.\"")]),
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 2 — REACTIVITY
add(h1("2. Chemical Reactivity"));

add(h2("2.1 Reactivity toward Air / O₂ / N₂"));
add(bulletsList([
  [b("Be, Mg: "), t("kinetically inert at room temperature — a thin, adherent protective oxide film forms and stops further attack. The metals are relatively unreactive in massive form and do not react below about 600 °C, but powdered metal is far more reactive: powdered Be ignites to give BeO + Be₃N₂. Mg burns with dazzling brilliance, evolving a great deal of heat — this is used to "), b("start a thermite reaction"), t(" with aluminium, and to provide light in (old-style) flash photography using light bulbs, not electronics, giving MgO + Mg₃N₂.")],
  [b("Ca, Sr, Ba: "), t("tarnish readily even at ordinary temperature, forming oxide + nitride.")],
  [t("Normal oxide MO forms on burning in excess O₂ for all members; "), b("Ba additionally forms the peroxide BaO₂"), t(" (2Ba + O₂ → 2BaO₂) — peroxide-forming tendency "), b("increases with cation size"), t(" (a larger, less polarizing cation stabilizes the large, diffuse O₂²⁻ ion better).")],
]));
add(jeeTrap([
  [t("Burning Mg is "), b("not"), t(" extinguished by CO₂ — Mg is a strong enough reductant to reduce it: "), it("2Mg + CO₂ → 2MgO + C"), t(". CO₂ extinguishers must never be used on a magnesium fire.")],
]));

add(h2("2.2 Reactivity toward Water"));
add(dataTable(["Metal", "Behaviour"],
  [["Be", "Essentially inert; protected by BeO film (sources note some doubt whether it reacts with steam at all)"],
   ["Mg", "No reaction with cold water; slowly decomposes hot water → Mg(OH)₂ + H₂; with steam → MgO + H₂"],
   ["Ca, Sr, Ba", "React readily with cold water: M + 2H₂O → M(OH)₂ + H₂↑"]],
  [1, 4]));
add(p([t("Magnesium's E° (−2.37 V) is actually favourable for reaction, but Mg "), b("forms a protective oxide layer"), t(" — so despite this favourable reduction potential it does not readily react with cold water unless the oxide layer is first removed, e.g. by "), b("amalgamating the surface with mercury"), t(". In this particular respect (a favourable driving force blocked by a passivating oxide film), Mg's behaviour resembles that of aluminium.")]));
add(jeeTrap([
  [t("The isolated solid product from Mg + water depends on "), b("conditions"), t(": "), it("hot liquid water"), t(" → Mg(OH)₂ + H₂, but "), it("steam"), t(" → MgO + H₂ (dehydration favoured at higher T). \"Mg + steam → Mg(OH)₂\" is a commonly-set wrong option.")],
  [t("Be doesn't react with water because of "), b("kinetic passivation"), t(", not because it's thermodynamically unreactive — same logic pattern as Li in Group 1 (most negative E°, yet reacts gently with water due to a high melting point/low surface-area factor). Never infer reactivity from E° alone.")],
]));

add(h2("2.3 Reactivity toward Dihydrogen — Hydrides"));
add(p([t("Ca, Sr, Ba (and Mg, with more difficulty) react directly with H₂ on heating to give MH₂: "), it("Ca + H₂ → CaH₂"), t(". BeH₂ cannot be made this way and must instead be made "), b("indirectly"), t(", by two independent routes:")]));
add(eq("2BeCl₂ + LiAlH₄ → 2BeH₂ + LiCl + AlCl₃"));
add(p([it("Mechanistic picture: "), t("LiAlH₄ is a source of the hydride nucleophile H⁻. In effect, H⁻ attacks the small, electron-deficient, highly electrophilic Be centre and displaces Cl⁻ — an "), b("SN2-like nucleophilic substitution"), t(" at beryllium, repeated until both chlorines are replaced by hydride.")]));
add(p([t("A purer sample (free of Al/Li contamination) is obtained via a two-step borohydride route:")]));
add(eq("BeCl₂ + 2Li[BH₄] → BeB₂H₈ + 2LiCl          BeB₂H₈ + 2PPh₃  →(sealed tube, heat)→  BeH₂ + 2Ph₃PBH₃"));
add(p([b("Ionic vs covalent nature: "), t("CaH₂, SrH₂, BaH₂ are "), b("ionic"), t(" (contain discrete H⁻); BeH₂ and MgH₂ are "), b("covalent and polymeric"), t(". All hydrides are strong reducing agents and hydrolyse in water/dilute acid liberating H₂:")]));
add(eq("CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂     (CaH₂ = \"hydrolith\")"));

add(motBox("Why is BeH₂ electron-deficient & polymeric?", [
  p([t("Ground-state Be is 1s²2s² — "), b("no unpaired electrons"), t(", so it cannot form two ordinary covalent bonds directly. Promoting one 2s electron to 2p gives 1s²2s¹2p¹ (two unpaired electrons, "), b("sp hybridisation"), t(") — this lets an "), it("isolated gas-phase"), t(" BeH₂/BeX₂ molecule be "), b("linear"), t(" (180°).")]),
  p([t("But even after sp-hybridised bonding, Be's outer shell holds only 4 electrons around it — it is "), b("electron-deficient"), t(". In the condensed (solid) phase Be resolves this by forming "), b("3-centre–2-electron (\"banana\") bonds"), t(": each Be–H–Be bridge is one shared electron pair spread over three atoms, so the polymer chain gives every Be a coordination number of 4 despite Be starting with only 2 valence electrons. This is the same "), it("electron-deficient cluster bonding"), t(" logic used for diborane B₂H₆.")]),
]));

add(h2("2.4 Reactivity toward Halogens — Halides"));
add(p([t("M + X₂ → MX₂ for all members. "), b("Except beryllium halides, all Group 2 halides are ionic."), t(" BeCl₂ and BeF₂ are prepared as:")]));
add(eq("BeO + C + Cl₂  →(600–800 K)→  BeCl₂ + CO          2BeO + CCl₄  →(800 °C)→  2BeCl₂ + CO₂"));
add(eq("BeO + 2NH₃ + 4HF → (NH₄)₂BeF₄  →(heat)→  BeF₂ + 2NH₄F     [(NH₄)₂BeF₄ = ammonium fluoroberyllate]"));
add(p([t("Anhydrous Be/Mg halides "), b("cannot"), t(" be obtained by simply heating the hydrate — this causes hydrolysis instead of dehydration:")]));
add(eq("[Be(H₂O)₄]Cl₂  →(heat)→  Be(OH)₂ + 2HCl + 2H₂O          MgCl₂·6H₂O  →(heat)→  MgO + 2HCl + 5H₂O"));
add(p([t("This is a general rule for "), b("small, highly-charged, strongly polarising cations"), t(" — the same hydrolysis-on-heating problem is seen with Be²⁺, Mg²⁺, Al³⁺, Cr³⁺, Fe³⁺ and similar high-charge-density ions across the periodic table, not just Group 2. Contrast this with Ca, Sr, Ba, where dehydration proceeds cleanly on heating with no hydrolysis:")]));
add(eq("CaCl₂·6H₂O  →(heat)→  CaCl₂ + 6H₂O     (simple dehydration — no hydrolysis, because Ca²⁺ is a much weaker polariser)"));
add(p([t("(Industrially, anhydrous MgCl₂ is instead made by heating the double salt MgCl₂·NH₄Cl·6H₂O, which loses water first and NH₄Cl only at higher T, avoiding hydrolysis:")]));
add(eq("MgCl₂·NH₄Cl·6H₂O  →(−H₂O, Δ)→  MgCl₂·NH₄Cl  →(strong Δ)→  MgCl₂ + NH₃ + HCl"));
add(p([t("Anhydrous CaCl₂ is an excellent drying agent for gases and organic vapours — "), b("but not for NH₃ or ethanol"), t(", since it forms stable adducts instead: CaCl₂·8NH₃ and CaCl₂·4C₂H₅OH. A JEE-favourite exception to \"CaCl₂ dries everything.\"")]));

add(motBox("BeCl₂ structure — solid, dimer, and monomer", [
  p([b("Solid state: "), t("an infinite zig-zag "), b("chain polymer"), t(" with chlorine bridges — each Cl makes one normal covalent bond to one Be and donates a lone pair (dative bond) to the next Be, giving every Be a coordination number of 4.")]),
  p([b("Vapour, moderate T: "), t("a chloro-bridged "), b("dimer"), t(" Be₂Cl₄.")]),
  p([b("Vapour, ~1200 K: "), t("dissociates into the "), b("linear monomer"), t(" (sp-hybridised, 2-coordinate, electron-deficient).")]),
  p([t("Contrast: in Be(CH₃)₂ the bridge is a genuine "), b("3-centre-2-electron bond"), t(" spanning Be···CH₃···Be (like BeH₂), "), it("not"), t(" simple lone-pair donation as in the chlorine bridges of (BeCl₂)ₙ — a subtle but real mechanistic difference between halide bridging (dative) and alkyl bridging (electron-deficient).")]),
]));

add(h3("Covalency trend (Fajans' rules)"));
add(p([t("Covalent character: "), b("BeX₂ > MgX₂ > CaX₂ > SrX₂ > BaX₂"), t(" — the small, highly-charged Be²⁺ polarizes the anion's electron cloud strongly (\"small highly charged ions tend to form covalent compounds\"). For a fixed cation, covalency rises with anion polarizability: I⁻ > Br⁻ > Cl⁻ > F⁻.")]));
add(jeeTrap([
  [t("BeF₂ has the "), b("largest"), t(" electronegativity difference of any Be halide, yet is still regarded as covalent when fused (very low melt conductivity) — high charge density beats electronegativity difference for Be specifically.")],
  [t("BeF₂ is, unusually, "), b("very soluble"), t(" in water (owing to the huge solvation energy that forms [Be(H₂O)₄]²⁺), even though heavier Group-2 fluorides are all almost insoluble — MF₂ (M = Mg, Ca, Sr, Ba) are white, insoluble, high-melting ionic solids.")],
  [t("Hydration of halides "), b("decreases"), t(" down the group: CaCl₂·6H₂O, SrCl₂·6H₂O, but "), b("BaCl₂·2H₂O"), t(" only. For MgCl₂, NCERT itself is internally inconsistent — §10.6.4 states MgCl₂·6H₂O, but the halides table in §10.7 states MgCl₂·8H₂O for the very same salt. Both forms appear in circulation; if a question is drawn straight from NCERT's halides section, expect "), b("8H₂O"), t("; otherwise "), b("6H₂O"), t(" is the more common literature value (matching J.D. Lee).")],
]));

add(h3("Chlorides, bromides, iodides — solubility and industrial uses"));
add(p([t("The chlorides, bromides and iodides of Mg, Ca, Sr, Ba are ionic, have much lower melting points than the fluorides, and are readily soluble in water; solubility falls off somewhat with increasing atomic number. All these halides form hydrates and are "), b("hygroscopic"), t(" (absorb water vapour from the air). "), b("CaF₂"), t(" is the main industrial source of both F₂ and HF:")]));
add(eq("CaF₂ + H₂SO₄ → 2HF + CaSO₄          HF + KF  →(electrolysis)→  F₂"));
add(p([t("Several million tonnes of "), b("CaCl₂"), t(" are produced annually, mostly discarded as a low-value Solvay-process by-product. Uses: treating ice on roads (a 30% CaCl₂/H₂O eutectic freezes at −55 °C, vs −18 °C for NaCl/H₂O — far more effective in very cold climates); making concrete set faster and stronger; as a laboratory desiccant (drying agent) owing to its strong hygroscopicity; and (via the electrolytic route) as the feedstock for extracting Ca metal.")]));

add(h2("2.5 Reactivity toward Acids and Alkalis"));
add(eq("M + 2HCl → MCl₂ + H₂↑   (Mg, Ca, Sr, Ba)"));
add(p([t("Be reacts only after its oxide film is removed, and — like Al — is "), b("rendered passive by concentrated HNO₃"), t(" (a thin protective oxide layer forms). "), b("Be is amphoteric even as the metal"), t(", dissolving in NaOH:")]));
add(eq("Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂↑   (sodium beryllate)"));
add(p([t("Mg, Ca, Sr, Ba do "), b("not"), t(" react with NaOH — they are purely basic metals.")]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 3 — REDUCING NATURE / LIQUID NH3
add(h1("3. Reducing Nature & Solutions in Liquid Ammonia"));
add(p([t("Ca, Sr, Ba dissolve in liquid NH₃ to give "), b("deep blue"), t(" solutions — identical phenomenon to Group 1 — due to "), b("ammoniated (solvated) electrons"), t(":")]));
add(eq("M + (x+y)NH₃ → [M(NH₃)ₓ]²⁺ + 2[e(NH₃)ᵧ]⁻"));
add(bulletsList([
  [t("Concentrated solutions turn "), b("bronze-coloured"), t(" (metal clusters form).")],
  [t("On standing/evaporation, Group 2 solutions do "), b("not"), t(" simply deposit the metal back (unlike Group 1) — evaporation instead gives crystalline "), b("hexammoniates"), t(" M(NH₃)₆, which slowly decompose to the amide:")],
]));
add(eq("M(NH₃)₆ → M(NH₂)₂ + 4NH₃ + H₂↑"));
add(p([t("Mg is far less soluble in liquid NH₃ under ordinary conditions; Be does not typically show this behaviour. Net reducing action of the solution: 2NH₃ + 2e⁻ → 2NH₂⁻ + H₂ — the ammoniated electron acts as a powerful reducing agent / very strong base.")]));

// ============================================================ SECTION 4 — NITRIDES & CARBIDES
add(h1("4. Nitrides and Carbides"));
add(h2("4.1 Nitrides"));
add(p([t("All Group 2 metals burn in N₂ to form "), b("ionic nitrides M₃N₂"), t(" — in sharp contrast to Group 1, where only Li (the smallest, most polarizing) forms a nitride Li₃N. The reason is the same in both groups: nitride formation needs a very large "), b("lattice energy"), t(" to overpay for breaking the strong N≡N bond, and lattice energy is large whenever both ions carry high charge (M²⁺, N³⁻) — so it works for the "), it("whole"), t(" of Group 2, not just the smallest member.")]));
add(eq("Ca₃N₂ + 6H₂O → 3Ca(OH)₂ + 2NH₃↑     (all nitrides hydrolyse this way)"));
add(p([t("Be₃N₂ is comparatively volatile (greater covalent character of Be); the other nitrides are not.")]));

add(h2("4.2 Carbides"));
add(dataTable(["Carbide", "Anion", "Hydrolysis product", "Note"],
  [["Be₂C", "C⁴⁻ (\"methanide\")", "CH₄", "Antifluorite structure; Be₂C + 4H₂O → 2Be(OH)₂ + CH₄"],
   ["Mg₂C₃", "C₃⁴⁻ (\"allylide\")", "CH₃–C≡CH (propyne)", "Not on the acetylide pattern"],
   ["CaC₂, SrC₂, BaC₂", "C₂²⁻ (\"acetylide\")", "C₂H₂ (ethyne)", "Distorted NaCl-type lattice (C₂²⁻ is non-spherical)"]],
  [1.3, 1.4, 1.6, 2.5]));
add(p([t("Be₂C is made by heating BeO with carbon at 1900–2000 °C; it is brick-red and adopts an "), b("antifluorite structure"), t(" (C⁴⁻ replaces F⁻, Be²⁺ replaces Ca²⁺).")]));
add(eq("CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑          CaO + 3C  →(2000°C)→  CaC₂ + CO          Ca + 2C  →(1100°C)→  CaC₂"));
add(p([t("The MC₂ carbides (Ca, Sr, Ba) all adopt a "), b("distorted sodium chloride-type structure"), t(": M²⁺ replaces Na⁺ and the linear C≡C²⁻ ion replaces Cl⁻, but because C₂²⁻ is not spherical (unlike Cl⁻) the lattice is distorted along the axis where the ions are aligned, and the unit cell is tetragonal at room temperature. "), b("Above 450 °C"), t(" the C₂²⁻ ions adopt random orientations rather than staying aligned, and the cell becomes genuinely tetragonal in a different, higher-symmetry sense.")]));
add(p([t("At one time the main source of ethyne (acetylene) for oxy-acetylene welding was CaC₂; world production peaked at 7 million tonnes/year in 1960, but had declined to 4.9 million tonnes by 1991 as ethyne became more cheaply obtained from processing oil.")]));
add(jeeTrap([
  [t("Not every Group-2 carbide gives ethyne! Only the true "), b("acetylides"), t(" (Ca, Sr, Ba) do. Be₂C gives methane; Mg₂C₃ gives propyne.")],
]));

add(h2("4.3 Calcium Cyanamide — Full Reaction Network"));
add(p([t("CaC₂ is also an important industrial intermediate: heated in an electric furnace with N₂ at 1100 °C, it gives "), b("calcium cyanamide, CaNCN"), t(" — an important route of fixing atmospheric nitrogen (an alternative to the Haber process).")]));
add(eq("CaC₂ + N₂  →(1100 °C, electric furnace)→  CaNCN + C"));
add(p([t("The cyanamide ion [N=C=N]²⁻ is "), b("isoelectronic with CO₂"), t(" and linear. CaNCN is produced on a large scale (particularly in locations where there is cheap electricity) and used directly, on a huge scale, as a "), b("slow-acting nitrogenous fertilizer"), t(" (widely used in SE Asia and the Far East) — it hydrolyses slowly over months, giving it a genuine advantage over more soluble fertilizers like NH₄NO₃ or urea, which are washed away by the first rainstorm:")]));
add(eq("CaNCN + 5H₂O → CaCO₃ + 2NH₄OH"));
add(p([t("CaNCN is also the starting material for several other important industrial products:")]));
add(eq("CaNCN + H₂SO₄ → H₂NCN + CaSO₄          CaNCN + CO₂ + H₂O → H₂NCN + CaCO₃     (cyanamide, H₂NCN)"));
add(eq("H₂NCN + H₂O  →(pH < 2 or > 12)→  H₂N·CO·NH₂  (urea)"));
add(eq("H₂NCN + H₂S → H₂N·CS·NH₂  (thiourea)"));
add(eq("H₂NCN  →(pH 7–9)→  NCNC(NH₂)₂ (dicyanamide)  →(pyrolysis)→  cyanuric amide (melamine)"));
add(p([t("Melamine — the ring compound formed by pyrolysing dicyanamide — reacts with formaldehyde to form hard plastics (melamine resins), so this entire chain traces a path from N₂ gas all the way to a common household plastic.")]));
add(jeeTrap([
  [t("CaC₂ + N₂ (1100 °C, electric furnace) gives "), b("calcium cyanamide CaNCN"), t(" + C, "), it("but"), t(" "), b("BaC₂ + N₂"), t(" gives a "), b("cyanide"), t(" Ba(CN)₂, "), it("not"), t(" a cyanamide — a genuinely exception-worthy fact worth memorising as a pair.")],
  [t("Do not confuse the "), it("three"), t(" nitrogen-containing products in this chain: "), b("cyanamide"), t(" (H₂NCN, the free acid), "), b("dicyanamide"), t(" (NCNC(NH₂)₂, its pH 7–9 dimer), and "), b("melamine"), t(" (the pyrolysed cyclic trimer-type product) — each forms under a different, specific condition from the last.")],
]));

// ============================================================ SECTION 5 — COMPLEXES
add(h1("5. Complex-Forming Tendency"));
add(p([t("Group 2 ions form complexes more readily than Group 1 (smaller size → higher charge density), but far less readily than the transition metals. "), b("Be"), t(", being appreciably smaller than the rest, is by far the best complex-former of the group; only Mg and Ca show any real tendency to complex, mostly with O-donor ligands.")]));
add(bulletsList([
  [b("[BeF₄]²⁻"), t(" (tetrafluoroberyllate) — Be readily coordinates two extra F⁻ ions; the M₂[BeF₄] salts closely resemble sulphates in their solubility properties, correlating with the fact that Be, uniquely in the group, has empty orbitals available for complex formation.")],
  [b("BeCl₂·D₂ adducts"), t(" (D = an ether, aldehyde or ketone with an O lone pair) — tetrahedral, formed the same way as [BeF₄]²⁻.")],
  [b("[Be(H₂O)₄]²⁺, [Be(OH)₄]²⁻"), t(" — always "), b("tetrahedral"), t(", never 6-coordinate, because Be has only 4 valence orbitals (one 2s + three 2p) available for bonding, with no accessible d-orbitals.")],
  [t("Stable chelates: "), b("beryllium oxalate [Be(ox)₂]²⁻"), t(", and complexes with "), it("β"), t("-diketones (acetylacetone) and catechol — all tetrahedral at Be.")],
  [b("Basic beryllium acetate [Be₄O(CH₃COO)₆]"), t(": a central O²⁻ surrounded tetrahedrally by 4 Be atoms, with 6 acetate groups bridging the 6 tetrahedron edges. Covalent, low-melting (285 °C)/b.p. 330 °C, soluble in organic solvents, and can even be distilled — this volatility/solubility is exploited to "), b("purify beryllium"), t(". Prepared by evaporating Be(OH)₂ in acetic acid. A near-identical structure is adopted by "), b("basic beryllium nitrate [Be₄O(NO₃)₆]"), t(", where each NO₃⁻ instead bridges a pair of Be atoms bidentately.")],
  [t("Ca²⁺/Mg²⁺ form a stable 1:1 chelate with "), b("EDTA"), t(" (hexadentate) — [Ca(EDTA)]²⁻ is "), b("six-coordinate"), t(" (octahedral), containing "), b("5 five-membered chelate rings"), t(", the basis of complexometric titration for water-hardness estimation. Interestingly, Be — despite being the strongest complexer in the group — does "), b("not"), t(" complex appreciably with EDTA, because EDTA needs 6 coordination sites and Be is invariably 4-coordinate. Ca²⁺/Mg²⁺-EDTA titrations are performed at a "), b("higher pH"), t(" than titrations of other metals (e.g. Zn²⁺, Cd²⁺, Pb²⁺), because the Ca/Mg-EDTA complexes are less stable, and at low pH EDTA gets protonated instead of complexing.")],
  [b("Chlorophyll"), t(": Mg²⁺ sits at the centre of a flat porphyrin ring, bonded to 4 N atoms; the complex absorbs light in the red region and drives photosynthesis, 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Mg forms a few halide complexes too, such as [NEt₄]₂[MgCl₄], but Ca, Sr, Ba do not form comparable halide complexes.")],
]));
add(jeeTrap([
  [t("Be salts taste sweet but must "), it("never"), t(" be tested by taste — Be compounds are highly toxic (they displace Mg²⁺ from enzymes; inhaling Be dust or smoke causes berylliosis, a disease resembling silicosis; skin contact causes dermatitis).")],
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 6 — ORGANOMETALLIC COMPOUNDS
add(h1("6. Organometallic Compounds — Grignard Reagents & Be/Mg Alkyls"));
add(p([t("Both Be and Mg form an appreciable number of M–C bonded compounds; only a few have been isolated for Ca, Sr, Ba. "), b("Grignard reagents"), t(" (organomagnesium halides, RMgX) are probably the single most versatile class of reagent in organic chemistry, and — along with lithium alkyls — provide the two general routes to organometallic compounds across the periodic table. Victor Grignard won the 1912 Nobel Prize in Chemistry for this work.")]));

add(h2("6.1 Preparation"));
add(eq("Mg + RBr  →(dry ether)→  RMgBr     (Grignard reagent)"));
add(bulletsList([
  [t("Made by the slow addition of an alkyl or aryl halide (Cl, Br or I) to a continuously stirred mixture of magnesium turnings in an absolutely dry organic solvent, usually diethyl ether. The reaction is often slow to start and may require an induction period before it starts — addition of a crystal of iodine, or gently warming, is used to penetrate the metal's oxide film and initiate the reaction.")],
  [t("Reactivity order: "), b("iodides"), t(" are the most reactive, "), b("chlorides"), t(" the least reactive; alkyl compounds usually form Grignard reagents more readily than aryl compounds.")],
  [t("Grignard reagents are rapidly hydrolysed by water to give the parent hydrocarbon, so they are never isolated solid — made and used "), it("in situ"), t(":")],
]));
add(eq("2RMgBr + 2H₂O → 2RH + Mg(OH)₂ + MgBr₂"));

add(h2("6.2 Structure"));
add(p([t("Grignard reagents are not simple — they are normally solvated/polymerized without halogen bridges. Three-centre structures have long been the subject of controversy; X-ray structures of solid PhMgBr·2Et₂O and EtMgBr·2Et₂O show magnesium is "), b("tetrahedrally coordinated"), t(" by the organic group, oxygen from ether molecules, and (in solution) several other species may be present.")]));

add(h2("6.3 Reactions of Grignard Reagents (complete synthetic-use list)"));
add(dataTable(["Reagent added to RMgBr", "Product (after acid/H₂O work-up)"], [
  ["CO₂", "R·COOH (carboxylic acid)"],
  ["R'₂C=O", "R'₂C(OH)R (tertiary alcohol)"],
  ["R'·CHO", "R'CH(OH)R (secondary alcohol)"],
  ["HCHO", "R·CH₂OH (primary alcohol)"],
  ["O₂", "R·OH"],
  ["S₈", "RSH and R₂S"],
  ["I₂", "RI"],
  ["H⁺", "RH"],
], [3.5, 5.5]));
add(p([t("Grignard reagents also transfer their organic group to other element halides, providing routes to a wide range of organometallic and organic products (R = alkyl or aryl):")]));
add(eq("RMgBr + BeCl₂ → BeR₂          RMgBr + LiR → MgR₂          RMgBr + BCl₃ → BR₃"));
add(eq("RMgBr + SiCl₄ → RSiCl₃, R₂SiCl₂, R₃SiCl, R₄Si   (alkyl/aryl chlorosilanes — commercially important in making silicones)"));

add(h2("6.4 Beryllium and Magnesium Dialkyls/Diaryls"));
add(p([t("BeCl₂ reacts with Grignard reagents to give reactive alkyls and aryls:")]));
add(eq("BeCl₂ + 2MeMgCl →(Et₂O)→ BeMe₂·(Et₂O)ₙ + 2MgCl₂          BeCl₂ + 2LiEt →(Et₂O)→ BeEt₂·(Et₂O)ₙ          Be + HgMe₂ →(warm)→ BeMe₂ + Hg"));
add(p([t("BeMe₂ is dimeric in the vapour but "), b("polymerized in the solid"), t(", with a chain structure resembling that of BeCl₂ — but the bonding is different: the Be–Me–Be bridge is a genuine "), b("3-centre-2-electron bond"), t(" (like BeH₂), unlike the lone-pair-donor halogen bridges of (BeCl₂)ₙ. Similar dialkyl/diaryl compounds of Ca, Sr, Ba can be made using Grignard reagents, lithium alkyls/aryls, or mercury alkyls/aryls — the "), b("Ca, Sr, Ba compounds are much more reactive than the corresponding Mg compound"), t(". The beryllium alkyls further react with BeCl₂ to give \"beryllium Grignard\" compounds:")]));
add(eq("BeMe₂ + BeCl₂ → 2MeBeCl     (less reactive than the corresponding true Grignard compound)"));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 7 — OXIDES & PEROXIDES
add(h1("7. Oxides and Peroxides"));
add(h2("7.1 Normal Oxides MO"));
add(p([t("All burn in O₂ to give MO. "), b("BeO"), t(" is usually made instead by igniting gelatinous Be(OH)₂; the other oxides are usually obtained by "), b("thermal decomposition of the carbonates, sulphates, or nitrates"), t(" — all of which are "), b("less thermally stable"), t(" than the corresponding Group 1 oxosalts, precisely because the Group 2 metals and their hydroxides are less strongly basic than those of Group 1.")]));
add(p([b("BeO"), t(" is covalent (4:4 zinc-blende/wurtzite structure); MgO, CaO, SrO, BaO are ionic (6:6 rock-salt/NaCl structure). Basic strength rises steadily: "), b("BeO (amphoteric) < MgO (weakly basic) < CaO < SrO < BaO"), t(" (increasingly strongly basic).")]));
add(motBox("Why does MO + H₂O → M(OH)₂ happen at all? (mechanistic picture)", [
  p([t("The O²⁻ ion in the ionic lattice is an extremely strong "), b("Brønsted base / nucleophile"), t(" — far too reactive to survive in water. When water contacts the oxide surface, O²⁻ simply "), b("rips a proton off H₂O"), t(": "), it("O²⁻ + H₂O → 2OH⁻"), t(". This single proton-transfer step is the real mechanism behind every \"basic oxide + water → hydroxide\" reaction in this chapter, and it is also exactly why free O²⁻ cannot exist in aqueous solution at all.")]),
]));
add(eq("BeO + 2H⁺ → Be²⁺ + H₂O          BeO + 2OH⁻ + H₂O → [Be(OH)₄]²⁻"));
add(p([t("BeO and MgO are used as furnace-lining "), b("refractories"), t(": very high melting point (BeO ≈2500 °C, MgO ≈2800 °C), negligible vapour pressure, good thermal conductivity, chemical inertness, and electrical insulation.")]));
add(jeeTrap([
  [t("Simple radius-ratio rules "), b("predict"), t(" 8-coordination for SrO and BaO (given the M²⁺:O²⁻ size ratio), but both are experimentally found to be "), b("6-coordinate"), t(" (rock-salt structure) — a known limitation of the radius-ratio approach that advanced questions may test.")],
]));

add(h2("7.2 Peroxides"));
add(p([t("Peroxide stability "), b("increases with cation size"), t(" (a larger, less polarizing cation stabilizes the large O₂²⁻ ion better).")]));
add(bulletsList([
  [b("BaO₂: "), t("2BaO + O₂ ⇌ 2BaO₂ (air passed over BaO at 500 °C) — the classical, most stable Group-2 peroxide.")],
  [b("SrO₂: "), t("forms similarly but needs higher pressure and temperature.")],
  [b("CaO₂: "), t("not formed by the direct route — instead made as a hydrate by treating Ca(OH)₂ with H₂O₂, then dehydrating.")],
  [b("MgO₂: "), t("only a crude peroxide obtainable, via H₂O₂ (made by passing H₂O₂ into a suspension of Mg(OH)₂, the same method used for CaO₂ from Ca(OH)₂). MgO₂ is used as a mild "), b("antiseptic in toothpaste"), t(" and as a "), b("bleaching agent"), t(".")],
  [b("BeO₂: "), t("no peroxide of beryllium is known.")],
]));
add(eq("BaO₂ + 2HCl → BaCl₂ + H₂O₂          BaO₂ + H₂SO₄(dil.) → BaSO₄↓ + H₂O₂"));

add(motBox("Peroxide vs superoxide — bond order from MOT", [
  p([b("Peroxide ion [O–O]²⁻"), t(" (18 electrons): filling gives σ1s²σ*1s²σ2s²σ*2s²σ2pₓ²π2p_y²π2p_z²π*2p_y²π*2p_z² → all π* orbitals fully paired → "), b("bond order = 1"), t(", "), b("diamagnetic"), t(" — matches the O–O single bond drawn structurally.")]),
  p([b("Superoxide ion [O₂]⁻"), t(" (17 electrons): identical filling except the last π* level holds only "), b("one"), t(" electron (π*2p_y²π*2p_z¹) → "), b("bond order = 1.5"), t(", "), b("paramagnetic"), t(" — this is the standard explanation for why KO₂ is paramagnetic.")]),
  p([t("All known Group 2 peroxides (BaO₂, SrO₂, etc.) contain the "), it("same"), t(" peroxide ion — bond order 1, diamagnetic. No Group 2 superoxide is known to exist.")]),
]));

// ============================================================ SECTION 7 — HYDROXIDES
add(h1("8. Hydroxides"));
add(p([t("Basicity and solubility "), b("both increase"), t(" down the group. Be(OH)₂ is amphoteric; Mg(OH)₂ is weakly basic and only sparingly soluble (\"milk of magnesia\", an antacid); Ca(OH)₂, Sr(OH)₂, Ba(OH)₂ are strong bases.")]));
add(dataTable(["Hydroxide", "Solubility (g/L, ~20 °C)"], [["Mg(OH)₂", "≈1×10⁻⁴ (essentially insoluble)"], ["Ca(OH)₂", "≈2"], ["Sr(OH)₂", "≈8"], ["Ba(OH)₂", "≈39"]], [1.5, 3]));
add(eq("Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻          Be(OH)₂ + 2HCl + 2H₂O → [Be(H₂O)₄]Cl₂"));

add(ncertBox("Why does hydroxide solubility increase down the group?", [
  p([t("The anion (OH⁻) is common across the series, so only the cation's size varies. As M²⁺ grows, "), b("lattice enthalpy falls faster than hydration enthalpy"), t(" — so the net dissolution process becomes more favourable and solubility "), b("rises"), t(" down the group. This is the exact reverse of what happens for carbonates/sulphates (§8), where hydration enthalpy falls faster than lattice enthalpy, so solubility "), b("falls"), t(" down the group.")]),
]));
add(p([b("Master key (memorize this one sentence): "), it("\"Which energy — lattice or hydration — falls faster as the cation grows?\""), t(" governs every Group 2 solubility trend. For OH⁻ and F⁻, lattice energy falls faster → solubility increases down the group. For CO₃²⁻ and SO₄²⁻, hydration energy falls faster → solubility decreases down the group.")]));
add(p([t("Ca(OH)₂ solution = "), b("lime water"), t("; Ba(OH)₂ solution = "), b("baryta water"), t(" — both turn milky with CO₂ (precipitate CaCO₃/BaCO₃), clearing again with excess CO₂ (soluble bicarbonate forms). Baryta water is the more sensitive test — even exhaled breath gives a positive result, whereas lime water needs breath actively bubbled through it.")]));
add(jeeTrap([
  [t("\"Lime water\" is a clear "), b("solution"), t(", not a suspension; \"milk of lime\" is the suspension of excess undissolved Ca(OH)₂. Four genuinely distinct terms exist: quicklime (CaO) ≠ slaked lime (Ca(OH)₂) ≠ lime water (solution) ≠ milk of lime (suspension).")],
]));

// ============================================================ SECTION 8 — CARBONATES / BICARBONATES / HARDNESS
add(h1("9. Carbonates, Bicarbonates & Hardness of Water"));
add(h2("9.1 Carbonates"));
add(p([t("Solubility "), b("decreases"), t(" down the group (hydration energy falls faster than lattice energy for the large CO₃²⁻ ion). All carbonates decompose on heating: MCO₃ → MO + CO₂. Thermal stability "), b("increases"), t(" down the group — smaller, more polarizing cations distort CO₃²⁻ more and decompose more readily.")]));
add(dataTable(["Carbonate", "BeCO₃", "MgCO₃", "CaCO₃", "SrCO₃", "BaCO₃"], [["Decomposition temp (°C)", "< 100", "540", "900", "1290", "1360"]], [1.3, 1, 1, 1, 1, 1]));
add(p([b("BeCO₃"), t(" is so unstable it can only be kept under a CO₂ atmosphere, and is structurally unusual — it retains the hydrated [Be(H₂O)₄]²⁺ unit rather than a simple Be²⁺.")]));
add(p([b("CaCO₃ crystal chemistry: "), t("calcite (stable form, Ca²⁺ 6-coordinate, matching the CaO-type prediction) vs aragonite (metastable, only ~5 kJ/mol higher in energy but kinetically trapped, Ca²⁺ unusually 9-coordinate).")]));

add(h2("9.2 Bicarbonates & Hardness of Water"));
add(p([t("Bicarbonates exist only in solution, never as isolable solids for Group 2:")]));
add(eq("CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂(aq)     (reverse on heating: → CaCO₃↓ + CO₂ + H₂O)"));
add(p([t("This equilibrium, run in reverse by slow evaporation/decomposition, deposits limestone caves' "), b("stalactites"), t(" (from the roof) and "), b("stalagmites"), t(" (from the floor).")]));
add(dataTable(["Type", "Cause", "Removed by"],
  [["Temporary hardness", "Mg(HCO₃)₂, Ca(HCO₃)₂", "Boiling (drives off CO₂); or adding slaked lime, Ca(HCO₃)₂+Ca(OH)₂ → 2CaCO₃+2H₂O"],
   ["Permanent hardness", "MgSO₄, CaSO₄ (soluble sulphates)", "Not removed by boiling — needs ion exchange, phosphates (calgon), or Na₂CO₃ (lime-soda: CaSO₄+Na₂CO₃→CaCO₃↓+Na₂SO₄)"]],
  [1.4, 2, 3.6]));
add(p([t("Scum in hard water = insoluble calcium/magnesium stearate, formed when Ca²⁺/Mg²⁺ react with soap before true lathering can occur.")]));
add(jeeTrap([
  [t("Excess CO₂ passed into lime water does "), it("not"), t(" give more precipitate — it "), b("redissolves"), t(" the CaCO₃ precipitate as soluble Ca(HCO₃)₂, clearing the milkiness. This is a solubility-equilibrium shift, not a contradiction of the earlier precipitation step.")],
]));

// ============================================================ SECTION 9 — SULPHATES & NITRATES
add(h1("10. Sulphates and Nitrates"));
add(h2("10.1 Sulphates"));
add(p([t("Solubility falls sharply: "), b("BeSO₄ > MgSO₄ ≫ CaSO₄ > SrSO₄ > BaSO₄ "), t("(virtually insoluble). Reason: for the small Be²⁺/Mg²⁺, hydration enthalpy dominates and overcomes lattice enthalpy, favouring dissolution; for the larger cations, hydration falls off while lattice energy (set mainly by the large SO₄²⁻ ion) stays comparatively high, so solubility collapses.")]));
add(dataTable(["Salt", "Note"], [["Epsom salt, MgSO₄·7H₂O", "Mild laxative"], ["Alabaster, CaSO₄·2H₂O (fine-grained)", "Ornamental; not weatherproof outdoors (CaSO₄ is slightly soluble, ~2 g/L)"], ["BaSO₄", "Insoluble AND opaque to X-rays → \"barium meal\" for GI-tract imaging"]], [2.6, 4.4]));
add(p([t("Thermal decomposition MSO₄ → MO + SO₃ becomes harder as basicity rises: BeSO₄ decomposes at 500 °C, MgSO₄ at 895 °C, CaSO₄ at 1149 °C, SrSO₄ at 1374 °C. Heating the sulphates with carbon reduces them to sulphides — "), it("BaSO₄ + 4C → BaS + 4CO"), t(" — and most industrial barium compounds are in fact made starting from BaS.")]));

add(h2("10.2 Perchlorates"));
add(p([t("Group 2 elements also form perchlorates M(ClO₄)₂, which have structures very similar to the sulphates — the ClO₄⁻ ion is tetrahedral and close in size to SO₄²⁻. Chemically, however, they differ sharply: perchlorates are strong oxidizing agents, and anhydrous "), b("Mg(ClO₄)₂ is used as a drying agent"), t(" (\"Anhydrone\"). It must "), b("never"), t(" be used with organic materials, since contact between an organic compound and a strong oxidizer of this kind could cause an explosion.")]));

add(h2("10.3 Nitrates"));
add(p([t("Made by dissolving the carbonate/oxide/hydroxide in dilute HNO₃. Hydration of the crystalline nitrate "), b("decreases"), t(" down the group: Mg(NO₃)₂ crystallizes with 6H₂O, while Ba(NO₃)₂ is anhydrous.")]));
add(eq("2M(NO₃)₂ → 2MO + 4NO₂ + O₂     (all decompose to the oxide on heating)"));
add(p([t("Be is unusual in also forming a "), b("basic nitrate [Be₄O(NO₃)₆]"), t(" in addition to the normal salt. Anhydrous Be(NO₃)₂ cannot be obtained by heating the hydrate (decomposition intervenes); instead it is made via liquid N₂O₄:")]));
add(eq("BeCl₂ →(N₂O₄)→ Be(NO₃)₂·2N₂O₄  →(warm to 50 °C, vacuum)→  Be(NO₃)₂  →(125 °C)→  [Be₄O(NO₃)₆]"));
add(jeeTrap([
  [t("Group 2 nitrates decompose straight to the "), b("oxide"), t(" (like LiNO₃), "), it("not"), t(" to a nitrite the way NaNO₃/KNO₃ do — do not import the Group-1 heavier-metal nitrite pattern here.")],
]));

add(h2("10.4 Insoluble Salts — Qualitative Analysis Summary"));
add(p([t("A single compact fact worth memorizing as a block: the "), b("sulphates"), t(" of calcium, strontium and barium are insoluble, and the "), b("carbonates, oxalates, chromates and fluorides"), t(" of the "), it("whole"), t(" group are insoluble — this pattern is exactly what is exploited in qualitative inorganic analysis to detect and separate Group 2 cations.")]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 10 — ANOMALOUS Be
add(h1("11. Anomalous Behaviour of Beryllium"));
add(p([t("J.D. Lee gives exactly "), b("three"), t(" root causes (Group 2, §11.7):")]));
add(bulletsList([
  [b("1. Extremely small size: "), t("Fajans' rules — small, highly-charged ions tend to form covalent compounds.")],
  [b("2. Comparatively high electronegativity "), t("(1.5, vs Mg 1.2, Ca 1.0, Sr 1.0, Ba 0.9) — when Be reacts with another element the electronegativity difference is seldom very large, again favouring covalency. (Even where the difference "), it("is"), t(" large, as with F, BeF₂ still behaves as covalent when fused.)")],
  [b("3. Only 2s/2p valence orbitals available: "), t("the outer shell can hold a maximum of "), b("8 electrons"), t(" (one 2s + three 2p orbitals). Thus Be can form a maximum of "), b("four"), t(" conventional 2-electron bonds/coordinate bonds — a maximum coordination number of 4. The later members have larger outer shells and can accommodate more than 8 outer electrons, using "), it("d"), t(" orbitals in addition to "), it("s"), t(" and "), it("p"), t(", so higher coordination numbers occur (e.g. in the basic acetate).")],
]));
add(p([t("Consequence: anhydrous Be compounds are predominantly "), b("covalent"), t(", and monomeric BeX₂ molecules "), it("should"), t(" be linear — the excited-state Be atom (1s²2s¹2p¹, two unpaired electrons) uses sp hybridisation to form two collinear bonds. In fact, such linear monomeric molecules exist only in the "), b("gas phase"), t(": in the solid state, coordination number 4 is always achieved by one of four routes.")]));

add(motBox("Four ways beryllium reaches 4-coordination in the solid/liquid state", [
  p([b("1. Coordinate bonds from extra ligands: "), t("two ligands with a lone pair use Be's two unfilled orbitals — e.g. two F⁻ ions coordinate to BeF₂ giving [BeF₄]²⁻; diethyl ether coordinates to BeCl₂ giving BeCl₂(OEt₂)₂.")]),
  p([b("2. Polymerisation via bridging halogens: "), t("BeX₂ molecules polymerise into chains, e.g. (BeF₂)ₙ, (BeCl₂)ₙ — each bridging halogen forms one normal covalent bond and donates a lone pair as a coordinate bond.")]),
  p([b("3. Three-centre two-electron bonding: "), t("(BeMe₂)ₙ has the same chain structure as (BeCl₂)ₙ, but the bonding is instead a 3-centre-2-electron bond covering one Me group and two Be atoms — the same electron-deficient clustering seen in BeH₂.")]),
  p([b("4. A covalent lattice: "), t("BeO and BeS adopt a zinc-blende or wurtzite structure (coordination number 4) rather than the 6:6 rock-salt structure of the heavier oxides.")]),
]));

add(h2("Hydrolysis of Beryllium Salts"));
add(p([t("In water, beryllium salts are extensively hydrolysed to give polymeric hydroxo complexes of unknown exact structure — J.D. Lee shows two representative dimeric/trimeric fragments, both built from Be centres bridged by OH groups, each Be remaining 4-coordinate:")]));
add(p([it("[(HO)₂Be(μ-OH)₂Be(OH)₂]²⁻-type dimer, and a linear trimer [(HO)₂Be(μ-OH)Be(μ-OH)Be(OH)₂]²⁻ — both retain tetrahedral 4-coordination at every Be centre via hydroxide bridges.")]));
add(p([t("Adding alkali to these hydrolysed solutions breaks the polymers down to the simple mononuclear "), b("beryllate ion [Be(OH)₄]²⁻"), t(" (tetrahedral). Many Be salts instead contain the discrete hydrated ion "), b("[Be(H₂O)₄]²⁺"), t(" rather than bare Be²⁺ — stable ionic salts such as [Be(H₂O)₄]SO₄, [Be(H₂O)₄](NO₃)₂ and [Be(H₂O)₄]Cl₂ are known. Forming this hydrated complex effectively spreads the charge over a larger ion, which is why it forms so readily.")]));

add(h2("Consolidated Reaction Table (J.D. Lee Table 11.9, complete)"));
add(dataTable(["Reaction", "Comment"], [
  ["M + 2H₂O → M(OH)₂ + H₂", "Be probably reacts with steam (doubtful); Mg reacts with hot water; Ca, Sr, Ba react rapidly with cold water"],
  ["M + 2HCl → MCl₂ + H₂", "All the metals react with acids liberating hydrogen"],
  ["Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂", "Be is amphoteric"],
  ["2M + O₂ → 2MO (excess dioxygen)", "Normal oxide formed by all group members"],
  ["Ba + O₂ → BaO₂", "Ba also forms the peroxide"],
  ["M + H₂ → MH₂", "Ionic salt-like hydrides formed at high T by Ca, Sr, Ba"],
  ["3M + N₂ → M₃N₂", "All form nitrides at high temperatures"],
  ["3M + 2P → M₃P₂", "All the metals form phosphides at high temperatures"],
  ["M + S → MS; M + Se → MSe; M + Te → MTe", "All the metals form sulphides/selenides/tellurides"],
  ["M + F₂ → MF₂; M + Cl₂ → MCl₂; M + Br₂ → MBr₂; M + I₂ → MI₂", "All the metals form halides"],
  ["M + 2NH₃ → M(NH₂)₂ + H₂ (high temperature)", "All the metals form amides at high temperatures"],
], [4.5, 4.5]));
add(jeeTrap([
  [t("Consequences of Be's anomaly to keep straight: never exceeds CN = 4; oxide/hydroxide uniquely amphoteric; extensive hydrolysis gives acidic solutions (no other Group-2 salt hydrolyses appreciably); rarely more than 4 waters of crystallisation; halides covalent/polymeric/soluble-in-organic-solvents/fuming/subliming/non-conducting when fused; BeH₂ covalent (not saline); Be₂C a methanide (→ CH₄, unlike acetylide MC₂ → C₂H₂); BeCO₃ stable only under CO₂; no flame colour; unusually strong complex-former; amphoteric as the "), it("metal"), t(" too (dissolves in NaOH); passivated by concentrated HNO₃ like Al.")],
]));

add(h2("The Bigger Picture: Be's Anomaly Is Not a One-Off"));
add(p([t("Be is just one instance of a completely general pattern called the "), b("\"first-element\" (or second-period) anomaly"), t(": "), b("every"), t(" element that heads a group in the second period — Li, Be, B, C, N, O, F — behaves noticeably differently from the rest of its own group, and for exactly the "), it("same"), t(" three root causes seen above for Be: (1) unusually small size, (2) unusually high electronegativity/charge density for the group, and (3) only 2s/2p valence orbitals available, capping the outer shell at 8 electrons and the coordination number at 4 (no accessible "), it("d"), t(" orbitals). Li's anomalous behaviour vs. Na/K (its own hydration-driven E° quirk, its nitride formation, its covalent character) is the exact Group-1 mirror of everything you've just learned about Be — recognizing this pattern turns twelve separate \"anomaly facts\" into one reusable rule.")]));

// ============================================================ SECTION 11 — DIAGONAL RELATIONSHIP
add(h1("12. Diagonal Relationship: Be and Al"));
add(p([t("Be²⁺ (ionic radius ≈31 pm) and Al³⁺ (≈50 pm) are not close in raw size, but their "), b("charge densities"), t(" (charge per unit surface area) are almost identical (Be²⁺ ≈2.36, Al³⁺ ≈2.50 in the same units) — this is the quantitative root of every diagonal relationship, not just Be–Al.")]));
add(dataTable(["#", "Similarity"], [
  ["1", "Neither readily attacked by acids — both passivated by concentrated HNO₃ via a protective oxide film."],
  ["2", "Both oxides (BeO, Al₂O₃) and hydroxides (Be(OH)₂, Al(OH)₃) are amphoteric; both dissolve in excess alkali to give beryllate [Be(OH)₄]²⁻ / aluminate [Al(OH)₄]⁻."],
  ["3", "Both chlorides are Cl-bridged in the vapour phase (BeCl₂ dimer/polymer; Al₂Cl₆ dimer); both soluble in organic solvents, both strong Lewis acids, both used as Friedel–Crafts catalysts."],
  ["4", "Both form complex fluorides readily: [BeF₄]²⁻, [AlF₆]³⁻ — but note Be maxes out at CN = 4 while Al reaches CN = 6, a genuine point of difference within the similarity."],
  ["5", "Both carbides hydrolyse to methane: Be₂C → CH₄; Al₄C₃ → CH₄ (contrast CaC₂ → C₂H₂)."],
  ["6", "Both nitrides hydrolyse to NH₃: Be₃N₂ → NH₃; AlN → NH₃."],
  ["7", "Both hydrides are electron-deficient and polymeric with multicentre (3c–2e) bonding: BeH₂ and AlH₃."],
  ["8", "Standard electrode potentials are close: Be −1.85 V, Al −1.66 V — much closer to each other than Be is to Ca/Sr/Ba (−2.87 to −2.90 V)."],
  ["9", "Be salts are extensively hydrolysed (acidic in solution), as are Al salts."],
  ["10", "Be salts are among the most soluble known — Al salts show a similar high-solubility tendency."],
], [0.6, 6.4]));
add(jeeTrap([
  [t("A diagonal relationship is a set of "), b("similarities, not identity"), t(". Be still differs from Al in maximum coordination number (4 vs 6) and, of course, in oxidation state (+2 vs +3) — never treat Be and Al as interchangeable.")],
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 13 — Be vs REST OF GROUP 2
add(h1("13. Differences Between Beryllium and the Other Group 2 Elements"));
add(p("A distinct list from the Be–Al diagonal relationship above — this is J.D. Lee's direct within-group comparison (Be vs Mg/Ca/Sr/Ba), given as eight numbered points."));
add(dataTable(["#", "Difference"], [
  ["1", "Be is very small and has a high charge density, so by Fajans' rules it has a strong tendency to covalency. Thus the melting points of its compounds are lower — BeF₂ melts at 800 °C, whilst the fluorides of the rest of the group melt about 1300 °C. The Be halides are all soluble in organic solvents and hydrolyse in water, rather like the aluminium halides. The other Group 2 halides are ionic."],
  ["2", "Beryllium hydride is electron-deficient and polymeric, with multicentre bonding, like aluminium hydride."],
  ["3", "The halides of beryllium are electron-deficient and polymeric, with halogen bridges. BeCl₂ usually forms chains but also exists as the dimer; AlCl₃ is dimeric."],
  ["4", "Be forms many complexes — not typical of Groups 1 and 2."],
  ["5", "Be is amphoteric, liberating H₂ with NaOH and forming beryllates; Al forms aluminates similarly."],
  ["6", "Be(OH)₂, like Al(OH)₃, is amphoteric."],
  ["7", "Be, like Al, is rendered passive by nitric acid."],
  ["8", "The standard electrode potentials for Be and Al, −1.85 V and −1.66 V respectively, are much closer to each other than the value for Be is to the values for Ca, Sr and Ba (−2.87, −2.89 and −2.91 V respectively)."],
], [0.6, 6.4]));
add(p([t("Three more general points close the chapter's treatment of Be:")]));
add(bulletsList([
  [t("9. Be salts are extensively hydrolysed.")],
  [t("10. Be salts are among the most soluble known.")],
  [t("11. Be forms an unusual carbide Be₂C, unlike CaC₂, which yields methane on hydrolysis.")],
]));
add(jeeTrap([
  [t("Notice this list (Be vs. the "), it("rest of its own group"), t(") is distinct from — though it overlaps with — the Be–Al diagonal-relationship list in §12. Examiners sometimes ask \"which of these is a difference "), it("within"), t(" Group 2 vs. a similarity "), it("across"), t(" to Group 13\" — both framings describe the same underlying facts about Be.")],
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 14 — CALCIUM COMPOUNDS (NCERT)
add(h1("14. Compounds of Calcium (NCERT Scope)"));

add(h2("14.1 Calcium Oxide — Quicklime, CaO"));
add(eq("CaCO₃  →(1070–1270 K, rotary kiln)→  CaO + CO₂↑     (CO₂ removed continuously to drive equilibrium)"));
add(bulletsList([
  [t("White amorphous solid, m.p. 2870 K; absorbs atmospheric moisture and CO₂ on standing.")],
  [b("Slaking: "), t("CaO + H₂O → Ca(OH)₂ + heat. Slaking with aqueous NaOH gives "), b("soda lime"), t(" (a NaOH/Ca(OH)₂ mixture, easier to handle than pure NaOH).")],
  [t("Basic oxide — combines with acidic oxides at high T: CaO + SiO₂ → CaSiO₃ (this is also literally the base reaction behind ordinary glass-making); 6CaO + P₄O₁₀ → 2Ca₃(PO₄)₂. The same CaO + SiO₂ → CaSiO₃ reaction is exactly why lime (via CaCO₃) works as a metallurgical "), b("flux"), t(": the acidic silica impurity in an iron ore is converted to molten, low-density calcium silicate (\"slag\"), which floats on the liquid metal and is skimmed off.")],
]));
add(ncertBox("Uses of CaO (NCERT)", [
  ...bulletsList([
    "Important raw material for manufacturing cement, and the cheapest form of alkali",
    "Manufacture of sodium carbonate from caustic soda",
    "Purification of sugar and manufacture of dyestuffs",
  ]),
]));
add(p([b("J.D. Lee's fuller industrial-use list for lime (CaO)"), t(" — worth knowing beyond the NCERT three:")]));
add(bulletsList([
  "In steelmaking, to remove phosphates and silicates as slag",
  "By mixing with SiO₂ and alumina or clay, to make cement",
  "For making glass",
  "In the lime-soda process, one of the chlor-alkali industry routes converting Na₂CO₃ to NaOH or vice versa",
  "For \"softening\" water",
  "To make slaked lime Ca(OH)₂, and to make calcium carbide CaC₂",
]));

add(h2("14.2 Calcium Hydroxide — Slaked Lime, Ca(OH)₂"));
add(p([t("Prepared as above; white amorphous powder, sparingly soluble. Aqueous "), b("solution"), t(" = lime water; "), b("suspension"), t(" of excess solid = milk of lime.")]));
add(eq("Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O   (milky)     CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂  (excess CO₂ clears it)"));
add(jeeTrap([
  [t("Lime water does "), it("not"), t(" only test for CO₂ — "), b("SO₂ turns it milky too"), t(", by the exactly parallel reaction "), it("Ca(OH)₂ + SO₂ → CaSO₃↓ + H₂O"), t(", and excess SO₂ likewise clears the milkiness by forming soluble calcium bisulphite: "), it("SO₂ + H₂O + CaSO₃ → Ca(HSO₃)₂"), t(". If a question says \"a gas turns lime water milky,\" don't jump straight to CO₂ — S in the +4 state (SO₂) behaves the same way.")],
]));
add(eq("2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O     (bleaching powder — a simplified representation)"));
add(p([t("Bleaching powder is often written as Ca(OCl)₂ but is really a "), b("mixed salt"), t(" — worth noting for JEE Advanced precision rather than treating it as one pure compound.")]));
add(ncertBox("Uses of Ca(OH)₂ (NCERT)", [
  ...bulletsList([
    "Manufacture of mortar, a building material",
    "Whitewashing, due to its disinfectant nature (hardens by chemical carbonation to CaCO₃, not just drying)",
    "Glass making, tanning industry",
    "Preparation of bleaching powder",
    "Purification of sugar",
  ]),
]));

add(h2("14.3 Calcium Carbonate, CaCO₃"));
add(eq("Ca(OH)₂ + CO₂ → CaCO₃ + H₂O          CaCl₂ + Na₂CO₃ → CaCO₃ + 2NaCl"));
add(p([t("White fluffy powder, almost insoluble; decomposes at 1200 K to CaO + CO₂. Reacts with dilute acid: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. With H₂SO₄, an insoluble CaSO₄ coating can passivate the surface and slow the reaction.")]));
add(ncertBox("Uses of CaCO₃ (NCERT)", [
  ...bulletsList([
    "Building material, as marble",
    "Manufacture of quicklime",
    "As a flux (with MgCO₃) in extraction of metals such as iron",
    "Specially precipitated CaCO₃ in high-quality paper manufacture",
    "Antacid, mild abrasive in toothpaste, constituent of chewing gum, filler in cosmetics",
  ]),
]));

add(h2("14.4 Calcium Sulphate System — Gypsum, Plaster of Paris, Anhydrite"));
add(eq("2(CaSO₄·2H₂O)  →(393 K)→  2(CaSO₄·½H₂O) + 3H₂O     (gypsum → Plaster of Paris)"));
add(p([t("Staged dehydration on stronger heating: CaSO₄·2H₂O →(150 °C)→ CaSO₄·½H₂O (Plaster of Paris) →(200 °C)→ CaSO₄ (\"dead-burnt\" anhydrite) →(1100 °C)→ CaO + SO₃.")]));
add(eq("CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O     (sets to a hard mass in 5–15 minutes)"));
add(p([t("\"Dead-burnt\" plaster (fully anhydrous CaSO₄, from overheating past 393 K) has lost the ability to set normally, because rehydration becomes far too slow.")]));
add(ncertBox("Uses of Plaster of Paris (NCERT)", [
  ...bulletsList([
    "Largest use in the building industry, as plaster",
    "Immobilising broken bones/sprains",
    "Dentistry, ornamental work, casts of statues and busts",
  ]),
]));
add(jeeTrap([
  [t("Gypsum added to Portland cement (2–3%) plays a "), it("different"), t(" chemical role than PoP's own setting reaction — it "), b("slows"), t(" the setting of the cement's aluminate phase, preventing \"flash setting\"; it is not there to \"set\" the way PoP itself sets.")],
  [t("PoP does "), it("not"), t(" set to anhydrous CaSO₄ — it rehydrates "), b("back to gypsum"), t(" (CaSO₄·2H₂O). \"Dead-burnt\" plaster ≠ Plaster of Paris; dead-burnt is the fully anhydrous, non-setting form.")],
]));

add(h2("14.5 Cement (Portland Cement)"));
add(p([t("First made in England in 1824 by "), b("Joseph Aspdin"), t("; named \"Portland cement\" for its resemblance to limestone quarried on the Isle of Portland. Made by strongly heating limestone with clay to form \"cement clinker,\" then mixing the clinker with 2–3% gypsum.")]));
add(dataTable(["Component", "% by mass"], [["CaO", "50–60"], ["SiO₂", "20–25"], ["Al₂O₃", "5–10"], ["MgO", "2–3"], ["Fe₂O₃", "1–2"], ["SO₃", "1–2"]], [3, 3]));
add(p([t("Quality control ratios (NCERT): silica/alumina ratio between 2.5–4; lime/(silica+alumina+iron oxide) ratio as close to 2 as possible.")]));
add(dataTable(["Cement ingredient", "Formula", "% present"], [["Dicalcium silicate", "Ca₂SiO₄", "26"], ["Tricalcium silicate", "Ca₃SiO₅", "51"], ["Tricalcium aluminate", "Ca₃Al₂O₆", "11"]], [3, 2, 2]));
add(p([t("Setting = hydration of these constituents + their rearrangement into a hard interlocking mass; gypsum's role is purely to slow this down enough to avoid flash-setting.")]));
add(p([b("Sorel cement"), t(" (a different cement entirely, not part of Portland cement chemistry): a paste-like mixture of MgO and MgCl₂ that sets to a hard mass on standing; used in dental filling and flooring.")]));

// ============================================================ SECTION 13 — BIOLOGICAL IMPORTANCE
add(h1("15. Biological Importance of Magnesium and Calcium"));
add(p([t("An adult human body contains roughly "), b("25 g of Mg"), t(" and "), b("1200 g of Ca"), t(" (compare only 5 g Fe, 0.06 g Cu) — daily requirement 200–300 mg.")]));
add(h3("Magnesium"));
add(bulletsList([
  [t("Cofactor for "), b("all enzymes that utilise ATP"), t(" in phosphate transfer (phosphohydrolases, phosphotransferases).")],
  [t("The central metal ion of "), b("chlorophyll"), t(" — essential for light absorption in photosynthesis.")],
  [t("Essential for transmission of impulses along nerve fibres; concentrated inside cells, like K⁺.")],
]));
add(h3("Calcium"));
add(bulletsList([
  [t("≈99% of body Ca is in bones and teeth as an apatite-type mineral; tooth enamel specifically is "), b("fluorapatite"), t(" [3Ca₃(PO₄)₂·CaF₂]. Bone is metabolically active, not inert — roughly 400 mg/day passes through the plasma pool, being continuously dissolved and redeposited.")],
  [t("Regulates neuromuscular function, interneuronal transmission, cell-membrane integrity, and "), b("blood coagulation"), t(".")],
  [t("Plasma calcium is held at ~100 mg/L, regulated by "), b("calcitonin and parathyroid hormone"), t(".")],
  [t("Concentrated "), it("outside"), t(" cells (in body fluids), like Na⁺; required to trigger "), b("muscle contraction"), t(" and to maintain the regular beating of the heart.")],
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 14 — MASTER TRAP BANK
add(h1("16. Master JEE Trap Bank"));
add(p("Thirty commonly-tested false statements, consolidated across sources. Read each as \"a JEE option that looks true but isn't.\""));
const traps = [
  "All Group 2 oxides are basic — FALSE: BeO is amphoteric.",
  "All Group 2 hydroxides are strong/highly soluble bases — FALSE: Be(OH)₂ is amphoteric, Mg(OH)₂ is weakly basic and only sparingly soluble.",
  "Hydroxide solubility decreases down the group — FALSE: it increases (lattice energy falls faster than hydration energy for OH⁻/F⁻).",
  "Sulphate solubility increases down the group — FALSE: it decreases sharply; BaSO₄ is virtually insoluble.",
  "Carbonate solubility increases down the group — FALSE: it decreases (opposite mechanism to hydroxides — here hydration energy falls faster than lattice energy).",
  "Mg + steam → Mg(OH)₂ — FALSE: the steam product is MgO + H₂; Mg(OH)₂ forms only with liquid (especially hot) water.",
  "Be reacts vigorously with water because its E° is very negative — FALSE: kinetic passivation by the BeO film dominates over thermodynamics.",
  "Burning Mg is extinguished by CO₂ — FALSE: Mg reduces CO₂ (2Mg+CO₂→2MgO+C) and keeps burning; never use CO₂ extinguishers on Mg fires.",
  "BeH₂ is ionic/saline — FALSE: it is covalent, polymeric, and electron-deficient (3c–2e bonded).",
  "CaH₂ is covalent like BeH₂ — FALSE: CaH₂/SrH₂/BaH₂ are ionic, containing H⁻.",
  "BeCl₂ is a simple ionic solid — FALSE: it is strongly covalent — chain-polymeric in the solid, dimeric in vapour at moderate T, monomeric (linear) only above ≈1200 K.",
  "All Group 2 carbides give ethyne on hydrolysis — FALSE: Be₂C → CH₄ (methanide); Mg₂C₃ → propyne; only CaC₂/SrC₂/BaC₂ (true acetylides) → C₂H₂. Also, BaC₂ + N₂ gives cyanide Ba(CN)₂, not cyanamide, unlike CaC₂.",
  "Group 2 nitrates decompose to nitrites on heating — FALSE: all give MO + NO₂ + O₂ (like LiNO₃), never a nitrite.",
  "Blue liquid-ammonia solutions are coloured by M²⁺ — FALSE: the colour is due to solvated/ammoniated electrons.",
  "Be and Mg show characteristic flame colours — FALSE: their valence electrons are too tightly bound to be excited at flame temperature.",
  "Lime water is a suspension — FALSE: it is a clear solution; milk of lime is the suspension.",
  "Excess CO₂ increases the CaCO₃ precipitate — FALSE: excess CO₂ redissolves it as soluble Ca(HCO₃)₂, clearing the milkiness.",
  "Whitewash hardens purely by water evaporating — FALSE: chemical carbonation of Ca(OH)₂ to CaCO₃ is the key hardening step.",
  "Gypsum and Plaster of Paris are the same hydration state — FALSE: dihydrate (gypsum) vs hemihydrate (PoP).",
  "PoP sets to anhydrous CaSO₄ — FALSE: it rehydrates back to gypsum (CaSO₄·2H₂O).",
  "Dead-burnt plaster = CaSO₄·½H₂O — FALSE: dead-burnt plaster is fully anhydrous CaSO₄, from overheating past the PoP stage.",
  "More mixing water always gives a stronger PoP set — FALSE: excess water leaves pores after evaporation, generally weakening the set mass.",
  "Be resembles only Mg, with no special relation to Al — FALSE: the Be–Al diagonal relationship is extensive and well-documented.",
  "Be²⁺ should show a high coordination number because of its high +2 charge — FALSE: its tiny valence shell (only 2s+2p, no d-orbitals) limits it to CN = 4.",
  "BaSO₄ dissolves readily because Ba²⁺ is a large, \"easy\" ion — FALSE: it is precisely the reduced hydration enthalpy of the large Ba²⁺ ion that makes BaSO₄ so insoluble.",
  "E° order can be predicted from ionization enthalpy alone — FALSE: E° is a thermodynamic sum of atomization enthalpy, IE₁+IE₂, and hydration enthalpy.",
  "\"Lime\" is one single substance — FALSE: quicklime (CaO), slaked lime (Ca(OH)₂), lime water (solution), and milk of lime (suspension) are four distinct things.",
  "Radius-ratio rules always correctly predict ionic coordination number — FALSE: they predict CN = 8 for SrO/BaO, but both are experimentally 6-coordinate.",
  "Fluoride and hydroxide solubility trends follow the same logic as carbonate/sulphate — FALSE: F⁻/OH⁻ show the reversed (increasing) solubility trend because lattice energy — not hydration energy — falls faster down the group for these two anions.",
  "Anhydrous MgCl₂ can be made by simply heating MgCl₂·6H₂O in air — FALSE: this causes hydrolysis (→ Mg(OH)Cl → MgO); anhydrous MgCl₂ is made industrially via the double salt MgCl₂·NH₄Cl·6H₂O route.",
];
traps.forEach((txt, i) => {
  add(new Paragraph({
    numbering: { reference: "traps", level: 0 },
    spacing: { after: 90, line: 290 },
    children: [t(txt)],
  }));
});

add(h2("Numerical / Integer-Answer JEE Patterns"));
add(p("A recurring JEE Advanced question style asks for a bare integer rather than an MCQ option. These five are drawn directly from the standard Group 2 practice-question banks and are worth memorizing as verified facts, not just methods:"));
add(bulletsList([
  [b("Number of chelate rings in [Ca(EDTA)]²⁻ = 5"), t(" — hexadentate EDTA wraps a metal ion with 5 five-membered rings, regardless of which metal is chelated.")],
  [b("Total electrons in one molecule of Mg₂C₃ = 42"), t(" — a straightforward electron-counting exercise (2×12 + 3×6 = 42) that examiners like precisely because it forces you to first get the correct formula (allylide/sesquicarbide, not MgC₂).")],
  [b("Number of planes of symmetry in [BeH₄]²⁻ = 6"), t(" — a regular tetrahedron (Td point group) has 6 mirror planes, one through each edge-pair.")],
  [b("Ratio of water of crystallization, gypsum : Plaster of Paris = 4 : 1"), t(" — CaSO₄·2H₂O has 2 mol H₂O, CaSO₄·½H₂O has 0.5 mol, so 2/0.5 = 4.")],
  [b("Number of Group-2/related elements that liberate H₂ with NaOH, from {Be, Al, B, Mg, Ca, Zn, Sn}"), t(" — only Be, Al, Zn, Sn are amphoteric enough to do this (Mg, Ca do not react with NaOH; B does not either) — a reminder that amphoterism is the deciding property, not group membership.")],
]));

add(new Paragraph({ children: [new PageBreak()] }));

// ============================================================ SECTION 15 — QUICK REVISION SUMMARY
add(h1("17. Quick-Revision Summary Sheet"));

add(h2("Solubility trends (down the group)"));
add(dataTable(["Species", "Trend", "Governing factor"], [
  ["Hydroxides M(OH)₂", "Increases", "Lattice energy falls faster than hydration energy"],
  ["Fluorides MF₂", "Increases (mostly)", "Same as hydroxides"],
  ["Carbonates MCO₃", "Decreases", "Hydration energy falls faster than lattice energy"],
  ["Sulphates MSO₄", "Decreases sharply", "Same as carbonates"],
  ["Halides other than F (Cl, Br, I)", "Broadly high throughout", "All fairly soluble, ionic for Mg onward"],
], [2.2, 2.2, 5.6]));

add(h2("Thermal stability trends (down the group)"));
add(dataTable(["Species", "Trend", "Reason"], [
  ["Carbonates", "Increases", "Larger, less polarizing cation distorts CO₃²⁻ less"],
  ["Nitrates", "Increases", "Same polarization logic"],
  ["Sulphates", "Increases", "Same polarization logic"],
  ["Hydroxides", "Increases", "Larger cation polarizes OH⁻ less, resists dehydration"],
], [2.2, 2.2, 5.6]));

add(h2("Nature of key compounds"));
add(dataTable(["Compound class", "Be", "Mg", "Ca / Sr / Ba"], [
  ["Hydride MH₂", "Covalent, polymeric", "Covalent, polymeric", "Ionic (H⁻)"],
  ["Chloride MCl₂", "Covalent, polymeric/dimeric", "Largely ionic", "Ionic"],
  ["Oxide MO", "Amphoteric, covalent (4:4)", "Weakly basic, ionic (6:6)", "Strongly basic, ionic (6:6)"],
  ["Carbide hydrolysis", "→ CH₄ (methanide)", "Mg₂C₃ → propyne", "→ C₂H₂ (acetylide)"],
], [2.2, 2.4, 2.4, 2.6]));

add(h2("Flame colours"));
add(dataTable(["Be", "Mg", "Ca", "Sr", "Ba"], [["None", "None", "Brick red", "Crimson", "Apple green"]], [2, 2, 2, 2, 2]));

add(h2("The one sentence that explains every solubility trend"));
add(motBox("Unifying principle", [
  p([it("\"As the cation grows down the group, does lattice energy or hydration energy fall faster?\""), t(" For OH⁻/F⁻ — lattice energy falls faster ⇒ solubility "), b("increases"), t(". For CO₃²⁻/SO₄²⁻ — hydration energy falls faster ⇒ solubility "), b("decreases"), t(". Every apparently-contradictory Group 2 solubility trend collapses into this single competing-energies framework.")]),
]));

add(spacer(300));
add(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400 }, children: [new TextRun({ text: "— End of Notes —", italics: true, font: FONT, size: 20, color: "888888" })] }));
