import SourcePart051 from "../parts/part51";
import SourcePart052 from "../parts/part52";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart03() {
  return (
    <MergedPartShell partNumber={3} title={'Structural-isomer enumeration I'}>
      <MergedSourceSection sourcePart={51}><SourcePart051 /></MergedSourceSection>
      <MergedSourceSection sourcePart={52}><SourcePart052 /></MergedSourceSection>
    </MergedPartShell>
  );
}
