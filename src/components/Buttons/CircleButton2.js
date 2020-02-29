import React, { useContext } from "react";
import { CircleButtonStyles } from "./helpers";
import Fab from "@material-ui/core/Fab";
import styled from "styled-components";
import { StoreContext } from "../../index";
const buttonStyle = size => ({
  maxWidth: `${size}`,
  maxHeight: `${size}`,
  minWidth: `${size}`,
  minHeight: `${size}`,
  fontSize: "10px",
  textTransform: "none"
});
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  width: 20vw;
  margin: 0 auto;
`;
export function CircleButton2({ Chromatic, changeKey, permute, root }) {
  const classes = CircleButtonStyles();
  const { rootNote, changeRootNote } = useContext(StoreContext);
  return (
    <ButtonContainer>
      {Chromatic.map((note, i) => {
        return (
          <Fab
            style={buttonStyle("20px")}
            key={note + i}
            value={i}
            onClick={e =>
              changeRootNote({
                type: "CHANGE_ROOT_NOTE",
                payload: permute(Chromatic, e.currentTarget.value)
              })
            }
            color={note === rootNote.rootNote[0] ? "secondary" : "primary"}
            className={classes.margin}
          >
            {note}
          </Fab>
        );
      })}
    </ButtonContainer>
  );
}
