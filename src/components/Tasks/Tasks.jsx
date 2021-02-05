import React from "react";
import Timer from "../Timer/Timer";
const Tasks = () => {
  return (
    <>
      <article className="topLayer">
        <div className="container">
          <div className="timer">
            <Timer />
          </div>
          <div className="tasks">
            <h2>Tasks</h2>
          </div>
          <div className="taskbox">
            <p>Add Task</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tasks;
