import React from "react";
// import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import { useSelector } from "react-redux";
import Profile from "../Profile/Profile";
import { Typography, Grid } from "@material-ui/core";

export default function SettingsForms() {
  const storeState = useSelector((state) => state);
  const [state, setState] = React.useState({
    dark: false,
    sound: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Settings</FormLabel> */}
      <Grid item xs={12} sm={12} style={{ marginBottom: 20 }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
      </Grid>
      {storeState.userInfo.loggedIn ? <Profile /> : <></>}

      <FormGroup>
        <FormControlLabel
          item
          style={{ marginTop: 20 }}
          control={<Switch checked={state.dark} onChange={handleChange} name="dark" />}
          label="Dark Mode"
        />
        {/* <FormControlLabel
          control={<Switch checked={state.sound} onChange={handleChange} name="sound" />}
          label="Sound"
        /> */}
      </FormGroup>
    </FormControl>
  );
}
