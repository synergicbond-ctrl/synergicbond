const content = String.raw`
# Part 5 — Hydrometallurgy & Electrometallurgical Reduction

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


## 7. Hydrometallurgical Reduction

Hydrometallurgy carries out extraction reactions in aqueous solution. Temperatures are therefore much lower than in pyrometallurgy.

### Cementation / displacement from complexes
For cyanide complexes of Ag/Au, Zn can reduce the noble-metal complex and itself enter solution as a cyanide complex. A representative Ag equation is:

$$2[Ag(CN)_2]^-+Zn\rightarrow2Ag+[Zn(CN)_4]^{2-}$$

Why Zn is preferred over Cu in the textbook logic:
- Zn is sufficiently reducing,
- inexpensive,
- gives fast displacement under suitable conditions.

### Low-grade copper ore concept
A leach solution containing $Cu^{2+}$ can be treated with iron scrap:

$$Fe+Cu^{2+}\rightarrow Fe^{2+}+Cu$$

For sulphate solution:
$$Fe+CuSO_4\rightarrow FeSO_4+Cu$$

---

## 8. Electrometallurgical Reduction

Very electropositive metals such as Na, K, Mg, Ca and Al cannot normally be obtained by ordinary carbon reduction of their stable compounds under convenient commercial conditions. They are produced by **electrolysis of molten salts/oxides**.

### Downs cell — sodium
Molten NaCl contains $Na^+$ and $Cl^-$.

Cathode:
$$Na^++e^-\rightarrow Na$$

Anode:
$$2Cl^-\rightarrow Cl_2+2e^-$$

A CaCl₂-containing molten mixture is used industrially to lower the operating temperature of the electrolyte and improve practical conductivity/flow properties.

> **Eutectic idea:** mixing salts can produce a composition whose melting point is lower than that of either pure component.

---

![Reduction routes by metal reactivity](/notes/metallurgy/reduction-method-map.svg)


## Hydrometallurgy — complete logic retained
The source emphasises an aqueous route, so temperature is limited by the solvent/pressure regime and fuel demand can be lower than in pyrometallurgy.

### Cementation from cyanide complexes
For $M=Ag$ or Au, a schematic displacement is:
$$2[M(CN)_2]^-+Zn\rightarrow2M+[Zn(CN)_4]^{2-}$$
Why Zn is preferred over Cu in many textbook cyanide examples:
- Zn is cheaper.
- It is sufficiently more electropositive, giving a stronger driving force and faster displacement.

### Low-grade copper route retained
A low-grade Cu ore can be leached to Cu(II) solution, then Fe scrap displaces copper:
$$CuSO_4+Fe\rightarrow FeSO_4+Cu$$

## Electrometallurgy — highly electropositive metals
Na, K, Mg, Ca and Al form very stable compounds; aqueous electrolysis would discharge water/H$^+$ rather than deposit these metals. Hence fused salts/oxides are used.

### Downs cell concept
Molten NaCl:
$$Na^++e^-\rightarrow Na(l)$$
$$2Cl^-\rightarrow Cl_2(g)+2e^-$$
$CaCl_2$ lowers the melting point by forming a eutectic mixture and improves practical conductivity/fluidity.

> **JEE trap:** an additive that lowers melting point is not necessarily “catalysing” electrolysis. It changes phase behaviour and transport.

`;
export default content;
