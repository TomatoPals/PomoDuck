import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import "./Login.css";

const Login = () => {
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
      const userInfo = await API.userLogin(
        inputEmailState.email,
        inputPasswordState.password
      );
      console.log(userInfo.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FormControl>
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
      </FormControl>
    </div>
  );
};

export default Login;