import { Typography } from "@material-ui/core";
import React from "react";

export interface IChatMessageProps {
    content: string;
    time: Date;
    className?: string
}

export const ChatMessage = (props: IChatMessageProps) => {
    return (
        <div className={`max-w-1/2 p1 flex-column items-end ${props.className}`}>
            <Typography variant="h6">
                {props.time.toLocaleDateString()}
            </Typography>
            <Typography>
                {props.content}
            </Typography>

        </div>
    )
}