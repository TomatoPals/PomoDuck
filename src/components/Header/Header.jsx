import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import "../../assets/styles/styles.css";

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
        <Grid item xs={12} sm={12} id="logo">
          <img src="/Assets/pomoduck-logo.svg" alt="logo" />
          <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
