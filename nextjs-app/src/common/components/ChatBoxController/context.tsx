import React, { useContext, createContext, useState, useEffect } from "react";

export interface TypeMessage {
   time: string;
   content: string;
   isOwn: boolean;
}

export interface TypeChatBox {
   id: string;
   name: string;
   avatar: string;
   messages: TypeMessage[];
   isOnline: boolean;
   isExpand: boolean;
}

export const messages: TypeChatBox[] = [
   {
      id: "1",
      name: "Nguyễn Văn A",
      avatar: "",
      isOnline: true,
      isExpand: true,
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
      isExpand: false,
      messages: [
         {
            time: "10:00",
            content: "uk",
            isOwn: false,
         },
         {
            time: "10:01",
            content: "mai vô đi chơi với ny hay ở chỗ ngta",
            isOwn: false,
         },
      ],
   },
   {
      id: "3",
      name: "Nguyễn Văn C",
      avatar: "",
      isOnline: false,
      isExpand: true,
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

interface ChatBoxContextProps {
   message: TypeChatBox[];
   setMessage: React.Dispatch<React.SetStateAction<TypeChatBox[]>>;
}

const ChatBoxContext = createContext<ChatBoxContextProps | null>(null);

export function useChatBox() {
   const context = useContext(ChatBoxContext);
   if (!context) {
      throw new Error("useChatBox must be used within a ChatBoxProvider");
   }
   return context;
}

function ChatBoxProvider({ children }: React.PropsWithChildren<{}>) {
   let [message, setMessage] = useState<TypeChatBox[]>(messages);

   useEffect(() => {
      console.log("context", message);
   });

   const contextValue: ChatBoxContextProps = {
      message,
      setMessage,
   };

   return (
      <ChatBoxContext.Provider value={contextValue}>
         {children}
      </ChatBoxContext.Provider>
   );
}

export default ChatBoxProvider;
