import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import store from "../../store";
import { USER_LOGIN, LOGGED_IN } from "../../actions/UserActions";
import { useSelector } from "react-redux";
import "./CreateUser.css";

const CreateUser = (props) => {
  const [inputFirstNameState, setInputFirstNameState] = useState({
    firstName: ""
  });
  const [inputLastNameState, setInputLastNameState] = useState({
    lastName: ""
  });
  const [inputEmailState, setInputEmailState] = useState({
    email: ""
  });
  const [inputPasswordState, setInputPasswordState] = useState({
    password: ""
  });
  const handleInputFirstNameChange = (event) => {
    setInputFirstNameState({ firstName: event.target.value });
  };
  const handleInputLastNameChange = (event) => {
    setInputLastNameState({ lastName: event.target.value });
  };
  const handleInputEmailChange = (event) => {
    setInputEmailState({ email: event.target.value });
  };
  const handleInputPasswordChange = (event) => {
    setInputPasswordState({ password: event.target.value });
  };
  const handleFormSubmit = async () => {
    try {
      const userInfo = await API.signup(
        inputFirstNameState.firstName,
        inputLastNameState.lastName,
        inputEmailState.email,
        inputPasswordState.password
      );
      store.dispatch({ type: LOGGED_IN, payload: true });
      store.dispatch({ type: USER_LOGIN, payload: userInfo.data });
    } catch (error) {
      console.log(error);
    }
  };

  const storeState = useSelector((state) => state);

  useEffect(() => {
    if (storeState.userInfo.loggedIn) {
      try {
        API.login(inputEmailState.email, inputPasswordState.password);
        props.handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  }, [storeState, inputEmailState.email, inputPasswordState.password, props]);
  return (
    <>
      <h1>New User Signup:</h1>
      <FormControl>
        <TextField
          value={inputFirstNameState.email}
          onChange={handleInputFirstNameChange}
          type="text"
          placeholder="Enter First Name"
        />
        <TextField
          value={inputLastNameState.password}
          onChange={handleInputLastNameChange}
          type="text"
          placeholder="Enter Last Name"
        />
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
    </>
  );
};

export default CreateUser;
