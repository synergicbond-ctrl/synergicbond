import SourcePart136 from "../parts/part136";
import SourcePart137 from "../parts/part137";
import SourcePart138 from "../parts/part138";
import SourcePart139 from "../parts/part139";
import SourcePart140 from "../parts/part140";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart26() {
  return (
    <MergedPartShell partNumber={26} title={'Cyclopropane, cyclobutane & cyclopentane'}>
      <MergedSourceSection sourcePart={136}><SourcePart136 /></MergedSourceSection>
      <MergedSourceSection sourcePart={137}><SourcePart137 /></MergedSourceSection>
      <MergedSourceSection sourcePart={138}><SourcePart138 /></MergedSourceSection>
      <MergedSourceSection sourcePart={139}><SourcePart139 /></MergedSourceSection>
      <MergedSourceSection sourcePart={140}><SourcePart140 /></MergedSourceSection>
    </MergedPartShell>
  );
}
