import { Cycle2, Cycle3, Cycle4, Cycle5, Cycle6, Cycle7 } from "./cycles";

export const cycleNames = [
  "Cycle Seconds",
  "Cycle Thirds",
  "Cycle Fourths",
  "Cycle Fifths",
  "Cycle Sixths",
  "Cycle Sevenths",
  "II-V-I",
  "I-II-V",
  "I-VI-III-II",
  "I-VII-VI",
  "I-V-VI-III",
  "I-V-VI-III-VII",
  "I-V-VI-III-IV-I-IV-V ",
  "I-V-VI-VII",
  "I-V-IV",
  "II-V-I-VII-III-VI",
  "I-VII-III-I-II-III",
  "III-II-I",
  "II-V-I-VI"
];

export function triadsOnOff(triadsOn, chords, formula, triads, y) {
  return !triadsOn ? chords[formula.indexOf(y)] : triads(chords)[formula.indexOf(y)];
}

export function numsCond(x, numsOn, degrees, formula) {
  return numsOn ? degrees[formula.indexOf(x)] : formula[formula.indexOf(x)];
}

const c2 = arr => Cycle2.map(x => arr[x]); //cycles
const c3 = arr => Cycle3.map(x => arr[x]);
const c4 = arr => Cycle4.map(x => arr[x]);
const c5 = arr => Cycle5.map(x => arr[x]);
const c6 = arr => Cycle6.map(x => arr[x]);
const c7 = arr => Cycle7.map(x => arr[x]);
const iiVI = arr => [1, 4, 0].map(x => arr[x]);
const iIIV = arr => [0, 1, 4].map(x => arr[x]);
const IviiiiII = arr => [0, 5, 2, 1].map(x => arr[x]);
const iVIIVI = arr => [0, 6, 5].map(x => arr[x]);
const iVVIIII = arr => [0, 4, 5, 2].map(x => arr[x]);
const iVVIIIIVII = arr => [0, 4, 5, 2, 6].map(x => arr[x]);
const iVVIIIIIVIIVV = arr => [0, 4, 5, 2, 3, 0, 3, 4].map(x => arr[x]);
const iVViVii = arr => [0, 4, 5, 6].map(x => arr[x]);
const iVIv = arr => [0, 4, 3].map(x => arr[x]);
const IIVIVIIIIIVI = arr => [1, 4, 0, 6, 2, 5].map(x => arr[x]);
const IVIIIIIIIIIII = arr => [0, 6, 2, 0, 1, 2].map(x => arr[x]);
const IIIIII = arr => [2, 1, 0].map(x => arr[x]);
const IIVIVI = arr => [1, 4, 0, 5].map(x => arr[x]);
export const ARRCYCLE = [
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  iiVI,
  iIIV,
  IviiiiII,
  iVIIVI,
  iVVIIII,
  iVVIIIIVII,
  iVVIIIIIVIIVV,
  iVViVii,
  iVIv,
  IIVIVIIIIIVI,
  IVIIIIIIIIIII,
  IIIIII,
  IIVIVI
];

export function calc(CycleArr, formula, cycle) {
  return 360 / CycleArr(formula)[cycle].filter(x => x).length;
}
export const cycleStyles = (colors, formula, x) => {
  return {
    background: colors[formula.indexOf(x)],
    border: "1px solid black",
    margin: "2px",
    padding: "2px"
  };
};
export function triadOrSeventhChord(chords) {
  return chords.map(x => (x.slice(0, 3) === "dom" ? "maj" : x.slice(0, 3)));
}
export function singleNoteStyles(i, calc, CycleArr, formula, cycle) {
  return {
    transform: `rotate(${-i * calc(CycleArr, formula, cycle)}deg)`
  };
}
export const cycleArrStyles = {
  display: "flex",
  flexWrap: "wrap",
  margin: "auto",
  justifyContent: "center"
};
