import SourcePart008 from "../parts/part08";
import SourcePart090 from "../parts/part90";
import SourcePart091 from "../parts/part91";
import SourcePart092 from "../parts/part92";
import SourcePart093 from "../parts/part93";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart16() {
  return (
    <MergedPartShell partNumber={16} title={'GI exercise finale, properties, dipole & stability'}>
      <MergedSourceSection sourcePart={8}><SourcePart008 /></MergedSourceSection>
      <MergedSourceSection sourcePart={90}><SourcePart090 /></MergedSourceSection>
      <MergedSourceSection sourcePart={91}><SourcePart091 /></MergedSourceSection>
      <MergedSourceSection sourcePart={92}><SourcePart092 /></MergedSourceSection>
      <MergedSourceSection sourcePart={93}><SourcePart093 /></MergedSourceSection>
    </MergedPartShell>
  );
}
