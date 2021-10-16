import { createSlice } from "@reduxjs/toolkit";
import { IChatMessage } from "../Models/ChatMessage.type";
import { IConversation } from "../Models/Conversation.type";
import { RootState } from "./store";

export interface chatSlice {
  conversations: IConversation[];
}

const initState: chatSlice = {
  conversations: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: initState,
  reducers: {
    newMessage: (state, action) => {
      const message: IChatMessage = action.payload as IChatMessage;
      const convId = message.convId;
      if (!state.conversations.find((conv) => conv.convId === convId)) {
        state.conversations.push({
          convId: convId,
          users: [],
          messages: [],
        });
      }
      state.conversations
        .find((conv) => conv.convId === convId)
        ?.messages.push(message);
    },
  },
});

export const { newMessage } = chatSlice.actions;
export const selectConversation = (state: RootState) =>
  state.chat.conversations;

export default chatSlice.reducer;
