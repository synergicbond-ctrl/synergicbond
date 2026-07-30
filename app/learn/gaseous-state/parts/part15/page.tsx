"use client";

import { PartShell, SectionTitle, WorkedExample, Formula } from "../../_core";

export default function Part15Page() {
  return (
    <PartShell part={15}>
      <section className="section">
        <SectionTitle id="examples-1–20" index="15" title="Solved examples 1–20" subtitle="Gas laws, vessels and pistons. Every numerical data set and solution is newly constructed while retaining the source problem archetype." />
<h3 className="subheading">A. Gas laws, vessels and pistons</h3>
            <div className="examplesGrid">
              <WorkedExample
                number={1}
                title="Gas released into an evacuated vessel"
                defaultOpen
                question={<>A 12.0 L rigid vessel contains an ideal gas at 18.0 bar. It is connected isothermally to an evacuated vessel. The final pressure is 3.00 bar. Find the volume of the second vessel.</>}
                steps={[
                  <>The amount and temperature are unchanged, so Boyle law applies to the total accessible volume: <Formula tex="P_1V_1=P_f(V_1+V_2)" />.</>,
                  <><Formula tex="18.0\\times12.0=3.00(12.0+V_2)" />.</>,
                  <><Formula tex="12.0+V_2=72.0\\Rightarrow V_2=60.0\\,\\mathrm L" />.</>,
                ]}
                answer={<Formula tex="V_2=60.0\\,\\mathrm L" />}
              />

              <WorkedExample
                number={2}
                title="Bursting temperature of a flexible balloon"
                question={<>At 300 K, a balloon occupies <Formula tex="3/7" /> of its maximum volume. It is heated at nearly constant external pressure. Find the minimum temperature at which it reaches its maximum volume.</>}
                steps={[
                  <>At constant pressure and fixed amount, <Formula tex="V/T=\\text{constant}" />.</>,
                  <>Let the maximum volume be <Formula tex="V_{max}" />. Then <Formula tex="V_1=(3/7)V_{max}" /> and <Formula tex="V_2=V_{max}" />.</>,
                  <><Formula tex="\\frac{(3/7)V_{max}}{300}=\\frac{V_{max}}{T_2}" />.</>,
                  <><Formula tex="T_2=300\\times\\frac73=700\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="700\\,\\mathrm K\\;(427^{\\circ}\\mathrm C)" />}
              />

              <WorkedExample
                number={3}
                title="Celsius rise versus volume rise"
                question={<>A gas at 50 °C is heated at constant pressure until its Celsius temperature increases by 20%. Find the percentage increase in volume.</>}
                steps={[
                  <>The final Celsius temperature is <Formula tex="t_2=1.20\\times50=60^{\\circ}\\mathrm C" />.</>,
                  <>Convert to kelvin: <Formula tex="T_1=323.15\\,\\mathrm K" /> and <Formula tex="T_2=333.15\\,\\mathrm K" />.</>,
                  <>By Charles law, <Formula tex="V_2/V_1=T_2/T_1" />.</>,
                  <>Percentage increase <Formula tex="=\\left(\\frac{333.15}{323.15}-1\\right)100=3.09\\%" />.</>,
                ]}
                answer={<Formula tex="3.09\\%" />}
              />

              <WorkedExample
                number={4}
                title="Estimating absolute zero from two volumes"
                question={<>At the same pressure, a gas occupies 150 mL at 27 °C and 190 mL at 107 °C. Assuming a linear <Formula tex="V-t_C" /> relation, estimate the Celsius temperature at which the extrapolated volume is zero.</>}
                steps={[
                  <>Write <Formula tex="V=m(t-t_0)" />, where <Formula tex="t_0" /> is the zero-volume intercept.</>,
                  <>Slope: <Formula tex="m=(190-150)/(107-27)=0.500\\,\\mathrm{mL\\,^{\\circ}C^{-1}}" />.</>,
                  <>Using the first point, <Formula tex="150=0.500(27-t_0)" />.</>,
                  <><Formula tex="27-t_0=300\\Rightarrow t_0=-273^{\\circ}\\mathrm C" />.</>,
                ]}
                answer={<Formula tex="t_0\\approx-273^{\\circ}\\mathrm C" />}
              />

              <WorkedExample
                number={5}
                title="Universal volume-expansion coefficient of an ideal gas"
                question={<>Use Charles law to find the coefficient <Formula tex="\\alpha=(1/V_0)(\\partial V/\\partial t)_P" /> at 0 °C for an ideal gas.</>}
                steps={[
                  <>At constant pressure, <Formula tex="V_t=V_0\\frac{273.15+t}{273.15}" />.</>,
                  <>Therefore <Formula tex="V_t=V_0\\left(1+\\frac{t}{273.15}\\right)" />.</>,
                  <>Differentiate with respect to Celsius temperature: <Formula tex="(\\partial V/\\partial t)_P=V_0/273.15" />.</>,
                  <>Hence <Formula tex="\\alpha=1/273.15\\,\\mathrm{K^{-1}}" />.</>,
                ]}
                answer={<Formula tex="\\alpha=3.661\\times10^{-3}\\,\\mathrm{K^{-1}}" />}
              />

              <WorkedExample
                number={6}
                title="Burst or melt first?"
                question={<>A rigid gas cylinder contains gas at 4.00 atm and 27 °C. It is rated up to 16.0 atm, and its material melts at 1200 °C. During a fire, will it burst before melting?</>}
                steps={[
                  <>At fixed volume and amount, <Formula tex="P/T=\\text{constant}" />.</>,
                  <>At the bursting pressure, <Formula tex="T_b=300.15\\times(16.0/4.00)=1200.6\\,\\mathrm K" />.</>,
                  <>Convert: <Formula tex="t_b=1200.6-273.15=927.5^{\\circ}\\mathrm C" />.</>,
                  <>Since <Formula tex="927.5^{\\circ}\\mathrm C<1200^{\\circ}\\mathrm C" />, the pressure rating is reached first.</>,
                ]}
                answer={<>The cylinder bursts first, at about <Formula tex="928^{\\circ}\\mathrm C" />.</>}
              />

              <WorkedExample
                number={7}
                title="Mass and temperature changed at constant pressure"
                question={<>Five grams of a gas occupy 250 mL at 300 K. What volume will 12 g of the same gas occupy at 450 K and the same pressure?</>}
                steps={[
                  <>For one gas at fixed pressure, <Formula tex="V\\propto nT\\propto mT" />.</>,
                  <><Formula tex="\\frac{V_2}{V_1}=\\frac{m_2T_2}{m_1T_1}=\\frac{12\\times450}{5\\times300}=3.60" />.</>,
                  <><Formula tex="V_2=250\\times3.60=900\\,\\mathrm{mL}" />.</>,
                ]}
                answer={<Formula tex="900\\,\\mathrm{mL}" />}
              />

              <WorkedExample
                number={8}
                title="Combined gas-law conversion"
                question={<>A gas occupies 4.20 L at 1.50 atm and 250 K. Find its volume at 75.0 cm Hg and 180 K.</>}
                steps={[
                  <>Convert pressure: <Formula tex="P_2=75.0/76.0=0.98684\\,\\mathrm{atm}" />.</>,
                  <>Use <Formula tex="P_1V_1/T_1=P_2V_2/T_2" />.</>,
                  <><Formula tex="V_2=\\frac{(1.50)(4.20)(180)}{(0.98684)(250)}=4.60\\,\\mathrm L" />.</>,
                ]}
                answer={<Formula tex="V_2=4.60\\,\\mathrm L" />}
              />

              <WorkedExample
                number={9}
                title="Trapped gas under a mercury head"
                question={<>A trapped gas has volume 240 mL at 300 K. Its pressure is 15.0 cm Hg below atmospheric pressure when <Formula tex="P_{atm}=76.0\\,\\mathrm{cmHg}" />. It is changed to 360 mL under a pressure of 1.10 atm. Find the final temperature.</>}
                steps={[
                  <>Initial pressure: <Formula tex="P_1=76.0-15.0=61.0\\,\\mathrm{cmHg}" />.</>,
                  <>Final pressure in the same unit: <Formula tex="P_2=1.10\\times76.0=83.6\\,\\mathrm{cmHg}" />.</>,
                  <>Use <Formula tex="P_1V_1/T_1=P_2V_2/T_2" />.</>,
                  <><Formula tex="T_2=\\frac{(83.6)(360)(300)}{(61.0)(240)}=616.7\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="T_2\\approx617\\,\\mathrm K" />}
              />

              <WorkedExample
                number={10}
                title="Different gases at the same temperature"
                question={<>Twelve grams of SO₂ occupy 600 mL at 3.00 atm. At the same temperature, what pressure will 5.00 g of CO₂ exert in 900 mL?</>}
                steps={[
                  <>For equal temperature, <Formula tex="PV/n=RT" /> is the same.</>,
                  <>Moles: <Formula tex="n_1=12/64=0.1875" /> and <Formula tex="n_2=5/44=0.11364" />.</>,
                  <><Formula tex="\\frac{P_1V_1}{n_1}=\\frac{P_2V_2}{n_2}" />.</>,
                  <><Formula tex="P_2=3.00\\times\\frac{600}{900}\\times\\frac{0.11364}{0.1875}=1.21\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_2=1.21\\,\\mathrm{atm}" />}
              />

              <WorkedExample
                number={11}
                title="Density at a new pressure and temperature"
                question={<>An ideal gas has density 1.80 g L⁻¹ at 300 K and 400 torr. Find its density at 450 K and 1000 torr.</>}
                steps={[
                  <>For the same gas, <Formula tex="d\\propto P/T" />.</>,
                  <><Formula tex="\\frac{d_2}{d_1}=\\frac{P_2T_1}{P_1T_2}" />.</>,
                  <><Formula tex="d_2=1.80\\times\\frac{1000\\times300}{400\\times450}=3.00\\,\\mathrm{g\\,L^{-1}}" />.</>,
                ]}
                answer={<Formula tex="3.00\\,\\mathrm{g\\,L^{-1}}" />}
              />

              <WorkedExample
                number={12}
                title="Piston below a mercury column"
                question={<>A vertical open cylinder is 1.20 m high. A massless piston is initially at its midpoint at 300 K; gas lies below it and mercury fills the 0.60 m region above. The system is heated until half the mercury spills out. Neglect thermal expansion. Find the final gas temperature.</>}
                steps={[
                  <>Initially, gas pressure is <Formula tex="P_1=76+60=136\\,\\mathrm{cmHg}" /> and gas length is 60 cm.</>,
                  <>After half the mercury leaves, 30 cm Hg remains. The piston rises by 30 cm, so gas length becomes 90 cm and <Formula tex="P_2=76+30=106\\,\\mathrm{cmHg}" />.</>,
                  <>For fixed moles and uniform area, <Formula tex="P_1L_1/T_1=P_2L_2/T_2" />.</>,
                  <><Formula tex="T_2=300\\times\\frac{106\\times90}{136\\times60}=350.7\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="T_2\\approx351\\,\\mathrm K\\;(77.6^{\\circ}\\mathrm C)" />}
              />

              <WorkedExample
                number={13}
                title="Two gases separated by a frictionless piston"
                question={<>A closed cylinder is divided by a frictionless piston. The two compartments contain equal moles of ideal gas. At 300 K, the upper volume is five times the lower volume. The entire system is heated uniformly until the ratio becomes 3:1. Find the final temperature.</>}
                steps={[
                  <>Let lower and upper pressures differ by the constant piston load <Formula tex="\\Delta P" />. Initially, with volumes <Formula tex="V" /> and <Formula tex="5V" />, <Formula tex="P_L=5P_U" /> because moles and temperature are equal.</>,
                  <>Thus <Formula tex="\\Delta P=P_L-P_U=4P_U" />.</>,
                  <>At the final ratio 1:3, the fixed total volume <Formula tex="6V" /> is divided into <Formula tex="1.5V" /> below and <Formula tex="4.5V" /> above. Also <Formula tex="P'_L=3P'_U" />.</>,
                  <>The same piston load gives <Formula tex="P'_L-P'_U=2P'_U=4P_U\\Rightarrow P'_U=2P_U" />.</>,
                  <>For the upper gas, <Formula tex="T_2/T_1=(P'_UV'_U)/(P_UV_U)=2\\times(4.5/5)=1.8" />.</>,
                  <><Formula tex="T_2=300\\times1.8=540\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="T_2=540\\,\\mathrm K" />}
              />

              <WorkedExample
                number={14}
                title="Heating an open rigid vessel"
                question={<>A rigid open vessel contains air at 300 K. It is heated at atmospheric pressure until one-third of the original moles have escaped. Find the final temperature.</>}
                steps={[
                  <>The vessel volume and pressure remain fixed, so <Formula tex="n/T=\\text{constant}" />.</>,
                  <>Final amount: <Formula tex="n_2=(2/3)n_1" />.</>,
                  <><Formula tex="n_1/T_1=n_2/T_2\\Rightarrow T_2=T_1(n_1/n_2)" />.</>,
                  <><Formula tex="T_2=300\\times3/2=450\\,\\mathrm K" />.</>,
                ]}
                answer={<Formula tex="450\\,\\mathrm K\\;(177^{\\circ}\\mathrm C)" />}
              />

              <WorkedExample
                number={15}
                title="Volume of a bulb from gas removed"
                question={<>A rigid bulb contains air at 8.00 atm and 300 K. It is heated to 450 K while pressure is maintained at 8.00 atm by removing gas. The removed gas occupies 500 mL at 360 K and 0.750 atm. Find the bulb volume.</>}
                steps={[
                  <>Moles removed from the measured sample: <Formula tex="n_r=P_rV_r/(RT_r)" />.</>,
                  <>Inside the bulb, <Formula tex="n_i=8V/(R\\,300)" /> and <Formula tex="n_f=8V/(R\\,450)" />.</>,
                  <>Mass balance: <Formula tex="n_i-n_f=n_r" />.</>,
                  <><Formula tex="\\frac{8V}{R}\\left(\\frac1{300}-\\frac1{450}\\right)=\\frac{(0.750)(0.500)}{R(360)}" />.</>,
                  <><Formula tex="V=0.1172\\,\\mathrm L" />.</>,
                ]}
                answer={<Formula tex="V=117\\,\\mathrm{mL}" />}
              />

              <WorkedExample
                number={16}
                title="Mass removed from a rigid vessel"
                question={<>A 20.0 L vessel at 300 K loses gas isothermally until its pressure decreases by 0.500 atm. The gas density at 273.15 K and 1 atm is 1.60 g L⁻¹. Find the mass removed.</>}
                steps={[
                  <>Moles removed: <Formula tex="\\Delta n=\\Delta PV/(RT)=0.500\\times20.0/(0.082057\\times300)=0.4062\\,\\mathrm{mol}" />.</>,
                  <>Find molar mass from the stated standard density: <Formula tex="M=dRT/P" />.</>,
                  <><Formula tex="M=1.60\\times0.082057\\times273.15=35.87\\,\\mathrm{g\\,mol^{-1}}" />.</>,
                  <>Mass removed: <Formula tex="\\Delta m=(0.4062)(35.87)=14.6\\,\\mathrm g" />.</>,
                ]}
                answer={<Formula tex="14.6\\,\\mathrm g" />}
              />

              <WorkedExample
                number={17}
                title="Connected equal vessels at unequal temperatures"
                question={<>Two identical rigid vessels initially contain a total of 0.800 mol ideal gas at 300 K and 1.20 atm. They remain connected. One is held at 320 K and the other at 480 K. Find the final pressure and moles in each.</>}
                steps={[
                  <>Initially each identical vessel has volume <Formula tex="V=(0.400RT/P)=8.206\\,\\mathrm L" />.</>,
                  <>At equilibrium the pressure is common: <Formula tex="n_1=PV/(RT_1)" /> and <Formula tex="n_2=PV/(RT_2)" />.</>,
                  <>Use <Formula tex="n_1+n_2=0.800" />: <Formula tex="P=\\frac{0.800R}{V(1/320+1/480)}=1.536\\,\\mathrm{atm}" />.</>,
                  <><Formula tex="n_1=1.536(8.206)/(0.082057\\times320)=0.480\\,\\mathrm{mol}" />.</>,
                  <><Formula tex="n_2=0.320\\,\\mathrm{mol}" />.</>,
                ]}
                answer={<>At 320 K: <Formula tex="0.480\\,\\mathrm{mol}" />; at 480 K: <Formula tex="0.320\\,\\mathrm{mol}" />; <Formula tex="P=1.536\\,\\mathrm{atm}" />.</>}
              />

              <WorkedExample
                number={18}
                title="One-way pressure valve between equal vessels"
                question={<>Two equal vessels are connected by a valve that permits flow from vessel B to A only while <Formula tex="P_B-P_A>1.00\\,\\mathrm{atm}" />. Initially A is evacuated and B contains ideal gas at 2.40 atm at fixed temperature. Find the final pressures.</>}
                steps={[
                  <>Because the vessels have equal volumes and temperature, total pressure sum is conserved: <Formula tex="P_A+P_B=2.40\\,\\mathrm{atm}" />.</>,
                  <>Flow stops when the threshold is reached: <Formula tex="P_B-P_A=1.00\\,\\mathrm{atm}" />.</>,
                  <>Adding and subtracting the equations gives <Formula tex="P_B=1.70\\,\\mathrm{atm}" /> and <Formula tex="P_A=0.700\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<><Formula tex="P_A=0.700\\,\\mathrm{atm},\\quad P_B=1.70\\,\\mathrm{atm}" /></>}
              />

              <WorkedExample
                number={19}
                title="Number of balloons from a compressed-gas cylinder"
                question={<>A 20.0 L cylinder contains gas at 16.0 atm and 300 K. It fills spherical balloons of diameter 24.0 cm at 273.15 K and 1.00 atm. Gas remaining in the cylinder at 1.00 atm cannot be used. How many complete balloons can be filled?</>}
                steps={[
                  <>Usable moles correspond to the cylinder pressure drop: <Formula tex="n_u=(16-1)(20.0)/(R\\,300)=12.19\\,\\mathrm{mol}" />.</>,
                  <>Balloon volume: <Formula tex="V_b=\\frac43\\pi(0.120)^3=7.238\\times10^{-3}\\,\\mathrm{m^3}=7.238\\,\\mathrm L" />.</>,
                  <>Moles per balloon: <Formula tex="n_b=1.00(7.238)/(0.082057\\times273.15)=0.3229\\,\\mathrm{mol}" />.</>,
                  <>Number <Formula tex="=12.19/0.3229=37.7" />. Only complete balloons count.</>,
                ]}
                answer={<>37 complete balloons</>}
              />

              <WorkedExample
                number={20}
                title="Payload of a helium balloon"
                question={<>A spherical balloon of diameter 8.00 m is filled with helium at 25 °C and 1 atm. The envelope has mass 45.0 kg. Air density is 1.184 kg m⁻³. Neglect buoyancy of displaced envelope material. Find the maximum payload.</>}
                steps={[
                  <>Balloon volume: <Formula tex="V=\\frac43\\pi(4.00)^3=268.08\\,\\mathrm{m^3}" />.</>,
                  <>Helium density from <Formula tex="d=PM/(RT)" />: <Formula tex="d_{He}=101325(0.00400)/(8.314\\times298.15)=0.1636\\,\\mathrm{kg\\,m^{-3}}" />.</>,
                  <>Net lift mass before envelope and payload: <Formula tex="(d_{air}-d_{He})V=(1.184-0.1636)(268.08)=273.6\\,\\mathrm{kg}" />.</>,
                  <>Payload <Formula tex="=273.6-45.0=228.6\\,\\mathrm{kg}" />.</>,
                ]}
                answer={<Formula tex="m_{payload}\\approx229\\,\\mathrm{kg}" />}
              />
            </div>

      </section>
    </PartShell>
  );
}
