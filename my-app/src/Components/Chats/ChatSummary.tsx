import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import styles from "./ChatSummary.module.sass";

export interface IChatSummaryProps {
  userDisplayName: string;
  messageDateTime: Date;
  showTime: boolean;
  content: string;
}
export const ChatSummary: React.FC<IChatSummaryProps> = (props) => {
  return (
    <ListItem alignItems="flex-start" divider>
      <ListItemAvatar>
        <Avatar alt={props.userDisplayName} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={props.userDisplayName}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={styles.summaryText}
              color="textPrimary"
            >
              {props.showTime
                ? props.messageDateTime.toLocaleTimeString()
                : props.messageDateTime.toLocaleDateString() + " : "}
            </Typography>
            <Typography>{props.content}</Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
