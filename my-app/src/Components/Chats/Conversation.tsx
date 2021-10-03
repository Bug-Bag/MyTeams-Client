import { IChatMessage } from "../../Models/ChatMessage.type";
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { List, ListItem } from "@material-ui/core";
import "../../styles/output.css";
import { selectConversation } from "../../Store/chatSlice";
import { useSelector } from "react-redux";
export interface IConversationProps {
   convId: string
}

export const Conversation: React.FC<IConversationProps> = ({
   convId
}: IConversationProps) => {
  const conversation = useSelector(selectConversation).find(conv => conv.convId === convId);
  return <div className="p-12 grid grid-cols-1">{mapToMessages(conversation?.messages)}</div>;
};

const mapToMessages = (messages?: IChatMessage[]) => {
  if (!messages) {
    return <></>;
  }
  return messages.map((m, index) => {
    return (
      <div key={`message-${index}`} style={{justifySelf: m.isSelf? "end" : "start"}}>
          <ChatMessage {...m} author="testAuthor"/>
      </div>
    );
  });
};
