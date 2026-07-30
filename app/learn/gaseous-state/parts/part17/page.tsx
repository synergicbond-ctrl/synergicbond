"use client";

import { PartShell, SectionTitle, WorkedExample, Formula } from "../../_core";

export default function Part17Page() {
  return (
    <PartShell part={17}>
      <section className="section">
        <SectionTitle id="examples-41–50" index="17" title="Solved examples 41–50" subtitle="Clausius–Clapeyron, diffusion and successive effusion. Every numerical data set and solution is newly constructed while retaining the source problem archetype." />
<h3 className="subheading">C. Clausius–Clapeyron, diffusion and successive effusion</h3>
            <div className="examplesGrid">
              <WorkedExample
                number={41}
                title="Enthalpy of vaporisation from two pressures"
                question={<>A liquid has vapour pressures 0.0250 atm at 300 K and 0.0600 atm at 330 K. Estimate its molar enthalpy of vaporisation.</>}
                steps={[
                  <>Rearrange the integrated Clausius–Clapeyron equation:</>,
                  <><Formula tex="\\Delta H_{vap}=-R\\frac{\\ln(P_2/P_1)}{(1/T_2-1/T_1)}" />.</>,
                  <><Formula tex="\\Delta H_{vap}=-8.314\\frac{\\ln(0.0600/0.0250)}{(1/330-1/300)}" />.</>,
                  <><Formula tex="\\Delta H_{vap}=2.402\\times10^4\\,\\mathrm{J\\,mol^{-1}}" />.</>,
                ]}
                answer={<Formula tex="\\Delta H_{vap}\\approx24.0\\,\\mathrm{kJ\\,mol^{-1}}" />}
              />

              <WorkedExample
                number={42}
                title="External pressure required for a lower boiling point"
                question={<>A liquid boils normally at 80.0 °C and has <Formula tex="\\Delta H_{vap}=31.0\\,\\mathrm{kJ\\,mol^{-1}}" />. What external pressure makes it boil at 60.0 °C?</>}
                steps={[
                  <>At the normal boiling point, <Formula tex="P_1=1.00\\,\\mathrm{atm}" />, <Formula tex="T_1=353.15\\,\\mathrm K" />. The desired temperature is <Formula tex="T_2=333.15\\,\\mathrm K" />.</>,
                  <>Use <Formula tex="\\ln(P_2/P_1)=-\\Delta H_{vap}R^{-1}(1/T_2-1/T_1)" />.</>,
                  <><Formula tex="\\ln P_2=-(31000/8.314)(1/333.15-1/353.15)=-0.6340" />.</>,
                  <><Formula tex="P_2=e^{-0.6340}=0.531\\,\\mathrm{atm}" />.</>,
                ]}
                answer={<Formula tex="P_{ext}\\approx0.531\\,\\mathrm{atm}" />}
              />

              <WorkedExample
                number={43}
                title="Density from an effusion-rate comparison"
                question={<>A gas of density 3.60 g L⁻¹ effuses at <Formula tex="3.00\\times10^{-4}\\,\\mathrm{mol\\,s^{-1}}" />. Under identical conditions, another gas effuses at <Formula tex="1.20\\times10^{-3}\\,\\mathrm{mol\\,s^{-1}}" />. Find its density.</>}
                steps={[
                  <>Graham law gives <Formula tex="r_1/r_2=\\sqrt{d_2/d_1}" />.</>,
                  <>Square and solve: <Formula tex="d_2=d_1(r_1/r_2)^2" />.</>,
                  <><Formula tex="d_2=3.60\\left(\\frac{3.00\\times10^{-4}}{1.20\\times10^{-3}}\\right)^2" />.</>,
                  <><Formula tex="d_2=3.60(0.25)^2=0.225\\,\\mathrm{g\\,L^{-1}}" />.</>,
                ]}
                answer={<Formula tex="0.225\\,\\mathrm{g\\,L^{-1}}" />}
              />

              <WorkedExample
                number={44}
                title="Composition of ozonised oxygen by effusion time"
                question={<>Equal volumes of pure O₂ and an O₂–O₃ mixture effuse through the same pinhole under identical conditions. Their effusion times are in the ratio 7:8. Find the mole fraction of O₃ and the mass percentage of O₂ in the mixture.</>}
                steps={[
                  <>For equal amounts, effusion time <Formula tex="t\\propto\\sqrt{M}" />.</>,
                  <><Formula tex="\\frac{8}{7}=\\sqrt{\\frac{\\bar M}{32}}\\Rightarrow \\bar M=32(8/7)^2=41.796" />.</>,
                  <>Let O₃ mole fraction be <Formula tex="x" />. Then <Formula tex="\\bar M=32(1-x)+48x=32+16x" />.</>,
                  <><Formula tex="x=(41.796-32)/16=0.6122" />.</>,
                  <>O₂ mass fraction <Formula tex="=\\frac{32(1-x)}{\\bar M}=0.2969" />.</>,
                ]}
                answer={<>O₃ mole fraction <Formula tex="0.612" />; O₂ = <Formula tex="29.7\\%" /> by mass.</>}
              />

              <WorkedExample
                number={45}
                title="Degree of chlorine dissociation from diffusion"
                question={<>A chlorine sample containing Cl₂ and Cl atoms diffuses 1.12 times as fast as krypton of molar mass 83.8 g mol⁻¹. Find the degree of dissociation of Cl₂, assuming <Formula tex="M_{Cl_2}=70.9\\,\\mathrm{g\\,mol^{-1}}" />.</>}
                steps={[
                  <>From Graham law, <Formula tex="1.12=\\sqrt{83.8/\\bar M}" />.</>,
                  <><Formula tex="\\bar M=83.8/(1.12)^2=66.80\\,\\mathrm{g\\,mol^{-1}}" />.</>,
                  <>For <Formula tex="Cl_2\\rightleftharpoons2Cl" />, starting with 1 mol Cl₂ gives total moles <Formula tex="1+\\alpha" /> while total mass remains 70.9 g.</>,
                  <><Formula tex="\\bar M=70.9/(1+\\alpha)" />.</>,
                  <><Formula tex="\\alpha=70.9/66.80-1=0.0613" />.</>,
                ]}
                answer={<Formula tex="\\alpha=0.0613\\approx6.13\\%" />}
              />

              <WorkedExample
                number={46}
                title="Mass-balance identity for an effusing mixture"
                question={<>A vessel initially contains 0.300 mol NO₂ and 0.200 mol N₂O₄. After a short effusion interval, <Formula tex="x" /> total moles have entered a second vessel. If <Formula tex="M_e" /> and <Formula tex="M_r" /> are the mean molar masses of the effused and remaining mixtures, prove a relation connecting them.</>}
                steps={[
                  <>Initial total moles are <Formula tex="0.500" />. Initial mass is <Formula tex="0.300(46)+0.200(92)=32.2\\,\\mathrm g" />.</>,
                  <>The effused sample contains <Formula tex="x" /> moles and therefore has mass <Formula tex="M_ex" />.</>,
                  <>The original vessel retains <Formula tex="0.500-x" /> moles and mass <Formula tex="M_r(0.500-x)" />.</>,
                  <>Conservation of total mass gives the required identity.</>,
                ]}
                answer={<Formula tex="M_ex+M_r(0.500-x)=32.2\\,\\mathrm g" />}
              />

              <WorkedExample
                number={47}
                title="Selective leakage with exponential decay"
                question={<>Pure O₂ in a bulb falls from 2400 mm Hg to 1800 mm Hg in 40.0 min by molecular effusion. The bulb is then evacuated and filled with an equimolar O₂–X mixture, where <Formula tex="M_X=128\\,\\mathrm{g\\,mol^{-1}}" /> and each initial partial pressure is 2000 mm Hg. Find <Formula tex="n_{O_2}/n_X" /> after 60.0 min.</>}
                steps={[
                  <>For molecular leakage from a well-mixed bulb, <Formula tex="P_i(t)=P_{i0}e^{-k_it}" /> and <Formula tex="k_i\\propto1/\\sqrt{M_i}" />.</>,
                  <>For oxygen, <Formula tex="e^{-40k_O}=1800/2400=0.75" />, hence <Formula tex="k_O=-\\ln(0.75)/40" />.</>,
                  <>Since <Formula tex="k_X/k_O=\\sqrt{32/128}=1/2" />, after 60 min:</>,
                  <><Formula tex="P_O=2000e^{-60k_O}=1299\\,\\mathrm{mmHg}" /> and <Formula tex="P_X=2000e^{-30k_O}=1612\\,\\mathrm{mmHg}" />.</>,
                  <>At common <Formula tex="V,T" />, mole ratio equals partial-pressure ratio: <Formula tex="n_O/n_X=1299/1612=0.8059" />.</>,
                ]}
                answer={<Formula tex="n_{O_2}:n_X=0.806:1" />}
              />

              <WorkedExample
                number={48}
                title="Composition remaining after finite effusion"
                question={<>A vessel initially contains 12.0 mol H₂ and 18.0 mol He. It effuses through a pinhole at constant temperature. When H₂ has fallen to 3.00 mol, find the H₂ mole fraction remaining.</>}
                steps={[
                  <>Each component decays as <Formula tex="n_i=n_{i0}e^{-k_it}" />, with <Formula tex="k\\propto1/\\sqrt M" />.</>,
                  <>For H₂, the remaining fraction is <Formula tex="f_H=3/12=0.25=e^{-k_Ht}" />.</>,
                  <>For He, <Formula tex="k_{He}/k_H=\\sqrt{2/4}=1/\\sqrt2" />, so <Formula tex="f_{He}=f_H^{1/\\sqrt2}" />.</>,
                  <><Formula tex="n_{He}=18(0.25)^{1/\\sqrt2}=6.754\\,\\mathrm{mol}" />.</>,
                  <><Formula tex="x_{H_2}=3/(3+6.754)=0.3076" />.</>,
                ]}
                answer={<Formula tex="x_{H_2}=0.308" />}
              />

              <WorkedExample
                number={49}
                title="Number of successive enrichment steps"
                question={<>A H₂–D₂ sample has mass ratio 1:24. Each stage collects the initial effusate and uses it as the feed for the next identical stage. How many stages are required for the collected gas to contain at least 95 mol% H₂?</>}
                steps={[
                  <>Initial mole ratio: <Formula tex="\\frac{n_{H_2}}{n_{D_2}}=\\frac{1/2}{24/4}=\\frac1{12}" />.</>,
                  <>Each initial-effusate stage multiplies this ratio by <Formula tex="\\sqrt{M_{D_2}/M_{H_2}}=\\sqrt2" />.</>,
                  <>After <Formula tex="s" /> stages, <Formula tex="R_s=(1/12)(\\sqrt2)^s" />.</>,
                  <>For 95 mol% H₂, <Formula tex="R_s=x/(1-x)=0.95/0.05=19" />.</>,
                  <><Formula tex="(\\sqrt2)^s\\ge228\\Rightarrow s\\ge15.666" />.</>,
                ]}
                answer={<>16 stages</>}
              />

              <WorkedExample
                number={50}
                title="Composition after the tenth effusate transfer"
                question={<>A mixture initially contains H₂ and N₂ in the mole ratio 1:100. The initial effusate is collected, then that collected gas is effused again; the process is repeated. Find the H₂ mole fraction in the gas emerging from the tenth pinhole.</>}
                steps={[
                  <>At each initial-effusate stage, <Formula tex="(n_{H_2}/n_{N_2})" /> is multiplied by <Formula tex="\\sqrt{28/2}=\\sqrt{14}" />.</>,
                  <>After ten stages, <Formula tex="R_{10}=\\frac1{100}(\\sqrt{14})^{10}" />.</>,
                  <><Formula tex="(\\sqrt{14})^{10}=14^5=537824" />, so <Formula tex="R_{10}=5378.24" />.</>,
                  <>Convert ratio to mole fraction: <Formula tex="x_{H_2}=R/(1+R)" />.</>,
                  <><Formula tex="x_{H_2}=5378.24/5379.24=0.999814" />.</>,
                ]}
                answer={<Formula tex="x_{H_2}=0.999814\\;(99.9814\\%)" />}
              />
            </div>

            <div className="references">
              <strong>Editorial and technical note.</strong> The chapter preserves the uploaded notes’ broad progression—from gas parameters and manometers through gas laws, mixtures, kinetic theory, collision theory, real gases and liquefaction—while replacing the original wording, numerical data and drawings. The treatment also corrects imprecise statements about Brownian motion, molecular modes, critical-temperature liquefaction, standard molar volume, finite effusion and Joule–Thomson throttling. Equations use ideal-gas assumptions unless a real-gas model is named explicitly.
            </div>
      </section>
    </PartShell>
  );
}
