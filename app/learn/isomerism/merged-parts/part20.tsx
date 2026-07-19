import SourcePart009 from "../parts/part09";
import SourcePart106 from "../parts/part106";
import SourcePart107 from "../parts/part107";
import SourcePart108 from "../parts/part108";
import SourcePart109 from "../parts/part109";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart20() {
  return (
    <MergedPartShell partNumber={20} title={'Conformational isomerism, projections & Newman analysis'}>
      <MergedSourceSection sourcePart={9}><SourcePart009 /></MergedSourceSection>
      <MergedSourceSection sourcePart={106}><SourcePart106 /></MergedSourceSection>
      <MergedSourceSection sourcePart={107}><SourcePart107 /></MergedSourceSection>
      <MergedSourceSection sourcePart={108}><SourcePart108 /></MergedSourceSection>
      <MergedSourceSection sourcePart={109}><SourcePart109 /></MergedSourceSection>
    </MergedPartShell>
  );
}
