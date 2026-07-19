import SourcePart097 from "../parts/part97";
import SourcePart098 from "../parts/part98";
import SourcePart099 from "../parts/part99";
import SourcePart100 from "../parts/part100";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart18() {
  return (
    <MergedPartShell partNumber={18} title={'Advanced E/Z assignments & geometrical-isomer counting'}>
      <MergedSourceSection sourcePart={97}><SourcePart097 /></MergedSourceSection>
      <MergedSourceSection sourcePart={98}><SourcePart098 /></MergedSourceSection>
      <MergedSourceSection sourcePart={99}><SourcePart099 /></MergedSourceSection>
      <MergedSourceSection sourcePart={100}><SourcePart100 /></MergedSourceSection>
    </MergedPartShell>
  );
}
