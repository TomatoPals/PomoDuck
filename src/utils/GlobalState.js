import React, { createContext, useReducer, useContext } from "react";
import { USER_LOGIN, LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
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

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      id: ""
    },

    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
