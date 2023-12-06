import React from "react";
import ChatBoxArea from "./ChatBoxArea";
import ChatProvider from "../context";

function ChatBoxController() {
   return (
      <ChatProvider>
         <ChatBoxArea />
      </ChatProvider>
   );
}

export default ChatBoxController;
