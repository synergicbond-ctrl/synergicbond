import SourcePart166 from "../parts/part166";
import SourcePart167 from "../parts/part167";
import SourcePart168 from "../parts/part168";
import SourcePart169 from "../parts/part169";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart32() {
  return (
    <MergedPartShell partNumber={32} title={'Polycyclic rings, steroid junctions & larger cycloalkanes'}>
      <MergedSourceSection sourcePart={166}><SourcePart166 /></MergedSourceSection>
      <MergedSourceSection sourcePart={167}><SourcePart167 /></MergedSourceSection>
      <MergedSourceSection sourcePart={168}><SourcePart168 /></MergedSourceSection>
      <MergedSourceSection sourcePart={169}><SourcePart169 /></MergedSourceSection>
    </MergedPartShell>
  );
}
