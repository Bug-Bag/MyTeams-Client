import { Divider, List, ListItem, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { IChatSummary } from "../Models/ChatSummary.type";
import { ChatSummary } from "./ChatSummary";
import styles from "./ChatSummaryList.module.sass";

interface IProps {
  summaries: IChatSummary[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export const ChatSummaryList: React.FC<IProps> = ({
  summaries,
}): JSX.Element => {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <List className={classes.root}>{mapSummariesToListItem(summaries)}</List>
    </Paper>
  );
};

const mapSummariesToListItem = (summaries: IChatSummary[]) => {
  return summaries.map((summary, index) => (
    <div key={`ChatHistory-${index}`}>
      <ChatSummary
        userDisplayName={summary.userDisplayName}
        messageDateTime={summary.messageDateTime}
        showTime={summary.showTime}
        content={summary.message}
      />
      {index < summaries.length - 1 && <Divider />}
    </div>
  ));
};
