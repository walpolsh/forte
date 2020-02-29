import React from "react";

export const LargeContainer = (string, colors, formula, degrees, windowWidth, i, numsOn, inversion, arpsOn) => {
  return (
    <String windowWidth={windowWidth < 1000 ? halfFretboard : fullFretboard} key={i * i}>
      <div style={stringStyle.a}>{i + 1}</div>
      {string.map((note, j) => (
        <Typography variant="body2" color="textSecondary" component="span" key={j} style={stringStyle.b}>
          {note.length !== 0 && (
            <CircledNote
              key={j}
              style={{
                borderRadius: noteSize("20%", "100%", note, inversion, degrees, formula, numsOn, arpsOn),
                width: noteSize("20px", "20px", note, inversion, degrees, formula, numsOn, arpsOn)
              }}
              backColor={notesOrNumsBackgroundColor(numsOn, colors, degrees, note, formula)}
            >
              {note}
            </CircledNote>
          )}
        </Typography>
      ))}
    </String>
  );
};
