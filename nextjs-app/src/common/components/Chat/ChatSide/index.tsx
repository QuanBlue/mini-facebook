import React from "react";
import BirthdayAnnounce from "./BirthdayAnnounce";
import BubbleChat from "./BubbleChat";
import { useChat } from "@components/Chat/context";

function ChatSide() {
   const context = useChat();

   let element_buublechat_friend = context.friends.map((friend, index) => {
      return (
         <BubbleChat
            key={index}
            name={friend.name}
            avatar={friend.avatar}
            uid={friend.uid}
            isOnline={friend.isOnline}
         />
      );
   });

   return (
      <div className="o scroll me-2 h-[calc(100vh-56px)] w-chat-side">
         <div className="border-0 border-b border-solid border-hover-btn">
            <BirthdayAnnounce />
         </div>

         {/* Chat */}
         <div className="p-2">
            <p className="pb-2 pt-5 text-regular font-bold text-gray-txt">
               Người liên hệ
            </p>
            {element_buublechat_friend}
         </div>
      </div>
   );
}

export default ChatSide;
