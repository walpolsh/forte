import React, { useState, createContext, useEffect } from "react";
import { Chromatic, Scales } from "./constants/scales.js";
import { Tunings } from "./tunings.js";
import { Cycles } from "./components/ChordCycles/ChordCycles";
import useWindowWidth from "./constants/helpers";

function getLocalStorage(item, setState) {
  const data = localStorage.getItem(item);
  if (data) setState(JSON.parse(data));
}
let favorites = JSON.parse(localStorage.getItem("favorites"));

function setLocalStorage(item, state) {
  localStorage.setItem(item, JSON.stringify(state));
}

export const Context = createContext();
export const Store = ({ children }) => {
  const [root, changeKey] = useState(Chromatic);
  const [scale, changeScale] = useState(Scales[0]);
  const [numsOn, handleNums] = useState(false);
  const [tuning, changeTuning] = useState(Tunings.standard);
  const [cycle, changeCycle] = useState(Cycles[0]);
  const [cycleIndex, changeCycleIndex] = useState(0);
  const [favs, changeFavs] = useState(favorites || []);
  const [favsArr, displayFavs] = useState(false);
  const [arpsMode, showArps] = useState(false);
  const [triadsOn, displayTriads] = useState(true);
  const [relative, displayRelative] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defTuning, handleDefTuning] = useState("standard");
  const [tuningValues, setTuningValues] = useState({
    tuning: defTuning,
    name: defTuning
  });
  const [defScale, handleDefScale] = useState(0);
  const [scaleValues, setScaleValues] = useState({
    scale: defScale,
    name: defScale
  });

  const [defCycle, handleDefCycle] = useState(0);
  const [cycleValues, setCycleValues] = useState({
    cycle: defCycle,
    name: defCycle
  });
  const [switched, setSwitched] = useState({
    nums: false,
    triads: true,
    relative: false
  });
  const [sideBarOpen, setSideBarOpen] = useState({ right: false });
  const [scrollIndex, changeScrollIndex] = useState(0);
  const [isLeftHanded, changeIsLeftHanded] = useState(false);

  const fnArr = [
    changeFavs,
    changeKey,
    changeTuning,
    setTuningValues,
    displayRelative,
    handleNums,
    displayTriads,
    setSwitched,
    setScaleValues,
    changeScale
  ];
  const strArr = [
    "favorites",
    "key",
    "tuning",
    "tuningValues",
    "relative",
    "numsOn",
    "triads",
    "switched",
    "scaleValues",
    "scale"
  ];
  const stateArr = [favs, root, tuning, tuningValues, relative, numsOn, triadsOn, switched, scaleValues, scale];

  useEffect(() => {
    for (let i = 0; i < strArr.length; i++) {
      getLocalStorage(strArr[i], fnArr[i]);
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < strArr.length; i++) {
      setLocalStorage(strArr[i], stateArr[i]);
    }
  });

  const windowWidth = useWindowWidth();

  const store = {
    root,
    changeKey,
    scale,
    changeScale,
    numsOn,
    handleNums,
    tuning,
    changeTuning,
    cycle,
    changeCycle,
    favs,
    changeFavs,
    favsArr,
    displayFavs,
    arpsMode,
    showArps,
    triadsOn,
    displayTriads,
    relative,
    displayRelative,
    isModalOpen,
    setIsModalOpen,
    defTuning,
    handleDefTuning,
    tuningValues,
    setTuningValues,
    defScale,
    handleDefScale,
    scaleValues,
    setScaleValues,
    defCycle,
    handleDefCycle,
    cycleValues,
    setCycleValues,
    switched,
    setSwitched,
    windowWidth,
    sideBarOpen,
    setSideBarOpen,
    scrollIndex,
    changeScrollIndex,
    cycleIndex,
    changeCycleIndex,
    isLeftHanded,
    changeIsLeftHanded
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
