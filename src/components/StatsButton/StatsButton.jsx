import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { VscGraph } from "react-icons/vsc";
import { makeStyles } from "@material-ui/core/";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import StatsTable from "../../components/StatsTable/StatsTable";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 4),
    backgroundColor: "#66bb6a",
    border: "2px #ef9a9a",
    color: "white",
    borderRadius: 20,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

export default function SettingsModal() {
  const storeState = useSelector((state) => state);
  //This useEffect gets all of the users info after they are logged in
  //you can see their total stats on breaks, pomodoros with this
  useEffect(() => {
    console.log("test");
    if (storeState.userInfo.loggedIn) {
      // console.log(storeState.userInfo.userDetails);
    }
  }, [storeState]);

  const calcTotalLongBreak = () => {
    console.log(storeState.userInfo.userDetails);
    let longBreak = storeState.userInfo.userDetails.totalBigBreakSeconds; // eslint-disable-line
    return longBreak;
  };

  const calcTotalWork = () => {
    let totalWork = storeState.userInfo.userDetails.totalPomSeconds; // eslint-disable-line
    return totalWork;
  };

  const calcShortBreak = () => {
    let shortBreak = storeState.userInfo.userDetails.totalSmallBreakSeconds; // eslint-disable-line
    return shortBreak;
  };

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="button" color="inherit" onClick={handleOpen}>
        <div className="settingsIcon">
          <VscGraph />
        </div>
        <div className="settingsTitle">Stats</div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Stats Modal"
        aria-describedby="See your pomodoro stats here"
      >
        <div className={classes.paper}>
          <Grid item>
            <Grid item sm={12}>
              <StatsTable stat={storeState.taskList.tasks} />
            </Grid>
            <Grid container item sm={12} alignItems="center" justify="center"></Grid>
            {/* <Button onClick={setStatState}>I'm Useless!</Button> */}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={10} lg={8}> */}
          <Chart
            width={"500px"}
            height={"500px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Works/Break", "Minutes per day"],
              ["Long Breaks", calcTotalLongBreak()],
              ["Short Breaks", calcShortBreak()],
              ["Work", calcTotalWork()]
            ]}
            options={{
              title: "Productivity",
              // Just add this option
              pieHole: 0.4
            }}
            rootProps={{ "data-testid": "3" }}
          />
        </div>
      </Modal>
    </>
  );
}
