import { CloseIcon, MinimizeIcon, SendMessageIcon } from "@public/svg-icon";
import React from "react";
import Message from "./Message";
import { TypeMessage, useChat, TypeOpenedChatBox } from "@contexts/ChatContext";
import Tooltip from "@components/Button/Tooltip";

interface ChatBoxProps {
   messages: TypeMessage[];
   isOnline: boolean;
   avatar: string;
   username: string;
   uid: string;
}

function ChatBox({ messages, isOnline, avatar, username, uid }: ChatBoxProps) {
   let element_message = messages.map((message, index) => {
      return (
         <Message
            key={index}
            time={message.time}
            avatar={avatar}
            content={message.content}
            isOwn={message.isOwn}
         />
      );
   });

   const context = useChat();

   function minimizeChatBox(uid: string) {
      let ocBox: TypeOpenedChatBox[] = [...context.openedChatBox];

      // remove friend from opened chat box if it exists
      const removeExistFriendInOCBox = () => {
         let indexOfElementInOCBox = ocBox.findIndex(
            (ocb) => ocb.friend.uid === uid,
         );

         if (indexOfElementInOCBox !== -1) {
            ocBox.splice(indexOfElementInOCBox, 1);
         }
      };

      // add friend to the top of opened chat box
      const addFriendToBottomOCBox = () => {
         let fr = context.friends.find((friend) => friend.uid === uid);

         if (fr) {
            ocBox.push({
               friend: fr,
               messages: [],
            });
         }
      };

      removeExistFriendInOCBox();
      addFriendToBottomOCBox();
      context.setOpenedChatBox(ocBox);
      context.setNumberChatBox(context.numberChatBox - 1);
   }

   function closeChatBox(uid: string) {
      let ocBox: TypeOpenedChatBox[] = [...context.openedChatBox];

      // remove friend from opened chat box if it exists
      let indexOfElementInOCBox = ocBox.findIndex(
         (ocb) => ocb.friend.uid === uid,
      );

      ocBox.splice(indexOfElementInOCBox, 1);

      context.setOpenedChatBox(ocBox);
   }

   return (
      <div className="mx-3 w-chat-box rounded-t-xl bg-white shadow-modal">
         {/* header */}
         <div className="flex items-center justify-between px-3 py-2 shadow-md">
            <div>
               <button className=" flex  w-full items-center gap-2 rounded-lg p-0">
                  {/* avatar */}
                  <div className="relative">
                     <img
                        className="rounded-full object-cover"
                        width={32}
                        height={32}
                        src={avatar}
                     />

                     {/* status */}
                     {isOnline && (
                        <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-[1px] border-solid border-white bg-active-status"></div>
                     )}
                  </div>

                  {/* name */}
                  <div className="grid">
                     <strong>{username}</strong>
                     {isOnline && (
                        <div className="ms-1 text-gray-txt">Đang hoạt động</div>
                     )}
                  </div>
               </button>
            </div>

            {/* group button */}
            <div className="flex">
               {/* minimize btn */}
               <Tooltip describe="Thu nhỏ đoạn chat">
                  <button
                     className="rounded-full hover:bg-secondary"
                     onClick={() => minimizeChatBox(uid)}
                  >
                     <MinimizeIcon fill="#696b6f" />
                  </button>
               </Tooltip>

               {/* close btn */}
               <Tooltip describe="Đóng đoạn chat">
                  <button
                     className="rounded-full hover:bg-secondary"
                     onClick={() => closeChatBox(uid)}
                  >
                     <CloseIcon fill="#bcc0c4" />
                  </button>
               </Tooltip>
            </div>
         </div>

         {/* body */}
         <div className="scroll  h-[370px]  px-2">{element_message}</div>

         {/* footer */}
         <div className=" p-4">
            <div className="relative flex h-max min-h-[36px] items-center justify-between gap-2">
               {/* input text */}
               <div
                  className="scroll grid h-max max-h-[140px] min-h-[24px] w-5/6 grid-cols-1 items-center rounded-[12px]  bg-secondary px-5 py-2 text-regular outline-none hover:cursor-text"
                  contentEditable="true"
                  placeholder="Aa"
               />

               <button className="circle-btn flex-initial bg-transparent p-0  hover:bg-secondary">
                  <SendMessageIcon fill="var(--primary-color)" />
               </button>
            </div>
         </div>
      </div>
   );
}

export default ChatBox;
