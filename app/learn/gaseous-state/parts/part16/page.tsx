"use client";

import { PartShell, SectionTitle, WorkedExample, Formula } from "../../_core";

export default function Part16Page() {
  return (
    <PartShell part={16}>
      <section className="section">
        <SectionTitle id="examples-21–40" index="16" title="Solved examples 21–40" subtitle="Mixtures, vapours and phase equilibrium. Every numerical data set and solution is newly constructed while retaining the source problem archetype." />
<h3 className="subheading">B. Mixtures, vapours and phase equilibrium</h3>
            <div className="examplesGrid">
              <WorkedExample
                number={21}
                title="Maximum temperature on a straight P–V path"
                question={<>Three moles of an ideal gas move along the straight line joining <Formula tex="(V,P)=(12\\,\\mathrm L,5\\,\\mathrm{atm})" /> and <Formula tex="(6\\,\\mathrm L,11\\,\\mathrm{atm})" />. Find the maximum temperature attained on the segment.</>}
                steps={[
                  <>The line slope is <Formula tex="m=(11-5)/(6-12)=-1\\,\\mathrm{atm\\,L^{-1}}" />, so <Formula tex="P=17-V" /> when <Formula tex="V" /> is in litres.</>,
                  <>For an ideal gas, <Formula tex="T=PV/(nR)=V(17-V)/(3R)" />.</>,
                  <>This concave quadratic is maximum when <Formula tex="d[V(17-V)]/dV=17-2V=0" />.</>,
                  <>Thus <Formula tex="V=8.50\\,\\mathrm L" /> and <Formula tex="P=8.50\\,\\mathrm{atm}" />.</>,
                  <><Formula tex="T_{max}=8.50^2/(3\\times0.082057)=293.5\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="T_{max}=293.5\\,\\mathrm K" />}
              />

              <WorkedExample
                number={22}
                title="Criterion for an interior temperature maximum"
                question={<>An ideal gas follows a straight path <Formula tex="P=mV+c" /> in a <Formula tex="P-V" /> diagram. Derive the condition for its temperature to first increase and then decrease as volume increases.</>}
                steps={[
                  <>For fixed <Formula tex="n" />, <Formula tex="T=PV/(nR)=(mV^2+cV)/(nR)" />.</>,
                  <>An interior stationary point requires <Formula tex="dT/dV=(2mV+c)/(nR)=0" />, giving <Formula tex="V_*=-c/(2m)" />.</>,
                  <>For this point to be a maximum, <Formula tex="d^2T/dV^2=2m/(nR)<0" />, so <Formula tex="m<0" />.</>,
                  <>For <Formula tex="V_*>0" /> with <Formula tex="m<0" />, one needs <Formula tex="c>0" />. The path segment must include <Formula tex="V_*" /> and maintain <Formula tex="P>0" />.</>,
                ]}
                answer={<><Formula tex="m<0,\\ c>0" />, with the segment containing <Formula tex="V_*=-c/(2m)" />.</>}
              />

              <WorkedExample
                number={23}
                title="Required helium mass from a pressure fraction"
                question={<>A vessel contains 12.0 g H₂. How much helium must be added at the same temperature and volume so that helium supplies <Formula tex="2/7" /> of the total pressure?</>}
                steps={[
                  <>For an ideal mixture, pressure fraction equals mole fraction: <Formula tex="x_{He}=2/7" />.</>,
                  <>Moles of hydrogen: <Formula tex="n_{H_2}=12.0/2.00=6.00\\,\\mathrm{mol}" />.</>,
                  <><Formula tex="\\frac{n_{He}}{n_{He}+6}=\\frac27" />.</>,
                  <><Formula tex="7n_{He}=2n_{He}+12\\Rightarrow n_{He}=2.40\\,\\mathrm{mol}" />.</>,
                  <>Mass <Formula tex="=2.40\\times4.00=9.60\\,\\mathrm g" />.</>,
                ]}
                answer={<Formula tex="9.60\\,\\mathrm g\\ He" />}
              />

              <WorkedExample
                number={24}
                title="Partial pressure after selective reaction"
                question={<>A 500 mL vessel contains O₂ and Ne at a total pressure of 6.00 atm. A reagent consumes all O₂ without affecting Ne. The final pressure at the same temperature and volume is 114 cm Hg. Find the initial partial pressures.</>}
                steps={[
                  <>After reaction only Ne remains, so <Formula tex="P_{Ne,f}=114/76=1.50\\,\\mathrm{atm}" />.</>,
                  <>Because Ne moles, volume and temperature do not change, <Formula tex="P_{Ne,i}=1.50\\,\\mathrm{atm}" />.</>,
                  <>Initially <Formula tex="P_{tot}=P_{O_2}+P_{Ne}" />.</>,
                  <><Formula tex="P_{O_2}=6.00-1.50=4.50\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<><Formula tex="P_{O_2}=4.50\\,\\mathrm{atm},\\quad P_{Ne}=1.50\\,\\mathrm{atm}" /></>}
              />

              <WorkedExample
                number={25}
                title="Nitrogen partial pressure from air density"
                question={<>Air at 300 K and 1.00 atm has density 1.176 g L⁻¹. Treat it as only N₂ and O₂. Find the nitrogen partial pressure.</>}
                steps={[
                  <>Mean molar mass: <Formula tex="\\bar M=dRT/P" />.</>,
                  <><Formula tex="\\bar M=1.176(0.082057)(300)=28.950\\,\\mathrm{g\\,mol^{-1}}" />.</>,
                  <>Let <Formula tex="x" /> be the N₂ mole fraction: <Formula tex="28x+32(1-x)=28.950" />.</>,
                  <><Formula tex="x=(32-28.950)/4=0.7626" />.</>,
                  <>Therefore <Formula tex="P_{N_2}=xP=0.7626\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_{N_2}=0.763\\,\\mathrm{atm}" />}
              />

              <WorkedExample
                number={26}
                title="Mixing gases initially at different pressures"
                question={<>At the same temperature, 500 mL He at 5.00 atm and 800 mL Ne at 2.50 atm are transferred into an evacuated 6.00 L vessel. Find each partial pressure and the total pressure.</>}
                steps={[
                  <>For each component, <Formula tex="P_i'=P_iV_i/V_f" /> because its moles and temperature are unchanged.</>,
                  <><Formula tex="P_{He}=5.00(0.500)/6.00=0.4167\\,\\mathrm{atm}" />.</>,
                  <><Formula tex="P_{Ne}=2.50(0.800)/6.00=0.3333\\,\\mathrm{atm}" />.</>,
                  <><Formula tex="P_{tot}=0.4167+0.3333=0.7500\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<><Formula tex="P_{He}=0.4167,\\ P_{Ne}=0.3333,\\ P_{tot}=0.7500\\ \\mathrm{atm}" /></>}
              />

              <WorkedExample
                number={27}
                title="Inflating a bag with a second gas"
                question={<>A flexible bag first contains N₂ occupying 12.0 L at 0.900 atm. O₂ is added until the bag volume is 36.0 L and total pressure is 1.00 atm at the same temperature. Find final partial pressures.</>}
                steps={[
                  <>Nitrogen moles are unchanged, so <Formula tex="P_{N_2,f}V_f=P_{N_2,i}V_i" />.</>,
                  <><Formula tex="P_{N_2,f}=0.900(12.0)/36.0=0.300\\,\\mathrm{atm}" />.</>,
                  <>Dalton law gives <Formula tex="P_{O_2}=1.00-0.300=0.700\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<><Formula tex="P_{N_2}=0.300\\,\\mathrm{atm},\\quad P_{O_2}=0.700\\,\\mathrm{atm}" /></>}
              />

              <WorkedExample
                number={28}
                title="Vapour-pressure order from boiling points"
                question={<>Four liquids P, Q, R and S have normal boiling points 35 °C, 78 °C, 96 °C and 55 °C, respectively. Give the increasing order of vapour pressure at 25 °C, assuming chemically comparable behaviour.</>}
                steps={[
                  <>At the normal boiling point, each liquid has vapour pressure 1 atm.</>,
                  <>At a common lower temperature, the liquid with the higher normal boiling point generally has the lower vapour pressure.</>,
                  <>Boiling-point order is <Formula tex="P<S<Q<R" /> from low to high.</>,
                  <>Reverse this for vapour pressure from low to high.</>,
                ]}
                answer={<>Increasing vapour pressure: <strong>R &lt; Q &lt; S &lt; P</strong>.</>}
              />

              <WorkedExample
                number={29}
                title="Vapour-pressure order from enthalpy of vaporisation"
                question={<>Comparable liquids A, B and C have molar enthalpies of vaporisation 30, 42 and 36 kJ mol⁻¹. At a common temperature, predict the increasing vapour-pressure order, assuming similar entropy prefactors.</>}
                steps={[
                  <>Clausius–Clapeyron implies that stronger cohesive forces and larger <Formula tex="\\Delta H_{vap}" /> generally produce lower vapour pressure at a fixed temperature.</>,
                  <>The enthalpy order is <Formula tex="\\Delta H_A<\\Delta H_C<\\Delta H_B" />.</>,
                  <>Reverse the order for vapour pressure.</>,
                ]}
                answer={<>Increasing vapour pressure: <strong>B &lt; C &lt; A</strong>.</>}
              />

              <WorkedExample
                number={30}
                title="Evaporation and condensation rates"
                question={<>A pure liquid is sealed in an evacuated vessel at constant temperature. Describe how evaporation and condensation rates vary with time until equilibrium.</>}
                steps={[
                  <>Initially there is almost no vapour, so condensation rate is approximately zero, while evaporation begins at a finite rate set by temperature and surface condition.</>,
                  <>As vapour accumulates, molecular impacts on the liquid increase, so the condensation rate rises.</>,
                  <>For an unchanged liquid surface at fixed temperature, the evaporation rate is approximately steady.</>,
                  <>At dynamic equilibrium the two rates are equal and the vapour pressure becomes constant, although both molecular processes continue.</>,
                ]}
                answer={<>At equilibrium: <Formula tex="r_{evap}=r_{cond}\\ne0" />.</>}
              />

              <WorkedExample
                number={31}
                title="Mass ratio in gas saturated with water"
                question={<>A 6.00 L vessel at 300 K contains N₂ saturated with water vapour. Total pressure is 1.20 atm and water vapour pressure is 0.0350 atm. Find the mass ratio <Formula tex="m_{H_2O}/m_{N_2}" />.</>}
                steps={[
                  <>Nitrogen partial pressure: <Formula tex="P_{N_2}=1.20-0.0350=1.165\\,\\mathrm{atm}" />.</>,
                  <>At common <Formula tex="V,T" />, mole ratio equals pressure ratio: <Formula tex="n_w/n_N=0.0350/1.165" />.</>,
                  <>Mass ratio is <Formula tex="\\frac{m_w}{m_N}=\\frac{n_w(18.0)}{n_N(28.0)}" />.</>,
                  <><Formula tex="\\frac{m_w}{m_N}=\\frac{0.0350\\times18.0}{1.165\\times28.0}=0.0193" />.</>,
                ]}
                answer={<Formula tex="m_{H_2O}:m_{N_2}=0.0193:1" />}
              />

              <WorkedExample
                number={32}
                title="Expansion of a wet gas with liquid present"
                question={<>A 4.00 L vessel at 300 K contains N₂, water vapour and a small amount of liquid water at total pressure 1.84 atm. Water vapour pressure is 0.040 atm. It is connected to an evacuated 4.00 L vessel at the same temperature. Find final pressure.</>}
                steps={[
                  <>Initially <Formula tex="P_{N_2}=1.84-0.040=1.80\\,\\mathrm{atm}" />.</>,
                  <>Nitrogen doubles its volume isothermally, so <Formula tex="P_{N_2,f}=1.80(4/8)=0.900\\,\\mathrm{atm}" />.</>,
                  <>Because liquid water remains, water vapour re-establishes its saturation pressure of 0.040 atm.</>,
                  <><Formula tex="P_f=0.900+0.040=0.940\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_f=0.940\\,\\mathrm{atm}" />}
              />

              <WorkedExample
                number={33}
                title="Unsaturated after transfer and heating"
                question={<>N₂ saturated with water vapour occupies 500 mL at 300 K and 1.25 atm. The complete gas sample is transferred to a 2.00 L vessel and heated to 360 K. Vapour pressures of water are 0.030 atm at 300 K and 0.50 atm at 360 K. Find final pressure.</>}
                steps={[
                  <>Initially <Formula tex="P_{N_2,1}=1.25-0.030=1.22\\,\\mathrm{atm}" />.</>,
                  <>For each component, <Formula tex="P_2=P_1(V_1/V_2)(T_2/T_1)" /> if no condensation/evaporation source remains.</>,
                  <><Formula tex="P_{N_2,2}=1.22(0.500/2.00)(360/300)=0.366\\,\\mathrm{atm}" />.</>,
                  <><Formula tex="P_{w,2}=0.030(0.500/2.00)(360/300)=0.0090\\,\\mathrm{atm}" />.</>,
                  <>Since 0.0090 atm is below the 0.50 atm saturation pressure, the vapour is unsaturated. Thus <Formula tex="P_f=0.375\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_f=0.375\\,\\mathrm{atm}" />}
              />

              <WorkedExample
                number={34}
                title="Relative humidity"
                question={<>At a certain temperature the partial pressure of water vapour in air is 18.0 mm Hg, while the saturation vapour pressure is 24.0 mm Hg. Calculate relative humidity.</>}
                steps={[
                  <>Use <Formula tex="\\mathrm{RH}=p_w/p_w^*\\times100\\%" />.</>,
                  <><Formula tex="\\mathrm{RH}=(18.0/24.0)100=75.0\\%" />.</>,
                ]}
                answer={<>75.0%</>}
              />

              <WorkedExample
                number={35}
                title="Water vapour mass in a room"
                question={<>A 50.0 m³ room is at 323 K and 70.0% relative humidity. Saturation vapour pressure of water is 0.120 atm. Find the mass of water vapour in the room.</>}
                steps={[
                  <>Actual water partial pressure: <Formula tex="p_w=0.700(0.120)=0.0840\\,\\mathrm{atm}" />.</>,
                  <>Convert volume: <Formula tex="V=5.00\\times10^4\\,\\mathrm L" />.</>,
                  <>Moles: <Formula tex="n=pV/(RT)=0.0840(5.00\\times10^4)/(0.082057\\times323)=158.5\\,\\mathrm{mol}" />.</>,
                  <>Mass: <Formula tex="m=158.5\\times18.015=2.86\\times10^3\\,\\mathrm g" />.</>,
                ]}
                answer={<Formula tex="m\\approx2.86\\,\\mathrm{kg}" />}
              />

              <WorkedExample
                number={36}
                title="Isothermal compression to the dew point"
                question={<>A 25.0 L sample of air has 55.0% relative humidity. It is compressed isothermally. At what volume does water first begin to condense?</>}
                steps={[
                  <>Initially <Formula tex="p_{w,1}=0.55p_w^*" />.</>,
                  <>Before condensation, water vapour moles are fixed and temperature is constant, so <Formula tex="p_{w,1}V_1=p_w^*V_{dew}" />.</>,
                  <><Formula tex="V_{dew}=0.55V_1=0.55(25.0)=13.75\\,\\mathrm L" />.</>,
                ]}
                answer={<Formula tex="V_{dew}=13.75\\,\\mathrm L" />}
              />

              <WorkedExample
                number={37}
                title="Fraction of water that vaporises"
                question={<>Four kilograms of liquid water are placed in an evacuated 50.0 m³ room at 300 K. Saturation vapour pressure is 0.0350 atm. What percentage of the water vaporises?</>}
                steps={[
                  <>Moles required for saturation: <Formula tex="n=p^*V/(RT)" /> with <Formula tex="V=5.00\\times10^4\\,\\mathrm L" />.</>,
                  <><Formula tex="n=0.0350(5.00\\times10^4)/(0.082057\\times300)=71.09\\,\\mathrm{mol}" />.</>,
                  <>Mass vaporised: <Formula tex="m_v=71.09(18.015)=1.281\\,\\mathrm{kg}" />.</>,
                  <>Percentage <Formula tex="=1.281/4.000\\times100=32.0\\%" />.</>,
                ]}
                answer={<Formula tex="32.0\\%" />}
              />

              <WorkedExample
                number={38}
                title="Condensation on isothermal compression"
                question={<>A vessel contains saturated water vapour occupying 1.00 L at a fixed temperature, with liquid water also present. It is compressed isothermally to 250 mL. What fraction of the original vapour condenses?</>}
                steps={[
                  <>With liquid present, saturation pressure and temperature stay fixed.</>,
                  <>Vapour moles are proportional to vapour volume: <Formula tex="n=PV/(RT)" />.</>,
                  <>The final vapour amount is <Formula tex="n_f/n_i=V_f/V_i=0.250/1.00=0.250" />.</>,
                  <>Condensed fraction <Formula tex="=1-0.250=0.750" />.</>,
                ]}
                answer={<>75.0% of the vapour condenses.</>}
              />

              <WorkedExample
                number={39}
                title="Cooling humid air in a rigid vessel"
                question={<>Air in a rigid vessel is at 350 K and 60.0% relative humidity. Water saturation pressure is 0.420 atm at 350 K and 0.0100 atm at 280 K. The vessel is cooled to 280 K. What percentage of the initial water vapour condenses?</>}
                steps={[
                  <>Initial water pressure: <Formula tex="p_1=0.60(0.420)=0.252\\,\\mathrm{atm}" />.</>,
                  <>If no condensation occurred, <Formula tex="p_{hyp}=p_1(T_2/T_1)=0.252(280/350)=0.2016\\,\\mathrm{atm}" />, far above saturation.</>,
                  <>Final vapour moles correspond to <Formula tex="p_2=0.0100\\,\\mathrm{atm}" />. At fixed volume, <Formula tex="n_f/n_i=(p_2/T_2)/(p_1/T_1)" />.</>,
                  <><Formula tex="n_f/n_i=0.0100(350)/[0.252(280)]=0.04960" />.</>,
                  <>Condensed percentage <Formula tex="=(1-0.04960)100=95.0\\%" />.</>,
                ]}
                answer={<Formula tex="95.0\\%" />}
              />

              <WorkedExample
                number={40}
                title="Vapour pressure at a new temperature"
                question={<>Water has vapour pressure 0.0350 atm at 300 K. Estimate its vapour pressure at 350 K using <Formula tex="\\Delta H_{vap}=40.7\\,\\mathrm{kJ\\,mol^{-1}}" /> as constant.</>}
                steps={[
                  <>Use <Formula tex="\\ln(P_2/P_1)=-\\Delta H_{vap}R^{-1}(1/T_2-1/T_1)" />.</>,
                  <><Formula tex="\\ln(P_2/0.0350)=-40700/8.314\\,[1/350-1/300]" />.</>,
                  <>The exponent is <Formula tex="2.332" />, so <Formula tex="P_2=0.0350e^{2.332}" />.</>,
                  <><Formula tex="P_2=0.360\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_2\\approx0.360\\,\\mathrm{atm}" />}
              />
            </div>

      </section>
    </PartShell>
  );
}
