import SourcePart005 from "../parts/part05";
import SourcePart062 from "../parts/part62";
import SourcePart063 from "../parts/part63";
import SourcePart064 from "../parts/part64";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart07() {
  return (
    <MergedPartShell partNumber={7} title={'Tautomer stability & enol-content comparisons'}>
      <MergedSourceSection sourcePart={5}><SourcePart005 /></MergedSourceSection>
      <MergedSourceSection sourcePart={62}><SourcePart062 /></MergedSourceSection>
      <MergedSourceSection sourcePart={63}><SourcePart063 /></MergedSourceSection>
      <MergedSourceSection sourcePart={64}><SourcePart064 /></MergedSourceSection>
    </MergedPartShell>
  );
}
