import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Button, Typography, Grid } from "@material-ui/core";
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

  const handleCancelSubmit = () => {
    props.handleClose();
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
    <FormControl>
      <Grid container alignItems="flex-start" spacing={2}>
        <Typography variant="h5" gutterBottom>
          New User Signup
        </Typography>

        <Grid item sm={12}>
          <TextField
            value={inputState.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            value={inputState.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
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
        <Grid item sm={12}>
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
        <Grid item style={{ marginTop: 20 }}>
          <Button variant="contained" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
          <Button variant="contained" onClick={handleCancelSubmit}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default CreateUser;
