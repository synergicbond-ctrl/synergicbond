import SourcePart161 from "../parts/part161";
import SourcePart162 from "../parts/part162";
import SourcePart163 from "../parts/part163";
import SourcePart164 from "../parts/part164";
import SourcePart165 from "../parts/part165";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart31() {
  return (
    <MergedPartShell partNumber={31} title={'Transannular, decalin & orbital anomeric effects'}>
      <MergedSourceSection sourcePart={161}><SourcePart161 /></MergedSourceSection>
      <MergedSourceSection sourcePart={162}><SourcePart162 /></MergedSourceSection>
      <MergedSourceSection sourcePart={163}><SourcePart163 /></MergedSourceSection>
      <MergedSourceSection sourcePart={164}><SourcePart164 /></MergedSourceSection>
      <MergedSourceSection sourcePart={165}><SourcePart165 /></MergedSourceSection>
    </MergedPartShell>
  );
}
