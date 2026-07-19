import SourcePart007 from "../parts/part07";
import SourcePart094 from "../parts/part94";
import SourcePart095 from "../parts/part95";
import SourcePart096 from "../parts/part96";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart17() {
  return (
    <MergedPartShell partNumber={17} title={'cis/trans, E/Z nomenclature & cyclic CIP'}>
      <MergedSourceSection sourcePart={7}><SourcePart007 /></MergedSourceSection>
      <MergedSourceSection sourcePart={94}><SourcePart094 /></MergedSourceSection>
      <MergedSourceSection sourcePart={95}><SourcePart095 /></MergedSourceSection>
      <MergedSourceSection sourcePart={96}><SourcePart096 /></MergedSourceSection>
    </MergedPartShell>
  );
}
