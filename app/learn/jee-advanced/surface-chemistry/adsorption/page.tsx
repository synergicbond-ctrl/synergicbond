import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adsorption — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Complete JEE Advanced notes on adsorption, adsorption isotherms, kinetics, applications, surface tension, Gibbs adsorption and CMC.",
};

const adsorptionHtml = `<header>
    <div class="eyebrow">JEE Advanced · Surface Chemistry</div>
    <h1>Adsorption</h1>
    <p class="lead">
      Complete notes covering theory, derivations, molecular-orbital treatment,
      adsorption isotherms, kinetics, applications, surface tension, Gibbs adsorption,
      CMC and examination practice.
    </p>
    <div class="topic-strip" aria-label="Topics">
      <span>Theory</span>
      <span>Derivations</span>
      <span>MOT</span>
      <span>Isotherms</span>
      <span>Kinetics</span>
      <span>Applications</span>
      <span>Practice</span>
    </div>
  </header>

  <div class="adsorption-figure-group" aria-label="adsorption-catalytic-cycle.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-001.jpg"
    alt="Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-002.jpg"
    alt="Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 2</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-003.jpg"
    alt="Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 3"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Diffusion, adsorption, intermediate formation, desorption and diffusion away — figure 3</figcaption>
</figure>
</div>

  <section id="active-interface">
    <h2>01 The Active Interface</h2>

    <section id="residual-forces">
      <h3>1.1 Residual Forces and Surface Energy</h3>
      <p>
        Inside the bulk of a solid or liquid every particle is surrounded on all sides.
        Attractive forces from opposite directions cancel, so the net force on a bulk
        particle is essentially zero. At the surface, however, particles have neighbours
        on only one side. The unbalanced attractive force that remains is called residual
        force. Because of these residual forces the surface is a region of higher potential
        energy and greater chemical reactivity than the bulk.
      </p>
      <p>
        Creating additional surface requires work against residual forces. For a reversible
        increase of area \\(dA\\) at constant temperature and composition the free-energy
        change is
      </p>
      <div class="equation">$$dG = \\gamma\\, dA$$</div>
      <p>
        where \\(\\gamma\\) is the surface free energy per unit area. For a pure liquid
        \\(\\gamma\\) is numerically equal to the surface tension. Any spontaneous process
        that reduces high-energy surface area or that satisfies residual bonding
        (for example by adsorbing foreign molecules) is thermodynamically favoured.
      </p>
      <aside class="key-idea">
        <strong>Key Idea</strong>
        Adsorption, wetting and many catalytic events are driven by the system’s tendency
        to lower its surface free energy.
      </aside>
      <div class="adsorption-figure-group" aria-label="residual-forces-surface-energy.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-004.jpg"
    alt="Bulk forces balanced and surface residual forces — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bulk forces balanced and surface residual forces — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-005.jpg"
    alt="Bulk forces balanced and surface residual forces — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bulk forces balanced and surface residual forces — figure 2</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-006.jpg"
    alt="Bulk forces balanced and surface residual forces — figure 3"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bulk forces balanced and surface residual forces — figure 3</figcaption>
</figure>
</div>
    </section>

    <section id="specific-surface-area">
      <h3>1.2 Specific Surface Area</h3>
      <p>
        For a given mass the fraction of atoms that lie at the surface rises rapidly as
        particle size falls. Internal porosity multiplies the accessible area still further.
        Two elementary geometric results are used constantly:
      </p>
      <p><strong>Cube of edge \\(L\\) and density \\(\\rho\\):</strong></p>
      <div class="equation">$$a_s = \\frac{6}{\\rho L}$$</div>
      <p><strong>Sphere of diameter \\(d\\):</strong></p>
      <div class="equation">$$a_s = \\frac{6}{\\rho d}$$</div>
      <p>
        Activated charcoal and commercial catalysts routinely possess specific surface
        areas of several hundred \\(\\mathrm{m^2\\,g^{-1}}\\) precisely because they are both
        finely divided and highly porous.
      </p>
    </section>

    <section id="adsorption-absorption-sorption">
      <h3>1.3 Adsorption, Absorption and Sorption</h3>
      <dl class="definition-list">
        <div class="definition-card">
          <dt>Adsorption</dt>
          <dd>
            Adsorption is the accumulation of a substance at the interface between two
            phases. The concentration of the adsorbate is higher at the surface than in
            the adjoining bulk phases.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Absorption</dt>
          <dd>
            Absorption is the penetration of a substance into the bulk of a solid or
            liquid so that the concentration is essentially uniform throughout the volume.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Sorption</dt>
          <dd>
            Sorption is a general term used when both processes may occur or when the
            experimental distinction is unclear.
          </dd>
        </div>
      </dl>
      <div class="adsorption-figure-group" aria-label="adsorption-absorption-sorption.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-007.jpg"
    alt="Surface accumulation, bulk penetration and combined sorption — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Surface accumulation, bulk penetration and combined sorption — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-008.jpg"
    alt="Surface accumulation, bulk penetration and combined sorption — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Surface accumulation, bulk penetration and combined sorption — figure 2</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-009.jpg"
    alt="Surface accumulation, bulk penetration and combined sorption — figure 3"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Surface accumulation, bulk penetration and combined sorption — figure 3</figcaption>
</figure>
</div>
      <h4>Classic illustrations</h4>
      <ul>
        <li>Chalk retains ink colour on its surface \\(\\rightarrow\\) adsorption.</li>
        <li>Anhydrous calcium chloride takes up water vapour into its lattice \\(\\rightarrow\\) absorption.</li>
        <li>Silica gel removes moisture from air by adsorption in its pores.</li>
      </ul>
    </section>

    <section id="thermodynamics">
      <h3>1.4 Thermodynamics of Spontaneous Adsorption</h3>
      <p>The Gibbs equation for a process at constant temperature is</p>
      <div class="equation">$$\\Delta G = \\Delta H - T\\Delta S$$</div>
      <p>
        When a molecule is adsorbed it loses translational freedom, so the entropy change
        \\(\\Delta S\\) is negative. For the free-energy change \\(\\Delta G\\) to be negative
        the enthalpy change \\(\\Delta H\\) must therefore be negative and large enough in
        magnitude to overcome the unfavourable \\(-T\\Delta S\\) term. In other words,
        adsorption is always exothermic. Raising the temperature makes the
        \\(-T\\Delta S\\) contribution more positive and eventually reverses the process
        (desorption). This is why physisorption is favoured by low temperature.
      </p>
      <aside class="jee-trap">
        <strong>JEE Trap</strong>
        Adsorption is never endothermic under ordinary conditions. Claims that
        chemisorption can be endothermic are incorrect for the standard definition of the process.
      </aside>
    </section>

    <section id="everyday-industrial">
      <h3>1.5 Everyday and Industrial Illustrations</h3>
      <ul>
        <li>Activated charcoal in gas masks adsorbs toxic gases.</li>
        <li>Animal charcoal decolourises sugar syrup and dye solutions.</li>
        <li>Collectors adsorbed on ore particles make them hydrophobic in froth flotation.</li>
        <li>Differential adsorption on a stationary phase is the basis of chromatography.</li>
        <li>Silica gel and molecular sieves adsorb water vapour for drying.</li>
        <li>Reactants must adsorb on a solid catalyst before a heterogeneous catalytic reaction can occur.</li>
      </ul>
    </section>
  </section>

  <section id="physisorption-chemisorption">
    <h2>02 Physisorption and Chemisorption</h2>

    <section id="fundamental-distinction">
      <h3>2.1 Fundamental Distinction</h3>
      <p>
        If the residual surface forces hold the adsorbate by weak van der Waals
        interactions the process is physisorption (physical adsorption). If a genuine
        chemical bond (covalent or ionic) is formed between adsorbate and surface atoms
        the process is chemisorption (chemical adsorption). The two limiting cases differ
        in enthalpy, specificity, number of layers, reversibility and activation energy.
      </p>
      <dl class="comparison" aria-label="Physisorption and chemisorption comparison">
        <div class="comparison-row">
          <dt>Bonding force</dt>
          <dd><strong>Physisorption:</strong> van der Waals</dd>
          <dd><strong>Chemisorption:</strong> Chemical (covalent/ionic)</dd>
        </div>
        <div class="comparison-row">
          <dt>Enthalpy change</dt>
          <dd><strong>Physisorption:</strong> \\(20-40\\ \\mathrm{kJ\\,mol^{-1}}\\)</dd>
          <dd><strong>Chemisorption:</strong> \\(80-240\\ \\mathrm{kJ\\,mol^{-1}}\\) or higher</dd>
        </div>
        <div class="comparison-row">
          <dt>Specificity</dt>
          <dd><strong>Physisorption:</strong> Non-specific</dd>
          <dd><strong>Chemisorption:</strong> Highly specific</dd>
        </div>
        <div class="comparison-row">
          <dt>Layers</dt>
          <dd><strong>Physisorption:</strong> Multilayer possible</dd>
          <dd><strong>Chemisorption:</strong> Monolayer only</dd>
        </div>
        <div class="comparison-row">
          <dt>Reversibility</dt>
          <dd><strong>Physisorption:</strong> Easily reversible</dd>
          <dd><strong>Chemisorption:</strong> Often irreversible</dd>
        </div>
        <div class="comparison-row">
          <dt>Activation energy</dt>
          <dd><strong>Physisorption:</strong> \\(\\approx 0\\)</dd>
          <dd><strong>Chemisorption:</strong> Often appreciable</dd>
        </div>
        <div class="comparison-row">
          <dt>Temperature dependence</dt>
          <dd><strong>Physisorption:</strong> Decreases with \\(\\uparrow T\\)</dd>
          <dd><strong>Chemisorption:</strong> May rise then fall</dd>
        </div>
      </dl>
      <div class="adsorption-figure-group" aria-label="physisorption-vs-chemisorption.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-010.jpg"
    alt="Bonding, enthalpy, reversibility and layering behaviour — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bonding, enthalpy, reversibility and layering behaviour — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-011.jpg"
    alt="Bonding, enthalpy, reversibility and layering behaviour — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bonding, enthalpy, reversibility and layering behaviour — figure 2</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-012.jpg"
    alt="Bonding, enthalpy, reversibility and layering behaviour — figure 3"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Bonding, enthalpy, reversibility and layering behaviour — figure 3</figcaption>
</figure>
</div>
    </section>

    <section id="potential-energy-curves">
      <h3>2.2 Potential-Energy Curves</h3>
      <p>
        A plot of potential energy of the adsorbate-surface system against the distance
        of the adsorbate from the surface reveals two characteristic features. At larger
        separation a shallow minimum appears; this is the physisorption well produced by
        van der Waals forces. At shorter separation a deeper minimum appears; this is the
        chemisorption well produced by chemical-bond formation. Between the two wells an
        activation barrier may exist. A molecule that first lands in the physisorption well
        must acquire enough energy to cross the barrier before it can enter the chemisorption well.
      </p>
      <div class="adsorption-figure-group" aria-label="adsorption-potential-energy-curves.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-013.jpg"
    alt="Shallow physisorption well, deeper chemisorption well and activation barrier — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Shallow physisorption well, deeper chemisorption well and activation barrier — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-014.jpg"
    alt="Shallow physisorption well, deeper chemisorption well and activation barrier — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Shallow physisorption well, deeper chemisorption well and activation barrier — figure 2</figcaption>
</figure>
</div>
      <aside class="key-idea">
        <strong>Key Idea</strong>
        The depth of a well measures thermodynamic stability. The height of the barrier
        that must be crossed to reach that well measures kinetic accessibility. The two
        quantities are independent.
      </aside>
    </section>

    <section id="activated-chemisorption">
      <h3>2.3 Activated Chemisorption and Dissociative Adsorption</h3>
      <p>
        Many molecules do not form a chemical bond with the surface immediately on collision.
        They first occupy a weakly bound precursor state and must then surmount an activation
        barrier. Because the barrier can be crossed more easily at higher temperature, the
        observed amount of chemisorption may increase with rising temperature even though
        the final chemisorbed state is lower in energy. At still higher temperature desorption
        begins to dominate and coverage falls again. The resulting isobar therefore shows a
        characteristic rise-and-fall shape.
      </p>
      <p>
        When a diatomic molecule such as \\(\\mathrm{H_2}\\) adsorbs dissociatively each atom
        occupies a separate surface site:
      </p>
      <div class="equation">$$\\mathrm{H_2(g) + 2* \\rightleftharpoons 2H*}$$</div>
      <p>
        The equilibrium expression then involves the square root of pressure rather than
        pressure itself. The Langmuir isotherm for dissociative adsorption becomes
      </p>
      <div class="equation">$$\\theta = \\frac{\\sqrt{KP}}{1+\\sqrt{KP}}$$</div>
      <aside class="jee-trap">
        <strong>JEE Trap</strong>
        The statement “chemisorption increases with temperature” is incomplete.
        Temperature may accelerate the activated step, but equilibrium coverage ultimately
        declines once desorption becomes rapid.
      </aside>
    </section>

    <section id="mo-chemisorption">
      <h3>2.4 Molecular-Orbital Description of Chemisorption</h3>
      <p>
        A chemical bond between an adsorbate and a metal surface arises from the mixing
        of adsorbate molecular orbitals with the electronic states of the solid (the metal
        \\(d\\)-band in particular). Two complementary interactions are decisive:
      </p>
      <dl class="definition-list">
        <div class="definition-card">
          <dt>Donation</dt>
          <dd>
            An occupied adsorbate orbital (for example the \\(5\\sigma\\) orbital of CO)
            donates electron density into empty or partially empty metal states. The
            resulting bonding combination lies lower in energy and stabilises adsorption.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Back-donation</dt>
          <dd>
            Occupied metal \\(d\\)-states transfer electron density into a vacant antibonding
            orbital of the adsorbate (for example the \\(2\\pi^*\\) orbital of CO). This
            strengthens the metal-adsorbate bond while simultaneously weakening an internal
            bond of the adsorbate.
          </dd>
        </div>
      </dl>
      <p>
        The two processes reinforce each other: donation makes the adsorbate a better
        \\(\\pi\\)-acceptor and back-donation makes it a better \\(\\sigma\\)-donor. The net
        result is a strong surface bond and an activated (lengthened or even cleaved)
        intramolecular bond. This is the orbital origin of catalytic activation.
      </p>
      <aside class="key-idea">
        <strong>Key Idea</strong>
        Electron count is as important as orbital overlap. Filling an adsorbate-metal
        antibonding combination can weaken or reverse the surface bond even when geometric
        overlap is large.
      </aside>
      <h4>Illustrative cases</h4>
      <ul>
        <li>
          \\(\\mathrm{H_2}\\) on nickel - donation from the H-H \\(\\sigma\\) orbital into
          metal states plus back-donation into the \\(\\sigma^*\\) orbital lengthens and
          ultimately breaks the H-H bond.
        </li>
        <li>
          CO on transition metals - synergic \\(5\\sigma\\) donation and \\(2\\pi^*\\)
          back-donation; greater back-donation lowers the C-O stretching frequency observed
          by infrared spectroscopy.
        </li>
        <li>
          \\(\\mathrm{N_2}\\) on iron (Haber-Bosch) - the very strong \\(\\mathrm{N\\equiv N}\\)
          triple bond is activated by a combination of donation and back-donation;
          promoters (\\(\\mathrm{K, Al_2O_3}\\)) modify the surface electron density and
          improve the rate.
        </li>
        <li>
          \\(\\mathrm{O_2}\\) on metals - already possesses electrons in antibonding
          \\(\\pi^*\\) orbitals; additional back-donation from the metal further weakens
          the O-O bond and facilitates dissociation.
        </li>
      </ul>
    </section>

    <section id="factors">
      <h3>2.5 Factors that Control the Extent of Adsorption</h3>
      <dl class="definition-list">
        <div class="definition-card">
          <dt>Nature of the adsorbate</dt>
          <dd>
            For physisorption the most important factors are polarisability and critical
            temperature. Gases with high critical temperature are more easily liquefied
            and are adsorbed more strongly.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Nature of the adsorbent</dt>
          <dd>Specific surface area, porosity and the chemical identity of the surface sites.</dd>
        </div>
        <div class="definition-card">
          <dt>Temperature</dt>
          <dd>Physisorption always decreases with rising temperature; chemisorption may pass through a maximum.</dd>
        </div>
        <div class="definition-card">
          <dt>Pressure (or concentration)</dt>
          <dd>Adsorption increases with pressure until a limiting monolayer or multilayer value is approached.</dd>
        </div>
        <div class="definition-card">
          <dt>Activation of the adsorbent</dt>
          <dd>Heating under vacuum or in steam removes pre-adsorbed species and opens pores, increasing capacity.</dd>
        </div>
      </dl>
    </section>
  </section>

  <section id="equilibria-isotherms">
    <h2>03 Adsorption Equilibria and Isotherms</h2>

    <section id="isotherm-isobar-isostere">
      <h3>3.1 Isotherm, Isobar and Isostere</h3>
      <dl class="definition-list">
        <div class="definition-card">
          <dt>Adsorption isotherm</dt>
          <dd>
            A plot of the amount adsorbed versus equilibrium pressure (or concentration)
            at constant temperature. It reveals capacity and the approach to saturation.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Adsorption isobar</dt>
          <dd>
            A plot of amount adsorbed versus temperature at constant pressure. It
            distinguishes ordinary physisorption (monotonic decrease) from activated
            chemisorption (rise-and-fall).
          </dd>
        </div>
        <div class="definition-card">
          <dt>Adsorption isostere</dt>
          <dd>
            A plot of equilibrium pressure versus temperature at constant surface coverage.
            Its slope yields the isosteric heat of adsorption.
          </dd>
        </div>
      </dl>
      <aside class="key-idea">
        <strong>Key Idea</strong>
        Every isotherm equation is written in terms of the equilibrium pressure or
        concentration after adsorption has occurred - never the initial value.
      </aside>
    </section>

    <section id="freundlich">
      <h3>3.2 Freundlich Isotherm</h3>
      <p>On energetically heterogeneous surfaces the empirical relation</p>
      <div class="equation">$$\\frac{x}{m}=kP^{1/n}\\qquad \\left(0&lt;\\frac{1}{n}\\le 1\\right)$$</div>
      <p>often describes the data over a limited pressure range. Taking logarithms produces the linear working equation</p>
      <div class="equation">$$\\log\\!\\left(\\frac{x}{m}\\right)=\\log k+\\frac{1}{n}\\log P$$</div>
      <p>
        A plot of \\(\\log(x/m)\\) against \\(\\log P\\) is a straight line of slope \\(1/n\\)
        and intercept \\(\\log k\\). The equation has no true finite saturation limit; when
        \\(1/n\\) approaches zero the amount adsorbed becomes almost independent of pressure.
      </p>
      <div class="adsorption-figure-group" aria-label="freundlich-isotherm.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-015.jpg"
    alt="Freundlich adsorption isotherms at different temperatures — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Freundlich adsorption isotherms at different temperatures — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-016.jpg"
    alt="Freundlich adsorption isotherms at different temperatures — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Freundlich adsorption isotherms at different temperatures — figure 2</figcaption>
</figure>
</div>
      <aside class="jee-trap">
        <strong>JEE Trap</strong>
        The linear plot appears only after the logarithms are taken. A direct plot of
        \\(x/m\\) versus \\(P\\) is curved.
      </aside>
      <div class="worked-example">
        <strong>Worked Example</strong>
        <p>Slope of \\(\\log q\\) versus \\(\\log P\\) is \\(0.40\\) and intercept is \\(0.60\\) (common logs).</p>
        <div class="equation">$$\\frac{1}{n}=0.40\\Rightarrow n=2.50$$</div>
        <div class="equation">$$\\log k=0.60\\Rightarrow k=10^{0.60}=3.98$$</div>
      </div>
    </section>

    <section id="langmuir">
      <h3>3.3 Langmuir Isotherm - Complete Derivation</h3>
      <h4>Assumptions of the ideal Langmuir model</h4>
      <ul>
        <li>The surface consists of a fixed number of identical, independent sites.</li>
        <li>Each site can hold at most one adsorbate molecule (monolayer maximum).</li>
        <li>Adsorbed molecules do not interact with one another.</li>
        <li>The adsorption energy is independent of coverage.</li>
        <li>Adsorption and desorption are in dynamic equilibrium.</li>
      </ul>
      <p>
        Let \\(\\theta\\) be the fraction of sites occupied. The rate of adsorption is
        proportional to the gas pressure and to the fraction of vacant sites:
      </p>
      <div class="equation">$$r_a=k_aP(1-\\theta)$$</div>
      <p>The rate of desorption is proportional to the fraction of occupied sites:</p>
      <div class="equation">$$r_d=k_d\\theta$$</div>
      <p>At equilibrium the two rates are equal:</p>
      <div class="equation">$$k_aP(1-\\theta)=k_d\\theta$$</div>
      <p>Rearrangement immediately gives</p>
      <div class="equation">$$\\theta=\\frac{KP}{1+KP}\\qquad \\text{where }K=\\frac{k_a}{k_d}$$</div>
      <p>If \\(q\\) is the amount adsorbed and \\(q_m\\) is the monolayer capacity,</p>
      <div class="equation">$$q=q_m\\theta=\\frac{q_mKP}{1+KP}$$</div>
      <p>The most useful linear form is obtained by taking the reciprocal and rearranging:</p>
      <div class="equation">$$\\frac{P}{q}=\\frac{1}{q_mK}+\\frac{1}{q_m}P$$</div>
      <p>
        A graph of \\(P/q\\) versus \\(P\\) is therefore a straight line whose slope equals
        \\(1/q_m\\) and whose intercept equals \\(1/(q_mK)\\). From the slope and intercept
        both the capacity \\(q_m\\) and the affinity constant \\(K\\) are obtained.
      </p>
      <h4>Limiting behaviour</h4>
      <ul>
        <li>Low pressure \\((KP\\ll1)\\): \\(\\theta\\approx KP,\\ q\\approx q_mKP\\) - first-order in pressure (Henry region).</li>
        <li>High pressure \\((KP\\gg1)\\): \\(\\theta\\to1,\\ q\\to q_m\\) - zero-order; the surface is saturated.</li>
      </ul>
      <aside class="jee-trap">
        <strong>JEE Trap</strong>
        Zero-order at high pressure is a macroscopic statement about the net rate of uptake.
        Individual adsorption and desorption events continue; the rates simply become equal.
      </aside>
      <div class="worked-example">
        <strong>Worked Example</strong>
        <p>Plot of \\(P/q\\) versus \\(P\\) has slope \\(0.050\\ \\mathrm{g\\,mmol^{-1}}\\) and intercept \\(0.020\\ \\mathrm{bar\\,g\\,mmol^{-1}}\\).</p>
        <div class="equation">$$\\frac{1}{q_m}=0.050\\Rightarrow q_m=20\\ \\mathrm{mmol\\,g^{-1}}$$</div>
        <div class="equation">$$\\frac{1}{q_mK}=0.020\\Rightarrow K=2.5\\ \\mathrm{bar^{-1}}$$</div>
      </div>
    </section>

    <section id="dissociative-langmuir">
      <h3>3.4 Dissociative Langmuir Isotherm</h3>
      <p>
        When a molecule adsorbs with dissociation into two fragments that each occupy one
        site, the rate of adsorption becomes proportional to the square of the vacant-site
        fraction and the equilibrium expression changes. Starting from
      </p>
      <div class="equation">$$r_a=k_aP(1-\\theta)^2\\qquad r_d=k_d\\theta^2$$</div>
      <p>and setting \\(r_a=r_d\\) yields</p>
      <div class="equation">$$\\theta=\\frac{\\sqrt{KP}}{1+\\sqrt{KP}}$$</div>
      <p>
        The linear form used for graphing is correspondingly different; the appropriate
        plot is usually \\(\\sqrt{P}/q\\) versus \\(\\sqrt{P}\\).
      </p>
    </section>

    <section id="bet">
      <h3>3.5 BET Multilayer Theory</h3>
      <p>
        Physical adsorption rarely stops at a single layer. Molecules continue to adsorb
        on top of already adsorbed molecules. The BET model treats the first layer with a
        characteristic adsorption enthalpy and all higher layers with the enthalpy of
        liquefaction of the adsorbate. The resulting linear equation is
      </p>
      <div class="equation">$$\\frac{P}{n(P_0-P)}=\\frac{1}{n_mC}+\\frac{C-1}{n_mC}\\left(\\frac{P}{P_0}\\right)$$</div>
      <p>
        where \\(n\\) is the amount adsorbed, \\(n_m\\) is the monolayer capacity, \\(P_0\\)
        is the saturation vapour pressure and \\(C\\) is a constant related to the
        difference between the first-layer and liquefaction enthalpies. A plot of the
        left-hand side against \\(P/P_0\\) is linear in the relative-pressure window
        \\(0.05-0.35\\). From the slope and intercept one obtains \\(n_m\\) and hence the
        specific surface area:
      </p>
      <div class="equation">$$a_s=n_mN_A\\sigma$$</div>
      <p>where \\(\\sigma\\) is the area occupied by one adsorbate molecule.</p>
      <p>
        In mesoporous solids the adsorption and desorption paths often differ, producing
        a hysteresis loop. The loop is caused by capillary condensation inside pores and
        carries information about pore-size distribution.
      </p>
    </section>

    <section id="isosteric-heat">
      <h3>3.6 Isosteric Heat of Adsorption</h3>
      <p>
        At fixed coverage the equilibrium pressure is a function of temperature. The
        Clausius-Clapeyron-type relation
      </p>
      <div class="equation">$$\\left(\\frac{\\partial\\ln P}{\\partial T}\\right)_\\theta=\\frac{q_{st}}{RT^2}$$</div>
      <p>
        defines the isosteric heat \\(q_{st}=-\\Delta H_{\\mathrm{ads}}\\). Integration
        between two temperatures at the same coverage gives the practical working equation
      </p>
      <div class="equation">$$\\ln\\left(\\frac{P_2}{P_1}\\right)=-\\frac{q_{st}}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)$$</div>
      <p>
        If \\(q_{st}\\) falls markedly with increasing coverage the surface is energetically
        heterogeneous or lateral interactions are becoming important.
      </p>
      <div class="worked-example">
        <strong>Worked Example</strong>
        <p>At the same coverage, \\(P=1.00\\ \\mathrm{bar}\\) at \\(300\\ \\mathrm{K}\\) and \\(P=2.50\\ \\mathrm{bar}\\) at \\(330\\ \\mathrm{K}\\).</p>
        <div class="equation">$$\\ln(2.5)=-\\frac{\\Delta H}{8.314}\\left(\\frac{1}{330}-\\frac{1}{300}\\right)$$</div>
        <div class="equation">$$\\Delta H_{\\mathrm{ads}}\\approx-27.4\\ \\mathrm{kJ\\,mol^{-1}}$$</div>
      </div>
    </section>
  </section>

  <section id="kinetics">
    <h2>04 Kinetics and Residence Time</h2>

    <section id="elementary-langmuir-kinetics">
      <h3>4.1 Elementary Langmuir Kinetics</h3>
      <p>
        The elementary rates already used to derive the isotherm also govern the approach
        to equilibrium. The net rate of adsorption is
      </p>
      <div class="equation">$$\\frac{d\\theta}{dt}=k_aP(1-\\theta)-k_d\\theta$$</div>
      <p>Near equilibrium the relaxation time of the surface is controlled by the desorption rate constant.</p>
    </section>

    <section id="residence-time">
      <h3>4.2 Mean Residence Time</h3>
      <p>The desorption rate constant is written in Arrhenius form</p>
      <div class="equation">$$k_d=A\\exp\\left(-\\frac{E_d}{RT}\\right)$$</div>
      <p>The mean time a molecule spends on the surface before desorbing is the reciprocal of \\(k_d\\):</p>
      <div class="equation">$$\\tau=\\frac{1}{k_d}=A^{-1}\\exp\\left(\\frac{E_d}{RT}\\right)$$</div>
      <p>
        The pre-exponential factor \\(A\\) is typically of order \\(10^{13}\\ \\mathrm{s^{-1}}\\)
        (a molecular vibrational frequency). Because \\(\\tau\\) depends exponentially on
        \\(E_d/T\\), modest changes in barrier height or temperature produce large changes
        in residence time. In catalysis the molecule must remain long enough to react yet
        not so long that the site is permanently blocked.
      </p>
      <div class="worked-example">
        <strong>Worked Example</strong>
        <p>\\(A=1.0\\times10^{13}\\ \\mathrm{s^{-1}},\\ E_d=100\\ \\mathrm{kJ\\,mol^{-1}},\\ T=500\\ \\mathrm{K}\\).</p>
        <div class="equation">$$\\tau=10^{-13}\\exp\\left(\\frac{100000}{8.314\\times500}\\right)\\approx2.8\\times10^{-3}\\ \\mathrm{s}$$</div>
      </div>
    </section>

    <section id="adsorption-solution">
      <h3>4.3 Adsorption from Solution</h3>
      <p>
        When an adsorbent is shaken with a solution of volume \\(V\\) and initial
        concentration \\(C_0\\), and the equilibrium concentration is \\(C_e\\), the amount
        adsorbed per unit mass of adsorbent is given by mass balance:
      </p>
      <div class="equation">$$\\frac{x}{m}=\\frac{(C_0-C_e)V}{m}$$</div>
      <p>This quantity is plotted against \\(C_e\\) to construct a solution isotherm.</p>
      <div class="worked-example">
        <strong>Worked Example</strong>
        <p>\\(1.00\\ \\mathrm{g}\\) carbon + \\(250\\ \\mathrm{mL}\\) of \\(0.080\\ \\mathrm{M}\\) dye; \\(C_e=0.020\\ \\mathrm{M}\\).</p>
        <div class="equation">$$\\frac{x}{m}=\\frac{(0.080-0.020)\\times0.250}{1.00}=0.015\\ \\mathrm{mol\\,g^{-1}}$$</div>
      </div>
    </section>

    <section id="activation-adsorbents">
      <h3>4.4 Activation of Adsorbents</h3>
      <p>
        Commercial adsorbents are heated under vacuum or in a stream of steam or air.
        The treatment desorbs previously adsorbed molecules, opens blocked pores and can
        create additional surface area. Excessive activation, however, may collapse the
        pore structure and reduce capacity.
      </p>
    </section>
  </section>

  <section id="applications">
    <h2>05 Applications</h2>
    <div class="application-list">
      <div class="application-card"><h4>Gas masks and air-purification filters</h4><p>Activated charcoal adsorbs toxic vapours.</p></div>
      <div class="application-card"><h4>Decolourisation</h4><p>Decolourisation of sugar, oils and industrial waste streams.</p></div>
      <div class="application-card"><h4>Chromatography</h4><p>Chromatographic separations (column, thin-layer, HPLC, gas chromatography).</p></div>
      <div class="application-card"><h4>Froth flotation</h4><p>Froth flotation of ores - selective adsorption of collectors.</p></div>
      <div class="application-card"><h4>Heterogeneous catalysis</h4><p>Every catalytic cycle begins with adsorption.</p></div>
      <div class="application-card"><h4>Medicinal charcoal</h4><p>Medicinal charcoal for gastrointestinal toxin adsorption.</p></div>
      <div class="application-card"><h4>Humidity control</h4><p>Humidity control and drying agents (silica gel, zeolites).</p></div>
      <div class="application-card"><h4>Adsorption indicators</h4><p>Adsorption indicators in volumetric analysis.</p></div>
    </div>
  </section>

  <section id="practice">
    <h2>06 Practice Problems with Solutions</h2>

    <section id="numerical-problems">
      <h3>6.1 Numerical Problems</h3>
      <div class="question"><strong>Q1.</strong> 200 mL of 0.2 M acetic acid is shaken with 0.6 g charcoal. Final concentration = 0.1 M. Mass of acetic acid adsorbed per gram of carbon?<p class="answer">Moles adsorbed = 0.020 \\(\\rightarrow\\) mass = 1.20 g \\(\\rightarrow\\) per gram = 2.0 g. Answer: 2.0 g</p></div>
      <div class="question"><strong>Q2.</strong> CO₂ on charcoal follows Freundlich. Mass adsorbed becomes 64 times when pressure is doubled. Find \\(n\\) (report \\(n\\times100\\), nearest integer).<p class="answer">\\(2^{1/n}=64=2^6\\Rightarrow1/n=6\\Rightarrow n=1/6\\approx0.1667\\rightarrow17\\). Answer: 17</p></div>
      <div class="question"><strong>Q3.</strong> 100 mL of 0.5 M acetic acid on 1 g charcoal forms a monolayer. Unadsorbed acid requires 40 mL of 1 M NaOH. Surface area = 150 m² g⁻¹, \\(N_A=6.0\\times10^{23}\\). Area per molecule = \\(P\\times10^{-23}\\ \\mathrm{m^2}\\). Find \\(P\\).<p class="answer">Moles adsorbed = 0.010 \\(\\rightarrow\\) molecules = \\(6.0\\times10^{21}\\) \\(\\rightarrow\\) area/molecule = \\(2.5\\times10^{-20}\\ \\mathrm{m^2}=25\\times10^{-23}\\ \\mathrm{m^2}\\). Answer: 25</p></div>
      <div class="question"><strong>Q4.</strong> Langmuir plot of \\(P/q\\) vs \\(P\\) has slope \\(0.050\\ \\mathrm{g\\,mmol^{-1}}\\) and intercept \\(0.020\\ \\mathrm{bar\\,g\\,mmol^{-1}}\\). Find \\(q_m\\) and \\(K\\).<p class="answer">\\(q_m=20\\ \\mathrm{mmol\\,g^{-1}},\\ K=2.5\\ \\mathrm{bar^{-1}}\\).</p></div>
      <div class="question"><strong>Q5.</strong> Same coverage: 1.00 bar at 300 K, 2.50 bar at 330 K. Estimate \\(\\Delta H_{\\mathrm{ads}}\\).<p class="answer">\\(\\Delta H_{\\mathrm{ads}}\\approx-27.4\\ \\mathrm{kJ\\,mol^{-1}}\\).</p></div>
      <div class="question"><strong>Q6.</strong> \\(A=10^{13}\\ \\mathrm{s^{-1}},\\ E_d=100\\ \\mathrm{kJ\\,mol^{-1}},\\ T=500\\ \\mathrm{K}\\). Find residence time.<p class="answer">\\(\\tau\\approx2.8\\ \\mathrm{ms}\\).</p></div>
      <div class="question"><strong>Q7.</strong> 1 g carbon + 250 mL of 0.080 M dye; \\(C_e=0.020\\ \\mathrm{M}\\). Find \\(x/m\\).<p class="answer">\\(0.015\\ \\mathrm{mol\\,g^{-1}}\\).</p></div>
      <div class="question"><strong>Q8.</strong> Non-porous solid, density \\(2.0\\ \\mathrm{g\\,cm^{-3}}\\), uniform spheres of diameter \\(1.0\\ \\mu\\mathrm{m}\\). External specific surface area?<p class="answer">\\(a_s=6/(\\rho d)=3.0\\ \\mathrm{m^2\\,g^{-1}}\\).</p></div>
    </section>

    <section id="conceptual-questions">
      <h3>6.2 Conceptual Questions</h3>
      <div class="question"><strong>Q9.</strong> Which statement is incorrect for physisorption? (a) reversible (b) increases with temperature (c) spontaneous (d) \\(\\Delta H\\) and \\(\\Delta S\\) both negative.<p class="answer">\\(\\rightarrow\\) (b)</p></div>
      <div class="question"><strong>Q10.</strong> Value of \\(1/n\\) in Freundlich isotherm is usually between 0 and 1.<p class="answer">\\(\\rightarrow\\) True</p></div>
      <div class="question"><strong>Q11.</strong> Gas with lowest critical temperature shows least physisorption on charcoal.<p class="answer">\\(\\rightarrow\\) True (He)</p></div>
      <div class="question"><strong>Q12.</strong> Correct statements: (a) adsorption always exothermic (b) physisorption may become chemisorption at high \\(T\\) (c) physisorption increases with \\(T\\) (d) chemisorption more exothermic but slow (high \\(E_a\\)).<p class="answer">\\(\\rightarrow\\) (a)(b)(d)</p></div>
    </section>
  </section>

  <section id="formula-sheet">
    <h2>07 Formula Sheet and Memory Map</h2>
    <div class="formula-sheet">
      <div class="equation">$$\\theta=\\frac{KP}{1+KP}\\qquad q=\\frac{q_mKP}{1+KP}$$</div>
      <div class="equation">$$\\frac{P}{q}=\\frac{1}{q_mK}+\\frac{1}{q_m}P$$</div>
      <div class="equation">$$\\theta_{\\mathrm{diss}}=\\frac{\\sqrt{KP}}{1+\\sqrt{KP}}$$</div>
      <div class="equation">$$\\frac{x}{m}=kP^{1/n}\\qquad \\log\\left(\\frac{x}{m}\\right)=\\log k+\\frac{1}{n}\\log P$$</div>
      <div class="equation">$$\\frac{P}{n(P_0-P)}=\\frac{1}{n_mC}+\\frac{C-1}{n_mC}\\left(\\frac{P}{P_0}\\right)$$</div>
      <div class="equation">$$\\ln\\left(\\frac{P_2}{P_1}\\right)_\\theta=-\\frac{q_{st}}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)$$</div>
      <div class="equation">$$\\tau=A^{-1}\\exp\\left(\\frac{E_d}{RT}\\right)\\qquad a_s=\\frac{6}{\\rho d}$$</div>
      <div class="equation">$$\\frac{x}{m}=\\frac{(C_0-C_e)V}{m}\\qquad dG=\\gamma\\,dA$$</div>
      <div class="equation">$$\\Delta G=\\Delta H-T\\Delta S$$</div>
    </div>
    <aside class="key-idea"><strong>Key Idea</strong>Always use equilibrium pressure or concentration in isotherm equations.</aside>
    <aside class="jee-trap"><strong>JEE Trap</strong>Chemisorption does not simply increase with temperature. Activated adsorption may rise; equilibrium coverage falls at high \\(T\\).</aside>
    <aside class="jee-trap"><strong>JEE Trap</strong>Freundlich has no true saturation limit; Langmuir does.</aside>
    <aside class="jee-trap"><strong>JEE Trap</strong>High-pressure zero-order is macroscopic, not a microscopic stoppage of events.</aside>
  </section>

  <section id="applications-expanded">
    <h2>05 Applications of Adsorption (Expanded)</h2>

    <section id="gas-masks">
      <h3>5.1 Gas Masks and Air Purification</h3>
      <p>
        Activated charcoal has an extremely large specific surface area (often
        \\(500-1500\\ \\mathrm{m^2\\,g^{-1}}\\)) created by a network of micropores.
        Toxic gases and organic vapours are preferentially adsorbed into these pores by
        physisorption (and sometimes weak chemisorption). Air, \\(\\mathrm{N_2}\\) and
        \\(\\mathrm{O_2}\\) are held far more weakly and pass through. The mask therefore
        removes poison while allowing the wearer to breathe. Once the pores are saturated
        the charcoal must be replaced or regenerated by heating.
      </p>
      <aside class="key-idea"><strong>Key Idea</strong>High surface area + preferential adsorption of polarisable organic molecules over \\(\\mathrm{N_2/O_2}\\) is the working principle of the gas mask.</aside>
    </section>

    <section id="decolourisation">
      <h3>5.2 Decolourisation of Sugar and Dyes</h3>
      <p>
        Raw sugar solutions and many industrial dye effluents contain coloured organic
        impurities. When the solution is shaken or percolated through animal charcoal
        (or activated carbon), the large coloured molecules adsorb strongly onto the
        carbon surface. The decolourised solution is then filtered. The same principle
        is used to remove unwanted colours from oils and pharmaceutical preparations.
      </p>
      <ul>
        <li>Animal charcoal or activated carbon is the adsorbent.</li>
        <li>Coloured organic molecules are the adsorbates.</li>
        <li>Filtration removes the carbon after adsorption is complete.</li>
      </ul>
    </section>

    <section id="froth-flotation">
      <h3>5.3 Froth Flotation of Ores</h3>
      <p>
        Many sulphide and oxide ores are concentrated by froth flotation. The powdered
        ore is mixed with water and a small amount of a collector (usually a xanthate or
        similar surfactant). The collector adsorbs selectively on the surface of the desired
        mineral particles, rendering them hydrophobic. Air is then blown through the
        suspension; the hydrophobic particles attach to the air bubbles and rise to form
        a froth that is skimmed off. Gangue particles remain hydrophilic and stay in the
        aqueous phase.
      </p>
      <ul>
        <li>Collector molecules adsorb on the ore surface \\(\\rightarrow\\) hydrophobic.</li>
        <li>Air bubbles carry the hydrophobic particles upward.</li>
        <li>Gangue remains wettable and sinks.</li>
      </ul>
    </section>

    <section id="chromatography">
      <h3>5.4 Chromatography</h3>
      <p>
        Chromatography separates components of a mixture by differential adsorption on
        a stationary phase. In column or thin-layer chromatography the stationary phase
        is typically silica gel or alumina. Components that adsorb more strongly travel
        more slowly; components that adsorb weakly travel faster with the mobile phase.
        The same principle, with different stationary phases, underlies HPLC and gas chromatography.
      </p>
      <ul>
        <li>Stationary phase = adsorbent (silica, alumina, etc.).</li>
        <li>Separation rests on differences in adsorption strength.</li>
        <li>Strongly adsorbed solutes have higher retention times.</li>
      </ul>
    </section>

    <section id="heterogeneous-catalysis">
      <h3>5.5 Heterogeneous Catalysis</h3>
      <p>
        Virtually every heterogeneous catalytic reaction begins with adsorption of at
        least one reactant on the solid catalyst surface. The surface provides a lower-energy
        pathway by stabilising intermediates and by bringing reactant molecules into close
        proximity with favourable orientation. After reaction the products desorb, freeing
        the active sites for the next cycle.
      </p>
      <div class="equation">$$\\text{diffusion}\\rightarrow\\text{adsorption}\\rightarrow\\text{reaction}\\rightarrow\\text{desorption}\\rightarrow\\text{diffusion}$$</div>
      <div class="adsorption-figure-group" aria-label="heterogeneous-catalysis-five-stage-sequence.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-017.jpg"
    alt="Five-stage heterogeneous catalysis sequence — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Five-stage heterogeneous catalysis sequence — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-018.jpg"
    alt="Five-stage heterogeneous catalysis sequence — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Five-stage heterogeneous catalysis sequence — figure 2</figcaption>
</figure>
</div>
      <h4>Typical industrial examples</h4>
      <ul>
        <li>Haber-Bosch synthesis of ammonia (Fe catalyst, \\(\\mathrm{N_2}\\) and \\(\\mathrm{H_2}\\) adsorb and dissociate).</li>
        <li>Contact process for \\(\\mathrm{SO_3}\\) (\\(\\mathrm{V_2O_5}\\) catalyst).</li>
        <li>Catalytic converters in automobiles (Pt/Pd/Rh on ceramic support).</li>
        <li>Hydrogenation of oils (Ni catalyst).</li>
      </ul>
      <aside class="key-idea"><strong>Key Idea</strong>The catalyst is not consumed. Adsorption, surface reaction and desorption form a closed cycle.</aside>
    </section>

    <section id="shape-selective">
      <h3>5.6 Shape-Selective Catalysis (Zeolites)</h3>
      <p>
        Zeolites are crystalline aluminosilicates with uniform channels and cavities of
        molecular dimensions. Only molecules small enough to enter the pores can reach
        the active sites inside; larger molecules are excluded. This physical size-filtering
        is called shape-selective catalysis and is used in petroleum refining (cracking,
        isomerisation, alkylation) to obtain desired product distributions.
      </p>
      <div class="adsorption-figure-group" aria-label="shape-selective-catalysis-zeolites.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-019.jpg"
    alt="Shape-selective catalysis in zeolites and enzyme active-site specificity — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Shape-selective catalysis in zeolites and enzyme active-site specificity — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-020.png"
    alt="Shape-selective catalysis in zeolites and enzyme active-site specificity — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Shape-selective catalysis in zeolites and enzyme active-site specificity — figure 2</figcaption>
</figure>
</div>
    </section>

    <section id="medicinal-charcoal">
      <h3>5.7 Medicinal Charcoal</h3>
      <p>
        Activated charcoal is administered orally in cases of poisoning or drug overdose.
        In the gastrointestinal tract it adsorbs a wide range of organic toxins and drugs,
        preventing their absorption into the blood. Effectiveness depends on how soon it
        is given and on the adsorbability of the particular toxin. It does not adsorb
        alcohols, strong acids/bases or metals efficiently.
      </p>
    </section>

    <section id="drying-agents">
      <h3>5.8 Humidity Control and Drying Agents</h3>
      <p>
        Silica gel and certain zeolites (molecular sieves) have a strong affinity for water
        vapour. They adsorb moisture from air or from organic solvents, keeping instruments,
        electronics and packaged goods dry. Once saturated they can be regenerated by
        heating, which drives off the adsorbed water.
      </p>
      <ul>
        <li>Silica gel packets in instrument boxes and medicine bottles.</li>
        <li>Molecular sieves for deep drying of solvents and gases.</li>
      </ul>
    </section>

    <section id="adsorption-indicators">
      <h3>5.9 Adsorption Indicators</h3>
      <p>
        In some precipitation titrations (e.g. Mohr or Fajans methods) a dye is used as an
        adsorption indicator. Near the equivalence point the surface charge of the precipitate
        changes; the dye ions then adsorb and produce a sharp colour change that signals
        the end point.
      </p>
    </section>

    <section id="applications-summary">
      <h3>5.10 Summary of Applications</h3>
      <div class="application-list">
        <div class="application-card"><h4>Gas mask</h4><p><strong>Adsorbent:</strong> Activated charcoal</p><p><strong>What is adsorbed:</strong> Toxic gases / organic vapours</p></div>
        <div class="application-card"><h4>Sugar decolourisation</h4><p><strong>Adsorbent:</strong> Animal charcoal</p><p><strong>What is adsorbed:</strong> Coloured impurities</p></div>
        <div class="application-card"><h4>Froth flotation</h4><p><strong>Adsorbent:</strong> Ore particles + collector</p><p><strong>What is adsorbed:</strong> Collector on mineral surface</p></div>
        <div class="application-card"><h4>Chromatography</h4><p><strong>Adsorbent:</strong> Silica / alumina</p><p><strong>What is adsorbed:</strong> Mixture components (differential)</p></div>
        <div class="application-card"><h4>Heterogeneous catalysis</h4><p><strong>Adsorbent:</strong> Metal / oxide / zeolite</p><p><strong>What is adsorbed:</strong> Reactants (then products desorb)</p></div>
        <div class="application-card"><h4>Medicinal charcoal</h4><p><strong>Adsorbent:</strong> Activated charcoal</p><p><strong>What is adsorbed:</strong> Toxins / drugs in GI tract</p></div>
        <div class="application-card"><h4>Drying agent</h4><p><strong>Adsorbent:</strong> Silica gel / zeolite</p><p><strong>What is adsorbed:</strong> Water vapour</p></div>
        <div class="application-card"><h4>Adsorption indicator</h4><p><strong>Adsorbent:</strong> Precipitate surface</p><p><strong>What is adsorbed:</strong> Dye ions at end point</p></div>
      </div>
    </section>
  </section>

  <section id="surface-tension">
    <h2>08 Surface Tension of Solutions &amp; Adsorption at Liquid Interfaces</h2>

    <section id="surface-tension-recall">
      <h3>8.1 Surface Tension - Brief Recall</h3>
      <p>
        Surface tension \\((\\gamma)\\) is the force per unit length acting perpendicular
        to a line drawn on the liquid surface; equivalently it is the surface free energy
        per unit area. Pure water has a high surface tension
        (\\(\\sim72\\ \\mathrm{mN\\,m^{-1}}\\) at \\(25^\\circ\\mathrm{C}\\)) because of strong
        hydrogen bonding. Any solute that alters the residual forces at the air-water
        interface changes \\(\\gamma\\).
      </p>
    </section>

    <section id="solute-effects">
      <h3>8.2 Effect of Different Solutes on Surface Tension</h3>
      <div class="definition-list">
        <div class="definition-card">
          <dt>Inorganic electrolytes \\((\\mathrm{KCl, NaCl, K_2SO_4,\\ldots})\\)</dt>
          <dd>
            Slightly increase surface tension. Ions are strongly hydrated and prefer the
            bulk; the surface becomes relatively depleted of solute. The rise in
            \\(\\gamma\\) is small and nearly linear.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Organic solutes of moderate polarity \\((\\mathrm{CH_3OH, C_2H_5OH}\\), acetone, sugar, \\(\\ldots)\\)</dt>
          <dd>
            Steadily decrease surface tension. These molecules accumulate at the surface
            (positive adsorption), lowering the surface free energy. The fall is gradual
            and continuous.
          </dd>
        </div>
        <div class="definition-card">
          <dt>Surfactants / soaps / detergents</dt>
          <dd>
            For example \\(\\mathrm{CH_3(CH_2)_{11}OSO_3^-Na^+}\\), sodium dodecyl sulphate.
            They decrease surface tension sharply at very low concentration. Once a monolayer
            of surfactant is complete, further addition forms micelles in the bulk and
            \\(\\gamma\\) becomes almost constant. The break point is the critical micelle
            concentration (CMC).
          </dd>
        </div>
      </div>
      <aside class="key-idea"><strong>Key Idea</strong>Electrolytes \\(\\rightarrow\\gamma\\) rises slightly. Ordinary organics \\(\\rightarrow\\gamma\\) falls gradually. Surfactants \\(\\rightarrow\\gamma\\) falls steeply then levels off at CMC.</aside>
    </section>

    <section id="qualitative-graphs">
      <h3>8.3 Qualitative Graphs (JEE Favourite)</h3>
      <div class="adsorption-figure-group" aria-label="surface-tension-three-sketches.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-021.png"
    alt="Gradual fall, slight rise and sharp fall followed by a CMC plateau — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Gradual fall, slight rise and sharp fall followed by a CMC plateau — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-022.png"
    alt="Gradual fall, slight rise and sharp fall followed by a CMC plateau — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Gradual fall, slight rise and sharp fall followed by a CMC plateau — figure 2</figcaption>
</figure>
</div>
      <ul>
        <li><strong>Sketch I:</strong> \\(\\gamma\\) falls gradually then levels - typical of a moderately surface-active organic solute (e.g. \\(\\mathrm{CH_3OH}\\)).</li>
        <li><strong>Sketch II:</strong> \\(\\gamma\\) rises slowly and almost linearly - typical of a strong electrolyte (e.g. KCl).</li>
        <li><strong>Sketch III:</strong> \\(\\gamma\\) drops almost vertically at low concentration then becomes horizontal - typical of a surfactant (e.g. sodium dodecyl sulphate). The horizontal portion begins at the CMC.</li>
      </ul>
      <p><strong>Assignment for KCl, \\(\\mathrm{CH_3OH}\\) and \\(\\mathrm{CH_3(CH_2)_{11}OSO_3^-Na^+}\\):</strong></p>
      <ul>
        <li>KCl \\(\\rightarrow\\) sketch II (\\(\\gamma\\) increases).</li>
        <li>\\(\\mathrm{CH_3OH}\\) \\(\\rightarrow\\) sketch I (\\(\\gamma\\) decreases gradually).</li>
        <li>Surfactant \\(\\rightarrow\\) sketch III (\\(\\gamma\\) drops sharply then constant).</li>
      </ul>
      <aside class="jee-trap"><strong>JEE Trap</strong>Do not confuse the gradual fall of ordinary alcohols with the abrupt fall-and-plateau of true surfactants. The plateau is the signature of micelle formation.</aside>
    </section>

    <section id="gibbs-adsorption">
      <h3>8.4 Gibbs Adsorption Isotherm</h3>
      <p>
        The quantitative link between surface tension and surface excess concentration
        is the Gibbs adsorption equation. For a binary solution at constant temperature:
      </p>
      <div class="equation">$$\\Gamma_2=-\\frac{1}{RT}\\left(\\frac{\\partial\\gamma}{\\partial\\ln a_2}\\right)_T$$</div>
      <p>or, for dilute ideal solutions \\((a_2\\approx c_2)\\),</p>
      <div class="equation">$$\\Gamma_2=-\\frac{c_2}{RT}\\left(\\frac{\\partial\\gamma}{\\partial c_2}\\right)_T$$</div>
      <p>\\(\\Gamma_2\\) is the surface excess of the solute (moles per unit area).</p>
      <ul>
        <li>If \\(\\gamma\\) decreases with increasing concentration \\((\\partial\\gamma/\\partial c&lt;0)\\), then \\(\\Gamma_2&gt;0\\): positive adsorption (solute concentrates at the surface).</li>
        <li>If \\(\\gamma\\) increases with concentration \\((\\partial\\gamma/\\partial c&gt;0)\\), then \\(\\Gamma_2&lt;0\\): negative adsorption (solute is depleted at the surface).</li>
      </ul>
      <aside class="key-idea"><strong>Key Idea</strong>The sign of the slope of the \\(\\gamma\\)-versus-\\(c\\) curve tells you whether adsorption is positive or negative.</aside>
    </section>

    <section id="cmc">
      <h3>8.5 Critical Micelle Concentration (CMC)</h3>
      <p>
        Above a characteristic concentration the surfactant molecules aggregate into
        micelles (hydrophobic tails inward, hydrophilic heads outward). Once micelles
        appear, the concentration of free monomer in solution stays roughly constant,
        so the surface remains saturated and \\(\\gamma\\) no longer falls. That concentration
        is the CMC.
      </p>
      <p>
        Addition of salt usually lowers the CMC of ionic surfactants; raising temperature
        can raise or lower it depending on the surfactant.
      </p>
      <div class="adsorption-figure-group" aria-label="cmc-breakpoint.png">
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-023.png"
    alt="CMC read from the break point where surface tension becomes constant — figure 1"
    loading="lazy"
    decoding="async"
  />
  <figcaption>CMC read from the break point where surface tension becomes constant — figure 1</figcaption>
</figure>
<figure class="adsorption-figure">
  <img
    src="/notes/jee-advanced/surface-chemistry/adsorption/adsorption-figure-024.png"
    alt="CMC read from the break point where surface tension becomes constant — figure 2"
    loading="lazy"
    decoding="async"
  />
  <figcaption>CMC read from the break point where surface tension becomes constant — figure 2</figcaption>
</figure>
</div>
    </section>

    <section id="graph-problems">
      <h3>8.6 Graph-Based Problems</h3>
      <div class="question">
        <strong>Problem 1 (JEE 2016 type).</strong>
        The qualitative sketches I, II and III show the variation of surface tension with
        molar concentration for aqueous KCl, \\(\\mathrm{CH_3OH}\\) and
        \\(\\mathrm{CH_3(CH_2)_{11}OSO_3^-Na^+}\\). The correct assignment is:
        <ol type="A">
          <li>I-KCl, II-\\(\\mathrm{CH_3OH}\\), III-surfactant</li>
          <li>I-surfactant, II-\\(\\mathrm{CH_3OH}\\), III-KCl</li>
          <li>I-KCl, II-surfactant, III-\\(\\mathrm{CH_3OH}\\)</li>
          <li>I-\\(\\mathrm{CH_3OH}\\), II-KCl, III-surfactant</li>
        </ol>
        <p class="answer">Solution: Electrolyte raises \\(\\gamma\\) \\(\\rightarrow\\) II. Alcohol lowers \\(\\gamma\\) gradually \\(\\rightarrow\\) I. Surfactant lowers \\(\\gamma\\) sharply then plateau \\(\\rightarrow\\) III. Correct option: (D).</p>
      </div>
      <div class="question">
        <strong>Problem 2.</strong>
        A plot of surface tension versus concentration for a surfactant is linear with a
        steep negative slope up to \\(8\\times10^{-3}\\ \\mathrm{mol\\,L^{-1}}\\) and then becomes
        horizontal. What is the CMC? What is the sign of the surface excess below the CMC?
        <p class="answer">Solution: CMC = \\(8\\times10^{-3}\\ \\mathrm{mol\\,L^{-1}}\\). Below CMC, \\(\\partial\\gamma/\\partial c&lt;0\\Rightarrow\\Gamma&gt;0\\) (positive adsorption).</p>
      </div>
      <div class="question">
        <strong>Problem 3.</strong>
        For a dilute aqueous solution of a non-electrolyte the slope
        \\((\\partial\\gamma/\\partial c)=-0.025\\ \\mathrm{N\\,m^{-1}(mol\\,L^{-1})^{-1}}\\)
        at \\(c=0.10\\ \\mathrm{mol\\,L^{-1}}\\) and \\(298\\ \\mathrm{K}\\). Estimate the surface excess \\(\\Gamma\\).
        <div class="equation">$$\\Gamma=-\\frac{c}{RT}\\left(\\frac{\\partial\\gamma}{\\partial c}\\right)=-\\frac{0.10}{8.314\\times298}(-0.025)$$</div>
        <p class="answer">\\(\\Gamma\\approx1.0\\times10^{-6}\\ \\mathrm{mol\\,m^{-2}}\\).</p>
      </div>
      <div class="question">
        <strong>Problem 4.</strong>
        Which of the following statements is correct?
        <ol type="a">
          <li>Addition of KCl to water increases surface tension.</li>
          <li>Addition of soap to water decreases surface tension continuously without limit.</li>
          <li>Surface excess of KCl at the air-water interface is positive.</li>
          <li>CMC is the concentration at which surface tension of a surfactant solution is maximum.</li>
        </ol>
        <p class="answer">Solution: (a) is correct. (b) is false - \\(\\gamma\\) levels off after CMC. (c) is false - electrolyte shows negative adsorption. (d) is false - \\(\\gamma\\) is minimum (and constant) after CMC.</p>
      </div>
    </section>

    <section id="connection">
      <h3>8.7 Connection to Adsorption</h3>
      <p>
        The accumulation of surfactant or alcohol molecules at the air-water interface is
        a classic example of adsorption at a liquid-gas interface. The same thermodynamic
        principles (surface excess, Gibbs equation) that govern solid-gas adsorption appear
        here, only the measurable experimental quantity is surface tension rather than the
        amount of gas adsorbed.
      </p>
      <aside class="key-idea"><strong>Key Idea</strong>Positive adsorption lowers surface tension; negative adsorption raises it. Surfactants are extreme cases of positive adsorption.</aside>
    </section>
  </section>

  <p class="end-note">— End of Notes —</p>`;

