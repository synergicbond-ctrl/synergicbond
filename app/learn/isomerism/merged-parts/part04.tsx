import SourcePart053 from "../parts/part53";
import SourcePart054 from "../parts/part54";
import SourcePart055 from "../parts/part55";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart04() {
  return (
    <MergedPartShell partNumber={4} title={'Structural-isomer enumeration II'}>
      <MergedSourceSection sourcePart={53}><SourcePart053 /></MergedSourceSection>
      <MergedSourceSection sourcePart={54}><SourcePart054 /></MergedSourceSection>
      <MergedSourceSection sourcePart={55}><SourcePart055 /></MergedSourceSection>
    </MergedPartShell>
  );
}
