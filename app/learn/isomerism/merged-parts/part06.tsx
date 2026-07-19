import SourcePart004 from "../parts/part04";
import SourcePart059 from "../parts/part59";
import SourcePart060 from "../parts/part60";
import SourcePart061 from "../parts/part61";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart06() {
  return (
    <MergedPartShell partNumber={6} title={'Tautomerism fundamentals & prototropy'}>
      <MergedSourceSection sourcePart={4}><SourcePart004 /></MergedSourceSection>
      <MergedSourceSection sourcePart={59}><SourcePart059 /></MergedSourceSection>
      <MergedSourceSection sourcePart={60}><SourcePart060 /></MergedSourceSection>
      <MergedSourceSection sourcePart={61}><SourcePart061 /></MergedSourceSection>
    </MergedPartShell>
  );
}
