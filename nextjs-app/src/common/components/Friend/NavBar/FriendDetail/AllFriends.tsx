import React from "react";

interface AllFriendsProps {
   avatar: string;
   name: string;
}

function AllFriends({ avatar, name }: AllFriendsProps) {
   return (
      <button className="me-2 flex w-full items-center gap-3 rounded-lg hover:bg-secondary">
         <img src={avatar} height={48} width={48} className="rounded-full" />
         <div className="grid w-full gap-3 text-start">
            <strong>{name}</strong>
            <div className="grid grid-cols-2 gap-2">
               <button className="rounded-lg bg-primary py-3 font-bold text-white hover:brightness-95">
                  Xác nhận
               </button>
               <button className="rounded-lg bg-hover-btn py-3 font-bold hover:brightness-95">
                  Xóa
               </button>
            </div>
         </div>
      </button>
   );
}

export default AllFriends;
