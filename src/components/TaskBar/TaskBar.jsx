import { Button, FormControl, TextField } from "@material-ui/core";
import CreateTask from "./CreateTask";
import "../../assets/styles/styles.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { UPDATE_TASK, ADD_TASKS_FROM_STORE } from "../../actions/TaskActions";
import API from "../../utils/API";

const TaskBar = (props) => {
  const storeState = useSelector((state) => state);
  const [taskListState, setTaskListState] = useState({
    tasks: ""
  });

  const handleTaskListChange = (e) => {
    setTaskListState({
      ...taskListState,
      tasks: e.target.value
    });
  };

  const sendTasks = async () => {
    try {
      await API.creatTask(storeState.userInfo.userDetails.id, taskListState.tasks, 1);
      return store.dispatch({ type: UPDATE_TASK, payload: [] });
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async (userId) => {
    try {
      const request = await API.findAllTasks(userId);
      request.data.forEach((item) => {
        store.dispatch({ type: ADD_TASKS_FROM_STORE, payload: item });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTaskSubmit = () => {
    if (storeState.userInfo.accountCreated === false) {
      alert("You must create an account or log in to use this feature!");
    } else {
      sendTasks();
      setTaskListState({
        ...taskListState,
        tasks: ""
      });
    }
  };

  useEffect(() => {
    if (storeState.taskList.loading === true) {
      getTasks(storeState.userInfo.userDetails.id);
    }
    if (Object.keys(storeState.userInfo.userDetails).length === 0) {
      return;
    }
  }, [storeState]);

  return (
    <>
      {/* onClick to register when the add task button is clicked */}
      <div className="taskBar">
        <FormControl>
          <TextField
            value={taskListState.tasks}
            onChange={handleTaskListChange}
            type="text"
            placeholder="Enter task"
          />
          <Button variant="contained" onClick={handleTaskSubmit} className="addtaskbtn">
            Add Task
          </Button>
          <CreateTask />
        </FormControl>
      </div>
    </>
  );
};

export default TaskBar;
