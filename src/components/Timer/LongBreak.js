import React, { useState, useEffect } from "react";
import store from "../../store";
import { LONG_TIME_REMAINING } from "../../actions/TimerActions";
import "../../assets/styles/styles.css";

const Countdown = () => {
  const [timeState, setTimeState] = useState({
    timerOn: false,
    timerStart: 0,
    remainingTime: 900000,
    minutes: 15,
    seconds: "00"
  });

  const { remainingTime, timerStart, timerOn, minutes, seconds } = timeState;

  const startTimer = () => {
    setTimeState({
      timerOn: true,
      remainingTime: timeState.remainingTime,
      timerStart: timeState.remainingTime,
      minutes: 15,
      seconds: "00"
    });
  };

  const stopTimer = () => {
    setTimeState({ ...timeState, timerOn: false });
  };
  const resetTimer = () => {
    setTimeState({
      timerOn: false,
      timerStart: 0,
      remainingTime: 900000,
      minutes: 15,
      seconds: "00"
    });
  };

  useEffect(() => {
    if (timeState.timerOn === true) {
      const timer =
        timeState.remainingTime > 0 &&
        setInterval(
          () =>
            setTimeState({
              ...timeState,
              minutes: ("0" + Math.floor((remainingTime / 60000) % 60)).slice(-2),
              seconds: ("0" + (Math.floor((remainingTime / 1000) % 60) % 60)).slice(-2),
              remainingTime: timeState.remainingTime - 10
            }),
          10
        );
      if (timeState.remainingTime % 1000 === 0) {
        store.dispatch({ type: LONG_TIME_REMAINING, payload: `${timeState.minutes}:${timeState.seconds}` });
      }
      return () => clearInterval(timer);
    }
  }, [timeState]);

  return (
    <>
      <div className="Countdown-display">
        <div className="Countdown-time">
          <div className="Countdown-time2">
            {minutes} : {seconds}
          </div>
        </div>
      </div>

      {timerOn === false && (timerStart === 0 || remainingTime === timerStart) && (
        <button className="Button-start" onClick={startTimer}>
          Start
        </button>
      )}
      {timerOn === true && remainingTime >= 1000 && (
        <button className="Button-stop" onClick={stopTimer}>
          Stop
        </button>
      )}
      {timerOn === false && timerStart !== 0 && timerStart !== remainingTime && remainingTime !== 0 && (
        <button className="Button-start" onClick={startTimer}>
          Resume
        </button>
      )}

      {(timerOn === false || remainingTime < 1000) && timerStart !== remainingTime && timerStart > 0 && (
        <button className="Button-reset" onClick={resetTimer}>
          Reset
        </button>
      )}
    </>
  );
};

export default Countdown;
