import React from "react";
import { TypeFriend, TypeOpenedChatBox, useChat } from "../context";
import { get } from "http";

interface BubbleChatProps {
   name: string;
   avatar: string;
   uid: string;
   isOnline: boolean;
}

function BubbleChat({ name, avatar, uid, isOnline }: BubbleChatProps) {
   const context = useChat();

   function openChatBox(uid: string) {
      let ocBox: TypeOpenedChatBox[] = [...context.openedChatBox];

      // remove friend from opened chat box if it exists
      const removeExistFriend = () => {
         let indexOfElementInOCBox = ocBox.findIndex(
            (ocb) => ocb.friend.uid === uid,
         );

         if (indexOfElementInOCBox !== -1) {
            ocBox.splice(indexOfElementInOCBox, 1);
         }
      };

      // add friend to the top of opened chat box
      const addFriendToTopOCBox = () => {
         let fr = context.friends.find((friend) => friend.uid === uid);

         if (fr) {
            ocBox.unshift({
               friend: fr,
               messages: [],
            });
         }
      };

      removeExistFriend();
      addFriendToTopOCBox();
      context.setOpenedChatBox(ocBox);
   }

   return (
      <button
         className=" flex h-[44px] w-full items-center gap-2 rounded-lg "
         onClick={() => openChatBox(uid)}
      >
         {/* avatar */}
         <div className="relative">
            <img
               className="rounded-full object-cover"
               width={36}
               height={36}
               src={avatar}
               alt={`${name}'s avatar`}
            />
            {/* status */}
            {isOnline ? (
               <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-[1px] border-solid border-white bg-active-status"></div>
            ) : (
               <></>
            )}
         </div>

         {/* name */}
         <div>{name}</div>
      </button>
   );
}

export default BubbleChat;
