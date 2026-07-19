import SourcePart042 from "../parts/part42";
import SourcePart043 from "../parts/part43";
import SourcePart044 from "../parts/part44";
import SourcePart045 from "../parts/part45";
import SourcePart046 from "../parts/part46";
import SourcePart047 from "../parts/part47";
import SourcePart048 from "../parts/part48";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart40() {
  return (
    <MergedPartShell partNumber={40} title={'Optical chirality exercise bank III & final answer key'}>
      <MergedSourceSection sourcePart={42}><SourcePart042 /></MergedSourceSection>
      <MergedSourceSection sourcePart={43}><SourcePart043 /></MergedSourceSection>
      <MergedSourceSection sourcePart={44}><SourcePart044 /></MergedSourceSection>
      <MergedSourceSection sourcePart={45}><SourcePart045 /></MergedSourceSection>
      <MergedSourceSection sourcePart={46}><SourcePart046 /></MergedSourceSection>
      <MergedSourceSection sourcePart={47}><SourcePart047 /></MergedSourceSection>
      <MergedSourceSection sourcePart={48}><SourcePart048 /></MergedSourceSection>
    </MergedPartShell>
  );
}
