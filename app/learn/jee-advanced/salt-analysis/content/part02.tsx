import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 2,
  title: "Preliminary Examination and Dry Tests",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 3. Preliminary Examination of the Original Salt

## 3.1 Colour of the solid

Colour is suggestive, not confirmatory.

| Colour | Possible ion/compound | Important caution |
|---|---|---|
| Blue | Hydrated $\mathrm{Cu^{2+}}$ salts | Anhydrous salts can differ |
| Pale green | $\mathrm{Fe^{2+}}$ salts | Often oxidise to $\mathrm{Fe^{3+}}$ |
| Yellow/brown | $\mathrm{Fe^{3+}}$ salts | Colour depends on hydration/anion |
| Pink | Hydrated $\mathrm{Co^{2+}}$ salts | Anhydrous cobalt chloride is blue |
| Green | $\mathrm{Ni^{2+}}$, some $\mathrm{Cr^{3+}}$ salts | Not unique |
| Purple | $\mathrm{MnO_4^-}$ | Strongly characteristic |
| Yellow | $\mathrm{CrO_4^{2-}}$ | Acidification gives orange dichromate |
| Orange | $\mathrm{Cr_2O_7^{2-}}$ | Alkali gives yellow chromate |
| Black | Sulphides/oxides of several metals | Must be confirmed chemically |
| White/colourless | Many salts | Gives little preliminary information |

### 3.2 Odour

| Odour | Possible species |
|---|---|
| Ammoniacal/pungent | $\mathrm{NH_3}$ from ammonium salt in alkali |
| Rotten eggs | $\mathrm{H_2S}$ from sulphide |
| Vinegar-like | Acetic acid/acetate after acidification |
| Fruity | Ester formed from acetate + alcohol + acid |
| Suffocating/burning sulphur | $\mathrm{SO_2}$ from sulphite/thiosulphate |

Odour must never be the sole confirmation.

### 3.3 Solubility

Test a small quantity successively, using a fresh portion when necessary:

1. water;
2. dilute HCl;
3. dilute $\mathrm{HNO_3}$;
4. concentrated acids or special solvents only if required.

The solvent chosen for the original solution must not introduce the ion being tested. For example, do not prepare a chloride-containing sample in HCl before testing chloride.

---

## 4. Dry Tests for Cations

## 4.1 Heating in a dry test tube

Observe water, gases, sublimates, residue colour, and colour changes on cooling.

### Water of crystallisation

Hydrated salts may release water droplets:

$$\mathrm{CuSO_4\cdot5H_2O\xrightarrow{\Delta}CuSO_4+5H_2O}$$

Blue hydrated copper sulphate becomes white anhydrous copper sulphate. Addition of water restores blue colour.

### Ammonium salts

Many ammonium salts decompose on heating and may leave little or no residue. Example:

$$\mathrm{NH_4Cl(s)\rightleftharpoons NH_3(g)+HCl(g)}$$

The gases recombine on the cooler part of the tube to give a white sublimate.

### Zinc oxide colour change

$$\mathrm{ZnCO_3\xrightarrow{\Delta}ZnO+CO_2}$$

ZnO is yellow when hot and white when cold.

### Lead oxide

Lead salts may leave yellow PbO:

$$\mathrm{PbCO_3\xrightarrow{\Delta}PbO+CO_2}$$

### Mercury and arsenic sublimates

Volatile compounds of mercury and arsenic can produce sublimates. Their appearance alone is not a safe or final identification.

## 4.2 Flame test

### Procedure principle

Convert the salt into a volatile chloride using HCl and introduce it into the non-luminous flame. Excited atoms emit characteristic wavelengths on returning to lower energy levels.

| Ion | Flame colour | Through cobalt glass |
|---|---|---|
| $\mathrm{Na^+}$ | Intense golden yellow | Strongly suppressed |
| $\mathrm{K^+}$ | Lilac/violet | Violet becomes clearer |
| $\mathrm{Ca^{2+}}$ | Brick red | Greenish appearance may be reported |
| $\mathrm{Sr^{2+}}$ | Crimson red | Purple |
| $\mathrm{Ba^{2+}}$ | Apple green | Bluish green |
| $\mathrm{Cu^{2+}}$ | Bluish green | — |

**JEE traps**

