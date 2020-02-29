import React from "react";
import { Circles, Face, Notes, Note } from "../../styledComponents";
import { concatCycle } from "./cycleHelpers";

export const cycleNames = [
  "Cycle Seconds",
  "Cycle Thirds",
  "Cycle Fourths",
  "Cycle Fifths",
  "Cycle Sixths",
  "Cycle Sevenths",
  "II-V-I",
  "I-II-V",
  "I-VII-VI",
  "I-V-VI-III",
  "I-V-VI-III-IV-I-IV-V ",
  "I-V-VI-VII",
  "I-V-IV",
  "II-V-I-VII-III-VI",
  "I-VII-III-I-II-III",
  "III-II-I",
  "II-V-I-VI"
];
export const Cycles = cycleNames.map((x, i) => i); //index based state

const invertCycle = arr => [arr[0]].concat(arr.slice(1).reverse());

const c2 = arr => concatCycle(0, 1, arr.length).map(x => arr[x]); //cycles
const c3 = arr => concatCycle(1, 2, arr.length).map(x => arr[x]);
const c5 = arr => concatCycle(3, 4, arr.length).map(x => arr[x]);
const c4 = arr => invertCycle(c5(arr));
const c6 = arr => invertCycle(c3(arr));
const c7 = arr => invertCycle(c2(arr));
const iiVI = arr => [1, 4, 0].map(x => arr[x]);
const iIIV = arr => [0, 1, 4].map(x => arr[x]);
const iVIIVI = arr => [0, 6, 5].map(x => arr[x]);
const iVVIIII = arr => [0, 4, 5, 2].map(x => arr[x]);
const iVVIIIIIVIIVV = arr => [0, 4, 5, 2, 3, 0, 3, 4].map(x => arr[x]);
const iVViVii = arr => [0, 4, 5, 6].map(x => arr[x]);
const iVIv = arr => [0, 4, 3].map(x => arr[x]);
const IIVIVIIIIIVI = arr => [1, 4, 0, 6, 2, 5].map(x => arr[x]);
const IVIIIIIIIIIII = arr => [0, 6, 2, 0, 1, 2].map(x => arr[x]);
const IIIIII = arr => [2, 1, 0].map(x => arr[x]);
const IIVIVI = arr => [1, 4, 0, 5].map(x => arr[x]);

export const CycleArr = arr => [
  c2(arr),
  c3(arr),
  c4(arr),
  c5(arr),
  c6(arr),
  c7(arr),
  iiVI(arr),
  iIIV(arr),
  iVIIVI(arr),
  iVVIIII(arr),
  iVVIIIIIVIIVV(arr),
  iVViVii(arr),
  iVIv(arr),
  IIVIVIIIIIVI(arr),
  IVIIIIIIIIIII(arr),
  IIIIII(arr),
  IIVIVI(arr)
];
export const CycleDiv = (
  degrees,
  formula,
  chords,
  cycle,
  colors,
  numsOn,
  name,
  triadsOn,
  calc = 360 / CycleArr(formula)[cycle].length,
  triads = chords.map(x => (x.slice(0, 3) === "dom" ? "maj" : x.slice(0, 3))),
  numsCond = x =>
    numsOn ? degrees[formula.indexOf(x)] : formula[formula.indexOf(x)]
) => {
  const SingleNotes = (y, j) => (
    <Notes key={y + j}>
      <Note ticks={`rotate(${j * calc}deg)`}>
        <div
          style={{
            transform: `rotate(${-j * calc}deg)`
          }}>
          <Circles backColor={colors[formula.indexOf(y)]}>
            {numsCond(y)}
          </Circles>
        </div>
      </Note>
    </Notes>
  );
  const cycleNotes = x => {
    return (
      <span
        key={x}
        style={{
          background: colors[formula.indexOf(x)],
          border: "1px solid black",
          margin: "2px",
          padding: "2px"
        }}>{` ${numsCond(x)} ${
        !triadsOn ? chords[formula.indexOf(x)] : triads[formula.indexOf(x)]
      } `}</span>
    );
  };
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center"
      }}>
      <h2>{`${formula[0]} ${name}`}</h2>
      <div style={{ margin: "auto" }}>
        <Face>{CycleArr(formula)[cycle].map(SingleNotes)}</Face>
      </div>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {CycleArr(formula)[cycle].map(cycleNotes)}
      </div>
    </div>
  );
};
