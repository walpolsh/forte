import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export function PrimaryButton({ text, onClick, icon }) {
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      color="primary"
      size="small"
      className={classes.button}
      onClick={onClick}
    >
      {icon}
      {text}
    </Fab>
  );
}
