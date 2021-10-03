import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SocketConnection from "../../DataLayer/Socket/SocketConnection";
import { selectUserProfile } from "../../Store/loginSlice";
import { TextField } from "@mui/material";

export const ChatTextBar: React.FC<{}> = (): JSX.Element => {
  let [content, setContent] = useState("");
  let [isLoading, setIsLoading] = useState(false);
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
        <TextField id="standard-basic" label="Standard" variant="standard" />
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
                content: "Test broadCast",
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
