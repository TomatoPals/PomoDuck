import React from "react";
import "./HomePage.css";

import Header from "./Header";
import Content from "./Content";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

// import CreateUser from "../../components/CreateUser/CreateUser";

const HomePage = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item sm={12}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
      <div className="lowerbox"></div>
      <div className="instructions">
        <h2>Stay focused on the important things in life. </h2>
        <h3>What is PomoDuck?</h3>
        {/* prettier-ignore */}
        <p>
          Pomoduck is a customizable pomodoro timer that works on desktop and mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
        </p>
      </div>
      {/* <CreateUser /> */}
    </>
  );
};

export default HomePage;
