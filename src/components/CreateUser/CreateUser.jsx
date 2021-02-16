import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import store from "../../store";
import { USER_LOGIN, LOGGED_IN, ACCOUNT_CREATED } from "../../actions/UserActions";
import { useSelector } from "react-redux";
import "./CreateUser.css";

const CreateUser = (props) => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async () => {
    try {
      const userInfo = await API.signup(
        inputState.firstName,
        inputState.lastName,
        inputState.email,
        inputState.password
      );
      store.dispatch({ type: ACCOUNT_CREATED, payload: true });
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
        API.login(inputState.email, inputState.password);
        props.handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  }, [storeState, inputState.email, inputState.password, props]);
  return (
    <>
      <h1>New User Signup:</h1>
      <FormControl>
        <TextField
          value={inputState.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="Enter First Name"
        />
        <TextField
          value={inputState.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
        />
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
      </FormControl>
    </>
  );
};

export default CreateUser;
