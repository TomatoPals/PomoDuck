import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStoreContext } from "../../utils/GlobalState";
import { USER_LOGIN } from "../../actions/UserActions";
import API from "../../utils/API";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStoreContext();

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
      const userInfo = await API.login(inputEmailState.email, inputPasswordState.password);
      dispatch({ type: USER_LOGIN, userInfo: userInfo.data });
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Login:</h1>
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
