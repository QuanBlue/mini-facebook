import React from "react";
import BirthdayAnnounce from "./BirthdayAnnounce";
import BubbleChat from "./BubbleChat";

function ChatSide() {
   return (
      <div className="w-chat-side h-[calc(100vh-56px)] overflow-scroll ">
         <div className="border-0 border-b border-solid border-hover-btn">
            <BirthdayAnnounce />
         </div>

         {/* Chat */}
         <div className="p-2">
            <p className="text-regular pb-2 pt-5 font-bold text-gray-txt">
               Người liên hệ
            </p>
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
            <BubbleChat />
         </div>
      </div>
   );
}

export default ChatSide;
