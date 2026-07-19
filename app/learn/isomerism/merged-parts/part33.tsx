import SourcePart011 from "../parts/part11";
import SourcePart012 from "../parts/part12";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart33() {
  return (
    <MergedPartShell partNumber={33} title={'Optical activity, chirality & elements of symmetry'}>
      <MergedSourceSection sourcePart={11}><SourcePart011 /></MergedSourceSection>
      <MergedSourceSection sourcePart={12}><SourcePart012 /></MergedSourceSection>
    </MergedPartShell>
  );
}
