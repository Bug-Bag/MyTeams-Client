import React from "react";
import { ChatSummary, IChatSummaryProps } from "./ChatSummary";

export default {
  component: ChatSummary,
  title: "ChatSummary",
  argTypes: {
    showTime: {
      description: "If set to true, display last message time instead of date",
      type: "boolean",
      control: { type: "boolean" },
    },
    userDisplayName: {
      description: "The name displayed for the last user",
      type: "text",
      control: { type: "text" },
    },
    messageDateTime: {
      description: "Date time of the last message",
      control: { type: "date" },
    },
    content: {
      description: "Content of the last message posted",
      type: "text",
      control: { type: "text" },
    },
  },
};

export const ChatSummaryStory = (args: any) => (
  <ChatSummary
    {...args}
    messageDateTime={new Date(parseInt(args.messageDateTime))}
  />
);

ChatSummaryStory.args = {
  messageDateTime: "2020-01-01T00:00:00.000",
};
