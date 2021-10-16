import { Typography } from "@mui/material";
import React from "react";

export interface IChatMessageProps {
  content: string;
  time: string;
  isSelf: boolean;
  className?: string;
  author: string;
}

export const ChatMessage = (props: IChatMessageProps) => {
  return (
    <React.Fragment>
      <div className="flex-row justify-between">
        <Typography>{new Date(props.time).toLocaleTimeString()}</Typography>
        <Typography>{props.author}</Typography>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl max-w-xl">
        <Typography>{props.content}</Typography>
      </div>
    </React.Fragment>
  );
};
