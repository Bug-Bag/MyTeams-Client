import {
  INewMessageAction,
  newMessageActionType,
} from "../Actions/MessageActions";
import { IChatMessage } from "../Models/ChatMessage.type";
import { newMessage } from "../Store/chatSlice";
import { store } from "../Store/store";

export const receiveNewMessage = (message: IChatMessage): void => {
  const action = newMessage(message);
  store.dispatch(action);
};
