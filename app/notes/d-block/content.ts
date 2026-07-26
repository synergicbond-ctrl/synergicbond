import "server-only";

export interface DBlockLesson {
  slug: string;
  number: number;
  title: string;
  group: "Foundations" | "Trends" | "Chemical behaviour" | "Chromium" | "Manganese" | "Element focus" | "Mastery";
  visual: "map" | "orbitals" | "bond" | "radii" | "energy" | "states" | "cycle" | "redox" | "oxides" | "spin" | "colour" | "catalysis" | "chromium" | "ph" | "preparation" | "dichromate" | "manganese" | "permanganate" | "acid" | "medium" | "iron" | "copper" | "zinc" | "revision";
  markdown: string;
}

const checks = (items: string[]) => `\n### Concept checks\n${items.map((item, i) => `${i + 1}. ${item}`).join("\n")}\n\n> **Takeaway:** Return to the cause before memorising the result.\n`;

export const D_BLOCK_LESSONS: DBlockLesson[] = [
  { slug: "part1", number: 1, title: "Where the d-block sits — and what transition means", group: "Foundations", visual: "map", markdown: `# 1. Position and definition

The d-block is the broad central region of the periodic table, between the s- and p-blocks. In each long period, electrons progressively enter the d subshell of the shell just inside the outer shell. The four rows are 3d, 4d, 5d and 6d.

A **transition element** has an incomplete d subshell in its atom or in at least one of its ions. This is a chemical definition, not merely a position on the table. Zinc, cadmium and mercury belong to the d-block, but their common atoms and ions retain a filled d subshell; they are therefore not transition elements.

| Term | Decisive test | Example |
|---|---|---|
| d-block element | differentiating electron enters a d subshell | Zn |
| transition element | atom or a common ion has incomplete d subshell | Sc, Cu, Ag |
| excluded from transition definition | d subshell remains filled in atom and common ion | Zn, Cd, Hg |
` + checks(["Why can Ag be called a transition element although neutral Ag is d$^{10}$?", "Classify Zn and Cu using the definition, not their group number."]) },
  { slug: "part2", number: 2, title: "Configurations, 4s removal and the important exceptions", group: "Foundations", visual: "orbitals", markdown: `# 2. Electronic configuration

The useful outer-shell pattern is $(n-1)d^{1-10}ns^{1-2}$. The two subshells are close in energy, so small stability gains can change the expected arrangement. Chromium is $3d^5 4s^1$ and copper is $3d^{10}4s^1$; palladium is the striking 4d-series case with $4d^{10}$.

When a d-block atom ionises, the **ns electrons leave before the $(n-1)d$ electrons**. Thus Fe is $3d^6 4s^2$, Fe$^{2+}$ is $3d^6$, and Fe$^{3+}$ is $3d^5$. Do not remove a 3d electron first merely because it was filled earlier.

| Atom | Outer configuration | Useful ion |
|---|---|---|
| Cr | $3d^5 4s^1$ | Cr$^{2+}$: $3d^4$ |
| Cu | $3d^{10}4s^1$ | Cu$^{2+}$: $3d^9$ |
| Zn | $3d^{10}4s^2$ | Zn$^{2+}$: $3d^{10}$ |
` + checks(["Write the d-electron count of Co$^{2+}$.", "Explain in one sentence why Cr is not written $3d^4 4s^2$."]) },
  { slug: "part3", number: 3, title: "Metallic bonding, melting points and atomisation", group: "Trends", visual: "bond", markdown: `# 3. Metallic bonding and atomisation

Transition metals are generally hard, strong, ductile conductors. Their metallic bonding can involve both ns and d electrons, so it is often stronger than in neighbouring s-block metals. This gives high melting points and high enthalpies of atomisation.

Across a transition row, these properties tend to rise towards the middle and then decline. More unpaired electrons can strengthen interatomic interaction. The pattern is not perfectly smooth: manganese and the group-12 metals are important departures.

| Property | Trend logic | High-yield caution |
|---|---|---|
| enthalpy of atomisation | stronger metal-metal interaction raises it | Zn is low because its d subshell is filled |
| melting point | usually tracks metallic bonding | do not force a smooth numerical order |
| volatility | strong metallic bonding lowers it | Hg is an exceptional liquid metal |
` + checks(["Why is zinc's atomisation enthalpy unusually low in the first row?", "Why does a centre-of-series maximum make chemical sense?"]) },
  { slug: "part4", number: 4, title: "Radii, density and the 4d–5d resemblance", group: "Trends", visual: "radii", markdown: `# 4. Atomic and ionic size

Within one transition series, atomic and equal-charge ionic radii shrink only slightly from left to right. Nuclear charge rises, while added d electrons shield imperfectly. The two effects nearly offset, so the contraction is modest rather than dramatic.

The 4d atoms are larger than their 3d partners, but many 5d atoms are almost the same size as their 4d partners. Poor shielding by the filled 4f subshell contracts the 5d row before it begins. This also helps explain the close Zr-Hf comparison.

| Comparison | Result | Cause |
|---|---|---|
| across one 3d row | small decrease in radius | increasing effective nuclear attraction |
| 3d to 4d | increase | an extra shell |
| 4d to 5d | near similarity | 4f shielding is poor |
| density across Ti to Cu | generally rises | mass rises while size changes little |
` + checks(["Why are Zr and Hf unusually similar in size?", "For equal charge, which is smaller: Fe$^{2+}$ or Ni$^{2+}$?"]) },
  { slug: "part5", number: 5, title: "Ionisation enthalpy: a shallow rise with real exceptions", group: "Trends", visual: "energy", markdown: `# 5. Ionisation enthalpy

First ionisation enthalpy increases only gradually across the 3d series. The increasing nuclear charge is partly screened by the d electrons, and the orbital energies reorganise after ionisation. Therefore a simple straight-line trend is unreliable.

Second and third ionisations reveal especially stable d arrangements. Formation of Mn$^{2+}$ gives $d^5$, while formation of Fe$^{3+}$ also gives $d^5$; these configurations affect the local pattern. The high second ionisation values of Cr and Cu are linked to stable Cr$^+$ ($d^5$) and Cu$^+$ ($d^{10}$).

| Ionisation step | What to inspect |
|---|---|
| first | gentle overall rise, small irregularities |
| second | stability of the M$^+$ configuration |
| third | stability of the M$^{2+}$ configuration |
` + checks(["Which is harder to oxidise further: Mn$^{2+}$ or Fe$^{2+}$? Give the configuration reason.", "Why are first-ionisation changes smaller here than across a typical p-block period?"]) },
  { slug: "part6", number: 6, title: "Variable oxidation states and their pattern", group: "Chemical behaviour", visual: "states", markdown: `# 6. Oxidation states

The ns and d electrons lie close enough in energy that several numbers of electrons can participate in bonding. This produces the characteristic variable oxidation states of transition chemistry. The largest range occurs near manganese; the range narrows towards both ends of the 3d row.

Up to manganese, a high oxidation number can match the number of outer s and d electrons. After manganese, high states become less stable. Zinc is essentially restricted to +2 because Zn$^{2+}$ is $d^{10}$.

| Element zone | Typical message |
|---|---|
| early 3d | higher states become accessible: Ti(IV), V(V), Cr(VI) |
| middle | Mn spans +2 to +7 |
| later 3d | +2 and +3 dominate; high states fade |
| carbonyl complexes | low or zero state can be stabilised by suitable ligands |
` + checks(["Why does Mn display the widest first-row range?", "Predict the dominant oxidation state of Zn and justify it electronically."]) },
  { slug: "part7", number: 7, title: "E°(M²⁺/M): the whole thermochemical journey", group: "Chemical behaviour", visual: "cycle", markdown: `# 7. Standard electrode potentials

$E^\circ(\mathrm{M^{2+}/M})$ is not controlled by one isolated property. Converting a metal atom into an aqueous M$^{2+}$ ion involves atomisation, two ionisations and hydration. A favourable hydration term can offset costly earlier steps; an unusual ionisation step can reverse a simple prediction.

Copper has a positive $E^\circ(\mathrm{Cu^{2+}/Cu})$, so it does not liberate hydrogen from non-oxidising acids. Zinc has a negative value and readily does. Compare complete cycles, not only metallic reactivity.

| Part of the route | Energy role |
|---|---|
| M(s) → M(g) | atomisation cost |
| M(g) → M$^{2+}$(g) | first + second ionisation cost |
| M$^{2+}$(g) → M$^{2+}$(aq) | hydration stabilisation |
` + checks(["Why cannot ionisation enthalpy alone rank aqueous reducing power?", "What does positive $E^\circ(\mathrm{Cu^{2+}/Cu})$ suggest about dilute HCl?"]) },
  { slug: "part8", number: 8, title: "M³⁺/M²⁺ couples, redox direction and disproportionation", group: "Chemical behaviour", visual: "redox", markdown: `# 8. Redox stability in adjacent states

For the $\mathrm{M^{3+}/M^{2+}}$ couple, configuration matters sharply. Cr$^{2+}$ is readily oxidised to Cr$^{3+}$, which is $d^3$. Mn$^{3+}$ is readily reduced to Mn$^{2+}$, which is $d^5$. The direction is not a slogan about “stability”; name the state being reached.

A state can also be unstable relative to one lower and one higher state. Then disproportionation occurs. In acidic solution, manganate(VI) gives permanganate(VII) and manganese dioxide(IV):

\[\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2+2H_2O}\]

| Species | Redox tendency in this comparison |
|---|---|
| Cr$^{2+}$ | reducing; moves towards Cr$^{3+}$ |
| Mn$^{3+}$ | oxidising; moves towards Mn$^{2+}$ |
| MnO$_4^{2-}$ in acid | disproportionates |
` + checks(["Why is Mn$^{3+}$ an oxidising agent?", "Identify both Mn oxidation states formed by acidic manganate disproportionation."]) },
  { slug: "part9", number: 9, title: "Oxides and halides reveal oxidation-state stability", group: "Chemical behaviour", visual: "oxides", markdown: `# 9. Oxides and halides

Higher oxidation number usually means greater covalent and acidic character in oxides. Along vanadium oxides, basic character declines from V$_2$O$_3$ to V$_2$O$_4$, while V$_2$O$_5$ is amphoteric but mainly acidic. Cr$_2$O$_3$ is amphoteric; high oxides such as CrO$_3$ are acidic.

Halides also report which states are stable. Fluorine can stabilise higher oxidation numbers more effectively than the heavier halogens. Treat a formula as evidence of both oxidation state and bonding trend.

| Oxide | Useful classification |
|---|---|
| V$_2$O$_3$ | basic |
| V$_2$O$_4$ | less basic |
| V$_2$O$_5$ | amphoteric, chiefly acidic |
| Cr$_2$O$_3$ | amphoteric |
| CrO$_3$ | acidic |
` + checks(["Arrange V$_2$O$_3$, V$_2$O$_4$, V$_2$O$_5$ by increasing acidic character.", "What happens to ionic character as oxidation number rises?"]) },
  { slug: "part10", number: 10, title: "Magnetism from d-electron count", group: "Chemical behaviour", visual: "spin", markdown: `# 10. Magnetic behaviour

An unpaired electron produces paramagnetism; all electrons paired gives diamagnetism. For many first-row ions, the spin-only estimate is useful:

\[\mu=\sqrt{n(n+2)}\ \mathrm{BM}\]

Here $n$ is the number of unpaired electrons. Always obtain the d count after removing ns electrons. Mn$^{2+}$ is $d^5$ with five unpaired electrons, so $\mu=5.92\ \mathrm{BM}$ in the spin-only model.

| Ion | d count | unpaired electrons | spin-only result |
|---|---:|---:|---:|
| Sc$^{3+}$ | $d^0$ | 0 | 0 |
| Ti$^{3+}$ | $d^1$ | 1 | 1.73 BM |
| Mn$^{2+}$ | $d^5$ | 5 | 5.92 BM |
| Zn$^{2+}$ | $d^{10}$ | 0 | 0 |
` + checks(["Calculate the spin-only moment for Co$^{2+}$ treated as $d^7$ with three unpaired electrons.", "Why is Zn$^{2+}$ diamagnetic?"]) },
  { slug: "part11", number: 11, title: "Colour, d–d excitation and complex formation", group: "Chemical behaviour", visual: "colour", markdown: `# 11. Colour and complexes

When an electron is promoted between d levels, the absorbed energy can lie in the visible region. The observed colour is complementary to the absorbed light. A $d^0$ or $d^{10}$ ion has no d–d transition of this type and is commonly colourless.

The ligand environment changes the separation between d levels, so colour depends on the ion and its surroundings. Transition ions form many complexes because small, charged metal ions can bind neutral molecules or anions.

| Aquated ion | d count | observed colour |
|---|---:|---|
| Ti$^{3+}$ | $d^1$ | purple |
| Mn$^{2+}$ | $d^5$ | pink |
| Fe$^{3+}$ | $d^5$ | yellow |
| Ni$^{2+}$ | $d^8$ | green |
| Cu$^{2+}$ | $d^9$ | blue |
` + checks(["Why is Sc$^{3+}$ colourless by this explanation?", "Why may two complexes of the same metal have different colours?"]) },
  { slug: "part12", number: 12, title: "Catalysts, alloys and interstitial compounds", group: "Chemical behaviour", visual: "catalysis", markdown: `# 12. Surface and solid-state chemistry

Transition metals can catalyse reactions by adsorbing reactants at a surface, weakening bonds and offering a lower-energy route. Variable oxidation state can support homogeneous cycles too. Examples include V$_2$O$_5$ in sulfuric-acid manufacture, Fe in ammonia synthesis and Ni in hydrogenation.

Small atoms such as H, C and N can occupy holes in a metal lattice. These **interstitial compounds** are hard, high-melting, conducting and often non-stoichiometric. Transition metals also form alloys readily because their sizes and metallic characters are similar.

| Class | Defining feature |
|---|---|
| surface catalyst | adsorption changes the reaction path |
| redox catalyst | cycles between oxidation states |
| interstitial compound | small atom lodged in metal lattice |
| alloy | mixed-metal solid with metallic properties |
` + checks(["Why can a catalyst surface weaken a reactant bond?", "Name two features that distinguish an interstitial compound from a simple ionic salt."]) },
  { slug: "part13", number: 13, title: "Chromium: oxidation-state map", group: "Chromium", visual: "chromium", markdown: `# 13. Chromium overview

Chromium illustrates the contrast between lower ionic states and high oxo states. Cr(III) is common and stable; Cr(VI) occurs in chromate and dichromate and is strongly oxidising in acidic medium. The familiar Cr(II) to Cr(III) conversion is a redox reminder, not an arbitrary exception.

Cr$_2$O$_3$ is amphoteric, while CrO$_3$ is acidic. Oxidation number changes bonding: high-oxidation oxides are more covalent and more acidic than low-oxidation oxide ions.

| Chromium form | oxidation number | lesson |
|---|---:|---|
| Cr$^{2+}$ | +2 | reducing state |
| Cr$^{3+}$ | +3 | relatively stable $d^3$ state |
| Cr$_2$O$_3$ | +3 | amphoteric oxide |
| CrO$_4^{2-}$ / Cr$_2$O$_7^{2-}$ | +6 | oxo anions, oxidising in acid |
` + checks(["Find the chromium oxidation number in Cr$_2$O$_7^{2-}$.", "Why should CrO$_3$ be discussed as acidic rather than ionic-basic?"]) },
  { slug: "part14", number: 14, title: "Chromate–dichromate equilibrium and structure", group: "Chromium", visual: "ph", markdown: `# 14. pH controls chromate and dichromate

Chromate and dichromate contain chromium(VI); pH decides which anion is favoured. Acid shifts chromate towards orange dichromate. Alkali shifts dichromate towards yellow chromate.

\[\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}\]

Chromate is tetrahedral. Dichromate contains two tetrahedra joined through one oxygen atom. The colour change signals an equilibrium shift, not a change in chromium oxidation number.

| Condition | Favoured ion | Visual observation |
|---|---|---|
| acidic | Cr$_2$O$_7^{2-}$ | orange |
| alkaline | CrO$_4^{2-}$ | yellow |
` + checks(["What happens when OH$^-$ is added to dichromate solution?", "Does chromium change oxidation number during this equilibrium?"]) },
  { slug: "part15", number: 15, title: "Potassium dichromate: preparation route", group: "Chromium", visual: "preparation", markdown: `# 15. Preparing potassium dichromate

The preparation begins with chromite, FeCr$_2$O$_4$. Fusion with sodium carbonate in air converts chromium into soluble chromate. Acidification changes chromate into sodium dichromate, and potassium chloride then crystallises the less soluble potassium salt.

\[\mathrm{4FeCr_2O_4+8Na_2CO_3+7O_2\rightarrow8Na_2CrO_4+2Fe_2O_3+8CO_2}\]
\[\mathrm{2Na_2CrO_4+2H^+\rightarrow Na_2Cr_2O_7+2Na^++H_2O}\]
\[\mathrm{Na_2Cr_2O_7+2KCl\rightarrow K_2Cr_2O_7+2NaCl}\]

| Stage | Chemical purpose |
|---|---|
| oxidative fusion | produce chromate |
| acidification | form dichromate |
| KCl treatment | isolate K$_2$Cr$_2$O$_7$ crystals |
` + checks(["Why is air required during chromite fusion?", "Which anion is present before acidification?"]) },
  { slug: "part16", number: 16, title: "Acidified dichromate as an oxidant", group: "Chromium", visual: "dichromate", markdown: `# 16. Dichromate redox chemistry

In acidic solution, dichromate is reduced to Cr$^{3+}$:

\[\mathrm{Cr_2O_7^{2-}+14H^++6e^-\rightarrow2Cr^{3+}+7H_2O}\]

It can oxidise iodide to iodine, Fe$^{2+}$ to Fe$^{3+}$, sulphide to sulphur and Sn$^{2+}$ to Sn$^{4+}$. Combine a six-electron reduction half-reaction with oxidation half-reactions only after balancing both atoms and charge.

\[\mathrm{Cr_2O_7^{2-}+14H^++6Fe^{2+}\rightarrow2Cr^{3+}+6Fe^{3+}+7H_2O}\]

| Reductant | Oxidised product |
|---|---|
| I$^-$ | I$_2$ |
| Fe$^{2+}$ | Fe$^{3+}$ |
| H$_2$S | S |
| Sn$^{2+}$ | Sn$^{4+}$ |
` + checks(["How many electrons does one dichromate ion accept in acid?", "Balance the electron count when dichromate oxidises iodide."]) },
  { slug: "part17", number: 17, title: "Manganese: the broadest oxidation-state range", group: "Manganese", visual: "manganese", markdown: `# 17. Manganese overview

Manganese reaches oxidation states from +2 to +7 in first-row chemistry. Mn$^{2+}$ is $d^5$ and particularly stable. Higher oxidation states are most familiar in oxo species: manganate(VI), permanganate(VII), and manganese dioxide(IV).

The colour and magnetism of manganate and permanganate give a useful electron-count comparison. MnO$_4^{2-}$ is green and paramagnetic with one unpaired electron; MnO$_4^-$ is purple and diamagnetic in the elementary description.

| Species | Mn oxidation number | quick cue |
|---|---:|---|
| Mn$^{2+}$ | +2 | stable $d^5$ |
| MnO$_2$ | +4 | common reduction product |
| MnO$_4^{2-}$ | +6 | green manganate |
| MnO$_4^-$ | +7 | purple permanganate |
` + checks(["Find Mn oxidation number in MnO$_4^-$.", "Why is Mn$^{2+}$ often a favoured product?"]) },
  { slug: "part18", number: 18, title: "Potassium permanganate: preparation and conversion", group: "Manganese", visual: "permanganate", markdown: `# 18. Preparing potassium permanganate

Manganese dioxide undergoes alkaline oxidative fusion to form dark-green manganate. In industry, alkaline electrolytic oxidation converts manganate into permanganate. In neutral or acidic solution, manganate can disproportionate instead.

\[\mathrm{2MnO_2+4KOH+O_2\rightarrow2K_2MnO_4+2H_2O}\]
\[\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2+2H_2O}\]

On heating, potassium permanganate gives manganate, manganese dioxide and oxygen:

\[\mathrm{2KMnO_4\rightarrow K_2MnO_4+MnO_2+O_2}\]
` + checks(["What is the colour of the intermediate manganate?", "Why should manganate not simply be called a stable acidic product?"]) },
  { slug: "part19", number: 19, title: "Permanganate oxidation in acidic medium", group: "Manganese", visual: "acid", markdown: `# 19. Acidic permanganate reactions

Acidified permanganate is reduced to Mn$^{2+}$ and accepts five electrons per MnO$_4^-$:

\[\mathrm{MnO_4^-+8H^++5e^-\rightarrow Mn^{2+}+4H_2O}\]

It oxidises Fe$^{2+}$, oxalate, sulphite, nitrite and iodide. Oxalate oxidation is slow at room temperature and is commonly carried out warm.

\[\mathrm{5Fe^{2+}+MnO_4^-+8H^+\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}\]
\[\mathrm{5C_2O_4^{2-}+2MnO_4^-+16H^+\rightarrow2Mn^{2+}+8H_2O+10CO_2}\]

| Reductant | Oxidation product |
|---|---|
| Fe$^{2+}$ | Fe$^{3+}$ |
| C$_2$O$_4^{2-}$ | CO$_2$ |
| SO$_3^{2-}$ | SO$_4^{2-}$ |
| NO$_2^-$ | NO$_3^-$ |
` + checks(["Why is Mn$^{2+}$ the acidic reduction product?", "How many moles of Fe$^{2+}$ react with one mole of MnO$_4^-$ in acid?"]) },
  { slug: "part20", number: 20, title: "Permanganate: medium decides the product", group: "Manganese", visual: "medium", markdown: `# 20. The medium-dependent decision

Permanganate does not have one universal reduction product. The hydrogen-ion concentration directs the path: acidic medium gives Mn$^{2+}$, neutral or faintly alkaline medium commonly gives MnO$_2$, and strongly alkaline conditions can give MnO$_4^{2-}$.

\[\mathrm{MnO_4^-+4H^++3e^-\rightarrow MnO_2+2H_2O}\]
\[\mathrm{MnO_4^-+e^-\rightarrow MnO_4^{2-}}\]

Hydrochloric acid is unsuitable for permanganate titrations because chloride can be oxidised to chlorine. Medium is a reagent, not an annotation to ignore.

| Medium | reduction product | Mn state |
|---|---|---:|
| acidic | Mn$^{2+}$ | +2 |
| neutral / faintly alkaline | MnO$_2$ | +4 |
| strongly alkaline | MnO$_4^{2-}$ | +6 |
` + checks(["Which product should you predict in neutral solution?", "Why is HCl a poor acid choice in this titration?"]) },
  { slug: "part21", number: 21, title: "Iron, cobalt and nickel: compare the middle of 3d", group: "Element focus", visual: "iron", markdown: `# 21. Fe, Co and Ni comparison

The middle of the 3d row displays strong metallic bonding, several oxidation states and paramagnetism. Iron commonly uses +2 and +3; Fe$^{3+}$ reaches $d^5$. Cobalt commonly gives +2 and +3, while nickel most often remains at +2 in elementary inorganic chemistry.

Do not assign colour or magnetism solely from the metal name. First determine the ion, then its d count, then the ligand environment if it is specified.

| Ion | d count | useful inference |
|---|---:|---|
| Fe$^{2+}$ | $d^6$ | can be oxidised to Fe$^{3+}$ |
| Fe$^{3+}$ | $d^5$ | half-filled arrangement |
| Co$^{2+}$ | $d^7$ | paramagnetic in common cases |
| Ni$^{2+}$ | $d^8$ | common stable state |
` + checks(["Why is Fe$^{3+}$ electronically noteworthy?", "Write the d count for Ni$^{2+}$."]) },
  { slug: "part22", number: 22, title: "Copper, silver and gold: late-series logic", group: "Element focus", visual: "copper", markdown: `# 22. Copper, silver and gold

Late d-block metals have filled or nearly filled d subshells, and their lower oxidation states can be unusually important. Cu$^+$ is $d^{10}$ but is not stable in ordinary aqueous solution relative to Cu$^{2+}$ and Cu metal; it undergoes disproportionation.

\[\mathrm{2Cu^+\rightarrow Cu^{2+}+Cu}\]

Copper's positive $E^\circ(\mathrm{Cu^{2+}/Cu})$ explains its resistance to non-oxidising acids. Silver and gold are noble in the sense of resisting easy oxidation, but their classification still follows the incomplete-d rule for an appropriate ion.

| Species | d count | key point |
|---|---:|---|
| Cu$^+$ | $d^{10}$ | disproportionates in aqueous solution |
| Cu$^{2+}$ | $d^9$ | blue aquated ion |
| Ag$^+$ | $d^{10}$ | neutral Ag can form a transition-metal ion |
` + checks(["Write the disproportionation equation for Cu$^+$.", "Why is Cu metal unreactive towards dilute non-oxidising acids?"]) },
  { slug: "part23", number: 23, title: "Zn, Cd and Hg: d-block, not transition", group: "Element focus", visual: "zinc", markdown: `# 23. The group-12 boundary

Zn, Cd and Hg complete each of the first three d-block rows. Their outer pattern is $(n-1)d^{10}ns^2$, and their common +2 ions remain $d^{10}$. They are d-block elements but not transition elements by the incomplete-d criterion.

This distinction predicts several differences. Zn$^{2+}$ is diamagnetic and usually colourless because it is $d^{10}$. Group-12 metals still show metallic behaviour and form useful compounds, so excluding them from the transition definition does not mean excluding them from d-block study.

| Element | common ion | d count in common ion | classification |
|---|---|---:|---|
| Zn | Zn$^{2+}$ | $d^{10}$ | d-block, not transition |
| Cd | Cd$^{2+}$ | $d^{10}$ | d-block, not transition |
| Hg | Hg$^{2+}$ | $d^{10}$ | d-block, not transition |
` + checks(["Why is Zn$^{2+}$ diamagnetic?", "State the exact criterion that excludes Hg from transition elements."]) },
  { slug: "part24", number: 24, title: "D-block mastery: reaction logic and exception atlas", group: "Mastery", visual: "revision", markdown: `# 24. Rapid revision and mastery set

Build every answer from a small set of controls: d count, oxidation number, medium, and the whole energy cycle. A colour question asks about electronic excitation; a magnetic question asks about unpaired electrons; a redox question asks which configuration and medium are favoured.

| Trigger in a question | First move |
|---|---|
| ion formation | remove ns electrons first |
| colour | inspect d count and surroundings |
| magnetic moment | count unpaired electrons, then use $\mu=\sqrt{n(n+2)}$ |
| dichromate | specify acidic conditions |
| permanganate | identify the medium before product prediction |
| 4d vs 5d | invoke poor 4f shielding |

### Mastery problems
1. A $d^5$ aquated ion has how many unpaired electrons in the spin-only picture? **Answer:** five; $\mu=5.92\ \mathrm{BM}$.
2. Predict the manganese product when permanganate reacts in faintly alkaline solution. **Answer:** MnO$_2$.
3. Explain why chromate turns into dichromate on acidification. **Answer:** protonation shifts the chromate-dichromate equilibrium; chromium stays at +6.
4. Balance the acidic Fe$^{2+}$-permanganate reaction. **Answer:** $\mathrm{5Fe^{2+}+MnO_4^-+8H^+\rightarrow5Fe^{3+}+Mn^{2+}+4H_2O}$.
5. State why Zr and Hf have near-equal radii. **Answer:** contraction caused by poor shielding in the preceding 4f filling.
` + checks(["A $d^{10}$ ion is coloured by which ordinary d–d mechanism?", "List the three manganese reduction products in order of increasingly alkaline medium."]) },
];

export function dBlockLessonBySlug(slug: string) { return D_BLOCK_LESSONS.find((lesson) => lesson.slug === slug); }
