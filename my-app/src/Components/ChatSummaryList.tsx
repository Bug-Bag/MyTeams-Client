import React from 'react';
import {ChatSummary} from './ChatSummary';
import styles from './ChatSummaryList.module.sass';
export const ChatSummaryList: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.chatSummaryListContainer}>
      <ChatSummary userDisplayName="me" messageDateTime={new Date()} showTime={true} content="Test Result"/>
    </div>
  );
};
