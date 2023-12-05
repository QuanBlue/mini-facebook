import { CloseIcon, SendMessageIcon } from "@public/svg-icon";
import React from "react";
import Message from "./Message";
import { TypeMessage } from "../../index";

function ExpandChat() {
   let messages: TypeMessage[];

   messages = [
      {
         time: "10:00",
         content: "uk",
         isOwn: false,
      },
      {
         time: "10:01",
         content: "mai vô đi chơi với ny hay ở chỗ ngta",
         isOwn: true,
      },
      {
         time: "10:02",
         content: "Đi chơi",
         isOwn: false,
      },
      {
         time: "10:02",
         content: "Ảnh đặt a",
         isOwn: false,
      },
      {
         time: "10:15",
         content: "uh",
         isOwn: true,
      },
      {
         time: "10:15",
         content: "Dep khong",
         isOwn: true,
      },
      {
         time: "10:01",
         content: "mai vô đi chơi với ny hay ở chỗ ngta",
         isOwn: false,
      },
      {
         time: "10:00",
         content: "uk",
         isOwn: false,
      },
      {
         time: "10:01",
         content: "mai vô đi chơi với ny hay ở chỗ ngta",
         isOwn: true,
      },
      {
         time: "10:02",
         content: "Đi chơi",
         isOwn: false,
      },
      {
         time: "10:02",
         content: "Ảnh đặt a",
         isOwn: false,
      },
      {
         time: "10:15",
         content: "uh",
         isOwn: true,
      },
      {
         time: "10:15",
         content: "Dep khong",
         isOwn: true,
      },
      {
         time: "10:01",
         content: "mai vô đi chơi với ny hay ở chỗ ngta",
         isOwn: false,
      },
   ];

   let element_message = messages.map((message, index) => {
      return (
         <Message
            key={index}
            time={message.time}
            content={message.content}
            isOwn={message.isOwn}
         />
      );
   });

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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhrNSEV0zWuPANmqWiga-uWIMrYWBPeg3FLfo4XJz&s"
                        // alt={`${name}'s avatar`}
                     />
                     {/* status */}
                     <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-[1px] border-solid border-white bg-active-status"></div>
                  </div>

                  {/* name */}
                  <strong>Anh Ngo</strong>
               </button>
            </div>

            {/* close btn */}
            <CloseIcon />
         </div>

         {/* body */}
         <div className="scroll  h-[370px]  px-2">{element_message}</div>

         {/* footer */}
         <div className="px-4 py-3">
            <form className="flex h-[36px] items-center justify-between gap-2">
               <input
                  className="flex-auto rounded-half-circle border-none bg-secondary px-3 focus:outline-none"
                  id="message"
                  type="text"
                  placeholder="Aa"
               />

               <button className="circle-btn bg-transparent p-0 hover:bg-secondary">
                  <SendMessageIcon />
               </button>
            </form>
         </div>
      </div>
   );
}

export default ExpandChat;
