import React from "react";
import { useChatBox } from "../context";
import ChatBox from "./ChatBox";
import MinimizeChat from "./MinimizeChat";

function ChatBoxArea() {
   const context = useChatBox();

   let minimize_chat_box: React.ReactNode[] = [];
   let expand_chat_box: React.ReactNode[] = [];

   context.message.map((message, index) => {
      if (message) {
         if (message.isExpand) {
            expand_chat_box.push(
               <ChatBox
                  key={index}
                  msg_id={index}
                  messages={message.messages}
                  isOnline={message.isOnline}
                  username={message.name}
               />,
            );
         } else {
            minimize_chat_box.push(
               <MinimizeChat
                  key={index}
                  msg_id={index}
                  last_msg={message.messages.at(-1)}
                  username={message.name}
                  isOnline={message.isOnline}
               />,
            );
         }
      }
   });

   return (
      <div className="flex flex-row-reverse">
         {/* Minimize chat box */}
         <div className="z-50 mx-4 mb-3 flex flex-col justify-end gap-2">
            {minimize_chat_box}
         </div>

         {/* Expand chat box */}
         <div className="flex justify-end gap-2">{expand_chat_box}</div>
      </div>
   );
}

export default ChatBoxArea;
