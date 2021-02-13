import React from "react";
import "../../assets/styles/styles.css";
import TaskBar from "../../components/TaskBar/TaskBar";
import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
import "../../assets/styles/styles.css";

const HomePage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="contentContainer">
          <Timer />
          <TaskBar />
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
    </>
  );
};

export default HomePage;
