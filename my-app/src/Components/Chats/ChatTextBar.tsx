import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SocketConnection from "../../DataLayer/Socket/SocketConnection";
import { selectUserProfile } from "../../Store/loginSlice";
import { Input, TextField } from "@mui/material";

export const ChatTextBar: React.FC<{}> = (): JSX.Element => {
  let [content, setContent] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [msgContent, setMsgContent] = useState("");
  const userProfile = useSelector(selectUserProfile);
  const socket = SocketConnection.getInstance(userProfile?.userId || "");
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
      className="w-full"
    >
      <Toolbar>
        <Input value={msgContent} onChange={(event) => {setMsgContent(event.target.value)}}/>
        <IconButton
          color="inherit"
          aria-label="send message"
          onClick={() => {
            console.log("Clicked send");
            socket.sendChatMessage({
              message: {
                convId: "testConv",
                author: userProfile?.displayName || "unknown",
                isSelf: true,
                content: msgContent,
                time: new Date().toISOString(),
              },
              sender: userProfile!,
            });
          }}
        >
          <SendIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
