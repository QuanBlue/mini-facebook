import React from "react";
import FriendPage from "@features/Friends/containers";
import FriendProvider from "@contexts/FriendContext";

function Friends() {
   return (
      <FriendProvider>
         <FriendPage />
      </FriendProvider>
   );
}

export default Friends;
