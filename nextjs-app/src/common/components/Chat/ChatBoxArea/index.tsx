import React from "react";
import { useChat } from "../context";
import ChatBox from "./ChatBox";
import MinimizeChat from "./MinimizeChat";

function ChatBoxArea() {
   const context = useChat();

   let minimize_chat_box: React.ReactNode[] = [];
   let expand_chat_box: React.ReactNode[] = [];

   context.openedChatBox.map((ocb, index) => {
      if (index < context.numberChatBox + context.maxMinimizeChatBox) {
         if (index < context.numberChatBox) {
            expand_chat_box.push(
               <ChatBox
                  key={index}
                  uid={ocb.friend.uid}
                  messages={ocb.messages}
                  avatar={ocb.friend.avatar}
                  isOnline={ocb.friend.isOnline}
                  username={ocb.friend.name}
               />,
            );
         } else {
            minimize_chat_box.push(
               <MinimizeChat
                  key={index}
                  uid={ocb.friend.uid}
                  last_msg={ocb.messages.at(-1)}
                  avatar={ocb.friend.avatar}
                  isOnline={ocb.friend.isOnline}
                  username={ocb.friend.name}
               />,
            );
         }
      }
   });

   return (
      <div className="flex flex-row-reverse">
         {/* Minimize chat box */}
         <div className="z-50 mx-4 mb-3 hidden w-[48px] flex-col justify-end gap-2 tablet:flex">
            {minimize_chat_box}
         </div>

         {/* Expand chat box */}
         <div className="flex justify-end gap-2">{expand_chat_box}</div>
      </div>
   );
}

export default ChatBoxArea;
