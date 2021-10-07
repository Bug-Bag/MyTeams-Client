import * as React from "react";
import { ChatSummaryList } from "../Components/Chats/ChatSummaryList";
import "../styles/output.css";
import { PrimaryNavBar } from "../Components/NavBar/PrimaryNavBar";
import "./ChatPage.module.scss";
import { Conversation } from "../Components/Chats/Conversation";
import SocketConnection from "../DataLayer/Socket/SocketConnection";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../Store/loginSlice";
import { Button } from "@mui/material";

export const ChatPage: React.FC<{}> = () => {
  // Set up socket io connection
  return (
    <div>
      <PrimaryNavBar />
      <div className="flex">
        <div className="md:w-1/3 lg:w-1/4 h-screen overflow-y-auto pt-16 pb-16 chatSummaryList">
          <ChatSummaryList />
        </div>
        <div className="md:w-2/3 lg:w-3/4 h-screen overflow-y-auto pt-16 pb-16">
          <Conversation convId="testConv" />
        </div>
      </div>
    </div>
  );
};
