import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles, handleChange } from "./helpers";

export default function TuningMenu({ changeTuning, Tunings, values, setValues, handleDefTuning }) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <form onSubmit={e => handleDefTuning(e.target.value)}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel style={{ background: "#ffaea9" }} ref={inputLabel} htmlFor="outlined-tuning-simple">
          Tuning
        </InputLabel>

        <Select
          style={{ background: "white" }}
          value={values.tuning}
          onChange={e => {
            changeTuning(Tunings[e.target.value]);
            handleDefTuning(e.preventDefault());
            handleChange(e, setValues);
          }}
          labelWidth={labelWidth}
          inputProps={{
            name: "tuning",
            id: "outlined-tuning-simple"
          }}
        >
          <MenuItem value="piano">Piano</MenuItem>
          <MenuItem value="standard">Six String: Standard</MenuItem>
          <MenuItem value="dropD">Six String: Drop D</MenuItem>
          <MenuItem value="dadgad">Six String: D A D G A D</MenuItem>
          <MenuItem value="standardSeven">Seven String: Standard</MenuItem>
          <MenuItem value="dropASeven">Seven String: Drop A</MenuItem>
          <MenuItem value="dropDGseven">Seven String: Drop D Drop G</MenuItem>
          <MenuItem value="standardEight">Eight String: Standard</MenuItem>
          <MenuItem value="standardBass">Bass: Standard</MenuItem>
          <MenuItem value="violin">Violin: G D A E</MenuItem>
          <MenuItem value="cello">Cello: C G D A</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
