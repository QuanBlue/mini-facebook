import React from "react";
import BirthdayAnnounce from "./BirthdayAnnounce";
import BubbleChat from "./BubbleChat";

function ChatSide() {
   return (
      <div className="h-[calc(100vh-56px)] w-[248px] overflow-scroll ">
         <div className="border-0 border-b border-solid border-hover-btn">
            <BirthdayAnnounce />
         </div>

         {/* Chat */}
         <div className="p-2">
            <p className="text-gray-txt pb-2 pt-5 text-[16px] font-bold">
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
