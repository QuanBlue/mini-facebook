import React from "react";
import { useChat } from "@contexts/ChatContext";
import Messenger from "./Messenger";

function MessengerBody({}) {
   const context = useChat();

   let chat_history_element = context.chatHistory.map((chat, index) => {
      return (
         <Messenger
            key={index}
            friend={chat.friend}
            last_msg={chat.messages.at(-1)}
         />
      );
   });

   return <div className="grid gap-2">{chat_history_element}</div>;
}

export default MessengerBody;
