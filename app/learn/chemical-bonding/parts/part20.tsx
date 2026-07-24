import { ChemicalBondingDeepVisual } from "../_components/ChemicalBondingDeepVisuals";
import {
  BulletList,
  ChemBondPartShell,
  DataTable,
  DiagramBox,
  FormulaLine,
  ImportantNote,
  LearningObjectives,
  NoteBlock,
  PracticeQuestion,
  SummaryStrip,
  TopicBlock,
  TrapCallout,
} from "./_shared";

export default function Part20() {
  return (
    <ChemBondPartShell part={20} title="Fajans’ Rule, Polarisation & Covalent Character">
      <LearningObjectives
        items={[
          <>Explain how polarisation introduces covalent character into an apparently ionic bond.</>,
          <>Rank polarising power and polarisability using charge, size and electronic configuration.</>,
          <>Apply Fajans’ rules to melting point, structure, solubility, hydrolysis, thermal stability, colour and salt stability.</>,
          <>Recognise structural and thermodynamic exceptions instead of applying one Fajans factor mechanically.</>,
        ]}
      />

      <TopicBlock number={158} title="Fajans’ Rule — Polarisation and the Origin of Covalency">
        <p>
          Chemical bonding is best understood as a continuum rather than a rigid division into “100% ionic” and “100% covalent”
          bonds. In a heteronuclear bond, electron density is rarely distributed in an absolutely idealised manner. Thus, a
          predominantly covalent bond may possess some ionic character, and a predominantly ionic bond may acquire appreciable
          covalent character.
        </p>
        <p>
          The introduction of covalency into an ionic bond through deformation of ionic electron clouds is described by
          polarisation of ions, developed systematically by K. Fajans (1923–1928). Fajans’ rules relate the covalent character
          of an apparently ionic compound to the polarising power of the cation and the polarisability of the anion.
        </p>

        <NoteBlock title="Definitions">
          <BulletList
            items={[
              <><strong>Polarisation of an anion:</strong> distortion or deformation of the electron cloud of an anion under the attractive electric field of a neighbouring cation.</>,
              <><strong>Polarising power:</strong> ability of a cation to deform the electron cloud of a neighbouring anion.</>,
              <><strong>Polarisability:</strong> ease with which the electron cloud of an ion, especially an anion, can be distorted.</>,
              <>Cation = usually the polarising agent; anion = usually the species being polarised.</>,
            ]}
          />
        </NoteBlock>

        <DiagramBox title="Cation-induced polarisation of a large anion">
          <ChemicalBondingDeepVisual kind="fajans" />
        </DiagramBox>

        <NoteBlock title="How polarisation introduces covalency — three-stage picture">
          <p><strong>Stage I — idealised ionic situation:</strong> electron density remains essentially localised around the anion, with negligible overlap between the ions.</p>
          <p><strong>Stage II — anion polarisation:</strong> the cation attracts the anion cloud toward itself, making the cloud asymmetric.</p>
          <p><strong>Stage III — strong polarisation and overlap:</strong> some anionic electron density lies between the two nuclei, introducing an electron-sharing component.</p>
          <FormulaLine math={String.raw`\text{Polarisation}\uparrow\ \Rightarrow\ \text{electron-density overlap}\uparrow\ \Rightarrow\ \text{covalent character}\uparrow`} />
        </NoteBlock>

        <ImportantNote title="Limiting case — polarisation becomes redox">
          Polarisation is not unrestricted deformation. At sufficiently extreme distortion, electron density may be transferred
          completely. The process then ceases to be merely polarisation and becomes oxidation–reduction:
          ionic interaction → partial polarisation → partial covalency → very strong polarisation → complete electron transfer/redox.
          This limiting behaviour helps explain the instability of compounds such as PbI₄.
        </ImportantNote>

        <NoteBlock title="Can the cation also be polarised? — mutual polarisation">
          <p>
            Yes. An anion can repel and deform the electron cloud of a cation. For ordinary noble-gas-configuration cations,
            the remaining electrons are relatively tightly bound, so cation polarisation is usually small. For pseudo-noble-gas
            or d¹⁰-type cations, however, the outer d-electron cloud can be appreciably polarised.
          </p>
          <p>
            The anion pushes cationic electron density toward the rear side of the cation. Screening on the side facing the
            anion decreases, exposing the positive nuclear field more strongly toward the anion. The anion is therefore
            polarised still more strongly.
          </p>
          <FormulaLine math={String.raw`\text{cation polarisation}\Rightarrow\text{greater exposed nuclear field}\Rightarrow\text{greater anion polarisation}\Rightarrow\text{greater covalency}`} />
          <p>Cation polarisation and anion polarisation act synergistically. This is especially important in soft–soft interactions in HSAB terminology.</p>
        </NoteBlock>
      </TopicBlock>

      <TopicBlock number={159} title="Factors Governing Polarisation — Fajans’ Rules">
        <p>
          The degree of covalent character depends mainly on: (1) charge and size of the cation, (2) electronic configuration
          of the cation, (3) size and charge of the anion, and (4) hard–soft character and the possibility of mutual polarisation.
        </p>

        <NoteBlock title="1. Charge and size of the cation">
          <p>A small, highly charged cation produces a strong electric field and strongly deforms a neighbouring anion. The source represents this using ionic potential:</p>
          <FormulaLine math={String.raw`\phi=\frac{\text{charge on cation}}{\text{ionic radius}}`} />
          <FormulaLine math={String.raw`\phi\uparrow\Rightarrow\text{polarising power}\uparrow\Rightarrow\text{covalent character}\uparrow`} />
          <BulletList
            items={[
              <>For approximately comparable size: Na⁺ &lt; Mg²⁺ &lt; Al³⁺ &lt; Si⁴⁺ in polarising power.</>,
              <>For the same charge: Li⁺ &gt; Na⁺ &gt; K⁺ and Be²⁺ &gt; Mg²⁺ &gt; Ca²⁺ in polarising power.</>,
              <>For representative elements, ionic size generally increases down a group, so φ and polarising power generally decrease.</>,
            ]}
          />
          <DataTable
            headers={["Cation", "r (Å)", "φ", "Cation", "r (Å)", "φ", "Cation", "r (Å)", "φ"]}
            rows={[
              ["Li⁺", "0.59", "1.7", "Be²⁺", "0.31", "6.4", "B³⁺", "0.20", "15.0"],
              ["Na⁺", "0.97", "1.0", "Mg²⁺", "0.65", "3.1", "Al³⁺", "0.50", "6.0"],
              ["K⁺", "1.33", "0.75", "Ca²⁺", "0.99", "2.0", "Ga³⁺", "0.62", "4.8"],
            ]}
          />
        </NoteBlock>

        <NoteBlock title="2. Electronic configuration of the cation">
          <p>
            Charge and ionic radius alone are not sufficient. Two cations of similar charge and radius can have very different
            polarising abilities because their inner electrons shield nuclear charge differently.
          </p>
          <BulletList
            items={[
              <><strong>Noble-gas-type cations:</strong> Na⁺, K⁺, Ca²⁺; outer closed shell essentially ns²np⁶, with relatively effective s/p shielding.</>,
              <><strong>Pseudo-noble-gas / pseudo-inert-gas cations:</strong> Cu⁺, Ag⁺, Cd²⁺, Hg²⁺, Au⁺; typical closed shell (n−1)s²(n−1)p⁶(n−1)d¹⁰. Filled d electrons shield nuclear charge relatively poorly.</>,
              <>For comparable charge and radius, a pseudo-noble-gas-type cation is generally more polarising than a simple noble-gas-type cation.</>,
            ]}
          />
          <DataTable
            headers={["Cation", "Configuration", "r⁺ (pm)", "Approx. Z*", "m.p. anhydrous chloride (°C)"]}
            rows={[
              ["Na⁺", "8e", "95", "2.2", "801"],
              ["Cu⁺", "18e", "96", "3.7", "422"],
              ["K⁺", "8e", "133", "2.2", "776"],
              ["Ag⁺", "18e", "126", "3.7", "455"],
              ["Ca²⁺", "8e", "99", "3.2", "772"],
              ["Cd²⁺", "18e", "97", "4.7", "568"],
            ]}
          />
          <p>
            The Na⁺/Cu⁺ and K⁺/Ag⁺ comparisons are especially revealing: radii are comparable, yet Cu⁺ and Ag⁺ form much
            more covalent chlorides, reflected in much lower melting points.
          </p>
          <p>
            Illustrative source estimates: for Na⁺, S = 8(0.85) + 2(1) = 8.8 and Z* = 11 − 8.8 = 2.2; for Cu⁺, Z* ≈ 3.7.
            For comparisons involving (n−1)s²(n−1)p⁶ and (n−1)s²(n−1)p⁶(n−1)d¹⁰ configurations, the relevant ns,np valence
            levels should be considered when evaluating effective nuclear charge for covalency comparisons.
          </p>
        </NoteBlock>

        <ImportantNote title="Important source correction">
          A boxed summary in the source says that “noble gas type cations are more polarising” and “noble gas type cations are
          more easily polarised.” Those statements conflict with the detailed discussion and the Na⁺/Cu⁺, K⁺/Ag⁺ numerical
          comparisons. The chemically consistent conclusion retained here is: pseudo-noble-gas-type cations generally produce
          stronger anion polarisation, and their d-electron clouds can also undergo stronger cation polarisation.
        </ImportantNote>

        <NoteBlock title="3. Cation polarisation, d-electrons and transition-metal trends">
          <p>
            The relatively loosely held and poorly shielding d-electron cloud of a pseudo-noble-gas cation is itself more
            deformable. Mutual polarisation therefore strengthens the effective cation–anion interaction and increases covalency.
          </p>
          <p>
            For a given oxidation state, covalent character may increase down a transition-metal group despite increasing ionic
            size. The source gives the broad contextual trend 3d &lt; 4d &lt; 5d, associated with poor shielding by increasing
            numbers of d and, for heavy elements, f electrons.
          </p>
          <p>
            Classic example: ZnCl₂ &lt; CdCl₂ &lt; HgCl₂ in covalent character, even though the source gives ionic radii
            approximately Zn²⁺ 74 pm &lt; Cd²⁺ 97 pm &lt; Hg²⁺ 110 pm. Most Hg(II) compounds have substantial covalent
            character, while hard anions such as F⁻, NO₃⁻ and ClO₄⁻ can give much more ionic behaviour.
          </p>
        </NoteBlock>

        <NoteBlock title="4. Size and charge of the anion">
          <p>A large anion has a diffuse cloud with outer electrons farther from the nucleus, so an external field distorts it more easily.</p>
          <FormulaLine math={String.raw`\mathrm{I^- > Br^- > Cl^- > F^-}\qquad(\text{polarisability})`} />
          <p>For the same cation, covalent character generally follows MI &gt; MBr &gt; MCl &gt; MF, provided structural effects do not override the trend.</p>
          <p>
            An anion carrying a higher negative charge generally has a more expanded electron cloud and stronger electron–electron
            repulsion. Broadly: larger size + larger negative charge → greater polarisability.
          </p>
        </NoteBlock>

        <NoteBlock title="5. Hard and soft character — HSAB connection">
          <p>
            Hard cations have high charge density and strong polarising ability; soft anions possess diffuse, readily deformable
            electron clouds; soft cations often possess easily deformable d-electron density. A hard, strongly polarising cation
            with a soft, highly polarisable anion can generate substantial covalency. Pseudo-noble-gas cations interacting with
            soft anions can additionally show mutual polarisation.
          </p>
        </NoteBlock>

        <NoteBlock title="Compact Fajans rule — one definitive version">
          <BulletList
            items={[
              <>Cation becomes smaller → covalent character increases.</>,
              <>Positive charge on cation becomes larger → covalent character increases.</>,
              <>Poor-shielding d/f electrons or pseudo-noble-gas configuration → covalent character increases.</>,
              <>Anion becomes larger → polarisability and covalent character increase.</>,
              <>Negative charge on anion becomes larger → polarisability and covalent character generally increase.</>,
              <><strong>Maximum covalent character:</strong> small/high-charge/pseudo-noble cation + large/highly polarisable anion.</>,
            ]}
          />
        </NoteBlock>
      </TopicBlock>

      <TopicBlock number={160} title="Melting/Boiling Points, Structures and Solubility">
        <ImportantNote title="Core property trend — not an absolute law">
          Greater covalent character often lowers melting and boiling points when an extended ionic lattice is replaced by
          lower-dimensional polymers, dimers or discrete molecular species. Diamond and SiC show why “covalent = low melting
          point” is not a universal law. BaSO₄ shows why “ionic = water-soluble” is also not universal. Complete predictions
          require lattice energy, molecular/crystal structure and thermodynamics.
        </ImportantNote>

        <NoteBlock title="Effect of cation size on melting point — Group 2 chlorides">
          <DataTable
            headers={["M²⁺", "Be²⁺", "Mg²⁺", "Ca²⁺", "Sr²⁺", "Ba²⁺"]}
            rows={[
              ["r (Å)", "0.31", "0.65", "0.99", "1.13", "1.35"],
              ["φ", "6.45", "3.07", "2.02", "1.77", "1.48"],
              ["m.p. MCl₂ (°C)", "405", "712", "772", "872", "960"],
            ]}
          />
          <p>
            Be²⁺ is smallest and has the largest φ, so BeCl₂ has substantial covalent character and a much lower melting point
            than a normal strongly ionic chloride. Down the group, φ decreases, covalency decreases and ionic character increases.
          </p>
        </NoteBlock>

        <NoteBlock title="Effect of cation charge">
          <DataTable
            headers={["Cation", "r (Å)", "φ", "m.p. MClₙ (°C)", "m.p. MBrₙ (°C)"]}
            rows={[
              ["Na⁺", "0.97", "1.03", "800", "755"],
              ["Mg²⁺", "0.65", "3.07", "712", "700"],
              ["Al³⁺", "0.50", "6.00", "180", "97.5"],
              ["Si⁴⁺", "0.40", "10.00", "57*", "—"],
              ["Ti⁴⁺", "0.68", "5.88", "137*", "—"],
            ]}
          />
          <p>*The marked values correspond to boiling-point-type data in the source table.</p>
          <FormulaLine math={String.raw`\phi\uparrow\Rightarrow\text{covalency}\uparrow\Rightarrow\text{m.p./b.p. often}\downarrow`} />
        </NoteBlock>

        <NoteBlock title="Effect of anion size">
          <DataTable
            headers={["Compound", "rX⁻ (Å)", "m.p. (°C)", "Compound", "m.p. (°C)"]}
            rows={[
              ["NaF", "1.36", "988", "LiF", "870"],
              ["NaCl", "1.81", "800", "LiCl", "613"],
              ["NaBr", "1.95", "755", "LiBr", "547"],
              ["NaI", "2.16", "651", "LiI", "446"],
              ["SnF₄", "1.36", "705*", "CaF₂", "1392"],
              ["SnCl₄", "1.81", "−33", "CaCl₂", "772"],
              ["ZnF₂", "1.36", "872", "CaBr₂", "730"],
              ["ZnCl₂", "1.81", "275", "CaI₂", "575"],
              ["AlF₃", "1.36", "1291*", "", ""],
              ["AlCl₃", "1.81", "192", "", ""],
            ]}
          />
          <p>Dominant qualitative trend: F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻ in polarisability; therefore MF → MCl → MBr → MI generally shows increasing covalency and often decreasing melting point.</p>
        </NoteBlock>

        <NoteBlock title="Structural complication — polymeric versus molecular solids">
          <p>
            Simple anion-polarisability arguments fail when compounds have fundamentally different solid-state structures.
            Source sequences:
          </p>
          <FormulaLine math={String.raw`\mathrm{AlF_3(1291)>AlCl_3(192)>AlI_3(189)>AlBr_3(98)}\ ^\circ\mathrm{C}`} />
          <FormulaLine math={String.raw`\mathrm{SnF_4(705)>SnI_4(144.5)>SnBr_4(31)>SnCl_4(-33)}\ ^\circ\mathrm{C}`} />
          <BulletList
            items={[
              <><strong>SnF₄:</strong> 2D polymeric solid; Sn approximately octahedral in SnF₆ units sharing four equatorial vertices/apices to form layers. Characteristic source Sn–F distances ≈188 and 202 pm. PbF₄ adopts a related polymeric structure.</>,
              <><strong>SnCl₄, SnBr₄, SnI₄:</strong> much more molecular; packing and intermolecular dispersion strongly influence melting points.</>,
              <>PbCl₄ has a molecular lattice; PbBr₄ and PbI₄ are unstable and undergo redox decomposition.</>,
              <>GeF₄, despite being a fluoride, has a low melting point and a molecular lattice.</>,
              <><strong>AlF₃:</strong> extended 3D ReO₃-type network of corner-sharing AlF₆ octahedra; all six vertices participate in network connectivity.</>,
              <><strong>AlCl₃:</strong> less extensively polymerised layer structure involving edge-sharing AlCl₆ octahedra; the source describes (MCl₃)ₓ, M = Al, Fe, as layer structures sharing three edges of MCl₆ octahedra.</>,
              <><strong>AlBr₃ and AlI₃:</strong> dimeric molecular solids Al₂X₆ with bridging halides.</>,
              <>FeF₃ is structurally related to AlF₃; FeCl₃ is structurally related to AlCl₃.</>,
            ]}
          />
        </NoteBlock>

        <NoteBlock title="Effect of oxidation state">
          <DataTable
            headers={["Compound", "m.p. (°C)", "b.p. (°C)", "Compound", "m.p. (°C)", "b.p. (°C)"]}
            rows={[
              ["SnCl₂", "246", "652", "TlCl", "430", "720"],
              ["SnCl₄", "−33", "114", "TlCl₃", "25", "—"],
              ["PbCl₂", "501", "950", "", "", ""],
              ["PbCl₄", "−15", "—", "", "", ""],
            ]}
          />
          <p>Increasing oxidation state increases cation charge and polarising power. Sn⁴⁺ &gt; Sn²⁺; hence SnCl₄ is far more covalent/molecular than SnCl₂ and has drastically lower melting and boiling points.</p>
        </NoteBlock>

        <NoteBlock title="Pseudo-noble-gas configuration — melting-point evidence">
          <DataTable
            headers={["Compound", "cation r (Å)", "m.p. (°C)"]}
            rows={[
              ["NaCl", "0.95", "801"],
              ["*CuCl", "0.96", "422"],
              ["KCl", "1.33", "776"],
              ["*AgCl", "1.36", "455"],
              ["CaCl₂", "0.99", "772"],
              ["*CdCl₂", "0.97", "568"],
              ["*HgCl₂", "1.10", "276"],
              ["RbCl", "1.48", "715"],
              ["*AuCl", "1.37", "170 (decomposes)"],
            ]}
          />
          <p>*Pseudo-inert/pseudo-noble-gas-type cations. Similar radii can give enormously different melting points: electronic configuration can override a simple size-only argument.</p>
        </NoteBlock>

        <NoteBlock title="Solubility and degree of covalency">
          <p>
            Covalency ↑ → solubility in polar solvents generally decreases, while solubility in less-polar/nonpolar organic
            media often increases. This is a trend, not a complete solubility law: lattice energy, solvation energy, molecular
            structure, entropy, complex formation and hydrolysis all matter.
          </p>

          <DataTable
            headers={["Silver halide", "Solubility parameter in water at 25°C"]}
            rows={[
              ["AgF", "Soluble"],
              ["AgCl", "2 × 10⁻¹⁰"],
              ["AgBr", "5 × 10⁻¹³"],
              ["AgI", "8 × 10⁻¹⁷"],
            ]}
          />
          <p>Polarisability I⁻ &gt; Br⁻ &gt; Cl⁻ &gt; F⁻ gives covalent character AgI &gt; AgBr &gt; AgCl &gt; AgF and broad aqueous-solubility order AgF &gt; AgCl &gt; AgBr &gt; AgI.</p>

          <BulletList
            items={[
              <>KI is much more soluble in alcohol than KCl because I⁻ is more polarisable and KI has greater covalent character.</>,
              <>LiCl is soluble in organic solvents such as alcohol and pyridine; higher alkali-metal chlorides are much less soluble. Li⁺ is the smallest Group 1 cation and the strongest polariser.</>,
              <>The source notes appreciable FeCl₃ solubility in ether relative to AlCl₃ and cites approximate sublimation temperatures FeCl₃ ≈177°C versus AlCl₃ ≈347°C, invoking low shielding efficiency of Fe³⁺ 3d electrons.</>,
              <>CuX, AgX and AuX (X = Cl, Br, I) are often nearly insoluble in water. Many transition-metal chlorides/acetates show appreciable solubility in CHCl₃, CH₃COCH₃ and alcohol, whereas many Ca²⁺, Mg²⁺ and Ba²⁺ salts are much less soluble in such media.</>,
            ]}
          />
        </NoteBlock>

        <NoteBlock title="Properties affected by increasing polarisation — consolidated once">
          <BulletList
            items={[
              <>Covalent character increases.</>,
              <>The purely ionic contribution to lattice energy generally decreases in structurally comparable families, although total cohesive energy need not decrease in polymeric/network covalent solids.</>,
              <>Melting point often decreases when an extended ionic lattice is replaced by molecular or less highly connected structures.</>,
              <>Hardness may decrease in simple molecularising salt series, but giant covalent networks such as diamond are extremely hard.</>,
              <>Solubility in polar solvents generally decreases; compatibility with relatively non-polar/organic solvents often increases.</>,
              <>Electrical conductivity decreases as the number and mobility of free ions decrease.</>,
              <>Colour intensity can increase when charge-transfer transitions shift to lower energy and enter the visible region.</>,
              <>Acidic character of oxides generally increases while basic character decreases as M–O bonding becomes more covalent.</>,
            ]}
          />
        </NoteBlock>
      </TopicBlock>

      <TopicBlock number={161} title="Applications of Fajans’ Rule">
        <NoteBlock title="Application 1 — predicting degree of covalency">
          <p>The source gives an empirical guideline for certain anhydrous halides, particularly chlorides, using √φ with radius in Å:</p>
          <FormulaLine math={String.raw`\sqrt{\phi}<\sim2.2\Rightarrow\text{predominantly ionic halides; often fused-state ionic conduction}`} />
          <FormulaLine math={String.raw`\sqrt{\phi}>\sim2.2\Rightarrow\text{greater covalent/nonionic character; poor fused-state ionic conductivity}`} />
          <p>This is an empirical guideline, not a universal boundary.</p>
          <p>Silicates illustrate the same principle: Si⁴⁺ has exceptionally high polarising power, so Si–O bonds contain a substantial covalent component even when silicates are conventionally written as ionic solids.</p>
        </NoteBlock>

        <NoteBlock title="Application 2 — deformation or bending of ionic solids">
          <p>Pure ionic electrostatic attraction is largely non-directional, whereas covalent bonds are directional. As covalent character increases, deformation requires distortion of specific directional bonds, so highly covalent solids can resist bending/deformation strongly.</p>
        </NoteBlock>

        <NoteBlock title="Application 3 — complex-forming power">
          <p>Increasing cationic ionic potential generally increases attraction for donor ligands:</p>
          <FormulaLine math={String.raw`\mathrm{Be^{2+}>Mg^{2+}>Ca^{2+}}\qquad(\text{complexing tendency})`} />
        </NoteBlock>

        <NoteBlock title="Application 4 — solvation and hydration">
          <FormulaLine math={String.raw`\mathrm{Li^+>Na^+>K^+}\qquad\mathrm{Be^{2+}>Mg^{2+}>Ca^{2+}}\quad(\text{hydration/solvation strength})`} />
          <p>
            Many lithium salts occur as hydrates, e.g. LiCl·2H₂O and LiClO₄·3H₂O. Because Li⁺ has high charge density,
            completely anhydrous lithium salts can be difficult to obtain. Crystal packing can also influence hydration trends.
          </p>
        </NoteBlock>

        <NoteBlock title="Application 5 — nature of oxides: basic, amphoteric or acidic">
          <FormulaLine math={String.raw`\phi\uparrow\Rightarrow\mathrm{M-O\ covalency}\uparrow\Rightarrow\text{basicity}\downarrow\Rightarrow\text{acidic character}\uparrow`} />
          <FormulaLine math={String.raw`\mathrm{Na_2O>Li_2O>MgO>BeO}\qquad(\text{basicity})`} />
          <p>Na₂O is strongly basic, while BeO is amphoteric and has much greater covalent M–O bonding.</p>
          <DataTable
            headers={["Empirical criterion", "Predicted oxide character"]}
            rows={[
              ["√φ < 2.2", "Basic oxide"],
              ["√φ ≈ 2.2–3.2", "Amphoteric oxide"],
              ["√φ > 3.2", "Acidic oxide"],
            ]}
          />
          <p>Radii are expressed in Å in this empirical source formulation; it is not an absolute law.</p>
        </NoteBlock>

        <NoteBlock title="Application 6 — hydrolysis and Brønsted acidity of hydrated metal ions">
          <p>A strongly polarising cation withdraws electron density from oxygen in coordinated water, weakening O–H bonds and making hydrogen more protonic.</p>
          <FormulaLine math={String.raw`\mathrm{[M-OH_2]^{n+}\rightarrow[M-OH]^{(n-1)+}+H^+}`} />
          <FormulaLine math={String.raw`\phi\uparrow\Rightarrow\text{hydrolysis}\uparrow\Rightarrow\text{Brønsted acidity of hydrated ion}\uparrow`} />
          <BulletList
            items={[
              <>Fe³⁺ hydrolyses much more extensively than Fe²⁺.</>,
              <>SnCl₄ hydrolyses more strongly than SnCl₂.</>,
              <>Na⁺ and K⁺ salts generally show little cation-induced hydrolysis; Be²⁺ and Al³⁺ salts undergo extensive hydrolysis.</>,
              <>AlCl₃·nH₂O cannot necessarily be converted to anhydrous AlCl₃ simply by heating; hydrolysis can lead to oxide or oxy/hydroxy species instead.</>,
            ]}
          />
        </NoteBlock>

        <NoteBlock title="Application 7 — thermal stability of carbonates and other oxyanion salts">
          <FormulaLine math={String.raw`\mathrm{MCO_3\rightarrow MO+CO_2}`} />
          <p>A strongly polarising M²⁺ distorts CO₃²⁻, favours M–O interaction and facilitates CO₂ loss. Stronger polarising power therefore usually lowers carbonate thermal stability.</p>
          <DataTable
            headers={["Metal carbonate", "r(M²⁺) (Å)", "φ(M²⁺)", "Thermal decomposition temperature (°C)"]}
            rows={[
              ["BeCO₃", "0.31", "6.5", "<100"],
              ["MgCO₃", "0.65", "3.1", "400"],
              ["CaCO₃", "0.99", "2.0", "900"],
              ["SrCO₃", "1.13", "1.77", "1290"],
              ["BaCO₃", "1.35", "1.48", "1360"],
              ["CdCO₃", "~1.0", "—", "350"],
              ["PbCO₃", "~1.0", "—", "350"],
            ]}
          />
          <p>Alkaline-earth thermal stability: BeCO₃ &lt; MgCO₃ &lt; CaCO₃ &lt; SrCO₃ &lt; BaCO₃.</p>
          <p>
            CdCO₃ and PbCO₃ decompose much more readily than a simple radius-only argument suggests; electronic-configuration
            effects, including poor shielding by inner d electrons, increase effective polarising power.
          </p>
          <p>
            The same polarisation principle extends to sulfates, nitrates, hydroxides and phosphates. Examples include
            MSO₄ → MO + SO₃ and M(OH)₂ → MO + H₂O. Gas formation gives ΔS &gt; 0, so full thermal behaviour depends on
            ΔG = ΔH − TΔS, crystal packing and related oxide-acidity/basicity ideas such as the Lux–Flood concept.
          </p>
        </NoteBlock>

        <NoteBlock title="Application 8 — diagonal relationship">
          <p>Diagonal similarities can partly be rationalised by comparable charge-density/ionic-potential effects because changes in charge, radius and electronegativity compensate one another.</p>
        </NoteBlock>

        <NoteBlock title="Applications 9–10 — melting/boiling points and solubility">
          <p>
            These are integrated into the detailed property section above rather than repeated. Increasing polarisation generally
            increases covalency and often lowers m.p./b.p.; comparable compounds often become less water-soluble as covalency rises.
            Structural connectivity, lattice enthalpy, hydration and entropy must still be checked.
          </p>
          <p>Additional qualitative source aqueous-solubility trend: HgF₂ &gt; HgCl₂ &gt; HgBr₂ &gt; HgI₂.</p>
        </NoteBlock>

        <NoteBlock title="Application 11 — colour and charge-transfer bands">
          <p>
            When a metal cation is strongly polarising and an anion is highly polarisable, electron density can be excited from
            an anion-centred orbital to a metal-centred orbital. This ligand-to-metal charge-transfer (LMCT) transition can enter
            the visible region and produce intense colour.
          </p>
          <FormulaLine math={String.raw`\text{anion-centred orbital}\rightarrow\text{metal-centred orbital}\qquad(\mathrm{LMCT})`} />
          <BulletList
            items={[
              <>PbCl₂ is white whereas PbI₂ is yellow/golden yellow. I⁻ is more polarisable; in MO language, HOMO mainly I character → LUMO mainly Pb character at lower energy.</>,
              <>SnS₂ (yellow) versus SnO₂ (white), and Sb₂S₃ (orange/coloured) versus Sb₂O₃ (white): S²⁻ is larger and more polarisable than O²⁻, lowering charge-transfer energy.</>,
            ]}
          />
          <DataTable
            headers={["Colourless / pale chloride", "Corresponding coloured iodide"]}
            rows={[
              ["HgCl₂", "HgI₂ — red"],
              ["AgCl", "AgI — yellow"],
              ["PbCl₂", "PbI₂ — golden yellow"],
              ["SnCl₄", "SnI₄ — deep red"],
              ["GeCl₄", "GeI₄ — orange"],
            ]}
          />
          <p>
            Iodine orbitals are better energy-matched to suitable acceptor orbitals on heavy-metal centres than chlorine orbitals,
            so charge-transfer excitation more readily moves into the visible region for iodides.
          </p>
          <p>
            ZnO is white whereas HgO is coloured. The heavier Hg²⁺ centre has electronic-structure effects involving poorly
            shielding inner d/f electrons, lowering oxide-to-metal charge-transfer energy.
          </p>
          <p>
            Source Group 12 sulfide comparison: ZnS (white) &lt; CdS (yellow) &lt; HgS (red). Representative source orbital
            descriptions: CdS: Cd²⁺(5s) ← S²⁻(π); HgS: Hg²⁺(6s) ← S²⁻(π); Fe₂O₃ approximately Fe³⁺(3d, e*g) ← O²⁻(π).
          </p>
          <p>
            A later source note cites HgS as black. Mineralogical HgS exists as red cinnabar and black metacinnabar, so crystal
            form matters. The conceptual point is that low-energy electronic/charge-transfer transitions become increasingly
            accessible in heavier, more covalent sulfides.
          </p>
          <p>
            Oxyanions such as CrO₄²⁻ and MnO₄⁻ can show intense O → metal LMCT. High metal oxidation state makes the metal a
            stronger electron acceptor and lowers the relevant HOMO–LUMO gap.
          </p>
        </NoteBlock>

        <NoteBlock title="Application 12 — instability or nonexistence of certain salts">
          <p><strong>PbI₄:</strong> Pb⁴⁺ is strongly polarising/oxidising and I⁻ is large, soft, highly polarisable and reducing. Polarisation reaches the redox limit:</p>
          <FormulaLine math={String.raw`\mathrm{2I^-\rightarrow I_2+2e^-}`} />
          <FormulaLine math={String.raw`\mathrm{Pb^{4+}+2e^-\rightarrow Pb^{2+}}`} />
          <FormulaLine math={String.raw`\mathrm{PbI_4\rightarrow PbI_2+I_2}`} />
          <p>Once Pb²⁺ forms, its polarising/oxidising effect is much weaker, so PbI₂ can exist.</p>
          <p><strong>FeI₃:</strong> simple FeI₃ is unstable because Fe³⁺ can oxidise I⁻ to I₂ while being reduced to Fe²⁺. FeCl₃ exists readily because Cl⁻ is less polarisable and less reducing.</p>
        </NoteBlock>
      </TopicBlock>

      <TopicBlock number={162} title="Master Comparison, Exceptions and Examination Practice">
        <DataTable
          headers={["Factor", "Predominantly ionic character", "Enhanced covalent character"]}
          rows={[
            ["Cation size", "Large", "Small"],
            ["Cation charge", "Low", "High"],
            ["Cation charge density", "Low", "High"],
            ["Cation configuration", "Simple noble-gas; effective shielding", "Pseudo-noble-gas / poor d,f shielding"],
            ["Anion size", "Small", "Large"],
            ["Anion charge", "Lower", "Higher, other factors comparable"],
            ["Anion cloud", "Compact", "Diffuse"],
            ["Polarisability", "Low", "High"],
            ["Electron-cloud distortion", "Small", "Large"],
            ["Typical halide tendency", "Fluoride more ionic", "Iodide more covalent"],
            ["Melting point in comparable simple series", "Usually higher", "Often lower"],
            ["Molten ionic conductivity", "Higher", "Lower"],
            ["Polar-solvent solubility", "Often greater when hydration is favourable", "Often reduced"],
            ["Organic-solvent compatibility", "Lower", "Often greater"],
            ["Charge-transfer colour", "Less likely/intense", "More likely/intense"],
            ["Oxide character", "More ionic/basic", "More covalent; amphoteric/acidic tendency increases"],
          ]}
        />

        <NoteBlock title="High-yield comparisons — no repeated theory">
          <BulletList
            items={[
              <>LiCl &gt; NaCl &gt; KCl in covalent character.</>,
              <>MI &gt; MBr &gt; MCl &gt; MF for a fixed cation, unless structure overrides.</>,
              <>AgI &gt; AgBr &gt; AgCl &gt; AgF in covalent character; water solubility broadly AgF &gt; AgCl &gt; AgBr &gt; AgI.</>,
              <>SnCl₄ &gt; SnCl₂ in covalent character; SnCl₄ has dramatically lower m.p./b.p.</>,
              <>CuCl is much more covalent than NaCl despite similar radii; AgCl is more covalent than KCl.</>,
              <>BeCl₂ &gt; MgCl₂ &gt; CaCl₂ &gt; SrCl₂ &gt; BaCl₂ approximately in covalent character.</>,
              <>Na₂O &gt; Li₂O &gt; MgO &gt; BeO in basicity.</>,
              <>Li⁺ &gt; Na⁺ &gt; K⁺ and Be²⁺ &gt; Mg²⁺ &gt; Ca²⁺ in hydration strength.</>,
              <>BeCO₃ &lt; MgCO₃ &lt; CaCO₃ &lt; SrCO₃ &lt; BaCO₃ in thermal stability.</>,
            ]}
          />
        </NoteBlock>

        <NoteBlock title="Apparent exception to “smaller cation = greater polarising power”">
          <DataTable
            headers={["Metal ion", "Ionic radius (Å) in additional source note"]}
            rows={[
              ["Zn²⁺", "0.60"],
              ["Cd²⁺", "0.78"],
              ["Hg²⁺", "0.96"],
            ]}
          />
          <p>
            Although radius increases Zn²⁺ &lt; Cd²⁺ &lt; Hg²⁺, chloride covalent character increases approximately
            ZnCl₂ &lt; CdCl₂ &lt; HgCl₂ because poorly shielding d electrons and heavy-atom effects override the size-only trend.
          </p>
          <p>
            The source additionally describes ZnCl₂ as essentially completely dissociated in water and HgCl₂ as only about 2%
            dissociated. These percentages are condition-dependent and are not universal constants; the intended conceptual
            point is that HgCl₂ is much more molecular/covalent and less completely ionised.
          </p>
        </NoteBlock>

        <NoteBlock title="Why PbS is black whereas PbCl₂ is white">
          <p>
            PbCl₂ has its lowest intense charge-transfer absorption mainly in the ultraviolet, so it appears white. S²⁻ is much
            more polarisable than Cl⁻; strong Pb–S covalency, extensive crystal orbital overlap and a much smaller electronic
            band gap give PbS broad visible absorption and a black appearance. Fajans’ rule explains increased polarisation/covalency;
            solid-state band structure explains the intense black colour.
          </p>
        </NoteBlock>

        <TrapCallout
          trap={<>Applying “smaller cation = more covalent” or “larger anion = lower melting point” as an absolute law.</>}
          reality={<>Compare charge, ionic radius, electronic configuration and anion size/charge, then check actual molecular/crystal structure. Bulk properties also depend on lattice enthalpy, molecularity/polymerisation, solvation, entropy, packing and band/orbital structure.</>}
        />

        <NoteBlock title="Examination Practice — source numbering preserved">
          <p className="text-white/60">
            The supplied source jumps from Q43 directly to Q49. Q44–Q48 are not present in the 17-page source and are therefore not invented here.
          </p>
        </NoteBlock>

        <PracticeQuestion
          prompt={<>
            <p>Q30. In an ionic compound A⁺X⁻, the degree of covalent bonding is greatest when:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) A⁺ and X⁻ are small</li><li>(b) A⁺ is small and X⁻ is large</li><li>(c) A⁺ and X⁻ are approximately the same size</li><li>(d) X⁻ is small and A⁺ is large</li></ul>
          </>}
          answer="(b). Small cation = high polarising power; large anion = high polarisability."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q31. In which species are the bonds non-directional?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) NCl₃</li><li>(b) RbCl</li><li>(c) BeCl₂</li><li>(d) BCl₃</li></ul>
          </>}
          answer="RbCl, the predominantly ionic solid."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q32. Which substance, when dissolved in water, forms a non-conducting solution?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) Green vitriol</li><li>(b) Chile/Indian saltpetre</li><li>(c) Alcohol</li><li>(d) Potash alum</li></ul>
          </>}
          answer="Alcohol, because it does not generate mobile ions appreciably."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q33. Which statement about LiCl and NaCl is wrong?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) LiCl has lower melting point than NaCl</li><li>(b) LiCl dissolves more in organic solvents whereas NaCl does not</li><li>(c) LiCl would ionise in water less than NaCl</li><li>(d) Fused LiCl would be less conducting than fused NaCl</li></ul>
          </>}
          answer="Best conceptual answer: (c) is misleading as written. Although LiCl has more covalent character, in ordinary dilute water it is strongly hydrated and essentially fully dissociated."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q34. Which substance has the highest melting point?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) NaCl</li><li>(b) KCl</li><li>(c) MgO</li><li>(d) BaO</li></ul>
          </>}
          answer="MgO, due to the very large lattice enthalpy arising from small, doubly charged Mg²⁺ and O²⁻ ions."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q35. The stability of an ionic crystal principally depends on:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) high electron affinity of the anion-forming species</li><li>(b) lattice energy of the crystal</li><li>(c) low ionisation energy of the cation-forming species</li><li>(d) low heat of sublimation of the cation-forming solid</li></ul>
          </>}
          answer="Lattice energy of the crystal."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q36. In which solvent does KI have the highest solubility?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) C₆H₆</li><li>(b) (CH₃)₂CO</li><li>(c) CH₃OH</li><li>(d) CCl₄</li></ul>
          </>}
          answer="CH₃OH among the listed solvents, because its high polarity provides strong ion–dipole solvation."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q37. Among LiCl, BeCl₂, MgCl₂ and RbCl, the compounds with greatest and least ionic character respectively are:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) LiCl and RbCl</li><li>(b) RbCl and BeCl₂</li><li>(c) RbCl and MgCl₂</li><li>(d) MgCl₂ and BeCl₂</li></ul>
          </>}
          answer="RbCl and BeCl₂."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q38. The compound with the highest degree of covalency is:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) NaCl</li><li>(b) MgCl₂</li><li>(c) AgCl</li><li>(d) CsCl</li></ul>
          </>}
          answer="AgCl, because Ag⁺ is a pseudo-noble-gas d¹⁰ cation and strongly polarises Cl⁻."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q39. The salt having the least solubility in water is:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) BaCl₂</li><li>(b) Ba(NO₃)₂</li><li>(c) MgSO₄</li><li>(d) BaSO₄</li></ul>
          </>}
          answer="BaSO₄."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q40. The solubility of Na₂SO₄, BeSO₄, MgSO₄ and BaSO₄ in water follows which source option?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) BaSO₄ &gt; BeSO₄ &gt; MgSO₄ &gt; Na₂SO₄</li><li>(b) Na₂SO₄ &gt; BeSO₄ &gt; MgSO₄ &gt; BaSO₄</li><li>(c) BeSO₄ &gt; MgSO₄ &gt; BaSO₄ &gt; Na₂SO₄</li><li>(d) MgSO₄ &gt; BeSO₄ &gt; Na₂SO₄ &gt; BaSO₄</li></ul>
          </>}
          answer="Source caution: sulfate solubilities depend on both lattice and hydration energies; simple Fajans reasoning alone is insufficient. BaSO₄ is unquestionably the least soluble."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q41. “Solubility of alkali-metal fluorides increases down the group.” Select the correct explanation.</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) Hydration energy increases and lattice energy decreases down the group</li><li>(b) Both decrease, but hydration energy decreases more rapidly</li><li>(c) Both decrease, but lattice energy decreases more rapidly</li><li>(d) Both increase, but hydration energy increases more rapidly</li></ul>
          </>}
          answer="(c). Both magnitudes decrease down the group, but the fall in lattice enthalpy is the dominant factor for the observed increase in solubility."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q42. Covalency is favoured by:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) smaller cation</li><li>(b) larger anion</li><li>(c) large charge on cation and anion</li><li>(d) all of these</li></ul>
          </>}
          answer="All of these."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q43. RbBr melts at about 682°C whereas NaF melts near 988°C. The principal reason is:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) molar mass of NaF is smaller</li><li>(b) RbBr is more covalent than NaF</li><li>(c) electronegativity difference argument</li><li>(d) the sum of ionic radii/internuclear distance is greater in RbBr than in NaF</li></ul>
          </>}
          answer="(d). The much larger interionic distance in RbBr lowers Coulombic lattice attraction; this is the principal lattice-energy reason."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q49. The incorrect order is:</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) Covalent character: PbCl₂ &gt; CaCl₂ &gt; SrCl₂ &gt; BaCl₂</li><li>(b) Thermal stability: PbF₄ &gt; PbCl₄ &gt; PbBr₄ &gt; PbI₄</li><li>(c) Melting point: KF &gt; KCl &gt; KBr &gt; KI</li><li>(d) Boiling point: CHCl₃ &gt; CH₃Cl &gt; CCl₄</li></ul>
          </>}
          answer="(d). Actual boiling-point order places CCl₄ above CHCl₃ and far above CH₃Cl."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q50. If CdI₂ is pink in colour, CdCl₂ will be ____ coloured.</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) yellow</li><li>(b) red</li><li>(c) blue</li><li>(d) cannot be predicted</li></ul>
          </>}
          answer="Cannot be predicted from Fajans’ rule alone. Colour depends on actual electronic transitions and crystal structure; CdCl₂ is ordinarily colourless/white."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q51. Which orders are correct?</p>
            <ul className="mt-2 list-disc pl-5"><li>I. Thermal stability: BeSO₄ &lt; MgSO₄ &lt; CaSO₄ &lt; SrSO₄ &lt; BaSO₄</li><li>II. Basic nature: ZnO &gt; BeO &gt; MgO &gt; CaO</li><li>III. Solubility in water: LiOH &gt; NaOH &gt; KOH &gt; RbOH &gt; CsOH</li><li>IV. Melting point: NaCl &gt; KCl &gt; RbCl &gt; CsCl &gt; LiCl</li></ul>
          </>}
          answer="Correct set in the source: I and IV. II reverses the normal increase of basicity toward CaO; III reverses the broad increase in hydroxide solubility down Group 1."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q52. The correct solubility order(s) are:</p>
            <ul className="mt-2 list-disc pl-5"><li>I. CaCO₃ &gt; SrCO₃ &gt; BaCO₃</li><li>II. Li₂CO₃ &lt; Na₂CO₃ &lt; K₂CO₃</li><li>III. K₂CO₃ &lt; Rb₂CO₃ &lt; Cs₂CO₃</li><li>IV. Na₂CO₃ &gt; K₂CO₃ &gt; Rb₂CO₃</li></ul>
          </>}
          answer="Intended correct set: I, II and III; IV is opposite to the usual increasing solubility of alkali-metal carbonates down the group."
        />

        <PracticeQuestion
          prompt={<>
            <p>Q53. On heating to 400–500°C, relatively unstable hydrides and carbonates decompose. Which of LiH, NaH, Li₂CO₃ and Na₂CO₃ decompose?</p>
            <ul className="mt-2 list-disc pl-5"><li>(a) I LiH</li><li>(b) II NaH</li><li>(c) III Li₂CO₃</li><li>(d) IV Na₂CO₃</li></ul>
          </>}
          answer="The source explicitly cautions that this item is strongly temperature- and data-definition-dependent. Conceptually, alkali-metal hydride stability decreases down the group, while Li₂CO₃ is anomalously less thermally stable than the other alkali carbonates. Exact decomposition at 400–500°C depends on the experimental conditions used by the source."
        />

        <ImportantNote title="Final exam principle">
          Never apply a single Fajans factor in isolation. Compare charge first, then ionic radius, electronic configuration,
          anion size/charge, and finally actual molecular or crystal structure. Fajans’ rules predict tendencies; complete physical
          properties depend on lattice enthalpy, molecularity/polymerisation, solvation, entropy, packing and band/orbital structure.
        </ImportantNote>
      </TopicBlock>

      <SummaryStrip
        items={[
          <>Small/high-charge or poorly shielded cation + large/highly polarisable anion → maximum covalent character.</>,
          <>Structure can override a simple trend: always check molecularity, polymerisation, lattice energy and solvation.</>,
          <>Extreme polarisation can become complete electron transfer/redox, explaining unstable combinations such as PbI₄ and FeI₃.</>,
        ]}
      />
    </ChemBondPartShell>
  );
}
