import SourcePart086 from "../parts/part86";
import SourcePart087 from "../parts/part87";
import SourcePart088 from "../parts/part88";
import SourcePart089 from "../parts/part89";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart15() {
  return (
    <MergedPartShell partNumber={15} title={'Geometrical-isomerism exercise bank II'}>
      <MergedSourceSection sourcePart={86}><SourcePart086 /></MergedSourceSection>
      <MergedSourceSection sourcePart={87}><SourcePart087 /></MergedSourceSection>
      <MergedSourceSection sourcePart={88}><SourcePart088 /></MergedSourceSection>
      <MergedSourceSection sourcePart={89}><SourcePart089 /></MergedSourceSection>
    </MergedPartShell>
  );
}
