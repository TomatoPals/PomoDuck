import React from "react";
import "./HomePage.css";
// import Login from "../../components/Login/Login";
import CircularIndeterminate from "../../components/Spinners/LoadingSpinner";

import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
// import CreateUser from "../../components/CreateUser/CreateUser";

const HomePage = () => {
  return (
    <div>
      <MenuAppBar />
      {/* <Login /> */}
      <CircularIndeterminate />
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/Assets/pomoduck-logo.svg" alt="logo" />
            <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
          </div>
        </div>
      </div>
      <div className="topLayer">
        <div className="container">
          <div className="timer"></div>
          <div className="tasks">
            <h2>Tasks</h2>
          </div>
          <div className="taskbox">
            <p>Add Task</p>
          </div>
        </div>
      </div>
      <div className="lowerbox"></div>
      <div className="container">
        <div className="instructions">
          <h2>Stay focused on the important things in life. </h2>
          <h3>What is PomoDuck?</h3>
          {/* <p>Pomoduck is a customizable pomodoro timer that works on desktop and mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p> */}
        </div>
      </div>
      {/* <CreateUser /> */}
    </div>
  );
};

export default HomePage;
