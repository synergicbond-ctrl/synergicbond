import SourcePart120 from "../parts/part120";
import SourcePart121 from "../parts/part121";
import SourcePart122 from "../parts/part122";
import SourcePart123 from "../parts/part123";
import SourcePart124 from "../parts/part124";
import SourcePart125 from "../parts/part125";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart23() {
  return (
    <MergedPartShell partNumber={23} title={'Conformer nomenclature, strain & gauche effects'}>
      <MergedSourceSection sourcePart={120}><SourcePart120 /></MergedSourceSection>
      <MergedSourceSection sourcePart={121}><SourcePart121 /></MergedSourceSection>
      <MergedSourceSection sourcePart={122}><SourcePart122 /></MergedSourceSection>
      <MergedSourceSection sourcePart={123}><SourcePart123 /></MergedSourceSection>
      <MergedSourceSection sourcePart={124}><SourcePart124 /></MergedSourceSection>
      <MergedSourceSection sourcePart={125}><SourcePart125 /></MergedSourceSection>
    </MergedPartShell>
  );
}
