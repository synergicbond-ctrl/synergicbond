import SourcePart068 from "../parts/part68";
import SourcePart069 from "../parts/part69";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart09() {
  return (
    <MergedPartShell partNumber={9} title={'Special enol stability and intramolecular H-bonding'}>
      <MergedSourceSection sourcePart={68}><SourcePart068 /></MergedSourceSection>
      <MergedSourceSection sourcePart={69}><SourcePart069 /></MergedSourceSection>
    </MergedPartShell>
  );
}
