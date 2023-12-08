import React, { useState } from "react";

interface MessageProps {
   time: string;
   avatar: string;
   content: string;
   isOwn: boolean;
}

function Message({ time, avatar, content, isOwn }: MessageProps) {
   let [isHover, setIsHover] = useState(false);

   return (
      <div
         className={`my-3 flex items-center  ${
            isOwn ? "flex-row-reverse" : "flex-row"
         }`}
      >
         <div className="flex max-w-[75%] items-center gap-2">
            {!isOwn && (
               <img
                  className="rounded-full object-cover"
                  width={28}
                  height={28}
                  src={avatar}
               />
            )}

            {/* content */}
            <div
               className={`rounded-3xl px-4 py-2  ${
                  isOwn ? "bg-primary" : "bg-secondary"
               }`}
               onMouseEnter={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}
            >
               <p className={isOwn ? "text-white" : "text-black"}>{content}</p>
            </div>
         </div>

         {/* time */}
         <div
            className={`max-w-screen  rounded-xl bg-black px-3 py-2 ${
               isHover ? "opacity-70 delay-300" : "opacity-0"
            } transition-opacity  duration-150`}
         >
            <p className="text-tiny text-white"> {time}</p>
         </div>
      </div>
   );
}

export default Message;
