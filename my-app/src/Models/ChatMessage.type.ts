export interface IChatMessage {
    convId: string;
    author: string;
    isSelf: boolean;
    content: string;
    time: Date;
}