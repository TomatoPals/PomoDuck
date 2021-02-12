import { TIME_REMAINING } from "../actions/TimerActions";

const initialstate = { timeRemaining: "" };

const TimerReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TIME_REMAINING:
      return {
        ...state,
        timeRemaining: action.payload
      };
    default:
      return state;
  }
};
export default TimerReducer;
