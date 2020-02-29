import React from "react";
import { permute } from "../../constants/helpers";
import { modeFactory, allStrings, colors } from "./scaleInfoHelpers";
import { CycleDiv, CycleArr } from "../ChordCycles/ChordCycles";
import { Frets } from "../../constants/scales";

import {
  Wrap,
  LargeContainer,
  PianoKey,
  PianoContainer,
  Dots
} from "../../styledComponents";
import uuidv1 from "uuid/v1";

let idx = 0;
// (x, y) = (r * cos(θ), r * sin(θ)) r is the radius of a circle and θ is the angle in radians
export const ScaleInfo = (
  scale,
  tuning,
  root,
  numsOn,
  Chromatic,
  changeFavs,
  favs,
  arpsOn,
  showArps,
  favsArr,
  cycle,
  windowWidth,
  triadsOn,
  relative,
  favsShowing = favsArr && favs.length
) => {
  if (arpsOn) scale = [scale[idx]];
  if (favsShowing) scale = favs;
  if (favsShowing && arpsOn) scale = [scale[idx]];
  if (favs.length === 0) favsArr = false;
  return scale.map((mode, scaleIndex) => {
    const [degrees, formula, name, chords] = modeFactory(mode, root);
    let formula2 =
      relative && !favsArr
        ? permute(scale[0][1].map(x => root[x]), scaleIndex)
        : formula;
    const propsAllStrings = [
      Chromatic,
      tuning,
      degrees,
      numsOn,
      formula2,
      windowWidth
    ];
    const containerProps = str => [str, colors, formula2, degrees, windowWidth];

    const cCycle = triadsOn
      ? CycleArr(chords)[cycle].map(x =>
          x.slice(0, 3) === "dom" ? "maj" : x.slice(0, 3)
        )
      : CycleArr(chords)[cycle];

    const dCycle = CycleArr(degrees)[cycle];

    const fCycle = CycleArr(formula2)[cycle];

    const inversions = formula2
      .map((_, j) => permute(formula2, j))
      .map(y => y.filter((_, k) => k % 2 === 0));

    const inversionFactory = n => [...Array(n)].map((_, i) => inversions[i]);

    const arpsCond = arpsOn
      ? CycleArr(inversionFactory(inversions.length))[cycle]
      : inversionFactory(1);

    const pianoFretboardCond = (string, i, inversion) =>
      tuning[0] === 0 ? (
        <PianoContainer windowWidth={windowWidth < 1000 ? 13 : 25}>
          {PianoKey(...containerProps(string), numsOn, inversion, arpsOn)}
        </PianoContainer>
      ) : (
        <Wrap>
          {LargeContainer(
            ...containerProps(string),
            i,
            numsOn,
            inversion,
            arpsOn
          )}
        </Wrap>
      );

    const allStrFn = inversion =>
      allStrings(...propsAllStrings, arpsOn ? inversion : formula2).map(
        (string, i) => (
          <div key={uuidv1()}>{pianoFretboardCond(string, i, inversion)}</div>
        )
      );
    return (
      <section
        style={{ display: "grid", justifyContent: "center" }}
        key={uuidv1()}>
        <div style={{ width: "90vw", maxWidth: "1750px" }}>
          {CycleDiv(
            degrees,
            formula2,
            chords,
            cycle,
            colors,
            numsOn,
            name,
            triadsOn
          )}
          <br />
          <button
            onClick={() => {
              showArps(!arpsOn);
              idx = scaleIndex;
            }}>
            {!arpsOn ? `Show Arpeggios` : `Hide Arpeggios`}
          </button>
          <button
            onClick={() =>
              (favsArr && favs.includes(mode)) ||
              (arpsOn && favsArr && favs.includes(mode))
                ? changeFavs(() => favs.filter(y => y !== mode))
                : favs.includes(mode)
                ? null
                : changeFavs(favs.concat([mode]))
            }>
            {favsShowing
              ? "Remove From Favs"
              : favs.includes(mode)
              ? favs.length === 0
                ? "Add To Favs"
                : "Saved"
              : "Add To Favs"}
          </button>
          <div style={{ marginTop: "10px" }}>
            {arpsCond.map((inversion, inversionIndex) => {
              return (
                <div key={inversion + inversionIndex}>
                  {arpsOn && (
                    <div
                      style={{
                        background: colors[formula2.indexOf(inversion[0])],
                        width: "6vw",
                        margin: "auto",
                        border: "1px solid black"
                      }}>
                      {numsOn ? dCycle[inversionIndex] : fCycle[inversionIndex]}{" "}
                      {cCycle[inversionIndex]}
                    </div>
                  )}
                  <br />
                  {allStrFn(triadsOn ? inversion.slice(0, 3) : inversion)}
                  {tuning[0] !== 0 && Dots(windowWidth, Frets(windowWidth))}
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  });
};
