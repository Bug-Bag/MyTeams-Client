import { IChatMessage } from "../../Models/ChatMessage.type";
import { IUserProfile } from "../../Models/UserProfile.type";

export interface IChatMessageSocket {
    message: IChatMessage,
    sender: IUserProfile
}