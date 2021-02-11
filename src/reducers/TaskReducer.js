import { ADD_TASKS, LOADING } from "../actions/TaskActions";

const initialstate = { tasks: [] };

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

    default:
      return state;
  }
};
export default TaskReducer;
