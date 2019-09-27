import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./context";
import UserReducer from "./reducer";

const UserState = props => {
  const initialState = {
    userInfo: {}
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const fetchUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    dispatch({
      type: "UserData",
      payload: response.data
    });
  };

  return (
    <UserContext.Provider value={{ user: state, fetchUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