- Sodium emission is so intense that traces of sodium mask potassium.
- Cobalt glass absorbs much of the sodium yellow light and helps reveal potassium.
- Flame colour is not a reliable stand-alone confirmation in mixtures.
- Chlorides are preferred because many are volatile.

[VISUAL:flame-colors]

[FIGURE:flame-emission-spectrum]

## 4.3 Borax bead test

On heating:

$$\mathrm{Na_2B_4O_7\cdot10H_2O\xrightarrow{\Delta}Na_2B_4O_7+10H_2O}$$

$$\mathrm{Na_2B_4O_7\xrightarrow{\Delta}2NaBO_2+B_2O_3}$$

The transparent glassy $\mathrm{B_2O_3}$ dissolves metal oxides and forms coloured borates.

| Metal ion | Oxidising flame | Reducing flame |
|---|---|---|
| Co | Deep blue | Deep blue |
| Cr | Green | Green |
| Cu | Blue-green when hot; blue when cold | Red/opaque due to Cu or $\mathrm{Cu_2O}$ |
| Fe | Yellow/brown hot; pale yellow cold | Bottle green |
| Mn | Amethyst/violet | Colourless |
| Ni | Brown/reddish brown | Grey/opaque |

**Reasoning cue:** A change between oxidising and reducing flames indicates oxidation-state-dependent colour.

[FIGURE:borax-bead-cross-section]

## 4.4 Charcoal cavity and cobalt nitrate tests

A salt heated with sodium carbonate on charcoal may form a metal globule, oxide, or incrustation.

General reduction:

$$\mathrm{MO+C\xrightarrow{\Delta}M+CO}$$

Some characteristic cobalt nitrate residues:

| Oxide | Product after cobalt nitrate treatment and heating | Colour |
|---|---|---|
| $\mathrm{Al_2O_3}$ | cobalt aluminate, $\mathrm{CoAl_2O_4}$ | Blue |
| $\mathrm{ZnO}$ | cobalt zincate/associated cobalt oxide product | Green |
| $\mathrm{MgO}$ | cobalt-magnesium mixed oxide | Pink/flesh |

The test is preliminary because colours depend on heating, concentration, and contamination.

---

## 63. Corrected Flame, Borax, Microcosmic and Carbonate-Bead Tests

### 63.1 Complete flame table

| Ion | Naked-eye flame | Through cobalt/double-blue glass |
|---|---|---|
| $\mathrm{Li^+}$ | Carmine red | Purple-red shade |
| $\mathrm{Na^+}$ | Intense golden yellow | Nearly disappears |
| $\mathrm{K^+}$ | Lilac/violet | Crimson-red/violet appears clearly |
| $\mathrm{Ca^{2+}}$ | Brick red | Greenish appearance may be reported |
| $\mathrm{Sr^{2+}}$ | Crimson red | Purple |
| $\mathrm{Ba^{2+}}$ | Apple green | Bluish green |
| $\mathrm{Cu^{2+}}$ or volatile copper halide | Blue-green/green | — |
| Volatile borate ester | Green-edged flame | — |

$\mathrm{Be^{2+}}$ and $\mathrm{Mg^{2+}}$ do not give a useful visible flame colour because their high excitation/ionisation requirements are not met efficiently in an ordinary Bunsen flame.

### 63.2 Correct borax-bead colour table

| Metal | Oxidising flame, hot | Oxidising flame, cold | Reducing flame, hot | Reducing flame, cold |
|---|---|---|---|---|
| Cr | Yellow | Green | Green | Green |
| Mn | Violet/amethyst | Violet/amethyst | Colourless | Colourless |
| Fe | Yellowish brown | Yellow/pale yellow | Green | Green |
| Co | Blue | Blue | Blue | Blue |
| Ni | Violet | Reddish brown | Grey | Grey |
| Cu | Green | Blue | Colourless | Opaque red from Cu/$\mathrm{Cu_2O}$ |

The oxidation state in the original salt cannot be inferred directly because the bead and flame conditions may oxidise or reduce the metal.

### 63.3 Microcosmic-salt bead test

Microcosmic salt is $\mathrm{NaNH_4HPO_4\cdot4H_2O}$. On heating:

$$\mathrm{NaNH_4HPO_4\cdot4H_2O\xrightarrow{\Delta}NaPO_3+NH_3+5H_2O}$$

