import SourcePart126 from "../parts/part126";
import SourcePart127 from "../parts/part127";
import SourcePart128 from "../parts/part128";
import SourcePart129 from "../parts/part129";
import SourcePart130 from "../parts/part130";
import SourcePart131 from "../parts/part131";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart24() {
  return (
    <MergedPartShell partNumber={24} title={'Lone pairs, hydrazine, H2O2 & conformer problems'}>
      <MergedSourceSection sourcePart={126}><SourcePart126 /></MergedSourceSection>
      <MergedSourceSection sourcePart={127}><SourcePart127 /></MergedSourceSection>
      <MergedSourceSection sourcePart={128}><SourcePart128 /></MergedSourceSection>
      <MergedSourceSection sourcePart={129}><SourcePart129 /></MergedSourceSection>
      <MergedSourceSection sourcePart={130}><SourcePart130 /></MergedSourceSection>
      <MergedSourceSection sourcePart={131}><SourcePart131 /></MergedSourceSection>
    </MergedPartShell>
  );
}
