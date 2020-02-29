import React from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
`;
export default function CustomSwitch({
  switched,
  setSwitched,
  toggleState,
  handleToggleState,
  stateValue,
  leftValue,
  rightValue,
  relative
}) {
  const handleChange = name => event => {
    setSwitched({ ...switched, [name]: event.target.checked });
  };

  return (
    <Container>
      <Typography>{`${leftValue}`}</Typography>
      <Switch
        checked={switched[stateValue]}
        onChange={e => {
          handleChange(stateValue)(e);
          handleToggleState(!toggleState);
          e.preventDefault();
        }}
        {...(relative ? "disabled" : "")}
        value={stateValue}
        color="secondary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Typography>{`${rightValue}`}</Typography>
    </Container>
  );
}
