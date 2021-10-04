import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import { ChatPage } from "./Pages/ChatPage";
import { store } from "./Store/store";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { selectIsLoggedin, selectUserProfile } from "./Store/loginSlice";
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import SocketConnection from "./DataLayer/Socket/SocketConnection";
import { AuthPage } from "./Pages/AuthPage";
function App() {
  return (
    <Provider store={store}>
      <EntryPoint />
    </Provider>
  );
}
const EntryPoint: React.FC<{}> = () => {
  const selectedProfile = useSelector(selectUserProfile);
  const selectedIsLoggedin = useSelector(selectIsLoggedin);

  if (!selectedProfile || !selectedIsLoggedin) {
    return <AuthPage />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ChatPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
