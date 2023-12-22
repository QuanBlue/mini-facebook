import React from "react";
import {
   useChat,
   TypeOpenedChatBox,
   TypeFriend,
   TypeMessage,
} from "@contexts/ChatContext";
import { useDropDown } from "@contexts/DropDownContext";

interface MessengerProps {
   friend: TypeFriend;
   last_msg?: TypeMessage;
}

function Messenger({ friend, last_msg }: MessengerProps) {
   const chatContext = useChat();
   const dropDownContext = useDropDown();

   function expandChatBox(uid: string) {
      let ocBox: TypeOpenedChatBox[] = [...chatContext.openedChatBox];

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
      const addFriendToTopOCBox = () => {
         let fr = chatContext.friends.find((friend) => friend.uid === uid);

         if (fr) {
            ocBox.unshift({
               friend: fr,
               messages: [],
            });
         }
      };

      removeExistFriendInOCBox();
      addFriendToTopOCBox();

      chatContext.setOpenedChatBox(ocBox);
      dropDownContext?.setIsOpen(false);

      if (chatContext.numberChatBox < chatContext.maxExpandChatBox) {
         chatContext.setNumberChatBox(chatContext.numberChatBox + 1);
      }
   }

   return (
      <button
         className="flex items-center gap-3 rounded-xl hover:bg-secondary"
         onClick={() => expandChatBox(friend.uid)}
      >
         <div className="relative">
            {/* avatar */}
            <img
               src={friend.avatar}
               height={52}
               width={52}
               className="rounded-full"
            />

            {/* status */}
            {friend.isOnline && (
               <div className="absolute bottom-1 right-0">
                  <div className="h-4 w-4 rounded-full border-2 border-solid border-white bg-green-500"></div>
               </div>
            )}
         </div>

         {/* content */}
         <div className="grid content-normal gap-1">
            <p className="text-left">{friend.name}</p>
            <div className=" overflow-hidden">
               <p className="truncate text-tiny text-gray-txt">
                  {last_msg?.isOwn ? "Bạn: " : ""}
                  {last_msg?.content}
               </p>
            </div>
         </div>
      </button>
   );
}

export default Messenger;
