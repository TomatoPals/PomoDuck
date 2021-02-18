import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import store from "../../store";
import { USER_LOGIN, LOGGED_IN, ACCOUNT_CREATED } from "../../actions/UserActions";
import { LOADING } from "../../actions/TaskActions";
import API from "../../utils/API";
import "./Login.css";
import { useSelector } from "react-redux";
import { ADD_TASKS } from "../../actions/TaskActions";

const Login = (props) => {
  const storeState = useSelector((state) => state);
  const [inputState, setInputState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async () => {
    try {
      store.dispatch({ type: ACCOUNT_CREATED, payload: true });
      store.dispatch({ type: LOADING, payload: false });
      const userInfo = await API.login(inputState.email, inputState.password);
      store.dispatch({ type: USER_LOGIN, payload: userInfo.data });
      store.dispatch({ type: LOGGED_IN, payload: true });
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTasks = async (userId) => {
      try {
        const request = await API.findAllTasks(userId);
        request.data.forEach((item) => {
          store.dispatch({ type: ADD_TASKS, payload: item });
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (storeState.userInfo.loggedIn === true) {
      getTasks(storeState.userInfo.userDetails.id);
    }
  }, [storeState]);

  return (
    <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
      </Grid>
      {/* <p>{state.userInfo.firstName}</p> */}
      <Grid item xs={10} sm={12}>
        <TextField
          value={inputState.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Email address"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={10} sm={12}>
        <TextField
          value={inputState.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item style={{ marginTop: 20 }} xs={8} sm={12}>
        <Button variant="contained" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
