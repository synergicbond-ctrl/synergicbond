import SourcePart015 from "../parts/part15";
import SourcePart017 from "../parts/part17";
import SourcePart018 from "../parts/part18";
import SourcePart019 from "../parts/part19";
import SourcePart020 from "../parts/part20";
import SourcePart021 from "../parts/part21";
import SourcePart022 from "../parts/part22";
import { MergedPartShell, MergedSourceSection } from "./_shared";

export default function IsomerismMergedPart36() {
  return (
    <MergedPartShell partNumber={36} title={'Stereoisomer counting & visual counting tables'}>
      <MergedSourceSection sourcePart={15}><SourcePart015 /></MergedSourceSection>
      <MergedSourceSection sourcePart={17}><SourcePart017 /></MergedSourceSection>
      <MergedSourceSection sourcePart={18}><SourcePart018 /></MergedSourceSection>
      <MergedSourceSection sourcePart={19}><SourcePart019 /></MergedSourceSection>
      <MergedSourceSection sourcePart={20}><SourcePart020 /></MergedSourceSection>
      <MergedSourceSection sourcePart={21}><SourcePart021 /></MergedSourceSection>
      <MergedSourceSection sourcePart={22}><SourcePart022 /></MergedSourceSection>
    </MergedPartShell>
  );
}
