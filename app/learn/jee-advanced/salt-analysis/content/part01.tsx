import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 1,
  title: "Foundations, Equilibria and Laboratory Method",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Salt Analysis — JEE Advanced Master Notes

> **Scope:** Systematic qualitative inorganic analysis of common anions and cations, with ionic equations, observations, separation logic, interferences, confirmatory tests, exceptions, and JEE Advanced problem-solving cues.
>
> **Notation:** \`ppt\` = precipitate; \`soln.\` = solution; \`Δ\` = heat; \`↓\` = precipitate; \`↑\` = gas; O.A. = oxidising agent; R.A. = reducing agent.

---

## 1. What Salt Analysis Actually Tests

A salt contains:

- a **basic radical**: the cation, such as $\mathrm{Cu^{2+}}$, $\mathrm{Fe^{3+}}$, $\mathrm{NH_4^+}$;
- an **acid radical**: the anion, such as $\mathrm{Cl^-}$, $\mathrm{SO_4^{2-}}$, $\mathrm{NO_3^-}$.

Qualitative analysis does not merely ask, “Which colour is formed?” It uses four chemical ideas:

1. **Acid-base reactions** — release of volatile acids and control of $\mathrm{OH^-}$ or $\mathrm{S^{2-}}$.
2. **Selective precipitation** — a precipitate appears when ionic product exceeds $K_{sp}$.
3. **Complex formation** — a precipitate may dissolve when a stable soluble complex forms.
4. **Redox chemistry** — oxidation state changes produce characteristic colours, gases, or deposits.

### 1.1 Solubility-product principle

For:

$$\mathrm{M_aX_b(s)\rightleftharpoons aM^{b+}+bX^{a-}}$$

$$K_{sp}=[\mathrm{M^{b+}}]^a[\mathrm{X^{a-}}]^b$$

- ionic product $<K_{sp}$: no precipitation;
- ionic product $=K_{sp}$: saturated solution;
- ionic product $>K_{sp}$: precipitation begins.

This is the basis of every cation group separation.

### 1.2 Common-ion control

For hydrogen sulphide:

$$\mathrm{H_2S\rightleftharpoons H^+ + HS^-}$$

$$\mathrm{HS^-\rightleftharpoons H^+ + S^{2-}}$$

Adding dilute HCl increases $[\mathrm{H^+}]$ and suppresses ionisation of $\mathrm{H_2S}$. Therefore $[\mathrm{S^{2-}}]$ remains very low. Only extremely insoluble sulphides precipitate in acidic medium.

In ammoniacal medium, $\mathrm{OH^-}$ removes $\mathrm{H^+}$ and drives both equilibria to the right. The larger $[\mathrm{S^{2-}}]$ now precipitates the more soluble sulphides of the later group.

[VISUAL:sulfide-ph-graph]

### 1.3 Complex formation can reverse precipitation

Silver chloride dissolves in ammonia because free $\mathrm{Ag^+}$ is consumed:

$$\mathrm{AgCl(s)+2NH_3(aq)\rightleftharpoons[Ag(NH_3)_2]^+(aq)+Cl^-(aq)}$$

The equilibrium shifts toward dissolution. Addition of acid destroys the ammine complex and reprecipitates $\mathrm{AgCl}$.

### 1.4 The correct analytical sequence

1. Observe the original salt.
2. Perform preliminary dry tests.
3. Test anions on separate portions.
4. Remove interfering anions when necessary.
5. Prepare the original solution for cation analysis.
6. Apply group reagents in the correct order.
7. Separate ions within the precipitated group.
8. Perform at least one reliable confirmatory test.

Never perform every test in the same test tube. Reagents added in an earlier test can create false positives later.

---

## 2. Laboratory Language and Safety

### 2.1 Important operations

| Operation | Meaning | Analytical purpose |
|---|---|---|
| Decantation | Pour off liquid above a settled solid | Rapid separation |
| Filtration | Separate precipitate from filtrate | Essential between groups |
| Washing | Pass wash liquid through precipitate | Removes adsorbed ions/reagent |
| Digestion | Keep precipitate warm in mother liquor | Produces larger, purer particles |
| Centrifugation | Accelerate settling | Useful in microscale analysis |
| Acidification | Add acid until required acidic condition | Controls equilibria/interference |
| Alkalisation | Add base to required basic condition | Controls precipitation/complexes |

### 2.2 Safety essentials

- $\mathrm{H_2S}$ is highly toxic. Use only in a functioning fume hood.
- Concentrated $\mathrm{H_2SO_4}$, $\mathrm{HNO_3}$, HF-generating tests, cyanides, arsenic compounds, mercury compounds, chromates, and lead salts require strict supervision.
- Never smell a gas directly. Use wafting only where permitted.
- Do not heat a closed test tube.
- Point the mouth of a heated test tube away from every person.
- In a school/JEE context, hazardous tests are studied as chemical principles; they must not be improvised outside a laboratory.

---

## 43. Complete Reagent Atlas

### Dilute hydrochloric acid

Dilute HCl has three different analytical roles. It releases volatile products from carbonate, sulphite, thiosulphate, sulphide and nitrite; it precipitates the Group I chlorides; and it creates the acidic medium needed for Group II sulphide precipitation. These roles must not be mixed. A chloride test performed after adding HCl is invalid.

### Concentrated sulphuric acid

Concentrated $\mathrm{H_2SO_4}$ is a non-volatile acid, dehydrating agent and oxidising agent. With chloride it mainly liberates HCl. With bromide and iodide, the initially formed HBr/HI reduces sulphuric acid. Iodide is strong enough to produce S and $\mathrm{H_2S}$ in addition to $\mathrm{SO_2}$. The same reagent helps generate volatile borate esters and chromyl chloride.

### Dilute nitric acid

Dilute $\mathrm{HNO_3}$ is used before $\mathrm{AgNO_3}$ because it destroys carbonate and sulphite without adding chloride. It must not be used while testing nitrate or when the original oxidation state of iron, tin or sulphur is important.

### Silver nitrate

Silver nitrate is not merely a “halide reagent.” It also precipitates phosphate, carbonate, arsenate, chromate and several other anions. Correct acidity is therefore essential. Halides are tested after acidification with dilute nitric acid; the colour and ammonia solubility of the precipitate complete the inference.

### Barium chloride

Barium chloride forms white precipitates with sulphate, carbonate, sulphite, phosphate and oxalate. In acidic solution, carbonate and sulphite are destroyed and several other precipitates dissolve, whereas $\mathrm{BaSO_4}$ remains. “White with $\mathrm{BaCl_2}$” alone never proves sulphate.

### Hydrogen sulphide

$\mathrm{H_2S}$ supplies sulphide ion through weak stepwise ionisation. Its effective precipitating strength is controlled by pH. Acidic $\mathrm{H_2S}$ separates Group II; ammoniacal $\mathrm{H_2S}$ separates Group IV. This single reagent demonstrates common-ion effect, pH control and selective precipitation.

### Ammonium chloride and ammonium hydroxide

Together they form a buffer. $\mathrm{NH_4OH}$ supplies hydroxide; $\mathrm{NH_4Cl}$ suppresses excessive ionisation and prevents precipitation of later-group hydroxides. Reversing the order or omitting ammonium chloride can give contaminated Group III precipitate.

### Yellow ammonium sulphide

Yellow ammonium sulphide contains polysulphide and dissolves sulphides of arsenic, antimony and tin by producing soluble thio salts. It can also oxidise lower sulphides, such as SnS, toward higher thio species. Acidification decomposes the thio complexes and reprecipitates the sulphides.

### Ammonium carbonate

In an ammonium buffer, it selectively precipitates Ba, Sr and Ca carbonates while leaving Mg mainly in solution. The selectivity is not based on a slogan that “magnesium carbonate is soluble”; it follows from controlled carbonate activity, buffer conditions and relative solubility products.

### Sodium hydroxide

NaOH releases ammonia from ammonium salts, precipitates metal hydroxides and dissolves amphoteric hydroxides. The sequence “precipitate first, dissolve in excess” is important for $\mathrm{Al^{3+}}$, $\mathrm{Zn^{2+}}$, $\mathrm{Cr^{3+}}$, $\mathrm{Pb^{2+}}$ and tin ions.

---

## 44. Precipitate Formation, Digestion and Washing

Precipitation is not instantaneous proof of purity. Immediately after nucleation, very small particles have large surface area and adsorb ions strongly. Slow reagent addition with stirring gives fewer nuclei and larger particles. Warming or digesting the precipitate in its mother liquor allows small particles to dissolve and redeposit on larger ones. The precipitate then filters more easily and carries fewer impurities.

Three contamination mechanisms matter:

1. **Surface adsorption:** ions of the precipitate are preferentially adsorbed, followed by oppositely charged counter-ions.
2. **Occlusion:** pockets of mother liquor become trapped during rapid crystal growth.
3. **Post-precipitation:** a second sparingly soluble substance deposits on an existing precipitate with time.

Washing removes soluble reagent and mother liquor, but pure water is not always ideal. A precipitate may peptise or dissolve. A wash liquid often contains a volatile electrolyte or a small concentration of common ion. The washings should be tested until the interfering ion is absent.

Complete precipitation is checked by allowing the solid to settle and adding one more drop of group reagent to the clear supernatant. Formation of additional cloudiness means precipitation was incomplete. Excessive group reagent must still be avoided because some precipitates dissolve through complex formation.

In JEE problems, “the precipitate is filtered” implies that the filtrate, not the solid, is used for the next group. If filtration is omitted, the subsequent reagent can alter earlier precipitates and create misleading colours.

---

## 58. Numerical Equilibrium Templates

### Onset of precipitation

For $\mathrm{MX}$:

$$[\mathrm{M^+}][\mathrm{X^-}]=K_{sp}$$

If $[\mathrm{M^+}]$ is known, the minimum precipitating-ion concentration is:

$$[\mathrm{X^-}]_{\min}=\frac{K_{sp}}{[\mathrm{M^+}]}$$

For $\mathrm{MX_2}$:

$$K_{sp}=[\mathrm{M^{2+}}][\mathrm{X^-}]^2$$

Therefore:

$$[\mathrm{X^-}]_{\min}=\sqrt{\frac{K_{sp}}{[\mathrm{M^{2+}}]}}$$

### Fractional precipitation

When two ions precipitate with the same counter-ion, the ion requiring the smaller counter-ion concentration begins first. Separation is effective only if most of the first ion precipitates before the second begins.

### Coupled complexation

If $\mathrm{M^{n+}}$ forms $\mathrm{ML_p}$:

$$\beta_p=\frac{[\mathrm{ML_p}]}{[\mathrm{M^{n+}}][\mathrm{L}]^p}$$

High ligand concentration lowers free $[\mathrm{M^{n+}}]$ and may dissolve a precipitate or prevent its formation.

### pH-dependent sulphide concentration

Combining the two dissociation constants of $\mathrm{H_2S}$ gives approximately:

$$[\mathrm{S^{2-}}]\propto\frac{K_{a1}K_{a2}[\mathrm{H_2S}]}{[\mathrm{H^+}]^2}$$

Thus a tenfold decrease in $[\mathrm{H^+}]$ can increase $[\mathrm{S^{2-}}]$ roughly one hundredfold while other conditions remain comparable. This explains the dramatic difference between acidic and ammoniacal sulphide precipitation.

---

## 69. Master Solubility Chart

The statements below refer to ordinary room-temperature water unless a special condition is stated. “Insoluble” in qualitative analysis means sufficiently sparingly soluble to form a precipitate at analytical concentrations.

[FIGURE:solubility-funnel]

### 69.1 General rules

| Salt family | General rule | Major exceptions or qualifications |
|---|---|---|
| Alkali-metal salts | Soluble | $\mathrm{Li_3PO_4}$ is sparingly soluble; $\mathrm{Li_2CO_3}$ is much less soluble than other alkali carbonates; $\mathrm{NaHCO_3}$ is only moderately soluble; $\mathrm{KClO_4}$ is sparingly soluble |
| Ammonium salts | Soluble | Complex salts can behave differently; ammonium salts may decompose on heating |
| Nitrates | Soluble | No important common exception in classical aqueous analysis |
| Acetates | Generally soluble | $\mathrm{AgCH_3COO}$ and $\mathrm{Hg_2(CH_3COO)_2}$ are sparingly soluble; basic acetates may precipitate |
| Formates | Generally soluble | Ag(I), Hg(I) and some heavy-metal formates are sparingly soluble |
| Chlorides | Soluble | AgCl, $\mathrm{Hg_2Cl_2}$ and PbCl₂ are sparingly soluble; PbCl₂ is much more soluble hot |
| Bromides | Soluble | AgBr, $\mathrm{Hg_2Br_2}$ and PbBr₂ are sparingly soluble |
| Iodides | Soluble | AgI, $\mathrm{Hg_2I_2}$, PbI₂, CuI and HgI₂ are sparingly soluble; some dissolve in excess iodide by complex formation |
| Sulphates | Generally soluble | BaSO₄, SrSO₄ and PbSO₄ are very sparingly soluble; CaSO₄ is sparingly soluble; Ag₂SO₄ and Hg₂SO₄ have limited solubility |
| Carbonates | Insoluble | Alkali-metal and ammonium carbonates are soluble; bicarbonates are generally soluble in water |
| Phosphates | Insoluble | Alkali-metal and ammonium phosphates are soluble; many dihydrogen phosphates are soluble |
| Oxalates | Generally insoluble | Alkali-metal and ammonium oxalates are soluble; $\mathrm{BeC_2O_4}$ is appreciably soluble/complexed |
| Borates | Generally insoluble | Alkali-metal borates are soluble; hydrolysis makes their solutions alkaline |
| Chromates | Many are insoluble | Alkali-metal, ammonium, Mg and Ca chromates are soluble; Sr, Ba, Pb and Ag chromates are sparingly soluble |
| Sulphides | Mostly insoluble | Alkali-metal and ammonium sulphides are soluble; alkaline-earth sulphides hydrolyse and have appreciable/sparing solubility |
| Hydroxides | Mostly insoluble | Alkali hydroxides are soluble; Ba(OH)₂ is soluble, Sr(OH)₂ moderately soluble, Ca(OH)₂ sparingly soluble; amphoteric hydroxides dissolve in excess strong base |

[FIGURE:solubility-decision-tree-a]

[FIGURE:solubility-decision-tree-b]

### 69.2 Silver-halide solvent chart

| Precipitate | Colour | Dilute NH₃ | Concentrated NH₃ | $\mathrm{Na_2S_2O_3}$ | KCN | Light |
|---|---|---|---|---|---|---|
| AgCl | White | Soluble | Soluble | Soluble as $\mathrm{[Ag(S_2O_3)_2]^{3-}}$ | Soluble as $\mathrm{[Ag(CN)_2]^-}$ | Darkens |
| AgBr | Cream | Very little/partial | Considerably soluble | Soluble | Soluble | Darkens |
| AgI | Yellow | Insoluble | Insoluble | Soluble only under stronger suitable thiosulphate conditions; much less readily | Soluble | Darkens slowly |
| $\mathrm{Ag_2S}$ | Black | Insoluble | Insoluble | Insoluble under ordinary test conditions | Resistant/complex redox conditions required | No useful phototest |

**JEE caution:** Textbooks differ in describing AgBr as “partly soluble” or “soluble in concentrated ammonia.” The safe analytical statement is: AgBr is far less soluble than AgCl and requires concentrated ammonia; AgI remains insoluble.

### 69.3 Sulphide-solubility chart

| Sulphide family | Dilute HCl | Hot dilute $\mathrm{HNO_3}$ | Yellow ammonium sulphide | Aqua regia |
|---|---|---|---|---|
| Group II-A: CuS, CdS, PbS, $\mathrm{Bi_2S_3}$ | Insoluble/very resistant | Generally soluble with sulphur formation; HgS exception | Insoluble | Soluble under suitable treatment |
| HgS | Insoluble | Insoluble | Insoluble in YAS; soluble in suitable alkali sulphide as thio complex only under specified conditions | Soluble |
| Group II-B: As/Sb/Sn sulphides | Resistant to dilute HCl | Oxidised/dissolved depending on conditions | Soluble as thio salts | Soluble |
| NiS, CoS | Resistant to dilute HCl | Soluble in oxidising acid | Insoluble | Soluble |
| ZnS | Soluble in dilute HCl | Soluble | Insoluble in excess ammonia/NaOH | Soluble |
| MnS | Soluble even in acetic acid | Soluble | Insoluble in excess ammonia/NaOH | Soluble |
| FeS | Soluble in non-oxidising acid | Soluble | — | Soluble |

General acid dissolution:

$$\mathrm{MS+2H^+\rightarrow M^{2+}+H_2S\uparrow}$$

Oxidising nitric acid does not simply release $\mathrm{H_2S}$; it oxidises sulphide, often to S or sulphate while nitrate is reduced to NO/$\mathrm{NO_2}$.

### 69.4 Alkaline-earth selectivity chart

| Reagent in controlled medium | Ba²⁺ | Sr²⁺ | Ca²⁺ | Separation idea |
|---|---|---|---|---|
| Chromate in acetic acid | Yellow BaCrO₄ | Normally remains under selected acidity | No ppt | Remove Ba first |
| Sulphate after Ba removal | BaSO₄ if any Ba remains | White SrSO₄ | CaSO₄ much more soluble | Remove Sr second |
| Oxalate after Ba/Sr removal | Ba oxalate suppressed/removed | Sr oxalate condition-dependent | White CaC₂O₄ | Confirm Ca last |

Solubility order:

$$\mathrm{CaSO_4>SrSO_4>BaSO_4}$$

---

## 73. Complete Experimental Precautions

### 73.1 General sample handling

1. Use a fresh, separate portion for every independent anion test.
2. Record the original colour before grinding, heating or dissolving.
3. Use distilled/deionised water; tap water introduces $\mathrm{Cl^-}$, $\mathrm{Ca^{2+}}$ and other ions.
4. Never return unused sample or reagent to the stock bottle.
5. Label filtrate and precipitate immediately; retain both until the analysis is secure.
6. Add reagents dropwise first. A large excess can dissolve the desired precipitate or create a complex.
7. Check complete precipitation in the supernatant before filtering.
8. Wash precipitates with an appropriate wash liquid; avoid peptisation and dissolution.

### 73.2 Original-solution precautions

| Suspected/tested species | Avoid | Reason |
|---|---|---|
| Chloride | HCl as solvent | Introduces chloride |
| Nitrate | HNO₃ as solvent | Introduces nitrate |
| Sulphide/sulphite/Fe²⁺/Sn²⁺ | Oxidising HNO₃ | Changes oxidation state |
| Ag⁺/Pb²⁺/Hg₂²⁺ | Uncontrolled chloride | Premature Group I precipitation |
| Redox-sensitive ions | Aqua regia | Strong oxidation plus chloride complexation |

### 73.3 Gas-test precautions

- Use only a small sample.
- Do not smell directly; waft where permitted.
- H₂S, HCN, arsine and mercury/arsenic vapours require a fume hood and trained supervision.
- Keep lead acetate paper moist for gas contact.
- For limewater, pass gas gently; excess CO₂ or SO₂ can clear the precipitate.

### 73.4 Flame and bead precautions

1. Clean platinum/nichrome wire with concentrated HCl until it gives no flame colour.
2. Sodium contamination is common; use cobalt glass for potassium.
3. Use the non-luminous flame and the correct oxidising/reducing zone.
4. Observe borax beads both hot and cold; some colours change strongly on cooling.
5. Use only a tiny amount of sample; too much makes the bead opaque.
6. Never touch a hot loop or bead.

### 73.5 Brown-ring test precautions

1. Use freshly prepared $\mathrm{FeSO_4}$.
2. Remove nitrite first.
3. Cool the test mixture.
4. Add concentrated $\mathrm{H_2SO_4}$ slowly down the wall to form a separate lower layer.
5. Do not shake or warm after layering; the brown complex decomposes.
6. Observe the ring at the interface, not a general brown solution.

### 73.6 Chromyl chloride precautions

1. Use a dry salt and dry apparatus.
2. Do not use a wet chloride solution; hydrolysis prevents the characteristic vapour.
3. Bromide and iodide must be absent because dichromate oxidises them to coloured halogens.
4. Absorb vapours in NaOH, then acidify appropriately before lead-chromate confirmation.
5. Treat the test as theoretical/hood-only because concentrated acid and Cr(VI) are hazardous.

### 73.7 Group-analysis precautions

1. Follow the group order exactly.
2. Maintain the stated acidity for Group II; too much acid suppresses even desired sulphides, too little precipitates Group IV ions.
3. Remove H₂S completely before Group III.
4. Add $\mathrm{NH_4Cl}$ before $\mathrm{NH_4OH}$.
5. Remove interfering phosphate, borate, fluoride, oxalate and silicate before Group III.
6. Maintain ammoniacal conditions during Group IV precipitation.
7. Do not test ammonium after ammonium reagents have been added.
8. Use acetic-acid control for Ba/Sr/Ca separations.

### 73.8 Waste and safety

Lead, mercury, cadmium, arsenic, antimony, chromium(VI), nickel and cobalt waste must be collected as hazardous heavy-metal waste. It must not be poured into a sink. Cyanide and sulphide waste must never be acidified casually because highly toxic HCN or H₂S can be released.

---

## 78. Deeper Theory of Qualitative Analysis

### 78.1 Selectivity and specificity

A **specific test** responds to only one ion under the stated conditions. Truly specific reactions are rare. A **selective test** responds to a small set of ions and becomes useful after group separation or masking. For example, DMG is highly selective for $\mathrm{Ni^{2+}}$ in ammoniacal solution, but Fe(II) and Co(II) can also interact with DMG under other conditions. The chemical environment is therefore part of the test.

### 78.2 Sensitivity, detection limit and dilution limit

- **Detection limit:** smallest mass or concentration that gives a recognisable response under stated conditions.
- **Dilution limit:** greatest dilution at which the test is still positive.
- **Sensitivity:** practical ability of a test to reveal a small quantity; it depends on observation method, volume, reagent purity and interferences.

A very sensitive test is not automatically specific. Flame emission for sodium is extremely sensitive but contamination produces false positives.

### 78.3 Macro, semimicro, micro and spot tests

| Scale | Typical sample size | Advantage | Limitation |
|---|---|---|---|
| Macro | Hundreds of milligrams or more | Easy handling and visible precipitates | More waste and hazardous reagent |
| Semimicro | Tens of milligrams | Standard teaching compromise | Requires careful dropwise technique |
| Micro | Milligrams | Rapid and low waste | Small observations can be missed |
| Spot test | One/few drops on plate or paper | Very sensitive, fast | Matrix effects; many are only selective |

Spot tests become much more reliable after the interfering group has been separated. A coloured spot on paper may be intensified by adsorption and concentration at the drying edge.

### 78.4 Nucleation and crystal growth

Precipitation begins with formation of tiny nuclei. High supersaturation creates many nuclei and a colloidal precipitate. Lower supersaturation, warm solution, slow addition and stirring favour crystal growth. Relative supersaturation may be represented qualitatively as:

$$\mathrm{\frac{Q-S}{S}}$$

where $Q$ is the instantaneous solute concentration and $S$ is equilibrium solubility. Smaller relative supersaturation generally gives larger, purer particles.

### 78.5 Coagulation and peptisation

Colloidal particles carry surface charge and repel one another. An electrolyte compresses the electrical double layer and promotes coagulation. Washing a coagulated precipitate with pure water can remove electrolyte and redisperse it—**peptisation**. A suitable volatile electrolyte in the wash liquid prevents this.

### 78.6 Coprecipitation

Coprecipitation carries otherwise soluble material with a precipitate through:

- surface adsorption;
- occlusion of mother liquor;
- inclusion/isomorphous substitution in the crystal;
- mechanical entrapment.

Digestion, reprecipitation and correct washing reduce contamination.

### 78.7 Post-precipitation

A second substance slowly precipitates on an already formed solid. Filtering without unnecessary delay prevents this. Coprecipitation occurs during formation of the main precipitate; post-precipitation develops afterward.

### 78.8 Masking versus separation

Separation physically places ions into different fractions. Masking keeps an interfering ion in the same solution but lowers its reactive free concentration by complex formation. Demasking later releases it.

### 78.9 Oxidation-state preservation

Dry tests, nitric acid, aqua regia, peroxide and chlorine water may change oxidation states. A positive test for “iron” after oxidation does not reveal whether the original salt contained Fe(II) or Fe(III). Oxidation-state tests require a fresh portion dissolved without oxidising reagents.

---
`;

export default function SaltAnalysisPart01() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
