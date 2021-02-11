import { Button, FormControl, TextField } from "@material-ui/core";
import CreateTask from "./CreateTask";
import React, { useState } from "react";
import "../../assets/styles/styles.css";

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
      {/* onClick to register when the add task button is clicked */}
      <div className="taskBar">
        <FormControl>
          <TextField
            // value={taskListState.tasks}
            onChange={handleTaskListChange}
            type="text"
            placeholder="Enter task"
          />
          <Button variant="contained" onClick={handleTaskSubmit} className="addtaskbtn">
            Add Task
          </Button>
          <CreateTask taskList={taskListState.taskList} />
        </FormControl>
      </div>
    </>
  );
};

export default TaskBar;
