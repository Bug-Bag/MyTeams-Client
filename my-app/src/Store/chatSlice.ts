import { createSlice } from "@reduxjs/toolkit";
import { IChatMessage } from "../Models/ChatMessage.type";
import { IConversation } from "../Models/Conversation.type";
import { RootState } from "./store";

export interface chatSlice {
    conversations: IConversation[];
}

const getSampleConversations = () => {
    const conversation: IConversation = {
        convId: "testConv",
        messages: getSampleChatMessages(),
        users: []
    }
    const sample = []
    sample.push(conversation);
    return sample;
}

const getSampleChatMessages = () => {
    const testMesssages: IChatMessage[] = [
      {
        convId: "test123",
        author: "testUser1",
        content: "Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message",
        isSelf: true,
        time: new Date().toString(),
      },
      {
        convId: "test123",
        author: "testUser1",
        content: "Test Chat message",
        isSelf: true,
        time: new Date().toString(),
      },
      {
        convId: "test123",
        author: "testUser1",
        content:
          "Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message",
        isSelf: false,
        time: new Date().toString(),
      },
      {
        convId: "test123",
        author: "testUser1",
        content: "Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message.Test Chat message, this is a super long message",
        isSelf: true,
        time: new Date().toString(),
      },
    ];
  
    return testMesssages;
  };

const initState: chatSlice = {
    conversations: getSampleConversations()
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState: initState,
    reducers: {
        newMessage: (state, action) => {
            const message: IChatMessage = action.payload as IChatMessage;
            const convId = message.convId;
            state.conversations.find(conv => conv.convId === convId)?.messages.push(message);
        }
    }
});

export const { newMessage } = chatSlice.actions;
export const selectConversation = (state: RootState) => state.chat.conversations;

export default chatSlice.reducer;
