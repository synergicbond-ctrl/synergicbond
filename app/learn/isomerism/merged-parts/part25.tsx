import SourcePart010 from "../parts/part10";
import SourcePart132 from "../parts/part132";
import SourcePart133 from "../parts/part133";
import SourcePart134 from "../parts/part134";
import SourcePart135 from "../parts/part135";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart25() {
  return (
    <MergedPartShell partNumber={25} title={'Cyclic conformations & classical strain theories'}>
      <MergedSourceSection sourcePart={10}><SourcePart010 /></MergedSourceSection>
      <MergedSourceSection sourcePart={132}><SourcePart132 /></MergedSourceSection>
      <MergedSourceSection sourcePart={133}><SourcePart133 /></MergedSourceSection>
      <MergedSourceSection sourcePart={134}><SourcePart134 /></MergedSourceSection>
      <MergedSourceSection sourcePart={135}><SourcePart135 /></MergedSourceSection>
    </MergedPartShell>
  );
}
