import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import "./Login.css";

const Login = () => {
  const [inputState, setinputState] = useState({});
  const handleInputChange = (event) => {
    const { email, password, value } = event.target;
    setinputState({ [email]: value, [password]: value });
    console.log(value);
  };
  const handleFormSubmit = (event) => {
    console.log(event);
  };
  return (
    <div>
      <FormControl>
        <TextField
          value={inputState.email}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Email address"
        />
        <TextField
          value={inputState.password}
          onChange={handleInputChange}
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
