import React from "react";
import { useChatBox } from "../context";
import ExpandChat from "./ExpandChat";
import MinimizeChat from "./MinimizeChat";

function ChatBoxArea() {
   const context = useChatBox();

   return (
      <div className="flex flex-row-reverse">
         <div className="mb-4 me-2 flex flex-col justify-end gap-2">
            <MinimizeChat />
            <MinimizeChat />
         </div>
         <ExpandChat />
      </div>
   );
}

export default ChatBoxArea;
