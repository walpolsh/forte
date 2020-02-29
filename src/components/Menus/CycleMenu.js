import React from "react";
import { useStyles, handleChange } from "./helpers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { cycleNames } from "../ChordCycles/cycleHelpers";

export default function CycleMenu2({ Cycles, changeCycle, cycleValues, setCycleValues, handleDefCycle }) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <form onSubmit={e => handleDefCycle(e.target.value)}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel style={{ background: "#ffaea9" }} ref={inputLabel} htmlFor="outlined-cycle-simple">
          Cycle
        </InputLabel>

        <Select
          style={{ background: "white" }}
          value={cycleValues.cycle}
          onChange={e => {
            changeCycle(Cycles[e.target.value]);
            handleDefCycle(e.preventDefault());
            handleChange(e, setCycleValues);
          }}
          labelWidth={labelWidth}
          inputProps={{
            name: "cycle",
            id: "outlined-cycle-simple"
          }}
        >
          {cycleNames.map((cycle, i) => (
            <MenuItem value={i} key={i + 1}>
              {cycle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
