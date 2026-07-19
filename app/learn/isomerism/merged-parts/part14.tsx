import SourcePart082 from "../parts/part82";
import SourcePart083 from "../parts/part83";
import SourcePart084 from "../parts/part84";
import SourcePart085 from "../parts/part85";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart14() {
  return (
    <MergedPartShell partNumber={14} title={'Geometrical-isomerism exercise bank I'}>
      <MergedSourceSection sourcePart={82}><SourcePart082 /></MergedSourceSection>
      <MergedSourceSection sourcePart={83}><SourcePart083 /></MergedSourceSection>
      <MergedSourceSection sourcePart={84}><SourcePart084 /></MergedSourceSection>
      <MergedSourceSection sourcePart={85}><SourcePart085 /></MergedSourceSection>
    </MergedPartShell>
  );
}
