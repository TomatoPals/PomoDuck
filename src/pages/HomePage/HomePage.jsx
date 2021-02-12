import React, { useState } from "react";
import "../../assets/styles/styles.css";
import TaskBar from "../../components/TaskBar/TaskBar";

import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

// import CreateUser from "../../components/CreateUser/CreateUser";

const HomePage = (props) => {
  const [currentTask, setCurrentTask] = useState("");
  console.log("homepage props", props);

  return (
    <>
      <header>
        <Header isLoggedin={props.isLoggedin} callback={props.callback} />
      </header>
      <main>
        <div className="contentContainer">
          <Timer currentTask={currentTask} />
          <TaskBar setCurrentTask={setCurrentTask} />
        </div>
        <div className="instructionbox">
          <div className="lowerbox"></div>
          <div className="instructions">
            <h2>Stay focused on the important things in life. </h2>
          </div>
          <div className="instructions">
            <h3>What is PomoDuck?</h3>
            {/* prettier-ignore */}
            <p>
          Pomoduck is a customizable pomodoro timer that works on desktop and mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* <CreateUser /> */}
      {/* <Grid container sm={12} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={8}>
        </Grid>
      </Grid> */}
    </>
  );
};

export default HomePage;
