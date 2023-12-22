import { useFriend } from "@contexts/FriendContext";
import React from "react";

interface FriendButtonProps {
   avatar: string;
   name: string;
}

function FriendButton({ avatar, name }: FriendButtonProps) {
   const friendContext = useFriend();

   return (
      <div
         className=" flex w-full items-center gap-3 rounded-lg p-2 hover:cursor-pointer hover:bg-secondary    "
         onClick={() => friendContext.setViewFriend("12345")}
      >
         <img src={avatar} height={48} width={48} className="rounded-full" />
         <div className="grid w-full gap-3 px-3 text-start">
            <span className="truncate">{name}</span>
         </div>
      </div>
   );
}

export default FriendButton;
