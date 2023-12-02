import { CloseIcon, SendMessageIcon } from "@public/svg-icon";
import React from "react";
import Message from "./Message";

export interface TypeMessage {
   time: string;
   content: string;
   isOwn: boolean;
}

function ChatBox() {
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
         <div className="flex items-center justify-between px-2 py-1 shadow-md">
            <div>
               <button className=" flex h-[44px] w-full items-center gap-2 rounded-lg ">
                  {/* avatar */}
                  <div className="relative">
                     <img
                        className="rounded-full object-cover"
                        width={32}
                        height={32}
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/404990361_1663767724033114_7602431839291799030_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGMrB5OH74nw8lqEfqnXlzCxvFFkGpJHcTG8UWQakkdxEpp0pmvj1ow1vELAVtjJVnh68I_AD5nCogzHc7iwRTw&_nc_ohc=t0W2lu_K-KQAX_vLbDq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfC947S0PtcTZ4c-cD8MawPul-0VSk3uudVelR1e3_flEQ&oe=656E15E5"
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
         <div className="px-2 py-3">
            <form className="flex h-[36px] items-center justify-between">
               <input
                  className="h-full flex-auto rounded-half-circle border-none bg-secondary px-3"
                  id="message"
                  type="text"
                  placeholder="Aa"
               />

               <button>
                  <SendMessageIcon />
               </button>
            </form>
         </div>
      </div>
   );
}

export default ChatBox;
