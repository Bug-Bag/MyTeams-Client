import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import { AuthPageContainer } from "./Pages/AuthPageConainter";
import { ChatPage } from "./Pages/ChatPage";
import { store } from "./Store/store";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { selectIsLoggedin, selectUserProfile } from "./Store/loginSlice";
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import SocketConnection from "./DataLayer/Socket/SocketConnection";
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
    return <AuthPageContainer />;
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
