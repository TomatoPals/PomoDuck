import React, { useState, useEffect } from "react";
import store from "../../store";
import { LONG_TIME_REMAINING } from "../../actions/TimerActions";
import tom from "../../images/pomoduck_longbreak.png";
import tomSmall from "../../images/pomoduck_longbreak_smaller.png";
import { useMediaQuery } from 'react-responsive'

const Countdown = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 750px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 750px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
        store.dispatch({
          type: LONG_TIME_REMAINING,
          payload: `${parseInt(timeState.minutes) * 60 + parseInt(timeState.seconds)}`
        });
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
        {isDesktopOrLaptop && <img src={tom} alt="Stats Duck" />}
        {isTabletOrMobile && <img src={tomSmall} alt="Stats Duck" />}
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
