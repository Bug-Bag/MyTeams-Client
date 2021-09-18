import { Divider, List, ListItem, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { IChatSummary } from "../../Models/ChatSummary.type";
import { ChatSummary } from "./ChatSummary";

interface IProps {
  summaries: IChatSummary[];
  className?: string;
}

export const ChatSummaryList: React.FC<IProps> = ({
  summaries,
  className
}): JSX.Element => {
  return (
      <List className={className}>{mapSummariesToListItem(summaries)}</List>
  );
};

const mapSummariesToListItem = (summaries: IChatSummary[]) => {
  return summaries.map((summary, index) => (
      <ChatSummary key={`ChatHistory-${index}`}
        userDisplayName={summary.userDisplayName}
        messageDateTime={summary.messageDateTime}
        showTime={summary.showTime}
        content={summary.message}
      />
  ));
};
