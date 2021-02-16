import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import store from "../../store";
import { USER_LOGIN, LOGGED_IN } from "../../actions/UserActions";
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
    <>
      <h1>Login:</h1>
      <TextField
        value={inputState.email}
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Enter Email address"
      />
      <TextField
        value={inputState.password}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <Button variant="contained" onClick={handleFormSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Login;
