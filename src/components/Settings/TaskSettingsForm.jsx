import React, { useState, useEffect } from "react";
// import FormLabel from "@material-ui/core/FormLabel";
import "../../assets/styles/styles.css";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import store from "../../store";
import TextField from "@material-ui/core/TextField";
import { UPDATE_TASK } from "../../actions/TaskActions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function SettingsForms(props) {
  const storeState = useSelector((state) => state);
  const [estimatedPoms, setEstimatedPoms] = useState({
    poms: ""
  });
  const [inputState, setInputState] = useState({
    taskName: ""
  });
  const handleUpdate = () => {
    const updateTask = [];
    storeState.taskList.tasks.forEach((item) => {
      for (const key of Object.keys(item)) {
        if (props.currentItem[0] === key) {
          if (inputState.taskName.length < 1) {
            alert("Task Name can not be empty");
            //   updateTask.push({ [props.currentItem[0]]: { estmatedPoms: estimatedPoms.poms } });
          }
          updateTask.push({ [inputState.taskName]: { estmatedPoms: estimatedPoms.poms } });
        } else {
          updateTask.push(item);
        }
      }
    });
    props.handleClose();
    store.dispatch({ type: UPDATE_TASK, payload: updateTask });
  };

  const handleDelete = () => {
    const updateTask = [];
    storeState.taskList.tasks.forEach((item) => {
      for (const key of Object.keys(item)) {
        if (props.currentItem[0] === key) {
          break;
        } else {
          updateTask.push(item);
        }
      }
    });
    store.dispatch({ type: UPDATE_TASK, payload: updateTask });
  };

  useEffect(() => {
    setInputState({ taskName: props.currentItem });
    if (estimatedPoms.poms.length === 0) {
      setEstimatedPoms({ poms: props.estimatedPoms.estimatedPoms });
    }
  }, [props.currentItem, props.estimatedPoms.estimatedPoms, estimatedPoms.poms.length]);

  const handleChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handlePomChange = (event) => {
    console.log(event.target.value);
    setEstimatedPoms({ poms: event.target.value });
  };
  return (
    <FormControl component="fieldset">
      <h1 id="TaskSetting">Task Settings</h1>
      {/* <FormLabel component="legend">Task Settings</FormLabel> */}
      <FormGroup>
        <TextField
          label="Task Name"
          value={inputState.taskName}
          onChange={handleChange}
          type="text"
          name="taskName"
          placeholder="Enter Task"
        />
        <Select label="Estimated Poms" value={estimatedPoms.poms} onChange={handlePomChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
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
