import SourcePart073 from "../parts/part73";
import SourcePart074 from "../parts/part74";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart11() {
  return (
    <MergedPartShell partNumber={11} title={'Oximes, C=N and N=N geometrical isomerism'}>
      <MergedSourceSection sourcePart={73}><SourcePart073 /></MergedSourceSection>
      <MergedSourceSection sourcePart={74}><SourcePart074 /></MergedSourceSection>
    </MergedPartShell>
  );
}
