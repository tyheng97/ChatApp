import React from "react";
import { Input } from "./Input";
import { Messages } from "./Messages";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Bob</span>
        <div className="chatIcons"></div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
