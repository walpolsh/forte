import React from "react";
import { ClockBackground } from "../../styledComponents";
import {
  cycleNames,
  triadsOnOff,
  numsCond,
  ARRCYCLE,
  calc,
  cycleStyles,
  triadOrSeventhChord,
  singleNoteStyles,
  cycleArrStyles
} from "./cycleHelpers";
import Typography from "@material-ui/core/Typography";
import { FabChordCycles, SingleNotes, CycleNotes } from "./StyledComponents";
export const Cycles = cycleNames.map((x, i) => i);
export const CycleArr = arr => ARRCYCLE.map(x => x(arr));

export const CycleDiv = (
  degrees,
  formula,
  chords,
  cycle,
  colors,
  numsOn,
  name,
  triadsOn,
  scaleIndex,
  relative,
  favsArr
) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
        key={scaleIndex}
      >
        <FabChordCycles
          variant="extended"
          style={{
            background: `${!relative || favsArr ? colors[0] : colors[scaleIndex]}`
          }}
          key={scaleIndex}
        >
          <Typography style={{ textTransform: "none" }}>
            {formula[0]} {name}
          </Typography>
        </FabChordCycles>
      </div>

      <br />
      <ClockBackground>
        {CycleArr(formula)[cycle].map((x, i) =>
          SingleNotes(x, i, calc, CycleArr, formula, cycle, singleNoteStyles, colors, numsCond, numsOn, degrees)
        )}
      </ClockBackground>
      <br />
      <div style={cycleArrStyles}>
        {CycleArr(formula)[cycle].map((x, i) =>
          CycleNotes(
            x,
            i,
            cycleStyles,
            colors,
            formula,
            numsCond,
            numsOn,
            degrees,
            triadsOnOff,
            triadsOn,
            chords,
            triadOrSeventhChord,
            SingleNotes
          )
        )}
      </div>
    </div>
  );
};
