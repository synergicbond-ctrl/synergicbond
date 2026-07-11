"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part43() {
  return (
    <AtomicPartShell part={43} title="Most Probable Radius, Radial Solutions and Radial Node Counting" pages="135-137">
      <SourcePage page={135}>
        <NoteBlock title="Calculate r_mp for (i) 1s electron">
          <FormulaLine math="R_{1s}(r)=2\cdot\left(\frac{Z}{a_0}\right)^{3/2}e^{-\sigma/2}=2\left(\frac{Z}{a_0}\right)^{3/2}e^{-Zr/a_0}" />
          <FormulaLine math="P(r)=4\pi r^{2}\,R^{2}(r)=4\pi r^{2}\left[4\left(\frac{Z}{a_0}\right)^{3}e^{-2Zr/a_0}\right]" />
          <FormulaLine math="=16\pi\left(\frac{Z}{a_0}\right)^{3}r^{2}\,e^{-2Zr/a_0}" />
          <p>For maxima or minima</p>
          <FormulaLine math="\frac{dP(r)}{dr}=0" />
          <FormulaLine math="16\pi\left(\frac{Z}{a_0}\right)^{3}\left[2r\,e^{-2Zr/a_0}+r^{2}e^{-2Zr/a_0}\left(-\frac{2Z}{a_0}\right)\right]=0" />
          <FormulaLine math="16\pi\left(\frac{Z}{a_0}\right)^{3}2r\,e^{-2Zr/a_0}\left[1-\frac{Zr}{a_0}\right]=0" />
          <FormulaLine math="\text{For }r_{mp}\Rightarrow\ r=\frac{a_0}{Z}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={136}>
        <NoteBlock title="Calculate r_mp for (ii) 2p electron">
          <FormulaLine math="R_{2p}(r)=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\cdot\sigma\cdot e^{-\sigma/2}" />
          <FormulaLine math="=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\left(\frac{Zr}{a_0}\right)e^{-\frac{Zr}{2a_0}}" />
          <FormulaLine math="=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{5/2}r\,e^{-\frac{Zr}{2a_0}}" />
          <p>Now</p>
          <FormulaLine math="P(r)=4\pi r^{2}R^{2}(r)=4\pi r^{2}\left(\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{5/2}r\,e^{-(Zr/a_0)}\right)^{2}" />
          <FormulaLine math="=4\pi r^{2}\,\frac{1}{4\times6}\left(\frac{Z}{a_0}\right)^{5}r^{2}\,e^{-Zr/a_0}" />
          <FormulaLine math="=\frac{\pi}{6}r^{2}\left(\frac{Z}{a_0}\right)^{5}r^{2}\,e^{-Zr/a_0}=\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}r^{4}\,e^{-Zr/a_0}" />
          <p>For maxima or minima —</p>
          <FormulaLine math="\frac{d(P_r)}{dr}=0" />
          <FormulaLine math="\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}\left[4r^{3}e^{-\frac{Zr}{a_0}}+r^{4}e^{-\frac{Zr}{a_0}}\left(-\frac{Z}{a_0}\right)\right]" />
          <FormulaLine math="\frac{\pi}{6}\left(\frac{Z}{a_0}\right)^{5}r^{3}\,e^{-Zr/a_0}\left[1-\frac{Zr}{a_0}\right]" />
          <FormulaLine math="r_{mp}=\frac{4a_0}{Z}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={137}>
        <NoteBlock title="Radial Part Solution (printed table)">
          <DiagramBox title="Radial wave functions ψ (printed)">
            <p>A printed table of ψ (radial part) for a_0 in atomic units:</p>
          </DiagramBox>
          <FormulaLine math="1s\ (n=1,l=0):\ \psi=2\left(\frac{1}{a_0}\right)^{3/2}e^{-r/a_0}" />
          <FormulaLine math="2s\ (n=2,l=0):\ \psi=\frac{1}{\sqrt{8}}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/2a_0}" />
          <FormulaLine math="2p\ (n=2,l=1):\ \psi=\frac{1}{\sqrt{24}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}\,e^{-r/2a_0}" />
          <FormulaLine math="3s\ (n=3,l=0):\ \psi=\frac{2}{81\sqrt{3}}\left(\frac{1}{a_0}\right)^{3/2}\left(27-18\frac{r}{a_0}+2\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}" />
          <FormulaLine math="3p\ (n=3,l=1):\ \psi=\frac{2}{9\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(6\frac{r}{a_0}-2\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}" />
          <FormulaLine math="3d\ (n=3,l=2):\ \psi=\frac{4}{81\sqrt{30}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}" />
        </NoteBlock>
        <NoteBlock title="Nodes and radial-node counting">
          <p>
            <MathText math="\psi^{2}=0" /> zero probability (node).
          </p>
          <FormulaLine math="\text{node }|\psi^{2}|=0" />
          <FormulaLine math="\text{Radial node}=n-l-1" />
          <DataTable
            headers={["orbital", "n − l − 1", "radial nodes"]}
            rows={[
              ["1s", "1 − 0 − 1", "0"],
              ["2s", "2 − 0 − 1", "1"],
              ["2p", "2 − 1 − 1", "0"],
              ["3s", "3 − 0 − 1", "2"],
              ["3p", "3 − 1 − 1", "1"],
              ["3d", "3 − 2 − 1", "0"],
            ]}
          />
          <DiagramBox title="Radial nodes as concentric shells (printed)">
            <p>A bullseye of concentric green rings separated by dark gaps; the dark circles are the radial nodes.</p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Subshell orbital boxes">
          <DiagramBox title="s, p, d boxes (diagram)">
            <p>
              s: one box. p: three boxes labelled px, py, pz. d: five boxes labelled dxy, dyz, dzx, d(x²−y²), dz².
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="135-137" unclear={0} />
    </AtomicPartShell>
  );
}
