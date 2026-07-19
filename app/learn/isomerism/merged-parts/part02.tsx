import SourcePart003 from "../parts/part03";
import SourcePart049 from "../parts/part49";
import SourcePart050 from "../parts/part50";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart02() {
  return (
    <MergedPartShell partNumber={2} title={'Ring-chain, functional isomerism & metamerism'}>
      <MergedSourceSection sourcePart={3}><SourcePart003 /></MergedSourceSection>
      <MergedSourceSection sourcePart={49}><SourcePart049 /></MergedSourceSection>
      <MergedSourceSection sourcePart={50}><SourcePart050 /></MergedSourceSection>
    </MergedPartShell>
  );
}
