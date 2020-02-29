import React, { useContext } from "react";
import TuningMenu from "../Menus/TuningMenu";
import ScaleMenu from "../Menus/ScaleMenu";
import CycleMenu from "../Menus/CycleMenu";
import { Tunings } from "../../tunings.js";
import { Context } from "../../Store";
import { Chromatic, Scales } from "../../constants/scales.js";
import { Cycles } from "../ChordCycles/ChordCycles";
import CustomSwitch from "../Switch/CustomSwitch";
import { CircleButton } from "../Buttons/CircleButton";
import { permute } from "../../constants/helpers.js";
import styled from "styled-components";
import photo from "./forté-rect.png";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const AppPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopBarContainer = styled.div`
  background-color: #3f51b5;
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 1fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 100;
`;
export const TopBar = () => {
  const {
    favsArr,
    favs,
    displayFavs,
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
    isModalOpen,
    setIsModalOpen
  } = useContext(Context);
  return (
    <TopBarContainer>
      <IconButton
        style={{
          color: `${favsArr ? "#f50057" : "white"}`,
          transition: "background 200ms linear"
        }}
        disabled={favs.length === 0}
        color="inherit"
        aria-label="Menu"
        onClick={() => displayFavs(!favsArr)}
      >
        {favs.length === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </IconButton>
      <AppPhotoContainer>
        <img
          alt={"open modal"}
          onClick={() => setIsModalOpen(!isModalOpen)}
          src={photo}
          style={{ maxWidth: "60px", height: " 45px" }}
        />
      </AppPhotoContainer>
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
        leftValue={numsOn ? "Nums" : "Notes"}
        rightValue={""}
      />
      <CustomSwitch
        switched={switched}
        setSwitched={setSwitched}
        toggleState={triadsOn}
        handleToggleState={displayTriads}
        stateValue={"triads"}
        leftValue={triadsOn ? "Triads" : "7ths"}
        rightValue={" "}
      />
      <CustomSwitch
        switched={switched}
        setSwitched={setSwitched}
        toggleState={relative}
        handleToggleState={displayRelative}
        stateValue={"relative"}
        leftValue={relative ? "Relative" : "Paralell"}
        rightValue={" "}
      />
    </TopBarContainer>
  );
};
