import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  card: { margin: "10px", padding: "10px" },
  media: {
    height: 140
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));
