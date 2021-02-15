import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";

// import { useSelector } from "react-redux";

export default function SettingsForms(props) {
  //   const storeState = useSelector((state) => state);
  const handleFormSubmit = () => {
    console.log("clicked");
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Task Settings</FormLabel>
      <FormGroup>
        Edit Task: {props.currentItem}
        <Button variant="contained" onClick={handleFormSubmit}>
          Update
        </Button>
        <Button variant="contained" onClick={handleFormSubmit}>
          Delete
        </Button>
      </FormGroup>
    </FormControl>
  );
}
