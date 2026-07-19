import SourcePart115 from "../parts/part115";
import SourcePart116 from "../parts/part116";
import SourcePart117 from "../parts/part117";
import SourcePart118 from "../parts/part118";
import SourcePart119 from "../parts/part119";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart22() {
  return (
    <MergedPartShell partNumber={22} title={'Substituted bond rotation, dihaloethanes & torsional energy'}>
      <MergedSourceSection sourcePart={115}><SourcePart115 /></MergedSourceSection>
      <MergedSourceSection sourcePart={116}><SourcePart116 /></MergedSourceSection>
      <MergedSourceSection sourcePart={117}><SourcePart117 /></MergedSourceSection>
      <MergedSourceSection sourcePart={118}><SourcePart118 /></MergedSourceSection>
      <MergedSourceSection sourcePart={119}><SourcePart119 /></MergedSourceSection>
    </MergedPartShell>
  );
}
