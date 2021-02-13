import { ADD_TASKS, LOADING, CURRENT_TASK } from "../actions/TaskActions";

const initialstate = { tasks: [], currentTask: "" };

const TaskReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload
      };

    default:
      return state;
  }
};
export default TaskReducer;
