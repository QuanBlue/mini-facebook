import React, { useState } from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";
import { CloseIcon } from "@public/svg-icon";
import {
   TypeChatBox,
   TypeMessage,
   useChatBox,
} from "@components/ChatBoxController/context";

interface MinimizeChatProps {
   last_msg?: TypeMessage;
   isOnline: boolean;
   username: string;
   msg_id: number;
}

function MinimizeChat({
   last_msg,
   isOnline,
   username,
   msg_id,
}: MinimizeChatProps) {
   let [isHover, setIsHover] = useState(false);

   const context = useChatBox();

   function expandChatBox(msg_id: number) {
      let temp_msg: TypeChatBox[] = [...context.message];

      temp_msg[msg_id].isExpand = true;
      context.setMessage(temp_msg);
   }

   function closeChatBox(msg_id: number) {
      let temp_msg: TypeChatBox[] = [...context.message];
      delete temp_msg[msg_id];
      context.setMessage(temp_msg);
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
            <Image
               src={avt}
               alt="avatar"
               width={48}
               height={48}
               className="rounded-full"
               onClick={() => expandChatBox(msg_id)}
            />

            {/* online dot */}
            {isOnline && (
               <div className="absolute bottom-0 right-0  h-3 w-3 rounded-full border-[2px] border-solid border-white bg-active-status"></div>
            )}

            {/* close button */}
            {isHover && (
               <button
                  className="absolute -right-1 -top-1  h-5 w-5 rounded-full  bg-gray p-0 shadow-modal hover:brightness-95"
                  onClick={() => closeChatBox(msg_id)}
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
