import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

export default function SettingsForms() {
  const [state, setState] = React.useState({
    dark: false,
    sound: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Settings</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.dark} onChange={handleChange} name="dark" />}
          label="Dark Mode"
        />
        <FormControlLabel
          control={<Switch checked={state.sound} onChange={handleChange} name="sound" />}
          label="Sound"
        />
      </FormGroup>
    </FormControl>
  );
}
