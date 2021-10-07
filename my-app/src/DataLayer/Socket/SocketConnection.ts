import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { receiveNewMessage } from "../../ActionCreators.ts/ChatActionCreators";
import { IChatMessage } from "../../Models/ChatMessage.type";
import { IChatMessageSocket } from "../DataTransferObject/ChatMessageSocket.type";

const messageKey = "message";
const connectKey = "connect";
export default class SocketConnection {
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  private userId: string;
  private static instance: SocketConnection;

  private constructor(userId: string) {
    this.userId = userId;
    this.socket = io("http://localhost:3111", {
      query: { userId: this.userId },
    });
    this.initListeners();
  }

  private onReceiveMessage(msg: string) {
    console.log("Received ", msg);
    let parsedMsg: IChatMessageSocket = JSON.parse(msg);
    receiveNewMessage(parsedMsg.message);
  }

  private initListeners() {
    this.socket.on(connectKey, () => {
      console.log("Socket Connected");
    });
    this.socket.on(messageKey, (msg) => {
      console.log(msg);
      this.onReceiveMessage(msg);
    });
  }

  public static getInstance(userId: string): SocketConnection {
    if (!SocketConnection.instance) {
      SocketConnection.instance = new SocketConnection(userId);
    }
    return SocketConnection.instance;
  }

  public sendChatMessage(chat: IChatMessageSocket) {
    this.socket.emit(messageKey, JSON.stringify(chat));
  }
}
