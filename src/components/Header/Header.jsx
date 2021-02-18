import { AppBar, Toolbar, Grid, ButtonGroup } from "@material-ui/core";
import React from "react";
import SignUpModal from "../Modal/SignUpModal";
import SettingsModal from "../../components/Modal/SettingsModal";
import StatsButton from "../../components/StatsButton/StatsButton";
import IconButton from "@material-ui/core/IconButton";
import PomoDuckHome from "./PomoDuckHome";
const Header = (props) => {
  return (
    // // <AppBar position="relative" id="appbarStyles">
    //   /* <Toolbar id="toolbarStyles"> */
    <AppBar position="relative" id="appbarStyles">
      <Toolbar id="toolbarStyles">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <PomoDuckHome />
        </IconButton>
        <Grid container justify="flex-end">
          <ButtonGroup>
            <StatsButton id="signup" />
            <SettingsModal className="settings" />
            <SignUpModal id="signup" isLoggedin={props.isLoggedin} callback={props.callback} />
          </ButtonGroup>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
