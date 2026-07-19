import SourcePart078 from "../parts/part78";
import SourcePart079 from "../parts/part79";
import SourcePart080 from "../parts/part80";
import SourcePart081 from "../parts/part81";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart13() {
  return (
    <MergedPartShell partNumber={13} title={'Cumulenes, spiranes and rigid-axis geometrical isomerism'}>
      <MergedSourceSection sourcePart={78}><SourcePart078 /></MergedSourceSection>
      <MergedSourceSection sourcePart={79}><SourcePart079 /></MergedSourceSection>
      <MergedSourceSection sourcePart={80}><SourcePart080 /></MergedSourceSection>
      <MergedSourceSection sourcePart={81}><SourcePart081 /></MergedSourceSection>
    </MergedPartShell>
  );
}
