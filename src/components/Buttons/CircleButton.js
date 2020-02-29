import React from "react";
import { CircleButtonStyles } from "./helpers";
import Fab from "@material-ui/core/Fab";
import styled from "styled-components";
const buttonStyle = size => ({
  maxWidth: `${size}`,
  maxHeight: `${size}`,
  minWidth: `${size}`,
  minHeight: `${size}`,
  // fontSize: "8px",
  textTransform: "none"
});
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-content: flex-start;
`;
export function CircleButton({ Chromatic, changeKey, permute, root }) {
  const classes = CircleButtonStyles();

  return (
    <ButtonContainer>
      {Chromatic.map((note, i) => {
        return (
          <Fab
            style={buttonStyle("22px")}
            key={note + i}
            value={i}
            onClick={e => changeKey(permute(Chromatic, e.currentTarget.value))}
            color={note === root[0] ? "secondary" : "primary"}
            className={classes.margin}
          >
            {note}
          </Fab>
        );
      })}
    </ButtonContainer>
  );
}
