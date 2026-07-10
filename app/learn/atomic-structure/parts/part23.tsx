"use client";

import { AtomicPartShell, AuditComment, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part23() {
  return (
    <AtomicPartShell part={23} title="Uncertainty Principle Worked Problems" pages="71-73">
      <SourcePage page={71}>
        <NoteBlock title="Lifetime and travel distance (conclusion)">
          <p>
            Its lifetime is about <MathText math="5.86\times10^{-24}" /> s, which is in the laboratory frame.
          </p>
          <FormulaLine math="\text{Distance travelled before disintegration}=(5.86\times10^{-24}\ \text{s})(10^{8}\ \text{m/s})=5.86\times10^{-16}\ \text{m}" />
        </NoteBlock>
        <NoteBlock title="Problem — bullet uncertainty">
          <p>
            A bullet of mass 0.03 kg is moving with a velocity of 500 m s&#8315;&#185;. The speed is measured up to an accuracy
            of 0.02%. Calculate the uncertainty in x. Also comment on the result.
          </p>
          <p className="font-black text-white">Solution</p>
          <FormulaLine math="\text{Momentum }p=0.03\times500=15\ \text{kg m s}^{-1}" />
          <FormulaLine math="\frac{\Delta p}{p}\times100=0.02" />
          <FormulaLine math="\Delta p=\frac{0.02\times15}{100}=3\times10^{-3}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\Delta x\approx\frac{h}{2\Delta p}=\frac{6.626\times10^{-34}\ \text{J s}}{4\pi\times3\times10^{-3}\ \text{km/s}}=1.76\times10^{-31}\ \text{m}" />
        </NoteBlock>
        <NoteBlock title="Problem — 5 keV electron located within 2 Å">
          <p>
            If the position of a 5 keV electron is located within 2 Å, what is the percentage uncertainty in its momentum?
          </p>
          <p className="font-black text-white">Solution</p>
          <FormulaLine math="\Delta x=2\times10^{-10}\ \text{m};\quad\Delta p\cdot\Delta x\cong\frac{h}{4\pi}" />
          <FormulaLine math="\Delta p\cong\frac{h}{4\pi\Delta x}=\frac{(6.626\times10^{-34}\ \text{J s})}{4\pi\,(2\times10^{-10}\ \text{m})}=2.635\times10^{-25}\ \text{kg m s}^{-1}" />
          <FormulaLine math="p=\sqrt{2mT}=(2\times9.11\times10^{-31}\times5000\times1.6\times10^{-19})^{1/2}=3.818\times10^{-23}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\text{Percentage of uncertainty}=\frac{\Delta p}{p}\times100=\frac{2.635\times10^{-25}}{3.818\times10^{-23}}\times100=0.69" />
        </NoteBlock>
        <NoteBlock title="Problem — Δx equals the de Broglie wavelength">
          <p>
            The uncertainty in the velocity of a particle is equal to its velocity. If{" "}
            <MathText math="\Delta p\cdot\Delta x\cong h" />, show that the uncertainty in its location is its de Broglie
            wavelength.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>Given <MathText math="\Delta v=v" />. Then,</p>
          <FormulaLine math="\Delta p=m\Delta v=mv=p" />
          <FormulaLine math="\Delta x\times\Delta p\equiv h\quad\text{or}\quad\Delta x\cdot p\equiv h" />
          <FormulaLine math="\Delta x\cong\frac{h}{p}=\lambda" />
        </NoteBlock>
        <NoteBlock title="Problem — electron is not a nuclear constituent">
          <p>
            From scattering experiments, it is found that the nuclear diameter is of the order of <MathText math="10^{-15}" />{" "}
            m. The energy of an electron in β-decay experiment is of the order of a few MeV. Use these data and the uncertainty
            principle to show that the electron is not a constituent of the nucleus.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>
            If an electron exists inside the nucleus, the uncertainty in its position <MathText math="\Delta x\cong10^{-15}" />{" "}
            m. From the uncertainty principle,
          </p>
          <FormulaLine math="(10^{-15}\ \text{m})\,\Delta p\ge\frac{\hbar}{2}" />
          <FormulaLine math="\Delta p\ge\frac{1.05\times10^{-34}\ \text{J s}}{2\,(10^{-15}\ \text{m})}=5.25\times10^{-20}\ \text{kg m s}^{-1}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={72}>
        <NoteBlock title="β-decay conclusion">
          <p>The momentum of the electron p must at least be of this order.</p>
          <FormulaLine math="p\cong5.25\times10^{-20}\ \text{kg m s}^{-1}" />
          <p>When the energy of the electron is very large compared to its rest energy,</p>
          <FormulaLine math="E\cong cp=(3\times10^{8}\ \text{ms}^{-1})(5.25\times10^{-20}\ \text{kg m s}^{-1})" />
          <FormulaLine math="=\frac{15.75\times10^{-12}\ \text{J}}{1.6\times10^{-19}\ \text{J/eV}}=9.84\times10^{7}\ \text{eV}=98.4\ \text{MeV}" />
          <p>
            This is very large compared to the energy of the electron in β-decay. Thus, electron is not a constituent of the
            nucleus.
          </p>
        </NoteBlock>
        <NoteBlock title="Problem — electron microscope resolution">
          <p>
            An electron microscope operates with a beam of electrons, each of which has an energy 60 keV. What is the smallest
            size that such a device could resolve? What must be the energy of each neutron in a beam of neutrons be in order to
            resolve the same size of object?
          </p>
          <p className="font-black text-white">Solution</p>
          <p>The momentum of the electron is given by</p>
          <FormulaLine math="p^{2}=2mE=2\,(9.1\times10^{-31}\ \text{kg})(60\times1000\times1.6\times10^{-19}\ \text{J})" />
          <FormulaLine math="p=13.218\times10^{-23}\ \text{kg m s}^{-1}" />
          <p>The de Broglie wavelength</p>
          <FormulaLine math="\lambda=\frac{h}{p}=\frac{6.626\times10^{-34}\ \text{J s}}{13.216\times10^{-23}\ \text{kg m s}^{-1}}=5.01\times10^{-12}\ \text{m}" />
          <p>
            The smallest size an electron microscope can resolve is of the order of the de Broglie wavelength of electron. Hence
            the smallest size that can be resolved is <MathText math="5.01\times10^{-12}" /> m.
          </p>
          <p>
            The de Broglie wavelength of the neutron must be of the order of <MathText math="5.01\times10^{-12}" /> m. Hence,
            the momentum of the neutron must be the same as that of electron. Then,
          </p>
          <FormulaLine math="\text{Momentum of neutron}=13.216\times10^{-23}\ \text{kg m s}^{-1}" />
          <FormulaLine math="\text{Energy}=\frac{p^{2}}{2M}\quad(M\text{ is mass of neutron})" />
          <FormulaLine math="=\frac{(13.216\times10^{-23}\ \text{kg ms}^{-1})^{2}}{2\times1836\,(9.1\times10^{-31}\ \text{kg})}=5.227\times10^{-18}\ \text{J}" />
          <FormulaLine math="=\frac{5.227\times10^{-18}\ \text{J}}{1.6\times10^{-19}\ \text{J/eV}}=32.67\ \text{eV}" />
        </NoteBlock>
        <NoteBlock title="Problem — natural line width (statement)">
          <p>
            The uncertainty in energy of a state is responsible for the natural line width of spectral lines. Substantiate.
          </p>
          <p className="font-black text-white">Solution. The equation</p>
          <FormulaLine math="(\Delta E)(\Delta t)\ge\frac{\hbar}{2}\qquad\text{(i)}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={73}>
        <NoteBlock title="Natural line width (continued)">
          <p>
            implies that the energy of a state cannot be measured exactly unless an infinite amount of time is available for the
            measurement. If an atom is in an excited state, it does not remain there indefinitely, but makes a transition to a
            lower state. We can take the mean time for decay <MathText math="\tau" />, called the lifetime, as a measure of the
            time available to determine the energy. Hence the uncertainty in time is of the order of <MathText math="\tau" />.
            For transitions to the ground state, which has a definite energy <MathText math="E_0" /> because of its finite
            lifetime, the spread in wavelength can be calculated from
          </p>
          <FormulaLine math="E-E_0=\frac{hc}{\lambda}" />
          <FormulaLine math="|\Delta E|=\frac{hc\,|\Delta\lambda|}{\lambda^{2}}" />
          <FormulaLine math="\frac{\Delta\lambda}{\lambda}=\frac{\Delta E}{E-E_0}\qquad\text{(ii)}" />
          <p>
            Using Eq. (i) and identifying <MathText math="\Delta t\cong\tau" />, we get
          </p>
          <FormulaLine math="\frac{\Delta\lambda}{\lambda}=\frac{\hbar}{2\tau\,(E-E_0)}\qquad\text{(iii)}" />
          <p>
            The energy width <MathText math="h/\tau" /> is often referred to as the <strong>natural line width</strong>.
          </p>
        </NoteBlock>
        <NoteBlock title="Problem — Bohr radius from the uncertainty principle">
          <p>
            Consider the electron in the hydrogen atom. Using <MathText math="(\Delta x)(\Delta p)\simeq\hbar" />, show that
            the radius of the electron orbit in the ground state is equal to the Bohr radius.
          </p>
          <p className="font-black text-white">Solution</p>
          <p>The energy of the electron in the hydrogen atom is the given by</p>
          <FormulaLine math="E=\frac{p^{2}}{2m}-\frac{ke^{2}}{r},\qquad k=\frac{1}{4\pi\varepsilon_0}" />
          <p>
            where p is the momentum of the electron. For the order of magnitude of the position uncertainty, if we take{" "}
            <MathText math="\Delta x\cong r" />, then
          </p>
          <FormulaLine math="\Delta p\cong\frac{\hbar}{r}\quad\text{or}\quad(\Delta p)^{2}=\frac{\hbar^{2}}{r^{2}}" />
          <p>Taking the order of momentum p as equal to the uncertainty in momentum, we get</p>
          <FormulaLine math="(\Delta p)^{2}=\langle p^{2}\rangle=\frac{\hbar^{2}}{r^{2}}" />
          <p>Hence, the total energy</p>
          <FormulaLine math="E=\frac{\hbar}{2mr^{2}}-\frac{ke^{2}}{r}" />
          <p>For E to be minimum, <MathText math="(dE/dr)=0" />. Then,</p>
          <FormulaLine math="\frac{dE}{dr}=-\frac{\hbar^{2}}{mr^{3}}+\frac{ke^{2}}{r^{2}}=0" />
          <FormulaLine math="r=\frac{\hbar^{2}}{kme^{3}}=a_0" />
          <p>which is the required result.</p>
          <p>Credit line printed on the page: G. Aruldhas.</p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="71-73" unclear={0} />
    </AtomicPartShell>
  );
}
