import React from "react";
import Default from "./Default";

let friend_request = [
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

function ViewSide() {
   const friend_request_elements = friend_request.map((friend) => {
      return (
         <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <img src={friend.avatar} className="h-calc[w-full] w-full" />

            <div className="grid gap-6 bg-white p-3">
               <strong className="truncate text-regular">{friend.name}</strong>
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
   });

   return (
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
         {/* <h1>{friend_request_elements}</h1> */}
         {friend_request.length === 0 ? (
            <Default />
         ) : (
            <div>
               <div className="flex items-center justify-between">
                  <h1 className="mb-4 mt-5 text-regular-big">
                     Lời mời kết bạn
                  </h1>
                  <button className="h-10  rounded-lg text-primary">
                     Xem tất cả
                  </button>
               </div>
               <div className=" large-desktop:grid-cols-6 grid grid-cols-2 gap-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
                  {friend_request_elements}
               </div>
            </div>
         )}
      </div>
   );
}

export default ViewSide;
