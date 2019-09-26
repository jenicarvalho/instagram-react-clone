import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/global";

import UserState from "./context/UserContext/state";

function App() {
  return (
    <UserState>
      <Home />
      <GlobalStyle />
    </UserState>
  );
}

export default App;
