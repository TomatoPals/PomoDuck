import { Button, FormControl, TextField } from "@material-ui/core";
// import CreateTask from "./CreateTask";
import React, { useState } from "react";

const TaskBar = () => {
  const [taskListState, setTaskListState] = useState({
    tasks: ""
  });

  const handleTaskListChange = (e) => {
    setTaskListState({
      tasks: e.target.value
    });
    console.log("e: ", taskListState);
  };
  const handleTaskSubmit = () => {
    console.log(taskListState);
    // pass props to create task
  };

  return (
    <>
      {/* onClick to register when the add task button is clicked */}
      <FormControl>
        <TextField
          value={taskListState.tasks}
          onChange={handleTaskListChange}
          type="text"
          placeholder="Enter task"
        />
        <Button variant="contained" onClick={handleTaskSubmit}>
          Add Task
        </Button>
      </FormControl>
      {/* <CreateTask task={taskListState.tasks} /> */}
    </>
  );
};

export default TaskBar;
