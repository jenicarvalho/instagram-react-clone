import React, { useReducer, useEffect } from "react";
import axios from "axios";
import UserContext from "./context";
import UserReducer from "./reducer";

const UserState = props => {
  const initialState = {
    userInfo: {}
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.data);
      dispatch({
        type: "UserData",
        payload: response
      });
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user: state }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
