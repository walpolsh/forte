import React from "react";
import { useStyles, handleChange } from "./helpers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function ScaleMenu2({ Scales, changeScale, scaleValues, setScaleValues, handleDefScale }) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <form onSubmit={e => handleDefScale(e.target.value)}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel style={{ background: "#ffaea9" }} ref={inputLabel} htmlFor="outlined-scale-simple">
          Scale
        </InputLabel>

        <Select
          style={{ background: "white" }}
          value={scaleValues.scale}
          onChange={e => {
            changeScale(Scales[e.target.value]);
            e.preventDefault();
            handleChange(e, setScaleValues);
          }}
          labelWidth={labelWidth}
          inputProps={{
            name: "scale",
            id: "outlined-scale-simple"
          }}
        >
          {Scales.map((scale, i) => (
            <MenuItem value={i} key={i + 1}>
              {scale[0][2]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
