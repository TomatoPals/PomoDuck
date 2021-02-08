import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import "../../assets/styles/styles.css";
import SignUpModal from "../Modal/SignUpModal";
import SettingsModal from "../../components/Modal/SettingsModal";

const useStyles = makeStyles(() => ({
  toolbarStyles: {
    padding: 10
  },
  appbarStyles: {
    backgroundColor: "#001015",
    height: 100
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appbarStyles}>
      <Toolbar className={classes.toolbarStyles}>
        <Grid item xs={10} sm={10} id="logo">
          <img src="/Assets/pomoduck-logo.svg" alt="logo" />
          <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
          <Grid item xs={10} sm={10} id="logo"></Grid>
          <SignUpModal />
          <SettingsModal />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
