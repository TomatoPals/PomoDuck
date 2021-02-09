import React from "react";
import Countdown from "./Countdown";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

const Timer = () => {
  return (
    <>
      <Grid item>
        <div className="timer">
          <div className="CountDownApp">
            <div className="Timers">
              <Countdown />
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Timer;
