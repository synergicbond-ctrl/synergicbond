import SourcePart001 from "../parts/part01";
import SourcePart002 from "../parts/part02";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart01() {
  return (
    <MergedPartShell partNumber={1} title={'Foundations: classification, chain & position isomerism'}>
      <MergedSourceSection sourcePart={1}><SourcePart001 /></MergedSourceSection>
      <MergedSourceSection sourcePart={2}><SourcePart002 /></MergedSourceSection>
    </MergedPartShell>
  );
}
