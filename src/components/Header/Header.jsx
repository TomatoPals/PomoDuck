import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/styles";
import "../../assets/styles/styles.css";
import SignUpModal from "../Modal/SignUpModal";
import SettingsModal from "../../components/Modal/SettingsModal";

const Header = (props) => {
  return (
    <AppBar position="relative" id="appbarStyles">
      <Toolbar id="toolbarStyles">
        <div className="outside-box">
          <div className="left-box" id="logo">
            <img src="/Assets/pomoduck-logo.svg" alt="logo" />
            <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
          </div>
          <div className="right-box">
            <SettingsModal id="signUp" />
            <SignUpModal isLoggedin={props.isLoggedin} callback={props.callback} />
          </div>
        </div>
        {/* <Grid item xs={6} sm={8} id="logo">
          <img src="/Assets/pomoduck-logo.svg" alt="logo" />
          <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
        </Grid>
        <Grid item xs={3} sm={2} id="signUp">
          <SettingsModal />
        </Grid>
        <Grid item xs={3} sm={2} id="signUp">
          <SignUpModal isLoggedin={props.isLoggedin} callback={props.callback} />
        </Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
