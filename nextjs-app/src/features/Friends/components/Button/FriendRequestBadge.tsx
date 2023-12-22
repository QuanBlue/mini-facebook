import React from "react";

interface FriendRequestBadgeProps {
   avatar: string;
   name: string;
}

function FriendRequestBadge({ avatar, name }: FriendRequestBadgeProps) {
   return (
      <div className="w-full overflow-hidden rounded-lg p-0 shadow-lg hover:shadow-around">
         <img src={avatar} className="h-calc[w-full] w-full" />

         <div className="grid gap-6 bg-white p-3">
            <strong className="truncate text-regular">{name}</strong>
            <div className="grid grid-cols-1 gap-2">
               <button className="rounded-lg bg-primary hover:brightness-95">
                  <strong className="text-white">Xác nhận</strong>
               </button>
               <button className="rounded-lg bg-hover-btn hover:brightness-95">
                  <strong>Xóa</strong>
               </button>
            </div>
         </div>
      </div>
   );
}

export default FriendRequestBadge;
