import React from "react";
import Typography from "@material-ui/core/Typography";
import { CircledNoteOnWheel, Notes, Note } from "../../styledComponents";

import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
export const FabChordCycles = styled(Fab)`
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.54);
  color: rgba(0, 0, 0, 0.54);
  font-size: 20px;
  scroll-behavior: smooth;
  text-transform: none;
`;
export const SingleNotes = (x, i, calc, CycleArr, formula, cycle, singleNoteStyles, colors, numsCond, numsOn, degrees) => (
  <Notes key={x + i}>
    <Note key={x + i} ticks={`rotate(${i * calc(CycleArr, formula, cycle)}deg)`}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="h1"
        style={singleNoteStyles(i, calc, CycleArr, formula, cycle)}
      >
        <CircledNoteOnWheel backColor={`${colors[formula.indexOf(x)]}`}>{`${numsCond(
          x,
          numsOn,
          degrees,
          formula
        )}`}</CircledNoteOnWheel>
      </Typography>
    </Note>
  </Notes>
);
export const CycleNotes = (
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
  triadOrSeventhChord
) => {
  return (
    <Typography variant="body2" color="textSecondary" component="span" key={x + i * 2} style={cycleStyles(colors, formula, x)}>
      {numsCond(x, numsOn, degrees, formula) + " "}
      {triadsOnOff(triadsOn, chords, formula, triadOrSeventhChord, x)}
    </Typography>
  );
};
