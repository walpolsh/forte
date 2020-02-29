import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const handleChange = (event, fn) => {
  console.log(event);
  fn(oldValues => ({
    ...oldValues,
    [event.target.name]: event.target.value
  }));
};
