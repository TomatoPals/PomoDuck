import { Button, FormControl, TextField, Grid } from "@material-ui/core";
import CreateTask from "./CreateTask";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { ADD_TASKS, LOADING } from "../../actions/TaskActions";
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
    store.dispatch({ type: LOADING });
    store.dispatch({ type: ADD_TASKS, payload: taskListState.tasks });
    // pass props to create task
    const temp = taskListState.taskList;
    temp.push(taskListState.tasks);
    setTaskListState({
      ...taskListState,
      taskList: temp,
      tasks: ""
    });
    // have post route
  };

  const tasks = useSelector((state) => state.taskList.tasks);

  useEffect(() => {
    if (tasks.length < 1) {
      return;
    }
    console.log(tasks);
  }, [tasks]);
  // useEffect to render tasks currently in the db?
  return (
    <>
      <Grid container sm={12} alignItems="center" justify="center">
        {/* onClick to register when the add task button is clicked */}
        <Grid item xs={10} sm={10} md={7} className="taskBar">
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
            <CreateTask taskList={taskListState.taskList} />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskBar;
