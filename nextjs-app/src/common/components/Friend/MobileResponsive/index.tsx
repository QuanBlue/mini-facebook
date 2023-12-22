import React from "react";
import { friend_request } from "../ViewSide/FriendHome";
import FriendRequestBtn from "./FriendRequestBtn";

function FriendMobileResponsive() {
   const friend_button_elements = friend_request.map((friend) => {
      return <FriendRequestBtn name={friend.name} avatar={friend.avatar} />;
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

export default FriendMobileResponsive;
