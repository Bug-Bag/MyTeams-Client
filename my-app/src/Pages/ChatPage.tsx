import React from "react";
import { ChatSummaryList } from "../Components/Chats/ChatSummaryList";
import { IChatSummary } from "../Models/ChatSummary.type";
import '../styles/output.css';

export const ChatPage: React.FC<{}> = () => {
    return
    <div>
        <div className="md:w-1/3 lg:w-1/4">
          <ChatSummaryList summaries={getSampleChatSummary()}/>
        </div>
    </div> 
    
}

export const getSampleChatSummary = () => {
    const testSummaries: IChatSummary[] = [
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ...",
        },
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ...",
        },
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ...",
        },
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ...",
        },
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ...",
        },
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ...",
        },
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ...",
        },
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ...",
        },
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ..."
        }, 
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ..."
        },
        {
          userDisplayName: "Test User 1",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message ..."
        }, 
        {
          userDisplayName: "Test User 2",
          messageDateTime: new Date(),
          showTime: true,
          message: "This is a short testing message 2 ..."
        },
      ];
    return testSummaries;      
}   