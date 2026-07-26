// Original P-block master notes authored for this course.

export const P_BLOCK_MASTER_MARKDOWN = String.raw`

# 1. P-block map, periodic trends and first-element anomaly

The p-block occupies Groups 13–18 of the periodic table (older IUPAC: III A–VII A and zero group). Valence-shell configuration runs **ns²np¹ to ns²np⁶**; helium (1s²) is placed in Group 18 because of its closed shell even though it has no np electrons. Six groups, over thirty elements: the block contains metals (Al, Ga, In, Tl, Sn, Pb, Bi), metalloids (B, Si, Ge, As, Sb, Te, Po) and non-metals (C, N, P, O, S, halogens, noble gases). Bonding character and the spread of accessible oxidation states are therefore far wider than in the s-block, where each group has essentially one stable state.

| Group | Valence configuration | Elements | Common oxidation states | Max. covalency (period 2 vs later) |
|---|---|---|---:|---|
| 13 | ns²np¹ | B, Al, Ga, In, Tl | +3, (+1 for heavier members) | 4 (B) vs 6 (Al onward, via d-orbitals) |
| 14 | ns²np² | C, Si, Ge, Sn, Pb | +4, +2 | 4 (C) vs 6 (Si onward) |
| 15 | ns²np³ | N, P, As, Sb, Bi | −3, +3, +5 | 4 (N) vs 6 (P onward) |
| 16 | ns²np⁴ | O, S, Se, Te, Po | −2, +2, +4, +6 | 2–4 (O) vs 6 (S onward) |
| 17 | ns²np⁵ | F, Cl, Br, I | −1, +1, +3, +5, +7 | 1 (F) vs 7 (Cl onward) |
| 18 | ns²np⁶ | He, Ne, Ar, Kr, Xe | 0 (Kr, Xe form real compounds) | 0 vs up to 8 (Xe) |

## 1.1 Quantitative periodic trends across the block

**Atomic/ionic radius.** Across a period, effective nuclear charge rises faster than shielding, so radius falls (B > C > N > O > F). Down a group, radius generally rises as a new shell is added, but the increase from period 4 to period 5 is small for elements just after the first transition series (Ga is barely larger than Al, and often has a *smaller* metallic radius than Al) because of poor shielding by the filled 3d¹⁰ subshell — this is the **d-block contraction**. A similar, larger effect (the lanthanide contraction) makes Tl only marginally bigger than In.

**Ionisation enthalpy.** IE₁ generally increases across a period and decreases down a group, but Group 13 shows a dip relative to Group 2 (B < Be is false — actually IE₁(B) < IE₁(Be) because the 2p electron removed in boron is less penetrating and more shielded than the 2s electron removed in beryllium) and Group 16 shows a dip relative to Group 15 (IE₁(O) < IE₁(N) because N has an extra-stable half-filled 2p³ configuration). These "saw-tooth" dips recur once more at Al<Mg and S<P for the same paired/half-filled reasons.

**Electronegativity and electron gain enthalpy** are treated separately in §1.2 because fluorine and oxygen are the standard exam traps.

## 1.2 Why the first member of each group is anomalous

B, C, N, O and F are all small, have unusually high ionisation enthalpy and electronegativity for their group, and — critically — **have no vacant d orbital in the valence shell** (n = 2). Three consequences follow, and every anomaly in the block can be traced to one of them:

1. **Maximum covalency is capped at 4** (one 2s + three 2p orbitals): CCl₄ exists but there is no stable "CCl₆²⁻"; NF₅ and OF₆ are unknown, while PCl₅/₆⁻, SF₆ and even [SiF₆]²⁻ exist for the heavier congeners.
2. **Strong pπ–pπ multiple bonding** is possible only for period-2 atoms because their 2p orbitals are similar in size and overlap well with each other (C=C, C≡C, N≡N, O=O, C=O, N=O). Heavier congeners (Si, P, S) rarely form stable analogous π bonds and instead favour single-bonded catenated or extended (pdπ or network) structures — e.g. CO₂ is a discrete linear molecule but SiO₂ is a three-dimensional network of single Si–O bonds.
3. **Fluorine and oxygen show unexpectedly weak single bonds to each other** (F–F and O–O) because their small size brings the lone pairs on adjacent atoms into strong mutual repulsion. This is *why* the electron gain enthalpy of F is less negative than that of Cl (§15), even though F is the most electronegative element.

The heavier congeners in each group are larger, have accessible d orbitals (from n = 3 onward, though the "d-orbital participation" language is now understood loosely as orbital availability/hybridisation convenience rather than literal d-orbital bonding) and commonly show higher coordination numbers (6 for Al, Si, S, Cl in typical complexes/oxoanions vs 3–4 for B, C, N, O).

## 1.3 Inert-pair effect

Down heavier p-block groups, the valence ns² electron pair increasingly resists participating in bonding and instead stays as a stereochemically distorting lone pair on the atom in its lower oxidation state. Consequently, **lower oxidation states become progressively more stable down a group**: Tl(I) is more stable than Tl(III); Pb(II) is more stable than Pb(IV); Bi(III) is more stable than Bi(V). PbO₂ is therefore a strong oxidising agent (it "wants" to fall to Pb²⁺), while Tl³⁺ is a good oxidising agent (it "wants" to fall to Tl⁺). This is a **relative-stability trend rooted in poor shielding and relativistic contraction of the 6s orbital for the sixth-period elements**, not a claim that the higher oxidation state cannot exist or is never encountered in a JEE question.

## 1.4 Chemical reactivity trends across the block

- **Towards air/O₂:** reactivity of the free element with dioxygen generally falls down a group (Li burns superficially, Cs ignites spontaneously is an s-block analogy; among p-block metals, Al forms a passivating oxide film while heavier Tl oxidises more readily in moist air due to inert-pair-driven Tl₂O formation).
- **Towards water:** covalent hydrides/halides of the smaller, harder first members often resist or slowly hydrolyse (CCl₄ does not hydrolyse — no low-lying empty orbital and no way to expand octene at carbon); the heavier congeners with accessible d-type orbitals hydrolyse readily and fast (SiCl₄, PCl₃, PCl₅ all hydrolyse instantly).
- **Towards halogens:** most p-block elements form halides directly; the highest halide (e.g., PCl₅, SF₆) requires excess halogen and is favoured when the central atom is large enough to avoid crowding — this is why NCl₅ is unknown but PCl₅ is common, and why SF₆ is inert to hydrolysis purely on **kinetic (steric/no low-energy pathway)**, not thermodynamic, grounds.
- **Towards acids and alkalis:** amphoteric behaviour (reacting with both acid and alkali) appears where a metal/metalloid oxide can act as both proton acceptor and donor — Al₂O₃, Al(OH)₃, PbO, SnO and As₂O₃ are the standard JEE examples; pure non-metal oxides (CO₂, SO₃, N₂O₅) are acidic only.

## 1.5 JEE Advanced checklist for Section 1

- Explain each stated exception using size, bond strength, electronegativity, poor shielding or the inert-pair effect — never just "because it is anomalous."
- Oxidation state is not the same as covalency or coordination number (e.g., in [PCl₆]⁻ phosphorus is +5 with covalency/coordination number 6).
- For an oxoacid, count ionisable O–H hydrogens; hydrogen attached directly to the central atom is normally non-ionisable (§10).

**Worked example 1.1.** *Arrange in order of increasing first ionisation enthalpy: B, Be, C, N, O.* Reasoning: Be (fully filled 2s²) > B (2s²2p¹, easy to lose the single p electron) but B's IE is still higher than expected only relative to its own period trend continuing upward; the accepted JEE order is B < Be < C < O < N, because Be and N both benefit from extra stability (filled and half-filled subshells respectively) that momentarily reverses the raw periodic increase.

# 2. Group 13: boron family, trends and electron-deficient bonding

Members are B, Al, Ga, In and Tl. Boron is a hard, high-melting, covalent, electron-deficient non-metal/metalloid; aluminium onward the elements are metallic, though Al₂O₃/Al(OH)₃ remain amphoteric. The group oxidation state is +3; +1 becomes progressively more important down the group (Tl⁺ is the dominant, most stable thallium species in aqueous chemistry) because of the inert-pair effect (§1.3).

## 2.1 General trends in Group 13

- **Melting point** falls sharply from B (very high, network covalent) to Al, then shows an irregular dip at Ga (Ga melts near room temperature, 303 K, below Al, because gallium's crystal structure contains discrete Ga₂ units with weaker metallic bonding — a genuine anomaly, not a smooth trend).
- **Metallic character** increases down the group: B is a metalloid; Al, Ga, In, Tl are metals.
- **Electropositive character/reducing power** of the free metal increases down the group in the classical sense, but Al's high negative reduction potential combined with a tenacious oxide film makes it *kinetically* unreactive despite being thermodynamically very reducing (used in the thermite reaction, §metallurgy cross-reference).
- **Diagonal relationship:** Boron resembles silicon (Group 14) more than it resembles aluminium — both B and Si are metalloids, both form acidic, covalent, network oxides (B₂O₃, SiO₂), both form volatile hydrides that ignite in air, and both give anionic complex fluorides ([BF₄]⁻, [SiF₆]²⁻).

## 2.2 Boron and its key compounds

**Borax**, Na₂B₄O₇·10H₂O, is correctly written to show its true anion as [B₄O₅(OH)₄]²⁻: two boron atoms are tetrahedral (sp³) and two are trigonal planar (sp²) inside the ring. In water, borax hydrolyses to give a basic solution because the boric acid produced is a very weak acid while NaOH-equivalent hydroxide ion is fully associated with the strong base sodium:

\[\mathrm{Na_2B_4O_7+7H_2O\rightarrow2NaOH+4H_3BO_3}\]

**Orthoboric acid**, B(OH)₃ (equivalently H₃BO₃), is planar, with each BO₃ unit linked to neighbours through hydrogen bonds into a layered sheet structure — this layered lattice is why boric acid feels soapy/flaky. It is a **Lewis acid**, not a Brønsted acid in the usual sense:

\[\mathrm{B(OH)_3+2H_2O\rightleftharpoons[B(OH)_4]^-+H_3O^+}\]

Its acidity rises sharply in the presence of a polyhydroxy compound such as glycerol or mannitol, because the cis-diol oxygens chelate boron and pull the equilibrium toward the tetrahedral borate product, effectively removing free B(OH)₃ and driving further ionisation (a Le Chatelier argument, not a change in boron's inherent Lewis acidity).

On heating, boric acid loses water stepwise: B(OH)₃ → HBO₂ (metaboric acid) → B₂O₃ (boric oxide, glassy network solid).

## 2.3 Diborane, B₂H₆

Diborane has four terminal B–H bonds (normal 2c–2e bonds) and two bridging B–H–B hydrogens. Each bridge is described in the conventional JEE model as a **three-centre, two-electron (3c–2e) "banana" bond**: two B atoms and one bridging H atom share a single pair of electrons across all three centres, so the bridge bond order per B–H contact is only ½. This is why B₂H₆ is described as **electron deficient** — a Lewis structure with only 2c–2e bonds cannot be drawn for the bridges (12 valence electrons are available; 7 bonds — 4 terminal + 2 bridge×2 contacts — would need 14 electrons for a normal picture, so the 3c–2e description resolves the deficiency).

**Preparation** (laboratory-scale, industrially relevant redox routes):

\[\mathrm{2BF_3+6NaH\xrightarrow{450\ K}B_2H_6+6NaF}\]
\[\mathrm{2BCl_3+6LiAlH_4\rightarrow B_2H_6+6LiCl+3AlCl_3}\] (simplified; LiAlH₄ is the reducing/hydride-transfer agent)

Diborane reacts as a Lewis acid at boron and hydrolyses completely to boric acid and hydrogen:

\[\mathrm{B_2H_6+6H_2O\rightarrow2B(OH)_3+6H_2}\]

With ammonia it forms an adduct that, on controlled heating, loses hydrogen to give **borazine**, B₃N₃H₆ (§3.4).

## 2.4 BF₃, back-bonding and the reversed Lewis-acidity order

BF₃ is trigonal planar (sp² boron) and electron deficient (only 6 electrons around B). Filled 2p orbitals on each fluorine donate density into boron's empty 2pz orbital (**pπ–pπ back bonding**), partially satisfying boron's octet and reducing its Lewis acidity relative to a naive "empty-orbital" expectation. Because F is small, its 2p orbital overlaps best with boron's empty 2p orbital, so back bonding is strongest in BF₃ and weakens down the halogen series (Cl, Br, I are larger, poorer 2p–2p/3p–2p overlap). The **observed Lewis-acidity order is therefore the reverse of electronegativity**:

\[\mathrm{BF_3<BCl_3<BBr_3<BI_3}\]

## 2.5 Aluminium chemistry: AlCl₃ and alums

Al₂O₃ and Al(OH)₃ are amphoteric — they dissolve in both acid (giving Al³⁺ salts) and excess strong alkali (giving the aluminate ion, [Al(OH)₄]⁻):

\[\mathrm{Al_2O_3+6HCl\rightarrow2AlCl_3+3H_2O}\]
\[\mathrm{Al_2O_3+2NaOH+3H_2O\rightarrow2Na[Al(OH)_4]}\]

Anhydrous aluminium chloride is covalent and dimerises in the vapour/solid state to **Al₂Cl₆** through two chlorine bridges, each aluminium reaching a coordination number of 4 (tetrahedral); above ~1073 K the vapour dissociates to monomeric, trigonal-planar AlCl₃. In water, extensive hydration and hydrolysis occurs, giving an acidic solution of [Al(H₂O)₆]³⁺, which itself is acidic because the small, highly charged Al³⁺ polarises coordinated water and releases H⁺.

**Alums** are double sulphates of general formula M<sup>I</sup>M<sup>III</sup>(SO₄)₂·12H₂O, where M<sup>I</sup> is a univalent cation (K⁺, Na⁺, NH₄⁺) and M<sup>III</sup> is a trivalent cation (Al³⁺, Cr³⁺, Fe³⁺). Potash alum is KAl(SO₄)₂·12H₂O. Alums crystallise in the same isomorphous crystal system, which is why the family is named collectively; they are used as mordants and water-purification flocculants because Al(OH)₃ colloid forms on hydrolysis and adsorbs suspended impurities.

### Trap bank — Group 13

- Do not call B(OH)₃ tribasic: it has three OH groups but functions as a **monobasic Lewis acid**, accepting only one OH⁻ to form [B(OH)₄]⁻.
- BF₃ is the *weakest* Lewis acid among the boron trihalides, not the strongest — reasoning is back-bonding, not electronegativity.
- Al₂Cl₆ is the dimer only in the vapour/solid phase below ~1073 K; do not draw bridging chlorines for AlCl₃ dissolved in water (there it is fully hydrated/ionic).
- Ga has a lower melting point than Al — an exception to "melting point increases with metallic bonding strength down a group."

# 3. Group 13 deep dive: borax, boric acid, BF₃, diborane and alums

## 3.1 Borax and the borax-bead test

Borax, Na₂B₄O₇·10H₂O, is a useful, cheap source of borate ion for qualitative analysis. On strong, sustained heating it first loses its water of crystallisation, swells, and then fuses into a clear, glassy bead containing sodium metaborate and boric anhydride in the melt:

\[\mathrm{Na_2B_4O_7\xrightarrow{\Delta}2NaBO_2+B_2O_3}\]

The hot, molten bead dissolves many transition-metal oxides to give characteristically coloured metaborates (e.g., cobalt oxide gives a deep blue bead in both oxidising and reducing flames; chromium oxide gives green; manganese oxide gives violet in the oxidising flame but colourless/pale green in the reducing flame). The observed colour depends on the metal, its oxidation state in the melt, its concentration, and whether the flame is oxidising or reducing — the borax-bead test is therefore a useful **qualitative screening indication**, never a substitute for a confirmatory wet-chemical test.

## 3.2 Orthoboric acid: the Lewis-acid mechanism in full

The planar B(OH)₃ molecule has an electron-deficient, sp²-hybridised boron centre with an empty 2pz orbital. It does **not** ionise a proton directly the way a conventional Brønsted acid does; instead it **accepts a hydroxide ion from a water molecule**, and the water molecule that donated OH⁻ is left as H₃O⁺ — the net effect is an acidic solution even though boron itself never "loses" a proton:

\[\mathrm{B(OH)_3+2H_2O\rightleftharpoons[B(OH)_4]^-+H_3O^+}\qquad K_a\approx5.8\times10^{-10}\ (\text{a weak acid})\]

Polyhydroxy compounds (glycerol, mannitol, catechol) increase the observed acidity by chelating the boron centre through their cis-1,2-diol oxygens once it becomes tetrahedral [B(OH)₄]⁻-like, forming a stable five-membered chelate ring. This removes free B(OH)₃ from the equilibrium (Le Chatelier's principle pulls the equilibrium further to the right), so the *apparent* Kₐ rises substantially — boron's intrinsic Lewis acidity has not changed; only the position of equilibrium has shifted.

**Exam pivot:** the planar geometry of B(OH)₃ and the tetrahedral geometry of [B(OH)₄]⁻ describe two genuinely different species along the equilibrium — never apply one geometry to the other.

## 3.3 BF₃ and back donation, in mechanistic detail

BF₃ is trigonal planar (sp² boron, bond angle 120°) and electron deficient (six electrons around boron rather than eight). In the standard JEE picture, a filled 2p orbital on each fluorine donates lone-pair density sideways into boron's empty, unhybridised 2pz orbital — **pπ(F)–pπ(B) back bonding** — partially filling boron's octet and shortening/strengthening the B–F bond relative to a purely single, dative-free B–F bond. Because fluorine's 2p orbital is closest in size and energy to boron's own 2p orbital, this overlap is most effective in BF₃ and progressively weaker for BCl₃, BBr₃, BI₃ (larger halogen p orbitals overlap less efficiently with boron's compact 2p orbital). The net Lewis-acidity order among the boron trihalides is therefore:

\[\mathrm{BF_3<BCl_3<BBr_3<BI_3}\]

— the *reverse* of the halogen electronegativity order, and a favourite "explain the anomaly" JEE Advanced question. This should be read strictly as a **comparative statement among the four boron trihalides**; it is not a claim that BF₃ is not a Lewis acid at all (it readily forms adducts such as BF₃·NH₃ and BF₃·OEt₂, the latter a common laboratory reagent).

## 3.4 Diborane reaction set, including borazine

Diborane is prepared industrially/in the lab by reducing boron trihalides or trimethyl borate with a complex hydride:

\[\mathrm{2BF_3+6NaH\xrightarrow{450\ K}B_2H_6+6NaF}\]

Its defining reaction classes are (i) complete hydrolysis to boric acid and hydrogen, (ii) Lewis-acid addition to bases (ammonia, amines, ethers, hydride ion), and (iii) combustion (highly exothermic, once used as a rocket-fuel candidate). With excess ammonia at low temperature it first forms the simple adduct B₂H₆·2NH₃; controlled heating of this adduct drives off hydrogen and produces **borazine**, B₃N₃H₆:

\[\mathrm{3B_2H_6+6NH_3\xrightarrow{\Delta,\ 450\ K}2B_3N_3H_6+12H_2}\]

Borazine is a planar, six-membered ring of alternating B and N atoms, each bearing one exocyclic H, and is often nicknamed "inorganic benzene" purely on the grounds of isoelectronic valence-electron count and ring planarity. Its **bond polarity is entirely different from benzene's** (alternating δ+ B and δ– N around the ring, versus uniformly non-polar C–C bonds in benzene), so borazine undergoes addition reactions with polar reagents such as HCl far more readily than benzene does — a structural analogy must never be extended into a claim of identical reactivity.

## 3.5 Aluminium chloride and alums, in full

Anhydrous AlCl₃ is a strong Lewis acid (used industrially as a Friedel–Crafts catalyst). In the dimeric vapour/solid form, **Al₂Cl₆**, two chlorine atoms bridge the two aluminium centres, each Al reaching tetrahedral (4-coordinate) geometry — each bridging Cl donates one lone pair into the neighbouring, otherwise electron-deficient Al. Above roughly 1073 K the vapour dissociates into monomeric, trigonal-planar AlCl₃. In aqueous solution, extensive hydration/hydrolysis occurs and the simple "AlCl₃ dissolved in water" picture is not a reliable representation — the actual species present is the hexaaqua ion, [Al(H₂O)₆]³⁺, which is itself weakly acidic because the small, highly charged Al³⁺ centre polarises the coordinated water molecules and promotes loss of H⁺:

\[\mathrm{[Al(H_2O)_6]^{3+}+H_2O\rightleftharpoons[Al(H_2O)_5(OH)]^{2+}+H_3O^+}\]

**Alums** are double sulphates of general formula M<sup>I</sup>M<sup>III</sup>(SO₄)₂·12H₂O (M<sup>I</sup> = K⁺, Na⁺ or NH₄⁺; M<sup>III</sup> = Al³⁺, Cr³⁺ or Fe³⁺), all crystallising in the same isomorphous cubic system, which is why they form one family despite containing different trivalent metals. Potash alum, KAl(SO₄)₂·12H₂O, is the most common example, used historically as a mordant in dyeing and as a water-purification flocculant (hydrolysis of Al³⁺ generates a gelatinous Al(OH)₃ colloid that adsorbs and drags down suspended particulate impurities).

# 4. Group 14: carbon, silicon, catenation and the inert-pair effect

Members are C, Si, Ge, Sn and Pb. The oxidation states +4 and +2 are central; +4 is more stable for the lighter members (C, Si) while +2 gains stability down the group, becoming dominant for Pb (inert-pair effect, §1.3). Carbon strongly favours covalency, **catenation** (self-linking into chains/rings) and pπ–pπ multiple bonds; none of the heavier congeners catenate to a comparable extent because M–M bond strength falls down the group (C–C ≫ Si–Si > Ge–Ge > Sn–Sn).

## 4.1 General trends and the classic tetrahalide-hydrolysis exception

Covalent/ionic character, acidic/basic character of oxides, and coordination-number ceiling (4 for C vs up to 6 for Si onward) all follow directly from §1.2's "no d orbital in n = 2" rule. The single most tested consequence:

**CCl₄ does not hydrolyse in water, but SiCl₄ hydrolyses instantly.** Carbon has no vacant, low-energy 3d/d-type orbital to accept a lone pair from an incoming water molecule and form the five-coordinate transition state required for nucleophilic substitution at carbon; silicon (period 3) can access such orbitals/hybrid pathways and hydrolyses via a pentacoordinate intermediate:

\[\mathrm{SiCl_4+2H_2O\rightarrow SiO_2+4HCl}\]

Tin and lead show the inert-pair effect directly in their halides: SnCl₂ is a common, stable, reducing salt (Sn²⁺ is a mild reducing agent, reducing Hg²⁺ to Hg and Fe³⁺ to Fe²⁺), while SnCl₄ is a strong Lewis acid/covalent liquid; PbCl₂ is far more stable than the strongly oxidising PbCl₄, and PbO₂ readily oxidises concentrated HCl to Cl₂ while itself being reduced to Pb²⁺.

## 4.2 Carbon oxides

CO is neutral (does not react with water, acid or base under ordinary conditions — an exception to "all p-block oxides are acidic/basic/amphoteric"), poisonous, and a strong reducing agent at high temperature:

\[\mathrm{Fe_2O_3+3CO\rightarrow2Fe+3CO_2}\]

It binds haemoglobin roughly 200 times more strongly than O₂ (forming stable carboxyhaemoglobin), which is the basis of its physiological toxicity. CO₂ is an acidic oxide and reacts with limewater in a ratio-dependent way:

\[\mathrm{Ca(OH)_2+CO_2\rightarrow CaCO_3\downarrow+H_2O}\]
\[\mathrm{CaCO_3+CO_2+H_2O\rightarrow Ca(HCO_3)_2}\]

The second reaction (limited CaCO₃ dissolving as soluble bicarbonate in excess CO₂) explains the clearing of milkiness on prolonged passage of CO₂ through limewater.

## 4.3 Silicon chemistry: SiO₂, silicates and zeolites

SiO₂ is a giant covalent, three-dimensional network solid built from corner-shared SiO₄ tetrahedra (every oxygen bridges exactly two silicon atoms in pure quartz). It resists most acids but reacts with HF — an important exception to "glass/silica resist acid attack":

\[\mathrm{SiO_2+6HF\rightarrow H_2SiF_6+2H_2O}\]

**Silicates** are built from [SiO₄]⁴⁻ tetrahedra. The number of corners each tetrahedron shares with neighbours (0 through 4) fixes the anion topology:

| Corners shared | Structural class | Example anion |
|---|---|---|
| 0 | orthosilicate (isolated tetrahedra) | [SiO₄]⁴⁻ |
| 2 (single strand) | pyroxene-type chain | [SiO₃²⁻]ₙ |
| 2, doubled | amphibole-type double chain | [Si₄O₁₁⁶⁻]ₙ |
| 3 | mica/clay-type sheet | [Si₂O₅²⁻]ₙ |
| 4 | quartz/feldspar/zeolite framework | (SiO₂)ₙ or aluminosilicate |

**Zeolites** are microporous, crystalline **aluminosilicates** in which some Si(IV) is isomorphously replaced by Al(III). Each substitution leaves one unit of negative framework charge, balanced by an exchangeable cation (Na⁺, Ca²⁺) sitting in the pores. This is why zeolites function as ion exchangers (water softening — the basis of "permutit," a synthetic zeolite) and as **shape-selective catalysts** (e.g., ZSM-5 in petroleum cracking): only molecules of the right size can enter/leave the pore network to react at the internal aluminosilicate acid sites.

## 4.4 Silicones

Silicones are synthetic organosilicon polymers containing repeating **–Si–O–Si–** (siloxane) linkages with organic groups (commonly methyl) bonded directly to silicon. They are made by hydrolysing organochlorosilanes, R\_nSiCl₍₄₋ₙ₎, followed by condensation:

\[\mathrm{R_2SiCl_2+2H_2O\rightarrow R_2Si(OH)_2+2HCl}\]

Two R₂Si(OH)₂ units then condense, eliminating water and forming a Si–O–Si link; repeated condensation builds linear chains (from R₂SiCl₂), cross-linked networks (from RSiCl₃, which has three hydrolysable chlorines), or terminates chains (from R₃SiCl, monofunctional). Their thermal stability, hydrophobicity and chemical inertness follow directly from the strong, polar Si–O bond and the flexible, freely rotating siloxane backbone; they are used as water-repellent coatings, high-temperature lubricants/greases, and in surgical/cosmetic implants.

### Trap bank — Group 14

- CCl₄ resists hydrolysis; SiCl₄ hydrolyses instantly — always give the "no d/vacant orbital at carbon" reason, not just "carbon is different."
- CO is neutral; do not classify it as acidic merely because it contains oxygen.
- SnCl₂ is reducing (Sn²⁺ → Sn⁴⁺); PbO₂ is oxidising (Pb⁴⁺ → Pb²⁺) — both are inert-pair-effect consequences but act in opposite roles.
- The functionality of the chlorosilane (mono-, di- or tri-functional) controls whether the silicone product is a chain terminator, linear polymer, or cross-linked network.

# 5. Group 14 deep dive: allotropes, carbon oxides and silicon materials

## 5.1 Carbon allotropes and structure–property links

Diamond is a three-dimensional network in which every carbon is tetrahedrally sp³-bonded to four others (C–C = 154 pm), giving exceptional hardness and a very high melting point; because all valence electrons are localised in strong, directional σ bonds, diamond is an electrical insulator, yet it conducts heat exceptionally well through efficient lattice-phonon transmission through the rigid covalent framework. Graphite consists of parallel sp² layers (each carbon bonded to three neighbours, C–C = 141 pm within a layer) with one delocalised π electron per carbon spread over the whole sheet; the layers themselves are held together only by weak van der Waals forces (interlayer spacing ≈ 335 pm), so they slide over one another easily — graphite is therefore soft and a good lubricant, and it conducts electricity well *within* a layer (from the delocalised π system) but poorly *between* layers. Fullerenes (C₆₀, "buckminsterfullerene," a closed cage of fused pentagons and hexagons) and graphene (a single isolated graphite layer) extend this structural range; every stated property must be traced back to bonding type and dimensionality rather than asserted from the allotrope's name alone.

**JEE trap:** both diamond and graphite are giant *covalent* network solids, not ionic or metallic lattices — their very different electrical conductivities arise purely from the availability (or absence) of delocalised electrons, never from a difference in bond type.

## 5.2 Carbon monoxide: formation, reactivity and toxicity

CO forms in incomplete combustion (limited O₂ supply) and by the reduction of CO₂ over hot carbon (the reverse Boudouard-type equilibrium, favoured at high temperature):

\[\mathrm{CO_2+C\xrightarrow{high\ T}2CO}\]

It is a strong reducing agent at elevated temperature, exploited in blast-furnace iron extraction:

\[\mathrm{Fe_2O_3+3CO\rightarrow2Fe+3CO_2}\]

Its physiological toxicity arises from very strong, essentially irreversible-at-normal-partial-pressures binding to the iron centre of haemoglobin, forming carboxyhaemoglobin and blocking normal O₂ transport. In coordination chemistry, CO is also an important σ-donor/π-acceptor ligand (forming metal carbonyls such as Ni(CO)₄) — a distinct, separate phenomenon from its physiological binding, driven by back-donation from filled metal d orbitals into CO's empty π* orbital rather than simple Lewis acid–base donation alone.

## 5.3 Carbon dioxide: ratio-dependent reactions

CO₂ is an acidic oxide; its reaction with hydroxide is strictly dependent on the relative quantities of each reagent:

\[\mathrm{CO_2+OH^-\rightarrow HCO_3^-}\qquad(\text{limited base, i.e. CO}_2\text{ in excess})\]
\[\mathrm{CO_2+2OH^-\rightarrow CO_3^{2-}+H_2O}\qquad(\text{excess base})\]

For a **limited quantity of base relative to CO₂**, the bicarbonate ion is favoured; for **excess base**, the fully deprotonated carbonate ion is favoured. This reagent-ratio discipline — identical in spirit to the ammonia/chlorine excess rule (§7.2) — is essential across essentially every p-block acid–base and redox reaction in this syllabus.

## 5.4 Silicon tetrachloride, silica and glass

SiCl₄ hydrolyses readily and completely because silicon (unlike carbon) can accept incoming electron density from a water oxygen into a low-energy vacant orbital, forming a pentacoordinate transition state en route to the strong Si–O bonds of the product:

\[\mathrm{SiCl_4+2H_2O\rightarrow SiO_2+4HCl}\]

Silica (SiO₂) is chemically inert to most acids but is attacked by hydrofluoric acid (§4.3); consequently, HF is stored in polyethylene or wax-lined containers rather than ordinary glass. **Glass is itself a supercooled, amorphous silicate mixture** (not a single stoichiometric compound): its exact blend of network-former (SiO₂) and network-modifier oxides (Na₂O, CaO, B₂O₃, PbO, depending on the type of glass — soda-lime, borosilicate/Pyrex, or lead/flint glass) controls its softening point, chemical resistance and optical properties. Avoid ever quoting a single universal molecular formula for "glass."

# 6. Silicates, zeolites and silicones: framework logic

The universal silicate building block is the [SiO₄]⁴⁻ tetrahedron. Each tetrahedron may share 0, 1, 2, 3 or 4 of its corner oxygens with neighbouring tetrahedra; sharing a corner means that single oxygen atom is bonded to two silicon centres simultaneously, which both lowers the overall oxygen-to-silicon ratio and changes the residual anionic charge per silicon.

| Corners shared per tetrahedron | Representative structural pattern | Resulting anion / material |
|---|---|---|
| 0 | orthosilicate — fully isolated tetrahedra | [SiO₄]⁴⁻ (e.g., in zircon, olivine) |
| 2 (single chain) | pyroxene-type infinite single chain | [(SiO₃)ₙ]²ⁿ⁻ |
| 2 (paired into a double chain) | amphibole-type double chain | [(Si₄O₁₁)ₙ]⁶ⁿ⁻ |
| 3 | mica/clay-type infinite sheet | [(Si₂O₅)ₙ]²ⁿ⁻ |
| 4 | three-dimensional framework | quartz (SiO₂, neutral) or aluminosilicate zeolites (anionic) |

**Zeolites** are crystalline, porous **aluminosilicate** frameworks formed when some Si(IV) tetrahedral sites are isomorphously replaced by Al(III). Each such substitution leaves one unit of negative framework charge, which is balanced by a mobile, exchangeable cation (commonly Na⁺ or Ca²⁺) residing within the pore system. This dual feature — a fixed, rigid, size-selective pore architecture plus mobile, exchangeable cations — is exactly what gives zeolites both **ion-exchange capacity** (synthetic zeolites, "permutit," soften hard water by swapping their Na⁺ for dissolved Ca²⁺/Mg²⁺) and **shape-selective catalytic activity** (ZSM-5 and related zeolites in petroleum cracking and methanol-to-gasoline processes, where only molecules of the right size and shape can diffuse to and from the internal acid sites). The most reliable approach to any zeolite question is to work through, in order: **(1) identify the framework/substitution pattern, (2) establish the charge balance, (3) then reason about the resulting pore/ion-exchange/catalytic function.**

Silicones are synthetic organosilicon polymers built from repeating **–Si–O–Si–** (siloxane) linkages carrying organic substituents (typically methyl groups) directly bonded to silicon. They are manufactured by hydrolysing organochlorosilanes, R\_nSiCl₍₄₋ₙ₎, and then allowing the resulting silanols to condense:

\[\mathrm{R_2SiCl_2+2H_2O\rightarrow R_2Si(OH)_2+2HCl}\]

followed by intermolecular condensation (loss of water) to build up –Si–O–Si– links. The **number of hydrolysable Cl atoms on the starting chlorosilane directly controls the resulting polymer topology**: R₃SiCl (one hydrolysable Cl) can only terminate a growing chain; R₂SiCl₂ (two hydrolysable Cl) builds linear chains; RSiCl₃ (three hydrolysable Cl) introduces cross-links and produces a three-dimensional network. Silicones combine high thermal stability, marked hydrophobicity and chemical inertness — properties that follow directly from the strong, polar Si–O bond and the flexible, freely-rotating backbone — and are used as water-repellent coatings, high-temperature lubricants and greases, and in medical/cosmetic implants.

# 7. Group 15: nitrogen, ammonia and nitrogen oxides

Members are N, P, As, Sb and Bi. Nitrogen is anomalous for the reasons in §1.2: small size, high electronegativity, no d orbitals, and a very strong N≡N triple bond (bond enthalpy ≈ 946 kJ mol⁻¹, among the strongest of any diatomic molecule). Common oxidation states span −3 to +5, with −3, +3 and +5 the most exam-relevant.

## 7.1 Dinitrogen: why it is inert yet essential

N₂ is comparatively unreactive at room temperature purely because of the enormous N≡N bond enthalpy (a **kinetic/thermodynamic bond-strength** argument, not a lack of a possible reaction pathway). High temperature, pressure and a catalyst are required to break this bond industrially.

## 7.2 Ammonia and the Haber process

Ammonia (NH₃) is trigonal pyramidal (sp³ N, one lone pair), highly water-soluble due to hydrogen bonding, a Lewis/Brønsted base, and a mild reducing agent in several reactions.

\[\mathrm{N_2+3H_2\rightleftharpoons2NH_3\qquad\Delta H^\ominus=-92.4\ \text{kJ mol}^{-1}}\]

Because the forward reaction is exothermic and reduces gas moles (4 mol → 2 mol), **high pressure and low temperature favour equilibrium yield** (Le Chatelier). Industrially, a compromise temperature (≈ 700 K) and pressure (≈ 200 atm) with an iron catalyst (promoted with Mo/K₂O/Al₂O₃) is used because very low temperature gives a high equilibrium yield but an impractically slow rate.

Ammonia reacts with excess chlorine to give nitrogen and HCl, but with excess ammonia (ammonia in excess over chlorine) the HCl formed is neutralised by the extra ammonia and **chloramine**, NH₂Cl, results instead:

\[\mathrm{8NH_3+3Cl_2\rightarrow N_2+6NH_4Cl\quad(\text{excess }NH_3)}\]
\[\mathrm{NH_3+Cl_2\rightarrow NH_2Cl+HCl\quad(\text{excess }Cl_2)}\]

**Always name which reagent is in excess before writing the product** — this reagent-ratio discipline recurs throughout p-block chemistry (§4.2, §5.3).

## 7.3 Nitric acid and nitrogen oxides

Concentrated HNO₃ is a strong, oxidising acid. It **passivates** Fe, Cr and Al: a thin, adherent, unreactive oxide layer forms on the metal surface and prevents further reaction, which is why concentrated (cold) HNO₃ can be transported in aluminium/iron containers even though dilute HNO₃ attacks these metals vigorously.

NO is colourless and paramagnetic (odd number of valence electrons) and rapidly oxidises in air to brown NO₂:

\[\mathrm{2NO+O_2\rightarrow2NO_2}\]

NO₂ and N₂O₄ exist in a temperature-dependent equilibrium; N₂O₄ has a direct N–N bond joining two planar NO₂ units. **NO₂ is paramagnetic (odd-electron radical); N₂O₄ is diamagnetic** because the two odd electrons pair up across the new N–N bond. Lower temperature and higher pressure favour the diamagnetic dimer.

## 7.4 Phosphorus: white vs red, and PH₃ vs NH₃

White phosphorus contains discrete, strained P₄ tetrahedra (each P–P–P angle only 60°, far from the ideal ~109.5°, so the molecule is highly reactive and stored under water to prevent spontaneous aerial oxidation/ignition). Red phosphorus is a polymeric chain structure formed by opening one P–P bond per P₄ unit and linking units together; it is far less reactive, has a higher melting point, and is not phosphorescent or poisonous in the way white phosphorus is.

PH₃ is a much weaker base than NH₃: nitrogen's lone pair (small atom, high electronegativity, no diffuse orbital) is far more concentrated and available for donation than phosphorus's lone pair (larger atom, lower electronegativity, lone pair in a more diffuse, more s-character-dominated orbital). This also explains why NH₃ hydrogen-bonds extensively (high boiling point, 240 K vs the "expected" much lower value) while PH₃ shows negligible hydrogen bonding and boils near 185 K.

PCl₅ is trigonal bipyramidal (sp³d, 3 equatorial + 2 axial, D₃ₕ) in the gas phase; in the solid state it exists as the ionic lattice **[PCl₄]⁺[PCl₆]⁻** (tetrahedral cation + octahedral anion) — always specify the phase before assigning shape.

# 8. Group 15 deep dive: nitrogen, ammonia, nitrides and nitric acid

## 8.1 Nitrogen fixation and the different classes of nitride

The very large N≡N bond enthalpy (≈ 946 kJ mol⁻¹) makes atmospheric dinitrogen kinetically inert at ordinary temperatures despite the overall thermodynamics of many of its reactions being favourable. Biological nitrogen fixation (nitrogenase enzymes), atmospheric fixation by lightning, and the industrial Haber process are the three routes that convert this kinetically stable N₂ into more reactive, combined nitrogen. **Nitrides are not a single structural class**: ionic nitrides (Mg₃N₂, Ca₃N₂ — formed from a reactive metal and N₂ directly, containing discrete N³⁻ ions and hydrolysing cleanly to ammonia and the metal hydroxide), covalent nitrides (BN, with graphite-like and diamond-like polymorphs, §Group 13 diagonal relationship), and interstitial nitrides (formed by transition metals, where small N atoms occupy octahedral holes in the metal lattice, giving very hard, chemically inert, metallic-conducting solids) all have fundamentally different bonding, structure and hydrolysis behaviour, and must never be treated as one uniform "nitride" category:

\[\mathrm{Mg_3N_2+6H_2O\rightarrow3Mg(OH)_2+2NH_3}\]

## 8.2 Ammonia: laboratory preparation and diagnostic reactions

In the laboratory, ammonia is generated by heating an ammonium salt with a strong base such as slaked lime:

\[\mathrm{2NH_4Cl+Ca(OH)_2\xrightarrow{\Delta}2NH_3+CaCl_2+2H_2O}\]

Being lighter than air and extremely soluble in water, ammonia is collected by the **downward-displacement-of-air** method (never over water, into which it would simply dissolve). It turns moist red litmus paper blue (confirming its basic character) and forms dense white fumes of ammonium chloride on contact with HCl gas — a standard identification test:

\[\mathrm{NH_3+HCl\rightarrow NH_4Cl}\]

Drying the evolved ammonia gas requires a **basic** drying agent such as quicklime (CaO); acidic drying agents (conc. H₂SO₄, P₂O₅) react with and absorb the ammonia itself, while anhydrous CaCl₂ is unsuitable because it forms an addition compound, CaCl₂·8NH₃, rather than simply drying the gas.

## 8.3 The Ostwald process for nitric acid

Industrial nitric acid manufacture proceeds through three conceptual stages: catalytic oxidation of ammonia to NO (Pt/Rh gauze catalyst, ~ 500 K, ~ 9 atm), rapid non-catalytic oxidation of NO to NO₂ in air, and absorption of NO₂ in water to give nitric acid, with the by-product NO recycled back into the second stage:

\[\mathrm{4NH_3+5O_2\xrightarrow{Pt/Rh,\ \Delta}4NO+6H_2O}\]
\[\mathrm{2NO+O_2\rightarrow2NO_2}\]
\[\mathrm{3NO_2+H_2O\rightarrow2HNO_3+NO}\]

Because the NO liberated in the final absorption step is fed straight back into the second oxidation stage, a nitrogen-atom mass-balance across the recycled loop — rather than treating each equation as a one-way, terminal consumption of nitrogen — is the correct way to answer any "overall yield" or stoichiometry question on this process.

# 9. Nitrogen oxides, phosphorus allotropes and chlorides

## 9.1 Comparing the nitrogen oxides

| Oxide | Common name | Key feature |
|---|---|---|
| N₂O | nitrous oxide | neutral oxide; supports combustion of a glowing splint under suitable conditions; used as a mild anaesthetic |
| NO | nitric oxide | colourless, paramagnetic (odd electron); rapidly oxidised by air to brown NO₂ |
| N₂O₃ | dinitrogen trioxide | conventionally treated as the acid anhydride of nitrous acid, HNO₂ |
| NO₂ / N₂O₄ | nitrogen dioxide / dinitrogen tetroxide | brown, paramagnetic monomer in equilibrium with a colourless, diamagnetic dimer joined by a direct N–N bond |
| N₂O₅ | dinitrogen pentoxide | conventionally treated as the acid anhydride of nitric acid, HNO₃ |

Lower temperature and higher pressure both favour the diamagnetic dimer, N₂O₄, over the paramagnetic monomer, NO₂. The associated colour change (brown ⇌ colourless) and the magnetic change (paramagnetic ⇌ diamagnetic) both arise purely from this dimerisation **equilibrium**, not from any change in the oxidation number of nitrogen (which remains +4 throughout).

## 9.2 Phosphorus allotropes, compared precisely

White phosphorus is a molecular solid of discrete, highly strained P₄ tetrahedra (P–P–P bond angle only 60°, far below the natural ~ 100° preferred by phosphorus's bonding orbitals); this ring strain is exactly why it is so reactive, self-igniting in air near 303 K and consequently stored under water. Red phosphorus is a polymeric, chain-like structure obtained by breaking one P–P bond per P₄ unit and linking the resulting fragments; it is far less reactive, non-poisonous (unlike white phosphorus), does not glow in the dark, and has a substantially higher melting point. Black phosphorus, the thermodynamically most stable form, is a layered, graphite-like structure with the lowest reactivity of the three. **When a question asks which form is "most reactive," the correct answer must specify the particular allotrope and its structural reason (ring strain in P₄), never simply "phosphorus" as an unqualified element name.**

## 9.3 PCl₃ and PCl₅: hydrolysis and phase-dependent shape

PCl₃ hydrolyses completely and cleanly to phosphorous acid:

\[\mathrm{PCl_3+3H_2O\rightarrow H_3PO_3+3HCl}\]

PCl₅ hydrolyses completely (excess water) to phosphoric acid, though partial/controlled hydrolysis (limited water) instead gives phosphorus oxychloride, POCl₃, as an intermediate:

\[\mathrm{PCl_5+4H_2O\rightarrow H_3PO_4+5HCl}\]
\[\mathrm{PCl_5+H_2O\rightarrow POCl_3+2HCl}\quad(\text{limited water})\]

PCl₅'s structure is strictly **phase-dependent**: in the gas phase it is a discrete, trigonal-bipyramidal, sp³d-hybridised molecule (three equatorial + two longer axial P–Cl bonds — the axial bonds are longer and weaker because of greater repulsion from the three equatorial substituents); in the solid state it exists instead as an ionic lattice of tetrahedral [PCl₄]⁺ cations and octahedral [PCl₆]⁻ anions. The standard JEE hybridisation/VSEPR language predicts the gas-phase shape correctly, but **the phase must always be stated** before quoting a structure for PCl₅.

# 10. Group 15: phosphorus oxoacids and high-yield comparisons

In every phosphorus oxoacid, **only an O–H hydrogen is ionisable; a P–H hydrogen is not** (P–H is a genuine covalent bond to phosphorus with negligible polarity toward loss as H⁺). Drawing the structure and counting O–H groups gives basicity directly and reliably.

| Acid | Structural formula (bonds to P) | Basicity | Oxidation state of P | Reducing character |
|---|---|---:|---:|---|
| H₃PO₂ (hypophosphorous) | 1 O–H, 2 P–H, 1 P=O | 1 | +1 | Strongly reducing |
| H₃PO₃ (phosphorous) | 2 O–H, 1 P–H, 1 P=O | 2 | +3 | Reducing |
| H₃PO₄ (orthophosphoric) | 3 O–H, 0 P–H, 1 P=O | 3 | +5 | Not reducing |
| H₄P₂O₇ (pyrophosphoric) | 4 O–H, one P–O–P bridge | 4 | +5 | Not reducing |

Heating H₃PO₃ causes **disproportionation** (phosphorus simultaneously oxidised and reduced) to phosphoric acid and phosphine:

\[\mathrm{4H_3PO_3\xrightarrow{\Delta}3H_3PO_4+PH_3}\]

Hypophosphorous acid, H₃PO₂, is **monobasic despite the formula containing three hydrogens** — because two of its three hydrogens are bonded directly to phosphorus (P–H) and are not ionisable; only the single O–H hydrogen dissociates.

## 10.1 Oxidation-state discipline vs structural (basicity) discipline

For a **redox** question, assign the oxidation number of phosphorus first (use the whole-molecule formula and standard rules). For an **acidity/basicity** question, draw the actual connectivity first (identify how many oxygens carry an ionisable H). A bare molecular formula is not sufficient for either task in isolation — H₃PO₂ and H₃PO₃ both "look" like they could be tribasic from the formula alone, but structural analysis shows 1 and 2 respectively.

## 10.2 JEE trap

The word **"basicity"** of an acid asks strictly how many protons the acid can donate (i.e., how many replaceable/ionisable H atoms it has) — it is *not* the total count of H atoms in the formula, and it is *not* the oxidation number of phosphorus. Confusing any two of these three ideas is the single most common Group 15 error.

**Worked example 5.1.** *What is the basicity of pyrophosphorous acid, H₄P₂O₅?* Its structure has two PO(OH)(H) units bridged by one P–O–P oxygen, giving 2 ionisable O–H hydrogens and 2 non-ionisable P–H hydrogens — basicity = 2, even though the formula shows four hydrogens total.

# 11. Group 16: oxygen, ozone and sulphur

Members are O, S, Se, Te and Po. Oxygen is anomalous (§1.2): small, highly electronegative, capable of strong hydrogen bonding, and — critically — **has no accessible valence d orbital**, so its maximum covalency is capped near 2–4 depending on the species, unlike sulphur which readily reaches covalency/coordination 6 (SF₆). Use the school-level "octet expansion" model carefully: do not infer that oxygen can expand its octet the way sulphur or phosphorus can.

## 11.1 Dioxygen and ozone

Molecular orbital theory correctly predicts that O₂ is **paramagnetic**, with two unpaired electrons in the degenerate π*2p orbitals — a result that simple Lewis/VBT structures (which draw O=O with all electrons paired) fail to explain, making O₂ the classic textbook justification for MOT over VBT.

Ozone, O₃, is a bent, resonance-hybrid molecule (O–O–O ≈ 116.8°) and is diamagnetic. It is a substantially stronger oxidising agent than O₂ in aqueous conditions and is the standard reagent for liberating iodine from iodide (a quantitative test/titration basis):

\[\mathrm{O_3+2I^-+H_2O\rightarrow O_2+I_2+2OH^-}\]

## 11.2 Sulphur dioxide and sulphuric acid

Sulphur in SO₂ sits at the intermediate oxidation state +4, so SO₂ can act as **either a reducing agent or, against a stronger reductant, an oxidising agent**. Its most common exam role is reducing: it decolourises acidified KMnO₄ (Mn⁷⁺ → Mn²⁺) and acidified potassium dichromate.

In the **contact process**, SO₂ is catalytically, reversibly oxidised to SO₃ (V₂O₅ catalyst, ~ 700 K, ~ 2 atm — moderate conditions chosen for the same rate/yield compromise logic as the Haber process):

\[\mathrm{2SO_2+O_2\rightleftharpoons2SO_3\qquad\Delta H^\ominus<0}\]

SO₃ is then absorbed **in concentrated H₂SO₄ (not water directly, to avoid a dense, hard-to-condense acidic mist)** to give oleum (fuming sulphuric acid, H₂S₂O₇-rich), which is subsequently diluted carefully with water to the required concentration of H₂SO₄.

Concentrated H₂SO₄ is a strong acid, a powerful dehydrating agent (chars sugar/carbohydrates by removing H and O as H₂O), and an oxidising agent when hot and concentrated. It is also **non-volatile**, which is why it can displace more volatile acids like HCl and HNO₃ from their salts on heating — but this displacement logic **fails for bromides and iodides**, where hot concentrated H₂SO₄ instead oxidises Br⁻/I⁻ to Br₂/I₂ (itself being reduced to SO₂), so HBr and HI cannot be prepared this way.

# 12. Group 16 deep dive: oxygen chemistry, ozone and sulphur allotropes

## 12.1 Molecular oxygen and the reactive-oxygen-species ladder

The molecular orbital treatment of O₂ correctly assigns two unpaired electrons to the degenerate π*2p antibonding orbitals, explaining its observed paramagnetism — a result the simple Lewis dot structure (O=O, all electrons paired) cannot reproduce. Beyond neutral O₂, the reactive-oxygen-species ladder runs through **superoxide** (O₂⁻, oxidation state −½, one unpaired electron, e.g. in KO₂), **peroxide** (O₂²⁻, oxidation state −1, e.g. in Na₂O₂ and H₂O₂), and simple **oxide** (O²⁻, oxidation state −2, e.g. in MgO). Their reactivity with water and their oxidising/reducing behaviour differ sharply across this ladder (KO₂ reacts with water to liberate O₂ and H₂O₂ reacts with water is trivial since it is already aqueous-compatible, but reacts characteristically with oxidants/reductants depending on partner) — **never label an oxygen-rich salt "peroxide" purely from its formula without first checking the actual O–O bonding** (§13.1's rule applies identically here).

## 12.2 Ozone in depth

Ozone is a bent (∠O–O–O ≈ 116.8°), resonance-hybrid molecule, thermodynamically less stable than O₂ (ΔG°f is positive) but kinetically persistent enough at ordinary conditions to be isolated and studied. Its strong oxidising action — and specifically its ability to liberate iodine from iodide solution — is a direct consequence of ozone's own facile reduction back to the more stable O₂ (§11.1). It decolourises many organic dyes through genuine **oxidative** bleaching, in direct qualitative contrast to SO₂'s largely **reductive** (and often reversible) bleaching action (§13, trap bank) — this oxidative-vs-reductive contrast between O₃/Cl₂ on one side and SO₂ on the other is one of the most frequently tested qualitative-analysis distinctions in this chapter.

## 12.3 Sulphur allotropic forms

Rhombic sulphur (α-sulphur, stable below ~ 369 K) and monoclinic sulphur (β-sulphur, stable above ~ 369 K) both contain puckered, crown-shaped S₈ rings and are **enantiotropic** — meaning each form is the thermodynamically stable one over its own defined temperature range, and the two interconvert reversibly at the transition temperature. Plastic sulphur is formed by rapidly cooling (quenching) molten sulphur that has been heated close to its boiling point; it is a polymeric, amorphous, elastic solid that slowly reverts back toward the more stable rhombic ring form on standing. **"Allotrope" is reserved strictly for genuinely different structural forms of the same element in the same physical state category** (e.g., different ring/chain/network arrangements) — it should not be used loosely for merely different physical states (solid/liquid/gas) of one and the same structural form.

# 13. Group 16: oxoacids of sulphur and redox logic

The sulphur oxoacids most frequently compared in JEE questions are H₂SO₄ (sulphuric), H₂SO₃ (sulphurous), H₂S₂O₇ (pyrosulphuric/oleum acid), H₂S₂O₃ (thiosulphuric), H₂S₂O₈ (peroxodisulphuric) and H₂SO₅ (peroxomonosulphuric, Caro's acid).

## 13.1 Peroxo acids: never assume every oxygen is −2

In **peroxodisulphuric acid**, H₂S₂O₈, one O–O peroxide linkage bridges the two SO₄ units; the two oxygens of that linkage are at oxidation state −1, not −2. This makes H₂S₂O₈ a powerful oxidant (used to prepare O₃ and to oxidise Mn²⁺ to MnO₄⁻ in the presence of Ag⁺ catalyst — a classic qualitative test). **Caro's acid, H₂SO₅**, similarly contains one peroxide O–O linkage per molecule and is likewise strongly oxidising. The rule: **whenever an oxyanion/oxyacid contains an explicit O–O bond, assign those two oxygens −1 before computing the oxidation state of the central atom** — otherwise the central-atom oxidation state comes out impossibly high.

## 13.2 Thiosulphate: two inequivalent sulphur atoms

Thiosulphate, S₂O₃²⁻, has a structure formally derived from sulphate by replacing one bridging oxygen with sulphur: one S sits at the same site as sulphate's central S (formal oxidation state +5 by the "replace O with S, treat S like O for bookkeeping" convention, or +6 by strict electronegativity-based counting depending on convention used) and the other S is terminal (oxidation state −1 in the same convention) — the commonly quoted **average** oxidation state of +2 masks this real structural inequivalence. Acidification of thiosulphate disproportionates it instantly to sulphur dioxide and elemental sulphur (visible as a milky precipitate):

\[\mathrm{S_2O_3^{2-}+2H^+\rightarrow SO_2+S\downarrow+H_2O}\]

This reaction is the standard illustration that **a single average oxidation state can conceal chemically and structurally distinct atoms of the same element within one ion** — always check connectivity before trusting an averaged number for a mechanistic argument.

## 13.3 Revision rule

When an oxyanion or oxyacid contains an O–O bond, mark those oxygens −1 first; only then calculate the oxidation state of the central atom from the remaining, normal (−2) oxygens.

### Trap bank — Group 16

- O₂ is paramagnetic (MOT); O₃ is diamagnetic — do not assume all oxygen allotropes share the same magnetic behaviour.
- SO₂ bleaching is typically **reductive and often reversible** (the bleached dye can be reoxidised by air and the colour returns), unlike Cl₂'s **oxidative and typically permanent** bleaching — a frequently tested qualitative-analysis contrast.
- Concentrated H₂SO₄ cannot be used to prepare HBr or HI from bromide/iodide salts because it oxidises Br⁻/I⁻ instead of simply displacing the volatile acid.
- Peroxo-oxygen is −1, never −2 — apply this before any redox-counting question involving H₂SO₅, H₂S₂O₈ or H₂O₂ itself.

# 14. Sulphur dioxide, sulphuric acid and contact-process mastery

## 14.1 SO₂ as both reducing and oxidising agent

Sulphur in SO₂ sits at the intermediate oxidation state +4, giving it access to both higher (+6, e.g. sulphate) and lower (0 or −2, e.g. elemental sulphur or sulphide) states — so SO₂ can be oxidised or reduced depending on the partner reagent. Its textbook redox role is usually as a **reducing agent**, for instance decolourising acidified potassium permanganate:

\[\mathrm{5SO_2+2MnO_4^-+2H_2O\rightarrow5SO_4^{2-}+4H^++2Mn^{2+}}\]

This decolourisation is a genuine **redox** change (Mn⁷⁺ → Mn²⁺, S⁴⁺ → S⁶⁺); by contrast, SO₂'s bleaching of organic dyes is often only **temporary** because the reduced, colourless product can be slowly reoxidised by atmospheric O₂, restoring the original colour — an important practical/qualitative distinction from the permanent, oxidative bleaching of chlorine.

## 14.2 The contact-process sequence, stage by stage

1. Produce SO₂ by burning elemental sulphur in air, or by roasting a sulphide ore (e.g., iron pyrites, FeS₂) in air.
2. Purify and thoroughly dry the resulting SO₂/air gas mixture (removing dust and moisture, both catalyst poisons).
3. Catalytically, reversibly oxidise SO₂ to SO₃ over V₂O₅ at a moderate, compromise temperature (~ 700 K) and pressure (~ 2 atm).
4. Absorb the SO₃ produced in concentrated H₂SO₄ (never directly in water) to form oleum, avoiding the dense corrosive mist that direct water absorption would create.
5. Carefully dilute the oleum with the calculated quantity of water to obtain sulphuric acid of the required, specified concentration.

Direct absorption of SO₃ in water is avoided industrially because it produces a fine, hard-to-condense acidic mist rather than a clean liquid product. In any related equilibrium question, remember that **lowering temperature favours the exothermic forward (SO₃-forming) reaction thermodynamically**, while the actual industrial operating temperature is chosen as a practical balance between this favourable low-temperature equilibrium position and an acceptably fast reaction rate (identical logic to the Haber-process compromise, §7.2).

## 14.3 Concentrated sulphuric acid: choosing the right reagent-selection argument

Concentrated H₂SO₄ is non-volatile and can displace more volatile acids such as HCl and HNO₃ from their solid salts on gentle heating (a straightforward acid-displacement argument, requiring no redox reasoning). With bromide or iodide salts, however, a **redox** reaction intervenes instead: hot, concentrated H₂SO₄ oxidises Br⁻ to Br₂ and I⁻ to I₂ (itself being reduced, typically to SO₂, though further reduction to S or even H₂S can occur with excess reducing halide), so the simple non-redox "volatile-acid-displacement" logic fails here and HBr/HI cannot be cleanly prepared by this route. **Always check first whether the anion present is readily oxidisable before applying the acid-displacement shortcut** — this is the single most tested Group 16/17 crossover trap in the whole syllabus.

# 15. Group 17: halogens, interhalogens and oxoacids

Halogens have valence configuration ns²np⁵. Fluorine is anomalous (§1.2): highest electronegativity of any element, very small atomic/ionic size, **no positive oxidation state in any of its compounds** (it is always −1 or 0, since it is the most electronegative element and has no accessible d orbital to support a higher oxidation state), and an unexpectedly weak F–F bond compared with Cl–Cl (small size → strong lone-pair/lone-pair repulsion between the two fluorine atoms across the short bond).

## 15.1 The electron-gain-enthalpy vs electronegativity trap

**Electron gain enthalpy of Cl is more negative than that of F**, even though **F is more electronegative than Cl** — these are two different, non-interchangeable quantities. Chlorine's larger 3p orbital experiences less electron–electron repulsion when accepting an extra electron than fluorine's compact 2p orbital does, so Cl releases more energy on electron capture. Electronegativity, by contrast, measures the tendency to attract shared bonding electron density within a molecule (a periodic-table-position-based, Pauling/Mulliken-scale property) and F wins that comparison because of its extremely small size and high effective nuclear charge, independent of the isolated-atom electron-gain-enthalpy argument.

## 15.2 Hydrogen halides

Acid strength in water increases HF < HCl < HBr < HI, tracking the fall in H–X bond dissociation enthalpy down the group (weaker bond → easier heterolytic cleavage → stronger acid in the leveling solvent water). HF itself is a comparatively weak acid in water (unlike the other three, which are all fully strong) yet has an unusually high boiling point for its molar mass because of extensive hydrogen bonding, including the formation of the bifluoride ion, [HF₂]⁻, in concentrated solution.

## 15.3 Chlorine, disproportionation and bleaching powder

Chlorine disproportionates in water and even more so in alkali, with the **product distribution controlled by temperature**:

\[\mathrm{Cl_2+H_2O\rightleftharpoons HCl+HOCl}\]
\[\mathrm{Cl_2+2NaOH\xrightarrow{cold,dilute}NaCl+NaOCl+H_2O}\]
\[\mathrm{3Cl_2+6NaOH\xrightarrow{hot,conc.}5NaCl+NaClO_3+3H_2O}\]

Bleaching powder (calcium oxychloride, commonly written CaOCl₂, best regarded as a mixed salt of Ca(OCl)Cl rather than a simple molecular compound) is manufactured by passing Cl₂ over slaked lime. Its bleaching action proceeds via the hypochlorite/HOCl oxidising species released on treatment with dilute acid — treat it through its **"available chlorine"** behaviour in reaction/titration questions rather than as a single pure covalent molecule.

## 15.4 Interhalogens

Interhalogens (XY, XY₃, XY₅, XY₇, where X is the larger, less electronegative halogen) are generally **more reactive than the parent halogens (except F₂ itself)**, because the X–Y bond is weaker and more polar than the X–X bond in the more electronegative parent halogen, making it easier to cleave. Molecular shapes strictly follow VSEPR (count σ-bond pairs + lone pairs on the central, larger halogen):

| Molecule | Central-atom steric number | Shape |
|---|---:|---|
| ClF (XY) | 4 (3 lp + 1 bp) | linear (diatomic — shape is trivially linear) |
| ClF₃ (XY₃) | 5 (2 lp + 3 bp) | T-shaped |
| BrF₅ (XY₅) | 6 (1 lp + 5 bp) | square pyramidal |
| IF₇ (XY₇) | 7 (0 lp + 7 bp) | pentagonal bipyramidal |

## 15.5 Oxoacid comparison

For the chlorine oxoacid series HOCl < HClO₂ < HClO₃ < HClO₄, **acid strength increases with the number of oxygen atoms (i.e., with the oxidation state of chlorine)** because additional highly electronegative oxygens withdraw electron density and delocalise negative charge over more atoms in the conjugate base, stabilising it. Do not extend this "more oxygens ⇒ stronger acid" rule unconditionally **across different central atoms** without separately checking electronegativity and structure — it is valid only when comparing oxoacids of the *same* central atom.

### Trap bank — Group 17

- F has no positive oxidation state in any compound; Cl, Br, I do (up to +7 in perhalates).
- Electron gain enthalpy: Cl more negative than F. Electronegativity: F greater than Cl. Never conflate the two.
- HF is a weak acid in water despite being the most reactive/hydrogen-bonded hydrogen halide; HCl, HBr, HI are all strong.
- Interhalogens are more reactive than the parent halogens (except F₂, which remains the most reactive elemental halogen).

# 16. Group 17 deep dive: chlorine, HCl and oxyacids

## 16.1 Chlorine preparation and its temperature-dependent disproportionation

Laboratory-scale chlorine is most commonly generated by oxidising concentrated HCl with manganese dioxide (or, on a larger/purer scale, with potassium permanganate or potassium dichromate):

\[\mathrm{MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O}\]

Chlorine disproportionates in alkali with the product distribution controlled strictly by temperature and concentration: cold, dilute alkali gives chloride and hypochlorite, while hot, concentrated alkali instead gives chloride and chlorate (chlorine going, respectively, to a mixture of −1/+1 or −1/+5 oxidation states):

\[\mathrm{Cl_2+2OH^-\xrightarrow{cold,\ dilute}Cl^-+ClO^-+H_2O}\]
\[\mathrm{3Cl_2+6OH^-\xrightarrow{hot,\ conc.}5Cl^-+ClO_3^-+3H_2O}\]

**The stated reaction conditions are as much a part of the "answer" as the equation itself** for this pair of reactions — a favourite JEE Advanced condition-matching question.

## 16.2 HCl behaviour and chloride identification

HCl is exceptionally soluble in water and behaves there as a strong acid, fully ionised. **Dry HCl gas does not turn dry litmus paper red** — ionisation into H⁺ and Cl⁻ (the species actually responsible for acidic behaviour) requires an ionising medium such as water, so gaseous, moisture-free HCl shows no acidic character to a dry indicator. Chloride ion gives a characteristic white, curdy precipitate of AgCl with silver nitrate solution; this precipitate is distinguished from AgBr (pale yellow) and AgI (yellow) by colour, and dissolves readily in dilute aqueous ammonia through formation of the soluble diammine complex, [Ag(NH₃)₂]⁺ (AgBr dissolves only in concentrated ammonia; AgI is insoluble even in concentrated ammonia) — this solubility gradation in ammonia is the standard confirmatory qualitative-analysis test distinguishing the three silver halides.

## 16.3 Oxoacid strength: same-central-atom comparisons only

For a series of oxyacids built on the *same* halogen (e.g., HOCl, HClO₂, HClO₃, HClO₄), acid strength rises with the number of oxygen atoms present, because each additional highly electronegative oxygen both withdraws electron density inductively from the O–H bond and delocalises the resulting negative charge over more atoms in the conjugate base, stabilising it. **This "more oxygens ⇒ stronger acid" rule must not be extended unconditionally across oxyacids of different central atoms** (comparing, say, an oxyacid of chlorine against one of sulphur) without separately accounting for the central atom's electronegativity and the acid's actual structure.

# 17. Interhalogens: structure, hydrolysis and reactivity

Interhalogens have the general formulae XY, XY₃, XY₅ and XY₇, where X is always the larger, less electronegative halogen (providing the central atom) and Y is the smaller, more electronegative halogen (always F in the XY₅ and XY₇ classes, since only fluorine is small enough to pack five or seven atoms around a single central halogen). They are typically **more reactive than the parent halogens themselves (with the sole exception of F₂, which remains the most reactive elemental halogen)**, because the X–Y bond is both more polar and generally weaker than the X–X bond of the more electronegative parent halogen, making it comparatively easy to cleave homolytically or heterolytically.

| Molecule | VSEPR steric number (bp + lp) on central halogen | Molecular shape |
|---|---|---|
| ICl | 1 bp (diatomic) | linear |
| ClF₃ | 3 bp + 2 lp | T-shaped |
| BrF₅ | 5 bp + 1 lp | square pyramidal |
| IF₇ | 7 bp + 0 lp | pentagonal bipyramidal |

Hydrolysis of any interhalogen must be balanced systematically from atom counts and oxidation-state changes, never guessed by pattern-matching. For example, a fluorinating interhalogen in water can furnish HF together with an oxoacid or oxoanion of the *central* halogen, with the exact product depending sensitively on the quantity of water and the reaction conditions — for instance, ClF₃ hydrolyses to give a mixture including HF, HOCl/chlorate-type species and further redox products depending on conditions, rather than a single universal equation. **Never invent a hydrolysis equation simply by mechanically replacing every terminal F with OH** — always check first whether disproportionation or another redox pathway is operating, since interhalogens frequently disproportionate on hydrolysis rather than undergoing simple substitution.

# 18. Group 18: noble gases and xenon compounds

Noble gases have closed-shell ns²np⁶ (He: 1s²) configurations and the highest ionisation enthalpies in their respective periods, which is why they were long considered chemically "inert." Xenon forms the most important class of real, stable compounds because (a) its ionisation enthalpy (1170 kJ mol⁻¹) is markedly lower than that of the lighter noble gases (He, Ne, Ar) and (b) the resulting Xe–F and Xe–O bonds are thermodynamically strong enough to be stabilised at accessible temperatures/pressures. Neil Bartlett's 1962 synthesis of Xe⁺[PtF₆]⁻ (by analogy with O₂⁺[PtF₆]⁻) was the first proof that noble-gas compounds could exist and directly triggered the discovery of the xenon fluorides.

## 18.1 Preparation of xenon fluorides

Direct combination of Xe and F₂ under varying conditions gives different fluorides, with **higher F₂ ratio, pressure and/or temperature favouring the higher fluoride**:

\[\mathrm{Xe+F_2\xrightarrow{673\ K,\ 1\ bar,\ Xe:F_2=1:5}XeF_2}\]
\[\mathrm{Xe+2F_2\xrightarrow{573\ K,\ 7\ bar,\ Xe:F_2=1:20}XeF_4}\]
\[\mathrm{Xe+3F_2\xrightarrow{573\ K,\ 60–70\ bar,\ Xe:F_2=1:20}XeF_6}\]

## 18.2 VSEPR precision for xenon species

| Species | Total electron-pair regions on Xe | Electron-pair geometry | Molecular shape |
|---|---:|---|---|
| XeF₂ | 5 (2 bp + 3 lp) | trigonal bipyramidal | linear |
| XeF₄ | 6 (4 bp + 2 lp) | octahedral | square planar |
| XeF₆ | 7 (6 bp + 1 lp) | distorted (capped) octahedral | distorted octahedral |
| XeOF₄ | 6 (5 bp + 1 lp) | octahedral | square pyramidal |
| XeO₃ | 4 (3 bp + 1 lp) | tetrahedral | trigonal pyramidal |
| XeO₄ | 4 (4 bp + 0 lp) | tetrahedral | tetrahedral |

For XeF₂: five electron pairs adopt a trigonal-bipyramidal arrangement; placing all **three lone pairs in the equatorial plane** (where lone-pair/lone-pair repulsion is minimised, each 120° apart) leaves the two bonding fluorine atoms axial — hence the molecule is linear. For XeF₆, one lone pair distorts an otherwise regular octahedron; do not force a perfectly symmetric octahedral shape onto it.

## 18.3 Hydrolysis reasoning

Xenon fluorides hydrolyse because forming strong new Xe–O and H–F bonds is thermodynamically very favourable. Balance every hydrolysis systematically by atom count and oxidation-state bookkeeping rather than memorising a half-balanced line:

\[\mathrm{2XeF_2+2H_2O\rightarrow2Xe+4HF+O_2}\] (Xe is *reduced* to the element; here water is oxidised)
\[\mathrm{XeF_4+6H_2O\rightarrow2Xe+XeO_3+12HF+3O_2}\] (a disproportionation among three Xe centres overall)
\[\mathrm{XeF_6+3H_2O\rightarrow XeO_3+6HF}\] (complete hydrolysis; controlled partial hydrolysis instead gives the oxyfluoride XeOF₄)

## 18.4 Clathrates

Larger noble-gas atoms (Ar, Kr, Xe) can be **physically trapped** inside cavities of an ice or quinol (hydroquinone) crystal lattice as it forms around them, giving **clathrates**. These are not covalent compounds — no chemical bond forms to the noble gas atom, the oxidation state of the trapped gas remains 0, and the clathrate decomposes back to free gas plus host lattice on melting/dissolving. Do not describe a clathrate as a "xenon compound" in the same sense as XeF₂ or XeO₃.

### Trap bank — Group 18

- XeF₂ is linear because three lone pairs occupy the equatorial positions of a trigonal bipyramid, not because Xe "has no lone pairs."
- Report **molecular shape**, not electron-pair geometry, whenever a question asks for "shape" — XeOF₄ has octahedral electron geometry but square-pyramidal molecular shape.
- A clathrate involves no bond formation and no oxidation-state change; a true xenon fluoride/oxide does.
- Xenon's compound-forming ability is due to its comparatively low ionisation enthalpy among noble gases, not to any special reactivity of fluorine alone (fluorine also fails to react with He, Ne, Ar under ordinary conditions).

# 19. Group 18 deep dive: xenon fluorides, oxides and hydrolysis

## 19.1 Preparation and the bonding context

Xenon reacts directly with fluorine gas under carefully controlled temperature, pressure and stoichiometric ratio to give XeF₂, XeF₄ or XeF₆ selectively (§18.1); broadly, higher fluorine partial pressure, higher total pressure and/or higher reaction temperature all favour formation of the higher fluoride. All three are covalent, molecular compounds in the standard textbook treatment (not ionic lattices in the solid state, though XeF₆ shows some ionic character/self-ionisation in the liquid and solid phases, e.g. forming [XeF₅]⁺[F]⁻-type species).

## 19.2 VSEPR precision, restated with full reasoning

XeF₂ has five total electron-pair regions around xenon (two bonding pairs to F, three lone pairs); in the trigonal-bipyramidal electron-pair arrangement that minimises repulsion, **all three lone pairs occupy the equatorial positions** (each 120° from the next, where lone-pair/lone-pair repulsion — the strongest of the three repulsion types — is minimised), leaving the two fluorine atoms in the axial positions 180° apart. The resulting **molecular shape is therefore linear**, even though the *electron-pair* arrangement is trigonal bipyramidal — the standard illustration of why electron-pair geometry and molecular shape must be reported separately.

XeF₄ has six total electron-pair regions (four bonding pairs, two lone pairs); the two lone pairs occupy mutually *trans* (opposite) positions of the octahedron to minimise their mutual repulsion, leaving the four fluorine atoms in a plane — hence **square planar** molecular shape. XeF₆ has seven total electron-pair regions (six bonding pairs, one lone pair); with no perfectly symmetric seven-region arrangement available, the single lone pair distorts an otherwise regular octahedron, giving a **distorted octahedral** shape that should never be drawn as a perfect, undistorted octahedron.

## 19.3 Xenon oxyfluorides and oxides

XeOF₄ has six electron-pair regions (one Xe=O, four Xe–F, one lone pair) in an overall octahedral electron-pair arrangement, with the single lone pair giving a **square-pyramidal** molecular shape. XeO₃ has four electron-pair regions (three Xe=O, one lone pair) in a tetrahedral electron-pair arrangement, giving a **trigonal-pyramidal** molecular shape (directly analogous to NH₃'s shape derivation). XeO₄ has four bonding regions and no lone pair, giving a regular **tetrahedral** molecular shape. In every case, the examiner is asking for the **molecular shape** (what an X-ray structure would actually show), never the underlying electron-pair geometry alone.

## 19.4 Advanced edge: a safe, general hydrolysis workflow

For any xenon fluoride or oxyfluoride hydrolysis, work through this four-step method rather than memorising several superficially similar-looking equations:

1. **Count** every Xe, F, H and O atom present in the reactants.
2. **Decide** whether the xenon oxidation state is retained unchanged through to the product, or whether a disproportionation among multiple Xe centres is occurring instead (as happens, for example, in the hydrolysis of XeF₄, where some xenon is reduced all the way to the element while some is oxidised up to XeO₃).
3. **Include HF explicitly** as the fluorine-containing product of any aqueous hydrolysis (fluorine essentially never survives hydrolysis as F⁻ alone without protonation to HF under these acidic conditions).
4. **Balance** the remaining H and O atoms using water molecules, and finally verify any residual charge balance if ionic species are written into the equation.

This atom-count-and-oxidation-state method is considerably safer under exam pressure than attempting to recall several nearly identical xenon hydrolysis equations by rote, since a single misremembered coefficient in a memorised equation is very easy to produce but very hard to self-detect.

# 20. JEE Advanced synthesis: decision trees, traps and final recall

## 20.1 Three decision trees for any p-block question

1. **Acid basicity:** draw the structure → count only the O–H bonds that can ionise (ignore any H bonded directly to the central atom).
2. **Redox/oxidation state:** flag any O–O bond first (assign those oxygens −1) → then assign oxidation numbers to every other atom normally → compare only the atoms whose oxidation state actually changes between reactant and product.
3. **Shape:** count σ-bond regions and lone pairs on the central atom (steric number) → apply VSEPR to get the electron-pair geometry → then state the **molecular shape**, which removes the lone-pair positions from the description.

## 20.2 Rapid trap bank — full block

- B(OH)₃ is a monobasic Lewis acid, not tribasic.
- BF₃ is the *weakest* Lewis acid among BX₃ (back-bonding); Lewis acidity rises BF₃ < BCl₃ < BBr₃ < BI₃.
- CCl₄ resists hydrolysis (no d orbital at C); SiCl₄ hydrolyses instantly.
- NO₂ is paramagnetic; N₂O₄ is diamagnetic and contains a direct N–N bond.
- H₃PO₂, H₃PO₃ and H₃PO₄ have basicities 1, 2 and 3 respectively, regardless of the total hydrogen count in the formula.
- Cl has a more negative electron gain enthalpy than F; F is nevertheless more electronegative — these are different properties.
- O₂ is paramagnetic (MOT); O₃ is diamagnetic.
- Peroxo oxygen (O–O linkage) is always −1, never −2.
- Conc. H₂SO₄ oxidises Br⁻/I⁻ instead of merely displacing HBr/HI — the "non-volatile acid displaces volatile acid" rule fails here.
- XeF₂ is linear because three equatorial lone pairs leave the two fluorines axial.
- SnCl₂ (Sn²⁺) is reducing; PbO₂ (Pb⁴⁺) is oxidising — both are inert-pair-effect consequences.
- A clathrate is a physical inclusion complex with zero oxidation-state change, not a genuine covalent noble-gas compound.

## 20.3 How to use these notes with practice questions

After each group, solve a mixed problem set containing a structure question, a redox question, a reaction/condition question and an ordering (trend) question. For every wrong answer, label the failure as one of exactly four types: **fact recall**, **structure/shape**, **oxidation-state bookkeeping**, or **condition/reagent-excess**. This four-way failure log is a far more efficient revision target than re-reading an entire group from the top, because most repeated errors in this chapter cluster in only one or two of these four categories per student.
`;
