import React from "react";
import { Wrap, StringContainer, PianoKey, PianoContainer } from "../../styledComponents";
import { permute } from "../../constants/helpers";
import { Chromatic } from "../../constants/scales";
import { CycleArr } from "../ChordCycles/ChordCycles";

const [red, yellow, blue] = ["#ff4637", "#ffc107", "#31a2fc"];
export const colors = [red, blue, yellow, blue, yellow, blue, yellow, blue];

const concatString = str => str.concat(str).concat(str[0]);

export const stringBuilder = (a1, idx, mode) => {
  return permute(a1, idx).map(x => (mode.includes(x) ? x : ""));
};

export const modeFactory = (mode, root) => {
  return [mode[0], mode[1].map(y => root[y]), mode[2], mode[3][0]];
};

export function allStrings(tuning, degrees, numsOn, relativeFormula, windowWidth, formula) {
  function setScale(startNote) {
    return stringBuilder(Chromatic, startNote, formula).map((x, i) =>
      x ? (numsOn ? degrees[relativeFormula.indexOf(x)] : x) : ""
    );
  }
  const concatSmallString = str => str.concat(str[0]);

  return tuning.map(startNote =>
    windowWidth < 1000 ? concatSmallString(setScale(startNote)) : concatString(setScale(startNote))
  );
}

export const PianoOrFretboard = (
  tuning,
  string,
  colors,
  relativeFormula,
  degrees,
  windowWidth,
  numsOn,
  inversion,
  arpsMode,
  i,
  isLeftHanded
) => {
  let piano = (
    <PianoContainer key={i} windowWidth={windowWidth < 1000 ? 13 : 25}>
      {PianoKey(string, colors, relativeFormula, degrees, windowWidth, numsOn)}
    </PianoContainer>
  );
  let guitar = (
    <Wrap key={i}>
      {StringContainer(string, colors, relativeFormula, degrees, windowWidth, i, numsOn, inversion, arpsMode, isLeftHanded)}
    </Wrap>
  );

  return tuning[0] === 0 ? piano : guitar;
};

export const inversionFactory = (n, inversions) => [...Array(n)].map((_, i) => inversions[i]);

export const closedTriad = chord => [chord[0], chord[1], chord[2]];
export const openPosition = chord => [chord[0], chord[2], chord[1]];
export const closedPosition = chord => [chord[0], chord[1], chord[2], chord[3]];
export const drop2 = chord => [chord[2], chord[0], chord[1], chord[3]];
export const drop3 = chord => [chord[1], chord[0], chord[2], chord[3]];
export const drop23 = chord => [chord[1], chord[2], chord[0], chord[3]];
export const drop24 = chord => [chord[0], chord[2], chord[1], chord[3]];

export const chordNames = ["Closed Position", "Drop 2", "Drop 3", "Drop 2 and 3", "Drop 2 and 4"];
export const triadNames = ["Closed Position", "Open Position"];
export const styleObj = (colors, relativeFormula, inversion) => {
  return {
    section: { display: "grid", justifyContent: "center" },
    width: {
      transition: "all 0.5s ease",
      width: "90vw",
      maxWidth: "1750px",
      justifyContent: "center"
    },
    padding: { padding: "10px" },
    arpeggios: {
      background: colors[relativeFormula.indexOf(inversion[0])],
      width: "6vw",
      margin: "auto",
      border: "1px solid black"
    },
    grid: {
      display: "grid",
      gridTemplateColumn: `repeat(${relativeFormula.length}, 1fr)`,
      margin: "auto",
      justifyContent: "center"
    }
  };
};
export const seventhChords = [closedPosition, drop2, drop3, drop23, drop24];
export const triadChords = [closedTriad, openPosition];
export const arpsCond = (arpsMode, inversions, cycle) => {
  return arpsMode ? CycleArr(inversionFactory(inversions.length, inversions))[cycle] : inversionFactory(1, inversions);
};
