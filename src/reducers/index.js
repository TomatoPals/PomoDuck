import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import TaskReducer from "./TaskReducer";
import TimerReducer from "./TimerReducer";

const rootReducer = combineReducers({ userInfo: UserReducer, taskList: TaskReducer, timeRemaining: TimerReducer });

export default rootReducer;
