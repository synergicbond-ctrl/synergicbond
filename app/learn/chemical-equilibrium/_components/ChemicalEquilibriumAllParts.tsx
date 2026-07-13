import Part01 from "./Part01";
import Part02 from "./Part02";
import Part03 from "./Part03";
import Part04 from "./Part04";
import Part05 from "./Part05";
import Part06 from "./Part06";
import Part07 from "./Part07";
import Part08 from "./Part08";
import Part09 from "./Part09";
import Part10 from "./Part10";
import Part11 from "./Part11";
import Part12 from "./Part12";
import Part13 from "./Part13";
import Part14 from "./Part14";
import Part15 from "./Part15";
import Part16 from "./Part16";
import Part17 from "./Part17";
import Part18 from "./Part18";

const Parts = [Part01, Part02, Part03, Part04, Part05, Part06, Part07, Part08, Part09, Part10, Part11, Part12, Part13, Part14, Part15, Part16, Part17, Part18];

export default function ChemicalEquilibriumAllParts() {
  return <main>{Parts.map((Part, index) => <Part key={index} />)}</main>;
}
