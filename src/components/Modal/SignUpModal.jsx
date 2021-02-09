import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CreateUser from "../CreateUser/CreateUser";
import Login from "../Login/Login";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

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

export default function SignUpModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const wrapperFunction = () => {
    handleOpen();
    changeLoggedIn();
  };

  // const [text, setText] = useState("");
  const [isNew, setIsNew] = useState(false);

  const body = (
    <>
      <div style={modalStyle} className={classes.paper}>
        <div>
          <Link onClick={() => setIsNew(!isNew)}>{!isNew ? "Been here before? Login" : "New User SignUp"}</Link>
        </div>
        {!isNew ? <CreateUser /> : <Login />}
      </div>
    </>
  );
  return (
    <>
      <Button type="button" color="inherit" onClick={wrapperFunction}>
        {loggedIn ? "Logout" : "Signup"}
      </Button>
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
