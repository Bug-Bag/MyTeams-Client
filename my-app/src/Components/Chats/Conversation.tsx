import { IChatMessage } from "../../Models/ChatMessage.type";
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { List, ListItem } from "@material-ui/core";
import "../../styles/output.css";
export interface IConversationProps {
  messages: IChatMessage[];
}

export const Conversation: React.FC<IConversationProps> = ({
  messages,
}: IConversationProps) => {
  return <div>{mapToMessages(messages)}</div>;
};

const mapToMessages = (messages: IChatMessage[]) => {
  return messages.map((m, index) => {
    return (
      <div key={`message-${index}`} className="">
        <div className="w-1/2 ">
          <ChatMessage {...m}/>
        </div>
      </div>
    );
  });
};
