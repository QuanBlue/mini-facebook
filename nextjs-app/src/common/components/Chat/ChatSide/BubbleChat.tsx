import React from "react";
import { TypeFriend } from "./index";

function BubbleChat({ name, avatar, uid, isOnline }: TypeFriend) {
   return (
      <button className=" flex h-[44px] w-full items-center gap-2 rounded-lg ">
         {/* avatar */}
         <div className="relative">
            <img
               className="rounded-full object-cover"
               width={36}
               height={36}
               src={avatar}
               alt={`${name}'s avatar`}
            />
            {/* status */}
            {isOnline ? (
               <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-[1px] border-solid border-white bg-active-status"></div>
            ) : (
               <></>
            )}
         </div>

         {/* name */}
         <div>{name}</div>
      </button>
   );
}

export default BubbleChat;
