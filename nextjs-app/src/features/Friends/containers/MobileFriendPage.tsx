import React, { useEffect } from "react";
import { friend_request } from "../components/InspectView/FriendPageHome";
import FriendRequestButton from "../components/Button/FriendRequestButton";
import { useFriend } from "@contexts/FriendContext";

function MobileFriendPage() {
   const friend_button_elements = friend_request.map((friend) => {
      return (
         <FriendRequestButton
            key={friend.uid}
            name={friend.name}
            avatar={friend.avatar}
         />
      );
   });

   return (
      <div className="mt-4 bg-white p-3">
         <strong className="text-regular-big">Bạn bè</strong>
         <div className="flex justify-between">
            <h1 className="mb-4 mt-5 text-regular">Lời mời kết bạn</h1>
            <button className="h-10  rounded-lg text-primary">
               Xem tất cả
            </button>
         </div>

         {friend_button_elements}
      </div>
   );
}

export default MobileFriendPage;
