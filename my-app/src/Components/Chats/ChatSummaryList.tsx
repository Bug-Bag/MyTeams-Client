import React from "react";
import { useSelector } from "react-redux";
import { IChatMessage } from "../../Models/ChatMessage.type";
import { IChatSummary } from "../../Models/ChatSummary.type";
import { IConversation } from "../../Models/Conversation.type";
import { selectConversation } from "../../Store/chatSlice";
import { ChatSummary } from "./ChatSummary";
import dayjs from "dayjs";
import { List } from "@mui/material";
interface IProps {
  className?: string;
}

export const ChatSummaryList: React.FC<IProps> = ({
  className,
}): JSX.Element => {
  const conversations = useSelector(selectConversation);
  const summaries = mapConversationToSummary(conversations);
  return <List className={className}>{mapSummariesToListItem(summaries)}</List>;
};

const mapConversationToSummary = (
  conversations: IConversation[]
): IChatSummary[] => {
  return conversations.map((conversation) => {
    const lastMessage: IChatMessage =
      conversation.messages[conversation.messages.length - 1];
    return {
      conversationId: conversation.convId,
      userDisplayName: lastMessage.author,
      messageDateTime: new Date(lastMessage.time),
      showTime: isShowTime(lastMessage.time),
      message: lastMessage.content,
    };
  });
};

const isShowTime = (lastMessageDate: string): boolean => {
  const date_now = dayjs();
  return date_now.diff(lastMessageDate, "day") >= 1;
};

const mapSummariesToListItem = (summaries: IChatSummary[]) => {
  return summaries.map((summary, index) => (
    <ChatSummary
      key={`ChatHistory-${index}`}
      userDisplayName={summary.userDisplayName}
      messageDateTime={summary.messageDateTime}
      showTime={summary.showTime}
      content={summary.message}
    />
  ));
};
