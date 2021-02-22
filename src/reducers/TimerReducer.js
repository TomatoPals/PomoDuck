import { TIME_REMAINING, SHORT_TIME_REMAINING, LONG_TIME_REMAINING } from "../actions/TimerActions";

const initialstate = {
  pomoTimeRemaining: "",
  shortTimeRemaining: "",
  longTimeRemaining: ""
};

const TimerReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TIME_REMAINING:
      return {
        ...state,
        pomoTimeRemaining: action.payload
      };
    case SHORT_TIME_REMAINING:
      return {
        ...state,
        shortTimeRemaining: action.payload
      };
    case LONG_TIME_REMAINING:
      return {
        ...state,
        longTimeRemaining: action.payload
      };
    default:
      return state;
  }
};
export default TimerReducer;
