import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./MenuAppBar.css";
import SimpleModal from "../Modal/SimpleModal";
import SettingsModal from "../Modal/SettingsModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <>
          <div className={classes.root}>
            <nav className="navbar">
              <div className="container">
                <div className="logo">
                  <img src="/Assets/pomoduck-logo.svg" alt="logo" />
                  <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
                </div>
              </div>
            </nav>
          </div>
        </>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          PomoDuck
        </Typography>
        {/* Get login button to open login modal */}
        <SettingsModal />
        <SimpleModal />
      </Toolbar>
    </AppBar>
  );
}
