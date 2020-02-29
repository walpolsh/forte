import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { colors } from "./helpers";
import { CycleArr } from "../ChordCycles/ChordCycles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const CircledNote = styled.div`
  transition: all 0.5s ease-in;
  border: 1px solid black;
  border-radius: 100%;
  background: ${props => props.backColor};
  z-index: 1;
  width: 10px;
  cursor: pointer;
`;

export const SubGridTypeography = styled(Typography)`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;
export const styleObj = (colors, relativeFormula, inversion) => {
  return {
    section: { display: "grid", justifyContent: "center", width: "80vw" },
    width: {
      transition: "all 0.5s ease",
      width: "90vw",
      maxWidth: "1750px",
      justifyContent: "center"
    },
    padding: { padding: "10px" },
    arpeggios: {
      background: colors[relativeFormula.indexOf(inversion[0])],
      width: "10vw",
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
export function chordInversions(dropChord, inversions, numsOn, degrees, formula, cycle) {
  const dropChordInversions = CycleArr(
    inversions.map(x => dropChord(x.map(y => (numsOn ? degrees[formula.indexOf(y)] : formula[formula.indexOf(y)]))))
  );
  console.log(CycleArr(formula)[cycle]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${formula.length}, 1fr)`
      }}
      key={formula}
    >
      {dropChordInversions[cycle].map((x, i) => {
        console.log(
          "dropChordInversions",
          dropChordInversions[cycle].map(x => x[0]),
          x
        );
        const dropChordColor = colors[formula.indexOf(CycleArr(formula)[cycle][i])];
        return (
          <SubGridTypeography
            style={{
              color: `${dropChordColor}`
            }}
            key={x + i}
          >
            {x.map(y => (
              <span key={y}>{y}</span>
            ))}
          </SubGridTypeography>
        );
      })}
    </div>
  );
}
export const IntervalsAndInversions = (triadsOn, mapTriadChords, mapDropChords) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        width: "442px"
      }}
    >
      {triadsOn ? mapTriadChords : mapDropChords}
    </div>
  </div>
);
export const ArpeggiosButton = (arpsMode, showArps, scaleIndex, changeCycleIndex) => {
  function handleClick() {
    showArps(!arpsMode);
    changeCycleIndex(scaleIndex);
  }
  const text = !arpsMode ? `Show Arpeggios` : `Hide Arpeggios`;

  return (
    <PrimaryButton
      key={scaleIndex}
      text={text}
      onClick={handleClick}
      icon={!arpsMode ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
    />
  );
};
