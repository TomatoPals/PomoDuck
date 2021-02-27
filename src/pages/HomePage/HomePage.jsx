import React, { useEffect } from "react";
import TaskBar from "../../components/TaskBar/TaskBar";
import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import tom from "../../images/PomoDuck_PomComputer.png";
import duck from "../../images/pomoduck.png";
import { useMediaQuery } from "react-responsive";

function SnackAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));
const HomePage = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 750px)"
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (userInfo.loggedIn === null) {
      return;
    }
    if (userInfo.loggedIn === true) {
      setOpen(true);
    }
  }, [userInfo]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="contentContainer">
          <Timer />
          <TaskBar />
        </div>
        <div className="instructionbox">
          <div className="lowerbox"></div>
          <div className="instructions">
            <h2>Stay focused on the important things in life. </h2>
          </div>
          <div className="instructions">
            <h3>What is PomoDuck?</h3>
            <p>
              {isDesktopOrLaptop && <img src={tom} className="pImage" alt="Stats Duck" />}
              Pomoduck is a customizable pomodoro timer that works on desktop and mobile browser. The aim of this
              app is to help you focus on any task you are working on, such as study, writing, or coding. This app
              is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
              <br></br>
              <br></br>
              {isDesktopOrLaptop && <img src={duck} className="pImage" alt="Stats Duck" />}
              Also implemented is the duck which is inspired by <strong>"Rubber Duck Debugging"</strong>". This is
              a programming methodology where you explain the task you are performing from the goals you are trying
              to achieve to all the details in your code, line-by-line. By describing the problem the programmer
              force themselves to express their ideas in a clear way and go through all the details. This
              explanation is called “telling the duck your problem”.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <SnackAlert onClose={handleClose} severity="success">
            {userInfo.loggedIn ? "Login Successful!" : "Logout Succesful!"}
          </SnackAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default HomePage;
