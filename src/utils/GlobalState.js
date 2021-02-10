import React, { createContext, useReducer, useContext } from "react";
import UserReducer from "../reducers/UserReducer";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(UserReducer, {
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
