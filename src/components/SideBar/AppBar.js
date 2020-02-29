import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Context } from "../../Store";
import { CircleButton } from "../Buttons/CircleButton";
import { permute } from "../../constants/helpers.js";
import { Chromatic } from "../../constants/scales.js";

import photo from "./forté-rect.png";
const styles = windowWidth => ({
  root: {
    top: 0,
    position: "fixed"
  },
  grow: {
    flexGrow: 1,
    justifyContent: windowWidth > 1000 ? "end" : "center"
  },
  favsButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuButton: {
    marginRight: -12,
    marginLeft: 20
  }
});
function FavoriteButton(displayFavs, favsArr, favs) {
  return (
    <IconButton
      style={{
        background: `${favsArr ? "#f50057" : "inherit"}`,
        transition: "background 200ms linear",
        width: " fit-content"
      }}
      disabled={favs.length === 0}
      color="inherit"
      aria-label="Menu"
      onClick={() => displayFavs(!favsArr)}
    >
      {favs.length === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </IconButton>
  );
}

function AppPhoto(setIsModalOpen, isModalOpen) {
  return (
    <Typography variant="h6" color="inherit">
      <img
        alt={"open modal"}
        onClick={() => setIsModalOpen(!isModalOpen)}
        src={photo}
        style={{ maxWidth: "60px", height: " 45px" }}
      />
    </Typography>
  );
}
function MenuButton(toggle) {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={toggle}>
      <MenuIcon />
    </IconButton>
  );
}
function ButtonAppBar(props) {
  const { toggle } = props;
  const { favs, displayFavs, favsArr } = useContext(Context);
  const { changeKey, root, windowWidth, setIsModalOpen, isModalOpen } = useContext(Context);

  return (
    <AppBar>
      <Toolbar
        className={styles.root}
        style={{
          display: "grid",
          gridTemplateColumns: windowWidth > 1000 ? "0.5fr 0.5fr 2fr 1fr" : "1fr 2fr 1fr"
        }}
      >
        {FavoriteButton(displayFavs, favsArr, favs, styles)}
        {windowWidth > 1000 ? (
          <CircleButton Chromatic={Chromatic} changeKey={changeKey} permute={permute} root={root} />
        ) : (
          ""
        )}

        {AppPhoto(setIsModalOpen, isModalOpen)}
        <div style={{ textAlign: "right" }}>{MenuButton(toggle, styles)}</div>
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
