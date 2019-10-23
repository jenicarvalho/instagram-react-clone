import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/global";

import UserProvider from "./context/userProvider";

function App() {
  return (
    <UserProvider>
      <Home />
      <GlobalStyle />
    </UserProvider>
  );
}

export default App;
