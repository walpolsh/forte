import React, { useState } from "react";
import { mapOption } from "../../constants/helpers";
import { cycleNames } from "../ChordCycles/ChordCycles";

export const TuningMenu = (changeTuning, Tunings) => {
  const [defTuning, handleDefTuning] = useState("piano");
  return (
    <form onSubmit={e => handleDefTuning(e.target.value)}>
      <select
        value={defTuning}
        onChange={e => {
          changeTuning(Tunings[e.target.value]);
          handleDefTuning(e.preventDefault());
        }}
      >
        <option value="piano">Piano</option>
        <option value="standard">Six String: Standard</option>
        <option value="dropD">Six String: Drop D</option>
        <option value="dadgad">Six String: D A D G A D</option>
        <option value="standardSeven">Seven String: Standard</option>
        <option value="dropASeven">Seven String: Drop A</option>
        <option value="dropDGseven">Seven String: Drop D Drop G</option>
        <option value="standardEight">Eight String: Standard</option>
        <option value="standardBass">Bass: Standard</option>
        <option value="violin">Violin: G D A E</option>
        <option value="cello">Cello: C G D A</option>
      </select>
    </form>
  );
};

export const ScaleDropdown = (Scales, changeScale) => {
  const [defScale, handleDefScale] = useState();
  return (
    <form onSubmit={e => handleDefScale(e.target.value)}>
      <select
        value={defScale}
        onChange={e => {
          changeScale(Scales[e.target.value]);
          handleDefScale(e.preventDefault());
        }}
      >
        {Scales.map((scale, i) => (
          <option value={i}>{scale[0][2]}</option>
        ))}
      </select>
    </form>
  );
};

export const ScaleMenu = (arr, fn) => (
  <div>
    {arr.map((scale, i) => (
      <button
        id="keySig"
        key={scale + i}
        value={i}
        onClick={e => fn(arr[e.target.value])}
      >
        {scale[0][2] === "Whole Tone" ? "Symmetrical" : scale[0][2]}
      </button>
    ))}
  </div>
);

export const KeyBox = (Chromatic, changeKey, permute) =>
  Chromatic.map((note, i) => {
    return (
      <button
        id="keySig"
        key={note + i}
        value={i}
        onClick={e => changeKey(permute(Chromatic, e.target.value))}
      >
        {note}
      </button>
    );
  });

export const CycleMenu = (fn, arr) => {
  const [defCycle, handleDefCycle] = useState(cycleNames[0]);
  return (
    <form onSubmit={e => handleDefCycle(e.target.value)}>
      <select
        value={defCycle}
        onChange={e => {
          fn(arr[e.target.value]);
          handleDefCycle(e.preventDefault());
        }}
      >
        {mapOption(cycleNames)}
      </select>
    </form>
  );
};
