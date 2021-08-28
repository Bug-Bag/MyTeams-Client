import React from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import styles from "./ChatSummary.module.sass";

export interface IChatSummaryProps {
  userDisplayName: string;
  messageDateTime: Date;
  showTime: boolean;
  content: string;
}
export const ChatSummary: React.FC<IChatSummaryProps> = (props) => {
  return (
    <ListItem alignItems="flex-start">
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
                {props.showTime ? props.messageDateTime.toLocaleTimeString() : props.messageDateTime.toLocaleDateString() + ":"}
              </Typography>
              {props.content}
            </React.Fragment>
          }
        />
    </ListItem>
  );
};
