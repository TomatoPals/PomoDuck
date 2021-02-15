import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import store from "../../store";
import { UPDATE_POMS } from "../../actions/TaskActions";

export default function SettingsForms(props) {
  const storeState = useSelector((state) => state);
  const handleUpdate = () => {
    const updateTask = [];
    storeState.taskList.tasks.forEach((item) => {
      for (const key of Object.keys(item)) {
        if (props.currentItem[0] === key) {
          updateTask.push({ [key]: { estmatedPoms: 5 } });
        } else {
          updateTask.push(item);
        }
      }
    });
    store.dispatch({ type: UPDATE_POMS, payload: updateTask });
    console.log(storeState.taskList.tasks.taskName);
  };

  const handleDelete = () => {
    console.log("clicked");
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Task Settings</FormLabel>
      <FormGroup>
        Edit Task: {props.currentItem}
        <Grid>
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
