import React from "react";
import "./HomePage.css";
import TaskBar from "../../components/TaskBar/TaskBar";

import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

// import CreateUser from "../../components/CreateUser/CreateUser";

const HomePage = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container className="contentContainer">
          <Grid item sm={12}>
            <Timer />
            <TaskBar />
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
      <Grid container sm={12} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
