import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 12,
  title: "Group IV Cations: Nickel, Cobalt, Manganese and Zinc",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Group IV Cations: Nickel, Cobalt, Manganese and Zinc

## 1. Group reagent

After removing Group III hydroxides, make the filtrate ammoniacal and pass hydrogen sulphide or add ammonium sulphide.

The high sulphide-ion concentration precipitates:

$$
\mathrm{Ni^{2+}+S^{2-}\rightarrow NiS\downarrow}
$$

$$
\mathrm{Co^{2+}+S^{2-}\rightarrow CoS\downarrow}
$$

$$
\mathrm{Mn^{2+}+S^{2-}\rightarrow MnS\downarrow}
$$

$$
\mathrm{Zn^{2+}+S^{2-}\rightarrow ZnS\downarrow}
$$

### 1.1 Colours

| Sulphide | Colour |
|---|---|
| NiS | Black |
| CoS | Black |
| MnS | Flesh-coloured/pale pink |
| ZnS | White |

NiS and CoS cannot be separated by colour. MnS darkens in air because manganese(II) sulphide is readily oxidised.

## 2. Acid solubility as a first separation

Treat the mixed sulphides with dilute HCl.

MnS and ZnS dissolve:

$$
\mathrm{MnS+2H^+\rightarrow Mn^{2+}+H_2S}
$$

$$
\mathrm{ZnS+2H^+\rightarrow Zn^{2+}+H_2S}
$$

NiS and CoS are more resistant and remain as a black residue under the classical conditions.

Thus:

- residue: NiS + CoS;
- filtrate: Mn$^{2+}$ + Zn$^{2+}$.

The exact acid concentration and freshness of precipitates matter. Aged sulphides can behave differently.

## 3. Separation of manganese and zinc

### 3.1 Oxidative separation with sodium peroxide or hydrogen peroxide in alkali

Zinc forms soluble zincate:

$$
\mathrm{Zn(OH)_2+2OH^-\rightarrow[Zn(OH)_4]^{2-}}
$$

Manganese(II) can be oxidised to insoluble hydrated manganese dioxide:

$$
\mathrm{Mn^{2+}+H_2O_2+2OH^-\rightarrow MnO_2\downarrow+2H_2O}
$$

Filter:

- brown/black residue: MnO$_2$;
- filtrate: zincate.

### 3.2 Alternative carbonate/hydroxide logic

Both ions can precipitate hydroxides, but zinc hydroxide is amphoteric and dissolves in excess NaOH, whereas manganese hydroxide does not form a comparably stable soluble hydroxo complex under ordinary conditions.

## 4. Zinc tests

### 4.1 Zinc hydroxide

$$
\mathrm{Zn^{2+}+2OH^-\rightarrow Zn(OH)_2\downarrow}
$$

White gelatinous precipitate.

Dissolves in excess NaOH:

$$
\mathrm{Zn(OH)_2+2OH^-\rightarrow[Zn(OH)_4]^{2-}}
$$

Dissolves in excess ammonia:

$$
\mathrm{Zn^{2+}+4NH_3\rightleftharpoons[Zn(NH_3)_4]^{2+}}
$$

Thus zinc hydroxide can dissolve by amphoterism in NaOH and by ammine-complex formation in ammonia.

### 4.2 Zinc sulphide

Reacidify or adjust the zinc solution and pass H$_2$S:

$$
\mathrm{Zn^{2+}+S^{2-}\rightarrow ZnS\downarrow}
$$

White ZnS confirms zinc after separation.

### 4.3 Potassium ferrocyanide

$$
\mathrm{2Zn^{2+}+[Fe(CN)_6]^{4-}\rightarrow Zn_2[Fe(CN)_6]\downarrow}
$$

White precipitate.

### 4.4 Cobalt nitrate test

Ignite zinc compound to ZnO, moisten with cobalt nitrate and heat:

$$
\mathrm{CoO+ZnO\rightarrow CoZnO_2}
$$

A green mass, Rinmann's green, forms.

### 4.5 Zinc oxide colour

ZnO is yellow when hot and white when cold. This reversible change is due to temperature-dependent defect structure and oxygen vacancies, not a change to a different bulk compound under ordinary conditions.

## 5. Manganese tests

### 5.1 Manganese hydroxide and air oxidation

$$
\mathrm{Mn^{2+}+2OH^-\rightarrow Mn(OH)_2\downarrow}
$$

Fresh Mn(OH)$_2$ is white to pale pink and rapidly turns brown due to oxidation:

$$
\mathrm{2Mn(OH)_2+O_2\rightarrow2MnO(OH)_2}
$$

A simplified product is often represented as hydrated MnO$_2$.

### 5.2 Sodium bismuthate test

In nitric acid, sodium bismuthate oxidises Mn(II) to permanganate:

$$
\mathrm{2Mn^{2+}+5BiO_3^-+14H^+\rightarrow2MnO_4^-+5Bi^{3+}+7H_2O}
$$

A purple solution forms. This is a highly sensitive confirmation.

### 5.3 Lead dioxide test

Strong oxidation in nitric acid can convert Mn(II) to permanganate. The reagent and conditions must be specified because chloride and reducing anions interfere.

### 5.4 Oxidising fusion

Fuse a manganese compound with sodium carbonate and an oxidant:

$$
\mathrm{2MnO_2+4Na_2CO_3+3O_2\rightarrow4Na_2MnO_4+4CO_2}
$$

A green manganate melt forms. Acidification gives permanganate plus MnO$_2$ by disproportionation.

### 5.5 Manganese sulphide

