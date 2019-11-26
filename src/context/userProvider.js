import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user", {
      method: "GET"
    })
      .then(res => res.json())
      .then(response => {
        setUserInfo(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      {props.children}
    </UserContext.Provider>
  );
}