export default function AdsorptionPage() {
  return (
    <main className="adsorption-route">
      <nav className="route-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/programs/jee-advanced">JEE Advanced</Link>
        <span>›</span>
        <Link href="/learn/jee-advanced/surface-chemistry">
          Surface Chemistry
        </Link>
        <span>›</span>
        <span>Adsorption</span>
      </nav>

      <div dangerouslySetInnerHTML={{ __html: adsorptionHtml }} />

      <div className="route-back">
        <Link href="/learn/jee-advanced/surface-chemistry">
          ← Return to Surface Chemistry
        </Link>
      </div>

      <style>{`
        :root {
      color-scheme: dark;
      --bg: #050816;
      --panel: #0b1220;
      --panel-2: #111827;
      --border: rgba(148, 163, 184, 0.18);
      --text: #e5e7eb;
      --muted: #a8b3c7;
      --cyan: #00d4ff;
      --violet: #7c3aed;
      --sky: #22d3ee;
      --pink: #f472b6;
      --emerald: #34d399;
      --amber: #fbbf24;
      --red: #f87171;
      --blue: #60a5fa;
    }

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      background:
        radial-gradient(circle at 10% 0%, rgba(0, 212, 255, 0.10), transparent 30rem),
        radial-gradient(circle at 90% 18%, rgba(124, 58, 237, 0.12), transparent 34rem),
        var(--bg);
      color: var(--text);
      font-family:
        "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.75;
    }

    main {
      width: min(1080px, calc(100% - 32px));
      margin: 0 auto;
      padding: 48px 0 96px;
    }

    article {
      padding: clamp(22px, 5vw, 56px);
      border: 1px solid var(--border);
      border-radius: 28px;
      background: rgba(8, 13, 27, 0.94);
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
    }

    h1, h2, h3, h4 {
      font-family:
        "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.18;
      letter-spacing: -0.025em;
      scroll-margin-top: 24px;
    }

    h1 {
      margin: 0;
      color: var(--cyan);
      font-size: clamp(2.8rem, 8vw, 5.5rem);
      font-weight: 850;
      letter-spacing: -0.055em;
    }

    h2 {
      margin: 4.75rem 0 1.5rem;
      padding: 18px 20px;
      border-left: 5px solid var(--violet);
      border-radius: 14px;
      background: rgba(124, 58, 237, 0.12);
      color: #a78bfa;
      font-size: clamp(1.65rem, 4vw, 2.35rem);
      font-weight: 820;
    }

    h3 {
      margin: 2.8rem 0 1rem;
      color: var(--sky);
      font-size: clamp(1.2rem, 3vw, 1.55rem);
      font-weight: 780;
    }

    h4 {
      margin: 1.8rem 0 0.75rem;
      color: #93c5fd;
      font-size: 1.05rem;
      font-weight: 760;
    }

    p { margin: 0.8rem 0; }

    ul, ol {
      margin: 0.9rem 0;
      padding-left: 1.45rem;
    }

    li { margin: 0.45rem 0; }

    strong { color: #f8fafc; }

    .eyebrow {
      margin-bottom: 12px;
      color: #67e8f9;
      font-size: 0.78rem;
      font-weight: 850;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .lead {
      max-width: 850px;
      margin: 1.3rem 0 0;
      color: #cbd5e1;
      font-size: clamp(1.02rem, 2vw, 1.16rem);
    }

    .topic-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 1.6rem 0 0;
    }

    .topic-strip span {
      padding: 8px 12px;
      border: 1px solid rgba(34, 211, 238, 0.18);
      border-radius: 999px;
      background: rgba(34, 211, 238, 0.08);
      color: #cffafe;
      font-size: 0.8rem;
      font-weight: 720;
    }

    .section-intro {
      margin-top: 0;
      color: var(--muted);
    }

    .equation {
      margin: 1.2rem 0;
      padding: 16px 18px;
      overflow-x: auto;
      border: 1px solid rgba(251, 191, 36, 0.28);
      border-left: 5px solid var(--amber);
      border-radius: 14px;
      background: rgba(120, 78, 10, 0.13);
      color: var(--amber);
      font-family:
        "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: clamp(1rem, 2vw, 1.12rem);
      font-weight: 700;
      line-height: 1.6;
    }

    .key-idea,
    .jee-trap,
    .worked-example,
    .question,
    .definition-card,
    .application-card {
      margin: 1.4rem 0;
      padding: 18px 20px;
      border-radius: 16px;
    }

    .key-idea {
      border: 1px solid rgba(52, 211, 153, 0.28);
      border-left: 5px solid var(--emerald);
      background: rgba(16, 96, 72, 0.16);
    }

    .key-idea strong {
      display: block;
      margin-bottom: 4px;
      color: var(--emerald);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .jee-trap {
      border: 1px solid rgba(248, 113, 113, 0.30);
      border-left: 5px solid var(--red);
      background: rgba(127, 29, 29, 0.16);
    }

    .jee-trap strong {
      display: block;
      margin-bottom: 4px;
      color: var(--red);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .worked-example {
      border: 1px solid rgba(244, 114, 182, 0.25);
      border-left: 5px solid var(--pink);
      background: rgba(131, 24, 67, 0.13);
    }

    .worked-example strong:first-child {
      color: var(--pink);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .question {
      border: 1px solid rgba(96, 165, 250, 0.22);
      background: rgba(30, 64, 175, 0.11);
    }

    .question > strong:first-child { color: #93c5fd; }

    .comparison {
      display: grid;
      gap: 16px;
      margin: 1.5rem 0 2rem;
    }

    .comparison-row {
      display: grid;
      grid-template-columns: minmax(150px, 0.75fr) 1fr 1fr;
      gap: 14px;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: rgba(15, 23, 42, 0.72);
    }

    .comparison-row dt {
      color: #c4b5fd;
      font-weight: 800;
    }

    .comparison-row dd {
      margin: 0;
      color: #dbeafe;
    }

    .comparison-row dd:last-child { color: #fce7f3; }

    .definition-list {
      display: grid;
      gap: 14px;
      margin: 1.2rem 0;
    }

    .definition-card {
      margin: 0;
      border: 1px solid var(--border);
      background: rgba(15, 23, 42, 0.68);
    }

    .definition-card dt {
      color: var(--sky);
      font-weight: 800;
    }

    .definition-card dd {
      margin: 0.35rem 0 0;
      color: var(--text);
    }

    .application-list {
      display: grid;
      gap: 14px;
      margin: 1.2rem 0;
    }

    .application-card {
      margin: 0;
      border: 1px solid rgba(124, 58, 237, 0.20);
      background: rgba(124, 58, 237, 0.08);
    }

    .application-card h4 {
      margin-top: 0;
      color: #c4b5fd;
    }

    .image-placeholder {
      margin: 1.6rem 0;
      padding: 14px 16px;
      border: 1px dashed rgba(148, 163, 184, 0.35);
      border-radius: 12px;
      color: #94a3b8;
      font-family:
        "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.86rem;
      line-height: 1.5;
    }

    .formula-sheet {
      display: grid;
      gap: 12px;
      margin: 1.2rem 0;
    }

    .formula-sheet .equation { margin: 0; }

    .answer {
      margin-top: 0.7rem;
      color: #bbf7d0;
      font-weight: 700;
    }

    .end-note {
      margin: 4rem 0 0;
      color: #94a3b8;
      text-align: center;
      font-style: italic;
    }

    
        .adsorption-figure {
          width: 100%;
          margin: 1.8rem 0 2.2rem;
          padding: 12px;
          overflow: hidden;
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.96),
              rgba(8, 15, 30, 0.98)
            );
          box-shadow: 0 20px 52px rgba(0, 0, 0, 0.3);
        }

        .adsorption-figure img {
          display: block;
          width: auto;
          max-width: 100%;
          max-height: 720px;
          height: auto;
          margin: 0 auto;
          object-fit: contain;
          border-radius: 12px;
          background: #050816;
        }

        .adsorption-figure figcaption {
          margin-top: 11px;
          color: #a8b3c7;
          font-family:
            "SF Pro Text", "SF Pro Display", -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
            sans-serif;
          font-size: 0.86rem;
          line-height: 1.55;
          text-align: center;
        }

        .adsorption-figure-group {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 320px), 1fr)
          );
          gap: 16px;
          margin: 1.8rem 0 2.2rem;
        }

        .adsorption-figure-group .adsorption-figure {
          height: 100%;
          margin: 0;
        }


    @media (max-width: 760px) {
      main { width: min(100% - 18px, 1080px); }
      article { padding: 22px 16px; border-radius: 20px; }
      .comparison-row { grid-template-columns: 1fr; }
      .comparison-row dt { color: #c4b5fd; }
    }

        .adsorption-route {
          min-height: 100vh;
        }

        .route-breadcrumb {
          width: min(1080px, calc(100% - 32px));
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          align-items: center;
          margin: 0 auto;
          padding-top: 24px;
          color: #94a3b8;
          font-family:
            "SF Pro Text", "SF Pro Display", -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
            sans-serif;
          font-size: 0.82rem;
        }

        .route-breadcrumb a {
          color: #bae6fd;
          text-decoration: none;
        }

        .route-back {
          display: flex;
          justify-content: center;
          padding: 0 16px 64px;
        }

        .route-back a {
          padding: 11px 17px;
          border: 1px solid rgba(34, 211, 238, 0.24);
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.08);
          color: #cffafe;
          font-family:
            "SF Pro Text", "SF Pro Display", -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
            sans-serif;
          font-weight: 700;
          text-decoration: none;
        }

        
      `}</style>
    </main>
  );
}
