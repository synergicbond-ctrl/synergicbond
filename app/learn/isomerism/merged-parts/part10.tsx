import SourcePart006 from "../parts/part06";
import SourcePart070 from "../parts/part70";
import SourcePart071 from "../parts/part71";
import SourcePart072 from "../parts/part72";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart10() {
  return (
    <MergedPartShell partNumber={10} title={'Geometrical isomerism: fundamentals & basic counting'}>
      <MergedSourceSection sourcePart={6}><SourcePart006 /></MergedSourceSection>
      <MergedSourceSection sourcePart={70}><SourcePart070 /></MergedSourceSection>
      <MergedSourceSection sourcePart={71}><SourcePart071 /></MergedSourceSection>
      <MergedSourceSection sourcePart={72}><SourcePart072 /></MergedSourceSection>
    </MergedPartShell>
  );
}
