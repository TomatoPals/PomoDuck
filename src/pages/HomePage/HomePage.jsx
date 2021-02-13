import React, { useEffect } from "react";
import "../../assets/styles/styles.css";
import TaskBar from "../../components/TaskBar/TaskBar";
import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
// import "../../assets/styles/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function SnackAlert(props) {
  console.log("props:", props);
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
// import CreateUser from "../../components/CreateUser/CreateUser";
const HomePage = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   // props.handleFormSubmit();
  //   setOpen(true);
  // };

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
    setOpen(true);
    // return () => {
    //   cleanup;
    // };
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
            {/* prettier-ignore */}
            <p>
          Pomoduck is a customizable pomodoro timer that works on desktop and mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* <CreateUser /> */}
      {/* <Grid container sm={12} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={8}>
        </Grid>
      </Grid> */}
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <SnackAlert onClose={handleClose} severity="success">
            {userInfo.loggedIn ? "Login Successful!" : "Logout Succesful!"}
          </SnackAlert>
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
        {/* <SnackAlert severity="success">This is a success message!</SnackAlert> */}
      </div>
    </>
  );
};

export default HomePage;
