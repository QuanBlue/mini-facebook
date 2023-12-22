import React from "react";
import { useFriend } from "@contexts/FriendContext";
import {
   AllFriendIcon,
   FriendRequestIcon,
   FriendSolidIcon,
   RightArrowIcon,
} from "@public/svg-icon";

function DefaultNavBar() {
   const friendContext = useFriend();

   return (
      <div className="h-[calc(100vh-56px)] w-friend-page-nav-bar overflow-hidden bg-white shadow-md">
         <h1 className="mt-3 p-4 text-big">Bạn bè</h1>

         <div className="flex h-full flex-col gap-4 ">
            {/* select buttons */}
            <div className="grid px-2">
               <button
                  className="flex items-center gap-2 rounded-lg p-2 no-underline hover:bg-secondary"
                  onClick={() => friendContext.setQuery("home")}
               >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                     <FriendSolidIcon />
                  </div>
                  <p className="text-regular">Trang chủ</p>
               </button>

               <button
                  className="flex items-center justify-between rounded-lg p-2 no-underline hover:bg-secondary"
                  onClick={() => friendContext.setQuery("request")}
               >
                  <div className="flex items-center gap-2">
                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                        <FriendRequestIcon />
                     </div>
                     <p className="text-regular">Lời mời kết bạn</p>
                  </div>
                  <RightArrowIcon />
               </button>

               <button
                  className="flex items-center justify-between rounded-lg p-2 no-underline hover:bg-secondary"
                  onClick={() => friendContext.setQuery("list")}
               >
                  <div className="flex items-center gap-2">
                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                        <AllFriendIcon />
                     </div>
                     <p className="text-regular">Tất cả bạn bè</p>
                  </div>
                  <RightArrowIcon />
               </button>
            </div>
         </div>
      </div>
   );
}

export default DefaultNavBar;
