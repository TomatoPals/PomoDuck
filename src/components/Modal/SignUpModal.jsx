import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CreateUser from "../CreateUser/CreateUser";
import Login from "../Login/Login";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import "../../assets/styles/styles.css";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import store from "../../store";
import { LOGGED_IN } from "../../actions/UserActions";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SignUpModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const userInfo = useSelector((state) => state.userInfo);

  // changed local state of loggedin based off of redux global state
  useEffect(() => {
    if (!userInfo.loggedIn) {
      return;
    }
    setLoggedIn(true);
  }, [userInfo]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    try {
      API.logout();
      setLoggedIn(false);
      store.dispatch({ type: LOGGED_IN, payload: false });
    } catch (error) {
      console.log(error);
    }
  };

  const [isNew, setIsNew] = useState(false);

  const body = (
    <>
      <div style={modalStyle} className={classes.paper}>
        <div>
          <Link onClick={() => setIsNew(!isNew)}>{isNew ? "Been here before? Login" : "New User SignUp"}</Link>
        </div>
        {!isNew ? <Login handleClose={handleClose} /> : <CreateUser />}
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
            <img src="/Assets/icons/user-white.png" alt="Login" className="signupIcon" />
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
