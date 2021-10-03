import * as React from "react";
import { ChatSummaryList } from "../Components/Chats/ChatSummaryList";
import { IChatSummary } from "../Models/ChatSummary.type";
import "../styles/output.css";
import { PrimaryNavBar } from "../Components/NavBar/PrimaryNavBar";
import "./ChatPage.module.scss";
import { Conversation } from "../Components/Chats/Conversation";
import { Button } from "@material-ui/core";
import SocketConnection from "../DataLayer/Socket/SocketConnection";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../Store/loginSlice";

export const ChatPage: React.FC<{}> = () => {
  // Set up socket io connection 
  const userProfile = useSelector(selectUserProfile);
  const socket = SocketConnection.getInstance(userProfile?.userId || "");
  return (
    <div>
      <PrimaryNavBar />
      <div className="flex">
        <div className="md:w-1/3 lg:w-1/4 h-screen overflow-y-auto pt-16 chatSummaryList">
          <ChatSummaryList summaries={getSampleChatSummary()} />
        </div>
        <div className="md:w-2/3 lg:w-3/4 h-screen overflow-y-auto pt-16">
          <Conversation convId="testConv" />
          <Button variant="outlined" onClick={() => {
            console.log("Clicked send");
            socket.sendChatMessage({
              convId: "testConv",
              author: userProfile?.displayName || "unknown",
              isSelf: true,
              content: "Test broadCast",
              time: new Date().toISOString()
            })
          }}>Test Message</Button>
        </div>
      </div>
    </div>
  );
};



export const getSampleChatSummary = () => {
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
  ];
  return testSummaries;
};
