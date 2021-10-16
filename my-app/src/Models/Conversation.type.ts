import { IChatMessage } from "./ChatMessage.type";
import { IUserProfile } from "./UserProfile.type";

export interface IConversation {
  convId: string;
  convName?: string;
  messages: IChatMessage[];
  users: IUserProfile[];
}