Transparent sodium metaphosphate dissolves metal oxides to form coloured orthophosphate/metaphosphate species. Its colours often resemble borax-bead colours, but the metaphosphate bead is less viscous and can give sharper colours for some ions.

### 63.4 Sodium-carbonate bead test

Fuse $\mathrm{Na_2CO_3}$ on a platinum loop, touch it with $\mathrm{KNO_3}$ and sample, then heat in an oxidising flame.

For manganese:

$$\mathrm{2MnO+2Na_2CO_3+3O_2\rightarrow2Na_2MnO_4+2CO_2}$$

Green sodium manganate bead forms.

For chromium:

$$\mathrm{2Cr_2O_3+4Na_2CO_3+3O_2\rightarrow4Na_2CrO_4+4CO_2}$$

Yellow sodium chromate bead forms.

**Mnemonic:** **“Mn makes Green; Cr creates Yellow.”**

---

## 64. Heating, Sublimation and Charcoal-Cavity Atlas

### 64.1 Colour changes on heating

| Substance | Cold | Hot/heated product |
|---|---|---|
| ZnO | White | Yellow; returns white on cooling |
| $\mathrm{CuSO_4\cdot5H_2O}$ | Blue | White anhydrous $\mathrm{CuSO_4}$ |
| $\mathrm{CoCl_2\cdot6H_2O}$ | Pink | Blue anhydrous $\mathrm{CoCl_2}$ |
| $\mathrm{HgI_2}$ | Scarlet red | Yellow polymorph above transition; returns red on rubbing/cooling history |
| $\mathrm{CuCO_3\cdot Cu(OH)_2}$ | Green | Black CuO |
| $\mathrm{PbCO_3}$ | White | Yellow PbO |

### 64.2 White sublimates and their distinction

White sublimates may arise from $\mathrm{HgCl_2}$, $\mathrm{Hg_2Cl_2}$, $\mathrm{As_2O_3}$, $\mathrm{Sb_2O_3}$ and ammonium halides.

Dissolve/treat the sublimate with dilute HCl where appropriate and pass $\mathrm{H_2S}$:

| Original species | Observation with $\mathrm{H_2S}$ |
|---|---|
| $\mathrm{HgCl_2}$ | Black HgS |
| $\mathrm{Hg_2Cl_2}$ | Black mixture containing Hg and HgS |
| $\mathrm{As_2O_3}$ | Yellow $\mathrm{As_2S_3}$ |
| $\mathrm{Sb_2O_3}$ | Orange $\mathrm{Sb_2S_3}$ |
| $\mathrm{NH_4X}$ | No metal sulphide |

HgS dissolves in sodium sulphide as a thio complex, whereas the mercury(I)-derived mixture leaves metallic mercury:

$$\mathrm{HgS+S^{2-}\rightarrow[HgS_2]^{2-}}$$

### 64.3 Coloured sublimates

- Black: HgS/mercury sulphide species may be present.
- Yellow: yellow $\mathrm{HgI_2}$ or $\mathrm{As_2S_3}$.
- Mechanical rubbing converts yellow $\mathrm{HgI_2}$ to scarlet red; yellow $\mathrm{As_2S_3}$ does not show this polymorphic change.

### 64.4 Charcoal cavity observations

| Species after reduction/heating | Observation |
|---|---|
| Pb compound | Soft malleable metallic globule; yellow PbO incrustation |
| Bi compound | Brittle globule; yellow/brown oxide incrustation |
| Sn compound | Metallic bead; yellow-hot/white-cold $\mathrm{SnO_2}$ incrustation |
| Zn compound | No stable metal bead; ZnO incrustation yellow hot, white cold |
| Cd compound | Brown CdO incrustation |
| As/Sb compound | Volatile oxide incrustation; hazardous fumes |

### 64.5 Cobalt-nitrate residues

| Oxide | Colour after cobalt nitrate and ignition | Common name/idea |
|---|---|---|
| $\mathrm{Al_2O_3}$ | Blue | Thenard's blue/cobalt aluminate |
| ZnO | Green | Rinmann's green/cobalt zincate |
| MgO | Pink/flesh | Cobalt-magnesium oxide |

---
`;

export default function SaltAnalysisPart02() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
