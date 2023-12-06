import React from "react";
import ChatBoxProvider from "./context";
import ChatBoxArea from "./ChatBoxArea";

function ChatBoxController() {
   return (
      <ChatBoxProvider>
         <ChatBoxArea />
      </ChatBoxProvider>
   );
}

export default ChatBoxController;
