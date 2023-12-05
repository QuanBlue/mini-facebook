import React, { useContext, createContext } from "react";

interface ChatBoxContextProps {}

const ChatBoxContext = createContext<ChatBoxContextProps | null>(null);

export function useChatBox() {
   const context = useContext(ChatBoxContext);
   if (!context) {
      throw new Error("useChatBox must be used within a ChatBoxProvider");
   }
   return context;
}

function ChatBoxProvider({ children }: React.PropsWithChildren<{}>) {
   const contextValue: ChatBoxContextProps = {};

   return (
      <ChatBoxContext.Provider value={contextValue}>
         {children}
      </ChatBoxContext.Provider>
   );
}

export default ChatBoxProvider;
