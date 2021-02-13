import React, { useState } from "react";
import Countdown from "./Countdown";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import { Grid, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import "../../assets/styles/styles.css";

const Timer = () => {
  const [timerState, setTimerState] = useState({
    pomo: true,
    short: false,
    long: false
  });

  const handlePomoClick = () => {
    setTimerState({
      pomo: true,
      short: false,
      long: false
    });
  };

  const handleShortClick = () => {
    setTimerState({
      pomo: false,
      short: true,
      long: false
    });
  };

  const handleLongClick = () => {
    setTimerState({
      pomo: false,
      short: false,
      long: true
    });
  };

  const currentTask = useSelector((state) => state.taskList.currentTask);

  return (
    <>
      <Grid item>
        <div className="timer">
          <div className="CountDownApp">
            <div className="Timers">
              <div className="Countdown">
                <Button variant="contained" onClick={handlePomoClick}>
                  Pomo
                </Button>
                <Button variant="contained" onClick={handleShortClick}>
                  Short Break
                </Button>
                <Button variant="contained" onClick={handleLongClick}>
                  Long Break
                </Button>
                <div className="Countdown-label">{currentTask}</div>
                {timerState.pomo ? <Countdown /> : timerState.short ? <ShortBreak /> : <LongBreak />}
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Timer;
