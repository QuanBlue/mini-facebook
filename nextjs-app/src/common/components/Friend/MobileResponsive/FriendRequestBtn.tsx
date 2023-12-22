import { TypeFriend } from "@components/Chat/context";
import React from "react";

interface TypeFriendRequestBtn {
   name: string;
   avatar: string;
}

function FriendRequestBtn({ name, avatar }: TypeFriendRequestBtn) {
   return (
      <div className=" flex w-full items-center gap-3 rounded-lg p-2 hover:cursor-pointer hover:bg-secondary    ">
         <img src={avatar} height={90} width={90} className="rounded-full" />
         <div className="grid w-full gap-3 px-3 text-start">
            <span className="truncate">{name}</span>

            <div className="grid grid-cols-2 gap-2">
               <button className="rounded-lg bg-primary py-2 text-tiny font-bold text-white hover:brightness-95">
                  Xác nhận
               </button>
               <button className="rounded-lg bg-hover-btn py-2 text-tiny font-bold hover:brightness-95">
                  Xóa
               </button>
            </div>
         </div>
      </div>
   );
}

export default FriendRequestBtn;
