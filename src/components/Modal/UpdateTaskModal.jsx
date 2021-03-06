import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TaskSettingsForm from "../Settings/TaskSettingsForm";
// import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#66bb6a",
    // border: "2px #ef9a9a",
    color: "white",
    borderRadius: 20
  }
}));

export default function UpdateTaskModal(props) {
  // const storeState = useSelector((state) => state);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    // console.log(props.estimatedPoms[props.currentItem]);
    // console.log(props.currentItem[Object.keys(props.currentItem)]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" color="inherit" onClick={handleOpen}>
        <img src="/Assets/icons/config-white.png" alt="config icon" className="settingsIcon" />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TaskSettingsForm
              currentItem={props.currentItem}
              estimatedPoms={props.currentItem}
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
