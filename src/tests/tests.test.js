import {
  stringBuilder,
  modeFactory,
  allStrings
} from "../components/scaleInfo/scaleInfoHelpers";
import { Major } from "../constants/scales";
import {
  rootC,
  eTuning,
  eString,
  MajorScaleNotes,
  majorFormula,
  sixStandardNotes,
  sixStandardNumbers
} from "./testData";

const commonProps = [rootC, eTuning, MajorScaleNotes, majorFormula];

it("modeFactory turns a mode into an array", () => {
  expect(modeFactory(Major, rootC)).toEqual([
    Major[0],
    Major[1].map(y => rootC[y]),
    Major[2],
    Major[3][0].map((y, i) => y)
  ]);
});
it("stringBuilder builds an E string", () => {
  expect(stringBuilder(rootC, 4, MajorScaleNotes)).toEqual(eString);
});

it("allStrings returns 6 strings in standard tuning, numsOn === false", () => {
  expect(allStrings(...commonProps, false, MajorScaleNotes)).toEqual(
    sixStandardNotes
  );
});
it("allStrings returns 6 strings in standard tuning, numsOn === true", () => {
  expect(allStrings(...commonProps, true, MajorScaleNotes)).toEqual(
    sixStandardNumbers
  );
});
