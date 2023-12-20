import React from "react";
import { useChat } from "@components/Chat/context";
import { useFriend } from "@components/Friend/context";
import { LeftArrowIcon } from "@public/svg-icon";
import FriendRequestBtn from "./FriendBtn";
import SearchBar from "@components/SearchBar";

function FriendDetail() {
   const chatContext = useChat();
   const friendContext = useFriend();

   let friends_request_element = chatContext.friends.map((friend, index) => {
      return (
         <FriendRequestBtn
            key={index}
            avatar={friend.avatar}
            name={friend.name}
         />
      );
   });

   return (
      <div className="">
         {/* header */}
         <div className="m-5  grid gap-3 border-0 border-b border-solid border-hover-btn pb-3">
            <div className="flex items-center gap-5">
               <button
                  className="rounded-full"
                  onClick={() => friendContext.setQuery("home")}
               >
                  <LeftArrowIcon />
               </button>
               <div className="grid gap-1">
                  <p className="text-tiny text-gray-txt">Bạn bè</p>
                  <h1 className="text-big">
                     {friendContext.query == "request"
                        ? "Lời mời kết bạn"
                        : friendContext.query == "list"
                          ? "Tất cả bạn bè"
                          : ""}
                  </h1>
               </div>
            </div>

            {friendContext.query == "list" ? <SearchBar /> : <></>}
         </div>

         <div className="grid gap-3 px-3">{friends_request_element}</div>
      </div>
   );
}

export default FriendDetail;
