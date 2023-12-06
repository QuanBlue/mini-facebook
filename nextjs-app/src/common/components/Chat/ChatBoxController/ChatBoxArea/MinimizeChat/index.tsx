import React, { useState } from "react";
import { CloseIcon } from "@public/svg-icon";
import { TypeFriend, TypeChat, TypeMessage, useChat } from "../../../context";

interface MinimizeChatProps {
   last_msg?: TypeMessage;
   isOnline: boolean;
   username: string;
   avatar: string;
   uid: string;
}

function MinimizeChat({
   last_msg,
   isOnline,
   username,
   avatar,
   uid,
}: MinimizeChatProps) {
   let [isHover, setIsHover] = useState(false);

   const context = useChat();

   function expandChatBox(uid: string) {
      let temp_fr: TypeChat[] = [...context.friendOnChatBox];

      for (let i = 0; i < temp_fr.length; i++) {
         if (temp_fr[i].friend.uid === uid) {
            temp_fr[i].friend.isChatBoxExpand = true;
            context.setFriendOnChatBox(temp_fr);

            break;
         }
      }
   }

   function closeChatBox(uid: string) {
      let temp_fr: TypeFriend[] = [...context.friends];

      for (let i = 0; i < temp_fr.length; i++) {
         if (temp_fr[i].uid === uid) {
            temp_fr[i].isOpenChatBox = false;
            context.setFriends(temp_fr);

            break;
         }
      }
   }

   return (
      <div className="relative">
         <div className="absolute bottom-0 right-0 h-full">
            <div className="relative h-full w-[305px]">
               {/* preview message - on hover */}
               {isHover && (
                  <div>
                     <div className="absolute -top-1 left-0 grid w-[230px] gap-1 rounded-[8px] bg-white p-3 shadow-pre_message">
                        <strong className="">{username}</strong>

                        <div className=" overflow-hidden">
                           <p className="truncate text-gray-txt">
                              {last_msg?.isOwn ? "Bạn: " : ""}
                              {last_msg?.content}
                           </p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>

         {/* button */}
         <div
            className={`relative h-[48px] w-[48px] rounded-full p-0 hover:cursor-pointer ${
               isHover ? "shadow-md" : "border-none"
            }`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
         >
            <img
               src={avatar}
               alt="avatar"
               width={48}
               height={48}
               className="rounded-full"
               onClick={() => expandChatBox(uid)}
            />

            {/* online dot */}
            {isOnline && (
               <div className="absolute bottom-0 right-0  h-3 w-3 rounded-full border-[2px] border-solid border-white bg-active-status"></div>
            )}

            {/* close button */}
            {isHover && (
               <button
                  className="absolute -right-1 -top-1  h-5 w-5 rounded-full  bg-gray p-0 shadow-modal hover:brightness-95"
                  onClick={() => closeChatBox(uid)}
               >
                  <div className="grid items-center justify-center">
                     <CloseIcon height={8} width={8} />
                  </div>
               </button>
            )}
         </div>
      </div>
   );
}

export default MinimizeChat;
