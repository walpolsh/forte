import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export function ArpeggiosButton(arpsMode, showArps, scaleIndex, classes, changeCycleIndex) {
  function handleClick() {
    showArps(!arpsMode);
    changeCycleIndex(scaleIndex);
  }
  const text = !arpsMode ? `Show Arpeggios` : `Hide Arpeggios`;

  return (
    <PrimaryButton
      text={text}
      onClick={handleClick}
      icon={!arpsMode ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
    />
  );
}
