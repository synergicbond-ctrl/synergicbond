import SourcePart056 from "../parts/part56";
import SourcePart057 from "../parts/part57";
import SourcePart058 from "../parts/part58";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart05() {
  return (
    <MergedPartShell partNumber={5} title={'Constitutional isomers of alkanes'}>
      <MergedSourceSection sourcePart={56}><SourcePart056 /></MergedSourceSection>
      <MergedSourceSection sourcePart={57}><SourcePart057 /></MergedSourceSection>
      <MergedSourceSection sourcePart={58}><SourcePart058 /></MergedSourceSection>
    </MergedPartShell>
  );
}
