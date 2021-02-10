import { USER_LOGIN, LOADING } from "../actions/UserActions";
const UserReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userInfo: action.userInfo,
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
