import React from "react";
import ChatBoxProvider from "./context";
import ChatBoxArea from "./ChatBoxArea";

export interface TypeMessage {
   time: string;
   content: string;
   isOwn: boolean;
}

interface TypeChatBox {
   id: string;
   name: string;
   avatar: string;
   isOnline: boolean;
   messages: TypeMessage[];
}

export const message: TypeChatBox[] = [
   {
      id: "1",
      name: "Nguyễn Văn A",
      avatar: "",
      isOnline: true,
      messages: [
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
      ],
   },
   {
      id: "2",
      name: "Nguyễn Văn B",
      avatar: "",
      isOnline: true,
      messages: [
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
      ],
   },
];

function ChatBoxController() {
   return (
      <ChatBoxProvider>
         <ChatBoxArea />
      </ChatBoxProvider>
   );
}

export default ChatBoxController;
