import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import App from "../App";
import { useSelector } from "react-redux";
import { ChatSummaryList } from "../Components/Chats/ChatSummaryList";
import { IChatSummary } from "../Models/ChatSummary.type";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../styles/output.css";
import { selectUserProfile } from "../Store/loginSlice";
import { NavBar } from "../Components/NavBar/Navbar";

export const ChatPage: React.FC<{}> = () => {
  return (
    <div>
      {renderTopbar()}
      <div className="md:w-1/3 lg:w-1/4">
        <ChatSummaryList summaries={getSampleChatSummary()} />
      </div>
    </div>
  );
};

const renderTopbar = () => {
  const menuId = 'primary-search-account-menu';
  const userProfile= useSelector(selectUserProfile);
  return (
    <NavBar />
  )
}

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
  ];
  return testSummaries;
};
