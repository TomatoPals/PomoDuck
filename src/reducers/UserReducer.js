import {
  USER_LOGIN,
  LOADING,
  LOGGED_IN,
  USER_LOGOUT,
  UPDATE_PROFILE,
  ACCOUNT_CREATED
} from "../actions/UserActions";

const initialstate = {
  userDetails: {},
  loggedIn: null,
  accountCreated: false,
  updateProfile: null
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
    case ACCOUNT_CREATED:
      return {
        ...state,
        accountCreated: action.payload
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
    case UPDATE_PROFILE:
      return {
        ...state,
        updateProfile: action.payload
      };

    default:
      return state;
  }
};
export default UserReducer;
