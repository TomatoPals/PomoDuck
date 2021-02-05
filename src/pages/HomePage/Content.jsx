import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

const Content = () => {
  return (
    <div>
      <Grid container direction="column" className="contentContainer">
        <div className="timer"></div>
      </Grid>
    </div>
  );
};

export default Content;
