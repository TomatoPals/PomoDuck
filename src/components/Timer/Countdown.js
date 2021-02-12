import React, { useState, useEffect } from "react";
import "../../assets/styles/styles.css";

const Countdown = () => {
  const [timeState, setTimeState] = useState({
    timerOn: false,
    timerStart: 0,
    remainingTime: 1200000
  });

  const startTimer = () => {
    setTimeState({
      timerOn: true,
      remainingTime: timeState.remainingTime,
      timerStart: timeState.remainingTime
    });
  };

  const stopTimer = () => {
    setTimeState({ ...timeState, timerOn: false });
  };
  const resetTimer = () => {
    setTimeState({
      timerOn: false,
      timerStart: 0,
      remainingTime: 1200000
    });
  };

  useEffect(() => {
    if (timeState.timerOn === true) {
      const timer =
        timeState.remainingTime > 0 &&
        setInterval(() => setTimeState({ ...timeState, remainingTime: timeState.remainingTime - 10 }), 10);
      return () => clearInterval(timer);
    }
  }, [timeState]);

  const { remainingTime, timerStart, timerOn } = timeState;
  const seconds = ("0" + (Math.floor((remainingTime / 1000) % 60) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((remainingTime / 60000) % 60)).slice(-2);

  return (
    <div className="Countdown">
      <div className="Countdown-header">Take A Break</div>
      <div className="Countdown-label">Minutes : Seconds</div>
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
    </div>
  );
};

export default Countdown;
