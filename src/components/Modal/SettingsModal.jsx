import React from "react";
import Modal from "@material-ui/core/Modal";
import SettingsForms from "../Settings/SettingsForms";
import { makeStyles } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { FiSettings } from "react-icons/fi";

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
          <FiSettings />
        </div>
        <div className="settingsTitle">Settings</div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Settings Modal"
        aria-describedby="Change your settings here"
      >
        <div className={classes.paper}>
          <SettingsForms />
        </div>
      </Modal>
    </>
  );
}
