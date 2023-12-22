import React from "react";
import FriendRequestBadge from "./FriendRequestBadge";

export let friend_request = [
   {
      uid: 1,
      name: "Nguyễn Văn Asdsssssssssssssssssssssssssssssssss",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 2,
      name: "Nguyễn Văn B",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 3,
      name: "Nguyễn Văn C",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 4,
      name: "Nguyễn Văn D",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 5,
      name: "Nguyễn Văn E",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 6,
      name: "Nguyễn Văn F",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 7,
      name: "Nguyễn Văn G",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 8,
      name: "Nguyễn Văn H",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 9,
      name: "Nguyễn Văn I",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
   {
      uid: 10,
      name: "Nguyễn Văn J",
      avatar:
         "https://pics.craiyon.com/2023-07-16/5d6d0c94729946e7b3bf2e5b23a80a65.webp",
   },
];

// friend_request = [];

function FriendHome() {
   let friend_request_elements = friend_request.map((friend) => {
      return (
         <FriendRequestBadge
            key={friend.uid}
            name={friend.name}
            avatar={friend.avatar}
         />
      );
   });

   return (
      <div className="p-5">
         {/* friend request */}
         <div>
            <div className="flex items-center justify-between">
               <h1 className="mb-4 mt-5 text-regular-big">Lời mời kết bạn</h1>
               <button className="h-10  rounded-lg text-primary">
                  Xem tất cả
               </button>
            </div>
            <div className=" grid grid-cols-2 gap-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 large-desktop:grid-cols-6">
               {friend_request_elements}
            </div>
         </div>

         {/* all friends */}
         <div>
            <div className="flex items-center justify-between">
               <h1 className="mb-4 mt-5 text-regular-big">Tất cả bạn bè</h1>
               <button className="h-10  rounded-lg text-primary">
                  Xem tất cả
               </button>
            </div>
            <div className=" grid grid-cols-2 gap-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 large-desktop:grid-cols-6">
               {friend_request_elements}
            </div>
         </div>
      </div>
   );
}

export default FriendHome;
