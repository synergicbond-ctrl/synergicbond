import SourcePart110 from "../parts/part110";
import SourcePart111 from "../parts/part111";
import SourcePart112 from "../parts/part112";
import SourcePart113 from "../parts/part113";
import SourcePart114 from "../parts/part114";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart21() {
  return (
    <MergedPartShell partNumber={21} title={'Ethane, propane, n-butane & rotational barriers'}>
      <MergedSourceSection sourcePart={110}><SourcePart110 /></MergedSourceSection>
      <MergedSourceSection sourcePart={111}><SourcePart111 /></MergedSourceSection>
      <MergedSourceSection sourcePart={112}><SourcePart112 /></MergedSourceSection>
      <MergedSourceSection sourcePart={113}><SourcePart113 /></MergedSourceSection>
      <MergedSourceSection sourcePart={114}><SourcePart114 /></MergedSourceSection>
    </MergedPartShell>
  );
}
