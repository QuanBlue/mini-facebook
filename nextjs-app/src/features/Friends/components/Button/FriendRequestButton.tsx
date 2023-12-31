import { useFriend } from "@contexts/FriendContext";
import React from "react";

interface FriendRequestButtonProps {
   avatar: string;
   name: string;
}

function FriendRequestButton({ avatar, name }: FriendRequestButtonProps) {
   const friendContext = useFriend();

   return (
      <div
         className=" flex w-full items-center gap-3 rounded-lg p-2 hover:cursor-pointer hover:bg-secondary    "
         onClick={() => friendContext.setViewFriend("12345")}
      >
         <img src={avatar} height={48} width={48} className="rounded-full" />
         <div className="grid w-full gap-3 px-3 text-start">
            {/* name */}
            <span className="truncate">{name}</span>

            {/* button groups */}
            <div className="grid grid-cols-2 gap-2">
               <button className="rounded-lg bg-primary py-3 font-bold text-white hover:brightness-95">
                  Xác nhận
               </button>
               <button className="rounded-lg bg-hover-btn py-3 font-bold hover:brightness-95">
                  Xóa
               </button>
            </div>
         </div>
      </div>
   );
}

export default FriendRequestButton;
