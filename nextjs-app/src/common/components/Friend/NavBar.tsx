import React from "react";
import { useChat } from "@components/Chat/context";
import SearchBar from "@components/SearchBar";
import {
   AllFriendIcon,
   FriendRequestIcon,
   FriendSolidIcon,
} from "@public/svg-icon";

function NavBar() {
   const context = useChat();

   let friends_element = context.friends.map((friend, index) => {
      return (
         <button className="me-2 flex items-center gap-3 rounded-lg">
            <img
               src={friend.avatar}
               height={48}
               width={48}
               className="rounded-full"
            />
            <div className="grid gap-2">
               <strong>{friend.name}</strong>
            </div>
         </button>
      );
   });

   return (
      <div className="w-friend-page-nav-bar h-[calc(100vh-74px)] overflow-hidden bg-white">
         <h1 className="mt-3 p-4 text-big">Bạn bè</h1>

         <div className="grid h-full gap-4 ">
            {/* select buttons */}
            <div className="grid px-2">
               <button className="flex items-center gap-2 rounded-lg hover:bg-gray">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                     <FriendSolidIcon />
                  </div>
                  <p className="text-regular">Trang chủ</p>
               </button>
               <button className="flex items-center gap-2 rounded-lg hover:bg-gray">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                     <FriendRequestIcon />
                  </div>
                  <p className="text-regular">Lời mời kết bạn</p>
               </button>
               <button className="flex items-center gap-2 rounded-lg hover:bg-gray">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                     <AllFriendIcon />
                  </div>
                  <p className="text-regular">Tất cả bạn bè</p>
               </button>
            </div>

            {/* Search Bar */}
            <div className="mx-4 border-0 border-y border-solid border-hover-btn py-4">
               <SearchBar />
            </div>

            {/* friends */}
            <div className="scroll grid h-full gap-3 py-4">
               {friends_element}
            </div>
         </div>
      </div>
   );
}

export default NavBar;
