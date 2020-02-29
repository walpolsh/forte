import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export function FavsButton(favsArr, favs, mode, arpsMode, changeFavs, favsShowing) {
  function handleAddToFavs() {
    return (favsArr && isInFavs(favs, mode)) || (arpsMode && favsArr && isInFavs(favs, mode))
      ? changeFavs(() => favs.filter(scale => scale !== mode))
      : isInFavs(favs, mode)
      ? null
      : changeFavs(favs.concat([mode]));
  }
  return (
    <PrimaryButton
      onClick={handleAddToFavs}
      key={mode + ""}
      text={changeFavsText(favsShowing, favs, mode)}
      icon={AddToFavoritesIcon(favsShowing, isInFavs, favs, mode)}
    />
  );
}
function AddToFavoritesIcon(favsShowing, isInFavs, favs, mode) {
  return favsShowing ? (
    <HighlightOffIcon fontSize="small" key={mode + ""} />
  ) : isInFavs(favs, mode) ? (
    <CheckCircleOutlineIcon fontSize="small" key={mode + ""} />
  ) : (
    <AddCircleOutlineIcon fontSize="small" key={mode + ""} />
  );
}

function isInFavs(favs, mode) {
  for (let i = 0; i < favs.length; i++) {
    if (favs[i][2] === mode[2]) return true;
  }
  return false;
}

function changeFavsText(favsShowing, favs, mode) {
  return favsShowing ? "Remove From Favs" : isInFavs(favs, mode) ? "Saved To Favs" : "Add to Favs";
}
