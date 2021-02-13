import { USER_LOGIN, LOADING, LOGGED_IN, USER_LOGOUT } from "../actions/UserActions";

const initialstate = {
  userDetails: {},
  loggedIn: null
};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userDetails: action.payload,
        loading: false
      };
    case USER_LOGOUT:
      return {
        ...state,
        userDetails: {},
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload
      };

    default:
      return state;
  }
};
export default UserReducer;
