import React, { Suspense, useContext } from "react";

import { permute } from "../../constants/helpers";
import {
  modeFactory,
  allStrings,
  colors,
  PianoOrFretboard,
  chordNames,
  triadNames,
  seventhChords,
  triadChords,
  arpsCond
} from "./helpers";

import { CycleDiv } from "../ChordCycles/ChordCycles";
import { Frets } from "../../constants/scales";
import { SideDots } from "../../styledComponents";
import { Context } from "../../Store";
import { FavsButton } from "./FavsButton";
import { styleObj, chordInversions, IntervalsAndInversions, ArpeggiosButton } from "./styledComponents";

const mapModeToRootNote = (scale, root) => scale[0][1].map(x => root[x]);
function ScaleInfo() {
  let { scale } = useContext(Context);
  const {
    tuning,
    root,
    numsOn,
    changeFavs,
    favs,
    arpsMode,
    showArps,
    favsArr,
    cycle,
    windowWidth,
    triadsOn,
    relative,
    displayFavs,
    cycleIndex,
    changeCycleIndex,
    isLeftHanded
  } = useContext(Context);
  const favsShowing = favsArr && favs.length;

  if (arpsMode) scale = [scale[cycleIndex]];
  if (favsShowing) scale = favs;
  if (favsShowing && arpsMode) scale = [scale[cycleIndex]];
  if (favs.length === 0) displayFavs(false);

  const mapScale = (mode, scaleIndex) => {
    const [degrees, formula, name, chords] = modeFactory(mode, root);

    let relativeFormula = relative && !favsArr ? permute(mapModeToRootNote(scale, root), scaleIndex) : formula;

    const inversions = relativeFormula.map((_, j) => permute(relativeFormula, j).filter((_, k) => k % 2 === 0));

    const MapAllStrings = inversion =>
      allStrings(
        tuning,
        degrees,
        numsOn,
        relativeFormula,
        windowWidth,
        arpsMode ? inversion : relativeFormula
      ).map((string, i) =>
        PianoOrFretboard(
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
        )
      );

    const chordInversion = dropChord => chordInversions(dropChord, inversions, numsOn, degrees, formula, cycle);

    //each chord name and inversion is mapped to a div
    const mapChords = (chordNames, chordType) =>
      chordType.map((chord, i) => (
        <div key={i}>
          {chordNames[i]}
          {chordInversion(chord)}
        </div>
      ));

    //if triads on then slice everything before the last element.
    const triadsOrSevenths = inversion => (triadsOn ? inversion.slice(0, 3) : inversion);

    //if triads on replace dominant with major... no such thing as a dominant triad.
    const replaceDomTriads = inversionIndex =>
      triadsOn
        ? chords[inversionIndex].slice(0, 3) === "dom"
          ? "maj"
          : chords[inversionIndex].slice(0, 3)
        : chords[inversionIndex];

    const numbersOrNotes = inversionIndex => (numsOn ? degrees[inversionIndex] : formula[inversionIndex]);

    return (
      <div key={scaleIndex + mode}>
        <div key={scaleIndex + mode}>
          {CycleDiv(
            degrees,
            relativeFormula,
            chords,
            cycle,
            colors,
            numsOn,
            name,
            triadsOn,
            scaleIndex,
            relative,
            favsArr
          )}
          {ArpeggiosButton(arpsMode, showArps, scaleIndex, changeCycleIndex)}
          {FavsButton(favsArr, favs, mode, arpsMode, changeFavs, favsShowing)}
          {arpsMode &&
            IntervalsAndInversions(
              triadsOn,
              mapChords(triadNames, triadChords),
              mapChords(chordNames, seventhChords)
            )}{" "}
        </div>
        <br />
        <div key={scaleIndex} style={{ paddingLeft: "10px", width: "98%", margin: "0 auto" }}>
          {arpsCond(arpsMode, inversions, cycle).map((inversion, inversionIndex) => (
            <div key={inversionIndex}>
              {arpsMode && (
                <div key={inversionIndex} style={styleObj(colors, relativeFormula, inversion).arpeggios}>
                  {numbersOrNotes(inversionIndex) + " " + replaceDomTriads(inversionIndex)}
                </div>
              )}
              {MapAllStrings(triadsOrSevenths(inversion), inversionIndex)}
              {tuning[0] !== 0 && SideDots(windowWidth, Frets(windowWidth), isLeftHanded)}
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return <Suspense fallback={<div>Loading...</div>}>{scale.map(mapScale)}</Suspense>;
}
export default ScaleInfo;
