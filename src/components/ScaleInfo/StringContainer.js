import React from "react";
import styled from "styled-components";
import { fullFretboard, halfFretboard } from "../../constants/scales";
import uuidv1 from "uuid/v1";

const StringContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${props => props.windowWidth};
`;

export default function StringContainer({ children }) {
  return (
    <StringContainerDiv windowWidth={windowWidth < 1000 ? halfFretboard : fullFretboard} style={{ paddingTop: "5px" }}>
      {children}
    </StringContainerDiv>
  );
}
