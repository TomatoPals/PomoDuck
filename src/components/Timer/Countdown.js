import React, { useState, useEffect } from "react";
import "../../assets/styles/styles.css";

const Countdown = () => {
  const [timeState, setTimeState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 1200000
  });

  const startTimer = () => {
    setTimeState({
      timerOn: true,
      timerTime: timeState.timerTime,
      timerStart: timeState.timerTime
    });
  };

  const stopTimer = () => {
    setTimeState({ ...timeState, timerOn: false });
  };
  const resetTimer = () => {
    setTimeState({
      timerOn: false,
      timerStart: 0,
      timerTime: 1200000
    });
  };

  useEffect(() => {
    if (timeState.timerOn === true) {
      const timer =
        timeState.timerTime > 0 &&
        setInterval(() => setTimeState({ ...timeState, timerTime: timeState.timerTime - 10 }), 10);
      return () => clearInterval(timer);
    }
  }, [timeState]);

  const { timerTime, timerStart, timerOn } = timeState;
  const seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

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

      {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
        <button className="Button-start" onClick={startTimer}>
          Start
        </button>
      )}
      {timerOn === true && timerTime >= 1000 && (
        <button className="Button-stop" onClick={stopTimer}>
          Stop
        </button>
      )}
      {timerOn === false && timerStart !== 0 && timerStart !== timerTime && timerTime !== 0 && (
        <button className="Button-start" onClick={startTimer}>
          Resume
        </button>
      )}

      {(timerOn === false || timerTime < 1000) && timerStart !== timerTime && timerStart > 0 && (
        <button className="Button-reset" onClick={resetTimer}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Countdown;
