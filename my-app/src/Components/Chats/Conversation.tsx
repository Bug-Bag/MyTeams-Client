import { IChatMessage } from "../../Models/ChatMessage.type";
import React from "react";
import { ChatMessage } from "./ChatMessage";
import "../../styles/output.css";
import { selectConversation } from "../../Store/chatSlice";
import { useSelector } from "react-redux";
import { ChatTextBar } from "./ChatTextBar";
export interface IConversationProps {
  convId: string;
}

export const Conversation: React.FC<IConversationProps> = ({
  convId,
}: IConversationProps) => {
  const conversation = useSelector(selectConversation).find(
    (conv) => conv.convId === convId
  );
  return (
    <div className="grid grid-cols-1">
      {mapToMessages(conversation?.messages)}
      <ChatTextBar />
    </div>
  );
};

const mapToMessages = (messages?: IChatMessage[]) => {
  if (!messages) {
    return <></>;
  }
  return messages.map((m, index) => {
    return (
      <div
        key={`message-${index}`}
        style={{ justifySelf: m.isSelf ? "end" : "start" }}
        className="pt-4 pr-12 pb-4"
      >
        <ChatMessage {...m} />
      </div>
    );
  });
};
