import SourcePart075 from "../parts/part75";
import SourcePart076 from "../parts/part76";
import SourcePart077 from "../parts/part77";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart12() {
  return (
    <MergedPartShell partNumber={12} title={'Cyclic geometrical isomerism & cycloalkenes'}>
      <MergedSourceSection sourcePart={75}><SourcePart075 /></MergedSourceSection>
      <MergedSourceSection sourcePart={76}><SourcePart076 /></MergedSourceSection>
      <MergedSourceSection sourcePart={77}><SourcePart077 /></MergedSourceSection>
    </MergedPartShell>
  );
}
