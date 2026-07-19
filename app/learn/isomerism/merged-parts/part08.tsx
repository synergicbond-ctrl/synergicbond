import SourcePart065 from "../parts/part65";
import SourcePart066 from "../parts/part66";
import SourcePart067 from "../parts/part67";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart08() {
  return (
    <MergedPartShell partNumber={8} title={'Enolisation and 1,3-dicarbonyl chemistry'}>
      <MergedSourceSection sourcePart={65}><SourcePart065 /></MergedSourceSection>
      <MergedSourceSection sourcePart={66}><SourcePart066 /></MergedSourceSection>
      <MergedSourceSection sourcePart={67}><SourcePart067 /></MergedSourceSection>
    </MergedPartShell>
  );
}
