import React, { useContext } from "react";
import ButtonAppBar from "./AppBar";
import TuningMenu from "../Menus/TuningMenu";
import ScaleMenu from "../Menus/ScaleMenu";
import CycleMenu from "../Menus/CycleMenu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Tunings } from "../../tunings.js";
import { Context } from "../../Store";
import { Chromatic, Scales } from "../../constants/scales.js";
import { Cycles } from "../ChordCycles/ChordCycles";
import CustomSwitch from "../Switch/CustomSwitch";
import { CircleButton } from "../Buttons/CircleButton";
import { permute } from "../../constants/helpers.js";

export default function SideBar() {
  const {
    changeTuning,
    tuningValues,
    setTuningValues,
    handleDefTuning,
    changeScale,
    scaleValues,
    setScaleValues,
    handleDefScale,
    changeCycle,
    cycleValues,
    setCycleValues,
    handleDefCycle,
    switched,
    setSwitched,
    numsOn,
    handleNums,
    triadsOn,
    displayTriads,
    relative,
    displayRelative,
    changeKey,
    root,
    sideBarOpen,
    setSideBarOpen
  } = useContext(Context);
  const classes = {
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }
  };
  const toggleDrawer = (side, open) => () => {
    setSideBarOpen({ ...sideBarOpen, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        <CircleButton Chromatic={Chromatic} changeKey={changeKey} permute={permute} root={root} />
        <TuningMenu
          changeTuning={changeTuning}
          Tunings={Tunings}
          values={tuningValues}
          setValues={setTuningValues}
          handleDefTuning={handleDefTuning}
        />
        <ScaleMenu
          Scales={Scales}
          changeScale={changeScale}
          scaleValues={scaleValues}
          setScaleValues={setScaleValues}
          handleDefScale={handleDefScale}
        />
        <CycleMenu
          Cycles={Cycles}
          changeCycle={changeCycle}
          cycleValues={cycleValues}
          setCycleValues={setCycleValues}
          handleDefCycle={handleDefCycle}
        />
        <CustomSwitch
          switched={switched}
          setSwitched={setSwitched}
          toggleState={numsOn}
          handleToggleState={handleNums}
          stateValue={"nums"}
          leftValue={"Notes"}
          rightValue={"Numbers"}
        />
        <CustomSwitch
          switched={switched}
          setSwitched={setSwitched}
          toggleState={triadsOn}
          handleToggleState={displayTriads}
          stateValue={"triads"}
          leftValue={"Triads"}
          rightValue={"Sevenths"}
        />
        <CustomSwitch
          switched={switched}
          setSwitched={setSwitched}
          toggleState={relative}
          handleToggleState={displayRelative}
          stateValue={"relative"}
          leftValue={"Relative"}
          rightValue={"Paralell"}
          relative={relative}
        />
      </List>
    </div>
  );
  const toggle = toggleDrawer("right", true);
  return (
    <div>
      <ButtonAppBar toggle={toggle} />
      <Drawer anchor="right" open={sideBarOpen.right} onClose={toggleDrawer("right", false)}>
        <div tabIndex={0} role="button" onKeyDown={toggleDrawer("right", false)}>
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}
