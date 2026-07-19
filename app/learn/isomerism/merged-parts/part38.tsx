import SourcePart016 from "../parts/part16";
import SourcePart030 from "../parts/part30";
import SourcePart031 from "../parts/part31";
import SourcePart032 from "../parts/part32";
import SourcePart033 from "../parts/part33";
import SourcePart034 from "../parts/part34";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart38() {
  return (
    <MergedPartShell partNumber={38} title={'Chirality without chiral carbon + exercise bank I'}>
      <MergedSourceSection sourcePart={16}><SourcePart016 /></MergedSourceSection>
      <MergedSourceSection sourcePart={30}><SourcePart030 /></MergedSourceSection>
      <MergedSourceSection sourcePart={31}><SourcePart031 /></MergedSourceSection>
      <MergedSourceSection sourcePart={32}><SourcePart032 /></MergedSourceSection>
      <MergedSourceSection sourcePart={33}><SourcePart033 /></MergedSourceSection>
      <MergedSourceSection sourcePart={34}><SourcePart034 /></MergedSourceSection>
    </MergedPartShell>
  );
}
