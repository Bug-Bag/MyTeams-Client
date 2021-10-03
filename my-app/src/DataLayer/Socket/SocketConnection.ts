import { Store } from "redux";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { receiveNewMessage } from "../../ActionCreators.ts/ChatActionCreators";
import { IChatMessage } from "../../Models/ChatMessage.type";

const messageKey = "message";
const connectKey = "connect";
export default class SocketConnection {
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  private static instance: SocketConnection;

  private constructor() {
    this.socket = io("http://localhost:3111");
    this.initListeners();
  }

  private onReceiveMessage(msg: string) {
    console.log("Received ", msg);
    let parsedMsg: IChatMessage = JSON.parse(msg);
    receiveNewMessage(parsedMsg);
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

  public static getInstance(): SocketConnection {
    if (!SocketConnection.instance) {
      SocketConnection.instance = new SocketConnection();
    }
    return SocketConnection.instance;
  }

  public sendChatMessage(chat: IChatMessage) {
      this.socket.emit(messageKey, JSON.stringify(chat));
  }
}
