import { USER_LOGIN, LOADING } from "../actions/UserActions";

const UserReducer = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    id: ""
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userInfo: action.payload,
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
