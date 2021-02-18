import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CreateUser from "../CreateUser/CreateUser";
import Login from "../Login/Login";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import store from "../../store";
import { LOGGED_IN, USER_LOGOUT } from "../../actions/UserActions";
import { DELETE_ALL_TASKS } from "../../actions/TaskActions";
import { CgProfile } from "react-icons/cg";

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

export default function SignUpModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const storeState = useSelector((state) => state);

  // changed local state of loggedin based off of redux global state
  useEffect(() => {
    if (!storeState.userInfo.loggedIn) {
      return;
    }
    setLoggedIn(true);
  }, [storeState]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkTime = (time, seconds) => {
    if (isNaN(time)) {
      return seconds;
    }
    return time;
  };

  const handleLogout = () => {
    const totalPomSeconds =
      1500 -
      checkTime(parseInt(storeState.timeRemaining.pomoTimeRemaining), 1500) +
      storeState.userInfo.userDetails.totalPomSeconds;
    const totalSmallBreakSeconds =
      300 -
      checkTime(parseInt(storeState.timeRemaining.shortTimeRemaining), 300) +
      storeState.userInfo.userDetails.totalSmallBreakSeconds;
    const totalBigBreakSeconds =
      900 -
      checkTime(parseInt(storeState.timeRemaining.longTimeRemaining), 900) +
      storeState.userInfo.userDetails.totalBigBreakSeconds;

    try {
      API.updateTotalUserMinutes(
        storeState.userInfo.userDetails.id,
        totalPomSeconds,
        totalSmallBreakSeconds,
        totalBigBreakSeconds
      );
      API.logout();
      setLoggedIn(false);
      store.dispatch({ type: DELETE_ALL_TASKS });
      store.dispatch({ type: USER_LOGOUT });
      store.dispatch({ type: LOGGED_IN, payload: false });
    } catch (error) {
      console.log(error);
    }
  };

  const [isNew, setIsNew] = useState(false);

  const body = (
    <>
      <div className={classes.paper}>
        <h3 className="SubmitButton">
          <Link onClick={() => setIsNew(!isNew)}>{isNew ? "Been here before? Login" : "New User SignUp"}</Link>
        </h3>
        {!isNew ? <Login handleClose={handleClose} /> : <CreateUser handleClose={handleClose} />}
      </div>
    </>
  );
  return (
    <>
      <div>
        {loggedIn ? (
          <Button type="button" color="inherit" onClick={handleLogout}>
            <img src="/Assets/icons/user-white.png" alt="Logout" className="signupIcon" />
            <div className="signupTitle">Logout</div>
          </Button>
        ) : (
          <Button type="button" color="inherit" onClick={handleOpen}>
            <CgProfile className="signupIcon" alt="login" />
            <div className="signupTitle">Login</div>
          </Button>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>{body}</div>
      </Modal>
    </>
  );
}
