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
  return <div className="grid grid-cols-1">{mapToMessages(messages)}</div>;
};

const mapToMessages = (messages: IChatMessage[]) => {
  return messages.map((m, index) => {
    return (
      <div key={`message-${index}`} style={{justifySelf: m.isSelf? "end" : "start"}}>
          <ChatMessage {...m} author="testAuthor"/>
      </div>
    );
  });
};
