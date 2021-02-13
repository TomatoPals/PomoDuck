import React from "react";
// import Grid from "@material-ui/core/Grid";
import "../../assets/styles/styles.css";

const Footer = () => {
  return (
    <>
      <div className="flex-center-all footerlinks">
        <h3>Home</h3>
        <h3>Contact</h3>
      </div>
      <div className="flex-center-all">
        <a href="pomoduck.com" target="_blank" rel="noopener">
          <img src="/Assets/icons/face.svg" alt="facebook icon" />
        </a>
        <a href="pomoduck.com" target="_blank" rel="noopener">
          <img src="/Assets/icons/twit.svg" alt="facebook icon" />
        </a>
        <a href="pomoduck.com" target="_blank" rel="noopener">
          <img src="/Assets/icons/in.svg" alt="facebook icon" />
        </a>
      </div>
      <div className="flex-center-all">©Pomoduck 2021. All Rights Reserved.</div>
      {/* <Grid container className="footer" alignItems="center" justify="center" spacing={2}>
        <Grid item xs={1}>
          <h3>Home</h3>
        </Grid>
        <Grid item xs={1}>
          <h3>Contact</h3>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/Assets/icons/face.svg" alt="facebook icon" />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/Assets/icons/twit.svg" alt="facebook icon" />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a href="#" target="_blank" rel="noopener">
            <img src="/Assets/icons/in.svg" alt="facebook icon" />
          </a>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <div className="copyright">©Pomoduck 2021. All Rights Reserved.</div>
      </Grid> */}
    </>
  );
};

export default Footer;
