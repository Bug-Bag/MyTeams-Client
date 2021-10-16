import { IChatMessage } from "../Models/ChatMessage.type";

export const newMessageActionType = "newMessageActionType";

export interface INewMessageAction {
  type: typeof newMessageActionType;
  payload: IChatMessage;
}
