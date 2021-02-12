import React, { Component } from "react";
import "../../assets/styles/styles.css";

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 1200000
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        //// => This is where you can call a function to send data to the database.
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerOn: false,
        timerStart: 0,
        timerTime: 1200000
        // timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      // if (input === "incHours" && timerTime + 3600000 < 216000000) {
      //   this.setState({ timerTime: timerTime + 3600000 });
      // } else if (input === "decHours" && timerTime - 3600000 >= 0) {
      //   this.setState({ timerTime: timerTime - 3600000 });
      // } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
      //   this.setState({ timerTime: timerTime + 60000 });
      // } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
      //   this.setState({ timerTime: timerTime - 60000 });
      // } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
      //   this.setState({ timerTime: timerTime + 1000 });
      // } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
      //   this.setState({ timerTime: timerTime - 1000 });
      // }
      //////
      // if (input === "incHours" && timerTime + 3600000 < 216000000) {
      //   this.setState({ timerTime: timerTime + 3600000 });
      // } else if (input === "decHours" && timerTime - 3600000 >= 0) {
      //   this.setState({ timerTime: timerTime - 3600000 });
      if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
      //////
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    const seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    // const hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Take A Break</div>
        <div className="Countdown-label">Minutes : Seconds</div>
        <div className="Countdown-display">
          {/* <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incSeconds")}>&#8679;</button> */}

          <div className="Countdown-time">
            <div className="Countdown-time2">
              {minutes} : {seconds}
            </div>
          </div>

          {/* <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button> */}
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false && timerStart !== 0 && timerStart !== timerTime && timerTime !== 0 && (
          <button className="Button-start" onClick={this.startTimer}>
            Resume
          </button>
        )}

        {(timerOn === false || timerTime < 1000) && timerStart !== timerTime && timerStart > 0 && (
          <button className="Button-reset" onClick={this.resetTimer}>
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default Countdown;
