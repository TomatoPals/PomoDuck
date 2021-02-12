import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import TaskReducer from "./TaskReducer";

const rootReducer = combineReducers({ userInfo: UserReducer, taskList: TaskReducer });

export default rootReducer;
