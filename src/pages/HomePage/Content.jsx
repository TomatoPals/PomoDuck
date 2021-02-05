import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";
import Timer from "../../components/Timer/Timer";

const Content = () => {
  return (
    <div>
      <Grid container direction="column" className="contentContainer">
        <div className="timer">
          <Timer />
        </div>
      </Grid>
    </div>
  );
};

export default Content;
