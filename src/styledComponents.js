import React from "react";
import styled from "styled-components";
import { fullFretboard, halfFretboard, leftHandedString } from "./constants/scales";
import Typography from "@material-ui/core/Typography";
export const String = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${props => props.windowWidth};
`;

export const PianoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${props => props.windowWidth}, 1fr);
  border-right: 1px solid black;
`;

export const Main = styled.div`
  font-family: serif;
  text-align: center;
  font-size: 12px;
  background-size: cover;
  /* min-height: 1000px; */
`;
export const Wrap = styled.div`
  text-align: center;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 1px solid black;
    background: black;
    width: 100%;
    transform: translateY(-50%);
  }
`;

const Dots = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  background: lightgrey;
  color: black;
  z-index: 1;
  width: 15px;
  justify-self: "center";
`;

export const CircledNoteOnWheel = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  background: ${props => props.backColor};
  z-index: 1;
  height: 100%;
  width: 30px;
  font-size: 15px;
  vertical-align: middle;
`;
export const CircledNote = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  background: ${props => props.backColor};
  z-index: 1;
  width: 20px;
  cursor: pointer;
`;
export const ClockBackground = styled.div`
  border-radius: 100%;
  padding-bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Note = styled.div`
  width: 1px;
  position: absolute;
  left: -17px;
  height: 65px;
  transform-origin: 0 100%;
  transform: ${p => p.ticks};
`;

export const Notes = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

function isLeftHandedFn(isLeftHanded, fretboard) {
  return isLeftHanded ? leftHandedString(fretboard) : fretboard;
}
export const SideDots = (windowWidth, Frets, isLeftHanded) => (
  <String
    windowWidth={isLeftHandedFn(isLeftHanded, windowWidth < 1000 ? halfFretboard : fullFretboard)}
    style={stringStyle.sideDots}
  >
    {Frets.map((x, i) => (x === "" ? <div style={{ minWidth: "17px" }} key={x + i * i} /> : <Dots key={x + i * i}>{x}</Dots>))}
  </String>
);

function NoteTypography(x) {
  return (
    <Typography variant="body2" color="textSecondary" component="span" style={stringStyle.b}>
      {x}
    </Typography>
  );
}
const noteSize = (x, y, note, inversion, degrees, formula, numsOn, arpsOn) =>
  (arpsOn && note === inversion[0]) || (numsOn && arpsOn && note === degrees[formula.indexOf(inversion[0])])
    ? NoteTypography(x)
    : NoteTypography(y);

function notesNumsBackground(numsOn, colors, degrees, note, formula) {
  return numsOn ? colors[degrees.indexOf(note)] : colors[formula.indexOf(note)];
}

function isWhiteKey(whiteKeys, j, a, b) {
  return whiteKeys.includes(j) ? a : b;
}

const stringStyle = {
  a: { background: "white", zIndex: "1", borderRight: "0.1px solid black" },
  b: {
    zIndex: "1",
    borderLeft: "1px solid black",
    display: "flex",
    justifyContent: "center",
    minWidth: "16px",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.54)"
  },
  sideDots: { paddingTop: "5px", justifyItems: "center" }
};
export const StringContainer = (string, colors, formula, degrees, windowWidth, i, numsOn, inversion, arpsOn, isLeftHanded) => {
  return (
    <String
      windowWidth={isLeftHandedFn(isLeftHanded, windowWidth < 1000 ? halfFretboard : fullFretboard)}
      key={`${formula[i]}${degrees[i]}`}
    >
      <div key={`${formula[i]}${degrees[i]}`} style={stringStyle.a}>
        {i + 1}
      </div>
      {string.map((note, j) => (
        <div key={`${j}`} style={stringStyle.b}>
          {note ? (
            <CircledNote
              key={note * j * j}
              style={{
                borderRadius: noteSize("20%", "100%", note, inversion, degrees, formula, numsOn, arpsOn),
                width: "20px"
              }}
              backColor={notesNumsBackground(numsOn, colors, degrees, note, formula)}
            >
              {note}
            </CircledNote>
          ) : (
            ""
          )}
        </div>
      ))}
    </String>
  );
};
function whiteKeyStyle(whiteKeys, j, isWhiteKey) {
  return {
    zIndex: `${isWhiteKey(whiteKeys, "2", " 1")}`,
    background: `${isWhiteKey(whiteKeys, j, "white", "black")}`,
    border: "0.5px solid black",
    borderRight: `${isWhiteKey(whiteKeys, j, "", "0.5px solid black")}`,
    height: `100px`,
    width: `${isWhiteKey(whiteKeys, j, "1fr", "0.5fr")}`
  };
}
export const PianoKey = (string, colors, formula, degrees, windowWidth, numsOn) => {
  const whiteKeys = windowWidth < 1000 ? [0, 2, 4, 5, 7, 9, 11, 12] : [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24];
  return string.map((note, j) => (
    <div key={string + j} style={whiteKeyStyle(whiteKeys, j, isWhiteKey)}>
      {note.length !== 0 && (
        <CircledNote
          backColor={notesNumsBackground(numsOn, colors, degrees, note, formula)}
          style={{
            borderRadius: noteSize("20%", "100%", note),
            width: noteSize("13px", "15px", note),
            margin: isWhiteKey(whiteKeys, j, "75px auto auto", "45px auto auto")
          }}
        >
          {note}
        </CircledNote>
      )}
    </div>
  ));
};
