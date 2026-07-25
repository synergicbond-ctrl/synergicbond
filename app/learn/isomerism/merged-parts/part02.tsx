import SourcePart003 from "../parts/part03";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart02() {
  return (
    <MergedPartShell partNumber={2} title={'Tautomerism: types, conditions and mechanisms'}>
      <MergedSourceSection sourcePart={3}><SourcePart003 /></MergedSourceSection>
    </MergedPartShell>
  );
}
