import { USER_LOGIN, LOADING } from "../actions/UserActions";

const initialstate = {};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userDetails: action.payload,
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
export default UserReducer;
