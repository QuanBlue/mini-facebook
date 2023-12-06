import React from "react";
import { useChat } from "../../context";
import ChatBox from "./ChatBox";
import MinimizeChat from "./MinimizeChat";

function ChatBoxArea() {
   const context = useChat();

   let minimize_chat_box: React.ReactNode[] = [];
   let expand_chat_box: React.ReactNode[] = [];

   context.friendOnChatBox.map((f, index) => {
      if (f.friend.isOpenChatBox) {
         if (f.friend.isChatBoxExpand) {
            expand_chat_box.push(
               <ChatBox
                  key={index}
                  uid={f.friend.uid}
                  messages={f.messages}
                  avatar={f.friend.avatar}
                  isOnline={f.friend.isOnline}
                  username={f.friend.name}
               />,
            );
         } else {
            minimize_chat_box.push(
               <MinimizeChat
                  key={index}
                  uid={f.friend.uid}
                  last_msg={f.messages.at(-1)}
                  avatar={f.friend.avatar}
                  isOnline={f.friend.isOnline}
                  username={f.friend.name}
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
