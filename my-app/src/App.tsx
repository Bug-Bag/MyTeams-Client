import React from "react";
import "./App.css";
import { ChatSummaryList } from "./Components/ChatSummaryList";
import { IChatSummary } from "./Models/ChatSummary.type";
import { AuthPageContainer } from "./Pages/AuthPageConainter";
import { SignupPageFC } from "./Pages/SignupPageFC";

function App() {
  return (
    <div>
      <ChatSummaryList summaries={testSummaries} />
    </div>
  );
}

const testSummaries: IChatSummary[] = [
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ...",
  },
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ...",
  },
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ...",
  },
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ...",
  },
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ...",
  },
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ...",
  },
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ...",
  },
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ...",
  },
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ..."
  }, 
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ..."
  },
  {
    userDisplayName: "Test User 1",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message ..."
  }, 
  {
    userDisplayName: "Test User 2",
    messageDateTime: new Date(),
    showTime: true,
    message: "This is a short testing message 2 ..."
  },
];

export default App;