Flesh-coloured MnS dissolves in dilute acid with H$_2$S evolution, unlike NiS and CoS.

## 6. Separation of nickel and cobalt

The black residue contains NiS and CoS. Dissolve under suitable oxidising conditions, then use specific complex or precipitation tests.

### 6.1 Dimethylglyoxime test for nickel

[FIGURE:precision-confirmatory-tests]

In ammoniacal solution, Ni(II) forms a bright scarlet-red precipitate with dimethylglyoxime, abbreviated $\mathrm{H_2DMG}$:

$$
\mathrm{Ni^{2+}+2H_2DMG+2OH^-\rightarrow Ni(DMG)_2\downarrow+2H_2O}
$$

The square-planar chelate is intensely coloured and highly characteristic.

Conditions:

- ammoniacal medium;
- absence or masking of interfering metals;
- sufficient reagent;
- avoid very strong acid, which protonates the ligand.

### 6.2 Nickel hydroxide

$$
\mathrm{Ni^{2+}+2OH^-\rightarrow Ni(OH)_2\downarrow}
$$

Apple-green precipitate, insoluble in excess NaOH but can dissolve in ammonia through ammine-complex formation depending on conditions.

### 6.3 Nickel with cyanide

Nickel forms cyanide complexes and precipitates under controlled conditions. Cyanide chemistry is hazardous and treated only theoretically.

## 7. Cobalt tests

### 7.1 Thiocyanate test

In concentrated thiocyanate and a suitable organic solvent, cobalt forms an intense blue complex, often represented as:

$$
\mathrm{Co^{2+}+4SCN^-\rightleftharpoons[Co(SCN)_4]^{2-}}
$$

Extraction into acetone or an organic phase intensifies the blue colour.

Fe(III) gives blood-red thiocyanate complexes and must be removed or masked, often with fluoride.

### 7.2 Cobalt nitrite/cobaltinitrite chemistry

Cobalt can be oxidised and precipitated as a complex nitrite under specified conditions. Potassium and ammonium ions also participate in cobaltinitrite precipitates, so reagent roles must be tracked carefully.

### 7.3 Cobalt hydroxide

$$
\mathrm{Co^{2+}+2OH^-\rightarrow Co(OH)_2\downarrow}
$$

Initially blue or pinkish-blue depending on conditions; it darkens on oxidation.

### 7.4 Borax bead

Cobalt gives an intense deep-blue bead in both oxidising and reducing flames. Even a small amount can mask other bead colours.

## 8. Classical Ni-Co separation approaches

Different schemes exploit:

- selective precipitation of nickel with dimethylglyoxime;
- oxidation of cobalt to Co(III) complexes;
- selective complexation with cyanide or thiocyanate;
- differing solubility of nitrite complexes.

For JEE, the reagent sequence given in the problem is authoritative. Do not assume a single universal scheme.

## 9. Amphoterism and complexation matrix

[FIGURE:amphoterism-vs-complexation]

| Hydroxide | Excess NaOH | Excess NH$_3$ | Key confirmation |
|---|---|---|---|
| Zn(OH)$_2$ | Dissolves as zincate | Dissolves as ammine | White ZnS; green cobalt-nitrate mass |
| Mn(OH)$_2$ | Insoluble; oxidises | Mostly insoluble | Purple permanganate after oxidation |
| Ni(OH)$_2$ | Insoluble | Complexation possible | Red Ni(DMG)$_2$ |
| Co(OH)$_2$ | Insoluble | Ammine complexes/oxidation possible | Blue thiocyanate or borax bead |

## 10. Group IV separation flow

1. Precipitate NiS, CoS, MnS, ZnS in ammoniacal sulphide medium.
2. Treat with dilute HCl:
   - MnS and ZnS dissolve;
   - NiS and CoS remain.
3. Mn/Zn filtrate:
   - add excess NaOH and oxidant;
   - MnO$_2$ precipitates;
   - zincate remains.
4. Confirm Mn by oxidation to permanganate.
5. Confirm Zn by reprecipitating white ZnS or cobalt nitrate test.
6. Dissolve NiS/CoS residue under specified oxidising conditions.
7. Precipitate nickel with dimethylglyoxime.
8. Confirm cobalt in the remaining solution with thiocyanate or another specified test.

## 11. Colour and oxidation-state complications

- Co(II) solutions may be pink in water and blue in concentrated chloride due to ligand substitution.
- Ni(II) is usually green, but complexes can be blue or violet.
- Mn(II) is very pale; permanganate contamination dominates colour.
- Zn(II) is colourless because it is $d^{10}$.
- Air oxidation changes Mn(OH)$_2$ and Co(OH)$_2$ quickly.
- Black sulphides hide original solution colours.

## 12. JEE Advanced traps

1. NiS and CoS are black and acid-resistant; MnS and ZnS dissolve in dilute acid.
2. Zn(OH)$_2$ dissolves in both NaOH and ammonia, but by different chemical mechanisms.
3. Mn(OH)$_2$ darkens in air; the brown product is oxidised manganese.
4. Dimethylglyoxime requires ammoniacal conditions and gives a red nickel chelate.
5. Cobalt thiocyanate blue is masked by Fe(III) red unless iron is removed or complexed.
6. Yellow-hot/white-cold ZnO is a temperature-dependent defect-colour phenomenon.
7. Oxidising Mn(II) to permanganate is a much stronger confirmation than sulphide colour.
8. Cobalt's deep-blue borax bead can mask other ions.
9. Cyanide-based separations are theoretically important but hazardous.
`;

export default function SaltAnalysisPart12() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
