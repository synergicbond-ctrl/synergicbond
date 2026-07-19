import SourcePart101 from "../parts/part101";
import SourcePart102 from "../parts/part102";
import SourcePart103 from "../parts/part103";
import SourcePart104 from "../parts/part104";
import SourcePart105 from "../parts/part105";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart19() {
  return (
    <MergedPartShell partNumber={19} title={'Symmetry-reduced GI counting & truxilic acid'}>
      <MergedSourceSection sourcePart={101}><SourcePart101 /></MergedSourceSection>
      <MergedSourceSection sourcePart={102}><SourcePart102 /></MergedSourceSection>
      <MergedSourceSection sourcePart={103}><SourcePart103 /></MergedSourceSection>
      <MergedSourceSection sourcePart={104}><SourcePart104 /></MergedSourceSection>
      <MergedSourceSection sourcePart={105}><SourcePart105 /></MergedSourceSection>
    </MergedPartShell>
  );
}
