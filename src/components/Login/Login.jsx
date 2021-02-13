import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import store from "../../store";
import { USER_LOGIN, LOADING, LOGGED_IN } from "../../actions/UserActions";
import API from "../../utils/API";
import "./Login.css";

const Login = (props) => {
  const [inputEmailState, setInputEmailState] = useState({
    email: ""
  });
  const [inputPasswordState, setInputPasswordState] = useState({
    password: ""
  });
  const handleInputEmailChange = (event) => {
    setInputEmailState({ email: event.target.value });
  };
  const handleInputPasswordChange = (event) => {
    setInputPasswordState({ password: event.target.value });
  };
  const handleFormSubmit = async () => {
    try {
      store.dispatch({ type: LOADING });
      const userInfo = await API.login(inputEmailState.email, inputPasswordState.password);
      store.dispatch({ type: USER_LOGIN, payload: userInfo.data });
      store.dispatch({ type: LOGGED_IN, payload: true });
      props.handleClose();
      // console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login:</h1>
      {/* <p>{state.userInfo.firstName}</p> */}
      <TextField
        value={inputEmailState.email}
        onChange={handleInputEmailChange}
        type="text"
        placeholder="Enter Email address"
      />
      <TextField
        value={inputPasswordState.password}
        onChange={handleInputPasswordChange}
        type="password"
        placeholder="Enter Password"
      />
      <Button variant="contained" onClick={handleFormSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Login;
