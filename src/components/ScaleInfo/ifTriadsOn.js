import { CycleArr } from "../ChordCycles/ChordCycles";

function sliceDomForMaj(x) {
  return x.slice(0, 3) === "dom" ? "maj" : x.slice(0, 3);
}
export function ifTriadsOn(triadsOn, chords, cycle) {
  return triadsOn ? CycleArr(chords)[cycle].map(x => sliceDomForMaj(x)) : CycleArr(chords)[cycle];
}
