import { Button, FormControl, TextField, Grid } from "@material-ui/core";
import CreateTask from "./CreateTask";
import React, { useState } from "react";
import "./TaskBar.css";

const TaskBar = () => {
  const [taskListState, setTaskListState] = useState({
    tasks: "",
    taskList: []
  });

  const handleTaskListChange = (e) => {
    setTaskListState({
      ...taskListState,
      tasks: e.target.value
    });
    console.log("e: ", e.target.value);
  };
  const handleTaskSubmit = (e) => {
    console.log(taskListState);
    // pass props to create task
    const temp = taskListState.taskList;
    temp.push(taskListState.tasks);
    setTaskListState({
      ...taskListState,
      taskList: temp
    });
    // have post route
  };
  // useEffect to render tasks currently in the db?
  return (
    <>
      <Grid container sm={12} alignItems="center" justify="center">
        {/* onClick to register when the add task button is clicked */}
        <Grid item xs={10} sm={10} md={7} className="taskBar">
          <FormControl id="jak">
            <TextField
              // value={taskListState.tasks}
              onChange={handleTaskListChange}
              type="text"
              placeholder="Enter task"
            />
            <Button variant="contained" onClick={handleTaskSubmit}>
              Add Task
            </Button>
            <CreateTask taskList={taskListState.taskList} />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskBar;
