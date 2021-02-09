import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

const Footer = () => {
  return (
    <>
      <Grid container className="footer" alignItems="center" justify="center">
        <Grid item xs={1}>
          <h3>Home</h3>
        </Grid>
        <Grid item xs={1}>
          <h3>Contact</h3>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/assets/images/icons/face.svg" alt="facebook icon" />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/assets/images/icons/twit.svg" alt="facebook icon" />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/assets/images/icons/in.svg" alt="facebook icon" />
          </a>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <div className="copyright">©Pomoduck 2021. All Rights Reserved.</div>
      </Grid>
    </>
  );
};

export default Footer;
