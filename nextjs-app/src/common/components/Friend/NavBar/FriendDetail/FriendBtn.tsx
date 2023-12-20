import { useFriend } from "@components/Friend/context";
import React from "react";

interface FriendBtnProps {
   avatar: string;
   name: string;
}

function FriendBtn({ avatar, name }: FriendBtnProps) {
   const friendContext = useFriend();

   return (
      <button className="me-2 flex w-full items-center gap-3 rounded-lg hover:bg-secondary">
         <img src={avatar} height={48} width={48} className="rounded-full" />
         <div className="grid w-full gap-3 text-start">
            <strong>{name}</strong>

            {friendContext.query == "request" && (
               <div className="grid grid-cols-2 gap-2">
                  <button className="rounded-lg bg-primary py-3 font-bold text-white hover:brightness-95">
                     Xác nhận
                  </button>
                  <button className="rounded-lg bg-hover-btn py-3 font-bold hover:brightness-95">
                     Xóa
                  </button>
               </div>
            )}
         </div>
      </button>
   );
}

export default FriendBtn;
