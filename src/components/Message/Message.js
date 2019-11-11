import React from "react";
import "./Message.css"

function Message(props) {
    return (
        <div className={props.messageStyle}>{props.message}</div>
    )
};

export default Message;